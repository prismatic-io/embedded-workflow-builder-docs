---
title: Oracle Database Connector
sidebar_label: Oracle Database
description: Query and manage data in an OracleDB database.
---

![Oracle Database](./assets/oracledb.png#connector-icon)
[Oracle Database](https://www.oracle.com/database/) is a popular relational database system.
This component allows querying an Oracle database.

## API Documentation

This component was built using [Node.js for Oracle Database](https://node-oracledb.readthedocs.io/en/latest/user_guide/introduction.html#getting-started).

## Connections

### On-Premise Connection {#oracledbconnection}

Authenticate requests to an OracleDB server.

Create a connection of type **On-Premise Connection** to authenticate with an Oracle Database server using a direct connection with host, port, and database credentials.

#### Prerequisites

- An Oracle Database instance accessible from the network
- Database user credentials with appropriate permissions

#### Configure the Connection

- **Host**: The hostname or IP address of the Oracle Database server (e.g., `192.168.0.1`)
- **Port**: The port the database server is exposing (default: `1521`)
- **Database**: The Oracle database SID to connect to (e.g., `xe`)
- **Username** (optional): The username for authenticating with the Oracle Database server (omit when using OS authentication)
- **Password** (optional): The password for authenticating with the Oracle Database server (omit when using OS authentication)
- **Connection Timeout** (optional): The amount of time in seconds to wait for a connection to be established before timing out (default: `10`)

| Input              | Comments                                                                                                             | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Host               | The host name or IP address of the Oracle DB server.                                                                 |         |
| Port               | The port of the Oracle DB server.                                                                                    | 1521    |
| Database           | The database SID in Oracle DB.                                                                                       |         |
| Username           | The username used to authenticate to the Oracle DB server.                                                           |         |
| Password           | The password used to authenticate to the Oracle DB server.                                                           |         |
| Connection Timeout | The amount of time (in seconds) to wait for a connection to be established before timing out. Default is 10 seconds. | 10      |

## Actions

### Query {#query}

Returns the results of an OracleDB database query.

| Input                   | Comments                                                                                                                                                                                                                                                                                                             | Default                                                             |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Connection              | The OracleDB connection to use.                                                                                                                                                                                                                                                                                      |                                                                     |
| SQL Query               | The SQL statement to execute against the database. Use named parameters (e.g. ':name') to safely bind values supplied through the parameter inputs.                                                                                                                                                                  | SELECT \* FROM mytable WHERE name = :name AND company = :company_id |
| Named Parameters        | Optional named parameters to insert into a query. Ensure the keys of these parameters match parameters in the query. For example, if the query contains ':company_name', give this parameter the key 'company_name'. Values specified here are merged with values supplied from the 'Named Parameters Object' input. |                                                                     |
| Named Parameters Object | Optional named parameters to insert into a query. Ensure the keys of these parameters match parameters in the query. For example, if the query contains ':company_name', the object should contain a key 'company_name'. Values in this object are merged with values supplied from the 'Named Parameters' input.    |                                                                     |
