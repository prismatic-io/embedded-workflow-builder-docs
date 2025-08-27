---
title: Rippling Connector
sidebar_label: Rippling
description: Rippling makes it easy to manage your company's Payroll, Benefits, HR, and IT—all in one, modern platform
---

![Rippling](./assets/rippling.png#connector-icon)
Rippling makes it easy to manage your company&#x27;s Payroll, Benefits, HR, and IT—all in one, modern platform

## Connections

### Bearer API Key

If you are using Rippling's API to access endpoints on behalf of your own company, please use your API key

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Authorization |          |         |

### OAuth 2.0

To use OAuth 2.0 with Rippling you will need to coordinate with them in accordance with their [Partner Requirements](https://developer.rippling.com/documentation/distribute/getting-started/requirements). Additionally, you may also refer to the [Installation OAuth Guide](https://developer.rippling.com/documentation/distribute/guides/installation).

Ensure to supply the callback URL: Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.

You will need to collect a valid **Client ID**, **Client Secret**, and **Authorize URL** from this process.

Once you have this information you can create a connection:

- Enter the **Client ID**, **Client Secret**, and **Authorize URL** to the same named fields.
- Add space delimited scopes to that field. Refer to [Rippling's scopes documentation](https://developer.rippling.com/documentation/base-api/scopes) for details.

Save your integration and you should now be able to connect to Rippling.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                            | Default |
| ----------------- | --------------------------------------------------- | ------- |
| Authorization URL | Authorization URL from Rippling                     |         |
| Scopes            | Space-delimited scopes                              |         |
| Client ID         | Client identifier for your app supplied by Rippling |         |
| Client Secret     | Client secret for your app supplied by Rippling     |         |

## Actions

### Delete Groups Group Id

DELETE Group

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection |                                                 |         |
| Group Id   | Unique identifier for the group within Rippling |         |

### Get Companies

GET Current Company

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Company Activity

GET Company Activity

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection |                                                                         |         |
| Start Date | Timestamp to list activity after (inclusive)                            |         |
| End Date   | Timestamp to list activity before (inclusive)                           |         |
| Next       | Specifies the pagination cursor to the next page                        |         |
| Limit      | Specifies the number of results to page (maximum: 1000) (default: 1000) |         |

### Get Custom Fields

GET Custom Fields

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Limit      | Sets a limit on the returned values |         |
| Offset     | Offsets the returned values         |         |

### Get Departments

GET Departments

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Limit      | Sets a limit on the returned values |         |
| Offset     | Offsets the returned values         |         |

### Get Employees

GET Employees

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Limit      | Sets a limit on the returned values |         |
| Offset     | Offsets the returned values         |         |

### Get Employees Employee Id

GET Employee

| Input       | Comments                                           | Default |
| ----------- | -------------------------------------------------- | ------- |
| Connection  |                                                    |         |
| Employee Id | Unique identifier for the employee within Rippling |         |

### Get Employees Include Terminated

GET Employees (Including Terminated)

| Input      | Comments                                                                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                   |         |
| Limit      | Sets a limit on the returned values                                                                                               |         |
| Offset     | Offsets the returned values                                                                                                       |         |
| EIN        | Employer identification number, also known as the Federal Emplower Identification Number or the Federal Tax Identification Number |         |

### Get Groups

GET Groups

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Leave Requests

GET Leave Requests

| Input        | Comments                                                               | Default |
| ------------ | ---------------------------------------------------------------------- | ------- |
| Connection   |                                                                        |         |
| Id           |                                                                        |         |
| Role         |                                                                        |         |
| Requested By |                                                                        |         |
| Status       |                                                                        |         |
| Start Date   | Start date of leave                                                    |         |
| End Date     | End date of leave                                                      |         |
| Leave Policy |                                                                        |         |
| Processed By |                                                                        |         |
| From         | Filter to capture whether the leave request overlaps with a date range |         |
| To           | Filter to capture whether the leave request overlaps with a date range |         |

### Get Levels

GET Levels

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Limit      | Sets a limit on the returned values |         |
| Offset     | Offsets the returned values         |         |

### Get Me

GET Current User

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Saml Idp Metadata

GET SAML Metadata

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Teams

GET Teams

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Limit      | Sets a limit on the returned values |         |
| Offset     | Offsets the returned values         |         |

### Get Work Locations

GET Work Locations

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Limit      | Sets a limit on the returned values |         |
| Offset     | Offsets the returned values         |         |

### Patch Groups Group Id

PATCH Group

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection |                                                 |         |
| Group Id   | Unique identifier for the group within Rippling |         |
| Name       | The name of the Group                           |         |
| Spoke Id   | The external identifier of the Group            |         |
| Users      | The array of users within the Group             |         |
| Version    | The version identifier of the Group             |         |

### Post Ats Candidates Push Candidate

POST New Candidate

| Input           | Comments                                                                                                | Default |
| --------------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                         |         |
| Name            | The candidate's name                                                                                    |         |
| Email           | The candidate's email                                                                                   |         |
| Phone Number    | The candidate's phone number                                                                            |         |
| Job Title       | The candidate's job title                                                                               |         |
| Candidate Id    | The unique identifier of the candidate from the ATS                                                     |         |
| Start Date      | The would-be start date of the candidate                                                                |         |
| Department      | The department name as a string                                                                         |         |
| Salary Unit     | An ENUM string value, denoting the frequency at which the candidate should be paid once the role begins |         |
| Salary Per Unit | The decimal value that the candidate gets paid every salaryUnit time period                             |         |
| Signing Bonus   | The bonus cash given to the candidate as a part of a one time payment, with two decimal digit precision |         |
| Equity Shares   | The number of shares that will be given to the candidate                                                |         |
| Currency        | A string field of the ofifcial currency doe as listed in ISO 4217                                       |         |
| Employment Type | The ENUM type of employment the user will have within Rippling                                          |         |
| Attachments     |                                                                                                         |         |

### Post Groups

POST Groups

| Input      | Comments                                                                                                           | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                                    |         |
| Name       | User-readable name of the group                                                                                    |         |
| Spoke Id   | The unique ID for the group, this can be the unique identifier for the group entity object within your application |         |
| Users      | An array of Rippling IDs that will be in the group                                                                 |         |

### Post Mark App Installed

Mark App Installed

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Process Leave Requests

POST Process Leave Request

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection |                                                        |         |
| Id         | Unique identifier of the leave request being processed |         |
| Action     | The action to be taken on the leave request            |         |

### Put Groups Group Id

PUT Group

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection |                                                 |         |
| Group Id   | Unique identifier for the group within Rippling |         |
| Name       | The name of the Group                           |         |
| Spoke Id   | The external identifier of the Group            |         |
| Users      | The array of users within the Group             |         |
| Version    | The version identifier of the Group             |         |

### Raw Request

Send raw HTTP request to Rippling

| Input                   | Comments                                                                                                                                                                                                                                                  | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                           |         |
| URL                     | Input the path only (/companies/current), The base URL is already included (https://api.rippling.com/platform/api). For example, to connect to https://api.rippling.com/platform/api/companies/current, only /companies/current is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                   |         |
| Data                    | The HTTP body payload to send to the URL. Must be a string or a reference to output from a previous step.                                                                                                                                                 |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                      |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                          |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                       |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                               |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                  | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                       |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                      | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                                                                | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                                                           | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                                                                 | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                                                          | false   |
