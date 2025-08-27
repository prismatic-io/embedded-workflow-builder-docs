---
title: Microsoft Project Connector
sidebar_label: Microsoft Project
description: Make queries to reporting data from a Project Web App instance
---

![Microsoft Project](./assets/ms-project.png#connector-icon)
Make queries to reporting data from a Project Web App instance

## Connections

### OAuth 2.0

OAuth 2.0 Connectivity for Microsoft Project

To create an new Microsoft Project App Registration:

1. Navigate to the [Microsoft Entra](https://entra.microsoft.com/) **Identity** > **Applications** > **App registrations** and select **New registration**.

- Set the Supported Account types to **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** so that users outside of your organization (i.e. your customers) can authenticate.
- Set the Redirect URI dropdown as a "Web" platform. In that section add the OAuth callback URL `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` - as a **Redirect URI**.
- Select Register to complete.

2. From the App menu navigate to **Certificates & Secrets** for the app and add a new **Client Secret**. Save the **Value** for the **Client Secret** in the connection configuration.

3. Navigate to the **Overview** page save the value listed as the **Application (client) ID**. This will be your **Client ID** for the connection configuration.

4. Navigate to **API Permissions** and select **Add Permission**, select the square labeled **Sharepoint**, and then **Delegated permissions**. Under the **Project** section select **Project.Read, Project.Write** in addition to any other permissions that will be required by your integration. You can use `ProjectWebApp.FullControl` to get started building and choose a more refined set at a later time.

5. Finally, to retrieve the **Project Web App Site** value (also referred to as the **PWA site**). This can be found by navigating to [Microsoft Project 365](https://project.microsoft.com/), clicking the gear settings icon in the top right, and clicking on "PWA Site". You will need to copy the value from the `https://` protocol through to the first slash (do _not_ include the trailing slash or the path portion).

6. Additionally, Depending on your PWA site's configuration, user's attempting to authenticate may need to be added as members of the site before authentication.

To configure the OAuth 2.0 connection:

7. Add an MS Project OAuth 2.0 connection config var:

- Use the **Application (client) ID** value for the **Client ID** field.
- Use the **Client Secret** for the same named field.
- Use the default **Authorize URL**.
- Replace `<pwaSite>` in the **Token URL** with the **PWA Site** value.
- Use the same **PWA Site** value for that field.

Save your integration and you should be able to authenticate a user through MS Project Online with Auth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                 | Default                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Microsoft Project                                                                                                    | https://login.microsoftonline.com/common/oauth2/authorize |
| Token URL     | The OAuth 2.0 Token URL for Microsoft Project; replace `<pwaSite>` with the protocol and domain of the PWA Site. Example: https://example.sharepoint.com |                                                           |
| Client ID     | This value is obtained by creating a new app in Active Directory with the same tenant as your user with a Microsoft Project license                      |                                                           |
| Client Secret | This value can be generated inside your Active Directory application.                                                                                    |                                                           |
| PWA Site      | The Project Web App Sharepoint Site domain. This is the same value that is supplied for the resource argument of the Token URL.                          |                                                           |

## Actions

### Check In Draft Project

Mark the status of an existing project to 'Checked In'

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Checkout Project

Mark an existing project's status as 'Checked Out'

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Create Draft Assignment

Create a new assignment in a given draft product

| Input                 | Comments                                                              | Default |
| --------------------- | --------------------------------------------------------------------- | ------- |
| Connection            |                                                                       |         |
| Project GUID          | Provide a string value for the GUID                                   |         |
| Task Id               | Provide a unique identifier for the task.                             |         |
| Resource Id           | Provide the unique identifier for the resource                        |         |
| Assignment Start Date | Provide a valid date time value for the start date of the assignment  |         |
| Finish Date           | Provide a valid date time value for the finish date of the assignment |         |
| Notes                 | Provide a string value for notes.                                     |         |

### Create Draft Project Resources

Create a new Resource in an existing draft project

| Input        | Comments                                             | Default |
| ------------ | ---------------------------------------------------- | ------- |
| Connection   |                                                      |         |
| Project GUID | Provide a string value for the GUID                  |         |
| Notes        | Provide a string value for notes.                    |         |
| Email        | Provide a valid email address.                       |         |
| Account      | Provide the unique identifier of the account.        |         |
| Name         | Provide a string value for the name of the resource. |         |

### Create Draft Task

Create a new task in a draft project

| Input           | Comments                                                        | Default |
| --------------- | --------------------------------------------------------------- | ------- |
| Connection      |                                                                 |         |
| Project GUID    | Provide a string value for the GUID                             |         |
| Task Name       | Provide a string value for the name of the task.                |         |
| Notes           | Provide a string value for notes.                               |         |
| Task Start Date | Provide a valid datetime value for the start date of a task.    |         |
| Parent Id       | Provide the unique identifier of the parent object.             |         |
| Finish Date     | Provide a valid datetime value for the finish date of the task. |         |

### Create Project

Create a new project

| Input               | Comments                                                                                             | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                      |         |
| Project Name        | Provide a string value for the name of the project. The name can NOT contain any special characters. |         |
| Project Description | Provide a string value for the description of the project.                                           |         |
| Project Start Date  | Provide a valid datetime value for the start date of the project.                                    |         |

### Delete Draft Task

Delete an existing task from a draft project

| Input        | Comments                                  | Default |
| ------------ | ----------------------------------------- | ------- |
| Connection   |                                           |         |
| Project GUID | Provide a string value for the GUID       |         |
| Task Id      | Provide a unique identifier for the task. |         |

### Delete Project

Delete the contents and metadata of an existing project by Id

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Get Assignment

Get the information and metadata of an assignment by Id

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Get Draft Task

Get the information or metadata of a task inside a draft project

| Input        | Comments                                  | Default |
| ------------ | ----------------------------------------- | ------- |
| Connection   |                                           |         |
| Project GUID | Provide a string value for the GUID       |         |
| Task Id      | Provide a unique identifier for the task. |         |

### Get Project

Get the information and metadata of a project by Id

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Get Project Resource

Get the information and metadata of an existing Project Resource by Id

| Input        | Comments                                       | Default |
| ------------ | ---------------------------------------------- | ------- |
| Connection   |                                                |         |
| Project GUID | Provide a string value for the GUID            |         |
| Resource Id  | Provide the unique identifier for the resource |         |

### Get Task

Get the information and metadata of a task by Id

| Input        | Comments                                  | Default |
| ------------ | ----------------------------------------- | ------- |
| Connection   |                                           |         |
| Project GUID | Provide a string value for the GUID       |         |
| Task Id      | Provide a unique identifier for the task. |         |

### List Assignments

List all the assignments in a given project

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                             |         |
| Project GUID | Provide a string value for the GUID                                                         |         |
| Page Size    | Provide an integer value for the maximum results returned per page when paginating results. |         |
| Page Number  | Provide an integer value for which page to return when paginating results.                  |         |

### List Draft Assignments

List all the assignments in a given draft project

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### list Draft Project Resources

List all resources in a draft project

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                             |         |
| Project GUID | Provide a string value for the GUID                                                         |         |
| Page Size    | Provide an integer value for the maximum results returned per page when paginating results. |         |
| Page Number  | Provide an integer value for which page to return when paginating results.                  |         |

### List Draft Tasks

List all tasks in a draft project

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                             |         |
| Project GUID | Provide a string value for the GUID                                                         |         |
| Page Size    | Provide an integer value for the maximum results returned per page when paginating results. |         |
| Page Number  | Provide an integer value for which page to return when paginating results.                  |         |

### list Project Resources

List all resources in an existing project

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### List Projects

List all the projects in a given sharepoint site

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                             |         |
| Query String | Provide a string value to query for a specific property.                                    |         |
| Page Size    | Provide an integer value for the maximum results returned per page when paginating results. |         |
| Page Number  | Provide an integer value for which page to return when paginating results.                  |         |

### List Tasks

List all the tasks in a given project

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                             |         |
| Project GUID | Provide a string value for the GUID                                                         |         |
| Page Size    | Provide an integer value for the maximum results returned per page when paginating results. |         |
| Page Number  | Provide an integer value for which page to return when paginating results.                  |         |

### Publish Draft Project

Publish the draft of an existing project

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Raw Request

Send raw HTTP request to Microsoft Project

| Input                   | Comments                                                                                                                                                                                                                                                                                                                                                                             | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                                                                                      |         |
| URL                     | Input the path only (/ProjectServer/Projects(guid'9840c3b6-ac3d-ec11-bea0-00155d788e0a')), The base URL is already included ({pwaSite}/sites/pwa/\_api). For example, to connect to {pwaSite}/sites/pwa/\_api/ProjectServer/Projects(guid'9840c3b6-ac3d-ec11-bea0-00155d788e0a'), only /ProjectServer/Projects(guid'9840c3b6-ac3d-ec11-bea0-00155d788e0a') is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                                                                                  |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                                 | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                                                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                                                                                        | false   |

### Remove Project

Remove the contents and metadata of an existing project by Id

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Submit Product To Workflow

Submit an existing project to a given workflow

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Update Draft

Update the draft of an existing project

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |

### Verify Draft

Verify the draft of an existing project

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Connection   |                                     |         |
| Project GUID | Provide a string value for the GUID |         |
