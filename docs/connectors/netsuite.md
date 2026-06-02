---
title: Oracle NetSuite Connector
sidebar_label: Oracle NetSuite
description: Manage records and execute queries in Oracle NetSuite.
---

![Oracle NetSuite](./assets/netsuite.png#connector-icon)
Manage records and execute queries in Oracle NetSuite.

## Connections

### NetSuite OAuth Auth Code {#oauth}

NetSuite OAuth 2.0 Connection

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input                           | Comments                                                                                                                                                                                                   | Default                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Token URL                       | The OAuth 2.0 Token URL for NetSuite. Replace &lt;ACCOUNT_ID&gt; with your NetSuite account ID, which can be found in your browser's URL bar when you log in: https://&lt;ACCOUNT_ID&gt;.app.netsuite.com/ | https://<ACCOUNT_ID>.suitetalk.api.netsuite.com/services/rest/auth/oauth2/v1/token |
| Consumer Key (Client ID)        | The consumer key generated when you create your OAuth 2.0 application in NetSuite. Navigate to Setup > Company > Enable Features > SuiteCloud > Manage Authentication to create an application.            |                                                                                    |
| Consumer Secret (Client Secret) | The consumer secret generated when you create your OAuth 2.0 application in NetSuite. Navigate to Setup > Company > Enable Features > SuiteCloud > Manage Authentication to create an application.         |                                                                                    |

### NetSuite OAuth Client Credentials {#oauthclientcredentials}

NetSuite OAuth 2.0 Client Credentials Connection

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
