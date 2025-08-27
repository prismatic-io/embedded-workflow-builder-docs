---
title: Greenhouse Connector
sidebar_label: Greenhouse
description: Interact with the Greenhouse API
---

![Greenhouse](./assets/greenhouse.png#connector-icon)
Interact with the Greenhouse API

## Connections

### API Key

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

| Input   | Comments                         | Default |
| ------- | -------------------------------- | ------- |
| API Key | API Key for your Greenhouse User |         |

## Triggers

### Webhook

Receive and validate webhook requests from Greenhouse for webhooks you configure.

| Input          | Comments                                                                                                    | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| Enabled Events | A list of events configured by the user to accept in the integration. If empty, all events will be accepted |         |
| Secret Key     | The secret key to use for the webhook                                                                       |         |

## Actions

### Create a Candidate

Create a new candidate.

| Input                  | Comments                                                                                 | Default                 |
| ---------------------- | ---------------------------------------------------------------------------------------- | ----------------------- |
| Connection             |                                                                                          |                         |
| Api Version            | The version of the API to use. Defaults to "v1"                                          | v1                      |
| On Behalf Of User ID   | ID of the user issuing this request. Required for auditing purposes.                     |                         |
| First Name             | The candidate's first name                                                               |                         |
| Last Name              | The candidate's last name                                                                |                         |
| Applications           | An array of application objects. At least one required.                                  |                         |
| Company                | The candidate's company                                                                  |                         |
| Title                  | The candidate's title                                                                    |                         |
| Phone Numbers          | Array of phone numbers. Passing an empty array will clear all.                           |                         |
| Addresses              | Array of addresses. Passing an empty array will clear all.                               |                         |
| Email Addresses        | Array of email addresses. Passing an empty array will clear all.                         |                         |
| Website Addresses      | Array of website addresses. Passing an empty array will clear all.                       |                         |
| Social Media Addresses | Array of social media addresses. Passing an empty array will clear all.                  |                         |
| Educations             | An array of education records.                                                           |                         |
| Employments            | An array of education records.                                                           |                         |
| Tags                   | Array of tags as strings. Passing an empty array will clear all.                         | <code>["000xxx"]</code> |
| Custom Fields          | Array of hashes containing new custom field values. Passing an empty array does nothing. |                         |
| Debug Request          | Enabling this flag will log out the current request.                                     | false                   |

### Create a Job

Create a new job.

| Input                  | Comments                                                                                                                                                                                                                                                                                                                                                               | Default                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection             |                                                                                                                                                                                                                                                                                                                                                                        |                         |
| Api Version            | The version of the API to use. Defaults to "v1"                                                                                                                                                                                                                                                                                                                        | v1                      |
| On Behalf Of User ID   | ID of the user issuing this request. Required for auditing purposes.                                                                                                                                                                                                                                                                                                   |                         |
| Template Job ID        | This is the job we will use to generate the new job. The new job will receive most of the settings of the template job. The On-Behalf-Of user must have access to this job.                                                                                                                                                                                            |                         |
| Number of Openings     | The number of openings that will be created for this job.                                                                                                                                                                                                                                                                                                              |                         |
| Job Post Name          | This will be the name on the new job post. If this is not included, the job post names in the base job will be copied.                                                                                                                                                                                                                                                 |                         |
| Job Name               | This is the internal name of the new job. If this is not included, the name of the new job will be “Copy Of (the template job's name)”                                                                                                                                                                                                                                 |                         |
| Department ID          | The department of the new job. This should be a department id from the Departments endpoint. If this element is omitted, the new job will receive the department of the template job. If this element is included but blank, it will create the job with no departments. If the organization requires jobs to have a department, this case will return a 422 response. |                         |
| External Department ID | This may be used instead of department_id and represents the ID of the department in an external system.                                                                                                                                                                                                                                                               |                         |
| Office Ids             | The offices of the new job. These should be office ids from the Offices endpoint. If this element is omitted, the new job will receive the offices of the template job. If this element is included but blank, it will create the job with no offices. If the organization requires jobs to have an office, this case will return a 422 response.                      | <code>["000xxx"]</code> |
| External Office Ids    | This may be used instead of office_ids and represents the ID of the office in an external system. If this is used, office_id must be blank and vice versa.                                                                                                                                                                                                             | <code>["000xxx"]</code> |
| Requisition ID         | If included, will return only the jobs that match the given requisition_id                                                                                                                                                                                                                                                                                             |                         |
| Opening Ids            | This may be used instead of office_ids and represents the ID of the office in an external system. If this is used, office_ids must be blank and vice versa.                                                                                                                                                                                                            | <code>["000000"]</code> |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                   | false                   |

### Create a User

Create a new user

| Input                   | Comments                                                                                                                                                                                                              | Default                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection              |                                                                                                                                                                                                                       |                         |
| Api Version             | The version of the API to use. Defaults to "v1"                                                                                                                                                                       | v1                      |
| On Behalf Of User ID    | ID of the user issuing this request. Required for auditing purposes.                                                                                                                                                  |                         |
| First Name              | The user's first name                                                                                                                                                                                                 |                         |
| Last Name               | The user's last name                                                                                                                                                                                                  |                         |
| Email                   | The user's email address. Must be a valid email address.                                                                                                                                                              |                         |
| Send Email Invite       | If true, an email will be sent to the user alerting them of any new job permissions that have been assigned to them. Emails are never sent when permissions are removed. If false, nothing happens. Default is false. | false                   |
| Employee Id             | The user's external employee id.                                                                                                                                                                                      |                         |
| Office Ids              | The office value(s) associated with a user. Must be a valid set of office IDs. Passing an empty array does nothing.                                                                                                   | <code>["000xxx"]</code> |
| External Office Ids     | This may be used instead of office_ids and represents the ID of the office in an external system. If this is used, office_id must be blank and vice versa.                                                            | <code>["000xxx"]</code> |
| Department Ids          | The department value(s) associated with a user. Must be a valid set of department IDs. Passing an empty array does nothing.                                                                                           | <code>["000xxx"]</code> |
| External Department Ids | This may be used instead of department_ids and represents the ID of the department in an external system. If this is used, department_ids must be blank and vice versa.                                               | <code>["000xxx"]</code> |
| Custom Fields           | Array of hashes containing new custom field values. Passing an empty array does nothing.                                                                                                                              |                         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                  | false                   |

### Delete a Candidate

Delete a candidate by id

| Input                | Comments                                                             | Default |
| -------------------- | -------------------------------------------------------------------- | ------- |
| Connection           |                                                                      |         |
| Api Version          | The version of the API to use. Defaults to "v1"                      | v1      |
| On Behalf Of User ID | ID of the user issuing this request. Required for auditing purposes. |         |
| Candidate ID         | ID of the candidate to delete.                                       |         |
| Debug Request        | Enabling this flag will log out the current request.                 | false   |

### Delete Application

Delete an application by id

| Input                | Comments                                                             | Default |
| -------------------- | -------------------------------------------------------------------- | ------- |
| Connection           |                                                                      |         |
| Api Version          | The version of the API to use. Defaults to "v1"                      | v1      |
| Application ID       | ID of the application                                                |         |
| On Behalf Of User ID | ID of the user issuing this request. Required for auditing purposes. |         |
| Debug Request        | Enabling this flag will log out the current request.                 | false   |

### Disable a User

Disable an existing user

| Input                | Comments                                                             | Default |
| -------------------- | -------------------------------------------------------------------- | ------- |
| Connection           |                                                                      |         |
| Api Version          | The version of the API to use. Defaults to "v1"                      | v2      |
| On Behalf Of User ID | ID of the user issuing this request. Required for auditing purposes. |         |
| Email                | The user's email address. Must be a valid email address.             |         |
| Debug Request        | Enabling this flag will log out the current request.                 | false   |

### Edit a Candidate

Edit an existing candidate.

| Input                  | Comments                                                                                 | Default                 |
| ---------------------- | ---------------------------------------------------------------------------------------- | ----------------------- |
| Connection             |                                                                                          |                         |
| Api Version            | The version of the API to use. Defaults to "v1"                                          | v1                      |
| On Behalf Of User ID   | ID of the user issuing this request. Required for auditing purposes.                     |                         |
| Candidate ID           | The Id of the candidate                                                                  |                         |
| First Name             | The candidate's first name                                                               |                         |
| Last Name              | The candidate's last name                                                                |                         |
| Company                | The candidate's company                                                                  |                         |
| Title                  | The candidate's title                                                                    |                         |
| Is Private             | Whether the candidate is private or not. One of: [“true”, “false”]                       | false                   |
| Phone Numbers          | Array of phone numbers. Passing an empty array will clear all.                           |                         |
| Addresses              | Array of addresses. Passing an empty array will clear all.                               |                         |
| Email Addresses        | Array of email addresses. Passing an empty array will clear all.                         |                         |
| Website Addresses      | Array of website addresses. Passing an empty array will clear all.                       |                         |
| Social Media Addresses | Array of social media addresses. Passing an empty array will clear all.                  |                         |
| Tags                   | Array of tags as strings. Passing an empty array will clear all.                         | <code>["000xxx"]</code> |
| Custom Fields          | Array of hashes containing new custom field values. Passing an empty array does nothing. |                         |
| Recruiter              | An object representing the candidate's new recruiter                                     |                         |
| Coordinator            | An object representing the candidate's new coordinator                                   |                         |
| Debug Request          | Enabling this flag will log out the current request.                                     | false                   |

### Edit a Job

Edit a job by id

| Input                     | Comments                                                                                                                                                        | Default                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection                |                                                                                                                                                                 |                         |
| Api Version               | The version of the API to use. Defaults to "v1"                                                                                                                 | v1                      |
| Job ID                    | If supplied, only return candidates that have applied to this job. Will return both when a candidate has applied to a job and when they're a prospect for a job |                         |
| On Behalf Of User ID      | ID of the user issuing this request. Required for auditing purposes.                                                                                            |                         |
| Job Name                  | The job's name                                                                                                                                                  |                         |
| Notes                     | Notes on the hiring plan                                                                                                                                        |                         |
| Anywhere                  | Boolean value indicating where the job can be done anywhere                                                                                                     | false                   |
| Requisition ID            | If included, will return only the jobs that match the given requisition_id                                                                                      |                         |
| Team and Responsibilities | A description of the team the candidate would join and their responsibilities                                                                                   |                         |
| How to Sell This Job      | A description for the recruiter of the desirable aspects of the job                                                                                             |                         |
| Office Ids                | Replace the current offices for this job with new offices. If your organization requires at least one office, trying to set this to blank will return an error. | <code>["000xxx"]</code> |
| External Office Ids       | This may be used instead of office_ids and represents the ID of the office in an external system. If this is used, office_id must be blank and vice versa.      | <code>["000xxx"]</code> |
| Department ID             | If included, will return only the jobs in this specific department.                                                                                             |                         |
| External Department ID    | This may be used instead of department_id and represents the ID of the department in an external system.                                                        |                         |
| Custom Fields             | Array of hashes containing new custom field values. Passing an empty array does nothing.                                                                        |                         |
| Debug Request             | Enabling this flag will log out the current request.                                                                                                            | false                   |

### Edit Application

Edit an Application by id

| Input                | Comments                                                                                 | Default |
| -------------------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                          |         |
| Api Version          | The version of the API to use. Defaults to "v1"                                          | v1      |
| Application ID       | ID of the application                                                                    |         |
| On Behalf Of User ID | ID of the user issuing this request. Required for auditing purposes.                     |         |
| Source ID            | The ID of the application's source                                                       |         |
| Referrer             | An object representing the referrer                                                      |         |
| Custom Fields        | Array of hashes containing new custom field values. Passing an empty array does nothing. |         |
| Prospect Pool ID     | The ID of the prospect pool for the application                                          |         |
| Prospect Stage ID    | The ID of the prospect pool stage for the application                                    |         |
| Debug Request        | Enabling this flag will log out the current request.                                     | false   |

### Edit a User

Edit an existing user

| Input                   | Comments                                                                                                                                                                                               | Default                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Connection              |                                                                                                                                                                                                        |                         |
| Api Version             | The version of the API to use. Defaults to "v1"                                                                                                                                                        | v2                      |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                   | false                   |

### Enable a User

Enable an existing user

| Input                | Comments                                                             | Default |
| -------------------- | -------------------------------------------------------------------- | ------- |
| Connection           |                                                                      |         |
| Api Version          | The version of the API to use. Defaults to "v1"                      | v2      |
| On Behalf Of User ID | ID of the user issuing this request. Required for auditing purposes. |         |
| Email                | The user's email address. Must be a valid email address.             |         |
| Debug Request        | Enabling this flag will log out the current request.                 | false   |

### Get a Candidate

Get a candidate by id

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Api Version   | The version of the API to use. Defaults to "v1"      | v1      |
| Candidate ID  | The Id of the candidate                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get a Job

Get a Job by id

| Input         | Comments                                                                                                                                                        | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                 |         |
| Api Version   | The version of the API to use. Defaults to "v1"                                                                                                                 | v1      |
| Job ID        | If supplied, only return candidates that have applied to this job. Will return both when a candidate has applied to a job and when they're a prospect for a job |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                            | false   |

### Get Application

Get an Application by id

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Api Version    | The version of the API to use. Defaults to "v1"      | v1      |
| Application ID | ID of the application                                |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get User

Get a user by id

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Connection           |                                                      |         |
| Api Version          | The version of the API to use. Defaults to "v1"      | v1      |
| On Behalf Of User ID | ID of the user to get.                               |         |
| Debug Request        | Enabling this flag will log out the current request. | false   |

### List Applications

Get a list of applications

| Input               | Comments                                                                                                                                                                                                     | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          |                                                                                                                                                                                                              |         |
| Per Page            | Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.                                                                                                     | 100     |
| Page                | A cursor for use in pagination. Returns the n-th chunk of per_page objects.                                                                                                                                  | 1       |
| Job ID              | If supplied, only return candidates that have applied to this job. Will return both when a candidate has applied to a job and when they're a prospect for a job                                              |         |
| Created Before      | Return only candidates that were created before this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                     |         |
| Created After       | Return only candidates that were created at or after this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                |         |
| Api Version         | The version of the API to use. Defaults to "v1"                                                                                                                                                              | v1      |
| Status              | If supplied, only return applications that match this status. Accepted values are active, converted, hired, and rejected. If anything else is used, an empty response will be returned rather than an error. |         |
| Last Activity After | Return only applications where ‘last_activity_at' is at or after this timestamp. Timestamp must be in in ISO-8601 format.                                                                                    |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                                                         | false   |

### List Candidates

Get a list of Candidates

| Input          | Comments                                                                                                                                                                                                                                                                              | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                                                                                                                                                       |         |
| Per Page       | Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.                                                                                                                                                                              | 100     |
| Page           | A cursor for use in pagination. Returns the n-th chunk of per_page objects.                                                                                                                                                                                                           | 1       |
| Email          | If supplied, only return candidates who have a matching e-mail address. If supplied with job_id, only return a candidate with a matching e-mail with an application on the job. If email and candidate_ids are included, candidate_ids will be ignored.                               |         |
| Job ID         | If supplied, only return candidates that have applied to this job. Will return both when a candidate has applied to a job and when they're a prospect for a job                                                                                                                       |         |
| Created Before | Return only candidates that were created before this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                                                                                              |         |
| Created After  | Return only candidates that were created at or after this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                                                                                         |         |
| Updated Before | Return only candidates that were updated before this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                                                                                              |         |
| Updated After  | Return only candidates that were updated at or after this timestamp. Timestamp must be in in ISO-8601 format.                                                                                                                                                                         |         |
| Api Version    | The version of the API to use. Defaults to "v1"                                                                                                                                                                                                                                       | v1      |
| Candidate Ids  | If supplied, return only the candidates with the given ids. These are supplied as a comma separated string. e.g.: “candidate_ids=123,456,789”. When combined with job_id, only return candidates with an application on the job. A maximum of 50 candidates can be returned this way. |         |
| Debug Request  | Enabling this flag will log out the current request.                                                                                                                                                                                                                                  | false   |

### List Jobs

Get a list of jobs

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                               |         |
| Api Version            | The version of the API to use. Defaults to "v1"                                                               | v1      |
| Per Page               | Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.      | 100     |
| Page                   | A cursor for use in pagination. Returns the n-th chunk of per_page objects.                                   | 1       |
| Created Before         | Return only candidates that were created before this timestamp. Timestamp must be in in ISO-8601 format.      |         |
| Created After          | Return only candidates that were created at or after this timestamp. Timestamp must be in in ISO-8601 format. |         |
| Updated Before         | Return only candidates that were updated before this timestamp. Timestamp must be in in ISO-8601 format.      |         |
| Updated After          | Return only candidates that were updated at or after this timestamp. Timestamp must be in in ISO-8601 format. |         |
| Requisition ID         | If included, will return only the jobs that match the given requisition_id                                    |         |
| Opening ID             | If included, will return only the jobs that contain at least one opening with the given opening_id.           |         |
| Status                 | One of 'open', 'closed', or 'draft'. If included, will only return jobs with that status.                     |         |
| Department ID          | If included, will return only the jobs in this specific department.                                           |         |
| External Department ID | This may be used instead of department_id and represents the ID of the department in an external system.      |         |
| Office ID              | If included, will return only the jobs in this specific office.                                               |         |
| External Office ID     | This may be used instead of office_id and represents the ID of the office in an external system.              |         |
| Custom Fields          | Array of hashes containing new custom field values. Passing an empty array does nothing.                      |         |
| Debug Request          | Enabling this flag will log out the current request.                                                          | false   |

### List Users

Get a list of Users

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                               |         |
| Api Version    | The version of the API to use. Defaults to "v1"                                                               | v1      |
| Per Page       | Return up to this number of objects per response. Must be an integer between 1 and 500. Defaults to 100.      | 100     |
| Page           | A cursor for use in pagination. Returns the n-th chunk of per_page objects.                                   | 1       |
| Employee Id    | The user's external employee id.                                                                              |         |
| Created Before | Return only candidates that were created before this timestamp. Timestamp must be in in ISO-8601 format.      |         |
| Created After  | Return only candidates that were created at or after this timestamp. Timestamp must be in in ISO-8601 format. |         |
| Updated After  | Return only candidates that were updated at or after this timestamp. Timestamp must be in in ISO-8601 format. |         |
| Updated Before | Return only candidates that were updated before this timestamp. Timestamp must be in in ISO-8601 format.      |         |
| Email          | The user's email address. Must be a valid email address.                                                      |         |
| Candidate Ids  | When true, include user attributes. Otherwise excludes user attributes.                                       | false   |
| Debug Request  | Enabling this flag will log out the current request.                                                          | false   |

### Raw Request

Send raw HTTP request to Greenhouse

| Input                   | Comments                                                                                                                                                                                                        | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                 |         |
| Api Version             | The version of the API to use. Defaults to "v1"                                                                                                                                                                 | v1      |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                            | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                      | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                 | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                       | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                | false   |
