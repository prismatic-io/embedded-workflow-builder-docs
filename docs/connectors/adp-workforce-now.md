---
title: ADP Workforce Now Connector
sidebar_label: ADP Workforce Now
description: ADP Workforce Now is a comprehensive solution for managing HR, payroll, and labor management. Designed to help navigate compliance and drive productivity, engagement, and growth.
---

![ADP Workforce Now](./assets/adp-workforce-now.png#connector-icon)
ADP Workforce Now is a comprehensive solution for managing HR, payroll, and labor management. Designed to help navigate compliance and drive productivity, engagement, and growth.

## Connections

### ADP Workforce Now OAuth 2.0

This connection allows you to authenticate with ADP Workforce Now using OAuth 2.0.

In order to complete an OAuth 2.0 connection to ADP Workforce Now, a Client ID and Client Secret must be provided in the integration. These credentials may be obtained by contacting your ADP client representative.

This will also require access to the [Developer Self Service Portal](https://adpapps.adp.com/self-service)

1.  From this page a project may be created to house the OAuth credentials needed for a successful connection
2.  Navigate to the **Development Credentials** tab and you should see your **Client ID** and **Client Secret** values.
3.  Switch from the **Data Connector** tab to the **End-user/SSO** and in the App redirect URI field enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4.  **Certificate File** and **Key File** may be obtained by following this [Certificate Signing Request Guide](https://developers.adp.com/learn/how-to-articles/generate-a-certificate-signing-request#overview)

| Input                       | Comments                                                                                                                                                                                                                     | Default                                      |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| API Endpoint                | The endpoint to use for the ADP Workforce Now API                                                                                                                                                                            | https://api.adp.com/                         |
| Token Endpoint              | The endpoint to use to get the access token                                                                                                                                                                                  | https://accounts.adp.com/auth/oauth/v2/token |
| Client ID                   | The client ID for the project in the ADP Developer Portal                                                                                                                                                                    |                                              |
| Client Secret               | The client secret for the project in the ADP Developer Portal                                                                                                                                                                |                                              |
| Key File                    | The key file generated from the ADP Developer Portal                                                                                                                                                                         |                                              |
| Certificate File            | The certificate file (.pem) generated from the ADP Developer Portal                                                                                                                                                          |                                              |
| Subscriber Organization OID | The organization OID of the subscribed client. This is an optional field. Specify organization OID only if you are using a client ID and client secret for an organization that is different from the one you want to query. |                                              |

## Actions

### Add Personal Contact

Adds a worker’s personal contact

| Input            | Comments                                                                                                                                                                                                             | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID    | The Associate OID of the worker                                                                                                                                                                                      |         |
| Personal Contact | The personal contact data. Please refer to the docs for more details. https://developers.adp.com/build/guides/product-integration-guides/personal-contacts-api-guide-for-adp-workforce-now/chapter/3#data-dictionary |         |
| Connection       |                                                                                                                                                                                                                      |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                                                                                                 | false   |

### Create Scan/Punch

Performs a scan punch operation where the first scan represents an “IN” punch and the next scan represents an “OUT” punch.

| Input         | Comments                                                                                                                                    | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Badge ID      | The badge value associated with the time punch being recorded.                                                                              |         |
| Clocking Type | Punch operation (first punch represents an “IN”; second punch represents an “OUT”). Other options include 'lunchout', 'clockin', 'clockout' | punch   |
| Connection    |                                                                                                                                             |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                        | false   |

### Delete Personal Contact

Removes a worker’s personal contact.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Associate OID       | The Associate OID of the worker                      |         |
| Personal Contact ID | The ID of the personal contact to delete.            |         |
| Connection          |                                                      |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Get Applicant Onboard Metadata

Retrieve a single asset

| Input             | Comments                                                                                                                                                                                                                                 | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Context Templates | Geopolitical context of the onboarding process, default is US.                                                                                                                                                                           | US      |
| Filter            | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Connection        |                                                                                                                                                                                                                                          |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                                                                                                                     | false   |

### Get Clocking Transaction

Returns the status of a previously submitted clocking transaction such as “Clock-In”, “Clock-Out,” “Scan”, etc.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Event ID      | The event ID of the clocking transaction             |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Personal Contact

Returns a personal contact

| Input               | Comments                                                                                                                                     | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID       | The Associate OID of the worker                                                                                                              |         |
| Personal Contact ID | The ID of the personal contact to retrieve.                                                                                                  |         |
| Select              | Specifies the properties of the items to include in the response. Example: /mobileUserAccounts/associateOID,/mobileUserAccounts/governmentID |         |
| Connection          |                                                                                                                                              |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                         | false   |

### Get Personal Contact Meta

Returns a personal contact metadata

| Input         | Comments                                                                                                                                     | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID | The Associate OID of the worker                                                                                                              |         |
| Select        | Specifies the properties of the items to include in the response. Example: /mobileUserAccounts/associateOID,/mobileUserAccounts/governmentID |         |
| Connection    |                                                                                                                                              |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                         | false   |

### Get Time Cards

Get a worker's team's timecards. That is all the time cards for the worker's team members. The worker is identified by workers/[aoid]

| Input         | Comments                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID | The Associate OID of the worker                                                                                                                                                                                                          |         |
| Skip          | Specifies the number of items to skip from the beginning of the list. Example: 20                                                                                                                                                        |         |
| Top           | Specifies the upper limit on the number of items to return. Example: 10                                                                                                                                                                  |         |
| Filter        | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Expand        | Specifies the related resources to include in the response. Example: /mobileUserAccounts                                                                                                                                                 |         |
| Connection    |                                                                                                                                                                                                                                          |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                     | false   |

### Get Worker

Retrieve a worker by their Associate OID

| Input         | Comments                                                                                                                                     | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID | The Associate OID of the worker                                                                                                              |         |
| Select        | Specifies the properties of the items to include in the response. Example: /mobileUserAccounts/associateOID,/mobileUserAccounts/governmentID |         |
| Connection    |                                                                                                                                              |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                         | false   |

### Get Worker Demographics

Returns a worker demographic by Associate OID

| Input         | Comments                                                                                                                                     | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID | The Associate OID of the worker                                                                                                              |         |
| Select        | Specifies the properties of the items to include in the response. Example: /mobileUserAccounts/associateOID,/mobileUserAccounts/governmentID |         |
| Connection    |                                                                                                                                              |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                         | false   |

### Get Worker Metadata

Retrieves a meta on workers

| Input         | Comments                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Filter        | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Connection    |                                                                                                                                                                                                                                          |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                     | false   |

### Get Worker Payment Distributions

Returns a worker's pay distribution records

| Input         | Comments                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID | The Associate OID of the worker                                                                                                                                                                                                          |         |
| Select        | Specifies the properties of the items to include in the response. Example: /mobileUserAccounts/associateOID,/mobileUserAccounts/governmentID                                                                                             |         |
| Filter        | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Connection    |                                                                                                                                                                                                                                          |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                     | false   |

### Get Worker Payment Distributions Meta

Returns a worker's pay distribution records metadata

| Input         | Comments                                                                                                                                     | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Select        | Specifies the properties of the items to include in the response. Example: /mobileUserAccounts/associateOID,/mobileUserAccounts/governmentID |         |
| Connection    |                                                                                                                                              |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                         | false   |

### List Company Codes

Returns a list of company codes

| Input         | Comments                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Filter        | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Connection    |                                                                                                                                                                                                                                          |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                     | false   |

### List Personal Contacts

Returns a list of a worker’s personal contacts.

| Input         | Comments                                                                                                                                     | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID | The Associate OID of the worker                                                                                                              |         |
| Select        | Specifies the properties of the items to include in the response. Example: /mobileUserAccounts/associateOID,/mobileUserAccounts/governmentID |         |
| Connection    |                                                                                                                                              |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                         | false   |

### List Worker Demographics

Request the list of all available worker demographics that the requester is authorized to view.

| Input            | Comments                                                                                                                                                                                                                                 | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All        | If true, it will fetch all records and ignore parameters like $skip, $top                                                                                                                                                                | false   |
| Skip             | Specifies the number of items to skip from the beginning of the list. Example: 20                                                                                                                                                        |         |
| Top              | Specifies the upper limit on the number of items to return. Example: 10                                                                                                                                                                  |         |
| Filter           | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Select           | Specifies the properties of the items to include in the response. Example: /mobileUserAccounts/associateOID,/mobileUserAccounts/governmentID                                                                                             |         |
| Query Parameters | The query parameters that will be appended to the URL. The parameters should be in key-value pairs.                                                                                                                                      |         |
| Connection       |                                                                                                                                                                                                                                          |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                                                                                                                     | false   |

### List Workers

Retrieves all available workers that the requester is authorized to view.

| Input            | Comments                                                                                                                                                                                                                                 | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All        | If true, it will fetch all records and ignore parameters like $skip, $top                                                                                                                                                                | false   |
| Skip             | Specifies the number of items to skip from the beginning of the list. Example: 20                                                                                                                                                        |         |
| Top              | Specifies the upper limit on the number of items to return. Example: 10                                                                                                                                                                  |         |
| Count            | The OData $count parameter MUST be used to specify the total number criterion. This parameter can't be used with $top or $skip.                                                                                                          |         |
| Filter           | Specifies an expression that an item must match to be included in a response. Various criteria could be combined using and/or operands and () to set the operand precedence. e.g. /mobileUserAccounts/associateOID eq 'G4O73G9Z62SL2NFM' |         |
| Select           | Specifies the properties of the items to include in the response. Example: /mobileUserAccounts/associateOID,/mobileUserAccounts/governmentID                                                                                             |         |
| Query Parameters | The query parameters that will be appended to the URL. The parameters should be in key-value pairs.                                                                                                                                      |         |
| Connection       |                                                                                                                                                                                                                                          |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                                                                                                                     | false   |

### Modify Time Entries

Modify time entries event instance

| Input         | Comments                                                                                                                                                                                                                                                                                              | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Events        | The new time entries to be added, modified or deleted. Please refer to the API documentation for the structure of the time entries. https://developers.adp.com/build/api-explorer/hcm-offrg-wfn/hcm-offrg-wfn-time-time-cards-v2-time-cards?operation=POST%2Fevents%2Ftime%2Fv2%2Ftime-entries.modify |         |
| Connection    |                                                                                                                                                                                                                                                                                                       |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                  | false   |

### Post Applicant Onboard Process

Manage data related to the applicant onboarding request.

| Input                | Comments                                                                                                                                                                                                                           | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Applicant Onboarding | The applicant onboarding data, the example payload has a the structure of a minimal onboarding inprogress payload for a US Client applicant. Please refer to the docs to see examples from other countries and full list of fields |         |
| Connection           |                                                                                                                                                                                                                                    |         |
| Debug Request        | Enabling this flag will log out the current request.                                                                                                                                                                               | false   |

### Raw Request

Send raw HTTP request to the ADP Workforce Now API

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| URL                     | This is the URL to call.                                                                                                                                                                         |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Debug Request           | Enable this to log the request and response                                                                                                                                                      | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |
| Connection              |                                                                                                                                                                                                  |         |

### Update Personal Contact

Updates an existing worker’s personal contact

| Input               | Comments                                                                                                                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID       | The Associate OID of the worker                                                                                                                                                                                      |         |
| Personal Contact ID | The ID of the personal contact to update.                                                                                                                                                                            |         |
| Personal Contact    | The personal contact data. Please refer to the docs for more details. https://developers.adp.com/build/guides/product-integration-guides/personal-contacts-api-guide-for-adp-workforce-now/chapter/3#data-dictionary |         |
| Connection          |                                                                                                                                                                                                                      |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                                                                 | false   |

### Update Worker Pay Distribution

Replaces an employee's existing Direct Deposit records with an updated collection

| Input                | Comments                                                                                                                                                                                                                           | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Associate OID        | The Associate OID of the worker                                                                                                                                                                                                    |         |
| Work Assignment ID   | The ID of the worker's pay distribution to update.                                                                                                                                                                                 |         |
| Payment Distribution | The payment distribution data, the example payload has a the structure of a minimal onboarding inprogress payload for a US Client applicant. Please refer to the docs to see examples from other countries and full list of fields |         |
| Connection           |                                                                                                                                                                                                                                    |         |
| Debug Request        | Enabling this flag will log out the current request.                                                                                                                                                                               | false   |
