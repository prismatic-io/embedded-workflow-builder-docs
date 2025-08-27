---
title: Zendesk Connector
sidebar_label: Zendesk
description: Manage Tickets and users in Zendesk
---

![Zendesk](./assets/zendesk.png#connector-icon)
Manage Tickets and users in Zendesk

## Connections

### API Token

Authenticates requests to Zendesk using a generated API token.

In order to use the API Token connection for Zendesk, you'll need to provide the following parameters:

- For **Username** enter the email of the Zendesk account.
- For **API Token** enter the generated API Token under Admin Center (https://YOUR-DOMAIN-HERE.zendesk.com/admin/home) ->
  App and Registrations -> Zendesk API -> Token access.
- For **Zendesk Domain** enter your Zendesk Subdomain. You can find your subdomain inside of your Zendesk URL: `https://YOUR-DOMAIN-HERE.zendesk.com/`

| Input              | Comments                                                                                                               | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Zendesk Sub Domain | Your Zendesk sub domain. (e.g. if your Zendesk URL is https://acme-inc.zendesk.com, then your sub domain is acme-inc). |         |
| Username           | Your Zendesk username. (Email address used to login to Zendesk).                                                       |         |
| API Token          | Your generated API token from Zendesk.                                                                                 |         |

### OAuth 2.0

Authenticates requests to Zendesk using an OAuth 2.0 connection.

The Zendesk component authenticates requests with OAuth 2.0.
To configure an application inside zendesk follow the directions in this [guide](https://support.zendesk.com/hc/en-us/articles/4408845965210-Using-OAuth-authentication-with-your-application)
Now, you will have to create a new Zendesk connection.

- For **Client ID** enter in the unique identifier of your app inside the Zendesk admin dashboard.
- For **Client Secret** enter the generated client secret you received from the Zendesk admin dashboard.
- For **Scopes** refer to the [guide](https://support.zendesk.com/hc/en-us/articles/4408845965210-Using-OAuth-authentication-with-your-application) that was linked above. There is detailed information on picking the correct scope.

You can find your subdomain inside of your Zendesk URL: `https://YOUR-DOMAIN-HERE.zendesk.com/`

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input              | Comments                                                                                                               | Default    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | ---------- |
| Zendesk Sub Domain | Your Zendesk sub domain. (e.g. if your Zendesk URL is https://acme-inc.zendesk.com, then your sub domain is acme-inc). |            |
| Scopes             |                                                                                                                        | read write |
| Client ID          |                                                                                                                        |            |
| Client Secret      |                                                                                                                        |            |

### OAuth2 (Deprecated)

Authenticates requests to Zendesk using an OAuth 2.0 connection.

The Zendesk component authenticates requests with OAuth 2.0.
To configure an application inside zendesk follow the directions in this [guide](https://support.zendesk.com/hc/en-us/articles/4408845965210-Using-OAuth-authentication-with-your-application)
Now, you will have to create a new Zendesk connection.

- For **Client ID** enter in the unique identifier of your app inside the Zendesk admin dashboard.
- For **Client Secret** enter the generated client secret you received from the Zendesk admin dashboard.
- For **Scopes** refer to the [guide](https://support.zendesk.com/hc/en-us/articles/4408845965210-Using-OAuth-authentication-with-your-application) that was linked above. There is detailed information on picking the correct scope.

You can find your subdomain inside of your Zendesk URL: `https://YOUR-DOMAIN-HERE.zendesk.com/`

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

### Webhook

Receive and validate webhook requests from Zendesk for webhooks you configure.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

## Actions

### Associate Attachments in Bulk to Article

Associate attachments in bulk to one article at a time, with a maximum of 20 attachments per request.

| Input          | Comments                                     | Default |
| -------------- | -------------------------------------------- | ------- |
| Connection     |                                              |         |
| Article Id     | The unique identifier of the article.        |         |
| Locale         | The desired locale.                          | en-us   |
| Attachment Ids | Attachment IDs to be attached to the Object. |         |

### Create Article

Create a new Article in the Help Center.

| Input               | Comments                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                |         |
| Locale              | The desired locale.                                                                                                                                                                                            | en-us   |
| Section Id          | The unique identifier of the section.                                                                                                                                                                          |         |
| Title               | The title of the article.                                                                                                                                                                                      |         |
| User Segment Id     | The unique identifier of the user segment.                                                                                                                                                                     |         |
| Permission Group Id | The unique identifier of the permission group.                                                                                                                                                                 |         |
| Body                | The body of the article.                                                                                                                                                                                       |         |
| Draft               | Whether the article is a draft or not.                                                                                                                                                                         | false   |
| Notify Subscribers  | Supplying a notify_subscribers with a value of false will prevent subscribers to the article from receiving an article creation email notification. This can be helpful when creating many articles at a time. | false   |

### Create Article Attachment

Creates an attachment for the specified article in the Help Center.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection |                                          |         |
| File Name  | The name of the file to upload           |         |
| File       | The File Attachment to upload.           |         |
| Inline     | Whether to inline the attachment or not. | false   |
| Article Id | The unique identifier of the article.    |         |

### Create Article Subscription

Create a subscription to an article in the Help Center.

| Input      | Comments                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                     |         |
| Article Id | The unique identifier of the article.                                                               |         |
| UserId     | The ID of the user to subscribe to the section. If none provided, the API assumes the current user. |         |
| Locale     | The locale of the article. If not provided, the default locale is used.                             |         |

### Create Category

Create a category in the Help Center.

| Input                | Comments                                    | Default |
| -------------------- | ------------------------------------------- | ------- |
| Connection           |                                             |         |
| Category Name        | The name of the category.                   |         |
| Category Description | The description of the category.            |         |
| Locale               | The desired locale.                         | en-us   |
| Position             | The position of the category to be created. |         |

### Create Post

Create a new post in the Help Center.

| Input              | Comments                                                                                                                                                                                                       | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                                                                                |         |
| Topic Id           | The ID of the topic to create the post in.                                                                                                                                                                     |         |
| Title              | The title of the post.                                                                                                                                                                                         |         |
| Details            | The details of the post.                                                                                                                                                                                       |         |
| Featured           | Whether the post is featured or not.                                                                                                                                                                           | false   |
| Pinned             | Whether the post is pinned or not.                                                                                                                                                                             | false   |
| Status             | The status of the post.                                                                                                                                                                                        |         |
| Notify Subscribers | Supplying a notify_subscribers with a value of false will prevent subscribers to the article from receiving an article creation email notification. This can be helpful when creating many articles at a time. | false   |
| Content Tag Ids    | Content Tag IDs to be attached to the Object.                                                                                                                                                                  |         |

### Create Post Subscription

Create a Post subscription in the Help Center.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                  |         |
| Post Id    | The unique identifier of the post.                                                               |         |
| UserId     | The ID of the user to subscribe to the post. If none provided, the API assumes the current user. |         |

### Create Section

Create a category in the Help Center.

| Input               | Comments                               | Default |
| ------------------- | -------------------------------------- | ------- |
| Connection          |                                        |         |
| Locale              | The desired locale.                    | en-us   |
| Category Id         | The unique identifier of the category. |         |
| Section Name        | The name of the section.               |         |
| Section Description | The description of the section.        |         |
| Position            | The position of the section.           |         |

### Create Section Subscription

Create a Section subscription in the Help Center.

| Input            | Comments                                                                                            | Default |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                     |         |
| Section Id       | The unique identifier of the section.                                                               |         |
| UserId           | The ID of the user to subscribe to the section. If none provided, the API assumes the current user. |         |
| Locale           | The locale of the section. If not provided, the default locale is used.                             |         |
| Include Comments | Whether to be subscribed to comments or not.                                                        | false   |

### Create Ticket

Create a new ticket.

| Input                     | Comments                                                                                                                                              | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Requester Name            | Provide a string value for the name of the requester.                                                                                                 |         |
| Requester Email           | Provide a string value for the email of the requester.                                                                                                |         |
| Assignee Id               | Provide a valid user id for the assignee of the ticket.                                                                                               |         |
| Recipient Email           | Provide a string value for the name of the recipient.                                                                                                 |         |
| Ticket Subject            | Provide a string value for the subject of the ticket                                                                                                  |         |
| Ticket Priority           | Provide a string value for the priority of the ticket.                                                                                                |         |
| Ticket Status             | Provide a string value for the status of the ticket.                                                                                                  |         |
| Ticket Comment Body       | When creating a ticket, this field can be used to give a ticket description. It will also leave a comment on the ticket from the assignee.            |         |
| Ticket Comment HTML Body  | When creating a ticket, this field can be used to give a ticket description using HTML. It will also leave a comment on the ticket from the assignee. |         |
| Tags                      | For each item, provide a string value for the tag.                                                                                                    |         |
| Ticket Type               | Provide a string value for the type of the ticket.                                                                                                    |         |
| Requester Organization Id | Provide an integer value to specify the Organization of the requester.                                                                                |         |
| Followers                 | For each item provide a unique identifier of the follower you want to add to the issue.                                                               |         |
| Connection                |                                                                                                                                                       |         |
| External ID               | The ID of this issue from an external system                                                                                                          |         |

### Create Topic

Create a new topic in the Help Center.

| Input             | Comments                      | Default |
| ----------------- | ----------------------------- | ------- |
| Connection        |                               |         |
| Topic Name        | The name of the topic.        |         |
| Topic Description | The description of the topic. |         |

### Create Topic Subscription

Create a new Topic subscription In The Help Center.

| Input            | Comments                                                                                          | Default |
| ---------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                   |         |
| Topic Id         | The unique identifier of the topic.                                                               |         |
| UserId           | The ID of the user to subscribe to the topic. If none provided, the API assumes the current user. |         |
| Include Comments | Whether to be subscribed to comments or not.                                                      | false   |

### Create User

Create a new user.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Name            | Provide a string value for the name of the user.                                                                                 |         |
| Email Address   | Provide a valid email address for the user. Make sure this value does not conflict with any other users in your Zendesk Domain   |         |
| User Role       | Provide which level of permissions the user is granted.                                                                          |         |
| Phone Number    | Provide a valid phone number for the user.                                                                                       |         |
| External Id     | A unique identifier from another system. The API treats the id as case sensitive. Example: "ian1" and "Ian1" are different users |         |
| Notes           | Provide a string value that represents notes to be attached to the user.                                                         |         |
| Details         | Provide a string value that represents details to be attached to the user.                                                       |         |
| Moderator       | This flag specifies whether or not the user will have moderator permissions.                                                     | false   |
| Alias           | Provide a string value that represents an alias to give to a user.                                                               |         |
| Verified        | Flip this flag to true if any of the user's identities is verified.                                                              | false   |
| Organization Id | Provide the unique identifier of the organization.                                                                               |         |
| Connection      |                                                                                                                                  |         |

### Create Webhook

Create a webhook in Zendesk to notify you of changes to your users, organization, or tickets

| Input             | Comments                                         | Default |
| ----------------- | ------------------------------------------------ | ------- |
| Connection        |                                                  |         |
| Callback URL      | The URL to send data to                          |         |
| Webhook Name      | A unique name to assign this webhook             |         |
| Events            | Determines what events trigger a webhook to fire |         |
| Allow Duplicates? |                                                  | false   |

### Create Webhook Trigger

Create a trigger to cause a webhook to fire

| Input                | Comments                                                                                                                                | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection           |                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Trigger Name         |                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Webhook ID           |                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Webhook Message Body | The body to send to the webhook. See https://support.zendesk.com/hc/en-us/articles/4408886858138-Zendesk-Support-placeholders-reference | <code>{<br /> "current_user": {<br /> "details": "{{current_user.details}}",<br /> "email": "{{current_user.email}}",<br /> "external_id": "{{current_user.external_id}}",<br /> "first_name": "{{current_user.first_name}}",<br /> "language": "{{current_user.language}}",<br /> "name": "{{current_user.name}}",<br /> "notes": "{{current_user.notes}}",<br /> "organization.details": "{{current_user.organization.details}}",<br /> "organization.name": "{{current_user.organization.name}}",<br /> "organization.notes": "{{current_user.organization.notes}}",<br /> "phone": "{{current_user.phone}}",<br /> "tags": "{{current_user.tags}}"<br /> },<br /> "ticket": {<br /> "account": "{{ticket.account}}",<br /> "assignee": {<br /> "first_name": "{{ticket.assignee.first_name}}",<br /> "last_name": "{{ticket.assignee.last_name}}",<br /> "name": "{{ticket.assignee.name}}"<br /> },<br /> "brand": {<br /> "name": "{{ticket.brand.name}}"<br /> },<br /> "cc_names": "{{ticket.cc_names}}",<br /> "ccs": "{{ticket.ccs}}",<br /> "comments_formatted": "{{ticket.comments_formatted}}",<br /> "description": "{{ticket.description}}",<br /> "due_date": "{{ticket.due_date}}",<br /> "email_cc_names": "{{ticket.email_cc_names}}",<br /> "email_ccs": "{{ticket.email_ccs}}",<br /> "external_id": "{{ticket.external_id}}",<br /> "follower_names": "{{ticket.follower_names}}",<br /> "follower_reply_type_message": "{{ticket.follower_reply_type_message}}",<br /> "followers": "{{ticket.followers}}",<br /> "group": {<br /> "name": "{{ticket.group.name}}"<br /> },<br /> "id": "{{ticket.id}}",<br /> "in_business_hours": "{{ticket.in_business_hours}}",<br /> "latest_comment_formatted": "{{ticket.latest_comment_formatted}}",<br /> "latest_public_comment_formatted": "{{ticket.latest_public_comment_formatted}}",<br /> "link": "{{ticket.link}}",<br /> "organization": {<br /> "external_id": "{{ticket.organization.external_id}}",<br /> "name": "{{ticket.organization.name}}"<br /> },<br /> "priority": "{{ticket.priority}}",<br /> "public_comments_formatted": "{{ticket.public_comments_formatted}}",<br /> "requester": {<br /> "email": "{{ticket.requester.email}}",<br /> "external_id": "{{ticket.requester.external_id}}",<br /> "first_name": "{{ticket.requester.first_name}}",<br /> "language": "{{ticket.requester.language}}",<br /> "last_name": "{{ticket.requester.last_name}}",<br /> "name": "{{ticket.requester.name}}",<br /> "phone": "{{ticket.requester.phone}}"<br /> },<br /> "status": "{{ticket.status}}",<br /> "tags": "{{ticket.tags}}",<br /> "ticket_field_ID": "{{ticket.ticket_field_ID}}",<br /> "ticket_field_option_title_ID": "{{ticket.ticket_field_option_title_ID}}",<br /> "ticket_form": "{{ticket.ticket_form}}",<br /> "ticket_type": "{{ticket.ticket_type}}",<br /> "title": "{{ticket.title}}",<br /> "via": "{{ticket.via}}"<br /> }<br />}</code> |
| Trigger Conditions   | The conditions under which this trigger will fire. Leave the default to fire under any change.                                          | <code>{<br /> "all": [],<br /> "any": [<br /> {<br /> "field": "status",<br /> "operator": "changed"<br /> },<br /> {<br /> "field": "status",<br /> "operator": "not_changed"<br /> }<br /> ]<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Allow Duplicates?    | Allow a duplicate trigger with the same title to be created?                                                                            | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Delete Article Attachment

Deletes an existing article attachment.

| Input                 | Comments                                         | Default |
| --------------------- | ------------------------------------------------ | ------- |
| Connection            |                                                  |         |
| Article Attachment Id | The unique identifier of the article attachment. |         |

### Delete Article Subscription

Delete a subscription to an article in the Help Center.

| Input           | Comments                                                                | Default |
| --------------- | ----------------------------------------------------------------------- | ------- |
| Connection      |                                                                         |         |
| Subscription Id | The unique identifier of the subscription.                              |         |
| Article Id      | The unique identifier of the article.                                   |         |
| Locale          | The locale of the article. If not provided, the default locale is used. |         |

### Delete Category

Delete a category in the Help Center.

| Input       | Comments                               | Default |
| ----------- | -------------------------------------- | ------- |
| Connection  |                                        |         |
| Category Id | The unique identifier of the category. |         |

### Delete Instance Webhooks

Delete all webhooks pointed at this instance

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete Post

Delete a post in the Help Center.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection |                                    |         |
| Post Id    | The unique identifier of the post. |         |

### Delete Post Subscription

Delete a Post subscription in the Help Center.

| Input           | Comments                                   | Default |
| --------------- | ------------------------------------------ | ------- |
| Connection      |                                            |         |
| Post Id         | The unique identifier of the post.         |         |
| Subscription Id | The unique identifier of the subscription. |         |

### Delete Section

Delete a section in the Help Center. (warning: deleting a section also deletes all its articles).

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Locale     | The desired locale.                   | en-us   |
| Section Id | The unique identifier of the section. |         |

### Delete Section Subscription

Delete a Section subscription in the Help Center.

| Input           | Comments                                   | Default |
| --------------- | ------------------------------------------ | ------- |
| Connection      |                                            |         |
| Section Id      | The unique identifier of the section.      |         |
| Subscription Id | The unique identifier of the subscription. |         |

### Delete Ticket

Delete the information and metadata of a ticket by Id.

| Input      | Comments                                                             | Default |
| ---------- | -------------------------------------------------------------------- | ------- |
| Ticket Id  | Provide the unique identifier for the ticket you would like to show. |         |
| Connection |                                                                      |         |

### Delete Topic

Delete a topic from the Help Center.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Topic Id   | The unique identifier of the topic. |         |

### Delete Topic Subscription

Delete a Topic subscription in the Help Center.

| Input           | Comments                                   | Default |
| --------------- | ------------------------------------------ | ------- |
| Connection      |                                            |         |
| Topic Id        | The unique identifier of the topic.        |         |
| Subscription Id | The unique identifier of the subscription. |         |

### Delete User

Delete the information and metadata of a user by Id.

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| UserId     | Provide an integer value for the unique identifier of the user. |         |
| Connection |                                                                 |         |

### Delete Webhook

Delete a webhook by ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Webhook ID |          |         |

### Get Article

Shows the properties of the specified article in the Help Center.

| Input      | Comments                                                     | Default |
| ---------- | ------------------------------------------------------------ | ------- |
| Connection |                                                              |         |
| Locale     | The locale of the articles to retrieve. Defaults to 'en-us'. | en-us   |
| Article Id | The unique identifier of the article.                        |         |

### Get Article Attachment

Shows the properties of the specified attachment on an Article located in the Help Center.

| Input                 | Comments                                         | Default |
| --------------------- | ------------------------------------------------ | ------- |
| Connection            |                                                  |         |
| Article Id            | The unique identifier of the article.            |         |
| Article Attachment Id | The unique identifier of the article attachment. |         |

### Get Article Subscription

Get an Article Subscription in the Help Center.

| Input           | Comments                                                                | Default |
| --------------- | ----------------------------------------------------------------------- | ------- |
| Connection      |                                                                         |         |
| Subscription Id | The unique identifier of the subscription.                              |         |
| Article Id      | The unique identifier of the article.                                   |         |
| Locale          | The locale of the article. If not provided, the default locale is used. |         |

### Get Category

Get a category in the Help Center.

| Input       | Comments                               | Default |
| ----------- | -------------------------------------- | ------- |
| Connection  |                                        |         |
| Locale      | The desired locale.                    | en-us   |
| Category Id | The unique identifier of the category. |         |

### Get Post

Retrieve a post from the Help Center.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection |                                    |         |
| Post Id    | The unique identifier of the post. |         |

### Get Post Subscription

Get a Post subscription in the Help Center.

| Input           | Comments                                   | Default |
| --------------- | ------------------------------------------ | ------- |
| Post Id         | The unique identifier of the post.         |         |
| Subscription Id | The unique identifier of the subscription. |         |
| Connection      |                                            |         |

### Get Section

Retrieve a section in the Help Center.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Locale     | The desired locale.                   | en-us   |
| Section Id | The unique identifier of the section. |         |

### Get Section Subscription

Get a Section subscription in the Help Center.

| Input           | Comments                                   | Default |
| --------------- | ------------------------------------------ | ------- |
| Connection      |                                            |         |
| Subscription Id | The unique identifier of the subscription. |         |
| Section Id      | The unique identifier of the section.      |         |

### Get Ticket By External ID

Get a ticket by external ID.

| Input       | Comments                                     | Default |
| ----------- | -------------------------------------------- | ------- |
| Connection  |                                              |         |
| External ID | The ID of this issue from an external system |         |

### Get Topic

Retrieve a topic from the Help Center.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Topic Id   | The unique identifier of the topic. |         |

### Get Topic Subscription

Get a Topic subscription in the Help Center.

| Input           | Comments                                   | Default |
| --------------- | ------------------------------------------ | ------- |
| Connection      |                                            |         |
| Subscription Id | The unique identifier of the subscription. |         |
| Topic Id        | The unique identifier of the topic.        |         |

### List Article Attachments

Lists all the article's attachments in the Help Center.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                            |         |
| Article Id | The unique identifier of the article.                                                                                      |         |
| Page Limit | The number of results to return per page, maximum is 100. If a greater value than 100 is provided, it will default to 100. |         |
| Fetch All  | Whether to make the actions handle pagination and fetch all the records at once or not.                                    | false   |

### List Articles

Retrieve a list of all articles in the Help Center.

| Input             | Comments                                                                                                                                                                                                                       | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                                                                                                                                                                |         |
| Locale            | The locale of the articles to retrieve. Defaults to 'en-us'.                                                                                                                                                                   | en-us   |
| Pagination Cursor | The cursor to use for pagination. If not provided, the first page will be returned.                                                                                                                                            |         |
| Page Limit        | The number of results to return per page, maximum is 100. If a greater value than 100 is provided, it will default to 100.                                                                                                     |         |
| Sort By           | The field to sort the articles by.                                                                                                                                                                                             |         |
| Sort Order        | The order to sort the results by.                                                                                                                                                                                              |         |
| Label Names       | You can specify that only articles with specific labelsshould be returning by adding the label names here, Max is 10. More info: https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/#label-names |         |
| Start Time        | The start time to filter articles by.                                                                                                                                                                                          |         |
| Fetch All         | Whether to make the actions handle pagination and fetch all the records at once or not.                                                                                                                                        | false   |

### List Article Subscriptions

List all subscriptions for an article in the Help Center.

| Input             | Comments                                                                                                                   | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                            |         |
| Page Limit        | The number of results to return per page, maximum is 100. If a greater value than 100 is provided, it will default to 100. |         |
| Pagination Cursor | The cursor to use for pagination. If not provided, the first page will be returned.                                        |         |
| Article Id        | The unique identifier of the article.                                                                                      |         |

### List Categories

List all categories in the Help Center.

| Input      | Comments                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                            |         |
| Locale     | The desired locale.                                                                                                        | en-us   |
| Sort By    | The field to sort the results by.                                                                                          |         |
| Sort Order | The order to sort the results by.                                                                                          |         |
| Page Limit | The number of results to return per page, maximum is 100. If a greater value than 100 is provided, it will default to 100. |         |
| Fetch All  | Whether to make the actions handle pagination and fetch all the records at once or not.                                    | false   |

### List Posts

List all posts in the Help Center.

| Input             | Comments                                                                                                                   | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                            |         |
| Filter By         | The field to filter the results by.                                                                                        |         |
| Pagination Cursor | The cursor to use for pagination. If not provided, the first page will be returned.                                        |         |
| Page Limit        | The number of results to return per page, maximum is 100. If a greater value than 100 is provided, it will default to 100. |         |
| Topic Id          | The unique identifier of the topic.                                                                                        |         |
| Sort By           | The field to sort the results by.                                                                                          |         |
| Fetch All         | Whether to make the actions handle pagination and fetch all the records at once or not.                                    | false   |

### List Post Subscriptions

List all Post subscriptions in the Help Center.

| Input             | Comments                                                                                                                   | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                            |         |
| Post Id           | The unique identifier of the post.                                                                                         |         |
| Pagination Cursor | The cursor to use for pagination. If not provided, the first page will be returned.                                        |         |
| Page Limit        | The number of results to return per page, maximum is 100. If a greater value than 100 is provided, it will default to 100. |         |

### List Sections

Lists all the sections in the Help Center or in a specific category.

| Input       | Comments                                                                                                                   | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                            |         |
| Locale      | The desired locale.                                                                                                        | en-us   |
| Category Id | Input a categoryId to filter out sections by the ID provided.                                                              |         |
| Sort By     | The field to sort the results by.                                                                                          |         |
| Sort Order  | The order to sort the results by.                                                                                          |         |
| Page Limit  | The number of results to return per page, maximum is 100. If a greater value than 100 is provided, it will default to 100. |         |
| Fetch All   | Whether to make the actions handle pagination and fetch all the records at once or not.                                    | false   |

### List Section Subscriptions

List all Section subscriptions in the Help Center.

| Input             | Comments                                                                                                                   | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                            |         |
| Pagination Cursor | The cursor to use for pagination. If not provided, the first page will be returned.                                        |         |
| Page Limit        | The number of results to return per page, maximum is 100. If a greater value than 100 is provided, it will default to 100. |         |
| Section Id        | The unique identifier of the section.                                                                                      |         |

### List Tickets

List all Tickets.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Tickets Assigned To User

List all of the tickets that have been assigned to a particular user.

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| UserId     | Provide an integer value for the unique identifier of the user. |         |
| Connection |                                                                 |         |

### List Tickets Requested By User

List all of the tickets that a particular user has requested.

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| UserId     | Provide an integer value for the unique identifier of the user. |         |
| Connection |                                                                 |         |

### List Topics

Retrieve a list of topics from the Help Center.

| Input             | Comments                                                                                                                   | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                            |         |
| Pagination Cursor | The cursor to use for pagination. If not provided, the first page will be returned.                                        |         |
| Page Limit        | The number of results to return per page, maximum is 100. If a greater value than 100 is provided, it will default to 100. |         |
| Fetch All         | Whether to make the actions handle pagination and fetch all the records at once or not.                                    | false   |

### List Topic Subscriptions

List all Topic subscriptions in the Help Center.

| Input             | Comments                                                                                                                   | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                            |         |
| Pagination Cursor | The cursor to use for pagination. If not provided, the first page will be returned.                                        |         |
| Topic Id          | The unique identifier of the topic.                                                                                        |         |
| Page Limit        | The number of results to return per page, maximum is 100. If a greater value than 100 is provided, it will default to 100. |         |

### List Triggers

List workflow triggers

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Users

List all Users.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Webhooks

List webhooks configured in Zendesk

| Input                       | Comments                                       | Default |
| --------------------------- | ---------------------------------------------- | ------- |
| Connection                  |                                                |         |
| Show only instance webhooks | Show only webhooks that point to this instance | true    |

### Raw Request

Send raw HTTP request to Zendesk

| Input                   | Comments                                                                                                                                                                                                                                                                | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                         |         |
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

### Search Articles

Search for articles in the Help Center.

| Input          | Comments                                                        | Default |
| -------------- | --------------------------------------------------------------- | ------- |
| Connection     |                                                                 |         |
| Locales        | The locale to filter the results by.                            |         |
| Search Query   | The search text to be matched or a search string.               |         |
| Brand Ids      | Limit the search to articles or post within these brand.        |         |
| Category Ids   | Limit the search to articles or post within these categories.   |         |
| Section Id     | The unique identifier of the section to filter the results for. |         |
| Created After  | The time to filter the results by. (Format: YYYY-MM-DD)         |         |
| Created At     | The time to filter the results by. (Format: YYYY-MM-DD)         |         |
| Created Before | The time to filter the results by. (Format: YYYY-MM-DD)         |         |
| Label Names    | The label names to filter the results by.                       |         |
| Updated At     | The time to filter the results by. (Format: YYYY-MM-DD)         |         |
| Updated Before | The time to filter the results by. (Format: YYYY-MM-DD)         |         |
| Updated After  | The time to filter the results by. (Format: YYYY-MM-DD)         |         |
| Multibrand     | Whether to filter the results by multibrand or not.             | false   |
| Sort Order     | The order to sort the results by.                               |         |
| Sort By        | The field to sort the results by.                               |         |

### Search Posts

Search posts in the Help Center.

| Input          | Comments                                                | Default |
| -------------- | ------------------------------------------------------- | ------- |
| Connection     |                                                         |         |
| Topic Id       | The ID of the topic to filter posts by.                 |         |
| Search Query   | The search text to be matched or a search string.       |         |
| Created At     | The time to filter the results by. (Format: YYYY-MM-DD) |         |
| Created Before | The time to filter the results by. (Format: YYYY-MM-DD) |         |
| Created After  | The time to filter the results by. (Format: YYYY-MM-DD) |         |
| Sort By        | The field to sort the results by.                       |         |
| Updated After  | The time to filter the results by. (Format: YYYY-MM-DD) |         |
| Updated At     | The time to filter the results by. (Format: YYYY-MM-DD) |         |
| Updated Before | The time to filter the results by. (Format: YYYY-MM-DD) |         |
| Sort Order     | The order to sort the results by.                       |         |

### Search Users

Returns an array of users who meet the search criteria.

| Input       | Comments                                                                                                                                                                                                                    | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| External Id | The external_id parameter does not support the search syntax. It only accepts ids.                                                                                                                                          |         |
| Query       | The query parameter supports the Zendesk search syntax for more advanced user searches. It can specify a partial or full value of any user property, including name, email address, notes, or phone. Example: query="jdoe". |         |
| Connection  |                                                                                                                                                                                                                             |         |

### Show Ticket

Get the information and metadata of a ticket by Id.

| Input      | Comments                                                             | Default |
| ---------- | -------------------------------------------------------------------- | ------- |
| Ticket Id  | Provide the unique identifier for the ticket you would like to show. |         |
| Connection |                                                                      |         |

### Show User

Get the information and metadata of a user by Id.

| Input      | Comments                                                        | Default |
| ---------- | --------------------------------------------------------------- | ------- |
| UserId     | Provide an integer value for the unique identifier of the user. |         |
| Connection |                                                                 |         |

### Unified Search

Search for knowledge base articles, community posts, and external records in the Help Center.

| Input               | Comments                                                                                                                   | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                            |         |
| Locales             | Limit the search to articles or post within these locales.                                                                 |         |
| Search Query        | The search text to be matched or a search string.                                                                          |         |
| Brand Ids           | Limit the search to articles or post within these brand.                                                                   |         |
| Category Ids        | Limit the search to articles or post within these categories.                                                              |         |
| Content Types       | Limit the search to one of these content types: ARTICLE, POST                                                              |         |
| External Source Ids | Use this parameter to scope the result of your search to a specifiedexternal source or external sources.                   |         |
| Section Ids         | Limit the search to articles or post within these sections.                                                                |         |
| Topic Ids           | Limit the search to posts within these topics.                                                                             |         |
| Pagination Cursor   | The cursor to use for pagination. If not provided, the first page will be returned.                                        |         |
| Page Limit          | The number of results to return per page, maximum is 100. If a greater value than 100 is provided, it will default to 100. |         |

### Update Article

Update an existing Article's Metadata in the Help Center.

| Input               | Comments                                       | Default |
| ------------------- | ---------------------------------------------- | ------- |
| Connection          |                                                |         |
| Article Id          | The unique identifier of the article.          |         |
| Section Id          | The unique identifier of the section.          |         |
| Author Id           | The unique identifier of the author.           |         |
| Title               | The title of the article.                      |         |
| Body                | The body of the article.                       |         |
| Permission Group Id | The unique identifier of the permission group. |         |
| User Segment Id     | The unique identifier of the user segment.     |         |
| Locale              | The desired locale.                            | en-us   |
| Promoted            | Whether the object should be promoted or not.  |         |
| Position            | The position of the object.                    |         |
| Comments Disabled   | Whether comments are disabled or not.          |         |
| Content Tag Ids     | Content Tag IDs to be attached to the Object.  |         |
| Label Names         | Label Names to be attached to the Object.      |         |

### Update Category

Update a category in the Help Center.

| Input                | Comments                                       | Default |
| -------------------- | ---------------------------------------------- | ------- |
| Connection           |                                                |         |
| Category Id          | The unique identifier of the category.         |         |
| Locale               | The locale of the category to be updated.      | en-us   |
| Category Name        | The name of the category to be updated.        |         |
| Category Description | The description of the category to be updated. |         |
| Position             | The position of the category to be updated.    |         |

### Update Post

Update a post in the Help Center.

| Input           | Comments                                      | Default |
| --------------- | --------------------------------------------- | ------- |
| Connection      |                                               |         |
| Post Id         | The unique identifier of the post.            |         |
| Title           | The title of the post.                        |         |
| Details         | The details of the post.                      |         |
| Status          | The status of the post.                       |         |
| Topic Id        | The unique identifier of the topic.           |         |
| Featured        | Whether the post is featured or not.          |         |
| Pinned          | Whether the post is pinned or not.            |         |
| Closed          | Whether the post is closed or not.            |         |
| Content Tag Ids | Content Tag IDs to be attached to the Object. |         |

### Update Section

Update section in the Help Center.

| Input               | Comments                                    | Default |
| ------------------- | ------------------------------------------- | ------- |
| Connection          |                                             |         |
| Locale              | The desired locale.                         | en-us   |
| Section Id          | The unique identifier of the section.       |         |
| Section Name        | Name of the Section to update.              |         |
| Section Description | Description of the Section to update.       |         |
| Position            | Position of the Section to update.          |         |
| Category Id         | Category ID of the Section to update.       |         |
| Parent Section Id   | Parent Section ID of the Section to update. |         |

### Update Ticket

Update the information and metadata of a ticket by Id.

| Input                     | Comments                                                                                                                                              | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Ticket Id                 | Provide the unique identifier for the ticket you would like to show.                                                                                  |         |
| Ticket Comment Body       | When creating a ticket, this field can be used to give a ticket description. It will also leave a comment on the ticket from the assignee.            |         |
| Ticket Comment HTML Body  | When creating a ticket, this field can be used to give a ticket description using HTML. It will also leave a comment on the ticket from the assignee. |         |
| File                      | The file to attach to the comment - either string contents or a binary file                                                                           |         |
| File Name                 | The name of the file to upload                                                                                                                        |         |
| Ticket Status             | Provide a string value for the status of the ticket.                                                                                                  |         |
| Assignee Email            | Provide a valid email for the assignee of the ticket.                                                                                                 |         |
| Assignee Id               | Provide a valid user id for the assignee of the ticket.                                                                                               |         |
| Tags                      | For each item, provide a string value for the tag.                                                                                                    |         |
| Ticket Type               | Provide a string value for the type of the ticket.                                                                                                    |         |
| Ticket Subject            | Provide a string value for the subject of the ticket                                                                                                  |         |
| Ticket Priority           | Provide a string value for the priority of the ticket.                                                                                                |         |
| Requester Organization Id | Provide an integer value to specify the Organization of the requester.                                                                                |         |
| Connection                |                                                                                                                                                       |         |

### Update Topic

Update a topic in the Help Center.

| Input             | Comments                                         | Default |
| ----------------- | ------------------------------------------------ | ------- |
| Connection        |                                                  |         |
| Topic Id          | The unique identifier of the topic.              |         |
| Topic Name        | The name of the topic.                           |         |
| User Segment Id   | The user segment ID to associate with the topic. |         |
| Position          | The position of the topic in the list of topics. |         |
| Topic Description | The description of the topic.                    |         |
| Manageable By     | The user segments that can manage the topic.     |         |

### Update User

Update the information and metadata of a user by Id.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| UserId          | Provide an integer value for the unique identifier of the user.                                                                  |         |
| User Role       | Provide which level of permissions the user is granted.                                                                          |         |
| Name            | Provide a string value for the name of the user.                                                                                 |         |
| Email Address   | Provide a valid email address for the user. Make sure this value does not conflict with any other users in your Zendesk Domain   |         |
| Phone Number    | Provide a valid phone number for the user.                                                                                       |         |
| External Id     | A unique identifier from another system. The API treats the id as case sensitive. Example: "ian1" and "Ian1" are different users |         |
| Notes           | Provide a string value that represents notes to be attached to the user.                                                         |         |
| Details         | Provide a string value that represents details to be attached to the user.                                                       |         |
| Moderator       | This flag specifies whether or not the user will have moderator permissions.                                                     |         |
| Alias           | Provide a string value that represents an alias to give to a user.                                                               |         |
| Time Zone       | Provide a valid timezone that the user operates in.                                                                              |         |
| Verified        | Flip this flag to true if any of the user's identities is verified.                                                              |         |
| Organization Id | Provide the unique identifier of the organization.                                                                               |         |
| Connection      |                                                                                                                                  |         |
