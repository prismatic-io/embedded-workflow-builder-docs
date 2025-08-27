---
title: SAP Business One Connector
sidebar_label: SAP Business One
description: SAP Business One is an integrated enterprise resource planning (ERP) solution designed for organizations to manage their entire operations. Use the component to manage entities and actions from accounting, financials, inventory and more.
---

![SAP Business One](./assets/sap-business-one.png#connector-icon)
SAP Business One is an integrated enterprise resource planning (ERP) solution designed for organizations to manage their entire operations. Use the component to manage entities and actions from accounting, financials, inventory and more.

## Connections

### SAP Business One Authentication

Authentication for SAP Business One

To start a Business One API session:

1. Enter the following information into the connection configuration of the integration
   1. Server Address - Including Server Name, IP Address, Port Number. Server address must be like `https://<Server Name/IP>:<Port>`
   1. Username
   1. Password
   1. Company DB

| Input             | Comments                                                                                                                                 | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Username          | SAP Business One Username.                                                                                                               |         |
| Password          | SAP Business One Password.                                                                                                               |         |
| Server Address    | The url of the SAP Business One server, include the port. Example: https://<Server Name/IP>:<Port>. Required for NON-OnPrem connections. |         |
| Database Instance | The database instance to connect to.                                                                                                     |         |
| Company Name      | The company name to connect to.                                                                                                          |         |

## Actions

### Close Invoice

Invoke the method Close.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Doc Entry     | The DocEntry of the invoice.                         |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Business Partner

Create an instance of Business Partners

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Card Code     | The code of the business partner.                    |         |
| Card Name     | The name of the business partner.                    |         |
| Card Type     | The type of the business partner.                    |         |
| Body Fields   | More fields to include in the request body.          |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Invoice

Create an instance of Invoices.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Card Code     | The code of the business partner.                    |         |
| Doc Lines     | The doc lines of the order.                          |         |
| Body Fields   | More fields to include in the request body.          |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Item

Retrieve all or some selected properties from an instance of Items with the given id.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Item Code     | The code of the item.                                |         |
| Item Name     | The name of the item.                                |         |
| Item Type     | The type of the item.                                |         |
| Body Fields   | More fields to include in the request body.          |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Order

Create an instance of Orders.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Card Code     | The code of the card.                                |         |
| Doc Due Date  | The due date of the order.                           |         |
| Doc Lines     | The doc lines of the order.                          |         |
| Body Fields   | More fields to include in the request body.          |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Price List

Create an instance of Price Lists

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Price List Name | The name of the price list.                          |         |
| Body Fields     | More fields to include in the request body.          |         |
| Connection      |                                                      |         |
| Debug Request   | Enabling this flag will log out the current request. | false   |

### Create Purchase Order

Create an instance of Purchase Orders.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Card Code      | The code of the business partner.                    |         |
| Document Lines | The doc lines of the order.                          |         |
| Body Fields    | More fields to include in the request body.          |         |
| Connection     |                                                      |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Create Record

Create a new record in SAP Business One.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Record Type   | The type of the record to use for the operation.     |         |
| Body Fields   | More fields to include in the request body.          |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Warehouse

Create an instance of Warehouses.

| Input                 | Comments                                             | Default |
| --------------------- | ---------------------------------------------------- | ------- |
| Warehouse Name        | The name of the warehouse.                           |         |
| Warehouse Code        | The code of the warehouse.                           |         |
| Warehouse Location ID | The id of the warehouse location.                    |         |
| Body Fields           | More fields to include in the request body.          |         |
| Connection            |                                                      |         |
| Debug Request         | Enabling this flag will log out the current request. | false   |

### Delete Business Partner

Delete an instance of BusinessPartners with the specified id.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Card Code     | The code of the business partner.                    |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Item

Delete an instance of Items with the specified id.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Item Code     | The code of the item.                                |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Price List

Delete an instance of Items with the specified id.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Price List Number | The number of the price list.                        |         |
| Connection        |                                                      |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Delete Record

Delete an existing record in SAP Business One.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Record Type   | The type of the record to use for the operation.     |         |
| Record ID     | The ID of the record.                                |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Warehouse

Delete an instance of Warehouses with the specified id.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Warehouse Code | The code of the warehouse.                           |         |
| Connection     |                                                      |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Business Partner

Retrieve all or some selected properties from an instance of BusinessPartners with the given id.

| Input         | Comments                                                                                                                                | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Card Code     | The code of the business partner.                                                                                                       |         |
| Select        | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Connection    |                                                                                                                                         |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                    | false   |

### Get Invoice

Retrieve all or some selected properties from an instance of Warehouses with the given id.

| Input         | Comments                                                                                                                                | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Doc Entry     | The DocEntry of the invoice.                                                                                                            |         |
| Select        | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Connection    |                                                                                                                                         |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                    | false   |

### Get Item

Retrieve all or some selected properties from an instance of Items with the given id.

| Input         | Comments                                                                                                                                | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Item Code     | The code of the item.                                                                                                                   |         |
| Select        | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Connection    |                                                                                                                                         |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                    | false   |

### Get Order

Retrieve all or some selected properties from an instance of Orders with the given id.

| Input         | Comments                                                                                                                                | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Doc Entry     | The doc entry of the order.                                                                                                             |         |
| Select        | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Connection    |                                                                                                                                         |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                    | false   |

### Get Price List

Retrieve all or some selected properties from an instance of PriceLists with the given id.

| Input             | Comments                                                                                                                                | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Price List Number | The number of the price list.                                                                                                           |         |
| Select            | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Connection        |                                                                                                                                         |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                    | false   |

### Get Purchase Order

Retrieve all or some selected properties from an instance of Purchase Orders with the given id.

| Input                         | Comments                                                                                                                                | Default |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Purchase Order Document Entry | The document entry of the purchase order.                                                                                               |         |
| Select                        | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Connection                    |                                                                                                                                         |         |
| Debug Request                 | Enabling this flag will log out the current request.                                                                                    | false   |

### Get Record

Retrieve a single record from SAP Business One.

| Input         | Comments                                                                                                                                | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Record Type   | The type of the record to use for the operation.                                                                                        |         |
| Record ID     | The ID of the record.                                                                                                                   |         |
| Select        | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Connection    |                                                                                                                                         |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                    | false   |

### Get Warehouse

Retrieve all or some selected properties from an instance of Warehouses with the given id.

| Input          | Comments                                                                                                                                | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Warehouse Code | The code of the warehouse.                                                                                                              |         |
| Select         | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Connection     |                                                                                                                                         |         |
| Debug Request  | Enabling this flag will log out the current request.                                                                                    | false   |

### Get Warehouse Location

Retrieve all or some selected properties from an instance of Warehouse Location with the given id.

| Input                 | Comments                                                                                                                                | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Warehouse Location ID | The id of the warehouse location.                                                                                                       |         |
| Select                | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Connection            |                                                                                                                                         |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                    | false   |

### List Business Partners

Retrieve a collection of Business Partners with all or some selected properties

| Input               | Comments                                                                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                         |         |
| Fetch All           | If true, all records will be fetched. Otherwise, the $top and $skip parameters will be used.                                            | false   |
| Top                 | The number of items to return. Maximum is 20.                                                                                           |         |
| Skip                | The number of items to skip.                                                                                                            |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Filter              | A filter expression to apply to the request.                                                                                            |         |
| Order By            | A comma-separated list of fields to sort by.                                                                                            |         |
| Custom Query Params | Custom query parameters to be included in the request                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                    | false   |

### List Invoices

Retrieve a collection of Invoices with all or some selected properties in the given order by specifying the given filter condition.

| Input               | Comments                                                                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                         |         |
| Fetch All           | If true, all records will be fetched. Otherwise, the $top and $skip parameters will be used.                                            | false   |
| Top                 | The number of items to return. Maximum is 20.                                                                                           |         |
| Skip                | The number of items to skip.                                                                                                            |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Filter              | A filter expression to apply to the request.                                                                                            |         |
| Order By            | A comma-separated list of fields to sort by.                                                                                            |         |
| Custom Query Params | Custom query parameters to be included in the request                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                    | false   |

### List Items

Retrieve a collection of Items with all or some selected properties.

| Input               | Comments                                                                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                         |         |
| Fetch All           | If true, all records will be fetched. Otherwise, the $top and $skip parameters will be used.                                            | false   |
| Top                 | The number of items to return. Maximum is 20.                                                                                           |         |
| Skip                | The number of items to skip.                                                                                                            |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Filter              | A filter expression to apply to the request.                                                                                            |         |
| Order By            | A comma-separated list of fields to sort by.                                                                                            |         |
| Custom Query Params | Custom query parameters to be included in the request                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                    | false   |

### List Orders

Retrieve a collection of Orders with all or some selected properties

| Input               | Comments                                                                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                         |         |
| Fetch All           | If true, all records will be fetched. Otherwise, the $top and $skip parameters will be used.                                            | false   |
| Top                 | The number of items to return. Maximum is 20.                                                                                           |         |
| Skip                | The number of items to skip.                                                                                                            |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Filter              | A filter expression to apply to the request.                                                                                            |         |
| Order By            | A comma-separated list of fields to sort by.                                                                                            |         |
| Custom Query Params | Custom query parameters to be included in the request                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                    | false   |

### List Price Lists

Retrieve a collection of PriceLists with all or some selected properties.

| Input               | Comments                                                                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                         |         |
| Fetch All           | If true, all records will be fetched. Otherwise, the $top and $skip parameters will be used.                                            | false   |
| Top                 | The number of items to return. Maximum is 20.                                                                                           |         |
| Skip                | The number of items to skip.                                                                                                            |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Filter              | A filter expression to apply to the request.                                                                                            |         |
| Order By            | A comma-separated list of fields to sort by.                                                                                            |         |
| Custom Query Params | Custom query parameters to be included in the request                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                    | false   |

### List Purchase Orders

Retrieve a collection of Purchase Orders with all or some selected properties.

| Input               | Comments                                                                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                         |         |
| Fetch All           | If true, all records will be fetched. Otherwise, the $top and $skip parameters will be used.                                            | false   |
| Top                 | The number of items to return. Maximum is 20.                                                                                           |         |
| Skip                | The number of items to skip.                                                                                                            |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Filter              | A filter expression to apply to the request.                                                                                            |         |
| Order By            | A comma-separated list of fields to sort by.                                                                                            |         |
| Custom Query Params | Custom query parameters to be included in the request                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                    | false   |

### List Records

Retrieve a list of records from SAP Business One.

| Input               | Comments                                                                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                         |         |
| Record Type         | The type of the record to use for the operation.                                                                                        |         |
| Fetch All           | If true, all records will be fetched. Otherwise, the $top and $skip parameters will be used.                                            | false   |
| Top                 | The number of items to return. Maximum is 20.                                                                                           |         |
| Skip                | The number of items to skip.                                                                                                            |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Filter              | A filter expression to apply to the request.                                                                                            |         |
| Order By            | A comma-separated list of fields to sort by.                                                                                            |         |
| Custom Query Params | Custom query parameters to be included in the request                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                    | false   |

### List Warehouse Locations

Retrieve a collection of Warehouses Locations with all or some selected properties in the given order by specifying the given filter condition.

| Input               | Comments                                                                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                         |         |
| Fetch All           | If true, all records will be fetched. Otherwise, the $top and $skip parameters will be used.                                            | false   |
| Top                 | The number of items to return. Maximum is 20.                                                                                           |         |
| Skip                | The number of items to skip.                                                                                                            |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Filter              | A filter expression to apply to the request.                                                                                            |         |
| Order By            | A comma-separated list of fields to sort by.                                                                                            |         |
| Custom Query Params | Custom query parameters to be included in the request                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                    | false   |

### List Warehouses

Retrieve a collection of Warehouses with all or some selected properties in the given order by specifying the given filter condition.

| Input               | Comments                                                                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                         |         |
| Fetch All           | If true, all records will be fetched. Otherwise, the $top and $skip parameters will be used.                                            | false   |
| Top                 | The number of items to return. Maximum is 20.                                                                                           |         |
| Skip                | The number of items to skip.                                                                                                            |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query will be slower. |         |
| Filter              | A filter expression to apply to the request.                                                                                            |         |
| Order By            | A comma-separated list of fields to sort by.                                                                                            |         |
| Custom Query Params | Custom query parameters to be included in the request                                                                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                    | false   |

### Raw Request

Send raw HTTP request to the SAP Business One API

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| URL                     | This is the URL to call.                                                                                                                                                                         |         |
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
| Connection              |                                                                                                                                                                                                  |         |

### Update Business Partner

Update an instance of Business Partners

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Card Code     | The code of the business partner.                    |         |
| Card Name     | The name of the business partner.                    |         |
| Card Type     | The type of the business partner.                    |         |
| Body Fields   | More fields to include in the request body.          |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Invoice

Update an instance of Invoices.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Doc Entry     | The DocEntry of the invoice.                         |         |
| Comments      | The comments to be added to the modified order.      |         |
| Body Fields   | More fields to include in the request body.          |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Item

Update an instance of Items

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Item Code     | The code of the item.                                |         |
| Item Name     | The name of the item.                                |         |
| Item Type     | The type of the item.                                |         |
| Body Fields   | More fields to include in the request body.          |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Order

Update an instance of Orders.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Doc Entry     | The doc entry of the order.                          |         |
| Comments      | The comments to be added to the modified order.      |         |
| Body Fields   | More fields to include in the request body.          |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Price List

Update an instance of Price Lists.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Price List Number | The number of the price list.                        |         |
| Price List Name   | The name of the price list.                          |         |
| Body Fields       | More fields to include in the request body.          |         |
| Connection        |                                                      |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Update Purchase Order

Update an instance of Purchase Orders.

| Input                         | Comments                                             | Default |
| ----------------------------- | ---------------------------------------------------- | ------- |
| Purchase Order Document Entry | The document entry of the purchase order.            |         |
| Comments                      | The comments to be added to the modified order.      |         |
| Body Fields                   | More fields to include in the request body.          |         |
| Connection                    |                                                      |         |
| Debug Request                 | Enabling this flag will log out the current request. | false   |

### Update Record

Update an existing record in SAP Business One.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Record Type   | The type of the record to use for the operation.     |         |
| Record ID     | The ID of the record.                                |         |
| Body Fields   | More fields to include in the request body.          |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Warehouse

Update an instance of Warehouses.

| Input                 | Comments                                             | Default |
| --------------------- | ---------------------------------------------------- | ------- |
| Warehouse Code        | The code of the warehouse.                           |         |
| Warehouse Name        | The name of the warehouse.                           |         |
| Warehouse Location ID | The id of the warehouse location.                    |         |
| Body Fields           | More fields to include in the request body.          |         |
| Connection            |                                                      |         |
| Debug Request         | Enabling this flag will log out the current request. | false   |
