---
title: Snowflake Connector
sidebar_label: Snowflake
description: Snowflake is a cloud data platform. Use the Snowflake component to access and update data in a Snowflake Database.
---

![Snowflake](./assets/snowflake.png#connector-icon)
Snowflake is a cloud data platform. Use the Snowflake component to access and update data in a Snowflake Database.

## Connections

### Snowflake Key Pair Authentication

Use this connection if you want to connect to Snowflake via their Key Pair Authentication.

Set up key-pair authentication. For more information refer to the following [guide](https://docs.snowflake.com/en/developer-guide/sql-api/authenticating#using-key-pair-authentication).

As part of this process, you must:

1. Generate a public-private key pair. The generated private key should be in a file (e.g. named rsa_key.p8).
2. Assign the public key to your Snowflake user. After you assign the key to the user, run the
   DESCRIBE USER command. In the output, the RSA_PUBLIC_KEY_FP property should be set to the fingerprint of the public key assigned to the user.

| Input              | Comments                                                                                                                                  | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Private Key        | The private key for the Snowflake Key Pair Authentication.                                                                                |         |
| Snowflake Username | Your Snowflake username.                                                                                                                  |         |
| Account Identifier | You can find the account identifier in the organization's account panel https://docs.snowflake.com/en/user-guide/admin-account-identifier |         |
| Passphrase         | The passphrase for the provided private key (Required).                                                                                   |         |

### Snowflake OAuth 2.0

Snowflake OAuth 2.0 Authentication.

Snowflake will use OAuth 2.0 for authentication and making API calls on behalf of customers.

Follow these steps to set up an OAuth integration on your snowflake. More information for these steps can be found here https://docs.snowflake.com/en/user-guide/oauth-custom

1. Login to Snowflake and create a worksheet to set a new integration.
2. Create a new security integration by copying the following SQL statement into Snowflake and selecting the **Play** button at the top right of the screen. Make sure to change the `INTEGRATIONNAME` to something you will remember

```sql
CREATE SECURITY INTEGRATION
  INTEGRATIONNAME
  TYPE = OAUTH
  OAUTH_CLIENT = CUSTOM
  OAUTH_REDIRECT_URI = 'https://oauth2.your-domain.com/callback'
  OAUTH_CLIENT_TYPE = 'PUBLIC'
```

3. Run The following SQL statement to get your Auth URL, Token URL, and Client ID. Change `INTEGRATIONNAME` to the name you used during the create statement.

```sql
DESCRIBE INTEGRATION INTEGRATIONNAME
```

4. Run the following SQL statement to get your Client Secret.

   a. Its important that you use the secret listed as AUTH_CLIENT_SECRET from the return

```sql
SELECT SYSTEM$SHOW_OAUTH_CLIENT_SECRETS('INTEGRATIONNAME')
```

5. Run the following SQL statement to enable the Integration.

```sql
ALTER SECURITY INTEGRATION INTEGRATIONNAME SET ENABLED = TRUE
```

6. Enter your Authorization URL, Token URL, Client ID, and Client Secret.

   a. Once attempting to authenticate its important to note that users with the roles of `ACCOUNTADMIN`, `SECURITYADMIN`, and `ORGADMIN` will receive an “invalid consent request error” message as snowflake blocks these roles by default. We suggest authenticating with a different user without these roles assigned.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                | Default |
| ------------- | ------------------------------------------------------- | ------- |
| Authorize URL | The OAuth 2.0 Authorization URL for the API             |         |
| Token URL     | The OAuth 2.0 Token URL for the API                     |         |
| Scopes        | Space separated OAuth 2.0 permission scopes for the API |         |
| Client ID     | Client Identifier of your app for the API               |         |
| Client Secret | Client Secret of your app for the API                   |         |
| Headers       | Additional header to supply to authorization requests   |         |

## Actions

### Execute SQL

Executes one or more SQL statements in your Snowflake DB.

| Input                           | Comments                                                                                                                                                                                | Default |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                      |                                                                                                                                                                                         |         |
| SQL statements to run           |                                                                                                                                                                                         |         |
| Snowflake Identifier URL        | The Snowflake URL for you account. Has to have the format: https://<account-name>.snowflakecomputing.com                                                                                |         |
| Account Locator                 | You can find the account locator in the organization's account panel or https://docs.snowflake.com/en/user-guide/admin-account-identifier#finding-the-region-and-locator-for-an-account |         |
| Number of statements to execute | 0 Indicates that a variable number of statements can be included in the request.                                                                                                        |         |
| Timeout                         | Timeout in seconds for statement execution. If the execution of a statement takes longer than the specified timeout, the execution is automatically canceled.                           |         |
| Database                        | Database in which the statement should be executed.                                                                                                                                     |         |
| Schema                          | Schema in which the statement should be executed.                                                                                                                                       |         |
| Warehouse                       | Warehouse to use when executing the statement.                                                                                                                                          |         |
| Role                            | Role to use when executing the statement.                                                                                                                                               |         |
| Bindings                        | Values of bind variables in the SQL statement. Bindings should have this format:                                                                                                        |         |
| Parameters                      | Session parameters that you want to set for this request. Parameters should have this format:                                                                                           |         |
| Poll for asynchronous results   | If true, action will handle polling for results on queries that take > 45 seconds to execute, If false, action will return immediately after executing the query.                       | false   |
| Debug Request                   | Enabling this flag will log out the current request.                                                                                                                                    | false   |

### Get Statement Handle

Retrieve the current status of a executed statement from Snowflake.

| Input                    | Comments                                                                                                                                                                                | Default |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               |                                                                                                                                                                                         |         |
| Snowflake Identifier URL | The Snowflake URL for you account. Has to have the format: https://<account-name>.snowflakecomputing.com                                                                                |         |
| Account Locator          | You can find the account locator in the organization's account panel or https://docs.snowflake.com/en/user-guide/admin-account-identifier#finding-the-region-and-locator-for-an-account |         |
| Statement Handle ID      | The ID of the statement handle.                                                                                                                                                         |         |
| Partition                | The partition number to retrieve.                                                                                                                                                       |         |
| Debug Request            | Enabling this flag will log out the current request.                                                                                                                                    | false   |
