---
title: Xero Connector
sidebar_label: Xero
description: Manage invoices, items, accounts, payments and more objects from your Xero account.
---

![Xero](./assets/xero.png#connector-icon)
Manage invoices, items, accounts, payments and more objects from your Xero account.

## Connections

### Xero OAuth 2.0

Authenticate requests to Xero using values obtained from the developer console.

**Xero** uses OAuth 2.0 to authorize requests made to the API.
In order for your integration to authenticate with your customers' Xero accounts, you will need to create a Xero OAuth 2.0 app:

- Log on to Xero's [developer portal](https://developer.xero.com/app/manage/)
- Click **New app**
  - Give your app a name
  - Select **Web app** for **Integration type**
  - Enter _your company's_ URL for **Company or application URL**
  - Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` for the **Redirect URI**
- Next, open the **Configuration** page
  - Click **Generate Secret** and take note of the **Client id** and **Client secret** - you'll enter those in a moment

When you add a Xero step to an integration, a Xero OAuth 2.0 connection config variable will be created automatically for you:

- For **Scopes**, enter the scopes from [this list](https://developer.xero.com/documentation/guides/oauth2/scopes/) that are relevant to your integration.
  Always include the `offline_access` scope in order for authentication tokens to refresh automatically.
- For **Client ID** and **Client Secret**, enter the values you noted above.
- A single customer might be logged in to multiple tenants, and **Tenant Name** is unique for each customer.
  Leave that input blank, and click the gear icon next to **Tenant Name**.
  Adjust **Input Visibility** and select **Customer** to make that input visible to your customers.
  That way, your customers will be prompted for their tenant name when they enable this integration.

For additional information regarding authentication, please refer to the [Xero docs](https://developer.xero.com/documentation/guides/oauth2/auth-flow/#2-users-are-redirected-back-to-you-with-a-code).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                 | Default                                                                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. You must specify 'offline_access' to enable automatic token refresh. | offline_access accounting.settings accounting.contacts accounting.attachments |
| Client ID     | Provide the Client Id you received from the Xero Developer Console.                                                                                      |                                                                               |
| Client Secret | Provide the Client Secret you generated from the Xero Developer Console.                                                                                 |                                                                               |
| Tenant Name   | The name of the tenant you are requesting access to.                                                                                                     |                                                                               |

### Xero OAuth 2.0 Client Credentials

Authenticate requests to Xero using client credentials (Custom Connection).

**Xero** uses OAuth 2.0 to authorize requests made to the API.
You can use client credentials grant type to access data from a single Xero organization using Custom Connections.

Custom Connections are a premium integration option that utilize the client credentials grant type to access data from a single Xero organization.

**Setting up a Custom Connection**

1. **Create the Custom Connection**
   - Log in to [My Apps](https://developer.xero.com/app/manage) and click “New App”.
   - Give the integration a name and select “Custom connection” as the integration type.

2. **Select scopes and the authorizing user**
   - Next, select the API scopes your integration will need and who will authorize the connection.
   - That user will then be emailed a link that takes them to the authorization step.
   - Once authorization is complete you will receive an email to let you know the connection has been authorized.

3. **Authorize the connection**
   - After clicking the Connect button in the email, the authorizing user will be taken to a consent screen where they can see which scopes are being requested and select the organization to connect.
   - Note that an organization needs to have purchased a subscription with sufficient Custom Connections to be authorized and connected.
   - The only exception is the Xero Demo Company, which can be used for free for development purposes.

4. **Retrieve your client id and client secret**
   - Once the custom connection has been authorized, the client id will be available on the app details page and you can generate the client secret.
   - You'll enter those into your connection.

For more information, check the [documentation here](https://developer.xero.com/documentation/guides/oauth2/custom-connections/).

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                 | Default                                                        |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. Don't specify 'offline_access' as this is a client credentials flow. | accounting.settings accounting.contacts accounting.attachments |
| Client ID     | Provide the Client Id you received from the Xero Developer Console.                                                                                      |                                                                |
| Client Secret | Provide the Client Secret you generated from the Xero Developer Console.                                                                                 |                                                                |

## Triggers

### Webhook

Receive and validate webhook requests from Xero for webhooks you configure.

| Input       | Comments                                                    | Default |
| ----------- | ----------------------------------------------------------- | ------- |
| Webhook Key | Provide the webhook key that was created upon subscription. |         |

## Actions

### Add Notes To Invoice

Add additional notes to an invoice by Id

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Invoice ID | Provide a string value for the Invoice ID.            |         |
| Notes      | Provide a string value for notes to add to an object. |         |
| Connection | The connection to use.                                |         |

### Add Note To Item

Add a note to an item's history by Id

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Item ID    | Provide a string value for the Item ID.               |         |
| Notes      | Provide a string value for notes to add to an object. |         |
| Connection | The connection to use.                                |         |

### Archive Account

Archive the information and metadata of an account by Id

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Account ID | Provide a string value for the Account ID |         |
| Connection | The connection to use.                    |         |

### Archive Contact

Archive the information and metadata of a contact by Id

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Contact ID | Provide a string value for the Contact ID. |         |
| Connection | The connection to use.                     |         |

### Create Account

Create a new account

| Input                  | Comments                                                                                                                                                                               | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Account Code           | Provide a string value for the account code. This value is a customer defined alpha numeric account code.                                                                              |         |
| Account Name           | Provide a string value for the name of the account.                                                                                                                                    |         |
| Account Type           | Provide a string value for the type of the given account. You can choose from the list of provided values here: https://developer.xero.com/documentation/api/accounting/types#accounts |         |
| Optional Values        | For each item, provide a key and value to be used in the request body.                                                                                                                 |         |
| Bank Account Number    | This value is required if you are creating an account of type 'BANK'.                                                                                                                  |         |
| Show In Expense Claims | This value will determine if your account will show in expense claims. This field is required for certain accounts.                                                                    | false   |
| Connection             | The connection to use.                                                                                                                                                                 |         |

### Create Attachment

Add an attachment to an existing object. Existing attachments with that file name will be overridden.

| Input        | Comments                                                                                                                                                             | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Object Type  | Provide a string value for the type of object you would like to access.                                                                                              |         |
| Object ID    | Provide a string value for the Id of the object.                                                                                                                     |         |
| File Name    | Provide a string value for the name of the file you want to attach to the object. The File Name will become the unique identifier of the file for update operations. |         |
| File Data    | Provide a value that represents the data of the file you want to upload                                                                                              |         |
| Content Type | MIME type of the file you want to upload                                                                                                                             |         |
| Connection   | The connection to use.                                                                                                                                               |         |

### Create Contact

Create a new contact

| Input                        | Comments                                                                                                                                                                                                                                                                                                                                           | Default |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The connection to use.                                                                                                                                                                                                                                                                                                                             |         |
| Contact Name                 | Provide a string value for the name of the contact.                                                                                                                                                                                                                                                                                                |         |
| First Name                   | Provide a string value for the first name of the contact.                                                                                                                                                                                                                                                                                          |         |
| Last Name                    | Provide a string value for the last name of the contact.                                                                                                                                                                                                                                                                                           |         |
| Email Address                | Provide a valid email address for the contact.                                                                                                                                                                                                                                                                                                     |         |
| Address Type                 | Provide a string value for the address type.                                                                                                                                                                                                                                                                                                       |         |
| Address                      | Provide a string value that represents a valid address.                                                                                                                                                                                                                                                                                            |         |
| City                         | Provide a string value for the city of the address.                                                                                                                                                                                                                                                                                                |         |
| Postal Code                  | Provide a valid postal code.                                                                                                                                                                                                                                                                                                                       |         |
| Country                      | Provide a string value for the country of the address.                                                                                                                                                                                                                                                                                             |         |
| Region                       | Provide a string value for the region of the address.                                                                                                                                                                                                                                                                                              |         |
| Bank Account Details         | Provide a string value for the details of the contacts bank account. Depending on the type of account, providing a value for this field could cause your request to fail. For more information on the expected shape of the Account object, refer to the Xero docs: https://developer.xero.com/documentation/api/accounting/accounts/#get-accounts |         |
| Contact Status               | Provide a string value for the status of the contact.                                                                                                                                                                                                                                                                                              |         |
| Tax Number                   | Provide a string value for the Tax number. For more information on what value to provide, refer to the Xero docs: https://developer.xero.com/documentation/api/accounting/types#tax-types                                                                                                                                                          |         |
| Accounts Receivable Tax Type | Provide a string value for the tax type of accounts receivable for the account. For more information on what value to provide, refer to the Xero docs: https://developer.xero.com/documentation/api/accounting/types#tax-types                                                                                                                     |         |
| Accounts Payable Tax Type    | Provide a string value for the tax type of accounts payable for the account. For more information on what value to provide, refer to the Xero docs: https://developer.xero.com/documentation/api/accounting/types#tax-types                                                                                                                        |         |
| Default Currency             | Provide a valid type of currency.                                                                                                                                                                                                                                                                                                                  |         |
| Additional Fields            | Additional fields that might not be covered by the standard inputs. See https://developer.xero.com/documentation/api/accounting/contacts#post-contacts for additional fields.                                                                                                                                                                      |         |

### Create Invoice

Create a new invoice

| Input             | Comments                                                                                                                                                                                                                        | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Invoice Type      | Provide a string value for the type of the given invoice.                                                                                                                                                                       |         |
| Contact ID        | Provide a string value for the Contact ID.                                                                                                                                                                                      |         |
| Invoice Status    | This value is required if you want to make payments on an invoice. Will default to 'DRAFT'                                                                                                                                      |         |
| Line Items        | Provide a JSON array, For each item, provide an object describing a valid line item. The 'ItemCode', 'Tracking', and 'DiscountRate' properties are optional. If you want to provide no line items, simply enter an empty Array. |         |
| Line Amount Type  | Provide a string value for the line Amount Types.                                                                                                                                                                               |         |
| Date              | Date invoice was issued. If the Date element is not specified it will default to the current date based on the timezone setting of the organization.                                                                            |         |
| Due Date          | Date invoice is due.                                                                                                                                                                                                            |         |
| Date String       | Provide a string value for the date in which the invoice was created.                                                                                                                                                           |         |
| Due Date String   | Provide a string value for the due date of the invoice.                                                                                                                                                                         |         |
| Invoice Number    | Provide a string value for the unique invoice number.                                                                                                                                                                           |         |
| Reference         | Additional reference number (Accounts Receivable invoices only).                                                                                                                                                                |         |
| URL               | URL link to a source document – shown as "Go to [appName]" in the Xero app.                                                                                                                                                     |         |
| Currency Code     | The currency that invoice has been raised in.                                                                                                                                                                                   |         |
| Sent To Contact   | Boolean to set whether the invoice in the Xero app should be marked as "sent". This can be set only on invoices that have been approve.                                                                                         | false   |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.xero.com/documentation/api/accounting/invoices#post-invoices for additional fields.                                                   |         |
| Connection        | The connection to use.                                                                                                                                                                                                          |         |

### Create Item

Create a new Item

| Input                        | Comments                                                                                                                                                | Default |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Item Code                    | Provide a user-defined valid item code.                                                                                                                 |         |
| Description                  | Provide a string value for the description.                                                                                                             |         |
| Purchase Description         | Provide a string value for the description.                                                                                                             |         |
| Purchase Unit Price          | Provide the unit price of the purchase.                                                                                                                 |         |
| Purchase Account Code        | Provide the account code of the purchase.                                                                                                               |         |
| Purchase Tax Type            | Provide the tax type of the purchaser. Pick a value from the items listed here: https://developer.xero.com/documentation/api/accounting/types#tax-types |         |
| Sales Unit Price             | Provide the unit price of the sale, if the item has been sold.                                                                                          |         |
| Sales Account Code           | Provide the account code of the sale.                                                                                                                   |         |
| Item Name                    | Provide a string value for the name of the item.                                                                                                        |         |
| Sales Tax Type               | Provide the tax type of the Seller. Provide a value from the items listed here: https://developer.xero.com/documentation/api/accounting/types#tax-types |         |
| Inventory Asset Account Code | Provide the account code for the inventory asset                                                                                                        |         |
| Is Sold                      | Provide a boolean value to determine if the item has been sold yet.                                                                                     | false   |
| Is Purchased                 | Provide a boolean value to determine if the item has been purchased yet.                                                                                | false   |
| Connection                   | The connection to use.                                                                                                                                  |         |

### Delete Account

Delete the information and metadata of an account by Id

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Account ID | Provide a string value for the Account ID |         |
| Connection | The connection to use.                    |         |

### Delete Invoice

Delete the information and metadata of an invoice by Id

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Invoice ID | Provide a string value for the Invoice ID. |         |
| Connection | The connection to use.                     |         |

### Delete Item

Delete the information and metadata of an item by Id

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Item ID    | Provide a string value for the Item ID. |         |
| Connection | The connection to use.                  |         |

### Get Account

Get the information and metadata of an account by Id

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Account ID | Provide a string value for the Account ID |         |
| Connection | The connection to use.                    |         |

### Get Attachment

Get an attachment by ID

| Input       | Comments                                                                                                                                                             | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Object Type | Provide a string value for the type of object you would like to access.                                                                                              |         |
| Object ID   | Provide a string value for the Id of the object.                                                                                                                     |         |
| File Name   | Provide a string value for the name of the file you want to attach to the object. The File Name will become the unique identifier of the file for update operations. |         |
| Connection  | The connection to use.                                                                                                                                               |         |

### Get Contact

Get the information and metadata of a contact by Id

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Contact ID | Provide a string value for the Contact ID. |         |
| Connection | The connection to use.                     |         |

### Get Contact History

Get the information and metadata of a contact's history by Id

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Contact ID | Provide a string value for the Contact ID. |         |
| Connection | The connection to use.                     |         |

### Get Invoice

Get the information and metadata of an invoice by Id

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Invoice ID | Provide a string value for the Invoice ID. |         |
| Connection | The connection to use.                     |         |

### Get Item

Get the information and metadata of an item by Id

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Item ID    | Provide a string value for the Item ID. |         |
| Connection | The connection to use.                  |         |

### Get Item History

Get the information and metadata of an items's history by Id

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Item ID    | Provide a string value for the Item ID. |         |
| Connection | The connection to use.                  |         |

### Get Payment

Get the information and metadata of a payment by id

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Payment ID | Provide a string value for the Id of the payment. |         |
| Connection | The connection to use.                            |         |

### Get Payment History

Get the information and metadata of a payment's history by Id

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Payment ID | Provide a string value for the Id of the payment. |         |
| Connection | The connection to use.                            |         |

### List Accounts

List all accounts

| Input          | Comments                                                                                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The connection to use.                                                                                  |         |
| Modified After | Only contacts created or modified since this timestamp will be returned.                                |         |
| Where          | The where parameter allows you to filter on endpoints and elements that don't have explicit parameters. |         |

### List Connections

List all connections

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection | The connection to use. |         |

### List Contacts

List all contacts

| Input          | Comments                                                                                                                                                                                  | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The connection to use.                                                                                                                                                                    |         |
| Page Number    | Provide the page of the results you would like to return. Pagination will only be enabled if over 100 elements are returned by your request. It is not possible to specify the page size. |         |
| Modified After | Only contacts created or modified since this timestamp will be returned.                                                                                                                  |         |
| Where          | The where parameter allows you to filter on endpoints and elements that don't have explicit parameters.                                                                                   |         |

### List Invoices

List all invoices

| Input          | Comments                                                                                                                                                                                  | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The connection to use.                                                                                                                                                                    |         |
| Page Number    | Provide the page of the results you would like to return. Pagination will only be enabled if over 100 elements are returned by your request. It is not possible to specify the page size. |         |
| Modified After | Only contacts created or modified since this timestamp will be returned.                                                                                                                  |         |
| Where          | The where parameter allows you to filter on endpoints and elements that don't have explicit parameters.                                                                                   |         |

### List Items

List all items

| Input          | Comments                                                                                                                                                                                  | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The connection to use.                                                                                                                                                                    |         |
| Page Number    | Provide the page of the results you would like to return. Pagination will only be enabled if over 100 elements are returned by your request. It is not possible to specify the page size. |         |
| Modified After | Only contacts created or modified since this timestamp will be returned.                                                                                                                  |         |
| Where          | The where parameter allows you to filter on endpoints and elements that don't have explicit parameters.                                                                                   |         |

### List Payments

List all payments

| Input          | Comments                                                                                                                                                                                  | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The connection to use.                                                                                                                                                                    |         |
| Page Number    | Provide the page of the results you would like to return. Pagination will only be enabled if over 100 elements are returned by your request. It is not possible to specify the page size. |         |
| Modified After | Only contacts created or modified since this timestamp will be returned.                                                                                                                  |         |
| Where          | The where parameter allows you to filter on endpoints and elements that don't have explicit parameters.                                                                                   |         |

### Pay Invoice

Create a new payment on an existing AP/AR invoice

| Input          | Comments                                                                                                                                   | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Invoice ID     | Provide a string value for the Invoice ID.                                                                                                 |         |
| Account ID     | Provide a string value for the Account ID                                                                                                  |         |
| Date String    | Provide a string value for the date in which the invoice was created.                                                                      |         |
| Payment Amount | Provide a string value for the amount of the payment. This value must be less than or equal to the outstanding amount owed on the invoice. |         |
| Connection     | The connection to use.                                                                                                                     |         |

### Raw Request

Send raw HTTP request to Xero

| Input                   | Comments                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The connection to use.                                                                                                                                                                                               |         |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                 | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                           | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                      | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                            | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                     | false   |

### Reverse Payment

Reverse a payment by Id

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Payment ID | Provide a string value for the Id of the payment. |         |
| Connection | The connection to use.                            |         |

### Send Invoice

Send an existing accounts receivable invoice through email

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Invoice ID | Provide a string value for the Invoice ID. |         |
| Connection | The connection to use.                     |         |

### Update Account

Update the information and metadata of an existing account by Id

| Input                      | Comments                                                                                                                                                                               | Default |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Account ID                 | Provide a string value for the Account ID                                                                                                                                              |         |
| Account Code               | Provide a string value for the account code. This value is a customer defined alpha numeric account code.                                                                              |         |
| Account Name               | Provide a string value for the name of the account.                                                                                                                                    |         |
| Account Type               | Provide a string value for the type of the given account. You can choose from the list of provided values here: https://developer.xero.com/documentation/api/accounting/types#accounts |         |
| Purchase Tax Type          | Provide the tax type of the purchaser. Pick a value from the items listed here: https://developer.xero.com/documentation/api/accounting/types#tax-types                                |         |
| Description                | Provide a string value for the description.                                                                                                                                            |         |
| Enable Payments To Account | This flag will enable payments to be made to the given account.                                                                                                                        | false   |
| Optional Values            | For each item, provide a key and value to be used in the request body.                                                                                                                 |         |
| Show In Expense Claims     | This value will determine if your account will show in expense claims. This field is required for certain accounts.                                                                    | false   |
| Connection                 | The connection to use.                                                                                                                                                                 |         |

### Update Contact

Update the information and metadata of a contact by Id

| Input                        | Comments                                                                                                                                                                                                                                                                                                                                           | Default |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Contact ID                   | Provide a string value for the Contact ID.                                                                                                                                                                                                                                                                                                         |         |
| Contact Number               | Provide a string value for the unique number identifier of the contact.                                                                                                                                                                                                                                                                            |         |
| Contact Name                 | Provide a string value for the name of the contact.                                                                                                                                                                                                                                                                                                |         |
| First Name                   | Provide a string value for the first name of the contact.                                                                                                                                                                                                                                                                                          |         |
| Last Name                    | Provide a string value for the last name of the contact.                                                                                                                                                                                                                                                                                           |         |
| Email Address                | Provide a valid email address for the contact.                                                                                                                                                                                                                                                                                                     |         |
| Accounts Payable Tax Type    | Provide a string value for the tax type of accounts payable for the account. For more information on what value to provide, refer to the Xero docs: https://developer.xero.com/documentation/api/accounting/types#tax-types                                                                                                                        |         |
| Accounts Receivable Tax Type | Provide a string value for the tax type of accounts receivable for the account. For more information on what value to provide, refer to the Xero docs: https://developer.xero.com/documentation/api/accounting/types#tax-types                                                                                                                     |         |
| Bank Account Details         | Provide a string value for the details of the contacts bank account. Depending on the type of account, providing a value for this field could cause your request to fail. For more information on the expected shape of the Account object, refer to the Xero docs: https://developer.xero.com/documentation/api/accounting/accounts/#get-accounts |         |
| Default Currency             | Provide a valid type of currency.                                                                                                                                                                                                                                                                                                                  |         |
| Tax Number                   | Provide a string value for the Tax number. For more information on what value to provide, refer to the Xero docs: https://developer.xero.com/documentation/api/accounting/types#tax-types                                                                                                                                                          |         |
| Contact Status               | Provide a string value for the status of the contact.                                                                                                                                                                                                                                                                                              |         |
| City                         | Provide a string value for the city of the address.                                                                                                                                                                                                                                                                                                |         |
| Address Type                 | Provide a string value for the address type.                                                                                                                                                                                                                                                                                                       |         |
| Address                      | Provide a string value that represents a valid address.                                                                                                                                                                                                                                                                                            |         |
| Postal Code                  | Provide a valid postal code.                                                                                                                                                                                                                                                                                                                       |         |
| Country                      | Provide a string value for the country of the address.                                                                                                                                                                                                                                                                                             |         |
| Region                       | Provide a string value for the region of the address.                                                                                                                                                                                                                                                                                              |         |
| Additional Fields            | Additional fields that might not be covered by the standard inputs. See https://developer.xero.com/documentation/api/accounting/contacts#post-contacts for additional fields.                                                                                                                                                                      |         |
| Connection                   | The connection to use.                                                                                                                                                                                                                                                                                                                             |         |

### Update Item

Update the information and metadata of an item by Id

| Input                        | Comments                                                                                                                                                | Default |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Item ID                      | Provide a string value for the Item ID.                                                                                                                 |         |
| Item Code                    | Provide a user-defined valid item code.                                                                                                                 |         |
| Item Name                    | Provide a string value for the name of the item.                                                                                                        |         |
| Description                  | Provide a string value for the description.                                                                                                             |         |
| Is Sold                      | Provide a boolean value to determine if the item has been sold yet.                                                                                     | false   |
| Is Purchased                 | Provide a boolean value to determine if the item has been purchased yet.                                                                                | false   |
| Purchase Description         | Provide a string value for the description.                                                                                                             |         |
| Purchase Unit Price          | Provide the unit price of the purchase.                                                                                                                 |         |
| Purchase Tax Type            | Provide the tax type of the purchaser. Pick a value from the items listed here: https://developer.xero.com/documentation/api/accounting/types#tax-types |         |
| Purchase Account Code        | Provide the account code of the purchase.                                                                                                               |         |
| Sales Account Code           | Provide the account code of the sale.                                                                                                                   |         |
| Sales Unit Price             | Provide the unit price of the sale, if the item has been sold.                                                                                          |         |
| Sales Tax Type               | Provide the tax type of the Seller. Provide a value from the items listed here: https://developer.xero.com/documentation/api/accounting/types#tax-types |         |
| Inventory Asset Account Code | Provide the account code for the inventory asset                                                                                                        |         |
| Optional Values              | For each item, provide a key and value to be used in the request body.                                                                                  |         |
| Connection                   | The connection to use.                                                                                                                                  |         |

### Void Invoice

Void an existing approved invoice that has no payments applied to it.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Invoice ID | Provide a string value for the Invoice ID. |         |
| Connection | The connection to use.                     |         |
