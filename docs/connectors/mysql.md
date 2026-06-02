---
title: MySQL Connector
sidebar_label: MySQL
description: Query and manage data in a MySQL Database
---

![MySQL](./assets/mysql.png#connector-icon)
[MySQL](https://www.mysql.com/) is a popular relational database system.
This component allows you to query a MySQL database.

## Connections

### On-Premise Connection {#mysql}

Authenticate requests to a MySQL server.

Create a new MySQL connection and enter the host, port, and database for your MySQL server.
The **username** and **password** are optional inputs that can be put directly into a MySQL connection.

| Input    | Comments                                               | Default               |
| -------- | ------------------------------------------------------ | --------------------- |
| Host     | The publicly-accessible address of the MySQL server.   | my-server.example.com |
| Port     | The port the database server is exposing.              | 3306                  |
| Database | The name of the MySQL database to connect to.          |                       |
| Username | The username for authenticating with the MySQL server. |                       |
| Password | The password for authenticating with the MySQL server. |                       |

## Actions

### Query Database {#query}

Executes a query against a MySQL database and returns the results.

| Input                | Comments                                                                                                                                                                                                       | Default                                               |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Connection           | The MySQL connection to use.                                                                                                                                                                                   |                                                       |
| Query                | The SQL query to execute against the MySQL server. Use '?' placeholders for parameterized values.                                                                                                              | SELECT \* FROM `table` WHERE `name` = ? AND `age` > ? |
| Parameters           | The ordered list of values to bind to '?' placeholders in the query. Use this when the number of parameters is known at design time. Use either Parameters or Reference Parameters, not both.                  |                                                       |
| Reference Parameters | A JSON array of values to bind to '?' placeholders, referenced from a previous step. Use this when the number of parameters is determined at runtime. Use either Parameters or Reference Parameters, not both. |                                                       |
