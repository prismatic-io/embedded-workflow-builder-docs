---
title: Bill Connector
sidebar_label: Bill
description: Use the Bill component to manage Bank Accounts, Invoices, Bills, and more.
---

![Bill](./assets/bill.png#connector-icon)
Use the Bill component to manage Bank Accounts, Invoices, Bills, and more.

## Connections

### Client Credentials

The following credentials are needed to authenticate with the BILL API:

- **Username**: Your username is the email address used to sign in to your API sandbox developer account.
- **Password**: Your password is used to sign in to your API sandbox developer account.
- **Organization ID**: Your API sandbox developer account represents your organization in BILL. The organization ID is a unique alphanumeric value that begins with 008.
- **Developer key**: Your developer key is used to uniquely identify your developer account in your API requests.

#### Instructions

1. **Retrieve Credentials**
   Ensure you have received an email from the BILL team containing your API login information: username, password, organization ID, and developer key.

2. **Configure Component**
   Open the configuration settings for your Bill connection and input the credentials.

| Input              | Comments                                                                                     | Default |
| ------------------ | -------------------------------------------------------------------------------------------- | ------- |
| Username           | Your username is the email address used to sign in to your API sandbox developer account.    |         |
| Password           | Your password is used to sign in to your API sandbox developer account.                      |         |
| Organization ID    | The organization ID is a unique alphanumeric value that begins with 008.                     |         |
| Developer Key      | Your developer key is used to uniquely identify your developer account in your API requests. |         |
| Use Production URL | Turn this On to use the production URL. Turn this Off to use the sandbox URL.                | true    |

## Actions

### Authenticate MFA session

Use this action to authenticate an MFA session. Session only last 30 days.

| Input         | Comments                                                                  | Default |
| ------------- | ------------------------------------------------------------------------- | ------- |
| Connection    |                                                                           |         |
| Challenge ID  | The challenge ID received from the 'Generate an MFA challenge ID' action. |         |
| Code Token    | The MFA code token received at the user's device.                         |         |
| Session ID    | The session ID received from the 'Generate an MFA challenge ID' action.   |         |
| Debug Request | Enabling this flag will log out the current request.                      | false   |

### Bulk Create Bills

Bulk create bill objects.

| Input           | Comments                                                                                                                                | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                         |         |
| Bills to Create | An array of bill objects to create. See https://developer.bill.com/reference/ap-vendortransactions-bulkcreatebill for more information. |         |
| Debug Request   | Enabling this flag will log out the current request.                                                                                    | false   |

### Bulk Create Customers

Bulk create customer objects.

| Input               | Comments                                                                                                                                  | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                           |         |
| Customers to Create | An array of customer objects to create. See https://developer.bill.com/reference/ar-customermgmt-bulkcreatecustomer for more information. |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                      | false   |

### Bulk Create Invoices

Bulk create invoice objects.

| Input              | Comments                                                                                                                                        | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                 |         |
| Invoices to Create | An array of invoice objects to create. See https://developer.bill.com/reference/ar-customertransactions-bulkcreateinvoice for more information. |         |
| Debug Request      | Enabling this flag will log out the current request.                                                                                            | false   |

### Bulk Create Vendor

Bulk create vendor objects.

| Input             | Comments                                                                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                     |         |
| Vendors to Create | An array of vendor objects to create. See https://developer.bill.com/reference/ap-vendormgmt-bulkcreatevendor for more information. |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                | false   |

### Bulk Create Vendor Bank Accounts

Bulk create vendor bank account objects.

| Input                          | Comments                                                                                                                                                    | Default |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                     |                                                                                                                                                             |         |
| MFA ID                         | ID of the MFA. Retrieved from the 'Authenticate MFA session' action.                                                                                        |         |
| Device ID                      | ID of the device. Retrieved from the 'Authenticate MFA session' action.                                                                                     |         |
| Vendor Bank Accounts to Create | An array of vendor bank account objects to create. See https://developer.bill.com/reference/ap-vendormgmt-bulkcreatevendorbankaccount for more information. |         |
| Debug Request                  | Enabling this flag will log out the current request.                                                                                                        | false   |

### Bulk Update Bills

Bulk update bill objects.

| Input           | Comments                                                                                                                                | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                         |         |
| Bills to Update | An array of bill objects to update. See https://developer.bill.com/reference/ap-vendortransactions-bulkupdatebill for more information. |         |
| Debug Request   | Enabling this flag will log out the current request.                                                                                    | false   |

### Bulk Update Customers

Bulk update customer objects.

| Input               | Comments                                                                                                                                  | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                           |         |
| Customers to Update | An array of customer objects to update. See https://developer.bill.com/reference/ar-customermgmt-bulkupdatecustomer for more information. |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                      | false   |

### Bulk Update Invoices

Bulk update invoice objects.

| Input              | Comments                                                                                                                                        | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                 |         |
| Invoices to Update | An array of invoice objects to update. See https://developer.bill.com/reference/ar-customertransactions-bulkupdateinvoice for more information. |         |
| Debug Request      | Enabling this flag will log out the current request.                                                                                            | false   |

### Bulk Update Vendors

Bulk update vendor objects.

| Input             | Comments                                                                                                                            | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                     |         |
| Vendors to Update | An array of vendor objects to update. See https://developer.bill.com/reference/ap-vendormgmt-bulkupdatevendor for more information. |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                | false   |

### Create Bill

Create a bill object.

| Input                          | Comments                                                                                                                                                            | Default |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                     |                                                                                                                                                                     |         |
| Vendor ID                      | ID of the vendor.                                                                                                                                                   |         |
| Invoice Number                 | User-generated invoice number. This value can be your chosen number scheme or bill due date.                                                                        |         |
| Invoice Date                   | Date when the bill is sent. This value is in the YYYY-MM-DD format.                                                                                                 |         |
| Due Date                       | Date when the bill is due. The value is in the YYYY-MM-DD format.                                                                                                   |         |
| Bill Line Items                | An array of bill line items. See https://developer.bill.com/reference/ap-vendortransactions-createbill for more information.                                        |         |
| Allow Duplicate Invoice Number | Allow duplicate invoice numbers.                                                                                                                                    | false   |
| Additional Fields              | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/ap-vendortransactions-createbill for more information. |         |
| Debug Request                  | Enabling this flag will log out the current request.                                                                                                                | false   |

### Create Customer

Create a customer object.

| Input             | Comments                                                                                                                                                          | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                   |         |
| Customer Name     | The name of the customer.                                                                                                                                         |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/ar-customermgmt-createcustomer for more information. |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                                              | false   |

### Create Customer Bank Account

Create a customer bank account object.

| Input             | Comments                                                                                                                                                                     | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                              |         |
| Customer ID       | ID of the customer.                                                                                                                                                          |         |
| Name on Account   | Customer bank account name.                                                                                                                                                  |         |
| Routing Number    | Customer bank routing number.                                                                                                                                                |         |
| Account Number    | Customer bank account number.                                                                                                                                                |         |
| Agreed with TOS   | Agreed with the BILL Payment Terms Of Service.                                                                                                                               | true    |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/ar-customermgmt-createcustomerbankaccount for more information. |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                                                         | false   |

### Create Invoice

Create an invoice object.

| Input              | Comments                                                                                                                                                                 | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                                                                                                          |         |
| Customer ID        | ID of the customer.                                                                                                                                                      |         |
| Invoice Number     | User-generated invoice number. This value can be your chosen number scheme or invoice due date.                                                                          |         |
| Invoice Date       | Date when the invoice is issued to the customer. This value is in the YYYY-MM-DD format.                                                                                 |         |
| Due Date           | Date when the invoice is due. The value is in the YYYY-MM-DD format.                                                                                                     |         |
| Invoice Line Items | An array of invoice line items.                                                                                                                                          |         |
| Additional Fields  | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/ar-customertransactions-createinvoice for more information. |         |
| Debug Request      | Enabling this flag will log out the current request.                                                                                                                     | false   |

### Create Vendor

Create a vendor object.

| Input             | Comments                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                               |         |
| Vendor Name       | Unique vendor name.                                                                                                                                           |         |
| Company Name      | Vendor organization full name.                                                                                                                                |         |
| Email             | Vendor email address.                                                                                                                                         |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/ap-vendormgmt-createvendor for more information. |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                                          | false   |

### Create Vendor Bank Account

Create a vendor bank account object.

| Input             | Comments                                                                                                                                                                 | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                                                                                                          |         |
| MFA ID            | ID of the MFA. Retrieved from the 'Authenticate MFA session' action.                                                                                                     |         |
| Device ID         | ID of the device. Retrieved from the 'Authenticate MFA session' action.                                                                                                  |         |
| Vendor ID         | ID of the vendor.                                                                                                                                                        |         |
| Account Number    | Vendor bank account number.                                                                                                                                              |         |
| Routing Number    | Vendor bank routing number.                                                                                                                                              |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/ap-vendormgmt-createvendorbankaccount for more information. |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                                                     | false   |

### Delete Bill

Delete a bill object.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Bill ID       | Bill ID.                                             |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Customer

Delete a customer object.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Customer ID   | ID of the customer.                                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Invoice

Delete an invoice object.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Invoice ID    | The ID of the invoice.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Vendor

Delete a vendor object.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Vendor ID     | ID of the vendor.                                    |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Vendor Bank Account

Delete a vendor bank account object.

| Input                  | Comments                                                                | Default |
| ---------------------- | ----------------------------------------------------------------------- | ------- |
| Connection             |                                                                         |         |
| MFA ID                 | ID of the MFA. Retrieved from the 'Authenticate MFA session' action.    |         |
| Device ID              | ID of the device. Retrieved from the 'Authenticate MFA session' action. |         |
| Vendor Bank Account ID | ID of the vendor bank account.                                          |         |
| Debug Request          | Enabling this flag will log out the current request.                    | false   |

### Generate an MFA challenge ID

Use this action to create a trusted MFA session.

| Input         | Comments                                              | Default |
| ------------- | ----------------------------------------------------- | ------- |
| Connection    |                                                       |         |
| Use backup    | Turn this On to use the backup mobile device for MFA. | false   |
| Debug Request | Enabling this flag will log out the current request.  | false   |

### Get Bill

Read a bill object.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Bill ID       | Bill ID.                                             |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Customer

Read a customer object.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Customer ID   | ID of the customer.                                  |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Customer Bank Account

Read a customer bank account object.

| Input                    | Comments                                             | Default |
| ------------------------ | ---------------------------------------------------- | ------- |
| Connection               |                                                      |         |
| Customer Bank Account ID | ID of the customer bank account.                     |         |
| Debug Request            | Enabling this flag will log out the current request. | false   |

### Get Invoice

Read an invoice object.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Invoice ID    | The ID of the invoice.                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Vendor

Read a vendor object.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Vendor ID     | ID of the vendor.                                    |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Vendor Bank Account

Read a vendor bank account object.

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| Connection             |                                                      |         |
| Vendor Bank Account ID | ID of the vendor bank account.                       |         |
| Debug Request          | Enabling this flag will log out the current request. | false   |

### List Bills

List bill objects.

| Input         | Comments                                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                             |         |
| Start         | Index of the first result.                                                                                                  | 0       |
| Max           | Maximum number of results to return.                                                                                        | 999     |
| Filters       | An array of filters to apply. See https://developer.bill.com/reference/ap-vendortransactions-listbill for more information. |         |
| Sort          | An array of sort objects. See https://developer.bill.com/reference/ap-vendortransactions-listbill for more information.     |         |
| Nested        | Set as true to include additional nested data in the response.                                                              | false   |
| Debug Request | Enabling this flag will log out the current request.                                                                        | false   |

### List Customer

List customer objects.

| Input         | Comments                                                                                                                  | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                           |         |
| Start         | Index of the first result.                                                                                                | 0       |
| Max           | Maximum number of results to return.                                                                                      | 999     |
| Sort          | An array of sort objects. See https://developer.bill.com/reference/ar-customermgmt-listcustomer for more information.     |         |
| Filters       | An array of filters to apply. See https://developer.bill.com/reference/ar-customermgmt-listcustomer for more information. |         |
| Nested        | Set as true to include additional nested data in the response.                                                            | false   |
| Debug Request | Enabling this flag will log out the current request.                                                                      | false   |

### List Customer Bank Account

List customer bank account objects.

| Input         | Comments                                                                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                                                                      |         |
| Start         | Index of the first result.                                                                                                           | 0       |
| Max           | Maximum number of results to return.                                                                                                 | 999     |
| Filters       | An array of filters to apply. See https://developer.bill.com/reference/ar-customermgmt-listcustomerbankaccount for more information. |         |
| Sort          | An array of sort objects. See https://developer.bill.com/reference/ar-customermgmt-listcustomerbankaccount for more information.     |         |
| Nested        | Set as true to include additional nested data in the response.                                                                       | false   |
| Debug Request | Enabling this flag will log out the current request.                                                                                 | false   |

### List Invoices

List invoice objects.

| Input         | Comments                                                                                                                         | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                  |         |
| Start         | Index of the first result.                                                                                                       | 0       |
| Max           | Maximum number of results to return.                                                                                             | 999     |
| Sort          | An array of sort objects. See https://developer.bill.com/reference/ar-customertransactions-listinvoice for more information.     |         |
| Filters       | An array of filters to apply. See https://developer.bill.com/reference/ar-customertransactions-listinvoice for more information. |         |
| Nested        | Set as true to include additional nested data in the response.                                                                   | false   |
| Debug Request | Enabling this flag will log out the current request.                                                                             | false   |

### List Vendor Bank Accounts

List vendor bank account objects.

| Input         | Comments                                                                                                                         | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                  |         |
| Start         | Index of the first result.                                                                                                       | 0       |
| Max           | Maximum number of results to return.                                                                                             | 999     |
| Sort          | An array of sort objects. See https://developer.bill.com/reference/ap-vendormgmt-listvendorbankaccount for more information.     |         |
| Filters       | An array of filters to apply. See https://developer.bill.com/reference/ap-vendormgmt-listvendorbankaccount for more information. |         |
| Nested        | Set as true to include additional nested data in the response.                                                                   | false   |
| Debug Request | Enabling this flag will log out the current request.                                                                             | false   |

### List Vendors

List vendor objects.

| Input         | Comments                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                       |         |
| Start         | Index of the first result.                                                                                            | 0       |
| Max           | Maximum number of results to return.                                                                                  | 999     |
| Sort          | An array of sort objects. See https://developer.bill.com/reference/ap-vendormgmt-listvendor for more information.     |         |
| Filters       | An array of filters to apply. See https://developer.bill.com/reference/ap-vendormgmt-listvendor for more information. |         |
| Nested        | Set as true to include additional nested data in the response.                                                        | false   |
| Debug Request | Enabling this flag will log out the current request.                                                                  | false   |

### Raw Request

Send raw HTTP request to Bill.

| Input                   | Comments                                                                                                                                                                                                         | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/Login.json), The base URL is already included (https://api.bill.com/api/v2). For example, to connect to https://api.bill.com/api/v2/Login.json, only /Login.json is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                              |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                 | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                    | false   |

### Update Bill

Update a bill object.

| Input                          | Comments                                                                                                                                                            | Default |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                     |                                                                                                                                                                     |         |
| Bill ID                        | Bill ID.                                                                                                                                                            |         |
| Vendor ID                      | ID of the vendor.                                                                                                                                                   |         |
| Invoice Number                 | User-generated invoice number. This value can be your chosen number scheme or bill due date.                                                                        |         |
| Invoice Date                   | Date when the bill is sent. This value is in the YYYY-MM-DD format.                                                                                                 |         |
| Due Date                       | Date when the bill is due. The value is in the YYYY-MM-DD format.                                                                                                   |         |
| Bill Line Items                | An array of bill line items. See https://developer.bill.com/reference/ap-vendortransactions-updatebill for more information.                                        |         |
| Allow Duplicate Invoice Number | Allow duplicate invoice numbers.                                                                                                                                    |         |
| Additional Fields              | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/ap-vendortransactions-updatebill for more information. |         |
| Debug Request                  | Enabling this flag will log out the current request.                                                                                                                | false   |

### Update Customer

Update a customer object.

| Input             | Comments                                                                                                                                                          | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                   |         |
| Customer ID       | ID of the customer.                                                                                                                                               |         |
| Customer Name     | The name of the customer.                                                                                                                                         |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/ar-customermgmt-updatecustomer for more information. |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                                              | false   |

### Update Invoice

Update an invoice object.

| Input              | Comments                                                                                        | Default |
| ------------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                 |         |
| Invoice ID         | The ID of the invoice.                                                                          |         |
| Customer ID        | ID of the customer.                                                                             |         |
| Invoice Number     | User-generated invoice number. This value can be your chosen number scheme or invoice due date. |         |
| Invoice Date       | Date when the invoice is issued to the customer. This value is in the YYYY-MM-DD format.        |         |
| Due Date           | Date when the invoice is due. The value is in the YYYY-MM-DD format.                            |         |
| Invoice Line Items | An array of invoice line items.                                                                 |         |
| Additional Fields  | Additional fields that might not be covered by the standard inputs.                             |         |
| Debug Request      | Enabling this flag will log out the current request.                                            | false   |

### Update Vendor

Update a vendor object.

| Input             | Comments                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                               |         |
| Vendor ID         | ID of the vendor.                                                                                                                                             |         |
| Vendor Name       | Unique vendor name.                                                                                                                                           |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/ap-vendormgmt-updatevendor for more information. |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                                          | false   |
