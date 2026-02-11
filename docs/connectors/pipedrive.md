---
title: Pipedrive Connector
sidebar_label: Pipedrive
description: Manage leads, companies, activities, and more on the Pipedrive platform
---

![Pipedrive](./assets/pipedrive.png#connector-icon)
[Pipedrive](https://www.pipedrive.com/) is a sales-focused customer relationship management tool. This component allows you to manage leads, companies, activities, and more.

## Connections

### OAuth 2.0 {#oauth2}

OAuth 2.0 connection for Pipedrive

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments          | Default                                     |
| ----------------- | ----------------- | ------------------------------------------- |
| Authorization URL | Authorization URL | https://oauth.pipedrive.com/oauth/authorize |
| Token URL         | Token URL         | https://oauth.pipedrive.com/oauth/token     |
| Client ID         | Client identifier |                                             |
| Client Secret     | Client secret     |                                             |

## Triggers

### Webhook Trigger {#pipedrivetrigger}

Receive data from Pipedrive in real time with webhook subscriptions.

| Input              | Comments                                                                                                                                                                                                                                                                                                                                                                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version            | The version of the API to use.                                                                                                                                                                                                                                                                                                                                                                                                    | 2.0     |
| Event Action       | The actions to subscribe to                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| Event Object       | The object to subscribe to                                                                                                                                                                                                                                                                                                                                                                                                        |         |
| User ID            | The ID of the user that this webhook will be authorized with. You have the option to use a different user's user_id. If it is not set, the current user's user_id will be used. As each webhook event is checked against a user's permissions, the webhook will only be sent if the user has access to the specified object(s). If you want to receive notifications for all events, please use a top-level admin user's user_id. |         |
| HTTP Auth User     | The username for HTTP Basic Auth                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| HTTP Auth Password | The password for HTTP Basic Auth                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Connection         |                                                                                                                                                                                                                                                                                                                                                                                                                                   |         |

## Actions

### Add Call Log {#addcalllog}

Add a call log

| Input             | Comments                                                                                     | Default |
| ----------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                              |         |
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

### Add Channel {#addchannel}

Add a channel

| Input               | Comments                                                       | Default |
| ------------------- | -------------------------------------------------------------- | ------- |
| Connection          |                                                                |         |
| Name                | The name of the channel                                        |         |
| Provider Channel ID | The channel ID                                                 |         |
| Avatar Url          | The URL for an icon that represents your channel               |         |
| Template Support    | If true, enables templates logic on UI                         | false   |
| Provider Type       | It controls the icons (like the icon next to the conversation) | other   |

### Add Deal {#adddeal}

Add a deal

| Input               | Comments                                                                                    | Default |
| ------------------- | ------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                             |         |
| Title               | The title of the deal                                                                       |         |
| Value               | The value of the deal                                                                       |         |
| Currency            | The currency of the deal                                                                    |         |
| Person ID           | The ID of a person which this deal will be linked to                                        |         |
| Org ID              | The ID of an organization which this deal will be linked to                                 |         |
| Pipeline ID         | The ID of the pipeline this deal will be added to                                           |         |
| Stage ID            | The ID of the stage this deal will be added to                                              |         |
| Status              | open = Open, won = Won, lost = Lost, deleted = Deleted                                      |         |
| Expected Close Date | The expected close date of the deal                                                         |         |
| Probability         | The success probability percentage of the deal                                              |         |
| Lost Reason         | The optional message about why the deal was lost (to be used when status = lost)            |         |
| Visible To          | The visibility of the deal. See https://developers.pipedrive.com/docs/api/v1/Deals#addDeal. |         |
| Add Time            | The optional creation date & time of the deal in UTC                                        |         |

### Add Deal Follower {#adddealfollower}

Add a follower to a deal

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Deal ID    | The ID of the deal |         |
| User ID    | The ID of the user |         |

### Add Deal Participant {#adddealparticipant}

Add a participant to a deal

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Deal ID    | The ID of the deal   |         |
| Person ID  | The ID of the person |         |

### Add Deal Product {#adddealproduct}

Add a product to the deal, eventually creating a new item called a deal-product

| Input                | Comments                                                         | Default |
| -------------------- | ---------------------------------------------------------------- | ------- |
| Connection           |                                                                  |         |
| Deal ID              | The ID of the deal                                               |         |
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

Upload and add a new file to a deal, person, org, product, activity or lead

| Input       | Comments                                                                                                         | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                  |         |
| File        | The file to upload - either string contents or a binary file                                                     |         |
| File Name   | The name of the file to upload                                                                                   |         |
| Entity Type | The type of entity to attach the file to                                                                         |         |
| Entity ID   | The numerical ID of the deal, person, org, product or activity, or UUID of the lead to associate this file with. |         |

### Add Lead {#addlead}

Add a lead

| Input               | Comments                                                                               | Default |
| ------------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                        |         |
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

Add a lead label

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection |                            |         |
| Name       | The name of the lead label |         |
| Color      | The color of the label     |         |

### Add Organization {#addorganization}

Add an organization

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection |                                                                         |         |
| Name       | The name of the organization                                            |         |
| Owner ID   | The ID of the user who will be marked as the owner of this organization |         |
| Visible To | The visibility of the organization                                      |         |
| Add Time   | The optional creation date & time of the organization in UTC            |         |

### Add Organization Follower {#addorganizationfollower}

Add a follower to an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |
| User ID         | The ID of the user         |         |

### Add Person {#addperson}

Add a person

| Input            | Comments                                                                                                                                                                                 | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                          |         |
| Name             | The name of the person                                                                                                                                                                   |         |
| Owner ID         | The ID of the user who will be marked as the owner of this person                                                                                                                        |         |
| Org ID           | The ID of the organization this person will belong to                                                                                                                                    |         |
| Email            | The emails of the person                                                                                                                                                                 |         |
| Phone            | The phones of the person                                                                                                                                                                 |         |
| Visible To       | The visibility of the person                                                                                                                                                             |         |
| Marketing Status | If the person does not have a valid email address, then the marketing status is **not set** and "no_consent" is returned for the "marketing_status" value when the new person is created |         |
| Add Time         | The optional creation date & time of the person in UTC                                                                                                                                   |         |

### Add Person Follower {#addpersonfollower}

Add a follower to a person

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Connection |                                                                    |         |
| Person ID  | The ID of the person                                               |         |
| User ID    | If supplied, only persons owned by the given user will be returned |         |

### Add Pipeline {#addpipeline}

Add a new pipeline

| Input            | Comments                                                          | Default |
| ---------------- | ----------------------------------------------------------------- | ------- |
| Connection       |                                                                   |         |
| Name             | The name of the pipeline                                          |         |
| Deal Probability | Whether deal probability is disabled or enabled for this pipeline | false   |

### Add Product {#addproduct}

Add a product

| Input      | Comments                                                                                                                                   | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                                                            |         |
| Name       | The name of the product                                                                                                                    |         |
| Code       | The product code                                                                                                                           |         |
| Unit       | The unit in which this product is sold                                                                                                     |         |
| Tax        | The tax percentage                                                                                                                         | 0       |
| Visible To | The visibility of the product                                                                                                              |         |
| Owner ID   | The ID of the user who will be marked as the owner of this product                                                                         |         |
| Prices     | An array of objects, each containing: "currency" (string), "price" (number), "cost" (number, optional), "overhead_cost" (number, optional) |         |

### Add Product Follower {#addproductfollower}

Add a follower to a product

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection |                       |         |
| Product ID | The ID of the product |         |
| User ID    | The ID of the user    |         |

### Add Stage {#addstage}

Add a new stage

| Input            | Comments                                                                   | Default |
| ---------------- | -------------------------------------------------------------------------- | ------- |
| Connection       |                                                                            |         |
| Name             | The name of the stage                                                      |         |
| Pipeline ID      | The ID of the pipeline to add stage to                                     |         |
| Deal Probability | The success probability percentage of the deal                             |         |
| Rotten Flag      | Whether deals in this stage can become rotten                              | false   |
| Rotten Days      | The number of days the deals not updated in this stage would become rotten |         |

### Cancel Recurring Subscription (Deprecated) {#cancelrecurringsubscription}

Cancel a recurring subscription

| Input           | Comments                          | Default |
| --------------- | --------------------------------- | ------- |
| Connection      |                                   |         |
| Subscription ID | The ID of the subscription        |         |
| End Date        | The subscription termination date |         |

### Create Webhook {#createwebhook}

Create a new webhook

| Input              | Comments                                                                                                                                                                                                                                                                                                                                                                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Subscription URL   | The URL to subscribe to                                                                                                                                                                                                                                                                                                                                                                                                           |         |
| Event Action       | The actions to subscribe to                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| Event Object       | The object to subscribe to                                                                                                                                                                                                                                                                                                                                                                                                        |         |
| Version            | The webhook's version. NB! Webhooks v2 is the default from March 17th, 2025. See this [Changelog](https://developers.pipedrive.com/changelog/post/breaking-change-webhooks-v2-will-become-the-new-default-version) post for more details.                                                                                                                                                                                         | 2.0     |
| User ID            | The ID of the user that this webhook will be authorized with. You have the option to use a different user's user_id. If it is not set, the current user's user_id will be used. As each webhook event is checked against a user's permissions, the webhook will only be sent if the user has access to the specified object(s). If you want to receive notifications for all events, please use a top-level admin user's user_id. |         |
| HTTP Auth User     | The username for HTTP Basic Auth                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| HTTP Auth Password | The password for HTTP Basic Auth                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Connection         |                                                                                                                                                                                                                                                                                                                                                                                                                                   |         |

### Delete Activity {#deleteactivity}

Delete an activity

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Activity ID | The ID of the activity |         |

### Delete Call Log {#deletecalllog}

Delete a call log

| Input       | Comments                                     | Default |
| ----------- | -------------------------------------------- | ------- |
| Connection  |                                              |         |
| Call Log ID | The ID received when you create the call log |         |

### Delete Channel {#deletechannel}

Delete a channel

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection |                                                   |         |
| Id         | The ID of the channel provided by the integration |         |

### Delete Conversation {#deleteconversation}

Delete a conversation

| Input           | Comments                                               | Default |
| --------------- | ------------------------------------------------------ | ------- |
| Connection      |                                                        |         |
| Channel ID      | The ID of the channel provided by the integration      |         |
| Conversation ID | The ID of the conversation provided by the integration |         |

### Delete Deal {#deletedeal}

Delete a deal

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Deal ID    | The ID of the deal |         |

### Delete Deal Field {#deletedealfield}

Delete a deal field

| Input         | Comments                 | Default |
| ------------- | ------------------------ | ------- |
| Connection    |                          |         |
| Deal Field ID | The ID of the deal field |         |

### Delete Deal Follower {#deletedealfollower}

Delete a follower from a deal

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Deal ID     | The ID of the deal     |         |
| Follower ID | The ID of the follower |         |

### Delete Deal Participant {#deletedealparticipant}

Delete a participant from a deal

| Input               | Comments                              | Default |
| ------------------- | ------------------------------------- | ------- |
| Connection          |                                       |         |
| Deal ID             | The ID of the deal                    |         |
| Deal Participant ID | The ID of the participant of the deal |         |

### Delete Deal Product {#deletedealproduct}

Delete an attached product from a deal

| Input                 | Comments                  | Default |
| --------------------- | ------------------------- | ------- |
| Connection            |                           |         |
| Deal ID               | The ID of the deal        |         |
| Product Attachment ID | The product attachment ID |         |

### Delete File {#deletefile}

Delete a file

| Input      | Comments         | Default |
| ---------- | ---------------- | ------- |
| Connection |                  |         |
| File ID    | The ID of a file |         |

### Delete Lead {#deletelead}

Delete a lead

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Lead ID    | The ID of the lead |         |

### Delete Lead Label {#deleteleadlabel}

Delete a lead label

| Input         | Comments                 | Default |
| ------------- | ------------------------ | ------- |
| Connection    |                          |         |
| Lead Label ID | The ID of the lead label |         |

### Delete Mail Thread {#deletemailthread}

Delete mail thread

| Input          | Comments                  | Default |
| -------------- | ------------------------- | ------- |
| Connection     |                           |         |
| Mail Thread ID | The ID of the mail thread |         |

### Delete Organization {#deleteorganization}

Delete an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |

### Delete Organization Follower {#deleteorganizationfollower}

Delete a follower from an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |
| Follower ID     | The ID of the follower     |         |

### Delete Person {#deleteperson}

Delete a person

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Person ID  | The ID of the person |         |

### Delete Person Field {#deletepersonfield}

Delete a person field

| Input           | Comments            | Default |
| --------------- | ------------------- | ------- |
| Connection      |                     |         |
| Person Field ID | The ID of the field |         |

### Delete Person Follower {#deletepersonfollower}

Delete a follower from a person

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Person ID   | The ID of the person   |         |
| Follower ID | The ID of the follower |         |

### Delete Person Picture {#deletepersonpicture}

Delete person picture

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Person ID  | The ID of the person |         |

### Delete Pipeline {#deletepipeline}

Delete a pipeline

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Pipeline ID | The ID of the pipeline |         |

### Delete Product {#deleteproduct}

Delete a product

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection |                       |         |
| Product ID | The ID of the product |         |

### Delete Product Field {#deleteproductfield}

Delete a product field

| Input            | Comments                    | Default |
| ---------------- | --------------------------- | ------- |
| Connection       |                             |         |
| Product Field ID | The ID of the product field |         |

### Delete Product Follower {#deleteproductfollower}

Delete a follower from a product

| Input       | Comments                                                        | Default |
| ----------- | --------------------------------------------------------------- | ------- |
| Connection  |                                                                 |         |
| Product ID  | The ID of the product                                           |         |
| Follower ID | The ID of the relationship between the follower and the product |         |

### Delete Stage {#deletestage}

Delete a stage

| Input      | Comments            | Default |
| ---------- | ------------------- | ------- |
| Connection |                     |         |
| Stage ID   | The ID of the stage |         |

### Delete Subscription (Deprecated) {#deletesubscription}

Delete a subscription

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Subscription ID | The ID of the subscription |         |

### Delete Webhook {#deletewebhook}

Delete a webhook

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Webhook ID | The ID of the webhook |         |
| Connection |                       |         |

### Download File {#downloadfile}

Download one file

| Input      | Comments         | Default |
| ---------- | ---------------- | ------- |
| Connection |                  |         |
| File ID    | The ID of a file |         |

### Find Subscription By Deal (Deprecated) {#findsubscriptionbydeal}

Find subscription by deal

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Deal ID    | The ID of the deal |         |

### Find Users By Name {#findusersbyname}

Find users by name

| Input           | Comments                                                                     | Default |
| --------------- | ---------------------------------------------------------------------------- | ------- |
| Connection      |                                                                              |         |
| Term            | The search term to look for                                                  |         |
| Search By Email | When enabled, the term will only be matched against email addresses of users | 1       |

### Get Activities {#getactivities}

Get all activities assigned to a particular user

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                  |         |
| Filter ID      | The ID of the filter to use (will narrow down results if used together with "user_id" parameter) |         |
| Limit          | Items shown per page                                                                             |         |
| Updated Since  | If set, only activities with an update_time later than or equal to this time are returned        |         |
| Updated Until  | If set, only activities with an update_time earlier than or equal to this time are returned      |         |
| Sort By        | The field name to sort by                                                                        |         |
| Sort Direction | The sorting direction.                                                                           | desc    |
| Cursor         | For pagination, the marker (an opaque string value) representing the first item on the next page |         |

### Get Activity {#getactivity}

Get details of an activity

| Input       | Comments               | Default |
| ----------- | ---------------------- | ------- |
| Connection  |                        |         |
| Activity ID | The ID of the activity |         |

### Get Activity Fields {#getactivityfields}

Get all activity fields

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Activity Types {#getactivitytypes}

Get all activity types

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Call Log {#getcalllog}

Get details of a call log

| Input       | Comments                                     | Default |
| ----------- | -------------------------------------------- | ------- |
| Connection  |                                              |         |
| Call Log ID | The ID received when you create the call log |         |

### Get Company Addons {#getcompanyaddons}

Get all add-ons for a single company

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Currencies {#getcurrencies}

Get all supported currencies

| Input      | Comments                                                                   | Default |
| ---------- | -------------------------------------------------------------------------- | ------- |
| Connection |                                                                            |         |
| Term       | Optional search term that is searched for from currency's name and/or code |         |

### Get Current User {#getcurrentuser}

Get current user data

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Deal {#getdeal}

Get details of a deal

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Deal ID    | The ID of the deal |         |

### Get Deal Activities {#getdealactivities}

List activities associated with a deal

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                  |         |
| Deal ID        | The ID of the deal                                                                               |         |
| Limit          | Items shown per page                                                                             |         |
| Cursor         | For pagination, the marker (an opaque string value) representing the first item on the next page |         |
| Done           | Whether the activity is done or not                                                              | false   |
| Sort By        | The field name to sort by                                                                        |         |
| Sort Direction | The sorting direction.                                                                           |         |

### Get Deal Field {#getdealfield}

Get one deal field

| Input         | Comments                 | Default |
| ------------- | ------------------------ | ------- |
| Connection    |                          |         |
| Deal Field ID | The ID of the deal field |         |

### Get Deal Fields {#getdealfields}

Get all deal fields

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Start      | Pagination start     | 0       |
| Limit      | Items shown per page |         |

### Get Deal Files {#getdealfiles}

List files attached to a deal

| Input                 | Comments                                                                                         | Default |
| --------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection            |                                                                                                  |         |
| Deal ID               | The ID of the deal                                                                               |         |
| Start                 | Pagination start                                                                                 | 0       |
| Limit                 | Items shown per page                                                                             |         |
| Cursor                | For pagination, the marker (an opaque string value) representing the first item on the next page |         |
| Include Deleted Files | When enabled, the list of files will also include deleted files                                  |         |
| Sort                  | The field names and sorting mode separated by a comma ("field_name_1 ASC", "field_name_2 DESC")  |         |

### Get Deal Followers {#getdealfollowers}

List followers of a deal

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                  |         |
| Deal ID    | The ID of the deal                                                                               |         |
| Limit      | Items shown per page                                                                             |         |
| Cursor     | For pagination, the marker (an opaque string value) representing the first item on the next page |         |

### Get Deal Mail Messages {#getdealmailmessages}

List mail messages associated with a deal

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                  |         |
| Deal ID    | The ID of the deal                                                                               |         |
| Start      | Pagination start                                                                                 | 0       |
| Limit      | Items shown per page                                                                             |         |
| Cursor     | For pagination, the marker (an opaque string value) representing the first item on the next page |         |

### Get Deal Participants {#getdealparticipants}

List participants of a deal

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                  |         |
| Deal ID    | The ID of the deal                                                                               |         |
| Start      | Pagination start                                                                                 | 0       |
| Limit      | Items shown per page                                                                             |         |
| Cursor     | For pagination, the marker (an opaque string value) representing the first item on the next page |         |

### Get Deal Persons (Deprecated) {#getdealpersons}

List all persons associated with a deal

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                  |         |
| Deal ID        | The ID of the deal                                                                               |         |
| Limit          | Items shown per page                                                                             |         |
| Cursor         | For pagination, the marker (an opaque string value) representing the first item on the next page |         |
| Sort By        | The field name to sort by                                                                        |         |
| Sort Direction | The sorting direction.                                                                           |         |

### Get Deal Products {#getdealproducts}

List products attached to a deal

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                  |         |
| Deal ID        | The ID of the deal                                                                               |         |
| Limit          | Items shown per page                                                                             |         |
| Cursor         | For pagination, the marker (an opaque string value) representing the first item on the next page |         |
| Sort By        | The field name to sort by                                                                        |         |
| Sort Direction | The sorting direction.                                                                           |         |

### Get Deals {#getdeals}

Get all deals

| Input          | Comments                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Fetch All      | If set to true, all records will be fetched. If set to false, the provided pagination will be used. | false   |
| Limit          | Items shown per page                                                                                |         |
| Cursor         | For pagination, the marker (an opaque string value) representing the first item on the next page    |         |
| Sort By        | The field name to sort by                                                                           |         |
| Sort Direction | The sorting direction.                                                                              |         |
| Filter ID      | The ID of the filter to use                                                                         |         |
| Stage ID       | If supplied, only deals within the given stage will be returned                                     |         |
| Status         | Only fetch deals with a specific status                                                             |         |
| Connection     |                                                                                                     |         |

### Get Deals Summary {#getdealssummary}

Get deals summary

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| Status     | Only fetch deals with a specific status             |         |
| Filter ID  | user_id will not be considered                      |         |
| User ID    | Only deals matching the given user will be returned |         |
| Stage ID   | Only deals within the given stage will be returned  |         |

### Get Deals Timeline {#getdealstimeline}

Get deals timeline

| Input                   | Comments                                                             | Default |
| ----------------------- | -------------------------------------------------------------------- | ------- |
| Connection              |                                                                      |         |
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

List permitted users

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Deal ID    | The ID of the deal |         |

### Get File Metadata by ID {#getfile}

Get metadata about one file by ID

| Input      | Comments         | Default |
| ---------- | ---------------- | ------- |
| Connection |                  |         |
| File ID    | The ID of a file |         |

### Get Filter {#getfilter}

Get one filter

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Filter ID  | The ID of the filter |         |

### Get Filters {#getfilters}

Get all filters

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection |                               |         |
| Type       | The types of filters to fetch |         |

### Get Lead {#getlead}

Get one lead

| Input      | Comments           | Default |
| ---------- | ------------------ | ------- |
| Connection |                    |         |
| Lead ID    | The ID of the lead |         |

### Get Lead Labels {#getleadlabels}

Get all lead labels

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Leads {#getleads}

Get all leads

| Input           | Comments                                                                                        | Default |
| --------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                 |         |
| Limit           | Items shown per page                                                                            |         |
| Start           | Pagination start                                                                                | 0       |
| Archived Status | Filtering based on the archived status of a lead                                                |         |
| Owner ID        | If supplied, only leads matching the given user will be returned                                |         |
| Filter ID       | The ID of the filter to use                                                                     |         |
| Sort            | The field names and sorting mode separated by a comma ("field_name_1 ASC", "field_name_2 DESC") |         |

### Get Lead Sources {#getleadsources}

Get all lead sources

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Mail Message {#getmailmessage}

Get one mail message

| Input        | Comments                                        | Default |
| ------------ | ----------------------------------------------- | ------- |
| Connection   |                                                 |         |
| Id           | The ID of the mail message to fetch             |         |
| Include Body | Whether to include the full message body or not | 1       |

### Get Mail Thread {#getmailthread}

Get one mail thread

| Input          | Comments                  | Default |
| -------------- | ------------------------- | ------- |
| Connection     |                           |         |
| Mail Thread ID | The ID of the mail thread |         |

### Get Mail Thread Messages {#getmailthreadmessages}

Get all mail messages of mail thread

| Input          | Comments                  | Default |
| -------------- | ------------------------- | ------- |
| Connection     |                           |         |
| Mail Thread ID | The ID of the mail thread |         |

### Get Mail Threads {#getmailthreads}

Get mail threads

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection |                             |         |
| Folder     | The type of folder to fetch | inbox   |
| Start      | Pagination start            | 0       |
| Limit      | Items shown per page        |         |

### Get Note Fields {#getnotefields}

Get all note fields

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Organization {#getorganization}

Get details of an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |

### Get Organization Activities {#getorganizationactivities}

List activities associated with an organization

| Input           | Comments                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                  |         |
| Organization ID | The ID of the organization                                                                       |         |
| Limit           | Items shown per page                                                                             |         |
| Cursor          | For pagination, the marker (an opaque string value) representing the first item on the next page |         |
| Done            | Whether the activity is done or not                                                              | false   |

### Get Organization Deals {#getorganizationdeals}

List deals associated with an organization

| Input           | Comments                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                  |         |
| Organization ID | The ID of the organization                                                                       |         |
| Limit           | Items shown per page                                                                             |         |
| Cursor          | For pagination, the marker (an opaque string value) representing the first item on the next page |         |
| Status          | Only fetch deals with a specific status                                                          |         |
| Sort By         | The field name to sort by                                                                        |         |
| Sort Direction  | The sorting direction.                                                                           |         |

### Get Organization Files {#getorganizationfiles}

List files attached to an organization

| Input                 | Comments                                                                                        | Default |
| --------------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                 |         |
| Organization ID       | The ID of the organization                                                                      |         |
| Start                 | Pagination start                                                                                | 0       |
| Limit                 | Items shown per page                                                                            |         |
| Include Deleted Files | When enabled, the list of files will also include deleted files                                 |         |
| Sort                  | The field names and sorting mode separated by a comma ("field_name_1 ASC", "field_name_2 DESC") |         |

### Get Organization Followers {#getorganizationfollowers}

List followers of an organization

| Input           | Comments                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                  |         |
| Organization ID | The ID of the organization                                                                       |         |
| Limit           | Items shown per page                                                                             |         |
| Cursor          | For pagination, the marker (an opaque string value) representing the first item on the next page |         |

### Get Organization Mail Messages {#getorganizationmailmessages}

List mail messages associated with an organization

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |
| Start           | Pagination start           | 0       |
| Limit           | Items shown per page       |         |

### Get Organization Persons {#getorganizationpersons}

List persons of an organization

| Input           | Comments                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                  |         |
| Organization ID | The ID of the organization                                                                       |         |
| Limit           | Items shown per page                                                                             |         |
| Cursor          | For pagination, the marker (an opaque string value) representing the first item on the next page |         |

### Get Organizations {#getorganizations}

Get all organizations

| Input          | Comments                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Fetch All      | If set to true, all records will be fetched. If set to false, the provided pagination will be used. | false   |
| Limit          | Items shown per page                                                                                |         |
| Cursor         | For pagination, the marker (an opaque string value) representing the first item on the next page    |         |
| Sort By        | The field name to sort by                                                                           |         |
| Sort Direction | The sorting direction.                                                                              |         |
| Filter ID      | The ID of the filter to use                                                                         |         |
| Connection     |                                                                                                     |         |

### Get Organization Updates {#getorganizationupdates}

List updates about an organization

| Input           | Comments                                                         | Default |
| --------------- | ---------------------------------------------------------------- | ------- |
| Connection      |                                                                  |         |
| Organization ID | The ID of the organization                                       |         |
| Start           | Pagination start                                                 | 0       |
| Limit           | Items shown per page                                             |         |
| All Changes     | Whether to show custom field updates or not                      |         |
| Items           | A comma-separated string for filtering out item specific updates |         |

### Get Organization Users {#getorganizationusers}

List permitted users

| Input           | Comments                   | Default |
| --------------- | -------------------------- | ------- |
| Connection      |                            |         |
| Organization ID | The ID of the organization |         |

### Get Permission Set {#getpermissionset}

Get one permission set

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Connection        |                              |         |
| Permission Set ID | The ID of the permission set |         |

### Get Permission Set Assignments {#getpermissionsetassignments}

List permission set assignments

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Connection        |                              |         |
| Permission Set ID | The ID of the permission set |         |
| Start             | Pagination start             | 0       |
| Limit             | Items shown per page         |         |

### Get Permission Sets {#getpermissionsets}

Get all permission sets

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Person {#getperson}

Get details of a person

| Input      | Comments             | Default |
| ---------- | -------------------- | ------- |
| Connection |                      |         |
| Person ID  | The ID of the person |         |

### Get Person Activities {#getpersonactivities}

List activities associated with a person

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                  |         |
| Person ID  | The ID of the person                                                                             |         |
| Limit      | Items shown per page                                                                             |         |
| Cursor     | For pagination, the marker (an opaque string value) representing the first item on the next page |         |
| Done       | Whether the activity is done or not                                                              | false   |

### Get Person Deals {#getpersondeals}

List deals associated with a person

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                  |         |
| Person ID      | The ID of the person                                                                             |         |
| Limit          | Items shown per page                                                                             |         |
| Cursor         | For pagination, the marker (an opaque string value) representing the first item on the next page |         |
| Status         | Only fetch deals with a specific status                                                          |         |
| Sort By        | The field name to sort by                                                                        |         |
| Sort Direction | The sorting direction.                                                                           |         |

### Get Person Field {#getpersonfield}

Get one person field

| Input           | Comments            | Default |
| --------------- | ------------------- | ------- |
| Connection      |                     |         |
| Person Field ID | The ID of the field |         |

### Get Person Field Details {#getpersonfielddetails}

Get details of a specific field for a person

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection |                                                   |         |
| Field ID   | The ID of the field to fetch details for a person |         |
