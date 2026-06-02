---
title: Microsoft Bing Ads Connector
sidebar_label: Microsoft Bing Ads
description: Manage campaigns, accounts, and customer services in Microsoft Bing Ads.
---

![Microsoft Bing Ads](./assets/ms-bing-ads.png#connector-icon)
Manage campaigns, accounts, and customer services in Microsoft Bing Ads.

## Connections

### OAuth 2.0 {#oauth}

Authenticate using OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                 | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Client ID           | The client ID of the registered OAuth application for Microsoft Bing Ads.                                                |         |
| Client Secret Value | The client secret value of the registered OAuth application for Microsoft Bing Ads.                                      |         |
| Developer Token     | The developer token from the Account Manager account used for API authentication.                                        |         |
| Use Sandbox         | When true, uses the Microsoft Advertising sandbox environment (api.sandbox.bingads.microsoft.com) instead of production. | false   |

## Actions

### Add Client Link {#addclientlinks}

Initiates the client link process to manage the accounts of another customer. Sends a link request from one customer to another customer or account.

| Input                    | Comments                                                                                                                                                                                                                                                                                                          | Default     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Client Entity ID         | The identifier of the client advertiser account or client customer to manage.                                                                                                                                                                                                                                     |             |
| Connection               | The Microsoft Bing Ads connection to use.                                                                                                                                                                                                                                                                         |             |
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

### Add Offline Conversions Goal {#addofflineconversionsgoal}

Creates a new offline conversions goal.

| Input                           | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Default |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Account ID                      | The identifier of the ad account that owns or is associated with the entities in the request. This header element must have the same value as the AccountId body element when both are required                                                                                                                                                                                                                                                            |         |
| Conversion Goal Name            | The conversion goal name. The maximum length of the name is 100, and the name must be unique among all conversion goals belonging to the same customer.                                                                                                                                                                                                                                                                                                    |         |
| Conversion Goal Category        | The category that best describes the conversion goal. The category must be a valid Microsoft Advertising category.                                                                                                                                                                                                                                                                                                                                         |         |
| Conversion Window In Minutes    | The length of time in minutes after a click to track conversions. For example, setting this value to 43200 minutes (30 days) means conversions that happen within 30 days after a click are tracked. Past conversions are not affected. The default value is 43200. The minimum value supported is 1 minute, although a shorter conversion window will reduce the number of conversions recorded. The maximum value supported is 129600 minutes (90 days). |         |
| Count Type                      | Determines how conversions are recorded within the chosen conversion window.                                                                                                                                                                                                                                                                                                                                                                               | All     |
| Exclude From Bidding            | Determines whether or not to exclude data otherwise related to this conversion goal from a subset of performance report columns.                                                                                                                                                                                                                                                                                                                           | false   |
| Is Enhanced Conversions Enabled | Determines whether enhanced conversions are enabled for a conversion goal.                                                                                                                                                                                                                                                                                                                                                                                 | false   |
| Scope                           | Determines if the goal applies to all accounts or only the account specified in the required CustomerAccountId header element. When multiple Microsoft Advertising accounts exist, conversions can be tracked across all of them. If associated with one account, conversions will be tracked for that account only.                                                                                                                                       |         |
| Status                          | Defines the possible user-determined status values of a conversion goal. These are the status values that a user can decide to set, for example a goal can be set to Paused to stop tracking conversions for that goal.                                                                                                                                                                                                                                    |         |
| Is Externally Attributed        | When true, the offline conversion goal uses a custom attribution model and allows importing fractional credit for each MSCLKID.                                                                                                                                                                                                                                                                                                                            | false   |
| Customer ID                     | The identifier of the manager account (customer) the user is accessing or operating from. A user can have access to multiple manager accounts.                                                                                                                                                                                                                                                                                                             |         |
| Connection                      | The Microsoft Bing Ads connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                  |         |

### Apply Offline Conversions {#applyofflineconversions}

Applies offline conversions to a Microsoft Bing Ads account.

| Input                    | Comments                                                                                                                                                                                        | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Offline Conversions Body | The JSON body that contains the offline conversions to apply to the Bing Ads account.                                                                                                           |         |
| Customer Account Id      | The identifier of the ad account that owns or is associated with the entities in the request. This header element must have the same value as the AccountId body element when both are required |         |
| Customer ID              | The identifier of the manager account (customer) the user is accessing or operating from. A user can have access to multiple manager accounts.                                                  |         |
| Connection               | The Microsoft Bing Ads connection to use.                                                                                                                                                       |         |

### Get Account Info {#getaccountsinfo}

Gets the identifiers, names, and numbers of accounts that are accessible from the specified customer.

| Input       | Comments                                                                                                                                                                     | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Bing Ads connection to use.                                                                                                                                    |         |
| Customer ID | The identifier of the customer used to get the account information. This request element is optional. If not set, the user's credentials are used to determine the customer. |         |

### Get Customer {#getcustomer}

Gets the details of a customer.

| Input       | Comments                                                          | Default |
| ----------- | ----------------------------------------------------------------- | ------- |
| Connection  | The Microsoft Bing Ads connection to use.                         |         |
| Customer ID | The identifier of the customer whose information you want to get. |         |

### Get Customers Info {#getcustomersinfo}

Gets the identifiers and names of customers that are accessible to the current authenticated user. The results are filtered by customer name.

| Input                | Comments                                                                                                                                                                                                                                                                | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft Bing Ads connection to use.                                                                                                                                                                                                                               |         |
| Customer Name Filter | A partial or full name of the customers to retrieve. The operation includes the customer in the result if the customer's name begins with the specified filter name. This element is optional. To skip filtering by customer name, set this element to an empty string. |         |
| Top Number           | A nonzero positive integer that specifies the number of customers to return in the result.                                                                                                                                                                              | 5       |

### Get Linked Accounts And Customers Info {#getlinkedaccountsandcustomersinfo}

Gets the customer and account hierarchy under the specified customer.

| Input                | Comments                                                                                                                                                                                                                                                                                                                                                                           | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft Bing Ads connection to use.                                                                                                                                                                                                                                                                                                                                          |         |
| Customer ID          | The identifier of the customer whose hierarchy you want to get.                                                                                                                                                                                                                                                                                                                    |         |
| Only Parent Accounts | Determines whether to return only the advertiser accounts that belong to the customer or to also return linked customers and linked advertiser accounts under other customers. To limit the results to advertiser accounts directly under the specified customer, set this element to true, and otherwise leave it empty or set the property to false. The default value is false. | false   |

### Raw Request {#rawrequest}

Sends a raw HTTP request to Microsoft Bing Ads.

| Input             | Comments                                                                                                                                                                                         | Default                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Account ID        | The unique identifier for the advertiser account.                                                                                                                                                |                         |
| Connection        | The Microsoft Bing Ads connection to use.                                                                                                                                                        |                         |
| Customer ID       | The unique identifier for the customer.                                                                                                                                                          |                         |
| SOAP Action       | After selecting the Microsoft Bing API Web Service, the SOAP Action is the method or endpoint to call.                                                                                           |                         |
| SOAP Body Request | The required SOAP Body element contains the actual SOAP message intended for the ultimate endpoint of the message. Immediate child elements of the SOAP Body element may be namespace-qualified. |                         |
| Web Service API   | Bing Ads API Version 13 includes the following web service addresses.                                                                                                                            | CUSTOMER_MANAGEMENT_API |

### Search Accounts {#searchaccounts}

Searches for accounts that match the request criteria.

| Input                     | Comments                                                                              | Default |
| ------------------------- | ------------------------------------------------------------------------------------- | ------- |
| Account ID                | Use this field to search the Id element of the AdvertiserAccount.                     |         |
| Account Life Cycle Status | Use this field to search the AccountLifeCycleStatus element of the AdvertiserAccount. |         |
| Account Name              | The name to search for in the Name element of the AdvertiserAccount.                  |         |
| Account Number            | The number to search for in the Number element of the AdvertiserAccount.              |         |
| Connection                | The Microsoft Bing Ads connection to use.                                             |         |
| Ordering                  | Determines the order of results by the specified property of an account.              |         |
| Customer ID               | Use this field to search the Id element of the Customer.                              |         |
| User ID                   | The unique identifier for the user to search for.                                     |         |

### Search Client Links {#searchclientlinks}

Searches for the client links for the customer of the current authenticated user, filtered by the search criteria. The operation returns the most recent link for each unique combination of agency customer and client account.

| Input                       | Comments                                                                                                                                                                                                                                                                                          | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Client Account ID           | Search for advertiser account ClientLink objects by the client advertiser account identifier.                                                                                                                                                                                                     |         |
| Client Customer ID          | Search for customer ClientLink objects by the client customer identifier.                                                                                                                                                                                                                         |         |
| Connection                  | The Microsoft Bing Ads connection to use.                                                                                                                                                                                                                                                         |         |
| Direct Managing Customer ID | Search for both customer and advertiser account ClientLink objects by the agency's managing customer identifier. If other customers also link to the client customer, the results will not include those client links.                                                                            |         |
| Managing Customer ID        | Search for advertiser account ClientLink objects by the agency's managing customer identifier. If other customers also link to the client advertiser account, the results will include those client links. This predicate value is deprecated in favor of the DirectManagingCustomerId predicate. |         |
| Ordering                    | Determines the order of results by the specified property of an account.                                                                                                                                                                                                                          |         |

### Send User Invitation {#senduserinvitation}

Sends an email invitation for a user to sign up for Microsoft Advertising. The invitation limits account access and permissions.

| Input       | Comments                                                                                                                                                                                      | Default   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Account ID  | An array of identifiers of the accounts that the user can manage. To specify that the user can manage all current and future accounts of the customer to which the user belongs, set to NULL. |           |
| Connection  | The Microsoft Bing Ads connection to use.                                                                                                                                                     |           |
| Customer ID | The identifier of the customer this user is invited to manage. The AccountIds element determines which customer accounts the user can manage.                                                 |           |
| Email       | The email address corresponding to the user's Microsoft account. The address can contain a maximum of 100 characters.                                                                         |           |
| First Name  | The first name of the user. The first name is limited to 40 characters.                                                                                                                       |           |
| Last Name   | The last name of the user. The last name is limited to 40 characters.                                                                                                                         |           |
| LCID        | The locale to use when sending correspondence to the user by email or postal mail.                                                                                                            | EnglishUS |
| Role ID     | The role that the user has for each customer or list of accounts.                                                                                                                             |           |
