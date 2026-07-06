---
title: Oracle NetSuite Connector
sidebar_label: Oracle NetSuite
description: Manage records and execute queries in Oracle NetSuite.
---

![Oracle NetSuite](./assets/netsuite.png#connector-icon)
[Oracle NetSuite](https://www.netsuite.com/) is a unified business management suite, encompassing ERP/Financials, CRM and ecommerce.
This component allows you to create, read, update, delete, and list records in NetSuite, as well as execute SuiteQL queries.

## API Documentation

This component was built using the following API References currently utilizing REST API v1:

- [NetSuite REST API Documentation](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1540391670.html)
- [SuiteQL Query Reference](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156257770590.html)

## Connections

### NetSuite OAuth Auth Code {#oauth}

NetSuite OAuth 2.0 Connection

To connect to NetSuite using OAuth 2.0 Authorization Code flow, create an OAuth 2.0 application in NetSuite with authorization code grant enabled.

Refer to [NetSuite's OAuth 2.0 documentation](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_157769826287.html) for additional details.

:::warning[OAuth 2.0 Auth Code Flow Expiration]
Tokens retrieved using NetSuite's OAuth 2.0 Auth Code flow expire after 7 days and cannot be refreshed.
This requires users to re-authenticate every 7 days, which is not a good user experience.
**We recommend using the OAuth 2.0 Client Credentials flow instead.**
:::

#### Prerequisites

- NetSuite administrator access
- SuiteTalk enabled in the NetSuite account

#### Setup Steps

1. Enable SuiteTalk:
   - Navigate to **Setup** > **Company** > **Enable Features**
   - Under the **Suite Cloud** tab, ensure **REST WEB SERVICES** and **OAUTH 2.0** are both checked

2. Create an OAuth 2.0 Application:
   - Navigate to **Setup** > **Integration** > **Manage Integrations** > **New**
   - Enter a name and description for the integration
   - Under **Token-based Authentication**, un-check **TOKEN-BASED AUTHENTICATION** and **TBA: AUTHORIZATION FLOW**
   - Under **OAuth 2.0**, ensure the following are checked:
     - **AUTHORIZATION CODE GRANT**
     - **REST WEB SERVICES**
   - Under **SCOPE**, enable **REST WEB SERVICES**
   - Set the **REDIRECT URI** to: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - After saving, copy the **CONSUMER KEY** and **CONSUMER SECRET**

3. Configure OAuth 2.0 Roles:
   - Ensure that users who will authenticate via OAuth have been assigned a [proper role](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771510070.html) with appropriate permissions

#### Configure the Connection

- Enter the **Consumer Key** (Client ID) and **Consumer Secret** (Client Secret) from the NetSuite integration
- **Token URL**: Enter the NetSuite account's token URL in the format: `https://[ACCOUNT_ID].suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token`
  - Replace `[ACCOUNT_ID]` with the NetSuite account ID (found in **Setup** > **Company** > **Company Information**)
  - Example: `https://1234567.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token`

#### Verify Connection

Save the connection to authenticate with NetSuite. Users will be redirected to NetSuite to authorize access.

:::note[Token Re-authentication Required]
Tokens expire after 7 days and cannot be refreshed. Users will need to re-authenticate every 7 days by opening the connection configuration and re-authorizing.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                           | Comments                                                                                                                                                                                                   | Default                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Token URL                       | The OAuth 2.0 Token URL for NetSuite. Replace &lt;ACCOUNT_ID&gt; with your NetSuite account ID, which can be found in your browser's URL bar when you log in: https://&lt;ACCOUNT_ID&gt;.app.netsuite.com/ | https://<ACCOUNT_ID>.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token |
| Consumer Key (Client ID)        | The consumer key generated when you create your OAuth 2.0 application in NetSuite. Navigate to Setup > Company > Enable Features > SuiteCloud > Manage Authentication to create an application.            |                                                                                    |
| Consumer Secret (Client Secret) | The consumer secret generated when you create your OAuth 2.0 application in NetSuite. Navigate to Setup > Company > Enable Features > SuiteCloud > Manage Authentication to create an application.         |                                                                                    |

### NetSuite OAuth Client Credentials {#oauthclientcredentials}

NetSuite OAuth 2.0 Client Credentials Connection

To connect to NetSuite using OAuth 2.0 Client Credentials, configure an OAuth 2.0 application with the Client Credentials (M2M) grant in NetSuite.

This authentication method is recommended for server-to-server integrations and provides a better user experience than the Authorization Code flow, as credentials do not expire and require no user re-authentication.

Refer to [NetSuite's OAuth Client Credentials documentation](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162686838198.html#subsect_162686947286) for additional details.

#### Prerequisites

- NetSuite administrator access
- SuiteTalk enabled in the NetSuite account
- OpenSSL installed on the local machine (for certificate generation)

#### Setup Steps

1. Enable SuiteTalk:
   - Navigate to **Setup** > **Company** > **Enable Features**
   - Under the **Suite Cloud** tab, ensure both **REST WEB SERVICES** and **OAUTH 2.0** are checked

2. Create an OAuth 2.0 Application with JWT Option:
   - Navigate to **Setup** > **Integration** > **Manage Integrations** > **New**
   - Enter a name and description for the integration
   - Under **Token-based Authentication**, un-check **TOKEN-BASED AUTHENTICATION** and **TBA: AUTHORIZATION FLOW**
   - Under **OAuth 2.0**, ensure the following are checked:
     - **REST WEB SERVICES**
     - **CLIENT CREDENTIALS (MACHINE TO MACHINE) GRANT**
   - Under **SCOPE**, enable **REST WEB SERVICES**
   - After saving, copy the **CONSUMER KEY** — it will not be shown again in NetSuite

3. Generate Certificate and Private Key for JWT:

   A private key and certificate are required for JWT-based authentication. Refer to the [NetSuite documentation](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162686838198.html#Related-Topics) for more information on generating or importing certificates.

   - On the local machine, generate a valid certificate using OpenSSL:

     ```bash
     openssl req -new -x509 -newkey rsa:4096 -keyout private.pem \
       -sigopt rsa_padding_mode:pss -sha256 -sigopt rsa_pss_saltlen:64 \
       -out public.pem -nodes -days 730
     ```

     This command will:
     - Generate a new RSA 4096-bit key pair with PSS padding
     - Create a self-signed X.509 certificate valid for 730 days (2 years)
     - Output two files in the current directory:
       - `private.pem` - The private key (keep this secure)
       - `public.pem` - The public certificate (upload to NetSuite)

     The system will prompt to enter certificate details (country, organization, common name, etc.). Press Enter to skip these prompts, though providing values helps with tracking and identification.

:::warning[Private Key Security]
The `private.pem` file contains the private key and must be kept secure. Never commit this file to version control, share it publicly, or store it in an unsecured location. Only the application should have access to this file.
:::

4. Configure OAuth 2.0 Client (M2M) in NetSuite:
   - Navigate to **Setup** > **Integration** > **OAUTH 2.0 CLIENT (M2M) SETUP** and select **Create New**
   - Choose the appropriate **Entity** and **Role**
   - Select the **Application** created in step 2
   - For **Certificate**, upload the `public.pem` file generated in step 3
   - After saving, NetSuite will generate a **Certificate ID** (a unique identifier). Copy this value — it is needed to configure the connection. The Certificate ID will be a string similar to `zzP3z13fkaZsCcwCbmMpd5GvvPs9DTPIquAI83MnNx4`.

5. Assign Roles:
   - Ensure that the entity used in the OAuth 2.0 Client setup has been assigned appropriate [roles and permissions](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771510070.html)

#### Configure the Connection

When configuring the NetSuite OAuth 2.0 Client Credentials connection, enter the following values:

- **Certificate ID**: From the OAuth 2.0 Client (M2M) setup in step 4
- **Private Key**: The entire contents of the `private.pem` file from step 3. Copy the full file including the header and footer lines. Format example:
  ```
  -----BEGIN PRIVATE KEY-----
  MIIJQwIBADANBgkqhkiG9w0BAQEFAASCCS0wggkpAgEAAoICAQC...
  ...key content here...
  -----END PRIVATE KEY-----
  ```
- **Consumer Key** (Client ID): From the integration created in step 2
- **Token URL**: The NetSuite account's token URL in the format: `https://[ACCOUNT_ID].suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token`
  - Replace `[ACCOUNT_ID]` with the NetSuite account ID (found in **Setup** > **Company** > **Company Information**)
  - Example: `https://1234567.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token`

| Input                    | Comments                                                                                                                                                                                                   | Default                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Token URL                | The OAuth 2.0 Token URL for NetSuite. Replace &lt;ACCOUNT_ID&gt; with your NetSuite account ID, which can be found in your browser's URL bar when you log in: https://&lt;ACCOUNT_ID&gt;.app.netsuite.com/ | https://<ACCOUNT_ID>.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token |
| Certificate ID (Key ID)  | The certificate ID (key ID) from your NetSuite certificate, used for signing the JWT token. Found in Setup > Company > Company Information > Certificates.                                                 |                                                                                    |
| Private Key for JWT      | The private key (RSA or EC format) used for signing the JWT token. This is the private key corresponding to your NetSuite certificate. Include the full key with BEGIN/END markers.                        |                                                                                    |
| Consumer Key (Client ID) | The consumer key generated when you create your OAuth 2.0 application in NetSuite. Navigate to Setup > Company > Enable Features > SuiteCloud > Manage Authentication to create an application.            |                                                                                    |

## Triggers

### New and Updated Records {#pollrecords}

Checks for new and updated records in a selected NetSuite record type on a configured schedule.

| Input                | Comments                                                                                                                                                                                                                                                                    | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Show New Records     | When true, includes new records in the results.                                                                                                                                                                                                                             | true    |
| Show Updated Records | When true, includes updated records in the results.                                                                                                                                                                                                                         | true    |
| Connection           | The NetSuite connection to use.                                                                                                                                                                                                                                             |         |
| Record Type          | Record type to perform the action against.                                                                                                                                                                                                                                  |         |
| Additional Filter    | Additional WHERE clause conditions to append to the polling query. Do not include 'AND' prefix - it will be added automatically. See [Record Collection Filtering](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545222128.html) for query syntax. |         |

## Actions

### Create Record {#createrecord}

Create record of specified type

| Input       | Comments                                                                                                                                                                             | Default                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Connection  | The NetSuite connection to use.                                                                                                                                                      |                                                                                                                                          |
| Record Type | Record type to perform the action against.                                                                                                                                           |                                                                                                                                          |
| Payload     | Data payload to send in the action request. See [REST API Browser](https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2024.1/index.html) for details. | <code>{<br /> "entityid": "New Customer",<br /> "companyname": "My Company",<br /> "subsidiary": {<br /> "id": "1"<br /> }<br />}</code> |

### Delete Record {#deleterecord}

Delete record of the specified type

| Input       | Comments                                                                                                                                                                                                                    | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The NetSuite connection to use.                                                                                                                                                                                             |         |
| Record Type | Record type to perform the action against.                                                                                                                                                                                  |         |
| Record ID   | The internal ID of the record. For external IDs, use the format 'eid:YOUR_EXTERNAL_ID'. See [Getting a Record Instance](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545141500.html) for details. |         |

### Get Record {#getrecord}

Get record of specified type

| Input                | Comments                                                                                                                                                                                                                    | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The NetSuite connection to use.                                                                                                                                                                                             |         |
| Record Type          | Record type to perform the action against.                                                                                                                                                                                  |         |
| Record ID            | The internal ID of the record. For external IDs, use the format 'eid:YOUR_EXTERNAL_ID'. See [Getting a Record Instance](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545141500.html) for details. |         |
| Expand Sub-Resources | When true, automatically expands all sublists, sublist lines, and subrecords on this record.                                                                                                                                | false   |
| Simple Enum Format   | When true, returns enumeration values in a format that only shows the internal ID value.                                                                                                                                    | false   |
| Fields to Return     | Specific fields and sublists to return in the request. If unspecified, the full record is returned.                                                                                                                         |         |

### List Records {#listrecord}

List records of specified type

| Input             | Comments                                                                                                                                                                                                             | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The NetSuite connection to use.                                                                                                                                                                                      |         |
| Record Type       | Record type to perform the action against.                                                                                                                                                                           |         |
| Query             | Query string to filter records. Use operators like START_WITH, EQUAL, CONTAIN. See [Record Collection Filtering](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545222128.html) for details. |         |
| Pagination Limit  | The maximum number of records to fetch per page. See [Record Collection Filtering](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545222128.html) for details.                               | 1000    |
| Pagination Offset | The number of records to skip before starting to fetch results. Used for pagination.                                                                                                                                 |         |

### Raw Request {#rawrequest}

Send raw HTTP request to NetSuite

| Input                   | Comments                                                                                                                                                                                                                                                                                      | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The NetSuite connection to use.                                                                                                                                                                                                                                                               |         |
| URL                     | Input the path only (/contact), The base URL is already included (https://{accountId}.suitetalk.api.netsuite.com/services/rest/record/v1). For example, to connect to https://{accountId}.suitetalk.api.netsuite.com/services/rest/record/v1/contact, only /contact is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                       |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                     |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                          |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                              |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                        |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                           |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                   |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                      | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                           |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                           | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                              | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                 | false   |
| Service Type            | The type of service to use.                                                                                                                                                                                                                                                                   | record  |

### SuiteQL Query {#suiteqlquery}

Execute a SuiteQL Query through Netsuite's REST Web Service

| Input             | Comments                                                                                                                                                                               | Default                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Connection        | The NetSuite connection to use.                                                                                                                                                        |                                                                  |
| Pagination Limit  | The maximum number of records to fetch per page. See [Record Collection Filtering](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545222128.html) for details. | 1000                                                             |
| Pagination Offset | The number of records to skip before starting to fetch results. Used for pagination.                                                                                                   |                                                                  |
| SuiteQL Payload   | SuiteQL query string to execute. See [Executing SuiteQL Queries](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157909186990.html) for details.                 | SELECT email, COUNT(\*) as count FROM transaction GROUP BY email |

### Update Record {#updaterecord}

Update record of the specified type

| Input                   | Comments                                                                                                                                                                                                                    | Default                                                                                                                                  |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              | The NetSuite connection to use.                                                                                                                                                                                             |                                                                                                                                          |
| Record Type             | Record type to perform the action against.                                                                                                                                                                                  |                                                                                                                                          |
| Record ID               | The internal ID of the record. For external IDs, use the format 'eid:YOUR_EXTERNAL_ID'. See [Getting a Record Instance](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545141500.html) for details. |                                                                                                                                          |
| Payload                 | Data payload to send in the action request. See [REST API Browser](https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2024.1/index.html) for details.                                        | <code>{<br /> "entityid": "New Customer",<br /> "companyname": "My Company",<br /> "subsidiary": {<br /> "id": "1"<br /> }<br />}</code> |
| Replace                 | Names of sublists on this record. All specified sublists will be replaced instead of added to.                                                                                                                              |                                                                                                                                          |
| Replace Selected Fields | When true, deletes all fields, including body fields, specified in the Replace input.                                                                                                                                       | false                                                                                                                                    |
