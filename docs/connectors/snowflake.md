---
title: Snowflake Connector
sidebar_label: Snowflake
description: Execute SQL queries and manage statements in Snowflake.
---

![Snowflake](./assets/snowflake.png#connector-icon)
Execute SQL queries and manage statements in Snowflake.

## Connections

### Key Pair Authentication {#snowflakekeypairconnection}

Authenticate using key pair authentication

| Input              | Comments                                                                                                                                                                                                                                                                                                                                                                                                     | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Private Key        | The private key in PEM format for Snowflake Key Pair Authentication. Generate a key pair and register the public key with the Snowflake user. [Learn more](https://docs.snowflake.com/en/user-guide/key-pair-auth)                                                                                                                                                                                           |         |
| Snowflake Username | The Snowflake username for authentication. This is typically the login name in uppercase.                                                                                                                                                                                                                                                                                                                    |         |
| Account Identifier | The Snowflake account identifier. Format: [organization]-[account]. Find this in the organization's account panel. [Learn more](https://docs.snowflake.com/en/user-guide/admin-account-identifier). For the JWT token generation, account identifiers need follow snowflake's [iss format requirements](https://docs.snowflake.com/en/developer-guide/sql-api/authenticating#using-key-pair-authentication). |         |
| Passphrase         | The passphrase for the provided private key. Leave blank if the key is not encrypted.                                                                                                                                                                                                                                                                                                                        |         |

### OAuth 2.0 {#snowflakeoauth2}

Authenticate using OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Authorize URL | The OAuth 2.0 Authorization URL for the Snowflake account. Format: https://[account-identifier].snowflakecomputing.com/oauth/authorize. [Learn more](https://docs.snowflake.com/en/user-guide/oauth-snowflake-overview)                            |         |
| Token URL     | The OAuth 2.0 Token URL for the Snowflake account. Format: https://[account-identifier].snowflakecomputing.com/oauth/token-request. [Learn more](https://docs.snowflake.com/en/user-guide/oauth-snowflake-overview)                                |         |
| Scopes        | Controls which Snowflake role is used during the session. Format: session:role:<ROLE_NAME>. If not specified, the user's default role is used. Space separate multiple scopes. [Learn more](https://docs.snowflake.com/en/user-guide/oauth-custom) |         |
| Client ID     | The Client ID of the Snowflake OAuth integration. Obtain this from the security integration configuration. [Learn more](https://docs.snowflake.com/en/user-guide/oauth-custom)                                                                     |         |
| Client Secret | The Client Secret of the Snowflake OAuth integration. Generated when creating the security integration. [Learn more](https://docs.snowflake.com/en/user-guide/oauth-custom)                                                                        |         |
| Headers       | Additional headers to supply to authorization requests.                                                                                                                                                                                            |         |

## Actions

### Execute SQL {#executesql}

Executes one or more SQL statements in your Snowflake DB.

| Input                           | Comments                                                                                                                                                                                                                     | Default |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      | The Snowflake connection to use.                                                                                                                                                                                             |         |
| SQL statements to run           | The SQL statement(s) to execute in Snowflake. Can be a single statement or multiple statements separated by semicolons.                                                                                                      |         |
| Snowflake Identifier URL        | The Snowflake URL for your account. Format: https://[account-identifier].snowflakecomputing.com                                                                                                                              |         |
| Account Locator                 | The account locator for your Snowflake account. Find this in the organization's account panel. [Learn more](https://docs.snowflake.com/en/user-guide/admin-account-identifier#finding-the-region-and-locator-for-an-account) |         |
| Number of statements to execute | The number of statements to execute. Use 0 to indicate a variable number of statements can be included in the request.                                                                                                       |         |
| Timeout                         | Timeout in seconds for statement execution. If the execution takes longer than the specified timeout, the execution is automatically canceled.                                                                               |         |
| Database                        | The database name in which the statement should be executed.                                                                                                                                                                 |         |
| Schema                          | The schema name in which the statement should be executed.                                                                                                                                                                   |         |
| Warehouse                       | The warehouse name to use when executing the statement.                                                                                                                                                                      |         |
| Role                            | The role name to use when executing the statement.                                                                                                                                                                           |         |
| Bindings                        | Values of bind variables in the SQL statement. Each binding has a type and value. [Learn more](https://docs.snowflake.com/en/user-guide/python-connector-api#binding-data)                                                   |         |
| Parameters                      | Session parameters to set for this request. [Learn more](https://docs.snowflake.com/en/sql-reference/parameters)                                                                                                             |         |
| Poll for asynchronous results   | When true, the action will handle polling for results on queries that take longer than 45 seconds to execute. When false, the action returns immediately after executing the query.                                          | false   |

### Get Statement Handle {#getstatementhandle}

Retrieve the current status of a executed statement from Snowflake.

| Input                    | Comments                                                                                                                                                                                                                     | Default |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Snowflake connection to use.                                                                                                                                                                                             |         |
| Snowflake Identifier URL | The Snowflake URL for your account. Format: https://[account-identifier].snowflakecomputing.com                                                                                                                              |         |
| Account Locator          | The account locator for your Snowflake account. Find this in the organization's account panel. [Learn more](https://docs.snowflake.com/en/user-guide/admin-account-identifier#finding-the-region-and-locator-for-an-account) |         |
| Statement Handle ID      | The unique identifier of the statement handle returned from an asynchronous query execution.                                                                                                                                 |         |
| Partition                | The partition number to retrieve from the result set.                                                                                                                                                                        |         |
