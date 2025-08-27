---
title: Karbon Connector
sidebar_label: Karbon
description: Karbon is a collaborative practice management platform for accounting firms.
---

![Karbon](./assets/karbon.png#connector-icon)
Karbon is a collaborative practice management platform for accounting firms.

## Connections

### Karbon API Key

## Karbon API Keys

To obtain your **Application ID** and **Access Key** Follow these steps:

1. **Register for a Developer Account:**
   - Register for a free developer account to create an application in Karbon and receive the **Application ID**.
   - Example: `00000000-0000-0000-0000-000000000000`

2. **Find Your API Access Key:**
   - Navigate to **Settings -> Connected Apps -> Manage** on your app in Karbon to find your **Access Key**.
   - Example: `eyJ.....`

Use these credentials in the connection.

| Input          | Comments                                                                                          | Default |
| -------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Application ID | The application ID for the Karbon API. You receive this when you create an application in Karbon. |         |
| Access Key     | Get this by clicking Settings > Connected Apps > Manage on your app.                              |         |

## Triggers

### Entity Trigger

Get notified to this flow when a Karbon entity changes

| Input        | Comments                 | Default |
| ------------ | ------------------------ | ------- |
| Connection   |                          |         |
| Webhook Type | The type of the Webhook. |         |

## Actions

### Create a Contact

Create a new contact

| Input                | Comments                                                                                                                                                    | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                             |         |
| Contact's First Name | The first name of the Contact.                                                                                                                              |         |
| Contact's Last Name  | The last name of the Contact.                                                                                                                               |         |
| Additional Fields    | Additional fields that are not covered by the standard inputs. See https://karbonhq.github.io/karbon-api-reference/#post-/v3/Contacts for more information. |         |
| Debug Request        | Enabling this flag will log out the current request.                                                                                                        | false   |

### Create a Work Item

Create a new Work Item

| Input                    | Comments                                                                                                                                                     | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               |                                                                                                                                                              |         |
| Assignee Email Address   | The email address of the user to whom the Work Item is going to be assigned.                                                                                 |         |
| Title                    | The title of the Work Item.                                                                                                                                  |         |
| Client Key               | A Karbon-generated value used to identify the existing Client (Contact, Organization or ClientGroup) for whom the Work Item is prepared.                     |         |
| Client Type              | The type of the Client.                                                                                                                                      |         |
| Related Client Group Key | A Karbon-generated value used to identify the Client Group of the Client.                                                                                    |         |
| Start Date               | The date and time at which the Work Item should start.                                                                                                       |         |
| Additional Fields        | Additional fields that are not covered by the standard inputs. See https://karbonhq.github.io/karbon-api-reference/#post-/v3/WorkItems for more information. |         |
| Debug Request            | Enabling this flag will log out the current request.                                                                                                         | false   |

### Create User

Create a new user

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| User's Name   | The name of the User.                                |         |
| User's Email  | The email of the User.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete All Webhook Subscriptions

Deletes all Webhook Subscriptions associated with Contact, Work, and Note

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Contact

Get a single Contact by Contact key

| Input                 | Comments                                                         | Default |
| --------------------- | ---------------------------------------------------------------- | ------- |
| Connection            |                                                                  |         |
| Contactkey            | The Contact key. to get the Contact for.                         |         |
| Expand Business Cards | Whether to return the Business Card associated with the Contact. | false   |
| Debug Request         | Enabling this flag will log out the current request.             | false   |

### Get Invoice

Get an invoice by key

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Connection         |                                                      |         |
| Invoice Key        | The Invoice key to get the Invoice for.              |         |
| Include Line Items | Include additional lineitems invoice properties.     | false   |
| Debug Request      | Enabling this flag will log out the current request. | false   |

### Get User

Gets the details of a single User

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| User ID       | The unique ID of the User to get.                    |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Webhook

Get a webhook subscription associated with the Karbon entity specified

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Webhook Type  | The type of the Webhook.                             |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Work Item

Gets a Work Item by Work Item key

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Work Item Key | The Work Item key to get the Work Item for.          |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Contacts

List all Contacts

| Input         | Comments                                                                                                                                                                                         | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                                                                                                                                  |         |
| Filter        | A filter expression to apply to the results. See https://karbonhq.github.io/karbon-api-reference/#get-/v3/Contacts for more information.                                                         |         |
| Top           | The number of records to return at once.                                                                                                                                                         |         |
| Skip          | The number of records to skip when looping over pages of results. If you fetch 100 results, you should skip 0 the first iteration, then 100, 200, 300, etc. until no more records are available. |         |
| Order By      | The property to order the results by.                                                                                                                                                            |         |
| Get All Data  | Turn this on to retrieve all pages of data. $top and $skip will be ignored.                                                                                                                      | false   |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                             | false   |

### List Invoices

List invoices

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Connection         |                                                      |         |
| Include Line Items | Include additional lineitems invoice properties.     | false   |
| Order By           | The property to order the results by.                |         |
| Debug Request      | Enabling this flag will log out the current request. | false   |

### List Users

Get a list of Users

| Input         | Comments                                                                                                                                                                                         | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                                                                                                                                  |         |
| Filter        | A filter expression to apply to the results. See https://karbonhq.github.io/karbon-api-reference/#get-/v3/Users for more information.                                                            |         |
| Top           | The number of records to return at once.                                                                                                                                                         |         |
| Skip          | The number of records to skip when looping over pages of results. If you fetch 100 results, you should skip 0 the first iteration, then 100, 200, 300, etc. until no more records are available. |         |
| Get All Data  | Turn this on to retrieve all pages of data. $top and $skip will be ignored.                                                                                                                      | false   |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                             | false   |

### List Work Items

Receive a list of work items from your tenant

| Input         | Comments                                                                                                                                                                                         | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                                                                                                                                  |         |
| Filter        | A filter expression to apply to the results. See https://karbonhq.github.io/karbon-api-reference/#get-/v3/WorkItems for more information.                                                        |         |
| Top           | The number of records to return at once.                                                                                                                                                         |         |
| Skip          | The number of records to skip when looping over pages of results. If you fetch 100 results, you should skip 0 the first iteration, then 100, 200, 300, etc. until no more records are available. |         |
| Order By      | The property to order the results by.                                                                                                                                                            |         |
| Get All Data  | Turn this on to retrieve all pages of data. $top and $skip will be ignored.                                                                                                                      | false   |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                             | false   |

### Raw Request

Send raw HTTP request to Karbon

| Input                   | Comments                                                                                                                                                                                                                  | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                           |         |
| URL                     | Input the path only (/v3/ClientGroups), The base URL is already included (https://api.karbonhq.com). For example, to connect to https://api.karbonhq.com/v3/ClientGroups, only /v3/ClientGroups is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                   |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                 |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                      |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                          |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                    |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                       |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                               |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                  | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                       |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                      | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                       | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                          | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                       | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                             | false   |

### Update a Contact

Partially update a contact by Contact key

| Input                    | Comments                                             | Default |
| ------------------------ | ---------------------------------------------------- | ------- |
| Connection               |                                                      |         |
| Contactkey               | The Contact key. to update the Contact for.          |         |
| Contact's First Name     | The first name of the Contact.                       |         |
| Contact's Last Name      | The last name of the Contact.                        |         |
| Contact's Middle Name    | The middle name of the Contact.                      |         |
| Contact's Preferred Name | The preferred name of the Contact.                   |         |
| Contact's Salutation     | The title to address the Contact.                    |         |
| Contact's Suffix         | The suffix of the Contact.                           |         |
| Debug Request            | Enabling this flag will log out the current request. | false   |

### Update Work Item

Partially update a Work Item by Work Item key

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Connection    |                                                                         |         |
| Work Item Key | The Work Item key to update a Work Item by.                             |         |
| Description   | A free form text field to add more information about the Work Item      |         |
| Deadline Date | The deadline of the workitem as ISO8601 formated datestamp or timestamp |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
