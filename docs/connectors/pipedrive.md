---
title: Pipedrive Connector
sidebar_label: Pipedrive
description: Manage leads, companies, activities, and more on the Pipedrive platform.
---

![Pipedrive](./assets/pipedrive.png#connector-icon)
[Pipedrive](https://www.pipedrive.com/) is a sales-focused customer relationship management tool. This component enables management of leads, companies, activities, and more.

## API Documentation

- [Pipedrive API Reference](https://developers.pipedrive.com/docs/api/v1)
- [Pipedrive Webhooks Documentation](https://developers.pipedrive.com/docs/api/v1/Webhooks)
- [Marketplace Scopes and Permissions](https://pipedrive.readme.io/docs/marketplace-scopes-and-permissions-explanations)

## Connections

### OAuth 2.0 {#oauth2}

Authenticate using OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                                                                               | Default                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| Authorization URL | OAuth 2.0 Authorization URL for Pipedrive authentication.                                              | https://oauth.pipedrive.com/oauth/authorize |
| Token URL         | OAuth 2.0 Token URL for Pipedrive authentication.                                                      | https://oauth.pipedrive.com/oauth/token     |
| Client ID         | The Client ID from the Pipedrive OAuth app. Find this in Pipedrive Settings > Marketplace > Your Apps. |                                             |
| Client Secret     | The Client Secret from the Pipedrive OAuth app. Keep this value secure.                                |                                             |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for new and updated records in a selected Pipedrive resource type on a configured schedule.

| Input                | Comments                                                                               | Default |
| -------------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection           | The Pipedrive connection to use.                                                       |         |
| Resource Type        | The Pipedrive item type to monitor for new and updated records.                        |         |
| Show New Records     | When enabled, records created since the last poll are returned in the trigger payload. | true    |
| Show Updated Records | When enabled, records updated since the last poll are returned in the trigger payload. | true    |

### Webhook {#pipedrivetrigger}

Receive event notifications from Pipedrive. Automatically creates and manages a webhook subscription for the selected event action and object type.

| Input              | Comments                                                                                                                                                                                                                                                                                                                                                                               | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Pipedrive connection to use.                                                                                                                                                                                                                                                                                                                                                       |         |
| Version            | The Pipedrive webhook version that controls the payload schema.                                                                                                                                                                                                                                                                                                                        | 2.0     |
| Event Action       | The type of action that triggers the webhook.                                                                                                                                                                                                                                                                                                                                          |         |
| Event Object       | The Pipedrive resource type that triggers the webhook.                                                                                                                                                                                                                                                                                                                                 |         |
| User ID            | The ID of the user that this webhook will be authorized with. A different user's user_id may be used. If not set, the authenticated user's user_id is used. Each webhook event is checked against the user's permissions, so the webhook is only sent if the user has access to the affected object(s). To receive notifications for all events, use a top-level admin user's user_id. |         |
| HTTP Auth User     | The username used for HTTP Basic Auth when Pipedrive calls the subscription URL.                                                                                                                                                                                                                                                                                                       |         |
| HTTP Auth Password | The password used for HTTP Basic Auth when Pipedrive calls the subscription URL.                                                                                                                                                                                                                                                                                                       |         |

## Actions

### Add Call Log {#addcalllog}

Adds a call log.

| Input             | Comments                                                                                     | Default |
| ----------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Pipedrive connection to use.                                                             |         |
| User ID           | The ID of the owner of the call log                                                          |         |
| Activity ID       | If specified, this activity will be converted into a call log, with the information provided |         |
| Subject           | The name of the activity this call is attached to                                            |         |
| Duration          | The duration of the call in seconds                                                          |         |
| Outcome           | Describes the outcome of the call                                                            |         |
| From Phone Number | The number that made the call                                                                |         |
| To Phone Number   | The number called                                                                            |         |
| Start Time        | The date and time of the start of the call in UTC                                            |         |
| End Time          | The date and time of the end of the call in UTC                                              |         |
| Person ID         | The ID of the person this call is associated with                                            |         |
| Org ID            | The ID of the organization this call is associated with                                      |         |
| Deal ID           | The ID of the deal this call is associated with                                              |         |
| Note              | The note for the call log in HTML format                                                     |         |

### Add Deal {#adddeal}

Adds a deal.

| Input               | Comments                                                                                                                                        | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Pipedrive connection to use.                                                                                                                |         |
| Title               | The title of the deal                                                                                                                           |         |
| Value               | The value of the deal                                                                                                                           |         |
| Currency            | The currency of the deal                                                                                                                        |         |
| Person ID           | The ID of a person which this deal will be linked to                                                                                            |         |
| Org ID              | The ID of an organization which this deal will be linked to                                                                                     |         |
| Pipeline ID         | The ID of the pipeline this deal will be added to                                                                                               |         |
| Stage ID            | The ID of the stage this deal will be added to                                                                                                  |         |
| Status              | open = Open, won = Won, lost = Lost, deleted = Deleted                                                                                          |         |
| Expected Close Date | The expected close date of the deal                                                                                                             |         |
| Probability         | The success probability percentage of the deal                                                                                                  |         |
| Lost Reason         | The optional message about why the deal was lost (to be used when status = lost)                                                                |         |
| Visible To          | The visibility of the deal. See [Pipedrive API documentation](https://developers.pipedrive.com/docs/api/v1/Deals#addDeal) for more information. |         |
| Add Time            | The optional creation date & time of the deal in UTC                                                                                            |         |

### Add Deal Follower {#adddealfollower}

Adds a follower to a deal.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Pipedrive connection to use.    |         |
| Deal ID    | The unique identifier for the deal. |         |
| User ID    | The ID of the user                  |         |

### Add Deal Participant {#adddealparticipant}

Adds a participant to a deal.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Pipedrive connection to use.    |         |
| Deal ID    | The unique identifier for the deal. |         |
| Person ID  | The ID of the person                |         |

### Add Deal Product {#adddealproduct}

Adds a product to the deal, eventually creating a new item called a deal-product.

| Input                | Comments                                                         | Default |
| -------------------- | ---------------------------------------------------------------- | ------- |
| Connection           | The Pipedrive connection to use.                                 |         |
| Deal ID              | The unique identifier for the deal.                              |         |
| Product ID           | The ID of the product to add to the deal                         |         |
| Item Price           | The price value of the product                                   |         |
| Quantity             | The quantity of the product                                      |         |
| Discount Percentage  | The discount %                                                   | 0       |
| Discount Type        | The type of discount                                             |         |
| Product Variation ID | The ID of the product variation to use                           |         |
| Comments             | Any textual comment associated with this product-deal attachment |         |
| Tax                  | The tax percentage                                               | 0       |
| Is Enabled           | Whether the product is enabled on the deal or not                | false   |

### Add File {#addfile}

Uploads and adds a new file to a deal, person, organization, product, activity, or lead.

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Pipedrive connection to use.                                                                                 |         |
| File        | The file to upload - either string contents or a binary file                                                     |         |
| File Name   | The name of the file to upload                                                                                   |         |
| Entity Type | The type of entity to attach the file to                                                                         |         |
| Entity ID   | The numerical ID of the deal, person, org, product or activity, or UUID of the lead to associate this file with. |         |

### Add Lead {#addlead}

Adds a lead.

| Input               | Comments                                                                               | Default |
| ------------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection          | The Pipedrive connection to use.                                                       |         |
| Title               | The name of the lead                                                                   |         |
| Owner ID            | The ID of the user which will be the owner of the created lead                         |         |
| Label Ids           | The IDs of the lead labels which will be associated with the lead                      |         |
| Person ID           | The ID of a person which this lead will be linked to                                   |         |
| Organization ID     | The ID of an organization which this lead will be linked to                            |         |
| Value               | The potential value of the lead                                                        |         |
| Expected Close Date | The date of when the deal which will be created from the lead is expected to be closed |         |
| Visible To          | The visibility of the lead                                                             |         |
| Was Seen            | A flag indicating whether the lead was seen by someone in the Pipedrive UI             | false   |

### Add Lead Label {#addleadlabel}

Adds a lead label.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Pipedrive connection to use. |         |
| Name       | The name of the lead label       |         |
| Color      | The color of the label           |         |

### Add Organization {#addorganization}

Adds an organization.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                                        |         |
| Name       | The name of the organization                                            |         |
| Owner ID   | The ID of the user who will be marked as the owner of this organization |         |
| Visible To | The visibility of the organization                                      |         |
| Add Time   | The optional creation date & time of the organization in UTC            |         |

### Add Organization Follower {#addorganizationfollower}

Adds a follower to an organization.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.            |         |
| Organization ID | The unique identifier for the organization. |         |
| User ID         | The ID of the user                          |         |

### Add Person {#addperson}

Adds a person.

| Input            | Comments                                                                                                                                                                                 | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Pipedrive connection to use.                                                                                                                                                         |         |
| Name             | The name of the person                                                                                                                                                                   |         |
| Owner ID         | The ID of the user who will be marked as the owner of this person                                                                                                                        |         |
| Org ID           | The ID of the organization this person will belong to                                                                                                                                    |         |
| Email            | The emails of the person                                                                                                                                                                 |         |
| Phone            | The phones of the person                                                                                                                                                                 |         |
| Visible To       | The visibility of the person                                                                                                                                                             |         |
| Marketing Status | If the person does not have a valid email address, then the marketing status is **not set** and "no_consent" is returned for the "marketing_status" value when the new person is created |         |
| Add Time         | The optional creation date & time of the person in UTC                                                                                                                                   |         |

### Add Person Follower {#addpersonfollower}

Adds a follower to a person.

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                                    |         |
| Person ID  | The unique identifier for the person.                               |         |
| User ID    | If supplied, only persons owned by the specified user are returned. |         |

### Add Pipeline {#addpipeline}

Adds a new pipeline.

| Input            | Comments                                                          | Default |
| ---------------- | ----------------------------------------------------------------- | ------- |
| Connection       | The Pipedrive connection to use.                                  |         |
| Name             | The name of the pipeline                                          |         |
| Deal Probability | Whether deal probability is disabled or enabled for this pipeline | false   |

### Add Product {#addproduct}

Adds a product.

| Input      | Comments                                                                                                                                   | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Pipedrive connection to use.                                                                                                           |         |
| Name       | The name of the product                                                                                                                    |         |
| Code       | The product code                                                                                                                           |         |
| Unit       | The unit in which this product is sold                                                                                                     |         |
| Tax        | The tax percentage                                                                                                                         | 0       |
| Visible To | The visibility of the product                                                                                                              |         |
| Owner ID   | The ID of the user who will be marked as the owner of this product                                                                         |         |
| Prices     | An array of objects, each containing: "currency" (string), "price" (number), "cost" (number, optional), "overhead_cost" (number, optional) |         |

### Add Product Follower {#addproductfollower}

Adds a follower to a product.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.       |         |
| Product ID | The unique identifier for the product. |         |
| User ID    | The ID of the user                     |         |

### Add Stage {#addstage}

Adds a new stage.

| Input            | Comments                                                                   | Default |
| ---------------- | -------------------------------------------------------------------------- | ------- |
| Connection       | The Pipedrive connection to use.                                           |         |
| Name             | The name of the stage                                                      |         |
| Pipeline ID      | The ID of the pipeline to add stage to                                     |         |
| Deal Probability | The success probability percentage of the deal                             |         |
| Rotten Flag      | Whether deals in this stage can become rotten                              | false   |
| Rotten Days      | The number of days the deals not updated in this stage would become rotten |         |

### Cancel Recurring Subscription (Deprecated) {#cancelrecurringsubscription}

Cancels a recurring subscription.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.            |         |
| Subscription ID | The unique identifier for the subscription. |         |
| End Date        | The subscription termination date           |         |

### Create Webhook {#createwebhook}

Creates a new webhook.

| Input              | Comments                                                                                                                                                                                                                                                                                                                                                                               | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Pipedrive connection to use.                                                                                                                                                                                                                                                                                                                                                       |         |
| Subscription URL   | The URL that Pipedrive will call when a subscribed event occurs.                                                                                                                                                                                                                                                                                                                       |         |
| Event Action       | The type of action that triggers the webhook.                                                                                                                                                                                                                                                                                                                                          |         |
| Event Object       | The Pipedrive resource type that triggers the webhook.                                                                                                                                                                                                                                                                                                                                 |         |
| Version            | The webhook's version. NB! Webhooks v2 is the default from March 17th, 2025. See this [Changelog](https://developers.pipedrive.com/changelog/post/breaking-change-webhooks-v2-will-become-the-new-default-version) post for more details.                                                                                                                                              | 2.0     |
| User ID            | The ID of the user that this webhook will be authorized with. A different user's user_id may be used. If not set, the authenticated user's user_id is used. Each webhook event is checked against the user's permissions, so the webhook is only sent if the user has access to the affected object(s). To receive notifications for all events, use a top-level admin user's user_id. |         |
| HTTP Auth User     | The username used for HTTP Basic Auth when Pipedrive calls the subscription URL.                                                                                                                                                                                                                                                                                                       |         |
| HTTP Auth Password | The password used for HTTP Basic Auth when Pipedrive calls the subscription URL.                                                                                                                                                                                                                                                                                                       |         |

### Delete Activity {#deleteactivity}

Deletes an activity.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Pipedrive connection to use.        |         |
| Activity ID | The unique identifier for the activity. |         |

### Delete Call Log {#deletecalllog}

Deletes a call log.

| Input       | Comments                                                      | Default |
| ----------- | ------------------------------------------------------------- | ------- |
| Connection  | The Pipedrive connection to use.                              |         |
| Call Log ID | The unique identifier returned when the call log was created. |         |

### Delete Deal {#deletedeal}

Deletes a deal.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Pipedrive connection to use.    |         |
| Deal ID    | The unique identifier for the deal. |         |

### Delete Deal Field {#deletedealfield}

Deletes a deal field.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    | The Pipedrive connection to use.          |         |
| Deal Field ID | The unique identifier for the deal field. |         |

### Delete Deal Field (V2) {#deletedealfieldv2}

Deletes a deal field.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Pipedrive connection to use.  |         |
| Field Code | The field code of the deal field. |         |

### Delete Deal Follower {#deletedealfollower}

Deletes a follower from a deal.

| Input       | Comments                            | Default |
| ----------- | ----------------------------------- | ------- |
| Connection  | The Pipedrive connection to use.    |         |
| Deal ID     | The unique identifier for the deal. |         |
| Follower ID | The ID of the follower              |         |

### Delete Deal Participant {#deletedealparticipant}

Deletes a participant from a deal.

| Input               | Comments                              | Default |
| ------------------- | ------------------------------------- | ------- |
| Connection          | The Pipedrive connection to use.      |         |
| Deal ID             | The unique identifier for the deal.   |         |
| Deal Participant ID | The ID of the participant of the deal |         |

### Delete Deal Product {#deletedealproduct}

Deletes an attached product from a deal.

| Input                 | Comments                            | Default |
| --------------------- | ----------------------------------- | ------- |
| Connection            | The Pipedrive connection to use.    |         |
| Deal ID               | The unique identifier for the deal. |         |
| Product Attachment ID | The product attachment ID           |         |

### Delete File {#deletefile}

Deletes a file.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Pipedrive connection to use.    |         |
| File ID    | The unique identifier for the file. |         |

### Delete Lead {#deletelead}

Deletes a lead.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Pipedrive connection to use.    |         |
| Lead ID    | The unique identifier for the lead. |         |

### Delete Lead Label {#deleteleadlabel}

Deletes a lead label.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    | The Pipedrive connection to use.          |         |
| Lead Label ID | The unique identifier for the lead label. |         |

### Delete Mail Thread {#deletemailthread}

Deletes a mail thread.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Pipedrive connection to use.           |         |
| Mail Thread ID | The unique identifier for the mail thread. |         |

### Delete Organization {#deleteorganization}

Deletes an organization.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.            |         |
| Organization ID | The unique identifier for the organization. |         |

### Delete Organization Follower {#deleteorganizationfollower}

Deletes a follower from an organization.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.            |         |
| Organization ID | The unique identifier for the organization. |         |
| Follower ID     | The ID of the follower                      |         |

### Delete Person {#deleteperson}

Deletes a person.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.      |         |
| Person ID  | The unique identifier for the person. |         |

### Delete Person Field {#deletepersonfield}

Deletes a person field.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.            |         |
| Person Field ID | The unique identifier for the person field. |         |

### Delete Person Field (V2) {#deletepersonfieldv2}

Deletes a person field.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Pipedrive connection to use.    |         |
| Field Code | The field code of the person field. |         |

### Delete Person Follower {#deletepersonfollower}

Deletes a follower from a person.

| Input       | Comments                              | Default |
| ----------- | ------------------------------------- | ------- |
| Connection  | The Pipedrive connection to use.      |         |
| Person ID   | The unique identifier for the person. |         |
| Follower ID | The ID of the follower                |         |

### Delete Person Picture {#deletepersonpicture}

Deletes a person picture.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.      |         |
| Person ID  | The unique identifier for the person. |         |

### Delete Pipeline {#deletepipeline}

Deletes a pipeline.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Pipedrive connection to use.        |         |
| Pipeline ID | The unique identifier for the pipeline. |         |

### Delete Product {#deleteproduct}

Deletes a product.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.       |         |
| Product ID | The unique identifier for the product. |         |

### Delete Product Field {#deleteproductfield}

Deletes a product field.

| Input            | Comments                         | Default |
| ---------------- | -------------------------------- | ------- |
| Connection       | The Pipedrive connection to use. |         |
| Product Field ID | The ID of the product field      |         |

### Delete Product Field (V2) {#deleteproductfieldv2}

Deletes a product field.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Pipedrive connection to use.     |         |
| Field Code | The field code of the product field. |         |

### Delete Product Follower {#deleteproductfollower}

Deletes a follower from a product.

| Input       | Comments                                                        | Default |
| ----------- | --------------------------------------------------------------- | ------- |
| Connection  | The Pipedrive connection to use.                                |         |
| Product ID  | The unique identifier for the product.                          |         |
| Follower ID | The ID of the relationship between the follower and the product |         |

### Delete Stage {#deletestage}

Deletes a stage.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Pipedrive connection to use.     |         |
| Stage ID   | The unique identifier for the stage. |         |

### Delete Subscription (Deprecated) {#deletesubscription}

Deletes a subscription.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.            |         |
| Subscription ID | The unique identifier for the subscription. |         |

### Delete Webhook {#deletewebhook}

Deletes a webhook.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.       |         |
| Webhook ID | The unique identifier for the webhook. |         |

### Download File {#downloadfile}

Downloads one file.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Pipedrive connection to use.    |         |
| File ID    | The unique identifier for the file. |         |

### Find Subscription By Deal (Deprecated) {#findsubscriptionbydeal}

Finds a subscription by deal.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Pipedrive connection to use. |         |
| Deal ID    | The ID of the deal               |         |

### Find Users By Name {#findusersbyname}

Finds users by name.

| Input           | Comments                                                                     | Default |
| --------------- | ---------------------------------------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.                                             |         |
| Term            | The search term to look for                                                  |         |
| Search By Email | When enabled, the term will only be matched against email addresses of users | 1       |

### Get Activities {#getactivities}

Gets all activities assigned to a particular user.

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Pipedrive connection to use.                                                                 |         |
| Filter ID      | The ID of the filter to use (will narrow down results if used together with "user_id" parameter) |         |
| Limit          | The maximum number of results to return per page.                                                |         |
| Updated Since  | If set, only activities with an update_time later than or equal to this time are returned        |         |
| Updated Until  | If set, only activities with an update_time earlier than or equal to this time are returned      |         |
| Sort By        | The field name used to order the results.                                                        |         |
| Sort Direction | The direction in which results are ordered.                                                      | desc    |
| Cursor         | The pagination cursor from a previous request.                                                   |         |

### Get Activity {#getactivity}

Gets details of an activity.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Pipedrive connection to use.        |         |
| Activity ID | The unique identifier for the activity. |         |

### Get Activity Fields {#getactivityfields}

Gets all activity fields.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Pipedrive connection to use. |         |

### Get Activity Fields (V2) {#getactivityfieldsv2}

Gets all activity fields.

| Input      | Comments                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                                                                        |         |
| Fetch All  | When true, automatically fetches all pages of results. When false, only the requested page is returned. | false   |
| Limit      | The maximum number of results to return per page.                                                       |         |
| Cursor     | The pagination cursor from a previous request.                                                          |         |

### Get Activity Types {#getactivitytypes}

Gets all activity types.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Pipedrive connection to use. |         |

### Get Call Log {#getcalllog}

Gets details of a call log.

| Input       | Comments                                                      | Default |
| ----------- | ------------------------------------------------------------- | ------- |
| Connection  | The Pipedrive connection to use.                              |         |
| Call Log ID | The unique identifier returned when the call log was created. |         |

### Get Company Addons {#getcompanyaddons}

Gets all add-ons for a single company.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Pipedrive connection to use. |         |

### Get Currencies {#getcurrencies}

Gets all supported currencies.

| Input      | Comments                                                                   | Default |
| ---------- | -------------------------------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                                           |         |
| Term       | Optional search term that is searched for from currency's name and/or code |         |

### Get Current User {#getcurrentuser}

Gets current user data.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Pipedrive connection to use. |         |

### Get Deal {#getdeal}

Gets details of a deal.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Pipedrive connection to use.    |         |
| Deal ID    | The unique identifier for the deal. |         |

### Get Deal Activities {#getdealactivities}

Lists activities associated with a deal.

| Input          | Comments                                          | Default |
| -------------- | ------------------------------------------------- | ------- |
| Connection     | The Pipedrive connection to use.                  |         |
| Deal ID        | The unique identifier for the deal.               |         |
| Limit          | The maximum number of results to return per page. |         |
| Cursor         | The pagination cursor from a previous request.    |         |
| Done           | Whether the activity is done or not               | false   |
| Sort By        | The field name used to order the results.         |         |
| Sort Direction | The direction in which results are ordered.       |         |

### Get Deal Field {#getdealfield}

Gets one deal field.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    | The Pipedrive connection to use.          |         |
| Deal Field ID | The unique identifier for the deal field. |         |

### Get Deal Fields {#getdealfields}

Gets all deal fields.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                  |         |
| Start      | The 0-based offset of the first item to return.   | 0       |
| Limit      | The maximum number of results to return per page. |         |

### Get Deal Fields (V2) {#getdealfieldsv2}

Gets all deal fields.

| Input      | Comments                                                                                                | Default |
| ---------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                                                                        |         |
| Fetch All  | When true, automatically fetches all pages of results. When false, only the requested page is returned. | false   |
| Limit      | The maximum number of results to return per page.                                                       |         |
| Cursor     | The pagination cursor from a previous request.                                                          |         |

### Get Deal Field (V2) {#getdealfieldv2}

Gets one deal field.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Pipedrive connection to use.  |         |
| Field Code | The field code of the deal field. |         |

### Get Deal Files {#getdealfiles}

Lists files attached to a deal.

| Input                 | Comments                                                                                            | Default |
| --------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Pipedrive connection to use.                                                                    |         |
| Deal ID               | The unique identifier for the deal.                                                                 |         |
| Start                 | The 0-based offset of the first item to return.                                                     | 0       |
| Limit                 | The maximum number of results to return per page.                                                   |         |
| Cursor                | The pagination cursor from a previous request.                                                      |         |
| Include Deleted Files | When enabled, the list of files will also include deleted files                                     |         |
| Sort                  | The field names and sorting mode separated by a comma (e.g. "field_name_1 ASC, field_name_2 DESC"). |         |

### Get Deal Followers {#getdealfollowers}

Lists followers of a deal.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                  |         |
| Deal ID    | The unique identifier for the deal.               |         |
| Limit      | The maximum number of results to return per page. |         |
| Cursor     | The pagination cursor from a previous request.    |         |

### Get Deal Mail Messages {#getdealmailmessages}

Lists mail messages associated with a deal.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                  |         |
| Deal ID    | The unique identifier for the deal.               |         |
| Start      | The 0-based offset of the first item to return.   | 0       |
| Limit      | The maximum number of results to return per page. |         |
| Cursor     | The pagination cursor from a previous request.    |         |

### Get Deal Participants {#getdealparticipants}

Lists participants of a deal.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                  |         |
| Deal ID    | The unique identifier for the deal.               |         |
| Start      | The 0-based offset of the first item to return.   | 0       |
| Limit      | The maximum number of results to return per page. |         |
| Cursor     | The pagination cursor from a previous request.    |         |

### Get Deal Persons (Deprecated) {#getdealpersons}

Lists all persons associated with a deal.

| Input          | Comments                                          | Default |
| -------------- | ------------------------------------------------- | ------- |
| Connection     | The Pipedrive connection to use.                  |         |
| Deal ID        | The unique identifier for the deal.               |         |
| Limit          | The maximum number of results to return per page. |         |
| Cursor         | The pagination cursor from a previous request.    |         |
| Sort By        | The field name used to order the results.         |         |
| Sort Direction | The direction in which results are ordered.       |         |

### Get Deal Products {#getdealproducts}

Lists products attached to a deal.

| Input          | Comments                                          | Default |
| -------------- | ------------------------------------------------- | ------- |
| Connection     | The Pipedrive connection to use.                  |         |
| Deal ID        | The unique identifier for the deal.               |         |
| Limit          | The maximum number of results to return per page. |         |
| Cursor         | The pagination cursor from a previous request.    |         |
| Sort By        | The field name used to order the results.         |         |
| Sort Direction | The direction in which results are ordered.       |         |

### Get Deals {#getdeals}

Gets all deals.

| Input          | Comments                                                                                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All      | When true, automatically fetches all pages of results. When false, only the requested page is returned. | false   |
| Limit          | The maximum number of results to return per page.                                                       |         |
| Cursor         | The pagination cursor from a previous request.                                                          |         |
| Sort By        | The field name used to order the results.                                                               |         |
| Sort Direction | The direction in which results are ordered.                                                             |         |
| Filter ID      | The unique identifier of the filter to apply.                                                           |         |
| Stage ID       | If supplied, only deals within the specified stage are returned.                                        |         |
| Status         | Filter the response to only include deals matching the selected status.                                 |         |
| Connection     | The Pipedrive connection to use.                                                                        |         |

### Get Deals Summary {#getdealssummary}

Gets a summary of deals.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                    |         |
| Status     | Only fetch deals with a specific status             |         |
| Filter ID  | user_id will not be considered                      |         |
| User ID    | Only deals matching the given user will be returned |         |
| Stage ID   | Only deals within the given stage will be returned  |         |

### Get Deals Timeline {#getdealstimeline}

Gets the deals timeline.

| Input                   | Comments                                                             | Default |
| ----------------------- | -------------------------------------------------------------------- | ------- |
| Connection              | The Pipedrive connection to use.                                     |         |
| Start Date              | The date when the first interval starts                              |         |
| Interval                | The type of the interval                                             |         |
| Amount                  | The number of given intervals, starting from "start_date", to fetch  |         |
| Field Key               | The date field key which deals will be retrieved from                |         |
| User ID                 | If supplied, only deals matching the given user will be returned     |         |
| Pipeline ID             | If supplied, only deals matching the given pipeline will be returned |         |
| Filter ID               | If supplied, only deals matching the given filter will be returned   |         |
| Exclude Deals           | Whether to exclude deals list (1) or not (0)                         |         |
| Totals Convert Currency | The 3-letter currency code of any of the supported currencies        |         |

### Get Deal Users {#getdealusers}

Lists permitted users for a deal.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Pipedrive connection to use.    |         |
| Deal ID    | The unique identifier for the deal. |         |

### Get File Metadata by ID {#getfile}

Gets metadata about one file by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Pipedrive connection to use.    |         |
| File ID    | The unique identifier for the file. |         |

### Get Filter {#getfilter}

Gets one filter.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.      |         |
| Filter ID  | The unique identifier for the filter. |         |

### Get Filters {#getfilters}

Gets all filters.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Pipedrive connection to use. |         |
| Type       | The types of filters to fetch    |         |

### Get Lead {#getlead}

Gets one lead.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Pipedrive connection to use.    |         |
| Lead ID    | The unique identifier for the lead. |         |

### Get Lead Labels {#getleadlabels}

Gets all lead labels.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Pipedrive connection to use. |         |

### Get Leads {#getleads}

Gets all leads.

| Input           | Comments                                                                                            | Default |
| --------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.                                                                    |         |
| Limit           | The maximum number of results to return per page.                                                   |         |
| Start           | The 0-based offset of the first item to return.                                                     | 0       |
| Archived Status | Filtering based on the archived status of a lead                                                    |         |
| Owner ID        | If supplied, only leads matching the given user will be returned                                    |         |
| Filter ID       | The ID of the filter to use                                                                         |         |
| Sort            | The field names and sorting mode separated by a comma (e.g. "field_name_1 ASC, field_name_2 DESC"). |         |

### Get Lead Sources {#getleadsources}

Gets all lead sources.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Pipedrive connection to use. |         |

### Get Mail Message {#getmailmessage}

Gets one mail message.

| Input        | Comments                                        | Default |
| ------------ | ----------------------------------------------- | ------- |
| Connection   | The Pipedrive connection to use.                |         |
| Id           | The ID of the mail message to fetch             |         |
| Include Body | Whether to include the full message body or not | 1       |

### Get Mail Thread {#getmailthread}

Gets one mail thread.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Pipedrive connection to use.           |         |
| Mail Thread ID | The unique identifier for the mail thread. |         |

### Get Mail Thread Messages {#getmailthreadmessages}

Gets all mail messages of a mail thread.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Pipedrive connection to use.           |         |
| Mail Thread ID | The unique identifier for the mail thread. |         |

### Get Mail Threads {#getmailthreads}

Gets mail threads.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                  |         |
| Folder     | The type of folder to fetch                       | inbox   |
| Start      | The 0-based offset of the first item to return.   | 0       |
| Limit      | The maximum number of results to return per page. |         |

### Get Note Fields {#getnotefields}

Gets all note fields.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Pipedrive connection to use. |         |

### Get Organization {#getorganization}

Gets details of an organization.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.            |         |
| Organization ID | The unique identifier for the organization. |         |

### Get Organization Activities {#getorganizationactivities}

Lists activities associated with an organization.

| Input           | Comments                                          | Default |
| --------------- | ------------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.                  |         |
| Organization ID | The unique identifier for the organization.       |         |
| Limit           | The maximum number of results to return per page. |         |
| Cursor          | The pagination cursor from a previous request.    |         |
| Done            | When true, returns only completed activities      | false   |

### Get Organization Deals {#getorganizationdeals}

Lists deals associated with an organization.

| Input           | Comments                                          | Default |
| --------------- | ------------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.                  |         |
| Organization ID | The unique identifier for the organization.       |         |
| Limit           | The maximum number of results to return per page. |         |
| Cursor          | The pagination cursor from a previous request.    |         |
| Status          | Only fetch deals with a specific status           |         |
| Sort By         | The field name used to order the results.         |         |
| Sort Direction  | The direction in which results are ordered.       |         |

### Get Organization Files {#getorganizationfiles}

Lists files attached to an organization.

| Input                 | Comments                                                                                            | Default |
| --------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Pipedrive connection to use.                                                                    |         |
| Organization ID       | The unique identifier for the organization.                                                         |         |
| Start                 | The 0-based offset of the first item to return.                                                     | 0       |
| Limit                 | The maximum number of results to return per page.                                                   |         |
| Include Deleted Files | When enabled, the list of files will also include deleted files                                     |         |
| Sort                  | The field names and sorting mode separated by a comma (e.g. "field_name_1 ASC, field_name_2 DESC"). |         |

### Get Organization Followers {#getorganizationfollowers}

Lists followers of an organization.

| Input           | Comments                                          | Default |
| --------------- | ------------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.                  |         |
| Organization ID | The unique identifier for the organization.       |         |
| Limit           | The maximum number of results to return per page. |         |
| Cursor          | The pagination cursor from a previous request.    |         |

### Get Organization Mail Messages {#getorganizationmailmessages}

Lists mail messages associated with an organization.

| Input           | Comments                                          | Default |
| --------------- | ------------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.                  |         |
| Organization ID | The unique identifier for the organization.       |         |
| Start           | The 0-based offset of the first item to return.   | 0       |
| Limit           | The maximum number of results to return per page. |         |

### Get Organization Persons {#getorganizationpersons}

Lists persons of an organization.

| Input           | Comments                                          | Default |
| --------------- | ------------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.                  |         |
| Organization ID | The unique identifier for the organization.       |         |
| Limit           | The maximum number of results to return per page. |         |
| Cursor          | The pagination cursor from a previous request.    |         |

### Get Organizations {#getorganizations}

Gets all organizations.

| Input          | Comments                                                                                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All      | When true, automatically fetches all pages of results. When false, only the requested page is returned. | false   |
| Limit          | The maximum number of results to return per page.                                                       |         |
| Cursor         | The pagination cursor from a previous request.                                                          |         |
| Sort By        | The field name used to order the results.                                                               |         |
| Sort Direction | The direction in which results are ordered.                                                             |         |
| Filter ID      | The unique identifier of the filter to apply.                                                           |         |
| Connection     | The Pipedrive connection to use.                                                                        |         |

### Get Organization Updates {#getorganizationupdates}

Lists updates about an organization.

| Input           | Comments                                                         | Default |
| --------------- | ---------------------------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.                                 |         |
| Organization ID | The unique identifier for the organization.                      |         |
| Start           | The 0-based offset of the first item to return.                  | 0       |
| Limit           | The maximum number of results to return per page.                |         |
| All Changes     | Whether to show custom field updates or not                      |         |
| Items           | A comma-separated string for filtering out item specific updates |         |

### Get Organization Users {#getorganizationusers}

Lists permitted users for an organization.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Pipedrive connection to use.            |         |
| Organization ID | The unique identifier for the organization. |         |

### Get Permission Set {#getpermissionset}

Gets one permission set.

| Input             | Comments                                      | Default |
| ----------------- | --------------------------------------------- | ------- |
| Connection        | The Pipedrive connection to use.              |         |
| Permission Set ID | The unique identifier for the permission set. |         |

### Get Permission Set Assignments {#getpermissionsetassignments}

Lists permission set assignments.

| Input             | Comments                                          | Default |
| ----------------- | ------------------------------------------------- | ------- |
| Connection        | The Pipedrive connection to use.                  |         |
| Permission Set ID | The unique identifier for the permission set.     |         |
| Start             | The 0-based offset of the first item to return.   | 0       |
| Limit             | The maximum number of results to return per page. |         |

### Get Permission Sets {#getpermissionsets}

Gets all permission sets.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection | The Pipedrive connection to use. |         |

### Get Person {#getperson}

Gets details of a person.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.      |         |
| Person ID  | The unique identifier for the person. |         |

### Get Person Activities {#getpersonactivities}

Lists activities associated with a person.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Pipedrive connection to use.                  |         |
| Person ID  | The unique identifier for the person.             |         |
| Limit      | The maximum number of results to return per page. |         |
| Cursor     | The pagination cursor from a previous request.    |         |
| Done       | When true, returns only completed activities      | false   |
