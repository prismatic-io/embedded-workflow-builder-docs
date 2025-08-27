---
title: MySQL Connector
sidebar_label: MySQL
description: Query and manage data in a MySQL Database
---

![MySQL](./assets/mysql.png#connector-icon)
Query and manage data in a MySQL Database

## Connections

### MySQL Connection

Authenticate requests to a MySQL server

Create a new MySQL connection and enter the host, port, and database for your MySQL server.
The **username** and **password** are optional inputs that can be put directly into a MySQL connection.

| Input    | Comments                                              | Default               |
| -------- | ----------------------------------------------------- | --------------------- |
| Host     | The publicly-accessible address of your MySQL server. | my-server.example.com |
| Port     | The port your database server is exposing.            | 3306                  |
| Database | The name of your database.                            |                       |
| Username |                                                       |                       |
| Password |                                                       |                       |

## Actions

### Query

Returns the results of a MySQL database query

| Input                | Comments                                                                                                                                                                                                                                              | Default                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Query                | A query to be executed by the MySQL server. Substitute parameters with '?' marks.                                                                                                                                                                     | SELECT \* FROM `table` WHERE `name` = ? AND `age` > ? |
| Parameters           | Optional parameters to insert into a query. Use this when you know how many parameters your query uses ahead of time. Use either parameters or reference parameters, not both.                                                                        |                                                       |
| Reference Parameters | Optional parameters to insert into a query. Use this when you don't know how many parameters your query uses ahead of time. Reference parameters from a previous step that returns an array. Use either parameters or reference parameters, not both. |                                                       |
| Connection           |                                                                                                                                                                                                                                                       |                                                       |
