---
title: HubSpot Connector
sidebar_label: HubSpot
description: Manage records and associations in the HubSpot CRM platform
---

![HubSpot](./assets/hubspot.png#connector-icon)
Manage records and associations in the HubSpot CRM platform

## Connections

### HubSpot OAuth 2.0

Authenticate requests to Hubspot using OAuth 2.0.

The HubSpot component authenticates requests through a OAuth 2.0 credential.
Information on how to generate an OAuth 2.0 credential with HubSpot can be found [here](https://developers.hubspot.com/docs/api/working-with-oauth)
Now, you will have to configure a new OAuth 2.0 HubSpot connection.

- For **Client ID** and **Client Secret** enter the values that you got from the HubSpot auth settings.
- For **Scopes** choose from the list found on the HubSpot [docs](https://developers.hubspot.com/docs/api/working-with-oauth)
- Under the **Redirect URLs** section add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                                                                 | Default                                 |
| ----------------- | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| Authorize URL     | The OAuth 2.0 Authorization URL for HubSpot. You can include optional scopes here.       | https://app.hubspot.com/oauth/authorize |
| Scopes            | A space-delimited set of one or more scopes to get the user's permission to access.      |                                         |
| Client ID         | Provide the Client Id you received from the HubSpot Developer Console.                   |                                         |
| Client Secret     | Provide the Client Secret you received from the HubSpot Developer Console.               |                                         |
| App ID            | Provide the App ID from the HubSpot Developer Console. Required for Webhooks.            |                                         |
| Developer API Key | Provide the Developer API Key from the HubSpot Developer Console. Required for Webhooks. |                                         |

### Private App Access Token

Authenticate requests to Hubspot using a private app access token.

| Input        | Comments                                                                                                                        | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Access Token | An access token generated when you create a private app. For testing purposes only - use OAuth 2.0 for production integrations. |         |

## Triggers

### Event Type Subscription

Get notified when a HubSpot event happens.

| Input                      | Comments                                                                                                                                                                  | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 |                                                                                                                                                                           |         |
| Event Types                | Events to listen for. Make sure to have the right permissions.                                                                                                            |         |
| Overwrite Webhook Settings | HubSpot only permits one Target URL per App ID. If there's an existing webhook configuration for the current one, this execution will fail unless this toggle is enabled. | false   |

### New and Updated Custom Records

Checks for new and updated custom records.

| Input                | Comments                                                                                                                                                                                                                      | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Show New Records     | Show new records.                                                                                                                                                                                                             | true    |
| Show Updated Records | Show updated records.                                                                                                                                                                                                         | true    |
| Connection           |                                                                                                                                                                                                                               |         |
| Object Type          | The type of custom object to search for.                                                                                                                                                                                      |         |
| Search Properties    | Include properties such as filters and sorts, or specify the properties to be returned. If empty, only the default properties will be returned. For more information, see https://developers.hubspot.com/docs/api/crm/search. |         |
| Search Limit         | The number of records to return. The maximum value is 200.                                                                                                                                                                    | 10      |
| Fetch All            | Turn this ON to get more than 200 results. Note that this can be a large amount of data.                                                                                                                                      | false   |
| Timeout              | The maximum time a client will await a request                                                                                                                                                                                |         |

### New and Updated Records

Checks for new and updated records.

| Input                | Comments                                                                                                                                                                                                                      | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Show New Records     | Show new records.                                                                                                                                                                                                             | true    |
| Show Updated Records | Show updated records.                                                                                                                                                                                                         | true    |
| Connection           |                                                                                                                                                                                                                               |         |
| Search Endpoint      | The endpoint to search for objects or engagements. For Custom objects don't forget to fill the Object Type input.                                                                                                             |         |
| Search Properties    | Include properties such as filters and sorts, or specify the properties to be returned. If empty, only the default properties will be returned. For more information, see https://developers.hubspot.com/docs/api/crm/search. |         |
| Search Limit         | The number of records to return. The maximum value is 200.                                                                                                                                                                    | 10      |
| Fetch All            | Turn this ON to get more than 200 results. Note that this can be a large amount of data.                                                                                                                                      | false   |
| Timeout              | The maximum time a client will await a request                                                                                                                                                                                |         |

### Webhook

Receive and validate webhook requests from HubSpot for webhooks you configure.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

## Actions

### Archive Association

Remove the associations between two provided objects

| Input               | Comments                                                                                                                                                                                                      | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| From Object Type    | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined. |         |
| To Object Type      | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined.   |         |
| From Id             | Provide a value for the unique identifier of the first object                                                                                                                                                 |         |
| To Id               | Provide a value for the unique identifier of the second object                                                                                                                                                |         |
| Type Of Association | Provide a value for the type of association to perform. You can get the set of available values for this input by making a step using the "List Association Types"                                            |         |
| Timeout             | The maximum time a client will await a request                                                                                                                                                                |         |
| Connection          |                                                                                                                                                                                                               |         |

### Archive Batch Contacts

Archive a batch of contacts by ID

| Input       | Comments                                       | Default |
| ----------- | ---------------------------------------------- | ------- |
| Contact Ids | A list of contact IDs.                         |         |
| Timeout     | The maximum time a client will await a request |         |
| Connection  |                                                |         |

### Archive Batch Engagement

Archives a batch of selected engagements by their IDs.

| Input             | Comments                                       | Default |
| ----------------- | ---------------------------------------------- | ------- |
| Connection        |                                                |         |
| Engagement Object | Select an engagement object.                   |         |
| Engagement Ids    | A list of engagement IDs.                      |         |
| Timeout           | The maximum time a client will await a request |         |

### Cancel Import

Cancels an active import.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection |                                                |         |
| Import Id  | Provide the unique identifier of the import.   |         |
| Timeout    | The maximum time a client will await a request |         |

### Create Association

Create an association between the objects identified in the step

| Input               | Comments                                                                                                                                                                                                      | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| From Object Type    | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined. |         |
| To Object Type      | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined.   |         |
| From Id             | Provide a value for the unique identifier of the first object                                                                                                                                                 |         |
| To Id               | Provide a value for the unique identifier of the second object                                                                                                                                                |         |
| Type Of Association | Provide a value for the type of association to perform. You can get the set of available values for this input by making a step using the "List Association Types"                                            |         |
| Timeout             | The maximum time a client will await a request                                                                                                                                                                |         |
| Connection          |                                                                                                                                                                                                               |         |

### Create Batch Contacts

Create a batch of contacts

| Input          | Comments                                                                                                        | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                 |         |
| Batch Contacts | An array of contact objects to create. See https://developers.hubspot.com/docs/api/crm/contacts for properties. |         |
| Timeout        | The maximum time a client will await a request                                                                  |         |

### Create Batch Engagement

Creates a batch of selected engagements.

| Input             | Comments                                       | Default |
| ----------------- | ---------------------------------------------- | ------- |
| Connection        |                                                |         |
| Engagement Object | Select an engagement object.                   |         |
| Batch Engagements | An array of engagements.                       |         |
| Timeout           | The maximum time a client will await a request |         |

### Create Company

Create a new company

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Company Name   | Provide a string value for the name of the company                                                            |         |
| Industry       | Provide a string value for the industry of the company                                                        |         |
| Phone          | Provide a value for the phone number of the company.                                                          |         |
| Description    | Provide the description of the object.                                                                        |         |
| Domain         | Provide a string value for the domain of the company                                                          |         |
| City           | Provide a string value for the city of the company                                                            |         |
| State          | Provide a string value for the state of the company                                                           |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                              |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Timeout        | The maximum time a client will await a request                                                                |         |
| Connection     |                                                                                                               |         |

### Create Contact

Create a new contact

| Input          | Comments                                                                                                                                                                      | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| First Name     | Provide a string value for the first name of the contact                                                                                                                      |         |
| Last Name      | Provide a string value for the last name of the contact                                                                                                                       |         |
| Phone          | Provide a value for the phone number.                                                                                                                                         |         |
| Company        | Provide a string value for the company of the contact                                                                                                                         |         |
| Email          | Provide a string value for the email of the contact. Getting contacts by email performs a search function and will return a successful output even when no results are found. |         |
| Website        | Provide a string value for the website.                                                                                                                                       |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                                                                                              |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                 |         |
| Timeout        | The maximum time a client will await a request                                                                                                                                |         |
| Connection     |                                                                                                                                                                               |         |

### Create Custom Object

Creates new custom object schema

| Input                        | Comments                                                                                                                                 | Default                 |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection                   |                                                                                                                                          |                         |
| Singular Label               | The word for one object. (There's no way to change this later.)                                                                          |                         |
| Plural Label                 | The word for multiple objects. (There's no way to change this later.)                                                                    |                         |
| Required Properties          | The names of properties that should be required when creating an object of this type.                                                    | <code>["000xxx"]</code> |
| Searchable Properties        | Names of properties that will be indexed for this object type in by HubSpot's product search.                                            | <code>["000xxx"]</code> |
| Secondary Display Properties | The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type. | <code>["000xxx"]</code> |
| Properties                   | Properties defined for this object type.                                                                                                 |                         |
| Associated Objects           | Associations defined for this object type.                                                                                               | <code>["000xxx"]</code> |
| Name                         | A unique name for this object. For internal use only.                                                                                    |                         |
| Timeout                      | The maximum time a client will await a request                                                                                           |                         |
| Values                       | The names of the fields and their values to use when creating/updating a record.                                                         |                         |
| Dynamic Fields               | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                            |                         |

### Create Deal

Create a new deal

| Input          | Comments                                                                                                                                                                                              | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Amount         | Provide a string value for the amount.                                                                                                                                                                |         |
| Close Date     | Provide a date representing when the sale will close.                                                                                                                                                 |         |
| Deal Name      | Provide a string value for the name of the deal                                                                                                                                                       |         |
| Owner Id       | Provide a string value for the owner of the resource                                                                                                                                                  |         |
| Pipeline       | Provide a string value for which pipeline to interact with.                                                                                                                                           |         |
| Deal Stage     | Provide a value for the stage of the deal. Deal stages allow you to categorize and track the progress of the deals that you are working on.                                                           |         |
| Priority       | Provide a string value for priority of the deal.                                                                                                                                                      |         |
| Deal Type      | Provide a string value for the type of deal. By default, categorize your deal as either a New Business or Existing Business. The picklist of values for this property is configurable through HubSpot |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                                                                                                                      |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                         |         |
| Timeout        | The maximum time a client will await a request                                                                                                                                                        |         |
| Connection     |                                                                                                                                                                                                       |         |

### Create Engagement

Create a communication, email, call, meeting, note, postal mail or task engagement in HubSpot CRM.

| Input             | Comments                                                                                                                                                                 | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                                                                                                          |         |
| Engagement Object | Select an engagement object.                                                                                                                                             |         |
| Associations      | To create and associate a task with existing records.                                                                                                                    |         |
| Properties        | A properties object, attributes depend on the engagement type. For possible properties for each engagement type go to https://developers.hubspot.com/docs/api/crm/tasks. |         |
| Timeout           | The maximum time a client will await a request                                                                                                                           |         |

### Create Line Item

Create a new line item

| Input                          | Comments                                                                                                                              | Default |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Name                           | Provide a string value for the name of the line item.                                                                                 |         |
| Product Id                     | Provide the unique identifier of the product.                                                                                         |         |
| Recurring Billing Frequency    | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Recurring Billing Monthly Rate | Provide a string value for the quantity of product in the line item.                                                                  |         |
| Quantity                       | Provide a string value for the quantity of product in the line item.                                                                  |         |
| Price                          | Provide the price of the product.                                                                                                     |         |
| Values                         | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields                 | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                        | The maximum time a client will await a request                                                                                        |         |
| Connection                     |                                                                                                                                       |         |

### Create Product

Create a new product

| Input                       | Comments                                                                                                                              | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Name                | Provide the name of the product.                                                                                                      |         |
| Description                 | Provide the description of the object.                                                                                                |         |
| Product SKU                 | Provide the SKU of the product.                                                                                                       |         |
| Price                       | Provide the price of the product.                                                                                                     |         |
| Recurring Billing Frequency | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Unit Cost                   | Provide the unit cost of the product.                                                                                                 |         |
| Values                      | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields              | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                     | The maximum time a client will await a request                                                                                        |         |
| Connection                  |                                                                                                                                       |         |

### Create Webhook

Create a webhook in HubSpot

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Event Type    | Type of event to listen for. Can be one of create, delete, deletedForPrivacy, or propertyChange.         |         |
| Property Name | The internal name of the property to monitor for changes. Only applies when eventType is propertyChange. |         |
| Active        | Determines if the subscription is active or paused. Defaults to false.                                   | false   |
| Timeout       | The maximum time a client will await a request                                                           |         |

### Delete all Instanced Webhooks

Delete all webhooks created by this instance in HubSpot

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection |                                                |         |
| Timeout    | The maximum time a client will await a request |         |

### Delete Company

Delete an existing company by Id

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Company Id | Provide a value for the unique identifier of the company. |         |
| Timeout    | The maximum time a client will await a request            |         |
| Connection |                                                           |         |

### Delete Contact

Delete a contact by Id

| Input      | Comments                                                         | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| Contact Id | Provide a string value for the unique identifier of the contact. |         |
| Timeout    | The maximum time a client will await a request                   |         |
| Connection |                                                                  |         |

### Delete Custom Object

Removes custom object schema

| Input                   | Comments                                                | Default |
| ----------------------- | ------------------------------------------------------- | ------- |
| Connection              |                                                         |         |
| Object Type             | Provide a string value for the type of object           |         |
| Timeout                 | The maximum time a client will await a request          |         |
| Return Archived Results | Whether to return only results that have been archived. | false   |

### Delete Deal

Delete a deal by its Id

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Deal Id    | Provide the unique identifier of the deal      |         |
| Timeout    | The maximum time a client will await a request |         |
| Connection |                                                |         |

### Delete Engagement

Deletes an engagement by its ID.

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Connection        |                                                                    |         |
| Engagement Object | Select an engagement object.                                       |         |
| Engagement Id     | The unique identifier of the engagement. A taskId, meetingId, etc. |         |
| Timeout           | The maximum time a client will await a request                     |         |

### Delete Line Item

Delete an existing line item by Id

| Input        | Comments                                        | Default |
| ------------ | ----------------------------------------------- | ------- |
| Line Item Id | Provide the unique identifier of the line item. |         |
| Timeout      | The maximum time a client will await a request  |         |
| Connection   |                                                 |         |

### Delete Product

Delete a product by Id

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Product Id | Provide the unique identifier of the product.  |         |
| Timeout    | The maximum time a client will await a request |         |
| Connection |                                                |         |

### Delete Webhook

Delete a webhook by ID in HubSpot

| Input           | Comments                                       | Default |
| --------------- | ---------------------------------------------- | ------- |
| Connection      |                                                |         |
| Subscription ID | The ID of the subscription to delete           |         |
| Timeout         | The maximum time a client will await a request |         |

### Export CRM Data

Begins exporting CRM data for the portal as specified in the request body.

| Input                                                        | Comments                                                                                                                                                                                                                                                    | Default |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                                                   |                                                                                                                                                                                                                                                             |         |
| Schema Type                                                  | Schema type for the export.                                                                                                                                                                                                                                 | VIEW    |
| Format                                                       | The format of the export file.                                                                                                                                                                                                                              | CSV     |
| Export Name                                                  | The name of the export.                                                                                                                                                                                                                                     |         |
| Object Properties                                            | A list of the properties you want included in your export.                                                                                                                                                                                                  |         |
| Object Type                                                  | The name or ID of the object you're exporting. For standard objects, you can use the object's name (e.g., CONTACT), but for custom objects, you must use the objectTypeId value, you can find this value in the response of the List Custom Objects action. |         |
| Language                                                     | The language of the export file.                                                                                                                                                                                                                            |         |
| List Id (Only and required for PublicExportListRequest)      | The ILS List ID of the list to export.                                                                                                                                                                                                                      |         |
| Public CRM Search Request (Only for PublicExportViewRequest) | Indicates which data should be exported based on certain property values and search queries.                                                                                                                                                                |         |
| Associated Object Type                                       | The name or ID of an associated object to include in the export. If you include an associated object, the export will contain the associated record IDs of that object and the records' primary display property value.                                     |         |
| Timeout                                                      | The maximum time a client will await a request                                                                                                                                                                                                              |         |

### Get an Import

Get a complete summary of an import record, including any updates.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection |                                                |         |
| Import Id  | Provide the unique identifier of the import.   |         |
| Timeout    | The maximum time a client will await a request |         |

### Get Batch Contacts

Read a batch of contacts by internal ID, or unique property values.

| Input                   | Comments                                                | Default |
| ----------------------- | ------------------------------------------------------- | ------- |
| Connection              |                                                         |         |
| Properties With History | A list of properties to read by.                        |         |
| Property                | A list of properties to read by.                        |         |
| Id Property             | An ID property to search by                             |         |
| Contact Ids             | A list of contact IDs.                                  |         |
| Return Archived Results | Whether to return only results that have been archived. | false   |
| Timeout                 | The maximum time a client will await a request          |         |

### Get Company

Retrieve the information or metadata of a company by Id, domain, or name

| Input                           | Comments                                                                         | Default |
| ------------------------------- | -------------------------------------------------------------------------------- | ------- |
| Company Id                      | Provide a value for the unique identifier of the company.                        |         |
| Company Name                    | Provide a string value for the name of the company                               |         |
| Domain                          | Provide a string value for the domain of the company                             |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response. |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.        |         |
| Return Archived Results         | Whether to return only results that have been archived.                          | false   |
| Timeout                         | The maximum time a client will await a request                                   |         |
| Connection                      |                                                                                  |         |

### Get Contact

Get the information and metadata of a contact by Id or Email

| Input                           | Comments                                                                                                                                                                      | Default |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Contact Id                      | Provide a string value for the unique identifier of the contact.                                                                                                              |         |
| Email                           | Provide a string value for the email of the contact. Getting contacts by email performs a search function and will return a successful output even when no results are found. |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                                                                                              |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                                                                                                     |         |
| Return Archived Results         | Whether to return only results that have been archived.                                                                                                                       | false   |
| Timeout                         | The maximum time a client will await a request                                                                                                                                |         |
| Connection                      |                                                                                                                                                                               |         |

### Get Current User

Return information about the current session's user.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Timeout    | The maximum time a client will await a request |         |
| Connection |                                                |         |

### Get Custom Object

Retrieves a specific custom object

| Input       | Comments                                       | Default |
| ----------- | ---------------------------------------------- | ------- |
| Connection  |                                                |         |
| Timeout     | The maximum time a client will await a request |         |
| Object Type | Provide a string value for the type of object  |         |

### Get Deal

Retrieve information and metadata about a deal by its Id or name

| Input                           | Comments                                                                         | Default |
| ------------------------------- | -------------------------------------------------------------------------------- | ------- |
| Deal Id                         | Provide the unique identifier of the deal                                        |         |
| Deal Name                       | Provide a string value for the name of the deal                                  |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response. |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.        |         |
| Return Archived Results         | Whether to return only results that have been archived.                          | false   |
| Timeout                         | The maximum time a client will await a request                                   |         |
| Connection                      |                                                                                  |         |

### Get Engagement

Get a communication, email, call, meeting, note, postal mail or task engagement object from HubSpot CRM.

| Input                           | Comments                                                                                                                                                    | Default |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      |                                                                                                                                                             |         |
| Engagement Object               | Select an engagement object.                                                                                                                                |         |
| Engagement Id                   | The unique identifier of the engagement. A taskId, meetingId, etc.                                                                                          |         |
| Properties To Return            | Properties to be returned in the response. If the specified property is not present on the requested object, it will be ignored.                            |         |
| Property With History To Return | A property to be returned along with it's history of previous values. If the specified property is not present on the requested object, it will be ignored. |         |
| Associations                    | List of object types to retrieve associated IDs for. If the specified association do not exist, it will be ignored.                                         |         |
| Return Archived Results         | Whether to return only results that have been archived.                                                                                                     | false   |
| Id Property                     | The name of a property whose values are unique for this object type.                                                                                        |         |
| Timeout                         | The maximum time a client will await a request                                                                                                              |         |

### Get Line Item

Retrieve the information and metadata of a line item by Id

| Input                           | Comments                                                                         | Default |
| ------------------------------- | -------------------------------------------------------------------------------- | ------- |
| Line Item Id                    | Provide the unique identifier of the line item.                                  |         |
| Name                            | Provide a string value for the name of the line item.                            |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response. |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.        |         |
| Return Archived Results         | Whether to return only results that have been archived.                          | false   |
| Timeout                         | The maximum time a client will await a request                                   |         |
| Connection                      |                                                                                  |         |

### Get Product

Retrieve the information and metadata of a product by Id or name

| Input                           | Comments                                                                         | Default |
| ------------------------------- | -------------------------------------------------------------------------------- | ------- |
| Product Id                      | Provide the unique identifier of the product.                                    |         |
| Product Name                    | Provide the name of the product.                                                 |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response. |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.        |         |
| Return Archived Results         | Whether to return only results that have been archived.                          | false   |
| Timeout                         | The maximum time a client will await a request                                   |         |
| Connection                      |                                                                                  |         |

### Import CRM Data

Import CRM records and activities into your HubSpot account, such as contacts, companies, and notes.

| Input                           | Comments                                                                                                                                                                                                                                                                                                                                                                                         | Default        |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| Connection                      |                                                                                                                                                                                                                                                                                                                                                                                                  |                |
| Name                            | The name of the import.                                                                                                                                                                                                                                                                                                                                                                          |                |
| Files                           | An array that contains your import file information. For more information, see https://developers.hubspot.com/docs/api/crm/imports.                                                                                                                                                                                                                                                              |                |
| Data CSV File                   | The CSV file to import, this should be binary data from a previous step. Key name should be the file name and the value should be the binary data.                                                                                                                                                                                                                                               |                |
| Import Operations               | An optional field used to indicate whether the import should create and update, only create, or only update records for a certain object or activity. Include the objectTypeId for the object/activity and whether you want to UPSERT (create and update), CREATE, or UPDATE records. For objectTypeId's, check https://developers.hubspot.com/docs/api/crm/understanding-the-crm#object-type-id |                |
| Date Format                     | The format for dates included in the file. By default, this is set to MONTH_DAY_YEAR, but you can also use DAY_MONTH_YEAR or YEAR_MONTH_DAY.                                                                                                                                                                                                                                                     | MONTH_DAY_YEAR |
| Marketable Contact Import       | Whether the contacts being imported are marketable. If not provided, the default value is true.                                                                                                                                                                                                                                                                                                  | true           |
| Create Contact List From Import | An optional field to create a static list of the contacts from your import. To create a list from your file, use the value true.                                                                                                                                                                                                                                                                 | false          |
| Timeout                         | The maximum time a client will await a request                                                                                                                                                                                                                                                                                                                                                   |                |

### List Active Imports

Returns a paged list of active imports for this account.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection |                                                |         |
| Timeout    | The maximum time a client will await a request |         |

### List Association Types

Retrieve a list of all association types available between two objects

| Input            | Comments                                                                                                                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                                               |         |
| From Object Type | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined. |         |
| To Object Type   | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined.   |         |
| Timeout          | The maximum time a client will await a request                                                                                                                                                                |         |

### List Companies

Retrieve a list of all companies

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      |                                                                                                         |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                        |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Return Archived Results         | Whether to return only results that have been archived.                                                 | false   |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | Fetch all records.                                                                                      | false   |
| Limit                           | Provide a number for the maximum amount of items that will be returned by the search.                   |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Contacts

Retrieve a list of all contacts

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      |                                                                                                         |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                        |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Return Archived Results         | Whether to return only results that have been archived.                                                 | false   |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | Fetch all records.                                                                                      | false   |
| Limit                           | Provide a number for the maximum amount of items that will be returned by the search.                   |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Custom Objects

Retrieve all custom objects

| Input                           | Comments                                                                         | Default |
| ------------------------------- | -------------------------------------------------------------------------------- | ------- |
| Connection                      |                                                                                  |         |
| Timeout                         | The maximum time a client will await a request                                   |         |
| Return Archived Results         | Whether to return only results that have been archived.                          | false   |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response. |         |

### List Deals

Retrieve a list of all deals

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      |                                                                                                         |         |
| Return Archived Results         | Whether to return only results that have been archived.                                                 | false   |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                        |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | Fetch all records.                                                                                      | false   |
| Limit                           | Provide a number for the maximum amount of items that will be returned by the search.                   |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Engagements

List engagement objects from HubSpot CRM, including communications, emails, calls, meetings, notes, postal mail, and tasks.

| Input                | Comments                                                                                                                         | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                  |         |
| Engagement Object    | Select an engagement object.                                                                                                     |         |
| Properties To Return | Properties to be returned in the response. If the specified property is not present on the requested object, it will be ignored. |         |
| Timeout              | The maximum time a client will await a request                                                                                   |         |

### List Line Items

Retrieve a list of all line items

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      |                                                                                                         |         |
| Return Archived Results         | Whether to return only results that have been archived.                                                 | false   |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                        |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | Fetch all records.                                                                                      | false   |
| Limit                           | Provide a number for the maximum amount of items that will be returned by the search.                   |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Products

Retrieve a list of all products

| Input                           | Comments                                                                                                | Default |
| ------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      |                                                                                                         |         |
| Additional Properties To Return | For each item, provide a property you would like to be returned in the response.                        |         |
| Associations List               | For each item, provide an object type to retrieve the associated Ids for.                               |         |
| Return Archived Results         | Whether to return only results that have been archived.                                                 | false   |
| Timeout                         | The maximum time a client will await a request                                                          |         |
| Fetch All                       | Fetch all records.                                                                                      | false   |
| Limit                           | Provide a number for the maximum amount of items that will be returned by the search.                   |         |
| Start After                     | Specify the pagination token that's returned by a previous request to retrieve the next page of results |         |

### List Properties

Retrieve a list of all configured object properties.

| Input       | Comments                                       | Default |
| ----------- | ---------------------------------------------- | ------- |
| Connection  |                                                |         |
| Object Type | Provide a string value for the type of object  |         |
| Timeout     | The maximum time a client will await a request |         |

### List Webhooks

List all webhooks for a server

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection |                                                |         |
| Timeout    | The maximum time a client will await a request |         |

### Raw Request

Send raw HTTP request to HubSpot

| Input                   | Comments                                                                                                                                                                                                                             | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                                                      |         |
| URL                     | Input the path only (/crm/v3/objects/deals), The base URL is already included (https://api.hubapi.com). For example, to connect to https://api.hubapi.com/crm/v3/objects/deals, only /crm/v3/objects/deals is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                  |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                        | false   |

### Read Association

Get the Ids of the objects associated with those specified in the step

| Input            | Comments                                                                                                                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| From Object Type | The type of the "from" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined. |         |
| To Object Type   | The type of the "to" object. Choose from "Contacts", "Companies", "Deals", "Tickets", "Calls", "Quotes", "Line_items", "Meetings", "Products", "Feedback_submissions", or a custom object you have defined.   |         |
| To Id            | Provide a value for the unique identifier of the second object                                                                                                                                                |         |
| Timeout          | The maximum time a client will await a request                                                                                                                                                                |         |
| Connection       |                                                                                                                                                                                                               |         |

### Search

Use the search endpoints to filter, sort, and search objects, records, and engagements across your CRM.

| Input             | Comments                                                                                                                                                                                                                      | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                                               |         |
| Search Endpoint   | The endpoint to search for objects or engagements. For Custom objects don't forget to fill the Object Type input.                                                                                                             |         |
| Search Properties | Include properties such as filters and sorts, or specify the properties to be returned. If empty, only the default properties will be returned. For more information, see https://developers.hubspot.com/docs/api/crm/search. |         |
| Object Type       | The type of custom object to search for. Required for the Custom objects search endpoint.                                                                                                                                     |         |
| Search Limit      | The number of records to return. The maximum value is 200.                                                                                                                                                                    | 10      |
| Fetch All         | Turn this ON to get more than 200 results. Note that this can be a large amount of data.                                                                                                                                      | false   |
| Timeout           | The maximum time a client will await a request                                                                                                                                                                                |         |

### Search Deals

Returns a list of deals that match the given properties

| Input         | Comments                                                                                                                                                         | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Property Name | Provide a string value for the property you would like to search on. Please ensure the spelling and capitalization are correct for the property you want to use. |         |
| Value         | Provide a string value corresponding to the given property name                                                                                                  |         |
| Operator      | Provide a string value for the operator used to search on.                                                                                                       |         |
| Limit         | Provide a number for the maximum amount of items that will be returned by the search.                                                                            |         |
| Start After   | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                          |         |
| Timeout       | The maximum time a client will await a request                                                                                                                   |         |
| Connection    |                                                                                                                                                                  |         |

### Update Batch Contacts

Update a batch of contacts

| Input          | Comments                                                                                                        | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                 |         |
| Batch Contacts | An array of contact objects to update. See https://developers.hubspot.com/docs/api/crm/contacts for properties. |         |
| Timeout        | The maximum time a client will await a request                                                                  |         |

### Update Batch Engagement

Updates a batch of selected engagements.

| Input             | Comments                                                                                                                                                                                                             | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                                      |         |
| Engagement Object | Select an engagement object.                                                                                                                                                                                         |         |
| Batch Engagements | An array of engagement objects to update. Each engagement object must contain the required properties for the specified engagement type. See https://developers.hubspot.com/docs/api/crm/tasks for more information. |         |
| Timeout           | The maximum time a client will await a request                                                                                                                                                                       |         |

### Update Company

Update the information and metadata of an existing company

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Company Id     | Provide a value for the unique identifier of the company.                                                     |         |
| Company Name   | Provide a string value for the name of the company                                                            |         |
| Industry       | Provide a string value for the industry of the company                                                        |         |
| Description    | Provide the description of the object.                                                                        |         |
| Phone          | Provide a value for the phone number of the company.                                                          |         |
| Domain         | Provide a string value for the domain of the company                                                          |         |
| City           | Provide a string value for the city of the company                                                            |         |
| State          | Provide a string value for the state of the company                                                           |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                              |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Timeout        | The maximum time a client will await a request                                                                |         |
| Connection     |                                                                                                               |         |

### Update Contact

Update the information and metadata of an existing contact

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Contact Id     | Provide a string value for the unique identifier of the contact.                                              |         |
| First Name     | Provide a string value for the first name of the contact                                                      |         |
| Last Name      | Provide a string value for the last name of the contact                                                       |         |
| Company        | Provide a string value for the company of the contact                                                         |         |
| Email          | Provide a string value for the email of the contact                                                           |         |
| Phone          | Provide a value for the phone number of the contact                                                           |         |
| Website        | Provide a string value for the website of the contact                                                         |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                              |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Timeout        | The maximum time a client will await a request                                                                |         |
| Connection     |                                                                                                               |         |

### Update Custom Object

Updates an object's schema

| Input                                                  | Comments                                                                                                      | Default                 |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection                                             |                                                                                                               |                         |
| Fully qualified name or object type ID of your schema. | Provide a string value for the type of object                                                                 |                         |
| Singular Label                                         | The word for one object. (There's no way to change this later.)                                               |                         |
| Plural Label                                           | The word for multiple objects. (There's no way to change this later.)                                         |                         |
| Required Properties                                    | The names of properties that should be required when creating an object of this type.                         | <code>["000xxx"]</code> |
| Searchable Properties                                  | Names of properties that will be indexed for this object type in by HubSpot's product search.                 | <code>["000xxx"]</code> |
| Timeout                                                | The maximum time a client will await a request                                                                |                         |
| Values                                                 | The names of the fields and their values to use when creating/updating a record.                              |                         |
| Dynamic Fields                                         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |                         |

### Update Deal

Update the information or metadata of an existing deal

| Input          | Comments                                                                                                                                                                                              | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Deal Id        | Provide the unique identifier of the deal                                                                                                                                                             |         |
| Amount         | Provide a string value for the amount.                                                                                                                                                                |         |
| Close Date     | Provide a date representing when the sale will close.                                                                                                                                                 |         |
| Deal Name      | Provide a string value for the name of the deal                                                                                                                                                       |         |
| Owner Id       | Provide a string value for the owner of the resource                                                                                                                                                  |         |
| Pipeline       | Provide a string value for which pipeline to interact with.                                                                                                                                           |         |
| Deal Stage     | Provide a value for the stage of the deal. Deal stages allow you to categorize and track the progress of the deals that you are working on.                                                           |         |
| Priority       | Provide a string value for priority of the deal.                                                                                                                                                      |         |
| Deal Type      | Provide a string value for the type of deal. By default, categorize your deal as either a New Business or Existing Business. The picklist of values for this property is configurable through HubSpot |         |
| Values         | The names of the fields and their values to use when creating/updating a record.                                                                                                                      |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                         |         |
| Timeout        | The maximum time a client will await a request                                                                                                                                                        |         |
| Connection     |                                                                                                                                                                                                       |         |

### Update Engagement

Update a communication, email, call, meeting, note, postal mail or task engagement in HubSpot CRM.

| Input             | Comments                                                                                                                                                                           | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                    |         |
| Engagement Object | Select an engagement object.                                                                                                                                                       |         |
| Engagement Id     | The unique identifier of the engagement. A taskId, meetingId, etc.                                                                                                                 |         |
| Properties        | A properties object to update, attributes depend on the engagement type. For possible properties for each engagement type go to https://developers.hubspot.com/docs/api/crm/tasks. |         |
| Id Property       | The name of a property whose values are unique for this object type.                                                                                                               |         |
| Timeout           | The maximum time a client will await a request                                                                                                                                     |         |

### Update Line Item

Update an the information and metadata of an existing line item

| Input                          | Comments                                                                                                                              | Default |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Line Item Id                   | Provide the unique identifier of the line item.                                                                                       |         |
| Name                           | Provide a string value for the name of the line item.                                                                                 |         |
| Product Id                     | Provide the unique identifier of the product.                                                                                         |         |
| Recurring Billing Frequency    | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Recurring Billing Monthly Rate | Provide a string value for the quantity of product in the line item.                                                                  |         |
| Quantity                       | Provide a string value for the quantity of product in the line item.                                                                  |         |
| Price                          | Provide the price of the product.                                                                                                     |         |
| Values                         | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields                 | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                        | The maximum time a client will await a request                                                                                        |         |
| Connection                     |                                                                                                                                       |         |

### Update Product

Update the information and metadata of an existing product

| Input                       | Comments                                                                                                                              | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Product Id                  | Provide the unique identifier of the product.                                                                                         |         |
| Product Name                | Provide the name of the product.                                                                                                      |         |
| Description                 | Provide the description of the object.                                                                                                |         |
| Product SKU                 | Provide the SKU of the product.                                                                                                       |         |
| Price                       | Provide the price of the product.                                                                                                     |         |
| Recurring Billing Frequency | Provide the billing frequency of the product. Specify the integer of months in between a P and M in the following format: P{integer}M |         |
| Unit Cost                   | Provide the unit cost of the product.                                                                                                 |         |
| Values                      | The names of the fields and their values to use when creating/updating a record.                                                      |         |
| Dynamic Fields              | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                         |         |
| Timeout                     | The maximum time a client will await a request                                                                                        |         |
| Connection                  |                                                                                                                                       |         |

### Validate Connection

Returns a boolean value that specifies whether the provided Connection is valid

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Timeout    | The maximum time a client will await a request |         |
| Connection |                                                |         |
