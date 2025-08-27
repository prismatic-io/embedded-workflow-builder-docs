---
title: Microsoft Dynamics 365 Business Central Connector
sidebar_label: Microsoft Dynamics 365 Business Central
description: Microsoft Dynamics 365 Business Central is a comprehensive enterprise resource planning (ERP) with capabilities including finance, manufacturing, customer relationship management (CRM), supply chains, analytics, and e-commerce.
---

![Microsoft Dynamics 365 Business Central](./assets/ms-business-central.png#connector-icon)
Microsoft Dynamics 365 Business Central is a comprehensive enterprise resource planning (ERP) with capabilities including finance, manufacturing, customer relationship management (CRM), supply chains, analytics, and e-commerce.

## Connections

### OAuth 2.0 Auth Code

Microsoft Business Central OAuth Connection

The OAuth 2.0 auth code flow allows your user grant permission to your integration to interact with Business Central on their behalf. Please refer to the following [Documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/webservices/authenticate-web-services-using-oauth) for more information

1. Log in to [Azure Portal](https://portal.azure.com/)
2. Select **App registrations**
3. Click **+ New registration**
   - **Supported account types** should be **Multi-tenant** if you intend for customers to authenticate with their own Business Central instance, or **Single-tenant** if you intend to authenticate with your own Business Central instance.
   - Under **Redirect URI** enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - Click **Register**

4. Under **API permissions** click **+Add a permission**
   - Select **Business Central**
   - Check the following permissions
     - user_impersonation
     - offline_access
     - Financials.ReadWrite.All
   - Click **Add permissions**

5. Under **Certificates & secrets** click **+ New client secret**
   - Give your certificate a description and expiration date
   - Take note of the **value** (not the Secret ID) of the client secret.

6. Returning to the **Overview** page, take note of **Application (client) ID**

Create a connection of type **OAuth 2.0 Auth Code**.

- Enter the **Client ID** and **Secret Value** you noted above.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default                                                          |
| ------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Web API URL   | Your organization's Microsoft Business Central Web API URL.                         |                                                                  |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. | https://api.businesscentral.dynamics.com/.default offline_access |
| Client ID     |                                                                                     |                                                                  |
| Client Secret |                                                                                     |                                                                  |

### OAuth 2.0 Client Credentials

OAuth 2.0 Client Credentials Connectivity for Microsoft Business Central

The OAuth 2.0 client credentials flow allows your user to create an **Application User** to send requests to Business Central on their behalf. Refer to the following [Documentation](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/webservices/authenticate-web-services-using-oauth) for more information.
Setting up a client credentials connection is a two-step process:

1. Create an "App" in Azure
2. Create an "Application User" in Business Central

Create an app in Microsoft Azure

1. Log in to [Azure Portal](https://portal.azure.com/)
2. Select **App registrations**
3. Click **+ New registration**

- **Supported account types** can be **Single tenant**
- No **Redirect URI** is necessary
- Click **Register**

4. Under **API permissions** click **+Add a permission**

- Select Business Central
- Check the following permissions
- user_impersonation
- offline_access
- Financials.ReadWrite.All
- Click **Add permissions**

5. Under **API permissions** click **Grant admin concent for (your org)**
6. Under **Certificates & secrets** click **+ New client secret**

- Give your certificate a description and expiration date
- Take note of the **value** (not the Secret ID) of the client secret.

7. Returning to the **Overview** page, take note of **Application (client) ID**
8. From the **Overview** page, click **Endpoints** and take note of the **OAuth 2.0 token endpoint (v2)**

You will use the **Secret Value**, **Client ID** and **Token Endpoint** in a moment.

Add the app as an App User to Business Central

1. Log in to [Power Platform admin center](https://admin.powerplatform.microsoft.com/)
2. Select **Environments** and choose your Business Central Environments
3. Select **S2S Apps**
4. Click **+New app user**

- Click **+Add an app**
- Choose the app you created in Azure portal (above). You can search for your app by entering the client ID you noted.
- Select your Business Central tenant as your **Business unit**
- Under **Security Roles** select **System Administrator**
- Click **Create**

Configure the connection

Create a connection of type **MS** Business Central **OAuth 2.0 Client Credentials**.

- Enter the **Token Endpoint** you noted as your **Token URL**.
- Enter the **Client ID** and **Secret Value** you noted above.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                         | Default                                           |
| ------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------- |
| Web API URL         | Your organization's Microsoft Business Central Web API URL.                      |                                                   |
| Token URL           | This can be found by visiting your app in Azure portal and selecting 'Endpoints' |                                                   |
| Scopes              | This should be your Business Central URL with '/.default' appened to it          | https://api.businesscentral.dynamics.com/.default |
| Client ID           | Generated when you register an app in Azure portal                               |                                                   |
| Client secret value | Generated when you register an app in Azure portal                               |                                                   |

## Triggers

### Microsoft Dynamics 365 Business Central Webhook

Receive and validate webhook requests from Microsoft Dynamics 365 Business Central for webhooks you configure.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Resource   | Resource to subscribe to. |         |

### Webhook Receiver

Receive a webhook payload from an external service.

## Actions

### Create Attachment

Create a new attachment

| Input         | Comments                                                           | Default |
| ------------- | ------------------------------------------------------------------ | ------- |
| Connection    |                                                                    |         |
| Company ID    | The ID of the company you want to interact with.                   |         |
| Parent ID     | The ID of the parent object that the attachment is associated with |         |
| File Name     | The name of the file                                               |         |
| Parent Type   | The type of the parent object                                      |         |
| Debug Request | Enabling this flag will log out the current request.               | false   |

### Create Customer

Creates a customer object in Microsoft Business Central.

| Input                   | Comments                                                                                                    | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                             |         |
| Company ID              | The ID of the company you want to create the customer in.                                                   |         |
| Display Name            | Specifies the customer's name.                                                                              |         |
| Customer Type           | Specifies the type of customer.                                                                             |         |
| Address Line 1          | Specifies the first line of the customer's address.                                                         |         |
| Address Line 2          | Specifies the second line of the customer's address.                                                        |         |
| City                    | Specifies the city of the customer's address.                                                               |         |
| State                   | Specifies the state of the customer's address.                                                              |         |
| Country                 | Specifies the country of the customer's address.                                                            |         |
| Postal Code             | Specifies the postal code of the customer's address.                                                        |         |
| Phone Number            | Specifies the customer's phone number.                                                                      |         |
| Email                   | Specifies the customer's email address.                                                                     |         |
| Website                 | Specifies the customer's website.                                                                           |         |
| Tax Liable              | specifies if the customer or vendor is liable for sales tax. Set to true if the customer is tax liable.     | false   |
| Tax Area Id             | Specifies which tax area the customer belongs to.                                                           |         |
| Tax Registration Number | Specifies the customer's tax registration number.                                                           |         |
| Currency Id             | Specifies the currency used by the customer.                                                                |         |
| Currency Code           | Specifies the currency code used by the customer.                                                           |         |
| Payment Terms Id        | Specifies the payment terms used by the customer.                                                           |         |
| Shipment Method Id      | Specifies the shipment method used by the customer.                                                         |         |
| Payment Method Id       | Specifies the payment method used by the customer.                                                          |         |
| Actions Blocked         | Specifies which transactions with the customer cannot be posted.It can be empty, 'Ship', 'Invoice' or 'All' |         |
| Debug Request           | Enabling this flag will log out the current request.                                                        | false   |

### Create Event Subscription

Create an Event subscription for Microsoft Business Central.

| Input            | Comments                                             | Default |
| ---------------- | ---------------------------------------------------- | ------- |
| Connection       |                                                      |         |
| Notification URL | URL to send events of this Subscription to.          |         |
| Resource         | Resource to subscribe to.                            |         |
| Allow Duplicates | Enable to allow more than one webhook per endpoint.  | false   |
| Debug Request    | Enabling this flag will log out the current request. | false   |

### Create Item

Creates a new item object in your Business Central Organization.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Company ID    | The ID of the company you want to interact with.     |         |
| Number        | The number of the item.                              |         |
| Display Name  | The display name of the item.                        |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Purchase Order

Creates a purchase order object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                          |         |
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
| Debug Request          | Enabling this flag will log out the current request.                                                                                                     | false   |

### Create Purchase Order Line

Creates a purchase order line object in your Business Central organization.

| Input                 | Comments                                                                                                                                                 | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                          |         |
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
| Debug Request         | Enabling this flag will log out the current request.                                                                                                     | false   |

### Create Sales Invoice

Creates a sales invoice object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                          |         |
| Company ID             | The ID of the company you want to interact with.                                                                                                         |         |
| Customer ID            | The unique identifier of the customer.                                                                                                                   |         |
| Customer Number        | The customer number for the sales invoice                                                                                                                |         |
| Bill To Customer ID    | The customer ID for the invoice to the customer                                                                                                          |         |
| Ship To Name           | The name of the ship to customer                                                                                                                         |         |
| Sell To Address Line 1 | The first line of the sell to address                                                                                                                    |         |
| Ship To Address Line 1 | The first line of the ship to address                                                                                                                    |         |
| Currency Code          | The currency code for the sales invoice                                                                                                                  |         |
| Customer Email Address | The email address for the sales invoice                                                                                                                  |         |
| Additional Properties  | Additional properties to include in the request body. In case of supplying a property that is already defined as an input, the input value will be used. |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                     | false   |

### Create Sales Order

Creates a sales order object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                          |         |
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
| Debug Request          | Enabling this flag will log out the current request.                                                                                                     | false   |

### Create Shipment Method

Create a new shipment method

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Connection           |                                                      |         |
| Company ID           | The ID of the company you want to interact with.     |         |
| Shipment Method Name |                                                      |         |
| Shipment Code        |                                                      |         |
| Debug Request        | Enabling this flag will log out the current request. | false   |

### Delete All Instance Subscriptions

Delete all subscriptions pointed at this instance.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Attachment

Delete an attachment object in Business Central.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Company ID    | The ID of the company you want to interact with.     |         |
| Attachment ID | The ID of the attachment to update.                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Customer

Deletes a customer object in your Business Central organization.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Company ID    | The ID of the company you want to interact with.     |         |
| Customer ID   | The unique identifier of the customer.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Item

Deletes an item object in your Business Central Organization.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Company ID    | The ID of the company you want to interact with.     |         |
| Item Id       | The id of the item.                                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Purchase Order

Deletes a purchase order object in your Business Central Organization.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        |                                                      |         |
| Company ID        | The ID of the company you want to interact with.     |         |
| Purchase Order ID | The unique ID of the purchase order to delete.       |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Delete Purchase Order Line

Deletes a purchase order line object in your Business Central Organization.

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| Connection             |                                                      |         |
| Company ID             | The ID of the company you want to interact with.     |         |
| Purchase Order Line ID | The unique ID of the purchase order line to delete.  |         |
| Debug Request          | Enabling this flag will log out the current request. | false   |

### Delete Sales Invoice

Deletes a sales invoice object in your Business Central Organization.

| Input            | Comments                                             | Default |
| ---------------- | ---------------------------------------------------- | ------- |
| Connection       |                                                      |         |
| Company ID       | The ID of the company you want to interact with.     |         |
| Sales Invoice ID | The unique identifier of the sales invoice object.   |         |
| Debug Request    | Enabling this flag will log out the current request. | false   |

### Delete Sales Order

Deletes a sales order object in your Business Central Organization.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Company ID     | The ID of the company you want to interact with.     |         |
| Sales Order ID | The unique identifier of the sales order.            |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Delete Shipment Method

Deletes a shipment method object in your Business Central organization.

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Connection         |                                                      |         |
| Company ID         | The ID of the company you want to interact with.     |         |
| Shipment Method Id | Specifies the shipment method used by the customer.  |         |
| Debug Request      | Enabling this flag will log out the current request. | false   |

### Delete Subscription

Delete existing subscription for Microsoft Business Central.

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      |                                                      |         |
| Subscription ID | Subscription ID to manage.                           |         |
| Etag            | Etag value for the subscription to delete.           |         |
| Debug Request   | Enabling this flag will log out the current request. | false   |

### Get Account

Retrieve the properties and relationships of an account object in Microsoft Business Central.

| Input         | Comments                                              | Default |
| ------------- | ----------------------------------------------------- | ------- |
| Connection    |                                                       |         |
| Company ID    | The ID of the company you want to interact with.      |         |
| Account ID    | The ID of the account you want to retrieve data from. |         |
| Debug Request | Enabling this flag will log out the current request.  | false   |

### Get Attachment

Gets an attachment object

| Input         | Comments                                                           | Default |
| ------------- | ------------------------------------------------------------------ | ------- |
| Connection    |                                                                    |         |
| Company ID    | The ID of the company you want to interact with.                   |         |
| Parent ID     | The ID of the parent object that the attachment is associated with |         |
| Parent Type   | The type of the parent object                                      |         |
| Debug Request | Enabling this flag will log out the current request.               | false   |

### Get Company Information

Get information about a company in your Business Central organization.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Company ID    | The ID of the company you want to interact with.     |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Customer

Retrieve the properties and relationships of a customer object in your Business Central organization.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Company ID    | The ID of the company you want to interact with.     |         |
| Customer ID   | The unique identifier of the customer.               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Item

Retrieves an item object from your Business Central Organization.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Company ID    | The ID of the company you want to interact with.     |         |
| Item Id       | The id of the item.                                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Purchase Order

Retrieves a purchase order object in your Business Central Organization.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        |                                                      |         |
| Company ID        | The ID of the company you want to interact with.     |         |
| Purchase Order ID | The unique ID of the purchase order to retrieve.     |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Get Purchase Order Line

Retrieves a purchase order line object in your Business Central Organization.

| Input                  | Comments                                              | Default |
| ---------------------- | ----------------------------------------------------- | ------- |
| Connection             |                                                       |         |
| Company ID             | The ID of the company you want to interact with.      |         |
| Purchase Order Line ID | The unique ID of the purchase order line to retrieve. |         |
| Debug Request          | Enabling this flag will log out the current request.  | false   |

### Get Purchase Receipt

Retrieves a purchase receipt object in your Business Central Organization.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Connection          |                                                      |         |
| Company ID          | The ID of the company you want to interact with.     |         |
| Purchase Receipt ID | The unique identifier of the purchase receipt.       |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Get Purchase Receipt Line

Retrieves a purchase receipt line object in your Business Central Organization.

| Input                    | Comments                                             | Default |
| ------------------------ | ---------------------------------------------------- | ------- |
| Connection               |                                                      |         |
| Company ID               | The ID of the company you want to interact with.     |         |
| Purchase Receipt Line ID | The unique identifier of the purchase receipt line.  |         |
| Debug Request            | Enabling this flag will log out the current request. | false   |

### Get Sale Shipment

Retrieves a sale shipment object from your Business Central organization.

| Input            | Comments                                             | Default |
| ---------------- | ---------------------------------------------------- | ------- |
| Connection       |                                                      |         |
| Company ID       | The ID of the company you want to interact with.     |         |
| Sale Shipment ID | The ID of the sale shipment you want to retrieve.    |         |
| Debug Request    | Enabling this flag will log out the current request. | false   |

### Get Sales Invoice

Retrieves a sales invoice object in your Business Central Organization.

| Input            | Comments                                             | Default |
| ---------------- | ---------------------------------------------------- | ------- |
| Connection       |                                                      |         |
| Company ID       | The ID of the company you want to interact with.     |         |
| Sales Invoice ID | The unique identifier of the sales invoice object.   |         |
| Debug Request    | Enabling this flag will log out the current request. | false   |

### Get Sales Order

Retrieves a sales order object in your Business Central Organization.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Company ID     | The ID of the company you want to interact with.     |         |
| Sales Order ID | The unique identifier of the sales order.            |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Sales Shipment Line Item

Gets a sales shipment line object

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| Connection             |                                                      |         |
| Company ID             | The ID of the company you want to interact with.     |         |
| Sales Shipment Line ID | The ID of the sales shipment line object.            |         |
| Debug Request          | Enabling this flag will log out the current request. | false   |

### Get Shipment Method

Retrieves a shipment method object in your Business Central organization.

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Connection         |                                                      |         |
| Company ID         | The ID of the company you want to interact with.     |         |
| Shipment Method Id | Specifies the shipment method used by the customer.  |         |
| Debug Request      | Enabling this flag will log out the current request. | false   |

### List Accounts

Retrieve the properties and relationships of all account objects in your Business Central organization.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Company ID    | The ID of the company you want to interact with.                                                                                   |         |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Debug Request | Enabling this flag will log out the current request.                                                                               | false   |

### List Companies

Retrieve the properties and relationships of companies in your Business Central organization.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Debug Request | Enabling this flag will log out the current request.                                                                               | false   |

### List Customers

Retrieve the properties and relationships of all customer objects in your Business Central organization.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Company ID    | The ID of the company you want to interact with.                                                                                   |         |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Debug Request | Enabling this flag will log out the current request.                                                                               | false   |

### List Items

List all item objects from your Business Central Organization.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Company ID    | The ID of the company you want to interact with.                                                                                   |         |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Debug Request | Enabling this flag will log out the current request.                                                                               | false   |

### List Purchase Order Lines

List all purchase order line objects in your Business Central Organization.

| Input             | Comments                                                                                                                           | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                    |         |
| Company ID        | The ID of the company you want to interact with.                                                                                   |         |
| Purchase Order ID | The unique ID of the purchase order.                                                                                               |         |
| Filter            | Filters results (rows).                                                                                                            |         |
| Select            | Filters properties (columns).                                                                                                      |         |
| Expand            | Retrieves related resources.                                                                                                       |         |
| Order By          | Orders results.                                                                                                                    |         |
| Top               | Sets the page size of results.                                                                                                     |         |
| Skip              | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count             | Retrieves the total count of matching resources.                                                                                   | false   |
| Search            | Returns results based on search criteria.                                                                                          |         |
| Format            | Returns the results in the specified media format.                                                                                 |         |
| Skip Token        | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                               | false   |

### List Purchase Orders

List all purchase order objects in your Business Central Organization.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Company ID    | The ID of the company you want to interact with.                                                                                   |         |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Debug Request | Enabling this flag will log out the current request.                                                                               | false   |

### List Purchase Receipt Lines

List all purchase receipt line objects in your Business Central Organization.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Company ID    | The ID of the company you want to interact with.                                                                                   |         |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Debug Request | Enabling this flag will log out the current request.                                                                               | false   |

### List Purchase Receipts

List all purchase receipt objects in your Business Central Organization.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Company ID    | The ID of the company you want to interact with.                                                                                   |         |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Debug Request | Enabling this flag will log out the current request.                                                                               | false   |

### List Sales Invoices

List all sales invoices objects in your Business Central Organization.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Company ID    | The ID of the company you want to interact with.                                                                                   |         |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Debug Request | Enabling this flag will log out the current request.                                                                               | false   |

### List Sales Orders

List all sales orders objects in your Business Central Organization.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Company ID    | The ID of the company you want to interact with.                                                                                   |         |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Debug Request | Enabling this flag will log out the current request.                                                                               | false   |

### List Sales Shipment Line Items

Lists all sales shipment line objects in your Business Central organization.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Company ID    | The ID of the company you want to interact with.                                                                                   |         |
| Debug Request | Enabling this flag will log out the current request.                                                                               | false   |

### List Sales Shipments

List all sales shipments objects from your Business Central organization.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Company ID    | The ID of the company you want to interact with.                                                                                   |         |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |
| Debug Request | Enabling this flag will log out the current request.                                                                               | false   |

### List Subscriptions

List all subscriptions for Microsoft Business Central.

| Input                  | Comments                                              | Default |
| ---------------------- | ----------------------------------------------------- | ------- |
| Connection             |                                                       |         |
| Show Instance Webhooks | Show only subscriptions for this Instance's webhooks. | false   |
| Debug Request          | Enabling this flag will log out the current request.  | false   |

### Raw Request

Send a raw HTTP request to Microsoft's Business Central API

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
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
| Debug Request           | Enable this to log the request and response                                                                                                                                                      | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Update Attachment

Update the attachment content in Business Central.

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Connection         |                                                      |         |
| Company ID         | The ID of the company you want to interact with.     |         |
| Attachment ID      | The ID of the attachment to update.                  |         |
| Attachment Content | The content of the attachment.                       |         |
| Debug Request      | Enabling this flag will log out the current request. | false   |

### Update Company Information

Update the properties of a company information object in your Business Central organization.

| Input                          | Comments                                                    | Default |
| ------------------------------ | ----------------------------------------------------------- | ------- |
| Connection                     |                                                             |         |
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
| Debug Request                  | Enabling this flag will log out the current request.        | false   |

### Update Customer

Update a customer object in your Business Central organization.

| Input                   | Comments                                                                                                    | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                             |         |
| Company ID              | The ID of the company to which the customer belongs.                                                        |         |
| Customer ID             | The unique identifier of the customer.                                                                      |         |
| Display Name            | Specifies the customer's name.                                                                              |         |
| Customer Type           | Specifies the type of customer.                                                                             |         |
| Address Line 1          | Specifies the first line of the customer's address.                                                         |         |
| Address Line 2          | Specifies the second line of the customer's address.                                                        |         |
| City                    | Specifies the city of the customer's address.                                                               |         |
| State                   | Specifies the state of the customer's address.                                                              |         |
| Country                 | Specifies the country of the customer's address.                                                            |         |
| Postal Code             | Specifies the postal code of the customer's address.                                                        |         |
| Phone Number            | Specifies the customer's phone number.                                                                      |         |
| Email                   | Specifies the customer's email address.                                                                     |         |
| Website                 | Specifies the customer's website.                                                                           |         |
| Tax Area Id             | Specifies which tax area the customer belongs to.                                                           |         |
| Tax Registration Number | Specifies the customer's tax registration number.                                                           |         |
| Currency Id             | Specifies the currency used by the customer.                                                                |         |
| Currency Code           | Specifies the currency code used by the customer.                                                           |         |
| Payment Terms Id        | Specifies the payment terms used by the customer.                                                           |         |
| Shipment Method Id      | Specifies the shipment method used by the customer.                                                         |         |
| Payment Method Id       | Specifies the payment method used by the customer.                                                          |         |
| Actions Blocked         | Specifies which transactions with the customer cannot be posted.It can be empty, 'Ship', 'Invoice' or 'All' |         |
| Tax Liable              | specifies if the customer or vendor is liable for sales tax. Set to true if the customer is tax liable.     |         |
| Debug Request           | Enabling this flag will log out the current request.                                                        | false   |

### Update Event Subscription

Update existing Event subscription for Microsoft Business Central.

| Input            | Comments                                             | Default |
| ---------------- | ---------------------------------------------------- | ------- |
| Connection       |                                                      |         |
| Subscription ID  | Subscription ID to manage.                           |         |
| Etag             | Etag value for the subscription to delete.           |         |
| Notification URL | URL to send events of this Subscription to.          |         |
| Resource         | Resource to subscribe to.                            |         |
| Debug Request    | Enabling this flag will log out the current request. | false   |

### Update Item

Updates an item object from your Business Central Organization.

| Input                     | Comments                                                                                                           | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                |                                                                                                                    |         |
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
| Debug Request             | Enabling this flag will log out the current request.                                                               | false   |

### Update Purchase Order

Updates a purchase order object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Purchase Order ID      | The ID of the purchase order to update.                                                                                                                  |         |
| Connection             |                                                                                                                                                          |         |
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
| Debug Request          | Enabling this flag will log out the current request.                                                                                                     | false   |

### Update Purchase Order Line

Updates a purchase order line object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Purchase Order Line ID | The ID of the purchase order line to update.                                                                                                             |         |
| Connection             |                                                                                                                                                          |         |
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
| Debug Request          | Enabling this flag will log out the current request.                                                                                                     | false   |

### Update Sales Invoice

Updates a sales invoice object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                          |         |
| Company ID             | The ID of the company you want to interact with.                                                                                                         |         |
| Sales Invoice ID       | The unique identifier of the sales invoice object.                                                                                                       |         |
| Customer ID            | The unique identifier of the customer.                                                                                                                   |         |
| Customer Number        | The customer number for the sales invoice                                                                                                                |         |
| Bill To Customer ID    | The customer ID for the invoice to the customer                                                                                                          |         |
| Ship To Name           | The name of the ship to customer                                                                                                                         |         |
| Sell To Address Line 1 | The first line of the sell to address                                                                                                                    |         |
| Ship To Address Line 1 | The first line of the ship to address                                                                                                                    |         |
| Currency Code          | The currency code for the sales invoice                                                                                                                  |         |
| Customer Email Address | The email address for the sales invoice                                                                                                                  |         |
| Additional Properties  | Additional properties to include in the request body. In case of supplying a property that is already defined as an input, the input value will be used. |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                     | false   |

### Update Sales Order

Updates a sales order object in your Business Central organization.

| Input                  | Comments                                                                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                          |         |
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
| Debug Request          | Enabling this flag will log out the current request.                                                                                                     | false   |

### Update Shipment Method

Update a shipment method object in your Business Central organization.

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Connection           |                                                      |         |
| Company ID           | The ID of the company you want to interact with.     |         |
| Shipment Method Id   | Specifies the shipment method used by the customer.  |         |
| Shipment Method Name |                                                      |         |
| Shipment Code        |                                                      |         |
| Debug Request        | Enabling this flag will log out the current request. | false   |
