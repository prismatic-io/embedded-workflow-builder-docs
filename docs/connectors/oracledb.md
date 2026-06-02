---
title: Oracle Database Connector
sidebar_label: Oracle Database
description: Query and manage data in an OracleDB database
---

![Oracle Database](./assets/oracledb.png#connector-icon)
Query and manage data in an OracleDB database

## Connections

### OracleDB Connection {#oracledbconnection}

Authenticate requests to an OracleDB server.

| Input              | Comments                                                                                                             | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Host               | Provide the string value for the host of the server.                                                                 |         |
| Port               | The port of the Oracle DB server.                                                                                    | 1521    |
| Database           | The database SID in Oracle DB                                                                                        |         |
| Username           |                                                                                                                      |         |
| Password           |                                                                                                                      |         |
| Connection Timeout | The amount of time (in seconds) to wait for a connection to be established before timing out. Default is 10 seconds. | 10      |

## Actions

### Query {#query}

Returns the results of an OracleDB database query

| Input                   | Comments                                                                                                                                                                                                                                                                                                               | Default                                                             |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Connection              |                                                                                                                                                                                                                                                                                                                        |                                                                     |
| SQL Query               |                                                                                                                                                                                                                                                                                                                        | SELECT \* FROM mytable WHERE name = :name AND company = :company_id |
| Named Parameters        | Optional named parameters to insert into a query. Ensure the keys of these parameters match parameters in your query. For example, if your query contains ':company_name', give this parameter the key 'company_name'. Values specified here are merged with values supplied from the 'Named Parameters Object' input. |                                                                     |
| Named Parameters Object | Optional named parameters to insert into a query. Ensure the keys of these parameters match parameters in your query. For example, if your query contains ':company_name', your object should contain a key 'company_name'. Values in this object are merged with values supplied from the 'Named Parameters' input.   |                                                                     |
