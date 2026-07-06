---
title: SAP SuccessFactors Connector
sidebar_label: SAP SuccessFactors
description: SAP SuccessFactors is a human resources platform that provides cloud-based solutions to manage various HR functions such as business alignment, people performance, recruitment, and learning activities.
---

![SAP SuccessFactors](./assets/sap-successfactors.png#connector-icon)
[SAP SuccessFactors](https://www.sap.com/products/hcm.html) is a cloud based human capital management (HCM) platform that helps organizations manage HR processes including recruiting, onboarding, performance management, and employee development.
This component allows interaction with the SAP SuccessFactors OData API.

## API Documentation

This component was built using the [SAP SuccessFactors OData V2 API](https://api.sap.com/package/SuccessFactorsRecruiting/odata)

## Connections

### API Key Authentication {#sap-successfactors-api-key-authentication}

Authenticate using OAuth 2.0 with a SAML 2.0 Bearer assertion. Recommended authentication method for SAP SuccessFactors.

:::note[Recommended]
API Key Authentication is the recommended method for connecting to SAP SuccessFactors. It replaces Basic Authentication, which SAP SuccessFactors is removing on November 20, 2026.
:::

#### Generate X.509 Certificate

First, generate an X.509 certificate and private key pair using OpenSSL:

```bash
# Generate private key
openssl genrsa -out private.pem 2048

# Generate certificate signing request
openssl req -new -key private.pem -out cert.csr

# Generate self-signed certificate (valid for 365 days)
openssl x509 -req -days 365 -in cert.csr -signkey private.pem -out public.pem
```

Save both `private.pem` (private key) and `public.pem` (certificate) files for later use.

#### Register OAuth2 Client Application

1. Log into the SAP SuccessFactors instance as an administrator
2. Navigate to **Admin Center** > **API Center** > **OAuth Configuration for OData**
   - Alternatively, search for `Manage OAuth2 Client Applications` in Action Search
3. Select **Register Client Application**
4. Configure the OAuth2 client application:
   - **Application Name**: Enter a descriptive name for the application
   - **Application URL**: Enter the application URL
   - **X.509 Certificate**: Upload or paste the contents of the `public.pem` certificate file
5. Click **Register** to create the application
6. Copy the **API Key** (also called Client ID) that is generated. This value is required for authentication
7. From the integration connection fill in the required fields:
   - **Company ID**: The SAP SuccessFactors company identifier
   - **User**: The SAP SuccessFactors user ID (e.g., `sfadmin`)
   - **API Key**: The OAuth2 API Key from the registered client application
   - **Issuer**: Issuer information of the SAML assertion (e.g., `www.successfactors.com`)
   - **Certificate Private Key**: The private certificate key for OAuth2 authentication (PEM format, including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` headers)
   - **Certificate**: The public certificate for OAuth2 authentication (PEM format, including `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` headers)
   - **Audiences**: Audiences of the SAML assertion (e.g., `www.successfactors.com`)
   - **API Server** (optional): The SAP SuccessFactors API server (defaults to sandbox environment if not specified)
   - **Protocol**: The protocol to use for API connections

| Input                   | Comments                                                                                                                                                                           | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Company ID              | SAP SuccessFactors Company ID                                                                                                                                                      |         |
| User                    | Enter the SAP SuccessFactors user ID that you use to access the APIs                                                                                                               |         |
| API Key                 | Your OAuth2 Success Factors API Key                                                                                                                                                |         |
| Issuer                  | Issuer information of the SAML assertion                                                                                                                                           |         |
| Certificate Private Key | Your Private Certificate Key for Success Factors OAuth2                                                                                                                            |         |
| Certificate             | Your Public Certificate for Success Factors OAuth2                                                                                                                                 |         |
| Audiences               | Audiences of the SAML assertion                                                                                                                                                    |         |
| API Server              | Your SAP SuccessFactors api server, if you are not sure, please contact your SAP SuccessFactors administrator. If empty the sandbox environment will be used (sandbox.api.sap.com) |         |
| Protocol                | The SAP SuccessFactors protocol to use                                                                                                                                             |         |

### Basic Authentication (Notice of Deprecation) {#sap-successfactors-basic-authentication}

Authenticate using a username and password. **Notice of Deprecation:** SAP SuccessFactors is removing HTTP Basic Authentication on November 20, 2026. Use API Key Authentication instead.

#### Configuring Basic Authentication

1. Log into the SAP SuccessFactors instance as an administrator
2. Ensure valid user credentials with appropriate API access permissions are available
3. From the integration connection fill in the required fields:
   - **Company ID**: The SAP SuccessFactors company identifier
   - **Username**: The SAP SuccessFactors username
   - **Password**: The SAP SuccessFactors password
   - **API Server** (optional): The SAP SuccessFactors API server (defaults to sandbox environment if not specified)
   - **Protocol**: The protocol to use for API connections

### Notice of Deprecation

SAP SuccessFactors is removing HTTP Basic Authentication on **November 20, 2026**. After that date, connections using this method will stop working. Use **API Key Authentication** instead.

#### Migrating to API Key Authentication

Existing integrations using Basic Authentication must move to **API Key Authentication** before **November 20, 2026** to avoid disruption. Because API Key Authentication is a separate connection type, migration replaces the Basic Authentication connection rather than editing its fields. Plan to complete these steps for every deployed instance.

1. Complete the **API Key Authentication** prerequisites: generate an X.509 certificate and private key pair, then register an OAuth2 client application in SAP SuccessFactors to obtain an **API Key**. Refer to the API Key Authentication setup instructions for the full procedure.
2. Add the **API Key Authentication** connection to the integration in place of the Basic Authentication connection.
3. Re-publish the integration so the updated connection is available to deployed instances.
4. For each existing instance, reconfigure the connection with the API Key Authentication values:
   - **Company ID**: The SAP SuccessFactors company identifier (carried over from the Basic Authentication connection)
   - **User**: The SAP SuccessFactors user ID (e.g., `sfadmin`)
   - **API Key**: The OAuth2 API Key from the registered client application
   - **Issuer** and **Audiences**: The SAML assertion values (e.g., `www.successfactors.com`)
   - **Certificate Private Key** and **Certificate**: The PEM-formatted key pair generated during setup
5. Test each instance against SAP SuccessFactors to confirm the new connection authenticates successfully.
6. Remove the Basic Authentication connection once every instance is verified on API Key Authentication.

:::warning[Migration Deadline]
SAP SuccessFactors removes HTTP Basic Authentication on November 20, 2026. Instances still using Basic Authentication after that date will fail to connect.
:::

| Input      | Comments                                                                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Company ID | SAP SuccessFactors Company ID                                                                                                                                                      |         |
| Username   | SAP SuccessFactors Username                                                                                                                                                        |         |
| Password   | SAP SuccessFactors Password                                                                                                                                                        |         |
| Protocol   | The SAP SuccessFactors protocol to use                                                                                                                                             |         |
| API Server | Your SAP SuccessFactors api server, if you are not sure, please contact your SAP SuccessFactors administrator. If empty the sandbox environment will be used (sandbox.api.sap.com) |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for new and updated records in a selected SAP SuccessFactors resource type on a configured schedule.

| Input                | Comments                                                                                     | Default |
| -------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                              |         |
| Resource Type        | The SAP SuccessFactors resource type to poll for new or updated records.                     |         |
| Show New Records     | When true, newly created records are included in the trigger output.                         | true    |
| Show Updated Records | When true, records that were updated after the last poll are included in the trigger output. | true    |

## Actions

### Create Candidate {#createcandidate}

Create a new candidate.

| Input             | Comments                                                             | Default |
| ----------------- | -------------------------------------------------------------------- | ------- |
| Connection        |                                                                      |         |
| First Name        | The given name of the candidate.                                     |         |
| Last Name         | The family name of the candidate.                                    |         |
| Primary Email     | The primary email address used to contact the candidate.             |         |
| Country           | The country where the candidate resides.                             |         |
| Additional Inputs | The additional fields to send in the request body, as a JSON object. |         |

### Create Job Application {#createjobapplication}

Create a new job application.

| Input              | Comments                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                   |         |
| Candidate ID       | The unique identifier for the candidate the job application is created for.       |         |
| Job Requisition ID | The unique identifier for the job requisition the job application is created for. |         |
| Additional Inputs  | The additional fields to send in the request body, as a JSON object.              |         |

### Create Job Requisition {#createjobrequisition}

Create a new job requisition.

| Input             | Comments                                                                           | Default |
| ----------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                    |         |
| Template ID       | The unique identifier for the job requisition template to base the requisition on. |         |
| Additional Inputs | The required fields for the selected template, as a JSON object.                   |         |

### Create Onboarding Candidate Info {#createonboardingcandidateinfo}

Create new onboarding candidate info.

| Input             | Comments                                                             | Default |
| ----------------- | -------------------------------------------------------------------- | ------- |
| Connection        |                                                                      |         |
| Additional Inputs | The additional fields to send in the request body, as a JSON object. |         |

### Create Record {#createrecord}

Create a new record in SAP SuccessFactors.

| Input             | Comments                                                             | Default |
| ----------------- | -------------------------------------------------------------------- | ------- |
| Connection        |                                                                      |         |
| Record Type       | The OData entity name identifying the kind of record to operate on.  |         |
| Additional Inputs | The additional fields to send in the request body, as a JSON object. |         |

### Delete Job Requisition {#deletejobrequisition}

Delete a job requisition by ID.

| Input              | Comments                                                 | Default |
| ------------------ | -------------------------------------------------------- | ------- |
| Connection         |                                                          |         |
| Job Requisition ID | The unique identifier for the job requisition to delete. |         |

### Delete Onboarding Candidate Info {#deleteonboardingcandidateinfo}

Delete onboarding candidate info by ID.

| Input        | Comments                                            | Default |
| ------------ | --------------------------------------------------- | ------- |
| Connection   |                                                     |         |
| Applicant ID | The unique identifier for the onboarding applicant. |         |

### Delete Record {#deleterecord}

Delete an existing record in SAP SuccessFactors.

| Input          | Comments                                                        | Default |
| -------------- | --------------------------------------------------------------- | ------- |
| Connection     |                                                                 |         |
| Record Type    | The OData entity name identifying the kind of record to delete. |         |
| Record Type ID | The unique identifier for the record to delete.                 |         |

### Get Candidate {#getcandidate}

Retrieve a candidate by ID.

| Input        | Comments                                                           | Default |
| ------------ | ------------------------------------------------------------------ | ------- |
| Connection   |                                                                    |         |
| Candidate ID | The unique identifier for the candidate.                           |         |
| Select       | The comma-separated list of properties to include in the response. |         |

### Get Job Application {#getjobapplication}

Retrieve a job application by ID.

| Input              | Comments                                                           | Default |
| ------------------ | ------------------------------------------------------------------ | ------- |
| Connection         |                                                                    |         |
| Job Application ID | The unique identifier for the job application.                     |         |
| Select             | The comma-separated list of properties to include in the response. |         |

### Get Job Requisition {#getjobrequisition}

Retrieve a job requisition by ID.

| Input              | Comments                                                           | Default |
| ------------------ | ------------------------------------------------------------------ | ------- |
| Connection         |                                                                    |         |
| Job Requisition ID | The unique identifier for the job requisition.                     |         |
| Select             | The comma-separated list of properties to include in the response. |         |

### Get Onboarding Candidate Info {#getonboardingcandidateinfo}

Retrieve onboarding candidate info by ID.

| Input        | Comments                                                           | Default |
| ------------ | ------------------------------------------------------------------ | ------- |
| Connection   |                                                                    |         |
| Applicant ID | The unique identifier for the onboarding applicant.                |         |
| Select       | The comma-separated list of properties to include in the response. |         |

### Get Record {#getrecord}

Retrieve a single record from SAP SuccessFactors.

| Input          | Comments                                                            | Default |
| -------------- | ------------------------------------------------------------------- | ------- |
| Connection     |                                                                     |         |
| Record Type    | The OData entity name identifying the kind of record to operate on. |         |
| Record Type ID | The unique identifier for the record within its record type.        |         |
| Select         | The comma-separated list of properties to include in the response.  |         |

### List Candidates {#listcandidates}

List candidates.

| Input               | Comments                                                                                                                | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                         |         |
| Fetch All           | When true, automatically fetches all pages of results. When false, the other inputs control which records are returned. | false   |
| Top                 | The maximum number of records to return.                                                                                |         |
| Skip                | The number of records to skip before returning results.                                                                 |         |
| Search              | The search phrase used to filter the returned items.                                                                    |         |
| Select              | The comma-separated list of properties to include in the response.                                                      |         |
| Filter              | The OData filter expression used to narrow results by property values.                                                  |         |
| Count               | When true, includes a count of the matching items in the response.                                                      | false   |
| Order By            | The property and direction used to sort the returned items.                                                             |         |
| Expand              | The related entities to expand and include in the response.                                                             |         |
| Custom Query Params | The additional query string parameters to append to the request.                                                        |         |

### List Job Applications {#listjobapplications}

List job applications.

| Input               | Comments                                                                                                                | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                         |         |
| Fetch All           | When true, automatically fetches all pages of results. When false, the other inputs control which records are returned. | false   |
| Top                 | The maximum number of records to return.                                                                                |         |
| Skip                | The number of records to skip before returning results.                                                                 |         |
| Search              | The search phrase used to filter the returned items.                                                                    |         |
| Select              | The comma-separated list of properties to include in the response.                                                      |         |
| Filter              | The OData filter expression used to narrow results by property values.                                                  |         |
| Count               | When true, includes a count of the matching items in the response.                                                      | false   |
| Order By            | The property and direction used to sort the returned items.                                                             |         |
| Expand              | The related entities to expand and include in the response.                                                             |         |
| Custom Query Params | The additional query string parameters to append to the request.                                                        |         |

### List Job Requisitions {#listjobrequisitions}

List job requisitions.

| Input               | Comments                                                                                                                | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                         |         |
| Fetch All           | When true, automatically fetches all pages of results. When false, the other inputs control which records are returned. | false   |
| Top                 | The maximum number of records to return.                                                                                |         |
| Skip                | The number of records to skip before returning results.                                                                 |         |
| Search              | The search phrase used to filter the returned items.                                                                    |         |
| Select              | The comma-separated list of properties to include in the response.                                                      |         |
| Filter              | The OData filter expression used to narrow results by property values.                                                  |         |
| Count               | When true, includes a count of the matching items in the response.                                                      | false   |
| Order By            | The property and direction used to sort the returned items.                                                             |         |
| Expand              | The related entities to expand and include in the response.                                                             |         |
| Custom Query Params | The additional query string parameters to append to the request.                                                        |         |

### List Onboarding Candidate Info {#listonboardingcandidateinfo}

List onboarding candidate info.

| Input               | Comments                                                                                                                | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                         |         |
| Fetch All           | When true, automatically fetches all pages of results. When false, the other inputs control which records are returned. | false   |
| Top                 | The maximum number of records to return.                                                                                |         |
| Skip                | The number of records to skip before returning results.                                                                 |         |
| Search              | The search phrase used to filter the returned items.                                                                    |         |
| Select              | The comma-separated list of properties to include in the response.                                                      |         |
| Filter              | The OData filter expression used to narrow results by property values.                                                  |         |
| Count               | When true, includes a count of the matching items in the response.                                                      | false   |
| Order By            | The property and direction used to sort the returned items.                                                             |         |
| Expand              | The related entities to expand and include in the response.                                                             |         |
| Custom Query Params | The additional query string parameters to append to the request.                                                        |         |

### List Records {#listrecords}

Retrieve a list of records from SAP SuccessFactors.

| Input               | Comments                                                                                                                | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                         |         |
| Record Type         | The OData entity name identifying the kind of record to operate on.                                                     |         |
| Fetch All           | When true, automatically fetches all pages of results. When false, the other inputs control which records are returned. | false   |
| Top                 | The maximum number of records to return.                                                                                |         |
| Skip                | The number of records to skip before returning results.                                                                 |         |
| Search              | The search phrase used to filter the returned items.                                                                    |         |
| Select              | The comma-separated list of properties to include in the response.                                                      |         |
| Filter              | The OData filter expression used to narrow results by property values.                                                  |         |
| Count               | When true, includes a count of the matching items in the response.                                                      | false   |
| Order By            | The property and direction used to sort the returned items.                                                             |         |
| Expand              | The related entities to expand and include in the response.                                                             |         |
| Custom Query Params | The additional query string parameters to append to the request.                                                        |         |

### Raw Request {#rawrequest}

Send raw HTTP request to the SAP SuccessFactors API.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
| URL                     | The request path only (for example, /Candidate). The base API server URL is already included, so to reach <API_SERVER_URL>/Candidate, enter only /Candidate in this field.                       |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Update Candidate {#updatecandidate}

Update an existing candidate.

| Input             | Comments                                                             | Default |
| ----------------- | -------------------------------------------------------------------- | ------- |
| Connection        |                                                                      |         |
| Candidate ID      | The unique identifier for the candidate.                             |         |
| First Name        | The given name of the candidate.                                     |         |
| Last Name         | The family name of the candidate.                                    |         |
| Primary Email     | The primary email address used to contact the candidate.             |         |
| Country           | The country where the candidate resides.                             |         |
| Additional Inputs | The additional fields to send in the request body, as a JSON object. |         |

### Update Job Application {#updatejobapplication}

Update an existing job application.

| Input              | Comments                                                                             | Default |
| ------------------ | ------------------------------------------------------------------------------------ | ------- |
| Connection         |                                                                                      |         |
| Job Application ID | The unique identifier for the job application.                                       |         |
| Candidate ID       | The unique identifier for the candidate to associate with the job application.       |         |
| Job Requisition ID | The unique identifier for the job requisition to associate with the job application. |         |
| Additional Inputs  | The additional fields to send in the request body, as a JSON object.                 |         |

### Update Job Requisition {#updatejobrequisition}

Update an existing job requisition.

| Input              | Comments                                         | Default |
| ------------------ | ------------------------------------------------ | ------- |
| Connection         |                                                  |         |
| Job Requisition ID | The unique identifier for the job requisition.   |         |
| Additional Inputs  | The template fields to update, as a JSON object. |         |

### Update Onboarding Candidate Info {#updateonboardingcandidateinfo}

Update existing onboarding candidate info.

| Input        | Comments                                            | Default |
| ------------ | --------------------------------------------------- | ------- |
| Connection   |                                                     |         |
| Applicant ID | The unique identifier for the onboarding applicant. |         |

### Update Record {#updaterecord}

Update an existing record in SAP SuccessFactors.

| Input             | Comments                                                             | Default |
| ----------------- | -------------------------------------------------------------------- | ------- |
| Connection        |                                                                      |         |
| Record Type       | The OData entity name identifying the kind of record to operate on.  |         |
| Record Type ID    | The unique identifier for the record within its record type.         |         |
| Additional Inputs | The additional fields to send in the request body, as a JSON object. |         |
