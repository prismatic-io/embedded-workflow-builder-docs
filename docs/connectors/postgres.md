---
title: PostgreSQL Connector
sidebar_label: PostgreSQL
description: Query and manage data in a PostgreSQL database.
---

![PostgreSQL](./assets/postgres.png#connector-icon)
[PostgreSQL](https://www.postgresql.org/) is a popular relational database system.
This component allows you to query a PostgreSQL database.

## Connections

### On-Premise Connection {#postgres}

Authenticate requests to a PostgreSQL server.

Create a new PostgreSQL connection and enter the connection details for the PostgreSQL server.

#### Configure the Connection

- Enter the **Host**, the hostname or IP address of the PostgreSQL server (e.g., `192.168.0.1`).
- Enter the **Port** of the PostgreSQL server (default: `5432`).
- Enter the **Database** name to connect to.
- Optionally enter a **Username** and **Password** to authenticate to the PostgreSQL server.
- Set **Require SSL** to require an SSL connection to the PostgreSQL server.
- Optionally set a **Connection Timeout** in milliseconds to wait before timing out (default: `5000`).

Refer to [PostgreSQL connection parameters](https://www.postgresql.org/docs/current/libpq-connect.html) for additional detail on these values.

| Input              | Comments                                                                                                              | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Host               | The hostname or IP address of the PostgreSQL server.                                                                  |         |
| Port               | The port of the PostgreSQL server.                                                                                    | 5432    |
| Database           | The name of the database to connect to.                                                                               |         |
| Username           | The username used to authenticate to the PostgreSQL server.                                                           |         |
| Password           | The password used to authenticate to the PostgreSQL server.                                                           |         |
| Require SSL        | When true, requires an SSL connection to the PostgreSQL server.                                                       | false   |
| Connection Timeout | The amount of time (in milliseconds) to wait for a connection to be established before timing out. Default is 5000ms. | 5000    |

## Triggers

### New and Updated Records {#polltable}

Retrieves existing and ongoing records from a specified table. Load history once, check for changes on a schedule, or both.

| Input                      | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Default    |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Connection                 | The PostgreSQL connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |            |
| Table Name                 | The name of the table to monitor for new and updated records.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |            |
| Cursor Field               | The column used to track new results. If the table has an auto incrementing integer ID, that ID can be used. If it has a 'created at' or 'updated at' timestamp, those can be used. Each time this trigger runs, it checks for records with values greater than the largest value from the last run.                                                                                                                                                                                                                                         | updated_at |
| Cast Timestamps to Strings | When true, timestamp values are cast to strings to retain precision. PostgreSQL tracks microseconds, but JavaScript dates are measured in milliseconds, so precision can be lost when fetching TIME, TIMETZ, TIMESTAMP, and TIMESTAMPTZ fields. Enable this when the cursor field is a timestamp.                                                                                                                                                                                                                                            | true       |
| Default Cursor Value       | The value to use for the cursor when the trigger is run for the first time, given in the units of the column named in Cursor Field: a timestamp for a timestamp column, an integer for an ID column. If present, the trigger fetches every record whose cursor value is greater than this one, so a lower value reaches further back and the table's current maximum reaches nothing. If omitted, the trigger notes the largest value of the cursor field on its first recurrence and fetches newer records from the next recurrence onward. |            |
| Max Records Per Recurrence | The maximum number of records to fetch each time the trigger runs. Leave this empty to use the default of 1,000. Raising it drains a large backlog in fewer runs. On a flow with batching enabled the value is capped at 1,000 however high it is set, because a batched dispatch is bounded by size as well as by count and the platform limits one to 5 MB; lower it below that when the table has wide rows.                                                                                                                              |            |

## Actions

### Query {#query}

Performs a query on a PostgreSQL database.

| Input                      | Comments                                                                                                                                                                                                                                         | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                 | The PostgreSQL connection to use.                                                                                                                                                                                                                |         |
| Query Field                | The SQL statement to execute against the database. Use named parameters (i.e. ${name}) or index variables (i.e. $1) to safely interpolate values.                                                                                                |         |
| Named Parameters           | Optional named parameters to insert into a query.                                                                                                                                                                                                |         |
| Parameters Object or Array | Optional parameters to insert into a query. Use a key-value object for named inputs (i.e. ${name}), or an array for index variables (i.e. $2). Values from this object are merged with the Named Parameters input when named variables are used. |         |
