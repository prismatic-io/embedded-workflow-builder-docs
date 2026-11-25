---
title: Zendesk Sell Connector
sidebar_label: Zendesk Sell
description: Manage leads, contacts, and deals in Zendesk Sell.
---

![Zendesk Sell](./assets/zendesk-sell.png#connector-icon)
[Zendesk Sell](https://www.zendesk.com/sell/) is a sales force automation and CRM platform.
This component allows managing leads, contacts, and deals in Zendesk Sell.

## API Documentation

This component was built using the [Zendesk Sell API](https://developer.zendesk.com/api-reference/sales-crm/introduction/).

## Connections

### OAuth 2.0 {#oauth}

Authenticate using OAuth 2.0.

Create a connection of type **OAuth 2.0** to authenticate with the Zendesk Sell API using OAuth 2.0.

#### Prerequisites

- A Zendesk Sell account with administrator access

#### Setup Steps

1. Log in to the Zendesk Sell Dashboard at a URL similar to `https://{subdomain}.zendesk.com/sales/dashboards/main`.
2. On the left-hand side toolbar, click **Settings**.
3. Within the Settings section, navigate to **Integrations** > **OAuth**.
4. Under the OAuth section, open **OAuth2 Settings**.
5. In the **Developer apps** section, click **Add Developer App**.
6. Complete the required fields for the app setup. Specify the Redirect URL as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
7. Once the app has been added, select the **details** button associated with the app to retrieve the **Client ID** and **Client Secret**.

#### Configure the Connection

- For **Authorize URL**, the default value is `https://api.getbase.com/oauth2/authorize`. Update if using a custom Zendesk Sell instance.
- For **Token URL**, the default value is `https://api.getbase.com/oauth2/token`. Update if using a custom Zendesk Sell instance.
- For **Scopes**, the default value is `read write profile`. Adjust based on the required level of access.
- Enter the **Client ID** obtained from the developer app details.
- Enter the **Client Secret** obtained from the developer app details.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                      | Default                                  |
| ------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Authorize URL | The OAuth 2.0 authorization endpoint for Zendesk Sell.                                        | https://api.getbase.com/oauth2/authorize |
| Token URL     | The OAuth 2.0 token endpoint for Zendesk Sell.                                                | https://api.getbase.com/oauth2/token     |
| Scopes        | The space-delimited OAuth 2.0 scopes to request. Defaults to read, write, and profile access. | read write profile                       |
| Client ID     | The client ID obtained from the Zendesk Sell OAuth application settings.                      |                                          |
| Client Secret | The client secret obtained from the Zendesk Sell OAuth application settings.                  |                                          |

## Triggers

### New and Updated Records {#pollchangestrigger}

Retrieves existing and ongoing records for a specified Zendesk Sell resource type. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                                                  | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Zendesk Sell connection to use.                                                                                                                                                                                                                                       |         |
| Resource Type        | The type of resource to poll for changes.                                                                                                                                                                                                                                 |         |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record modified on or after this date once, ignoring the visibility filters. |         |
| Show New Records     | When true, newly created records will be included in the trigger output.                                                                                                                                                                                                  | true    |
| Show Updated Records | When true, records that were updated after the last poll will be included in the trigger output.                                                                                                                                                                          | true    |

## Actions

### Create Contact {#createcontact}

Creates a new contact. A contact may represent a single individual or an organization.

| Input                  | Comments                                                                                                                                                                                                              | Default         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection             | The Zendesk Sell connection to use.                                                                                                                                                                                   |                 |
| Is Organization        | This value can be set only during creation and cannot be changed later.                                                                                                                                               |                 |
| Organization Name      | Required only when Is Organization is set to true.                                                                                                                                                                    |                 |
| First Name             | Set only when Is Organization is set to false (the contact is an individual).                                                                                                                                         |                 |
| Last Name              | Required only when Is Organization is set to false (the contact is an individual).                                                                                                                                    |                 |
| Contact Information    | Email, phone, and other contact channel details.                                                                                                                                                                      |                 |
| Email                  | The primary email address used to reach the contact, such as work@example.com.                                                                                                                                        |                 |
| Phone                  | The primary phone number for the contact, including area or country code.                                                                                                                                             |                 |
| Mobile                 | The contact's mobile number, used for SMS and calls.                                                                                                                                                                  |                 |
| Fax                    | The fax number for sending documents to the contact, including country code.                                                                                                                                          |                 |
| Twitter                | The contact's Twitter handle, without the leading @ symbol.                                                                                                                                                           |                 |
| Facebook               | The contact's Facebook profile name or vanity URL slug.                                                                                                                                                               |                 |
| LinkedIn               | The contact's LinkedIn profile name, used to link to their professional page.                                                                                                                                         |                 |
| Skype                  | The contact's Skype handle, used for voice and video calls.                                                                                                                                                           |                 |
| Website                | The contact's website, such as a company or personal homepage.                                                                                                                                                        |                 |
| Addresses              | Physical, billing, and shipping addresses.                                                                                                                                                                            |                 |
| Address                | Physical address of the contact.                                                                                                                                                                                      |                 |
| Billing Address        | Billing address of the contact. Requires the contact to be a customer or prospect (see customer_status and prospect_status fields for details).                                                                       |                 |
| Shipping Address       | Shipping address of the contact. Requires the contact to be a customer or prospect (see customer_status and prospect_status fields for details).                                                                      |                 |
| Custom Fields          | Custom field key-value pairs.                                                                                                                                                                                         | <code>[]</code> |
| Tags                   | Tags to apply.                                                                                                                                                                                                        | <code>[]</code> |
| Additional Fields      | Additional optional fields for the request. Includes: Customer Status, Prospect Status, Title, Description, Industry, Owner ID, Contact ID, and Parent Organization ID.                                               |                 |
| Customer Status        | Customer status of the contact. Possible values: none, current, past.                                                                                                                                                 |                 |
| Prospect Status        | Prospect status of the contact. Possible values: none, current, lost.                                                                                                                                                 |                 |
| Title                  | Job title of the contact.                                                                                                                                                                                             |                 |
| Description            | Additional notes or details about the contact.                                                                                                                                                                        |                 |
| Industry               | Industry classification of the contact.                                                                                                                                                                               |                 |
| Owner ID               | The unique identifier of the user who owns or will own the contact.                                                                                                                                                   |                 |
| Contact ID             | Set only when Is Organization is set to false (the contact is an individual).                                                                                                                                         |                 |
| Parent Organization ID | The unique identifier of a contact that should be set as parent for this organization. Referenced contact also has to be an organization. It can be set only for organization contacts (is_organization set to true). |                 |

### Create Deal {#createdeal}

Creates a new deal.

| Input                     | Comments                                                                                | Default         |
| ------------------------- | --------------------------------------------------------------------------------------- | --------------- |
| Connection                | The Zendesk Sell connection to use.                                                     |                 |
| Name                      | A descriptive title identifying the deal in the pipeline.                               |                 |
| Value                     | Value of the deal in decimal format (e.g., two decimal places).                         |                 |
| Currency                  | The currency code for the deal value. If omitted, the account default currency is used. |                 |
| Custom Fields             | Custom field key-value pairs.                                                           | <code>[]</code> |
| Tags                      | Tags to apply.                                                                          | <code>[]</code> |
| Hot                       | Indicator of whether or not the deal is hot.                                            |                 |
| Last Stage Change At      | Date and time when the deal was moved into the current stage in UTC (ISO8601 format).   |                 |
| Added At                  | Date and time that the deal was started in UTC (ISO8601 format).                        |                 |
| Estimated Close Date      | Expected date when the deal will close.                                                 |                 |
| Customized Win Likelihood | User-provided win likelihood with value range 0-100.                                    |                 |
| Contact ID                | The unique identifier of the primary contact associated with the deal.                  |                 |
| Owner ID                  | The unique identifier of the user who owns the deal.                                    |                 |
| Stage ID                  | The unique identifier of the pipeline stage for this deal.                              |                 |
| Source ID                 | The unique identifier of the source that originated the deal.                           |                 |
| Loss Reason ID            | The unique identifier of the reason the deal was marked as lost.                        |                 |
| Unqualified Reason ID     | The unique identifier of the reason the deal was unqualified.                           |                 |

### Create Lead {#createlead}

Creates a new lead.

| Input                 | Comments                                                                                                                                    | Default         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection            | The Zendesk Sell connection to use.                                                                                                         |                 |
| Organization Name     | The company name. Required when the lead is an organization (when Last Name is empty).                                                      |                 |
| First Name            | The given name of an individual lead.                                                                                                       |                 |
| Last Name             | The family name of an individual lead.                                                                                                      |                 |
| Address               | The physical address of the lead in JSON format.                                                                                            |                 |
| Contact Information   | Email, phone, and other contact channel details.                                                                                            |                 |
| Email                 | The primary email address used to reach the lead, such as work@example.com.                                                                 |                 |
| Phone                 | The primary phone number for the lead, including area or country code.                                                                      |                 |
| Mobile                | The lead's mobile number, used for SMS and calls.                                                                                           |                 |
| Fax                   | The fax number for sending documents to the lead, including country code.                                                                   |                 |
| Twitter               | The lead's Twitter handle, without the leading @ symbol.                                                                                    |                 |
| Facebook              | The lead's Facebook profile name or vanity URL slug.                                                                                        |                 |
| LinkedIn              | The lead's LinkedIn profile name, used to link to their professional page.                                                                  |                 |
| Skype                 | The lead's Skype handle, used for voice and video calls.                                                                                    |                 |
| Website               | The lead's website, such as a company or personal homepage.                                                                                 |                 |
| Custom Fields         | Custom field key-value pairs.                                                                                                               | <code>[]</code> |
| Tags                  | Tags to apply.                                                                                                                              | <code>[]</code> |
| Additional Fields     | Additional optional fields for the request. Includes: Status, Title, Description, Industry, Owner ID, Source ID, and Unqualified Reason ID. |                 |
| Status                | The pipeline stage the lead is in, such as New or Working.                                                                                  |                 |
| Title                 | The lead's job title or role within their organization.                                                                                     |                 |
| Description           | Free-form notes or background information about the lead.                                                                                   |                 |
| Industry              | The business sector the lead operates in.                                                                                                   |                 |
| Owner ID              | The unique identifier of the user who owns the lead. Defaults to the user who created the lead.                                             |                 |
| Source ID             | The unique identifier of the lead source.                                                                                                   |                 |
| Unqualified Reason ID | The unique identifier of the reason the lead was unqualified.                                                                               |                 |

### Create Note {#createnote}

Creates a new note and associates it with one resource.

| Input         | Comments                                                                            | Default         |
| ------------- | ----------------------------------------------------------------------------------- | --------------- |
| Connection    | The Zendesk Sell connection to use.                                                 |                 |
| Content       | The body text of the note.                                                          |                 |
| Resource Type | The type of resource the note is attached to. Possible values: lead, contact, deal. |                 |
| Resource ID   | The unique identifier of the resource the note is attached to.                      |                 |
| Tags          | Tags to apply to the note.                                                          | <code>[]</code> |
| Is Important  | When true, marks the note as important.                                             |                 |
| Type          | The type of note. Possible values: regular or other types supported by the API.     |                 |

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
| Resource Type | The type of resource the task is related to. Possible values: lead, contact, deal. |         |
| Resource ID   | The unique identifier of the resource the task is related to.                      |         |
| Due Date      | The date and time when the task is due. Format: ISO8601 UTC.                       |         |
| Completed     | When true, marks the task as completed.                                            |         |
| Remind At     | The date and time to send a reminder for this task. Format: ISO8601 UTC.           |         |
| Owner ID      | Defaults to the unique identifier of the user who created the task.                |         |

### Delete Contact {#deletecontact}

Deletes an existing contact. This operation cannot be undone.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.   |         |
| Contact ID | The unique identifier of the contact. |         |

### Delete Deal {#deletedeal}

Deletes an existing deal and removes all associated contacts from the deal in a single call.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use. |         |
| Deal ID    | The unique identifier of the deal.  |         |

### Delete Lead {#deletelead}

Deletes an existing lead.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use. |         |
| Lead ID    | The unique identifier of the lead.  |         |

### Delete Note {#deletenote}

Deletes an existing note. This operation cannot be undone.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use. |         |
| Note ID    | The unique identifier of the note.  |         |

### Delete Order {#deleteorder}

Deletes an existing order and removes all associated line items in a single call. This operation cannot be undone.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use. |         |
| Order ID   | The unique identifier of the order. |         |

### Delete Task {#deletetask}

Deletes an existing task. This operation cannot be undone.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use. |         |
| Task ID    | The unique identifier of the task.  |         |

### Get Contact {#getcontact}

Returns a single contact available to the user, according to the unique contact ID provided.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.   |         |
| Contact ID | The unique identifier of the contact. |         |

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
| Deal ID    | The unique identifier of the deal.                                                                       |         |
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

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use. |         |
| Lead ID    | The unique identifier of the lead.  |         |

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

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use. |         |
| Order ID   | The unique identifier of the order. |         |

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
| Resource   | The resource to get the stream for. Possible values: contacts, deals, leads.                                               |         |
| Position   | The client position in the Firehose stream. Possible values: top, tail, or a position string from a previous API response. |         |
| Limit      | Limits maximum number of events in single response.                                                                        |         |

### Get Task {#gettask}

Returns a single task available to the user according to the unique task ID provided.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use. |         |
| Task ID    | The unique identifier of the task.  |         |

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

| Input               | Comments                                                                                                                                                       | Default         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection          | The Zendesk Sell connection to use.                                                                                                                            |                 |
| Fetch All           | When true, automatically fetches all pages of results using pagination. Page and Per Page inputs are ignored when this is enabled.                             | false           |
| Is Organization     | Indicates whether or not this contact refers to an organization or an individual.                                                                              |                 |
| Organization Name   | Filters results to organization contacts with this company name.                                                                                               |                 |
| First Name          | Filters results to contacts with this given name.                                                                                                              |                 |
| Last Name           | Filters results to contacts with this family name.                                                                                                             |                 |
| Contact Information | Email, phone, and other contact channel details.                                                                                                               |                 |
| Email               | Filters results to contacts with this email address.                                                                                                           |                 |
| Phone               | Filters results to contacts with this phone number.                                                                                                            |                 |
| Mobile              | Filters results to contacts with this mobile number.                                                                                                           |                 |
| Primary Address     | Street, city, state, postal code, and country.                                                                                                                 |                 |
| City                | Filters results to contacts located in this city.                                                                                                              |                 |
| Zip/Postal Code     | Filters results to contacts with this postal or ZIP code.                                                                                                      |                 |
| Country             | Filters results to contacts located in this country.                                                                                                           |                 |
| State/Province      | Filters results to contacts located in this state or region.                                                                                                   |                 |
| Other Addresses     | Billing and shipping addresses.                                                                                                                                |                 |
| Billing Address     | null if contact is neither a customer nor a prospect (see customer_status and prospect_status fields for details).                                             |                 |
| Shipping Address    | null if contact is neither a customer nor a prospect (see customer_status and prospect_status fields for details).                                             |                 |
| Custom Fields       | Custom field key-value pairs.                                                                                                                                  | <code>[]</code> |
| Pagination          | Page and page-size controls.                                                                                                                                   |                 |
| Page                | The page number to start from. Page numbering is 1-based and omitting the page parameter will return the first page.                                           |                 |
| Per Page            | The number of records to return per page. Default limit is 25 and maximum number that can be returned is 100.                                                  |                 |
| Additional Fields   | Additional optional fields for the request. Includes: Customer Status, Prospect Status, Contact IDs, Creator ID, Owner ID, Contact ID, Sort By, and Inclusive. |                 |
| Customer Status     | Customer status of the contact. Possible values: none, current, past.                                                                                          |                 |
| Prospect Status     | Prospect status of the contact. Possible values: none, current, lost.                                                                                          |                 |
| Contact IDs         | Comma-separated list of the contact IDs to be returned in the request.                                                                                         |                 |
| Creator ID          | User ID. Returns all contacts created by that user.                                                                                                            |                 |
| Owner ID            | User ID. Returns all contacts owned by that user.                                                                                                              |                 |
| Contact ID          | The unique identifier of the organization that the contact belongs to.                                                                                         |                 |
| Sort By             | A field to sort by. Filterable custom fields can also be used.                                                                                                 |                 |
| Inclusive           | Indicates how filters should be combined. true value, the default, uses AND logic. false value uses OR logic to combine filters.                               |                 |

### List Custom Fields {#listcustomfields}

Returns all custom fields associated with the specified resource type.

| Input         | Comments                                                       | Default |
| ------------- | -------------------------------------------------------------- | ------- |
| Connection    | The Zendesk Sell connection to use.                            |         |
| Resource Type | Specifies the type for which custom fields should be returned. |         |

### List Deals {#listdeals}

Returns all deals available to the user.

| Input                | Comments                                                                                                                           | Default         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection           | The Zendesk Sell connection to use.                                                                                                |                 |
| Fetch All            | When true, automatically fetches all pages of results using pagination. Page and Per Page inputs are ignored when this is enabled. | false           |
| Name                 | Filters results to deals whose name matches this value.                                                                            |                 |
| IDs                  | Comma-separated list of deal IDs to be returned in a request.                                                                      |                 |
| Creator ID           | Unique identifier of the user the deal was created by. Returns all deals created by the user.                                      |                 |
| Owner ID             | Unique identifier of the user the deal is owned by. Returns all deals owned by the user.                                           |                 |
| Contact ID           | Unique identifier of a primary contact.                                                                                            |                 |
| Organization ID      | Unique identifier of an organization.                                                                                              |                 |
| Source ID            | Filters results to deals that originated from this source.                                                                         |                 |
| Stage ID             | Filters results to deals currently in this pipeline stage.                                                                         |                 |
| Custom Fields        | Custom field key-value pairs.                                                                                                      | <code>[]</code> |
| Pagination           | Page and page-size controls.                                                                                                       |                 |
| Page                 | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                 |                 |
| Per Page             | Number of records to return per page. Default limit is _25_ and the maximum number that can be returned is _100_.                  |                 |
| Additional Fields    | Additional optional fields for the request. Includes: Sort By, Includes, Inclusive, Value, Hot, and Estimated Close Date.          |                 |
| Sort By              | A field to sort by. Filterable custom fields can also be used.                                                                     |                 |
| Includes             | Comma-separated list of one or more resources related to the deal. Possible values: associated_contacts.                           |                 |
| Inclusive            | Indicates how filters should be combined. true value, the default, uses AND logic. false value uses OR logic to combine filters.   |                 |
| Value                | Value of the deal. Use a string with two decimal places.                                                                           |                 |
| Hot                  | Indicator of whether or not the deal is hot.                                                                                       |                 |
| Estimated Close Date | Estimated close date of the deal.                                                                                                  |                 |

### List Leads {#listleads}

Returns all leads available to the user.

| Input               | Comments                                                                                                                           | Default         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection          | The Zendesk Sell connection to use.                                                                                                |                 |
| Fetch All           | When true, automatically fetches all pages of results using pagination. Page and Per Page inputs are ignored when this is enabled. | false           |
| Organization Name   | Filters results to organization leads with this company name.                                                                      |                 |
| First Name          | Filters results to leads with this given name.                                                                                     |                 |
| Last Name           | Filters results to leads with this family name.                                                                                    |                 |
| Status              | Filters results to leads in this status (e.g. New).                                                                                |                 |
| IDs                 | Comma-separated list of lead IDs to be returned in a request.                                                                      |                 |
| Creator ID          | User ID. Returns all leads created by that user.                                                                                   |                 |
| Owner ID            | User ID. Returns all leads owned by that user.                                                                                     |                 |
| Source ID           | Filters results to leads that originated from this source.                                                                         |                 |
| Contact Information | Email, phone, and other contact channel details.                                                                                   |                 |
| Email               | Filters results to leads with this email address.                                                                                  |                 |
| Phone               | Filters results to leads with this phone number.                                                                                   |                 |
| Mobile              | Filters results to leads with this mobile number.                                                                                  |                 |
| Address             | Street, city, state, postal code, and country.                                                                                     |                 |
| City                | Filters results to leads located in this city.                                                                                     |                 |
| Zip/Postal Code     | Filters results to leads with this postal or ZIP code.                                                                             |                 |
| State/Province      | Filters results to leads located in this state or region.                                                                          |                 |
| Country             | Filters results to leads located in this country.                                                                                  |                 |
| Custom Fields       | Custom field key-value pairs.                                                                                                      | <code>[]</code> |
| Pagination          | Page and page-size controls.                                                                                                       |                 |
| Page                | Page number to start from. Page numbering starts at 1 and omitting the page parameter will return the first page.                  |                 |
| Per Page            | Number of records to return per page. The default limit is 25 and the maximum number that can be returned is 100.                  |                 |
| Additional Fields   | Additional optional fields for the request. Includes: Sort By and Inclusive.                                                       |                 |
| Sort By             | A field to sort by. Filterable custom fields can also be used.                                                                     |                 |
| Inclusive           | Indicates how filters should be combined. true value, the default, uses AND logic. false value uses OR logic to combine filters.   |                 |

### List Notes {#listnotes}

Returns all notes available to the user, according to the parameters provided.

| Input             | Comments                                                                                                                                                                                                          | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Zendesk Sell connection to use.                                                                                                                                                                               |         |
| Fetch All         | When true, automatically fetches all pages of results using pagination. Page and Per Page inputs are ignored when this is enabled.                                                                                | false   |
| Resource Type     | Name of the type of resource to search for. Possible values: lead, contact, deal                                                                                                                                  |         |
| Resource ID       | The unique identifier of the resource the note is attached to.                                                                                                                                                    |         |
| IDs               | Comma-separated list of note IDs to be returned in a request.                                                                                                                                                     |         |
| Creator ID        | Unique identifier of the user. Returns all notes created by the user.                                                                                                                                             |         |
| Pagination        | Page and page-size controls.                                                                                                                                                                                      |         |
| Page              | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                                                                                                |         |
| Per Page          | Number of records to return per page. The default limit is 25 and the maximum number that can be returned at one time is 100.                                                                                     |         |
| Additional Fields | Additional optional fields for the request. Includes: Sort By, Includes, and Query.                                                                                                                               |         |
| Sort By           | A field to sort by. Default ordering is ascending. To change the sort ordering to descending, append :desc to the field, e.g. sort_by=resource_type:desc. Possible values: resource_type, created_at, updated_at. |         |
| Includes          | Comma-separated list of one or more resources related to the note. Not supported at the moment.                                                                                                                   |         |
| Query             | A query string to search for. Performs a full text search on the content field.                                                                                                                                   |         |

### List Orders {#listorder}

Returns all orders available to the user.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. Page and Per Page inputs are ignored when this is enabled. | false   |
| IDs        | Comma-separated list of IDs to be returned in request.                                                                             |         |
| Deal ID    | The unique identifier of the deal the order is associated with.                                                                    |         |
| Sort By    | A field to sort by. Default ordering is ascending. To change the sort ordering to descending, append :desc to the field.           |         |
| Pagination | Page and page-size controls.                                                                                                       |         |
| Page       | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                 |         |
| Per Page   | Number of records to return per page. Defaults to 25. Maximum is 500.                                                              |         |

### List Pipelines {#listpipelines}

Returns all pipelines available to the user, according to the parameters provided.

| Input      | Comments                                                                                                                                                                                                 | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk Sell connection to use.                                                                                                                                                                      |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. Page and Per Page inputs are ignored when this is enabled.                                                                       | false   |
| Name       | Name of the pipeline to search for. This parameter is used in a strict sense.                                                                                                                            |         |
| Disabled   | Parameter that determines whether to return disabled or enabled pipelines.                                                                                                                               |         |
| IDs        | Comma-separated list of IDs to be returned in request.                                                                                                                                                   |         |
| Sort By    | Comma-separated list of fields to sort by. The sort criteria is applied in the order specified. The default ordering is ascending. To change the sort ordering to descending, append :desc to the field. |         |
| Pagination | Page and page-size controls.                                                                                                                                                                             |         |
| Page       | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                                                                                       |         |
| Per Page   | Number of records to return per page. Default limit is 25 and the maximum number that can be returned is 100.                                                                                            |         |

### List Stages {#liststages}

Returns all stages available to the user.

| Input       | Comments                                                                                                                                                                                                                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Zendesk Sell connection to use.                                                                                                                                                                                                                                              |         |
| Fetch All   | When true, automatically fetches all pages of results using pagination. Page and Per Page inputs are ignored when this is enabled.                                                                                                                                               | false   |
| Name        | Name of the stage to search for. This parameter is used in a strict sense.                                                                                                                                                                                                       |         |
| Active      | Parameter that determines whether to return active or inactive stages.                                                                                                                                                                                                           |         |
| Pipeline ID | The unique identifier of the pipeline that contains this stage.                                                                                                                                                                                                                  |         |
| IDs         | Comma-separated list of stage IDs to be returned in a request.                                                                                                                                                                                                                   |         |
| Sort By     | Comma-separated list of fields to sort by. The sort criteria is applied in the order specified. The default ordering is ascending. To change the sort ordering to descending, append :desc to the field. Possible values: pipeline_id, id, name, category, position, likelihood. |         |
| Pagination  | Page and page-size controls.                                                                                                                                                                                                                                                     |         |
| Page        | The page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                                                                                                                                                           |         |
| Per Page    | The number of records to return per page. The default limit is 25 and the maximum number that can be returned is 100.                                                                                                                                                            |         |

### List Tasks {#listtasks}

Returns all tasks available to the user.

| Input             | Comments                                                                                                                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Zendesk Sell connection to use.                                                                                                               |         |
| Fetch All         | When true, automatically fetches all pages of results using pagination. Page and Per Page inputs are ignored when this is enabled.                | false   |
| Type              | Type of tasks to search for. Possible values: floating, related.                                                                                  |         |
| Completed         | Indicates whether the query will return tasks that are completed or not.                                                                          |         |
| Pagination        | Page and page-size controls.                                                                                                                      |         |
| Page              | Page number to start from. Page numbering starts at 1 and omitting the page parameter will return the first page.                                 |         |
| Per Page          | Number of records to return per page. The default limit is 25 and the maximum number that can be returned is 100.                                 |         |
| Additional Fields | Additional optional fields for the request. Includes: Sort By, Query, Resource Type, Resource ID, IDs, Creator ID, Owner ID, Overdue, and Remind. |         |
| Sort By           | A field to sort by. The default ordering is ascending. To change the sort order to descending, append :desc to the field.                         |         |
| Query             | A query string to search for. Performs a full text search on the content field.                                                                   |         |
| Resource Type     | Name of the resource type to search for. Possible values: lead, contact, deal.                                                                    |         |
| Resource ID       | Unique identifier of the resource to search for.                                                                                                  |         |
| IDs               | Comma-separated list of task IDs to be returned in a request.                                                                                     |         |
| Creator ID        | Unique identifier of the user. Returns all tasks created by the user.                                                                             |         |
| Owner ID          | Unique identifier of the user. Returns all tasks owned by the user.                                                                               |         |
| Overdue           | Indicates whether the query will return tasks where the due_date parameter has been passed or not.                                                |         |
| Remind            | Indicates whether the query will return tasks with reminders or without reminders.                                                                |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the Zendesk Sell API.

| Input                   | Comments                                                                                                                                                                                         | Default         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection              | The Zendesk Sell connection to use.                                                                                                                                                              |                 |
| URL                     | This is the URL to call.                                                                                                                                                                         |                 |
| Method                  | The HTTP method to use.                                                                                                                                                                          |                 |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |                 |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             | <code>[]</code> |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 | <code>[]</code> |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           | <code>[]</code> |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              | <code>[]</code> |
| Header                  | A list of headers to send with the request.                                                                                                                                                      | <code>[]</code> |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json            |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |                 |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0               |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false           |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0               |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false           |
| API Version             | The version of the API to use.                                                                                                                                                                   | v2              |

### Update Contact {#updatecontact}

Updates contact information. If the specified contact does not exist, the request will return an error.

| Input                  | Comments                                                                                                                                                                                                              | Default         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection             | The Zendesk Sell connection to use.                                                                                                                                                                                   |                 |
| Contact ID             | The unique identifier of the contact.                                                                                                                                                                                 |                 |
| Organization Name      | The full company name, used when the contact is an organization.                                                                                                                                                      |                 |
| First Name             | Set only when Is Organization is set to false (the contact is an individual).                                                                                                                                         |                 |
| Last Name              | Set only when Is Organization is set to false (the contact is an individual).                                                                                                                                         |                 |
| Contact Information    | Email, phone, and other contact channel details.                                                                                                                                                                      |                 |
| Email                  | The primary email address used to reach the contact, such as work@example.com.                                                                                                                                        |                 |
| Phone                  | The primary phone number for the contact, including area or country code.                                                                                                                                             |                 |
| Mobile                 | The contact's mobile number, used for SMS and calls.                                                                                                                                                                  |                 |
| Fax                    | The fax number for sending documents to the contact, including country code.                                                                                                                                          |                 |
| Twitter                | The contact's Twitter handle, without the leading @ symbol.                                                                                                                                                           |                 |
| Facebook               | The contact's Facebook profile name or vanity URL slug.                                                                                                                                                               |                 |
| LinkedIn               | The contact's LinkedIn profile name, used to link to their professional page.                                                                                                                                         |                 |
| Skype                  | The contact's Skype handle, used for voice and video calls.                                                                                                                                                           |                 |
| Website                | The contact's website, such as a company or personal homepage.                                                                                                                                                        |                 |
| Addresses              | Physical, billing, and shipping addresses.                                                                                                                                                                            |                 |
| Address                | Physical address of the contact.                                                                                                                                                                                      |                 |
| Billing Address        | Billing address of the contact. Requires the contact to be a customer or prospect (see customer_status and prospect_status fields for details).                                                                       |                 |
| Shipping Address       | Shipping address of the contact. Requires the contact to be a customer or prospect (see customer_status and prospect_status fields for details).                                                                      |                 |
| Custom Fields          | Custom field key-value pairs.                                                                                                                                                                                         | <code>[]</code> |
| Tags                   | Tags to apply.                                                                                                                                                                                                        | <code>[]</code> |
| Additional Fields      | Additional optional fields for the request. Includes: Customer Status, Prospect Status, Title, Description, Industry, Owner ID, Contact ID, and Parent Organization ID.                                               |                 |
| Customer Status        | Customer status of the contact. Possible values: none, current, past.                                                                                                                                                 |                 |
| Prospect Status        | Prospect status of the contact. Possible values: none, current, lost.                                                                                                                                                 |                 |
| Title                  | Job title of the contact.                                                                                                                                                                                             |                 |
| Description            | Additional notes or details about the contact.                                                                                                                                                                        |                 |
| Industry               | Industry classification of the contact.                                                                                                                                                                               |                 |
| Owner ID               | The unique identifier of the user who owns or will own the contact.                                                                                                                                                   |                 |
| Contact ID             | Set only when Is Organization is set to false (the contact is an individual).                                                                                                                                         |                 |
| Parent Organization ID | The unique identifier of a contact that should be set as parent for this organization. Referenced contact also has to be an organization. It can be set only for organization contacts (is_organization set to true). |                 |

### Update Deal {#updatedeal}

Updates deal information.

| Input                     | Comments                                                                                | Default         |
| ------------------------- | --------------------------------------------------------------------------------------- | --------------- |
| Connection                | The Zendesk Sell connection to use.                                                     |                 |
| Deal ID                   | The unique identifier of the deal.                                                      |                 |
| Name                      | A descriptive title identifying the deal in the pipeline.                               |                 |
| Value                     | Value of the deal in decimal format (e.g., two decimal places).                         |                 |
| Currency                  | The currency code for the deal value. If omitted, the account default currency is used. |                 |
| Custom Fields             | Custom field key-value pairs.                                                           | <code>[]</code> |
| Tags                      | Tags to apply.                                                                          | <code>[]</code> |
| Hot                       | Indicator of whether or not the deal is hot.                                            |                 |
| Last Stage Change At      | Date and time when the deal was moved into the current stage in UTC (ISO8601 format).   |                 |
| Added At                  | Date and time that the deal was started in UTC (ISO8601 format).                        |                 |
| Estimated Close Date      | Expected date when the deal will close.                                                 |                 |
| Customized Win Likelihood | User-provided win likelihood with value range 0-100.                                    |                 |
| Contact ID                | Unique identifier of a primary contact.                                                 |                 |
| Owner ID                  | The unique identifier of the user who owns the deal.                                    |                 |
| Stage ID                  | The unique identifier of the pipeline stage for this deal.                              |                 |
| Source ID                 | The unique identifier of the source that originated the deal.                           |                 |
| Loss Reason ID            | The unique identifier of the reason the deal was marked as lost.                        |                 |
| Unqualified Reason ID     | The unique identifier of the reason the deal was unqualified.                           |                 |

### Update Lead {#updatelead}

Updates lead information.

| Input                 | Comments                                                                                                                                    | Default         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection            | The Zendesk Sell connection to use.                                                                                                         |                 |
| Lead ID               | The unique identifier of the lead.                                                                                                          |                 |
| Organization Name     | The company name. Required when the lead is an organization (when Last Name is empty).                                                      |                 |
| First Name            | The given name of an individual lead.                                                                                                       |                 |
| Last Name             | The family name of an individual lead.                                                                                                      |                 |
| Address               | The physical address of the lead in JSON format.                                                                                            |                 |
| Contact Information   | Email, phone, and other contact channel details.                                                                                            |                 |
| Email                 | The primary email address used to reach the lead, such as work@example.com.                                                                 |                 |
| Phone                 | The primary phone number for the lead, including area or country code.                                                                      |                 |
| Mobile                | The lead's mobile number, used for SMS and calls.                                                                                           |                 |
| Fax                   | The fax number for sending documents to the lead, including country code.                                                                   |                 |
| Twitter               | The lead's Twitter handle, without the leading @ symbol.                                                                                    |                 |
| Facebook              | The lead's Facebook profile name or vanity URL slug.                                                                                        |                 |
| LinkedIn              | The lead's LinkedIn profile name, used to link to their professional page.                                                                  |                 |
| Skype                 | The lead's Skype handle, used for voice and video calls.                                                                                    |                 |
| Website               | The lead's website, such as a company or personal homepage.                                                                                 |                 |
| Custom Fields         | Custom field key-value pairs.                                                                                                               | <code>[]</code> |
| Tags                  | Tags to apply.                                                                                                                              | <code>[]</code> |
| Additional Fields     | Additional optional fields for the request. Includes: Status, Title, Description, Industry, Owner ID, Source ID, and Unqualified Reason ID. |                 |
| Status                | The pipeline stage the lead is in, such as New or Working.                                                                                  |                 |
| Title                 | The lead's job title or role within their organization.                                                                                     |                 |
| Description           | Free-form notes or background information about the lead.                                                                                   |                 |
| Industry              | The business sector the lead operates in.                                                                                                   |                 |
| Owner ID              | The unique identifier of the user who owns the lead. Defaults to the user who created the lead.                                             |                 |
| Source ID             | The unique identifier of the lead source.                                                                                                   |                 |
| Unqualified Reason ID | The unique identifier of the reason the lead was unqualified.                                                                               |                 |

### Update Note {#updatenote}

Updates note information.

| Input         | Comments                                                                            | Default         |
| ------------- | ----------------------------------------------------------------------------------- | --------------- |
| Connection    | The Zendesk Sell connection to use.                                                 |                 |
| Content       | The body text of the note.                                                          |                 |
| Resource Type | The type of resource the note is attached to. Possible values: lead, contact, deal. |                 |
| Resource ID   | The unique identifier of the resource the note is attached to.                      |                 |
| Tags          | Tags to apply to the note.                                                          | <code>[]</code> |
| Is Important  | When true, marks the note as important.                                             |                 |
| Type          | The type of note. Possible values: regular or other types supported by the API.     |                 |

### Update Order {#updateorder}

Updates order information.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection | The Zendesk Sell connection to use.        |         |
| Order ID   | The unique identifier of the order.        |         |
| Discount   | Overall discount on the order in percents. |         |

### Update Task {#updatetask}

Updates task information.

| Input         | Comments                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection    | The Zendesk Sell connection to use.                                                |         |
| Task ID       | The unique identifier of the task.                                                 |         |
| Content       | The description or body of the task.                                               |         |
| Resource Type | The type of resource the task is related to. Possible values: lead, contact, deal. |         |
| Resource ID   | The unique identifier of the resource the task is related to.                      |         |
| Due Date      | The date and time when the task is due. Format: ISO8601 UTC.                       |         |
| Completed     | When true, marks the task as completed.                                            |         |
| Remind At     | The date and time to send a reminder for this task. Format: ISO8601 UTC.           |         |
| Owner ID      | Defaults to the unique identifier of the user who created the task.                |         |

### Upsert Contact {#upsertcontact}

Creates a new contact or updates an existing one based on a filter value or set of filters. At least one filter query parameter is required.

| Input                  | Comments                                                                                                                                                                                                              | Default         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection             | The Zendesk Sell connection to use.                                                                                                                                                                                   |                 |
| Is Organization        | This value can be set only during creation and cannot be changed later.                                                                                                                                               |                 |
| Organization Name      | The full company name, used when the contact is an organization.                                                                                                                                                      |                 |
| First Name             | Set only when Is Organization is set to false (the contact is an individual).                                                                                                                                         |                 |
| Last Name              | Set only when Is Organization is set to false (the contact is an individual).                                                                                                                                         |                 |
| Contact Information    | Email, phone, and other contact channel details.                                                                                                                                                                      |                 |
| Email                  | The primary email address used to reach the contact, such as work@example.com.                                                                                                                                        |                 |
| Phone                  | The primary phone number for the contact, including area or country code.                                                                                                                                             |                 |
| Mobile                 | The contact's mobile number, used for SMS and calls.                                                                                                                                                                  |                 |
| Addresses              | Physical, billing, and shipping addresses.                                                                                                                                                                            |                 |
| City                   | The city of the contact's physical address.                                                                                                                                                                           |                 |
| Zip/Postal Code        | The postal or ZIP code of the contact's physical address.                                                                                                                                                             |                 |
| Country                | The country of the contact's physical address.                                                                                                                                                                        |                 |
| Billing Address        | Billing address of the contact. Requires the contact to be a customer or prospect (see customer_status and prospect_status fields for details).                                                                       |                 |
| Shipping Address       | Shipping address of the contact. Requires the contact to be a customer or prospect (see customer_status and prospect_status fields for details).                                                                      |                 |
| Custom Fields          | Custom field key-value pairs.                                                                                                                                                                                         | <code>[]</code> |
| Filters                | Custom-field filters to match against.                                                                                                                                                                                | <code>[]</code> |
| Additional Fields      | Additional optional fields for the request. Includes: Customer Status, Prospect Status, Inclusive, Creator ID, Owner ID, Contact ID, and Parent Organization ID.                                                      |                 |
| Customer Status        | Customer status of the contact. Possible values: none, current, past.                                                                                                                                                 |                 |
| Prospect Status        | Prospect status of the contact. Possible values: none, current, lost.                                                                                                                                                 |                 |
| Inclusive              | Indicates how filters should be combined. true value, the default, uses AND logic. false value uses OR logic to combine filters.                                                                                      |                 |
| Creator ID             | User ID. Returns all contacts created by that user.                                                                                                                                                                   |                 |
| Owner ID               | User ID. Returns all contacts owned by that user.                                                                                                                                                                     |                 |
| Contact ID             | The unique identifier of the organization that the contact belongs to.                                                                                                                                                |                 |
| Parent Organization ID | The unique identifier of a contact that should be set as parent for this organization. Referenced contact also has to be an organization. It can be set only for organization contacts (is_organization set to true). |                 |

### Upsert Lead {#upsertlead}

Creates a new lead or updates an existing one based on a filter value or set of filters.

| Input               | Comments                                                                                                                         | Default         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection          | The Zendesk Sell connection to use.                                                                                              |                 |
| Organization Name   | The company name. Required when the lead is an organization (when Last Name is empty).                                           |                 |
| First Name          | The given name of an individual lead.                                                                                            |                 |
| Last Name           | The family name of an individual lead.                                                                                           |                 |
| Contact Information | Email, phone, and other contact channel details.                                                                                 |                 |
| Email               | The primary email address used to reach the lead, such as work@example.com.                                                      |                 |
| Phone               | The primary phone number for the lead, including area or country code.                                                           |                 |
| Mobile              | The lead's mobile number, used for SMS and calls.                                                                                |                 |
| Addresses           | Physical, billing, and shipping addresses.                                                                                       |                 |
| City                | The city of the lead's physical address.                                                                                         |                 |
| Zip/Postal Code     | The postal or ZIP code of the lead's physical address.                                                                           |                 |
| Country             | The country of the lead's physical address.                                                                                      |                 |
| Custom Fields       | Custom field key-value pairs.                                                                                                    | <code>[]</code> |
| Filters             | Custom-field filters to match against.                                                                                           | <code>[]</code> |
| Additional Fields   | Additional optional fields for the request. Includes: Status, Inclusive, Creator ID, Owner ID, and Source ID.                    |                 |
| Status              | The pipeline stage the lead is in, such as New or Working.                                                                       |                 |
| Inclusive           | Indicates how filters should be combined. true value, the default, uses AND logic. false value uses OR logic to combine filters. |                 |
| Creator ID          | User ID. Returns all leads created by that user.                                                                                 |                 |
| Owner ID            | The unique identifier of the user who owns the lead. Defaults to the user who created the lead.                                  |                 |
| Source ID           | The unique identifier of the lead source.                                                                                        |                 |
