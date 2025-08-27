---
title: Microsoft Intune Connector
sidebar_label: Microsoft Intune
description: Use the Microsoft Intune component to manage users, devices, and applications.
---

![Microsoft Intune](./assets/ms-intune.png#connector-icon)
Use the Microsoft Intune component to manage users, devices, and applications.

## Connections

### OAuth 2.0

OAuth 2.0 Connectivity for Microsoft Intune

To create an new Microsoft Intune App Registration:

1. Navigate to the [Microsoft Entra](https://entra.microsoft.com/) **Identity** > **Applications** > **App registrations** and select **New registration**.
   1. Set the Supported Account types to **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** so that users outside of your organization (i.e. your customers) can authenticate.
   2. Set the Redirect URI dropdown as a "Web" platform. In that section add the OAuth callback URL `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` - as a **Redirect URI**.
   3. Select Register to complete.
2. From the App menu navigate to **Certificates & Secrets** for the app and add a new **Client Secret**. Save the **Value** for the **Client Secret** in the connection's configuration.
3. Navigate to the **Overview** page save the value listed as the **Application (client) ID**. This will be your **Client ID** for the connection configuration.
4. Navigate to **API Permissions** and select **Add Permission**, select the square labeled **Microsoft Graph**, and then **Delegated permissions**. Under the DeviceManagementManagedDevices section select **DeviceManagementManagedDevices.PrivilegedOperations, DeviceManagementManagedDevices.Read.All. I**n addition to any other permissions that will be required by your integration. You can use DeviceManagementManagedDevices.ReadWrite.All to get started building and choose a more refined set at a later time.

To configure the OAuth 2.0 connection:

1. Add a Microsoft Intune OAuth 2.0 connection configuration variable:
   1. Use the **Application (client) ID** value for the **Client ID** field.
   2. Use the **Client Secret** for the same named field.
   3. Use the default **Authorize URL**.
   4. Additionally, some actions may require authentication with your Tenant ID. To complete, replace the **common** portion of the Token URL with your Tenant ID.
      1. Example: **https://login.microsoftonline.com/common/oauth2/v2.0/token**
         becomes **https://login.microsoftonline.com/abf988bf-86f1-41af-91ab-2d7cd011db46/oauth2/v2.0/token**

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                      | Default                                                                                                                                                                                                                                                                                                  |
| ------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Microsoft Intune          | https://login.microsoftonline.com/common/oauth2/v2.0/authorize                                                                                                                                                                                                                                           |
| Token URL     | The OAuth 2.0 Token URL for Microsoft Intune                  | https://login.microsoftonline.com/common/oauth2/v2.0/token                                                                                                                                                                                                                                               |
| Scopes        | Microsoft Intune Scopes.                                      | DeviceManagementManagedDevices.PrivilegedOperations.All DeviceManagementApps.ReadWrite.All DeviceManagementManagedDevices.ReadWrite.All Group.ReadWrite.All Domain.ReadWrite.All User.ReadWrite.All Directory.ReadWrite.All AuditLog.Read.All DeviceManagementConfiguration.ReadWrite.All offline_access |
| Client ID     | Get this value from your App Registration in the Azure Portal |                                                                                                                                                                                                                                                                                                          |
| Client Secret | Get this value from your App Registration in the Azure Portal |                                                                                                                                                                                                                                                                                                          |

### OAuth 2.0 (Client Credentials)

OAuth 2.0 Client Credentials Connectivity for Microsoft Intune

To create an new Microsoft Intune App Registration:

1. Navigate to the [Microsoft Entra](https://entra.microsoft.com/) **Identity** > **Applications** > **App registrations** and select **New registration**.
   1. Set the Supported Account types to **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** so that users outside of your organization (i.e. your customers) can authenticate.
   2. Set the Redirect URI dropdown as a "Web" platform. In that section add the OAuth callback URL `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` - as a **Redirect URI**.
   3. Select Register to complete.
2. From the App menu navigate to **Certificates & Secrets** for the app and add a new **Client Secret**. Save the **Value** for the **Client Secret** in the connection's configuration.
3. Navigate to the **Overview** page save the value listed as the **Application (client) ID**. This will be your **Client ID** for the connection configuration.
4. Navigate to **API Permissions** and select **Add Permission**, select the square labeled **Microsoft Graph**, and then **Application permissions**. Now apply all permissions relevant for your use-case.
5. After applying all permissions relevant for your use-case, click on **Grant Admin Consent** in order to transfer permissions the client credentials flow after a successful connection.

To configure the OAuth 2.0 connection:

1. Add a Microsoft Intune OAuth 2.0 connection configuration variable:
   1. Use the **Application (client) ID** value for the **Client ID** field.
   2. Use the **Client Secret** for the same named field.
   3. Use the default **Authorize URL**.
   4. Use the default scope that comes set up with the connection.
   5. All actions for the client credentials flow require authentication with your Tenant ID. To complete authentication, replace the **common** portion of the Token URL with your Tenant ID.
      1. Example: **https://login.microsoftonline.com/common/oauth2/v2.0/token**
         becomes **https://login.microsoftonline.com/abf988bf-86f1-41af-91ab-2d7cd011db46/oauth2/v2.0/token**

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                      | Default                                                                  |
| ------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Token URL     | The OAuth 2.0 Token URL for Microsoft Intune                  | https://login.microsoftonline.com/**<YOUR_TENANT_ID>**/oauth2/v2.0/token |
| Scopes        | Microsoft Intune Scopes.                                      | https://graph.microsoft.com/.default                                     |
| Client ID     | Get this value from your App Registration in the Azure Portal |                                                                          |
| Client Secret | Get this value from your App Registration in the Azure Portal |                                                                          |

## Triggers

### Resource Trigger

Get notified to this flow when the specified resource changes.

| Input                | Comments                                                                                                                                                                                   | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Expiration Date Time | Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to. |         |
| Change Type          | Indicates the type of change in the subscribed resource that raises a change notification.                                                                                                 |         |
| Resource             | The resource that will be monitored for changes. See https://learn.microsoft.com/en-us/graph/api/resources/change-notifications-api-overview?view=graph-rest-1.0                           |         |
| Connection           |                                                                                                                                                                                            |         |

## Actions

### Add Group Member

Add a single member to a security or Microsoft 365 group.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| Group Id   | The unique identifier of a MS365 or Security group. |         |
| Member Id  | The unique identifier of a member.                  |         |

### Add Group Members

Add members to a security or Microsoft 365 group.

| Input              | Comments                                                                                                             | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                      |         |
| Group Id           | The unique identifier of a MS365 or Security group.                                                                  |         |
| Member Ids         | The unique identifiers of members. Comma separated. You must fill either this input or the Dynamic member IDs input. |         |
| Dynamic Member Ids | The unique identifiers of members. You must fill either this input or the member IDs input.                          |         |

### Assign Device Compliance Policy

Assign a device compliance policy by ID.

| Input                       | Comments                                                          | Default |
| --------------------------- | ----------------------------------------------------------------- | ------- |
| Connection                  |                                                                   |         |
| Device Compliance Policy Id | Unique Identifier for the device to assign the compliance policy. |         |
| Assign Id                   | Key of the entity.                                                |         |
| Target                      | The device compliance policy assignment target                    |         |
| Collection Id               | Unique Identifier for the target collection.                      |         |

### Assign Mobile App

Assign a mobile app to a group.

| Input         | Comments                                                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Mobile App Id | Unique Identifier for the mobile app to assign.                                                                                                                                                                                                                                                                                                                                          |         |
| Group Id      | The unique identifier of the group that you want to assign the app to.                                                                                                                                                                                                                                                                                                                   |         |
| Intent        | The intent of the assignment for the managed app. A 'Required' option will force the app to be installed on the device. An 'Available' option will make the app available for the user to install. An 'Uninstall' option will remove the app from the device. An 'Available Without Enrollment' option will make the app available for the user to install without enrolling the device. |         |
| Target        | The mobile app assignment target                                                                                                                                                                                                                                                                                                                                                         |         |
| Settings      | The mobile app assignment settings                                                                                                                                                                                                                                                                                                                                                       |         |

### Create Group

Create a group.

| Input            | Comments                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                    |         |
| Display Name     | The name to display in the address book for the group.                             |         |
| Mail Nickname    | The mail alias for the group, unique for Microsoft 365 groups in the organization. |         |
| Security Enabled | Specifies whether the group is a security group.                                   | false   |
| Mail Enabled     | Set to true for mail-enabled groups.                                               | false   |
| Description      | A description for the group.                                                       |         |
| Assigned Labels  | The list of sensitivity label pairs (label ID, label name) associated with a group |         |
| Visibility       | The display name for the group                                                     |         |
| Body Fields      | Extra fields to include in the request body.                                       |         |

### Create Managed App

Create a new App object.

| Input                        | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Default |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| OData App Type               | The type of app to create. This depends on the platform of the app. Check the Microsoft Graph API documentation for the correct type. Documentation for an Office Suite app can be found here https://learn.microsoft.com/en-us/graph/api/intune-apps-officesuiteapp-create?view=graph-rest-beta                                                                                                                                                                                                                                     |         |
| Display Name                 | Add a name for the app. This name will be visible in the Intune apps list and to users in the Company Portal.​                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| Description                  | Help your device users understand what the app is and/or what they can do in the app. This comments will be visible to them in Company Portal.                                                                                                                                                                                                                                                                                                                                                                                       |         |
| Publisher                    | The name of the developer or company that distributes the app. This information will be visible to users in Company Portal.                                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Icon Image Type              | The type of the Icon image. This field is required if the Icon Image Data is provided.                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Icon Image Data              | The base64 encoded image data for the Icon image. This field is required if the Icon Image Type is provided.                                                                                                                                                                                                                                                                                                                                                                                                                         |         |
| Is Featured                  | Show this as a featured app in the Company Portal. Featured apps are prominently placed in Company Portal so that users can quickly get to them.                                                                                                                                                                                                                                                                                                                                                                                     | false   |
| Privacy Information URL      | Provide a link for people who want to learn more about the app's privacy settings and terms. The privacy URL will be visible to users in Company Portal.                                                                                                                                                                                                                                                                                                                                                                             |         |
| Information URL              | Link people to a website or documentation that has more information about the app. The information URL will be visible to users in Company Portal.                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Owner                        | The name of the person in your organization who manages licensing or is the point-of-contact for this app. This name will be visible to people signed in to the admin center.​                                                                                                                                                                                                                                                                                                                                                       |         |
| Developer                    | The name of the company or Individual that developed the app. This information will be visible to people signed into the admin center.                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Notes                        | Add additional notes about the app. Notes will be visible to people signed in to the admin center.                                                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Specific Platform Properties | The specific properties for the app to be created, generic properties like '@odata.type', 'displayName', 'description', etc. are alredy covered by the other inputs. This input should be a JSON object with the specific properties for the app to be created. Check the Microsoft Graph API documentation for the correct properties for the app type you are creating. Documentation for an Office Suite app can be found here https://learn.microsoft.com/en-us/graph/api/intune-apps-officesuiteapp-create?view=graph-rest-beta |         |

### Create Mobile App Assignment

Create a mobile app assignment.

| Input         | Comments                                                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Mobile App Id | The ID of the mobile app to create the assignment for.                                                                                                                                                                                                                                                                                                                                   |         |
| Intent        | The intent of the assignment for the managed app. A 'Required' option will force the app to be installed on the device. An 'Available' option will make the app available for the user to install. An 'Uninstall' option will remove the app from the device. An 'Available Without Enrollment' option will make the app available for the user to install without enrolling the device. |         |
| Target        | The mobile app assignment target                                                                                                                                                                                                                                                                                                                                                         |         |
| Settings      | The mobile app assignment settings                                                                                                                                                                                                                                                                                                                                                       |         |

### Create Subscription

Create a subscription.

| Input                      | Comments                                                                                                                                                                                                                                                        | Default |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 |                                                                                                                                                                                                                                                                 |         |
| Change Type                | Indicates the type of change in the subscribed resource that raises a change notification.                                                                                                                                                                      |         |
| Notification URL           | The URL to send notifications to.                                                                                                                                                                                                                               |         |
| Resource                   | The resource that will be monitored for changes. See https://learn.microsoft.com/en-us/graph/api/resources/change-notifications-api-overview?view=graph-rest-1.0                                                                                                |         |
| Expiration Date Time       | Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to.                                                                      |         |
| Lifecycle Notification URL | Required for Teams resources if the expirationDateTime value is more than 1 hour from now; optional otherwise. The URL of the endpoint that receives lifecycle notifications, including subscriptionRemoved, reauthorizationRequired, and missed notifications. |         |
| Body Fields                | Extra fields to include in the request body.                                                                                                                                                                                                                    |         |

### Create User

Create a new user.

| Input                              | Comments                                                                                                                                                                                                                                                                                                               | Default |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                         |                                                                                                                                                                                                                                                                                                                        |         |
| Account Enabled                    | Indicates if the account is enabled.                                                                                                                                                                                                                                                                                   | true    |
| Display Name                       | The display name of the user.                                                                                                                                                                                                                                                                                          |         |
| Force Change Password Next Sign In | Indicates if the user is forced to change their password on next sign in.                                                                                                                                                                                                                                              | true    |
| Password                           | The password of the user.                                                                                                                                                                                                                                                                                              |         |
| User Principal Name                | The user principal name of the user.                                                                                                                                                                                                                                                                                   |         |
| Domain                             | The domain for the user, this must be an existing domain in the tenant, you can list them using the 'List Domains' action.                                                                                                                                                                                             |         |
| Additional Properties              | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. You can get additional properties from the Microsoft Graph API documentation https://learn.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#json-representation |         |

### Delete Group

Delete a single group.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection |                             |         |
| Group Id   | The ID of the group delete. |         |

### Delete Group Member

Delete a member from a security or Microsoft 365 group.

| Input      | Comments                                                               | Default |
| ---------- | ---------------------------------------------------------------------- | ------- |
| Connection |                                                                        |         |
| Group Id   | The unique identifier of the group that you want to assign the app to. |         |
| Member Id  | The unique identifier of a member.                                     |         |

### Delete Managed App

Deletes an App.

| Input         | Comments                     | Default |
| ------------- | ---------------------------- | ------- |
| Connection    |                              |         |
| Mobile App ID | The ID of the app to delete. |         |

### Delete Managed Device

Deletes a Managed Device.

| Input             | Comments                                    | Default |
| ----------------- | ------------------------------------------- | ------- |
| Connection        |                                             |         |
| Managed Device Id | Unique Identifier for the device to delete. |         |

### Delete Mobile App Assignment

Delete a single mobile app assignment.

| Input                    | Comments                                                | Default |
| ------------------------ | ------------------------------------------------------- | ------- |
| Connection               |                                                         |         |
| Mobile App Id            | The ID of the mobile app to delete the assignment from. |         |
| Mobile App Assignment Id | The ID of the mobile app assignment to delete.          |         |

### Delete Subscription by Id

Delete a single subscription by its ID.

| Input           | Comments                              | Default |
| --------------- | ------------------------------------- | ------- |
| Connection      |                                       |         |
| Subscription ID | The ID of the subscription to delete. |         |

### Delete Subscriptions from an Endpoint

Delete all subscriptions from an endpoint.

| Input            | Comments                                        | Default |
| ---------------- | ----------------------------------------------- | ------- |
| Connection       |                                                 |         |
| Notification URL | The URL from which to delete all subscriptions. |         |

### Delete User

Deletes a User.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                           |         |
| User Id    | Unique Identifier for the user to delete. This can be the user's id or userPrincipalName. |         |

### Get Detected App

Read properties and relationships of the Detected Apps object.

| Input           | Comments                                            | Default |
| --------------- | --------------------------------------------------- | ------- |
| Connection      |                                                     |         |
| Detected App Id | Unique Identifier for the detected app to retrieve. |         |

### Get Device Compliance Policy

Get a device compliance policy by ID.

| Input                       | Comments                                                        | Default |
| --------------------------- | --------------------------------------------------------------- | ------- |
| Connection                  |                                                                 |         |
| Device Compliance Policy Id | Unique Identifier for the device compliance policy to retrieve. |         |

### Get Device Compliance Policy Setting State Summary

Retrieve a device compliance policy setting state summary by its ID.

| Input                                             | Comments                                                                              | Default |
| ------------------------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection                                        |                                                                                       |         |
| Device Compliance Policy Setting State Summary Id | Unique Identifier for the device compliance policy setting state summary to retrieve. |         |

### Get Device Configuration

Get the device configurations.

| Input                   | Comments                                      | Default |
| ----------------------- | --------------------------------------------- | ------- |
| Connection              |                                               |         |
| Device Configuration Id | Unique Identifier for the device to retrieve. |         |

### Get Directory Audit

Get a specific Microsoft Entra audit log item.

| Input              | Comments                                                                  | Default |
| ------------------ | ------------------------------------------------------------------------- | ------- |
| Connection         |                                                                           |         |
| Microsoft Entra Id | The unique identifier for the Microsoft Entra audit log item to retrieve. |         |

### Get Group

Retrieve a single group.

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection |                               |         |
| Group Id   | The ID of the group retrieve. |         |

### Get Managed App

Read properties and relationships of an App object.

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                               |         |
| App Id     | The unique identifier of a managed app. You can get this from the 'List Managed Apps' action. |         |

### Get Managed Device

Read properties and relationships of the Managed Device object.

| Input             | Comments                                      | Default |
| ----------------- | --------------------------------------------- | ------- |
| Connection        |                                               |         |
| Managed Device Id | Unique Identifier for the device to retrieve. |         |

### Get Mobile App

Retrieve a single mobile app.

| Input         | Comments                                     | Default |
| ------------- | -------------------------------------------- | ------- |
| Connection    |                                              |         |
| Mobile App Id | Unique Identifier for the mobile app to get. |         |

### Get Mobile App Assignment

Retrieve a single mobile app assignment.

| Input                    | Comments                                                | Default |
| ------------------------ | ------------------------------------------------------- | ------- |
| Connection               |                                                         |         |
| Mobile App Id            | Unique Identifier for the mobile app to get.            |         |
| Mobile App Assignment Id | Unique Identifier for the mobile app assignment to get. |         |

### Get Subscription

Retrieve a single subscription.

| Input           | Comments                                | Default |
| --------------- | --------------------------------------- | ------- |
| Connection      |                                         |         |
| Subscription ID | The ID of the subscription to retrieve. |         |

### Get User

Read properties and relationships of the User object.

| Input      | Comments                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                        |         |
| User Id    | Unique Identifier for the user to get. This can be the user's id or userPrincipalName. |         |
| Select     | Filters properties (columns).                                                          |         |

### List Detected Apps

List properties and relationships of the Detected Apps objects.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                    |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | Retrieves the total count of matching resources.                                                                                   | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Device Compliance Policies

List all device compliance policies.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Device Compliance Policy Setting State Summaries

Retrieve a list of device compliance policy setting state summaries.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Device Configurations

List all device configurations.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Directory Audits

Retrieve a list of directory audits.

| Input      | Comments                                                                      | Default |
| ---------- | ----------------------------------------------------------------------------- | ------- |
| Connection |                                                                               |         |
| Fetch All  | Set to true to retrieve all results.                                          | false   |
| Filter     | Filters results (rows).                                                       |         |
| Order By   | Orders results.                                                               |         |
| Top        | Sets the page size of results.                                                |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages. |         |

### List Domains

Retrieve a list of domain objects.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                    |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | Retrieves the total count of matching resources.                                                                                   | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Group Members

List all members of a security or Microsoft 365 group.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection |                                                     |         |
| Group Id   | The unique identifier of a MS365 or Security group. |         |
| Filter     | Filters results (rows).                             |         |
| Count      | Retrieves the total count of matching resources.    | false   |
| Select     | Filters properties (columns).                       |         |
| Search     | Returns results based on search criteria.           |         |
| Top        | Sets the page size of results.                      |         |
| Expand     | Retrieves related resources.                        |         |

### List Groups

List all groups.

| Input      | Comments                                         | Default |
| ---------- | ------------------------------------------------ | ------- |
| Connection |                                                  |         |
| Fetch All  | Set to true to retrieve all results.             | false   |
| Count      | Retrieves the total count of matching resources. | false   |
| Expand     | Retrieves related resources.                     |         |
| Filter     | Filters results (rows).                          |         |
| Order By   | Orders results.                                  |         |
| Search     | Returns results based on search criteria.        |         |
| Select     | Filters properties (columns).                    |         |
| Top        | Sets the page size of results.                   |         |

### List Managed Apps

List all managed apps in Intune.

| Input      | Comments                                                                                                                           | Default                                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection |                                                                                                                                    |                                                                                                                                              |
| Filter     | Filters results (rows).                                                                                                            | (microsoft.graph.managedApp/appAvailability eq null or microsoft.graph.managedApp/appAvailability eq 'lineOfBusiness' or isAssigned eq true) |
| Select     | Filters properties (columns).                                                                                                      |                                                                                                                                              |
| Expand     | Retrieves related resources.                                                                                                       |                                                                                                                                              |
| Order By   | Orders results.                                                                                                                    |                                                                                                                                              |
| Top        | Sets the page size of results.                                                                                                     |                                                                                                                                              |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |                                                                                                                                              |
| Count      | Retrieves the total count of matching resources.                                                                                   | false                                                                                                                                        |
| Search     | Returns results based on search criteria.                                                                                          |                                                                                                                                              |
| Format     | Returns the results in the specified media format.                                                                                 |                                                                                                                                              |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |                                                                                                                                              |

### List Managed Devices

List properties and relationships of the Managed Device objects.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                    |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | Retrieves the total count of matching resources.                                                                                   | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Mobile App Assignments

List all assignments for a mobile app.

| Input         | Comments                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                    |         |
| Mobile App Id | Unique Identifier for the mobile app to get.                                                                                       |         |
| Fetch All     | Set to true to retrieve all results.                                                                                               | false   |
| Filter        | Filters results (rows).                                                                                                            |         |
| Select        | Filters properties (columns).                                                                                                      |         |
| Expand        | Retrieves related resources.                                                                                                       |         |
| Order By      | Orders results.                                                                                                                    |         |
| Top           | Sets the page size of results.                                                                                                     |         |
| Skip          | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count         | Retrieves the total count of matching resources.                                                                                   | false   |
| Search        | Returns results based on search criteria.                                                                                          |         |
| Format        | Returns the results in the specified media format.                                                                                 |         |
| Skip Token    | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Mobile Apps

Retrieve a list of mobile apps.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                    |         |
| Fetch All  | Set to true to retrieve all results.                                                                                               | false   |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | Retrieves the total count of matching resources.                                                                                   | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### List Software Update Status Summary

List the status summary of a software update.

| Input      | Comments                                                                      | Default |
| ---------- | ----------------------------------------------------------------------------- | ------- |
| Connection |                                                                               |         |
| Fetch All  | Set to true to retrieve all results.                                          | false   |
| Select     | Filters properties (columns).                                                 |         |
| Expand     | Retrieves related resources.                                                  |         |
| Search     | Returns results based on search criteria.                                     |         |
| Format     | Returns the results in the specified media format.                            |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages. |         |

### List Subscriptions

List all Subscriptions.

| Input      | Comments                                                                      | Default |
| ---------- | ----------------------------------------------------------------------------- | ------- |
| Connection |                                                                               |         |
| Fetch All  | Set to true to retrieve all results.                                          | false   |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages. |         |

### List Users

Retrieve a list of user objects.

| Input      | Comments                                                                                                                           | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                    |         |
| Filter     | Filters results (rows).                                                                                                            |         |
| Select     | Filters properties (columns).                                                                                                      |         |
| Expand     | Retrieves related resources.                                                                                                       |         |
| Order By   | Orders results.                                                                                                                    |         |
| Top        | Sets the page size of results.                                                                                                     |         |
| Skip       | Indexes into a result set. Also used by some APIs to implement paging and can be used together with $top to manually page results. |         |
| Count      | Retrieves the total count of matching resources.                                                                                   | false   |
| Search     | Returns results based on search criteria.                                                                                          |         |
| Format     | Returns the results in the specified media format.                                                                                 |         |
| Skip Token | Retrieves the next page of results from result sets that span multiple pages.                                                      |         |

### Raw Request

Send raw HTTP request to Microsoft Intune API

| Input                   | Comments                                                                                                                                                                                                                                                                                                                | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                         |         |
| API Version             | The version of the API to use.                                                                                                                                                                                                                                                                                          |         |
| URL                     | Input the path only (/deviceManagement/detectedApps), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/deviceManagement/detectedApps, only /deviceManagement/detectedApps is entered in this field. e.g. /deviceManagement/detectedApps |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                 |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                               |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                    |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                        |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                  |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                     |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                             |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                     |         |
| Debug Request           | Enable this to log the request and response                                                                                                                                                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                     | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                        | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                     | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                           | false   |

### Reprocess User License Assignment

Reprocess all group-based license assignments for the user.

| Input      | Comments                                                                                                            | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                     |         |
| User Id    | Unique Identifier for the user to reprocess the license assignment. This can be the user's id or userPrincipalName. |         |

### Retire Managed Device

Retire a device from Intune management upon employee offboarding.

| Input             | Comments                                    | Default |
| ----------------- | ------------------------------------------- | ------- |
| Connection        |                                             |         |
| Managed Device Id | Unique Identifier for the device to retire. |         |

### Update Group

Update a single group.

| Input            | Comments                                                                                       | Default |
| ---------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                |         |
| Group Id         | The ID of the group update.                                                                    |         |
| Display Name     | The name to display in the address book for the group.                                         |         |
| Mail Nickname    | The mail alias for the group, unique for Microsoft 365 groups in the organization.             |         |
| Security Enabled | Set to true for mail-enabled groups. If Not Set the input will not be included in the request. |         |
| Description      | A description for the group.                                                                   |         |
| Assigned Labels  | The list of sensitivity label pairs (label ID, label name) associated with a group             |         |
| Visibility       | The display name for the group                                                                 |         |
| Body Fields      | Extra fields to include in the request body.                                                   |         |

### Update Managed App

Update an App object.

| Input                        | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Default |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| Mobile App ID                | The ID of the app to update.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |         |
| OData App Type               | The type of app to update. This depends on the platform of the app. Check the Microsoft Graph API documentation for the correct type. Documentation for an Office Suite app can be found here https://learn.microsoft.com/en-us/graph/api/intune-apps-officesuiteapp-update?view=graph-rest-beta                                                                                                                                                                                                                                     |         |
| Display Name                 | Update the name for the app. This name will be visible in the Intune apps list and to users in the Company Portal.​                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Description                  | Update the description to help your device users understand what the app is and/or what they can do in the app. This comments will be visible to them in Company Portal.                                                                                                                                                                                                                                                                                                                                                             |         |
| Publisher                    | Update the name of the developer or company that distributes the app. This information will be visible to users in Company Portal.                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Icon Image Type              | Update the type of the Icon image. This field is required if the Icon Image Data is provided.                                                                                                                                                                                                                                                                                                                                                                                                                                        |         |
| Icon Image Data              | Update the base64 encoded image data for the Icon image. This field is required if the Icon Image Type is provided.                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Is Featured                  | Update whether the app is featured. Featured apps are displayed prominently in the Company Portal.​                                                                                                                                                                                                                                                                                                                                                                                                                                  | false   |
| Privacy Information URL      | Update the URL that links to the privacy information for the app. The privacy information URL will be visible to users in Company Portal.​                                                                                                                                                                                                                                                                                                                                                                                           |         |
| Information URL              | Update the URL that links to more information about the app. This URL will be visible to users in Company Portal.​                                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Owner                        | Update the name of the person or company that owns the app. This information will be visible to people signed into the admin center.​                                                                                                                                                                                                                                                                                                                                                                                                |         |
| Developer                    | Update the developer of the app. This information will be visible to users in Company Portal.​                                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| Notes                        | Update any notes about the app. This information will be visible to people signed into the admin center.​                                                                                                                                                                                                                                                                                                                                                                                                                            |         |
| Specific Platform Properties | The specific properties for the app to be updated, generic properties like '@odata.type', 'displayName', 'description', etc. are alredy covered by the other inputs. This input should be a JSON object with the specific properties for the app to be updated. Check the Microsoft Graph API documentation for the correct properties for the app type you are updating. Documentation for an Office Suite app can be found here https://learn.microsoft.com/en-us/graph/api/intune-apps-officesuiteapp-update?view=graph-rest-beta |         |

### Update Managed Device

Update the properties of a Managed Device object.

| Input               | Comments                                                                                                                                           | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                    |         |
| Managed Device Id   | Unique Identifier for the device to update.                                                                                                        |         |
| Managed Device Name | Update the automatically generated name to identify a device.                                                                                      |         |
| Notes               | Updated notes for the device. Intended to be used for additional information about the device.                                                     |         |
| Extra Fields        | Additional fields to update on the device. This is an object that can contain any additional fields that might not be covered by the other inputs. |         |

### Update Mobile App Assignment

Update a mobile app assignment.

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               |                                                                                                                                                                                                                                                                                                                                                                                          |         |
| Mobile App Id            | The ID of the mobile app to update the assignment from.                                                                                                                                                                                                                                                                                                                                  |         |
| Mobile App Assignment Id | The ID of the mobile app assignment to update.                                                                                                                                                                                                                                                                                                                                           |         |
| Intent                   | The intent of the assignment for the managed app. A 'Required' option will force the app to be installed on the device. An 'Available' option will make the app available for the user to install. An 'Uninstall' option will remove the app from the device. An 'Available Without Enrollment' option will make the app available for the user to install without enrolling the device. |         |
| Target                   | The mobile app assignment target                                                                                                                                                                                                                                                                                                                                                         |         |
| Settings                 | The mobile app assignment settings                                                                                                                                                                                                                                                                                                                                                       |         |

### Update Software Update Status Summary

Update the status summary of a software update.

| Input                       | Comments                                                                    | Default |
| --------------------------- | --------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                             |         |
| Display Name                | The display name of the software update status summary.                     |         |
| Compliant Device Count      | The number of devices that are compliant with the software update.          |         |
| Non-Compliant Device Count  | The number of devices that are not compliant with the software update.      |         |
| Remediated Device Count     | The number of devices that have been remediated.                            |         |
| Error Device Count          | The number of devices that have an error with the software update.          |         |
| Unknown Device Count        | The number of devices that have an unknown status with the software update. |         |
| Conflict Device Count       | The number of devices that have a conflict with the software update.        |         |
| Not Applicable Device Count | The number of devices that are not applicable for the software update.      |         |
| Compliant User Count        | The number of users that are compliant with the software update.            |         |
| Non-Compliant User Count    | The number of users that are not compliant with the software update.        |         |
| Remediated User Count       | The number of users that have been remediated.                              |         |
| Error User Count            | The number of users that have an error with the software update.            |         |
| Unknown User Count          | The number of users that have an unknown status with the software update.   |         |
| Conflict User Count         | The number of users that have a conflict with the software update.          |         |
| Not Applicable User Count   | The number of users that are not applicable for the software update.        |         |

### Update Subscription

Update a single subscription.

| Input                | Comments                                                                                                                                                                                   | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection           |                                                                                                                                                                                            |         |
| Subscription ID      | The ID of the subscription to update.                                                                                                                                                      |         |
| Notification URL     | The URL to send notifications to.                                                                                                                                                          |         |
| Expiration Date Time | Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time from subscription creation that varies for the resource subscribed to. |         |

### Update User

Update the properties of a User object.

| Input                 | Comments                                                                                                                                                                                                                                                                                                                         | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                                                                                                                                                  |         |
| User Id               | Unique Identifier for the user to update. This can be the user's id or userPrincipalName.                                                                                                                                                                                                                                        |         |
| Account Enabled       | Indicates if the account is enabled.                                                                                                                                                                                                                                                                                             | true    |
| Display Name          | The display name of the user.                                                                                                                                                                                                                                                                                                    |         |
| User Principal Name   | The updated user principal name of the user. Required if 'Domain' input is provided.                                                                                                                                                                                                                                             |         |
| Domain                | The updated domain for the user, this must be an existing domain in the tenant, you can list them using the 'List Domains' action. Required if 'User Principal Name' input is provided.                                                                                                                                          |         |
| First Name            | The updated first name of the user.                                                                                                                                                                                                                                                                                              |         |
| Last Name             | The updated last name of the user.                                                                                                                                                                                                                                                                                               |         |
| Job Title             | The updated job title of the user.                                                                                                                                                                                                                                                                                               |         |
| Additional Properties | Additional properties to update that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. You can get additional properties from the Microsoft Graph API documentation https://learn.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#json-representation |         |

### Wipe Device

Remotely wipe a compromised or lost device.

| Input             | Comments                                  | Default |
| ----------------- | ----------------------------------------- | ------- |
| Connection        |                                           |         |
| Managed Device Id | Unique Identifier for the device to wipe. |         |
