---
title: Gorgias Connector
sidebar_label: Gorgias
description: Gorgias is a customer support platform designed to help e-commerce businesses manage customer inquiries and support tickets efficiently.
---

![Gorgias](./assets/gorgias.png#connector-icon)
Gorgias is a customer support platform designed to help e-commerce businesses manage customer inquiries and support tickets efficiently.

## Connections

### Gorgias API Key

Connection to Gorgias using an API Key.

Steps to generate and use an [API key](https://developers.gorgias.com/docs/access-tokens-api-keys) for Gorgias:

1. **Login to Gorgias**: Start by logging into your Gorgias [account](https://www.gorgias.com/login).
2. **Navigate to Settings**: After logging in, go to the **Settings** section of your Gorgias account. This is where you can manage various configurations for your account, including those related to the API.
3. **REST API Section**: Within the **Settings**, locate the **REST API** section. Here, you can manage API keys, which are essential for authenticating and interacting with the Gorgias API.
4. **Generate Password (API Key)**: In the **REST API** section, you'll see an option to generate a new API key, referred to as "Password" in this context. Click **Generate** to create a new API key.
5. **Enter the API Key**: Once the API key is generated, you need to enter it in the connection configuration.

Once completed, you can start performing requests directly from the [API documentation](https://developers.gorgias.com/reference/requests).

| Input    | Comments                                                                 | Default |
| -------- | ------------------------------------------------------------------------ | ------- |
| Domain   | The domain of the Gorgias API, this is provided by the service provider. |         |
| Username | Your username for Gorgias. e.g. john@example.com                         |         |
| API Key  | Your API Key for Gorgias.                                                |         |

### Gorgias OAuth 2.0

Connection to Gorgias using OAuth 2.0. Using OAuth2 is mandatory for public applications.

Steps to generate app credentials for [OAuth 2.0](https://developers.gorgias.com/docs/set-up-oauth2-app-store) for Gorgias:

1. **Login to Gorgias**: Start by logging into the Gorgias [developer portal](https://partners.gorgias.com/login).
2. **Create a New App**: Click the **Create New App** button.
3. **Fill out the app submission form**:
   - **App Name**: Shown whenever you app is mentioned.
   - **App Tagline**: Shown underneath the app name in your integration details.
   - **App Icon**: Shown as your app logo.
   - **Set App URL**: The **App URL** is required to set up the OAuth flow.
     Enter your own app's URL.
   - **Configure Redirect URIs**: Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. **Retrieve Client ID and Client Secret**: After creating the app, edit it to retrieve the **Client ID** and **Client Secret**.
5. **Enter the Client ID and Client Secret**: Enter the **Client ID** and **Client Secret** values into the connection configuration.

Once completed, you can start performing requests directly from the [API documentation](https://developers.gorgias.com/reference/requests).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                        | Default                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Domain        | The domain of the Gorgias API, this is provided by the service provider.                                                                                                        |                                        |
| Authorize URL | The URL to which the user will be redirected to authorize your application. This URL should be provided by the service provider.                                                |                                        |
| Token URL     | The URL used to obtain an access token from the service provider. This URL should be provided by the service provider.                                                          |                                        |
| Scopes        | A space-separated list of permissions or access levels that your application is requesting. Each scope is a string that represents a specific permission or set of permissions. | openid profile email write:all offline |
| Client ID     |                                                                                                                                                                                 |                                        |
| Client Secret |                                                                                                                                                                                 |                                        |

## Actions

### Create Customer

Create a customer.

| Input         | Comments                                                                                                                              | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Channels      | The customer's contact channels. See https://developers.gorgias.com/reference/create-customer for more information.                   |         |
| Email         | Primary email address of the customer.                                                                                                |         |
| External ID   | ID of the customer in a foreign system (Stripe, Aircall, etc...). This field is not used by Gorgias, feel free to set it as you wish. |         |
| Language      | The customer's preferred language (format: ISO_639-1).                                                                                |         |
| Name          | Full name of the customer.                                                                                                            |         |
| Timezone      | The customer's preferred timezone (format: IANA timezone name).                                                                       |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                  | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key.                                                               |         |

### Create Ticket

Create a new ticket.

| Input                          | Comments                                                                                                                                                                                                                   | Default |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Messages                       | Messages of the ticket.                                                                                                                                                                                                    |         |
| Assignee Team                  | The team assigned to the ticket.                                                                                                                                                                                           |         |
| Assignee User                  | The user assigned to the ticket.                                                                                                                                                                                           |         |
| Assignee User ID               | The team assigned to the ticket.                                                                                                                                                                                           |         |
| Closed Datetime                | When the ticket was closed.                                                                                                                                                                                                |         |
| Created Datetime               | When the ticket was created.                                                                                                                                                                                               |         |
| Customer                       | The customer linked to the ticket.                                                                                                                                                                                         |         |
| External ID                    | External ID of the ticket in a foreign system. This field is not used by Gorgias, feel free to set it as you wish.                                                                                                         |         |
| From Agent                     | Whether the first message of the ticket was sent by your company to a customer, or the opposite.                                                                                                                           |         |
| Language                       | The language primarily used in the ticket. The language is automatically detected on the first messages by Gorgias if not set explicitly.Once the language has been set, it won't be updated according to future messages. |         |
| Last Message Datetime          | When the last message was sent.                                                                                                                                                                                            |         |
| Last Received Message Datetime | When the last customer's message was sent.                                                                                                                                                                                 |         |
| Meta                           | Data associated with the ticket. You can use this field to store structured information (key-value data) about the ticket.                                                                                                 |         |
| Opened Datetime                | When the ticket was opened for the first time by a user.                                                                                                                                                                   |         |
| Snooze Datetime                | When the ticket will be re-opened.                                                                                                                                                                                         |         |
| Spam                           | Whether the ticket is considered as spam or not.                                                                                                                                                                           |         |
| Status                         | The status of the ticket.                                                                                                                                                                                                  | open    |
| Subject                        | The subject of the ticket.                                                                                                                                                                                                 |         |
| Tags                           | Tags linked to the ticket.                                                                                                                                                                                                 |         |
| Trashed Datetime               | When the ticket was moved to the trash.                                                                                                                                                                                    |         |
| Updated Datetime               | When the ticket was lastly updated.                                                                                                                                                                                        |         |
| Via                            | How the first message of the ticket has been received or sent from Gorgias.                                                                                                                                                |         |
| Debug Request                  | Enabling this flag will log out the current request.                                                                                                                                                                       | false   |
| Connection                     | Select the Gorgias connection type for this request: OAuth2 or API Key.                                                                                                                                                    |         |

### Create Ticket Message

Create a message for a ticket.

| Input         | Comments                                                                                                                                                                   | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Ticket ID     | The ID of the ticket associated with the message.                                                                                                                          |         |
| Channel       | The channel where the message was sent.                                                                                                                                    |         |
| From Agent    | Whether the message was sent by your company to a customer, or the opposite.                                                                                               | false   |
| Source        | Information used to route the message. It contains the names and the addresses of the sender and receivers. https://developers.gorgias.com/reference/create-ticket-message |         |
| Via           | How the message has been received, or sent from Gorgias.                                                                                                                   |         |
| Action        | Policy applied on external actions associated with the message if they failed.                                                                                             |         |
| Attachments   | A list of files attached to the message.                                                                                                                                   |         |
| Body HTML     | The full HTML version of the body of the message, if any.                                                                                                                  |         |
| Body Text     | The full text version of the body of the message, if any.                                                                                                                  |         |
| Created Date  | When the message was created.                                                                                                                                              |         |
| External ID   | ID of the message in a foreign system (Aircall, Zendesk, etc...). This field is not used by Gorgias, feel free to set it as you wish.                                      |         |
| Failed Date   | When the message failed to be sent.                                                                                                                                        |         |
| Message ID    | ID of the message on the service that send the message.It can be the ID of an email, a Messenger message, a Facebook comment, etc...                                       |         |
| Receiver ID   | The primary receiver of the message. It can be a user or a customer. Optional when the source type is 'internal-note'.                                                     |         |
| Sender        | The person who sent the message. It can be a user or a customer.                                                                                                           |         |
| Sent Date     | When the message was sent. If omitted, the message will be sent by Gorgias.                                                                                                |         |
| Subject       | The subject of the message.                                                                                                                                                |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                       | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key.                                                                                                    |         |

### Delete Customer

Delete a customer.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Customer ID   | ID of the customer to delete.                                           |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### Delete Ticket

Delete a ticket.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Ticket ID     | The ID of the ticket to delete.                                         |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### Delete Ticket Custom Field

Delete a ticket's custom field value.

| Input           | Comments                                                                | Default |
| --------------- | ----------------------------------------------------------------------- | ------- |
| Ticket ID       | The ID of the ticket.                                                   |         |
| Custom Field ID | The ID of the custom field.                                             |         |
| Debug Request   | Enabling this flag will log out the current request.                    | false   |
| Connection      | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### Download File

Download a file.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| File Type     | The type of file to download.                                           |         |
| Domain Hash   | The domain identifier of the account that owns the resource.            |         |
| Resource Name | The resource identifier of the attachment you are trying to retrieve.   |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### Get Account

Retrieve your account.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### Get Customer

Retrieve a customer.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Customer ID   | ID of the customer you're looking for.                                  |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### Get Event

Retrieve an event.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Event ID      | The ID of the event to retrieve.                                        |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### Get Ticket

Retrieve a ticket.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Ticket ID     | The ID of the ticket.                                                   |         |
| Relationships | Names of relations that should be included in returned data.            |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### Get Ticket Message

Retrieve a message.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Ticket ID     | The ID of the ticket associated with the message.                       |         |
| Message ID    | The ID of the message.                                                  |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### List Customers

List customers, paginated, and ordered by their name (alphabetical order).

| Input         | Comments                                                                                                                              | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer ID   | ID of the customer you're looking for.                                                                                                |         |
| Email         | Primary email address of the customer.                                                                                                |         |
| External ID   | ID of the customer in a foreign system (Stripe, Aircall, etc...). This field is not used by Gorgias, feel free to set it as you wish. |         |
| Language      | The customer's preferred language (format: ISO_639-1).                                                                                |         |
| Timezone      | The customer's preferred timezone (format: IANA timezone name).                                                                       |         |
| View ID       | ID of a view to filter customers by.                                                                                                  |         |
| Fetch All     | When enabled, all customers will be fetched. This can be slow if you have a lot of customers. Cursor and limit will be ignored.       | false   |
| Cursor        | Value indicating your position in the list of all customers. If omitted, the first customers of the list will be returned.            |         |
| Limit         | Maximum number of customers to return. The max number allowed is 100.                                                                 |         |
| Order By      | Attribute used to order customers.                                                                                                    |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                  | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key.                                                               |         |

### List Events

List events, paginated, and ordered by their creation date, with the most recently created first.

| Input            | Comments                                                                                                                                 | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Created Datetime | Comparators used to filter events on their creation date. See https://developers.gorgias.com/reference/list-events for more information. |         |
| Object ID        | ID of the object associated with the events to return.                                                                                   |         |
| Object Type      | Type of the object associated with the events to return.                                                                                 |         |
| Types            | Types of the events to return.                                                                                                           |         |
| User IDs         | IDs of the users who triggered the events to return.                                                                                     |         |
| Fetch All        | When enabled, all events will be fetched. This can be slow if you have a lot of events. Cursor and limit will be ignored.                | false   |
| Cursor           | Value indicating your position in the list of all events. If omitted, the first events of the list will be returned.                     |         |
| Limit            | Maximum number of customers to return. The max number allowed is 100.                                                                    |         |
| Order By         | Attribute used to order events.                                                                                                          |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                     | false   |
| Connection       | Select the Gorgias connection type for this request: OAuth2 or API Key.                                                                  |         |

### List Messages

List messages matching the given parameters.

| Input         | Comments                                                                                                                      | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All     | When enabled, all messages will be fetched. This can be slow if you have a lot of messages. Cursor and limit will be ignored. | false   |
| Ticket ID     | The ID of the ticket the messages are associated with.                                                                        |         |
| Cursor        | Value indicating your position in the list of all messages. If omitted, the first messages of the list will be returned.      |         |
| Limit         | Maximum number of messages to return. The max number allowed is 100.                                                          |         |
| Order By      | Attribute used to order messages.                                                                                             |         |
| Debug Request | Enabling this flag will log out the current request.                                                                          | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key.                                                       |         |

### List Ticket Custom Fields

List all custom fields for a ticket.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Ticket ID     | The ID of the ticket.                                                   |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### List Tickets

List tickets, paginated and ordered by the attribute of the given view.

| Input         | Comments                                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer ID   | The ID of a customer used to select their tickets.                                                                          |         |
| External ID   | ID of the ticket in a foreign system you're looking for.                                                                    |         |
| View ID       | The ID of a view used to select tickets matching the filters of this one.                                                   |         |
| Rule ID       | The ID of a rule used to select tickets matching the filters of this one.                                                   |         |
| Ticket IDs    | The IDs of tickets to select.                                                                                               |         |
| Fetch All     | When enabled, all tickets will be fetched. This can be slow if you have a lot of tickets. Cursor and limit will be ignored. | false   |
| Cursor        | Value indicating your position in the list of all tickets. If omitted, the first tickets of the list will be returned.      |         |
| Limit         | Maximum number of tickets to return. The max number allowed is 100.                                                         |         |
| Order By      | Attribute used to order tickets.                                                                                            |         |
| Debug Request | Enabling this flag will log out the current request.                                                                        | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key.                                                     |         |

### Raw Request

Send raw HTTP request to Gorgias API.

| Input                   | Comments                                                                                                                                                                                                                    | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | Select the Gorgias connection type for this request: OAuth2 or API Key.                                                                                                                                                     |         |
| URL                     | Input the path only (/tickets), The base URL is already included (https://<YOUR_DOMAIN>.gorgias.com/api). For example, to connect to https://<YOUR_DOMAIN>.gorgias.com/api/tickets, only /tickets is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                     |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                   |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                        |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                            |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                      |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                         |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                 |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                    | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                         |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                        | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                               | false   |

### Search

Search for resources.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Type          | The type of object to search for.                                       |         |
| Query         | Text query used to search for resources.                                |         |
| Size          | Maximum number of results returned.                                     |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### Update Customer

Update a customer.

| Input         | Comments                                                                                                                              | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Customer ID   | ID of the customer to update.                                                                                                         |         |
| Channels      | The customer's contact channels. See https://developers.gorgias.com/reference/update-customer for more information.                   |         |
| Email         | Primary email address of the customer.                                                                                                |         |
| External ID   | ID of the customer in a foreign system (Stripe, Aircall, etc...). This field is not used by Gorgias, feel free to set it as you wish. |         |
| Language      | The customer's preferred language (format: ISO_639-1).                                                                                |         |
| Name          | Full name of the customer.                                                                                                            |         |
| Timezone      | The customer's preferred timezone (format: IANA timezone name).                                                                       |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                  | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key.                                                               |         |

### Update Customer Data

Set a customer's data.

| Input         | Comments                                                                                              | Default |
| ------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Customer ID   | ID of the customer to update.                                                                         |         |
| Data          | The customer data.                                                                                    |         |
| Version       | The date of the customer data. If we already have a more recent version, the request will be ignored. |         |
| Debug Request | Enabling this flag will log out the current request.                                                  | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key.                               |         |

### Update Ticket

Update a ticket.

| Input                          | Comments                                                                                                                                                                                                                   | Default |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Ticket ID                      | The ID of the ticket.                                                                                                                                                                                                      |         |
| Assignee Team                  | The team assigned to the ticket.                                                                                                                                                                                           |         |
| Assignee User                  | The user assigned to the ticket.                                                                                                                                                                                           |         |
| Assignee User ID               | The team assigned to the ticket.                                                                                                                                                                                           |         |
| Closed Datetime                | When the ticket was closed.                                                                                                                                                                                                |         |
| Customer                       | The customer linked to the ticket.                                                                                                                                                                                         |         |
| External ID                    | External ID of the ticket in a foreign system. This field is not used by Gorgias, feel free to set it as you wish.                                                                                                         |         |
| From Agent                     | Whether the first message of the ticket was sent by your company to a customer, or the opposite.                                                                                                                           |         |
| Is Unread                      | Whether the ticket is unread for you.                                                                                                                                                                                      |         |
| Language                       | The language primarily used in the ticket. The language is automatically detected on the first messages by Gorgias if not set explicitly.Once the language has been set, it won't be updated according to future messages. |         |
| Last Message Datetime          | When the last message was sent.                                                                                                                                                                                            |         |
| Last Received Message Datetime | When the last customer's message was sent.                                                                                                                                                                                 |         |
| Meta                           | Data associated with the ticket. You can use this field to store structured information (key-value data) about the ticket.                                                                                                 |         |
| Opened Datetime                | When the ticket was opened for the first time by a user.                                                                                                                                                                   |         |
| Snooze Datetime                | When the ticket will be re-opened.                                                                                                                                                                                         |         |
| Spam                           | Whether the ticket is considered as spam or not.                                                                                                                                                                           |         |
| Status                         | The status of the ticket.                                                                                                                                                                                                  | open    |
| Tags                           | Tags linked to the ticket.                                                                                                                                                                                                 |         |
| Trashed Datetime               | When the ticket was moved to the trash.                                                                                                                                                                                    |         |
| Updated Datetime               | When the ticket was lastly updated.                                                                                                                                                                                        |         |
| Via                            | How the first message of the ticket has been received or sent from Gorgias.                                                                                                                                                |         |
| Debug Request                  | Enabling this flag will log out the current request.                                                                                                                                                                       | false   |
| Connection                     | Select the Gorgias connection type for this request: OAuth2 or API Key.                                                                                                                                                    |         |

### Update Ticket Custom Fields

Update a ticket's custom fields values.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Ticket ID     | The ID of the ticket.                                                   |         |
| Custom Fields | Custom fields to update.                                                |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key. |         |

### Upload Files

Upload a file or several files.

| Input         | Comments                                                                                                                                                                                                          | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Type          | The type of file to upload. If not specified, the file will be uploaded as a private attachment.                                                                                                                  |         |
| File          | A file to upload, this should be a reference to binary data from a previous step. The name of this parameter can be replaced with the label of the file you want to have once uploaded. E.g: package-damaged.png. |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                              | false   |
| Connection    | Select the Gorgias connection type for this request: OAuth2 or API Key.                                                                                                                                           |         |
