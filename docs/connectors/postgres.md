---
title: PostgreSQL Connector
sidebar_label: PostgreSQL
description: Query and manage data in a PostgreSQL database
---

![PostgreSQL](./assets/postgres.png#connector-icon)
Query and manage data in a PostgreSQL database

## Connections

### PostgreSQL Connection

Authenticate requests to a PostgreSQL server.

Create a new PostgreSQL connection and enter the host, port, and database for your PostgreSQL server.
The **username** and **password** are optional inputs that can be put directly into a PostgreSQL connection.

| Input              | Comments                                                                                                              | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Host               | Provide the string value for the host of the server.                                                                  |         |
| Port               | The port of the PostgreSQL server.                                                                                    | 5432    |
| Database           | The database in PostgreSQL                                                                                            |         |
| Username           |                                                                                                                       |         |
| Password           |                                                                                                                       |         |
| Require SSL        | Require SSL for the connection to the PostgreSQL server                                                               | false   |
| Connection Timeout | The amount of time (in milliseconds) to wait for a connection to be established before timing out. Default is 5000ms. | 5000    |

## Triggers

### New and Updated Records to Table

Checks for new and updated records to a table

| Input                      | Comments                                                                                                                                                                                                                                                                                                                   | Default    |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Connection                 |                                                                                                                                                                                                                                                                                                                            |            |
| Table Name                 |                                                                                                                                                                                                                                                                                                                            |            |
| Cursor Field               | A field that is used to track new results. If your table has an auto incrementing integer ID, you can use the ID. If it has a 'created at' or 'updated at' timestamp, you can use those. Each time this trigger runs, it checks for records with values that are greater than the largest value from last time it was run. | updated_at |
| Cast timestamps to strings | Select this option if your cursor field is a timestamp. PostgreSQL tracks microseconds, but JavaScript dates are measured in milliseconds. When fetching TIME, TIMETZ, TIMESTAMP, TIMESTAMPTZ fields, some precision can be lost. By casting timestamp values to strings, you can retain precision.                        | true       |

## Actions

### Query

Performs a query on a PostgreSQL database.

| Input                      | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Query Field                | The query to be executed                                                                                                                                                                                                                                                                        |         |
| Named Parameters           | Optional named parameters to insert into a query.                                                                                                                                                                                                                                               |         |
| Parameters Object or Array | Optional parameters to insert into a query. This should be a key-value object if you are using named inputs (i.e. ${name}), or an array if using index variables (i.e. $2) in your query. Values from this object will be merged with Named Parameters inputs if you are using named variables. |         |
| Connection                 |                                                                                                                                                                                                                                                                                                 |         |
| Debug Query                | Enabling this flag will log out the query before being sent.                                                                                                                                                                                                                                    | false   |
