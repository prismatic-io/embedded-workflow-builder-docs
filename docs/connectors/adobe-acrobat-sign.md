---
title: Adobe Acrobat Sign Connector
sidebar_label: Adobe Acrobat Sign
description: Adobe Acrobat Sign is an e-signature management solution. Use the Adobe Acrobat Sign component to send, sign, track, and manage the signature process.
---

![Adobe Acrobat Sign](./assets/adobe-acrobat-sign.png#connector-icon)
[Adobe Acrobat Sign](https://www.adobe.com/sign.html) is an e-signature management solution.
This component allows you to send, sign, track, and manage agreements through the Adobe Acrobat Sign platform.

## API Documentation

This component was built using the [Adobe Sign REST API](https://secure.na1.adobesign.com/public/docs/restapi/v6) currently utilizing v6.

## Connections

### OAuth 2.0 {#oauth}

Authenticate using OAuth 2.0.

To configure OAuth 2.0 for Adobe Acrobat Sign, begin by [creating an App](https://opensource.adobe.com/acrobat-sign/developer_guide/gstarted.html#get-the-app-id-and-secret):

#### Prerequisites

- An [Adobe Acrobat Sign](https://secure.adobesign.com/public/login) account with access to **API Applications**.
- Permission to create OAuth applications in the Adobe Acrobat Sign account.
- The region/shard of the Adobe Acrobat Sign account (visible in the web app URL, e.g. `https://secure.na3.adobesign.com`).

#### Setup Steps

1. [Log in to Adobe Acrobat Sign](https://secure.adobesign.com/public/login).
2. Select **API** from the top menu. If the **API** link is not visible, select **Account** first.
3. Select **API Applications**.
4. Select the **Create** (+) icon at the top right of the table and provide application details.
5. Choose a domain based on the intended use:
   - **CUSTOMER**: Apps that only access the creating account or are used for internal use and testing.
   - **PARTNER**: Select this type for applications distributed to other users that require access to other Adobe Acrobat Sign accounts.
     Note: PARTNER applications [must be certified](https://www.adobe.com/go/esign-dev-cert) to have full access to other accounts.
6. To retrieve the OAuth [Client ID and Secret](https://opensource.adobe.com/acrobat-sign/developer_guide/gstarted.html#configure-oauth): in the **API Applications** menu, select the application.
7. Click the **Configure OAuth for the Application** link to configure the OAuth integration.
8. For the **Redirect URI**, enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
9. Check the boxes for the necessary scopes with the modifier set to `account` for the integration and save.
10. In the **API Applications** menu, select the application and select **View / Edit**.
11. Copy the **Application ID / Client ID** and **Client Secret** values. (Client ID and Application ID are the same value and can be used interchangeably.)

#### Configure the Connection

Each Adobe Acrobat Sign OAuth URL is region-dependent. Replace the shard (e.g. `na3`) in the host with the shard shown in the Adobe Acrobat Sign web app URL (for example, an `https://secure.na3.adobesign.com` web app uses `na3`).

- **Authorize URL**: The OAuth 2.0 authorization endpoint for the region. Example: `https://secure.na3.adobesign.com/public/oauth/v2`.
- **Token URL**: The OAuth 2.0 token endpoint for the region. Example: `https://secure.na3.adobesign.com/oauth/v2/token`.
- **Refresh URL**: The OAuth 2.0 refresh endpoint for the region. Example: `https://secure.na3.adobesign.com/oauth/v2/refresh`.
- **Scopes**: Space-separated OAuth 2.0 permission scopes for Adobe Acrobat Sign, with the modifier set to `account` (for example, `user_read:account user_write:self agreement_read:group`). Refer to the [Acrobat Sign scopes documentation](https://opensource.adobe.com/acrobat-sign/developer_guide/gstarted.html#configure-scopes) for the available scopes.
- **Client ID**: The **Application ID / Client ID** copied from the API Application.
- **Client Secret**: The **Client Secret** copied from the API Application.

#### PARTNER Application Certification

Adobe requires PARTNER domain apps (those designed to access multiple organizations' Adobe Acrobat Sign accounts) to complete a certification process before deployment. This review verifies the app meets Adobe's security and compliance requirements for handling enterprise e-signature data on behalf of external accounts.

**Complete PARTNER application certification before deploying to customer accounts.** Without certification, a PARTNER app is limited to authenticating with the developing organization's own Adobe Acrobat Sign account. Users from other organizations cannot connect to the integration.

To apply for certification:

1. Ensure the PARTNER application is fully developed and tested using the developing organization's own Adobe Acrobat Sign account.
2. Complete the [PARTNER Application Certification form](https://www.adobe.com/go/esign-dev-cert).
3. Submit the form. Adobe reviews the application for security and compliance requirements.
4. Once certified, the PARTNER application can be authorized by users from other organizations' Adobe Acrobat Sign accounts.

:::note[Certification Applies to PARTNER Domain Only]
CUSTOMER domain applications do not require certification and can only access the account used to create the app. Only select the PARTNER domain if the integration needs to access other organizations' Adobe Acrobat Sign accounts. Refer to the [Acrobat Sign developer guide](https://opensource.adobe.com/acrobat-sign/developer_guide/gstarted.html) for details on choosing the correct domain.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                                                                                                 | Default                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Authorize URL | The OAuth 2.0 Authorization URL for Acrobat Sign with the correct region/shard. This can be found in the URL when you are logged into the Adobe Sign web app. For example, if the URL is https://secure.na3.adobesign.com, the authorize URL would be 'https://secure.na3.adobesign.com/public/oauth/v2' | https://secure.na3.adobesign.com/public/oauth/v2       |
| Token URL     | The OAuth 2.0 Token URL for Acrobat Sign with the correct region/shard. This can be found in the URL when you are logged into the Adobe Sign web app. For example, if the URL is https://secure.na3.adobesign.com, the token URL would be 'https://secure.na3.adobesign.com/oauth/v2/token'              | https://secure.na3.adobesign.com/oauth/v2/token        |
| Refresh URL   | The OAuth 2.0 Refresh URL for Acrobat Sign with the correct region/shard. This can be found in the URL when you are logged into the Adobe Sign web app. For example, if the URL is https://secure.na3.adobesign.com, the refresh URL would be 'https://secure.na3.adobesign.com/oauth/v2/refresh'        | https://secure.na3.adobesign.com/oauth/v2/refresh      |
| Scopes        | Space-separated OAuth 2.0 permission scopes for Acrobat Sign. Add scope modifiers using colons. See the <a href="https://opensource.adobe.com/acrobat-sign/developer_guide/gstarted.html#configure-scopes">Acrobat Sign scopes documentation</a> for available scopes.                                   | user_read:account user_write:self agreement_read:group |
| Client ID     | Client Identifier of your Acrobat Sign App (shown as Application ID inside Acrobat Sign).                                                                                                                                                                                                                |                                                        |
| Client Secret | Client Secret of your Acrobat Sign App.                                                                                                                                                                                                                                                                  |                                                        |

## Triggers

### New and Updated Agreements {#pollchangestrigger}

Checks for new and updated agreements in Adobe Acrobat Sign on a configured schedule.

| Input                | Comments                                                                              | Default |
| -------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection           | The Adobe Acrobat Sign connection to use.                                             |         |
| Show New Records     | When true, newly created agreements are included in the trigger output.               | true    |
| Show Updated Records | When true, agreements updated since the last poll are included in the trigger output. | true    |

### Webhook {#adobesigntrigger}

Receive and validate webhook requests from Adobe Acrobat Sign for manually configured webhook subscriptions.

| Input                     | Comments                                                            | Default |
| ------------------------- | ------------------------------------------------------------------- | ------- |
| Connection                | The Adobe Acrobat Sign connection to use.                           |         |
| Perform Strict Validation | When true, performs strict validation on each webhook notification. | false   |

## Actions

### Create Account {#createaccount}

Creates an Adobe Acrobat Sign account under the partner channel.

| Input               | Comments                                                                                                                                                                                                                                                                                               | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          | The Adobe Acrobat Sign connection to use.                                                                                                                                                                                                                                                              |         |
| Account Type        | The type of account to be created.                                                                                                                                                                                                                                                                     |         |
| Email               | The email address of the user to be created.                                                                                                                                                                                                                                                           |         |
| Country Code        | The country code of the account.                                                                                                                                                                                                                                                                       |         |
| Number of Seats     | The number of seats.                                                                                                                                                                                                                                                                                   |         |
| First Name          | The first name of the user.                                                                                                                                                                                                                                                                            |         |
| Last Name           | The last name of the user.                                                                                                                                                                                                                                                                             |         |
| Phone               | The phone number of the user.                                                                                                                                                                                                                                                                          |         |
| Additional Fields   | Additional optional fields.                                                                                                                                                                                                                                                                            |         |
| External ID         | Case-sensitive External ID for which you would like to retrieve agreement information. ExternalId is passed in the call to the agreement creation API. <strong>Note:</strong> The externalId value is visible to all participants through the API, so should not be used to contain a sensitive token. |         |
| Locale              | The locale of the user.                                                                                                                                                                                                                                                                                |         |
| Trial Duration Days | Account trial duration (in days).                                                                                                                                                                                                                                                                      |         |
| Title               | The job title of the user.                                                                                                                                                                                                                                                                             |         |
| Company             | The company of the user.                                                                                                                                                                                                                                                                               |         |

### Create Agreement {#createagreement}

Creates an agreement. Sends it out for signatures and returns the agreementId in the response to the client.

| Input                             | Comments                                                                                                                                                 | Default |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                        | The Adobe Acrobat Sign connection to use.                                                                                                                |         |
| Transient Document ID             | ID for a transient document that will be added to the agreement.                                                                                         |         |
| Agreement Name                    | Name of the Agreement that will be used to identify it.                                                                                                  |         |
| Participant Set Info Role         | Role assumed by all participants in this set (signer, approver, etc.).                                                                                   |         |
| Participant Member Info Email     | Email address of the participant.                                                                                                                        |         |
| Signature Type                    | The type of signature you would like to request - written or e-signature.                                                                                |         |
| Agreement State                   | State of the agreement.                                                                                                                                  |         |
| Additional Agreement Participants | Additional participant sets to include in the agreement. Provide a JSON array of participantSetsInfo objects to support multiple signers or other roles. |         |

### Create Group {#creategroup}

Creates a new group in an account.

| Input            | Comments                                                              | Default |
| ---------------- | --------------------------------------------------------------------- | ------- |
| Connection       | The Adobe Acrobat Sign connection to use.                             |         |
| Group Name       | The name of the group.                                                |         |
| Created          | Date of creation of the group. Format would be yyyy-MM-dd'T'HH:mm:ssZ |         |
| Is Default Group | When true, the group is the default group.                            |         |

### Create Transient Document {#createtransientdocument}

Uploads a document and obtains the document's ID.

| Input      | Comments                                                                                                                                                                                                           | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Adobe Acrobat Sign connection to use.                                                                                                                                                                          |         |
| File       | The file part of the multipart request for document upload. You can upload only one file at a time.                                                                                                                |         |
| Mime Type  | The MIME type of the document being uploaded. If not specified here then MIME type is picked up from the file object. If MIME type is not present there either then MIME type is inferred from the file extension. |         |
| File Name  | A name for the document being uploaded. Maximum number of characters in the name is restricted to 255.                                                                                                             |         |

### Create User {#createuser}

Creates a new user in the Adobe Acrobat Sign system.

| Input             | Comments                                     | Default |
| ----------------- | -------------------------------------------- | ------- |
| Connection        | The Adobe Acrobat Sign connection to use.    |         |
| Account Admin     | When true, the user is an account admin.     | false   |
| Email             | The email address of the user to be created. |         |
| First Name        | The first name of the user.                  |         |
| Last Name         | The last name of the user.                   |         |
| Initials          | The initials of the user.                    |         |
| Phone             | The phone number of the user.                |         |
| Additional Fields | Additional optional fields.                  |         |
| Locale            | The locale of the user.                      |         |
| Title             | The job title of the user.                   |         |
| Account ID        | The account ID of the user.                  |         |
| Company           | The company of the user.                     |         |

### Create Webhook {#createwebhook}

Creates a webhook for the authenticated user.

| Input                                            | Comments                                                                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                                       | The Adobe Acrobat Sign connection to use.                                                                                                                                                                                                                                                                                                                                                                |         |
| Webhook Subscription Events                      | The list of events for which the webhook subscription is being made.                                                                                                                                                                                                                                                                                                                                     |         |
| Scope                                            | Scope of the webhook.                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Webhook Name                                     | The name of the webhook.                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Webhook URL                                      | The URL to which the webhook payload is to be delivered.                                                                                                                                                                                                                                                                                                                                                 |         |
| Webhook Application                              | The application name and display name through which the webhook is created.                                                                                                                                                                                                                                                                                                                              |         |
| Application Name                                 | The name of the application through which the webhook is created.                                                                                                                                                                                                                                                                                                                                        |         |
| Application Display Name                         | The name of the application through which the webhook is created.                                                                                                                                                                                                                                                                                                                                        |         |
| Problem Notification Emails                      | The list of email addresses to which the webhook problem notifications are sent.                                                                                                                                                                                                                                                                                                                         |         |
| Resource ID                                      | ID of the resource type for which you want to create webhook. Provide agreementId if webhook needs to be created for an agreement. Similarly, widgetId if webhook needs to be created for a web form, megaSignId if webhook needs to be created for a bulk send and libraryDocumentId if webhook needs to be created for a library document. <strong>Note:</strong> Only specify if scope is 'RESOURCE'. |         |
| Webhook Resource Type                            | The type of resource being accessed. <strong>Note:</strong> Only specify if scope is Resource.                                                                                                                                                                                                                                                                                                           |         |
| Webhook Agreement Conditional Parameters         | Optional parameters to include additional information in the webhook payload for agreements.                                                                                                                                                                                                                                                                                                             |         |
| Webhook Library Documents Conditional Parameters | Optional parameters to include additional information in the webhook payload for library documents.                                                                                                                                                                                                                                                                                                      |         |
| Webhook MegaSign Conditional Parameters          | Optional parameters to include additional information in the webhook payload for MegaSign.                                                                                                                                                                                                                                                                                                               |         |
| Webhook Widget Conditional Parameters            | Optional parameters to include additional information in the webhook payload for widgets.                                                                                                                                                                                                                                                                                                                |         |

### Delete Agreement Documents {#deleteagreementdocuments}

Deletes all the documents for an agreement.

| Input        | Comments                                                                                                           | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection   | The Adobe Acrobat Sign connection to use.                                                                          |         |
| Agreement ID | The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements. |         |

### Delete Group {#deletegroup}

Deletes an existing group.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Adobe Acrobat Sign connection to use. |         |
| Group ID   | The unique identifier of the group.       |         |

### Delete Webhook {#deletewebhook}

Deletes a webhook.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Connection | The Adobe Acrobat Sign connection to use.                          |         |
| Webhook ID | The webhook identifier, as returned by the Adobe Sign Webhook API. |         |

### Download Agreement PDF {#downloadagreementfile}

Downloads the PDF associated with an agreement.

| Input        | Comments                                                                                                           | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection   | The Adobe Acrobat Sign connection to use.                                                                          |         |
| Agreement ID | The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements. |         |

### Get Account {#getaccount}

Retrieves the information for an account.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Adobe Acrobat Sign connection to use. |         |
| Account ID | The account ID of the user.               |         |

### Get Agreement {#getagreement}

Retrieves the current status of an agreement.

| Input        | Comments                                                                                                           | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection   | The Adobe Acrobat Sign connection to use.                                                                          |         |
| Agreement ID | The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements. |         |

### Get Group {#getgroup}

Retrieves detailed information about the group.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Adobe Acrobat Sign connection to use. |         |
| Group ID   | The unique identifier of the group.       |         |

### Get User {#getuser}

Retrieves detailed information about the user in the caller account.

| Input      | Comments                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Adobe Acrobat Sign connection to use.                                                           |         |
| User ID    | The user identifier, as returned by the user creation API or retrieved from the API to fetch users. |         |

### Get Webhook {#getwebhook}

Retrieves the details of a webhook.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Connection | The Adobe Acrobat Sign connection to use.                          |         |
| Webhook ID | The webhook identifier, as returned by the Adobe Sign Webhook API. |         |

### List Agreements {#listagreements}

Retrieves agreements for the user.

| Input                  | Comments                                                                                                                                                                                                                                                                                               | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Adobe Acrobat Sign connection to use.                                                                                                                                                                                                                                                              |         |
| Fetch All              | When true, automatically fetches all pages of results using pagination.                                                                                                                                                                                                                                | true    |
| Pagination             | Page and page-size controls.                                                                                                                                                                                                                                                                           |         |
| Cursor                 | Used to navigate through pagination. If not provided, it will default to the first page. Only applied when Fetch All is false.                                                                                                                                                                         |         |
| Page Size              | The number of results to return per page. If not provided, it is decided by your application settings. Only applied when Fetch All is false.                                                                                                                                                           | 500     |
| External ID            | Case-sensitive External ID for which you would like to retrieve agreement information. ExternalId is passed in the call to the agreement creation API. <strong>Note:</strong> The externalId value is visible to all participants through the API, so should not be used to contain a sensitive token. |         |
| Group ID               | The group identifier, as returned by the group creation API or retrieved from the API to fetch groups.                                                                                                                                                                                                 |         |
| Show Hidden Agreements | When true, fetches all the hidden agreements along with the visible agreements. Default value is false.                                                                                                                                                                                                | false   |

### List Group Events {#listgroupevents}

Retrieves all events for a group.

| Input      | Comments                                                                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Adobe Acrobat Sign connection to use.                                                                                                    |         |
| Group ID   | The unique identifier of the group.                                                                                                          |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                      | true    |
| Pagination | Page and page-size controls.                                                                                                                 |         |
| Cursor     | Used to navigate through pagination. If not provided, it will default to the first page. Only applied when Fetch All is false.               |         |
| Page Size  | The number of results to return per page. If not provided, it is decided by your application settings. Only applied when Fetch All is false. |         |

### List Groups {#listgroups}

Retrieves a list of groups in the Adobe Acrobat Sign account.

| Input      | Comments                                                                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Adobe Acrobat Sign connection to use.                                                                                                    |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                      | true    |
| Pagination | Page and page-size controls.                                                                                                                 |         |
| Cursor     | Used to navigate through pagination. If not provided, it will default to the first page. Only applied when Fetch All is false.               |         |
| Page Size  | The number of results to return per page. If not provided, it is decided by your application settings. Only applied when Fetch All is false. |         |

### List Group Users {#listgroupusers}

Retrieves all the users in a group.

| Input      | Comments                                                                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Adobe Acrobat Sign connection to use.                                                                                                    |         |
| Group ID   | The unique identifier of the group.                                                                                                          |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                      | true    |
| Pagination | Page and page-size controls.                                                                                                                 |         |
| Cursor     | Used to navigate through pagination. If not provided, it will default to the first page. Only applied when Fetch All is false.               |         |
| Page Size  | The number of results to return per page. If not provided, it is decided by your application settings. Only applied when Fetch All is false. |         |

### List Users {#listusers}

Retrieves all the users in an account.

| Input      | Comments                                                                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Adobe Acrobat Sign connection to use.                                                                                                    |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                      | true    |
| Pagination | Page and page-size controls.                                                                                                                 |         |
| Cursor     | Used to navigate through pagination. If not provided, it will default to the first page. Only applied when Fetch All is false.               |         |
| Page Size  | The number of results to return per page. If not provided, it is decided by your application settings. Only applied when Fetch All is false. |         |

### List Webhooks {#listwebhooks}

Retrieves webhooks for a user.

| Input                  | Comments                                                                                                                                     | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Adobe Acrobat Sign connection to use.                                                                                                    |         |
| Fetch All              | When true, automatically fetches all pages of results using pagination.                                                                      | true    |
| Pagination             | Page and page-size controls.                                                                                                                 |         |
| Cursor                 | Used to navigate through pagination. If not provided, it will default to the first page. Only applied when Fetch All is false.               |         |
| Page Size              | The number of results to return per page. If not provided, it is decided by your application settings. Only applied when Fetch All is false. |         |
| Show Inactive Webhooks | When true, fetches all the inactive webhooks along with the active webhooks. Default value is false.                                         | false   |
| Scope                  | Filter for webhooks with a specific scope.                                                                                                   |         |
| Webhook Resource Type  | The type of resource being accessed. <strong>Note:</strong> Only specify if scope is Resource.                                               |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to Adobe Acrobat Sign.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Adobe Acrobat Sign connection to use.                                                                                                                                                        |         |
| URL                     | Input the path only (/agreements). The base URL is already included. For example, in order to send an agreements request, only /agreements is entered in this field.                             |         |
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

### Search Resources {#searchresources}

Retrieves, searches, filters, and sorts agreements for the authenticated user.

| Input                        | Comments                                                                                                                                                                                                                                                                                                                                           | Default |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The Adobe Acrobat Sign connection to use.                                                                                                                                                                                                                                                                                                          |         |
| Ownership Scope              | Ownership scope of the agreement documents to include in this search request. Default is 'OWNED'.                                                                                                                                                                                                                                                  |         |
| External ID                  | A filter against case-sensitive external id for which you would like to retrieve agreement asset information. External id is passedin the call to the agreement asset creation API. Supply them in acomma-separated manner.                                                                                                                        |         |
| Group ID                     | A filter against group identifier(s), as returned by the group creation API or retrieved from the API to fetch groups.                                                                                                                                                                                                                             |         |
| Asset ID(s)                  | A filter against case-sensitive agreement asset ID for which you would like to retrieve the information.                                                                                                                                                                                                                                           |         |
| Library Document ID          | A filter against case-sensitive library document ID that was used to create an agreement. This filter will only apply for the sender of the agreement since signers don't have the knowledge of how the agreement was created. Also, this filter only applies to library documents with type DOCUMENT but not FORM_FIELD_LAYER.                    |         |
| Page Size                    | The number of results to return per page. If not provided, it is decided by your application settings.                                                                                                                                                                                                                                             |         |
| Parent ID                    | A filter against case-sensitive parent ID for which you would like to retrieve agreement asset information.                                                                                                                                                                                                                                        |         |
| Participant Email            | A filter against participant emails for which you would like to retrieve agreement asset information.                                                                                                                                                                                                                                              |         |
| Queryable Fields             | A list of field names against which string query specified in the 'query' field above is executed. For more information, see the <a href="https://helpx.adobe.com/sign/using/adobesign-search-users-agreements.html#NamePrefix">Acrobat Sign search documentation</a>.                                                                             |         |
| Role                         | A filter against the roles the user has on agreement assets.                                                                                                                                                                                                                                                                                       |         |
| Sort By Field                | Defines the field by which the results will be ordered.                                                                                                                                                                                                                                                                                            |         |
| Sort Order                   | Sets the direction of the order.                                                                                                                                                                                                                                                                                                                   |         |
| Start Index                  | 0-based first row (offset) of the search results to return. The value must be greater than or equal to 0 and less than 10000. If not provided, the default value is 0 and returns results from the very first row, without offset.                                                                                                                 |         |
| Status                       | A filter against the detailed status of the agreement asset. <strong>Note:</strong> PARTIAL and DRAFT agreements are not supported for search.                                                                                                                                                                                                     |         |
| Sub Types                    | A filter against the agreement asset sub types. Only agreement assets with type LIBRARY_TEMPLATE currently have this field populated.                                                                                                                                                                                                              |         |
| Type                         | A filter against the agreement asset type.                                                                                                                                                                                                                                                                                                         |         |
| User ID                      | A filter against the user for account sharing.                                                                                                                                                                                                                                                                                                     |         |
| Visibility                   | A filter indicating the visibility level of agreements that get returned in the response.                                                                                                                                                                                                                                                          |         |
| Workflow ID                  | A filter against case-sensitive workflow ID for which you would like to retrieve agreement asset information. Workflow ID is passed in the call to the agreement asset creation API.                                                                                                                                                               |         |
| Query                        | This field provides text search capability against terms in the field values of agreements that are visible to the user making the request. For more information about how text searching works, see the <a href="https://helpx.adobe.com/sign/using/adobesign-search-users-agreements.html#HowSearchWorks">Acrobat Sign search documentation</a>. |         |
| Created Greater Than Date    | The minimum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard. Range terms can be defined as less-than/greater-than or min/max. If terms are mixed the JSON will be considered malformed.                                                                                      |         |
| Expiration Greater Than Date | The minimum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard. Range terms can be defined as less-than/greater-than or min/max. If terms are mixed the JSON will be considered malformed.                                                                                      |         |
| Modified Greater Than Date   | The minimum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard.                                                                                                                                                                                                                 |         |
| Created Less Than Date       | The maximum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard. Range terms can be defined as less-than/greater-than or min/max. If terms are mixed the JSON will be considered malformed.                                                                                      |         |
| Expiration Less Than Date    | The maximum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard. Range terms can be defined as less-than/greater-than or min/max. If terms are mixed the JSON will be considered malformed.                                                                                      |         |
| Modified Less Than Date      | The maximum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard.                                                                                                                                                                                                                 |         |
| Created Max Date             | The maximum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard. Range terms can be defined as less-than/greater-than or min/max. If terms are mixed the JSON will be considered malformed.                                                                                      |         |
| Expiration Max Date          | The maximum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard. Range terms can be defined as less-than/greater-than or min/max. If terms are mixed the JSON will be considered malformed.                                                                                      |         |
| Modified Max Date            | The maximum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard.                                                                                                                                                                                                                 |         |
| Created Min Date             | The minimum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard. Range terms can be defined as less-than/greater-than or min/max.                                                                                                                                                |         |
| Expiration Min Date          | The minimum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard. Range terms can be defined as less-than/greater-than or min/max. If terms are mixed the JSON will be considered malformed.                                                                                      |         |
| Modified Min Date            | The minimum allowed date-time that is allowed in the result set. Values for each range field must adhere to the ISO-8601 standard.                                                                                                                                                                                                                 |         |

### Update Agreement {#updateagreement}

Updates the agreement in draft state, or update the expiration time on an existing agreement that is already out for signature.

| Input                         | Comments                                                                                                                                                                                                                                      | Default |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                    | The Adobe Acrobat Sign connection to use.                                                                                                                                                                                                     |         |
| Transient Document ID         | ID for a transient document that will be added to the agreement.                                                                                                                                                                              |         |
| Participant Set Info Role     | Role assumed by all participants in this set (signer, approver, etc.).                                                                                                                                                                        |         |
| Agreement Name                | Name of the Agreement that will be used to identify it.                                                                                                                                                                                       |         |
| Participant Member Info Email | Email address of the participant.                                                                                                                                                                                                             |         |
| Signature Type                | The type of signature you would like to request - written or e-signature.                                                                                                                                                                     |         |
| Agreement State               | State of the agreement.                                                                                                                                                                                                                       |         |
| Expiration Date               | A range filter against the agreement expiration date. Format would be date-time with an offset from UTC/Greenwich in the ISO-8601 format, such as 2007-12-03T10:15:30+01:00. Range terms can be defined as less-than/greater-than or min/max. |         |
| Agreement ID                  | The agreement identifier, as returned by the agreement creation API or retrieved from the API to fetch agreements.                                                                                                                            |         |

### Update Group {#updategroup}

Updates an existing group.

| Input            | Comments                                                              | Default |
| ---------------- | --------------------------------------------------------------------- | ------- |
| Connection       | The Adobe Acrobat Sign connection to use.                             |         |
| Group ID         | The unique identifier of the group.                                   |         |
| Group Name       | The name of the group.                                                |         |
| Created          | Date of creation of the group. Format would be yyyy-MM-dd'T'HH:mm:ssZ |         |
| Is Default Group | When true, the group is the default group.                            |         |

### Update User {#updateuser}

Updates a user in the Adobe Acrobat Sign system.

| Input             | Comments                                                                                            | Default |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Adobe Acrobat Sign connection to use.                                                           |         |
| Email             | The email address of the user to be created.                                                        |         |
| First Name        | The first name of the user.                                                                         |         |
| Last Name         | The last name of the user.                                                                          |         |
| Initials          | The initials of the user.                                                                           |         |
| Phone             | The phone number of the user.                                                                       |         |
| User ID           | The user identifier, as returned by the user creation API or retrieved from the API to fetch users. |         |
| Status            | Status of the user.                                                                                 |         |
| Additional Fields | Additional optional fields.                                                                         |         |
| Locale            | The locale of the user.                                                                             |         |
| Title             | The job title of the user.                                                                          |         |
| Company           | The company of the user.                                                                            |         |

### Update Webhook {#updatewebhook}

Updates a webhook.

| Input                                            | Comments                                                                                            | Default |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------- | ------- |
| Connection                                       | The Adobe Acrobat Sign connection to use.                                                           |         |
| Webhook ID                                       | The webhook identifier, as returned by the Adobe Sign Webhook API.                                  |         |
| Webhook Subscription Events                      | The list of events for which the webhook subscription is being made.                                |         |
| Scope                                            | Scope of the webhook.                                                                               |         |
| Webhook Name                                     | The name of the webhook.                                                                            |         |
| Webhook URL                                      | The URL to which the webhook payload is to be delivered.                                            |         |
| Webhook Application                              | The application name and display name through which the webhook is created.                         |         |
| Application Name                                 | The name of the application through which the webhook is created.                                   |         |
| Application Display Name                         | The name of the application through which the webhook is created.                                   |         |
| Problem Notification Emails                      | The list of email addresses to which the webhook problem notifications are sent.                    |         |
| Webhook Agreement Conditional Parameters         | Optional parameters to include additional information in the webhook payload for agreements.        |         |
| Webhook Library Documents Conditional Parameters | Optional parameters to include additional information in the webhook payload for library documents. |         |
| Webhook MegaSign Conditional Parameters          | Optional parameters to include additional information in the webhook payload for MegaSign.          |         |
| Webhook Widget Conditional Parameters            | Optional parameters to include additional information in the webhook payload for widgets.           |         |
