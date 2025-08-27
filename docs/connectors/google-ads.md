---
title: Google Ads Connector
sidebar_label: Google Ads
description: Manage Google Ad and Local Ad campaigns
---

![Google Ads](./assets/google-ads.png#connector-icon)
Manage Google Ad and Local Ad campaigns

## Connections

### OAuth 2.0

OAuth 2.0 connection

This component uses OAuth 2.0 to connect to the Google Ads API.
To begin working with Google Ads you will need a [Developer Token](https://developers.google.com/google-ads/api/docs/first-call/dev-token).
You will also need to make note of the Customer ID of the Ads Manager account (the hyphenated number in the top-left corner of the Ads app).

Next, you will need to create a GCP OAuth 2.0 app. To create one you will need to ensure you have a [Google Developer account](https://console.cloud.google.com/).
Then:

1. Access the project selector in the top-left and select an existing project or create a new one.
1. Select **APIs & Services** -> **Enabled APIs & services** from the left hand menu
1. Click **Enable APIs and Services** towards the top of the screen
1. Search for "google ads api" and select **Google Ads API** in the results (avoid selecting AdWords as that is deprecated)
1. Click the **Enable** button to add the API to your project
1. On the sidebar, select **Credentials**.
1. An OAuth 2.0 app includes a "Consent Screen" (the page that asks "Do you want to allow (Your Company) to access Google Drive on your behalf?"). Click **CONFIGURE CONSENT SCREEN**.
   1. Your app will be externally available to your customers, so choose a **User Type** of **External**.
   1. Fill out the OAuth consent screen with an app name (your company or product's name), support email, app logo, domain, etc.
   1. You can ignore domains for now.
   1. On the next page, add the `https://www.googleapis.com/auth/adwords` scope to your app.
   1. Enter some **test users** for your testing purposes.
      Your app will only work for those testing users until it is "verified" by Google.
      When you are ready for verification (they verify your privacy policy statement, etc), click **PUBLISH APP** on the **OAuth consent screen**.
      That'll allow your customers to authorize your integration to access their Google Drive.
1. Once your "Consent Screen" is configured open the **Credentials** page from the sidebar again.
1. Click **+CREATE CREDENTIALS** and select **OAuth client ID**.
   1. Under **Application type** select **Web application**.
   1. Under **Authorized redirect URIs** enter the OAuth 2.0 callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   1. Click **CREATE**.
1. Take note of the **Client ID** and **Client Secret** that are generated.

:::info
Make sure to **publish** your OAuth 2.0 app after you've tested it so users outside of your _test users_ can authorize your integration to interact with Google Drive on their behalf.
:::

Now that you have a **Client ID** and **Client Secret**, add Google Ads step to your flow.
Open the **Configuration Wizard Designer** by clicking **Configuration Wizard**, select your **Google Ads Connection** and enter your client ID and secret.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                        | Default |
| --------------- | ----------------------------------------------- | ------- |
| Client ID       | Client Identifier of your app for the API       |         |
| Client Secret   | Client Secret of your app for the API           |         |
| Developer Token | Developer token of your Account Manager account |         |
| API Version     | The version of the Google Ads API to use.       | v19     |

## Actions

### Account Reports

Account Reports show the performance and metrics associated with the linked Local Services accounts of a Manager account.

| Input               | Comments                                                                                                                                                                                                                                                                                                       | Default                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection          |                                                                                                                                                                                                                                                                                                                |                         |
| Manager Customer ID | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |                         |
| Customer IDs        | A list of customer IDs.                                                                                                                                                                                                                                                                                        | <code>["000xxx"]</code> |
| Page Size           | Numerical value indicating desired page size of paginated results.                                                                                                                                                                                                                                             | 1000                    |
| Page Token          | Identifier of which page of results to return. This is returned with paginated results.                                                                                                                                                                                                                        |                         |
| Start Date          | The start date of the date range, inclusive. MM-DD-YYYY format.                                                                                                                                                                                                                                                | 01-01-2023              |
| End Date            | The end date of the date range, inclusive. MM-DD-YYYY format.                                                                                                                                                                                                                                                  | 01-01-2023              |

### Confirm Client Link

Confirm a pending customer client link

| Input               | Comments                                                                                                                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                                                                                |         |
| Manager Customer ID | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |         |
| Customer ID         | Customer ID of the Google Ads Client account; accepts hyphenated or number forms.                                                                                                                                                                                                                              |         |
| Manager Link ID     |                                                                                                                                                                                                                                                                                                                |         |

### Create Client Link

Create an invitation to link a client account to a manager account

| Input               | Comments                                                                                                                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                                                                                |         |
| Manager Customer ID | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |         |
| Customer ID         | Customer ID of the Google Ads Client account; accepts hyphenated or number forms.                                                                                                                                                                                                                              |         |

### Detailed Lead Reports

Detailed Lead Reports show an in-depth view of leads associated with the linked Local Services accounts of a Manager account.

| Input               | Comments                                                                                                                                                                                                                                                                                                       | Default                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection          |                                                                                                                                                                                                                                                                                                                |                         |
| Manager Customer ID | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |                         |
| Customer IDs        | A list of customer IDs.                                                                                                                                                                                                                                                                                        | <code>["000xxx"]</code> |
| Page Size           | Numerical value indicating desired page size of paginated results.                                                                                                                                                                                                                                             | 1000                    |
| Page Token          | Identifier of which page of results to return. This is returned with paginated results.                                                                                                                                                                                                                        |                         |
| Start Date          | The start date of the date range, inclusive. MM-DD-YYYY format.                                                                                                                                                                                                                                                | 01-01-2023              |
| End Date            | The end date of the date range, inclusive. MM-DD-YYYY format.                                                                                                                                                                                                                                                  | 01-01-2023              |

### Get Conversion Action

Get Conversion Action

| Input               | Comments                                                                                                                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                                                                                |         |
| Customer ID         | Customer ID of the Google Ads Client account; accepts hyphenated or number forms.                                                                                                                                                                                                                              |         |
| Manager Customer ID | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |         |
| Page Token          | Identifier of which page of results to return. This is returned with paginated results.                                                                                                                                                                                                                        |         |

### Get Customer

Get Customer

| Input               | Comments                                                                                                                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                                                                                |         |
| Customer ID         | Customer ID of the Google Ads Client account; accepts hyphenated or number forms.                                                                                                                                                                                                                              |         |
| Manager Customer ID | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |         |
| Page Token          | Identifier of which page of results to return. This is returned with paginated results.                                                                                                                                                                                                                        |         |

### Invite User

Invite a user by email to a customer

| Input         | Comments                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                   |         |
| Customer ID   | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. |         |
| Email Address | The email address to invite to the customer                                       |         |
| Access Role   |                                                                                   |         |

### List Accessible Customers

Get a list of customers accessible to the logged in user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Manager's Customers

List all customers under a manager account

| Input               | Comments                                                                                                                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                                                                                |         |
| Manager Customer ID | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |         |
| Page Token          | Identifier of which page of results to return. This is returned with paginated results.                                                                                                                                                                                                                        |         |

### Mutate Campaign

Creates, updates, or removes campaigns as well as local services campaigns. Operation statuses are returned.

| Input               | Comments                                                                                                                                                                                                                                                                                                       | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection          |                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Customer ID         | Customer ID of the Google Ads Client account; accepts hyphenated or number forms.                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Manager Customer ID | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Operations          | The list of operations to perform on individual campaigns.                                                                                                                                                                                                                                                     | <code>[<br /> {<br /> "updateMask": "string",<br /> "create": "refer to docs: https://developers.google.com/google-ads/api/rest/reference/rest/v15/Campaign",<br /> "update": "refer to docs: https://developers.google.com/google-ads/api/rest/reference/rest/v15/Campaign",<br /> "remove": "string"<br /> },<br /> {<br /> "updateMask": "string",<br /> "create": "refer to docs: https://developers.google.com/google-ads/api/rest/reference/rest/v15/Campaign",<br /> "update": "refer to docs: https://developers.google.com/google-ads/api/rest/reference/rest/v15/Campaign",<br /> "remove": "string"<br /> }<br />]</code> |
| Partial Failure     | If true, successful operations will be carried out and invalid operations will return errors. If false, all operations will be carried out in one transaction if and only if they are all valid. This should always be set to true.                                                                            | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Validate Only       | If true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                     | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Mutate Campaign Criteria

Creates, updates, or removes campaign criteria as well as local services campaign criterion. Operation statuses are returned.

| Input               | Comments                                                                                                                                                                                                                                                                                                       | Default                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          |                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                |
| Customer ID         | Customer ID of the Google Ads Client account; accepts hyphenated or number forms.                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                |
| Manager Customer ID | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |                                                                                                                                                                                                                                                                                                                                                |
| Operations          | The list of operations to perform on individual campaigns.                                                                                                                                                                                                                                                     | <code>[<br /> {<br /> "updateMask": "string",<br /> "create": "refer to docs: https://developers.google.com/google-ads/api/rest/reference/rest/v15/CampaignCriterion",<br /> "update": "refer to docs: https://developers.google.com/google-ads/api/rest/reference/rest/v15/CampaignCriterion",<br /> "remove": "string"<br /> }<br />]</code> |
| Partial Failure     | If true, successful operations will be carried out and invalid operations will return errors. If false, all operations will be carried out in one transaction if and only if they are all valid. This should always be set to true.                                                                            | false                                                                                                                                                                                                                                                                                                                                          |
| Validate Only       | If true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                     | false                                                                                                                                                                                                                                                                                                                                          |

### Raw Request

Send raw HTTP request to Google Ads

| Input                   | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                             |         |
| URL                     | Input the path only (/v16/customers:listAccessibleCustomers), The base URL is already included (https://googleads.googleapis.com). For example, to connect to https://googleads.googleapis.com/v16/customers:listAccessibleCustomers, only /v16/customers:listAccessibleCustomers is entered in this field. | /v16/   |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                     |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                   |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                        |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                            |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                      |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                         |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                 |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                    | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                         |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                               | false   |

### Search Ads

Returns all rows that match the search query. You can query for local services resources: https://developers.google.com/google-ads/api/docs/campaigns/local-service-campaigns#local_services_resources

| Input                      | Comments                                                                                                                                                                                                                                                                                                       | Default |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 |                                                                                                                                                                                                                                                                                                                |         |
| Customer ID                | Customer ID of the Google Ads Client account; accepts hyphenated or number forms.                                                                                                                                                                                                                              |         |
| Manager Customer ID        | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |         |
| Query                      | The query string.                                                                                                                                                                                                                                                                                              |         |
| Page Token                 | Identifier of which page of results to return. This is returned with paginated results.                                                                                                                                                                                                                        |         |
| Return Total Results Count | If true, the total number of results that match the query ignoring the LIMIT clause will be included in the response. Default is false.                                                                                                                                                                        | false   |

### Upload Call Conversions

Upload offline call conversions into Google Ads in order to track ads that led to sales

| Input               | Comments                                                                                                                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                                                                                |         |
| Customer ID         | Customer ID of the Google Ads Client account; accepts hyphenated or number forms.                                                                                                                                                                                                                              |         |
| Conversions         | The conversions that are being uploaded.                                                                                                                                                                                                                                                                       |         |
| Manager Customer ID | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |         |
| Validate Only       | If true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                     | false   |

### Upload Click Conversions

Upload offline click conversions into Google Ads in order to track ads that led to sales

| Input               | Comments                                                                                                                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                                                                                |         |
| Customer ID         | Customer ID of the Google Ads Client account; accepts hyphenated or number forms.                                                                                                                                                                                                                              |         |
| Conversions         | The conversions that are being uploaded.                                                                                                                                                                                                                                                                       |         |
| Manager Customer ID | Customer ID of the Google Ads Client account; accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid |         |
| Validate Only       | If true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                     | false   |
