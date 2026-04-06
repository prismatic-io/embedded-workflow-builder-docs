---
title: Snowflake Connector
sidebar_label: Snowflake
description: Execute SQL queries and manage statements in Snowflake.
---

![Snowflake](./assets/snowflake.png#connector-icon)
[Snowflake](https://www.snowflake.com/) is a cloud data platform. This component allows executing SQL queries and managing statement operations within Snowflake databases.

## API Documentation

This component utilizes the [Snowflake SQL API](https://docs.snowflake.com/en/developer-guide/sql-api/index).

## Connections

### Key Pair Authentication {#snowflakekeypairconnection}

Authenticate using key pair authentication

Snowflake supports key-pair authentication using a public-private key pair. This authentication method provides enhanced security for programmatic access to Snowflake resources.

For detailed information, refer to the [Snowflake key-pair authentication guide](https://docs.snowflake.com/en/developer-guide/sql-api/authenticating#using-key-pair-authentication).

#### Prerequisites

- Active Snowflake account with appropriate user permissions
- Access to a command line environment or tool capable of generating RSA key pairs
- Ability to run SQL commands in Snowflake to assign the public key to a user

#### Setup Steps

1. Generate a public-private key pair using OpenSSL or another key generation tool. The following command generates an encrypted private key:

```bash
openssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_key.p8
```

This creates a private key file (e.g., `rsa_key.p8`).

2. Generate the corresponding public key:

```bash
openssl rsa -in rsa_key.p8 -pubout -out rsa_key.pub
```

3. Remove the header and footer lines from the public key file, then concatenate the remaining lines into a single line. The public key should be formatted as a continuous string without line breaks.

4. In Snowflake, assign the public key to the user account by running the following SQL command. Replace `USERNAME` with the actual username and `PUBLIC_KEY_STRING` with the formatted public key:

```sql
ALTER USER USERNAME SET RSA_PUBLIC_KEY='PUBLIC_KEY_STRING';
```

5. Verify the public key assignment by running:

```sql
DESCRIBE USER USERNAME;
```

In the output, verify that the **RSA_PUBLIC_KEY_FP** property displays the fingerprint of the assigned public key.

#### Configure the Connection

Create a connection of type **Key Pair Authentication** and enter:

- **Account Identifier**: The Snowflake account identifier (e.g., `myorg-account123`)
- **Snowflake Username**: The username associated with the public key
- **Private Key**: The full content from the `rsa_key.p8` file (include the header and footer lines)
- **Passphrase**: The private key passphrase (if the key is encrypted)

:::note Private Key Security
Private key encryption is highly recommended for production integrations. Keep keys secure and never share them.
:::

| Input              | Comments                                                                                                                                                                                                                                                                                                                                                                                                     | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Private Key        | The private key in PEM format for Snowflake Key Pair Authentication. Generate a key pair and register the public key with the Snowflake user. [Learn more](https://docs.snowflake.com/en/user-guide/key-pair-auth)                                                                                                                                                                                           |         |
| Snowflake Username | The Snowflake username for authentication. This is typically the login name in uppercase.                                                                                                                                                                                                                                                                                                                    |         |
| Account Identifier | The Snowflake account identifier. Format: [organization]-[account]. Find this in the organization's account panel. [Learn more](https://docs.snowflake.com/en/user-guide/admin-account-identifier). For the JWT token generation, account identifiers need follow snowflake's [iss format requirements](https://docs.snowflake.com/en/developer-guide/sql-api/authenticating#using-key-pair-authentication). |         |
| Passphrase         | The passphrase for the provided private key. Leave blank if the key is not encrypted.                                                                                                                                                                                                                                                                                                                        |         |

### OAuth 2.0 {#snowflakeoauth2}

Authenticate using OAuth 2.0

Snowflake uses OAuth 2.0 for authentication and making API calls. This connection type requires creating a security integration within Snowflake and configuring OAuth settings.

For additional details, refer to the [Snowflake OAuth custom client documentation](https://docs.snowflake.com/en/user-guide/oauth-custom).

#### Prerequisites

- Active Snowflake account with appropriate permissions to create security integrations
- User account with roles excluding `ACCOUNTADMIN`, `SECURITYADMIN`, or `ORGADMIN` (these roles are blocked from OAuth authentication by default)

#### Setup Steps

1. Log in to Snowflake and create a new worksheet to configure the security integration.

2. Create a new security integration by copying the following SQL statement into Snowflake and selecting the **Play** button at the top right of the screen. Replace `INTEGRATIONNAME` with a descriptive name:

```sql
CREATE SECURITY INTEGRATION
  INTEGRATIONNAME
  TYPE = OAUTH
  OAUTH_CLIENT = CUSTOM
  OAUTH_REDIRECT_URI = '`https://oauth2.%WHITE_LABEL_BASE_URL%/callback`'
  OAUTH_CLIENT_TYPE = 'PUBLIC'
```

Note: The `OAUTH_REDIRECT_URI` should be set to the OAuth callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`

3. Retrieve the **Authorization URL**, **Token URL**, and **Client ID** by running the following SQL statement. Replace `INTEGRATIONNAME` with the name used in step 2:

```sql
DESCRIBE INTEGRATION INTEGRATIONNAME
```

4. Retrieve the **Client Secret** by running the following SQL statement:

```sql
SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRETS('INTEGRATIONNAME')
```

Copy the value listed as **OAUTH_CLIENT_SECRET** from the returned results.

5. Enable the security integration by running the following SQL statement:

```sql
ALTER SECURITY INTEGRATION INTEGRATIONNAME SET ENABLED = TRUE
```

#### Configuring Scopes

Scopes control which Snowflake role is used during the OAuth session. If no scope is specified, the user's default role is used.

**Scope Format:** `session:role:<ROLE_NAME>`

**Common Scopes:**

| Scope                    | Description                                             |
| ------------------------ | ------------------------------------------------------- |
| `session:role:PUBLIC`    | Use the PUBLIC role                                     |
| `session:role:SYSADMIN`  | Use the SYSADMIN role for database/warehouse management |
| `session:role:USERADMIN` | Use the USERADMIN role for user/role management         |
| `session:role:ANALYST`   | Use a custom ANALYST role (if configured)               |

**Examples:**

- Single role: `session:role:SYSADMIN`
- Multiple roles (space-separated): `session:role:SYSADMIN session:role:PUBLIC`

#### Configure the Connection

Create a connection of type **OAuth 2.0** and enter:

- **Authorization URL**: From step 3
- **Token URL**: From step 3
- **Client ID**: From step 3
- **Client Secret**: From step 4
- **Scopes**: Optionally configure scopes to control the Snowflake role
- **Headers**: Optionally add additional authorization request headers

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
