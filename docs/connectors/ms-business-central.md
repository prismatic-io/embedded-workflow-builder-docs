---
title: Microsoft Dynamics 365 Business Central Connector
sidebar_label: Microsoft Dynamics 365 Business Central
description: Manage Sales Orders, Customers, Invoices, Vendors, and Shipments in Microsoft Dynamics 365 Business Central.
---

![Microsoft Dynamics 365 Business Central](./assets/ms-business-central.png#connector-icon)
[Microsoft Dynamics 365 Business Central](https://www.microsoft.com/en-us/dynamics-365/products/business-central) is a comprehensive enterprise resource planning (ERP) solution with capabilities including finance, manufacturing, customer relationship management (CRM), supply chains, analytics, and e-commerce.

This component manages Sales Orders, Customers, Invoices, Vendors, and Shipments in Microsoft Dynamics 365 Business Central.

## API Documentation

This component was built using the [Microsoft Dynamics v2.0 REST API](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/).

## Connections

### OAuth 2.0 Authorization Code {#businesscentraloauth2}

Authenticate using OAuth 2.0 Authorization Code

The OAuth 2.0 Authorization Code flow allows users to grant permission for integrations to interact with Business Central on their behalf. For more information, refer to the [Microsoft Business Central OAuth Documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/webservices/authenticate-web-services-using-oauth).

#### Prerequisites

- A Microsoft Azure account with administrator access
- Access to the Azure Portal

#### Register an Application in Azure

1. Log in to [Azure Portal](https://portal.azure.com/)
2. Select **App registrations**
3. Click **+ New registration**
   - **Supported account types** should be **Multi-tenant** for customers authenticating with their own Business Central instance, or **Single-tenant** for authenticating with a specific Business Central instance
   - Under **Redirect URI** enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - Click **Register**

#### Configure API Permissions

1. Under **API permissions** click **+ Add a permission**
2. Select **Business Central**
3. Check the following permissions:
   - `user_impersonation`
   - `offline_access`
   - `Financials.ReadWrite.All`
4. Click **Add permissions**

#### Create a Client Secret

1. Under **Certificates & secrets** click **+ New client secret**
2. Provide a description and expiration date
3. Take note of the **Value** (not the Secret ID) of the client secret

#### Retrieve the Client ID

1. Return to the **Overview** page
2. Take note of the **Application (client) ID**

#### Configure the Connection

Create a connection of type **OAuth 2.0 Authorization Code** and enter:

- **Web API URL**: The Business Central API URL in the format `https://api.businesscentral.dynamics.com/v2.0/<TENANT_DOMAIN>/<ENVIRONMENT>`
- **Scopes**: Use `https://api.businesscentral.dynamics.com/.default offline_access`
- **Client ID**: The Application (client) ID from the Azure app registration
- **Client Secret**: The secret value created above

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                           | Default                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Web API URL   | Your organization's Microsoft Business Central Web API URL.                                                                        |                                                                  |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access.                                                | https://api.businesscentral.dynamics.com/.default offline_access |
| Client ID     | The Client ID from your Azure AD application registration. Found in Azure Portal > App registrations > Overview.                   |                                                                  |
| Client Secret | The Client Secret from your Azure AD application registration. Found in Azure Portal > App registrations > Certificates & secrets. |                                                                  |

### OAuth 2.0 Client Credentials {#businesscentralclientcredentials}

Authenticate using OAuth 2.0 Client Credentials

The OAuth 2.0 Client Credentials flow allows applications to send requests to Business Central without user interaction. This requires creating an **Application User** in Business Central. For more information, refer to the [Microsoft Business Central OAuth Documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/webservices/authenticate-web-services-using-oauth).

Setting up a client credentials connection is a two-step process:

1. Create an app in Azure
2. Create an Application User in Business Central

#### Prerequisites

- A Microsoft Azure account with administrator access
- Access to the Power Platform admin center

#### Create an App in Microsoft Azure

1. Log in to [Azure Portal](https://portal.azure.com/)
2. Select **App registrations**
3. Click **+ New registration**
   - **Supported account types** can be **Single tenant**
   - No **Redirect URI** is necessary
   - Click **Register**

#### Configure API Permissions

1. Under **API permissions** click **+ Add a permission**
2. Select **Business Central**
3. Check the following permissions:
   - `user_impersonation`
   - `offline_access`
   - `Financials.ReadWrite.All`
4. Click **Add permissions**
5. Click **Grant admin consent for (organization name)**

#### Create a Client Secret

1. Under **Certificates & secrets** click **+ New client secret**
2. Provide a description and expiration date
3. Take note of the **Value** (not the Secret ID) of the client secret

#### Retrieve the Client ID and Token Endpoint

1. Return to the **Overview** page and take note of the **Application (client) ID**
2. Click **Endpoints** and take note of the **OAuth 2.0 token endpoint (v2)**

#### Add the App as an Application User in Business Central

1. Log in to [Power Platform admin center](https://admin.powerplatform.microsoft.com/)
2. Select **Environments** and choose the Business Central environment
3. Select **S2S Apps**
4. Click **+ New app user**
   - Click **+ Add an app**
   - Choose the app created in Azure Portal (search by client ID)
   - Select the Business Central tenant as the **Business unit**
   - Under **Security Roles** select **System Administrator**
   - Click **Create**

#### Configure the Connection

Create a connection of type **OAuth 2.0 Client Credentials** and enter:

- **Web API URL**: The Business Central API URL in the format `https://api.businesscentral.dynamics.com/v2.0/<TENANT_DOMAIN>/<ENVIRONMENT>`
- **Token URL**: The OAuth 2.0 token endpoint (v2) from Azure
- **Scopes**: Use `https://api.businesscentral.dynamics.com/.default`
- **Client ID**: The Application (client) ID from the Azure app registration
- **Client Secret**: The secret value created above

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                 | Default                                           |
| ------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Web API URL         | Your organization's Microsoft Business Central Web API URL.                                              |                                                   |
| Token URL           | The OAuth 2.0 Token URL. Found in Azure Portal > App registrations > Endpoints.                          |                                                   |
| Scopes              | This should be your Business Central URL with '/.default' appended to it.                                | https://api.businesscentral.dynamics.com/.default |
| Client ID           | The Client ID generated when you register an app in Azure Portal. Found in App registrations > Overview. |                                                   |
| Client Secret Value | The Client Secret value from Azure Portal. Found in App registrations > Certificates & secrets.          |                                                   |

## Triggers

### Managed Subscription Events {#webhook}

Automatically registers and manages webhook subscriptions for resource changes in Business Central.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use. |         |
| Resource   | Resource to subscribe to.                         |         |

### Manual Webhook {#webhookreceiver}

Receive and validate webhook requests from Business Central for manually configured webhooks.

## Actions

### Create Attachment {#createattachment}

Create a new attachment

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Microsoft Business Central connection to use.                  |         |
| Company ID  | The ID of the company you want to interact with.                   |         |
| Parent ID   | The ID of the parent object that the attachment is associated with |         |
| File Name   | The name of the file                                               |         |
| Parent Type | The type of the parent object                                      |         |

### Create Customer {#createcustomer}

Creates a customer object in Microsoft Business Central.

| Input                   | Comments                                                                                                     | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Microsoft Business Central connection to use.                                                            |         |
| Company ID              | The ID of the company you want to create the customer in.                                                    |         |
| Display Name            | Specifies the customer's name.                                                                               |         |
| Customer Type           | Specifies the type of customer.                                                                              |         |
| Address Line 1          | Specifies the first line of the customer's address.                                                          |         |
| Address Line 2          | Specifies the second line of the customer's address.                                                         |         |
| City                    | Specifies the city of the customer's address.                                                                |         |
| State                   | Specifies the state of the customer's address.                                                               |         |
| Country                 | Specifies the country of the customer's address.                                                             |         |
| Postal Code             | Specifies the postal code of the customer's address.                                                         |         |
| Phone Number            | Specifies the customer's phone number.                                                                       |         |
| Email                   | Specifies the customer's email address.                                                                      |         |
| Website                 | Specifies the customer's website.                                                                            |         |
| Tax Liable              | When true, the customer is liable for sales tax.                                                             | false   |
| Tax Area Id             | Specifies which tax area the customer belongs to.                                                            |         |
| Tax Registration Number | Specifies the customer's tax registration number.                                                            |         |
| Currency Id             | Specifies the currency used by the customer.                                                                 |         |
| Currency Code           | Specifies the currency code used by the customer.                                                            |         |
| Payment Terms Id        | Specifies the payment terms used by the customer.                                                            |         |
| Shipment Method Id      | Specifies the shipment method used by the customer.                                                          |         |
| Payment Method Id       | Specifies the payment method used by the customer.                                                           |         |
| Actions Blocked         | Specifies which transactions with the customer cannot be posted. It can be empty, 'Ship', 'Invoice' or 'All' |         |

### Create Event Subscription {#createeventsubscription}

Create an Event subscription for Microsoft Business Central.

| Input            | Comments                                              | Default |
| ---------------- | ----------------------------------------------------- | ------- |
| Connection       | The Microsoft Business Central connection to use.     |         |
| Notification URL | URL to send events of this Subscription to.           |         |
| Resource         | Resource to subscribe to.                             |         |
| Allow Duplicates | When true, allows more than one webhook per endpoint. | false   |

### Create Item {#createitem}

Creates a new item object in your Business Central Organization.

| Input        | Comments                                          | Default |
| ------------ | ------------------------------------------------- | ------- |
| Connection   | The Microsoft Business Central connection to use. |         |
| Company ID   | The ID of the company you want to interact with.  |         |
| Number       | The number of the item.                           |         |
| Display Name | The display name of the item.                     |         |

### Create Purchase Invoice {#createpurchaseinvoice}

Creates a purchase invoice object in Microsoft Business Central.

| Input                   | Comments                                                          | Default |
| ----------------------- | ----------------------------------------------------------------- | ------- |
| Connection              | The Microsoft Business Central connection to use.                 |         |
| Company ID              | The ID of the company you want to create the purchase invoice in. |         |
| Vendor Number           | Specifies the vendor's number.                                    |         |
| Vendor ID               | The unique identifier of the vendor for this invoice.             |         |
| Invoice Date            | The date of the invoice.                                          |         |
| Posting Date            | The posting date of the invoice.                                  |         |
| Due Date                | The due date of the invoice.                                      |         |
| Vendor Invoice Number   | The vendor's invoice number.                                      |         |
| Pay To Vendor ID        | The unique identifier of the vendor to pay to.                    |         |
| Pay To Vendor Number    | Specifies the number of the vendor to pay to.                     |         |
| Ship To Name            | The name for the ship-to address.                                 |         |
| Ship To Contact         | The contact name for the ship-to address.                         |         |
| Buy From Address Line 1 | The first line of the buy-from address.                           |         |
| Buy From Address Line 2 | The second line of the buy-from address.                          |         |
| Buy From City           | The city of the buy-from address.                                 |         |
| Buy From State          | The state of the buy-from address.                                |         |
| Buy From Country        | The country of the buy-from address.                              |         |
| Buy From Post Code      | The postal code of the buy-from address.                          |         |
| Currency ID             | The unique identifier of the currency.                            |         |
| Currency Code           | The currency code.                                                |         |
| Prices Include Tax      | Specifies if prices include tax.                                  | false   |
| Discount Amount         | The discount amount for the invoice.                              |         |

### Create Purchase Order {#createpurchaseorder}

Creates a purchase order object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Microsoft Business Central connection to use.                                                                                                        |         |
| Company ID             | The ID of the company you want to interact with.                                                                                                         |         |
| Vendor Number          | Specifies vendor's number.                                                                                                                               |         |
| Ship To Address Line 1 | The first line of the ship to address.                                                                                                                   |         |
| Ship To Name           | The name of the ship to customer.                                                                                                                        |         |
| Currency Code          | The currency code for the sales order.                                                                                                                   |         |
| Order Date             | The order date.                                                                                                                                          |         |
| Pay To Vendor ID       | The unique ID of the vendor to pay to.                                                                                                                   |         |
| Pay To Vendor Number   | Specifies the number of the vendor to pay to.                                                                                                            |         |
| Purchaser              | The purchaser in the purchase order.                                                                                                                     |         |
| Discount Amount        | The discount amount.                                                                                                                                     |         |
| Additional Properties  | Additional properties to include in the request body. In case of supplying a property that is already defined as an input, the input value will be used. |         |

### Create Purchase Order Line {#createpurchaseorderline}

Creates a purchase order line object in your Business Central organization.

| Input                 | Comments                                                                                                                                                 | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Microsoft Business Central connection to use.                                                                                                        |         |
| Company ID            | The ID of the company you want to interact with.                                                                                                         |         |
| Document ID           | The ID of the parent purchase order line.                                                                                                                |         |
| Item ID               | The ID of the item in the purchase order line.                                                                                                           |         |
| Account ID            | The id of the account that the purchase order line is related to.                                                                                        |         |
| Line Type             | The type of the purchase order line.                                                                                                                     |         |
| Line Object Number    | The number of the object (account or item) of the purchase order line.                                                                                   |         |
| Description           | Specifies the description of the purchase order line.                                                                                                    |         |
| Quantity              | The quantity of the item in the purchase order line.                                                                                                     |         |
| Direct Unit Cost      | The direct cost per unit.                                                                                                                                |         |
| Additional Properties | Additional properties to include in the request body. In case of supplying a property that is already defined as an input, the input value will be used. |         |

### Create Sales Invoice {#createsalesinvoice}

Creates a sales invoice object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Microsoft Business Central connection to use.                                                                                                        |         |
| Company ID             | The ID of the company you want to interact with.                                                                                                         |         |
| Customer ID            | The unique identifier of the customer.                                                                                                                   |         |
| Customer Number        | The customer number for the sales invoice.                                                                                                               |         |
| Bill To Customer ID    | The customer ID for the invoice to the customer.                                                                                                         |         |
| Ship To Name           | The name of the ship to customer.                                                                                                                        |         |
| Sell To Address Line 1 | The first line of the sell to address.                                                                                                                   |         |
| Ship To Address Line 1 | The first line of the ship to address.                                                                                                                   |         |
| Currency Code          | The currency code for the sales invoice.                                                                                                                 |         |
| Customer Email Address | The email address for the sales invoice.                                                                                                                 |         |
| Additional Properties  | Additional properties to include in the request body. In case of supplying a property that is already defined as an input, the input value will be used. |         |

### Create Sales Order {#createsalesorder}

Creates a sales order object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Microsoft Business Central connection to use.                                                                                                        |         |
| Company ID             | The ID of the company you want to interact with.                                                                                                         |         |
| Customer ID            | The unique identifier of the customer.                                                                                                                   |         |
| Customer Number        | The customer number for the sales order.                                                                                                                 |         |
| Bill To Customer ID    | The customer ID for the bill to customer.                                                                                                                |         |
| Ship To Name           | The name of the ship to customer.                                                                                                                        |         |
| Sell To Address Line 1 | The first line of the sell to address.                                                                                                                   |         |
| Ship To Address Line 1 | The first line of the ship to address.                                                                                                                   |         |
| Currency Code          | The currency code for the sales order.                                                                                                                   |         |
| Customer Email Address | The email address for the sales order.                                                                                                                   |         |
| Additional Properties  | Additional properties to include in the request body. In case of supplying a property that is already defined as an input, the input value will be used. |         |

### Create Shipment Method {#createshipmentmethod}

Create a new shipment method

| Input                | Comments                                          | Default |
| -------------------- | ------------------------------------------------- | ------- |
| Connection           | The Microsoft Business Central connection to use. |         |
| Company ID           | The ID of the company you want to interact with.  |         |
| Shipment Method Name | The display name for the shipment method.         |         |
| Shipment Code        | The unique code for the shipment method.          |         |

### Create Vendor {#createvendor}

Creates a vendor object in Microsoft Business Central.

| Input                   | Comments                                                                                             | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Microsoft Business Central connection to use.                                                    |         |
| Company ID              | The ID of the company you want to create the vendor in.                                              |         |
| Display Name            | Specifies the vendor's name.                                                                         |         |
| Address Line 1          | Specifies the first line of the vendor's address.                                                    |         |
| Address Line 2          | Specifies the second line of the vendor's address.                                                   |         |
| City                    | Specifies the city of the vendor's address.                                                          |         |
| State                   | Specifies the state of the vendor's address.                                                         |         |
| Country                 | Specifies the country of the vendor's address.                                                       |         |
| Postal Code             | Specifies the postal code of the vendor's address.                                                   |         |
| Phone Number            | Specifies the vendor's phone number.                                                                 |         |
| Email                   | Specifies the vendor's email address.                                                                |         |
| Website                 | Specifies the vendor's website.                                                                      |         |
| Tax Liable              | When true, the vendor is liable for sales tax.                                                       | false   |
| Tax Registration Number | Specifies the vendor's tax registration number.                                                      |         |
| Currency ID             | Specifies the currency used by the vendor.                                                           |         |
| Currency Code           | Specifies the currency code used by the vendor.                                                      |         |
| IRS 1099 Code           | Specifies the IRS 1099 code for the vendor.                                                          |         |
| Payment Terms ID        | Specifies the payment terms used by the vendor.                                                      |         |
| Payment Method ID       | Specifies the payment method used by the vendor.                                                     |         |
| Blocked                 | Specifies which transactions with the vendor cannot be posted. It can be empty, 'Payment', or 'All'. |         |

### Delete All Instance Subscriptions {#deleteallinstancesubscriptions}

Delete all subscriptions pointed at this instance.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use. |         |

### Delete Attachment {#deleteattachment}

Delete an attachment object in Business Central.

| Input         | Comments                                          | Default |
| ------------- | ------------------------------------------------- | ------- |
| Connection    | The Microsoft Business Central connection to use. |         |
| Company ID    | The ID of the company you want to interact with.  |         |
| Attachment ID | The ID of the attachment to update.               |         |

### Delete Customer {#deletecustomer}

Deletes a customer object in your Business Central organization.

| Input       | Comments                                          | Default |
| ----------- | ------------------------------------------------- | ------- |
| Connection  | The Microsoft Business Central connection to use. |         |
| Company ID  | The ID of the company you want to interact with.  |         |
| Customer ID | The unique identifier of the customer.            |         |

### Delete Item {#deleteitem}

Deletes an item object in your Business Central Organization.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use. |         |
| Company ID | The ID of the company you want to interact with.  |         |
| Item Id    | The id of the item.                               |         |

### Delete Purchase Invoice {#deletepurchaseinvoice}

Deletes a purchase invoice object in your Business Central organization.

| Input               | Comments                                          | Default |
| ------------------- | ------------------------------------------------- | ------- |
| Connection          | The Microsoft Business Central connection to use. |         |
| Company ID          | The ID of the company you want to interact with.  |         |
| Purchase Invoice ID | The unique identifier of the purchase invoice.    |         |

### Delete Purchase Order {#deletepurchaseorder}

Deletes a purchase order object in your Business Central Organization.

| Input             | Comments                                          | Default |
| ----------------- | ------------------------------------------------- | ------- |
| Connection        | The Microsoft Business Central connection to use. |         |
| Company ID        | The ID of the company you want to interact with.  |         |
| Purchase Order ID | The unique ID of the purchase order to delete.    |         |

### Delete Purchase Order Line {#deletepurchaseorderline}

Deletes a purchase order line object in your Business Central Organization.

| Input                  | Comments                                            | Default |
| ---------------------- | --------------------------------------------------- | ------- |
| Connection             | The Microsoft Business Central connection to use.   |         |
| Company ID             | The ID of the company you want to interact with.    |         |
| Purchase Order Line ID | The unique ID of the purchase order line to delete. |         |

### Delete Sales Invoice {#deletesalesinvoice}

Deletes a sales invoice object in your Business Central Organization.

| Input            | Comments                                           | Default |
| ---------------- | -------------------------------------------------- | ------- |
| Connection       | The Microsoft Business Central connection to use.  |         |
| Company ID       | The ID of the company you want to interact with.   |         |
| Sales Invoice ID | The unique identifier of the sales invoice object. |         |

### Delete Sales Order {#deletesalesorder}

Deletes a sales order object in your Business Central Organization.

| Input          | Comments                                          | Default |
| -------------- | ------------------------------------------------- | ------- |
| Connection     | The Microsoft Business Central connection to use. |         |
| Company ID     | The ID of the company you want to interact with.  |         |
| Sales Order ID | The unique identifier of the sales order.         |         |

### Delete Shipment Method {#deleteshipmentmethod}

Deletes a shipment method object in your Business Central organization.

| Input              | Comments                                            | Default |
| ------------------ | --------------------------------------------------- | ------- |
| Connection         | The Microsoft Business Central connection to use.   |         |
| Company ID         | The ID of the company you want to interact with.    |         |
| Shipment Method Id | Specifies the shipment method used by the customer. |         |

### Delete Subscription {#deletesubscription}

Delete existing subscription for Microsoft Business Central.

| Input           | Comments                                          | Default |
| --------------- | ------------------------------------------------- | ------- |
| Connection      | The Microsoft Business Central connection to use. |         |
| Subscription ID | Subscription ID to manage.                        |         |
| Etag            | Etag value for the subscription to delete.        |         |

### Delete Vendor {#deletevendor}

Deletes a vendor object in your Business Central organization.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use. |         |
| Company ID | The ID of the company you want to interact with.  |         |
| Vendor ID  | The unique identifier of the vendor.              |         |

### Get Account {#getaccount}

Retrieve the properties and relationships of an account object in Microsoft Business Central.

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.     |         |
| Company ID | The ID of the company you want to interact with.      |         |
| Account ID | The ID of the account you want to retrieve data from. |         |

### Get Attachment {#getattachment}

Gets an attachment object

| Input       | Comments                                                           | Default |
| ----------- | ------------------------------------------------------------------ | ------- |
| Connection  | The Microsoft Business Central connection to use.                  |         |
| Company ID  | The ID of the company you want to interact with.                   |         |
| Parent ID   | The ID of the parent object that the attachment is associated with |         |
| Parent Type | The type of the parent object                                      |         |

### Get Company Information {#getcompanyinformation}

Get information about a company in your Business Central organization.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use. |         |
| Company ID | The ID of the company you want to interact with.  |         |

### Get Customer {#getcustomer}

Retrieve the properties and relationships of a customer object in your Business Central organization.

| Input       | Comments                                          | Default |
| ----------- | ------------------------------------------------- | ------- |
| Connection  | The Microsoft Business Central connection to use. |         |
| Company ID  | The ID of the company you want to interact with.  |         |
| Customer ID | The unique identifier of the customer.            |         |

### Get General Ledger Entry {#getgeneralledgerentry}

Retrieve the properties and relationships of a general ledger entry object in your Business Central organization.

| Input                   | Comments                                           | Default |
| ----------------------- | -------------------------------------------------- | ------- |
| Connection              | The Microsoft Business Central connection to use.  |         |
| Company ID              | The ID of the company you want to interact with.   |         |
| General Ledger Entry ID | The unique identifier of the general ledger entry. |         |

### Get Item {#getitem}

Retrieves an item object from your Business Central Organization.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use. |         |
| Company ID | The ID of the company you want to interact with.  |         |
| Item Id    | The id of the item.                               |         |

### Get Item Ledger Entry {#getitemledgerentry}

Retrieve the properties and relationships of an item ledger entry object in your Business Central organization.

| Input                | Comments                                          | Default |
| -------------------- | ------------------------------------------------- | ------- |
| Connection           | The Microsoft Business Central connection to use. |         |
| Company ID           | The ID of the company you want to interact with.  |         |
| Item Ledger Entry ID | The unique identifier of the item ledger entry.   |         |

### Get Purchase Invoice {#getpurchaseinvoice}

Retrieve the properties and relationships of a purchase invoice object in your Business Central organization.

| Input               | Comments                                          | Default |
| ------------------- | ------------------------------------------------- | ------- |
| Connection          | The Microsoft Business Central connection to use. |         |
| Company ID          | The ID of the company you want to interact with.  |         |
| Purchase Invoice ID | The unique identifier of the purchase invoice.    |         |

### Get Purchase Order {#getpurchaseorder}

Retrieves a purchase order object in your Business Central Organization.

| Input             | Comments                                          | Default |
| ----------------- | ------------------------------------------------- | ------- |
| Connection        | The Microsoft Business Central connection to use. |         |
| Company ID        | The ID of the company you want to interact with.  |         |
| Purchase Order ID | The unique ID of the purchase order to retrieve.  |         |

### Get Purchase Order Line {#getpurchaseorderline}

Retrieves a purchase order line object in your Business Central Organization.

| Input                  | Comments                                              | Default |
| ---------------------- | ----------------------------------------------------- | ------- |
| Connection             | The Microsoft Business Central connection to use.     |         |
| Company ID             | The ID of the company you want to interact with.      |         |
| Purchase Order Line ID | The unique ID of the purchase order line to retrieve. |         |

### Get Purchase Receipt {#getpurchasereceipt}

Retrieves a purchase receipt object in your Business Central Organization.

| Input               | Comments                                          | Default |
| ------------------- | ------------------------------------------------- | ------- |
| Connection          | The Microsoft Business Central connection to use. |         |
| Company ID          | The ID of the company you want to interact with.  |         |
| Purchase Receipt ID | The unique identifier of the purchase receipt.    |         |

### Get Purchase Receipt Line {#getpurchasereceiptline}

Retrieves a purchase receipt line object in your Business Central Organization.

| Input                    | Comments                                            | Default |
| ------------------------ | --------------------------------------------------- | ------- |
| Connection               | The Microsoft Business Central connection to use.   |         |
| Company ID               | The ID of the company you want to interact with.    |         |
| Purchase Receipt Line ID | The unique identifier of the purchase receipt line. |         |

### Get Sales Invoice {#getsalesinvoice}

Retrieves a sales invoice object in your Business Central Organization.

| Input            | Comments                                           | Default |
| ---------------- | -------------------------------------------------- | ------- |
| Connection       | The Microsoft Business Central connection to use.  |         |
| Company ID       | The ID of the company you want to interact with.   |         |
| Sales Invoice ID | The unique identifier of the sales invoice object. |         |

### Get Sales Order {#getsalesorder}

Retrieves a sales order object in your Business Central Organization.

| Input          | Comments                                          | Default |
| -------------- | ------------------------------------------------- | ------- |
| Connection     | The Microsoft Business Central connection to use. |         |
| Company ID     | The ID of the company you want to interact with.  |         |
| Sales Order ID | The unique identifier of the sales order.         |         |

### Get Sales Shipment {#getsaleshipment}

Retrieves a sales shipment object from your Business Central organization.

| Input            | Comments                                          | Default |
| ---------------- | ------------------------------------------------- | ------- |
| Connection       | The Microsoft Business Central connection to use. |         |
| Company ID       | The ID of the company you want to interact with.  |         |
| Sale Shipment ID | The ID of the sale shipment you want to retrieve. |         |

### Get Sales Shipment Line Item {#getsalesshipmentlines}

Gets a sales shipment line object

| Input                  | Comments                                          | Default |
| ---------------------- | ------------------------------------------------- | ------- |
| Connection             | The Microsoft Business Central connection to use. |         |
| Company ID             | The ID of the company you want to interact with.  |         |
| Sales Shipment Line ID | The ID of the sales shipment line object.         |         |

### Get Shipment Method {#getshipmentmethod}

Retrieves a shipment method object in your Business Central organization.

| Input              | Comments                                            | Default |
| ------------------ | --------------------------------------------------- | ------- |
| Connection         | The Microsoft Business Central connection to use.   |         |
| Company ID         | The ID of the company you want to interact with.    |         |
| Shipment Method Id | Specifies the shipment method used by the customer. |         |

### Get Vendor {#getvendor}

Retrieve the properties and relationships of a vendor object in your Business Central organization.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use. |         |
| Company ID | The ID of the company you want to interact with.  |         |
| Vendor ID  | The unique identifier of the vendor.              |         |

### List Accounts {#listaccounts}

Retrieve the properties and relationships of all account objects in your Business Central organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Companies {#listcompanies}

Retrieve the properties and relationships of companies in your Business Central organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Customers {#listcustomers}

Retrieve the properties and relationships of all customer objects in your Business Central organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List General Ledger Entries {#listgeneralledgerentries}

Retrieve all general ledger entries in your Business Central organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Item Ledger Entries {#listitemledgerentries}

Retrieve all item ledger entries in your Business Central organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Items {#listitems}

List all item objects from your Business Central Organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Purchase Invoices {#listpurchaseinvoices}

Retrieve all purchase invoices in your Business Central organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Purchase Order Lines {#listpurchaseorderlines}

List all purchase order line objects in your Business Central Organization.

| Input             | Comments                                                                                                                           | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID        | The ID of the company you want to interact with.                                                                                   |         |
| Purchase Order ID | The unique ID of the purchase order.                                                                                               |         |
| Filter            | Filters results (rows).                                                                                                            |         |
| Select            | Filters properties (columns).                                                                                                      |         |
| Expand            | Retrieves related resources.                                                                                                       |         |
| Order By          | Orders results.                                                                                                                    |         |
| Top               | Sets the page size of results.                                                                                                     |         |
| Skip              | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count             | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search            | Returns results based on search criteria.                                                                                          |         |
| Format            | Returns the results in the specified media format.                                                                                 |         |
| Skip Token        | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Purchase Orders {#listpurchaseorders}

List all purchase order objects in your Business Central Organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Purchase Receipt Lines {#listpurchasereceiptlines}

List all purchase receipt line objects in your Business Central Organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Purchase Receipts {#listpurchasereceipts}

List all purchase receipt objects in your Business Central Organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Sales Invoices {#listsalesinvoices}

List all sales invoices objects in your Business Central Organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Sales Orders {#listsalesorders}

List all sales orders objects in your Business Central Organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Sales Shipment Line Items {#listsalesshipmentlines}

Lists all sales shipment line objects in your Business Central organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |

### List Sales Shipments {#listsaleshipments}

List all sales shipments objects from your Business Central organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Subscriptions {#listsubscriptions}

List all subscriptions for Microsoft Business Central.

| Input                  | Comments                                                          | Default |
| ---------------------- | ----------------------------------------------------------------- | ------- |
| Connection             | The Microsoft Business Central connection to use.                 |         |
| Show Instance Webhooks | When true, shows only subscriptions for this Instance's webhooks. | false   |

### List Vendors {#listvendors}

Retrieve all vendors in your Business Central organization.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Business Central connection to use.                                                                                  |         |
| Company ID | The ID of the company you want to interact with.                                                                                   |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | When true, retrieves the total count of matching resources.                                                                        | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### Post Purchase Invoice {#postpurchaseinvoice}

Posts a purchase invoice in your Business Central organization. This will finalize the invoice and create ledger entries.

| Input               | Comments                                          | Default |
| ------------------- | ------------------------------------------------- | ------- |
| Connection          | The Microsoft Business Central connection to use. |         |
| Company ID          | The ID of the company you want to interact with.  |         |
| Purchase Invoice ID | The unique identifier of the purchase invoice.    |         |

### Raw Request {#rawrequest}

Send a raw HTTP request to Microsoft's Business Central API

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Microsoft Business Central connection to use.                                                                                                                                                |         |
| URL                     | Input the path only (/companies(companyId), the base URL along with the version is already included                                                                                              |         |
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

### Update Attachment {#updateattachment}

Update the attachment content in Business Central.

| Input              | Comments                                          | Default |
| ------------------ | ------------------------------------------------- | ------- |
| Connection         | The Microsoft Business Central connection to use. |         |
| Company ID         | The ID of the company you want to interact with.  |         |
| Attachment ID      | The ID of the attachment to update.               |         |
| Attachment Content | The content of the attachment.                    |         |

### Update Company Information {#updatecompanyinformation}

Update the properties of a company information object in your Business Central organization.

| Input                          | Comments                                                    | Default |
| ------------------------------ | ----------------------------------------------------------- | ------- |
| Connection                     | The Microsoft Business Central connection to use.           |         |
| Company ID                     | The ID of the company you want to interact with.            |         |
| Company Information ID         | The unique identifier of the company information object.    |         |
| Display Name                   | The name of the company as it should be displayed to users. |         |
| Address Line 1                 | The first line of the company's address.                    |         |
| Address Line 2                 | The second line of the company's address.                   |         |
| City                           | The city where the company is located.                      |         |
| State                          | The state where the company is located.                     |         |
| Country                        | The country where the company is located.                   |         |
| Postal Code                    | The postal code of the company's address.                   |         |
| Phone Number                   | The company's phone number.                                 |         |
| Fax Number                     | The company's fax number.                                   |         |
| Email                          | The company's email address.                                |         |
| Website                        | The company's website URL.                                  |         |
| Tax Registration Number        | The company's tax registration number.                      |         |
| Currency Code                  | The currency code used by the company.                      |         |
| Current Fiscal Year Start Date | The start date of the company's current fiscal year.        |         |
| Industry                       | The industry in which the company operates.                 |         |

### Update Customer {#updatecustomer}

Update a customer object in your Business Central organization.

| Input                   | Comments                                                                                                     | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Microsoft Business Central connection to use.                                                            |         |
| Company ID              | The ID of the company to which the customer belongs.                                                         |         |
| Customer ID             | The unique identifier of the customer.                                                                       |         |
| Display Name            | Specifies the customer's name.                                                                               |         |
| Customer Type           | Specifies the type of customer.                                                                              |         |
| Address Line 1          | Specifies the first line of the customer's address.                                                          |         |
| Address Line 2          | Specifies the second line of the customer's address.                                                         |         |
| City                    | Specifies the city of the customer's address.                                                                |         |
| State                   | Specifies the state of the customer's address.                                                               |         |
| Country                 | Specifies the country of the customer's address.                                                             |         |
| Postal Code             | Specifies the postal code of the customer's address.                                                         |         |
| Phone Number            | Specifies the customer's phone number.                                                                       |         |
| Email                   | Specifies the customer's email address.                                                                      |         |
| Website                 | Specifies the customer's website.                                                                            |         |
| Tax Area Id             | Specifies which tax area the customer belongs to.                                                            |         |
| Tax Registration Number | Specifies the customer's tax registration number.                                                            |         |
| Currency Id             | Specifies the currency used by the customer.                                                                 |         |
| Currency Code           | Specifies the currency code used by the customer.                                                            |         |
| Payment Terms Id        | Specifies the payment terms used by the customer.                                                            |         |
| Shipment Method Id      | Specifies the shipment method used by the customer.                                                          |         |
| Payment Method Id       | Specifies the payment method used by the customer.                                                           |         |
| Actions Blocked         | Specifies which transactions with the customer cannot be posted. It can be empty, 'Ship', 'Invoice' or 'All' |         |
| Tax Liable              | When true, the customer is liable for sales tax.                                                             |         |

### Update Event Subscription {#updateeventsubscription}

Update existing Event subscription for Microsoft Business Central.

| Input            | Comments                                          | Default |
| ---------------- | ------------------------------------------------- | ------- |
| Connection       | The Microsoft Business Central connection to use. |         |
| Subscription ID  | Subscription ID to manage.                        |         |
| Etag             | Etag value for the subscription to delete.        |         |
| Notification URL | URL to send events of this Subscription to.       |         |
| Resource         | Resource to subscribe to.                         |         |

### Update Item {#updateitem}

Updates an item object from your Business Central Organization.

| Input                     | Comments                                                                                                           | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                | The Microsoft Business Central connection to use.                                                                  |         |
| Company ID                | The ID of the company you want to interact with.                                                                   |         |
| Item Id                   | The id of the item.                                                                                                |         |
| Display Name              | The display name of the item.                                                                                      |         |
| Type                      | The type of the item.                                                                                              |         |
| Item Category Id          | The id of the item category in the item.                                                                           |         |
| Item Category Code        | The code of the item category in the item.                                                                         |         |
| Blocked                   | Specifies that entries cannot be posted to the item. True indicates account is blocked and posting is not allowed. | false   |
| Global Trade Item Number  | The Global Trade Item Number (GTIN) of the item.                                                                   |         |
| Unit Price                | The unit price of the item.                                                                                        |         |
| Unit Cost                 | The unit cost of the item.                                                                                         |         |
| Price Includes Tax        | Specifies whether the price includes tax.                                                                          | false   |
| Tax Group Id              | The id of the tax group in the item.                                                                               |         |
| Tax Group Code            | The code of the tax group in the item.                                                                             |         |
| Base Unit Of Measure Code | The item's base unit of measure code.                                                                              |         |
| Base Unit Of Measure Id   | Specifies the ID of the unit of measure.                                                                           |         |

### Update Purchase Invoice {#updatepurchaseinvoice}

Update a purchase invoice object in your Business Central organization.

| Input                   | Comments                                                     | Default |
| ----------------------- | ------------------------------------------------------------ | ------- |
| Connection              | The Microsoft Business Central connection to use.            |         |
| Company ID              | The ID of the company to which the purchase invoice belongs. |         |
| Purchase Invoice ID     | The unique identifier of the purchase invoice.               |         |
| Vendor ID               | The unique identifier of the vendor for this invoice.        |         |
| Vendor Number           | Specifies the vendor's number.                               |         |
| Invoice Date            | The date of the invoice.                                     |         |
| Posting Date            | The posting date of the invoice.                             |         |
| Due Date                | The due date of the invoice.                                 |         |
| Vendor Invoice Number   | The vendor's invoice number.                                 |         |
| Pay To Vendor ID        | The unique identifier of the vendor to pay to.               |         |
| Pay To Vendor Number    | Specifies the number of the vendor to pay to.                |         |
| Ship To Name            | The name for the ship-to address.                            |         |
| Ship To Contact         | The contact name for the ship-to address.                    |         |
| Buy From Address Line 1 | The first line of the buy-from address.                      |         |
| Buy From Address Line 2 | The second line of the buy-from address.                     |         |
| Buy From City           | The city of the buy-from address.                            |         |
| Buy From State          | The state of the buy-from address.                           |         |
| Buy From Country        | The country of the buy-from address.                         |         |
| Buy From Post Code      | The postal code of the buy-from address.                     |         |
| Currency ID             | The unique identifier of the currency.                       |         |
| Currency Code           | The currency code.                                           |         |
| Prices Include Tax      | Specifies if prices include tax.                             |         |
| Discount Amount         | The discount amount for the invoice.                         |         |

### Update Purchase Order {#updatepurchaseorder}

Updates a purchase order object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Purchase Order ID      | The ID of the purchase order to update.                                                                                                                  |         |
| Connection             | The Microsoft Business Central connection to use.                                                                                                        |         |
| Company ID             | The ID of the company you want to interact with.                                                                                                         |         |
| Vendor Number          | Specifies vendor's number.                                                                                                                               |         |
| Ship To Address Line 1 | The first line of the ship to address.                                                                                                                   |         |
| Ship To Name           | The name of the ship to customer.                                                                                                                        |         |
| Currency Code          | The currency code for the sales order.                                                                                                                   |         |
| Order Date             | The order date.                                                                                                                                          |         |
| Pay To Vendor ID       | The unique ID of the vendor to pay to.                                                                                                                   |         |
| Pay To Vendor Number   | Specifies the number of the vendor to pay to.                                                                                                            |         |
| Purchaser              | The purchaser in the purchase order.                                                                                                                     |         |
| Discount Amount        | The discount amount.                                                                                                                                     |         |
| Additional Properties  | Additional properties to include in the request body. In case of supplying a property that is already defined as an input, the input value will be used. |         |

### Update Purchase Order Line {#updatepurchaseorderline}

Updates a purchase order line object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Purchase Order Line ID | The ID of the purchase order line to update.                                                                                                             |         |
| Connection             | The Microsoft Business Central connection to use.                                                                                                        |         |
| Company ID             | The ID of the company you want to interact with.                                                                                                         |         |
| Document ID            | The ID of the parent purchase order line.                                                                                                                |         |
| Item ID                | The ID of the item in the purchase order line.                                                                                                           |         |
| Account ID             | The id of the account that the purchase order line is related to.                                                                                        |         |
| Line Type              | The type of the purchase order line.                                                                                                                     |         |
| Line Object Number     | The number of the object (account or item) of the purchase order line.                                                                                   |         |
| Description            | Specifies the description of the purchase order line.                                                                                                    |         |
| Quantity               | The quantity of the item in the purchase order line.                                                                                                     |         |
| Direct Unit Cost       | The direct cost per unit.                                                                                                                                |         |
| Additional Properties  | Additional properties to include in the request body. In case of supplying a property that is already defined as an input, the input value will be used. |         |

### Update Sales Invoice {#updatesalesinvoice}

Updates a sales invoice object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Microsoft Business Central connection to use.                                                                                                        |         |
| Company ID             | The ID of the company you want to interact with.                                                                                                         |         |
| Sales Invoice ID       | The unique identifier of the sales invoice object.                                                                                                       |         |
| Customer ID            | The unique identifier of the customer.                                                                                                                   |         |
| Customer Number        | The customer number for the sales invoice.                                                                                                               |         |
| Bill To Customer ID    | The customer ID for the invoice to the customer.                                                                                                         |         |
| Ship To Name           | The name of the ship to customer.                                                                                                                        |         |
| Sell To Address Line 1 | The first line of the sell to address.                                                                                                                   |         |
| Ship To Address Line 1 | The first line of the ship to address.                                                                                                                   |         |
| Currency Code          | The currency code for the sales invoice.                                                                                                                 |         |
| Customer Email Address | The email address for the sales invoice.                                                                                                                 |         |
| Additional Properties  | Additional properties to include in the request body. In case of supplying a property that is already defined as an input, the input value will be used. |         |

### Update Sales Order {#updatesalesorder}

Updates a sales order object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Microsoft Business Central connection to use.                                                                                                        |         |
| Company ID             | The ID of the company you want to interact with.                                                                                                         |         |
| Sales Order ID         | The unique identifier of the sales order.                                                                                                                |         |
| Customer ID            | The unique identifier of the customer.                                                                                                                   |         |
| Customer Number        | The customer number for the sales order.                                                                                                                 |         |
| Bill To Customer ID    | The customer ID for the bill to customer.                                                                                                                |         |
| Ship To Name           | The name of the ship to customer.                                                                                                                        |         |
| Sell To Address Line 1 | The first line of the sell to address.                                                                                                                   |         |
| Ship To Address Line 1 | The first line of the ship to address.                                                                                                                   |         |
| Currency Code          | The currency code for the sales order.                                                                                                                   |         |
| Customer Email Address | The email address for the sales order.                                                                                                                   |         |
| Additional Properties  | Additional properties to include in the request body. In case of supplying a property that is already defined as an input, the input value will be used. |         |

### Update Shipment Method {#updateshipmentmethod}

Update a shipment method object in your Business Central organization.

| Input                | Comments                                            | Default |
| -------------------- | --------------------------------------------------- | ------- |
| Connection           | The Microsoft Business Central connection to use.   |         |
| Company ID           | The ID of the company you want to interact with.    |         |
| Shipment Method Id   | Specifies the shipment method used by the customer. |         |
| Shipment Method Name | The display name for the shipment method.           |         |
| Shipment Code        | The unique code for the shipment method.            |         |

### Update Vendor {#updatevendor}

Update a vendor object in your Business Central organization.

| Input                   | Comments                                                                                             | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Microsoft Business Central connection to use.                                                    |         |
| Company ID              | The ID of the company to which the vendor belongs.                                                   |         |
| Vendor ID               | The unique identifier of the vendor.                                                                 |         |
| Display Name            | Specifies the vendor's name.                                                                         |         |
| Address Line 1          | Specifies the first line of the vendor's address.                                                    |         |
| Address Line 2          | Specifies the second line of the vendor's address.                                                   |         |
| City                    | Specifies the city of the vendor's address.                                                          |         |
| State                   | Specifies the state of the vendor's address.                                                         |         |
| Country                 | Specifies the country of the vendor's address.                                                       |         |
| Postal Code             | Specifies the postal code of the vendor's address.                                                   |         |
| Phone Number            | Specifies the vendor's phone number.                                                                 |         |
| Email                   | Specifies the vendor's email address.                                                                |         |
| Website                 | Specifies the vendor's website.                                                                      |         |
| Tax Liable              | When true, the vendor is liable for sales tax.                                                       |         |
| Tax Registration Number | Specifies the vendor's tax registration number.                                                      |         |
| Currency ID             | Specifies the currency used by the vendor.                                                           |         |
| Currency Code           | Specifies the currency code used by the vendor.                                                      |         |
| IRS 1099 Code           | Specifies the IRS 1099 code for the vendor.                                                          |         |
| Payment Terms ID        | Specifies the payment terms used by the vendor.                                                      |         |
| Payment Method ID       | Specifies the payment method used by the vendor.                                                     |         |
| Blocked                 | Specifies which transactions with the vendor cannot be posted. It can be empty, 'Payment', or 'All'. |         |
