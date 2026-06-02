---
title: ADP Workforce Now Connector
sidebar_label: ADP Workforce Now
description: Manage applicants, workers, and payroll data in ADP Workforce Now.
---

![ADP Workforce Now](./assets/adp-workforce-now.png#connector-icon)
Manage applicants, workers, and payroll data in ADP Workforce Now.

## Connections

### OAuth 2.0 {#adpoauth2}

OAuth 2.0 connection for ADP Workforce Now

| Input                       | Comments                                                                                                                                                                 | Default                                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| API Endpoint                | The endpoint to use for the ADP Workforce Now API.                                                                                                                       | https://api.adp.com/                         |
| Token Endpoint              | The OAuth 2.0 token endpoint URL for ADP authentication.                                                                                                                 | https://accounts.adp.com/auth/oauth/v2/token |
| Client ID                   | The client ID for the project in the ADP Developer Portal                                                                                                                |                                              |
| Client Secret               | The client secret for the project in the ADP Developer Portal                                                                                                            |                                              |
| Key File                    | The key file generated from the ADP Developer Portal                                                                                                                     |                                              |
| Certificate File            | The certificate file (.pem) generated from the ADP Developer Portal                                                                                                      |                                              |
| Subscriber Organization OID | The organization OID (OOID) of the subscribed client. Only specify this if using a client ID and client secret for an organization different from the one being queried. |                                              |

## Actions

### Add Personal Contact {#addpersonalcontact}

Adds a worker’s personal contact

| Input            | Comments                                                                                                                                                                                                                              | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID    | The unique Associate OID identifier of the worker.                                                                                                                                                                                    |         |
| Personal Contact | The personal contact data structure. [View data dictionary](https://developers.adp.com/build/guides/product-integration-guides/personal-contacts-api-guide-for-adp-workforce-now/chapter/3#data-dictionary) for all available fields. |         |
| Connection       | The ADP Workforce Now connection to use.                                                                                                                                                                                              |         |

### Create Scan/Punch {#createscanpunch}

Performs a scan punch operation where the first scan represents an “IN” punch and the next scan represents an “OUT” punch.

| Input         | Comments                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------- | ------- |
| Badge ID      | The badge identifier associated with the time punch being recorded.                      |         |
| Clocking Type | The type of time punch operation. Punch mode alternates between IN and OUT on each scan. | punch   |
| Connection    | The ADP Workforce Now connection to use.                                                 |         |

### Delete Personal Contact {#deletepersonalcontact}

Removes a worker’s personal contact.

| Input               | Comments                                           | Default |
| ------------------- | -------------------------------------------------- | ------- |
| Associate OID       | The unique Associate OID identifier of the worker. |         |
| Personal Contact ID | The unique identifier of the personal contact.     |         |
| Connection          | The ADP Workforce Now connection to use.           |         |

### Get Applicant Onboard Metadata {#getapplicantonboardmetadata}

Retrieves metadata for the applicant onboarding process, including available fields, templates, and configuration options.

| Input             | Comments                                                                                                                             | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Context Templates | The geopolitical context template for the onboarding process.                                                                        | US      |
| Filter            | Specifies an expression to filter onboarding metadata results. Use OData filter syntax to match specific template codes or criteria. |         |
| Connection        | The ADP Workforce Now connection to use.                                                                                             |         |

### Get Clocking Transaction {#getclockingtransaction}

Returns the status of a previously submitted clocking transaction such as “Clock-In”, “Clock-Out,” “Scan”, etc.

| Input      | Comments                                                 | Default |
| ---------- | -------------------------------------------------------- | ------- |
| Event ID   | The unique identifier of the clocking transaction event. |         |
| Connection | The ADP Workforce Now connection to use.                 |         |

### Get Personal Contact {#getpersonalcontact}

Returns a personal contact

| Input               | Comments                                                                                  | Default |
| ------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Associate OID       | The unique Associate OID identifier of the worker.                                        |         |
| Personal Contact ID | The unique identifier of the personal contact.                                            |         |
| Select              | Comma-separated list of properties to include in the response using OData property paths. |         |
| Connection          | The ADP Workforce Now connection to use.                                                  |         |

### Get Personal Contact Meta {#getpersonalcontactmeta}

Returns a personal contact metadata

| Input         | Comments                                                                                  | Default |
| ------------- | ----------------------------------------------------------------------------------------- | ------- |
| Associate OID | The unique Associate OID identifier of the worker.                                        |         |
| Select        | Comma-separated list of properties to include in the response using OData property paths. |         |
| Connection    | The ADP Workforce Now connection to use.                                                  |         |

### Get Time Cards {#gettimecards}

Get a worker's team's timecards. That is all the time cards for the worker's team members. The worker is identified by workers/[aoid]

| Input         | Comments                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID | The unique Associate OID identifier of the worker.                                                                                                                                                                                       |         |
| Skip          | The number of items to skip from the beginning of the list for pagination.                                                                                                                                                               |         |
| Top           | The maximum number of items to return in the response.                                                                                                                                                                                   |         |
| Filter        | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Expand        | The related resources to include inline in the response using OData expand syntax.                                                                                                                                                       |         |
| Connection    | The ADP Workforce Now connection to use.                                                                                                                                                                                                 |         |

### Get Worker {#getworker}

Retrieve a worker by their Associate OID

| Input         | Comments                                                                                  | Default |
| ------------- | ----------------------------------------------------------------------------------------- | ------- |
| Associate OID | The unique Associate OID identifier of the worker.                                        |         |
| Select        | Comma-separated list of properties to include in the response using OData property paths. |         |
| Connection    | The ADP Workforce Now connection to use.                                                  |         |

### Get Worker Demographics {#getworkerdemographics}

Returns a worker demographic by Associate OID

| Input         | Comments                                                                                  | Default |
| ------------- | ----------------------------------------------------------------------------------------- | ------- |
| Associate OID | The unique Associate OID identifier of the worker.                                        |         |
| Select        | Comma-separated list of properties to include in the response using OData property paths. |         |
| Connection    | The ADP Workforce Now connection to use.                                                  |         |

### Get Worker Metadata {#getworkersmetadata}

Retrieves a meta on workers

| Input      | Comments                                                                                                                                                                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Filter     | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Connection | The ADP Workforce Now connection to use.                                                                                                                                                                                                 |         |

### Get Worker Payment Distributions {#getpaymentdistributions}

Returns a worker's pay distribution records

| Input         | Comments                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID | The unique Associate OID identifier of the worker.                                                                                                                                                                                       |         |
| Select        | Comma-separated list of properties to include in the response using OData property paths.                                                                                                                                                |         |
| Filter        | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Connection    | The ADP Workforce Now connection to use.                                                                                                                                                                                                 |         |

### Get Worker Payment Distributions Meta {#getworkerpaymentdistributionsmeta}

Returns a worker's pay distribution records metadata

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Select     | Comma-separated list of properties to include in the response using OData property paths. |         |
| Connection | The ADP Workforce Now connection to use.                                                  |         |

### List Company Codes {#listcompanycodes}

Returns a list of company codes

| Input      | Comments                                                                                                                                                                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Filter     | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Connection | The ADP Workforce Now connection to use.                                                                                                                                                                                                 |         |

### List Personal Contacts {#listpersonalcontacts}

Returns a list of a worker’s personal contacts.

| Input         | Comments                                                                                  | Default |
| ------------- | ----------------------------------------------------------------------------------------- | ------- |
| Associate OID | The unique Associate OID identifier of the worker.                                        |         |
| Select        | Comma-separated list of properties to include in the response using OData property paths. |         |
| Connection    | The ADP Workforce Now connection to use.                                                  |         |

### List Worker Demographics {#listworkersdemographics}

Request the list of all available worker demographics that the requester is authorized to view.

| Input            | Comments                                                                                                                                                                                                                                 | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All        | When true, fetches all records using pagination and ignores parameters like $skip and $top.                                                                                                                                              | false   |
| Skip             | The number of items to skip from the beginning of the list for pagination.                                                                                                                                                               |         |
| Top              | The maximum number of items to return in the response.                                                                                                                                                                                   |         |
| Filter           | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Select           | Comma-separated list of properties to include in the response using OData property paths.                                                                                                                                                |         |
| Query Parameters | The query parameters that will be appended to the URL. The parameters should be in key-value pairs.                                                                                                                                      |         |
| Connection       | The ADP Workforce Now connection to use.                                                                                                                                                                                                 |         |

### List Workers {#listworkers}

Retrieves all available workers that the requester is authorized to view.

| Input            | Comments                                                                                                                                                                                                                                 | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All        | When true, fetches all records using pagination and ignores parameters like $skip and $top.                                                                                                                                              | false   |
| Skip             | The number of items to skip from the beginning of the list for pagination.                                                                                                                                                               |         |
| Top              | The maximum number of items to return in the response.                                                                                                                                                                                   |         |
| Count            | The OData $count parameter MUST be used to specify the total number criterion. This parameter can't be used with $top or $skip.                                                                                                          |         |
| Filter           | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Select           | Comma-separated list of properties to include in the response using OData property paths.                                                                                                                                                |         |
| Query Parameters | The query parameters that will be appended to the URL. The parameters should be in key-value pairs.                                                                                                                                      |         |
| Connection       | The ADP Workforce Now connection to use.                                                                                                                                                                                                 |         |

### Modify Time Entries {#modifytimeentries}

Modify time entries event instance

| Input      | Comments                                                                                                                                                                                                                                                                                              | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Events     | The new time entries to be added, modified or deleted. Please refer to the API documentation for the structure of the time entries. https://developers.adp.com/build/api-explorer/hcm-offrg-wfn/hcm-offrg-wfn-time-time-cards-v2-time-cards?operation=POST%2Fevents%2Ftime%2Fv2%2Ftime-entries.modify |         |
| Connection | The ADP Workforce Now connection to use.                                                                                                                                                                                                                                                              |         |

### Post Applicant Onboard Process {#postapplicantonboardprocess}

Manage data related to the applicant onboarding request.

| Input                | Comments                                                                                                                                                                                                                           | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Applicant Onboarding | The applicant onboarding data, the example payload has a the structure of a minimal onboarding inprogress payload for a US Client applicant. Please refer to the docs to see examples from other countries and full list of fields |         |
| Connection           | The ADP Workforce Now connection to use.                                                                                                                                                                                           |         |

### Raw Request {#rawrequest}

Send raw HTTP request to the ADP Workforce Now API

| Input                   | Comments                                                                                                                                                                                                   | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| URL                     | Input the path only (/hr/v2/workers). The base URL is already included (https://api.adp.com/). For example, to connect to https://api.adp.com/hr/v2/workers, only /hr/v2/workers is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                    |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                  |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                       |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                           |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                     |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                        |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                   | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                        |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                        | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.           | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                        | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                              | false   |
| Connection              | The ADP Workforce Now connection to use.                                                                                                                                                                   |         |

### Update Personal Contact {#updatepersonacontact}

Updates an existing worker’s personal contact

| Input               | Comments                                                                                                                                                                                                                              | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID       | The unique Associate OID identifier of the worker.                                                                                                                                                                                    |         |
| Personal Contact ID | The unique identifier of the personal contact.                                                                                                                                                                                        |         |
| Personal Contact    | The personal contact data structure. [View data dictionary](https://developers.adp.com/build/guides/product-integration-guides/personal-contacts-api-guide-for-adp-workforce-now/chapter/3#data-dictionary) for all available fields. |         |
| Connection          | The ADP Workforce Now connection to use.                                                                                                                                                                                              |         |

### Update Worker Pay Distribution {#updateworkerpaydistribution}

Replaces an employee's existing Direct Deposit records with an updated collection

| Input                | Comments                                                                            | Default |
| -------------------- | ----------------------------------------------------------------------------------- | ------- |
| Associate OID        | The unique Associate OID identifier of the worker.                                  |         |
| Work Assignment ID   | The unique identifier of the worker's work assignment for pay distribution updates. |         |
| Payment Distribution | The payment distribution data structure for direct deposit configuration.           |         |
| Connection           | The ADP Workforce Now connection to use.                                            |         |
