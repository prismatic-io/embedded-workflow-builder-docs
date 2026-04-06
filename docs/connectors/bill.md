---
title: Bill Connector
sidebar_label: Bill
description: Use the Bill component to manage Bank Accounts, Invoices, Bills, and more.
---

![Bill](./assets/bill.png#connector-icon)
[Bill.com](https://bill.com/) is a leading provider of cloud-based software that simplifies and automates back-office financial operations for small and midsize businesses.

Use the Bill component to manage Bank Accounts, Invoices, Bills, and more.

## API Documentation

This component was built using the [Bill API Reference](https://developer.bill.com/reference/api-reference-overview)

## Connections

### Client Credentials {#billconnection}

Authenticate using client credentials

#### Prerequisites

The following credentials are needed to authenticate with the BILL API:

- **Username**: The username is the email address used to sign in to the API sandbox developer account.
- **Password**: The password is used to sign in to the API sandbox developer account.
- **Organization ID**: The API sandbox developer account represents the organization in BILL. The organization ID is a unique alphanumeric value that begins with 008.
- **Developer key**: The developer key is used to uniquely identify the developer account in API requests.

#### Setup Steps

1. **Retrieve Credentials**
   The BILL team must provide an email containing the API login information: username, password, organization ID, and developer key.

#### Configure the Connection

1. Open the configuration settings for the Bill connection and input the credentials:
   - **Username**: Enter the email address used to sign in to the API sandbox developer account.
   - **Password**: Enter the password used to sign in to the API sandbox developer account.
   - **Organization ID**: Enter the organization ID (unique alphanumeric value beginning with 008).
   - **Developer Key**: Enter the developer key used to uniquely identify the developer account in API requests.
   - **Use Production URL**: Turn this On to use the production URL. Turn this Off to use the sandbox URL.

| Input              | Comments                                                                                | Default |
| ------------------ | --------------------------------------------------------------------------------------- | ------- |
| Username           | The username is the email address used to sign in to the API sandbox developer account. |         |
| Password           | The password is used to sign in to the API sandbox developer account.                   |         |
| Organization ID    | The organization ID is a unique alphanumeric value that begins with 008.                |         |
| Developer Key      | The developer key is used to uniquely identify the developer account in API requests.   |         |
| Use Production URL | Turn this On to use the production URL. Turn this Off to use the sandbox URL.           | true    |

## Actions

### Authenticate MFA Session {#mfaauthenticate}

Use this action to authenticate an MFA session. Session only last 30 days.

| Input        | Comments                                                                  | Default |
| ------------ | ------------------------------------------------------------------------- | ------- |
| Connection   | The Bill.com connection to use.                                           |         |
| Challenge ID | The challenge ID received from the 'Generate an MFA challenge ID' action. |         |
| Code Token   | The MFA code token received at the user's device.                         |         |
| Session ID   | The session ID received from the 'Generate an MFA challenge ID' action.   |         |

### Bulk Create Bills {#bulkcreatebills}

Bulk create bill objects.

| Input           | Comments                                                                                                                                                                 | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The Bill.com connection to use.                                                                                                                                          |         |
| Bills to Create | An array of bill objects to create. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ap-vendortransactions-bulkcreatebill) for more information. |         |

### Bulk Create Customers {#bulkcreatecustomers}

Bulk create customer objects.

| Input               | Comments                                                                                                                                                                   | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Bill.com connection to use.                                                                                                                                            |         |
| Customers to Create | An array of customer objects to create. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ar-customermgmt-bulkcreatecustomer) for more information. |         |

### Bulk Create Invoices {#bulkcreateinvoices}

Bulk create invoice objects.

| Input              | Comments                                                                                                                                                                         | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Bill.com connection to use.                                                                                                                                                  |         |
| Invoices to Create | An array of invoice objects to create. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ar-customertransactions-bulkcreateinvoice) for more information. |         |

### Bulk Create Vendor {#bulkcreatevendor}

Bulk create vendor objects.

| Input             | Comments                                                                                                                                                             | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Bill.com connection to use.                                                                                                                                      |         |
| Vendors to Create | An array of vendor objects to create. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ap-vendormgmt-bulkcreatevendor) for more information. |         |

### Bulk Create Vendor Bank Accounts {#bulkcreatevendorbankaccounts}

Bulk create vendor bank account objects.

| Input                          | Comments                                                                                                                                                                                     | Default |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                     | The Bill.com connection to use.                                                                                                                                                              |         |
| MFA ID                         | The unique identifier for the MFA session. Retrieved from the 'Authenticate MFA session' action.                                                                                             |         |
| Device ID                      | The unique identifier for the device. Retrieved from the 'Authenticate MFA session' action.                                                                                                  |         |
| Vendor Bank Accounts to Create | An array of vendor bank account objects to create. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ap-vendormgmt-bulkcreatevendorbankaccount) for more information. |         |

### Bulk Update Bills {#bulkupdatebills}

Bulk update bill objects.

| Input           | Comments                                                                                                                                                                 | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The Bill.com connection to use.                                                                                                                                          |         |
| Bills to Update | An array of bill objects to update. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ap-vendortransactions-bulkupdatebill) for more information. |         |

### Bulk Update Customers {#bulkupdatecustomers}

Bulk update customer objects.

| Input               | Comments                                                                                                                                                                   | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Bill.com connection to use.                                                                                                                                            |         |
| Customers to Update | An array of customer objects to update. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ar-customermgmt-bulkupdatecustomer) for more information. |         |

### Bulk Update Invoices {#bulkupdateinvoices}

Bulk update invoice objects.

| Input              | Comments                                                                                                                                                                         | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Bill.com connection to use.                                                                                                                                                  |         |
| Invoices to Update | An array of invoice objects to update. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ar-customertransactions-bulkupdateinvoice) for more information. |         |

### Bulk Update Vendors {#bulkupdatevendors}

Bulk update vendor objects.

| Input             | Comments                                                                                                                                                             | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Bill.com connection to use.                                                                                                                                      |         |
| Vendors to Update | An array of vendor objects to update. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ap-vendormgmt-bulkupdatevendor) for more information. |         |

### Create Bill {#createbill}

Create a bill object.

| Input                          | Comments                                                                                                                                      | Default |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                     | The Bill.com connection to use.                                                                                                               |         |
| Vendor ID                      | The unique identifier for the vendor.                                                                                                         |         |
| Invoice Number                 | User-generated invoice number. This value can be your chosen number scheme or bill due date.                                                  |         |
| Invoice Date                   | Date when the bill is sent. This value is in the YYYY-MM-DD format.                                                                           |         |
| Due Date                       | Date when the bill is due. The value is in the YYYY-MM-DD format.                                                                             |         |
| Bill Line Items                | An array of bill line items. See [Bill.com API documentation](https://developer.bill.com/reference/createbill) for more information.          |         |
| Allow Duplicate Invoice Number | When true, allows duplicate invoice numbers.                                                                                                  | false   |
| Additional Fields              | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/createbill for more information. |         |

### Create Customer {#createcustomer}

Create a customer object.

| Input             | Comments                                                                                                                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Bill.com connection to use.                                                                                                                   |         |
| Customer Name     | The name of the customer.                                                                                                                         |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/createcustomer for more information. |         |

### Create Customer Bank Account {#createcustomerbankaccount}

Create a customer bank account object.

| Input             | Comments                                                                                                                                                     | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Bill.com connection to use.                                                                                                                              |         |
| Customer ID       | The unique identifier for the customer.                                                                                                                      |         |
| Name on Account   | Customer bank account name.                                                                                                                                  |         |
| Routing Number    | The customer bank routing number.                                                                                                                            |         |
| Account Number    | The customer bank account number.                                                                                                                            |         |
| Agreed with TOS   | When true, indicates agreement with the BILL Payment Terms Of Service.                                                                                       | true    |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/createcustomerbankaccount for more information. |         |

### Create Invoice {#createinvoice}

Create an invoice object.

| Input              | Comments                                                                                                                                         | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection         | The Bill.com connection to use.                                                                                                                  |         |
| Customer ID        | The unique identifier for the customer.                                                                                                          |         |
| Invoice Number     | User-generated invoice number. This value can be your chosen number scheme or invoice due date.                                                  |         |
| Invoice Date       | Date when the invoice is issued to the customer. This value is in the YYYY-MM-DD format.                                                         |         |
| Due Date           | Date when the invoice is due. The value is in the YYYY-MM-DD format.                                                                             |         |
| Invoice Line Items | An array of invoice line items.                                                                                                                  |         |
| Additional Fields  | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/createinvoice for more information. |         |

### Create Vendor {#createvendor}

Create a vendor object.

| Input             | Comments                                                                                                                                        | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Bill.com connection to use.                                                                                                                 |         |
| Vendor Name       | Unique vendor name.                                                                                                                             |         |
| Company Name      | Vendor organization full name.                                                                                                                  |         |
| Email             | Vendor email address.                                                                                                                           |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/createvendor for more information. |         |

### Create Vendor Bank Account {#createvendorbankaccount}

Create a vendor bank account object.

| Input             | Comments                                                                                                                                                   | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Bill.com connection to use.                                                                                                                            |         |
| MFA ID            | The unique identifier for the MFA session. Retrieved from the 'Authenticate MFA session' action.                                                           |         |
| Device ID         | The unique identifier for the device. Retrieved from the 'Authenticate MFA session' action.                                                                |         |
| Vendor ID         | The unique identifier for the vendor.                                                                                                                      |         |
| Account Number    | The vendor bank account number.                                                                                                                            |         |
| Routing Number    | The vendor bank routing number.                                                                                                                            |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/createvendorbankaccount for more information. |         |

### Delete Bill {#deletebill}

Delete a bill object.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Bill.com connection to use.     |         |
| Bill ID    | The unique identifier for the bill. |         |

### Delete Customer {#deletecustomer}

Delete a customer object.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Bill.com connection to use.         |         |
| Customer ID | The unique identifier for the customer. |         |

### Delete Invoice {#deleteinvoice}

Delete an invoice object.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Bill.com connection to use. |         |
| Invoice ID | The ID of the invoice.          |         |

### Delete Vendor {#deletevendor}

Delete a vendor object.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Bill.com connection to use.       |         |
| Vendor ID  | The unique identifier for the vendor. |         |

### Delete Vendor Bank Account {#deletevendorbankaccount}

Delete a vendor bank account object.

| Input                  | Comments                                                                                         | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Bill.com connection to use.                                                                  |         |
| MFA ID                 | The unique identifier for the MFA session. Retrieved from the 'Authenticate MFA session' action. |         |
| Device ID              | The unique identifier for the device. Retrieved from the 'Authenticate MFA session' action.      |         |
| Vendor Bank Account ID | ID of the vendor bank account.                                                                   |         |

### Generate an MFA Challenge ID {#generatemfachallengeid}

Use this action to create a trusted MFA session.

| Input      | Comments                                          | Default |
| ---------- | ------------------------------------------------- | ------- |
| Connection | The Bill.com connection to use.                   |         |
| Use backup | When true, uses the backup mobile device for MFA. | false   |

### Get Bill {#getbill}

Read a bill object.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Bill.com connection to use.     |         |
| Bill ID    | The unique identifier for the bill. |         |

### Get Customer {#getcustomer}

Read a customer object.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Bill.com connection to use.         |         |
| Customer ID | The unique identifier for the customer. |         |

### Get Customer Bank Account {#getcustomerbankaccount}

Read a customer bank account object.

| Input                    | Comments                         | Default |
| ------------------------ | -------------------------------- | ------- |
| Connection               | The Bill.com connection to use.  |         |
| Customer Bank Account ID | ID of the customer bank account. |         |

### Get Invoice {#getinvoice}

Read an invoice object.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Bill.com connection to use. |         |
| Invoice ID | The ID of the invoice.          |         |

### Get Vendor {#getvendor}

Read a vendor object.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Bill.com connection to use.       |         |
| Vendor ID  | The unique identifier for the vendor. |         |

### Get Vendor Bank Account {#getvendorbankaccount}

Read a vendor bank account object.

| Input                  | Comments                        | Default |
| ---------------------- | ------------------------------- | ------- |
| Connection             | The Bill.com connection to use. |         |
| Vendor Bank Account ID | ID of the vendor bank account.  |         |

### List Bills {#listbills}

List bill objects.

| Input      | Comments                                                                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Bill.com connection to use.                                                                                                      |         |
| Start      | Index of the first result.                                                                                                           | 0       |
| Max        | Maximum number of results to return.                                                                                                 | 999     |
| Filters    | An array of filters to apply. See [Bill.com API documentation](https://developer.bill.com/reference/listbills) for more information. |         |
| Sort       | An array of sort objects. See [Bill.com API documentation](https://developer.bill.com/reference/listbills) for more information.     |         |
| Nested     | When true, includes additional nested data in the response.                                                                          | false   |

### List Customer Bank Account {#listcustomerbankaccount}

List customer bank account objects.

| Input      | Comments                                                                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Bill.com connection to use.                                                                                                                                       |         |
| Start      | Index of the first result.                                                                                                                                            | 0       |
| Max        | Maximum number of results to return.                                                                                                                                  | 999     |
| Filters    | An array of filters to apply. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ar-customermgmt-listcustomerbankaccount) for more information. |         |
| Sort       | An array of sort objects. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ar-customermgmt-listcustomerbankaccount) for more information.     |         |
| Nested     | When true, includes additional nested data in the response.                                                                                                           | false   |

### List Customers {#listcustomer}

List customer objects.

| Input      | Comments                                                                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Bill.com connection to use.                                                                                                          |         |
| Start      | Index of the first result.                                                                                                               | 0       |
| Max        | Maximum number of results to return.                                                                                                     | 999     |
| Sort       | An array of sort objects. See [Bill.com API documentation](https://developer.bill.com/reference/listcustomers) for more information.     |         |
| Filters    | An array of filters to apply. See [Bill.com API documentation](https://developer.bill.com/reference/listcustomers) for more information. |         |
| Nested     | When true, includes additional nested data in the response.                                                                              | false   |

### List Invoices {#listinvoice}

List invoice objects.

| Input      | Comments                                                                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Bill.com connection to use.                                                                                                         |         |
| Start      | Index of the first result.                                                                                                              | 0       |
| Max        | Maximum number of results to return.                                                                                                    | 999     |
| Sort       | An array of sort objects. See [Bill.com API documentation](https://developer.bill.com/reference/listinvoices) for more information.     |         |
| Filters    | An array of filters to apply. See [Bill.com API documentation](https://developer.bill.com/reference/listinvoices) for more information. |         |
| Nested     | When true, includes additional nested data in the response.                                                                             | false   |

### List Vendor Bank Accounts {#listvendorbankaccounts}

List vendor bank account objects.

| Input      | Comments                                                                                                                                                          | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Bill.com connection to use.                                                                                                                                   |         |
| Start      | Index of the first result.                                                                                                                                        | 0       |
| Max        | Maximum number of results to return.                                                                                                                              | 999     |
| Sort       | An array of sort objects. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ap-vendormgmt-listvendorbankaccount) for more information.     |         |
| Filters    | An array of filters to apply. See [Bill.com API documentation](https://developer.bill.com/v2/reference/ap-vendormgmt-listvendorbankaccount) for more information. |         |
| Nested     | When true, includes additional nested data in the response.                                                                                                       | false   |

### List Vendors {#listvendors}

List vendor objects.

| Input      | Comments                                                                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Bill.com connection to use.                                                                                                        |         |
| Start      | Index of the first result.                                                                                                             | 0       |
| Max        | Maximum number of results to return.                                                                                                   | 999     |
| Sort       | An array of sort objects. See [Bill.com API documentation](https://developer.bill.com/reference/listvendors) for more information.     |         |
| Filters    | An array of filters to apply. See [Bill.com API documentation](https://developer.bill.com/reference/listvendors) for more information. |         |
| Nested     | When true, includes additional nested data in the response.                                                                            | false   |

### Raw Request {#rawrequest}

Send raw HTTP request to Bill.

| Input                   | Comments                                                                                                                                                                                                         | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Bill.com connection to use.                                                                                                                                                                                  |         |
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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                 | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                    | false   |

### Update Bill {#updatebill}

Update a bill object.

| Input                          | Comments                                                                                                                                      | Default |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                     | The Bill.com connection to use.                                                                                                               |         |
| Bill ID                        | The unique identifier for the bill.                                                                                                           |         |
| Vendor ID                      | The unique identifier for the vendor.                                                                                                         |         |
| Invoice Number                 | User-generated invoice number. This value can be your chosen number scheme or bill due date.                                                  |         |
| Invoice Date                   | Date when the bill is sent. This value is in the YYYY-MM-DD format.                                                                           |         |
| Due Date                       | Date when the bill is due. The value is in the YYYY-MM-DD format.                                                                             |         |
| Bill Line Items                | An array of bill line items. See [Bill.com API documentation](https://developer.bill.com/reference/updatebill) for more information.          |         |
| Allow Duplicate Invoice Number | Allow duplicate invoice numbers.                                                                                                              |         |
| Additional Fields              | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/updatebill for more information. |         |

### Update Customer {#updatecustomer}

Update a customer object.

| Input             | Comments                                                                                                                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Bill.com connection to use.                                                                                                                   |         |
| Customer ID       | The unique identifier for the customer.                                                                                                           |         |
| Customer Name     | The name of the customer.                                                                                                                         |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/updatecustomer for more information. |         |

### Update Invoice {#updateinvoice}

Update an invoice object.

| Input              | Comments                                                                                        | Default |
| ------------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Bill.com connection to use.                                                                 |         |
| Invoice ID         | The ID of the invoice.                                                                          |         |
| Customer ID        | The unique identifier for the customer.                                                         |         |
| Invoice Number     | User-generated invoice number. This value can be your chosen number scheme or invoice due date. |         |
| Invoice Date       | Date when the invoice is issued to the customer. This value is in the YYYY-MM-DD format.        |         |
| Due Date           | Date when the invoice is due. The value is in the YYYY-MM-DD format.                            |         |
| Invoice Line Items | An array of invoice line items.                                                                 |         |
| Additional Fields  | Additional fields that might not be covered by the standard inputs.                             |         |

### Update Vendor {#updatevendor}

Update a vendor object.

| Input             | Comments                                                                                                                                        | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Bill.com connection to use.                                                                                                                 |         |
| Vendor ID         | The unique identifier for the vendor.                                                                                                           |         |
| Vendor Name       | Unique vendor name.                                                                                                                             |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. See https://developer.bill.com/reference/updatevendor for more information. |         |
