---
title: Rippling Connector
sidebar_label: Rippling
description: Rippling makes it easy to manage your company's Payroll, Benefits, HR, and IT—all in one, modern platform.
---

![Rippling](./assets/rippling.png#connector-icon)
Rippling makes it easy to manage your company's Payroll, Benefits, HR, and IT—all in one, modern platform.

## Connections

### Bearer API Key {#bearerapikey}

If using Rippling's API to access endpoints on behalf of your own company, use your API key.

| Input   | Comments                                                                                                                                                                                               | Default |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| API Key | API key from the Rippling admin console. Navigate to <strong>Admin > Settings > API</strong> in Rippling to generate your API key. [Learn more](https://developer.rippling.com/documentation/rest-api) |         |

### OAuth 2.0 {#authorizationcode}

Authenticate using OAuth 2.0 Authorization Code flow for partner apps requiring user delegation.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                                                                                                                                                | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Authorization URL | The OAuth 2.0 authorization URL for your Rippling app. Replace {AppName} with your actual app name. [Learn more](https://developer.rippling.com/documentation/rest-api) |         |
| Scopes            | Space-separated list of OAuth permission scopes. Scopes are configured in your Rippling app settings and determine which resources your integration can access.         |         |
| Client ID         | The OAuth 2.0 client ID for your Rippling partner app. Found in your app configuration in the Rippling admin console.                                                   |         |
| Client Secret     | The OAuth 2.0 client secret for your Rippling partner app. Keep this value secure and do not share it.                                                                  |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for new and updated records in Rippling on a configured schedule.

| Input                | Comments                                                  | Default |
| -------------------- | --------------------------------------------------------- | ------- |
| Connection           | The Rippling connection to use.                           |         |
| Resource Type        | The type of Rippling resource to poll for changes.        | workers |
| Show New Records     | When true, includes newly created records in the results. | true    |
| Show Updated Records | When true, includes updated records in the results.       | true    |

## Actions

### Create Business Partner Group (V2) {#createbusinesspartnergroup}

Create a new business partner group.

| Input                       | Comments                                                              | Default |
| --------------------------- | --------------------------------------------------------------------- | ------- |
| Connection                  | The Rippling connection to use.                                       |         |
| Name                        | The name of the business partner group.                               |         |
| Default Business Partner ID | The unique identifier of the default business partner for this group. |         |

### Create Business Partner (V2) {#createbusinesspartner}

Create a new business partner.

| Input                     | Comments                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------- | ------- |
| Connection                | The Rippling connection to use.                                        |         |
| Worker ID                 | The ID of the worker to associate with the business partner.           |         |
| Business Partner Group ID | The unique identifier of the business partner group to associate with. |         |

### Create Custom Object (V2) {#createcustomobject}

Create a new custom object.

| Input       | Comments                            | Default |
| ----------- | ----------------------------------- | ------- |
| Connection  | The Rippling connection to use.     |         |
| Name        | The name of the custom object.      |         |
| Description | A description of the custom object. |         |
| Category    | The category for the custom object. |         |

### Create Object Category (V2) {#createobjectcategory}

Create a new object category.

| Input       | Comments                              | Default |
| ----------- | ------------------------------------- | ------- |
| Connection  | The Rippling connection to use.       |         |
| Name        | The name of the object category.      |         |
| Description | A description of the object category. |         |

### Delete Business Partner Group (V2) {#deletebusinesspartnergroup}

Delete a business partner group by ID.

| Input                     | Comments                                                    | Default |
| ------------------------- | ----------------------------------------------------------- | ------- |
| Connection                | The Rippling connection to use.                             |         |
| Business Partner Group ID | Unique identifier for the business partner group to delete. |         |

### Delete Business Partner (V2) {#deletebusinesspartner}

Delete a business partner by ID.

| Input               | Comments                                              | Default |
| ------------------- | ----------------------------------------------------- | ------- |
| Connection          | The Rippling connection to use.                       |         |
| Business Partner ID | Unique identifier for the business partner to delete. |         |

### Delete Custom Object (V2) {#deletecustomobject}

Delete a custom object by API name.

| Input                  | Comments                                     | Default |
| ---------------------- | -------------------------------------------- | ------- |
| Connection             | The Rippling connection to use.              |         |
| Custom Object API Name | The API name of the custom object to delete. |         |

### Delete Groups Group Id (V1) {#deletegroupsgroupid}

DELETE Group.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                  |         |
| Group ID   | The unique identifier for the group in Rippling. |         |

### Delete Object Category (V2) {#deleteobjectcategory}

Delete an object category by ID.

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Connection         | The Rippling connection to use.                      |         |
| Object Category ID | Unique identifier for the object category to delete. |         |

### Get Business Partner Group (V2) {#getbusinesspartnergroup}

Retrieve a specific business partner group by ID.

| Input                     | Comments                                                    | Default |
| ------------------------- | ----------------------------------------------------------- | ------- |
| Connection                | The Rippling connection to use.                             |         |
| Business Partner Group ID | The unique identifier for the business partner group.       |         |
| Expand                    | Comma-separated fields to expand: default_business_partner. |         |

### Get Business Partner (V2) {#getbusinesspartner}

Retrieve a specific business partner by ID.

| Input               | Comments                                                                        | Default |
| ------------------- | ------------------------------------------------------------------------------- | ------- |
| Connection          | The Rippling connection to use.                                                 |         |
| Business Partner ID | The unique identifier for the business partner.                                 |         |
| Expand              | Comma-separated fields to expand: business_partner_group, worker, client_group. |         |

### Get Companies (V1) {#getcompanies}

GET Current Company.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Rippling connection to use. |         |

### Get Company Activity (V1) {#getcompanyactivity}

GET Company Activity.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                                         |         |
| Start Date | ISO 8601 timestamp to list activity after (inclusive).                  |         |
| End Date   | ISO 8601 timestamp to list activity before (inclusive).                 |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Next       | Pagination cursor token for retrieving the next page of results.        |         |
| Limit      | Maximum number of results per page. Maximum: 1000. Default: 1000.       |         |

### Get Custom Fields (V1) {#getcustomfields}

GET Custom Fields.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                                         |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Limit      | Sets a limit on the number of returned values.                          |         |
| Offset     | Number of results to skip before returning values.                      |         |

### Get Custom Object (V2) {#getcustomobject}

Retrieve a specific custom object by API name.

| Input                  | Comments                           | Default |
| ---------------------- | ---------------------------------- | ------- |
| Connection             | The Rippling connection to use.    |         |
| Custom Object API Name | The API name of the custom object. |         |

### Get Departments (V1) {#getdepartments}

GET Departments.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                                         |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Limit      | Sets a limit on the number of returned values.                          |         |
| Offset     | Number of results to skip before returning values.                      |         |

### Get Department (V2) {#getdepartment}

Retrieve a specific department by ID.

| Input         | Comments                                                        | Default |
| ------------- | --------------------------------------------------------------- | ------- |
| Connection    | The Rippling connection to use.                                 |         |
| Department ID | The unique identifier for the department.                       |         |
| Expand        | Comma-separated fields to expand: parent, department_hierarchy. |         |

### Get Employees Employee Id (V1) {#getemployeesemployeeid}

GET Employee.

| Input       | Comments                                            | Default |
| ----------- | --------------------------------------------------- | ------- |
| Connection  | The Rippling connection to use.                     |         |
| Employee ID | The unique identifier for the employee in Rippling. |         |

### Get Employees Include Terminated (V1) {#getemployeesincludeterminated}

GET Employees (Including Terminated).

| Input      | Comments                                                                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                                                                      |         |
| EIN        | Employer Identification Number (EIN), also known as the Federal Employer Identification Number or Federal Tax Identification Number. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                              | false   |
| Limit      | Sets a limit on the number of returned values.                                                                                       |         |
| Offset     | Number of results to skip before returning values.                                                                                   |         |

### Get Employees (V1) {#getemployees}

GET Employees.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                                         |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Limit      | Sets a limit on the number of returned values.                          |         |
| Offset     | Number of results to skip before returning values.                      |         |

### Get Employment Type (V2) {#getemploymenttype}

Retrieve a specific employment type by ID.

| Input              | Comments                                       | Default |
| ------------------ | ---------------------------------------------- | ------- |
| Connection         | The Rippling connection to use.                |         |
| Employment Type ID | The unique identifier for the employment type. |         |

### Get Groups (V1) {#getgroups}

GET Groups.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Rippling connection to use. |         |

### Get Job Function (V2) {#getjobfunction}

Retrieve a specific job function by ID.

| Input           | Comments                                    | Default |
| --------------- | ------------------------------------------- | ------- |
| Connection      | The Rippling connection to use.             |         |
| Job Function ID | The unique identifier for the job function. |         |

### Get Leave Requests (V1) {#getleaverequests}

GET Leave Requests.

| Input        | Comments                                                                       | Default |
| ------------ | ------------------------------------------------------------------------------ | ------- |
| Connection   | The Rippling connection to use.                                                |         |
| ID           | The unique identifier of the leave request.                                    |         |
| Role         | The role associated with the leave request.                                    |         |
| Requested By | The identifier or email of the person who requested the leave.                 |         |
| Status       | The status of the leave request.                                               |         |
| Start Date   | The start date of the leave in YYYY-MM-DD format.                              |         |
| End Date     | The end date of the leave in YYYY-MM-DD format.                                |         |
| Leave Policy | The leave policy identifier or name.                                           |         |
| Processed By | The identifier or email of the person who processed the leave request.         |         |
| From         | Filter start date to capture leave requests that overlap with this date range. |         |
| To           | Filter end date to capture leave requests that overlap with this date range.   |         |

### Get Levels (V1) {#getlevels}

GET Levels.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                                         |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Limit      | Sets a limit on the number of returned values.                          |         |
| Offset     | Number of results to skip before returning values.                      |         |

### Get Me (V1) {#getme}

GET Current User.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Rippling connection to use. |         |

### Get Object Category (V2) {#getobjectcategory}

Retrieve a specific object category by ID.

| Input              | Comments                                       | Default |
| ------------------ | ---------------------------------------------- | ------- |
| Connection         | The Rippling connection to use.                |         |
| Object Category ID | The unique identifier for the object category. |         |

### Get Saml Idp Metadata (V1) {#getsamlidpmetadata}

GET SAML Metadata.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Rippling connection to use. |         |

### Get SSO Me (V2) {#getssome}

Retrieve SSO information of the current user.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection | The Rippling connection to use.            |         |
| Expand     | Comma-separated fields to expand: company. |         |

### Get Supergroup (V2) {#getsupergroup}

Retrieve a specific supergroup by ID.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Connection    | The Rippling connection to use.           |         |
| Supergroup ID | The unique identifier for the supergroup. |         |

### Get Teams (V1) {#getteams}

GET Teams.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                                         |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Limit      | Sets a limit on the number of returned values.                          |         |
| Offset     | Number of results to skip before returning values.                      |         |

### Get Team (V2) {#getteam}

Retrieve a specific team by ID.

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Rippling connection to use.           |         |
| Team ID    | The unique identifier for the team.       |         |
| Expand     | Comma-separated fields to expand: parent. |         |

### Get User (V2) {#getuser}

Retrieve a specific user by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Rippling connection to use.     |         |
| User ID    | The unique identifier for the user. |         |

### Get Worker (V2) {#getworker}

Retrieve a specific worker by ID.

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                                                                                                                           |         |
| Worker ID  | The unique identifier for the worker.                                                                                                                     |         |
| Expand     | Comma-separated fields to expand: user, manager, legal_entity, employment_type, compensation, department, teams, level, custom_fields, business_partners. |         |

### Get Work Locations (V1) {#getworklocations}

GET Work Locations.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                                         |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Limit      | Sets a limit on the number of returned values.                          |         |
| Offset     | Number of results to skip before returning values.                      |         |

### Get Work Location (V2) {#getworklocation}

Retrieve a specific work location by ID.

| Input            | Comments                                     | Default |
| ---------------- | -------------------------------------------- | ------- |
| Connection       | The Rippling connection to use.              |         |
| Work Location ID | The unique identifier for the work location. |         |

### List Business Partner Groups (V2) {#listbusinesspartnergroups}

Retrieve a list of business partner groups.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Expand     | Comma-separated fields to expand: default_business_partner.                    |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### List Business Partners (V2) {#listbusinesspartners}

Retrieve a list of business partners.

| Input      | Comments                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                                                          |         |
| Filter     | Filterable fields: worker_id, business_partner_group_id. Example: worker_id eq 'abc123'. |         |
| Expand     | Comma-separated fields to expand: business_partner_group, worker, client_group.          |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                  | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.                   |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response.           |         |

### List Companies (V2) {#listcompanies}

Retrieve a list of companies.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Expand     | Comma-separated fields to expand: parent_legal_entity, legal_entities.         |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### List Custom Fields (V2) {#listcustomfields}

Retrieve a list of custom fields.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### List Custom Objects (V2) {#listcustomobjects}

Retrieve a list of custom objects.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### List Departments (V2) {#listdepartments}

Retrieve a list of departments.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Expand     | Comma-separated fields to expand: parent, department_hierarchy.                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### List Employment Types (V2) {#listemploymenttypes}

Retrieve a list of employment types.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### List Entitlements (V2) {#listentitlements}

Retrieve a list of entitlements.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### List Job Functions (V2) {#listjobfunctions}

Retrieve a list of job functions.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### List Object Categories (V2) {#listobjectcategories}

Retrieve a list of object categories.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### List Supergroups (V2) {#listsupergroups}

Retrieve supergroups matching the input parameters.

| Input      | Comments                                                                        | Default |
| ---------- | ------------------------------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                                                 |         |
| Filter     | Filterable fields: app_owner_id, group_type. Example: app_owner_id eq 'abc123'. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.         | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.          |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response.  |         |

### List Teams (V2) {#listteams}

Retrieve a list of teams.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Expand     | Comma-separated fields to expand: parent.                                      |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### List Users (V2) {#listusers}

Retrieve a list of users.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### List Workers (V2) {#listworkers}

Retrieve a list of workers with filtering, expansion, and sorting support.

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                                                                                                                           |         |
| Filter     | Filter expression. Filterable fields: status, work_email, user_id, created_at, updated_at. Example: status eq 'ACTIVE'.                                   |         |
| Expand     | Comma-separated fields to expand: user, manager, legal_entity, employment_type, compensation, department, teams, level, custom_fields, business_partners. |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.                                                                                   | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.                                                                                    |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response.                                                                            |         |

### List Work Locations (V2) {#listworklocations}

Retrieve a list of work locations.

| Input      | Comments                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination.        | false   |
| Order By   | Sortable fields: id, created_at, updated_at. Example: created_at desc.         |         |
| Cursor     | Pagination cursor token from the next_link field in the previous API response. |         |

### Patch Groups Group Id (V1) {#patchgroupsgroupid}

PATCH Group.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                  |         |
| Group ID   | The unique identifier for the group in Rippling. |         |
| Name       | The name of the Group.                           |         |
| Spoke ID   | The external identifier of the Group.            |         |
| Users      | The array of users within the Group.             |         |
| Version    | The version identifier of the group.             |         |

### Post Ats Candidates Push Candidate (V1) {#postatscandidatespushcandidate}

POST New Candidate.

| Input           | Comments                                                                                              | Default |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Rippling connection to use.                                                                       |         |
| Name            | The candidate's full name.                                                                            |         |
| Email           | The candidate's email address.                                                                        |         |
| Phone Number    | The candidate's phone number.                                                                         |         |
| Job Title       | The job title for the candidate's position.                                                           |         |
| Candidate ID    | The unique identifier of the candidate from your ATS (Applicant Tracking System).                     |         |
| Start Date      | The expected start date for the candidate in YYYY-MM-DD format.                                       |         |
| Department      | The name of the department the candidate will join.                                                   |         |
| Salary Unit     | The frequency at which the candidate will be paid.                                                    |         |
| Salary Per Unit | The monetary amount the candidate will be paid per salary unit.                                       |         |
| Signing Bonus   | The one-time signing bonus amount given to the candidate.                                             |         |
| Equity Shares   | The number of equity shares to be granted to the candidate.                                           |         |
| Currency        | The currency code in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format (e.g., USD, EUR, GBP). |         |
| Employment Type | The type of employment for the candidate.                                                             |         |
| Attachments     | URLs or identifiers for attachments related to the candidate.                                         |         |

### Post Groups (V1) {#postgroups}

POST Groups.

| Input      | Comments                                                                 | Default |
| ---------- | ------------------------------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                                          |         |
| Name       | The name of the group.                                                   |         |
| Spoke ID   | The external unique identifier for the group entity in your application. |         |
| Users      | An array of Rippling user IDs to include in the group.                   |         |

### Post Mark App Installed (V1) {#postmarkappinstalled}

Mark App Installed.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Rippling connection to use. |         |

### Process Leave Requests (V1) {#processleaverequests}

POST Process Leave Request.

| Input      | Comments                                                    | Default |
| ---------- | ----------------------------------------------------------- | ------- |
| Connection | The Rippling connection to use.                             |         |
| ID         | The unique identifier of the leave request to be processed. |         |
| Action     | The action to take on the leave request.                    |         |

### Put Groups Group Id (V1) {#putgroupsgroupid}

PUT Group.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection | The Rippling connection to use.                  |         |
| Group ID   | The unique identifier for the group in Rippling. |         |
| Name       | The name of the Group.                           |         |
| Spoke ID   | The external identifier of the Group.            |         |
| Users      | The array of users within the Group.             |         |
| Version    | The version identifier of the group.             |         |

### Raw Request (V1) {#rawrequest}

Send raw HTTP request to Rippling API.

| Input                   | Comments                                                                                                                                                                                                                                                  | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Rippling connection to use.                                                                                                                                                                                                                           |         |
| URL                     | Input the path only (/companies/current), The base URL is already included (https://api.rippling.com/platform/api). For example, to connect to https://api.rippling.com/platform/api/companies/current, only /companies/current is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                   |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                 |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                      |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                          |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                    |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                       |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                               |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                  | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                       |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                       | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                          | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                       | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                             | false   |

### Raw Request (V2) {#rawrequestv2}

Send raw HTTP request to Rippling API.

| Input                   | Comments                                                                                                                                                                                                    | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Rippling connection to use.                                                                                                                                                                             |         |
| URL                     | Input the path only (/workers), The base URL is already included (https://rest.ripplingapis.com). For example, to connect to https://rest.ripplingapis.com/workers, only /workers is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                     |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                   |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                        |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                            |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                      |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                         |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                 |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                    | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                         |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                               | false   |

### Update Custom Object (V2) {#updatecustomobject}

Update an existing custom object.

| Input                  | Comments                                     | Default |
| ---------------------- | -------------------------------------------- | ------- |
| Connection             | The Rippling connection to use.              |         |
| Custom Object API Name | The API name of the custom object to update. |         |
| Name                   | The new name for the custom object.          |         |
| Description            | The new description for the custom object.   |         |
| Category               | The new category for the custom object.      |         |
| Plural Label           | The plural label for the custom object.      |         |
| Owner Role             | The owner role for the custom object.        |         |

### Update Object Category (V2) {#updateobjectcategory}

Update an existing object category.

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Connection         | The Rippling connection to use.                      |         |
| Object Category ID | Unique identifier for the object category to update. |         |
| Name               | The new name for the object category.                |         |
| Description        | The new description for the object category.         |         |
