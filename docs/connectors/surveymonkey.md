---
title: SurveyMonkey Connector
sidebar_label: SurveyMonkey
description: Manage surveys, collectors, responses, contacts, and webhooks in SurveyMonkey.
---

![SurveyMonkey](./assets/surveymonkey.png#connector-icon)
[SurveyMonkey](https://www.surveymonkey.com/) is a leading online survey platform that enables organizations to create surveys, collect responses, and analyze feedback at scale.
This component allows interacting with the SurveyMonkey API to manage surveys, collectors, responses, contacts, and webhooks.

## API Documentation

This component was built using the [SurveyMonkey API v3 Documentation](https://api.surveymonkey.com/v3/docs)

## Connections

### Access Token {#surveymonkeyaccesstoken}

Authenticate using an access token

To connect to SurveyMonkey using an Access Token, a registered private application in the [SurveyMonkey Developer Portal](https://developer.surveymonkey.com/apps/) is required.

:::info[When to Use Access Token Authentication]
Access Token authentication is best suited for private applications that access a single SurveyMonkey account. For multi-user or multi-tenant integrations, OAuth 2.0 is recommended.
:::

#### Prerequisites

- A SurveyMonkey account with access to the [Developer Portal](https://developer.surveymonkey.com/)
- A **Private** application registered in the Developer Portal

#### Setup Steps

1. Navigate to the [SurveyMonkey Developer Portal](https://developer.surveymonkey.com/apps/) and sign in.
2. Click **Create New App** to register a new application, or select an existing private app.
3. Set **App Type** to **Private** (required for access token generation).
4. Navigate to the app's **Settings** tab.
5. Copy the following values from the app's **Settings** tab:
   - **Access Token**: The long-lived token used for API authentication
   - **Client ID** (also called **API Key**): Needed for webhook signature verification
   - **Client Secret** (also called **API Secret**): Needed for webhook signature verification

:::note[Access Token Generation]
The **Access Token** field is only visible for private applications. If the field is not visible, verify that the app type is set to **Private** in the app settings.
:::

#### Configure the Connection

- Enter the **Access Token** from the app's Settings tab.
- Enter the **API Key (Client ID)** for webhook signature verification.
- Enter the **API Secret (Client Secret)** for webhook signature verification.
- Select the **Region** based on account location:
  - **United States**: Default for most accounts
  - **European Union**: For EU-based accounts (uses `api.eu.surveymonkey.com`)
  - **Canada**: For Canadian accounts (uses `api.surveymonkey.ca`)

#### Verify Connection

After entering the **Access Token**, **API Key**, and **API Secret**, save the connection configuration. The connection can be tested by executing any action, such as **Get Current User**, to verify authentication is working correctly.

:::warning[Security Considerations]
Access tokens provide full access to the associated SurveyMonkey account. Store tokens securely and rotate them periodically. For production integrations with multiple users, consider using OAuth 2.0 instead.
:::

| Input                      | Comments                                                                                                                                         | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Region                     | The SurveyMonkey region for the account.                                                                                                         | us      |
| Access Token               | The long-lived access token from the [SurveyMonkey Developer Portal](https://developer.surveymonkey.com/apps/). Found in the app's Settings tab. |         |
| API Key (Client ID)        | The app's Client ID, needed for webhook signature verification.                                                                                  |         |
| API Secret (Client Secret) | The app's Client Secret, needed for webhook signature verification.                                                                              |         |

### OAuth 2.0 {#surveymonkeyoauth}

Authenticate using OAuth 2.0

To connect to SurveyMonkey using OAuth 2.0, a registered application in the [SurveyMonkey Developer Portal](https://developer.surveymonkey.com/apps/) is required.

#### Prerequisites

- A SurveyMonkey account with access to the [Developer Portal](https://developer.surveymonkey.com/)
- Appropriate plan level for the required API scopes (some scopes require paid plans)

#### Setup Steps

1. Navigate to the [SurveyMonkey Developer Portal](https://developer.surveymonkey.com/apps/) and sign in.
2. Click **Create New App** to register a new application.
3. Fill in the required fields:
   - **App Name**: A descriptive name for the application
   - **Description**: Brief description of the integration's purpose
   - **App Type**: Select **Private** for single-organization use or **Public** for multi-tenant integrations
4. Under **OAuth Settings**, configure the redirect URL:
   - Add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as an **OAuth Redirect URL**
5. Click **Save** to create the application.
6. Copy the **Client ID** (also called API Key) and **Client Secret** from the app's **Settings** tab.

#### Configure the Connection

- Enter the **Client ID** and **Client Secret** from the SurveyMonkey app.
- Select the **Region** based on account location:
  - **United States**: Default for most accounts
  - **European Union**: For EU-based accounts (uses `api.eu.surveymonkey.com`)
  - **Canada**: For Canadian accounts (uses `api.surveymonkey.ca`)
- Configure the **Scopes** based on the required functionality:
  - For read-only survey and response access:
    ```
    surveys_read responses_read collectors_read
    ```
  - For full access including webhooks:
    ```
    surveys_read responses_read collectors_read contacts_read webhooks_read webhooks_write
    ```
  - Refer to [SurveyMonkey's OAuth Scopes documentation](https://api.surveymonkey.com/v3/docs?shell#scopes) for all available scopes.

:::note[Scope Approval for Public Apps]
Some scopes (such as `surveys_write` and `responses_write`) require SurveyMonkey approval for public applications. Private apps have access to all scopes by default.
:::

#### Verify Connection

After saving the connection configuration, click **Connect** to initiate the OAuth flow. SurveyMonkey will prompt for authorization to grant the requested permissions. After approving, the browser will redirect back to complete the connection. The connection is ready to use once the OAuth flow completes successfully.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------- |
| Region        | The SurveyMonkey region for the account.                                             | us      |
| Client ID     | The Client ID from the [SurveyMonkey App](https://developer.surveymonkey.com/apps/). |         |
| Client Secret | The Client Secret from the SurveyMonkey App.                                         |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for new and updated survey responses in SurveyMonkey on a configured schedule. New responses are emitted on the created branch and previously created responses that changed are emitted on the updated branch. Requires the responses_read_detail scope, available on paid SurveyMonkey plans.

| Input                | Comments                                                                                                           | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection           | The SurveyMonkey connection to use.                                                                                |         |
| Survey ID            | The unique identifier of the survey.                                                                               |         |
| Show New Records     | Include newly created survey responses in the results, emitted on the created branch.                              | true    |
| Show Updated Records | Include previously created survey responses that were modified since the last poll, emitted on the updated branch. | true    |

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
