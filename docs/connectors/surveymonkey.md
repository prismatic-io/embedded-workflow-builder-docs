---
title: SurveyMonkey Connector
sidebar_label: SurveyMonkey
description: Manage surveys, collectors, responses, contacts, and webhooks in SurveyMonkey.
---

![SurveyMonkey](./assets/surveymonkey.png#connector-icon)
Manage surveys, collectors, responses, contacts, and webhooks in SurveyMonkey.

## Connections

### Access Token {#surveymonkeyaccesstoken}

Authenticate using an access token

| Input                      | Comments                                                                                                                                         | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Region                     | The SurveyMonkey region for the account.                                                                                                         | us      |
| Access Token               | The long-lived access token from the [SurveyMonkey Developer Portal](https://developer.surveymonkey.com/apps/). Found in the app's Settings tab. |         |
| API Key (Client ID)        | The app's Client ID, needed for webhook signature verification.                                                                                  |         |
| API Secret (Client Secret) | The app's Client Secret, needed for webhook signature verification.                                                                              |         |

### OAuth 2.0 {#surveymonkeyoauth}

Authenticate using OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------- |
| Region        | The SurveyMonkey region for the account.                                             | us      |
| Client ID     | The Client ID from the [SurveyMonkey App](https://developer.surveymonkey.com/apps/). |         |
| Client Secret | The Client Secret from the SurveyMonkey App.                                         |         |

## Triggers

### Webhook Events {#eventswebhook}

Receive real-time notifications for SurveyMonkey events. Automatically creates and manages a webhook subscription when the instance is deployed, and removes the subscription when the instance is deleted.

| Input       | Comments                                                               | Default |
| ----------- | ---------------------------------------------------------------------- | ------- |
| Connection  | The SurveyMonkey connection to use.                                    |         |
| Event Type  | The event type to subscribe to.                                        |         |
| Object Type | Filter events by object type.                                          |         |
| Object IDs  | List of survey or collector IDs to filter events. Leave empty for all. |         |

## Actions

### Create Collector {#createcollector}

Create a new collector for a survey. Non-weblink collectors require a paid plan.

| Input                    | Comments                                                                 | Default |
| ------------------------ | ------------------------------------------------------------------------ | ------- |
| Connection               | The SurveyMonkey connection to use.                                      |         |
| Survey ID                | The unique identifier of the survey.                                     |         |
| Collector Type           | Type of collector. Note: Non-weblink collectors may require a paid plan. | weblink |
| Collector Name           | The name of the collector.                                               |         |
| Thank You Message        | Message shown to respondents after completing the survey.                |         |
| Close Date               | Date/time to close the collector (ISO 8601 format).                      |         |
| Redirect URL             | URL to redirect respondents to after completing the survey.              |         |
| Allow Multiple Responses | When true, respondents can submit multiple responses.                    | false   |
| Extra Body Fields        | Additional body fields to include in the request as a JSON object.       |         |

### Create Contact {#createcontact}

Create a new contact.

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Connection        | The SurveyMonkey connection to use.                                |         |
| Email             | The contact's email address.                                       |         |
| First Name        | The contact's first name.                                          |         |
| Last Name         | The contact's last name.                                           |         |
| Custom Fields     | Custom field values as key-value pairs.                            |         |
| Extra Body Fields | Additional body fields to include in the request as a JSON object. |         |

### Create Contact List {#createcontactlist}

Create a new contact list.

| Input             | Comments                            | Default |
| ----------------- | ----------------------------------- | ------- |
| Connection        | The SurveyMonkey connection to use. |         |
| Contact List Name | The name of the contact list.       |         |

### Create Contacts Bulk {#createcontactsbulk}

Create multiple contacts at once using a JSON array.

| Input                    | Comments                                                                                                          | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The SurveyMonkey connection to use.                                                                               |         |
| Contacts                 | JSON array of contact objects. Each must have "email", optionally "first_name", "last_name", and "custom_fields". |         |
| Update Existing Contacts | When true, existing contacts will be updated if they exist.                                                       | false   |

### Create Survey {#createsurvey}

Create a new survey. Can be blank, from a template, or copied from an existing survey.

| Input             | Comments                                                                    | Default |
| ----------------- | --------------------------------------------------------------------------- | ------- |
| Connection        | The SurveyMonkey connection to use.                                         |         |
| Survey Title      | The display name shown to respondents when they access the survey.          |         |
| Nickname          | Internal nickname for the survey (not shown to respondents).                |         |
| Template ID       | ID of an existing template to copy. Use this OR 'From Survey ID', not both. |         |
| From Survey ID    | ID of an existing survey to copy. Use this OR 'Template ID', not both.      |         |
| Language          | Language code for the survey (e.g., 'en', 'es', 'fr').                      | en      |
| Extra Body Fields | Additional body fields to include in the request as a JSON object.          |         |

### Create Webhook {#createwebhook}

Create a new webhook subscription. The URL must be unique and handle HEAD requests.

| Input            | Comments                                                                   | Default |
| ---------------- | -------------------------------------------------------------------------- | ------- |
| Connection       | The SurveyMonkey connection to use.                                        |         |
| Webhook Name     | The name of the webhook.                                                   |         |
| Subscription URL | URL to receive webhook callbacks. Must be unique and handle HEAD requests. |         |
| Event Type       | The event type to subscribe to.                                            |         |
| Object Type      | Filter events by object type.                                              |         |
| Object IDs       | List of survey or collector IDs to filter events. Leave empty for all.     |         |

### Delete Collector {#deletecollector}

Delete a collector.

| Input        | Comments                                | Default |
| ------------ | --------------------------------------- | ------- |
| Connection   | The SurveyMonkey connection to use.     |         |
| Collector ID | The unique identifier of the collector. |         |

### Delete Contact {#deletecontact}

Delete a contact.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The SurveyMonkey connection to use.   |         |
| Contact ID | The unique identifier of the contact. |         |

### Delete Contact List {#deletecontactlist}

Delete a contact list.

| Input           | Comments                                   | Default |
| --------------- | ------------------------------------------ | ------- |
| Connection      | The SurveyMonkey connection to use.        |         |
| Contact List ID | The unique identifier of the contact list. |         |

### Delete Response {#deleteresponse}

Delete a survey response.

| Input       | Comments                               | Default |
| ----------- | -------------------------------------- | ------- |
| Connection  | The SurveyMonkey connection to use.    |         |
| Survey ID   | The unique identifier of the survey.   |         |
| Response ID | The unique identifier of the response. |         |

### Delete Survey {#deletesurvey}

Permanently delete a survey and all its data. This cannot be undone.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The SurveyMonkey connection to use.  |         |
| Survey ID  | The unique identifier of the survey. |         |

### Delete Webhook {#deletewebhook}

Delete a webhook subscription.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The SurveyMonkey connection to use.   |         |
| Webhook ID | The unique identifier of the webhook. |         |

### Get Collector {#getcollector}

Retrieve details about a specific collector.

| Input        | Comments                                | Default |
| ------------ | --------------------------------------- | ------- |
| Connection   | The SurveyMonkey connection to use.     |         |
| Collector ID | The unique identifier of the collector. |         |

### Get Collector Stats {#getcollectorstats}

Get response statistics for a collector.

| Input        | Comments                                | Default |
| ------------ | --------------------------------------- | ------- |
| Connection   | The SurveyMonkey connection to use.     |         |
| Collector ID | The unique identifier of the collector. |         |

### Get Contact {#getcontact}

Retrieve details about a specific contact.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The SurveyMonkey connection to use.   |         |
| Contact ID | The unique identifier of the contact. |         |

### Get Contact List {#getcontactlist}

Retrieve details about a specific contact list.

| Input           | Comments                                   | Default |
| --------------- | ------------------------------------------ | ------- |
| Connection      | The SurveyMonkey connection to use.        |         |
| Contact List ID | The unique identifier of the contact list. |         |

### Get Current User {#getcurrentuser}

Retrieve information about the currently authenticated user.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The SurveyMonkey connection to use. |         |

### Get Response {#getresponse}

Get summary information about a specific response. Use 'Get Response Details' for full answers.

| Input       | Comments                               | Default |
| ----------- | -------------------------------------- | ------- |
| Connection  | The SurveyMonkey connection to use.    |         |
| Survey ID   | The unique identifier of the survey.   |         |
| Response ID | The unique identifier of the response. |         |

### Get Response Details {#getresponsedetails}

Get complete response details including all answers. Requires responses_read_detail scope.

| Input       | Comments                               | Default |
| ----------- | -------------------------------------- | ------- |
| Connection  | The SurveyMonkey connection to use.    |         |
| Survey ID   | The unique identifier of the survey.   |         |
| Response ID | The unique identifier of the response. |         |

### Get Survey {#getsurvey}

Retrieve summary information about a survey. Use 'Get Survey Details' for full structure.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The SurveyMonkey connection to use.  |         |
| Survey ID  | The unique identifier of the survey. |         |

### Get Survey Details {#getsurveydetails}

Retrieve the complete survey structure including pages and questions.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection | The SurveyMonkey connection to use.  |         |
| Survey ID  | The unique identifier of the survey. |         |

### Get Webhook {#getwebhook}

Retrieve details about a specific webhook.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The SurveyMonkey connection to use.   |         |
| Webhook ID | The unique identifier of the webhook. |         |

### List Collectors {#listcollectors}

List all collectors for a survey.

| Input      | Comments                                                                                                            | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The SurveyMonkey connection to use.                                                                                 |         |
| Survey ID  | The unique identifier of the survey.                                                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page. | false   |
| Page       | The page number to retrieve (starts at 1).                                                                          |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                     |         |

### List Contact Lists {#listcontactlists}

List all contact lists in your account.

| Input      | Comments                                                                                                            | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The SurveyMonkey connection to use.                                                                                 |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page. | false   |
| Page       | The page number to retrieve (starts at 1).                                                                          |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                     |         |

### List Contacts {#listcontacts}

List all contacts in your account.

| Input      | Comments                                                                                                            | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The SurveyMonkey connection to use.                                                                                 |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page. | false   |
| Page       | The page number to retrieve (starts at 1).                                                                          |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                     |         |

### List Responses {#listresponses}

List summary information for all responses to a survey.

| Input           | Comments                                                                                                            | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The SurveyMonkey connection to use.                                                                                 |         |
| Survey ID       | The unique identifier of the survey.                                                                                |         |
| Response Status | Filter responses by status.                                                                                         |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page. | false   |
| Page            | The page number to retrieve (starts at 1).                                                                          |         |
| Per Page        | The maximum number of results to return per page. Maximum: 100.                                                     |         |

### List Responses Bulk {#listresponsesbulk}

Bulk export responses with full answer details. More efficient for large exports.

| Input           | Comments                                                                                                            | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The SurveyMonkey connection to use.                                                                                 |         |
| Survey ID       | The unique identifier of the survey.                                                                                |         |
| Response Status | Filter responses by status.                                                                                         |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page. | false   |
| Page            | The page number to retrieve (starts at 1).                                                                          |         |
| Per Page        | The maximum number of results to return per page. Maximum: 100.                                                     |         |

### List Surveys {#listsurveys}

List all surveys accessible to the authenticated user.

| Input      | Comments                                                                                                            | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The SurveyMonkey connection to use.                                                                                 |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page. | false   |
| Page       | The page number to retrieve (starts at 1).                                                                          |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                     |         |

### List Webhooks {#listwebhooks}

List all webhooks in your account.

| Input      | Comments                                                                                                            | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The SurveyMonkey connection to use.                                                                                 |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. The API returns up to 100 results per page. | false   |
| Page       | The page number to retrieve (starts at 1).                                                                          |         |
| Per Page   | The maximum number of results to return per page. Maximum: 100.                                                     |         |

### Raw Request {#rawrequest}

Send raw HTTP request to SurveyMonkey API.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The SurveyMonkey connection to use.                                                                                                                                                              |         |
| URL                     | Input the path only (e.g., /surveys). The base URL is already included based on the configured region (e.g., https://api.surveymonkey.com/v3).                                                   |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Update Collector {#updatecollector}

Update an existing collector's settings.

| Input                    | Comments                                                           | Default |
| ------------------------ | ------------------------------------------------------------------ | ------- |
| Connection               | The SurveyMonkey connection to use.                                |         |
| Collector ID             | The unique identifier of the collector.                            |         |
| Collector Name           | The name of the collector.                                         |         |
| Thank You Message        | Message shown to respondents after completing the survey.          |         |
| Close Date               | Date/time to close the collector (ISO 8601 format).                |         |
| Redirect URL             | URL to redirect respondents to after completing the survey.        |         |
| Allow Multiple Responses | When true, respondents can submit multiple responses.              |         |
| Extra Body Fields        | Additional body fields to include in the request as a JSON object. |         |

### Update Contact {#updatecontact}

Update an existing contact's information.

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Connection        | The SurveyMonkey connection to use.                                |         |
| Contact ID        | The unique identifier of the contact.                              |         |
| Email             | The contact's email address.                                       |         |
| First Name        | The contact's first name.                                          |         |
| Last Name         | The contact's last name.                                           |         |
| Custom Fields     | Custom field values as key-value pairs.                            |         |
| Extra Body Fields | Additional body fields to include in the request as a JSON object. |         |

### Update Contact List {#updatecontactlist}

Update a contact list's name.

| Input             | Comments                                   | Default |
| ----------------- | ------------------------------------------ | ------- |
| Connection        | The SurveyMonkey connection to use.        |         |
| Contact List ID   | The unique identifier of the contact list. |         |
| Contact List Name | The name of the contact list.              |         |

### Update Response {#updateresponse}

Update response metadata such as status.

| Input             | Comments                                                           | Default |
| ----------------- | ------------------------------------------------------------------ | ------- |
| Connection        | The SurveyMonkey connection to use.                                |         |
| Survey ID         | The unique identifier of the survey.                               |         |
| Response ID       | The unique identifier of the response.                             |         |
| Response Pages    | Pages from the survey and their associated responses.              |         |
| Status            | Update the response status.                                        |         |
| Custom Value      | The custom metadata value to associate with the response.          |         |
| Extra Body Fields | Additional body fields to include in the request as a JSON object. |         |

### Update Webhook {#updatewebhook}

Update an existing webhook's settings.

| Input            | Comments                                                                   | Default |
| ---------------- | -------------------------------------------------------------------------- | ------- |
| Connection       | The SurveyMonkey connection to use.                                        |         |
| Webhook ID       | The unique identifier of the webhook.                                      |         |
| Webhook Name     | The name of the webhook.                                                   |         |
| Subscription URL | URL to receive webhook callbacks. Must be unique and handle HEAD requests. |         |
| Event Type       | The event type to subscribe to.                                            |         |
| Object Type      | Filter events by object type.                                              |         |
| Object IDs       | List of survey or collector IDs to filter events. Leave empty for all.     |         |
