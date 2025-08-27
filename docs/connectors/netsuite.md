---
title: NetSuite Connector
sidebar_label: NetSuite
description: Manage NetSuite records
---

![NetSuite](./assets/netsuite.png#connector-icon)
Manage NetSuite records

## Connections

### NetSuite OAuth Auth Code

NetSuite OAuth 2.0 Connection

:::warning Netsuite OAuth 2.0 Auth Code Flow expiration
Tokens retrieved using Netsuite's OAuth 2.0 Auth Code flow expire after 7 days, and are not able to be refreshed.
This requires a user to re-authenticate every 7 days, which is not a good user experience.
We recommend using the OAuth 2.0 Client Credentials flow (described below) instead.
:::

To make API requests to NetSuite on behalf of your customers, your customer will need to create an OAuth 2.0 app.
[NetSuite's OAuth 2.0](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_157769826287.html) documentation details the steps that need to be taken.

As an administrator, your customer will need to:

1. Enable SuiteTalk
   - Click **Setup** -> **Company** -> **Enable Features**
   - Under the **Suite Cloud** tab, ensure **REST WEB SERVICES** and **OAUTH 2.0** are both checked

1. Create an OAuth 2.0 app
   - Click **Setup** -> **Integration** -> **Manage Integrations** -> **New**
   - Give your integration a name and description
   - Un-check **TOKEN-BASED AUTHENTICATION** and **TBA: AUTHORIZATION FLOW** under **Token-based Authentication**
   - Ensure **AUTHORIZATION CODE GRANT**" and **REST WEB SERVICES** are checked under **OAuth 2.0**
   - Enable **REST WEB SERVICES** under **SCOPE**
   - Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as your **REDIRECT URI**
   - Take note of your **CONSUMER KEY** and **CONSUMER SECRET**

1. Create OAuth 2.0 Roles
   - Ensure that any user who wishes to log in via OAuth has been assigned a [proper role](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157771510070.html).

As an integration developer, you will need to mark **Consumer Key**, **Consumer Secret**, and **Token URL** organization- and customer-visible, as your end user will need to edit them with their own values.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                           | Comments                                                                                                                                                                                           | Default                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Token URL                       | The OAuth 2.0 Token URL for NetSuite. Replace <ACCOUNT_ID> with your account ID, which can be found in your browser's URL bar when you log in to NetSuite - https://<ACCOUNT_ID>.app.netsuite.com/ | https://<ACCOUNT_ID>.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token |
| Consumer Key (Client ID)        | Generate a consumer key when you create your OAuth 2.0 app in NetSuite                                                                                                                             |                                                                                    |
| Consumer Secret (Client Secret) | Generate a consumer secret when you create your OAuth 2.0 app in NetSuite                                                                                                                          |                                                                                    |

### Netsuite OAuth Client Credentials

Netsuite OAuth 2.0 Client Credentials Connection

Connecting to NetSuite using Client Credentials (JWT)
To make API requests to NetSuite on behalf of your customers, your customer will need to configure an OAuth 2.0 app with JWT option. NetSuite's OAuth 2.0 documentation provides detailed steps for setting this up.
[OAuth Client Credentials Setup](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162686838198.html#subsect_162686947286) documentation details the steps that need to be taken.

As an administrator, your customer will need to:

1. Enable SuiteTalk
   - Navigate to **Setup** > **Company** > **Enable Features**
   - Under the **Suite Cloud** tab, ensure that both **REST WEB SERVICES** and **OAUTH 2.0** are checked.

1. To Create an OAuth 2.0 app with JWT Option
   - Go to Setup > Integration > Manage Integrations > New
   - Give your integration a name and a description.
   - Un-check **TOKEN-BASED AUTHENTICATION** and **TBA: AUTHORIZATION FLOW** under Token-based Authentication
   - Ensure the following are checked under OAuth 2.0
     - **REST WEB SERVICES**
     - **CLIENT CREDENTIALS (MACHINE TO MACHINE) GRANT**
   - Enable **REST WEB SERVICES** under SCOPE
   - Take note of and save your **CONSUMER KEY** and **CONSUMER SECRET** as it will not be shown again in Netsuite after this step

1. Generating the Certificate ID and Private Key for JWT
   - A private key is required for JWT-based authentication. Follow the steps below or refer to the [NetSuite Documentation](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_162686838198.html#Related-Topics) for generating or importing a private key.
   - On your machine create a valid certificate abiding by the Netsuite requirements using OpenSSL in a terminal. This will generate .pem files on your local machine containing key used as the **Private Key for JWT** information and the certificate for the next step

     ```
     openssl req -new -x509 -newkey rsa:4096 -keyout private.pem -sigopt rsa_padding_mode:pss -sha256 -sigopt rsa_pss_saltlen:64 -out public.pem -nodes -days 730
     ```

   - In Netsuite, navigate to Setup > Integration > OAUTH 2.0 CLIENT (M2M) SETUP and select **Create New**
   - Choose the proper **Entity**, **Role**, and select the **Application** created in the previous section.
   - For **Certificate** choose the the public key you create - that is the `public.pem` file that was generated in the above `openssl` steps.
   - Once saved, a **Certificate ID** is generated. Save this for the workflow.

1. In your connection configuration select the **Netsuite OAuth 2.0 Client Credentials** connection type and enter the following:
   - Certificate ID from OAUTH 2.0 CLIENT (M2M) SETUP
   - Private Key from the `private.pem` file you created above. Copy the entire text including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` text
   - Consumer Key (Client ID) from the Netsuite integration
   - Consumer Secret (Client Secret) from the Netsuite integration

1. Create OAuth 2.0 Roles

Ensure that any user who wishes to log in via OAuth has been assigned a proper role.
As an integration developer, you will need to mark Consumer Key, Consumer Secret, Token URL, and Certificate ID as organization- and customer-visible, as your end user will need to edit them with their own values.

| Input                    | Comments                                                                                                                                                                                           | Default                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Token URL                | The OAuth 2.0 Token URL for NetSuite. Replace <ACCOUNT_ID> with your account ID, which can be found in your browser's URL bar when you log in to NetSuite - https://<ACCOUNT_ID>.app.netsuite.com/ | https://<ACCOUNT_ID>.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token |
| Certificate ID (Key ID)  | The key ID used for signing the JWT token.                                                                                                                                                         |                                                                                    |
| Private Key for JWT      | The private key used for signing the JWT token.                                                                                                                                                    |                                                                                    |
| Consumer Key (Client ID) | Generate a consumer key when you create your OAuth 2.0 app in NetSuite                                                                                                                             |                                                                                    |

## Actions

### Create Record

Create record of specified type

| Input       | Comments                                                                                                                                                         | Default                                                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Connection  |                                                                                                                                                                  |                                                                                                                                          |
| Record Type | Record type to perform the action against.                                                                                                                       |                                                                                                                                          |
| Payload     | Data payload to send in the action request. See https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2022.1/index.html for details. | <code>{<br /> "entityid": "New Customer",<br /> "companyname": "My Company",<br /> "subsidiary": {<br /> "id": "1"<br /> }<br />}</code> |
| Debug       | Enable for additional logging information.                                                                                                                       | false                                                                                                                                    |

### Delete Record

Delete record of the specified type

| Input       | Comments                                   | Default |
| ----------- | ------------------------------------------ | ------- |
| Connection  |                                            |         |
| Record Type | Record type to perform the action against. |         |
| Record ID   | The ID of the record you want.             |         |
| Debug       | Enable for additional logging information. | false   |

### Get Record

Get record of specified type

| Input                | Comments                                                                                            | Default |
| -------------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                     |         |
| Record Type          | Record type to perform the action against.                                                          |         |
| Record ID            | The ID of the record you want.                                                                      |         |
| Expand Sub-Resources | Enable to automatically expand all sublists, sublist lines, and subrecords on this record.          | false   |
| Simple Enum Format   | Enable to return enumeration values in a format that only shows the internal ID value.              | false   |
| Fields to Return     | Specific fields and sublists to return in the request. If unspecified, the full record is returned. |         |
| Debug                | Enable for additional logging information.                                                          | false   |

### List Records

List records of specified type

| Input             | Comments                                                                                                                           | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                    |         |
| Record Type       | Record type to perform the action against.                                                                                         |         |
| Query             | Query to filter records by. See https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1545222128.html for details. |         |
| Pagination Limit  | Fetch only this many records at a time.                                                                                            | 1000    |
| Pagination Offset | Fetch records offset by this value.                                                                                                |         |
| Debug             | Enable for additional logging information.                                                                                         | false   |

### Raw Request

Send raw HTTP request to NetSuite

| Input                   | Comments                                                                                                                                                                                                                                                                                        | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                 |         |
| URL                     | Input the path only (/contact), The base URL is already included (https://${accountId}.suitetalk.api.netsuite.com/services/rest/record/v1). For example, to connect to https://${accountId}.suitetalk.api.netsuite.com/services/rest/record/v1/contact, only /contact is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                         |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                       |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                            |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                          |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                             |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                     |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                        | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                             |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                            | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                             | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                             | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                   | false   |
| Service Type            | The type of service to use.                                                                                                                                                                                                                                                                     | record  |

### SuiteQL Query

Execute a SuiteQL Query through Netsuite's REST Web Service

| Input             | Comments                                                                                                                                             | Default                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Connection        |                                                                                                                                                      |                                                                  |
| Pagination Limit  | Fetch only this many records at a time.                                                                                                              | 1000                                                             |
| Pagination Offset | Fetch records offset by this value.                                                                                                                  |                                                                  |
| SuiteQL Payload   | Data payload to send in the action request. See https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157909186990.html for details. | SELECT email, COUNT(\*) as count FROM transaction GROUP BY email |
| Debug             | Enable for additional logging information.                                                                                                           | false                                                            |

### Update Record

Update record of the specified type

| Input                   | Comments                                                                                                                                                         | Default                                                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Connection              |                                                                                                                                                                  |                                                                                                                                          |
| Record Type             | Record type to perform the action against.                                                                                                                       |                                                                                                                                          |
| Record ID               | The ID of the record you want.                                                                                                                                   |                                                                                                                                          |
| Payload                 | Data payload to send in the action request. See https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2022.1/index.html for details. | <code>{<br /> "entityid": "New Customer",<br /> "companyname": "My Company",<br /> "subsidiary": {<br /> "id": "1"<br /> }<br />}</code> |
| Replace                 | Names of sublists on this record. All specified sublists will be replaced instead of added to.                                                                   |                                                                                                                                          |
| Replace Selected Fields | If enabled, delete all fields, including body fields, specified in the Replace input.                                                                            | false                                                                                                                                    |
| Debug                   | Enable for additional logging information.                                                                                                                       | false                                                                                                                                    |
