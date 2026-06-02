---
title: Microsoft SQL Server Connector
sidebar_label: Microsoft SQL Server
description: Query and manage data in a Microsoft SQL Server (MSSQL) database.
---

![Microsoft SQL Server](./assets/ms-sql-server.png#connector-icon)
Query and manage data in a Microsoft SQL Server (MSSQL) database.

## Connections

### Azure Active Directory {#azuread}

Authenticate requests to a Microsoft SQL Server or Azure SQL Database using Azure Active Directory service principal credentials. Compatible with Microsoft Fabric.

| Input              | Comments                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------ | ------- |
| Host               | The address of the SQL Server or Fabric warehouse endpoint.                    |         |
| Port               | The port the database server is exposing.                                      | 1433    |
| Database           | The name of the database or Fabric warehouse.                                  |         |
| Tenant ID          | The Directory (Tenant) ID from the Azure AD App Registration.                  |         |
| Client ID          | The Application (Client) ID from the Azure AD App Registration.                |         |
| Client Secret      | The Client Secret from the Azure AD App Registration.                          |         |
| Connection Timeout | The number of milliseconds before the attempt to connect is considered failed. | 15000   |

### Basic Authentication {#basic}

Authenticate requests to a Microsoft SQL Server using a username and password.

| Input              | Comments                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------ | ------- |
| Host               | The address of the database server.                                            |         |
| Port               | The port the database server is exposing.                                      | 1433    |
| Database           | The name of the database.                                                      |         |
| Connection Timeout | The number of milliseconds before the attempt to connect is considered failed. | 15000   |
| Username           | The SQL Server login username for authentication.                              |         |
| Password           | The SQL Server login password for authentication.                              |         |

## Actions

### Execute Stored Procedure {#execute}

Execute a stored procedure on a Microsoft SQL Server database.

| Input            | Comments                                                                                                                                       | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Stored Procedure | The name of the stored procedure to execute.                                                                                                   |         |
| Timeout          | The number of milliseconds to wait for a response from the server. If the timeout expires before the server responds, an error will be thrown. | 60000   |
| Connection       | The Microsoft SQL Server connection to use.                                                                                                    |         |

### Query {#query}

Execute a SQL query against a Microsoft SQL Server database.

| Input             | Comments                                                                                                                                       | Default                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Query             | The SQL query to execute against the Microsoft SQL Server database. Supports optional named parameters using the '@variable' operator.         | SELECT \* FROM Customers WHERE customerId = @id |
| Parameters        | The key-value pairs to bind as named parameters in the query, referenced using the '@variable' operator.                                       |                                                 |
| Parameters Object | The JSON key-value object of named parameters to bind in the query. Values are merged with the Parameters input.                               |                                                 |
| Timeout           | The number of milliseconds to wait for a response from the server. If the timeout expires before the server responds, an error will be thrown. | 60000                                           |
| Connection        | The Microsoft SQL Server connection to use.                                                                                                    |                                                 |
