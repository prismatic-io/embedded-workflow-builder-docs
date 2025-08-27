---
title: Zendesk Sell Connector
sidebar_label: Zendesk Sell
description: Zendesk Sell is a sales force automation program.
---

![Zendesk Sell](./assets/zendesk-sell.png#connector-icon)
Zendesk Sell is a sales force automation program.

## Connections

### Zendesk Sell Oauth 2.0 Connection

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

| Input         | Comments | Default                                  |
| ------------- | -------- | ---------------------------------------- |
| Authorize URL |          | https://api.getbase.com/oauth2/authorize |
| Token URL     |          | https://api.getbase.com/oauth2/token     |
| Scopes        |          | read write profile                       |
| Client ID     |          |                                          |
| Client Secret |          |                                          |

## Actions

### Create Contact

Create a new contact. A contact may represent a single individual or an organization.

| Input                  | Comments                                                                                                                                                                                                             | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                                      |         |
| Name                   | Required only if the contact is an organization. is_organization is set to true.                                                                                                                                     |         |
| First Name             | The field will be set only if the contact is an individual. is_organization is set to false.                                                                                                                         |         |
| Last Name              | Required only if the contact is an individual. is_organization is set to false.                                                                                                                                      |         |
| Owner Id               | Defaults to the unique identifier of the user who created the contact.                                                                                                                                               |         |
| Is Organization        | This value can be set only during creation and cannot be changed later.                                                                                                                                              |         |
| Contact Id             | The field will be set only if the contact is an individual. is_organization is set to false.                                                                                                                         |         |
| Parent Organization Id | The unique identifier of a contact that should be set as parent for this organization. Referenced contact also has to be an organization. It can be set only for organization contacts (is_organization set to true. |         |
| Customer Status        |                                                                                                                                                                                                                      |         |
| Prospect Status        |                                                                                                                                                                                                                      |         |
| Title                  |                                                                                                                                                                                                                      |         |
| Description            |                                                                                                                                                                                                                      |         |
| Industry               |                                                                                                                                                                                                                      |         |
| Website                |                                                                                                                                                                                                                      |         |
| Email                  |                                                                                                                                                                                                                      |         |
| Phone                  |                                                                                                                                                                                                                      |         |
| Mobile                 |                                                                                                                                                                                                                      |         |
| Fax                    |                                                                                                                                                                                                                      |         |
| Twitter                |                                                                                                                                                                                                                      |         |
| Facebook               |                                                                                                                                                                                                                      |         |
| Linkedin               |                                                                                                                                                                                                                      |         |
| Skype                  |                                                                                                                                                                                                                      |         |
| Address                |                                                                                                                                                                                                                      |         |
| Billing Address        | null if contact is neither a customer nor a prospect (see customer_status and prospect_status fields for details).                                                                                                   |         |
| Shipping Address       | null if contact is neither a customer nor a prospect (see customer_status and prospect_status fields for details).                                                                                                   |         |
| Tag                    | In order to modify this, you need to supply the entire set.                                                                                                                                                          |         |
| Custom Field           | Filterable custom field.                                                                                                                                                                                             |         |

### Create Deal

Create a new deal.

| Input                     | Comments                                                                              | Default |
| ------------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                       |         |
| Name                      |                                                                                       |         |
| Contact Id                |                                                                                       |         |
| Value                     | Value of the deal. We encourage you to use a string with two decimal places.          |         |
| Currency                  | If omitted, currency will be set to the default currency of the account.              |         |
| Owner Id                  | Defaults to the unique identifier of the user that the deal is created by.            |         |
| Hot                       | Indicator of whether or not the deal is hot.                                          |         |
| Stage Id                  | If omitted, the deal will be placed in the first stage of the default pipeline.       |         |
| Last Stage Change At      | Date and time when the deal was moved into the current stage in UTC (ISO8601 format). |         |
| Added At                  | Date and time that the deal was started in UTC (ISO8601 format).                      |         |
| Source Id                 | Id of the deal Source.                                                                |         |
| Loss Reason Id            | Id of the Loss Reason.                                                                |         |
| Unqualified Reason Id     | Id of the Unqualify Reason.                                                           |         |
| Estimated Close Date      |                                                                                       |         |
| Customized Win Likelihood | User-provided win likelihood with value range 0-100.                                  |         |
| Tag                       |                                                                                       |         |
| Custom Field              |                                                                                       |         |

### Create Lead

Creates a new lead.

| Input                 | Comments                                                         | Default |
| --------------------- | ---------------------------------------------------------------- | ------- |
| Connection            |                                                                  |         |
| Last Name             | Required only if a lead is an individual. company_name is empty. |         |
| Organization Name     | Required only if a lead is an organization. last_name is empty.  |         |
| First Name            |                                                                  |         |
| Owner Id              | Defaults to user's unique identifier the lead is created by.     |         |
| Status                |                                                                  |         |
| Source Id             |                                                                  |         |
| Unqualified Reason Id |                                                                  |         |
| Title                 |                                                                  |         |
| Description           |                                                                  |         |
| Industry              |                                                                  |         |
| Website               |                                                                  |         |
| Email                 |                                                                  |         |
| Phone                 |                                                                  |         |
| Mobile                |                                                                  |         |
| Fax                   |                                                                  |         |
| Twitter               |                                                                  |         |
| Facebook              |                                                                  |         |
| Linkedin              |                                                                  |         |
| Skype                 |                                                                  |         |
| Address               |                                                                  |         |
| Tag                   |                                                                  |         |
| Custom Field          |                                                                  |         |

### Create Note

Create a new note and associate it with one resource.

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Resource Type |          |         |
| Resource Id   |          |         |
| Content       |          |         |
| Is Important  |          |         |
| Tag           |          |         |
| Type          |          |         |

### Create Order

Create a new order.

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Connection |                                                           |         |
| Deal Id    | The unique identifier of the deal.                        |         |
| Discount   | Overall discount on the order in percents. Defaults to 0. |         |

### Create Task

Creates a new task.

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Content       |                                                                     |         |
| Due Date      |                                                                     |         |
| Owner Id      | Defaults to the unique identifier of the user who created the task. |         |
| Resource Type |                                                                     |         |
| Resource Id   |                                                                     |         |
| Completed     |                                                                     |         |
| Remind At     |                                                                     |         |

### Delete Contact

Delete an existing contact. This operation cannot be undone.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Contact ID | The unique identifier of the contact. |         |

### Delete Deal

Delete an existing deal and remove all of the associated contacts from the deal in a single call.

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection |                               |         |
| Deal ID    | The ID of the deal to delete. |         |

### Delete Lead

Delete an existing lead.

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection |                               |         |
| Lead ID    | The ID of the lead to delete. |         |

### Delete Note

Delete an existing note. This operation cannot be undone.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection |                                |         |
| Note Id    | Unique identifier of the note. |         |

### Delete Order

Delete an existing order and remove all of the associated line items in a single call. This operation cannot be undone.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Id         | The unique identifier of the order. |         |

### Delete Task

Delete an existing task. This operation cannot be undone.

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection |                            |         |
| Task ID    | The unique ID of the task. |         |

### Get Contact

Returns a single contact available to the user, according to the unique contact ID provided.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Contact ID | The unique identifier of the contact. |         |

### Get Contacts Stream

Read the stream of contact events.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Position   | Your client position in Firehose stream. Possible values: top/string-from-fh-api/tail |         |
| Limit      | Limits maximum number of events in single response.                                   |         |

### Get Custom Fields Stream

Read the stream of custom fields events.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Position   | Your client position in Firehose stream. Possible values: top/string-from-fh-api/tail |         |
| Limit      | Limits maximum number of events in single response.                                   |         |

### Get Deal

Returns a single deal available to the user.

| Input      | Comments                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                         |         |
| Deal ID    | The ID of the deal to retrieve.                                                                         |         |
| Includes   | Comma-separated list of one or more resources related to the deal. Possible values: associated_contacts |         |

### Get Deals Stream

Read the stream of deal events.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Position   | Your client position in Firehose stream. Possible values: top/string-from-fh-api/tail |         |
| Limit      | Limits maximum number of events in single response.                                   |         |

### Get Lead

Returns a single lead available to the user.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection |                                 |         |
| Lead ID    | The ID of the lead to retrieve. |         |

### Get Leads Stream

Read the stream of lead events.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Position   | Your client position in Firehose stream. Possible values: top/string-from-fh-api/tail |         |
| Limit      | Limits maximum number of events in single response.                                   |         |

### Get Note

Returns a single note available to the user, according to the unique note ID provided.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection |                                |         |
| ID         | Unique identifier of the note. |         |

### Get Notes Stream

Read the stream of note events.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Position   | Your client position in Firehose stream. Possible values: top/string-from-fh-api/tail |         |
| Limit      | Limits maximum number of events in single response.                                   |         |

### Get Order

Returns a single order available to the user.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Id         | The unique identifier of the order. |         |

### Get Orders Stream

Read the stream of order events.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Position   | Your client position in Firehose stream. Possible values: top/string-from-fh-api/tail |         |
| Limit      | Limits maximum number of events in single response.                                   |         |

### Get Products Stream

Read the stream of product events

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Position   | Your client position in Firehose stream. Possible values: top/string-from-fh-api/tail |         |
| Limit      | Limits maximum number of events in single response.                                   |         |

### Get Stages Stream

Read the stream of stage events.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Position   | Your client position in Firehose stream. Possible values: top/string-from-fh-api/tail |         |
| Limit      | Limits maximum number of events in single response.                                   |         |

### Get Stream

Provides a stream of changes to Sell data.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Resource   | The resource to get the stream for.                                                   |         |
| Position   | Your client position in Firehose stream. Possible values: top/string-from-fh-api/tail |         |
| Limit      | Limits maximum number of events in single response.                                   |         |

### Get Task

Returns a single task available to the user according to the unique task ID provided.

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection |                            |         |
| Task ID    | The unique ID of the task. |         |

### Get Tasks Stream

Read the stream of task events.

| Input      | Comments                                                                              | Default |
| ---------- | ------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                       |         |
| Position   | Your client position in Firehose stream. Possible values: top/string-from-fh-api/tail |         |
| Limit      | Limits maximum number of events in single response.                                   |         |

### List Account Details

Retrieve account details

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Contacts

Returns all contacts available to the user according to the parameters provided.

| Input                 | Comments                                                                                                                        | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                 |         |
| Page                  | The page number to start from. Page numbering is 1-based and omitting the page parameter will return the first page.            |         |
| Per Page              | The number of records to return per page. Default limit is 25 and maximum number that can be returned is 100.                   |         |
| Sort By               | A field to sort by. You can sort by filterable custom fields as well.                                                           |         |
| Ids                   | Comma-separated list of the IDs for the contacts you want to be returned in your request.                                       |         |
| Creator Id            | User ID. Returns all contacts created by that user.                                                                             |         |
| Owner Id              | User ID. Returns all contacts owned by that user.                                                                               |         |
| Is Organization       | Indicates whether or not this contact refers to an organization or an individual.                                               |         |
| Contact Id            | The unique identifier of the organization that the contact belongs to.                                                          |         |
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
| Custom Field          | Filterable custom field.                                                                                                        |         |
| Inclusive             | Indicates how filters should be combine. true value, the default, uses AND logic. false value uses OR logic to combine filters. |         |

### List Custom Fields

Returns all custom fields associated with the specified resource type.

| Input         | Comments                                                       | Default |
| ------------- | -------------------------------------------------------------- | ------- |
| Connection    |                                                                |         |
| Resource Type | Specifies the type for which custom fields should be returned. |         |

### List Deals

Returns all deals available to the user.

| Input                | Comments                                                                                                                        | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                 |         |
| Page                 | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.              |         |
| Per Page             | Number of records to return per page. Default limit is _25_ and the maximum number that can be returned is _100_.               |         |
| Sort By              | A field to sort by. You can sort by filterable custom fields as well.                                                           |         |
| Ids                  | Comma-separated list of deal IDs to be returned in a request.                                                                   |         |
| Includes             | Comma-separated list of one or more resources related to a deal.                                                                |         |
| Creator Id           | Unique identifier of the user the deal was created by. Returns all deals created by the user.                                   |         |
| Owner Id             | Unique identifier of the user the deal is owned by. Returns all deals owned by the user.                                        |         |
| Contact Id           | Unique identifier of a primary contact.                                                                                         |         |
| Organization Id      | Unique identifier of an organization.                                                                                           |         |
| Hot                  | Indicator of whether or not the deal is hot.                                                                                    |         |
| Source Id            | Id of the Source.                                                                                                               |         |
| Stage Id             | Id of the Stage.                                                                                                                |         |
| Name                 | Name of the deal.                                                                                                               |         |
| Value                | Value of the deal. We encourage you to use a string with two decimal places.                                                    |         |
| Estimated Close Date | Estimated close date of the deal.                                                                                               |         |
| Custom Field         | Filterable custom field.                                                                                                        |         |
| Inclusive            | Indicates how filters should be combine. true value, the default, uses AND logic. false value uses OR logic to combine filters. |         |

### List Leads

Returns all leads available to the user.

| Input                | Comments                                                                                                                        | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                 |         |
| Page                 | Page number to start from. Page numbering starts at 1 and omitting the page parameter will return the first page.               |         |
| Per Page             | Number of records to return per page. The default limit is 25 and the maximum number that can be returned is 100.               |         |
| Sort By              | A field to sort by. You can sort by filterable custom fields as well.                                                           |         |
| Ids                  | Comma-separated list of lead IDs to be returned in a request.                                                                   |         |
| Creator Id           | User ID. Returns all leads created by that user.                                                                                |         |
| Owner Id             | User ID. Returns all leads owned by that user.                                                                                  |         |
| Source Id            | Id of the Source.                                                                                                               |         |
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
| Custom Field         | Filterable custom field.                                                                                                        |         |
| Inclusive            | Indicates how filters should be combine. true value, the default, uses AND logic. false value uses OR logic to combine filters. |         |

### List Notes

Returns all notes available to the user, according to the parameters provided.

| Input         | Comments                                                                                                                                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                             |         |
| Page          | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                                                                                                          |         |
| Per Page      | Number of records to return per page. The default limit is 25 and the maximum number that can be returned at one time is 100.                                                                                               |         |
| Sort By       | A field to sort by. Default ordering is ascending. If you want to change the sort ordering to descending, append :desc to the field e.g. sort_by=resource_type:desc. Possible values, resource_type, created_at, updated_at |         |
| Includes      | Comma-separated list of one or more resources related to the note. Not supported at the moment.                                                                                                                             |         |
| Ids           | Comma-separated list of note IDs to be returned in a request.                                                                                                                                                               |         |
| Creator Id    | Unique identifier of the user. Returns all notes created by the user.                                                                                                                                                       |         |
| Q             | A query string to search for. Performs a full text search on the content field.                                                                                                                                             |         |
| Resource Type | Name of the type of resource to search for. Possible values: lead, contact, deal                                                                                                                                            |         |
| Resource Id   | Unique identifier of the resource to search for.                                                                                                                                                                            |         |

### List Orders

Returns all orders available to the user.

| Input      | Comments                                                                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                                                      |         |
| Page       | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                   |         |
| Per Page   | Number of records to return per page. Defaults to 25. Maximum is 500.                                                                |         |
| Ids        | Comma-separated list of IDs to be returned in request.                                                                               |         |
| Sort By    | A field to sort by. Default ordering is ascending. If you want to change the sort ordering to descending, append :desc to the field. |         |
| Deal Id    | Id of the deal order is associated to.                                                                                               |         |

### List Pipelines

Returns all pipelines available to the user, according to the parameters provided.

| Input      | Comments                                                                                                                                                                                                             | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                                      |         |
| Page       | Page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                                                                                                   |         |
| Per Page   | Number of records to return per page. Default limit is 25 and the maximum number that can be returned is 100.                                                                                                        |         |
| Ids        | Comma-separated list of IDs to be returned in request.                                                                                                                                                               |         |
| Sort By    | Comma-separated list of fields to sort by. The sort criteria is applied in the order specified. The default ordering is ascending. If you want to change the sort ordering to descending, append :desc to the field. |         |
| Name       | Name of the pipeline to search for. This parameter is used in a strict sense.                                                                                                                                        |         |
| Disabled   | Parameter that determines whether to return disabled or enabled pipelines.                                                                                                                                           |         |

### List Stages

Returns all stages available to the user.

| Input       | Comments                                                                                                                                                                                                                                                                                    | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                                                                                                                                                                                             |         |
| Pipeline Id | The unique identifier of the pipeline that contains this stage.                                                                                                                                                                                                                             |         |
| Page        | The page number to start from. Page numbering starts at 1, and omitting the page parameter will return the first page.                                                                                                                                                                      |         |
| Per Page    | The number of records to return per page. The default limit is 25 and the maximum number that can be returned is 100.                                                                                                                                                                       |         |
| Sort By     | Comma-separated list of fields to sort by. The sort criteria is applied in the order specified. The default ordering is ascending. If you want to change the sort ordering to descending, append :desc to the field. Possible values: pipeline_id, id, name, category, position, likelihood |         |
| Ids         | Comma-separated list of stage IDs to be returned in a request.                                                                                                                                                                                                                              |         |
| Name        | Name of the stage you're searching for. This parameter is used in a strict sense.                                                                                                                                                                                                           |         |
| Active      | Parameter that determines whether to return active or inactive stages.                                                                                                                                                                                                                      |         |

### List Tasks

Returns all tasks available to the user.

| Input         | Comments                                                                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                                                                      |         |
| Page          | Page number to start from. Page numbering starts at 1 and omitting the page parameter will return the first page.                    |         |
| Per Page      | Number of records to return per page. The default limit is 25 and the maximum number that can be returned is 100.                    |         |
| Sort By       | A field to sort by. The default ordering is ascending. If you want to change the sort order to descending, append :desc to the field |         |
| Ids           | Comma-separated list of task IDs to be returned in a request.                                                                        |         |
| Creator Id    | Unique identifier of the user. Returns all tasks created by the user.                                                                |         |
| Owner Id      | Unique identifier of the user. Returns all tasks owned by the user.                                                                  |         |
| Q             | A query string to search for. Performs a full text search on the content field.                                                      |         |
| Type          | Type of tasks to search for. Possible values: floating, related                                                                      |         |
| Resource Type | Name of the resource type to search for. Possible values: lead, contact, deal                                                        |         |
| Resource Id   | Unique identifier of the resource that you're searching for.                                                                         |         |
| Completed     | Indicates whether the query will return tasks that are completed or not.                                                             |         |
| Overdue       | Indicates whether the query will return tasks where the due_date parameter has been passed or not.                                   |         |
| Remind        | Indicates whether the query will return tasks with reminders or without reminders.                                                   |         |

### Raw Request

Send raw HTTP request To Zendesk Sell

| Input                   | Comments                                                                                                                            | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                     |         |
| URL                     | This is the URL to call.                                                                                                            |         |
| Method                  | The HTTP method to use.                                                                                                             |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                           |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                    |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2. |         |
| Header                  | A list of headers to send with the request.                                                                                         |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                            | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                 |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                    | false   |
| Api Version             | The version of the API to use.                                                                                                      | v2      |

### Update Contact

Updates contact information. If the specified contact does not exist, the request will return an error.

| Input                  | Comments                                                                                                                                                                                                                                                                       | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                                                                                                                                                                                                                |         |
| Id                     | The unique identifier of the contact.                                                                                                                                                                                                                                          |         |
| Name                   | This field will be set only if the contact is an organization. is_organization is set to true.                                                                                                                                                                                 |         |
| First Name             | The field will be set only if the contact is an individual. is_organization is set to false.                                                                                                                                                                                   |         |
| Last Name              | The field will be set only if the contact is an individual. is_organization is set to false.                                                                                                                                                                                   |         |
| Contact Id             | The field will be set only if the contact is an individual. is_organization is set to false.                                                                                                                                                                                   |         |
| Parent Organization Id | The unique identifier of a contact that should be set as parent for this organization. Setting this to null will clear existing parent relation. Referenced contact also has to be an organization. It can be set only for organization contacts (is_organization set to true. |         |
| Owner Id               |                                                                                                                                                                                                                                                                                |         |
| Customer Status        | Customer status of the contact. Possible values: none, current, past                                                                                                                                                                                                           |         |
| Prospect Status        |                                                                                                                                                                                                                                                                                |         |
| Title                  |                                                                                                                                                                                                                                                                                |         |
| Description            |                                                                                                                                                                                                                                                                                |         |
| Industry               |                                                                                                                                                                                                                                                                                |         |
| Website                |                                                                                                                                                                                                                                                                                |         |
| Email                  |                                                                                                                                                                                                                                                                                |         |
| Phone                  |                                                                                                                                                                                                                                                                                |         |
| Mobile                 |                                                                                                                                                                                                                                                                                |         |
| Fax                    |                                                                                                                                                                                                                                                                                |         |
| Twitter                |                                                                                                                                                                                                                                                                                |         |
| Facebook               |                                                                                                                                                                                                                                                                                |         |
| Linkedin               |                                                                                                                                                                                                                                                                                |         |
| Skype                  |                                                                                                                                                                                                                                                                                |         |
| Address                |                                                                                                                                                                                                                                                                                |         |
| Billing Address        | Can be updated if contact is either a customer or a prospect (see customer_status and prospect_status fields for details).                                                                                                                                                     |         |
| Shipping Address       | Can be updated if contact is either a customer or a prospect (see customer_status and prospect_status fields for details).                                                                                                                                                     |         |
| Tag                    | In order to modify this, you need to supply the entire set.                                                                                                                                                                                                                    |         |
| Custom Field           | Filterable custom field.                                                                                                                                                                                                                                                       |         |

### Update Deal

Updates deal information.

| Input                     | Comments                                                                              | Default |
| ------------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                       |         |
| Deal ID                   | The ID of the deal to update.                                                         |         |
| Name                      |                                                                                       |         |
| Value                     | Value of the deal. We encourage you to use a string with two decimal places.          |         |
| Currency                  |                                                                                       |         |
| Owner Id                  |                                                                                       |         |
| Hot                       |                                                                                       |         |
| Stage Id                  |                                                                                       |         |
| Last Stage Change At      | Date and time when the deal was moved into the current stage in UTC (ISO8601 format). |         |
| Added At                  | Date and time that the deal was started in UTC (ISO8601 format).                      |         |
| Source Id                 | Id of the deal Source.                                                                |         |
| Loss Reason Id            | Id of the Loss Reason.                                                                |         |
| Unqualified Reason Id     | Id of the Unqualify Reason.                                                           |         |
| Contact Id                | Unique identifier of a primary contact.                                               |         |
| Estimated Close Date      |                                                                                       |         |
| Customized Win Likelihood | User-provided win likelihood with value range 0-100.                                  |         |
| Tag                       |                                                                                       |         |
| Custom Field              |                                                                                       |         |

### Update Lead

Updates lead information.

| Input                 | Comments                                          | Default |
| --------------------- | ------------------------------------------------- | ------- |
| Connection            |                                                   |         |
| Lead Id               |                                                   |         |
| Owner Id              |                                                   |         |
| First Name            |                                                   |         |
| Last Name             |                                                   |         |
| Organization Name     |                                                   |         |
| Status                |                                                   |         |
| Source Id             |                                                   |         |
| Unqualified Reason Id |                                                   |         |
| Title                 |                                                   |         |
| Description           |                                                   |         |
| Industry              |                                                   |         |
| Website               |                                                   |         |
| Email                 |                                                   |         |
| Phone                 |                                                   |         |
| Mobile                |                                                   |         |
| Fax                   |                                                   |         |
| Twitter               |                                                   |         |
| Facebook              |                                                   |         |
| Linkedin              |                                                   |         |
| Skype                 |                                                   |         |
| Address               |                                                   |         |
| Tag                   | In order to modify, you need to supply the entire |         |
| Custom Field          |                                                   |         |

### Update Note

Updates note information.

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Resource Type |          |         |
| Resource Id   |          |         |
| Content       |          |         |
| Is Important  |          |         |
| Tag           |          |         |
| Type          |          |         |

### Update Order

Updates order information.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Id         | The unique identifier of the order.        |         |
| Discount   | Overall discount on the order in percents. |         |

### Update Task

Updates task information.

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| Task ID       | The unique ID of the task.                                          |         |
| Content       |                                                                     |         |
| Due Date      |                                                                     |         |
| Owner Id      | Defaults to the unique identifier of the user who created the task. |         |
| Resource Type |                                                                     |         |
| Resource Id   |                                                                     |         |
| Completed     |                                                                     |         |
| Remind At     |                                                                     |         |

### Upsert Contact

Create a new contact or update an existing, based on a value of a filter or a set of filters. At least a single filter - query parameter - is required.

| Input                  | Comments                                                                                                                                                                                                                                                                       | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                                                                                                                                                                                                                |         |
| Creator Id             | User ID. Returns all contacts created by that user.                                                                                                                                                                                                                            |         |
| Owner Id               | User ID. Returns all contacts owned by that user.                                                                                                                                                                                                                              |         |
| Is Organization        | Indicates whether or not this contact refers to an organization or an individual.                                                                                                                                                                                              |         |
| Contact Id             | The unique identifier of the organization that the contact belongs to.                                                                                                                                                                                                         |         |
| Parent Organization Id | The unique identifier of a contact that should be set as parent for this organization. Setting this to null will clear existing parent relation. Referenced contact also has to be an organization. It can be set only for organization contacts (is_organization set to true. |         |
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
| Custom Field           | Filterable custom field.                                                                                                                                                                                                                                                       |         |
| Filter                 | Filterable custom field.                                                                                                                                                                                                                                                       |         |
| Inclusive              | Indicates how filters should be combine. true value, the default, uses AND logic. false value uses OR logic to combine filters.                                                                                                                                                |         |

### Upsert Lead

Create a new lead or update an existing, based on a value of a filter or a set of filters.

| Input                | Comments                                                                                                                        | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                 |         |
| Creator Id           | User ID. Returns all leads created by that user.                                                                                |         |
| Owner Id             | User ID. Returns all leads owned by that user.                                                                                  |         |
| Source Id            | Id of the Source.                                                                                                               |         |
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
| Custom Field         | Filterable custom field.                                                                                                        |         |
| Filter               | Filterable custom field.                                                                                                        |         |
| Inclusive            | Indicates how filters should be combine. true value, the default, uses AND logic. false value uses OR logic to combine filters. |         |
