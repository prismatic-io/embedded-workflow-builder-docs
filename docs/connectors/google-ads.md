---
title: Google Ads Connector
sidebar_label: Google Ads
description: Manage campaigns, conversions, customers, and local services in Google Ads.
---

![Google Ads](./assets/google-ads.png#connector-icon)
[Google Ads](https://business.google.com/us/google-ads/) is an online advertising platform that allows businesses to create and manage ad campaigns across Google Search, YouTube, and partner websites. This component allows managing campaigns, uploading conversions, handling customer accounts, and working with Local Services ads in Google Ads.

## API Documentation

This component was built using the [Google Ads API](https://developers.google.com/google-ads/api/docs/get-started/introduction), currently utilizing v25 by default. Every version Google still supports (v22 through v25) can be selected by specifying the API Version in the connection.

## EU Political Advertising Self-Declaration (v22+)

When using API v22 or later, the `containsEuPoliticalAdvertising` field must be set when:

- Creating new campaigns
- Modifying location or proximity targeting on existing campaigns

This field is required and accepts one of the following values:

- `CONTAINS_EU_POLITICAL_ADVERTISING`: Campaign contains EU political advertising.
- `DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING`: Campaign does not contain EU political advertising.
- `UNSPECIFIED` or `UNKNOWN`: Use when the value is unknown or indeterminate.

Failure to set this field will result in a `FieldError.REQUIRED` error from the API.

## Connections

### Data Manager OAuth 2.0 {#datamanageroauth}

Authenticate to the Google Data Manager API using OAuth 2.0. Use this connection for the Ingest Offline Conversions action. A Developer Token is not required for this API.

This connection uses OAuth 2.0 to connect to the Google [Data Manager API](https://developers.google.com/data-manager/api). Use this connection for the **Ingest Offline Conversions** action. A Developer Token is **not** required for the Data Manager API.

#### Prerequisites

- A [Google Developer account](https://console.cloud.google.com/) with permission to manage APIs and OAuth credentials
- A Google Ads account that owns the conversion actions to ingest into
- The numeric **Customer ID** of the Google Ads account that will receive the offline conversions (configured per-action, not on the connection)

#### Setup Steps

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/) and select or create a project.
1. Select **APIs & Services** -> **Enabled APIs & services** from the left hand menu.
1. Click **Enable APIs and Services** at the top of the screen.
1. Search for "data manager api" and select **Data Manager API** in the results.
1. Click the **Enable** button to add the API to the project.
1. From the sidebar, select **Credentials**.
1. An OAuth 2.0 app requires a "Consent Screen". Click **CONFIGURE CONSENT SCREEN**.
   1. The app will be externally available to customers, so choose a **User Type** of **External**.
   1. Fill out the OAuth consent screen with an app name, support email, app logo, and authorized domain.
   1. On the next page, add the `https://www.googleapis.com/auth/datamanager` scope to the app.
   1. Enter **test users** for testing purposes. The app will only work for those testing users until it is "verified" by Google. When ready for verification, click **PUBLISH APP** on the **OAuth consent screen**.
1. Once the "Consent Screen" is configured, open the **Credentials** page from the sidebar again.
1. Click **+CREATE CREDENTIALS** and select **OAuth client ID**.
   1. Under **Application type** select **Web application**.
   1. Under **Authorized redirect URIs** enter the OAuth 2.0 callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   1. Click **CREATE**.
1. Take note of the **Client ID** and **Client Secret** that are generated.

#### Configure the Connection

Create a connection of type **Data Manager OAuth 2.0** and provide the following values:

- **Client ID**: From the Google Cloud Console OAuth client credentials
- **Client Secret**: From the Google Cloud Console OAuth client credentials
- **API Version**: The Google Data Manager API version to use. Defaults to `v1`. Refer to the [Data Manager API reference](https://developers.google.com/data-manager/api/reference/rest) for the latest version.

After entering the credentials, authorize the connection by signing in with the Google account that has access to the target Google Ads account.

:::note[No Developer Token]
Unlike the standard Google Ads connection, the Data Manager API does not require a Developer Token. The `developer-token` header is not sent on requests made by this connection.
:::

#### Supported API Versions

The component supports the following Google Data Manager API versions through the **API Version** connection field:

| Version | Status                |
| ------- | --------------------- |
| **v1**  | Recommended (default) |

Refer to the official [Data Manager API release notes](https://ads-developers.googleblog.com/search/label/data_manager_api) for the latest version information.

#### App Verification

Google requires OAuth apps that request access to user data to pass a verification review before being deployed at scale. This process ensures the app complies with Google's API Services User Data Policy, accurately represents its functionality, and handles user data responsibly.

Google OAuth apps pass through three stages before they are ready for production use.

**Testing (unpublished):** The app is only accessible to users manually added as test users in the OAuth consent screen. Up to 100 test users are allowed. All other users receive an error. This is the expected state during initial development.

**Published, unverified:** After publishing the app, all Google users can authenticate. However, for sensitive scopes, users see a **"This app isn't verified"** warning. Users can proceed by clicking **Advanced** -> **Go to [app name] (unsafe)**, but this warning reduces trust and may be blocked by organizations with strict Google Workspace policies.

**Verified:** Google has reviewed and approved the app. No warning is shown. Verification is required before deploying to production users.

#### Publishing the App

Publishing is required before any users outside the test list can authenticate:

1. In the [Google Cloud Console](https://console.cloud.google.com/), navigate to **APIs & Services** -> **OAuth consent screen**
2. Click **PUBLISH APP** and confirm

#### Requesting Verification

The `datamanager` scope used by this connection is classified as **sensitive** by Google. Submitting for verification removes the "This app isn't verified" warning:

1. On the **OAuth consent screen**, click **Prepare for verification**
2. Provide a privacy policy URL, authorized domain, and app logo
3. Submit for review. Google typically responds within several weeks.

Refer to [Google's OAuth consent screen documentation](https://support.google.com/cloud/answer/10311615) for the full verification requirements.

#### Verify Connection

Save the integration to authenticate. After authorizing, run the **Ingest Offline Conversions** action with **Validate Only** enabled to confirm the connection and payload are valid without ingesting live data.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                  | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Client ID     | The Client ID for the Google Data Manager API application. Obtain from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).     |         |
| Client Secret | The Client Secret for the Google Data Manager API application. Obtain from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials). |         |
| API Version   | The version of the Google Data Manager API to use. Defaults to v1. See [API reference](https://developers.google.com/data-manager/api/reference/rest).    | v1      |

### OAuth 2.0 {#oauth}

Authenticate using OAuth 2.0.

This component uses OAuth 2.0 to connect to the Google Ads API.

#### Prerequisites

- A [Developer Token](https://developers.google.com/google-ads/api/docs/api-policy/developer-token) is required to work with Google Ads
- The Customer ID of the Ads Manager account (the hyphenated number in the top-left corner of the Ads app) must be noted
- A [Google Developer account](https://console.cloud.google.com/) is required

#### Setup Steps

The Developer Token is obtained from a Google Ads Manager account:

1. Sign in to [Google Ads](https://ads.google.com/) with the Google account that will be used for the integration
1. Click **Tools & Settings** in the top right corner
1. Under **Setup**, click **API Center**
1. In the **Developer token** section, click **Create token** or view the existing token
1. Copy and save the **Developer Token** value securely
1. Take note of the **Customer ID** displayed in the top-right corner of Google Ads (XXX-XXX-XXXX). This will be needed when configuring the connection.

#### Configure Google Cloud Project

1. Access the project selector in the top-left and select an existing project or create a new one.
1. Select **APIs & Services** -> **Enabled APIs & services** from the left hand menu
1. Click **Enable APIs and Services** towards the top of the screen
1. Search for "google ads api" and select **Google Ads API** in the results (avoid selecting AdWords as that is deprecated)
1. Click the **Enable** button to add the API to the project
1. On the sidebar, select **Credentials**.
1. An OAuth 2.0 app includes a "Consent Screen". Click **CONFIGURE CONSENT SCREEN**.
   1. The app will be externally available to customers, so choose a **User Type** of **External**.
   1. Fill out the OAuth consent screen with an app name, support email, app logo, domain, etc.
   1. On the next page, add the `https://www.googleapis.com/auth/adwords` scope to the app.
   1. Enter some **test users** for testing purposes.
      The app will only work for those testing users until it is "verified" by Google.
      When ready for verification, click **PUBLISH APP** on the **OAuth consent screen**.
      That will allow customers to authorize the integration to access their Google Ads.
1. Once the "Consent Screen" is configured, open the **Credentials** page from the sidebar again.
1. Click **+CREATE CREDENTIALS** and select **OAuth client ID**.
   1. Under **Application type** select **Web application**.
   1. Under **Authorized redirect URIs** enter the OAuth 2.0 callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   1. Click **CREATE**.
1. Take note of the **Client ID** and **Client Secret** that are generated.

#### Configure the Connection

Create a connection of type **OAuth 2.0** and provide the following values:

- **Client ID**: From the Google Cloud Console OAuth client credentials
- **Client Secret**: From the Google Cloud Console OAuth client credentials
- **Developer Token**: From the Google Ads API Center
- **API Version**: The Google Ads API version to use. Refer to the [Google Ads API release notes](https://developers.google.com/google-ads/api/docs/release-notes) for the latest version.
- **Scopes**: Defaults to `https://www.googleapis.com/auth/adwords`. Refer to [Google's OAuth 2.0 scopes documentation](https://developers.google.com/identity/protocols/oauth2/scopes) for additional scope information.

#### Supported API Versions

The component supports the following Google Ads API versions through the **API Version** connection field. Versions below the minimum are automatically upgraded to the minimum supported version.

The minimum tracks Google's own sunset schedule, so every version Google still supports can be selected here.

| Version         | Status in this component             | Google Sunset                                                  |
| --------------- | ------------------------------------ | -------------------------------------------------------------- |
| **v25**         | Recommended (default)                | August 2027                                                    |
| **v24**         | Supported                            | May 2027                                                       |
| **v23**         | Supported                            | February 2027                                                  |
| **v22**         | Supported (minimum)                  | October 2026 (tentative)                                       |
| v21 and earlier | Not selectable: auto-upgraded to v22 | v21: August 2026 (tentative) · v20 and earlier: already sunset |

Because v22 is the minimum, the EU Political Advertising self-declaration requirement (v22 and later) applies to every version this component can use.

Google publishes nearer-term sunsets as tentative and firms them up closer to the date, so treat these as subject to change. v22 in particular retires in October 2026. Minor releases (for example v25.1) do not need to be selected here; Google updates the major-version endpoint automatically. See the official [deprecation and sunset schedule](https://developers.google.com/google-ads/api/docs/sunset-dates) for the latest information.

After entering the credentials, authorize the connection by signing in with the Google account used to create the Developer Token and OAuth credentials.

#### Passkey Requirement

Beginning **August 5, 2026**, Google requires a passkey to authorize new Google Ads API access. Passwords alone and 2-factor methods such as authenticator app codes or SMS codes are no longer accepted for this step.

What this means when setting up a connection:

- **Existing connections keep working.** Refresh tokens issued before this change continue to function, and no reauthorization is prompted.
- **New authorizations require a passkey.** Anyone authorizing the connection for the first time is prompted to create one if their account does not already have it.
- **Plan for a delay.** A newly created passkey may take up to **7 days** to become trusted and usable. Create the passkey in advance of configuring the connection to avoid being blocked mid-setup.

To create a passkey, visit [Google's passkeys page](https://www.google.com/account/about/passkeys/), then follow the prompts for the device being used. Full details are in [Google's announcement](https://ads-developers.googleblog.com/2026/07/passkey-authentication-requirement-for.html).

#### App Verification

Google requires OAuth apps that request access to user data to pass a verification review before being deployed at scale. This process ensures the app complies with Google's API Services User Data Policy, accurately represents its functionality, and handles user data responsibly.

Google OAuth apps pass through three stages before they are ready for production use.

**Testing (unpublished):** The app is only accessible to users manually added as test users in the OAuth consent screen. Up to 100 test users are allowed. All other users receive an error. This is the expected state during initial development.

**Published, unverified:** After publishing the app, all Google users can authenticate. However, for sensitive scopes, users see a **"This app isn't verified"** warning. Users can proceed by clicking **Advanced** → **Go to [app name] (unsafe)**, but this warning reduces trust and may be blocked by organizations with strict Google Workspace policies.

**Verified:** Google has reviewed and approved the app. No warning is shown. Verification is required before deploying to production users.

#### Publishing the App

Publishing is required before any users outside the test list can authenticate:

1. In the [Google Cloud Console](https://console.cloud.google.com/), navigate to **APIs & Services** → **OAuth consent screen**
2. Click **PUBLISH APP** and confirm

#### Requesting Verification

The scopes used by this component are classified as **sensitive** by Google. Submitting for verification removes the "This app isn't verified" warning:

1. On the **OAuth consent screen**, click **Prepare for verification**
2. Provide a privacy policy URL, authorized domain, and app logo
3. Submit for review. Google typically responds within several weeks

Refer to [Google's OAuth consent screen documentation](https://support.google.com/cloud/answer/10311615) for the full verification requirements.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                                                                                                                                                                                                                                                                                                                            | Default                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Scopes          | Space-separated OAuth 2.0 permission scopes for the Google Ads and Data Manager APIs. See [OAuth scopes documentation](https://developers.google.com/identity/protocols/oauth2/scopes).                                                                                                                                                             | https://www.googleapis.com/auth/adwords |
| Client ID       | The Client ID for the Google Ads API application. Obtain from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).                                                                                                                                                                                                        |                                         |
| Client Secret   | The Client Secret for the Google Ads API application. Obtain from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).                                                                                                                                                                                                    |                                         |
| Developer Token | The Developer Token for the Google Ads Manager account. Obtain from the [Google Ads API Center](https://ads.google.com/aw/apicenter).                                                                                                                                                                                                               |                                         |
| API Version     | The version of the Google Ads API to use. Defaults to v25. Any version from v22 through v25 can be set explicitly; anything below v22 has already been sunset by Google and is automatically upgraded to v22. Note: v22 sunsets in October 2026. See [API versions documentation](https://developers.google.com/google-ads/api/docs/release-notes). | v25                                     |

## Triggers

### Account Change History {#changehistorytrigger}

Checks for Google Ads account modifications with user attribution on a configured schedule.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Resource Types      | Types of resources to track changes for. Leave empty to track all resource types.                                                                                                                                                                                                                                                                        |         |
| Include User Info   | When true, user email and client type will be included in change events.                                                                                                                                                                                                                                                                                 | true    |

### Campaign Budget Alerts {#budgetalerttrigger}

Checks for campaigns approaching or exceeding budget thresholds on a configured schedule.

| Input                  | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID            | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Manager Customer ID    | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Alert Threshold (%)    | Budget spend percentage at which to trigger an alert.                                                                                                                                                                                                                                                                                                    | 80      |
| Include Shared Budgets | When true, shared budgets across multiple campaigns will be monitored.                                                                                                                                                                                                                                                                                   | true    |

### New and Updated Campaigns {#campaignchangestrigger}

Checks for new and updated campaigns in a Google Ads account on a configured schedule.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID             | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Manager Customer ID     | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Change Types to Monitor | Types of campaign changes to detect. Leave empty to detect all change types.                                                                                                                                                                                                                                                                             |         |

## Actions

### Confirm Client Link {#confirmclientlink}

Confirms a pending customer client link.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Manager Link ID     | The unique identifier of the manager link. See [Customer manager link documentation](https://developers.google.com/google-ads/api/reference/rpc/latest/CustomerManagerLink).                                                                                                                                                                             |         |

### Create Client Link {#createclientlink}

Create an invitation to link a client account to a manager account.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |

### Get Account Reports {#accountreports}

Retrieves account reports showing performance and metrics for Local Services accounts linked to a Manager account.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Pagination          | Page size and cursor controls for the result set.                                                                                                                                                                                                                                                                                                        |         |
| Page Size           | The maximum number of results to return per page.                                                                                                                                                                                                                                                                                                        | 1000    |
| Page Token          | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |         |
| Customer IDs        | The Google Ads customer IDs to filter the Local Services report. Leave empty to include all accessible customers.                                                                                                                                                                                                                                        |         |
| Start Date          | The start date of the date range, inclusive. Format: MM-DD-YYYY.                                                                                                                                                                                                                                                                                         |         |
| End Date            | The end date of the date range, inclusive. Format: MM-DD-YYYY.                                                                                                                                                                                                                                                                                           |         |

### Get Conversion Action {#getconversionaction}

Retrieve Conversion Action data for a customer account.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Page Token          | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |         |

### Get Customer {#getcustomer}

Retrieve Customer data for a customer account.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Page Token          | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |         |

### Get Detailed Lead Reports {#detailedleadreports}

Retrieves detailed lead reports providing an in-depth view of leads for Local Services accounts linked to a Manager account.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Pagination          | Page size and cursor controls for the result set.                                                                                                                                                                                                                                                                                                        |         |
| Page Size           | The maximum number of results to return per page.                                                                                                                                                                                                                                                                                                        | 1000    |
| Page Token          | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |         |
| Customer IDs        | The Google Ads customer IDs to filter the Local Services report. Leave empty to include all accessible customers.                                                                                                                                                                                                                                        |         |
| Start Date          | The start date of the date range, inclusive. Format: MM-DD-YYYY.                                                                                                                                                                                                                                                                                         |         |
| End Date            | The end date of the date range, inclusive. Format: MM-DD-YYYY.                                                                                                                                                                                                                                                                                           |         |

### Ingest Offline Conversions {#ingestofflineconversions}

Import offline conversion events into Google Ads using the Data Manager API.

| Input         | Comments                                                                                                                                                                                | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Google Ads connection to use.                                                                                                                                                       |         |
| Events        | The array of conversion events to ingest (max 2000 per request). See [Event resource](https://developers.google.com/data-manager/api/reference/rest/v1/events/ingest).                  |         |
| Destinations  | The array of destinations that describe where each event should be ingested. See [Destination reference](https://developers.google.com/data-manager/api/reference/rest/v1/Destination). |         |
| Hash Encoding | The encoding format to select for hashed user data fields (such as email or phone). Required when `userData` fields are included in events.                                             |         |
| Validate Only | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                            | false   |

### Invite User {#inviteuser}

Invites a user by email to a customer.

| Input         | Comments                                                                                                                                                                                                     | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    | The Google Ads connection to use.                                                                                                                                                                            |         |
| Customer ID   | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Email Address | The email address of the user to invite to the customer account.                                                                                                                                             |         |
| Access Role   | The access role to grant to the user. See [Access roles documentation](https://developers.google.com/google-ads/api/reference/rpc/latest/AccessRoleEnum.AccessRole).                                         |         |

### List Accessible Customers {#listaccessiblecustomers}

Gets a list of customers accessible to the authenticated user.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Google Ads connection to use. |         |

### List Customers by Manager {#listcustomers}

Lists all customers under a manager account.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Fetch All           | When true, automatically fetches all pages of results. When false, only the first page of results will be returned.                                                                                                                                                                                                                                      | false   |
| Page Token          | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |         |

### Mutate Campaign {#mutatecampaign}

Creates, updates, or removes campaigns as well as local services campaigns. Operation statuses are returned. When using API v22+, the containsEuPoliticalAdvertising field is required for campaign creation and location targeting changes.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                        | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Operations          | The list of operations to perform on individual campaigns. See [Campaign operations documentation](https://developers.google.com/google-ads/api/reference/rpc/latest/CampaignOperation).                                                                                                                                                                        | <code>[<br /> {<br /> "updateMask": "status,name",<br /> "create": {<br /> "name": "Example Campaign",<br /> "advertisingChannelType": "SEARCH",<br /> "status": "PAUSED",<br /> "campaignBudget": "customers/1234567890/campaignBudgets/9876543210"<br /> },<br /> "update": {<br /> "resourceName": "customers/1234567890/campaigns/1122334455",<br /> "status": "ENABLED"<br /> },<br /> "remove": "customers/1234567890/campaigns/1122334455"<br /> }<br />]</code> |
| Partial Failure     | When true, successful operations will be carried out and invalid operations will return errors. When false, all operations will be carried out in one transaction if and only if they are all valid. This should always be set to true. See [Partial failure documentation](https://developers.google.com/google-ads/api/docs/best-practices/partial-failures). | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Validate Only       | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                                                                    | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Mutate Campaign Criteria {#mutatecampaigncriteria}

Creates, updates, or removes campaign criteria as well as local services campaign criterion. Operation statuses are returned. When using API v22+, the containsEuPoliticalAdvertising field must be set on the parent campaign before modifying location or proximity targeting criteria.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                        | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Operations          | The list of operations to perform on individual campaigns. See [Campaign operations documentation](https://developers.google.com/google-ads/api/reference/rpc/latest/CampaignOperation).                                                                                                                                                                        | <code>[<br /> {<br /> "updateMask": "bidModifier",<br /> "create": {<br /> "campaign": "customers/1234567890/campaigns/1122334455",<br /> "location": {<br /> "geoTargetConstant": "geoTargetConstants/1014044"<br /> }<br /> },<br /> "update": {<br /> "resourceName": "customers/1234567890/campaignCriteria/1122334455~~987654321",<br /> "bidModifier": 1.5<br /> },<br /> "remove": "customers/1234567890/campaignCriteria/1122334455~~987654321"<br /> }<br />]</code> |
| Partial Failure     | When true, successful operations will be carried out and invalid operations will return errors. When false, all operations will be carried out in one transaction if and only if they are all valid. This should always be set to true. See [Partial failure documentation](https://developers.google.com/google-ads/api/docs/best-practices/partial-failures). | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Validate Only       | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                                                                    | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the Google Ads API.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                             | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| URL                     | Input the path only (/v25/customers:listAccessibleCustomers), The base URL is already included (https://googleads.googleapis.com). For example, to connect to https://googleads.googleapis.com/v25/customers:listAccessibleCustomers, only /v25/customers:listAccessibleCustomers is entered in this field. Note: When using the Raw Request action, the API version must be specified in the path (e.g., /v25/) to override the connection default. | /v25/   |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                                                                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                                                                                                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                                                                                                                                        | false   |

### Search Ads {#searchadslocalservices}

Returns rows matching a GAQL query against Google Ads resources.

| Input                      | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID                | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Query                      | Google Ads Query Language (GAQL) query string. See [GAQL documentation](https://developers.google.com/google-ads/api/docs/query/overview).                                                                                                                                                                                                               |         |
| Fetch All                  | When true, automatically fetches all pages of results. When false, only the first page of results will be returned.                                                                                                                                                                                                                                      | false   |
| Page Token                 | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |         |
| Manager Customer ID        | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Return Total Results Count | When true, the total number of results that match the query ignoring the LIMIT clause will be included in the response. Default is false.                                                                                                                                                                                                                | false   |

### Upload Call Conversions {#uploadcallconversions}

Upload offline call conversions into Google Ads in order to track ads that led to sales.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Conversions         | The conversions that are being uploaded. See [Click conversions documentation](https://developers.google.com/google-ads/api/docs/conversions/upload-clicks).                                                                                                                                                                                             |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Validate Only       | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                                                             | false   |

### Upload Click Conversions {#uploadclickconversions}

Upload offline click conversions into Google Ads in order to track ads that led to sales. This action will stop working after June 15, 2026. Use Ingest Offline Conversions instead.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Conversions         | The conversions that are being uploaded. See [Click conversions documentation](https://developers.google.com/google-ads/api/docs/conversions/upload-clicks).                                                                                                                                                                                             |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Validate Only       | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                                                             | false   |
