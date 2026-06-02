---
title: Greenhouse Connector
sidebar_label: Greenhouse
description: Manage candidates, applications, and job postings in Greenhouse.
---

![Greenhouse](./assets/greenhouse.png#connector-icon)
[Greenhouse](https://www.greenhouse.com/) is a recruiting and applicant tracking system platform.
This component allows you to manage candidates, applications, and job postings in Greenhouse.

## API Documentation

This component was built using the [Greenhouse Harvest API](https://developers.greenhouse.io/harvest.html).

## Connections

### API Key {#apitoken}

Authenticate using an API key.

The Greenhouse Harvest API uses Basic Auth over HTTPS for authentication. The username is your Greenhouse API token and the password should be blank. Unauthenticated requests will return an HTTP 401 response.

1. Harvest API keys can be obtained in Greenhouse. In order to create a Harvest API key, a user must be granted the “Can manage ALL organization’s API Credentials” in the “Developer permission” section.
2. That user can then go Configure >> Dev Center >> API Credential Management.
3. From there, you can create a Harvest API key and choose which endpoints it may access
   a. API Type - Harvest
   b. Partner - Custom
4. Select “Manage Permissions” to Continue
5. Enter Your API key into your flow and/or another secure location.
6. Select “I have stored the API key” to continue”
7. You may now choose which actions the user will be allowed to submit:
   a. Recommended sections for getting started
   I. Users
   II. Applications
   III. Jobs
   IV. Candidates
   V. Custom Field Options
   b. You may also choose granular permissions for each section
   I. Select Save when complete.

| Input   | Comments                                                                                                                                          | Default |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| API Key | The API key for the Greenhouse user. API keys can be generated in Greenhouse by navigating to Configure > Dev Center > API Credential Management. |         |

## Triggers

### New and Updated Applications {#pollchangestrigger}

Checks for new and updated applications in Greenhouse on a configured schedule.

| Input                | Comments                                                                                          | Default |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                                 |         |
| Show New Records     | When true, newly created applications are included in the trigger output.                         | true    |
| Show Updated Records | When true, applications with new activity since the last poll are included in the trigger output. | true    |

### Webhook {#webhook}

Receive and validate webhook requests from Greenhouse for webhooks you configure.

| Input          | Comments                                                                                           | Default |
| -------------- | -------------------------------------------------------------------------------------------------- | ------- |
| Enabled Events | The list of webhook event names to accept in the integration. When empty, all events are accepted. |         |
| Secret Key     | The shared secret used to sign and verify the webhook payload signature.                           |         |

## Actions

### Create Candidate {#createcandidate}

Creates a new candidate.

| Input                  | Comments                                                                                                                          | Default                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection             | The Greenhouse connection to use.                                                                                                 |                         |
| API Version            | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                               | v1                      |
| On Behalf Of User ID   | The unique identifier of the user issuing this request. Required for auditing purposes.                                           |                         |
| First Name             | The candidate's first name                                                                                                        |                         |
| Last Name              | The candidate's last name                                                                                                         |                         |
| Applications           | The JSON array of application objects to create with the candidate. At least one is required. Format: JSON array of objects.      |                         |
| Company                | The company name associated with the candidate.                                                                                   |                         |
| Title                  | The job title associated with the candidate.                                                                                      |                         |
| Phone Numbers          | The JSON array of phone numbers for the candidate. Passing an empty array will clear all. Format: JSON array of objects.          |                         |
| Addresses              | The JSON array of postal addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.       |                         |
| Email Addresses        | The JSON array of email addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.        |                         |
| Website Addresses      | The JSON array of website addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.      |                         |
| Social Media Addresses | The JSON array of social media addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects. |                         |
| Educations             | The JSON array of education records for the candidate. Format: JSON array of objects.                                             |                         |
| Employments            | The JSON array of employment records for the candidate. Format: JSON array of objects.                                            |                         |
| Tags                   | The tags to assign to the candidate as an array of strings. Passing an empty array will clear all.                                | <code>["000xxx"]</code> |
| Custom Fields          | The JSON array of hashes containing new custom field values. Passing an empty array does nothing. Format: JSON array of objects.  |                         |

### Create Job {#createjob}

Creates a new job.

| Input                  | Comments                                                                                                                                                                                                                                                                                                                                                               | Default                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection             | The Greenhouse connection to use.                                                                                                                                                                                                                                                                                                                                      |                         |
| API Version            | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                                                                                                                                                                                                                                                                    | v1                      |
| On Behalf Of User ID   | The unique identifier of the user issuing this request. Required for auditing purposes.                                                                                                                                                                                                                                                                                |                         |
| Template Job ID        | The unique identifier for the job used as a template. The new job will inherit most settings from this template job. The On-Behalf-Of user must have access to this job.                                                                                                                                                                                               |                         |
| Number of Openings     | The number of openings that will be created for this job.                                                                                                                                                                                                                                                                                                              |                         |
| Job Post Name          | The display name for the new job post. When omitted, the job post names from the base job are copied.                                                                                                                                                                                                                                                                  |                         |
| Job Name               | The internal name of the new job. When omitted, the name of the new job will be "Copy Of (the template job's name)".                                                                                                                                                                                                                                                   |                         |
| Department ID          | The department of the new job. This should be a department id from the Departments endpoint. If this element is omitted, the new job will receive the department of the template job. If this element is included but blank, it will create the job with no departments. If the organization requires jobs to have a department, this case will return a 422 response. |                         |
| External Department ID | The external system department identifier. May be used instead of Department ID and represents the ID of the department in an external system.                                                                                                                                                                                                                         |                         |
| Office IDs             | The offices of the new job. These should be office ids from the Offices endpoint. If this element is omitted, the new job will receive the offices of the template job. If this element is included but blank, it will create the job with no offices. If the organization requires jobs to have an office, this case will return a 422 response.                      | <code>["000xxx"]</code> |
| External Office IDs    | The external system office identifiers. May be used instead of Office IDs and represents the ID of the office in an external system. If this is used, Office IDs must be blank and vice versa.                                                                                                                                                                         | <code>["000xxx"]</code> |
| Requisition ID         | The requisition identifier to filter jobs by. When included, only jobs that match the given requisition_id are returned.                                                                                                                                                                                                                                               |                         |
| Opening IDs            | The opening identifiers for the job. Must be a valid set of opening IDs.                                                                                                                                                                                                                                                                                               | <code>["000000"]</code> |

### Create User {#createuser}

Creates a new user.

| Input                   | Comments                                                                                                                                                                                                       | Default                 |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection              | The Greenhouse connection to use.                                                                                                                                                                              |                         |
| API Version             | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                                                                                                            | v1                      |
| On Behalf Of User ID    | The unique identifier of the user issuing this request. Required for auditing purposes.                                                                                                                        |                         |
| First Name              | The given (first) name of the user.                                                                                                                                                                            |                         |
| Last Name               | The family (last) name of the user.                                                                                                                                                                            |                         |
| Email                   | The email address of the user. Must be a valid email address.                                                                                                                                                  |                         |
| Send Email Invite       | When true, an email is sent to the user alerting them of any new job permissions that have been assigned to them. Emails are never sent when permissions are removed.                                          | false                   |
| Employee ID             | The external employee identifier for the user.                                                                                                                                                                 |                         |
| Office IDs              | The office identifiers associated with a user. Must be a valid set of office IDs. Passing an empty array does nothing.                                                                                         | <code>["000xxx"]</code> |
| External Office IDs     | The external system office identifiers. May be used instead of Office IDs and represents the ID of the office in an external system. If this is used, Office IDs must be blank and vice versa.                 | <code>["000xxx"]</code> |
| Department IDs          | The department identifiers associated with a user. Must be a valid set of department IDs. Passing an empty array does nothing.                                                                                 | <code>["000xxx"]</code> |
| External Department IDs | The external system department identifiers. May be used instead of Department IDs and represents the ID of the department in an external system. If this is used, Department IDs must be blank and vice versa. | <code>["000xxx"]</code> |
| Custom Fields           | The JSON array of hashes containing new custom field values. Passing an empty array does nothing. Format: JSON array of objects.                                                                               |                         |

### Delete Application {#deleteapplication}

Deletes an application by ID.

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                       |         |
| API Version          | The version of the Greenhouse Harvest API to use. Defaults to "v1".                     | v1      |
| Application ID       | The unique identifier for the application.                                              |         |
| On Behalf Of User ID | The unique identifier of the user issuing this request. Required for auditing purposes. |         |

### Delete Candidate {#deletecandidate}

Deletes a candidate by ID.

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                       |         |
| API Version          | The version of the Greenhouse Harvest API to use. Defaults to "v1".                     | v1      |
| On Behalf Of User ID | The unique identifier of the user issuing this request. Required for auditing purposes. |         |
| Candidate ID         | ID of the candidate to delete.                                                          |         |

### Disable User {#disableuser}

Disables an existing user.

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                       |         |
| API Version          | The version of the Greenhouse Harvest API to use. Defaults to "v1".                     | v2      |
| On Behalf Of User ID | The unique identifier of the user issuing this request. Required for auditing purposes. |         |
| Email                | The email address of the user. Must be a valid email address.                           |         |

### Edit Application {#editapplication}

Updates an application by ID.

| Input                | Comments                                                                                                                         | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                                                                |         |
| API Version          | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                              | v1      |
| Application ID       | The unique identifier for the application.                                                                                       |         |
| On Behalf Of User ID | The unique identifier of the user issuing this request. Required for auditing purposes.                                          |         |
| Source ID            | The unique identifier for the source of the application.                                                                         |         |
| Referrer             | The JSON object representing the referrer that brought the candidate to apply. Format: JSON object with type and value.          |         |
| Custom Fields        | The JSON array of hashes containing new custom field values. Passing an empty array does nothing. Format: JSON array of objects. |         |
| Prospect Pool ID     | The unique identifier for the prospect pool for the application.                                                                 |         |
| Prospect Stage ID    | The unique identifier for the prospect pool stage for the application.                                                           |         |

### Edit Candidate {#editcandidate}

Updates an existing candidate.

| Input                  | Comments                                                                                                                          | Default                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection             | The Greenhouse connection to use.                                                                                                 |                         |
| API Version            | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                               | v1                      |
| On Behalf Of User ID   | The unique identifier of the user issuing this request. Required for auditing purposes.                                           |                         |
| Candidate ID           | The unique identifier for the candidate.                                                                                          |                         |
| First Name             | The candidate's first name                                                                                                        |                         |
| Last Name              | The candidate's last name                                                                                                         |                         |
| Company                | The company name associated with the candidate.                                                                                   |                         |
| Title                  | The job title associated with the candidate.                                                                                      |                         |
| Is Private             | When true, the candidate will be marked as private.                                                                               | false                   |
| Phone Numbers          | The JSON array of phone numbers for the candidate. Passing an empty array will clear all. Format: JSON array of objects.          |                         |
| Addresses              | The JSON array of postal addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.       |                         |
| Email Addresses        | The JSON array of email addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.        |                         |
| Website Addresses      | The JSON array of website addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.      |                         |
| Social Media Addresses | The JSON array of social media addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects. |                         |
| Tags                   | The tags to assign to the candidate as an array of strings. Passing an empty array will clear all.                                | <code>["000xxx"]</code> |
| Custom Fields          | The JSON array of hashes containing new custom field values. Passing an empty array does nothing. Format: JSON array of objects.  |                         |
| Recruiter              | An object representing the candidate's new recruiter                                                                              |                         |
| Coordinator            | An object representing the candidate's new coordinator                                                                            |                         |

### Edit Job {#editjob}

Updates a job by ID.

| Input                     | Comments                                                                                                                                                                                       | Default                 |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection                | The Greenhouse connection to use.                                                                                                                                                              |                         |
| API Version               | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                                                                                            | v1                      |
| Job ID                    | The unique identifier for the job to filter by. When supplied, only candidates that have applied to this job (or are prospects for it) are returned.                                           |                         |
| On Behalf Of User ID      | The unique identifier of the user issuing this request. Required for auditing purposes.                                                                                                        |                         |
| Job Name                  | The job's name                                                                                                                                                                                 |                         |
| Notes                     | The free-form notes attached to the hiring plan.                                                                                                                                               |                         |
| Anywhere                  | When true, indicates the job can be done from anywhere (remote position).                                                                                                                      | false                   |
| Requisition ID            | The requisition identifier to filter jobs by. When included, only jobs that match the given requisition_id are returned.                                                                       |                         |
| Team and Responsibilities | The description of the team the candidate would join and the responsibilities of the role.                                                                                                     |                         |
| How to Sell This Job      | The recruiter-facing description of the desirable aspects of the job.                                                                                                                          |                         |
| Office IDs                | Replace the current offices for this job with new offices. If the organization requires at least one office, trying to set this to blank will return an error.                                 | <code>["000xxx"]</code> |
| External Office IDs       | The external system office identifiers. May be used instead of Office IDs and represents the ID of the office in an external system. If this is used, Office IDs must be blank and vice versa. | <code>["000xxx"]</code> |
| Department ID             | The unique identifier for the department. When included, only jobs in this specific department are returned.                                                                                   |                         |
| External Department ID    | The external system department identifier. May be used instead of Department ID and represents the ID of the department in an external system.                                                 |                         |
| Custom Fields             | The JSON array of hashes containing new custom field values. Passing an empty array does nothing. Format: JSON array of objects.                                                               |                         |

### Edit User {#edituser}

Updates an existing user.

| Input                   | Comments                                                                                                                                                                                               | Default                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Connection              | The Greenhouse connection to use.                                                                                                                                                                      |                         |
| API Version             | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                                                                                                    | v2                      |
| On Behalf Of User ID    | The unique identifier of the user issuing this request. Required for auditing purposes.                                                                                                                |                         |
| First Name              | The user’s new first name. If included, this cannot be blank.                                                                                                                                          |                         |
| Last Name               | The user’s new last name. If included, this cannot be blank.                                                                                                                                           |                         |
| Email                   | The user element must contain one of ‘employee_id’, 'email’, or 'user_id’, but not more than one. If included, this cannot be blank, nor can it match any other email for a user in this organization. |                         |
| Employee ID             | The user’s external employee id. If included, this cannot be blank, nor can it match any other employee-id for a user in this organization.                                                            |                         |
| Office IDs              | Replace the current offices for this user with new offices. An empty array will remove all offices on this user.                                                                                       | <code>["000xxx"]</code> |
| External Office IDs     | This may be used instead of office_ids and represents the ID of the office in an external system. If this is used, office_ids must be blank and vice versa.                                            | <code>["000xxx"]</code> |
| Department IDs          | Replace the current departments for this user with new departments. An empty array will remove all departments on this user.                                                                           | <code>["000xxx"]</code> |
| External Department IDs | This may be used instead of department_ids and represents the ID of the department in an external system. If used, department_ids must be blank and vice versa.                                        | <code>["000xxx"]</code> |
| Custom Fields           | Array of hashes containing new custom field values. Passing an empty array does nothing.                                                                                                               |                         |

### Enable User {#enableuser}

Enables an existing user.

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                       |         |
| API Version          | The version of the Greenhouse Harvest API to use. Defaults to "v1".                     | v2      |
| On Behalf Of User ID | The unique identifier of the user issuing this request. Required for auditing purposes. |         |
| Email                | The email address of the user. Must be a valid email address.                           |         |

### Get Application {#getapplication}

Retrieves an application by ID.

| Input          | Comments                                                            | Default |
| -------------- | ------------------------------------------------------------------- | ------- |
| Connection     | The Greenhouse connection to use.                                   |         |
| API Version    | The version of the Greenhouse Harvest API to use. Defaults to "v1". | v1      |
| Application ID | The unique identifier for the application.                          |         |

### Get Candidate {#getcandidate}

Retrieves a candidate by ID.

| Input        | Comments                                                            | Default |
| ------------ | ------------------------------------------------------------------- | ------- |
| Connection   | The Greenhouse connection to use.                                   |         |
| API Version  | The version of the Greenhouse Harvest API to use. Defaults to "v1". | v1      |
| Candidate ID | The unique identifier for the candidate.                            |         |

### Get Job {#getjob}

Retrieves a job by ID.

| Input       | Comments                                                                                                                                             | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Greenhouse connection to use.                                                                                                                    |         |
| API Version | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                                                  | v1      |
| Job ID      | The unique identifier for the job to filter by. When supplied, only candidates that have applied to this job (or are prospects for it) are returned. |         |

### Get User {#getuser}

Retrieves a user by ID.

| Input                | Comments                                                            | Default |
| -------------------- | ------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                   |         |
| API Version          | The version of the Greenhouse Harvest API to use. Defaults to "v1". | v1      |
| On Behalf Of User ID | ID of the user to get.                                              |         |

### List Applications {#listapplications}

Retrieves a list of applications.

| Input               | Comments                                                                                                                                                                             | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          | The Greenhouse connection to use.                                                                                                                                                    |         |
| Page Size           | The maximum number of results to return per page. Must be an integer between 1 and 500.                                                                                              |         |
| Page                | The 1-based page number to return. Each page contains up to the configured page size.                                                                                                | 1       |
| Job ID              | The unique identifier for the job to filter by. When supplied, only candidates that have applied to this job (or are prospects for it) are returned.                                 |         |
| Created Before      | The upper bound timestamp filter — only records created before this value are returned. Format: ISO-8601.                                                                            |         |
| Created After       | The lower bound timestamp filter — only records created at or after this value are returned. Format: ISO-8601.                                                                       |         |
| API Version         | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                                                                                  | v1      |
| Status              | The status to filter applications by. Accepted values are active, converted, hired, and rejected. If anything else is used, an empty response will be returned rather than an error. |         |
| Last Activity After | The lower bound activity timestamp filter — only applications whose 'last_activity_at' is at or after this value are returned. Format: ISO-8601.                                     |         |

### List Candidates {#listcandidates}

Retrieves a list of candidates.

| Input          | Comments                                                                                                                                                                                                                                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Greenhouse connection to use.                                                                                                                                                                                                                       |         |
| Page Size      | The maximum number of results to return per page. Must be an integer between 1 and 500.                                                                                                                                                                 |         |
| Page           | The 1-based page number to return. Each page contains up to the configured page size.                                                                                                                                                                   | 1       |
| Email          | If supplied, only return candidates who have a matching e-mail address. If supplied with job_id, only return a candidate with a matching e-mail with an application on the job. If email and candidate_ids are included, candidate_ids will be ignored. |         |
| Job ID         | The unique identifier for the job to filter by. When supplied, only candidates that have applied to this job (or are prospects for it) are returned.                                                                                                    |         |
| Created Before | The upper bound timestamp filter — only records created before this value are returned. Format: ISO-8601.                                                                                                                                               |         |
| Created After  | The lower bound timestamp filter — only records created at or after this value are returned. Format: ISO-8601.                                                                                                                                          |         |
| Updated Before | The upper bound timestamp filter — only records updated before this value are returned. Format: ISO-8601.                                                                                                                                               |         |
| Updated After  | The lower bound timestamp filter — only records updated at or after this value are returned. Format: ISO-8601.                                                                                                                                          |         |
| API Version    | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                                                                                                                                                     | v1      |
| Candidate IDs  | The comma-separated list of candidate IDs to return (e.g. '123,456,789'). When combined with Job ID, only candidates with an application on the job are returned. A maximum of 50 candidates can be returned this way.                                  |         |

### List Jobs {#listjobs}

Retrieves a list of jobs.

| Input                  | Comments                                                                                                                                       | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Greenhouse connection to use.                                                                                                              |         |
| API Version            | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                                            | v1      |
| Page Size              | The maximum number of results to return per page. Must be an integer between 1 and 500.                                                        |         |
| Page                   | The 1-based page number to return. Each page contains up to the configured page size.                                                          | 1       |
| Created Before         | The upper bound timestamp filter — only records created before this value are returned. Format: ISO-8601.                                      |         |
| Created After          | The lower bound timestamp filter — only records created at or after this value are returned. Format: ISO-8601.                                 |         |
| Updated Before         | The upper bound timestamp filter — only records updated before this value are returned. Format: ISO-8601.                                      |         |
| Updated After          | The lower bound timestamp filter — only records updated at or after this value are returned. Format: ISO-8601.                                 |         |
| Requisition ID         | The requisition identifier to filter jobs by. When included, only jobs that match the given requisition_id are returned.                       |         |
| Opening ID             | The unique identifier for an opening. When included, only jobs that contain at least one opening with this ID are returned.                    |         |
| Status                 | One of 'open', 'closed', or 'draft'. If included, will only return jobs with that status.                                                      |         |
| Department ID          | The unique identifier for the department. When included, only jobs in this specific department are returned.                                   |         |
| External Department ID | The external system department identifier. May be used instead of Department ID and represents the ID of the department in an external system. |         |
| Office ID              | The unique identifier for the office. When included, only jobs in this specific office are returned.                                           |         |
| External Office ID     | The external system office identifier. May be used instead of Office ID and represents the ID of the office in an external system.             |         |
| Custom Fields          | The JSON array of hashes containing new custom field values. Passing an empty array does nothing. Format: JSON array of objects.               |         |

### List Users {#listusers}

Retrieves a list of users.

| Input                   | Comments                                                                                                       | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Greenhouse connection to use.                                                                              |         |
| API Version             | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                            | v1      |
| Page Size               | The maximum number of results to return per page. Must be an integer between 1 and 500.                        |         |
| Page                    | The 1-based page number to return. Each page contains up to the configured page size.                          | 1       |
| Employee ID             | The external employee identifier for the user.                                                                 |         |
| Created Before          | The upper bound timestamp filter — only records created before this value are returned. Format: ISO-8601.      |         |
| Created After           | The lower bound timestamp filter — only records created at or after this value are returned. Format: ISO-8601. |         |
| Updated After           | The lower bound timestamp filter — only records updated at or after this value are returned. Format: ISO-8601. |         |
| Updated Before          | The upper bound timestamp filter — only records updated before this value are returned. Format: ISO-8601.      |         |
| Email                   | The email address of the user. Must be a valid email address.                                                  |         |
| Include User Attributes | When true, includes user attributes in the response.                                                           | false   |

### Raw Request {#rawrequest}

Sends a raw HTTP request to Greenhouse.

| Input                   | Comments                                                                                                                                                                                                        | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Greenhouse connection to use.                                                                                                                                                                               |         |
| API Version             | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                                                                                                             | v1      |
| URL                     | Input the path only (/jobs), The base URL is already included (https://harvest.greenhouse.io/{version}). For example, to connect to https://harvest.greenhouse.io/v1/jobs, only /jobs is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                         |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                       |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                            |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                          |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                             |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                     |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                        | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                             |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                             | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                             | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                   | false   |
