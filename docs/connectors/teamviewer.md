---
title: TeamViewer Connector
sidebar_label: TeamViewer
description: Connect to TeamViewer to automate your remote support tasks.
---

![TeamViewer](./assets/teamviewer.png#connector-icon)
Connect to TeamViewer to automate your remote support tasks.

## Connections

### OAuth 2.0

Connect to TeamViewer to automate your remote support tasks.

To Create an OAuth app in Teamviewer:

1. Login to your [TeamViewer](https://login.teamviewer.com/) account.
1. In the top right corner select your user icon and select Edit profile.
1. Navigate to Apps and Select **Create App**.
1. In the Redirect URL field enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
1. Ensure the app has sufficient permissions for an integration and select **Create** upon completion.
1. Save and copy the **Client ID** and **Client Secret** and enter them into the connection configuration of your integration.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                              | Default |
| ------------- | ----------------------------------------------------- | ------- |
| Client ID     | Client ID for the TeamViewer OAuth 2.0 connection     |         |
| Client Secret | Client Secret for the TeamViewer OAuth 2.0 connection |         |

## Actions

### Assign Device

Assigns a device to a user account.

| Input              | Comments                                      | Default |
| ------------------ | --------------------------------------------- | ------- |
| Device ID          | The ID of the device to retrieve.             |         |
| Current Password   | The current password of the device.           |         |
| Enable Easy Access | Whether to enable easy access for the device. | false   |
| Assign Mode        | The assign mode for the device.               |         |
| Connection         |                                               |         |

### Create Account

Creates a new account.

| Input         | Comments                                                   | Default |
| ------------- | ---------------------------------------------------------- | ------- |
| Email         | The email address associated with your TeamViewer account. |         |
| Name          | The name of the account holder.                            |         |
| Password      | The password associated with your TeamViewer account.      |         |
| Language      | The language of the account holder.                        |         |
| Client ID     | The client ID associated with your TeamViewer account.     |         |
| Client Secret | The client secret associated with your TeamViewer account. |         |
| Connection    |                                                            |         |

### Create Contact

Creates a new contact.

| Input       | Comments                                                                                     | Default |
| ----------- | -------------------------------------------------------------------------------------------- | ------- |
| Email       | The email of the contact.                                                                    |         |
| Name        | The name of the contact.                                                                     |         |
| Group ID    | The ID of the group to which the contact belongs. Either groupid or groupName is required.   |         |
| Group Name  | The name of the group to which the contact belongs. Either groupid or groupName is required. |         |
| Description | The description of the contact.                                                              |         |
| Invite      | Whether to invite the contact to TeamViewer.                                                 | false   |
| Connection  |                                                                                              |         |

### Create Device

Creates a new device.

| Input             | Comments                                              | Default |
| ----------------- | ----------------------------------------------------- | ------- |
| Remote Control ID | The ID of the remote control to assign to the device. |         |
| Alias             | The alias of the device.                              |         |
| Group ID          | The ID of the group to which the device belongs.      |         |
| Description       | The description of the device.                        |         |
| Password          | The password of the device.                           |         |
| Connection        |                                                       |         |

### Create Group

Creates a new group.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Name       | The name of the group.      |         |
| Policy ID  | The policy ID of the group. |         |
| Connection |                             |         |

### Create Session

Creates a new session.

| Input       | Comments                                                                                     | Default |
| ----------- | -------------------------------------------------------------------------------------------- | ------- |
| Group ID    | The ID of the group to which the session belongs. Either groupid or groupName is required.   |         |
| Group Name  | The name of the group to which the session belongs. Either groupid or groupName is required. |         |
| Custom ID   | The custom ID of the session.                                                                |         |
| Description | The description of the session.                                                              |         |
| Body        | Custom fields to include in the request body.                                                |         |
| Connection  |                                                                                              |         |

### Create User

Creates a user.

| Input                    | Comments                                       | Default |
| ------------------------ | ---------------------------------------------- | ------- |
| User Email               | User email to query from.                      |         |
| User Name                | User name to query from.                       |         |
| User Password            | User password.                                 |         |
| User Role ID             | The ID of the user role to assign to the user. |         |
| User Language            | User language.                                 |         |
| Subscribe Newsletter     | Should subscribe to the newsletter.            | false   |
| Log Sessions             | Should log user sessions.                      | false   |
| Show Comment Window      | Should show comment window.                    | false   |
| Custom Quick Support ID  | Custom Quick Support ID of the user            |         |
| Custom Quick Join ID     | Custom Quick Join ID of the user               |         |
| License Key              | License key of the user                        |         |
| Meeting License Key      | Meeting License key of the user                |         |
| SSO Customer ID          | SSO Customer ID of the user                    |         |
| Ignored Predefined Roles | Ignored Predefined Roles                       | false   |
| Connection               |                                                |         |

### Delete Contact

Deletes a contact by its ID.

| Input       | Comments                         | Default |
| ----------- | -------------------------------- | ------- |
| Contacts ID | The ID of the contact to delete. |         |
| Connection  |                                  |         |

### Delete Device

Deletes a device by its ID.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Device ID  | The ID of the device to delete. |         |
| Connection |                                 |         |

### Delete Group

Deletes a group by its ID.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Group ID   | The ID of the group to delete. |         |
| Connection |                                |         |

### Delete Managed Device

Deletes a managed device by its ID.

| Input             | Comments                                | Default |
| ----------------- | --------------------------------------- | ------- |
| Managed Device ID | The ID of the managed device to delete. |         |
| Connection        |                                         |         |

### Delete User

Deletes a user.

| Input            | Comments                                                        | Default |
| ---------------- | --------------------------------------------------------------- | ------- |
| User ID          | The ID of the user to retrieve.                                 |         |
| Permanent Delete | Whether to permanently delete the user or just deactivate them. | false   |
| Connection       |                                                                 |         |

### Delete User Company

Deletes the company of account (user) that is associated with the used API token. This account should be the last user with admin rights at the company.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Account

Returns the account that is associated with the used API token.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Account Tenant IDs

Returns the account's tenant IDs.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Contact

Returns a contact by its ID.

| Input       | Comments                           | Default |
| ----------- | ---------------------------------- | ------- |
| Contacts ID | The ID of the contact to retrieve. |         |
| Connection  |                                    |         |

### Get Device

Returns a device by its ID.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Device ID  | The ID of the device to retrieve. |         |
| Connection |                                   |         |

### Get Group

Returns a group by its ID.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Group ID   | The ID of the group to retrieve. |         |
| Connection |                                  |         |

### Get Managed Device

Returns a managed device by its ID.

| Input             | Comments                                  | Default |
| ----------------- | ----------------------------------------- | ------- |
| Managed Device ID | The ID of the managed device to retrieve. |         |
| Connection        |                                           |         |

### Get Missing Patches

This request will return all missing patches on the device, which id is provided in the request.

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Device ID  | The ID of the device to retrieve missing patches for. |         |
| Connection |                                                       |         |

### Get Ping

Returns if the current token is valid.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Session

Returns a session by its ID.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Session ID | The ID of the session to retrieve. |         |
| Connection |                                    |         |

### Get User

Retrieves the user associated with the used API token.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| User ID    | The ID of the user to retrieve. |         |
| Connection |                                 |         |

### List Company Managed Devices

Lists one page of company-managed devices of the company that is associated with the currently logged-in session.

| Input            | Comments                                                                                                                                                     | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Pagination Token | To fetch the next batch of result items, provide the value received as 'nextPaginationToken' from the previous call. Will fetch the first page if not given. |         |
| Fetch All        | Whether to fetch all records or just the first page.                                                                                                         | false   |
| Query Parameters | The query parameters to include in the request.                                                                                                              |         |
| Connection       |                                                                                                                                                              |         |

### List Contacts

Returns a list of contacts.

| Input            | Comments                                        | Default |
| ---------------- | ----------------------------------------------- | ------- |
| Query Parameters | The query parameters to include in the request. |         |
| Connection       |                                                 |         |

### List Devices

Returns a list of devices.

| Input             | Comments                                              | Default |
| ----------------- | ----------------------------------------------------- | ------- |
| Name              | The name of the device.                               |         |
| Group ID          | The ID of the group to which the device belongs.      |         |
| Remote Control ID | The ID of the remote control to assign to the device. |         |
| Query Parameters  | The query parameters to include in the request.       |         |
| Connection        |                                                       |         |

### List Groups

Returns a list of groups.

| Input            | Comments                                        | Default |
| ---------------- | ----------------------------------------------- | ------- |
| Query Parameters | The query parameters to include in the request. |         |
| Connection       |                                                 |         |

### List Managed Devices

Returns a list of managed devices.

| Input            | Comments                                                                                                                                                     | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Pagination Token | To fetch the next batch of result items, provide the value received as 'nextPaginationToken' from the previous call. Will fetch the first page if not given. |         |
| Fetch All        | Whether to fetch all records or just the first page.                                                                                                         | false   |
| Query Parameters | The query parameters to include in the request.                                                                                                              |         |
| Connection       |                                                                                                                                                              |         |

### List Patch Management Device

Returns a list of patch management devices.

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Fetch All          | Whether to fetch all records or just the first page. | false   |
| Continuation Token | The continuation token from the previous response.   |         |
| Query Parameters   | The query parameters to include in the request.      |         |
| Connection         |                                                      |         |

### List Sessions

Returns a list of sessions.

| Input            | Comments                                        | Default |
| ---------------- | ----------------------------------------------- | ------- |
| Query Parameters | The query parameters to include in the request. |         |
| Connection       |                                                 |         |

### List Users

Retrieves all users with given filter criteria.

| Input            | Comments                                                                    | Default |
| ---------------- | --------------------------------------------------------------------------- | ------- |
| User Email       | User email to query from.                                                   |         |
| User Name        | User name to query from.                                                    |         |
| Full List        | Is detailed user information needed                                         | false   |
| User Permissions | Comma separated access rights. Please use user role APIs for user's rights. |         |
| Connection       |                                                                             |         |

### Raw Request

Send raw HTTP request to Teamviewer API

| Input                   | Comments                                                                                                                                                                                                                                     | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                              |         |
| URL                     | Input the path only (/contacts), The base URL is already included (https://webapi.teamviewer.com/api/v1/). For example, to connect to https://webapi.teamviewer.com/api/v1/contacts, only /contacts is entered in this field. e.g. /contacts |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                      |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                    |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                         |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                             |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                       |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                          |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                  |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                     | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                          |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                          | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                             | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                          | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                | false   |

### Scan Results Count

Retrieves the number of scan results for the specified devices.

| Input              | Comments                                              | Default |
| ------------------ | ----------------------------------------------------- | ------- |
| Device ID List     | A list of device IDs to retrieve missing patches for. |         |
| Continuation Token | The continuation token from the previous response.    |         |
| Connection         |                                                       |         |

### Update Account

Updates an account.

| Input          | Comments                                                      | Default |
| -------------- | ------------------------------------------------------------- | ------- |
| Email          | The email address associated with your TeamViewer account.    |         |
| Name           | The name of the account holder.                               |         |
| Password       | The password associated with your TeamViewer account.         |         |
| Old Password   | The current password associated with your TeamViewer account. |         |
| Email Language | The language of the account holder.                           |         |
| Connection     |                                                               |         |

### Update Device

Updates a device by its ID.

| Input             | Comments                                              | Default |
| ----------------- | ----------------------------------------------------- | ------- |
| Device ID         | The ID of the device to retrieve.                     |         |
| Remote Control ID | The ID of the remote control to assign to the device. |         |
| Alias             | The alias of the device.                              |         |
| Group ID          | The ID of the group to which the device belongs.      |         |
| Description       | The description of the device.                        |         |
| Password          | The password of the device.                           |         |
| Connection        |                                                       |         |

### Update Group

Updates an existing group by its ID.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Group ID   | The ID of the group to update. |         |
| Name       | The name of the group.         |         |
| Policy ID  | The policy ID of the group.    |         |
| Connection |                                |         |

### Update Managed Device

Modify the attributes of a managed device using its designated 'id.' You can provide the device's 'name' (alias) to enact changes, provide a 'teamviewerPolicyId' to update or add a TeamViewer policy, or provide a 'managedGroupId' to inherit the TeamViewer Policy from a managed group to which the device is associated.

| Input                | Comments                                                          | Default |
| -------------------- | ----------------------------------------------------------------- | ------- |
| Managed Device ID    | The ID of the managed device to retrieve.                         |         |
| Name                 | The name of the managed device.                                   |         |
| TeamViewer Policy ID | The TeamViewer policy ID of the managed device.                   |         |
| Managed Group ID     | The ID of the managed group to associate with the managed device. |         |
| Connection           |                                                                   |         |

### Update Session

Updates a session by its ID.

| Input       | Comments                                                                                     | Default |
| ----------- | -------------------------------------------------------------------------------------------- | ------- |
| Session ID  | The ID of the session to retrieve.                                                           |         |
| Group ID    | The ID of the group to which the session belongs. Either groupid or groupName is required.   |         |
| Group Name  | The name of the group to which the session belongs. Either groupid or groupName is required. |         |
| Custom ID   | The custom ID of the session.                                                                |         |
| Description | The description of the session.                                                              |         |
| Body        | Custom fields to include in the request body.                                                |         |
| Connection  |                                                                                              |         |

### Update User

Updates a user.

| Input                   | Comments                                                       | Default |
| ----------------------- | -------------------------------------------------------------- | ------- |
| User ID                 | The ID of the user to retrieve.                                |         |
| User Email              | User email to query from.                                      |         |
| User Name               | User name to query from.                                       |         |
| Assign User Role IDs    | Comma separated list of user role IDs to assign to the user.   |         |
| Unassign User Role IDs  | Comma separated list of user role IDs to unassign to the user. |         |
| User Password           | User password.                                                 |         |
| Is User Active          | Deactivates or Activates the user account.                     | false   |
| Log Sessions            | Should log user sessions.                                      | false   |
| Show Comment Window     | Should show comment window.                                    | false   |
| Custom Quick Support ID | Custom Quick Support ID of the user                            |         |
| Custom Quick Join ID    | Custom Quick Join ID of the user                               |         |
| License Key             | License key of the user                                        |         |
| SSO Customer ID         | SSO Customer ID of the user                                    |         |
| Is TFA Enforced         | Enforces Two Factor Authentication for the user.               | false   |
| Connection              |                                                                |         |
