---
title: Sage 200 Connector
sidebar_label: Sage 200
description: Sage 200 is an online business management solution designed to help businesses manage their finances, customers, and business insight in one solution.
---

![Sage 200](./assets/sage-200.png#connector-icon)
Sage 200 is an online business management solution designed to help businesses manage their finances, customers, and business insight in one solution.

## Connections

### Sage 200 OAuth 2.0 Connection

Connect to Sage 200 using OAuth 2.0

## Connection and Authentication

To generate a token, your application requires a Client ID and Client Secret please contact the Sage Developer Services team by emailing [developers.programme@sage.com](mailto:developers.programme@sage.com) along with the following information:

- Application name.
- Application description.
- Description of use i.e. In-house or publication for resale.
- Type of application i.e. Public Client (Desktop, Mobile application) or Confidential (Web Server). _If the type is a Confidential Client application you must supply your "Redirect Url"._
  - For integrations the details will be - Confidential (Web Server). Redirect URI: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`

Sage will then confirm your request and have you submit the following [form](https://sage.az1.qualtrics.com/jfe/form/SV_bQ14AM1zXki0msm). Once completed, It may take Sage a few days to process the request but you will eventually receive credentials for the integration connection configuration.

## Native API access via Microsoft Entra ID/Active Directory Tunnelling

Some instances may require tunnelling their Sage 200 server to a Microsoft 365 account in order to run Native API calls for local servers. Please refer to the [Set up the Sage 200 Native API using Microsoft Entra ID Azure Active Directory Tunnelling](https://gb-kb.sage.com/portal/app/portlets/results/view2.jsp?k2dockey=200427112540427) for detailed instruction.
Additionally, the following [onboarding video](https://youtu.be/9uEH40avXRU) details the steps of the setup process.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                     | Comments                                                                                                                                            | Default                             |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Scopes                    | A space-delimited set of one or more scopes to get the user's permission to access.                                                                 | openid profile email offline_access |
| Client ID                 |                                                                                                                                                     |                                     |
| Client Secret             |                                                                                                                                                     |                                     |
| Ocp Apim Subscription Key | You can get your subscription key following the steps at 'Obtain Developer Subscription Keys' here: https://developer.sage.com/200/api/get-started/ |                                     |
| Sage 200 Edition          | The Sage 200 Edition you are connecting to.                                                                                                         |                                     |

## Actions

### Create Customer

Create a new customer

| Input                       | Comments                                                                                                                                                                                                     | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                  |                                                                                                                                                                                                              |         |
| Site                        | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                                                                        |         |
| Company                     | The company ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                                                                     |         |
| Reference                   | Customer account reference. Note: For Sage 200 Professional this is not required if customer reference is set to 'generate automatically' inside the Sage 200 application settings.                          |         |
| Name                        | Customer name.                                                                                                                                                                                               |         |
| Short Name                  | Customer short name.                                                                                                                                                                                         |         |
| On Hold                     | True if customer account is on hold, else False.                                                                                                                                                             | false   |
| Status Reason               | Reason for change in account status.                                                                                                                                                                         |         |
| Account Status Type         | The status of the customer account (Sage 200 Standard and versions of Professional released after July 2017). See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/account_status_types |         |
| Currency ID                 | Currency record Id. This defaults to the base currency Id. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/currencies                                                              |         |
| Exchange Rate Type          | The type of exchange rate used on the customer account. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/exchange_rate_types                                                        |         |
| Telephone Country Code      | Telephone country code.                                                                                                                                                                                      |         |
| Telephone Area Code         | Telephone area code.                                                                                                                                                                                         |         |
| Telephone Subscriber Number | Telephone subscriber number.                                                                                                                                                                                 |         |
| Fax Country Code            | Fax country code.                                                                                                                                                                                            |         |
| Fax Area Code               | Fax area code.                                                                                                                                                                                               |         |
| Fax Subscriber Number       | Fax subscriber number.                                                                                                                                                                                       |         |
| Website                     | Website address.                                                                                                                                                                                             |         |
| Additional Fields           | Additional fields that are not covered by the standard inputs. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/customers                                                           |         |
| Debug Request               | Enabling this flag will log out the current request.                                                                                                                                                         | false   |

### Create Customer Delivery Address

Create a new customer delivery address

| Input                   | Comments                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                      |         |
| Site                    | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.                |         |
| Company                 | The company ID. You can get and reference this value from the 'Get Site and Company Information' action.             |         |
| Customer Id             | Unique Id of the customer account the customer delivery address is associated with.                                  |         |
| Description             | The description of the customer delivery address.                                                                    |         |
| Tax Code Id             | The tax code record Id.                                                                                              |         |
| Is Default              | Flag to indicate if this is the default customer delivery address for the parent customer.                           | false   |
| Postal Name             | Postal name is the name of the person or company who the invoice or sales order is addressed to.                     |         |
| Address 1               | Address line 1.                                                                                                      |         |
| Address 2               | Address line 2.                                                                                                      |         |
| Address 3               | Address line 3.                                                                                                      |         |
| Address 4               | Address line 4.                                                                                                      |         |
| City                    | City (if using segmented addresses in Sage 200 Professional).                                                        |         |
| County                  | County (if using segmented addresses in Sage 200 Professional).                                                      |         |
| Postcode                | Postcode.                                                                                                            |         |
| Address Country Code Id | Country code Id. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/country_codes             |         |
| Contact                 | The contact associated with the customer delivery address.                                                           |         |
| Telephone               | The telephone number associated with the customer delivery address.                                                  |         |
| Fax                     | The fax number associated with the customer delivery address.                                                        |         |
| Email                   | The email address associated with the customer delivery address.                                                     |         |
| Tax Number              | The tax number.                                                                                                      |         |
| Country Code Id         | VAT details Country code Id. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/country_codes |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                 | false   |

### Create Product

Create a new product

| Input                        | Comments                                                                                                                                                            | Default |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   |                                                                                                                                                                     |         |
| Site                         | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                               |         |
| Company                      | The company ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                            |         |
| Product Code                 | Product code.                                                                                                                                                       |         |
| Product Name                 | Product name.                                                                                                                                                       |         |
| Product Group ID             | Product group record Id. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/product_groups                                                   |         |
| Product Description          | Product description.                                                                                                                                                |         |
| Use Description On Documents | Whether to use the product description on order and invoice documents.                                                                                              | false   |
| Product Barcode              | Product bar code.                                                                                                                                                   |         |
| Allow Sales Order            | Indicates whether the product is allowed on sales orders and invoicing.                                                                                             | true    |
| Tax Code ID                  | Tax code record Id. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/tax_codes                                                             |         |
| Product Status Type          | The product status type. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/product_status_types                                             |         |
| Fulfilment Method Type       | The fulfilment method type of the product. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/fulfilment_method_types                        |         |
| Fulfilment Sequence Type     | The fulfilment sequence type of the product. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/fulfilment_sequence_types                    |         |
| Inactivation Date            | If the product was made inactive, the date on which the product was made inactive.                                                                                  |         |
| Manufacturer                 | The product manufacturer.                                                                                                                                           |         |
| Part Number                  | The product part number.                                                                                                                                            |         |
| Label Printing Option Type   | The label printing option type. (Sage 200 Professional only). See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/label_printing_option_types |         |
| Traceable Type               | The traceable type of the product. (Sage 200 Professional only). See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/traceable_types          |         |
| Sale From Single Batch       | Indicates whether the product is sold from a single batch. (Sage 200 Professional only).                                                                            | false   |
| Allow Duplicate Numbers      | Indicates whether the product allows duplicate numbers. (Sage 200 Professional only).                                                                               | false   |
| Uses Alternative Reference   | Indicates whether the product uses alternative references. (Sage 200 Professional only).                                                                            | false   |
| Uses Sell By Date            | Indicates whether the product uses sell by dates. (Sage 200 Professional only).                                                                                     | false   |
| Uses Use By Date             | Indicates whether the product uses use by dates. (Sage 200 Professional only).                                                                                      | false   |
| Shelf Life                   | The shelf life of the product. (Sage 200 Professional only).                                                                                                        |         |
| Shelf Life Type              | The shelf life type of the product. (Sage 200 Professional only). See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/time_unit_types         |         |
| Additional Fields            | Additional fields that are not covered by the standard inputs. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/products                   |         |
| Debug Request                | Enabling this flag will log out the current request.                                                                                                                | false   |

### Create Sales Invoice

Create a new sales invoice. Note: Posting a sales invoice does not actually create a 'sales invoice' entity, but a Posted Transaction of type 'TradingAccountEntryTypeInvoice', therefore it is not possible to 'get' a sales invoice using the same API endpoint after it has been posted.

| Input                       | Comments                                                                                                                                | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                         |         |
| Site                        | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.                                   |         |
| Company                     | The company ID. You can get and reference this value from the 'Get Site and Company Information' action.                                |         |
| Customer ID                 | Customer record ID to record a sale against. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/customers        |         |
| Transaction Date            | Transaction date. This defaults to the current system date.                                                                             |         |
| Due Date                    | Date the invoice is due to be paid.                                                                                                     |         |
| Exchange Rate               | Exchange rate for the invoice. This defaults to the customer exchange rate.                                                             |         |
| Reference                   | Invoice reference.                                                                                                                      |         |
| Second Reference            | Invoice second reference.                                                                                                               |         |
| Settled Immediately         | When set to True this indicates that the invoice has been paid and any settlement discount has been applied.                            | false   |
| Document Goods Value        | Value of goods.                                                                                                                         |         |
| Document Tax Value          | Tax value.                                                                                                                              |         |
| Document Discount Value     | Discount value.                                                                                                                         |         |
| Document Tax Discount Value | Amount VAT is discounted when a settlement discount is applied.                                                                         |         |
| Discount Percent            | Percentage discount. This defaults to the settlement discount from the customer record.                                                 |         |
| Discount Days               | Number of days to pay to qualify for the settlement discount. This defaults to the settlement days from the customer record.            |         |
| Triangular Transaction      | Indicates whether the transaction is triangluted.                                                                                       | false   |
| Tax Analysis Items          | Tax analysis lines. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/sales_invoices_tax_analysis_items         |         |
| Nominal Analysis Items      | Nominal analysis lines. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/sales_invoices_nominal_analysis_items |         |
| Debug Request               | Enabling this flag will log out the current request.                                                                                    | false   |

### Create Sales Order

Create a new sales order

| Input                                     | Comments                                                                                                                                                                                                                                                                                                                                                 | Default |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                                |                                                                                                                                                                                                                                                                                                                                                          |         |
| Site                                      | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                                                                                                                                                                                                                    |         |
| Company                                   | The company ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                                                                                                                                                                                                                 |         |
| Customer ID                               | Customer record ID to create the sales order for.                                                                                                                                                                                                                                                                                                        |         |
| Document Number                           | Sales order document number. If the SOP setting in Sage 200 Professional is to NOT automatically generate numbers, then this property MUST be set. If the SOP setting in Sage 200 Professional is to automatically generate numbers, or you are using Sage 200 Standard (which doesn't allow you to set this option), then setting this will be ignored. |         |
| Is Editing                                | If this is set to true, and the order is still a draft order, the order will remain as a draft order, otherwise the order is made a confirmed order.                                                                                                                                                                                                     | false   |
| Is To Sequence Lines                      | If this is set to true, then the order of the line objects in the lines collection will determine the line number (print sequence number) for each line.                                                                                                                                                                                                 | false   |
| Override On Hold                          | Allows a user that has the permissions to override the order's On Hold status, applied when a customer's account balance is over its credit limit.                                                                                                                                                                                                       | false   |
| Recalculate Prices                        | Allows recalculation of the prices for the order when the exchange rate has changed.                                                                                                                                                                                                                                                                     | false   |
| Apply Available Document Discount Percent | This should be passed within to apply the 'available_document_discount_percent' to the sales order only if the 'available_document_discount_percent' is greater than a positive 'Document Discount Percent'.                                                                                                                                             | false   |
| Customer Delivery Address ID              | The Id of the customer delivery address to copy details to the sales order delivery address and resets 'Use Invoice Address'. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/customer_delivery_addresses                                                                                                                      |         |
| Suppress Warnings                         | If this is set to true, we will suppress warnings specifically for payment with order and this is also the case if 'Is Editing' is false.                                                                                                                                                                                                                | false   |
| Customer Type                             | SOP customer type. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/sop_customer_types                                                                                                                                                                                                                                          |         |
| Document Date                             | Sales order document date.                                                                                                                                                                                                                                                                                                                               |         |
| Exchange Rate                             | Exchange rate.                                                                                                                                                                                                                                                                                                                                           |         |
| Customer Document Number                  | Customer document number.                                                                                                                                                                                                                                                                                                                                |         |
| Use Invoice Address                       | True if this order uses the customer invoice address, else False.                                                                                                                                                                                                                                                                                        | false   |
| Is Triangulated                           | Whether this order is triangulated and applies only to an EU customer with a different country code to that set in the company details.                                                                                                                                                                                                                  | false   |
| Settlement Discount Days                  | Settlement discount days.                                                                                                                                                                                                                                                                                                                                |         |
| Settlement Discount Percent               | Settlement discount percent.                                                                                                                                                                                                                                                                                                                             |         |
| Document Discount Percent                 | Document discount percent value, between -99.99 and 99.99. A negative value is treated as a surcharge (e.g. -10 is a 10% surcharge), and a positive value is treated as a discount.                                                                                                                                                                      |         |
| Document Created By                       | The person who created the sales order.                                                                                                                                                                                                                                                                                                                  |         |
| Requested Delivery Date                   | Requested delivery date.                                                                                                                                                                                                                                                                                                                                 |         |
| Promised Delivery Date                    | Promised delivery date.                                                                                                                                                                                                                                                                                                                                  |         |
| Quotation Expiry Date                     | Quotation expiry date (only used for quotations).                                                                                                                                                                                                                                                                                                        |         |
| Order Priority                            | Order priority.                                                                                                                                                                                                                                                                                                                                          |         |
| Additional Fields                         | Additional fields that are not covered by the standard inputs. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/sop_orders                                                                                                                                                                                                      |         |
| Debug Request                             | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                     | false   |

### Delete Customer

Delete a customer by ID

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Customer ID   | The ID of the customer to delete.                                                                        |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### Delete Customer Contact

Delete a customer contact

| Input               | Comments                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                          |         |
| Site                | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company             | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Customer Contact ID | The ID of the customer contact to delete                                                                 |         |
| Debug Request       | Enabling this flag will log out the current request.                                                     | false   |

### Delete Customer Delivery Address

Delete a customer delivery address by ID

| Input               | Comments                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                          |         |
| Site                | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company             | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Delivery Address ID | The ID of the customer delivery addresses to delete.                                                     |         |
| Debug Request       | Enabling this flag will log out the current request.                                                     | false   |

### Delete Product

Delete a product by ID

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Product ID    | The ID of the product to delete.                                                                         |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### Delete Sales Order

Delete an existing sales order by ID

| Input          | Comments                                                                                                 | Default |
| -------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                          |         |
| Site           | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company        | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Sales Order ID | Sales order ID to delete                                                                                 |         |
| Debug Request  | Enabling this flag will log out the current request.                                                     | false   |

### Get Customer

Retrieve a customer by ID

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Customer ID   | The ID of the customer to retrieve.                                                                      |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### Get Customer Contact

Retrieve a customer contact by ID

| Input               | Comments                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                          |         |
| Site                | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company             | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Customer Contact ID | The ID of the customer contact to retrieve                                                               |         |
| Debug Request       | Enabling this flag will log out the current request.                                                     | false   |

### Get Customer Delivery Address

Retrieve customer delivery address by ID

| Input               | Comments                                                                                                 | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                          |         |
| Site                | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company             | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Delivery Address ID | The ID of the customer delivery addresses to retrieve.                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                     | false   |

### Get Customer Price Band

Retrieve a customer price band by ID

| Input                  | Comments                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                          |         |
| Site                   | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company                | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Customer Price Band ID | The ID of the customer price band to retrieve                                                            |         |
| Debug Request          | Enabling this flag will log out the current request.                                                     | false   |

### Get Items on a Sales Order

Retrieve a list of items attached to a sales order

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Order Line ID | The Sales Order Line ID. This can be found in the Sales Order Line 'lines' array attribute.              |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### Get Price Band

Retrieve a price band by ID

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Price Band ID | The ID of the price band to retrieve                                                                     |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### Get Product

Retrieve a product by ID

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Product ID    | The ID of the product to retrieve.                                                                       |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### Get Product Group

Retrieve a product group by ID

| Input            | Comments                                                                                                 | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                          |         |
| Site             | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company          | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Product Group ID | The ID of the product group to retrieve.                                                                 |         |
| Debug Request    | Enabling this flag will log out the current request.                                                     | false   |

### Get Product Price Views

Returns the selling prices of your products. A price is returned for each price band associated with a product.

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### Get Sales Invoice, Return, and Credit Views

Retrieve a view of sales orders and returns and invoices and credit notes.

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### Get Sales Order

Retrieve an existing sales order by ID

| Input          | Comments                                                                                                 | Default |
| -------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                          |         |
| Site           | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company        | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Sales Order ID | Sales order ID to retrieve                                                                               |         |
| Debug Request  | Enabling this flag will log out the current request.                                                     | false   |

### Get Site and Company Information

Get Site and Company ID's information for all sites the authenticated user has access to.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Tax Code

Retrieve a tax code by ID

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Tax Code ID   | The ID of the tax code to retrieve                                                                       |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### List Customer Contacts

Retrieve a list of customer contacts

| Input                  | Comments                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                          |         |
| Site                   | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company                | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Filter Data After Date | Filter data to only include items that have been updated after this date.                                |         |
| Debug Request          | Enabling this flag will log out the current request.                                                     | false   |

### List Customer Delivery Addresses

Retrieve a list of customer delivery addresses

| Input                  | Comments                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                          |         |
| Site                   | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company                | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Filter Data After Date | Filter data to only include items that have been updated after this date.                                |         |
| Debug Request          | Enabling this flag will log out the current request.                                                     | false   |

### List Customer Price Bands

Retrieve a list of customer price bands

| Input                  | Comments                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                          |         |
| Site                   | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company                | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Filter Data After Date | Filter data to only include items that have been updated after this date.                                |         |
| Debug Request          | Enabling this flag will log out the current request.                                                     | false   |

### List Customers

Retrieve a list of all customers

| Input                  | Comments                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                          |         |
| Site                   | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company                | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Filter Data After Date | Filter data to only include items that have been updated after this date.                                |         |
| Debug Request          | Enabling this flag will log out the current request.                                                     | false   |

### List Price Bands

Retrieve a list of price bands

| Input                  | Comments                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                          |         |
| Site                   | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company                | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Filter Data After Date | Filter data to only include items that have been updated after this date.                                |         |
| Debug Request          | Enabling this flag will log out the current request.                                                     | false   |

### List Pricing Source Types

Retrieve a list of pricing source types

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### List Pricing Types

Retrieve a list of pricing types

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### List Product Groups

Retrieve a list of product groups

| Input                  | Comments                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                          |         |
| Site                   | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company                | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Filter Data After Date | Filter data to only include items that have been updated after this date.                                |         |
| Debug Request          | Enabling this flag will log out the current request.                                                     | false   |

### List Products

Retrieve a list of products

| Input                  | Comments                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                          |         |
| Site                   | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company                | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Filter Data After Date | Filter data to only include items that have been updated after this date.                                |         |
| Debug Request          | Enabling this flag will log out the current request.                                                     | false   |

### List Sales Order

Retrieve a list of sales orders

| Input                  | Comments                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                          |         |
| Site                   | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company                | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Filter Data After Date | Filter data to only include items that have been updated after this date.                                |         |
| Debug Request          | Enabling this flag will log out the current request.                                                     | false   |

### List Tax Codes

Retrieve a list of tax codes

| Input                  | Comments                                                                                                 | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                          |         |
| Site                   | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company                | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Filter Data After Date | Filter data to only include items that have been updated after this date.                                |         |
| Debug Request          | Enabling this flag will log out the current request.                                                     | false   |

### Raw Request

Send raw HTTP request to Sage 200

| Input                   | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                               |         |
| URL                     | Input the path only (/sites), The base URL is already included (https://api.columbus.sage.com/uk/sage200extra/accounts/v1). For example, to connect to https://api.columbus.sage.com/uk/sage200extra/accounts/v1/sites, only /sites is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                       |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                     |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                          |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                              |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                        |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                           |         |
| Header                  | A list of headers to send with the request. Subscription key and Authorization headers are already included.                                                                                                                                                  |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                      | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                           |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                          | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                           | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                              | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                 | false   |

### Search Customers

Search customer list

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### Search Product Groups

Search the list of product groups

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### Search Products

Search the list of products

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                          |         |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.    |         |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action. |         |
| Debug Request | Enabling this flag will log out the current request.                                                     | false   |

### Update Customer

Edit an existing customer

| Input                       | Comments                                                                                                                                                                                                     | Default   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| Connection                  |                                                                                                                                                                                                              |           |
| Site                        | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                                                                        |           |
| Company                     | The company ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                                                                     |           |
| Customer ID                 | The ID of the customer to update.                                                                                                                                                                            |           |
| Short Name                  | Customer short name.                                                                                                                                                                                         |           |
| On Hold                     | True if customer account is on hold, else False.                                                                                                                                                             | undefined |
| Status Reason               | Reason for change in account status.                                                                                                                                                                         |           |
| Account Status Type         | The status of the customer account (Sage 200 Standard and versions of Professional released after July 2017). See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/account_status_types |           |
| Currency ID                 | Currency record Id. This defaults to the base currency Id. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/currencies                                                              |           |
| Exchange Rate Type          | The type of exchange rate used on the customer account. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/exchange_rate_types                                                        |           |
| Telephone Country Code      | Telephone country code.                                                                                                                                                                                      |           |
| Telephone Area Code         | Telephone area code.                                                                                                                                                                                         |           |
| Telephone Subscriber Number | Telephone subscriber number.                                                                                                                                                                                 |           |
| Fax Country Code            | Fax country code.                                                                                                                                                                                            |           |
| Fax Area Code               | Fax area code.                                                                                                                                                                                               |           |
| Fax Subscriber Number       | Fax subscriber number.                                                                                                                                                                                       |           |
| Website                     | Website address.                                                                                                                                                                                             |           |
| Additional Fields           | Additional fields that are not covered by the standard inputs. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/customers                                                           |           |
| Debug Request               | Enabling this flag will log out the current request.                                                                                                                                                         | false     |

### Update Customer Contact

Edit an existing customer contact by ID

| Input         | Comments                                                                                                                             | Default   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| Connection    |                                                                                                                                      |           |
| Site          | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.                                |           |
| Company       | The company ID. You can get and reference this value from the 'Get Site and Company Information' action.                             |           |
| Customer ID   | The ID of the customer contact to update                                                                                             |           |
| Salutation ID | Salutation record Id.                                                                                                                |           |
| First Name    | Contact first name.                                                                                                                  |           |
| Middle Name   | Contact middle name.                                                                                                                 |           |
| Last Name     | Contact surname.                                                                                                                     |           |
| Is To Delete  | When updating an existing customer, whether to delete this contact from the collection of customer contacts.                         | undefined |
| Emails        | An array of customer emails. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/customer_emails               |           |
| Telephones    | An array of customer telephones. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/customer_telephones       |           |
| Mobiles       | An array of customer mobiles. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/customer_mobiles             |           |
| Faxes         | An array of customer faxes. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/customer_faxes                 |           |
| Websites      | An array of customer websites. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/customer_websites           |           |
| Roles         | An array of customer contact roles. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/customer_contact_roles |           |
| Debug Request | Enabling this flag will log out the current request.                                                                                 | false     |

### Update Customer Delivery Address

Edit an existing customer delivery address by ID

| Input                   | Comments                                                                                                             | Default   |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | --------- |
| Connection              |                                                                                                                      |           |
| Site                    | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.                |           |
| Company                 | The company ID. You can get and reference this value from the 'Get Site and Company Information' action.             |           |
| Delivery Address ID     | The ID of the customer delivery addresses to update.                                                                 |           |
| Is Default              | Flag to indicate if this is the default customer delivery address for the parent customer.                           | undefined |
| Postal Name             | Postal name is the name of the person or company who the invoice or sales order is addressed to.                     |           |
| Address 1               | Address line 1.                                                                                                      |           |
| Address 2               | Address line 2.                                                                                                      |           |
| Address 3               | Address line 3.                                                                                                      |           |
| Address 4               | Address line 4.                                                                                                      |           |
| City                    | City (if using segmented addresses in Sage 200 Professional).                                                        |           |
| County                  | County (if using segmented addresses in Sage 200 Professional).                                                      |           |
| Postcode                | Postcode.                                                                                                            |           |
| Address Country Code Id | Country code Id. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/country_codes             |           |
| Contact                 | The contact associated with the customer delivery address.                                                           |           |
| Telephone               | The telephone number associated with the customer delivery address.                                                  |           |
| Fax                     | The fax number associated with the customer delivery address.                                                        |           |
| Email                   | The email address associated with the customer delivery address.                                                     |           |
| Tax Number              | The tax number.                                                                                                      |           |
| Country Code Id         | VAT details Country code Id. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/country_codes |           |
| Debug Request           | Enabling this flag will log out the current request.                                                                 | false     |

### Update Product

Edit an existing product by ID

| Input                        | Comments                                                                                                                                                            | Default   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Connection                   |                                                                                                                                                                     |           |
| Site                         | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                               |           |
| Company                      | The company ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                            |           |
| Product ID                   | The ID of the product to update.                                                                                                                                    |           |
| Product Description          | Product description.                                                                                                                                                |           |
| Use Description On Documents | Whether to use the product description on order and invoice documents.                                                                                              | undefined |
| Product Barcode              | Product bar code.                                                                                                                                                   |           |
| Allow Sales Order            | Indicates whether the product is allowed on sales orders and invoicing.                                                                                             | undefined |
| Tax Code ID                  | Tax code record Id. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/tax_codes                                                             |           |
| Product Status Type          | The product status type. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/product_status_types                                             |           |
| Fulfilment Method Type       | The fulfilment method type of the product. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/fulfilment_method_types                        |           |
| Fulfilment Sequence Type     | The fulfilment sequence type of the product. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/fulfilment_sequence_types                    |           |
| Inactivation Date            | If the product was made inactive, the date on which the product was made inactive.                                                                                  |           |
| Manufacturer                 | The product manufacturer.                                                                                                                                           |           |
| Part Number                  | The product part number.                                                                                                                                            |           |
| Label Printing Option Type   | The label printing option type. (Sage 200 Professional only). See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/label_printing_option_types |           |
| Traceable Type               | The traceable type of the product. (Sage 200 Professional only). See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/traceable_types          |           |
| Sale From Single Batch       | Indicates whether the product is sold from a single batch. (Sage 200 Professional only).                                                                            | undefined |
| Allow Duplicate Numbers      | Indicates whether the product allows duplicate numbers. (Sage 200 Professional only).                                                                               | undefined |
| Uses Alternative Reference   | Indicates whether the product uses alternative references. (Sage 200 Professional only).                                                                            | undefined |
| Uses Sell By Date            | Indicates whether the product uses sell by dates. (Sage 200 Professional only).                                                                                     | undefined |
| Uses Use By Date             | Indicates whether the product uses use by dates. (Sage 200 Professional only).                                                                                      | undefined |
| Shelf Life                   | The shelf life of the product. (Sage 200 Professional only).                                                                                                        |           |
| Shelf Life Type              | The shelf life type of the product. (Sage 200 Professional only). See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/time_unit_types         |           |
| Additional Fields            | Additional fields that are not covered by the standard inputs. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/products                   |           |
| Debug Request                | Enabling this flag will log out the current request.                                                                                                                | false     |

### Update Sales Order

Edit an existing sales Order by ID

| Input                                     | Comments                                                                                                                                                                                                                            | Default   |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Connection                                |                                                                                                                                                                                                                                     |           |
| Site                                      | The site ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                                                                                               |           |
| Company                                   | The company ID. You can get and reference this value from the 'Get Site and Company Information' action.                                                                                                                            |           |
| Sales Order ID                            | Sales order ID to update                                                                                                                                                                                                            |           |
| Is Editing                                | If this is set to true, and the order is still a draft order, the order will remain as a draft order, otherwise the order is made a confirmed order.                                                                                | undefined |
| Is To Sequence Lines                      | If this is set to true, then the order of the line objects in the lines collection will determine the line number (print sequence number) for each line.                                                                            | undefined |
| Override On Hold                          | Allows a user that has the permissions to override the order's On Hold status, applied when a customer's account balance is over its credit limit.                                                                                  | undefined |
| Recalculate Prices                        | Allows recalculation of the prices for the order when the exchange rate has changed.                                                                                                                                                | undefined |
| Apply Available Document Discount Percent | This should be passed within to apply the 'available_document_discount_percent' to the sales order only if the 'available_document_discount_percent' is greater than a positive 'Document Discount Percent'.                        | undefined |
| Customer Delivery Address ID              | The Id of the customer delivery address to copy details to the sales order delivery address and resets 'Use Invoice Address'. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/customer_delivery_addresses |           |
| Suppress Warnings                         | If this is set to true, we will suppress warnings specifically for payment with order and this is also the case if 'Is Editing' is false.                                                                                           | undefined |
| Customer Type                             | SOP customer type. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/sop_customer_types                                                                                                                     |           |
| Document Date                             | Sales order document date.                                                                                                                                                                                                          |           |
| Exchange Rate                             | Exchange rate.                                                                                                                                                                                                                      |           |
| Customer Document Number                  | Customer document number.                                                                                                                                                                                                           |           |
| Use Invoice Address                       | True if this order uses the customer invoice address, else False.                                                                                                                                                                   | undefined |
| Is Triangulated                           | Whether this order is triangulated and applies only to an EU customer with a different country code to that set in the company details.                                                                                             | undefined |
| Settlement Discount Days                  | Settlement discount days.                                                                                                                                                                                                           |           |
| Settlement Discount Percent               | Settlement discount percent.                                                                                                                                                                                                        |           |
| Document Discount Percent                 | Document discount percent value, between -99.99 and 99.99. A negative value is treated as a surcharge (e.g. -10 is a 10% surcharge), and a positive value is treated as a discount.                                                 |           |
| Document Created By                       | The person who created the sales order.                                                                                                                                                                                             |           |
| Requested Delivery Date                   | Requested delivery date.                                                                                                                                                                                                            |           |
| Promised Delivery Date                    | Promised delivery date.                                                                                                                                                                                                             |           |
| Quotation Expiry Date                     | Quotation expiry date (only used for quotations).                                                                                                                                                                                   |           |
| Order Priority                            | Order priority.                                                                                                                                                                                                                     |           |
| Additional Fields                         | Additional fields that are not covered by the standard inputs. See https://developer.columbus.sage.com/docs#/uk/sage200extra/accounts/v1/sop_orders                                                                                 |           |
| Debug Request                             | Enabling this flag will log out the current request.                                                                                                                                                                                | false     |
