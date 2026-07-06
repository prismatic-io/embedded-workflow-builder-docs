---
title: Microsoft Advertising Connector
sidebar_label: Microsoft Advertising
description: Manage Microsoft Advertising campaigns, ad groups, keywords, audiences, and customer accounts.
---

![Microsoft Advertising](./assets/ms-bing-ads.png#connector-icon)
[Microsoft Advertising](https://ads.microsoft.com/) (formerly Bing Ads) is a pay-per-click (PPC) advertising platform used to display ads based on the keywords used in a search query. The Microsoft Advertising API provides programmatic access to Microsoft Advertising for managing large campaigns or integrating marketing with other systems.

This component lets you manage campaigns, ad groups, ads, keywords, budgets, and audiences, along with customer accounts, client links, and offline conversions.

## API Documentation

This component was built using the [Microsoft Advertising API](https://learn.microsoft.com/en-us/advertising/guides/?view=bingads-13) currently utilizing v13.

## Connections

### OAuth 2.0 {#oauth}

Authenticate using OAuth 2.0.

<Vimeo video="907604023" />

This component uses OAuth 2.0 to connect to the Microsoft Advertising API. Create a connection of type **OAuth 2.0** to authenticate.

#### Prerequisites

- A [Microsoft Advertising](https://ads.microsoft.com/) account
- [Super Admin](https://learn.microsoft.com/en-us/advertising/guides/account-hierarchy-permissions?view=bingads-13#user-roles-permissions) credentials for obtaining a developer token
- Access to the [Azure portal](https://go.microsoft.com/fwlink/?linkid=2083908) for app registration

#### Setup Steps

**Obtain a Developer Token:**

1. Sign in with Super Admin credentials at the [Microsoft Advertising Developer Portal](https://developers.ads.microsoft.com/Account) account tab.
2. Select the user to associate with the developer token. Typically an application only needs one universal token regardless of how many users are supported.
3. Click the **Request Token** button and copy the token value.

**Register an Azure Application:**

Microsoft Advertising uses the Microsoft identity platform endpoint and the OAuth 2.0 protocol to authenticate work or school accounts from Azure Active Directory (AAD) and personal Microsoft accounts (MSA), such as `hotmail.com`, `outlook.com`, and `msn.com`.

1. Navigate to the [Azure portal - App registrations](https://go.microsoft.com/fwlink/?linkid=2083908) page. Sign in using either a personal Microsoft Account or a Work or School Account.
2. Select **New registration**.
3. On the **Register an application** page, enter the registration information:
   - In the **Name** section, enter a meaningful application name.
   - In the **Supported account types** section, select **Accounts in any organizational directory and personal Microsoft accounts**.
4. Select **Register** to create the application.
5. On the app **Overview** page, find the **Application (client) ID** value and record it.
6. Select the **Add a Redirect URI** link to open the **Redirect URIs** page. Add the callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
7. Select **Certificates & secrets** under **Manage**. Click the **New client secret** button. Enter a value in **Description**, select an option for **Expires**, and choose **Add**. Copy the client secret value before leaving the page. Refer to the [Microsoft OAuth token documentation](https://learn.microsoft.com/en-us/advertising/guides/authentication-oauth-get-tokens?view=bingads-13) for additional details.

#### Configure the Connection

- Enter the **Client ID** from the Azure app registration **Overview** page
- Enter the **Client Secret Value** generated in the **Certificates & secrets** section
- Enter the **Developer Token** obtained from the Microsoft Advertising Developer Portal
- Optionally, enable **Use Sandbox** to connect to the Microsoft Advertising sandbox environment instead of production

:::note[Using the Sandbox Environment]
The **Use Sandbox** toggle switches the connection to the Microsoft Advertising sandbox environment (`api.sandbox.bingads.microsoft.com`) instead of production.
This is useful for testing without affecting live campaign data.
A separate sandbox developer token is required for sandbox access, which is different from the production developer token obtained from the Microsoft Advertising Developer Portal.
:::

#### App Verification and Admin Consent

Microsoft requires Azure AD app registrations used in multi-tenant deployments to complete a publisher verification process. This review confirms the app developer's identity, giving end users confidence that they are authorizing a legitimate, verified application.

Azure AD app registrations have two distinct verification concepts that affect how users experience the authentication flow.

#### Publisher Verification

**Complete publisher verification before deploying to end users.** Without it, the Microsoft consent screen displays **"Unverified"** next to the app name. This reduces user trust and may prevent users in organizations with strict Azure AD policies from being able to authorize the app at all.

To verify the publisher:

1. Ensure the organization has a [Microsoft Partner Network (MPN) account](https://partner.microsoft.com/)
2. In the [Microsoft Entra Admin Center](https://entra.microsoft.com/), open the app registration
3. Under **Branding & properties**, click **Add a verified publisher**
4. Enter the MPN ID and confirm

Once verified, the consent screen displays the organization name with a verified badge instead of "Unverified."

#### Admin Consent

Apps requesting **application permissions** (permissions that act without a signed-in user) or high-privilege **delegated permissions** require admin consent before any user in a Microsoft 365 tenant can authenticate. Without admin consent, users see a **"Need admin approval"** error.

A tenant administrator can grant consent using either method:

**Method 1 — Admin Consent URL:**

Navigate to the following URL, replacing `{tenant}` with the Directory tenant ID and `{client_id}` with the Application client ID:

    https://login.microsoftonline.com/{tenant}/adminconsent?client_id={client_id}

**Method 2 — Microsoft Entra Admin Center:**

1. Navigate to [Microsoft Entra Admin Center](https://entra.microsoft.com/) → **Enterprise applications**
2. Select the app registration
3. Under **Permissions**, click **Grant admin consent for [organization name]**

:::note[Delegated vs. Application Permissions]
Delegated permissions (user-level) typically do not require admin consent unless they are classified as high privilege. Application permissions always require admin consent. Review the [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference) to identify which permissions require consent.
:::

<Vimeo video="907604023" />

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                 | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Client ID           | The client ID of the registered OAuth application for Microsoft Advertising.                                             |         |
| Client Secret Value | The client secret value of the registered OAuth application for Microsoft Advertising.                                   |         |
| Developer Token     | The developer token from the Account Manager account used for API authentication.                                        |         |
| Use Sandbox         | When true, uses the Microsoft Advertising sandbox environment (api.sandbox.bingads.microsoft.com) instead of production. | false   |

## Actions

### Add Ad Groups {#addadgroups}

Creates one or more ad groups within the specified campaign.

| Input       | Comments                                                                                                  | Default |
| ----------- | --------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                              |         |
| Account ID  | The unique identifier for the advertiser account.                                                         |         |
| Customer ID | The unique identifier for the customer.                                                                   |         |
| Campaign ID | The identifier of the campaign.                                                                           |         |
| Ad Groups   | A JSON array of ad groups to create. Each object follows the Microsoft Advertising AdGroup object schema. |         |

### Add Ads {#addads}

Creates one or more ads within the specified ad group.

| Input       | Comments                                                                                                                                                                                                                                                                                                                 | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                                                                                                                                                                                                                                             |         |
| Account ID  | The unique identifier for the advertiser account.                                                                                                                                                                                                                                                                        |         |
| Customer ID | The unique identifier for the customer.                                                                                                                                                                                                                                                                                  |         |
| Campaign ID | The identifier of the campaign.                                                                                                                                                                                                                                                                                          |         |
| Ad Group ID | The identifier of the ad group.                                                                                                                                                                                                                                                                                          |         |
| Ads         | A JSON array of ads to create. Each ad needs a Type discriminator using the short AdType value (e.g. ResponsiveSearch, ExpandedText, AppInstall). For a ResponsiveSearch ad, Headlines (3-15) and Descriptions (2-4) are arrays of asset links, each wrapping a text asset whose own Type is the full "TextAsset" value. |         |

### Add Audiences {#addaudiences}

Creates one or more audiences within the account.

| Input       | Comments                                                                                                                                                                                                                                                               | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                                                                                                                                                                                           |         |
| Account ID  | The unique identifier for the advertiser account.                                                                                                                                                                                                                      |         |
| Customer ID | The unique identifier for the customer.                                                                                                                                                                                                                                |         |
| Audiences   | A JSON array of audiences to create. Each object needs a Type discriminator (e.g. CustomerList, RemarketingList) and ParentId (the account ID when Scope is Account, otherwise the customer ID). A RemarketingList additionally requires a valid UET TagId and a Rule. |         |

### Add Budgets {#addbudgets}

Creates one or more shared budgets within the account.

| Input       | Comments                                                                                               | Default |
| ----------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                           |         |
| Account ID  | The unique identifier for the advertiser account.                                                      |         |
| Customer ID | The unique identifier for the customer.                                                                |         |
| Budgets     | A JSON array of budgets to create. Each object follows the Microsoft Advertising Budget object schema. |         |

### Add Campaigns {#addcampaigns}

Creates one or more campaigns within the specified account.

| Input       | Comments                                                                                                            | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                                        |         |
| Account ID  | The unique identifier for the advertiser account.                                                                   |         |
| Customer ID | The unique identifier for the customer.                                                                             |         |
| Campaigns   | A JSON array of campaigns to create. Each campaign object follows the Microsoft Advertising Campaign object schema. |         |

### Add Client Link {#addclientlinks}

Initiates the client link process to manage the accounts of another customer. Sends a link request from one customer to another customer or account. Utilizes the SOAP API.

| Input                    | Comments                                                                                                                                                                                                                                                                                                          | Default     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Client Entity ID         | The identifier of the client advertiser account or client customer to manage.                                                                                                                                                                                                                                     |             |
| Connection               | The Microsoft Advertising connection to use.                                                                                                                                                                                                                                                                      |             |
| Customer Link Permission | Determines whether the user's access to the accounts is restricted by customer hierarchy i.e., customer level client linking. This element is only applicable if Type is set to CustomerLink. In that case, the possible values include Administrative and Standard. Otherwise this field should be nil or empty. |             |
| Inviter Email            | The email address of the user who created the client link request.                                                                                                                                                                                                                                                |             |
| Inviter Name             | The name of the parent customer of the user who created the client link request.                                                                                                                                                                                                                                  |             |
| Inviter Phone            | The phone number of the user who created the client link request.                                                                                                                                                                                                                                                 |             |
| Is Bill To Client        | Determines whether the owner of the client advertiser account or the managing customer is responsible for billing payments.                                                                                                                                                                                       | false       |
| Managing Customer ID     | The identifier of the customer who manages or is requesting to manage the client advertiser account.                                                                                                                                                                                                              |             |
| Name                     | The friendly name that can be used to reference this client link. The name can contain a maximum of 40 characters.                                                                                                                                                                                                |             |
| Note                     | Optional message from the requestor providing context and details about the client link invitation.                                                                                                                                                                                                               |             |
| Suppress Notification    | Determines whether or not to send email notification of the client link invitation to the primary user of the client advertiser account. If set to true the client will not receive an email and otherwise, since the default value is false, the client will receive an email notification.                      | false       |
| Type                     | Determines whether the link is to a client advertiser account or a client customer.                                                                                                                                                                                                                               | AccountLink |

### Add Keywords {#addkeywords}

Creates one or more keywords within the specified ad group.

| Input       | Comments                                                                                                 | Default |
| ----------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                             |         |
| Account ID  | The unique identifier for the advertiser account.                                                        |         |
| Customer ID | The unique identifier for the customer.                                                                  |         |
| Campaign ID | The identifier of the campaign.                                                                          |         |
| Ad Group ID | The identifier of the ad group.                                                                          |         |
| Keywords    | A JSON array of keywords to create. Each object follows the Microsoft Advertising Keyword object schema. |         |

### Add Offline Conversions Goal {#addofflineconversionsgoal}

Creates a new offline conversions goal. Utilizes the SOAP API.

| Input                           | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Default |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Account ID                      | The identifier of the ad account that owns or is associated with the entities in the request. This header element must have the same value as the AccountId body element when both are required                                                                                                                                                                                                                                                            |         |
| Conversion Goal Name            | The conversion goal name. The maximum length of the name is 100, and the name must be unique among all conversion goals belonging to the same customer.                                                                                                                                                                                                                                                                                                    |         |
| Conversion Goal Category        | The category that best describes the conversion goal. The category must be a valid Microsoft Advertising category.                                                                                                                                                                                                                                                                                                                                         |         |
| Customer ID                     | The identifier of the manager account (customer) the user is accessing or operating from. A user can have access to multiple manager accounts.                                                                                                                                                                                                                                                                                                             |         |
| Conversion Window In Minutes    | The length of time in minutes after a click to track conversions. For example, setting this value to 43200 minutes (30 days) means conversions that happen within 30 days after a click are tracked. Past conversions are not affected. The default value is 43200. The minimum value supported is 1 minute, although a shorter conversion window will reduce the number of conversions recorded. The maximum value supported is 129600 minutes (90 days). |         |
| Count Type                      | Determines how conversions are recorded within the chosen conversion window.                                                                                                                                                                                                                                                                                                                                                                               | All     |
| Exclude From Bidding            | Determines whether or not to exclude data otherwise related to this conversion goal from a subset of performance report columns.                                                                                                                                                                                                                                                                                                                           | false   |
| Is Enhanced Conversions Enabled | Determines whether enhanced conversions are enabled for a conversion goal.                                                                                                                                                                                                                                                                                                                                                                                 | false   |
| Scope                           | Determines if the goal applies to all accounts or only the account specified in the required CustomerAccountId header element. When multiple Microsoft Advertising accounts exist, conversions can be tracked across all of them. If associated with one account, conversions will be tracked for that account only.                                                                                                                                       |         |
| Status                          | Defines the possible user-determined status values of a conversion goal. These are the status values that a user can decide to set, for example a goal can be set to Paused to stop tracking conversions for that goal.                                                                                                                                                                                                                                    |         |
| Is Externally Attributed        | When true, the offline conversion goal uses a custom attribution model and allows importing fractional credit for each MSCLKID.                                                                                                                                                                                                                                                                                                                            | false   |
| Connection                      | The Microsoft Advertising connection to use.                                                                                                                                                                                                                                                                                                                                                                                                               |         |

### Apply Offline Conversions {#applyofflineconversions}

Applies offline conversions to a Microsoft Advertising account. Utilizes the SOAP API.

| Input                    | Comments                                                                                                                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Offline Conversions Body | The JSON body that contains the offline conversions to apply to the Microsoft Advertising account.                                                                                              |         |
| Customer Account Id      | The identifier of the ad account that owns or is associated with the entities in the request. This header element must have the same value as the AccountId body element when both are required |         |
| Customer ID              | The identifier of the manager account (customer) the user is accessing or operating from. A user can have access to multiple manager accounts.                                                  |         |
| Connection               | The Microsoft Advertising connection to use.                                                                                                                                                    |         |

### Delete Ad Groups {#deleteadgroups}

Deletes one or more ad groups from the specified campaign.

| Input        | Comments                                          | Default |
| ------------ | ------------------------------------------------- | ------- |
| Connection   | The Microsoft Advertising connection to use.      |         |
| Account ID   | The unique identifier for the advertiser account. |         |
| Customer ID  | The unique identifier for the customer.           |         |
| Campaign ID  | The identifier of the campaign.                   |         |
| Ad Group IDs | An array of ad group identifiers to delete.       |         |

### Delete Ads {#deleteads}

Deletes one or more ads from the specified ad group.

| Input       | Comments                                          | Default |
| ----------- | ------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.      |         |
| Account ID  | The unique identifier for the advertiser account. |         |
| Customer ID | The unique identifier for the customer.           |         |
| Campaign ID | The identifier of the campaign.                   |         |
| Ad Group ID | The identifier of the ad group.                   |         |
| Ad IDs      | An array of ad identifiers to delete.             |         |

### Delete Audiences {#deleteaudiences}

Deletes one or more audiences from the account.

| Input        | Comments                                          | Default |
| ------------ | ------------------------------------------------- | ------- |
| Connection   | The Microsoft Advertising connection to use.      |         |
| Account ID   | The unique identifier for the advertiser account. |         |
| Customer ID  | The unique identifier for the customer.           |         |
| Audience IDs | An array of audience identifiers to delete.       |         |

### Delete Budgets {#deletebudgets}

Deletes one or more shared budgets from the account.

| Input       | Comments                                          | Default |
| ----------- | ------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.      |         |
| Account ID  | The unique identifier for the advertiser account. |         |
| Customer ID | The unique identifier for the customer.           |         |
| Budget IDs  | An array of budget identifiers to delete.         |         |

### Delete Campaigns {#deletecampaigns}

Deletes one or more campaigns from the specified account.

| Input        | Comments                                          | Default |
| ------------ | ------------------------------------------------- | ------- |
| Connection   | The Microsoft Advertising connection to use.      |         |
| Account ID   | The unique identifier for the advertiser account. |         |
| Customer ID  | The unique identifier for the customer.           |         |
| Campaign IDs | An array of campaign identifiers to delete.       |         |

### Delete Keywords {#deletekeywords}

Deletes one or more keywords from the specified ad group.

| Input       | Comments                                          | Default |
| ----------- | ------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.      |         |
| Account ID  | The unique identifier for the advertiser account. |         |
| Customer ID | The unique identifier for the customer.           |         |
| Campaign ID | The identifier of the campaign.                   |         |
| Ad Group ID | The identifier of the ad group.                   |         |
| Keyword IDs | An array of keyword identifiers to delete.        |         |

### Get Accounts Info {#getaccountsinfo}

Gets the identifiers, names, and numbers of accounts that are accessible from the specified customer. Utilizes the SOAP API.

| Input       | Comments                                                                                                                                                                     | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                                                                                                 |         |
| Customer ID | The identifier of the customer used to get the account information. This request element is optional. If not set, the user's credentials are used to determine the customer. |         |

### Get Ad Groups By Campaign ID {#getadgroupsbycampaignid}

Gets the ad groups that belong to the specified campaign.

| Input                    | Comments                                                                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Microsoft Advertising connection to use.                                                                                               |         |
| Account ID               | The unique identifier for the advertiser account.                                                                                          |         |
| Customer ID              | The unique identifier for the customer.                                                                                                    |         |
| Campaign ID              | The identifier of the campaign.                                                                                                            |         |
| Return Additional Fields | A space-delimited list of additional properties to include in each returned entity. Allowed values depend on the resource and API version. |         |

### Get Ad Groups By IDs {#getadgroupsbyids}

Gets the specified ad groups within the specified campaign.

| Input                    | Comments                                                                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Microsoft Advertising connection to use.                                                                                               |         |
| Account ID               | The unique identifier for the advertiser account.                                                                                          |         |
| Customer ID              | The unique identifier for the customer.                                                                                                    |         |
| Campaign ID              | The identifier of the campaign.                                                                                                            |         |
| Ad Group IDs             | An array of ad group identifiers to retrieve.                                                                                              |         |
| Return Additional Fields | A space-delimited list of additional properties to include in each returned entity. Allowed values depend on the resource and API version. |         |

### Get Ads By Ad Group ID {#getadsbyadgroupid}

Gets the ads that belong to the specified ad group.

| Input                    | Comments                                                                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Microsoft Advertising connection to use.                                                                                               |         |
| Account ID               | The unique identifier for the advertiser account.                                                                                          |         |
| Customer ID              | The unique identifier for the customer.                                                                                                    |         |
| Campaign ID              | The identifier of the campaign.                                                                                                            |         |
| Ad Group ID              | The identifier of the ad group.                                                                                                            |         |
| Ad Types                 | The type(s) of ads to return for the specified ad group.                                                                                   |         |
| Return Additional Fields | A space-delimited list of additional properties to include in each returned entity. Allowed values depend on the resource and API version. |         |

### Get Ads By IDs {#getadsbyids}

Gets the specified ads within the specified ad group.

| Input                    | Comments                                                                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Microsoft Advertising connection to use.                                                                                               |         |
| Account ID               | The unique identifier for the advertiser account.                                                                                          |         |
| Customer ID              | The unique identifier for the customer.                                                                                                    |         |
| Campaign ID              | The identifier of the campaign.                                                                                                            |         |
| Ad Group ID              | The identifier of the ad group.                                                                                                            |         |
| Ad IDs                   | An array of ad identifiers to retrieve.                                                                                                    |         |
| Ad Types                 | The type(s) of ads to return for the specified ad group.                                                                                   |         |
| Return Additional Fields | A space-delimited list of additional properties to include in each returned entity. Allowed values depend on the resource and API version. |         |

### Get Audiences By IDs {#getaudiencesbyids}

Gets the specified audiences. When Audience IDs is empty, an Audience Type is required and all audiences of that type in the account are returned.

| Input                    | Comments                                                                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Microsoft Advertising connection to use.                                                                                               |         |
| Account ID               | The unique identifier for the advertiser account.                                                                                          |         |
| Customer ID              | The unique identifier for the customer.                                                                                                    |         |
| Audience IDs             | An array of audience identifiers. Leave empty to return all customer- and account-scoped audiences in the account.                         |         |
| Audience Type            | The audience type to return. Required when Audience IDs is empty — the API needs a type to know which audiences to return.                 |         |
| Return Additional Fields | A space-delimited list of additional properties to include in each returned entity. Allowed values depend on the resource and API version. |         |

### Get Budgets By IDs {#getbudgetsbyids}

Gets the specified budgets. Leave Budget IDs empty to return all budgets available in the account.

| Input       | Comments                                                                                    | Default |
| ----------- | ------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                |         |
| Account ID  | The unique identifier for the advertiser account.                                           |         |
| Customer ID | The unique identifier for the customer.                                                     |         |
| Budget IDs  | An array of budget identifiers. Leave empty to return all budgets available in the account. |         |

### Get Campaigns By Account ID {#getcampaignsbyaccountid}

Gets the campaigns that belong to the specified account.

| Input                    | Comments                                                                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Microsoft Advertising connection to use.                                                                                               |         |
| Account ID               | The unique identifier for the advertiser account.                                                                                          |         |
| Customer ID              | The unique identifier for the customer.                                                                                                    |         |
| Campaign Type            | The type(s) of campaigns to return. Defaults to Search when omitted. Specify additional types to include non-Search campaigns.             |         |
| Return Additional Fields | A space-delimited list of additional properties to include in each returned entity. Allowed values depend on the resource and API version. |         |

### Get Campaigns By IDs {#getcampaignsbyids}

Gets the specified campaigns within the specified account.

| Input                    | Comments                                                                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Microsoft Advertising connection to use.                                                                                               |         |
| Account ID               | The unique identifier for the advertiser account.                                                                                          |         |
| Customer ID              | The unique identifier for the customer.                                                                                                    |         |
| Campaign IDs             | An array of campaign identifiers to retrieve.                                                                                              |         |
| Campaign Type            | The type(s) of campaigns to return. Defaults to Search when omitted. Specify additional types to include non-Search campaigns.             |         |
| Return Additional Fields | A space-delimited list of additional properties to include in each returned entity. Allowed values depend on the resource and API version. |         |

### Get Customer {#getcustomer}

Gets the details of a customer. Utilizes the SOAP API.

| Input       | Comments                                                          | Default |
| ----------- | ----------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.                      |         |
| Customer ID | The identifier of the customer whose information you want to get. |         |

### Get Customers Info {#getcustomersinfo}

Gets the identifiers and names of customers that are accessible to the current authenticated user. The results are filtered by customer name. Utilizes the SOAP API.

| Input                | Comments                                                                                                                                                                                                                                                                | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft Advertising connection to use.                                                                                                                                                                                                                            |         |
| Customer Name Filter | A partial or full name of the customers to retrieve. The operation includes the customer in the result if the customer's name begins with the specified filter name. This element is optional. To skip filtering by customer name, set this element to an empty string. |         |
| Top Number           | A nonzero positive integer that specifies the number of customers to return in the result.                                                                                                                                                                              | 5       |

### Get Keywords By Ad Group ID {#getkeywordsbyadgroupid}

Gets the keywords that belong to the specified ad group.

| Input                    | Comments                                                                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Microsoft Advertising connection to use.                                                                                               |         |
| Account ID               | The unique identifier for the advertiser account.                                                                                          |         |
| Customer ID              | The unique identifier for the customer.                                                                                                    |         |
| Campaign ID              | The identifier of the campaign.                                                                                                            |         |
| Ad Group ID              | The identifier of the ad group.                                                                                                            |         |
| Return Additional Fields | A space-delimited list of additional properties to include in each returned entity. Allowed values depend on the resource and API version. |         |

### Get Keywords By IDs {#getkeywordsbyids}

Gets the specified keywords within the specified ad group.

| Input                    | Comments                                                                                                                                   | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The Microsoft Advertising connection to use.                                                                                               |         |
| Account ID               | The unique identifier for the advertiser account.                                                                                          |         |
| Customer ID              | The unique identifier for the customer.                                                                                                    |         |
| Campaign ID              | The identifier of the campaign.                                                                                                            |         |
| Ad Group ID              | The identifier of the ad group.                                                                                                            |         |
| Keyword IDs              | An array of keyword identifiers to retrieve.                                                                                               |         |
| Return Additional Fields | A space-delimited list of additional properties to include in each returned entity. Allowed values depend on the resource and API version. |         |

### Get Linked Accounts And Customers Info {#getlinkedaccountsandcustomersinfo}

Gets the customer and account hierarchy under the specified customer. Utilizes the SOAP API.

| Input                | Comments                                                                                                                                                                                                                                                                                                                                                                           | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft Advertising connection to use.                                                                                                                                                                                                                                                                                                                                       |         |
| Customer ID          | The identifier of the customer whose hierarchy you want to get.                                                                                                                                                                                                                                                                                                                    |         |
| Only Parent Accounts | Determines whether to return only the advertiser accounts that belong to the customer or to also return linked customers and linked advertiser accounts under other customers. To limit the results to advertiser accounts directly under the specified customer, set this element to true, and otherwise leave it empty or set the property to false. The default value is false. | false   |

### Raw Request (REST) {#rawrestrequest}

Send a raw HTTP request to the Microsoft Advertising REST API.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                     | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Microsoft Advertising connection to use.                                                                                                                                                                                                                                                                                                 |         |
| URL                     | Input the path only (/Campaigns/QueryByAccountId), The base URL is already included (https://campaign.api.bingads.microsoft.com/CampaignManagement/v13). For example, to connect to https://campaign.api.bingads.microsoft.com/CampaignManagement/v13/Campaigns/QueryByAccountId, only /Campaigns/QueryByAccountId is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                      |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                                    |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                         |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                             |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                                       |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                          |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                                  |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                                     | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                          |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                             | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                          | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                                | false   |

### Raw Request (SOAP) {#rawrequest}

Send a raw SOAP request to the Microsoft Advertising SOAP API.

| Input             | Comments                                                                                                                                                                                         | Default                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Account ID        | The unique identifier for the advertiser account.                                                                                                                                                |                         |
| Connection        | The Microsoft Advertising connection to use.                                                                                                                                                     |                         |
| Customer ID       | The unique identifier for the customer.                                                                                                                                                          |                         |
| SOAP Action       | After selecting the Microsoft Advertising API Web Service, the SOAP Action is the method or endpoint to call.                                                                                    |                         |
| SOAP Body Request | The required SOAP Body element contains the actual SOAP message intended for the ultimate endpoint of the message. Immediate child elements of the SOAP Body element may be namespace-qualified. |                         |
| Web Service API   | Microsoft Advertising API Version 13 includes the following web service addresses.                                                                                                               | CUSTOMER_MANAGEMENT_API |

### Search Accounts {#searchaccounts}

Searches for accounts that match the request criteria. Utilizes the SOAP API.

| Input                     | Comments                                                                              | Default |
| ------------------------- | ------------------------------------------------------------------------------------- | ------- |
| Account ID                | Use this field to search the Id element of the AdvertiserAccount.                     |         |
| Account Life Cycle Status | Use this field to search the AccountLifeCycleStatus element of the AdvertiserAccount. |         |
| Account Name              | The name to search for in the Name element of the AdvertiserAccount.                  |         |
| Account Number            | The number to search for in the Number element of the AdvertiserAccount.              |         |
| Connection                | The Microsoft Advertising connection to use.                                          |         |
| Ordering                  | Determines the order of results by the specified property of an account.              |         |
| Customer ID               | Use this field to search the Id element of the Customer.                              |         |
| User ID                   | The unique identifier for the user to search for.                                     |         |

### Search Client Links {#searchclientlinks}

Searches for the client links for the customer of the current authenticated user, filtered by the search criteria. The operation returns the most recent link for each unique combination of agency customer and client account. Utilizes the SOAP API.

| Input                       | Comments                                                                                                                                                                                                                                                                                          | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Client Account ID           | Search for advertiser account ClientLink objects by the client advertiser account identifier.                                                                                                                                                                                                     |         |
| Client Customer ID          | Search for customer ClientLink objects by the client customer identifier.                                                                                                                                                                                                                         |         |
| Connection                  | The Microsoft Advertising connection to use.                                                                                                                                                                                                                                                      |         |
| Direct Managing Customer ID | Search for both customer and advertiser account ClientLink objects by the agency's managing customer identifier. If other customers also link to the client customer, the results will not include those client links.                                                                            |         |
| Managing Customer ID        | Search for advertiser account ClientLink objects by the agency's managing customer identifier. If other customers also link to the client advertiser account, the results will include those client links. This predicate value is deprecated in favor of the DirectManagingCustomerId predicate. |         |
| Ordering                    | Determines the order of results by the specified property of an account.                                                                                                                                                                                                                          |         |

### Send User Invitation {#senduserinvitation}

Sends an email invitation for a user to sign up for Microsoft Advertising. The invitation limits account access and permissions. Utilizes the SOAP API.

| Input       | Comments                                                                                                                                                                                      | Default   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Account ID  | An array of identifiers of the accounts that the user can manage. To specify that the user can manage all current and future accounts of the customer to which the user belongs, set to NULL. |           |
| Connection  | The Microsoft Advertising connection to use.                                                                                                                                                  |           |
| Customer ID | The identifier of the customer this user is invited to manage. The AccountIds element determines which customer accounts the user can manage.                                                 |           |
| Email       | The email address corresponding to the user's Microsoft account. The address can contain a maximum of 100 characters.                                                                         |           |
| First Name  | The first name of the user. The first name is limited to 40 characters.                                                                                                                       |           |
| Last Name   | The last name of the user. The last name is limited to 40 characters.                                                                                                                         |           |
| LCID        | The locale to use when sending correspondence to the user by email or postal mail.                                                                                                            | EnglishUS |
| Role ID     | The role that the user has for each customer or list of accounts.                                                                                                                             |           |

### Update Ad Groups {#updateadgroups}

Updates one or more ad groups within the specified campaign.

| Input       | Comments                                                                                                                                    | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                                                                |         |
| Account ID  | The unique identifier for the advertiser account.                                                                                           |         |
| Customer ID | The unique identifier for the customer.                                                                                                     |         |
| Campaign ID | The identifier of the campaign.                                                                                                             |         |
| Ad Groups   | A JSON array of ad groups to update. Each object must include its Id. All other fields are optional — include only what you want to change. |         |

### Update Ads {#updateads}

Updates one or more ads within the specified ad group.

| Input       | Comments                                                                                                                                                                                                     | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                                                                                                                                 |         |
| Account ID  | The unique identifier for the advertiser account.                                                                                                                                                            |         |
| Customer ID | The unique identifier for the customer.                                                                                                                                                                      |         |
| Campaign ID | The identifier of the campaign.                                                                                                                                                                              |         |
| Ad Group ID | The identifier of the ad group.                                                                                                                                                                              |         |
| Ads         | A JSON array of ads to update. Each object must include its Id and Type discriminator (the short AdType value, e.g. ResponsiveSearch). All other fields are optional — include only what you want to change. |         |

### Update Audiences {#updateaudiences}

Updates one or more audiences within the account.

| Input       | Comments                                                                                                                                                                                                                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                                                                                                                                                                                                     |         |
| Account ID  | The unique identifier for the advertiser account.                                                                                                                                                                                                                                |         |
| Customer ID | The unique identifier for the customer.                                                                                                                                                                                                                                          |         |
| Audiences   | A JSON array of audiences to update. Each object must include its Id (returned when the audience was created) and its Type discriminator (e.g. CustomerList). ParentId is read-only and cannot be changed. All other fields are optional — include only what you want to change. |         |

### Update Budgets {#updatebudgets}

Updates one or more shared budgets within the account.

| Input       | Comments                                                                                                                                  | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                                                              |         |
| Account ID  | The unique identifier for the advertiser account.                                                                                         |         |
| Customer ID | The unique identifier for the customer.                                                                                                   |         |
| Budgets     | A JSON array of budgets to update. Each object must include its Id. All other fields are optional — include only what you want to change. |         |

### Update Campaigns {#updatecampaigns}

Updates one or more campaigns within the specified account.

| Input       | Comments                                                                                                                                    | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                                                                |         |
| Account ID  | The unique identifier for the advertiser account.                                                                                           |         |
| Customer ID | The unique identifier for the customer.                                                                                                     |         |
| Campaigns   | A JSON array of campaigns to update. Each object must include its Id. All other fields are optional — include only what you want to change. |         |

### Update Keywords {#updatekeywords}

Updates one or more keywords within the specified ad group.

| Input       | Comments                                                                                                                                   | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  | The Microsoft Advertising connection to use.                                                                                               |         |
| Account ID  | The unique identifier for the advertiser account.                                                                                          |         |
| Customer ID | The unique identifier for the customer.                                                                                                    |         |
| Campaign ID | The identifier of the campaign.                                                                                                            |         |
| Ad Group ID | The identifier of the ad group.                                                                                                            |         |
| Keywords    | A JSON array of keywords to update. Each object must include its Id. All other fields are optional — include only what you want to change. |         |
