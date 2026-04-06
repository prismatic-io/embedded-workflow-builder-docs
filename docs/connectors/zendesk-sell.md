---
title: Zendesk Sell Connector
sidebar_label: Zendesk Sell
description: Manage leads, contacts, and deals in Zendesk Sell.
---

![Zendesk Sell](./assets/zendesk-sell.png#connector-icon)
[Zendesk Sell](https://www.zendesk.com/sell) is a sales force automation program.

## Connections

### OAuth 2.0 {#oauth}

Authenticate using OAuth 2.0.

The Zendesk Sell component ensures secure request authentication using OAuth 2.0. To seamlessly configure an application within Zendesk Sell, simply adhere to the instructions outlined in this comprehensive guide.

1. **Access Your Zendesk Sell Dashboard:** To begin, log in to your Zendesk Sell Dashboard. You can reach it via a URL similar to this: `https://{YOUR SUBDOMAIN HERE}.zendesk.com/sales/dashboards/main`.
1. **Navigate to Settings:** On the left-hand side toolbar, locate and click on the "Settings" option.
1. **Explore Integrations > OAuth:** Within the Settings section, delve into the "Integrations" category and then proceed to "OAuth."
1. **Access OAuth2 Settings:** Under the OAuth section, find the "OAuth2 Settings" and access it.
1. **Developer App Setup:** Within the OAuth2 Settings, locate the "Developer apps" section.
1. **Add a Developer App:** To initiate the setup process, click on the "Add Developer App" button.
1. **Provide App Details:** Complete the required fields for the app setup. Be sure to specify the Redirect URL as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
1. **Retrieve Client ID and Secret:** Upon successful app addition, you can obtain the Client ID and Secret by selecting the "details" button associated with your app.

Now that you've acquired the necessary credentials, the next step involves establishing a new Zendesk Sell connection, utilizing the obtained credentials. This integration will seamlessly link your systems, facilitating efficient data exchange and management.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                      | Default                                  |
| ------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Authorize URL | The OAuth 2.0 authorization endpoint for Zendesk Sell.                                        | https://api.getbase.com/oauth2/authorize |
| Token URL     | The OAuth 2.0 token endpoint for Zendesk Sell.                                                | https://api.getbase.com/oauth2/token     |
| Scopes        | The space-delimited OAuth 2.0 scopes to request. Defaults to read, write, and profile access. | read write profile                       |
| Client ID     | The client ID obtained from the Zendesk Sell OAuth application settings.                      |                                          |
| Client Secret | The client secret obtained from the Zendesk Sell OAuth application settings.                  |                                          |

## Actions

### Create Contact {#createcontact}

Creates a new contact. A contact may represent a single individual or an organization.

| Input                  | Comments                                                                                                                                                                                                              | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Zendesk Sell connection to use.                                                                                                                                                                                   |         |
| Name                   | Required only if the contact is an organization. is_organization is set to true.                                                                                                                                      |         |
| First Name             | The field will be set only if the contact is an individual. is_organization is set to false.                                                                                                                          |         |
| Last Name              | Required only if the contact is an individual. is_organization is set to false.                                                                                                                                       |         |
| Owner ID               | Defaults to the unique identifier of the user who created the contact.                                                                                                                                                |         |
| Is Organization        | This value can be set only during creation and cannot be changed later.                                                                                                                                               |         |
| Contact ID             | The field will be set only if the contact is an individual. is_organization is set to false.                                                                                                                          |         |
| Parent Organization ID | The unique identifier of a contact that should be set as parent for this organization. Referenced contact also has to be an organization. It can be set only for organization contacts (is_organization set to true). |         |
| Customer Status        | Customer status of the contact. Possible values: none, current, past.                                                                                                                                                 |         |
| Prospect Status        | Prospect status of the contact. Possible values: none, current, lost.                                                                                                                                                 |         |
| Title                  | Job title of the contact.                                                                                                                                                                                             |         |
| Description            | Additional notes or details about the contact.                                                                                                                                                                        |         |
| Industry               | Industry classification of the contact.                                                                                                                                                                               |         |
| Website                | Website URL of the contact.                                                                                                                                                                                           |         |
| Email                  | Email address of the contact.                                                                                                                                                                                         |         |
| Phone                  | Phone number of the contact.                                                                                                                                                                                          |         |
| Mobile                 | Mobile phone number of the contact.                                                                                                                                                                                   |         |
| Fax                    | Fax number of the contact.                                                                                                                                                                                            |         |
| Twitter                | Twitter username of the contact.                                                                                                                                                                                      |         |
| Facebook               | Facebook username of the contact.                                                                                                                                                                                     |         |
| LinkedIn               | LinkedIn username of the contact.                                                                                                                                                                                     |         |
| Skype                  | Skype username of the contact.                                                                                                                                                                                        |         |
| Address                | Physical address of the contact.                                                                                                                                                                                      |         |
| Billing Address        | Billing address of the contact. null if contact is neither a customer nor a prospect (see customer_status and prospect_status fields for details).                                                                    |         |
| Shipping Address       | Shipping address of the contact. null if contact is neither a customer nor a prospect (see customer_status and prospect_status fields for details).                                                                   |         |
| Tag                    | Tags to apply to the contact. You need to supply the entire set.                                                                                                                                                      |         |
| Custom Field           | Filterable custom field key-value pairs.                                                                                                                                                                              |         |

### Create Deal {#createdeal}

Creates a new deal.

| Input                     | Comments                                                                                | Default |
| ------------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection                | The Zendesk Sell connection to use.                                                     |         |
| Name                      | Name of the deal.                                                                       |         |
| Contact ID                | The unique identifier of the primary contact associated with the deal.                  |         |
| Value                     | Value of the deal in decimal format (e.g., two decimal places).                         |         |
| Currency                  | The currency code for the deal value. If omitted, the account default currency is used. |         |
| Owner ID                  | Defaults to the unique identifier of the user that the deal is created by.              |         |
| Hot                       | Indicator of whether or not the deal is hot.                                            |         |
| Stage ID                  | If omitted, the deal will be placed in the first stage of the default pipeline.         |         |
| Last Stage Change At      | Date and time when the deal was moved into the current stage in UTC (ISO8601 format).   |         |
| Added At                  | Date and time that the deal was started in UTC (ISO8601 format).                        |         |
| Source ID                 | ID of the deal Source.                                                                  |         |
| Loss Reason ID            | ID of the Loss Reason.                                                                  |         |
| Unqualified Reason ID     | ID of the Unqualify Reason.                                                             |         |
| Estimated Close Date      | Expected date when the deal will close.                                                 |         |
| Customized Win Likelihood | User-provided win likelihood with value range 0-100.                                    |         |
| Tag                       | Tags to apply. You need to supply the entire set.                                       |         |
| Custom Field              | Filterable custom field key-value pairs.                                                |         |

### Create Lead {#createlead}

Creates a new lead.

| Input                 | Comments                                                                             | Default |
| --------------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection            | The Zendesk Sell connection to use.                                                  |         |
| Last Name             | Required only if a lead is an individual. company_name is empty.                     |         |
| Organization Name     | Required only if a lead is an organization. last_name is empty.                      |         |
| First Name            | First name of the contact.                                                           |         |
| Owner ID              | Defaults to user's unique identifier of the user who created the lead is created by. |         |
| Status                | Status of the lead.                                                                  |         |
| Source ID             | The unique identifier of the lead source.                                            |         |
| Unqualified Reason ID | The unique identifier of the reason the lead was unqualified.                        |         |
| Title                 | Job title or role.                                                                   |         |
| Description           | Description or notes.                                                                |         |
| Industry              | Industry classification.                                                             |         |
| Website               | Website URL.                                                                         |         |
| Email                 | Email address.                                                                       |         |
| Phone                 | Phone number.                                                                        |         |
| Mobile                | Mobile phone number.                                                                 |         |
| Fax                   | Fax number.                                                                          |         |
| Twitter               | Twitter username.                                                                    |         |
| Facebook              | Facebook username.                                                                   |         |
| LinkedIn              | LinkedIn username.                                                                   |         |
| Skype                 | Skype username.                                                                      |         |
| Address               | The physical address of the lead in JSON format.                                     |         |
| Tag                   | Tags to apply. You need to supply the entire set.                                    |         |
| Custom Field          | Filterable custom field key-value pairs.                                             |         |

### Create Note {#createnote}

Creates a new note and associates it with one resource.

| Input         | Comments                                                                            | Default |
| ------------- | ----------------------------------------------------------------------------------- | ------- |
| Connection    | The Zendesk Sell connection to use.                                                 |         |
| Resource Type | The type of resource the note is attached to. Possible values: lead, contact, deal. |         |
| Resource ID   | The unique identifier of the resource the note is attached to.                      |         |
| Content       | The body text of the note.                                                          |         |
| Is Important  | When true, marks the note as important.                                             |         |
| Tag           | Tags to apply to the note.                                                          |         |
| Type          | The type of note. Possible values: regular or other types supported by the API.     |         |

### Create Order {#createorder}

Creates a new order.

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                       |         |
| Deal ID    | The unique identifier of the deal.                        |         |
| Discount   | Overall discount on the order in percents. Defaults to 0. |         |

### Create Task {#createtask}

Creates a new task.

| Input         | Comments                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection    | The Zendesk Sell connection to use.                                                |         |
| Content       | The description or body of the task.                                               |         |
| Due Date      | The date and time when the task is due. Format: ISO8601 UTC.                       |         |
| Owner ID      | Defaults to the unique identifier of the user who created the task.                |         |
| Resource Type | The type of resource the task is related to. Possible values: lead, contact, deal. |         |
| Resource ID   | The unique identifier of the resource the task is related to.                      |         |
| Completed     | When true, marks the task as completed.                                            |         |
| Remind At     | The date and time to send a reminder for this task. Format: ISO8601 UTC.           |         |

### Delete Contact {#deletecontact}

Deletes an existing contact. This operation cannot be undone.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.             |         |
| Contact ID | The unique identifier of the contact to delete. |         |

### Delete Deal {#deletedeal}

Deletes an existing deal and removes all associated contacts from the deal in a single call.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.          |         |
| Deal ID    | The unique identifier of the deal to delete. |         |

### Delete Lead {#deletelead}

Deletes an existing lead.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.          |         |
| Lead ID    | The unique identifier of the lead to delete. |         |

### Delete Note {#deletenote}

Deletes an existing note. This operation cannot be undone.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use. |         |
| Note ID    | Unique identifier of the note.      |         |

### Delete Order {#deleteorder}

Deletes an existing order and removes all associated line items in a single call. This operation cannot be undone.

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.           |         |
| Order ID   | The unique identifier of the order to delete. |         |

### Delete Task {#deletetask}

Deletes an existing task. This operation cannot be undone.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.          |         |
| Task ID    | The unique identifier of the task to delete. |         |

### Get Contact {#getcontact}

Returns a single contact available to the user, according to the unique contact ID provided.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.               |         |
| Contact ID | The unique identifier of the contact to retrieve. |         |

### Get Contacts Stream {#getcontactsstream}

Reads the stream of contact events.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                        |         |
| Position   | The client position in the Firehose stream. Possible values: top, tail, or a position string from a previous API response. |         |
| Limit      | The maximum number of events to return in a single response.                                                               |         |

### Get Custom Fields Stream {#getcustomfieldsstream}

Reads the stream of custom field events.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                        |         |
| Position   | The client position in the Firehose stream. Possible values: top, tail, or a position string from a previous API response. |         |
| Limit      | Limits maximum number of events in single response.                                                                        |         |

### Get Deal {#getdeal}

Returns a single deal available to the user.

| Input      | Comments                                                                                                 | Default |
| ---------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                      |         |
| Deal ID    | The unique identifier of the deal to retrieve.                                                           |         |
| Includes   | Comma-separated list of one or more resources related to the deal. Possible values: associated_contacts. |         |

### Get Deals Stream {#getdealsstream}

Reads the stream of deal events.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                        |         |
| Position   | The client position in the Firehose stream. Possible values: top, tail, or a position string from a previous API response. |         |
| Limit      | The maximum number of events to return in a single response.                                                               |         |

### Get Lead {#getlead}

Returns a single lead available to the user.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.            |         |
| Lead ID    | The unique identifier of the lead to retrieve. |         |

### Get Leads Stream {#getleadsstream}

Reads the stream of lead events.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                        |         |
| Position   | The client position in the Firehose stream. Possible values: top, tail, or a position string from a previous API response. |         |
| Limit      | The maximum number of events to return in a single response.                                                               |         |

### Get Note {#getnote}

Returns a single note available to the user, according to the unique note ID provided.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use. |         |
| Note ID    | The unique identifier of the note.  |         |

### Get Notes Stream {#getnotesstream}

Reads the stream of note events.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                        |         |
| Position   | The client position in the Firehose stream. Possible values: top, tail, or a position string from a previous API response. |         |
| Limit      | The maximum number of events to return in a single response.                                                               |         |

### Get Order {#getorder}

Returns a single order available to the user.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.             |         |
| Order ID   | The unique identifier of the order to retrieve. |         |

### Get Orders Stream {#getordersstream}

Reads the stream of order events.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                        |         |
| Position   | The client position in the Firehose stream. Possible values: top, tail, or a position string from a previous API response. |         |
| Limit      | The maximum number of events to return in a single response.                                                               |         |

### Get Products Stream {#getproductsstream}

Reads the stream of product events.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                        |         |
| Position   | The client position in the Firehose stream. Possible values: top, tail, or a position string from a previous API response. |         |
| Limit      | Limits maximum number of events in single response.                                                                        |         |

### Get Stages Stream {#getstagesstream}

Reads the stream of stage events.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                        |         |
| Position   | The client position in the Firehose stream. Possible values: top, tail, or a position string from a previous API response. |         |
| Limit      | The maximum number of events to return in a single response.                                                               |         |

### Get Stream {#getstream}

Provides a stream of changes to Zendesk Sell data.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                        |         |
| Resource   | The resource to get the stream for.                                                                                        |         |
| Position   | The client position in the Firehose stream. Possible values: top, tail, or a position string from a previous API response. |         |
| Limit      | Limits maximum number of events in single response.                                                                        |         |

### Get Task {#gettask}

Returns a single task available to the user according to the unique task ID provided.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.            |         |
| Task ID    | The unique identifier of the task to retrieve. |         |

### Get Tasks Stream {#gettasksstream}

Reads the stream of task events.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                        |         |
| Position   | The client position in the Firehose stream. Possible values: top, tail, or a position string from a previous API response. |         |
| Limit      | The maximum number of events to return in a single response.                                                               |         |

### List Account Details {#listaccountdetails}

Retrieves account details.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use. |         |

### List Contacts {#listcontacts}

Returns all contacts available to the user according to the parameters provided.

| Input                 | Comments                                                                                                                        | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Zendesk Sell connection to use.                                                                                             |         |
| Page                  | The page number to start from. Page numbering is 1-based and omitting the page parameter will return the first page.            |         |
| Per Page              | The number of records to return per page. Default limit is 25 and maximum number that can be returned is 100.                   |         |
| Sort By               | A field to sort by. You can sort by filterable custom fields as well.                                                           |         |
| IDs                   | Comma-separated list of the IDs for the contacts you want to be returned in your request.                                       |         |
| Creator ID            | User ID. Returns all contacts created by that user.                                                                             |         |
| Owner ID              | User ID. Returns all contacts owned by that user.                                                                               |         |
| Is Organization       | Indicates whether or not this contact refers to an organization or an individual.                                               |         |
| Contact ID            | The unique identifier of the organization that the contact belongs to.                                                          |         |
| Name                  | Name of the contact.                                                                                                            |         |
| First Name            | First name of the contact.                                                                                                      |         |
| Last Name             | Last name of the contact.                                                                                                       |         |
| Email                 | Email address of the contact.                                                                                                   |         |
| Phone                 | Phone number of the contact.                                                                                                    |         |
| Mobile                | Mobile phone number of the contact.                                                                                             |         |
| Customer Status       | Customer status of the contact. Possible values: none, current, past                                                            |         |
| Prospect Status       | Prospect status of the contact. Possible values: none, current, lost                                                            |         |
| Address (City)        | City name.                                                                                                                      |         |
| Address (Postal Code) | Zip code or equivalent                                                                                                          |         |
| Address (Country)     | Country name.                                                                                                                   |         |
| Address (State)       | State/region name.                                                                                                              |         |
| Billing Address       | null if contact is neither a customer nor a prospect (see customer_status and prospect_status fields for details).              |         |
| Shipping Address      | null if contact is neither a customer nor a prospect (see customer_status and prospect_status fields for details).              |         |
| Custom Field          | Filterable custom field key-value pairs.                                                                                        |         |
| Inclusive             | Indicates how filters should be combine. true value, the default, uses AND logic. false value uses OR logic to combine filters. |         |

### List Custom Fields {#listcustomfields}

Returns all custom fields associated with the specified resource type.

| Input         | Comments                                                       | Default |
| ------------- | -------------------------------------------------------------- | ------- |
| Connection    | The Zendesk Sell connection to use.                            |         |
| Resource Type | Specifies the type for which custom fields should be returned. |         |

### List Deals {#listdeals}

Returns all deals available to the user.

| Input                | Comments                                                                                                                        | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Zendesk Sell connection to use.                                                                                             |         |
| Page                 | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.              |         |
| Per Page             | Number of records to return per page. Default limit is _25_ and the maximum number that can be returned is _100_.               |         |
| Sort By              | A field to sort by. You can sort by filterable custom fields as well.                                                           |         |
| IDs                  | Comma-separated list of deal IDs to be returned in a request.                                                                   |         |
| Includes             | Comma-separated list of one or more resources related to a deal.                                                                |         |
| Creator ID           | Unique identifier of the user the deal was created by. Returns all deals created by the user.                                   |         |
| Owner ID             | Unique identifier of the user the deal is owned by. Returns all deals owned by the user.                                        |         |
| Contact ID           | Unique identifier of a primary contact.                                                                                         |         |
| Organization ID      | Unique identifier of an organization.                                                                                           |         |
| Hot                  | Indicator of whether or not the deal is hot.                                                                                    |         |
| Source ID            | ID of the Source.                                                                                                               |         |
| Stage ID             | ID of the Stage.                                                                                                                |         |
| Name                 | Name of the deal.                                                                                                               |         |
| Value                | Value of the deal. We encourage you to use a string with two decimal places.                                                    |         |
| Estimated Close Date | Estimated close date of the deal.                                                                                               |         |
| Custom Field         | Filterable custom field key-value pairs.                                                                                        |         |
| Inclusive            | Indicates how filters should be combine. true value, the default, uses AND logic. false value uses OR logic to combine filters. |         |

### List Leads {#listleads}

Returns all leads available to the user.

| Input                | Comments                                                                                                                        | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Zendesk Sell connection to use.                                                                                             |         |
| Page                 | Page number to start from. Page numbering starts at 1 and omitting the page parameter will return the first page.               |         |
| Per Page             | Number of records to return per page. The default limit is 25 and the maximum number that can be returned is 100.               |         |
| Sort By              | A field to sort by. You can sort by filterable custom fields as well.                                                           |         |
| IDs                  | Comma-separated list of lead IDs to be returned in a request.                                                                   |         |
| Creator ID           | User ID. Returns all leads created by that user.                                                                                |         |
| Owner ID             | User ID. Returns all leads owned by that user.                                                                                  |         |
| Source ID            | ID of the Source.                                                                                                               |         |
| First Name           | First name of the lead.                                                                                                         |         |
| Last Name            | Last name of the lead.                                                                                                          |         |
| Organization Name    | Organization name of the lead.                                                                                                  |         |
| Status               | Status of the lead.                                                                                                             |         |
| Email                | Email address of the lead.                                                                                                      |         |
| Phone                | Phone number of the lead.                                                                                                       |         |
| Mobile               | Mobile phone number of the lead.                                                                                                |         |
| Address[city]        | City name.                                                                                                                      |         |
| Address[postal Code] | Zip or Postal code.                                                                                                             |         |
| Address[state]       | State/region name.                                                                                                              |         |
| Address[country]     | Country name.                                                                                                                   |         |
| Custom Field         | Filterable custom field key-value pairs.                                                                                        |         |
| Inclusive            | Indicates how filters should be combine. true value, the default, uses AND logic. false value uses OR logic to combine filters. |         |

### List Notes {#listnotes}

Returns all notes available to the user, according to the parameters provided.

| Input         | Comments                                                                                                                                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Zendesk Sell connection to use.                                                                                                                                                                                         |         |
| Page          | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                                                                                                          |         |
| Per Page      | Number of records to return per page. The default limit is 25 and the maximum number that can be returned at one time is 100.                                                                                               |         |
| Sort By       | A field to sort by. Default ordering is ascending. If you want to change the sort ordering to descending, append :desc to the field e.g. sort_by=resource_type:desc. Possible values, resource_type, created_at, updated_at |         |
| Includes      | Comma-separated list of one or more resources related to the note. Not supported at the moment.                                                                                                                             |         |
| IDs           | Comma-separated list of note IDs to be returned in a request.                                                                                                                                                               |         |
| Creator ID    | Unique identifier of the user. Returns all notes created by the user.                                                                                                                                                       |         |
| Q             | A query string to search for. Performs a full text search on the content field.                                                                                                                                             |         |
| Resource Type | Name of the type of resource to search for. Possible values: lead, contact, deal                                                                                                                                            |         |
| Resource ID   | Unique identifier of the resource to search for.                                                                                                                                                                            |         |

### List Orders {#listorder}

Returns all orders available to the user.

| Input      | Comments                                                                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                                  |         |
| Page       | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                   |         |
| Per Page   | Number of records to return per page. Defaults to 25. Maximum is 500.                                                                |         |
| IDs        | Comma-separated list of IDs to be returned in request.                                                                               |         |
| Sort By    | A field to sort by. Default ordering is ascending. If you want to change the sort ordering to descending, append :desc to the field. |         |
| Deal ID    | ID of the deal order is associated to.                                                                                               |         |

### List Pipelines {#listpipelines}

Returns all pipelines available to the user, according to the parameters provided.

| Input      | Comments                                                                                                                                                                                                             | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                                                                                                                  |         |
| Page       | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                                                                                                   |         |
| Per Page   | Number of records to return per page. Default limit is 25 and the maximum number that can be returned is 100.                                                                                                        |         |
| IDs        | Comma-separated list of IDs to be returned in request.                                                                                                                                                               |         |
| Sort By    | Comma-separated list of fields to sort by. The sort criteria is applied in the order specified. The default ordering is ascending. If you want to change the sort ordering to descending, append :desc to the field. |         |
| Name       | Name of the pipeline to search for. This parameter is used in a strict sense.                                                                                                                                        |         |
| Disabled   | Parameter that determines whether to return disabled or enabled pipelines.                                                                                                                                           |         |

### List Stages {#liststages}

Returns all stages available to the user.

| Input       | Comments                                                                                                                                                                                                                                                                                    | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Zendesk Sell connection to use.                                                                                                                                                                                                                                                         |         |
| Pipeline ID | The unique identifier of the pipeline that contains this stage.                                                                                                                                                                                                                             |         |
| Page        | The page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                                                                                                                                                                      |         |
| Per Page    | The number of records to return per page. The default limit is 25 and the maximum number that can be returned is 100.                                                                                                                                                                       |         |
| Sort By     | Comma-separated list of fields to sort by. The sort criteria is applied in the order specified. The default ordering is ascending. If you want to change the sort ordering to descending, append :desc to the field. Possible values: pipeline_id, id, name, category, position, likelihood |         |
| IDs         | Comma-separated list of stage IDs to be returned in a request.                                                                                                                                                                                                                              |         |
| Name        | Name of the stage you're searching for. This parameter is used in a strict sense.                                                                                                                                                                                                           |         |
| Active      | Parameter that determines whether to return active or inactive stages.                                                                                                                                                                                                                      |         |

### List Tasks {#listtasks}

Returns all tasks available to the user.

| Input         | Comments                                                                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    | The Zendesk Sell connection to use.                                                                                                  |         |
| Page          | Page number to start from. Page numbering starts at 1 and omitting the page parameter will return the first page.                    |         |
| Per Page      | Number of records to return per page. The default limit is 25 and the maximum number that can be returned is 100.                    |         |
| Sort By       | A field to sort by. The default ordering is ascending. If you want to change the sort order to descending, append :desc to the field |         |
| IDs           | Comma-separated list of task IDs to be returned in a request.                                                                        |         |
| Creator ID    | Unique identifier of the user. Returns all tasks created by the user.                                                                |         |
| Owner ID      | Unique identifier of the user. Returns all tasks owned by the user.                                                                  |         |
| Q             | A query string to search for. Performs a full text search on the content field.                                                      |         |
| Type          | Type of tasks to search for. Possible values: floating, related                                                                      |         |
| Resource Type | Name of the resource type to search for. Possible values: lead, contact, deal                                                        |         |
| Resource ID   | Unique identifier of the resource that you're searching for.                                                                         |         |
| Completed     | Indicates whether the query will return tasks that are completed or not.                                                             |         |
| Overdue       | Indicates whether the query will return tasks where the due_date parameter has been passed or not.                                   |         |
| Remind        | Indicates whether the query will return tasks with reminders or without reminders.                                                   |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the Zendesk Sell API.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Zendesk Sell connection to use.                                                                                                                                                              |         |
| URL                     | This is the URL to call.                                                                                                                                                                         |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |
| API Version             | The version of the API to use.                                                                                                                                                                   | v2      |

### Update Contact {#updatecontact}

Updates contact information. If the specified contact does not exist, the request will return an error.

| Input                  | Comments                                                                                                                                                                                                                                                                        | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Zendesk Sell connection to use.                                                                                                                                                                                                                                             |         |
| ID                     | The unique identifier of the contact.                                                                                                                                                                                                                                           |         |
| Name                   | This field will be set only if the contact is an organization. is_organization is set to true.                                                                                                                                                                                  |         |
| First Name             | The field will be set only if the contact is an individual. is_organization is set to false.                                                                                                                                                                                    |         |
| Last Name              | The field will be set only if the contact is an individual. is_organization is set to false.                                                                                                                                                                                    |         |
| Contact ID             | The field will be set only if the contact is an individual. is_organization is set to false.                                                                                                                                                                                    |         |
| Parent Organization ID | The unique identifier of a contact that should be set as parent for this organization. Setting this to null will clear existing parent relation. Referenced contact also has to be an organization. It can be set only for organization contacts (is_organization set to true). |         |
| Owner ID               | The unique identifier of the user who owns the contact.                                                                                                                                                                                                                         |         |
| Customer Status        | Customer status of the contact. Possible values: none, current, past.                                                                                                                                                                                                           |         |
| Prospect Status        | Prospect status of the contact. Possible values: none, current, lost.                                                                                                                                                                                                           |         |
| Title                  | Job title of the contact.                                                                                                                                                                                                                                                       |         |
| Description            | Additional notes or details about the contact.                                                                                                                                                                                                                                  |         |
| Industry               | Industry classification of the contact.                                                                                                                                                                                                                                         |         |
| Website                | Website URL of the contact.                                                                                                                                                                                                                                                     |         |
| Email                  | Email address of the contact.                                                                                                                                                                                                                                                   |         |
| Phone                  | Phone number of the contact.                                                                                                                                                                                                                                                    |         |
| Mobile                 | Mobile phone number of the contact.                                                                                                                                                                                                                                             |         |
| Fax                    | Fax number of the contact.                                                                                                                                                                                                                                                      |         |
| Twitter                | Twitter username of the contact.                                                                                                                                                                                                                                                |         |
| Facebook               | Facebook username of the contact.                                                                                                                                                                                                                                               |         |
| LinkedIn               | LinkedIn username of the contact.                                                                                                                                                                                                                                               |         |
| Skype                  | Skype username of the contact.                                                                                                                                                                                                                                                  |         |
| Address                | Physical address of the contact.                                                                                                                                                                                                                                                |         |
| Billing Address        | Billing address of the contact. Can be updated if contact is either a customer or a prospect (see customer_status and prospect_status fields for details).                                                                                                                      |         |
| Shipping Address       | Shipping address of the contact. Can be updated if contact is either a customer or a prospect (see customer_status and prospect_status fields for details).                                                                                                                     |         |
| Tag                    | Tags to apply to the contact. You need to supply the entire set.                                                                                                                                                                                                                |         |
| Custom Field           | Filterable custom field key-value pairs.                                                                                                                                                                                                                                        |         |

### Update Deal {#updatedeal}

Updates deal information.

| Input                     | Comments                                                                                | Default |
| ------------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection                | The Zendesk Sell connection to use.                                                     |         |
| Deal ID                   | The unique identifier of the deal to update.                                            |         |
| Name                      | Name of the deal.                                                                       |         |
| Value                     | Value of the deal in decimal format (e.g., two decimal places).                         |         |
| Currency                  | The currency code for the deal value. If omitted, the account default currency is used. |         |
| Owner ID                  | The unique identifier of the user who owns the deal.                                    |         |
| Hot                       | When true, marks the deal as hot.                                                       |         |
| Stage ID                  | The unique identifier of the pipeline stage for this deal.                              |         |
| Last Stage Change At      | Date and time when the deal was moved into the current stage in UTC (ISO8601 format).   |         |
| Added At                  | Date and time that the deal was started in UTC (ISO8601 format).                        |         |
| Source ID                 | ID of the deal Source.                                                                  |         |
| Loss Reason ID            | ID of the Loss Reason.                                                                  |         |
| Unqualified Reason ID     | ID of the Unqualify Reason.                                                             |         |
| Contact ID                | Unique identifier of a primary contact.                                                 |         |
| Estimated Close Date      | Expected date when the deal will close.                                                 |         |
| Customized Win Likelihood | User-provided win likelihood with value range 0-100.                                    |         |
| Tag                       | Tags to apply. You need to supply the entire set.                                       |         |
| Custom Field              | Filterable custom field key-value pairs.                                                |         |

### Update Lead {#updatelead}

Updates lead information.

| Input                 | Comments                                                      | Default |
| --------------------- | ------------------------------------------------------------- | ------- |
| Connection            | The Zendesk Sell connection to use.                           |         |
| Lead ID               | The unique identifier of the lead to update.                  |         |
| Owner ID              | The unique identifier of the user who owns the lead.          |         |
| First Name            | First name of the contact.                                    |         |
| Last Name             | The last name of the lead.                                    |         |
| Organization Name     | The name of the organization for organization-type leads.     |         |
| Status                | Status of the lead.                                           |         |
| Source ID             | The unique identifier of the lead source.                     |         |
| Unqualified Reason ID | The unique identifier of the reason the lead was unqualified. |         |
| Title                 | Job title or role.                                            |         |
| Description           | Description or notes.                                         |         |
| Industry              | Industry classification.                                      |         |
| Website               | Website URL.                                                  |         |
| Email                 | Email address.                                                |         |
| Phone                 | Phone number.                                                 |         |
| Mobile                | Mobile phone number.                                          |         |
| Fax                   | Fax number.                                                   |         |
| Twitter               | Twitter username.                                             |         |
| Facebook              | Facebook username.                                            |         |
| LinkedIn              | LinkedIn username.                                            |         |
| Skype                 | Skype username.                                               |         |
| Address               | The physical address of the lead in JSON format.              |         |
| Tag                   | Tags to apply. You need to supply the entire set.             |         |
| Custom Field          | Filterable custom field key-value pairs.                      |         |

### Update Note {#updatenote}

Updates note information.

| Input         | Comments                                                                            | Default |
| ------------- | ----------------------------------------------------------------------------------- | ------- |
| Connection    | The Zendesk Sell connection to use.                                                 |         |
| Resource Type | The type of resource the note is attached to. Possible values: lead, contact, deal. |         |
| Resource ID   | The unique identifier of the resource the note is attached to.                      |         |
| Content       | The body text of the note.                                                          |         |
| Is Important  | When true, marks the note as important.                                             |         |
| Tag           | Tags to apply to the note.                                                          |         |
| Type          | The type of note. Possible values: regular or other types supported by the API.     |         |

### Update Order {#updateorder}

Updates order information.

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.           |         |
| Order ID   | The unique identifier of the order to update. |         |
| Discount   | Overall discount on the order in percents.    |         |

### Update Task {#updatetask}

Updates task information.

| Input         | Comments                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection    | The Zendesk Sell connection to use.                                                |         |
| Task ID       | The unique identifier of the task to update.                                       |         |
| Content       | The description or body of the task.                                               |         |
| Due Date      | The date and time when the task is due. Format: ISO8601 UTC.                       |         |
| Owner ID      | Defaults to the unique identifier of the user who created the task.                |         |
| Resource Type | The type of resource the task is related to. Possible values: lead, contact, deal. |         |
| Resource ID   | The unique identifier of the resource the task is related to.                      |         |
| Completed     | When true, marks the task as completed.                                            |         |
| Remind At     | The date and time to send a reminder for this task. Format: ISO8601 UTC.           |         |

### Upsert Contact {#upsertcontact}

Creates a new contact or updates an existing one based on a filter value or set of filters. At least one filter query parameter is required.

| Input                  | Comments                                                                                                                                                                                                                                                                       | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Zendesk Sell connection to use.                                                                                                                                                                                                                                            |         |
| Creator ID             | User ID. Returns all contacts created by that user.                                                                                                                                                                                                                            |         |
| Owner ID               | User ID. Returns all contacts owned by that user.                                                                                                                                                                                                                              |         |
| Is Organization        | Indicates whether or not this contact refers to an organization or an individual.                                                                                                                                                                                              |         |
| Contact ID             | The unique identifier of the organization that the contact belongs to.                                                                                                                                                                                                         |         |
| Parent Organization ID | The unique identifier of a contact that should be set as parent for this organization. Setting this to null will clear existing parent relation. Referenced contact also has to be an organization. It can be set only for organization contacts (is_organization set to true. |         |
| Name                   | Name of the contact.                                                                                                                                                                                                                                                           |         |
| First Name             | First name of the contact.                                                                                                                                                                                                                                                     |         |
| Last Name              | Last name of the contact.                                                                                                                                                                                                                                                      |         |
| Email                  | Email address of the contact.                                                                                                                                                                                                                                                  |         |
| Phone                  | Phone number of the contact.                                                                                                                                                                                                                                                   |         |
| Mobile                 | Mobile phone number of the contact.                                                                                                                                                                                                                                            |         |
| Customer Status        | Customer status of the contact. Possible values: none, current, past                                                                                                                                                                                                           |         |
| Prospect Status        | Prospect status of the contact. Possible values: none, current, lost                                                                                                                                                                                                           |         |
| Address (City)         | City name.                                                                                                                                                                                                                                                                     |         |
| Address (Postal Code)  | Zip code or equivalent                                                                                                                                                                                                                                                         |         |
| Address (Country)      | Country name.                                                                                                                                                                                                                                                                  |         |
| Billing Address        | Can be updated if contact is either a customer or a prospect (see customer_status and prospect_status fields for details).                                                                                                                                                     |         |
| Shipping Address       | Can be updated if contact is either a customer or a prospect (see customer_status and prospect_status fields for details).                                                                                                                                                     |         |
| Custom Field           | Filterable custom field key-value pairs.                                                                                                                                                                                                                                       |         |
| Filter                 | Filterable custom field.                                                                                                                                                                                                                                                       |         |
| Inclusive              | Indicates how filters should be combine. true value, the default, uses AND logic. false value uses OR logic to combine filters.                                                                                                                                                |         |

### Upsert Lead {#upsertlead}

Creates a new lead or updates an existing one based on a filter value or set of filters.

| Input                | Comments                                                                                                                        | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Zendesk Sell connection to use.                                                                                             |         |
| Creator ID           | User ID. Returns all leads created by that user.                                                                                |         |
| Owner ID             | User ID. Returns all leads owned by that user.                                                                                  |         |
| Source ID            | ID of the Source.                                                                                                               |         |
| First Name           | First name of the lead.                                                                                                         |         |
| Last Name            | Last name of the lead.                                                                                                          |         |
| Organization Name    | Organization name of the lead.                                                                                                  |         |
| Status               | Status of the lead.                                                                                                             |         |
| Email                | Email address of the lead.                                                                                                      |         |
| Phone                | Phone number of the lead.                                                                                                       |         |
| Mobile               | Mobile phone number of the lead.                                                                                                |         |
| Address[city]        | City name.                                                                                                                      |         |
| Address[postal Code] | Zip or Postal code                                                                                                              |         |
| Address[country]     | Country name.                                                                                                                   |         |
| Custom Field         | Filterable custom field key-value pairs.                                                                                        |         |
| Filter               | Filterable custom field.                                                                                                        |         |
| Inclusive            | Indicates how filters should be combine. true value, the default, uses AND logic. false value uses OR logic to combine filters. |         |
