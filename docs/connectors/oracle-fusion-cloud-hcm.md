---
title: Oracle Fusion Cloud HCM (Beta) Connector
sidebar_label: Oracle Fusion Cloud HCM (Beta)
description: Interact with Oracle Fusion Cloud HCM to manage workers, jobs, absences, and HR data.
---

![Oracle Fusion Cloud HCM (Beta)](./assets/oracle-fusion-cloud-hcm.png#connector-icon)
[Oracle Fusion Cloud HCM](https://docs.oracle.com/en/cloud/saas/human-resources/farws/index.html) is a cloud-based human capital management suite that manages the full employee lifecycle, including workers, assignments, departments, jobs, locations, positions, grades, and absences.

Use this component to manage workers, jobs, absences, and other HR data through the Oracle Fusion Cloud HCM REST API.

## API Documentation

This component was built using the [Oracle Fusion Cloud HCM REST API](https://docs.oracle.com/en/cloud/saas/human-resources/farws/rest-endpoints.html) (resource version `11.13.18.05`).

## Connections

### Basic Authentication {#basicauth}

Authenticate using username and password.

To authenticate with Oracle Fusion Cloud HCM using Basic Authentication, an integration user account with REST API access is required. This connection type is suitable for development and testing. For production use, OAuth 2.0 Client Credentials is recommended.

#### Prerequisites

- An Oracle Fusion Cloud HCM instance
- An integration user account with the **Integration Specialist** or **HCM Integration** role granted
- The instance URL (e.g., `https://acme.fa.us2.oraclecloud.com`)

#### Setup Steps

1. Log in to Oracle Fusion Cloud HCM as an administrator
2. Navigate to **Tools** > **Security Console** > **Users**
3. Create a new user account (or identify an existing one) to act as the integration user
4. Assign one of the following roles to the user:
   - **Integration Specialist**
   - **HCM Integration**
5. Confirm the user can authenticate against the REST API by issuing a test request against the `workers/describe` endpoint, as documented in the [Oracle HCM REST API Quick Start](https://docs.oracle.com/en/cloud/saas/human-resources/farws/Quick_Start.html)
6. Record the **Server URL**, **Username**, and **Password** for the integration user

#### Configure the Connection

- For **Server URL**, enter the Oracle HCM Cloud instance URL (e.g., `https://acme.fa.us2.oraclecloud.com`)
- For **Username**, enter the Oracle HCM Cloud username of the integration user
- For **Password**, enter the password for the integration user account

:::warning[Security Note]
Basic Authentication transmits credentials with every request. Use Basic Authentication only for development or testing. For production, configure the **OAuth 2.0 Client Credentials** connection instead.
:::

| Input      | Comments                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------- | ------- |
| Server URL | The Oracle HCM Cloud instance URL.                                                 |         |
| Username   | The Oracle HCM Cloud username with Integration Specialist or HCM Integration Role. |         |
| Password   | The password for the Oracle HCM Cloud user account.                                |         |

### OAuth 2.0 Client Credentials {#oauth2clientcredentials}

Authenticate using OAuth 2.0 Client Credentials via Oracle Identity Domains. Recommended for production use.

To authenticate with Oracle Fusion Cloud HCM using OAuth 2.0 Client Credentials, a confidential application must be registered in Oracle Identity Domains (also known as Oracle Identity Cloud Service / IDCS). This connection type is recommended for production use because it issues short-lived access tokens and does not transmit user credentials on every request.

#### Prerequisites

- An Oracle Fusion Cloud HCM instance
- Administrator access to the associated **Oracle Identity Domain** (IDCS)
- The Oracle HCM Cloud instance URL (e.g., `https://acme.fa.us2.oraclecloud.com`)
- The Identity Domain base URL (e.g., `https://idcs-abc123.identity.oraclecloud.com`)

#### Setup Steps

1. Sign in to the Oracle Cloud Console and open the **Identity Domain** associated with the Oracle HCM Cloud instance
2. Navigate to **Applications** > **Add** > **Confidential Application**
3. On the **Add Confidential Application** page, enter a name (e.g., `Oracle HCM Integration`) and an optional description, then click **Next**
4. Under **Client Configuration**, select **Configure this application as a client now**
5. Under **Allowed Grant Types**, select **Client Credentials**
6. Under **Token Issuance Policy**, configure access to the Oracle HCM Cloud resource:
   - Select **Add Resources**, then add the Oracle HCM Cloud application as the protected resource
   - Add the scope required for HCM REST API access (typically `urn:opc:resource:fa:instanceid=<id>urn:opc:resource:consumer::all` or a similar service-specific scope)
7. Click **Next** through the remaining tabs and click **Finish**
8. Copy the generated **Client ID** and **Client Secret** values (the secret is only shown once)
9. Click **Activate** to enable the application
10. Construct the token URL using the Identity Domain base URL: `https://<identity-domain>.identity.oraclecloud.com/oauth2/v1/token`
11. In Oracle Fusion Cloud HCM, ensure the integration user backing the application is granted the **Integration Specialist** or **HCM Integration** role so that issued tokens can access HCM REST resources

For more information on creating a confidential application, refer to the [Oracle documentation on adding a confidential application](https://docs.oracle.com/en/cloud/paas/identity-cloud/uaids/add-confidential-application.html). For details on the token endpoint, refer to the [OAuth 2.0 token endpoint reference](https://docs.oracle.com/en/cloud/paas/identity-cloud/rest-api/op-oauth2-v1-token-post.html).

#### Configure the Connection

- For **Token URL**, enter the Identity Domain token endpoint (e.g., `https://idcs-abc123.identity.oraclecloud.com/oauth2/v1/token`)
- For **Client ID**, enter the Client ID from the confidential application
- For **Client Secret**, enter the Client Secret from the confidential application
- For **Scopes**, leave the default value `urn:opc:idm:__myscopes__` to grant access to all assigned Oracle HCM REST API resources, or enter a more restrictive scope that matches the resource configured on the confidential application
- For **Server URL**, enter the Oracle HCM Cloud instance URL (e.g., `https://acme.fa.us2.oraclecloud.com`)

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                              | Default                  |
| ------------- | ------------------------------------------------------------------------------------- | ------------------------ |
| Token URL     | The OAuth 2.0 token URL from the Oracle Identity Domain.                              |                          |
| Client ID     | The Client ID from the confidential application in Oracle Identity Domains.           |                          |
| Client Secret | The Client Secret from the confidential application in Oracle Identity Domains.       |                          |
| Scopes        | The OAuth 2.0 scopes. The default grants access to all Oracle HCM REST API resources. | urn:opc:idm:**myscopes** |
| Server URL    | The Oracle HCM Cloud instance URL.                                                    |                          |

## Triggers

### Atom Feed Notifications {#pollchangestrigger}

Checks for new and updated records from a selected Oracle HCM Atom feed on a configured schedule.

| Input      | Comments                                                                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Oracle Fusion Cloud HCM connection to use.                                                                                         |         |
| Feed Name  | The Oracle HCM Atom feed to subscribe to. Additional feeds can be discovered via the Interface Catalog URL on the Oracle HCM instance. |         |
| Page Size  | The maximum number of Atom feed entries to process per trigger invocation. Oracle HCM caps this at 1000.                               | 100     |

### New and Updated Records {#pollrecordstrigger}

Checks for new and updated records in a selected Oracle HCM resource type on a configured schedule.

| Input         | Comments                                                                                                                                                            | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Oracle Fusion Cloud HCM connection to use.                                                                                                                      |         |
| Resource Type | The Oracle HCM data resource to sync. Each trigger instance polls one resource type and emits all records updated since the last run.                               |         |
| Page Size     | The maximum number of records to fetch per API page. Multiple pages are fetched automatically until all updated records are retrieved. Oracle HCM caps this at 500. | 100     |

## Actions

### Create Absence {#createabsence}

Create a new absence entry in Oracle Fusion Cloud HCM.

| Input               | Comments                                                                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Oracle Fusion Cloud HCM connection to use.                                                                                                                       |         |
| Person ID           | The person the absence belongs to (personId).                                                                                                                        |         |
| Absence Type ID     | The identifier of the absence type (absenceTypeId).                                                                                                                  |         |
| Legal Entity ID     | The employer/legal entity the absence is recorded against (legalEntityId).                                                                                           |         |
| Absence Details     | Optional absence fields: includes Start Date, End Date, Duration, Unit of Measure, Absence Reason, Absence Status Code, and Comments.                                |         |
| Start Date          | The absence start date, in YYYY-MM-DD format.                                                                                                                        |         |
| End Date            | The absence end date, in YYYY-MM-DD format.                                                                                                                          |         |
| Duration            | The total duration of the absence, in the specified unit of measure.                                                                                                 |         |
| Unit of Measure     | The unit the duration is expressed in (e.g. DAYS or HOURS).                                                                                                          |         |
| Absence Reason      | The reason for the absence.                                                                                                                                          |         |
| Absence Status Code | The status of the absence entry. Defaults to SUBMITTED on the API.                                                                                                   |         |
| Comments            | Free-text comments about the absence.                                                                                                                                |         |
| Additional Fields   | Any additional request-body fields not covered above, including nested collections (e.g. addresses, attachments). Provided as JSON and merged into the request body. |         |

### Create Location {#createlocation}

Create a new work location in Oracle Fusion Cloud HCM.

| Input                        | Comments                                                                                                                                                             | Default |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The Oracle Fusion Cloud HCM connection to use.                                                                                                                       |         |
| Location Code                | Unique code identifying the location within its set.                                                                                                                 |         |
| Location Name                | The display name of the location shown to users.                                                                                                                     |         |
| Effective Start Date         | The date the location becomes effective, in YYYY-MM-DD format.                                                                                                       |         |
| Effective End Date           | The date the location stops being effective, in YYYY-MM-DD format.                                                                                                   |         |
| Set Code                     | The code of the set the location belongs to.                                                                                                                         |         |
| Set ID                       | The identifier of the set the location belongs to.                                                                                                                   |         |
| Description                  | A description of the location.                                                                                                                                       |         |
| Email Address                | The email address for the location.                                                                                                                                  |         |
| Primary Address              | Street, city, state, postal code, country, address usage type, effective start and end dates, and location address usage ID.                                         |         |
| Street Address               | The first line of the address.                                                                                                                                       |         |
| City                         | The city of the address.                                                                                                                                             |         |
| State/Province               | The state or region of the address.                                                                                                                                  |         |
| Zip/Postal Code              | The postal code of the address.                                                                                                                                      |         |
| Country                      | The country code of the address. Required by Oracle when adding an address.                                                                                          |         |
| Address Usage Type           | The usage type of the address (e.g. MAIN). Required by Oracle when adding an address.                                                                                |         |
| Address Effective Start Date | The date the address becomes effective, in YYYY-MM-DD format.                                                                                                        |         |
| Address Effective End Date   | The date the address stops being effective, in YYYY-MM-DD format.                                                                                                    |         |
| Location Address Usage ID    | The identifier of the location address usage. Required by Oracle when adding an address.                                                                             |         |
| Additional Fields            | Any additional request-body fields not covered above, including nested collections (e.g. addresses, attachments). Provided as JSON and merged into the request body. |         |

### Create Worker {#createworker}

Create a new worker record in Oracle Fusion Cloud HCM.

| Input                         | Comments                                                                                                                                                                                                          | Default |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                    | The Oracle Fusion Cloud HCM connection to use.                                                                                                                                                                    |         |
| Name Type                     | The type of name (e.g. GLOBAL). Required by Oracle when creating a worker name.                                                                                                                                   | GLOBAL  |
| Legislation Code              | The legislation (country) code the name applies to (e.g. US). Required by Oracle when creating a worker.                                                                                                          |         |
| Last Name                     | The worker's last name. Required by Oracle when creating a worker.                                                                                                                                                |         |
| First Name                    | The worker's first name.                                                                                                                                                                                          |         |
| Middle Names                  | The worker's middle name(s).                                                                                                                                                                                      |         |
| Title                         | The worker's title (e.g. Ms., Dr.).                                                                                                                                                                               |         |
| Person Number                 | The business key for the worker. Leave blank to let Oracle auto-generate it.                                                                                                                                      |         |
| Applicant Number              | The applicant number for the worker.                                                                                                                                                                              |         |
| Worker Information            | Biographical details for the worker.                                                                                                                                                                              |         |
| Date of Birth                 | The worker's date of birth, in YYYY-MM-DD format.                                                                                                                                                                 |         |
| Date of Death                 | The worker's date of death, in YYYY-MM-DD format.                                                                                                                                                                 |         |
| Country of Birth              | The country where the worker was born.                                                                                                                                                                            |         |
| Region of Birth               | The region where the worker was born.                                                                                                                                                                             |         |
| Town of Birth                 | The town where the worker was born.                                                                                                                                                                               |         |
| Blood Type                    | The worker's blood type.                                                                                                                                                                                          |         |
| Correspondence Language       | The worker's preferred correspondence language.                                                                                                                                                                   |         |
| Addresses                     | The worker's mailing address(es). Add a row per address.                                                                                                                                                          |         |
| Street Address                | The first line of the worker's address.                                                                                                                                                                           |         |
| Street Address Line 2         | The second line of the worker's address.                                                                                                                                                                          |         |
| City                          | The city of the worker's address.                                                                                                                                                                                 |         |
| State/Province                | The state or region of the worker's address.                                                                                                                                                                      |         |
| Zip/Postal Code               | The postal code of the worker's address.                                                                                                                                                                          |         |
| Country                       | The country code of the worker's address.                                                                                                                                                                         |         |
| Phones                        | The worker's phone number(s). Add a row per phone.                                                                                                                                                                |         |
| Phone Type                    | The type of phone (e.g. W1 for work). Required by Oracle when adding a phone.                                                                                                                                     |         |
| Phone Number                  | The phone number. Required by Oracle when adding a phone.                                                                                                                                                         |         |
| Country Code                  | The country dialing code for the phone.                                                                                                                                                                           |         |
| Area Code                     | The area code for the phone.                                                                                                                                                                                      |         |
| Extension                     | The phone extension.                                                                                                                                                                                              |         |
| Emails                        | The worker's email address(es). Add a row per email.                                                                                                                                                              |         |
| Email Type                    | The type of email (e.g. W1 for work). Required by Oracle when adding an email.                                                                                                                                    |         |
| Email Address                 | The email address. Required by Oracle when adding an email.                                                                                                                                                       |         |
| Is Primary                    | When true, marks this as the worker's primary email.                                                                                                                                                              | false   |
| National Identifiers          | The worker's national identifier(s). Add a row per identifier.                                                                                                                                                    |         |
| National Identifier Type      | The type of national identifier (e.g. SSN). Required by Oracle when adding a national identifier.                                                                                                                 |         |
| National Identifier Number    | The national identifier number. Required by Oracle when adding a national identifier.                                                                                                                             |         |
| Legislation Code              | The legislation (country) code the identifier applies to. Required by Oracle when adding a national identifier.                                                                                                   |         |
| Work Relationships            | The worker's work relationship(s) with a legal employer. Add a row per relationship.                                                                                                                              |         |
| Legal Entity ID               | The legal entity (employer) the worker belongs to. Required to create a worker.                                                                                                                                   |         |
| Start Date                    | The worker's start date, in YYYY-MM-DD format. Required to create a worker.                                                                                                                                       |         |
| Worker Type                   | The worker type. Required to create a worker. Oracle's standard codes are E (Employee), C (Contingent Worker), P (Pending Worker), and N (Nonworker); valid values are defined in the Oracle HCM tenant's lookup. |         |
| Legal Employer Name           | The name of the legal employer the worker is employed by.                                                                                                                                                         |         |
| Worker Number                 | The worker number. Leave blank to let Oracle auto-generate it.                                                                                                                                                    |         |
| Is Primary                    | When true, marks this as the worker's primary work relationship.                                                                                                                                                  | false   |
| Enterprise Seniority Date     | The enterprise seniority date, in YYYY-MM-DD format.                                                                                                                                                              |         |
| Legal Employer Seniority Date | The legal employer seniority date, in YYYY-MM-DD format.                                                                                                                                                          |         |
| Projected Termination Date    | The projected termination date, in YYYY-MM-DD format.                                                                                                                                                             |         |

### Delete Absence {#deleteabsence}

Delete an absence entry from Oracle Fusion Cloud HCM.

| Input            | Comments                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- |
| Connection       | The Oracle Fusion Cloud HCM connection to use.                                   |         |
| Absence Entry ID | The unique numeric identifier for the Oracle HCM absence entry (AbsenceEntryId). |         |

### Delete Location {#deletelocation}

Delete a work location by Location ID from Oracle Fusion Cloud HCM.

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| Connection  | The Oracle Fusion Cloud HCM connection to use.                          |         |
| Location ID | The unique numeric identifier for the Oracle HCM location (LocationId). |         |

### Get Absence {#getabsence}

Retrieve a single absence entry by Absence Entry ID from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                               | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                         |         |
| Absence Entry ID       | The unique numeric identifier for the Oracle HCM absence entry (AbsenceEntryId).                       |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields. | false   |

### Get Assignment {#getassignment}

Retrieve a single worker assignment by Assignment ID from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                                                                        | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                                                  |         |
| Person ID              | The unique numeric identifier for the Oracle HCM worker (PersonId).                                                                             |         |
| Assignment ID          | The unique numeric identifier for the Oracle HCM assignment (AssignmentId).                                                                     |         |
| Expand                 | A comma-separated list of sub-resources to expand inline (e.g., assignments,phones,addresses). Use 'all' to expand all available sub-resources. |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                                          | false   |

### Get Department {#getdepartment}

Retrieve a single department by Department ID from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                               | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                         |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                   |         |
| Department ID          | The unique numeric identifier for the Oracle HCM department (OrganizationId).                          |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields. | false   |

### Get Grade {#getgrade}

Retrieve a single compensation grade by Grade ID from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                               | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                         |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                   |         |
| Grade ID               | The unique numeric identifier for the Oracle HCM grade (GradeId).                                      |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields. | false   |

### Get Job {#getjob}

Retrieve a single job definition by Job ID from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                               | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                         |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                   |         |
| Job ID                 | The unique numeric identifier for the Oracle HCM job (JobId).                                          |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields. | false   |

### Get Location {#getlocation}

Retrieve a single work location by Location ID from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                               | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                         |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                   |         |
| Location ID            | The unique numeric identifier for the Oracle HCM location (LocationId).                                |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields. | false   |

### Get Position {#getposition}

Retrieve a single position by Position ID from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                               | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                         |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                   |         |
| Position ID            | The unique numeric identifier for the Oracle HCM position (PositionId).                                |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields. | false   |

### Get Public Worker {#getpublicworker}

Retrieve a single worker by Person ID from the read-only Public Workers resource in Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                                                                        | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                                                  |         |
| Person ID              | The unique numeric identifier for the Oracle HCM worker (PersonId).                                                                             |         |
| Expand                 | A comma-separated list of sub-resources to expand inline (e.g., assignments,phones,addresses). Use 'all' to expand all available sub-resources. |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                                          | false   |

### Get Worker {#getworker}

Retrieve a single worker by Person ID from the read/write Workers resource in Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                                                                        | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                                                  |         |
| Person ID              | The unique numeric identifier for the Oracle HCM worker (PersonId).                                                                             |         |
| Expand                 | A comma-separated list of sub-resources to expand inline (e.g., assignments,phones,addresses). Use 'all' to expand all available sub-resources. |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                                          | false   |

### List Absences {#listabsences}

Retrieve a paginated list of absence entries from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                                                   | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                             |         |
| Fetch All              | When true, retrieves every page of results and ignores the pagination offset and limit. When false, returns a single page. | false   |
| Pagination             | Offset and limit controls for paging through results.                                                                      |         |
| Offset                 | The number of records to skip before returning results.                                                                    |         |
| Limit                  | The maximum number of records to return per request. Oracle HCM default is 25.                                             |         |
| Person ID              | Filter absences by Person ID. Omit to retrieve absences across all workers.                                                |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                     | false   |

### List Assignments {#listassignments}

Retrieve a paginated list of worker assignments. Assignments contain job, department, location, manager, and employment type details.

| Input                  | Comments                                                                                                                                        | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                                                  |         |
| Person ID              | The unique numeric identifier for the Oracle HCM worker (PersonId).                                                                             |         |
| Fetch All              | When true, retrieves every page of results and ignores the pagination offset and limit. When false, returns a single page.                      | false   |
| Pagination             | Offset and limit controls for paging through results.                                                                                           |         |
| Offset                 | The number of records to skip before returning results.                                                                                         |         |
| Limit                  | The maximum number of records to return per request. Oracle HCM default is 25.                                                                  |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                                                            |         |
| Expand                 | A comma-separated list of sub-resources to expand inline (e.g., assignments,phones,addresses). Use 'all' to expand all available sub-resources. |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                                          | false   |

### List Departments {#listdepartments}

Retrieve a paginated list of departments from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                                                   | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                             |         |
| Fetch All              | When true, retrieves every page of results and ignores the pagination offset and limit. When false, returns a single page. | false   |
| Pagination             | Offset and limit controls for paging through results.                                                                      |         |
| Offset                 | The number of records to skip before returning results.                                                                    |         |
| Limit                  | The maximum number of records to return per request. Oracle HCM default is 25.                                             |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                                       |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                     | false   |

### List Grades {#listgrades}

Retrieve a paginated list of compensation grades from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                                                   | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                             |         |
| Fetch All              | When true, retrieves every page of results and ignores the pagination offset and limit. When false, returns a single page. | false   |
| Pagination             | Offset and limit controls for paging through results.                                                                      |         |
| Offset                 | The number of records to skip before returning results.                                                                    |         |
| Limit                  | The maximum number of records to return per request. Oracle HCM default is 25.                                             |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                                       |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                     | false   |

### List Jobs {#listjobs}

Retrieve a paginated list of job definitions from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                                                   | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                             |         |
| Fetch All              | When true, retrieves every page of results and ignores the pagination offset and limit. When false, returns a single page. | false   |
| Pagination             | Offset and limit controls for paging through results.                                                                      |         |
| Offset                 | The number of records to skip before returning results.                                                                    |         |
| Limit                  | The maximum number of records to return per request. Oracle HCM default is 25.                                             |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                                       |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                     | false   |

### List Locations {#listlocations}

Retrieve a paginated list of work locations from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                                                   | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                             |         |
| Fetch All              | When true, retrieves every page of results and ignores the pagination offset and limit. When false, returns a single page. | false   |
| Pagination             | Offset and limit controls for paging through results.                                                                      |         |
| Offset                 | The number of records to skip before returning results.                                                                    |         |
| Limit                  | The maximum number of records to return per request. Oracle HCM default is 25.                                             |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                                       |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                     | false   |

### List Positions {#listpositions}

Retrieve a paginated list of approved headcount positions from Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                                                   | Default |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                             |         |
| Fetch All              | When true, retrieves every page of results and ignores the pagination offset and limit. When false, returns a single page. | false   |
| Pagination             | Offset and limit controls for paging through results.                                                                      |         |
| Offset                 | The number of records to skip before returning results.                                                                    |         |
| Limit                  | The maximum number of records to return per request. Oracle HCM default is 25.                                             |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                                       |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                     | false   |

### List Public Workers {#listpublicworkers}

Retrieve a paginated list of workers from the read-only Public Workers resource in Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                                                                        | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                                                  |         |
| Fetch All              | When true, retrieves every page of results and ignores the pagination offset and limit. When false, returns a single page.                      | false   |
| Pagination             | Offset and limit controls for paging through results.                                                                                           |         |
| Offset                 | The number of records to skip before returning results.                                                                                         |         |
| Limit                  | The maximum number of records to return per request. Oracle HCM default is 25.                                                                  |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                                                            |         |
| Expand                 | A comma-separated list of sub-resources to expand inline (e.g., assignments,phones,addresses). Use 'all' to expand all available sub-resources. |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                                          | false   |

### List Workers {#listworkers}

Retrieve a paginated list of workers from the read/write Workers resource in Oracle Fusion Cloud HCM.

| Input                  | Comments                                                                                                                                        | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Oracle Fusion Cloud HCM connection to use.                                                                                                  |         |
| Fetch All              | When true, retrieves every page of results and ignores the pagination offset and limit. When false, returns a single page.                      | false   |
| Pagination             | Offset and limit controls for paging through results.                                                                                           |         |
| Offset                 | The number of records to skip before returning results.                                                                                         |         |
| Limit                  | The maximum number of records to return per request. Oracle HCM default is 25.                                                                  |         |
| Effective Date         | Filter results by effective date in YYYY-MM-DD format. Defaults to today if omitted.                                                            |         |
| Expand                 | A comma-separated list of sub-resources to expand inline (e.g., assignments,phones,addresses). Use 'all' to expand all available sub-resources. |         |
| Include Metadata Links | When true, includes the metadata links (_links) in the response. When false, returns only data fields.                                          | false   |

### Raw Request {#rawrequest}

Send a raw HTTP request to Oracle Fusion Cloud HCM REST API.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Oracle Fusion Cloud HCM connection to use.                                                                                                                                                   |         |
| URL                     | Input the path only (e.g., /publicWorkers). The base URL (https://{serverUrl}/hcmRestApi/resources/11.13.18.05) is already included.                                                             |         |
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

### Update Absence {#updateabsence}

Update an existing absence entry in Oracle Fusion Cloud HCM.

| Input               | Comments                                                                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Oracle Fusion Cloud HCM connection to use.                                                                                                                       |         |
| Absence Entry ID    | The unique numeric identifier for the Oracle HCM absence entry (AbsenceEntryId).                                                                                     |         |
| Person ID           | The person the absence belongs to (personId).                                                                                                                        |         |
| Absence Type ID     | The identifier of the absence type (absenceTypeId).                                                                                                                  |         |
| Legal Entity ID     | The employer/legal entity the absence is recorded against (legalEntityId).                                                                                           |         |
| Absence Details     | Optional absence fields: includes Start Date, End Date, Duration, Unit of Measure, Absence Reason, Absence Status Code, and Comments.                                |         |
| Start Date          | The absence start date, in YYYY-MM-DD format.                                                                                                                        |         |
| End Date            | The absence end date, in YYYY-MM-DD format.                                                                                                                          |         |
| Duration            | The total duration of the absence, in the specified unit of measure.                                                                                                 |         |
| Unit of Measure     | The unit the duration is expressed in (e.g. DAYS or HOURS).                                                                                                          |         |
| Absence Reason      | The reason for the absence.                                                                                                                                          |         |
| Absence Status Code | The status of the absence entry. Defaults to SUBMITTED on the API.                                                                                                   |         |
| Comments            | Free-text comments about the absence.                                                                                                                                |         |
| Additional Fields   | Any additional request-body fields not covered above, including nested collections (e.g. addresses, attachments). Provided as JSON and merged into the request body. |         |

### Update Location {#updatelocation}

Update an existing work location in Oracle Fusion Cloud HCM.

| Input                        | Comments                                                                                                                                                             | Default |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The Oracle Fusion Cloud HCM connection to use.                                                                                                                       |         |
| Location ID                  | The unique numeric identifier for the Oracle HCM location (LocationId).                                                                                              |         |
| Location Code                | Unique code identifying the location within its set.                                                                                                                 |         |
| Location Name                | The display name of the location shown to users.                                                                                                                     |         |
| Effective Start Date         | The date the location becomes effective, in YYYY-MM-DD format.                                                                                                       |         |
| Effective End Date           | The date the location stops being effective, in YYYY-MM-DD format.                                                                                                   |         |
| Set Code                     | The code of the set the location belongs to.                                                                                                                         |         |
| Set ID                       | The identifier of the set the location belongs to.                                                                                                                   |         |
| Description                  | A description of the location.                                                                                                                                       |         |
| Email Address                | The email address for the location.                                                                                                                                  |         |
| Primary Address              | Street, city, state, postal code, country, address usage type, effective start and end dates, and location address usage ID.                                         |         |
| Street Address               | The first line of the address.                                                                                                                                       |         |
| City                         | The city of the address.                                                                                                                                             |         |
| State/Province               | The state or region of the address.                                                                                                                                  |         |
| Zip/Postal Code              | The postal code of the address.                                                                                                                                      |         |
| Country                      | The country code of the address. Required by Oracle when adding an address.                                                                                          |         |
| Address Usage Type           | The usage type of the address (e.g. MAIN). Required by Oracle when adding an address.                                                                                |         |
| Address Effective Start Date | The date the address becomes effective, in YYYY-MM-DD format.                                                                                                        |         |
| Address Effective End Date   | The date the address stops being effective, in YYYY-MM-DD format.                                                                                                    |         |
| Location Address Usage ID    | The identifier of the location address usage. Required by Oracle when adding an address.                                                                             |         |
| Additional Fields            | Any additional request-body fields not covered above, including nested collections (e.g. addresses, attachments). Provided as JSON and merged into the request body. |         |

### Update Worker {#updateworker}

Update an existing worker record in Oracle Fusion Cloud HCM.

| Input                         | Comments                                                                                                                                                                                                          | Default |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                    | The Oracle Fusion Cloud HCM connection to use.                                                                                                                                                                    |         |
| Person ID                     | The unique numeric identifier for the Oracle HCM worker (PersonId).                                                                                                                                               |         |
| Name Type                     | The type of name (e.g. GLOBAL). Required by Oracle when creating a worker name.                                                                                                                                   | GLOBAL  |
| Legislation Code              | The legislation (country) code the name applies to (e.g. US). Required by Oracle when creating a worker.                                                                                                          |         |
| First Name                    | The worker's first name.                                                                                                                                                                                          |         |
| Last Name                     | The worker's last name. Required by Oracle when creating a worker.                                                                                                                                                |         |
| Middle Names                  | The worker's middle name(s).                                                                                                                                                                                      |         |
| Title                         | The worker's title (e.g. Ms., Dr.).                                                                                                                                                                               |         |
| Person Number                 | The business key for the worker. Leave blank to let Oracle auto-generate it.                                                                                                                                      |         |
| Applicant Number              | The applicant number for the worker.                                                                                                                                                                              |         |
| Worker Information            | Biographical details for the worker.                                                                                                                                                                              |         |
| Date of Birth                 | The worker's date of birth, in YYYY-MM-DD format.                                                                                                                                                                 |         |
| Date of Death                 | The worker's date of death, in YYYY-MM-DD format.                                                                                                                                                                 |         |
| Country of Birth              | The country where the worker was born.                                                                                                                                                                            |         |
| Region of Birth               | The region where the worker was born.                                                                                                                                                                             |         |
| Town of Birth                 | The town where the worker was born.                                                                                                                                                                               |         |
| Blood Type                    | The worker's blood type.                                                                                                                                                                                          |         |
| Correspondence Language       | The worker's preferred correspondence language.                                                                                                                                                                   |         |
| Addresses                     | The worker's mailing address(es). Add a row per address.                                                                                                                                                          |         |
| Street Address                | The first line of the worker's address.                                                                                                                                                                           |         |
| Street Address Line 2         | The second line of the worker's address.                                                                                                                                                                          |         |
| City                          | The city of the worker's address.                                                                                                                                                                                 |         |
| State/Province                | The state or region of the worker's address.                                                                                                                                                                      |         |
| Zip/Postal Code               | The postal code of the worker's address.                                                                                                                                                                          |         |
| Country                       | The country code of the worker's address.                                                                                                                                                                         |         |
| Phones                        | The worker's phone number(s). Add a row per phone.                                                                                                                                                                |         |
| Phone Type                    | The type of phone (e.g. W1 for work). Required by Oracle when adding a phone.                                                                                                                                     |         |
| Phone Number                  | The phone number. Required by Oracle when adding a phone.                                                                                                                                                         |         |
| Country Code                  | The country dialing code for the phone.                                                                                                                                                                           |         |
| Area Code                     | The area code for the phone.                                                                                                                                                                                      |         |
| Extension                     | The phone extension.                                                                                                                                                                                              |         |
| Emails                        | The worker's email address(es). Add a row per email.                                                                                                                                                              |         |
| Email Type                    | The type of email (e.g. W1 for work). Required by Oracle when adding an email.                                                                                                                                    |         |
| Email Address                 | The email address. Required by Oracle when adding an email.                                                                                                                                                       |         |
| Is Primary                    | When true, marks this as the worker's primary email.                                                                                                                                                              | false   |
| National Identifiers          | The worker's national identifier(s). Add a row per identifier.                                                                                                                                                    |         |
| National Identifier Type      | The type of national identifier (e.g. SSN). Required by Oracle when adding a national identifier.                                                                                                                 |         |
| National Identifier Number    | The national identifier number. Required by Oracle when adding a national identifier.                                                                                                                             |         |
| Legislation Code              | The legislation (country) code the identifier applies to. Required by Oracle when adding a national identifier.                                                                                                   |         |
| Work Relationships            | The worker's work relationship(s) with a legal employer. Add a row per relationship.                                                                                                                              |         |
| Legal Entity ID               | The legal entity (employer) the worker belongs to. Required to create a worker.                                                                                                                                   |         |
| Start Date                    | The worker's start date, in YYYY-MM-DD format. Required to create a worker.                                                                                                                                       |         |
| Worker Type                   | The worker type. Required to create a worker. Oracle's standard codes are E (Employee), C (Contingent Worker), P (Pending Worker), and N (Nonworker); valid values are defined in the Oracle HCM tenant's lookup. |         |
| Legal Employer Name           | The name of the legal employer the worker is employed by.                                                                                                                                                         |         |
| Worker Number                 | The worker number. Leave blank to let Oracle auto-generate it.                                                                                                                                                    |         |
| Is Primary                    | When true, marks this as the worker's primary work relationship.                                                                                                                                                  | false   |
| Enterprise Seniority Date     | The enterprise seniority date, in YYYY-MM-DD format.                                                                                                                                                              |         |
| Legal Employer Seniority Date | The legal employer seniority date, in YYYY-MM-DD format.                                                                                                                                                          |         |
| Projected Termination Date    | The projected termination date, in YYYY-MM-DD format.                                                                                                                                                             |         |
