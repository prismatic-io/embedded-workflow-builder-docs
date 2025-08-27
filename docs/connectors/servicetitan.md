---
title: ServiceTitan Connector
sidebar_label: ServiceTitan
description: ServiceTitan is a comprehensive field service management solution that helps businesses manage their operations, workforce, and customer service.
---

![ServiceTitan](./assets/servicetitan.png#connector-icon)
ServiceTitan is a comprehensive field service management solution that helps businesses manage their operations, workforce, and customer service.

## Connections

### OAuth 2.0

Connect to Service Titan using OAuth 2.0

To authenticate ServiceTitan integrations with OAuth 2.0 requires a developer account and the configuration of an application from the [ServiceTitan Developer Portal](https://developer.servicetitan.io/).

To Create an app:

1. Login to the [Developer Portal](https://developer.servicetitan.io/)
2. Select **My Apps** at the top of the page
3. Select **+ New App**
4. Fill all the required fields and scopes
5. Under **Client Credentials Management**”, select **I, the app developer, will configure the credentials on behalf of each tenant**
6. Click **Create App**

For Existing apps:

1. Login to the [Developer Portal](https://developer.servicetitan.io/)
2. Select **My Apps** at the top of the page
3. Click **Edit** on your application
4. Under **Client Credentials Management**”, select **I, the app developer, will configure the credentials on behalf of each tenant**
5. Click Save

To obtain a Client Secret and Client ID:

If you haven’t done so already, please add the client’s Tenant ID to your application. Once the Tenant Admin has allowed access and connected to your application through their “API Application Access” settings, you can begin the process of obtaining the tenant’s client ID and client secret in your developer portal:

1. Login to the [Developer Portal](https://developer.servicetitan.io/)
2. Select **My Apps** at the top of the page
3. Click **View Connections** for your app
4. Click **Generate** under Client Secret to create a new **Client Secret**
5. Reference the tenant’s **Client ID** on this page as well

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                  | Default |
| --------------- | ----------------------------------------- | ------- |
| Token URL       | The OAuth 2.0 Token URL for the API       |         |
| Client ID       | Client Identifier of your app for the API |         |
| Client Secret   | Client Secret of your app for the API     |         |
| Tenant          | The client tenant.                        |         |
| Application Key | The ID of the payment.                    |         |
| Environment     | The environment to connect to             |         |

## Actions

### Assign Technician to Appointment

Assigns the list of technicians to the appointment

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Connection         |                                                      |         |
| Job Appointment ID | ID of the job appointment                            |         |
| Technician IDs     | Assign these technicians to the appointment.         |         |
| Debug Request      | Enabling this flag will log out the current request. | false   |

### Cancel Job

Cancels a Job

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Job ID        | The job ID.                                          |         |
| Reason ID     | ID of job cancel reason                              |         |
| Job Memo      | Memo of job cancel reason                            |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Appointment

Adds a new appointment to an existing job

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Connection           |                                                      |         |
| Job ID               | The job ID.                                          |         |
| Start                | Start date/time (in UTC)                             |         |
| End                  | End date/time (in UTC)                               |         |
| Arrival Window Start | Arrival window start date/time (in UTC)              |         |
| Arrival Window End   | Arrival window end date/time (in UTC)                |         |
| Technician ID        | The ID of the technician.                            |         |
| Special Instructions | Special instructions associated to the appointment   |         |
| Debug Request        | Enabling this flag will log out the current request. | false   |

### Create Booking by Provider

Create a booking

| Input                   | Comments                                             | Default                                                                                                                                                                   |
| ----------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              |                                                      |                                                                                                                                                                           |
| Booking Provider        | The ID of the booking provider.                      |                                                                                                                                                                           |
| Summary                 | Summary of the booking                               |                                                                                                                                                                           |
| Is First Time Client    | True if first time client                            |                                                                                                                                                                           |
| External ID             | External ID of booking                               |                                                                                                                                                                           |
| Source                  | The source of the booking provider                   |                                                                                                                                                                           |
| Name                    | Booking name                                         |                                                                                                                                                                           |
| Address                 | Address of the booking                               | <code>{<br /> "street": "string",<br /> "unit": "string",<br /> "city": "string",<br /> "state": "string",<br /> "zip": "string",<br /> "country": "string"<br />}</code> |
| Contacts                | Contacts for the booking                             | <code>[<br /> {<br /> "type": "Phone",<br /> "value": "string",<br /> "memo": "string"<br /> }<br />]</code>                                                              |
| Customer Type           | Type of the customer                                 |                                                                                                                                                                           |
| Start                   | Start date/time (in UTC)                             |                                                                                                                                                                           |
| Campaign ID             | ID of the booking's campaign                         |                                                                                                                                                                           |
| Business Unit ID        | ID of the booking's business unit                    |                                                                                                                                                                           |
| Job Type ID             | ID of the booking's job type                         |                                                                                                                                                                           |
| Priority                | Booking priority                                     |                                                                                                                                                                           |
| Uploaded Images         | Uploaded images                                      |                                                                                                                                                                           |
| Send Confirmation Email | True if first time client                            |                                                                                                                                                                           |
| Debug Request           | Enabling this flag will log out the current request. | false                                                                                                                                                                     |

### Create Customer

Create a New Customer

| Input          | Comments                                             | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection     |                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Name           | Name of the customer                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Location       | Locations for the customer                           | <code>[<br /> {<br /> "name": "string",<br /> "address": {<br /> "street": "string",<br /> "unit": "string",<br /> "city": "string",<br /> "state": "string",<br /> "zip": "string",<br /> "country": "string",<br /> "latitude": 0,<br /> "longitude": 0<br /> },<br /> "contacts": [<br /> {<br /> "type": {},<br /> "value": "string",<br /> "memo": "string"<br /> }<br /> ],<br /> "customFields": [<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br /> ],<br /> "tagTypeIds": [<br /> 0<br /> ],<br /> "externalData": {<br /> "applicationGuid": "string",<br /> "externalData": [<br /> {<br /> "key": "string",<br /> "value": "string"<br /> }<br /> ]<br /> }<br /> }<br />]</code> |
| Address        | Bill-To address of the customer record               | <code>{<br /> "street": "string",<br /> "unit": "string",<br /> "city": "string",<br /> "state": "string",<br /> "zip": "string",<br /> "country": "string"<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Customer Type  | Type of the customer                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Do Not Mail    | Customer has been flagged as “do not mail”           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Do Not Service | Customer has been flagged as “do not service”        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Contacts       | Contacts for the booking                             | <code>[<br /> {<br /> "type": "Phone",<br /> "value": "string",<br /> "memo": "string"<br /> }<br />]</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Custom Fields  | Custom fields for the request                        | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Tag Type IDs   | A list of tags ID's                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| External Data  | External data to attach to the request.              | <code>{<br /> "applicationGuid": "string",<br /> "externalData": [<br /> {<br /> "key": "string",<br /> "value": "string"<br /> }<br /> ]<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Debug Request  | Enabling this flag will log out the current request. | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Create Customer Contact

Create a contact for a customer

| Input                       | Comments                                                                                  | Default |
| --------------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                           |         |
| Customer ID                 | The customer ID.                                                                          |         |
| Customer Contact Type       | Type of the customer contact                                                              |         |
| Customer Contact Type Value | The email, phone number, or fax number for the contact                                    |         |
| Memo                        | Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly” |         |
| Debug Request               | Enabling this flag will log out the current request.                                      | false   |

### Create Installed Equipment

Create a new Installed equipment

| Input                           | Comments                                             | Default                                                                                                                            |
| ------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Connection                      |                                                      |                                                                                                                                    |
| Location ID                     | The location id of the installed equipment           |                                                                                                                                    |
| Name                            | The name of the installed equipment                  |                                                                                                                                    |
| Installed On                    | The date the equipment was installed                 |                                                                                                                                    |
| Serial Number                   | Serial number of the installed equipment             |                                                                                                                                    |
| Memo                            | The memo of the installed equipment                  |                                                                                                                                    |
| Manufacturer                    | Manufacturer of the installed equipment              |                                                                                                                                    |
| Model                           | Model of the installed equipment                     |                                                                                                                                    |
| Cost                            | Cost of the installed equipment                      |                                                                                                                                    |
| Manufacturer Warranty Start     | Manufacturer warranty start date                     |                                                                                                                                    |
| Manufacturer Warranty End       | Manufacturer warranty end date                       |                                                                                                                                    |
| Service Provider Warranty Start | Service Provider Warranty Start date                 |                                                                                                                                    |
| Service Provider Warranty End   | Service Provider Warranty End date                   |                                                                                                                                    |
| Custom Fields                   | The custom fields of the installed equipment         | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                   |
| Attachments                     | List of attachments                                  | <code>[<br /> {<br /> "alias": "string",<br /> "fileName": "string",<br /> "type": {},<br /> "url": "string"<br /> }<br />]</code> |
| Tag Type IDs                    | A list of tags ID's                                  |                                                                                                                                    |
| Debug Request                   | Enabling this flag will log out the current request. | false                                                                                                                              |

### Create Installed Equipment Attachment

Create a new installed equipment attachment

| Input           | Comments                                                   | Default |
| --------------- | ---------------------------------------------------------- | ------- |
| Connection      |                                                            |         |
| Attachment File | Reference a file from another action. Must be a file type. |         |
| File Name       | Name of the file                                           |         |
| Debug Request   | Enabling this flag will log out the current request.       | false   |

### Create Invoices

Create adjustment invoice

| Input            | Comments                                             | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection       |                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Adjustment To ID | The ID of the invoice the adjustment is for.         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Number           | The invoice number.                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Type ID          | The ID of the type of the payment.                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Invoiced On      | The date the invoice was invoiced on.                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Subtotal         | The subtotal of the invoice.                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Tax              | The tax of the invoice.                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Summary          | The summary of the invoice.                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Royalty Status   | The royalty status of the invoice.                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Royalty Date     | The royalty date of the invoice.                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Royalty Sent On  | The royalty sent date of the invoice.                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Royalty Memo     | The royalty sent date of the invoice.                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Export ID        | Gets or sets the identifier when exported.           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Review Status    | The review status of the invoice.                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Assigned To ID   | The ID of the user the invoice is assigned to.       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Items            | The items of the invoice.                            | <code>[<br /> {<br /> "skuId": 0,<br /> "skuName": "string",<br /> "technicianId": 0,<br /> "description": "string",<br /> "quantity": 0,<br /> "unitPrice": 0,<br /> "cost": 0,<br /> "isAddOn": true,<br /> "signature": "string",<br /> "technicianAcknowledgementSignature": "string",<br /> "installedOn": "string",<br /> "inventoryWarehouseName": "string",<br /> "skipUpdatingMembershipPrices": true,<br /> "itemGroupName": "string",<br /> "itemGroupRootId": 0,<br /> "inventoryLocationId": 0,<br /> "durationBillingId": 0,<br /> "id": 0<br /> }<br />]</code> |
| Debug Request    | Enabling this flag will log out the current request. | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Create Job

Create a job

| Input                         | Comments                                                                                                                                  | Default                                                                                                                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection                    |                                                                                                                                           |                                                                                                                                                                                                          |
| Customer ID                   | The customer ID.                                                                                                                          |                                                                                                                                                                                                          |
| Location ID                   | The ID of the location.                                                                                                                   |                                                                                                                                                                                                          |
| Business Unit ID              | ID of the job's business unit                                                                                                             |                                                                                                                                                                                                          |
| Job Type ID                   | ID of the job's type                                                                                                                      |                                                                                                                                                                                                          |
| Priority                      | Priority of the job                                                                                                                       |                                                                                                                                                                                                          |
| Campaign ID                   | ID of the job's campaign                                                                                                                  |                                                                                                                                                                                                          |
| Appointments                  | List of appointment information                                                                                                           | <code>[<br /> {<br /> "start": "string",<br /> "end": "string",<br /> "arrivalWindowStart": "string",<br /> "arrivalWindowEnd": "string",<br /> "technicianIds": [<br /> 0<br /> ]<br /> }<br />]</code> |
| Job Generated Lead Source     | Object that contains: JobId: ID of the job from which this job was generated EmployeeId: ID of the office user or technician              | <code>{<br /> "jobId": 0,<br /> "employeeId": 0<br />}</code>                                                                                                                                            |
| Project ID                    | ID of the job's project                                                                                                                   |                                                                                                                                                                                                          |
| Summary                       | Job summary                                                                                                                               |                                                                                                                                                                                                          |
| Custom Fields                 | Custom fields for the job                                                                                                                 | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                                                                                         |
| Tag Type IDs                  | Tag type IDs for the job                                                                                                                  |                                                                                                                                                                                                          |
| External Data                 | External data to attach to the request.                                                                                                   | <code>{<br /> "applicationGuid": "string",<br /> "externalData": [<br /> {<br /> "key": "string",<br /> "value": "string"<br /> }<br /> ]<br />}</code>                                                  |
| Invoice Signature Is Required | Optional model that informs if invoice should requires a signature or not if not informed will follow the rules for location and job type |                                                                                                                                                                                                          |
| Customer PO                   | Customer PO                                                                                                                               |                                                                                                                                                                                                          |
| Debug Request                 | Enabling this flag will log out the current request.                                                                                      | false                                                                                                                                                                                                    |

### Create Location

Creates a new location

| Input         | Comments                                             | Default                                                                                                                                                                   |
| ------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                      |                                                                                                                                                                           |
| Name          | The name of the location                             |                                                                                                                                                                           |
| Address       | The address of the location                          | <code>{<br /> "street": "string",<br /> "unit": "string",<br /> "city": "string",<br /> "state": "string",<br /> "zip": "string",<br /> "country": "string"<br />}</code> |
| Customer ID   | The customer ID.                                     |                                                                                                                                                                           |
| Contacts      | The contacts associated with the location            | <code>[<br /> {<br /> "type": "Phone",<br /> "value": "string",<br /> "memo": "string"<br /> }<br />]</code>                                                              |
| Custom Fields | Custom fields for the request                        | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                                                          |
| Tag Type IDs  | A list of tags ID's                                  |                                                                                                                                                                           |
| External Data | External data to attach to the request.              | <code>{<br /> "applicationGuid": "string",<br /> "externalData": [<br /> {<br /> "key": "string",<br /> "value": "string"<br /> }<br /> ]<br />}</code>                   |
| Debug Request | Enabling this flag will log out the current request. | false                                                                                                                                                                     |

### Create Payment

Create a payment in Service Titan

| Input         | Comments                                             | Default                                                                       |
| ------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| Connection    |                                                      |                                                                               |
| Type ID       | The ID of the type of the payment.                   |                                                                               |
| Splits        | The splits of the payment.                           | <code>[<br /> {<br /> "invoiceId": 0,<br /> "amount": 0<br /> }<br />]</code> |
| Memo          | The memo of the payment.                             |                                                                               |
| Paid On       | The date the payment was paid on.                    |                                                                               |
| Auth Code     | The authorization code for the payment.              |                                                                               |
| Check Number  | The check number for the payment.                    |                                                                               |
| Export ID     | Gets or sets the identifier when exported.           |                                                                               |
| Status        | The status of the payment.                           |                                                                               |
| Debug Request | Enabling this flag will log out the current request. | false                                                                         |

### Create Project

Create a new project

| Input                  | Comments                                                                                            | Default                                                                                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection             |                                                                                                     |                                                                                                                                                         |
| Location ID            | The ID of the location.                                                                             |                                                                                                                                                         |
| Customer ID            | ID of the project's customer                                                                        |                                                                                                                                                         |
| Project Manager IDs    | IDs of the project's managers                                                                       |                                                                                                                                                         |
| Name                   | Name of the project                                                                                 |                                                                                                                                                         |
| Summary                | Summary of the project                                                                              |                                                                                                                                                         |
| Status ID              | Project status id                                                                                   |                                                                                                                                                         |
| Sub Status ID          | Project sub status id                                                                               |                                                                                                                                                         |
| Start                  | Start date of the project                                                                           |                                                                                                                                                         |
| Target Completion Date | Target completion date of the project                                                               |                                                                                                                                                         |
| Actual Completion Date | Actual completion date of the project                                                               |                                                                                                                                                         |
| Custom Fields          | Custom fields for the project                                                                       | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                                        |
| External Data          | Optional model that contains a list of external data items that should be attached to this project. | <code>{<br /> "applicationGuid": "string",<br /> "externalData": [<br /> {<br /> "key": "string",<br /> "value": "string"<br /> }<br /> ]<br />}</code> |
| Debug Request          | Enabling this flag will log out the current request.                                                | false                                                                                                                                                   |

### Create Technician

Create new technician

| Input                          | Comments                                                             | Default                                                                                                                                                                   |
| ------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection                     |                                                                      |                                                                                                                                                                           |
| Name                           | The name of the technician                                           |                                                                                                                                                                           |
| Account Creation Method        | Account creation method                                              |                                                                                                                                                                           |
| Role ID                        | User role Id                                                         |                                                                                                                                                                           |
| Positions                      | List of company positions                                            |                                                                                                                                                                           |
| License Type                   | License type                                                         |                                                                                                                                                                           |
| Phone Number                   | Technician's phone number                                            |                                                                                                                                                                           |
| Email                          | Technician's email address                                           |                                                                                                                                                                           |
| Login Username                 | Technician's username                                                |                                                                                                                                                                           |
| Password                       | Technician's password                                                |                                                                                                                                                                           |
| Business Unit ID               | The ID of the business unit to which the technician will be assigned |                                                                                                                                                                           |
| Azure Active Directory User Id | Azure Active Directory User Id                                       |                                                                                                                                                                           |
| Team                           | Team name                                                            |                                                                                                                                                                           |
| Daily Goal                     | Daily revenue goal                                                   |                                                                                                                                                                           |
| Burden Rate                    | Burden rate (hourly)                                                 |                                                                                                                                                                           |
| Biography                      | Biography of the technician                                          |                                                                                                                                                                           |
| Memo                           | Memo for the technician                                              |                                                                                                                                                                           |
| Job Filter                     | Upcoming appointment visibility                                      |                                                                                                                                                                           |
| Job History Date Filter        | Appointment history visibility                                       |                                                                                                                                                                           |
| Address                        | The home address of the technician                                   | <code>{<br /> "street": "string",<br /> "unit": "string",<br /> "city": "string",<br /> "state": "string",<br /> "zip": "string",<br /> "country": "string"<br />}</code> |
| Custom Fields                  | Custom fields for the technician                                     | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                                                          |
| Debug Request                  | Enabling this flag will log out the current request.                 | false                                                                                                                                                                     |

### Delete Appointment

Delete appointment by ID

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Appointment ID | The ID of the appointment.                           |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Delete Customer Contact

Removes a contact from a customer

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Connection          |                                                      |         |
| Customer ID         | The customer ID.                                     |         |
| Customer Contact ID | The customer contact ID.                             |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Delete Invoice Item

Delete an invoice item

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Invoice ID    | The ID of the invoice.                               |         |
| Item ID       | The ID of the item.                                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Appointment

Retrieve an appointment by ID

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Appointment ID | The ID of the appointment.                           |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Booking by Provider

Retrieve a booking by ID

| Input            | Comments                                             | Default |
| ---------------- | ---------------------------------------------------- | ------- |
| Connection       |                                                      |         |
| Booking Provider | The ID of the booking provider.                      |         |
| Booking ID       | The ID of the booking.                               |         |
| Debug Request    | Enabling this flag will log out the current request. | false   |

### Get Booking by Tenant

Retrieve a booking by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Booking ID    | The ID of the booking.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Customer

Retrieve a Customer by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Customer ID   | The customer ID.                                     |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Installed Equipment

Retrieve a Installed Equipment by ID

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| Connection             |                                                      |         |
| Installed Equipment ID | ID of the installed equipment                        |         |
| Debug Request          | Enabling this flag will log out the current request. | false   |

### Get Job

Retrieve a job by ID

| Input                          | Comments                                                                                                        | Default |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                     |                                                                                                                 |         |
| Job ID                         | The job ID.                                                                                                     |         |
| External Data Application Guid | Format - guid. If this guid is provided, external data corresponding to this application guid will be returned. |         |
| Debug Request                  | Enabling this flag will log out the current request.                                                            | false   |

### Get Location

Retrieve a location by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Location ID   | The ID of the location to retrieve                   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Project

Retrieve a project by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Project ID    | The ID of the project to retrieve                    |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Technician

Retrieve a Technician by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Technician ID | The ID of the Technician to retrieve                 |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Appointment Assignment

Retrieve a list of appointment assignments

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Appointments

Retrieve a list of appointments

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Bookings by Provider

Retrieves a list of bookings

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Booking Provider    | The ID of the booking provider.                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Bookings by Tenant

Retrieves a list of bookings

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Business Units

Gets a list of business units

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Customer Contacts

Gets a list of contacts for the specified customer

| Input                | Comments                                                                        | Default |
| -------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                 |         |
| Customer ID          | The customer ID.                                                                |         |
| Fetch All            | If true, fetch all records, if false, will use the pageSize and page parameters | false   |
| Page                 | The page number to filter by                                                    |         |
| Page Size            | How many records to return (50 by default)                                      |         |
| Include Total        | Include total count of records. If fetchAll is true, this will be ignored.      | false   |
| Modified Before      | Return items modified before certain date/time (in UTC)                         |         |
| Modified On Or After | Return items modified on or after certain date/time (in UTC)                    |         |
| Debug Request        | Enabling this flag will log out the current request.                            | false   |

### List Customers

Retrieve a list of Customers

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Installed Equipment

Retrieve a list of installed equipment

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Installed Equipment Attachments

Retrieve installed Equipment attachments

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Path          | Installed equipment attachment path                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Invoices

Retrieves a list of invoices

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Job Cancel Reasons

Retrieve a list of job cancel reasons

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Jobs

Retrieve a list of jobs

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Locations

Retrieve a list of Locations

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Payments

Retrieve a list of payments

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Projects

Retrieve a list of Projects

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List Technicians

Retrieve a list of technicians

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### List User Roles

Gets a list of user roles

| Input               | Comments                                                                                                               | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                        |         |
| Fetch All           | If true, fetch all records, if false, will use the pageSize and page parameters                                        | false   |
| Page                | The page number to filter by                                                                                           |         |
| Page Size           | How many records to return (50 by default)                                                                             |         |
| Include Total       | Include total count of records. If fetchAll is true, this will be ignored.                                             | false   |
| Sort                | Applies sorting by the specified field:'?sort=+FieldName' for ascending order,'?sort=-FieldName' for descending order. |         |
| Custom Query Params | Custom fields filter                                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                   | false   |

### Raw Request

Send raw HTTP request to ServiceDesk Plus

| Input                   | Comments                                                                                                                                                                                                                                             | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                      |         |
| URL Type                | The URL type to connect to. For example, jpm, crm, accounting, etc.                                                                                                                                                                                  |         |
| URL                     | Input the path only (/jobs), The base URL is already included (https://api.servicetitan.io/jpm/v2/{YOUR-TENANT}/). For example, to connect to https://api.servicetitan.io/jpm/v2/{YOUR-TENANT}/jobs, only /jobs is entered in this field. e.g. /jobs |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                  |         |
| Debug Request           | Enable this to log the request and response                                                                                                                                                                                                          | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                        | false   |

### Unassign Technician to Appointment

Un-assigns the list of technicians from the appointment

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Connection         |                                                      |         |
| Job Appointment ID | ID of the job appointment                            |         |
| Technician IDs     | Unassign these technicians to the appointment.       |         |
| Debug Request      | Enabling this flag will log out the current request. | false   |

### Update Booking

Update a booking

| Input                | Comments                                             | Default                                                                                                                                                                   |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection           |                                                      |                                                                                                                                                                           |
| Booking Provider     | The ID of the booking provider.                      |                                                                                                                                                                           |
| Booking ID           | The ID of the booking.                               |                                                                                                                                                                           |
| Summary              | Summary of the booking                               |                                                                                                                                                                           |
| Is First Time Client | True if first time client                            |                                                                                                                                                                           |
| External ID          | External ID of booking                               |                                                                                                                                                                           |
| Source               | The source of the booking provider                   |                                                                                                                                                                           |
| Name                 | Name of the customer                                 |                                                                                                                                                                           |
| Address              | Address of the booking                               | <code>{<br /> "street": "string",<br /> "unit": "string",<br /> "city": "string",<br /> "state": "string",<br /> "zip": "string",<br /> "country": "string"<br />}</code> |
| Customer Type        | Type of the customer                                 |                                                                                                                                                                           |
| Start                | Start date/time (in UTC)                             |                                                                                                                                                                           |
| Campaign ID          | ID of the booking's campaign                         |                                                                                                                                                                           |
| Business Unit ID     | ID of the booking's business unit                    |                                                                                                                                                                           |
| Job Type ID          | ID of the booking's job type                         |                                                                                                                                                                           |
| Priority             | Booking priority                                     |                                                                                                                                                                           |
| Uploaded Images      | Uploaded images                                      |                                                                                                                                                                           |
| Debug Request        | Enabling this flag will log out the current request. | false                                                                                                                                                                     |

### Update Customer

Update a customer

| Input          | Comments                                             | Default                                                                                                                                                                   |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection     |                                                      |                                                                                                                                                                           |
| Customer ID    | The customer ID.                                     |                                                                                                                                                                           |
| Name           | Name of the customer                                 |                                                                                                                                                                           |
| Customer Type  | Type of the customer                                 |                                                                                                                                                                           |
| Address        | Address of the booking                               | <code>{<br /> "street": "string",<br /> "unit": "string",<br /> "city": "string",<br /> "state": "string",<br /> "zip": "string",<br /> "country": "string"<br />}</code> |
| Custom Fields  | Custom fields for the request                        | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                                                          |
| External Data  | External data to attach to the request.              | <code>{<br /> "applicationGuid": "string",<br /> "externalData": [<br /> {<br /> "key": "string",<br /> "value": "string"<br /> }<br /> ]<br />}</code>                   |
| Do Not Mail    | Customer has been flagged as “do not mail”           |                                                                                                                                                                           |
| Do Not Service | Customer has been flagged as “do not service”        |                                                                                                                                                                           |
| Active         | Whether the customer is active                       |                                                                                                                                                                           |
| Tag Type IDs   | A list of tags ID's                                  |                                                                                                                                                                           |
| Debug Request  | Enabling this flag will log out the current request. | false                                                                                                                                                                     |

### Update Customer Contact

Updates a contact on the customers

| Input                       | Comments                                                                                  | Default |
| --------------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                           |         |
| Customer ID                 | The customer ID.                                                                          |         |
| Customer Contact ID         | The customer contact ID.                                                                  |         |
| Customer Contact Type       | Type of the customer contact                                                              |         |
| Customer Contact Type Value | The email, phone number, or fax number for the contact                                    |         |
| Memo                        | Short description about this contact, for example, “work #” or “Owner’s daughter - Kelly” |         |
| Debug Request               | Enabling this flag will log out the current request.                                      | false   |

### Update Installed Equipment

Update installed equipment by ID

| Input                           | Comments                                             | Default                                                                                                                            |
| ------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Connection                      |                                                      |                                                                                                                                    |
| Installed Equipment ID          | ID of the installed equipment                        |                                                                                                                                    |
| Name                            | The name of the installed equipment                  |                                                                                                                                    |
| Installed On                    | The date the equipment was installed                 |                                                                                                                                    |
| Serial Number                   | Serial number of the installed equipment             |                                                                                                                                    |
| Memo                            | The memo of the installed equipment                  |                                                                                                                                    |
| Manufacturer                    | Manufacturer of the installed equipment              |                                                                                                                                    |
| Model                           | Model of the installed equipment                     |                                                                                                                                    |
| Cost                            | Cost of the installed equipment                      |                                                                                                                                    |
| Manufacturer Warranty Start     | Manufacturer warranty start date                     |                                                                                                                                    |
| Manufacturer Warranty End       | Manufacturer warranty end date                       |                                                                                                                                    |
| Service Provider Warranty Start | Service Provider Warranty Start date                 |                                                                                                                                    |
| Service Provider Warranty End   | Service Provider Warranty End date                   |                                                                                                                                    |
| Custom Fields                   | The custom fields of the installed equipment         | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                   |
| Attachments                     | List of attachments                                  | <code>[<br /> {<br /> "alias": "string",<br /> "fileName": "string",<br /> "type": {},<br /> "url": "string"<br /> }<br />]</code> |
| Tag Type IDs                    | A list of tags ID's                                  |                                                                                                                                    |
| Debug Request                   | Enabling this flag will log out the current request. | false                                                                                                                              |

### Update Invoice

Update Invoice

| Input           | Comments                                             | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection      |                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Invoice ID      | The ID of the invoice.                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Number          | The invoice number.                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Type ID         | The ID of the type of the payment.                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Invoiced On     | The date the invoice was invoiced on.                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Subtotal        | The subtotal of the invoice.                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Tax             | The tax of the invoice.                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Summary         | The summary of the invoice.                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Royalty Status  | The royalty status of the invoice.                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Royalty Date    | The royalty date of the invoice.                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Royalty Sent On | The royalty sent date of the invoice.                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Royalty Memo    | The royalty sent date of the invoice.                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Export ID       | Gets or sets the identifier when exported.           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Review Status   | The review status of the invoice.                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Assigned To ID  | The ID of the user the invoice is assigned to.       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Items           | The items of the invoice.                            | <code>[<br /> {<br /> "skuId": 0,<br /> "skuName": "string",<br /> "technicianId": 0,<br /> "description": "string",<br /> "quantity": 0,<br /> "unitPrice": 0,<br /> "cost": 0,<br /> "isAddOn": true,<br /> "signature": "string",<br /> "technicianAcknowledgementSignature": "string",<br /> "installedOn": "string",<br /> "inventoryWarehouseName": "string",<br /> "skipUpdatingMembershipPrices": true,<br /> "itemGroupName": "string",<br /> "itemGroupRootId": 0,<br /> "inventoryLocationId": 0,<br /> "durationBillingId": 0,<br /> "id": 0<br /> }<br />]</code> |
| Payments        | The payments of the invoice.                         | <code>[<br /> {<br /> "id": 0,<br /> "settlementStatus": {},<br /> "settlementDate": "string"<br /> }<br />]</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Debug Request   | Enabling this flag will log out the current request. | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Update Invoice Custom Fields

Update custom fields for specified Invoices

| Input         | Comments                                             | Default                                                                                                                                                    |
| ------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                      |                                                                                                                                                            |
| Debug Request | Enabling this flag will log out the current request. | false                                                                                                                                                      |
| Operations    | The operations to perform on the invoice.            | <code>[<br /> {<br /> "objectId": 0,<br /> "customFields": [<br /> {<br /> "name": "string",<br /> "value": "string"<br /> }<br /> ]<br /> }<br />]</code> |

### Update Invoice Items

Update invoice items

| Input                                | Comments                                             | Default |
| ------------------------------------ | ---------------------------------------------------- | ------- |
| Connection                           |                                                      |         |
| Invoice ID                           | The ID of the invoice.                               |         |
| Description                          | The description of the SKU.                          |         |
| Quantity                             | The quantity of the SKU.                             |         |
| SKU ID                               | The ID of the SKU.                                   |         |
| SKU Name                             | The name of the SKU.                                 |         |
| Technician ID                        | The ID of the technician.                            |         |
| Unit Price                           | The unit price of the SKU.                           |         |
| Cost                                 | The cost of the SKU.                                 |         |
| Is Add On                            | Is the SKU an add on.                                |         |
| Signature                            | The signature of the SKU.                            |         |
| Technician Acknowledgement Signature | The technician acknowledgement signature of the SKU. |         |
| Installed On                         | The date the SKU was installed on.                   |         |
| Inventory Warehouse Name             | The inventory warehouse name of the SKU.             |         |
| Skip Updating Membership Prices      | Skip updating membership prices.                     |         |
| Item Group Name                      | The item group name of the SKU.                      |         |
| Item Group Root ID                   | The item group root ID of the SKU.                   |         |
| Inventory Location ID                | The inventory location ID of the SKU.                |         |
| Duration Billing ID                  | The duration billing ID of the SKU.                  |         |
| ID                                   | The ID.                                              |         |
| Debug Request                        | Enabling this flag will log out the current request. | false   |

### Update Job

Update a job

| Input                       | Comments                                                                                                                     | Default                                                                                                                                                 |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection                  |                                                                                                                              |                                                                                                                                                         |
| Job ID                      | The job ID.                                                                                                                  |                                                                                                                                                         |
| Customer ID                 | The customer ID.                                                                                                             |                                                                                                                                                         |
| Location ID                 | The ID of the location.                                                                                                      |                                                                                                                                                         |
| Business Unit ID            | ID of the job's business unit                                                                                                |                                                                                                                                                         |
| Job Generated Lead Source   | Object that contains: JobId: ID of the job from which this job was generated EmployeeId: ID of the office user or technician | <code>{<br /> "jobId": 0,<br /> "employeeId": 0<br />}</code>                                                                                           |
| Job Type ID                 | ID of the job's type                                                                                                         |                                                                                                                                                         |
| Priority                    | Priority of the job                                                                                                          |                                                                                                                                                         |
| Campaign ID                 | ID of the job's campaign                                                                                                     |                                                                                                                                                         |
| Summary                     | Job summary                                                                                                                  |                                                                                                                                                         |
| Should Update Invoice Items | If set to true, update the business unit of invoice items on job's invoice                                                   |                                                                                                                                                         |
| Custom Fields               | Custom fields for the job                                                                                                    | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                                        |
| Tag Type IDs                | Tag type IDs for the job                                                                                                     |                                                                                                                                                         |
| External Data               | External data to attach to the request.                                                                                      | <code>{<br /> "applicationGuid": "string",<br /> "externalData": [<br /> {<br /> "key": "string",<br /> "value": "string"<br /> }<br /> ]<br />}</code> |
| Customer PO                 | Customer PO                                                                                                                  |                                                                                                                                                         |
| Debug Request               | Enabling this flag will log out the current request.                                                                         | false                                                                                                                                                   |

### Update Location

Update a location

| Input         | Comments                                             | Default                                                                                                                                                                   |
| ------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                      |                                                                                                                                                                           |
| Location ID   | The ID of the location.                              |                                                                                                                                                                           |
| Customer ID   | The customer ID associated with the location         |                                                                                                                                                                           |
| Name          | The name of the location                             |                                                                                                                                                                           |
| Address       | The address of the location                          | <code>{<br /> "street": "string",<br /> "unit": "string",<br /> "city": "string",<br /> "state": "string",<br /> "zip": "string",<br /> "country": "string"<br />}</code> |
| Active        | If false, the location will be marked as inactive    |                                                                                                                                                                           |
| Tax Zone ID   | ID of the location tax zone                          |                                                                                                                                                                           |
| Custom Fields | Custom fields for the request                        | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                                                          |
| Tag Type IDs  | A list of tags ID's                                  |                                                                                                                                                                           |
| External Data | External data to attach to the request.              | <code>{<br /> "applicationGuid": "string",<br /> "externalData": [<br /> {<br /> "key": "string",<br /> "value": "string"<br /> }<br /> ]<br />}</code>                   |
| Debug Request | Enabling this flag will log out the current request. | false                                                                                                                                                                     |

### Update Payment

Update a specified payment

| Input         | Comments                                             | Default                                                                       |
| ------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| Connection    |                                                      |                                                                               |
| Payment ID    | The ID of the payment.                               |                                                                               |
| Type ID       | The ID of the type of the payment.                   |                                                                               |
| Splits        | The splits of the payment.                           | <code>[<br /> {<br /> "invoiceId": 0,<br /> "amount": 0<br /> }<br />]</code> |
| Memo          | The memo of the payment.                             |                                                                               |
| Paid On       | The date the payment was paid on.                    |                                                                               |
| Auth Code     | The authorization code for the payment.              |                                                                               |
| Check Number  | The check number for the payment.                    |                                                                               |
| Export ID     | Gets or sets the identifier when exported.           |                                                                               |
| Status        | The status of the payment.                           |                                                                               |
| Debug Request | Enabling this flag will log out the current request. | false                                                                         |

### Update Payment Custom Fields

Update custom fields for specified payments

| Input         | Comments                                             | Default                                                                                                                                                    |
| ------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                      |                                                                                                                                                            |
| Debug Request | Enabling this flag will log out the current request. | false                                                                                                                                                      |
| Operations    | The operations to perform on the payment.            | <code>[<br /> {<br /> "objectId": 0,<br /> "customFields": [<br /> {<br /> "name": "string",<br /> "value": "string"<br /> }<br /> ]<br /> }<br />]</code> |

### Update Project

Update a project

| Input                  | Comments                                                                                            | Default                                                                                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection             |                                                                                                     |                                                                                                                                                         |
| Project ID             | ID of the project to update                                                                         |                                                                                                                                                         |
| Project Manager IDs    | IDs of the project's managers                                                                       |                                                                                                                                                         |
| Jobs IDs               | IDs of the project's jobs                                                                           |                                                                                                                                                         |
| Name                   | Name of the project                                                                                 |                                                                                                                                                         |
| Summary                | Summary of the project                                                                              |                                                                                                                                                         |
| Status ID              | Project status id                                                                                   |                                                                                                                                                         |
| Sub Status ID          | Project sub status id                                                                               |                                                                                                                                                         |
| Start                  | Start date of the project                                                                           |                                                                                                                                                         |
| Target Completion Date | Target completion date of the project                                                               |                                                                                                                                                         |
| Actual Completion Date | Actual completion date of the project                                                               |                                                                                                                                                         |
| Custom Fields          | Custom fields for the project                                                                       | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                                        |
| External Data          | Optional model that contains a list of external data items that should be attached to this project. | <code>{<br /> "applicationGuid": "string",<br /> "externalData": [<br /> {<br /> "key": "string",<br /> "value": "string"<br /> }<br /> ]<br />}</code> |
| Debug Request          | Enabling this flag will log out the current request.                                                | false                                                                                                                                                   |

### Update Technician

Update a technician

| Input                          | Comments                                                             | Default                                                                                                                                                                   |
| ------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection                     |                                                                      |                                                                                                                                                                           |
| Technician ID                  | The ID of the technician to update                                   |                                                                                                                                                                           |
| Name                           | The name of the technician                                           |                                                                                                                                                                           |
| Phone Number                   | Technician's phone number                                            |                                                                                                                                                                           |
| Email                          | Technician's email address                                           |                                                                                                                                                                           |
| Login Username                 | Technician's username                                                |                                                                                                                                                                           |
| Business Unit ID               | The ID of the business unit to which the technician will be assigned |                                                                                                                                                                           |
| Role ID                        | User role Id                                                         |                                                                                                                                                                           |
| Positions                      | List of company positions                                            |                                                                                                                                                                           |
| Azure Active Directory User Id | Azure Active Directory User Id                                       |                                                                                                                                                                           |
| License Type                   | License type                                                         |                                                                                                                                                                           |
| Team                           | Team name                                                            |                                                                                                                                                                           |
| Daily Goal                     | Daily revenue goal                                                   |                                                                                                                                                                           |
| Burden Rate                    | Burden rate (hourly)                                                 |                                                                                                                                                                           |
| Biography                      | Biography of the technician                                          |                                                                                                                                                                           |
| Memo                           | Memo for the technician                                              |                                                                                                                                                                           |
| Job Filter                     | Upcoming appointment visibility                                      |                                                                                                                                                                           |
| Job History Date Filter        | Appointment history visibility                                       |                                                                                                                                                                           |
| Address                        | The home address of the technician                                   | <code>{<br /> "street": "string",<br /> "unit": "string",<br /> "city": "string",<br /> "state": "string",<br /> "zip": "string",<br /> "country": "string"<br />}</code> |
| Custom Fields                  | Custom fields for the technician                                     | <code>[<br /> {<br /> "typeId": 0,<br /> "value": "string"<br /> }<br />]</code>                                                                                          |
| Debug Request                  | Enabling this flag will log out the current request.                 | false                                                                                                                                                                     |
