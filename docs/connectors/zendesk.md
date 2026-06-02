---
title: Zendesk Connector
sidebar_label: Zendesk
description: Manage tickets and users in Zendesk.
---

![Zendesk](./assets/zendesk.png#connector-icon)
Manage tickets and users in Zendesk.

## Connections

### API Token {#apitoken}

Authenticate requests using an API token.

| Input              | Comments                                                                                                               | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Zendesk Sub Domain | Your Zendesk sub domain. (e.g. if your Zendesk URL is https://acme-inc.zendesk.com, then your sub domain is acme-inc). |         |
| Username           | Your Zendesk username. (Email address used to login to Zendesk).                                                       |         |
| API Token          | Your generated API token from Zendesk.                                                                                 |         |

### OAuth 2.0 {#oauth2dynamicinputs}

Authenticate using OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input              | Comments                                                                                                               | Default    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | ---------- |
| Zendesk Sub Domain | Your Zendesk sub domain. (e.g. if your Zendesk URL is https://acme-inc.zendesk.com, then your sub domain is acme-inc). |            |
| Scopes             |                                                                                                                        | read write |
| Client ID          |                                                                                                                        |            |
| Client Secret      |                                                                                                                        |            |

### OAuth 2.0 (Deprecated) {#oauth2}

Authenticate using OAuth 2.0. (Deprecated)

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default                                                          |
| ------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Zendesk.                                        | https://YOUR-ZENDESK-DOMAIN.zendesk.com/oauth/authorizations/new |
| Token URL     | The OAuth 2.0 Token URL for Zendesk.                                                | https://YOUR-ZENDESK-DOMAIN.zendesk.com/oauth/tokens             |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. | read write                                                       |
| Client ID     |                                                                                     |                                                                  |
| Client Secret |                                                                                     |                                                                  |

## Triggers

### New and Updated Tickets {#pollchangestrigger}

Checks for new and updated tickets in Zendesk on a configured schedule.

| Input                | Comments                                                                           | Default |
| -------------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection           | The Zendesk connection to use.                                                     |         |
| Show New Records     | When true, newly created tickets are included in the trigger output.               | true    |
| Show Updated Records | When true, tickets updated since the last poll are included in the trigger output. | true    |

### Webhook {#webhook}

Receive and validate webhook requests from Zendesk for manually configured webhook subscriptions.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Zendesk connection to use. |         |

## Actions

### Associate Attachments to Article {#associateattachmentsinbulktoarticle}

Associate attachments in bulk to a single article, with a maximum of 20 attachments per request.

| Input          | Comments                                            | Default |
| -------------- | --------------------------------------------------- | ------- |
| Connection     | The Zendesk connection to use.                      |         |
| Article ID     | The unique identifier for the article.              |         |
| Locale         | The locale code for the resource.                   | en-us   |
| Attachment IDs | The list of attachment IDs to attach to the object. |         |

### Create Article {#createarticle}

Create a new article in the Help Center.

| Input               | Comments                                                                                                      | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Zendesk connection to use.                                                                                |         |
| Locale              | The locale code for the resource.                                                                             | en-us   |
| Section ID          | The unique identifier for the section.                                                                        |         |
| Title               | The headline displayed for the article.                                                                       |         |
| User Segment ID     | The unique identifier for the user segment.                                                                   |         |
| Permission Group ID | The unique identifier for the permission group.                                                               |         |
| Body                | The main content of the article.                                                                              |         |
| Draft               | When true, the article is saved as a draft instead of published.                                              | false   |
| Notify Subscribers  | When false, suppresses the article creation email to subscribers. Useful when creating many articles at once. | false   |

### Create Article Attachment {#createarticleattachment}

Create an attachment for an article in the Help Center.

| Input      | Comments                                                         | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| Connection | The Zendesk connection to use.                                   |         |
| File Name  | The display name to use for the uploaded file.                   |         |
| File       | The File Attachment to upload.                                   |         |
| Inline     | When true, the attachment is rendered inline within the content. | false   |
| Article ID | The unique identifier for the article.                           |         |

### Create Article Subscription {#createarticlesubscription}

Create a subscription to an article in the Help Center.

| Input      | Comments                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk connection to use.                                                                      |         |
| Article ID | The unique identifier for the article.                                                              |         |
| User ID    | The ID of the user to subscribe to the section. If none provided, the API assumes the current user. |         |
| Locale     | The locale of the article. If not provided, the default locale is used.                             |         |

### Create Category {#createcategory}

Create a category in the Help Center.

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Connection           | The Zendesk connection to use.                       |         |
| Category Name        | The display name of the category.                    |         |
| Category Description | The descriptive text shown below the category title. |         |
| Locale               | The locale code for the resource.                    | en-us   |
| Position             | The position of the category to be created.          |         |

### Create Post {#createpost}

Create a new post in the Help Center.

| Input              | Comments                                                                                                      | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Zendesk connection to use.                                                                                |         |
| Topic ID           | The ID of the topic to create the post in.                                                                    |         |
| Title              | The headline displayed for the post.                                                                          |         |
| Details            | The main body content of the post.                                                                            |         |
| Featured           | When true, the post is featured prominently in the community.                                                 | false   |
| Pinned             | When true, the post is pinned to the top of its topic.                                                        | false   |
| Status             | The current workflow state of the post.                                                                       |         |
| Notify Subscribers | When false, suppresses the article creation email to subscribers. Useful when creating many articles at once. | false   |
| Content Tag IDs    | The list of content tag IDs to attach to the object.                                                          |         |

### Create Post Subscription {#createpostsubscription}

Create a post subscription in the Help Center.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Zendesk connection to use.                                                                   |         |
| Post ID    | The unique identifier for the post.                                                              |         |
| User ID    | The ID of the user to subscribe to the post. If none provided, the API assumes the current user. |         |

### Create Section {#createsection}

Create a section in the Help Center.

| Input               | Comments                                            | Default |
| ------------------- | --------------------------------------------------- | ------- |
| Connection          | The Zendesk connection to use.                      |         |
| Locale              | The locale code for the resource.                   | en-us   |
| Category ID         | The unique identifier for the category.             |         |
| Section Name        | The display name of the section.                    |         |
| Section Description | The descriptive text shown below the section title. |         |
| Position            | The position of the section.                        |         |

### Create Section Subscription {#createsectionsubscription}

Create a section subscription in the Help Center.

| Input            | Comments                                                                                            | Default |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Zendesk connection to use.                                                                      |         |
| Section ID       | The unique identifier for the section.                                                              |         |
| User ID          | The ID of the user to subscribe to the section. If none provided, the API assumes the current user. |         |
| Locale           | The locale of the section. If not provided, the default locale is used.                             |         |
| Include Comments | When true, the subscription also includes notifications for comments.                               | false   |

### Create Ticket {#createticket}

Create a new ticket.

| Input                     | Comments                                                                                              | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Requester Name            | The full name of the person requesting the ticket.                                                    |         |
| Requester Email           | The email address of the person requesting the ticket.                                                |         |
| Assignee ID               | The unique identifier for the user assigned to the ticket.                                            |         |
| Recipient Email           | The email address of the ticket recipient.                                                            |         |
| Ticket Subject            | The summary line shown at the top of the ticket.                                                      |         |
| Ticket Priority           | The urgency level assigned to the ticket.                                                             |         |
| Ticket Status             | The current workflow status of the ticket.                                                            |         |
| Ticket Comment Body       | The plain text description used as the initial comment on the ticket, attributed to the assignee.     |         |
| Ticket Comment HTML Body  | The HTML-formatted description used as the initial comment on the ticket, attributed to the assignee. |         |
| Tags                      | The list of tags to attach to the resource.                                                           |         |
| Ticket Type               | The classification of the ticket.                                                                     |         |
| Requester Organization ID | The unique identifier for the organization the requester belongs to.                                  |         |
| Followers                 | The list of user IDs to add as followers on the issue.                                                |         |
| Connection                | The Zendesk connection to use.                                                                        |         |
| External ID               | The ID of this issue from an external system                                                          |         |

### Create Topic {#createtopic}

Create a new topic in the Help Center.

| Input             | Comments                                          | Default |
| ----------------- | ------------------------------------------------- | ------- |
| Connection        | The Zendesk connection to use.                    |         |
| Topic Name        | The display name of the topic.                    |         |
| Topic Description | The descriptive text shown below the topic title. |         |

### Create Topic Subscription {#createtopicsubscription}

Create a new topic subscription in the Help Center.

| Input            | Comments                                                                                          | Default |
| ---------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Zendesk connection to use.                                                                    |         |
| Topic ID         | The unique identifier for the topic.                                                              |         |
| User ID          | The ID of the user to subscribe to the topic. If none provided, the API assumes the current user. |         |
| Include Comments | When true, the subscription also includes notifications for comments.                             | false   |

### Create User {#createuser}

Create a new user.

| Input           | Comments                                                                                                                               | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Name            | The full name of the user.                                                                                                             |         |
| Email Address   | The email address for the user. Must be unique within the Zendesk domain.                                                              |         |
| User Role       | The permission level granted to the user.                                                                                              |         |
| Phone Number    | The phone number associated with the user.                                                                                             |         |
| External ID     | A unique identifier from another system. The API treats the ID as case sensitive — for example, "ian1" and "Ian1" are different users. |         |
| Notes           | Free-form notes attached to the user record, visible to agents.                                                                        |         |
| Details         | Additional details attached to the user record, visible to agents.                                                                     |         |
| Moderator       | When true, the user is granted moderator permissions.                                                                                  | false   |
| Alias           | The display alias shown for the user instead of the real name.                                                                         |         |
| Verified        | When true, marks at least one of the user's identities as verified.                                                                    | false   |
| Organization ID | The unique identifier for the organization.                                                                                            |         |
| Connection      | The Zendesk connection to use.                                                                                                         |         |

### Create Webhook {#createwebhook}

Create a webhook in Zendesk to receive notifications of changes to users, organizations, or tickets.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        | The Zendesk connection to use.                       |         |
| Callback URL      | The URL to send data to                              |         |
| Webhook Name      | A unique name to assign this webhook                 |         |
| Events            | The list of events that trigger the webhook to fire. |         |
| Allow Duplicates? |                                                      | false   |

### Create Webhook Trigger {#createwebhooktrigger}

Create a Zendesk trigger that fires a webhook.

| Input                | Comments                                                                                                                                                                                             | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection           | The Zendesk connection to use.                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Trigger Name         |                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Webhook ID           |                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Webhook Message Body | The body to send to the webhook. See [Zendesk Support documentation](https://support.zendesk.com/hc/en-us/articles/4408886858138-Zendesk-Support-placeholders-reference) for placeholder references. | <code>{<br /> "current_user": {<br /> "details": "{{current_user.details}}",<br /> "email": "{{current_user.email}}",<br /> "external_id": "{{current_user.external_id}}",<br /> "first_name": "{{current_user.first_name}}",<br /> "language": "{{current_user.language}}",<br /> "name": "{{current_user.name}}",<br /> "notes": "{{current_user.notes}}",<br /> "organization.details": "{{current_user.organization.details}}",<br /> "organization.name": "{{current_user.organization.name}}",<br /> "organization.notes": "{{current_user.organization.notes}}",<br /> "phone": "{{current_user.phone}}",<br /> "tags": "{{current_user.tags}}"<br /> },<br /> "ticket": {<br /> "account": "{{ticket.account}}",<br /> "assignee": {<br /> "first_name": "{{ticket.assignee.first_name}}",<br /> "last_name": "{{ticket.assignee.last_name}}",<br /> "name": "{{ticket.assignee.name}}"<br /> },<br /> "brand": {<br /> "name": "{{ticket.brand.name}}"<br /> },<br /> "cc_names": "{{ticket.cc_names}}",<br /> "ccs": "{{ticket.ccs}}",<br /> "comments_formatted": "{{ticket.comments_formatted}}",<br /> "description": "{{ticket.description}}",<br /> "due_date": "{{ticket.due_date}}",<br /> "email_cc_names": "{{ticket.email_cc_names}}",<br /> "email_ccs": "{{ticket.email_ccs}}",<br /> "external_id": "{{ticket.external_id}}",<br /> "follower_names": "{{ticket.follower_names}}",<br /> "follower_reply_type_message": "{{ticket.follower_reply_type_message}}",<br /> "followers": "{{ticket.followers}}",<br /> "group": {<br /> "name": "{{ticket.group.name}}"<br /> },<br /> "id": "{{ticket.id}}",<br /> "in_business_hours": "{{ticket.in_business_hours}}",<br /> "latest_comment_formatted": "{{ticket.latest_comment_formatted}}",<br /> "latest_public_comment_formatted": "{{ticket.latest_public_comment_formatted}}",<br /> "link": "{{ticket.link}}",<br /> "organization": {<br /> "external_id": "{{ticket.organization.external_id}}",<br /> "name": "{{ticket.organization.name}}"<br /> },<br /> "priority": "{{ticket.priority}}",<br /> "public_comments_formatted": "{{ticket.public_comments_formatted}}",<br /> "requester": {<br /> "email": "{{ticket.requester.email}}",<br /> "external_id": "{{ticket.requester.external_id}}",<br /> "first_name": "{{ticket.requester.first_name}}",<br /> "language": "{{ticket.requester.language}}",<br /> "last_name": "{{ticket.requester.last_name}}",<br /> "name": "{{ticket.requester.name}}",<br /> "phone": "{{ticket.requester.phone}}"<br /> },<br /> "status": "{{ticket.status}}",<br /> "tags": "{{ticket.tags}}",<br /> "ticket_field_ID": "{{ticket.ticket_field_ID}}",<br /> "ticket_field_option_title_ID": "{{ticket.ticket_field_option_title_ID}}",<br /> "ticket_form": "{{ticket.ticket_form}}",<br /> "ticket_type": "{{ticket.ticket_type}}",<br /> "title": "{{ticket.title}}",<br /> "via": "{{ticket.via}}"<br /> }<br />}</code> |
| Trigger Conditions   | The conditions under which this trigger will fire. Leave the default to fire under any change.                                                                                                       | <code>{<br /> "all": [],<br /> "any": [<br /> {<br /> "field": "status",<br /> "operator": "changed"<br /> },<br /> {<br /> "field": "status",<br /> "operator": "not_changed"<br /> }<br /> ]<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Allow Duplicates?    | Allow a duplicate trigger with the same title to be created?                                                                                                                                         | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Delete Article Attachment {#deletearticleattachment}

Delete an existing article attachment.

| Input                 | Comments                                          | Default |
| --------------------- | ------------------------------------------------- | ------- |
| Connection            | The Zendesk connection to use.                    |         |
| Article Attachment ID | The unique identifier for the article attachment. |         |

### Delete Article Subscription {#deletearticlesubscription}

Delete a subscription to an article in the Help Center.

| Input           | Comments                                                                | Default |
| --------------- | ----------------------------------------------------------------------- | ------- |
| Connection      | The Zendesk connection to use.                                          |         |
| Subscription ID | The unique identifier for the subscription.                             |         |
| Article ID      | The unique identifier for the article.                                  |         |
| Locale          | The locale of the article. If not provided, the default locale is used. |         |

### Delete Category {#deletecategory}

Delete a category in the Help Center.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Zendesk connection to use.          |         |
| Category ID | The unique identifier for the category. |         |

### Delete Instance Webhooks {#deleteinstancewebhooks}

Delete all webhooks pointing to this instance.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Zendesk connection to use. |         |

### Delete Post {#deletepost}

Delete a post in the Help Center.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk connection to use.      |         |
| Post ID    | The unique identifier for the post. |         |

### Delete Post Subscription {#deletepostsubscription}

Delete a post subscription in the Help Center.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Zendesk connection to use.              |         |
| Post ID         | The unique identifier for the post.         |         |
| Subscription ID | The unique identifier for the subscription. |         |

### Delete Section {#deletesection}

Delete a section in the Help Center. (warning: deleting a section also deletes all its articles).

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Zendesk connection to use.         |         |
| Locale     | The locale code for the resource.      | en-us   |
| Section ID | The unique identifier for the section. |         |

### Delete Section Subscription {#deletesectionsubscription}

Delete a section subscription in the Help Center.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Zendesk connection to use.              |         |
| Section ID      | The unique identifier for the section.      |         |
| Subscription ID | The unique identifier for the subscription. |         |

### Delete Ticket {#deleteticket}

Delete a ticket by ID.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Ticket ID  | The unique identifier for the ticket. |         |
| Connection | The Zendesk connection to use.        |         |

### Delete Topic {#deletetopic}

Delete a topic from the Help Center.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Zendesk connection to use.       |         |
| Topic ID   | The unique identifier for the topic. |         |

### Delete Topic Subscription {#deletetopicsubscription}

Delete a topic subscription in the Help Center.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Zendesk connection to use.              |         |
| Topic ID        | The unique identifier for the topic.        |         |
| Subscription ID | The unique identifier for the subscription. |         |

### Delete User {#deleteuser}

Delete a user by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| User ID    | The unique identifier for the user. |         |
| Connection | The Zendesk connection to use.      |         |

### Delete Webhook {#deletewebhook}

Delete a webhook by ID.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Zendesk connection to use. |         |
| Webhook ID |                                |         |

### Get Article {#showarticle}

Get an article from the Help Center.

| Input      | Comments                                                     | Default |
| ---------- | ------------------------------------------------------------ | ------- |
| Connection | The Zendesk connection to use.                               |         |
| Locale     | The locale of the articles to retrieve. Defaults to 'en-us'. | en-us   |
| Article ID | The unique identifier for the article.                       |         |

### Get Article Attachment {#getarticleattachment}

Get the properties of an attachment on an article in the Help Center.

| Input                 | Comments                                          | Default |
| --------------------- | ------------------------------------------------- | ------- |
| Connection            | The Zendesk connection to use.                    |         |
| Article ID            | The unique identifier for the article.            |         |
| Article Attachment ID | The unique identifier for the article attachment. |         |

### Get Article Subscription {#getarticlesubscription}

Get an article subscription from the Help Center.

| Input           | Comments                                                                | Default |
| --------------- | ----------------------------------------------------------------------- | ------- |
| Connection      | The Zendesk connection to use.                                          |         |
| Subscription ID | The unique identifier for the subscription.                             |         |
| Article ID      | The unique identifier for the article.                                  |         |
| Locale          | The locale of the article. If not provided, the default locale is used. |         |

### Get Category {#getcategory}

Get a category from the Help Center.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Zendesk connection to use.          |         |
| Locale      | The locale code for the resource.       | en-us   |
| Category ID | The unique identifier for the category. |         |

### Get Post {#getpost}

Get a post from the Help Center.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Zendesk connection to use.      |         |
| Post ID    | The unique identifier for the post. |         |

### Get Post Subscription {#getpostsubscription}

Get a post subscription from the Help Center.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Post ID         | The unique identifier for the post.         |         |
| Subscription ID | The unique identifier for the subscription. |         |
| Connection      | The Zendesk connection to use.              |         |

### Get Section {#getsection}

Get a section from the Help Center.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Zendesk connection to use.         |         |
| Locale     | The locale code for the resource.      | en-us   |
| Section ID | The unique identifier for the section. |         |

### Get Section Subscription {#getsectionsubscription}

Get a section subscription from the Help Center.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Zendesk connection to use.              |         |
| Subscription ID | The unique identifier for the subscription. |         |
| Section ID      | The unique identifier for the section.      |         |

### Get Ticket {#showticket}

Get a ticket by ID.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Ticket ID  | The unique identifier for the ticket. |         |
| Connection | The Zendesk connection to use.        |         |

### Get Ticket By External ID {#getbyexternalid}

Get a ticket by external ID.

| Input       | Comments                                              | Default |
| ----------- | ----------------------------------------------------- | ------- |
| Connection  | The Zendesk connection to use.                        |         |
| External ID | The identifier for the issue from an external system. |         |

### Get Topic {#gettopic}

Get a topic from the Help Center.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The Zendesk connection to use.       |         |
| Topic ID   | The unique identifier for the topic. |         |

### Get Topic Subscription {#gettopicsubscription}

Get a topic subscription from the Help Center.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Zendesk connection to use.              |         |
| Subscription ID | The unique identifier for the subscription. |         |
| Topic ID        | The unique identifier for the topic.        |         |

### Get User {#showuser}

Get a user by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| User ID    | The unique identifier for the user. |         |
| Connection | The Zendesk connection to use.      |         |

### List Article Attachments {#listarticleattachments}

List all attachments for an article in the Help Center.

| Input      | Comments                                                                                          | Default |
| ---------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk connection to use.                                                                    |         |
| Article ID | The unique identifier for the article.                                                            |         |
| Page Limit | The number of results to return per page. The maximum is 100; any greater value is capped at 100. |         |
| Fetch All  | When true, automatically fetches all pages of results instead of returning a single page.         | false   |

### List Articles {#listarticles}

List all articles in the Help Center.

| Input             | Comments                                                                                                                                                                                                                               | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Zendesk connection to use.                                                                                                                                                                                                         |         |
| Locale            | The locale of the articles to retrieve. Defaults to 'en-us'.                                                                                                                                                                           | en-us   |
| Pagination Cursor | The pagination cursor from a previous request. If omitted, the first page is returned.                                                                                                                                                 |         |
| Page Limit        | The number of results to return per page. The maximum is 100; any greater value is capped at 100.                                                                                                                                      |         |
| Sort By           | The field to sort the articles by.                                                                                                                                                                                                     |         |
| Sort Order        | The direction used to order the results.                                                                                                                                                                                               |         |
| Label Names       | Restrict results to articles with the specified labels. A maximum of 10 labels can be supplied. See [label names](https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/#label-names) for more information. |         |
| Start Time        | The start time to filter articles by.                                                                                                                                                                                                  |         |
| Fetch All         | When true, automatically fetches all pages of results instead of returning a single page.                                                                                                                                              | false   |

### List Article Subscriptions {#listarticlesubscriptions}

List all subscriptions for an article in the Help Center.

| Input             | Comments                                                                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Zendesk connection to use.                                                                    |         |
| Page Limit        | The number of results to return per page. The maximum is 100; any greater value is capped at 100. |         |
| Pagination Cursor | The pagination cursor from a previous request. If omitted, the first page is returned.            |         |
| Article ID        | The unique identifier for the article.                                                            |         |

### List Categories {#listcategories}

List all categories in the Help Center.

| Input      | Comments                                                                                          | Default |
| ---------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Zendesk connection to use.                                                                    |         |
| Locale     | The locale code for the resource.                                                                 | en-us   |
| Sort By    | The field used to sort the results.                                                               |         |
| Sort Order | The direction used to order the results.                                                          |         |
| Page Limit | The number of results to return per page. The maximum is 100; any greater value is capped at 100. |         |
| Fetch All  | When true, automatically fetches all pages of results instead of returning a single page.         | false   |

### List Posts {#listposts}

List all posts in the Help Center.

| Input             | Comments                                                                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Zendesk connection to use.                                                                    |         |
| Filter By         | The field used to filter the results.                                                             |         |
| Pagination Cursor | The pagination cursor from a previous request. If omitted, the first page is returned.            |         |
| Page Limit        | The number of results to return per page. The maximum is 100; any greater value is capped at 100. |         |
| Topic ID          | The unique identifier for the topic.                                                              |         |
| Sort By           | The field used to sort the results.                                                               |         |
| Fetch All         | When true, automatically fetches all pages of results instead of returning a single page.         | false   |

### List Post Subscriptions {#listpostsubscriptions}

List all post subscriptions in the Help Center.

| Input             | Comments                                                                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Zendesk connection to use.                                                                    |         |
| Post ID           | The unique identifier for the post.                                                               |         |
| Pagination Cursor | The pagination cursor from a previous request. If omitted, the first page is returned.            |         |
| Page Limit        | The number of results to return per page. The maximum is 100; any greater value is capped at 100. |         |

### List Sections {#listsections}

Lists all the sections in the Help Center or in a specific category.

| Input       | Comments                                                                                          | Default |
| ----------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Zendesk connection to use.                                                                    |         |
| Locale      | The locale code for the resource.                                                                 | en-us   |
| Category ID | Input a categoryId to filter out sections by the ID provided.                                     |         |
| Sort By     | The field used to sort the results.                                                               |         |
| Sort Order  | The direction used to order the results.                                                          |         |
| Page Limit  | The number of results to return per page. The maximum is 100; any greater value is capped at 100. |         |
| Fetch All   | When true, automatically fetches all pages of results instead of returning a single page.         | false   |

### List Section Subscriptions {#listsectionsubscriptions}

List all section subscriptions in the Help Center.

| Input             | Comments                                                                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Zendesk connection to use.                                                                    |         |
| Pagination Cursor | The pagination cursor from a previous request. If omitted, the first page is returned.            |         |
| Page Limit        | The number of results to return per page. The maximum is 100; any greater value is capped at 100. |         |
| Section ID        | The unique identifier for the section.                                                            |         |

### List Tickets {#listtickets}

List all tickets.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Zendesk connection to use. |         |

### List Tickets Assigned To User {#listticketstouser}

List all of the tickets that have been assigned to a particular user.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| User ID    | The unique identifier for the user. |         |
| Connection | The Zendesk connection to use.      |         |

### List Tickets Requested By User {#listticketsbyuser}

List all of the tickets that a particular user has requested.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| User ID    | The unique identifier for the user. |         |
| Connection | The Zendesk connection to use.      |         |

### List Topics {#listtopics}

List all topics in the Help Center.

| Input             | Comments                                                                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Zendesk connection to use.                                                                    |         |
| Pagination Cursor | The pagination cursor from a previous request. If omitted, the first page is returned.            |         |
| Page Limit        | The number of results to return per page. The maximum is 100; any greater value is capped at 100. |         |
| Fetch All         | When true, automatically fetches all pages of results instead of returning a single page.         | false   |

### List Topic Subscriptions {#listtopicsubscriptions}

List all topic subscriptions in the Help Center.

| Input             | Comments                                                                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Zendesk connection to use.                                                                    |         |
| Pagination Cursor | The pagination cursor from a previous request. If omitted, the first page is returned.            |         |
| Topic ID          | The unique identifier for the topic.                                                              |         |
| Page Limit        | The number of results to return per page. The maximum is 100; any greater value is capped at 100. |         |

### List Triggers {#listtriggers}

List all workflow triggers configured in Zendesk.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Zendesk connection to use. |         |

### List Users {#listusers}

List all users.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Zendesk connection to use. |         |

### List Webhooks {#listwebhooks}

List all webhooks configured in Zendesk.

| Input                       | Comments                                       | Default |
| --------------------------- | ---------------------------------------------- | ------- |
| Connection                  | The Zendesk connection to use.                 |         |
| Show only instance webhooks | Show only webhooks that point to this instance | true    |

### Raw Request {#rawrequest}

Send a raw HTTP request to Zendesk.

| Input                   | Comments                                                                                                                                                                                                                                                                | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Zendesk connection to use.                                                                                                                                                                                                                                          |         |
| URL                     | Input the path only (/users), The base URL is already included with your proper Zendesk domain (https://YOUR-ZENDESK-DOMAIN.zendesk.com/api/v2). For example, to connect to https://YOUR-ZENDESK-DOMAIN.zendesk.com/api/v2/users, only /users is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                 |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                               |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                    |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                        |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                  |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                     |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                             |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                     |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                    | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                     | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                        | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                     | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                           | false   |

### Search Articles {#searcharticles}

Search for articles in the Help Center.

| Input          | Comments                                                                     | Default |
| -------------- | ---------------------------------------------------------------------------- | ------- |
| Connection     | The Zendesk connection to use.                                               |         |
| Locales        | The locale to filter the results by.                                         |         |
| Search Query   | The text or search string used to match results.                             |         |
| Brand IDs      | Restrict the search to articles or posts within these brands.                |         |
| Category IDs   | Restrict the search to articles or posts within these categories.            |         |
| Section ID     | The unique identifier for the section used to filter the results.            |         |
| Created After  | The lower bound used to filter results by creation date. Format: YYYY-MM-DD. |         |
| Created At     | The exact creation date used to filter the results. Format: YYYY-MM-DD.      |         |
| Created Before | The upper bound used to filter results by creation date. Format: YYYY-MM-DD. |         |
| Label Names    | The list of label names used to filter the results.                          |         |
| Updated At     | The exact update date used to filter the results. Format: YYYY-MM-DD.        |         |
| Updated Before | The upper bound used to filter results by update date. Format: YYYY-MM-DD.   |         |
| Updated After  | The lower bound used to filter results by update date. Format: YYYY-MM-DD.   |         |
| Multibrand     | When true, results are filtered across all brands in the account.            | false   |
| Sort Order     | The direction used to order the results.                                     |         |
| Sort By        | The field used to sort the results.                                          |         |

### Search Posts {#searchposts}

Search posts in the Help Center.

| Input          | Comments                                                                     | Default |
| -------------- | ---------------------------------------------------------------------------- | ------- |
| Connection     | The Zendesk connection to use.                                               |         |
| Topic ID       | The ID of the topic to filter posts by.                                      |         |
| Search Query   | The text or search string used to match results.                             |         |
| Created At     | The exact creation date used to filter the results. Format: YYYY-MM-DD.      |         |
| Created Before | The upper bound used to filter results by creation date. Format: YYYY-MM-DD. |         |
| Created After  | The lower bound used to filter results by creation date. Format: YYYY-MM-DD. |         |
| Sort By        | The field used to sort the results.                                          |         |
| Updated After  | The lower bound used to filter results by update date. Format: YYYY-MM-DD.   |         |
| Updated At     | The exact update date used to filter the results. Format: YYYY-MM-DD.        |         |
| Updated Before | The upper bound used to filter results by update date. Format: YYYY-MM-DD.   |         |
| Sort Order     | The direction used to order the results.                                     |         |

### Search Users {#searchusers}

Return an array of users who meet the search criteria.

| Input       | Comments                                                                                                                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| External ID | The external_id parameter does not support the search syntax. It only accepts ids.                                                                                              |         |
| Query       | The search query supporting Zendesk search syntax. Accepts a partial or full value of any user property, including name, email address, notes, or phone. Example: query="jdoe". |         |
| Connection  | The Zendesk connection to use.                                                                                                                                                  |         |

### Unified Search {#unifiedsearch}

Search for knowledge base articles, community posts, and external records in the Help Center.

| Input               | Comments                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Zendesk connection to use.                                                                    |         |
| Locales             | Restrict the search to articles or posts within these locales.                                    |         |
| Search Query        | The text or search string used to match results.                                                  |         |
| Brand IDs           | Restrict the search to articles or posts within these brands.                                     |         |
| Category IDs        | Restrict the search to articles or posts within these categories.                                 |         |
| Content Types       | Restrict the search to one of these content types: ARTICLE, POST.                                 |         |
| External Source IDs | Restrict the search results to the specified external source or sources.                          |         |
| Section IDs         | Restrict the search to articles or posts within these sections.                                   |         |
| Topic IDs           | Restrict the search to posts within these topics.                                                 |         |
| Pagination Cursor   | The pagination cursor from a previous request. If omitted, the first page is returned.            |         |
| Page Limit          | The number of results to return per page. The maximum is 100; any greater value is capped at 100. |         |

### Update Article {#updatearticle}

Update an existing article's metadata in the Help Center.

| Input               | Comments                                                       | Default |
| ------------------- | -------------------------------------------------------------- | ------- |
| Connection          | The Zendesk connection to use.                                 |         |
| Article ID          | The unique identifier for the article.                         |         |
| Section ID          | The unique identifier for the section.                         |         |
| Author ID           | The unique identifier for the author.                          |         |
| Title               | The headline displayed for the article.                        |         |
| Body                | The main content of the article.                               |         |
| Permission Group ID | The unique identifier for the permission group.                |         |
| User Segment ID     | The unique identifier for the user segment.                    |         |
| Locale              | The locale code for the resource.                              | en-us   |
| Promoted            | When true, the object is highlighted at the top of its list.   |         |
| Position            | The numeric ordering position of the object within its list.   |         |
| Comments Disabled   | When true, prevents users from leaving comments on the object. |         |
| Content Tag IDs     | The list of content tag IDs to attach to the object.           |         |
| Label Names         | The list of label names to attach to the object.               |         |

### Update Category {#updatecategory}

Update a category in the Help Center.

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           | The Zendesk connection to use.                 |         |
| Category ID          | The unique identifier for the category.        |         |
| Locale               | The locale of the category to be updated.      | en-us   |
| Category Name        | The name of the category to be updated.        |         |
| Category Description | The description of the category to be updated. |         |
| Position             | The position of the category to be updated.    |         |

### Update Post {#updatepost}

Update a post in the Help Center.

| Input           | Comments                                                      | Default |
| --------------- | ------------------------------------------------------------- | ------- |
| Connection      | The Zendesk connection to use.                                |         |
| Post ID         | The unique identifier for the post.                           |         |
| Title           | The headline displayed for the post.                          |         |
| Details         | The main body content of the post.                            |         |
| Status          | The current workflow state of the post.                       |         |
| Topic ID        | The unique identifier for the topic.                          |         |
| Featured        | When true, the post is featured prominently in the community. |         |
| Pinned          | When true, the post is pinned to the top of its topic.        |         |
| Closed          | When true, the post is closed to new comments.                |         |
| Content Tag IDs | The list of content tag IDs to attach to the object.          |         |

### Update Section {#updatesection}

Update a section in the Help Center.

| Input               | Comments                                    | Default |
| ------------------- | ------------------------------------------- | ------- |
| Connection          | The Zendesk connection to use.              |         |
| Locale              | The locale code for the resource.           | en-us   |
| Section ID          | The unique identifier for the section.      |         |
| Section Name        | Name of the Section to update.              |         |
| Section Description | Description of the Section to update.       |         |
| Position            | Position of the Section to update.          |         |
| Category ID         | Category ID of the Section to update.       |         |
| Parent Section ID   | Parent Section ID of the Section to update. |         |

### Update Ticket {#updateticket}

Update a ticket by ID.

| Input                     | Comments                                                                                              | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Ticket ID                 | The unique identifier for the ticket.                                                                 |         |
| Ticket Comment Body       | The plain text description used as the initial comment on the ticket, attributed to the assignee.     |         |
| Ticket Comment HTML Body  | The HTML-formatted description used as the initial comment on the ticket, attributed to the assignee. |         |
| File                      | The file contents to attach to the comment, accepted as either a string or a binary payload.          |         |
| File Name                 | The display name to use for the uploaded file.                                                        |         |
| Ticket Status             | The current workflow status of the ticket.                                                            |         |
| Assignee Email            | The email address of the user assigned to the ticket.                                                 |         |
| Assignee ID               | The unique identifier for the user assigned to the ticket.                                            |         |
| Tags                      | The list of tags to attach to the resource.                                                           |         |
| Ticket Type               | The classification of the ticket.                                                                     |         |
| Ticket Subject            | The summary line shown at the top of the ticket.                                                      |         |
| Ticket Priority           | The urgency level assigned to the ticket.                                                             |         |
| Requester Organization ID | The unique identifier for the organization the requester belongs to.                                  |         |
| Connection                | The Zendesk connection to use.                                                                        |         |

### Update Topic {#updatetopic}

Update a topic in the Help Center.

| Input             | Comments                                          | Default |
| ----------------- | ------------------------------------------------- | ------- |
| Connection        | The Zendesk connection to use.                    |         |
| Topic ID          | The unique identifier for the topic.              |         |
| Topic Name        | The display name of the topic.                    |         |
| User Segment ID   | The user segment ID to associate with the topic.  |         |
| Position          | The position of the topic in the list of topics.  |         |
| Topic Description | The descriptive text shown below the topic title. |         |
| Manageable By     | The user segment allowed to manage the topic.     |         |

### Update User {#updateuser}

Update a user by ID.

| Input           | Comments                                                                                                                               | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| User ID         | The unique identifier for the user.                                                                                                    |         |
| User Role       | The permission level granted to the user.                                                                                              |         |
| Name            | The full name of the user.                                                                                                             |         |
| Email Address   | The email address for the user. Must be unique within the Zendesk domain.                                                              |         |
| Phone Number    | The phone number associated with the user.                                                                                             |         |
| External ID     | A unique identifier from another system. The API treats the ID as case sensitive — for example, "ian1" and "Ian1" are different users. |         |
| Notes           | Free-form notes attached to the user record, visible to agents.                                                                        |         |
| Details         | Additional details attached to the user record, visible to agents.                                                                     |         |
| Moderator       | When true, the user is granted moderator permissions.                                                                                  |         |
| Alias           | The display alias shown for the user instead of the real name.                                                                         |         |
| Time Zone       | The time zone the user operates in.                                                                                                    |         |
| Verified        | When true, marks at least one of the user's identities as verified.                                                                    |         |
| Organization ID | The unique identifier for the organization.                                                                                            |         |
| Connection      | The Zendesk connection to use.                                                                                                         |         |
