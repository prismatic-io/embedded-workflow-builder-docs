---
title: Google Ads Connector
sidebar_label: Google Ads
description: Manage campaigns, conversions, customers, and local services in Google Ads.
---

![Google Ads](./assets/google-ads.png#connector-icon)
[Google Ads](https://business.google.com/us/google-ads/) is an online advertising platform that allows businesses to create and manage ad campaigns across Google Search, YouTube, and partner websites. This component allows managing campaigns, uploading conversions, handling customer accounts, and working with Local Services ads in Google Ads.

## API Documentation

This component was built using the [Google Ads API](https://developers.google.com/google-ads/api/docs/get-started/introduction), currently utilizing v26 by default. Every version Google still supports (v23 through v26) can be selected by specifying the API Version in the connection.

## EU Political Advertising Self-Declaration (v22+)

When using API v22 or later, the `containsEuPoliticalAdvertising` field must be set when:

- Creating new campaigns
- Modifying location or proximity targeting on existing campaigns

This field is required and accepts one of the following values:

- `CONTAINS_EU_POLITICAL_ADVERTISING`: Campaign contains EU political advertising.
- `DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING`: Campaign does not contain EU political advertising.
- `UNSPECIFIED` or `UNKNOWN`: Use when the value is unknown or indeterminate.

Failure to set this field will result in a `FieldError.REQUIRED` error from the API.

From v26, the field is optional for campaigns that do not positively target the European Union: no positive location criterion inside the EU, no positive proximity or location group criterion, and at least one positive location criterion outside the EU. See the [Google Ads API release notes](https://developers.google.com/google-ads/api/docs/release-notes).

## Connections

### Data Manager OAuth 2.0 {#datamanageroauth}

Authenticate to the Google Data Manager API using OAuth 2.0. Use this connection for the Ingest Offline Conversions, Ingest Audience Members, Remove Audience Members, and Get Request Status actions.

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

- The Google Cloud project that owns the OAuth credentials must have Google Ads API access. Google grants [API access levels](https://developers.google.com/google-ads/api/docs/api-policy/access-levels) to the project; a Developer Token is no longer needed
- The Customer ID of the Ads Manager account (the hyphenated number in the top-right corner of the Ads app) must be noted
- A [Google Developer account](https://console.cloud.google.com/) is required

#### Setup Steps

1. Sign in to [Google Ads](https://ads.google.com/) with the Google account that will be used for the integration
1. Take note of the **Customer ID** displayed in the top-right corner of Google Ads (XXX-XXX-XXXX). This will be needed when configuring the connection.

#### Configure Google Cloud Project

1. Access the project selector in the top-left and select an existing project or create a new one.
1. Select **APIs & Services** -> **Enabled APIs & services** from the left hand menu
1. Click **Enable APIs and Services** towards the top of the screen
1. Search for "google ads api" and select **Google Ads API** in the results (avoid selecting AdWords as that is deprecated)
1. Click the **Enable** button to add the API to the project
1. Open the **Google Ads API Overview** page of the project and check the access level it displays. A project at **Test** access can only reach test accounts; under **Upgrade access level**, apply for **Explorer** or a higher level to reach production accounts. Refer to [Google's access levels documentation](https://developers.google.com/google-ads/api/docs/api-policy/access-levels) for the limits and review process of each level.
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
- **Developer Token**: Leave blank. Google [sunset developer tokens](https://developers.google.com/google-ads/api/docs/api-policy/developer-token) on September 9, 2026. Existing connections with a saved token keep working; the token is not sent with any request.
- **API Version**: The Google Ads API version to use. Refer to the [Google Ads API release notes](https://developers.google.com/google-ads/api/docs/release-notes) for the latest version.
- **Scopes**: Defaults to `https://www.googleapis.com/auth/adwords`. Refer to [Google's OAuth 2.0 scopes documentation](https://developers.google.com/identity/protocols/oauth2/scopes) for additional scope information.

#### Supported API Versions

The component supports the following Google Ads API versions through the **API Version** connection field. Versions below the minimum are automatically upgraded to the minimum supported version.

The minimum tracks Google's own sunset schedule, so every version Google still supports can be selected here.

| Version         | Status in this component             | Google Sunset                           |
| --------------- | ------------------------------------ | --------------------------------------- |
| **v26**         | Recommended (default)                | November 2027                           |
| **v25**         | Supported                            | August 2027                             |
| **v24**         | Supported                            | May 2027                                |
| **v23**         | Supported (minimum)                  | February 2027 (tentative)               |
| v22 and earlier | Not selectable: auto-upgraded to v23 | Already sunset (v22 on October 7, 2026) |

Because v23 is the minimum, the EU Political Advertising self-declaration requirement (v22 and later) applies to every version this component can use.

Google publishes nearer-term sunsets as tentative and firms them up closer to the date, so treat these as subject to change. v23 in particular retires in February 2027. Minor releases (for example v26.1) do not need to be selected here; Google updates the major-version endpoint automatically. See the official [deprecation and sunset schedule](https://developers.google.com/google-ads/api/docs/sunset-dates) for the latest information.

After entering the credentials, authorize the connection by signing in with the Google account used to create the OAuth credentials.

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

| Input           | Comments                                                                                                                                                                                                                                                                                                                                               | Default                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| Scopes          | Space-separated OAuth 2.0 permission scopes for the Google Ads and Data Manager APIs. See [OAuth scopes documentation](https://developers.google.com/identity/protocols/oauth2/scopes).                                                                                                                                                                | https://www.googleapis.com/auth/adwords |
| Client ID       | The Client ID for the Google Ads API application. Obtain from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).                                                                                                                                                                                                           |                                         |
| Client Secret   | The Client Secret for the Google Ads API application. Obtain from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).                                                                                                                                                                                                       |                                         |
| Developer Token | Leave blank. Google [sunset developer tokens](https://developers.google.com/google-ads/api/docs/api-policy/developer-token) on September 9, 2026, and API access is now granted to the Google Cloud project that owns the OAuth credentials. A saved token is not sent to the Google Ads API.                                                          |                                         |
| API Version     | The version of the Google Ads API to use. Defaults to v26. Any version from v23 through v26 can be set explicitly; anything below v23 has already been sunset by Google and is automatically upgraded to v23. See the [deprecation and sunset schedule](https://developers.google.com/google-ads/api/docs/sunset-dates) for when each version retires. | v26                                     |

### Service Account {#serviceaccount}

Authenticate as a Google Cloud service account that has been added as a user in the Google Ads account.

This component can connect to the Google Ads API as a Google Cloud service account. A service account is not tied to a person, so the connection keeps working when the employee who set it up leaves, and it needs no sign-in.

#### Prerequisites

- A Google Cloud project with the Google Ads API enabled and an appropriate [API access level](https://developers.google.com/google-ads/api/docs/api-policy/access-levels). A project at **Test** access can only reach test accounts
- Administrator access to the Google Ads account the service account will use

#### Create the Service Account

1. In the Google Cloud Console, select the project that has the Google Ads API enabled.
1. Select **IAM & Admin** -> **Service Accounts**, then click **Create service account**.
1. Enter a name and click **Create and continue**. No Cloud IAM roles are needed: Google Ads access is granted in Google Ads, below. Click **Done**.
1. Open the new service account, select the **Keys** tab, and click **Add key** -> **Create new key** -> **JSON**. Keep the downloaded file safe; it is the connection's credential.
1. Take note of the service account's email address, which ends in `iam.gserviceaccount.com`.

#### Give the Service Account Access in Google Ads

1. Sign in to Google Ads as an administrator of the account, or of the manager account above it.
1. Select **Admin** -> **Access and security**, then click **+** on the **Users** tab.
1. Enter the service account's email address, choose an access level (service accounts do not support **Email only**), and click **Add account**.

A service account email can be added to a limited number of accounts. To reach many client accounts, add it to their manager account and set **Manager Customer ID** on each step. See [Google's service accounts documentation](https://developers.google.com/google-ads/api/docs/oauth/service-accounts).

#### Configure the Connection

Create a connection of type **Service Account** and provide the following values:

- **Service Account Key File**: The entire contents of the downloaded JSON key file
- **Scopes**: Defaults to `https://www.googleapis.com/auth/adwords`, the scope the Google Ads API needs
- **API Version**: The Google Ads API version to use, as for the **OAuth 2.0** connection

The **Service Account** connection works with the Google Ads and Local Services actions, triggers, and data sources. The Data Manager actions (**Ingest Offline Conversions** and the Customer Match actions) and the **Audience** list need the **Data Manager OAuth 2.0** connection.

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                               | Default                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| Service Account Key File | The service account's JSON key file, pasted in full. Create the key in the Google Cloud console, in the project that has the Google Ads API enabled, and add the service account's email as a user in the Google Ads account. See [Service accounts documentation](https://developers.google.com/google-ads/api/docs/oauth/service-accounts).          |                                         |
| Scopes                   | Space-separated OAuth 2.0 scopes for the service account's token. The Google Ads API needs the adwords scope. See [OAuth scopes documentation](https://developers.google.com/identity/protocols/oauth2/scopes).                                                                                                                                        | https://www.googleapis.com/auth/adwords |
| API Version              | The version of the Google Ads API to use. Defaults to v26. Any version from v23 through v26 can be set explicitly; anything below v23 has already been sunset by Google and is automatically upgraded to v23. See the [deprecation and sunset schedule](https://developers.google.com/google-ads/api/docs/sunset-dates) for when each version retires. | v26                                     |

## Triggers

### Account Change History {#changehistorytrigger}

Retrieves existing and ongoing account changes, with user attribution, for a specified Google Ads account. Load history once, check for changes on a schedule, or both.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |                 |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |                 |
| Look-back Date      | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync's change_event query starts from this date (clamped to Google's 30-day change_event window) instead of one hour before the first run.                                  |                 |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |                 |
| Resource Types      | Types of resources to track changes for. Leave empty to track all resource types.                                                                                                                                                                                                                                                                        | <code>[]</code> |
| Include User Info   | When true, user email and client type will be included in change events.                                                                                                                                                                                                                                                                                 | true            |

### Campaign Budget Alerts {#budgetalerttrigger}

Checks for campaigns approaching or exceeding budget thresholds on a configured schedule.

| Input                  | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID            | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. Use a client account; manager accounts return no metrics. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                   |         |
| Manager Customer ID    | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Alert Threshold (%)    | Budget spend percentage at which to trigger an alert.                                                                                                                                                                                                                                                                                                    | 80      |
| Include Shared Budgets | When true, shared budgets across multiple campaigns will be monitored.                                                                                                                                                                                                                                                                                   | true    |

### Changed Resources {#changestatustrigger}

Retrieves existing and ongoing changes to Google Ads resources, without field-level values, for a specified account. Load history once, check for changes on a schedule, or both.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |                 |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |                 |
| Look-back Date      | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync's change_status query starts from this date (clamped to Google's 90-day change_status window) instead of one hour before the first run.                                |                 |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |                 |
| Resource Types      | Types of resources to report changes for. Leave empty to report changes to all resource types.                                                                                                                                                                                                                                                           | <code>[]</code> |

### New and Updated Campaigns {#campaignchangestrigger}

Retrieves existing and ongoing campaign changes for a specified Google Ads account. Load history once, check for changes on a schedule, or both.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                 | Default         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection              | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |                 |
| Customer ID             | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |                 |
| Look-back Date          | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync's change_event query starts from this date (clamped to Google's 30-day change_event window) instead of one hour before the first run.                                  |                 |
| Manager Customer ID     | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |                 |
| Change Types to Monitor | Types of campaign changes to detect. Leave empty to detect all change types. The Campaign Settings option is not yet implemented and currently has no effect; no settings fields are evaluated.                                                                                                                                                          | <code>[]</code> |

## Actions

### Append Lead Conversation {#appendleadconversation}

Appends a text message to the conversation of a Local Services lead.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Lead ID             | The ID of the Local Services lead, as returned by List Local Services Leads in localServicesLead.id.                                                                                                                                                                                                                                                     |         |
| Text                | The text message to append to the lead's conversation.                                                                                                                                                                                                                                                                                                   |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |

### Confirm Client Link {#confirmclientlink}

Confirms a pending customer client link.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Manager Link ID     | The unique identifier of the manager link. See [Customer manager link documentation](https://developers.google.com/google-ads/api/reference/rpc/v26/CustomerManagerLink).                                                                                                                                                                                |         |

### Create Client Link {#createclientlink}

Create an invitation to link a client account to a manager account.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |

### Get Account Reports {#accountreports}

Retrieves account reports showing performance and metrics for Local Services accounts linked to a Manager account.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |                 |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |                 |
| Pagination          | Page size and cursor controls for the result set.                                                                                                                                                                                                                                                                                                        |                 |
| Page Size           | The maximum number of results to return per page.                                                                                                                                                                                                                                                                                                        | 1000            |
| Page Token          | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |                 |
| Customer IDs        | The Google Ads customer IDs to filter the Local Services report. Leave empty to include all accessible customers.                                                                                                                                                                                                                                        | <code>[]</code> |
| Start Date          | The start date of the date range, inclusive. Format: MM-DD-YYYY.                                                                                                                                                                                                                                                                                         |                 |
| End Date            | The end date of the date range, inclusive. Format: MM-DD-YYYY.                                                                                                                                                                                                                                                                                           |                 |

### Get Conversion Action {#getconversionaction}

Retrieve Conversion Action data for a customer account.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Page Token          | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |

### Get Customer {#getcustomer}

Retrieve Customer data for a customer account.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Page Token          | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |

### Get Detailed Lead Reports (Deprecated) {#detailedleadreports}

Retrieves detailed lead reports providing an in-depth view of leads for Local Services accounts linked to a Manager account. Google has deprecated the Detailed Lead Reports API; use List Local Services Leads and List Lead Conversations instead.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |                 |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |                 |
| Pagination          | Page size and cursor controls for the result set.                                                                                                                                                                                                                                                                                                        |                 |
| Page Size           | The maximum number of results to return per page.                                                                                                                                                                                                                                                                                                        | 1000            |
| Page Token          | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |                 |
| Customer IDs        | The Google Ads customer IDs to filter the Local Services report. Leave empty to include all accessible customers.                                                                                                                                                                                                                                        | <code>[]</code> |
| Start Date          | The start date of the date range, inclusive. Format: MM-DD-YYYY.                                                                                                                                                                                                                                                                                         |                 |
| End Date            | The end date of the date range, inclusive. Format: MM-DD-YYYY.                                                                                                                                                                                                                                                                                           |                 |

### Get Request Status {#getrequeststatus}

Retrieves the processing status of a Data Manager request, per destination, from an audience or offline conversion upload.

| Input      | Comments                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Google Ads connection to use.                                                                         |         |
| Request ID | The requestId returned by Ingest Audience Members, Remove Audience Members or Ingest Offline Conversions. |         |

### Ingest Audience Members {#ingestaudiencemembers}

Adds members to a Google Ads Customer Match audience through the Data Manager API and returns the request ID to check its status.

| Input                           | Comments                                                                                                                                                                                                                                                        | Default |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The Google Ads connection to use.                                                                                                                                                                                                                               |         |
| Customer ID                     | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                    |         |
| Audience                        | The Customer Match audience (user list) of the customer to update. Pick one from the list, or enter its ID.                                                                                                                                                     |         |
| Audience Members                | The audience members, each with up to 10 SHA-256 hashed user identifiers (email address, phone number or address), at most 10,000 per request. See [AudienceMember reference](https://developers.google.com/data-manager/api/reference/rest/v1/AudienceMember). |         |
| Customer Match Terms of Service | Whether the advertiser accepts the Customer Match terms of service. Google requires Accepted to ingest user data.                                                                                                                                               |         |
| Manager Customer ID             | The Google Ads manager account the request is made through, when the customer is reached through a manager. Accepts hyphenated or number forms.                                                                                                                 |         |
| Hash Encoding                   | The encoding of the SHA-256 hashed user identifiers in Audience Members. Required when the members include hashed user data.                                                                                                                                    |         |
| Ad User Data Consent            | Request-level consent for using these users' data for advertising. Leave empty to send no request-level consent.                                                                                                                                                |         |
| Ad Personalization Consent      | Request-level consent for ad personalization for these users. Leave empty to send no request-level consent.                                                                                                                                                     |         |
| Validate Only                   | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                    | false   |

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
| Access Role   | The access role to grant to the user. See [Access roles documentation](https://developers.google.com/google-ads/api/reference/rpc/v26/AccessRoleEnum.AccessRole).                                            |         |

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

### List Lead Conversations {#listleadconversations}

Lists the phone calls, messages and bookings exchanged on Local Services leads, newest first, optionally for one lead.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Fetch All           | When true, automatically fetches all pages of results. When false, only the first page of results will be returned.                                                                                                                                                                                                                                      | false   |
| Page Token          | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Lead ID             | Only conversations for this Local Services lead. Leave empty to list conversations for every lead.                                                                                                                                                                                                                                                       |         |

### List Local Services Leads {#listlocalservicesleads}

Lists the Local Services leads of a customer, newest first, optionally limited to a creation date range.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Fetch All           | When true, automatically fetches all pages of results. When false, only the first page of results will be returned.                                                                                                                                                                                                                                      | false   |
| Page Token          | The pagination cursor from a previous request. Returned in previous page responses.                                                                                                                                                                                                                                                                      |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Start Date          | Only leads created on or after this date, in the account's timezone. Format: MM-DD-YYYY.                                                                                                                                                                                                                                                                 |         |
| End Date            | Only leads created on or before this date, in the account's timezone. Format: MM-DD-YYYY.                                                                                                                                                                                                                                                                |         |

### Mutate Campaign {#mutatecampaign}

Creates, updates, or removes campaigns as well as local services campaigns. Operation statuses are returned. When using API v22+, the containsEuPoliticalAdvertising field is required for campaign creation and location targeting changes.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                        | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Operations          | The list of operations to perform on individual campaigns. See [Campaign operations documentation](https://developers.google.com/google-ads/api/reference/rpc/v26/CampaignOperation).                                                                                                                                                                           | <code>[<br /> {<br /> "create": {<br /> "name": "Example Campaign",<br /> "advertisingChannelType": "SEARCH",<br /> "status": "PAUSED",<br /> "campaignBudget": "customers/1234567890/campaignBudgets/9876543210",<br /> "manualCpc": {},<br /> "containsEuPoliticalAdvertising": "DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING"<br /> }<br /> },<br /> {<br /> "updateMask": "status",<br /> "update": {<br /> "resourceName": "customers/1234567890/campaigns/1122334455",<br /> "status": "ENABLED"<br /> }<br /> },<br /> {<br /> "remove": "customers/1234567890/campaigns/2233445566"<br /> }<br />]</code> |
| Partial Failure     | When true, successful operations will be carried out and invalid operations will return errors. When false, all operations will be carried out in one transaction if and only if they are all valid. This should always be set to true. See [Partial failure documentation](https://developers.google.com/google-ads/api/docs/best-practices/partial-failures). | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Validate Only       | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                                                                    | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Mutate Campaign Criteria {#mutatecampaigncriteria}

Creates, updates, or removes campaign criteria as well as local services campaign criterion. Operation statuses are returned. When using API v22+, the containsEuPoliticalAdvertising field must be set on the parent campaign before modifying location or proximity targeting criteria.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                        | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Operations          | The list of operations to create, update, or remove individual campaign criteria. See [Campaign criterion operations documentation](https://developers.google.com/google-ads/api/reference/rpc/v26/CampaignCriterionOperation).                                                                                                                                 | <code>[<br /> {<br /> "create": {<br /> "campaign": "customers/1234567890/campaigns/1122334455",<br /> "location": {<br /> "geoTargetConstant": "geoTargetConstants/1014044"<br /> }<br /> }<br /> },<br /> {<br /> "updateMask": "bidModifier",<br /> "update": {<br /> "resourceName": "customers/1234567890/campaignCriteria/1122334455~~987654321",<br /> "bidModifier": 1.5<br /> }<br /> },<br /> {<br /> "remove": "customers/1234567890/campaignCriteria/1122334455~~2233445566"<br /> }<br />]</code> |
| Partial Failure     | When true, successful operations will be carried out and invalid operations will return errors. When false, all operations will be carried out in one transaction if and only if they are all valid. This should always be set to true. See [Partial failure documentation](https://developers.google.com/google-ads/api/docs/best-practices/partial-failures). | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Validate Only       | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                                                                    | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Mutate Resources {#mutateresources}

Creates, updates, or removes any Google Ads resources in one request, linking new resources to each other through temporary IDs.

| Input                 | Comments                                                                                                                                                                                                                                                                                                                                                        | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                               |         |
| Customer ID           | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                                    |         |
| Mutate Operations     | The operations to run in one request, across any resource types (at most 10,000). A new resource can be referenced by later operations through a temporary ID: a negative number in its resource name, such as campaignBudgets/-1. See [Temporary IDs documentation](https://developers.google.com/google-ads/api/docs/batch-processing/temporary-ids).         |         |
| Partial Failure       | When true, successful operations will be carried out and invalid operations will return errors. When false, all operations will be carried out in one transaction if and only if they are all valid. This should always be set to true. See [Partial failure documentation](https://developers.google.com/google-ads/api/docs/best-practices/partial-failures). | true    |
| Manager Customer ID   | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).        |         |
| Validate Only         | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                                                                    | false   |
| Response Content Type | What each operation's result returns. Resource Name Only is the default; Mutable Resource also returns the changed resource's fields.                                                                                                                                                                                                                           |         |

### Provide Lead Feedback {#provideleadfeedback}

Submits satisfaction feedback on a Local Services lead and returns whether Google issued a bonus credit.

| Input                | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID          | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Lead ID              | The ID of the Local Services lead, as returned by List Local Services Leads in localServicesLead.id.                                                                                                                                                                                                                                                     |         |
| Survey Answer        | How satisfied the business is with the lead.                                                                                                                                                                                                                                                                                                             |         |
| Manager Customer ID  | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Satisfied Reason     | Why the business is satisfied with the lead. Only for a Very Satisfied or Satisfied answer.                                                                                                                                                                                                                                                              |         |
| Dissatisfied Reason  | Why the business is not satisfied with the lead. Only for a Dissatisfied or Very Dissatisfied answer.                                                                                                                                                                                                                                                    |         |
| Other Reason Comment | Free-form feedback. Required when the reason is Other.                                                                                                                                                                                                                                                                                                   |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the Google Ads API.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                             | Default         |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection              | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                    |                 |
| URL                     | Input the path only (/v26/customers:listAccessibleCustomers), The base URL is already included (https://googleads.googleapis.com). For example, to connect to https://googleads.googleapis.com/v26/customers:listAccessibleCustomers, only /v26/customers:listAccessibleCustomers is entered in this field. Note: When using the Raw Request action, the API version must be specified in the path (e.g., /v26/) to override the connection default. | /v26/           |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                                                                                                                              |                 |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                                                                                                                                            |                 |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                                                                                 | <code>[]</code> |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                                                                                     | <code>[]</code> |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                                                                                                                                               | <code>[]</code> |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                                                                                                                                  | <code>[]</code> |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                                                                                                                                          | <code>[]</code> |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                                                                                                                                             | json            |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                                                                                                                                  |                 |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                                                                                                                                  | 0               |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                                                                                                                                     | false           |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                                                                                                                                  | 0               |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                                                                                                                                        | false           |

### Remove Audience Members {#removeaudiencemembers}

Removes members from a Google Ads Customer Match audience through the Data Manager API and returns the request ID to check its status.

| Input               | Comments                                                                                                                                                                                                                                                        | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                               |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                    |         |
| Audience            | The Customer Match audience (user list) of the customer to update. Pick one from the list, or enter its ID.                                                                                                                                                     |         |
| Audience Members    | The audience members, each with up to 10 SHA-256 hashed user identifiers (email address, phone number or address), at most 10,000 per request. See [AudienceMember reference](https://developers.google.com/data-manager/api/reference/rest/v1/AudienceMember). |         |
| Manager Customer ID | The Google Ads manager account the request is made through, when the customer is reached through a manager. Accepts hyphenated or number forms.                                                                                                                 |         |
| Hash Encoding       | The encoding of the SHA-256 hashed user identifiers in Audience Members. Required when the members include hashed user data.                                                                                                                                    |         |
| Validate Only       | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                    | false   |

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
| Linked Customer ID         | For partners acting on an advertiser's account through an account link: the advertiser's Google Ads customer ID, sent as the linked-customer-id header alongside the partner's Manager Customer ID. Accepts hyphenated or number forms. See [Google Ads REST authorization](https://developers.google.com/google-ads/api/rest/auth).                     |         |

### Search Stream {#searchstream}

Returns every row matching a GAQL query in one call, without page tokens, for large reports.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Query               | Google Ads Query Language (GAQL) query string. See [GAQL documentation](https://developers.google.com/google-ads/api/docs/query/overview).                                                                                                                                                                                                               |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Linked Customer ID  | For partners acting on an advertiser's account through an account link: the advertiser's Google Ads customer ID, sent as the linked-customer-id header alongside the partner's Manager Customer ID. Accepts hyphenated or number forms. See [Google Ads REST authorization](https://developers.google.com/google-ads/api/rest/auth).                     |         |

### Upload Call Conversions {#uploadcallconversions}

Upload offline call conversions into Google Ads in order to track ads that led to sales.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Conversions         | The call conversions to upload, each identifying the call by caller ID and call start time. See [Call conversions documentation](https://developers.google.com/google-ads/api/docs/conversions/upload-calls).                                                                                                                                            |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Validate Only       | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                                                             | false   |
| Linked Customer ID  | For partners acting on an advertiser's account through an account link: the advertiser's Google Ads customer ID, sent as the linked-customer-id header alongside the partner's Manager Customer ID. Accepts hyphenated or number forms. See [Google Ads REST authorization](https://developers.google.com/google-ads/api/rest/auth).                     |         |

### Upload Click Conversions {#uploadclickconversions}

Uploads offline click conversions into Google Ads to track ads that led to sales. Since June 15, 2026, Google rejects these requests from API clients that had not uploaded offline conversions before that date; new integrations should use Ingest Offline Conversions (Data Manager API) instead.

| Input               | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Google Ads connection to use.                                                                                                                                                                                                                                                                                                                        |         |
| Customer ID         | The unique identifier for the Google Ads client account. Accepts hyphenated or number forms. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid).                                                                                                                                             |         |
| Conversions         | The click conversions to upload, each identifying the click (for example, by GCLID) and the conversion action, time, and value. See [Offline conversions documentation](https://developers.google.com/google-ads/api/docs/conversions/upload-offline).                                                                                                   |         |
| Manager Customer ID | The unique identifier for the Google Ads Manager account. Accepts hyphenated or number forms. When used in conjunction with a sub account as the customer ID, this value is used as the 'login-customer-id' header for the HTTP request. See [Customer ID documentation](https://developers.google.com/google-ads/api/docs/concepts/call-structure#cid). |         |
| Validate Only       | When true, the request is validated but not executed. Only errors are returned, not results.                                                                                                                                                                                                                                                             | false   |
| Linked Customer ID  | For partners acting on an advertiser's account through an account link: the advertiser's Google Ads customer ID, sent as the linked-customer-id header alongside the partner's Manager Customer ID. Accepts hyphenated or number forms. See [Google Ads REST authorization](https://developers.google.com/google-ads/api/rest/auth).                     |         |
