---
title: Xero Connector
sidebar_label: Xero
description: Manage invoices, items, accounts, payments, and more in Xero.
---

![Xero](./assets/xero.png#connector-icon)
[Xero](https://www.xero.com/us/) is a cloud-based accounting software platform for small and medium-sized businesses.
This component allows you to manage invoices, payments, items, and contacts through the Xero REST API.

## API Documentation

This component was built using the [Xero Accounting API](https://developer.xero.com/documentation/api/accounting/overview).

## Connections

### OAuth 2.0 {#oauth2}

Authenticate requests to Xero using OAuth 2.0.

**Xero** uses OAuth 2.0 to authorize requests made to the API.
This connection uses the OAuth 2.0 Authorization Code grant type so that the integration can authenticate with a customer's Xero account.

#### Prerequisites

- A Xero account with access to the [developer portal](https://developer.xero.com/app/manage/)

#### Setup Steps

1. Log on to Xero's [developer portal](https://developer.xero.com/app/manage/).
2. Click **New app**.
   - Give the app a name.
   - Select **Web app** for **Integration type**.
   - Enter the company's URL for **Company or application URL**.
   - Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` for the **Redirect URI**.
3. Open the **Configuration** page.
   - Click **Generate Secret** and take note of the **Client id** and **Client secret**.

#### Configure the Connection

When a Xero step is added to an integration, a Xero OAuth 2.0 connection config variable is created automatically.

- For **Scopes**, enter the scopes from [this list](https://developer.xero.com/documentation/guides/oauth2/scopes/) that are relevant to the integration.
  Always include the `offline_access` scope so that authentication tokens refresh automatically.
- For **Client ID** and **Client Secret**, enter the values noted above.
- A single customer might be logged in to multiple tenants, and **Tenant Name** is unique for each customer.
  Leave that input blank, and click the gear icon next to **Tenant Name**.
  Adjust **Input Visibility** and select **Customer** to make that input visible to customers.
  That way, customers are prompted for their tenant name when they enable this integration.

For additional information regarding authentication, refer to the [Xero docs](https://developer.xero.com/documentation/guides/oauth2/auth-flow/#2-users-are-redirected-back-to-you-with-a-code).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                 | Default                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. You must specify 'offline_access' to enable automatic token refresh. | offline_access accounting.settings accounting.contacts accounting.attachments |
| Client ID     | Provide the Client Id you received from the Xero Developer Console.                                                                                      |                                                                               |
| Client Secret | Provide the Client Secret you generated from the Xero Developer Console.                                                                                 |                                                                               |
| Tenant Name   | The name of the tenant you are requesting access to.                                                                                                     |                                                                               |

### OAuth 2.0 Client Credentials {#xerooauthclientcredentials}

Authenticate requests to Xero using OAuth 2.0 client credentials.

**Xero** uses OAuth 2.0 to authorize requests made to the API.
This connection uses the client credentials grant type to access data from a single Xero organization using Custom Connections.

Custom Connections are a premium integration option that utilize the client credentials grant type to access data from a single Xero organization.

#### Setup Steps

1. Create the Custom Connection.

   - Log in to [My Apps](https://developer.xero.com/app/manage) and click **New App**.
   - Give the integration a name and select **Custom connection** as the integration type.

2. Select scopes and the authorizing user.

   - Select the API scopes the integration will need and who will authorize the connection.
   - That user is then emailed a link that takes them to the authorization step.
   - Once authorization is complete, an email confirms the connection has been authorized.

3. Authorize the connection.

   - After clicking the **Connect** button in the email, the authorizing user is taken to a consent screen where they can see which scopes are being requested and select the organization to connect.
   - Note that an organization needs to have purchased a subscription with sufficient Custom Connections to be authorized and connected.
   - The only exception is the Xero Demo Company, which can be used for free for development purposes.

4. Retrieve the client id and client secret.

   - Once the custom connection has been authorized, the client id is available on the app details page and the client secret can be generated.

#### Configure the Connection

- For **Scopes**, enter the scopes relevant to the integration, separated by spaces. Do not include `offline_access`, as this is a client credentials flow.
- For **Client ID** and **Client Secret**, enter the values retrieved from the app details page.

For more information, refer to the [Custom Connections documentation](https://developer.xero.com/documentation/guides/oauth2/custom-connections/).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                 | Default                                                        |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. Don't specify 'offline_access' as this is a client credentials flow. | accounting.settings accounting.contacts accounting.attachments |
| Client ID     | Provide the Client Id you received from the Xero Developer Console.                                                                                      |                                                                |
| Client Secret | Provide the Client Secret you generated from the Xero Developer Console.                                                                                 |                                                                |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for new and updated records in Xero on a configured schedule.

| Input                | Comments                                                       | Default |
| -------------------- | -------------------------------------------------------------- | ------- |
| Connection           | The Xero connection to use.                                    |         |
| Resource Type        | The type of Xero resource to poll for new and updated records. |         |
| Show New Records     | Include newly created records in trigger results.              | true    |
| Show Updated Records | Include updated records in trigger results.                    | true    |

### Webhook {#webhook}

Receive and validate webhook requests from Xero for manually configured webhook subscriptions.

| Input       | Comments                                                          | Default |
| ----------- | ----------------------------------------------------------------- | ------- |
| Webhook Key | The webhook signing key created when the subscription was set up. |         |

## Actions

### Add Note to Invoice {#addnotetoinvoice}

Add additional notes to an invoice by ID.

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Xero connection to use.                   |         |
| Invoice ID | The unique identifier for the invoice.        |         |
| Notes      | The note text to add to the object's history. |         |

### Add Note to Item {#addnotetoitem}

Add a note to an item's history by ID.

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Xero connection to use.                   |         |
| Item ID    | The unique identifier for the item.           |         |
| Notes      | The note text to add to the object's history. |         |

### Archive Account {#archiveaccount}

Archive an account by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Account ID | The unique identifier for the account. |         |

### Archive Contact {#archivecontact}

Archive a contact by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Contact ID | The unique identifier for the contact. |         |

### Create Account {#createaccount}

Create a new account.

| Input                  | Comments                                                                                                                                           | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Xero connection to use.                                                                                                                        |         |
| Account Code           | A customer-defined alphanumeric code that identifies the account.                                                                                  |         |
| Account Name           | The display name shown for the account.                                                                                                            |         |
| Account Type           | The category of the account. Choose a value from the [Xero account types](https://developer.xero.com/documentation/api/accounting/types#accounts). |         |
| Bank Account Number    | The bank account number. Required when the account type is BANK.                                                                                   |         |
| Show In Expense Claims | When true, the account appears in expense claims. Required for certain account types.                                                              | false   |
| Optional Values        | For each item, provide a key and value to be used in the request body.                                                                             |         |

### Create Attachment {#createattachment}

Add an attachment to an existing object. Existing attachments with that file name will be overridden.

| Input        | Comments                                                                                              | Default |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Xero connection to use.                                                                           |         |
| Object Type  | The type of object to attach the file to.                                                             |         |
| Object ID    | The unique identifier for the object to attach the file to.                                           |         |
| File Name    | The name of the file to attach. This becomes the unique identifier of the file for update operations. |         |
| File Data    | The binary contents of the file to upload.                                                            |         |
| Content Type | The MIME type of the file to upload.                                                                  |         |

### Create Contact {#createcontact}

Create a new contact.

| Input                        | Comments                                                                                                                                                                                                                                                                      | Default |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The Xero connection to use.                                                                                                                                                                                                                                                   |         |
| Contact Name                 | The full name or business name of the contact.                                                                                                                                                                                                                                |         |
| First Name                   | The given name of the contact.                                                                                                                                                                                                                                                |         |
| Last Name                    | The family name of the contact.                                                                                                                                                                                                                                               |         |
| Email Address                | The email address used to reach the contact.                                                                                                                                                                                                                                  |         |
| Address Type                 | The kind of address being provided.                                                                                                                                                                                                                                           |         |
| Address                      | The street address of the contact.                                                                                                                                                                                                                                            |         |
| City                         | The city portion of the contact's address.                                                                                                                                                                                                                                    |         |
| Postal Code                  | The postal or ZIP code of the contact's address.                                                                                                                                                                                                                              |         |
| Country                      | The country portion of the contact's address.                                                                                                                                                                                                                                 |         |
| Region                       | The state or region portion of the contact's address.                                                                                                                                                                                                                         |         |
| Bank Account Details         | The bank account number for the contact. Depending on the account type, providing a value here could cause the request to fail. See the [Xero accounts documentation](https://developer.xero.com/documentation/api/accounting/accounts/#get-accounts) for the expected shape. |         |
| Contact Status               | The status to assign to the contact.                                                                                                                                                                                                                                          |         |
| Tax Number                   | The tax number of the contact. See the [Xero tax types](https://developer.xero.com/documentation/api/accounting/types#tax-types) for accepted values.                                                                                                                         |         |
| Accounts Receivable Tax Type | The default tax type applied to sales invoices for the contact. See the [Xero tax types](https://developer.xero.com/documentation/api/accounting/types#tax-types) for accepted values.                                                                                        |         |
| Accounts Payable Tax Type    | The default tax type applied to bills for the contact. See the [Xero tax types](https://developer.xero.com/documentation/api/accounting/types#tax-types) for accepted values.                                                                                                 |         |
| Default Currency             | The default currency code used for the contact.                                                                                                                                                                                                                               |         |
| Additional Fields            | Additional fields that might not be covered by the standard inputs. See [Xero API documentation](https://developer.xero.com/documentation/api/accounting/contacts#post-contacts) for additional fields.                                                                       |         |

### Create Invoice {#createinvoice}

Create a new invoice.

| Input             | Comments                                                                                                                                                                                                | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Xero connection to use.                                                                                                                                                                             |         |
| Invoice Type      | The type of invoice to create.                                                                                                                                                                          |         |
| Contact ID        | The unique identifier for the contact.                                                                                                                                                                  |         |
| Line Amount Type  | Whether line amounts are tax exclusive, inclusive, or have no tax.                                                                                                                                      |         |
| Invoice Status    | The status of the invoice. Required to make payments on an invoice. Defaults to DRAFT.                                                                                                                  |         |
| Line Items        | A JSON array where each object describes a line item. The 'ItemCode', 'Tracking', and 'DiscountRate' properties are optional. Use an empty array for no line items.                                     |         |
| Date              | The date the invoice was issued. Defaults to the current date based on the organization's timezone setting if not specified. Format: YYYY-MM-DD.                                                        |         |
| Due Date          | The date the invoice is due. Format: YYYY-MM-DD.                                                                                                                                                        |         |
| Date String       | The date the record was created. Format: YYYY-MM-DDTHH:MM:SS.                                                                                                                                           |         |
| Due Date String   | The due date of the invoice as a string. Format: YYYY-MM-DDTHH:MM:SS.                                                                                                                                   |         |
| Invoice Number    | A unique number that identifies the invoice.                                                                                                                                                            |         |
| Reference         | An additional reference number for the invoice (Accounts Receivable invoices only).                                                                                                                     |         |
| URL               | The URL of a source document, shown as "Go to [appName]" in the Xero app.                                                                                                                               |         |
| Currency Code     | The currency the invoice has been raised in.                                                                                                                                                            |         |
| Sent To Contact   | When true, marks the invoice in the Xero app as "sent". This can only be set on invoices that have been approved.                                                                                       | false   |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See [Xero API documentation](https://developer.xero.com/documentation/api/accounting/invoices#post-invoices) for additional fields. |         |

### Create Item {#createitem}

Create a new item.

| Input                        | Comments                                                                                                                                                      | Default |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The Xero connection to use.                                                                                                                                   |         |
| Item Code                    | A user-defined code that identifies the item.                                                                                                                 |         |
| Description                  | A summary that describes the item.                                                                                                                            |         |
| Purchase Description         | A summary shown on purchase transactions for the item.                                                                                                        |         |
| Purchase Unit Price          | The unit price applied when the item is purchased.                                                                                                            |         |
| Purchase Account Code        | The account code used for purchases of the item.                                                                                                              |         |
| Purchase Tax Type            | The tax type applied to purchases. Choose a value from the [Xero tax types](https://developer.xero.com/documentation/api/accounting/types#tax-types).         |         |
| Sales Unit Price             | The unit price applied when the item is sold.                                                                                                                 |         |
| Sales Account Code           | The account code used for sales of the item.                                                                                                                  |         |
| Item Name                    | The display name of the item.                                                                                                                                 |         |
| Sales Tax Type               | The tax type applied to sales of the item. Choose a value from the [Xero tax types](https://developer.xero.com/documentation/api/accounting/types#tax-types). |         |
| Inventory Asset Account Code | The account code used to track the inventory asset.                                                                                                           |         |
| Is Sold                      | When true, the item is available to sell.                                                                                                                     | false   |
| Is Purchased                 | When true, the item is available to purchase.                                                                                                                 | false   |

### Delete Account {#deleteaccount}

Delete an account by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Account ID | The unique identifier for the account. |         |

### Delete Invoice {#deleteinvoice}

Delete an invoice by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Invoice ID | The unique identifier for the invoice. |         |

### Delete Item {#deleteitem}

Delete an item by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Xero connection to use.         |         |
| Item ID    | The unique identifier for the item. |         |

### Get Account {#getaccount}

Retrieve the information and metadata of an account by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Account ID | The unique identifier for the account. |         |

### Get Attachment {#getattachment}

Retrieve an attachment by ID.

| Input       | Comments                                                                                              | Default |
| ----------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Xero connection to use.                                                                           |         |
| Object Type | The type of object to attach the file to.                                                             |         |
| Object ID   | The unique identifier for the object to attach the file to.                                           |         |
| File Name   | The name of the file to attach. This becomes the unique identifier of the file for update operations. |         |

### Get Contact {#getcontact}

Retrieve the information and metadata of a contact by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Contact ID | The unique identifier for the contact. |         |

### Get Contact History {#getcontacthistory}

Retrieve the information and metadata of a contact's history by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Contact ID | The unique identifier for the contact. |         |

### Get Invoice {#getinvoice}

Retrieve the information and metadata of an invoice by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Invoice ID | The unique identifier for the invoice. |         |

### Get Item {#getitem}

Retrieve the information and metadata of an item by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Xero connection to use.         |         |
| Item ID    | The unique identifier for the item. |         |

### Get Item History {#getitemhistory}

Retrieve the information and metadata of an item's history by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Xero connection to use.         |         |
| Item ID    | The unique identifier for the item. |         |

### Get Payment {#getpayment}

Retrieve the information and metadata of a payment by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Payment ID | The unique identifier for the payment. |         |

### Get Payment History {#getpaymenthistory}

Retrieve the information and metadata of a payment's history by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Payment ID | The unique identifier for the payment. |         |

### List Accounts {#listaccounts}

List all accounts.

| Input          | Comments                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Xero connection to use.                                                                          |         |
| Modified After | Only records created or modified since this timestamp will be returned. Format: YYYY-MM-DDTHH:MM:SS. |         |
| Where          | A filter expression applied to endpoints and elements that don't have explicit parameters.           |         |

### List Connections {#listconnections}

List all connections.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The Xero connection to use. |         |

### List Contacts {#listcontacts}

List all contacts.

| Input          | Comments                                                                                                                                                        | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Xero connection to use.                                                                                                                                     |         |
| Fetch All      | When true, automatically fetches all pages of results. This ignores the page number input.                                                                      | false   |
| Page Number    | The page of results to return (1-based). Pagination is only enabled when more than 100 elements are returned by the request. The page size cannot be specified. |         |
| Modified After | Only records created or modified since this timestamp will be returned. Format: YYYY-MM-DDTHH:MM:SS.                                                            |         |
| Where          | A filter expression applied to endpoints and elements that don't have explicit parameters.                                                                      |         |

### List Invoices {#listinvoices}

List all invoices.

| Input          | Comments                                                                                                                                                        | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Xero connection to use.                                                                                                                                     |         |
| Fetch All      | When true, automatically fetches all pages of results. This ignores the page number input.                                                                      | false   |
| Page Number    | The page of results to return (1-based). Pagination is only enabled when more than 100 elements are returned by the request. The page size cannot be specified. |         |
| Modified After | Only records created or modified since this timestamp will be returned. Format: YYYY-MM-DDTHH:MM:SS.                                                            |         |
| Where          | A filter expression applied to endpoints and elements that don't have explicit parameters.                                                                      |         |

### List Items {#listitems}

List all items.

| Input          | Comments                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Xero connection to use.                                                                          |         |
| Modified After | Only records created or modified since this timestamp will be returned. Format: YYYY-MM-DDTHH:MM:SS. |         |
| Where          | A filter expression applied to endpoints and elements that don't have explicit parameters.           |         |

### List Payments {#listpayments}

List all payments.

| Input          | Comments                                                                                                                                                        | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Xero connection to use.                                                                                                                                     |         |
| Fetch All      | When true, automatically fetches all pages of results. This ignores the page number input.                                                                      | false   |
| Page Number    | The page of results to return (1-based). Pagination is only enabled when more than 100 elements are returned by the request. The page size cannot be specified. |         |
| Modified After | Only records created or modified since this timestamp will be returned. Format: YYYY-MM-DDTHH:MM:SS.                                                            |         |
| Where          | A filter expression applied to endpoints and elements that don't have explicit parameters.                                                                      |         |

### Pay Invoice {#payinvoice}

Create a new payment on an existing AP/AR invoice.

| Input          | Comments                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Xero connection to use.                                                                          |         |
| Invoice ID     | The unique identifier for the invoice.                                                               |         |
| Account ID     | The unique identifier for the account.                                                               |         |
| Payment Amount | The amount of the payment. Must be less than or equal to the outstanding amount owed on the invoice. |         |
| Date String    | The date the record was created. Format: YYYY-MM-DDTHH:MM:SS.                                        |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to Xero.

| Input                   | Comments                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Xero connection to use.                                                                                                                                                                                          |         |
| URL                     | Input the path only (/Accounts), The base URL is already included (https://api.xero.com/api.xro/2.0). For example, to connect to https://api.xero.com/api.xro/2.0/Accounts, only /Accounts is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                  |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                        | false   |

### Reverse Payment {#reversepayment}

Reverse a payment by ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Payment ID | The unique identifier for the payment. |         |

### Send Invoice {#sendinvoice}

Send an existing accounts receivable invoice through email.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Invoice ID | The unique identifier for the invoice. |         |

### Update Account {#updateaccount}

Update the information and metadata of an existing account by ID.

| Input                      | Comments                                                                                                                                              | Default |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The Xero connection to use.                                                                                                                           |         |
| Account ID                 | The unique identifier for the account.                                                                                                                |         |
| Account Code               | A customer-defined alphanumeric code that identifies the account.                                                                                     |         |
| Account Name               | The display name shown for the account.                                                                                                               |         |
| Account Type               | The category of the account. Choose a value from the [Xero account types](https://developer.xero.com/documentation/api/accounting/types#accounts).    |         |
| Purchase Tax Type          | The tax type applied to purchases. Choose a value from the [Xero tax types](https://developer.xero.com/documentation/api/accounting/types#tax-types). |         |
| Description                | A summary that describes the item.                                                                                                                    |         |
| Enable Payments To Account | When true, allows payments to be made to the account.                                                                                                 | false   |
| Optional Values            | For each item, provide a key and value to be used in the request body.                                                                                |         |
| Show In Expense Claims     | When true, the account appears in expense claims. Required for certain account types.                                                                 | false   |

### Update Contact {#updatecontact}

Update the information and metadata of a contact by ID.

| Input                        | Comments                                                                                                                                                                                                                                                                      | Default |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The Xero connection to use.                                                                                                                                                                                                                                                   |         |
| Contact ID                   | The unique identifier for the contact.                                                                                                                                                                                                                                        |         |
| Contact Number               | A unique number that identifies the contact.                                                                                                                                                                                                                                  |         |
| Contact Name                 | The full name or business name of the contact.                                                                                                                                                                                                                                |         |
| First Name                   | The given name of the contact.                                                                                                                                                                                                                                                |         |
| Last Name                    | The family name of the contact.                                                                                                                                                                                                                                               |         |
| Email Address                | The email address used to reach the contact.                                                                                                                                                                                                                                  |         |
| Accounts Payable Tax Type    | The default tax type applied to bills for the contact. See the [Xero tax types](https://developer.xero.com/documentation/api/accounting/types#tax-types) for accepted values.                                                                                                 |         |
| Accounts Receivable Tax Type | The default tax type applied to sales invoices for the contact. See the [Xero tax types](https://developer.xero.com/documentation/api/accounting/types#tax-types) for accepted values.                                                                                        |         |
| Bank Account Details         | The bank account number for the contact. Depending on the account type, providing a value here could cause the request to fail. See the [Xero accounts documentation](https://developer.xero.com/documentation/api/accounting/accounts/#get-accounts) for the expected shape. |         |
| Default Currency             | The default currency code used for the contact.                                                                                                                                                                                                                               |         |
| Tax Number                   | The tax number of the contact. See the [Xero tax types](https://developer.xero.com/documentation/api/accounting/types#tax-types) for accepted values.                                                                                                                         |         |
| Contact Status               | The status to assign to the contact.                                                                                                                                                                                                                                          |         |
| City                         | The city portion of the contact's address.                                                                                                                                                                                                                                    |         |
| Address Type                 | The kind of address being provided.                                                                                                                                                                                                                                           |         |
| Address                      | The street address of the contact.                                                                                                                                                                                                                                            |         |
| Postal Code                  | The postal or ZIP code of the contact's address.                                                                                                                                                                                                                              |         |
| Country                      | The country portion of the contact's address.                                                                                                                                                                                                                                 |         |
| Region                       | The state or region portion of the contact's address.                                                                                                                                                                                                                         |         |
| Additional Fields            | Additional fields that might not be covered by the standard inputs. See [Xero API documentation](https://developer.xero.com/documentation/api/accounting/contacts#post-contacts) for additional fields.                                                                       |         |

### Update Item {#updateitem}

Update the information and metadata of an item by ID.

| Input                        | Comments                                                                                                                                                      | Default |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The Xero connection to use.                                                                                                                                   |         |
| Item ID                      | The unique identifier for the item.                                                                                                                           |         |
| Item Code                    | A user-defined code that identifies the item.                                                                                                                 |         |
| Item Name                    | The display name of the item.                                                                                                                                 |         |
| Description                  | A summary that describes the item.                                                                                                                            |         |
| Is Sold                      | When true, the item is available to sell.                                                                                                                     | false   |
| Is Purchased                 | When true, the item is available to purchase.                                                                                                                 | false   |
| Purchase Description         | A summary shown on purchase transactions for the item.                                                                                                        |         |
| Purchase Unit Price          | The unit price applied when the item is purchased.                                                                                                            |         |
| Purchase Tax Type            | The tax type applied to purchases. Choose a value from the [Xero tax types](https://developer.xero.com/documentation/api/accounting/types#tax-types).         |         |
| Purchase Account Code        | The account code used for purchases of the item.                                                                                                              |         |
| Sales Account Code           | The account code used for sales of the item.                                                                                                                  |         |
| Sales Unit Price             | The unit price applied when the item is sold.                                                                                                                 |         |
| Sales Tax Type               | The tax type applied to sales of the item. Choose a value from the [Xero tax types](https://developer.xero.com/documentation/api/accounting/types#tax-types). |         |
| Inventory Asset Account Code | The account code used to track the inventory asset.                                                                                                           |         |
| Optional Values              | For each item, provide a key and value to be used in the request body.                                                                                        |         |

### Void Invoice {#voidinvoice}

Void an existing approved invoice that has no payments applied to it.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Xero connection to use.            |         |
| Invoice ID | The unique identifier for the invoice. |         |
