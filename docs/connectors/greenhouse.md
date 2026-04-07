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

Authenticate with your Greenhouse API key.

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

| Input   | Comments                                                                                                                                       | Default |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| API Key | API Key for your Greenhouse user. You can generate API keys in Greenhouse by navigating to Configure > Dev Center > API Credential Management. |         |

## Triggers

### Webhook {#webhook}

Receive and validate webhook requests from Greenhouse for webhooks you configure.

| Input          | Comments                                                                                                    | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| Enabled Events | A list of events configured by the user to accept in the integration. If empty, all events will be accepted |         |
| Secret Key     | The secret key to use for the webhook.                                                                      |         |

## Actions

### Create a Candidate {#createcandidate}

Create a new candidate.

| Input                  | Comments                                                                                 | Default                 |
| ---------------------- | ---------------------------------------------------------------------------------------- | ----------------------- |
| Connection             | The Greenhouse connection to use.                                                        |                         |
| Api Version            | The version of the API to use. Defaults to "v1".                                         | v1                      |
| On Behalf Of User ID   | ID of the user issuing this request. Required for auditing purposes.                     |                         |
| First Name             | The candidate's first name                                                               |                         |
| Last Name              | The candidate's last name                                                                |                         |
| Applications           | An array of application objects. At least one required.                                  |                         |
| Company                | The candidate's company.                                                                 |                         |
| Title                  | The candidate's title.                                                                   |                         |
| Phone Numbers          | Array of phone numbers. Passing an empty array will clear all.                           |                         |
| Addresses              | Array of addresses. Passing an empty array will clear all.                               |                         |
| Email Addresses        | Array of email addresses. Passing an empty array will clear all.                         |                         |
| Website Addresses      | Array of website addresses. Passing an empty array will clear all.                       |                         |
| Social Media Addresses | Array of social media addresses. Passing an empty array will clear all.                  |                         |
| Educations             | An array of education records.                                                           |                         |
| Employments            | An array of employment records.                                                          |                         |
| Tags                   | Array of tags as strings. Passing an empty array will clear all.                         | <code>["000xxx"]</code> |
| Custom Fields          | Array of hashes containing new custom field values. Passing an empty array does nothing. |                         |

### Create a Job {#createjob}

Create a new job.

| Input                  | Comments                                                                                                                                                                                                                                                                                                                                                               | Default                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection             | The Greenhouse connection to use.                                                                                                                                                                                                                                                                                                                                      |                         |
| Api Version            | The version of the API to use. Defaults to "v1".                                                                                                                                                                                                                                                                                                                       | v1                      |
| On Behalf Of User ID   | ID of the user issuing this request. Required for auditing purposes.                                                                                                                                                                                                                                                                                                   |                         |
| Template Job ID        | This is the job we will use to generate the new job. The new job will receive most of the settings of the template job. The On-Behalf-Of user must have access to this job.                                                                                                                                                                                            |                         |
| Number of Openings     | The number of openings that will be created for this job.                                                                                                                                                                                                                                                                                                              |                         |
| Job Post Name          | This will be the name on the new job post. If this is not included, the job post names in the base job will be copied.                                                                                                                                                                                                                                                 |                         |
| Job Name               | This is the internal name of the new job. If this is not included, the name of the new job will be "Copy Of (the template job's name)".                                                                                                                                                                                                                                |                         |
| Department ID          | The department of the new job. This should be a department id from the Departments endpoint. If this element is omitted, the new job will receive the department of the template job. If this element is included but blank, it will create the job with no departments. If the organization requires jobs to have a department, this case will return a 422 response. |                         |
| External Department ID | This may be used instead of department_id and represents the ID of the department in an external system.                                                                                                                                                                                                                                                               |                         |
| Office Ids             | The offices of the new job. These should be office ids from the Offices endpoint. If this element is omitted, the new job will receive the offices of the template job. If this element is included but blank, it will create the job with no offices. If the organization requires jobs to have an office, this case will return a 422 response.                      | <code>["000xxx"]</code> |
| External Office Ids    | This may be used instead of office_ids and represents the ID of the office in an external system. If this is used, office_id must be blank and vice versa.                                                                                                                                                                                                             | <code>["000xxx"]</code> |
| Requisition ID         | If included, will return only the jobs that match the given requisition_id.                                                                                                                                                                                                                                                                                            |                         |
| Opening Ids            | The opening IDs for the job. Must be a valid set of opening IDs.                                                                                                                                                                                                                                                                                                       | <code>["000000"]</code> |

### Create a User {#createuser}

Create a new user

| Input                   | Comments                                                                                                                                                                   | Default                 |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection              | The Greenhouse connection to use.                                                                                                                                          |                         |
| Api Version             | The version of the API to use. Defaults to "v1".                                                                                                                           | v1                      |
| On Behalf Of User ID    | ID of the user issuing this request. Required for auditing purposes.                                                                                                       |                         |
| First Name              | The user's first name.                                                                                                                                                     |                         |
| Last Name               | The user's last name.                                                                                                                                                      |                         |
| Email                   | The user's email address. Must be a valid email address.                                                                                                                   |                         |
| Send Email Invite       | When true, an email will be sent to the user alerting them of any new job permissions that have been assigned to them. Emails are never sent when permissions are removed. | false                   |
| Employee Id             | The user's external employee ID.                                                                                                                                           |                         |
| Office Ids              | The office value(s) associated with a user. Must be a valid set of office IDs. Passing an empty array does nothing.                                                        | <code>["000xxx"]</code> |
| External Office Ids     | This may be used instead of office_ids and represents the ID of the office in an external system. If this is used, office_id must be blank and vice versa.                 | <code>["000xxx"]</code> |
| Department Ids          | The department value(s) associated with a user. Must be a valid set of department IDs. Passing an empty array does nothing.                                                | <code>["000xxx"]</code> |
| External Department Ids | This may be used instead of department_ids and represents the ID of the department in an external system. If this is used, department_ids must be blank and vice versa.    | <code>["000xxx"]</code> |
| Custom Fields           | Array of hashes containing new custom field values. Passing an empty array does nothing.                                                                                   |                         |

### Delete a Candidate {#deletecandidate}

Delete a candidate by id

| Input                | Comments                                                             | Default |
| -------------------- | -------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                    |         |
| Api Version          | The version of the API to use. Defaults to "v1".                     | v1      |
| On Behalf Of User ID | ID of the user issuing this request. Required for auditing purposes. |         |
| Candidate ID         | ID of the candidate to delete.                                       |         |

### Delete Application {#deleteapplication}

Delete an application by id

| Input                | Comments                                                             | Default |
| -------------------- | -------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                    |         |
| Api Version          | The version of the API to use. Defaults to "v1".                     | v1      |
| Application ID       | The ID of the application.                                           |         |
| On Behalf Of User ID | ID of the user issuing this request. Required for auditing purposes. |         |

### Disable a User {#disableuser}

Disable an existing user

| Input                | Comments                                                             | Default |
| -------------------- | -------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                    |         |
| Api Version          | The version of the API to use. Defaults to "v1".                     | v2      |
| On Behalf Of User ID | ID of the user issuing this request. Required for auditing purposes. |         |
| Email                | The user's email address. Must be a valid email address.             |         |

### Edit a Candidate {#editcandidate}

Edit an existing candidate.

| Input                  | Comments                                                                                 | Default                 |
| ---------------------- | ---------------------------------------------------------------------------------------- | ----------------------- |
| Connection             | The Greenhouse connection to use.                                                        |                         |
| Api Version            | The version of the API to use. Defaults to "v1".                                         | v1                      |
| On Behalf Of User ID   | ID of the user issuing this request. Required for auditing purposes.                     |                         |
| Candidate ID           | The ID of the candidate.                                                                 |                         |
| First Name             | The candidate's first name                                                               |                         |
| Last Name              | The candidate's last name                                                                |                         |
| Company                | The candidate's company.                                                                 |                         |
| Title                  | The candidate's title.                                                                   |                         |
| Is Private             | When true, the candidate will be marked as private.                                      | false                   |
| Phone Numbers          | Array of phone numbers. Passing an empty array will clear all.                           |                         |
| Addresses              | Array of addresses. Passing an empty array will clear all.                               |                         |
| Email Addresses        | Array of email addresses. Passing an empty array will clear all.                         |                         |
| Website Addresses      | Array of website addresses. Passing an empty array will clear all.                       |                         |
| Social Media Addresses | Array of social media addresses. Passing an empty array will clear all.                  |                         |
| Tags                   | Array of tags as strings. Passing an empty array will clear all.                         | <code>["000xxx"]</code> |
| Custom Fields          | Array of hashes containing new custom field values. Passing an empty array does nothing. |                         |
| Recruiter              | An object representing the candidate's new recruiter                                     |                         |
| Coordinator            | An object representing the candidate's new coordinator                                   |                         |

### Edit a Job {#editjob}

Edit a job by id

| Input                     | Comments                                                                                                                                                        | Default                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection                | The Greenhouse connection to use.                                                                                                                               |                         |
| Api Version               | The version of the API to use. Defaults to "v1".                                                                                                                | v1                      |
| Job ID                    | If supplied, only return candidates that have applied to this job. Will return both when a candidate has applied to a job and when they're a prospect for a job |                         |
| On Behalf Of User ID      | ID of the user issuing this request. Required for auditing purposes.                                                                                            |                         |
| Job Name                  | The job's name                                                                                                                                                  |                         |
| Notes                     | Notes on the hiring plan.                                                                                                                                       |                         |
| Anywhere                  | When true, indicates the job can be done from anywhere (remote position).                                                                                       | false                   |
| Requisition ID            | If included, will return only the jobs that match the given requisition_id.                                                                                     |                         |
| Team and Responsibilities | A description of the team the candidate would join and their responsibilities.                                                                                  |                         |
| How to Sell This Job      | A description for the recruiter of the desirable aspects of the job.                                                                                            |                         |
| Office Ids                | Replace the current offices for this job with new offices. If your organization requires at least one office, trying to set this to blank will return an error. | <code>["000xxx"]</code> |
| External Office Ids       | This may be used instead of office_ids and represents the ID of the office in an external system. If this is used, office_id must be blank and vice versa.      | <code>["000xxx"]</code> |
| Department ID             | If included, will return only the jobs in this specific department.                                                                                             |                         |
| External Department ID    | This may be used instead of department_id and represents the ID of the department in an external system.                                                        |                         |
| Custom Fields             | Array of hashes containing new custom field values. Passing an empty array does nothing.                                                                        |                         |

### Edit Application {#editapplication}

Edit an Application by id

| Input                | Comments                                                                                 | Default |
| -------------------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                        |         |
| Api Version          | The version of the API to use. Defaults to "v1".                                         | v1      |
| Application ID       | The ID of the application.                                                               |         |
| On Behalf Of User ID | ID of the user issuing this request. Required for auditing purposes.                     |         |
| Source ID            | The ID of the application's source.                                                      |         |
| Referrer             | An object representing the referrer.                                                     |         |
| Custom Fields        | Array of hashes containing new custom field values. Passing an empty array does nothing. |         |
| Prospect Pool ID     | The ID of the prospect pool for the application.                                         |         |
| Prospect Stage ID    | The ID of the prospect pool stage for the application.                                   |         |

### Edit a User {#edituser}

Edit an existing user

| Input                   | Comments                                                                                                                                                                                               | Default                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Connection              | The Greenhouse connection to use.                                                                                                                                                                      |                         |
| Api Version             | The version of the API to use. Defaults to "v1".                                                                                                                                                       | v2                      |
| On Behalf Of User ID    | ID of the user issuing this request. Required for auditing purposes.                                                                                                                                   |                         |
| First Name              | The user’s new first name. If included, this cannot be blank.                                                                                                                                          |                         |
| Last Name               | The user’s new last name. If included, this cannot be blank.                                                                                                                                           |                         |
| Email                   | The user element must contain one of ‘employee_id’, 'email’, or 'user_id’, but not more than one. If included, this cannot be blank, nor can it match any other email for a user in this organization. |                         |
| Employee Id             | The user’s external employee id. If included, this cannot be blank, nor can it match any other employee-id for a user in this organization.                                                            |                         |
| Office Ids              | Replace the current offices for this user with new offices. An empty array will remove all offices on this user.                                                                                       | <code>["000xxx"]</code> |
| External Office Ids     | This may be used instead of office_ids and represents the ID of the office in an external system. If this is used, office_ids must be blank and vice versa.                                            | <code>["000xxx"]</code> |
| Department Ids          | Replace the current departments for this user with new departments. An empty array will remove all departments on this user.                                                                           | <code>["000xxx"]</code> |
| External Department Ids | This may be used instead of department_ids and represents the ID of the department in an external system. If used, department_ids must be blank and vice versa.                                        | <code>["000xxx"]</code> |
| Custom Fields           | Array of hashes containing new custom field values. Passing an empty array does nothing.                                                                                                               |                         |

### Enable a User {#enableuser}

Enable an existing user

| Input                | Comments                                                             | Default |
| -------------------- | -------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                    |         |
| Api Version          | The version of the API to use. Defaults to "v1".                     | v2      |
| On Behalf Of User ID | ID of the user issuing this request. Required for auditing purposes. |         |
| Email                | The user's email address. Must be a valid email address.             |         |

### Get a Candidate {#getcandidate}

Get a candidate by id

| Input        | Comments                                         | Default |
| ------------ | ------------------------------------------------ | ------- |
| Connection   | The Greenhouse connection to use.                |         |
| Api Version  | The version of the API to use. Defaults to "v1". | v1      |
| Candidate ID | The ID of the candidate.                         |         |

### Get a Job {#getjob}

Get a Job by id

| Input       | Comments                                                                                                                                                        | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Greenhouse connection to use.                                                                                                                               |         |
| Api Version | The version of the API to use. Defaults to "v1".                                                                                                                | v1      |
| Job ID      | If supplied, only return candidates that have applied to this job. Will return both when a candidate has applied to a job and when they're a prospect for a job |         |

### Get Application {#getapplication}

Get an Application by id

| Input          | Comments                                         | Default |
| -------------- | ------------------------------------------------ | ------- |
| Connection     | The Greenhouse connection to use.                |         |
| Api Version    | The version of the API to use. Defaults to "v1". | v1      |
| Application ID | The ID of the application.                       |         |

### Get User {#getuser}

Get a user by id

| Input                | Comments                                         | Default |
| -------------------- | ------------------------------------------------ | ------- |
| Connection           | The Greenhouse connection to use.                |         |
| Api Version          | The version of the API to use. Defaults to "v1". | v1      |
| On Behalf Of User ID | ID of the user to get.                           |         |

### List Applications {#listapplications}

Get a list of applications

| Input               | Comments                                                                                                                                                                                                     | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          | The Greenhouse connection to use.                                                                                                                                                                            |         |
| Per Page            | Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.                                                                                                     | 100     |
| Page                | A cursor for use in pagination. Returns the n-th chunk of per_page objects.                                                                                                                                  | 1       |
| Job ID              | If supplied, only return candidates that have applied to this job. Will return both when a candidate has applied to a job and when they're a prospect for a job                                              |         |
| Created Before      | Return only candidates that were created before this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                     |         |
| Created After       | Return only candidates that were created at or after this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                |         |
| Api Version         | The version of the API to use. Defaults to "v1".                                                                                                                                                             | v1      |
| Status              | If supplied, only return applications that match this status. Accepted values are active, converted, hired, and rejected. If anything else is used, an empty response will be returned rather than an error. |         |
| Last Activity After | Return only applications where 'last_activity_at' is at or after this timestamp. Timestamp must be in in ISO-8601 format.                                                                                    |         |

### List Candidates {#listcandidates}

Get a list of Candidates

| Input          | Comments                                                                                                                                                                                                                                                                              | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Greenhouse connection to use.                                                                                                                                                                                                                                                     |         |
| Per Page       | Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.                                                                                                                                                                              | 100     |
| Page           | A cursor for use in pagination. Returns the n-th chunk of per_page objects.                                                                                                                                                                                                           | 1       |
| Email          | If supplied, only return candidates who have a matching e-mail address. If supplied with job_id, only return a candidate with a matching e-mail with an application on the job. If email and candidate_ids are included, candidate_ids will be ignored.                               |         |
| Job ID         | If supplied, only return candidates that have applied to this job. Will return both when a candidate has applied to a job and when they're a prospect for a job                                                                                                                       |         |
| Created Before | Return only candidates that were created before this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                                                                                              |         |
| Created After  | Return only candidates that were created at or after this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                                                                                         |         |
| Updated Before | Return only candidates that were updated before this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                                                                                              |         |
| Updated After  | Return only candidates that were updated at or after this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                                                                                         |         |
| Api Version    | The version of the API to use. Defaults to "v1".                                                                                                                                                                                                                                      | v1      |
| Candidate Ids  | If supplied, return only the candidates with the given ids. These are supplied as a comma separated string. e.g.: “candidate_ids=123,456,789”. When combined with job_id, only return candidates with an application on the job. A maximum of 50 candidates can be returned this way. |         |

### List Jobs {#listjobs}

Get a list of jobs

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Greenhouse connection to use.                                                                             |         |
| Api Version            | The version of the API to use. Defaults to "v1".                                                              | v1      |
| Per Page               | Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.      | 100     |
| Page                   | A cursor for use in pagination. Returns the n-th chunk of per_page objects.                                   | 1       |
| Created Before         | Return only candidates that were created before this timestamp. Timestamp must be in in ISO-8601 format.      |         |
| Created After          | Return only candidates that were created at or after this timestamp. Timestamp must be in in ISO-8601 format. |         |
| Updated Before         | Return only candidates that were updated before this timestamp. Timestamp must be in in ISO-8601 format.      |         |
| Updated After          | Return only candidates that were updated at or after this timestamp. Timestamp must be in in ISO-8601 format. |         |
| Requisition ID         | If included, will return only the jobs that match the given requisition_id.                                   |         |
| Opening ID             | If included, will return only the jobs that contain at least one opening with the given opening_id.           |         |
| Status                 | One of 'open', 'closed', or 'draft'. If included, will only return jobs with that status.                     |         |
| Department ID          | If included, will return only the jobs in this specific department.                                           |         |
| External Department ID | This may be used instead of department_id and represents the ID of the department in an external system.      |         |
| Office ID              | If included, will return only the jobs in this specific office.                                               |         |
| External Office ID     | This may be used instead of office_id and represents the ID of the office in an external system.              |         |
| Custom Fields          | Array of hashes containing new custom field values. Passing an empty array does nothing.                      |         |

### List Users {#listusers}

Get a list of Users

| Input                   | Comments                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Greenhouse connection to use.                                                                             |         |
| Api Version             | The version of the API to use. Defaults to "v1".                                                              | v1      |
| Per Page                | Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.      | 100     |
| Page                    | A cursor for use in pagination. Returns the n-th chunk of per_page objects.                                   | 1       |
| Employee Id             | The user's external employee ID.                                                                              |         |
| Created Before          | Return only candidates that were created before this timestamp. Timestamp must be in in ISO-8601 format.      |         |
| Created After           | Return only candidates that were created at or after this timestamp. Timestamp must be in in ISO-8601 format. |         |
| Updated After           | Return only candidates that were updated at or after this timestamp. Timestamp must be in in ISO-8601 format. |         |
| Updated Before          | Return only candidates that were updated before this timestamp. Timestamp must be in in ISO-8601 format.      |         |
| Email                   | The user's email address. Must be a valid email address.                                                      |         |
| Include User Attributes | When true, include user attributes in the response.                                                           | false   |

### Raw Request {#rawrequest}

Send raw HTTP request to Greenhouse

| Input                   | Comments                                                                                                                                                                                                        | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Greenhouse connection to use.                                                                                                                                                                               |         |
| Api Version             | The version of the API to use. Defaults to "v1".                                                                                                                                                                | v1      |
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
