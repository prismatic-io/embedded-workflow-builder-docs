---
title: Microsoft Bing Ads Connector
sidebar_label: Microsoft Bing Ads
description: Manage Microsoft Bing Ad Customer Services
---

![Microsoft Bing Ads](./assets/ms-bing-ads.png#connector-icon)
Manage Microsoft Bing Ad Customer Services

## Connections

### OAuth 2.0 Authorization Code

OAuth 2.0 Authorization Code Connectivity for Microsoft Bing Ads

This component uses OAuth 2.0 to connect to the Microsoft Bing Ads API.

To use Bing Ads APIs, you must have a developer token and valid user credentials. If you do not yet have a Microsoft Advertising account, you can sign up via the [Microsoft Advertising web application](https://ads.microsoft.com/).

You can follow these steps to get a developer token for production.

1. Sign in with [Super Admin](https://learn.microsoft.com/en-us/advertising/guides/account-hierarchy-permissions?view=bingads-13#user-roles-permissions) credentials at the [Microsoft Advertising Developer Portal](https://developers.ads.microsoft.com/Account) account tab.
2. Choose the user that you want associated with the developer token. Typically an application only needs one universal token regardless how many users will be supported.
3. Click on the Request Token button.

Microsoft Advertising leverages the Microsoft identity platform endpoint for developers and the OAuth 2.0 protocol to authenticate work or school accounts from Azure Active Directory (AAD) and personal Microsoft accounts (MSA), such as `hotmail.com`, outlook.com, and msn.com.

Before your application can authenticate Microsoft Advertising users, you must register your application and get the corresponding client ID and client secret.

1. Navigate to the Microsoft identity platform for developers in the [Azure portal - App registrations](https://go.microsoft.com/fwlink/?linkid=2083908) page. You can login using either a personal Microsoft Account or a Work or School Account.

2. Select **New registration**.

3. When the Register an application page appears, enter your application's registration information:
   - In the Name section, enter a meaningful application name that will be displayed to users of the app, for example My browserless client.
   - In the Supported account types section, select Accounts in any organizational directory and personal Microsoft accounts.

4. Select Register to create the application.

5. On the app Overview page, find the Application (client) ID value and record it for later. You will use it as the client_id when you request user consent and get an access token.

6. Select the Add a Redirect URI link and then you should see the Redirect URIs page.
   - For web applications, provide the base URL of your application. Use callback url `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`. Users would use this URL to sign into a web client application.

7. For web applications, select Certificates & secrets under Manage. Select the New client secret button. Enter a value in Description, select any option for Expires and choose Add. Copy the client secret value before leaving the page. You will use it later as the client_secret to [get an access token](https://learn.microsoft.com/en-us/advertising/guides/authentication-oauth-get-tokens?view=bingads-13).

Now that you have a **Client ID** and **Client Secret**, add Microsoft Bing Ads step to your flow.

Open the **Configuration Wizard Designer** by clicking **Configuration Wizard**, select your **Microsoft Bing Ads Connection** and enter your client ID and secret.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                        | Default |
| ------------------- | ----------------------------------------------- | ------- |
| Client ID           |                                                 |         |
| Client Secret Value |                                                 |         |
| Developer Token     | Developer token of your Account Manager account |         |

## Actions

### Add Client Link

Initiates the client link process to manage the accounts of another customer. Sends a link request from one customer to another customer or account.

| Input                    | Comments                                                                                                                                                                                                                                                                                                          | Default     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Client Entity ID         | The identifier of the client advertiser account or client customer to manage.                                                                                                                                                                                                                                     |             |
| Connection               |                                                                                                                                                                                                                                                                                                                   |             |
| Customer Link Permission | Determines whether the user's access to the accounts is restricted by customer hierarchy i.e., customer level client linking. This element is only applicable if Type is set to CustomerLink. In that case, the possible values include Administrative and Standard. Otherwise this field should be nil or empty. |             |
| Inviter Email            | The email of the user who created the client link request.                                                                                                                                                                                                                                                        |             |
| Inviter Name             | The name of the parent customer of the user who created the client link request.                                                                                                                                                                                                                                  |             |
| Inviter Phone            | The phone number of the user who created the client link request.                                                                                                                                                                                                                                                 |             |
| Is Bill To Client        | Determines whether the owner of the client advertiser account or the managing customer is responsible for billing payments.                                                                                                                                                                                       | false       |
| Managing Customer ID     | The identifier of the customer who manages or is requesting to manage the client advertiser account.                                                                                                                                                                                                              |             |
| Name                     | The friendly name that can be used to reference this client link. The name can contain a maximum of 40 characters.                                                                                                                                                                                                |             |
| Note                     | Optional message from the requestor providing context and details about the client link invitation.                                                                                                                                                                                                               |             |
| Suppress Notification    | Determines whether or not to send email notification of the client link invitation to the primary user of the client advertiser account. If set to true the client will not receive an email and otherwise, since the default value is false, the client will receive an email notification.                      | false       |
| Type                     | Determines whether the link is to a client advertiser account or a client customer.                                                                                                                                                                                                                               | AccountLink |

### Add Offline Conversions Goal

Create a new offline conversions goal.

| Input                           | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Default |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Account ID                      | The identifier of the ad account that owns or is associated with the entities in the request. This header element must have the same value as the AccountId body element when both are required                                                                                                                                                                                                                                                                                                                      |         |
| Conversion Goal Name            | The conversion goal name. The maximum length of the name is 100, and the name must be unique among all conversion goals belonging to the same customer.                                                                                                                                                                                                                                                                                                                                                              |         |
| Conversion Goal Category        | The category that best describes the conversion goal. The category must be a valid Microsoft Advertising category.                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Conversion Window In Minutes    | The conversion window is the length of time in minutes after a click that you want to track conversions. If you set this value to 43200 minutes (30 days), then conversions that happen within 30 days after a click are tracked. Past conversions aren't affected. The default value is 43200. The minimum value supported is 1 minute, although keep in mind that a shorter conversion window will reduce the number of conversions your account records. The maximum value supported is 129600 minutes (90 days). |         |
| Count Type                      | This determines how your conversions are recorded within your chosen conversion window.                                                                                                                                                                                                                                                                                                                                                                                                                              | All     |
| Exclude From Bidding            | Determines whether or not to exclude data otherwise related to this conversion goal from a subset of performance report columns.                                                                                                                                                                                                                                                                                                                                                                                     | false   |
| Is Enhanced Conversions Enabled | Determines whether enhanced conversions are enabled for a conversion goal.                                                                                                                                                                                                                                                                                                                                                                                                                                           | false   |
| Scope                           | Determines if the goal applies to all accounts or only the account specified in the required CustomerAccountId header element. If you have multiple Microsoft Advertising accounts, you can track conversions across all of those accounts. If you associate a goal with one account, conversions will be tracked for that account only.                                                                                                                                                                             |         |
| Status                          | Defines the possible user-determined status values of a conversion goal. These are the status values that a user can decide to set, for example a goal can be set to Paused if you no longer wish to track conversions for that goal.                                                                                                                                                                                                                                                                                |         |
| Is Externally Attributed        | This determines if your offline conversion goal uses your own attribution model and allows you to import fractional credit for each MSCLKID.                                                                                                                                                                                                                                                                                                                                                                         | false   |
| Customer ID                     | The identifier of the manager account (customer) the user is accessing or operating from. A user can have access to multiple manager accounts.                                                                                                                                                                                                                                                                                                                                                                       |         |
| Connection                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |

### Apply Offline Conversions

Apply offline conversions to a Bing Ads account.

| Input                    | Comments                                                                                                                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Offline Conversions Body | The JSON body that contains the offline conversions to apply to the Bing Ads account.                                                                                                           |         |
| Customer Account Id      | The identifier of the ad account that owns or is associated with the entities in the request. This header element must have the same value as the AccountId body element when both are required |         |
| Customer ID              | The identifier of the manager account (customer) the user is accessing or operating from. A user can have access to multiple manager accounts.                                                  |         |
| Connection               |                                                                                                                                                                                                 |         |

### Get Account Info

Gets the identifiers, names, and numbers of accounts that are accessible from the specified customer.

| Input       | Comments                                                                                                                                                                     | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                                                                              |         |
| Customer ID | The identifier of the customer used to get the account information. This request element is optional. If not set, the user's credentials are used to determine the customer. |         |

### Get Customer

Gets the details of a customer.

| Input       | Comments                                                          | Default |
| ----------- | ----------------------------------------------------------------- | ------- |
| Connection  |                                                                   |         |
| Customer ID | The identifier of the customer whose information you want to get. |         |

### Get Customers Info

Gets the identifiers and names of customers that are accessible to the current authenticated user. The results are filtered by customer name.

| Input                | Comments                                                                                                                                                                                                                                                                                            | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                                                                                                                     |         |
| Customer Name Filter | A partial or full name of the customers that you want to get. The operation includes the customer in the result if the customer's name begins with the specified filter name. This request element is optional. If you do not want to filter by customer name, set this element to an empty string. |         |
| Top Number           | A nonzero positive integer that specifies the number of customers to return in the result.                                                                                                                                                                                                          | 5       |

### Get Linked Accounts And Customers Info

Gets the customer and account hierarchy under the specified customer.

| Input                | Comments                                                                                                                                                                                                                                                                                                                                                                           | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Customer ID          | The identifier of the customer whose hierarchy you want to get.                                                                                                                                                                                                                                                                                                                    |         |
| Only Parent Accounts | Determines whether to return only the advertiser accounts that belong to the customer or to also return linked customers and linked advertiser accounts under other customers. To limit the results to advertiser accounts directly under the specified customer, set this element to true, and otherwise leave it empty or set the property to false. The default value is false. | false   |

### Raw Request

Send raw HTTP request to Bing Ads

| Input             | Comments                                                                                                                                                                                         | Default                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Account ID        | Use this field to search the Id element of the AdvertiserAccount.                                                                                                                                |                         |
| Connection        |                                                                                                                                                                                                  |                         |
| Customer ID       |                                                                                                                                                                                                  |                         |
| Soap Action       | After selecting the Microsoft Bing API Web Service, the Soap Action is the method or endpoint you want call.                                                                                     |                         |
| Soap Body Request | The required SOAP Body element contains the actual SOAP message intended for the ultimate endpoint of the message. Immediate child elements of the SOAP Body element may be namespace-qualified. |                         |
| Web Service API   | Bing Ads API Version 13 includes the following web service addresses.                                                                                                                            | CUSTOMER_MANAGEMENT_API |

### Search Accounts

Searches for accounts that match the request criteria.

| Input                     | Comments                                                                              | Default |
| ------------------------- | ------------------------------------------------------------------------------------- | ------- |
| Account ID                | Use this field to search the Id element of the AdvertiserAccount.                     |         |
| Account Life Cycle Status | Use this field to search the AccountLifeCycleStatus element of the AdvertiserAccount. |         |
| Account Name              | Use this field to search the Name element of the AdvertiserAccount.                   |         |
| Account Number            | Use this field to search the Number element of the AdvertiserAccount.                 |         |
| Connection                |                                                                                       |         |
| Ordering                  | Determines the order of results by the specified property of an account.              |         |
| Customer ID               | Use this field to search the Id element of the Customer.                              |         |
| User ID                   | Use this field to search the UserId element of the User.                              |         |

### Search Client Links

Searches for the client links for the customer of the current authenticated user, filtered by the search criteria. The operation returns the most recent link for each unique combination of agency customer and client account.

| Input                       | Comments                                                                                                                                                                                                                                                                                          | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Client Account ID           | Search for advertiser account ClientLink objects by the client advertiser account identifier.                                                                                                                                                                                                     |         |
| Client Customer ID          | Search for customer ClientLink objects by the client customer identifier.                                                                                                                                                                                                                         |         |
| Connection                  |                                                                                                                                                                                                                                                                                                   |         |
| Direct Managing Customer ID | Search for both customer and advertiser account ClientLink objects by the agency's managing customer identifier. If other customers also link to the client customer, the results will not include those client links.                                                                            |         |
| Managing Customer ID        | Search for advertiser account ClientLink objects by the agency's managing customer identifier. If other customers also link to the client advertiser account, the results will include those client links. This predicate value is deprecated in favor of the DirectManagingCustomerId predicate. |         |
| Ordering                    | Determines the order of results by the specified property of an account.                                                                                                                                                                                                                          |         |

### Send User Invitation

Sends an email invitation for a user to sign up for Microsoft Advertising. The invitation limits account access and permissions.

| Input       | Comments                                                                                                                                                                                      | Default   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Account ID  | An array of identifiers of the accounts that the user can manage. To specify that the user can manage all current and future accounts of the customer to which the user belongs, set to NULL. |           |
| Connection  |                                                                                                                                                                                               |           |
| Customer ID | The identifier of the customer this user is invited to manage. The AccountIds element determines which customer accounts the user can manage.                                                 |           |
| Email       | The email address corresponding to the user's Microsoft account. The address can contain a maximum of 100 characters.                                                                         |           |
| First Name  | The first name of the user. The first name is limited to 40 characters.                                                                                                                       |           |
| Last Name   | The last name of the user. The last name is limited to 40 characters.                                                                                                                         |           |
| Lcid        | The locale to use when sending correspondence to the user by email or postal mail.                                                                                                            | EnglishUS |
| Role Id     | The role that the user has for each customer or list of accounts.                                                                                                                             |           |
