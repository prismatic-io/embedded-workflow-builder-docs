---
title: Greenhouse Connector
sidebar_label: Greenhouse
description: Manage candidates, applications, and job postings in Greenhouse.
---

![Greenhouse](./assets/greenhouse.png#connector-icon)
[Greenhouse](https://www.greenhouse.com/) is a recruiting and applicant tracking system platform.
This component enables managing candidates, applications, and job postings in Greenhouse.

## API Documentation

This component was built using the [Greenhouse Harvest API](https://developers.greenhouse.io/harvest.html).

## Connections

### API Key (Harvest v1/v2) {#apitoken}

Authenticate requests to Greenhouse using an API key. Deprecated: this authentication method sunsets on August 31, 2026. Use the OAuth 2.0 Client Credentials (Harvest V3) connection instead.

**Deprecation Notice**: this connection authenticates against the Harvest v1/v2 API, which sunsets on August 31, 2026. Use the **OAuth 2.0 Client Credentials (Harvest V3)** connection for the Harvest v3 API instead.

The Greenhouse Harvest API uses Basic Auth over HTTPS for authentication. The username is the Greenhouse API token and the password should be blank. Unauthenticated requests will return an HTTP 401 response.

#### Prerequisites

- A Greenhouse user with the **Can manage ALL organization's API Credentials** permission granted in the **Developer permission** section.

#### Setup Steps

1. Sign in to Greenhouse as a user with the required developer permissions.
2. Navigate to **Configure** > **Dev Center** > **API Credential Management**.
3. Create a Harvest API key and select which endpoints it may access:
   - **API Type**: Harvest
   - **Partner**: Custom
4. Click **Manage Permissions** to continue.
5. Copy the generated API key and store it in a secure location.
6. Click **I have stored the API key** to continue.
7. Select the actions this credential will be allowed to submit. Recommended sections for getting started:
   - Users
   - Applications
   - Jobs
   - Candidates
   - Custom Field Options
8. Optionally configure granular permissions for each section, then click **Save** to complete the setup.

#### Configure the Connection

1. Create a connection of type **API Key (Harvest v1/v2)**.
2. Enter the generated API token in the **API Key** field.

| Input   | Comments                                                                                                                                          | Default |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| API Key | The API key for the Greenhouse user. API keys can be generated in Greenhouse by navigating to Configure > Dev Center > API Credential Management. |         |

### OAuth 2.0 Client Credentials (Harvest V3) {#oauth2clientcredentials}

Authenticate requests to Greenhouse using OAuth 2.0 client credentials.

The Greenhouse Harvest v3 API uses the OAuth 2.0 client credentials flow for authentication. Access tokens are obtained automatically at execution time by exchanging the client ID and client secret. No browser-based authorization is required.

#### Prerequisites

- A Greenhouse user with permission to manage the organization's API credentials.

#### Setup Steps

1. Sign in to Greenhouse as a user with the required developer permissions.
2. Open **API Credentials** and click **Create new API credentials**.
3. Select **Harvest V3 (OAuth)** as the credential type.
4. Select the endpoints this credential will be allowed to access. Recommended sections for getting started:
   - Applications
   - Candidates
   - Jobs
   - Users
5. Copy the generated **Client ID** and **Client Secret** and store them in a secure location.

#### Configure the Connection

1. Create a connection of type **OAuth 2.0 Client Credentials (Harvest V3)**.
2. Enter the **Client ID** from the generated credentials.
3. Enter the **Client Secret** from the generated credentials.

#### Request Attribution

All requests act as the integration service user attached to the credentials. Harvest write endpoints attribute changes to that user for auditing purposes.

Refer to the [authentication documentation](https://harvestdocs.greenhouse.io/docs/authentication) for additional details.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                             | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Client ID     | The client ID of your Greenhouse custom integration. Credentials can be created in Greenhouse under API Credentials by selecting Harvest V3 (OAuth). |         |
| Client Secret | The client secret of your Greenhouse custom integration.                                                                                             |         |

## Triggers

### New and Updated Applications {#pollchangestriggerv3}

Checks for new and updated applications in Greenhouse on a configured schedule.

| Input                | Comments                                                                                          | Default |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                                 |         |
| Show New Records     | When true, newly created applications are included in the trigger output.                         | true    |
| Show Updated Records | When true, applications with new activity since the last poll are included in the trigger output. | true    |

### New and Updated Applications (Harvest v1/v2) {#pollchangestrigger}

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

### Activate User {#activateuserv3}

Activates an existing user.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Greenhouse connection to use. |         |
| User ID    | The numeric Greenhouse user ID.   |         |

### Create Attachment {#createattachmentv3}

Uploads or links an attachment to an application.

| Input                 | Comments                                                                                                                       | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection            | The Greenhouse connection to use.                                                                                              |         |
| Application ID        | The ID of the application that will receive this attachment.                                                                   |         |
| Filename              | Name of the file including its extension (e.g. resume.pdf). Certain blocked extensions are rejected by the API.                |         |
| Attachment Type       | Classification of the document. Determines access defaults and display grouping in Greenhouse.                                 |         |
| File Content (Base64) | Base64-encoded bytes of the file to upload. Provide this OR File URL — not both and not neither.                               |         |
| File URL              | Publicly accessible URL from which Greenhouse will download the file. Provide this OR File Content — not both and not neither. |         |
| Visibility            | Access level for the attachment within Greenhouse. When omitted, the default is inferred from the attachment type.             |         |

### Create Candidate {#createcandidatev3}

Creates a new candidate, optionally with an application.

| Input                  | Comments                                                                                                                                                                                                                                                                                                             | Default                 |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection             | The Greenhouse connection to use.                                                                                                                                                                                                                                                                                    |                         |
| First Name             | The candidate's legal first name.                                                                                                                                                                                                                                                                                    |                         |
| Last Name              | The candidate's legal last name.                                                                                                                                                                                                                                                                                     |                         |
| Preferred Name         | Preferred or chosen name the candidate goes by, when different from their legal first name.                                                                                                                                                                                                                          |                         |
| Company                | The company name associated with the candidate.                                                                                                                                                                                                                                                                      |                         |
| Title                  | The job title associated with the candidate.                                                                                                                                                                                                                                                                         |                         |
| Time Zone              | Rails-style timezone identifier. Example values: "Eastern Time (US & Canada)", "Pacific Time (US & Canada)", "UTC".                                                                                                                                                                                                  |                         |
| Can Email              | Whether the candidate consented to receive email communication. Defaults to true when omitted.                                                                                                                                                                                                                       | false                   |
| Phone Numbers          | The JSON array of phone numbers for the candidate. Passing an empty array will clear all. Format: JSON array of objects.                                                                                                                                                                                             |                         |
| Addresses              | The JSON array of postal addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.                                                                                                                                                                                          |                         |
| Email Addresses        | The JSON array of email addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.                                                                                                                                                                                           |                         |
| Website Addresses      | The JSON array of website addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.                                                                                                                                                                                         |                         |
| Social Media Addresses | The JSON array of social media addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.                                                                                                                                                                                    |                         |
| Tags                   | The tags to assign to the candidate as an array of strings. Passing an empty array will clear all.                                                                                                                                                                                                                   | <code>["000xxx"]</code> |
| Linked User IDs        | Array of Greenhouse user IDs to link to this candidate. Replaces all existing linked users when provided.                                                                                                                                                                                                            |                         |
| Custom Fields          | JSON array of custom field values. Each item must include either name_key (string) or custom_field_id (integer), plus a value.                                                                                                                                                                                       |                         |
| Application            | Optional JSON object to create an application alongside the candidate. For a job applicant, include 'job_id' (integer). For a prospect, include 'prospect: true'. Recruiter, coordinator, source, and stage IDs live here in v3 (not on the top-level candidate). Omit to create a candidate without an application. |                         |

### Create Candidate (Harvest v1/v2) {#createcandidate}

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

### Create Job {#createjobv3}

Creates a new job from an existing template.

| Input                  | Comments                                                                                                                                                                 | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Greenhouse connection to use.                                                                                                                                        |         |
| Template Job ID        | The unique identifier for the job used as a template. The new job will inherit most settings from this template job. The On-Behalf-Of user must have access to this job. |         |
| Number of Openings     | The number of openings to create for this job. The total open openings across the job cannot exceed 100.                                                                 |         |
| Job Name               | The internal name of the new job. When omitted, the name of the new job will be "Copy Of (the template job's name)".                                                     |         |
| Job Post Name          | The display name for the new job post. When omitted, the job post names from the base job are copied.                                                                    |         |
| Notes                  | The free-form notes attached to the hiring plan.                                                                                                                         |         |
| Requisition ID         | Partner-supplied external identifier for this job. Free-form string; non-unique across the organization.                                                                 |         |
| Department ID          | The Greenhouse department ID to assign to this job. In v3 each job has a single department (not an array). If omitted, inherits from the template.                       |         |
| External Department ID | Partner external identifier for the department. Mutually exclusive with Department ID — provide one or the other, never both.                                            |         |
| Office IDs             | Greenhouse office IDs to assign to the new job. In v3 this is an integer array. If omitted, inherits from the template. Mutually exclusive with External Office IDs.     |         |
| External Office IDs    | Partner external identifiers for offices. Mutually exclusive with Office IDs — provide one or the other, never both.                                                     |         |
| Opening IDs            | Partner identifiers for each opening created, positionally paired with the openings. Must match the Number of Openings count when provided.                              |         |
| Custom Fields          | JSON array of custom field values. Each item must include either name_key (string) or custom_field_id (integer), plus a value.                                           |         |

### Create Job (Harvest v1/v2) {#createjob}

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

### Create User {#createuserv3}

Creates a new user in Greenhouse.

| Input                   | Comments                                                                                                                                            | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Greenhouse connection to use.                                                                                                                   |         |
| First Name              | The user's first name (max 255 characters).                                                                                                         |         |
| Last Name               | The user's last name (max 255 characters).                                                                                                          |         |
| Primary Email           | Primary email address for the new user — used as the sign-in identifier and for Greenhouse invitation mail. Must be unique within the organization. |         |
| Send Email Invite       | When true, Greenhouse sends the new user an invitation email to set a password and sign in. Defaults to false.                                      | false   |
| Job Title               | Free-form job title displayed on the user's Greenhouse profile (max 255 characters).                                                                |         |
| Employee ID             | External employee identifier (e.g. HRIS or payroll ID, max 255 characters). Must be unique within the organization.                                 |         |
| Office IDs              | Greenhouse office IDs to assign to this user. Replaces all current assignments. Mutually exclusive with External Office IDs.                        |         |
| External Office IDs     | External office identifiers (from your HRIS). Replaces all current assignments. Mutually exclusive with Office IDs.                                 |         |
| Department IDs          | Greenhouse department IDs to assign to this user. Replaces all current assignments. Mutually exclusive with External Department IDs.                |         |
| External Department IDs | External department identifiers (from your HRIS). Replaces all current assignments. Mutually exclusive with Department IDs.                         |         |
| Interviewer Tag IDs     | IDs of interviewer tags to apply to this user. For edit operations, replaces all current tags.                                                      |         |
| Custom Fields           | JSON array of custom field values. Each item must include either name_key (string) or custom_field_id (integer), plus a value.                      |         |

### Create User (Harvest v1/v2) {#createuser}

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

### Deactivate User {#deactivateuserv3}

Deactivates an existing user.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Greenhouse connection to use. |         |
| User ID    | The numeric Greenhouse user ID.   |         |

### Delete Application {#deleteapplicationv3}

Permanently deletes an application by ID.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Greenhouse connection to use.          |         |
| Application ID | The unique identifier for the application. |         |

### Delete Application (Harvest v1/v2) {#deleteapplication}

Deletes an application by ID.

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                       |         |
| API Version          | The version of the Greenhouse Harvest API to use. Defaults to "v1".                     | v1      |
| Application ID       | The unique identifier for the application.                                              |         |
| On Behalf Of User ID | The unique identifier of the user issuing this request. Required for auditing purposes. |         |

### Delete Attachment {#deleteattachmentv3}

Permanently deletes an attachment from its application.

| Input         | Comments                                                   | Default |
| ------------- | ---------------------------------------------------------- | ------- |
| Connection    | The Greenhouse connection to use.                          |         |
| Attachment ID | The unique numeric identifier of the attachment to delete. |         |

### Delete Candidate {#deletecandidatev3}

Permanently deletes a candidate and all associated records.

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The Greenhouse connection to use.        |         |
| Candidate ID | The unique identifier for the candidate. |         |

### Delete Candidate (Harvest v1/v2) {#deletecandidate}

Deletes a candidate by ID.

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                       |         |
| API Version          | The version of the Greenhouse Harvest API to use. Defaults to "v1".                     | v1      |
| On Behalf Of User ID | The unique identifier of the user issuing this request. Required for auditing purposes. |         |
| Candidate ID         | ID of the candidate to delete.                                                          |         |

### Disable User (Harvest v1/v2) {#disableuser}

Disables an existing user.

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                       |         |
| API Version          | The version of the Greenhouse Harvest API to use. Defaults to "v1".                     | v2      |
| On Behalf Of User ID | The unique identifier of the user issuing this request. Required for auditing purposes. |         |
| Email                | The email address of the user. Must be a valid email address.                           |         |

### Edit Application {#editapplicationv3}

Updates an application by ID.

| Input             | Comments                                                                                                                       | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Greenhouse connection to use.                                                                                              |         |
| Application ID    | The unique identifier for the application.                                                                                     |         |
| Source ID         | The unique identifier for the source of the application.                                                                       |         |
| Referrer ID       | The numeric ID of the referrer.                                                                                                |         |
| Recruiter ID      | The numeric Greenhouse user ID of the assigned recruiter.                                                                      |         |
| Coordinator ID    | The numeric Greenhouse user ID of the assigned coordinator.                                                                    |         |
| Prospect Pool ID  | The unique identifier for the prospect pool for the application.                                                               |         |
| Prospect Stage ID | The unique identifier for the prospect pool stage for the application.                                                         |         |
| Rejected At       | The rejection date for this application. Format: ISO-8601 date.                                                                |         |
| Custom Fields     | JSON array of custom field values. Each item must include either name_key (string) or custom_field_id (integer), plus a value. |         |

### Edit Application (Harvest v1/v2) {#editapplication}

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

### Edit Candidate {#editcandidatev3}

Updates an existing candidate.

| Input                  | Comments                                                                                                                          | Default                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection             | The Greenhouse connection to use.                                                                                                 |                         |
| Candidate ID           | The unique identifier for the candidate.                                                                                          |                         |
| First Name             | The candidate's legal first name. If provided, cannot be blank.                                                                   |                         |
| Last Name              | The candidate's legal last name. If provided, cannot be blank.                                                                    |                         |
| Preferred Name         | Preferred or chosen name the candidate goes by, when different from their legal first name.                                       |                         |
| Company                | The company name associated with the candidate.                                                                                   |                         |
| Title                  | The job title associated with the candidate.                                                                                      |                         |
| Time Zone              | Rails-style timezone identifier. Example values: "Eastern Time (US & Canada)", "Pacific Time (US & Canada)", "UTC".               |                         |
| Can Email              | Whether the candidate consented to receive email communication. Defaults to true when omitted.                                    | false                   |
| Is Private             | When true, the candidate will be marked as private.                                                                               | false                   |
| Phone Numbers          | The JSON array of phone numbers for the candidate. Passing an empty array will clear all. Format: JSON array of objects.          |                         |
| Addresses              | The JSON array of postal addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.       |                         |
| Email Addresses        | The JSON array of email addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.        |                         |
| Website Addresses      | The JSON array of website addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects.      |                         |
| Social Media Addresses | The JSON array of social media addresses for the candidate. Passing an empty array will clear all. Format: JSON array of objects. |                         |
| Tags                   | The tags to assign to the candidate as an array of strings. Passing an empty array will clear all.                                | <code>["000xxx"]</code> |
| Linked User IDs        | Array of Greenhouse user IDs to link to this candidate. Replaces all existing linked users when provided.                         |                         |
| Custom Fields          | JSON array of custom field values. Each item must include either name_key (string) or custom_field_id (integer), plus a value.    |                         |

### Edit Candidate (Harvest v1/v2) {#editcandidate}

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

### Edit Job {#editjobv3}

Updates an existing job by ID.

| Input                     | Comments                                                                                                                                                                                                                                               | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                | The Greenhouse connection to use.                                                                                                                                                                                                                      |         |
| Job ID                    | The numeric ID of the job.                                                                                                                                                                                                                             |         |
| Job Name                  | The internal name of the new job. When omitted, the name of the new job will be "Copy Of (the template job's name)".                                                                                                                                   |         |
| Notes                     | The free-form notes attached to the hiring plan.                                                                                                                                                                                                       |         |
| Requisition ID            | Partner-supplied external identifier. Pass null to clear. Free-form string; non-unique across the organization.                                                                                                                                        |         |
| Team and Responsibilities | The description of the team the candidate would join and the responsibilities of the role.                                                                                                                                                             |         |
| How to Sell This Job      | The recruiter-facing description of the desirable aspects of the job.                                                                                                                                                                                  |         |
| Anywhere                  | When true, marks the job as remote-anywhere and clears office assignments. Cannot be combined with office_ids.                                                                                                                                         | false   |
| Office IDs                | Greenhouse office IDs to assign to this job. IMPORTANT: this is a WHOLESALE REPLACEMENT — the supplied list entirely replaces the existing office set. Send the complete desired list, not a delta.                                                    |         |
| External Office IDs       | Partner external identifiers for offices — wholesale replacement. Mutually exclusive with Office IDs.                                                                                                                                                  |         |
| Department ID             | The Greenhouse department ID to assign. In v3 each job has a single department. Pass null to clear.                                                                                                                                                    |         |
| External Department ID    | Partner external identifier for the department. Mutually exclusive with Department ID — provide one or the other, never both.                                                                                                                          |         |
| Custom Fields             | JSON array of custom field values. IMPORTANT: this is a WHOLESALE REPLACEMENT — the supplied array entirely replaces the existing custom field collection. Each item must include either name_key (string) or custom_field_id (integer), plus a value. |         |

### Edit Job (Harvest v1/v2) {#editjob}

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

### Edit User {#edituserv3}

Updates an existing user in Greenhouse.

| Input                   | Comments                                                                                                                             | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Greenhouse connection to use.                                                                                                    |         |
| User ID                 | The numeric Greenhouse user ID.                                                                                                      |         |
| First Name              | The user's first name (max 255 characters). If provided, cannot be blank.                                                            |         |
| Last Name               | The user's last name (max 255 characters). If provided, cannot be blank.                                                             |         |
| Primary Email           | New primary email — must already be a verified email address on the user's account.                                                  |         |
| Job Title               | Free-form job title displayed on the user's Greenhouse profile (max 255 characters).                                                 |         |
| Employee ID             | External employee identifier (e.g. HRIS or payroll ID, max 255 characters). Must be unique within the organization.                  |         |
| Office IDs              | Greenhouse office IDs to assign to this user. Replaces all current assignments. Mutually exclusive with External Office IDs.         |         |
| External Office IDs     | External office identifiers (from your HRIS). Replaces all current assignments. Mutually exclusive with Office IDs.                  |         |
| Department IDs          | Greenhouse department IDs to assign to this user. Replaces all current assignments. Mutually exclusive with External Department IDs. |         |
| External Department IDs | External department identifiers (from your HRIS). Replaces all current assignments. Mutually exclusive with Department IDs.          |         |
| Interviewer Tag IDs     | IDs of interviewer tags to apply to this user. For edit operations, replaces all current tags.                                       |         |
| Custom Fields           | JSON array of custom field values. Each item must include either name_key (string) or custom_field_id (integer), plus a value.       |         |

### Edit User (Harvest v1/v2) {#edituser}

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

### Enable User (Harvest v1/v2) {#enableuser}

Enables an existing user.

| Input                | Comments                                                                                | Default |
| -------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                       |         |
| API Version          | The version of the Greenhouse Harvest API to use. Defaults to "v1".                     | v2      |
| On Behalf Of User ID | The unique identifier of the user issuing this request. Required for auditing purposes. |         |
| Email                | The email address of the user. Must be a valid email address.                           |         |

### Get Application {#getapplicationv3}

Retrieves a single application by ID.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Greenhouse connection to use.          |         |
| Application ID | The unique identifier for the application. |         |

### Get Application (Harvest v1/v2) {#getapplication}

Retrieves an application by ID.

| Input          | Comments                                                            | Default |
| -------------- | ------------------------------------------------------------------- | ------- |
| Connection     | The Greenhouse connection to use.                                   |         |
| API Version    | The version of the Greenhouse Harvest API to use. Defaults to "v1". | v1      |
| Application ID | The unique identifier for the application.                          |         |

### Get Candidate {#getcandidatev3}

Retrieves a single candidate by ID.

| Input        | Comments                                 | Default |
| ------------ | ---------------------------------------- | ------- |
| Connection   | The Greenhouse connection to use.        |         |
| Candidate ID | The unique identifier for the candidate. |         |

### Get Candidate (Harvest v1/v2) {#getcandidate}

Retrieves a candidate by ID.

| Input        | Comments                                                            | Default |
| ------------ | ------------------------------------------------------------------- | ------- |
| Connection   | The Greenhouse connection to use.                                   |         |
| API Version  | The version of the Greenhouse Harvest API to use. Defaults to "v1". | v1      |
| Candidate ID | The unique identifier for the candidate.                            |         |

### Get Job {#getjobv3}

Retrieves a single job by ID.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Greenhouse connection to use. |         |
| Job ID     | The numeric ID of the job.        |         |

### Get Job (Harvest v1/v2) {#getjob}

Retrieves a job by ID.

| Input       | Comments                                                                                                                                             | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Greenhouse connection to use.                                                                                                                    |         |
| API Version | The version of the Greenhouse Harvest API to use. Defaults to "v1".                                                                                  | v1      |
| Job ID      | The unique identifier for the job to filter by. When supplied, only candidates that have applied to this job (or are prospects for it) are returned. |         |

### Get User {#getuserv3}

Retrieves a single user by ID.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Greenhouse connection to use. |         |
| User ID    | The numeric Greenhouse user ID.   |         |

### Get User (Harvest v1/v2) {#getuser}

Retrieves a user by ID.

| Input                | Comments                                                            | Default |
| -------------------- | ------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                   |         |
| API Version          | The version of the Greenhouse Harvest API to use. Defaults to "v1". | v1      |
| On Behalf Of User ID | ID of the user to get.                                              |         |

### List Applications {#listapplicationsv3}

Retrieves a list of applications.

| Input                      | Comments                                                                                                                                                                                    | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The Greenhouse connection to use.                                                                                                                                                           |         |
| Fetch All                  | When true, fetches all pages of results by following the response Link headers. Page Size and Cursor are ignored.                                                                           | false   |
| Page Size                  | The maximum number of results to return per page. Must be an integer between 1 and 500. Defaults to 100.                                                                                    |         |
| Cursor                     | The opaque pagination cursor from a previous response's Link header. When provided, it is sent as the only query parameter — the API rejects cursor requests that carry additional filters. |         |
| Application IDs            | Comma-separated list of specific application IDs to fetch. Maximum 50 items.                                                                                                                |         |
| Candidate IDs              | Comma-separated list of candidate IDs to filter by. Maximum 50 items.                                                                                                                       |         |
| Job IDs                    | Comma-separated list of current job (hiring plan) IDs to filter by. Maximum 50 items.                                                                                                       |         |
| Prospective Job IDs        | Comma-separated list of prospective job placement IDs to filter by. Maximum 50 items.                                                                                                       |         |
| Job Post IDs               | Comma-separated list of job post IDs to filter by. Maximum 50 items.                                                                                                                        |         |
| Source IDs                 | Comma-separated list of source IDs to filter by. Maximum 50 items.                                                                                                                          |         |
| Referrer IDs               | Comma-separated list of referrer IDs to filter by. Maximum 50 items.                                                                                                                        |         |
| Stage IDs                  | Comma-separated list of interview stage IDs to filter by. Maximum 50 items.                                                                                                                 |         |
| Status                     | The status to filter applications by. Accepted values are active, converted, hired, and rejected. If anything else is used, an empty response will be returned rather than an error.        |         |
| Stage Name                 | Filter by interview stage name. Match is exact and case-sensitive.                                                                                                                          |         |
| Prospect                   | When true, returns only prospect applications. When false, returns only candidate applications. Omit to return both.                                                                        | false   |
| Created At or After        | The lower bound timestamp filter — sent as created_at[gte]. Format: ISO-8601.                                                                                                               |         |
| Created At or Before       | The upper bound timestamp filter — sent as created_at[lte]. Format: ISO-8601.                                                                                                               |         |
| Updated At or After        | The lower bound timestamp filter — sent as updated_at[gte]. Format: ISO-8601.                                                                                                               |         |
| Updated At or Before       | The upper bound timestamp filter — sent as updated_at[lte]. Format: ISO-8601.                                                                                                               |         |
| Last Activity At or After  | The lower bound timestamp filter — sent as last_activity_at[gte]. Format: ISO-8601.                                                                                                         |         |
| Last Activity At or Before | The upper bound timestamp filter — sent as last_activity_at[lte]. Format: ISO-8601.                                                                                                         |         |

### List Applications (Harvest v1/v2) {#listapplications}

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

### List Attachments {#listattachmentsv3}

Retrieves a list of attachments.

| Input                | Comments                                                                                                                                                                                    | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                                                                                                                           |         |
| Fetch All            | When true, fetches all pages of results by following the response Link headers. Page Size and Cursor are ignored.                                                                           | false   |
| Page Size            | The maximum number of results to return per page. Must be an integer between 1 and 500. Defaults to 100.                                                                                    |         |
| Cursor               | The opaque pagination cursor from a previous response's Link header. When provided, it is sent as the only query parameter — the API rejects cursor requests that carry additional filters. |         |
| Attachment IDs       | Comma-separated list of specific attachment IDs to fetch. Maximum 50 items.                                                                                                                 |         |
| Application IDs      | Comma-separated list of application IDs to filter by. Maximum 50 items.                                                                                                                     |         |
| Candidate IDs        | Comma-separated list of candidate IDs — returns only attachments whose application belongs to one of these candidates. Maximum 50 items.                                                    |         |
| Attachment Type      | Return only attachments of this type. When omitted, all types are included.                                                                                                                 |         |
| Created At or After  | The lower bound timestamp filter — sent as created_at[gte]. Format: ISO-8601.                                                                                                               |         |
| Created At or Before | The upper bound timestamp filter — sent as created_at[lte]. Format: ISO-8601.                                                                                                               |         |
| Updated At or After  | The lower bound timestamp filter — sent as updated_at[gte]. Format: ISO-8601.                                                                                                               |         |
| Updated At or Before | The upper bound timestamp filter — sent as updated_at[lte]. Format: ISO-8601.                                                                                                               |         |

### List Candidates {#listcandidatesv3}

Retrieves a list of candidates.

| Input                      | Comments                                                                                                                                                                                    | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The Greenhouse connection to use.                                                                                                                                                           |         |
| Fetch All                  | When true, fetches all pages of results by following the response Link headers. Page Size and Cursor are ignored.                                                                           | false   |
| Page Size                  | The maximum number of results to return per page. Must be an integer between 1 and 500. Defaults to 100.                                                                                    |         |
| Cursor                     | The opaque pagination cursor from a previous response's Link header. When provided, it is sent as the only query parameter — the API rejects cursor requests that carry additional filters. |         |
| Candidate IDs              | The comma-separated list of candidate IDs to return (e.g. '123,456,789'). A maximum of 50 candidates can be returned this way.                                                              |         |
| Email                      | Return only candidates who have this email address on their profile (exact match).                                                                                                          |         |
| Tag                        | Filter by candidate tag name (exact match).                                                                                                                                                 |         |
| Include Private Candidates | When true (default), private candidates are included in results. Set to false to return only non-private candidates.                                                                        | true    |
| Created At or After        | The lower bound timestamp filter — sent as created_at[gte]. Format: ISO-8601.                                                                                                               |         |
| Created At or Before       | The upper bound timestamp filter — sent as created_at[lte]. Format: ISO-8601.                                                                                                               |         |
| Updated At or After        | The lower bound timestamp filter — sent as updated_at[gte]. Format: ISO-8601.                                                                                                               |         |
| Updated At or Before       | The upper bound timestamp filter — sent as updated_at[lte]. Format: ISO-8601.                                                                                                               |         |

### List Candidates (Harvest v1/v2) {#listcandidates}

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

### List Jobs {#listjobsv3}

Retrieves a list of jobs.

| Input                | Comments                                                                                                                                                                                    | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Greenhouse connection to use.                                                                                                                                                           |         |
| Fetch All            | When true, fetches all pages of results by following the response Link headers. Page Size and Cursor are ignored.                                                                           | false   |
| Page Size            | The maximum number of results to return per page. Must be an integer between 1 and 500. Defaults to 100.                                                                                    |         |
| Cursor               | The opaque pagination cursor from a previous response's Link header. When provided, it is sent as the only query parameter — the API rejects cursor requests that carry additional filters. |         |
| Job IDs              | Comma-separated list of specific job IDs to fetch. Maximum 50 items.                                                                                                                        |         |
| Requisition ID       | Filter by external requisition identifier. Non-unique — may match multiple jobs across the organization.                                                                                    |         |
| Status               | Filter by job lifecycle status. One of: open, draft, or closed.                                                                                                                             |         |
| Department ID        | The Greenhouse department ID. In v3 each job has a single department (not an array).                                                                                                        |         |
| Office ID            | Filter by office ID. Returns jobs that include this office in their office_ids array.                                                                                                       |         |
| Confidential         | Filter legacy confidential jobs. When true, returns only confidential jobs.                                                                                                                 | false   |
| Created At or After  | The lower bound timestamp filter — sent as created_at[gte]. Format: ISO-8601.                                                                                                               |         |
| Created At or Before | The upper bound timestamp filter — sent as created_at[lte]. Format: ISO-8601.                                                                                                               |         |
| Updated At or After  | The lower bound timestamp filter — sent as updated_at[gte]. Format: ISO-8601.                                                                                                               |         |
| Updated At or Before | The upper bound timestamp filter — sent as updated_at[lte]. Format: ISO-8601.                                                                                                               |         |

### List Jobs (Harvest v1/v2) {#listjobs}

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

### List Users {#listusersv3}

Retrieves a list of users.

| Input                 | Comments                                                                                                                                                                                    | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Greenhouse connection to use.                                                                                                                                                           |         |
| Fetch All             | When true, fetches all pages of results by following the response Link headers. Page Size and Cursor are ignored.                                                                           | false   |
| Page Size             | The maximum number of results to return per page. Must be an integer between 1 and 500. Defaults to 100.                                                                                    |         |
| Cursor                | The opaque pagination cursor from a previous response's Link header. When provided, it is sent as the only query parameter — the API rejects cursor requests that carry additional filters. |         |
| User IDs              | Comma-separated list of specific user IDs to fetch. Maximum 50 items.                                                                                                                       |         |
| Office IDs            | Comma-separated list of Greenhouse office IDs to filter by. Maximum 50 items.                                                                                                               |         |
| Department IDs        | Comma-separated list of Greenhouse department IDs to filter by. Maximum 50 items.                                                                                                           |         |
| Deactivated           | When set, filters users by activation state. Omit to return both active and deactivated users.                                                                                              | false   |
| Primary Email         | Exact-match filter on the user's primary email address.                                                                                                                                     |         |
| Show Service Accounts | When true, includes integration and service-account users in results. Defaults to false.                                                                                                    | false   |
| Created At or After   | The lower bound timestamp filter — sent as created_at[gte]. Format: ISO-8601.                                                                                                               |         |
| Created At or Before  | The upper bound timestamp filter — sent as created_at[lte]. Format: ISO-8601.                                                                                                               |         |
| Updated At or After   | The lower bound timestamp filter — sent as updated_at[gte]. Format: ISO-8601.                                                                                                               |         |
| Updated At or Before  | The upper bound timestamp filter — sent as updated_at[lte]. Format: ISO-8601.                                                                                                               |         |

### List Users (Harvest v1/v2) {#listusers}

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

### Raw Request {#rawrequestv3}

Sends a raw HTTP request to Greenhouse.

| Input                   | Comments                                                                                                                                                                                                 | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Greenhouse connection to use.                                                                                                                                                                        |         |
| URL                     | Input the path only (/jobs), The base URL is already included (https://harvest.greenhouse.io/v3). For example, to connect to https://harvest.greenhouse.io/v3/jobs, only /jobs is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                  |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                     |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                         |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                   |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                      |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                              |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                 | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                      |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                      | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.         | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                      | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                            | false   |

### Raw Request (Harvest v1/v2) {#rawrequest}

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

### Reject Application {#rejectapplicationv3}

Rejects an application with a specified rejection reason.

| Input               | Comments                                                                                                                       | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          | The Greenhouse connection to use.                                                                                              |         |
| Application ID      | The unique identifier for the application.                                                                                     |         |
| Rejection Reason ID | The numeric ID of the rejection reason. Required by the Harvest v3 reject endpoint.                                            |         |
| Rejection Notes     | Additional context about the rejection decision.                                                                               |         |
| Send Email At       | Schedule the rejection email for a future timestamp. Format: ISO-8601 date-time.                                               |         |
| Email Template ID   | The numeric ID of the email template to use for the rejection message.                                                         |         |
| Email From User ID  | The numeric Greenhouse user ID to send the rejection email on behalf of.                                                       |         |
| Custom Fields       | JSON array of custom field values. Each item must include either name_key (string) or custom_field_id (integer), plus a value. |         |

### Unreject Application {#unrejectapplicationv3}

Reverses the rejection of an application.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Greenhouse connection to use.          |         |
| Application ID | The unique identifier for the application. |         |
