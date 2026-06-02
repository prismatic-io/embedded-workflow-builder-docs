---
title: SAP Business One Connector
sidebar_label: SAP Business One
description: Manage business partners, orders, inventory, and financial data in SAP Business One.
---

![SAP Business One](./assets/sap-business-one.png#connector-icon)
Manage business partners, orders, inventory, and financial data in SAP Business One.

## Connections

### SAP Business One Authentication {#sap-business-one-auth}

Authentication for SAP Business One

| Input             | Comments                                                                                                                                                                                                                                                                                                                                           | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Username          | The SAP Business One username for authentication.                                                                                                                                                                                                                                                                                                  |         |
| Password          | The SAP Business One password for authentication.                                                                                                                                                                                                                                                                                                  |         |
| Server Address    | The URL of the SAP Business One Service Layer server, including the port (e.g., https://sapb1-server.example.com:50000). Required for non-OnPrem connections. See [SAP Business One Service Layer documentation](https://help.sap.com/doc/0d2533ad95ba4ad7a702e83570a21c32/9.3/en-US/Working_with_SAP_Business_One_Service_Layer.pdf) for details. |         |
| Database Instance | The SAP HANA database instance to connect to, in the format DatabaseName@Host:Port.                                                                                                                                                                                                                                                                |         |
| Company Name      | The company database name to connect to in SAP Business One.                                                                                                                                                                                                                                                                                       |         |
| API Version       | The Service Layer API version to use. v2 (OData 4.0) is recommended for new integrations and provides improved functionality. v1 (OData 3.0) is available for backwards compatibility with existing integrations.                                                                                                                                  | v1      |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for new and updated records in SAP Business One on a configured schedule.

| Input                | Comments                                                                                         | Default |
| -------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection           | The SAP Business One connection to use.                                                          |         |
| Resource Type        | The SAP Business One resource type to poll for new or updated records.                           |         |
| Show New Records     | When true, newly created records will be included in the trigger output.                         | true    |
| Show Updated Records | When true, records that were updated after the last poll will be included in the trigger output. | true    |

## Actions

### Close Invoice {#closeinvoice}

Invoke the method Close.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Doc Entry  | The document entry number (DocEntry) that uniquely identifies the invoice. This is an integer value. |         |
| Connection | The SAP Business One connection to use.                                                              |         |

### Create Business Partner {#createbusinesspartner}

Create an instance of Business Partners

| Input       | Comments                                                                                                                    | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Card Code   | The unique code identifying the business partner (customer or supplier).                                                    |         |
| Card Name   | The name of the business partner (customer or supplier).                                                                    |         |
| Card Type   | The type of the business partner: Customer (cCustomer), Supplier (cSupplier), or Lead (cLid).                               |         |
| Body Fields | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values. |         |
| Connection  | The SAP Business One connection to use.                                                                                     |         |

### Create Invoice {#createinvoice}

Create an instance of Invoices.

| Input       | Comments                                                                                                                                     | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Card Code   | The unique code identifying the business partner (customer or supplier).                                                                     |         |
| Doc Lines   | The document lines containing item details for the order. Each line should include ItemCode, Quantity, and optionally UnitPrice and TaxCode. |         |
| Body Fields | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values.                  |         |
| Connection  | The SAP Business One connection to use.                                                                                                      |         |

### Create Item {#createitem}

Retrieve all or some selected properties from an instance of Items with the given id.

| Input       | Comments                                                                                                                    | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Item Code   | The unique code identifying the item in the inventory.                                                                      |         |
| Item Name   | The name of the item in the inventory.                                                                                      |         |
| Item Type   | The type of the item: Items (itItems), Labor (itLabor), Travel (itTravel), or Fixed Assets (itFixedAssets).                 |         |
| Body Fields | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values. |         |
| Connection  | The SAP Business One connection to use.                                                                                     |         |

### Create Order {#createorder}

Create an instance of Orders.

| Input        | Comments                                                                                                                                     | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Card Code    | The business partner code associated with this order.                                                                                        |         |
| Doc Due Date | The due date of the order in YYYY-MM-DD format.                                                                                              |         |
| Doc Lines    | The document lines containing item details for the order. Each line should include ItemCode, Quantity, and optionally UnitPrice and TaxCode. |         |
| Body Fields  | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values.                  |         |
| Connection   | The SAP Business One connection to use.                                                                                                      |         |

### Create Price List {#createpricelist}

Create an instance of Price Lists

| Input           | Comments                                                                                                                    | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Price List Name | The name of the price list.                                                                                                 |         |
| Body Fields     | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values. |         |
| Connection      | The SAP Business One connection to use.                                                                                     |         |

### Create Purchase Order {#createpurchaseorder}

Create an instance of Purchase Orders.

| Input          | Comments                                                                                                                                     | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Card Code      | The unique code identifying the business partner (customer or supplier).                                                                     |         |
| Document Lines | The document lines containing item details for the order. Each line should include ItemCode, Quantity, and optionally UnitPrice and TaxCode. |         |
| Body Fields    | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values.                  |         |
| Connection     | The SAP Business One connection to use.                                                                                                      |         |

### Create Record {#createrecord}

Create a new record in SAP Business One.

| Input       | Comments                                                                                                                                             | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Record Type | The type of record to use for the operation (e.g., JournalEntries, Activities, BusinessPartners). This corresponds to the Service Layer entity name. |         |
| Body Fields | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values.                          |         |
| Connection  | The SAP Business One connection to use.                                                                                                              |         |

### Create Warehouse {#createwarehouse}

Create an instance of Warehouses.

| Input                 | Comments                                                                                                                    | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Warehouse Name        | The name of the warehouse.                                                                                                  |         |
| Warehouse Code        | The unique code identifying the warehouse.                                                                                  |         |
| Warehouse Location ID | The unique identifier for the warehouse location. This is an integer value.                                                 |         |
| Body Fields           | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values. |         |
| Connection            | The SAP Business One connection to use.                                                                                     |         |

### Delete Business Partner {#deletebusinesspartner}

Delete an instance of BusinessPartners with the specified id.

| Input      | Comments                                                                 | Default |
| ---------- | ------------------------------------------------------------------------ | ------- |
| Card Code  | The unique code identifying the business partner (customer or supplier). |         |
| Connection | The SAP Business One connection to use.                                  |         |

### Delete Item {#deleteitem}

Delete an instance of Items with the specified id.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Item Code  | The unique code identifying the item in the inventory. |         |
| Connection | The SAP Business One connection to use.                |         |

### Delete Price List {#deletepricelist}

Delete an instance of Items with the specified id.

| Input             | Comments                                                                | Default |
| ----------------- | ----------------------------------------------------------------------- | ------- |
| Price List Number | The unique number identifying the price list. This is an integer value. |         |
| Connection        | The SAP Business One connection to use.                                 |         |

### Delete Record {#deleterecord}

Delete an existing record in SAP Business One.

| Input       | Comments                                                                                                                                             | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Record Type | The type of record to use for the operation (e.g., JournalEntries, Activities, BusinessPartners). This corresponds to the Service Layer entity name. |         |
| Record ID   | The unique identifier for the record. This is typically an integer value (DocEntry or similar).                                                      |         |
| Connection  | The SAP Business One connection to use.                                                                                                              |         |

### Delete Warehouse {#deletewarehouse}

Delete an instance of Warehouses with the specified id.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Warehouse Code | The unique code identifying the warehouse. |         |
| Connection     | The SAP Business One connection to use.    |         |

### Get Business Partner {#getbusinesspartner}

Retrieve all or some selected properties from an instance of BusinessPartners with the given id.

| Input      | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Card Code  | The unique code identifying the business partner (customer or supplier).                                                                                                                                                                                                                                    |         |
| Select     | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Connection | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |

### Get Invoice {#getinvoice}

Retrieve all or some selected properties from an instance of Warehouses with the given id.

| Input      | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Doc Entry  | The document entry number (DocEntry) that uniquely identifies the invoice. This is an integer value.                                                                                                                                                                                                        |         |
| Select     | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Connection | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |

### Get Item {#getitem}

Retrieve all or some selected properties from an instance of Items with the given id.

| Input      | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Item Code  | The unique code identifying the item in the inventory.                                                                                                                                                                                                                                                      |         |
| Select     | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Connection | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |

### Get Order {#getorder}

Retrieve all or some selected properties from an instance of Orders with the given id.

| Input      | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Doc Entry  | The document entry number (DocEntry) that uniquely identifies the order. This is an integer value.                                                                                                                                                                                                          |         |
| Select     | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Connection | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |

### Get Price List {#getpricelist}

Retrieve all or some selected properties from an instance of PriceLists with the given id.

| Input             | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Price List Number | The unique number identifying the price list. This is an integer value.                                                                                                                                                                                                                                     |         |
| Select            | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Connection        | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |

### Get Purchase Order {#getpurchaseorder}

Retrieve all or some selected properties from an instance of Purchase Orders with the given id.

| Input                         | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Purchase Order Document Entry | The document entry number (DocEntry) that uniquely identifies the purchase order. This is an integer value.                                                                                                                                                                                                 |         |
| Select                        | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Connection                    | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |

### Get Record {#getrecord}

Retrieve a single record from SAP Business One.

| Input       | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Record Type | The type of record to use for the operation (e.g., JournalEntries, Activities, BusinessPartners). This corresponds to the Service Layer entity name.                                                                                                                                                        |         |
| Record ID   | The unique identifier for the record. This is typically an integer value (DocEntry or similar).                                                                                                                                                                                                             |         |
| Select      | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Connection  | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |

### Get Warehouse {#getwarehouse}

Retrieve all or some selected properties from an instance of Warehouses with the given id.

| Input          | Comments                                                                                                                                                                                                                                                                                                    | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Warehouse Code | The unique code identifying the warehouse.                                                                                                                                                                                                                                                                  |         |
| Select         | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Connection     | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |

### Get Warehouse Location {#getwarehouselocation}

Retrieve all or some selected properties from an instance of Warehouse Location with the given id.

| Input                 | Comments                                                                                                                                                                                                                                                                                                    | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Warehouse Location ID | The unique identifier for the warehouse location. This is an integer value.                                                                                                                                                                                                                                 |         |
| Select                | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Connection            | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |

### List Business Partners {#listbusinesspartners}

Retrieve a collection of Business Partners with all or some selected properties

| Input               | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |
| Fetch All           | When true, all records will be fetched automatically by paginating through results. When false, only the number of records specified in $top will be returned.                                                                                                                                              | false   |
| Top                 | The maximum number of items to return. Maximum value is 20.                                                                                                                                                                                                                                                 |         |
| Skip                | The number of items to skip before returning results. Used for pagination.                                                                                                                                                                                                                                  |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Filter              | An OData filter expression to apply to the request (e.g., startswith, eq, gt). See [OData $filter documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for filter syntax.                                                            |         |
| Order By            | A comma-separated list of fields to sort by. Add 'asc' or 'desc' after field name for sort direction (e.g., ItemCode desc).                                                                                                                                                                                 |         |
| Custom Query Params | Custom query parameters to include in the request, such as $expand for related entities.                                                                                                                                                                                                                    |         |

### List Invoices {#listinvoices}

Retrieve a collection of Invoices with all or some selected properties in the given order by specifying the given filter condition.

| Input               | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |
| Fetch All           | When true, all records will be fetched automatically by paginating through results. When false, only the number of records specified in $top will be returned.                                                                                                                                              | false   |
| Top                 | The maximum number of items to return. Maximum value is 20.                                                                                                                                                                                                                                                 |         |
| Skip                | The number of items to skip before returning results. Used for pagination.                                                                                                                                                                                                                                  |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Filter              | An OData filter expression to apply to the request (e.g., startswith, eq, gt). See [OData $filter documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for filter syntax.                                                            |         |
| Order By            | A comma-separated list of fields to sort by. Add 'asc' or 'desc' after field name for sort direction (e.g., ItemCode desc).                                                                                                                                                                                 |         |
| Custom Query Params | Custom query parameters to include in the request, such as $expand for related entities.                                                                                                                                                                                                                    |         |

### List Items {#listitems}

Retrieve a collection of Items with all or some selected properties.

| Input               | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |
| Fetch All           | When true, all records will be fetched automatically by paginating through results. When false, only the number of records specified in $top will be returned.                                                                                                                                              | false   |
| Top                 | The maximum number of items to return. Maximum value is 20.                                                                                                                                                                                                                                                 |         |
| Skip                | The number of items to skip before returning results. Used for pagination.                                                                                                                                                                                                                                  |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Filter              | An OData filter expression to apply to the request (e.g., startswith, eq, gt). See [OData $filter documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for filter syntax.                                                            |         |
| Order By            | A comma-separated list of fields to sort by. Add 'asc' or 'desc' after field name for sort direction (e.g., ItemCode desc).                                                                                                                                                                                 |         |
| Custom Query Params | Custom query parameters to include in the request, such as $expand for related entities.                                                                                                                                                                                                                    |         |

### List Orders {#listorders}

Retrieve a collection of Orders with all or some selected properties

| Input               | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |
| Fetch All           | When true, all records will be fetched automatically by paginating through results. When false, only the number of records specified in $top will be returned.                                                                                                                                              | false   |
| Top                 | The maximum number of items to return. Maximum value is 20.                                                                                                                                                                                                                                                 |         |
| Skip                | The number of items to skip before returning results. Used for pagination.                                                                                                                                                                                                                                  |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Filter              | An OData filter expression to apply to the request (e.g., startswith, eq, gt). See [OData $filter documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for filter syntax.                                                            |         |
| Order By            | A comma-separated list of fields to sort by. Add 'asc' or 'desc' after field name for sort direction (e.g., ItemCode desc).                                                                                                                                                                                 |         |
| Custom Query Params | Custom query parameters to include in the request, such as $expand for related entities.                                                                                                                                                                                                                    |         |

### List Price Lists {#listpricelists}

Retrieve a collection of PriceLists with all or some selected properties.

| Input               | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |
| Fetch All           | When true, all records will be fetched automatically by paginating through results. When false, only the number of records specified in $top will be returned.                                                                                                                                              | false   |
| Top                 | The maximum number of items to return. Maximum value is 20.                                                                                                                                                                                                                                                 |         |
| Skip                | The number of items to skip before returning results. Used for pagination.                                                                                                                                                                                                                                  |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Filter              | An OData filter expression to apply to the request (e.g., startswith, eq, gt). See [OData $filter documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for filter syntax.                                                            |         |
| Order By            | A comma-separated list of fields to sort by. Add 'asc' or 'desc' after field name for sort direction (e.g., ItemCode desc).                                                                                                                                                                                 |         |
| Custom Query Params | Custom query parameters to include in the request, such as $expand for related entities.                                                                                                                                                                                                                    |         |

### List Purchase Orders {#listpurchaseorders}

Retrieve a collection of Purchase Orders with all or some selected properties.

| Input               | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |
| Fetch All           | When true, all records will be fetched automatically by paginating through results. When false, only the number of records specified in $top will be returned.                                                                                                                                              | false   |
| Top                 | The maximum number of items to return. Maximum value is 20.                                                                                                                                                                                                                                                 |         |
| Skip                | The number of items to skip before returning results. Used for pagination.                                                                                                                                                                                                                                  |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Filter              | An OData filter expression to apply to the request (e.g., startswith, eq, gt). See [OData $filter documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for filter syntax.                                                            |         |
| Order By            | A comma-separated list of fields to sort by. Add 'asc' or 'desc' after field name for sort direction (e.g., ItemCode desc).                                                                                                                                                                                 |         |
| Custom Query Params | Custom query parameters to include in the request, such as $expand for related entities.                                                                                                                                                                                                                    |         |

### List Records {#listrecords}

Retrieve a list of records from SAP Business One.

| Input               | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |
| Record Type         | The type of record to use for the operation (e.g., JournalEntries, Activities, BusinessPartners). This corresponds to the Service Layer entity name.                                                                                                                                                        |         |
| Fetch All           | When true, all records will be fetched automatically by paginating through results. When false, only the number of records specified in $top will be returned.                                                                                                                                              | false   |
| Top                 | The maximum number of items to return. Maximum value is 20.                                                                                                                                                                                                                                                 |         |
| Skip                | The number of items to skip before returning results. Used for pagination.                                                                                                                                                                                                                                  |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Filter              | An OData filter expression to apply to the request (e.g., startswith, eq, gt). See [OData $filter documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for filter syntax.                                                            |         |
| Order By            | A comma-separated list of fields to sort by. Add 'asc' or 'desc' after field name for sort direction (e.g., ItemCode desc).                                                                                                                                                                                 |         |
| Custom Query Params | Custom query parameters to include in the request, such as $expand for related entities.                                                                                                                                                                                                                    |         |

### List Warehouse Locations {#listwarehouselocations}

Retrieve a collection of Warehouses Locations with all or some selected properties in the given order by specifying the given filter condition.

| Input               | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |
| Fetch All           | When true, all records will be fetched automatically by paginating through results. When false, only the number of records specified in $top will be returned.                                                                                                                                              | false   |
| Top                 | The maximum number of items to return. Maximum value is 20.                                                                                                                                                                                                                                                 |         |
| Skip                | The number of items to skip before returning results. Used for pagination.                                                                                                                                                                                                                                  |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Filter              | An OData filter expression to apply to the request (e.g., startswith, eq, gt). See [OData $filter documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for filter syntax.                                                            |         |
| Order By            | A comma-separated list of fields to sort by. Add 'asc' or 'desc' after field name for sort direction (e.g., ItemCode desc).                                                                                                                                                                                 |         |
| Custom Query Params | Custom query parameters to include in the request, such as $expand for related entities.                                                                                                                                                                                                                    |         |

### List Warehouses {#listwarehouses}

Retrieve a collection of Warehouses with all or some selected properties in the given order by specifying the given filter condition.

| Input               | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The SAP Business One connection to use.                                                                                                                                                                                                                                                                     |         |
| Fetch All           | When true, all records will be fetched automatically by paginating through results. When false, only the number of records specified in $top will be returned.                                                                                                                                              | false   |
| Top                 | The maximum number of items to return. Maximum value is 20.                                                                                                                                                                                                                                                 |         |
| Skip                | The number of items to skip before returning results. Used for pagination.                                                                                                                                                                                                                                  |         |
| Select              | A comma-separated list of fields to include in the response. If not provided, all fields will be returned and the query may be slower. See [OData $select documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for available fields. |         |
| Filter              | An OData filter expression to apply to the request (e.g., startswith, eq, gt). See [OData $filter documentation](https://help.sap.com/doc/056f69366b5345a386bb8149f1700c19/10.0/en-US/Service%20Layer%20API%20Reference.html) for filter syntax.                                                            |         |
| Order By            | A comma-separated list of fields to sort by. Add 'asc' or 'desc' after field name for sort direction (e.g., ItemCode desc).                                                                                                                                                                                 |         |
| Custom Query Params | Custom query parameters to include in the request, such as $expand for related entities.                                                                                                                                                                                                                    |         |

### Raw Request {#rawrequest}

Send raw HTTP request to the SAP Business One API

| Input                   | Comments                                                                                                                                                                                                                                                                       | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| URL                     | The API endpoint path only (e.g., Items, Orders, BusinessPartners). The base URL is automatically included based on your connection settings. For example, to access Items, enter 'Items' here and it will be appended to the base URL (`https://server:port/b1s/v1` or `v2`). |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                        |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                      |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                           |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                               |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                         |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                            |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                    |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                       | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                            |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                            | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                               | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                            | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                  | false   |
| Connection              | The SAP Business One connection to use.                                                                                                                                                                                                                                        |         |

### Update Business Partner {#updatebusinesspartner}

Update an instance of Business Partners

| Input       | Comments                                                                                                                    | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Card Code   | The unique code identifying the business partner (customer or supplier).                                                    |         |
| Card Name   | The name of the business partner (customer or supplier).                                                                    |         |
| Card Type   | The type of the business partner: Customer (cCustomer), Supplier (cSupplier), or Lead (cLid).                               |         |
| Body Fields | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values. |         |
| Connection  | The SAP Business One connection to use.                                                                                     |         |

### Update Invoice {#updateinvoice}

Update an instance of Invoices.

| Input       | Comments                                                                                                                    | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Doc Entry   | The document entry number (DocEntry) that uniquely identifies the invoice. This is an integer value.                        |         |
| Comments    | The comments to be added to the modified order.                                                                             |         |
| Body Fields | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values. |         |
| Connection  | The SAP Business One connection to use.                                                                                     |         |

### Update Item {#updateitem}

Update an instance of Items

| Input       | Comments                                                                                                                    | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Item Code   | The unique code identifying the item in the inventory.                                                                      |         |
| Item Name   | The name of the item in the inventory.                                                                                      |         |
| Item Type   | The type of the item: Items (itItems), Labor (itLabor), Travel (itTravel), or Fixed Assets (itFixedAssets).                 |         |
| Body Fields | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values. |         |
| Connection  | The SAP Business One connection to use.                                                                                     |         |

### Update Order {#updateorder}

Update an instance of Orders.

| Input       | Comments                                                                                                                    | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Doc Entry   | The document entry number (DocEntry) that uniquely identifies the order. This is an integer value.                          |         |
| Comments    | The comments to be added to the modified order.                                                                             |         |
| Body Fields | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values. |         |
| Connection  | The SAP Business One connection to use.                                                                                     |         |

### Update Price List {#updatepricelist}

Update an instance of Price Lists.

| Input             | Comments                                                                                                                    | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Price List Number | The unique number identifying the price list. This is an integer value.                                                     |         |
| Price List Name   | The name of the price list.                                                                                                 |         |
| Body Fields       | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values. |         |
| Connection        | The SAP Business One connection to use.                                                                                     |         |

### Update Purchase Order {#updatepurchaseorder}

Update an instance of Purchase Orders.

| Input                         | Comments                                                                                                                    | Default |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Purchase Order Document Entry | The document entry number (DocEntry) that uniquely identifies the purchase order. This is an integer value.                 |         |
| Comments                      | The comments to be added to the modified order.                                                                             |         |
| Body Fields                   | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values. |         |
| Connection                    | The SAP Business One connection to use.                                                                                     |         |

### Update Record {#updaterecord}

Update an existing record in SAP Business One.

| Input       | Comments                                                                                                                                             | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Record Type | The type of record to use for the operation (e.g., JournalEntries, Activities, BusinessPartners). This corresponds to the Service Layer entity name. |         |
| Record ID   | The unique identifier for the record. This is typically an integer value (DocEntry or similar).                                                      |         |
| Body Fields | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values.                          |         |
| Connection  | The SAP Business One connection to use.                                                                                                              |         |

### Update Warehouse {#updatewarehouse}

Update an instance of Warehouses.

| Input                 | Comments                                                                                                                    | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Warehouse Code        | The unique code identifying the warehouse.                                                                                  |         |
| Warehouse Name        | The name of the warehouse.                                                                                                  |         |
| Warehouse Location ID | The unique identifier for the warehouse location. This is an integer value.                                                 |         |
| Body Fields           | Additional fields to include in the request body as a JSON object. These fields will be merged with the other input values. |         |
| Connection            | The SAP Business One connection to use.                                                                                     |         |
