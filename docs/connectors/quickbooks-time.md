---
title: QuickBooks Time Connector
sidebar_label: QuickBooks Time
description: Manage Employee Time Tracking within Intuit QuickBooks Time
---

![QuickBooks Time](./assets/quickbooks-time.png#connector-icon)
[QuickBooks Time](https://quickbooks.intuit.com/time-tracking/) is an employee time tracking solution from Intuit.
The **QuickBooks Time** component supports managing users, job codes, job code assignments, and timesheets.

## API Documentation

This component was built using the [QuickBooks Time (TSheets) REST API](https://tsheetsteam.github.io/api_docs/).

## Connections

### OAuth 2.0 {#oauth}

OAuth 2.0 flow

QuickBooks Time uses OAuth 2.0 Authorization Code authentication. An OAuth application must be created in the QuickBooks Time developer portal before configuring this connection.

#### Prerequisites

- A QuickBooks Time (TSheets) account with administrator access
- An OAuth application registered in the QuickBooks Time developer portal

#### Setup Steps

1. Navigate to the QuickBooks Time developer portal and create a new OAuth application
2. Configure the application:
   - **Redirect URI**: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
3. Copy the **Client ID** and **Client Secret** from the application settings

#### Configure the Connection

- **Client ID**: Enter the Client ID from the OAuth application
- **Client Secret**: Enter the Client Secret from the OAuth application

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                          | Default |
| ------------- | ------------------------------------------------- | ------- |
| Client ID     | Client Identifier of your app for Quickbooks Time |         |
| Client Secret | Client Secret of your app for Quickbooks Time     |         |

## Triggers

### New Records {#pollchangestrigger}

Checks for new timesheets, users, or job codes in QuickBooks Time on a configured schedule.

| Input            | Comments                                          | Default |
| ---------------- | ------------------------------------------------- | ------- |
| Connection       |                                                   |         |
| Resource Type    | The type of resource to poll for new records.     |         |
| Show New Records | Include newly created records in trigger results. | true    |

## Actions

### Create Timesheet {#createtimesheet}

Creates a Timesheet

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| User ID                     | The Id of the record to modify                                                                                                                                                                                                    |         |
| Jobcode ID                  | The Jobcode Id                                                                                                                                                                                                                    |         |
| Start Date                  | Start time of the timesheet, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm). Time should reflect the user's local time.                                                                                                           |         |
| End Date                    | End time of the timesheet, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm). Time should reflect the user's local time.                                                                                                             |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Create User {#createuser}

Creates a User from the provided data

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Username                    | Username of the user                                                                                                                                                                                                              |         |
| First Name                  | First name of the user                                                                                                                                                                                                            |         |
| Last Name                   | Last name of the user                                                                                                                                                                                                             |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Delete Timesheet {#deletetimesheet}

Deletes a Timesheet

| Input        | Comments                               | Default |
| ------------ | -------------------------------------- | ------- |
| Connection   |                                        |         |
| Job Code IDs | A comma separated list of Job Code Ids |         |

### Get Job Code Assignments {#getjobcodeassignments}

Gets a list of Job Codes and their associated Users

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Active                      | 'yes', 'no', or 'both'. Default is 'yes'                                                                                                                                                                                          |         |
| Per Page                    | Represents how many results you'd like to retrieve per request (page). Default is 50. Max is 50                                                                                                                                   |         |
| Page                        | Represents the page of results you'd like to retrieve. Default is 1.                                                                                                                                                              |         |
| User IDs                    | A comma separated list of User Ids to filter on                                                                                                                                                                                   |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Get Job Codes {#getjobcodes}

Gets a list of Job Codes

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Active                      | 'yes', 'no', or 'both'. Default is 'yes'                                                                                                                                                                                          |         |
| Per Page                    | Represents how many results you'd like to retrieve per request (page). Default is 50. Max is 50                                                                                                                                   |         |
| Page                        | Represents the page of results you'd like to retrieve. Default is 1.                                                                                                                                                              |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Get Time Sheets {#gettimesheets}

Gets a list of Time Sheets

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Active                      | 'yes', 'no', or 'both'. Default is 'yes'                                                                                                                                                                                          |         |
| Per Page                    | Represents how many results you'd like to retrieve per request (page). Default is 50. Max is 50                                                                                                                                   |         |
| Page                        | Represents the page of results you'd like to retrieve. Default is 1.                                                                                                                                                              |         |
| User IDs                    | A comma separated list of User Ids to filter on                                                                                                                                                                                   |         |
| Job Code IDs                | A comma separated list of Job Code Ids to filter on                                                                                                                                                                               |         |
| Start Date                  | YYYY-MM-DD formatted date                                                                                                                                                                                                         |         |
| End Date                    | YYYY-MM-DD formatted date                                                                                                                                                                                                         |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Get Users {#getusers}

Gets a list of Users with optional filters

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Active                      | 'yes', 'no', or 'both'. Default is 'yes'                                                                                                                                                                                          |         |
| Per Page                    | Represents how many results you'd like to retrieve per request (page). Default is 50. Max is 50                                                                                                                                   |         |
| Page                        | Represents the page of results you'd like to retrieve. Default is 1.                                                                                                                                                              |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Update Timesheet {#updatetimesheet}

Updates a Timesheet

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Timesheet ID                | The Id of the record to modify                                                                                                                                                                                                    |         |
| Jobcode ID                  | The Jobcode Id                                                                                                                                                                                                                    |         |
| Start Date                  | Start time of the timesheet, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm). Time should reflect the user's local time.                                                                                                           |         |
| End Date                    | End time of the timesheet, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm). Time should reflect the user's local time.                                                                                                             |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Update User {#updateuser}

Updates a specified User

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| ID                          | The Id of the record to modify                                                                                                                                                                                                    |         |
| Username                    | Username of the user                                                                                                                                                                                                              |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |
