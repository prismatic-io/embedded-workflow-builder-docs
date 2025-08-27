---
title: Microsoft SQL Server Connector
sidebar_label: Microsoft SQL Server
description: Query and manage data in a Microsoft SQL Server (MSSQL) Database
---

![Microsoft SQL Server](./assets/ms-sql-server.png#connector-icon)
Query and manage data in a Microsoft SQL Server (MSSQL) Database

## Connections

### MS SQL Server Connection

Authenticate requests to a Microsoft SQL Server.

The MS SQL Server **username** and **password** can be put directly into a connection, alongside the database host, port, and database name.

| Input              | Comments                                                                       | Default |
| ------------------ | ------------------------------------------------------------------------------ | ------- |
| Host               | Provide a string value for the address that your database server is hosted on. |         |
| Port               | Provide a string value of the port your database server is exposing.           | 1433    |
| Database           | Provide a string value for the name of the database.                           |         |
| Connection Timeout | The number of milliseconds before the attempt to connect is considered failed. | 15000   |
| Username           |                                                                                |         |
| Password           |                                                                                |         |

## Actions

### Execute Stored Procedure

Execute a stored procedure on a Microsoft SQL Server Database

| Input            | Comments                                                                                                                                       | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Stored Procedure | The name of the stored procedure to execute.                                                                                                   |         |
| Timeout          | The number of milliseconds to wait for a response from the server. If the timeout expires before the server responds, an error will be thrown. | 60000   |
| Connection       |                                                                                                                                                |         |

### Query

Interact with a Microsoft SQL Server Database

| Input             | Comments                                                                                                                                                                  | Default                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Query             | Provide a string containing a query that will be executed by the Microsoft SQL-Server database. You can pass in optional named parameters using the '@variable' operator. | SELECT \* FROM Customers WHERE customerId = @id |
| Parameters        | Optional parameters to insert into a query.                                                                                                                               |                                                 |
| Parameters Object | Optional parameters to insert into a query. This should be a key-value object. Values from this object will be merged with Parameters inputs.                             |                                                 |
| Timeout           | The number of milliseconds to wait for a response from the server. If the timeout expires before the server responds, an error will be thrown.                            | 60000                                           |
| Connection        |                                                                                                                                                                           |                                                 |
