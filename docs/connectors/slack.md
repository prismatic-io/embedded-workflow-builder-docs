---
title: Slack Connector
sidebar_label: Slack
description: Send messages, manage conversations, and interact with Slack channels and users.
---

![Slack](./assets/slack.png#connector-icon)
[Slack](https://slack.com/) is a messaging platform.
This component allows posting messages to Slack channels, managing conversations, files, and users, and receiving real-time events through webhooks and polling triggers.

## API Documentation

This component was built using the following API References:

- [Slack Web API Documentation](https://docs.slack.dev/apis/web-api/)
- [Slack Web API Methods](https://docs.slack.dev/reference/methods)

## Connections

### OAuth 2.0 {#oauth2}

Authenticate requests to Slack using OAuth 2.0.

The vast majority of actions in this component use OAuth 2.0 for authentication.

#### Prerequisites

- A Slack workspace with administrator access
- Access to the Slack [Developer App Portal](https://api.slack.com/apps)

#### Setup Steps

1. Navigate to the Slack [Developer App Portal](https://api.slack.com/apps)
1. Click **Create New App**
1. Choose to create the app **From scratch**
1. Give the app a name and select the workspace. It will be configured to be multi-workspace capable in a moment
1. Select **OAuth & Permissions** from the sidebar
   1. Under **Redirect URLs**, add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
   1. At the bottom, add some **User Token Scopes** if the integration will send messages on behalf of users, or **Bot Token Scopes** if a Slack "bot" will send the messages.
      The [scopes](https://docs.slack.dev/reference/scopes) required depend on what types of things the Slack integration will need to do (create channels, send messages, etc).
      For sending messages to a channel as a bot, add these scopes: `chat:write chat:write.public`. To send messages as a user, see the section [below](#sending-messages-as-a-user).
1. Next, select **Distribute App** under **Manage Distribution**. Confirm that "removed hard coded information" is checked and select **Activate Public Distribution**.
1. Finally, open **Basic Information**. Copy the **Client ID**, **Client Secret** and **Signing Secret**.

#### Public Distribution Requirement

**Activate public distribution before deploying to customers.** Without it, the app is locked to the single workspace. Users in any other Slack workspace cannot install or authenticate with the integration.

**What users see without public distribution:** If a user in another workspace attempts to install the app, they reach a Slack error page before the OAuth consent screen loads. The installation is blocked entirely.

This activation step does not require Slack's review or approval. It is a configuration toggle that must be explicitly enabled.

Separately, if the app is intended to be listed in the [Slack App Directory](https://slack.com/apps), a formal Slack review is required. App Directory listing is optional. Apps with public distribution enabled can be distributed to customers and installed in any workspace without being listed in the directory.

#### Configure the Connection

Add a Slack step to the integration. This creates a connection config variable.
Open the connection config variable.

- Enter the **Client ID**, **Signing Secret** and **Client Secret** from the Slack app
- For **Scopes**, enter the required scopes based on what Slack actions the integration includes:
  - For sending messages to a channel, enter the scopes `chat:write chat:write.public` to assign a bot token that can write messages to public channels. See [below](#sending-messages-to-private-channels) for information on sending messages to private channels.
  - Conversation and channel-related actions require `admin.conversations:write`.
  - Enter scopes with spaces in between them (e.g. `chat:write users:read users:read.email`)

A list of all Slack OAuth scopes and what each does are available in the [Slack documentation](https://docs.slack.dev/reference/scopes).

#### Sending messages to private channels

The `chat:write.public` scope allows the bot to send messages to public channels.
To send messages to private channels, or to be more selective about what channels the bot can send messages to, the bot must be invited to specific channels.

If a bot does not have `chat:write.public` or tries to write to a private channel it's not a part of, a `not_in_channel` error will be received from Slack when attempting to send a message to that channel.

#### Sending messages as a user

Slack applications typically send messages as bot users.
To instead send messages as a user, edit the `Auth URL` and add `chat:write` to a user_scope query parameter on the Authorization URL to get a User token. To manage channels, add the `channels:write` scope.

The `Auth URL`, then, will look something like this: `https://slack.com/oauth/v2/authorize?user_scope=chat:write`

#### Dynamically changing the bot's name

The bot's username and icon are set when creating the Slack app.
To override the bot's username within the integration, request the `chat:write.customize` scope in addition to `chat:write`.

#### GovSlack

Slack offers [GovSlack](https://slack.com/solutions/govslack) for government organizations that require compliance with FIPS 140-2, FedRAMP, ITAR, etc.
To use the Slack component with GovSlack, change the beginning of OAuth auth URL, token URL, and revoke URL from `https://slack.com` to `https://slack-gov.com`.
The component will automatically point API requests towards the Slack Gov API endpoint.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input          | Comments                                                                                                                                                                                                                                                                             | Default                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Authorize URL  | The OAuth 2.0 Authorization URL for Slack. To request access to the API on behalf of a User, append a `user_scope` query parameter to the end of the Authorize URL (e.g., `https://slack.com/oauth/v2/authorize?user_scope=chat:write,channels:read,groups:read,im:read,mpim:read`). | https://slack.com/oauth/v2/authorize                                                          |
| Token URL      | The OAuth 2.0 Token URL for Slack.                                                                                                                                                                                                                                                   | https://slack.com/api/oauth.v2.access                                                         |
| Revoke URL     | The OAuth 2.0 Revocation URL for Slack.                                                                                                                                                                                                                                              | https://slack.com/api/auth.revoke                                                             |
| Scopes (Bot)   | A space-delimited set of one or more scopes used to obtain the Bot token. To access the API as a User, append a `user_scope` query parameter to the Authorize URL and set the 'Is User' flag to true.                                                                                | chat:write chat:write.public chat:write.customize channels:read groups:read im:read mpim:read |
| Client ID      | The client ID issued by Slack for the OAuth 2.0 application.                                                                                                                                                                                                                         |                                                                                               |
| Client Secret  | The client secret issued by Slack for the OAuth 2.0 application.                                                                                                                                                                                                                     |                                                                                               |
| Signing Secret | The signing secret used to verify the authenticity of inbound webhook requests from Slack.                                                                                                                                                                                           |                                                                                               |
| Is User        | When true, requests access to the API as a User instead of a Bot. When enabled, the Authorize URL must include a `user_scope` query parameter. Leaving this false grants a Bot token instead.                                                                                        | false                                                                                         |

### Webhook URL {#webhookurl}

Authenticate requests to Slack using a Webhook URL.

The [Slack Message from Webhook](#postslackmessage) and the [Slack Block Message from Webhook](#postwebhookblockmessage) actions are the only Slack actions that do not authenticate with OAuth.
Instead, these actions use Slack [Incoming Webhooks](https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks).

#### Prerequisites

- A Slack workspace with administrator access
- Ability to create Slack apps in the workspace

#### Setup Steps

To generate a Slack incoming webhook URL:

1. Navigate to the [Slack App Portal](https://api.slack.com/apps)
1. Click **Create New App**, adding an app to the workspace
1. Under **Add features and functionality** select **Incoming Webhooks**
1. **Activate Incoming Webhooks** and then **Add New Webhook to Workspace**
1. Select the channel where messages will be posted
1. Copy the **Webhook URL**. It should be of the form `https://hooks.slack.com/services/foo/bar/baz`

#### Configure the Connection

- Enter the **Webhook URL** into the connection configuration

| Input       | Comments                                                                                                           | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Webhook URL | The Slack webhook URL. Instructions for generating a Slack webhook are available on the Slack component docs page. |         |

## Triggers

### Events API Webhook {#webhook}

Receive and validate event notifications from Slack's Events API for manually configured webhook subscriptions. Handles URL verification challenges automatically.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The Slack connection to use. |         |

### New and Updated Messages {#pollchangestrigger}

Checks for new messages in a selected Slack channel on a configured schedule. Messages are emitted in the 'created' bucket; the 'updated' bucket is preserved for shape parity but is always empty because Slack's conversations.history endpoint returns immutable history (use the Events API Webhook trigger to receive message_changed events).

| Input                | Comments                                                                                                                                                                                                                                                                                      | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Slack connection to use.                                                                                                                                                                                                                                                                  |         |
| Channel ID           | The static ID of the Slack channel.                                                                                                                                                                                                                                                           |         |
| Show New Records     | When true, new messages in the channel are included in the trigger output.                                                                                                                                                                                                                    | true    |
| Show Updated Records | When true, includes updated messages in the trigger output. Reserved for shape consistency with other polling triggers — Slack messages are immutable through `conversations.history`, so the `updated` bucket is always empty (use the webhook trigger to receive `message_changed` events). | true    |

### Slash Command Webhook {#slashcommandwebhook}

Receive slash command and modal interaction requests from Slack for manually configured webhook endpoints.

| Input         | Comments                                                                | Default    |
| ------------- | ----------------------------------------------------------------------- | ---------- |
| Response Body | The response body to return to Slack. Leave empty for no response body. |            |
| Content Type  | The content type of the response returned to Slack.                     | text/plain |

## Actions

### Archive Conversation {#archiveconversation}

Archive an existing conversation.

| Input              | Comments                                    | Default |
| ------------------ | ------------------------------------------- | ------- |
| Connection         | The Slack connection to use.                |         |
| Channel Name or ID | The name or static ID of the Slack channel. |         |

### Close Conversation {#closeconversation}

Close an existing conversation.

| Input             | Comments                                     | Default |
| ----------------- | -------------------------------------------- | ------- |
| Connection        | The Slack connection to use.                 |         |
| Conversation Name | The display name for the Slack conversation. |         |

### Conversation Exists {#conversationexists}

Returns true if the conversation already exists.

| Input              | Comments                                    | Default |
| ------------------ | ------------------------------------------- | ------- |
| Connection         | The Slack connection to use.                |         |
| Channel Name or ID | The name or static ID of the Slack channel. |         |

### Create Conversation {#createconversation}

Create a new conversation.

| Input             | Comments                                           | Default |
| ----------------- | -------------------------------------------------- | ------- |
| Connection        | The Slack connection to use.                       |         |
| Conversation Name | The display name for the Slack conversation.       |         |
| Is Private        | When true, the Slack conversation will be private. | false   |
| Team ID           | The unique identifier for the Slack team.          |         |

### Delete Message {#deletemessage}

Delete the content and metadata of an existing message.

| Input      | Comments                                                              | Default |
| ---------- | --------------------------------------------------------------------- | ------- |
| Connection | The Slack connection to use.                                          |         |
| Channel ID | The static ID of the Slack channel.                                   |         |
| Message ID | The unique identifier of a message or thread to reply to (thread_ts). |         |

### Delete Pending Scheduled Message {#deletependingmessage}

Delete the content and metadata of a pending scheduled message from a queue.

| Input      | Comments                                                              | Default |
| ---------- | --------------------------------------------------------------------- | ------- |
| Connection | The Slack connection to use.                                          |         |
| Channel ID | The static ID of the Slack channel.                                   |         |
| Message ID | The unique identifier of a message or thread to reply to (thread_ts). |         |

### Get Conversation History {#getconversationshistory}

Get the history of a conversation.

| Input                | Comments                                                                                                                | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Slack connection to use.                                                                                            |         |
| Channel Name or ID   | The name or static ID of the Slack channel.                                                                             |         |
| Fetch All            | When true, fetches all pages of results.                                                                                | false   |
| Limit                | The maximum number of results to return.                                                                                |         |
| Cursor               | The pagination cursor from a previous request.                                                                          |         |
| Include All Metadata | When true, includes all metadata in results.                                                                            | false   |
| Inclusive            | When true, includes messages with oldest or latest timestamps in results. Ignored unless either timestamp is specified. | false   |
| Latest               | Only messages before this Unix timestamp will be included in results. Default is current time.                          |         |
| Oldest               | Only messages after this Unix timestamp will be included in results.                                                    |         |

### Get User By Email {#getuser}

Get a user's information by email.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Slack connection to use.   |         |
| Email      | The email address of the user. |         |

### Get User By ID {#getuserbyid}

Get a user's information by ID.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Slack connection to use.              |         |
| User ID    | The unique identifier for the Slack user. |         |

### Invite User to Conversation {#inviteusertoconversation}

Invite a user to an existing conversation.

| Input              | Comments                                    | Default |
| ------------------ | ------------------------------------------- | ------- |
| Connection         | The Slack connection to use.                |         |
| Channel Name or ID | The name or static ID of the Slack channel. |         |
| User ID            | The unique identifier for the Slack user.   |         |

### Leave Conversation {#leaveconversation}

Leave an existing conversation.

| Input              | Comments                                    | Default |
| ------------------ | ------------------------------------------- | ------- |
| Connection         | The Slack connection to use.                |         |
| Channel Name or ID | The name or static ID of the Slack channel. |         |

### List Conversation Members {#listconversationmembers}

List all members of a conversation.

| Input              | Comments                                       | Default |
| ------------------ | ---------------------------------------------- | ------- |
| Connection         | The Slack connection to use.                   |         |
| Channel Name or ID | The name or static ID of the Slack channel.    |         |
| Fetch All          | When true, fetches all pages of results.       | false   |
| Limit              | The maximum number of results to return.       |         |
| Cursor             | The pagination cursor from a previous request. |         |

### List Conversations {#listconversations}

List all conversations.

| Input                           | Comments                                                          | Default |
| ------------------------------- | ----------------------------------------------------------------- | ------- |
| Connection                      | The Slack connection to use.                                      |         |
| Fetch All                       | When true, fetches all pages of results.                          | false   |
| Limit                           | The maximum number of results to return.                          |         |
| Cursor                          | The pagination cursor from a previous request.                    |         |
| Team ID                         | The unique identifier for the Slack team.                         |         |
| Exclude Archived                | When true, archived results will be excluded from the result set. | false   |
| Include Public Channels         | When true, includes public channels in results.                   | true    |
| Include Private Channels        | When true, includes private channels in results.                  | false   |
| Include Multi-Party IM Channels | When true, includes multi-party IM (mpim) channels in results.    | false   |
| Include IM Channels             | When true, includes direct message (IM) channels in results.      | false   |

### List Files {#listfiles}

List all available files.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Slack connection to use.                   |         |
| Fetch All  | When true, fetches all pages of results.       | false   |
| Cursor     | The pagination cursor from a previous request. |         |

### List Scheduled Messages {#listscheduledmessages}

List all scheduled messages.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The Slack connection to use. |         |

### List User Conversations {#listusersconversations}

List all conversations for a user.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Slack connection to use.                   |         |
| User ID    | The unique identifier for the Slack user.      |         |
| Fetch All  | When true, fetches all pages of results.       | false   |
| Limit      | The maximum number of results to return.       |         |
| Cursor     | The pagination cursor from a previous request. |         |
| Team ID    | The unique identifier for the Slack team.      |         |

### List Users {#listusers}

List all users in the workspace.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Slack connection to use.                   |         |
| Fetch All  | When true, fetches all pages of results.       | false   |
| Limit      | The maximum number of results to return.       |         |
| Cursor     | The pagination cursor from a previous request. |         |
| Team ID    | The unique identifier for the Slack team.      |         |

### Open View {#openview}

Open a view for a user.

| Input      | Comments                                                                                      | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection | The Slack connection to use.                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Trigger ID | The short-lived token used to exchange for posting a view to the user.                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| View       | A [view payload](https://docs.slack.dev/reference/views). This must be a JSON-encoded string. | <code>{<br /> "type": "modal",<br /> "title": {<br /> "type": "plain_text",<br /> "text": "Modal title"<br /> },<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "mrkdwn",<br /> "text": "It's Block Kit...but _in a modal_"<br /> },<br /> "block_id": "section1",<br /> "accessory": {<br /> "type": "button",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Click me"<br /> },<br /> "action_id": "button_abc",<br /> "value": "Button value",<br /> "style": "danger"<br /> }<br /> },<br /> {<br /> "type": "input",<br /> "label": {<br /> "type": "plain_text",<br /> "text": "Input label"<br /> },<br /> "element": {<br /> "type": "plain_text_input",<br /> "action_id": "input1",<br /> "placeholder": {<br /> "type": "plain_text",<br /> "text": "Type in here"<br /> },<br /> "multiline": false<br /> },<br /> "optional": false<br /> }<br /> ],<br /> "close": {<br /> "type": "plain_text",<br /> "text": "Cancel"<br /> },<br /> "submit": {<br /> "type": "plain_text",<br /> "text": "Save"<br /> },<br /> "private_metadata": "Shhhhhhhh",<br /> "callback_id": "view_identifier_12"<br />}</code> |

### Post Block Message {#postblockmessage}

Post a block-formatted message to a Slack channel.

| Input              | Comments                                                                                                                                                                      | Default                                                                                                                                                                  |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection         | The Slack connection to use.                                                                                                                                                  |                                                                                                                                                                          |
| Channel Name or ID | The name or static ID of the Slack channel.                                                                                                                                   |                                                                                                                                                                          |
| Blocks             | A JSON array containing blocks (objects) that make up the desired message. Use Slack's [Block Kit Builder](https://app.slack.com/block-kit-builder/) to build block messages. | <code>{<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Hello world"<br /> }<br /> }<br /> ]<br />}</code> |
| Alt Message        | The fallback message used when the block message cannot be rendered.                                                                                                          |                                                                                                                                                                          |
| Bot Username       | The username of the bot the message will be sent from. This requires the 'chat:write.customize' scope.                                                                        |                                                                                                                                                                          |
| Message ID         | The unique identifier of a message or thread to reply to (thread_ts).                                                                                                         |                                                                                                                                                                          |

### Post Ephemeral Message {#postephemeralmessage}

Post an ephemeral message to a user or channel.

| Input              | Comments                                                                                               | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection         | The Slack connection to use.                                                                           |         |
| Channel Name or ID | The name or static ID of the Slack channel.                                                            |         |
| User ID            | The unique identifier for the Slack user.                                                              |         |
| Message            | The message to send the Slack channel.                                                                 |         |
| Bot Username       | The username of the bot the message will be sent from. This requires the 'chat:write.customize' scope. |         |

### Post Message {#postmessage}

Post a message to a Slack channel.

| Input              | Comments                                                                                               | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection         | The Slack connection to use.                                                                           |         |
| Channel Name or ID | The name or static ID of the Slack channel.                                                            |         |
| Message            | The message to send the Slack channel.                                                                 |         |
| Bot Username       | The username of the bot the message will be sent from. This requires the 'chat:write.customize' scope. |         |
| Message ID         | The unique identifier of a message or thread to reply to (thread_ts).                                  |         |

### Post Slack Block Message From Webhook {#postwebhookblockmessage}

Post a block-formatted message to a Slack channel from a webhook URL.

| Input       | Comments                                                                                                                                                                      | Default                                                                                                                                                                  |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection  | The Slack connection to use.                                                                                                                                                  |                                                                                                                                                                          |
| Alt Message | The fallback message used when the block message cannot be rendered.                                                                                                          |                                                                                                                                                                          |
| Blocks      | A JSON array containing blocks (objects) that make up the desired message. Use Slack's [Block Kit Builder](https://app.slack.com/block-kit-builder/) to build block messages. | <code>{<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Hello world"<br /> }<br /> }<br /> ]<br />}</code> |

### Post Slack Message From Webhook {#postslackmessage}

Post a message to a Slack channel from a webhook URL.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Slack connection to use.           |         |
| Message    | The message to send the Slack channel. |         |

### Publish View {#publishview}

Publish a static view for a user.

| Input      | Comments                                                                                      | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection | The Slack connection to use.                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| User ID    | The unique identifier for the Slack user.                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| View       | A [view payload](https://docs.slack.dev/reference/views). This must be a JSON-encoded string. | <code>{<br /> "type": "modal",<br /> "title": {<br /> "type": "plain_text",<br /> "text": "Modal title"<br /> },<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "mrkdwn",<br /> "text": "It's Block Kit...but _in a modal_"<br /> },<br /> "block_id": "section1",<br /> "accessory": {<br /> "type": "button",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Click me"<br /> },<br /> "action_id": "button_abc",<br /> "value": "Button value",<br /> "style": "danger"<br /> }<br /> },<br /> {<br /> "type": "input",<br /> "label": {<br /> "type": "plain_text",<br /> "text": "Input label"<br /> },<br /> "element": {<br /> "type": "plain_text_input",<br /> "action_id": "input1",<br /> "placeholder": {<br /> "type": "plain_text",<br /> "text": "Type in here"<br /> },<br /> "multiline": false<br /> },<br /> "optional": false<br /> }<br /> ],<br /> "close": {<br /> "type": "plain_text",<br /> "text": "Cancel"<br /> },<br /> "submit": {<br /> "type": "plain_text",<br /> "text": "Save"<br /> },<br /> "private_metadata": "Shhhhhhhh",<br /> "callback_id": "view_identifier_12"<br />}</code> |

### Push View {#pushview}

Push a view onto the stack of a root view.

| Input      | Comments                                                                                      | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection | The Slack connection to use.                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Trigger ID | The short-lived token used to exchange for posting a view to the user.                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| View       | A [view payload](https://docs.slack.dev/reference/views). This must be a JSON-encoded string. | <code>{<br /> "type": "modal",<br /> "title": {<br /> "type": "plain_text",<br /> "text": "Modal title"<br /> },<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "mrkdwn",<br /> "text": "It's Block Kit...but _in a modal_"<br /> },<br /> "block_id": "section1",<br /> "accessory": {<br /> "type": "button",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Click me"<br /> },<br /> "action_id": "button_abc",<br /> "value": "Button value",<br /> "style": "danger"<br /> }<br /> },<br /> {<br /> "type": "input",<br /> "label": {<br /> "type": "plain_text",<br /> "text": "Input label"<br /> },<br /> "element": {<br /> "type": "plain_text_input",<br /> "action_id": "input1",<br /> "placeholder": {<br /> "type": "plain_text",<br /> "text": "Type in here"<br /> },<br /> "multiline": false<br /> },<br /> "optional": false<br /> }<br /> ],<br /> "close": {<br /> "type": "plain_text",<br /> "text": "Cancel"<br /> },<br /> "submit": {<br /> "type": "plain_text",<br /> "text": "Save"<br /> },<br /> "private_metadata": "Shhhhhhhh",<br /> "callback_id": "view_identifier_12"<br />}</code> |

### Raw Request {#rawrequest}

Send raw HTTP request to Slack.

| Input                   | Comments                                                                                                                                                                                                         | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Slack connection to use.                                                                                                                                                                                     |         |
| URL                     | The path portion of the Slack API URL only (e.g., `/team.info`). The base URL `https://slack.com/api` is already included. For example, to call `https://slack.com/api/team.info`, enter only `/team.info` here. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                 | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                    | false   |

### Rename Conversation {#renameconversation}

Rename an existing conversation.

| Input                 | Comments                                     | Default |
| --------------------- | -------------------------------------------- | ------- |
| Connection            | The Slack connection to use.                 |         |
| Conversation Name     | The display name for the Slack conversation. |         |
| New Conversation Name | The display name for the Slack conversation. |         |

### Search All {#searchall}

Searches for messages and files matching a query.

| Input          | Comments                                                                                                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Slack connection to use.                                                                                 |         |
| Query          | The search query. May contain boolean operators (AND, OR, NOT) and modifiers.                                |         |
| Count          | The number of items to return per page.                                                                      |         |
| Page           | The page number of results to return (1-based).                                                              | 1       |
| Highlight      | When true, enables query highlight markers in results.                                                       | false   |
| Sort           | The method to sort the results. For example, member_count will sort by the number of members in the channel. | score   |
| Sort Direction | The direction to sort the results. For example, desc will sort the results in descending order.              | desc    |
| Team ID        | The encoded team ID to search in. Required when an org-level token is used.                                  |         |

### Search Files {#searchfiles}

Searches for files matching a query.

| Input          | Comments                                                                                                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Slack connection to use.                                                                                 |         |
| Query          | The search query. May contain boolean operators (AND, OR, NOT) and modifiers.                                |         |
| Count          | The number of items to return per page.                                                                      |         |
| Page           | The page number of results to return (1-based).                                                              | 1       |
| Highlight      | When true, enables query highlight markers in results.                                                       | false   |
| Sort           | The method to sort the results. For example, member_count will sort by the number of members in the channel. | score   |
| Sort Direction | The direction to sort the results. For example, desc will sort the results in descending order.              | desc    |
| Team ID        | The encoded team ID to search in. Required when an org-level token is used.                                  |         |

### Search Messages {#searchmessages}

Searches for messages matching a query.

| Input          | Comments                                                                                                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Slack connection to use.                                                                                 |         |
| Query          | The search query. May contain boolean operators (AND, OR, NOT) and modifiers.                                |         |
| Count          | The number of items to return per page.                                                                      |         |
| Page           | The page number of results to return (1-based).                                                              | 1       |
| Highlight      | When true, enables query highlight markers in results.                                                       | false   |
| Sort           | The method to sort the results. For example, member_count will sort by the number of members in the channel. | score   |
| Sort Direction | The direction to sort the results. For example, desc will sort the results in descending order.              | desc    |
| Team ID        | The encoded team ID to search in. Required when an org-level token is used.                                  |         |

### Set Conversation Purpose {#setconversationpurpose}

Set the purpose of an existing conversation.

| Input                | Comments                                                    | Default |
| -------------------- | ----------------------------------------------------------- | ------- |
| Connection           | The Slack connection to use.                                |         |
| Channel Name or ID   | The name or static ID of the Slack channel.                 |         |
| Conversation Purpose | The purpose statement describing the conversation's intent. |         |

### Set Conversation Topic {#setconversationtopic}

Set the topic of an existing conversation.

| Input              | Comments                                        | Default |
| ------------------ | ----------------------------------------------- | ------- |
| Connection         | The Slack connection to use.                    |         |
| Channel Name or ID | The name or static ID of the Slack channel.     |         |
| User ID            | The unique identifier for the Slack user.       |         |
| Conversation Topic | The topic shown at the top of the conversation. |         |

### Update Message {#updatemessage}

Update the contents of an existing message.

| Input      | Comments                                                              | Default |
| ---------- | --------------------------------------------------------------------- | ------- |
| Connection | The Slack connection to use.                                          |         |
| Channel ID | The static ID of the Slack channel.                                   |         |
| Message ID | The unique identifier of a message or thread to reply to (thread_ts). |         |
| Message    | The message to send the Slack channel.                                |         |

### Update View {#updateview}

Update an existing view.

| Input       | Comments                                                                                      | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection  | The Slack connection to use.                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| View        | A [view payload](https://docs.slack.dev/reference/views). This must be a JSON-encoded string. | <code>{<br /> "type": "modal",<br /> "title": {<br /> "type": "plain_text",<br /> "text": "Modal title"<br /> },<br /> "blocks": [<br /> {<br /> "type": "section",<br /> "text": {<br /> "type": "mrkdwn",<br /> "text": "It's Block Kit...but _in a modal_"<br /> },<br /> "block_id": "section1",<br /> "accessory": {<br /> "type": "button",<br /> "text": {<br /> "type": "plain_text",<br /> "text": "Click me"<br /> },<br /> "action_id": "button_abc",<br /> "value": "Button value",<br /> "style": "danger"<br /> }<br /> },<br /> {<br /> "type": "input",<br /> "label": {<br /> "type": "plain_text",<br /> "text": "Input label"<br /> },<br /> "element": {<br /> "type": "plain_text_input",<br /> "action_id": "input1",<br /> "placeholder": {<br /> "type": "plain_text",<br /> "text": "Type in here"<br /> },<br /> "multiline": false<br /> },<br /> "optional": false<br /> }<br /> ],<br /> "close": {<br /> "type": "plain_text",<br /> "text": "Cancel"<br /> },<br /> "submit": {<br /> "type": "plain_text",<br /> "text": "Save"<br /> },<br /> "private_metadata": "Shhhhhhhh",<br /> "callback_id": "view_identifier_12"<br />}</code> |
| View ID     | The unique identifier of the view to be updated. Either view_id or external_id is required.   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| External ID | A custom external identifier assigned to the view. Either view_id or external_id is required. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Upload File {#uploadfile}

Upload a new file to a Slack conversation.

| Input           | Comments                                                                                                          | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Slack connection to use.                                                                                      |         |
| File Content    | The binary data of the file to upload.                                                                            |         |
| File Name       | The name to assign to the uploaded file.                                                                          |         |
| File Title      | The title of the file as it will appear in the channel.                                                           |         |
| Channels        | A comma-separated list of channel IDs that the file will be shared in.                                            |         |
| Initial Comment | The message text introducing the file in the specified channels when uploaded.                                    |         |
| Thread Reply    | Another message's ts value to upload this file as a reply. Never use a reply's ts value — use the parent instead. |         |
