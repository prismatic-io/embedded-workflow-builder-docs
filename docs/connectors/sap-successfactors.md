---
title: SAP SuccessFactors Connector
sidebar_label: SAP SuccessFactors
description: SAP SuccessFactors is a human resources platform that provides cloud-based solutions to manage various HR functions such as business alignment, people performance, recruitment, and learning activities.
---

![SAP SuccessFactors](./assets/sap-successfactors.png#connector-icon)
[SAP SuccessFactors](https://www.sap.com/products/hcm/successfactors.html) is a cloud based human capital management (HCM) platform that helps organizations manage HR processes including recruiting, onboarding, performance management, and employee development.
This component allows you to interact with the SAP SuccessFactors OData API.

## API Documentation

This component was built using the [SAP SuccessFactors OData V2 API](https://api.sap.com/package/SuccessFactorsRecruiting/odata)

## Connections

### API Key Authentication {#sap-successfactors-api-key-authentication}

API Key Authentication for SAP SuccessFactors Connection

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

1. Log into your SAP SuccessFactors instance as an administrator
2. Navigate to **Admin Center** > **API Center** > **OAuth Configuration for OData**
   - Alternatively, search for `Manage OAuth2 Client Applications` in Action Search
3. Select **Register Client Application**
4. Configure the OAuth2 client application:
   - **Application Name**: Enter a descriptive name for your application
   - **Application URL**: Enter your application URL
   - **X.509 Certificate**: Upload or paste the contents of your `public.pem` certificate file
5. Click **Register** to create the application
6. Copy the **API Key** (also called Client ID) that is generated - you'll need this for authentication
7. From the integration connection fill in the required fields:
   - **Company ID**: Your SAP SuccessFactors company identifier
   - **User**: Your SAP SuccessFactors user ID (e.g., `sfadmin`)
   - **API Key**: The OAuth2 API Key from your registered client application
   - **Issuer**: Issuer information of the SAML assertion (e.g., `www.successfactors.com`)
   - **Certificate Private Key**: Your private certificate key for OAuth2 authentication (PEM format, including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` headers)
   - **Certificate**: Your public certificate for OAuth2 authentication (PEM format, including `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` headers)
   - **Audiences**: Audiences of the SAML assertion (e.g., `www.successfactors.com`)
   - **API Server** (optional): Your SAP SuccessFactors API server (defaults to sandbox environment if not specified)
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

### Basic Authentication {#sap-successfactors-basic-authentication}

Basic Authentication for SAP SuccessFactors Connection

#### Configuring Basic Authentication

1. Log into your SAP SuccessFactors instance as an administrator
2. Ensure you have valid user credentials with appropriate API access permissions
3. From the integration connection fill in the required fields:
   - **Company ID**: Your SAP SuccessFactors company identifier
   - **Username**: Your SAP SuccessFactors username
   - **Password**: Your SAP SuccessFactors password
   - **API Server** (optional): Your SAP SuccessFactors API server (defaults to sandbox environment if not specified)
   - **Protocol**: The protocol to use for API connections

| Input      | Comments                                                                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Company ID | SAP SuccessFactors Company ID                                                                                                                                                      |         |
| Username   | SAP SuccessFactors Username                                                                                                                                                        |         |
| Password   | SAP SuccessFactors Password                                                                                                                                                        |         |
| Protocol   | The SAP SuccessFactors protocol to use                                                                                                                                             |         |
| API Server | Your SAP SuccessFactors api server, if you are not sure, please contact your SAP SuccessFactors administrator. If empty the sandbox environment will be used (sandbox.api.sap.com) |         |

## Actions

### Create a Record {#createrecord}

Create a new record in component

| Input             | Comments                                     | Default |
| ----------------- | -------------------------------------------- | ------- |
| Record Type       | The type of record to create                 |         |
| Additional Inputs | Additional inputs to be passed to the action |         |
| Connection        |                                              |         |

### Create Candidate {#createcandidate}

Add a new entity to Candidate

| Input             | Comments                                     | Default |
| ----------------- | -------------------------------------------- | ------- |
| First Name        | The first name of the candidate              |         |
| Last Name         | The last name of the candidate               |         |
| Primary Email     | The primary email address of the candidate   |         |
| Country           | The country where the candidate is located   |         |
| Additional Inputs | Additional inputs to be passed to the action |         |
| Connection        |                                              |         |

### Create Job Application {#createjobapplication}

Add a new entity to JobApplication

| Input              | Comments                                                        | Default |
| ------------------ | --------------------------------------------------------------- | ------- |
| Candidate ID       | The ID of the candidate to create the job application for       |         |
| Job Requisition ID | The ID of the job requisition to create the job application for |         |
| Additional Inputs  | Additional inputs to be passed to the action                    |         |
| Connection         |                                                                 |         |

### Create Job Requisition {#createjobrequisition}

Add a new entity to JobRequisition

| Input             | Comments                                      | Default |
| ----------------- | --------------------------------------------- | ------- |
| Template ID       | The ID of the job requisition template to use |         |
| Additional Inputs | The required fields for the selected template |         |
| Connection        |                                               |         |

### Create Onboarding Candidate Info {#createonboardingcandidateinfo}

Add a new entity to OnboardingCandidateInfo

| Input             | Comments                                     | Default |
| ----------------- | -------------------------------------------- | ------- |
| Additional Inputs | Additional inputs to be passed to the action |         |
| Connection        |                                              |         |

### Delete Job Requisition {#deletejobrequisition}

Delete an entity from JobRequisition

| Input              | Comments                                | Default |
| ------------------ | --------------------------------------- | ------- |
| Job Requisition ID | The ID of the job requisition to delete |         |
| Connection         |                                         |         |

### Delete Onboarding Candidate Info {#deleteonboardingcandidateinfo}

Delete an entity from OnboardingCandidateInfo

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Applicant ID | The ID of the applicant to retrieve |         |
| Connection   |                                     |         |

### Delete Record {#deleterecord}

Delete an existing record in component

| Input          | Comments                       | Default |
| -------------- | ------------------------------ | ------- |
| Record Type    | The type of record to delete   |         |
| Record Type ID | The ID of the record to delete |         |
| Connection     |                                |         |

### Get Candidate {#getcandidate}

Get entity from Candidate by key

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Candidate ID | The ID of the candidate to retrieve |         |
| Select       | Select properties to be returned    |         |
| Connection   |                                     |         |

### Get Job Application {#getjobapplication}

Get entity from JobApplication by key

| Input              | Comments                                  | Default |
| ------------------ | ----------------------------------------- | ------- |
| Job Application ID | The ID of the job application to retrieve |         |
| Select             | Select properties to be returned          |         |
| Connection         |                                           |         |

### Get Job Requisition {#getjobrequisition}

Get entity from JobRequisition by key

| Input              | Comments                                  | Default |
| ------------------ | ----------------------------------------- | ------- |
| Job Requisition ID | The ID of the job requisition to retrieve |         |
| Select             | Select properties to be returned          |         |
| Connection         |                                           |         |

### Get Onboarding Candidate Info {#getonboardingcandidateinfo}

Get entity from OnboardingCandidateInfo by key

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Applicant ID | The ID of the applicant to retrieve |         |
| Select       | Select properties to be returned    |         |
| Connection   |                                     |         |

### Get Record {#getrecord}

Retrieve a single record from component

| Input          | Comments                              | Default |
| -------------- | ------------------------------------- | ------- |
| Record Type    | The type of record to create          |         |
| Record Type ID | The ID of the record type to retrieve |         |
| Select         | Select properties to be returned      |         |
| Connection     |                                       |         |

### List Candidates {#listcandidates}

Get entities from Candidate

| Input               | Comments                                                                                 | Default |
| ------------------- | ---------------------------------------------------------------------------------------- | ------- |
| Fetch All           | If true will fetch all records, otherwise will use the other inputs to fetch the records | false   |
| Top                 | The number of records to return                                                          |         |
| Skip                | The number of records to skip                                                            |         |
| Search              | Search items by search phrases                                                           |         |
| Select              | Select properties to be returned                                                         |         |
| Filter              | Filter items by property values                                                          |         |
| Count               | Include count of items                                                                   | false   |
| Order By            | Order items by property values                                                           |         |
| Expand              | Expand related entities                                                                  |         |
| Custom Query Params | Custom fields filter                                                                     |         |
| Connection          |                                                                                          |         |

### List Job Applications {#listjobapplications}

Get entities from JobApplication

| Input               | Comments                                                                                 | Default |
| ------------------- | ---------------------------------------------------------------------------------------- | ------- |
| Fetch All           | If true will fetch all records, otherwise will use the other inputs to fetch the records | false   |
| Top                 | The number of records to return                                                          |         |
| Skip                | The number of records to skip                                                            |         |
| Search              | Search items by search phrases                                                           |         |
| Select              | Select properties to be returned                                                         |         |
| Filter              | Filter items by property values                                                          |         |
| Count               | Include count of items                                                                   | false   |
| Order By            | Order items by property values                                                           |         |
| Expand              | Expand related entities                                                                  |         |
| Custom Query Params | Custom fields filter                                                                     |         |
| Connection          |                                                                                          |         |

### List Job Requisitions {#listjobrequisitions}

Get entities from JobRequisition

| Input               | Comments                                                                                 | Default |
| ------------------- | ---------------------------------------------------------------------------------------- | ------- |
| Fetch All           | If true will fetch all records, otherwise will use the other inputs to fetch the records | false   |
| Top                 | The number of records to return                                                          |         |
| Skip                | The number of records to skip                                                            |         |
| Search              | Search items by search phrases                                                           |         |
| Select              | Select properties to be returned                                                         |         |
| Filter              | Filter items by property values                                                          |         |
| Count               | Include count of items                                                                   | false   |
| Order By            | Order items by property values                                                           |         |
| Expand              | Expand related entities                                                                  |         |
| Custom Query Params | Custom fields filter                                                                     |         |
| Connection          |                                                                                          |         |

### List Onboarding Candidate Info {#listonboardingcandidateinfo}

Get entities from OnboardingCandidateInfo

| Input               | Comments                                                                                 | Default |
| ------------------- | ---------------------------------------------------------------------------------------- | ------- |
| Fetch All           | If true will fetch all records, otherwise will use the other inputs to fetch the records | false   |
| Top                 | The number of records to return                                                          |         |
| Skip                | The number of records to skip                                                            |         |
| Search              | Search items by search phrases                                                           |         |
| Select              | Select properties to be returned                                                         |         |
| Filter              | Filter items by property values                                                          |         |
| Count               | Include count of items                                                                   | false   |
| Order By            | Order items by property values                                                           |         |
| Expand              | Expand related entities                                                                  |         |
| Custom Query Params | Custom fields filter                                                                     |         |
| Connection          |                                                                                          |         |

### List Records {#listrecords}

Retrieve a list of records from component

| Input               | Comments                                                                                 | Default |
| ------------------- | ---------------------------------------------------------------------------------------- | ------- |
| Record Type         | The type of record to create                                                             |         |
| Fetch All           | If true will fetch all records, otherwise will use the other inputs to fetch the records | false   |
| Top                 | The number of records to return                                                          |         |
| Skip                | The number of records to skip                                                            |         |
| Search              | Search items by search phrases                                                           |         |
| Select              | Select properties to be returned                                                         |         |
| Filter              | Filter items by property values                                                          |         |
| Count               | Include count of items                                                                   | false   |
| Order By            | Order items by property values                                                           |         |
| Expand              | Expand related entities                                                                  |         |
| Custom Query Params | Custom fields filter                                                                     |         |
| Connection          |                                                                                          |         |

### Raw Request {#rawrequest}

Send raw HTTP request to the SAP SuccessFactors API

| Input                   | Comments                                                                                                                                                                                                 | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                          |         |
| URL                     | Input the path only (/Candidate), The base URL is already included ({{ YOUR_API_SERVER_URL }}). For example, to connect to {{ YOUR_API_SERVER_URL }}/Candidate, only /Candidate is entered in this field |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                  |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                     |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                         |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                   |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                      |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                              |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                 | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                      |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                     | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                      | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.         | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                      | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                            | false   |

### Update Candidate {#updatecandidate}

Update an entity in Candidate

| Input             | Comments                                     | Default |
| ----------------- | -------------------------------------------- | ------- |
| Candidate ID      | The ID of the candidate to retrieve          |         |
| First Name        | The first name of the candidate              |         |
| Last Name         | The last name of the candidate               |         |
| Primary Email     | The primary email address of the candidate   |         |
| Country           | The country where the candidate is located   |         |
| Additional Inputs | Additional inputs to be passed to the action |         |
| Connection        |                                              |         |

### Update Job Application {#updatejobapplication}

Update an entity in JobApplication

| Input              | Comments                                     | Default |
| ------------------ | -------------------------------------------- | ------- |
| Job Application ID | The ID of the job application to retrieve    |         |
| Candidate ID       | The ID of the candidate to update            |         |
| Job Requisition ID | The ID of the job requisition to update      |         |
| Additional Inputs  | Additional inputs to be passed to the action |         |
| Connection         |                                              |         |

### Update Job Requisition {#updatejobrequisition}

Update an entity in JobRequisition

| Input              | Comments                                  | Default |
| ------------------ | ----------------------------------------- | ------- |
| Job Requisition ID | The ID of the job requisition to retrieve |         |
| Additional Inputs  | The template fields to update             |         |
| Connection         |                                           |         |

### Update Onboarding Candidate Info {#updateonboardingcandidateinfo}

Update an entity in OnboardingCandidateInfo

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Applicant ID | The ID of the applicant to retrieve |         |
| Connection   |                                     |         |

### Update Record {#updaterecord}

Update an existing record in component

| Input             | Comments                                     | Default |
| ----------------- | -------------------------------------------- | ------- |
| Record Type       | The type of record to create                 |         |
| Record Type ID    | The ID of the record type to retrieve        |         |
| Additional Inputs | Additional inputs to be passed to the action |         |
| Connection        |                                              |         |
