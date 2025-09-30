---
title: Guru Connector
sidebar_label: Guru
description: Manage cards, collections, and folders in the Guru knowledge management platform.
---

![Guru](./assets/guru.png#connector-icon)
Manage cards, collections, and folders in the Guru knowledge management platform.

## Connections

### User Token

Authenticate with Guru using a user token for read/write access

#### Configuring a User Token

1. Log into [Guru](https://app.getguru.com/signin)
2. Navigate to Manage > Apps and Integrations > API Access
3. Select **Generate User Token** and copy the user token
4. From the integration connection fill in the required fields:
   - **Username**: The Guru username or email address
   - **User Token**: The token obtained from your Guru account settings

| Input      | Comments                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------- | ------- |
| Username   | Your Guru username or email address.                                                |         |
| User Token | Your user token for read/write access. Obtain this from your Guru account settings. |         |

## Triggers

### Webhook Events

Manages Guru webhook subscriptions for your instance. On instance deploy, this trigger creates a webhook subscription in Guru (or reuses an existing one with matching URL and events). On instance deletion, it removes the subscription. The trigger validates incoming webhook requests and handles all webhook lifecycle management automatically.

| Input         | Comments                                                                                                             | Default                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Connection    |                                                                                                                      |                                               |
| Event Types   | Select which event types should trigger the webhook. <strong>Important:</strong> Max 10 event types can be selected. | <code>["card-created", "card-updated"]</code> |
| Active        | Whether the webhook subscription is active.                                                                          | true                                          |
| Delivery Mode | The delivery mode of the webhook subscription.                                                                       | BATCH                                         |

## Actions

### Add User Group Member

Add a user group member

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                      |         |
| First Name | The user's first name.                                                               |         |
| Last Name  | The user's last name.                                                                |         |
| Email      | The user's email address. <strong>Important:</strong> Must be an existing Guru user. |         |
| Group ID   | The ID of the group.                                                                 |         |

### Create Card

Create a new card in Guru

| Input                 | Comments                                         | Default |
| --------------------- | ------------------------------------------------ | ------- |
| Connection            |                                                  |         |
| Card Title            | The title of the card.                           |         |
| Card Content          | The content/body of the card.                    |         |
| Collection ID         | The unique identifier of the collection.         |         |
| Share Status          | The sharing status of the card.                  | TEAM    |
| Additional Properties | Additional properties to include in the request. |         |

### Create Folder

Create a new folder in a collection

| Input              | Comments                                                   | Default |
| ------------------ | ---------------------------------------------------------- | ------- |
| Connection         |                                                            |         |
| Folder Title       | The title of the folder.                                   |         |
| Collection ID      | The unique identifier of the collection.                   |         |
| Folder Description | A description of the folder.                               |         |
| Parent Folder ID   | The ID of the parent folder (optional for nested folders). |         |

### Create Webhook Subscription

Create a new webhook subscription to receive real-time Guru events

| Input         | Comments                                                                                                             | Default                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Connection    |                                                                                                                      |                                               |
| Webhook URL   | The URL where webhook events will be sent.                                                                           |                                               |
| Event Types   | Select which event types should trigger the webhook. <strong>Important:</strong> Max 10 event types can be selected. | <code>["card-created", "card-updated"]</code> |
| Active        | Whether the webhook subscription is active.                                                                          | true                                          |
| Delivery Mode | The delivery mode of the webhook subscription.                                                                       | BATCH                                         |

### Delete All Webhook Subscriptions

Delete all webhook subscriptions for the current user (use with caution)

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete Card

Delete a card from Guru

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection |                                    |         |
| Card ID    | The unique identifier of the card. |         |

### Delete Folder

Delete a folder from Guru

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection |                                      |         |
| Folder ID  | The unique identifier of the folder. |         |

### Delete User Group Member

Remove a user from a user group

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection |                       |         |
| Group ID   | The ID of the group.  |         |
| Member ID  | The ID of the member. |         |

### Delete Webhook Subscription

Delete a webhook subscription to stop receiving events

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Webhook ID | The unique identifier of the webhook. |         |

### Get Card

Retrieve a specific card with extended information including teams and collaborators

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection |                                    |         |
| Card ID    | The unique identifier of the card. |         |

### Get Card Folders

Get the folders that contain a specific card

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection |                                    |         |
| Card ID    | The unique identifier of the card. |         |

### Get Collection

Retrieve details of a specific collection by ID

| Input         | Comments                                 | Default |
| ------------- | ---------------------------------------- | ------- |
| Connection    |                                          |         |
| Collection ID | The unique identifier of the collection. |         |

### Get Folder

Retrieve details of a specific folder by ID

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection |                                      |         |
| Folder ID  | The unique identifier of the folder. |         |

### Get Folder Items

Retrieve all items (cards and subfolders) in a specific folder

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection |                                        |         |
| Folder ID  | The unique identifier of the folder.   |         |
| Fetch All  | Turn on to fetch more than 50 folders. | false   |

### Get Team Analytics

Retrieve analytics data for the team

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection |                                                        |         |
| Team ID    | The ID of the team.                                    |         |
| From Date  | The start date of the time range in YYYY-MM-DD format. |         |
| To Date    | The end date of the time range in YYYY-MM-DD format.   |         |
| Fetch All  | Turn on to fetch more than 500 events.                 | false   |

### Get Webhook Subscription

Retrieve details of a specific webhook subscription

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Webhook ID | The unique identifier of the webhook. |         |

### List Card Verifiers

List the verifiers for a card

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection |                                    |         |
| Card ID    | The unique identifier of the card. |         |

### List Collection Group Access

Get details of all groups with access to a collection

| Input         | Comments                                 | Default |
| ------------- | ---------------------------------------- | ------- |
| Connection    |                                          |         |
| Collection ID | The unique identifier of the collection. |         |

### List Collections

Retrieve a list of all collections accessible to the user

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Search     | The search term to use in the search. |         |

### List Folders

Retrieve a list of all folders

| Input      | Comments                                                                                                   | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                            |         |
| Query      | Advanced query using [Guru query language](https://developer.getguru.com/docs/guru-query-language) syntax. |         |
| Search     | The search term to use in the search.                                                                      |         |
| Fetch All  | Turn on to fetch more than 110 folders.                                                                    | false   |

### List Team Members

Retrieve a list of all team members

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection |                                        |         |
| Search     | The search term to use in the search.  |         |
| Fetch All  | Turn on to fetch more than 50 members. | false   |

### List User Groups

Returns all groups on the team

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Webhook Subscriptions

Retrieve all webhook subscriptions for the current user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send raw HTTP request to Guru API

| Input                   | Comments                                                                                                                                                                                                | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                         |         |
| URL                     | Input the path only (/cards), The base URL is already included (https://api.getguru.com/api/v1). For example, to connect to https://api.getguru.com/api/v1/cards, only /cards is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                 |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                               |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                    |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                        |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                  |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                     |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                             |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                     |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                     | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.        | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                     | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                           | false   |

### Search Cards

Search for cards and content in Guru

| Input        | Comments                                                                                                   | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                            |         |
| Query        | Advanced query using [Guru query language](https://developer.getguru.com/docs/guru-query-language) syntax. |         |
| Search Terms | Search terms to use in the search.                                                                         |         |
| Query Type   | The type of query to search for.                                                                           | cards   |
| Max Results  | The maximum number of results to return.                                                                   |         |
| Fetch All    | Turn on to fetch more than 50 cards.                                                                       | false   |

### Search Folders

Search for folders by title or description

| Input         | Comments                                 | Default |
| ------------- | ---------------------------------------- | ------- |
| Connection    |                                          |         |
| Search Terms  | Search terms to use in the search.       |         |
| Collection ID | The unique identifier of the collection. |         |

### Test Webhook

Send a test event to a webhook subscription to verify it's working

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Webhook ID | The unique identifier of the webhook. |         |
| Test Data  | The data to send to the webhook.      |         |

### Unverify Card

Remove verification from a card

| Input               | Comments                                     | Default |
| ------------------- | -------------------------------------------- | ------- |
| Connection          |                                              |         |
| Card ID             | The unique identifier of the card.           |         |
| Verification Reason | Optional reason for the verification status. |         |

### Update Card

Update an existing card in Guru

| Input                 | Comments                                         | Default |
| --------------------- | ------------------------------------------------ | ------- |
| Connection            |                                                  |         |
| Card ID               | The unique identifier of the card.               |         |
| Card Title            | The title of the card.                           |         |
| Card Content          | The content/body of the card.                    |         |
| Share Status          | The sharing status of the card.                  |         |
| Additional Properties | Additional properties to include in the request. |         |

### Update Folder

Update an existing folder

| Input              | Comments                                                   | Default |
| ------------------ | ---------------------------------------------------------- | ------- |
| Connection         |                                                            |         |
| Folder ID          | The unique identifier of the folder.                       |         |
| Folder Title       | The title of the folder.                                   |         |
| Folder Description | A description of the folder.                               |         |
| Parent Folder ID   | The ID of the parent folder (optional for nested folders). |         |

### Update Webhook Subscription

Update an existing webhook subscription settings

| Input         | Comments                                                                                                             | Default                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Connection    |                                                                                                                      |                                               |
| Webhook ID    | The unique identifier of the webhook.                                                                                |                                               |
| Webhook URL   | The URL where webhook events will be sent.                                                                           |                                               |
| Event Types   | Select which event types should trigger the webhook. <strong>Important:</strong> Max 10 event types can be selected. | <code>["card-created", "card-updated"]</code> |
| Active        | Whether the webhook subscription is active.                                                                          | true                                          |
| Delivery Mode | The delivery mode of the webhook subscription.                                                                       | BATCH                                         |

### Verify Card

Mark a card as verified

| Input               | Comments                                     | Default |
| ------------------- | -------------------------------------------- | ------- |
| Connection          |                                              |         |
| Card ID             | The unique identifier of the card.           |         |
| Verification Status | The verification status to set for the card. |         |
| Verification Reason | Optional reason for the verification status. |         |

### Who Am I

Get information about the current authenticated user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
