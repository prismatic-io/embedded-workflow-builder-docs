---
title: Microsoft Intune Connector
sidebar_label: Microsoft Intune
description: Use the Microsoft Intune component to manage users, devices, and applications.
---

![Microsoft Intune](./assets/ms-intune.png#connector-icon)
[Microsoft Intune](https://www.microsoft.com/en-us/security/business/microsoft-intune) is a cloud-based service that focuses on device management and application management. This component allows managing users, devices, groups, mobile applications, and device compliance policies within Microsoft Intune.

## API Documentation

This component was built using the [Microsoft Graph REST API v1.0](https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0&preserve-view=true).

## Connections

### OAuth 2.0 {#msintuneoauth2}

OAuth 2.0 Connectivity for Microsoft Intune

To connect to Microsoft Intune using OAuth 2.0, create an app registration in Microsoft Entra.

#### Prerequisites

- A Microsoft account with administrative access to Microsoft Entra (formerly Azure AD)

#### Setup Steps

1. Navigate to the [Microsoft Entra admin center](https://entra.microsoft.com/) and go to **Identity** > **Applications** > **App registrations**, then select **New registration**.
2. Configure the app registration:
   - Set **Supported account types** to **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** to allow users from different organizations to authenticate.
   - Under **Redirect URI**, select **Web** as the platform and enter: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - Select **Register** to complete the initial setup.
3. Navigate to **Certificates & Secrets** and create a new **Client Secret**. Copy the **Value** immediately (it will not be shown again).
4. Navigate to the **Overview** page and copy the **Application (client) ID**.
5. Navigate to **API Permissions** and select **Add a permission**:
   - Select **Microsoft Graph**
   - Select **Delegated permissions**
   - Under **DeviceManagementManagedDevices**, add the required permissions such as **DeviceManagementManagedDevices.PrivilegedOperations.All** and **DeviceManagementManagedDevices.Read.All**
   - Add any additional permissions required by the integration

For more information on available permissions, refer to the [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference).

#### Configure the Connection

1. Enter the **Application (client) ID** as the **Client ID**
2. Enter the **Client Secret** value copied earlier
3. Use the default **Authorize URL**: `https://login.microsoftonline.com/common/oauth2/v2.0/authorize`
4. For **Token URL**, replace **common** with the Tenant ID when authenticating to a specific tenant:
   - Default: `https://login.microsoftonline.com/common/oauth2/v2.0/token`
   - With Tenant ID: `https://login.microsoftonline.com/abf988bf-86f1-41af-91ab-2d7cd011db46/oauth2/v2.0/token`

5. Use the default **Scopes** value or adjust based on the permissions configured in the app registration

:::note[Tenant-Specific Authentication]
Some actions require tenant-specific authentication. Replace the **common** portion of the Token URL with the specific Tenant ID when connecting to a particular organization.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                                                                                                              | Default                                                                                                                                                                                                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 Authorization URL for Microsoft Intune. For multi-tenant apps, use /common. For single-tenant apps, replace /common with your tenant ID.                                                                                                                                                                | https://login.microsoftonline.com/common/oauth2/v2.0/authorize                                                                                                                                                                                                                                           |
| Token URL     | The OAuth 2.0 Token URL for Microsoft Intune. For multi-tenant apps, use /common. For single-tenant apps, replace /common with your tenant ID.                                                                                                                                                                        | https://login.microsoftonline.com/common/oauth2/v2.0/token                                                                                                                                                                                                                                               |
| Scopes        | Space-separated list of Microsoft Graph API permission scopes. Common scopes include DeviceManagementManagedDevices, DeviceManagementApps, Directory, Group, User permissions. [Learn more](https://learn.microsoft.com/en-us/graph/permissions-reference)                                                            | DeviceManagementManagedDevices.PrivilegedOperations.All DeviceManagementApps.ReadWrite.All DeviceManagementManagedDevices.ReadWrite.All Group.ReadWrite.All Domain.ReadWrite.All User.ReadWrite.All Directory.ReadWrite.All AuditLog.Read.All DeviceManagementConfiguration.ReadWrite.All offline_access |
| Client ID     | Application (client) ID from your App Registration in the Azure Portal. Navigate to Azure Active Directory > App registrations > [Your App] to find this value. [Learn more](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)                                                |                                                                                                                                                                                                                                                                                                          |
| Client Secret | Client secret value from your App Registration in the Azure Portal. Navigate to Azure Active Directory > App registrations > [Your App] > Certificates & secrets to generate a new secret. [Learn more](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-a-client-secret) |                                                                                                                                                                                                                                                                                                          |

### OAuth 2.0 Client Credentials {#oauth2-client-credentials}

OAuth 2.0 Client Credentials Connectivity for Microsoft Intune

To connect to Microsoft Intune using the OAuth 2.0 Client Credentials flow, create an app registration in Microsoft Entra. The client credentials flow is used for server-to-server authentication where the application acts on its own behalf rather than on behalf of a specific user.

#### Prerequisites

- A Microsoft account with administrative access to Microsoft Entra (formerly Azure AD)
- Admin consent privileges to grant application-level permissions

#### Setup Steps

1. Navigate to the [Microsoft Entra admin center](https://entra.microsoft.com/) and go to **Identity** > **Applications** > **App registrations**, then select **New registration**.
2. Configure the app registration:
   - Set **Supported account types** to **Accounts in any organizational directory (Any Azure AD directory - Multitenant)** to allow authentication across different organizations.
   - Under **Redirect URI**, select **Web** as the platform and enter: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - Select **Register** to complete the initial setup.
3. Navigate to **Certificates & Secrets** and create a new **Client Secret**. Copy the **Value** immediately (it will not be shown again).
4. Navigate to the **Overview** page and copy the **Application (client) ID**.
5. Navigate to **API Permissions** and select **Add a permission**:
   - Select **Microsoft Graph**
   - Select **Application permissions**
   - Add all permissions required for the intended use case
6. After adding all required permissions, select **Grant admin consent** to authorize the application to use these permissions. This step is required for the client credentials flow to function properly.

For more information on application vs delegated permissions, refer to the [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference).

#### Configure the Connection

1. Enter the **Application (client) ID** as the **Client ID**
2. Enter the **Client Secret** value copied earlier
3. Use the default **Authorize URL**: `https://login.microsoftonline.com/common/oauth2/v2.0/authorize`
4. For **Token URL**, replace **common** with the specific Tenant ID (required for client credentials flow):
   - Default format: `https://login.microsoftonline.com/common/oauth2/v2.0/token`
   - With Tenant ID: `https://login.microsoftonline.com/abf988bf-86f1-41af-91ab-2d7cd011db46/oauth2/v2.0/token`
5. Use the default **Scopes** value: `https://graph.microsoft.com/.default`

:::note[Client Credentials Flow Requirement]
The client credentials flow requires a tenant-specific Token URL. Replace **common** with the actual Tenant ID for all actions using this connection type.
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                                                                                                              | Default                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Token URL     | The OAuth 2.0 Token URL for Microsoft Intune. <strong>Important:</strong> Replace **<YOUR_TENANT_ID>** with your Azure AD tenant ID. Find your tenant ID in Azure Portal > Azure Active Directory > Overview.                                                                                                         | https://login.microsoftonline.com/\*\*<YOUR_TENANT_ID>\*\*/oauth2/v2.0/token |
| Scopes        | The scope for Microsoft Graph API access. For client credentials flow, use https://graph.microsoft.com/.default to request all permissions configured in your app registration. [Learn more](https://learn.microsoft.com/en-us/graph/auth-v2-service)                                                                 | https://graph.microsoft.com/.default                                         |
| Client ID     | Application (client) ID from your App Registration in the Azure Portal. Navigate to Azure Active Directory > App registrations > [Your App] to find this value. [Learn more](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)                                                |                                                                              |
| Client Secret | Client secret value from your App Registration in the Azure Portal. Navigate to Azure Active Directory > App registrations > [Your App] > Certificates & secrets to generate a new secret. [Learn more](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-a-client-secret) |                                                                              |

## Triggers

### Resource Change {#resourcetrigger}

Receive resource change notifications from Microsoft Intune. Handles URL validation challenges automatically and manages webhook subscriptions on deploy and deletion.

| Input                | Comments                                                                                                                                                                                                                          | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft Intune connection to use.                                                                                                                                                                                           |         |
| Expiration Date Time | The date and time when the webhook subscription expires in UTC format (ISO 8601). The maximum duration varies by resource type. [Learn more](https://learn.microsoft.com/en-us/graph/api/resources/subscription)                  |         |
| Change Type          | The type of change that will trigger notifications. Select one or more change types to monitor.                                                                                                                                   |         |
| Resource             | The Microsoft Graph resource path to monitor for changes (e.g., users, groups, devices/managedDevices). [Learn more](https://learn.microsoft.com/en-us/graph/api/resources/change-notifications-api-overview?view=graph-rest-1.0) |         |

## Actions

### Add Group Member {#addmembertogroup}

Add a single member to a security or Microsoft 365 group.

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use.             |         |
| Group ID   | The unique identifier of a MS365 or Security group. |         |
| Member ID  | The unique identifier of a member (UUID format).    |         |

### Add Group Members {#addmemberstogroup}

Add members to a security or Microsoft 365 group.

| Input              | Comments                                                                                                                    | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Microsoft Intune connection to use.                                                                                     |         |
| Group ID           | The unique identifier of a MS365 or Security group.                                                                         |         |
| Member IDs         | Comma-separated list of member unique identifiers (UUIDs). You must fill either this input or the Dynamic member IDs input. |         |
| Dynamic Member IDs | Array of member unique identifiers (UUIDs). You must fill either this input or the member IDs input.                        |         |

### Assign Device Compliance Policy {#assigndevicecompliancepolicy}

Assign a device compliance policy by ID.

| Input                       | Comments                                                                                                                           | Default |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  | The Microsoft Intune connection to use.                                                                                            |         |
| Device Compliance Policy ID | Unique Identifier for the device to assign the compliance policy.                                                                  |         |
| Assignment ID               | The unique identifier for the policy assignment.                                                                                   |         |
| Target                      | The device compliance policy assignment target type (e.g., configurationManagerCollectionAssignmentTarget, groupAssignmentTarget). |         |
| Collection ID               | The unique identifier for the Configuration Manager target collection.                                                             |         |

### Assign Mobile App {#assignmobileapp}

Assign a mobile app to a group.

| Input         | Comments                                                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Microsoft Intune connection to use.                                                                                                                                                                                                                                                                                                                                                  |         |
| Mobile App ID | Unique Identifier for the mobile app to assign.                                                                                                                                                                                                                                                                                                                                          |         |
| Group ID      | The unique identifier of the group to assign the app to (UUID format).                                                                                                                                                                                                                                                                                                                   |         |
| Intent        | The intent of the assignment for the managed app. A 'Required' option will force the app to be installed on the device. An 'Available' option will make the app available for the user to install. An 'Uninstall' option will remove the app from the device. An 'Available Without Enrollment' option will make the app available for the user to install without enrolling the device. |         |
| Target        | The mobile app assignment target type. Common values include allLicensedUsersAssignmentTarget, groupAssignmentTarget, allDevicesAssignmentTarget.                                                                                                                                                                                                                                        |         |
| Settings      | The mobile app assignment settings type. The value depends on the app platform (e.g., windowsUniversalAppXAppAssignmentSettings, iosLobAppAssignmentSettings).                                                                                                                                                                                                                           |         |

### Create Group {#creategroup}

Create a group.

| Input             | Comments                                                                                                 | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Microsoft Intune connection to use.                                                                  |         |
| Display Name      | The name to display in the address book for the group.                                                   |         |
| Mail Nickname     | The mail alias for the group, unique for Microsoft 365 groups in the organization.                       |         |
| Security Enabled  | When true, creates a security group. Security groups are used to control access to resources.            | false   |
| Mail Enabled      | When true, creates a mail-enabled group that can receive email messages.                                 | false   |
| Additional Fields | Less common group properties.                                                                            |         |
| Description       | A text summary of the group's purpose, visible to members and administrators.                            |         |
| Assigned Labels   | The list of sensitivity label pairs (label ID, label name) associated with a group                       |         |
| Visibility        | Specifies the visibility of the group. Possible values are Private, Public, or Hiddenmembership.         |         |
| Body Fields       | Additional JSON properties to include in the request body. These will be merged with other input values. |         |

### Create Managed App {#createmanagedapp}

Create a new App object.

| Input                        | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Default |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The Microsoft Intune connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| OData App Type               | The OData type of the app to create (e.g., #microsoft.graph.officeSuiteApp, #microsoft.graph.win32LobApp). This depends on the platform of the app. [Learn more](https://learn.microsoft.com/en-us/graph/api/intune-apps-officesuiteapp-create?view=graph-rest-beta)                                                                                                                                                                                                                                                                      |         |
| Display Name                 | The name for the app. This name will be visible in the Intune apps list and to users in the Company Portal.                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Description                  | A description of the app that helps users understand what it is and what they can do with it. This description will be visible in Company Portal.                                                                                                                                                                                                                                                                                                                                                                                         |         |
| Is Featured                  | When true, displays this as a featured app in the Company Portal. Featured apps are prominently placed so users can quickly access them.                                                                                                                                                                                                                                                                                                                                                                                                  | false   |
| Specific Platform Properties | The specific properties for the app to be created, generic properties like '@odata.type', 'displayName', 'description', etc. are already covered by the other inputs. This input should be a JSON object with the specific properties for the app to be created. Check the Microsoft Graph API documentation for the correct properties for the app type you are creating. Documentation for an Office Suite app can be found [here](https://learn.microsoft.com/en-us/graph/api/intune-apps-officesuiteapp-create?view=graph-rest-beta). |         |
| Additional Fields            | Less common app properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Publisher                    | The name of the developer or company that distributes the app. This information will be visible to users in Company Portal.                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Icon Image Type              | The MIME type of the app icon image (e.g., image/png, image/jpeg). This field is required if the Icon Image Data is provided.                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Icon Image Data              | The base64-encoded image data for the app icon. This field is required if the Icon Image Type is provided.                                                                                                                                                                                                                                                                                                                                                                                                                                |         |
| Privacy Information URL      | A link to the app's privacy policy and terms. This URL will be visible to users in Company Portal.                                                                                                                                                                                                                                                                                                                                                                                                                                        |         |
| Information URL              | A link to a website or documentation with more information about the app. This URL will be visible to users in Company Portal.                                                                                                                                                                                                                                                                                                                                                                                                            |         |
| Owner                        | The name of the person in the organization who manages licensing or is the point-of-contact for this app. This name will be visible in the admin center.                                                                                                                                                                                                                                                                                                                                                                                  |         |
| Developer                    | The name of the company or individual that developed the app. This information will be visible in the admin center.                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| Notes                        | Additional notes about the app for documentation purposes. Notes will be visible in the admin center.                                                                                                                                                                                                                                                                                                                                                                                                                                     |         |

### Create Mobile App Assignment {#createmobileappassignment}

Create a mobile app assignment.

| Input         | Comments                                                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Microsoft Intune connection to use.                                                                                                                                                                                                                                                                                                                                                  |         |
| Mobile App ID | The ID of the mobile app to create the assignment for.                                                                                                                                                                                                                                                                                                                                   |         |
| Intent        | The intent of the assignment for the managed app. A 'Required' option will force the app to be installed on the device. An 'Available' option will make the app available for the user to install. An 'Uninstall' option will remove the app from the device. An 'Available Without Enrollment' option will make the app available for the user to install without enrolling the device. |         |
| Target        | The mobile app assignment target type. Common values include allLicensedUsersAssignmentTarget, groupAssignmentTarget, allDevicesAssignmentTarget.                                                                                                                                                                                                                                        |         |
| Settings      | The mobile app assignment settings type. The value depends on the app platform (e.g., windowsUniversalAppXAppAssignmentSettings, iosLobAppAssignmentSettings).                                                                                                                                                                                                                           |         |

### Create Subscription {#createsubscription}

Create a subscription.

| Input                      | Comments                                                                                                                                                                                                                          | Default |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 | The Microsoft Intune connection to use.                                                                                                                                                                                           |         |
| Change Type                | The type of change that will trigger notifications. Select one or more change types to monitor.                                                                                                                                   |         |
| Notification URL           | The URL endpoint that will receive webhook notifications when changes occur.                                                                                                                                                      |         |
| Resource                   | The Microsoft Graph resource path to monitor for changes (e.g., users, groups, devices/managedDevices). [Learn more](https://learn.microsoft.com/en-us/graph/api/resources/change-notifications-api-overview?view=graph-rest-1.0) |         |
| Expiration Date Time       | The date and time when the webhook subscription expires in UTC format (ISO 8601). The maximum duration varies by resource type. [Learn more](https://learn.microsoft.com/en-us/graph/api/resources/subscription)                  |         |
| Lifecycle Notification URL | The URL endpoint that receives lifecycle notifications (subscriptionRemoved, reauthorizationRequired, missed notifications). Required for Teams resources if the expirationDateTime value is more than 1 hour from now.           |         |
| Body Fields                | Additional JSON properties to include in the request body. These will be merged with other input values.                                                                                                                          |         |

### Create User {#createuser}

Create a new user.

| Input                              | Comments                                                                                                                                                                                                                                                                                                   | Default |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                         | The Microsoft Intune connection to use.                                                                                                                                                                                                                                                                    |         |
| Account Enabled                    | When true, enables the user account. When false, the account is disabled and the user cannot sign in.                                                                                                                                                                                                      | true    |
| Display Name                       | The full name shown in the address book and user profile.                                                                                                                                                                                                                                                  |         |
| Force Change Password Next Sign In | When true, forces the user to change their password on next sign in.                                                                                                                                                                                                                                       | true    |
| Password                           | The password for the user account. Must meet the organization's password complexity requirements.                                                                                                                                                                                                          |         |
| User Principal Name                | The user principal name (username) for the user. This will be combined with the domain to create the full user principal name (e.g., john.doe@contoso.com).                                                                                                                                                |         |
| Domain                             | The domain for the user. This must be an existing verified domain in the tenant. Use the 'List Domains' action to retrieve available domains.                                                                                                                                                              |         |
| Additional Properties              | Additional properties that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. See [Microsoft Graph API user properties](https://learn.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#json-representation) for available fields. |         |

### Delete Group {#deletegroup}

Delete a single group.

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use.       |         |
| Group ID   | The unique identifier of the group to delete. |         |

### Delete Group Member {#deletememberfromgroup}

Delete a member from a security or Microsoft 365 group.

| Input      | Comments                                                               | Default |
| ---------- | ---------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use.                                |         |
| Group ID   | The unique identifier of the group to assign the app to (UUID format). |         |
| Member ID  | The unique identifier of a member (UUID format).                       |         |

### Delete Managed App {#deletemanagedapp}

Deletes an App.

| Input         | Comments                                | Default |
| ------------- | --------------------------------------- | ------- |
| Connection    | The Microsoft Intune connection to use. |         |
| Mobile App ID | The ID of the app to delete.            |         |

### Delete Managed Device {#deletemanageddevice}

Deletes a Managed Device.

| Input             | Comments                                    | Default |
| ----------------- | ------------------------------------------- | ------- |
| Connection        | The Microsoft Intune connection to use.     |         |
| Managed Device ID | Unique Identifier for the device to delete. |         |

### Delete Mobile App Assignment {#deletemobileappassignment}

Delete a single mobile app assignment.

| Input                    | Comments                                                | Default |
| ------------------------ | ------------------------------------------------------- | ------- |
| Connection               | The Microsoft Intune connection to use.                 |         |
| Mobile App ID            | The ID of the mobile app to delete the assignment from. |         |
| Mobile App Assignment ID | The ID of the mobile app assignment to delete.          |         |

### Delete Subscription by ID {#deletesubscription}

Delete a single subscription by its ID.

| Input           | Comments                                | Default |
| --------------- | --------------------------------------- | ------- |
| Connection      | The Microsoft Intune connection to use. |         |
| Subscription ID | The ID of the subscription to delete.   |         |

### Delete Subscriptions from an Endpoint {#deleteallsubscription}

Delete all subscriptions from an endpoint.

| Input            | Comments                                        | Default |
| ---------------- | ----------------------------------------------- | ------- |
| Connection       | The Microsoft Intune connection to use.         |         |
| Notification URL | The URL from which to delete all subscriptions. |         |

### Delete User {#deleteuser}

Deletes a User.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use.                                                   |         |
| User ID    | Unique Identifier for the user to delete. This can be the user's id or userPrincipalName. |         |

### Get Detected App {#getdetectedapp}

Read properties and relationships of the Detected Apps object.

| Input           | Comments                                            | Default |
| --------------- | --------------------------------------------------- | ------- |
| Connection      | The Microsoft Intune connection to use.             |         |
| Detected App ID | Unique Identifier for the detected app to retrieve. |         |

### Get Device Compliance Policy {#getdevicecompliancepolicy}

Get a device compliance policy by ID.

| Input                       | Comments                                                        | Default |
| --------------------------- | --------------------------------------------------------------- | ------- |
| Connection                  | The Microsoft Intune connection to use.                         |         |
| Device Compliance Policy ID | Unique Identifier for the device compliance policy to retrieve. |         |

### Get Device Compliance Policy Setting State Summary {#getdevicecompliancepolicysettingstatesummary}

Retrieve a device compliance policy setting state summary by its ID.

| Input                                             | Comments                                                                              | Default |
| ------------------------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection                                        | The Microsoft Intune connection to use.                                               |         |
| Device Compliance Policy Setting State Summary ID | Unique Identifier for the device compliance policy setting state summary to retrieve. |         |

### Get Device Configuration {#getdeviceconfigurations}

Get the device configurations.

| Input                   | Comments                                      | Default |
| ----------------------- | --------------------------------------------- | ------- |
| Connection              | The Microsoft Intune connection to use.       |         |
| Device Configuration ID | Unique Identifier for the device to retrieve. |         |

### Get Directory Audit {#getdirectoyaudit}

Get a specific Microsoft Entra audit log item.

| Input              | Comments                                                                  | Default |
| ------------------ | ------------------------------------------------------------------------- | ------- |
| Connection         | The Microsoft Intune connection to use.                                   |         |
| Microsoft Entra ID | The unique identifier for the Microsoft Entra audit log item to retrieve. |         |

### Get Group {#getgroup}

Retrieve a single group.

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use.         |         |
| Group ID   | The unique identifier of the group to retrieve. |         |

### Get Managed App {#getmanagedapp}

Read properties and relationships of an App object.

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use.                                                       |         |
| App ID     | The unique identifier of a managed app. You can get this from the 'List Managed Apps' action. |         |

### Get Managed Device {#getmanageddevice}

Read properties and relationships of the Managed Device object.

| Input             | Comments                                      | Default |
| ----------------- | --------------------------------------------- | ------- |
| Connection        | The Microsoft Intune connection to use.       |         |
| Managed Device ID | Unique Identifier for the device to retrieve. |         |

### Get Mobile App {#getmobileapp}

Retrieve a single mobile app.

| Input         | Comments                                            | Default |
| ------------- | --------------------------------------------------- | ------- |
| Connection    | The Microsoft Intune connection to use.             |         |
| Mobile App ID | Unique identifier for the mobile app (UUID format). |         |

### Get Mobile App Assignment {#getmobileappassignment}

Retrieve a single mobile app assignment.

| Input                    | Comments                                                | Default |
| ------------------------ | ------------------------------------------------------- | ------- |
| Connection               | The Microsoft Intune connection to use.                 |         |
| Mobile App ID            | Unique identifier for the mobile app (UUID format).     |         |
| Mobile App Assignment ID | Unique Identifier for the mobile app assignment to get. |         |

### Get Subscription {#getsubscription}

Retrieve a single subscription.

| Input           | Comments                                                 | Default |
| --------------- | -------------------------------------------------------- | ------- |
| Connection      | The Microsoft Intune connection to use.                  |         |
| Subscription ID | The unique identifier of the subscription (UUID format). |         |

### Get User {#getuser}

Read properties and relationships of the User object.

| Input      | Comments                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use.                                                |         |
| User ID    | Unique Identifier for the user to get. This can be the user's id or userPrincipalName. |         |
| Select     | Comma-separated list of properties to include in the response. Reduces payload size.   |         |

### List Detected Apps {#listdetectedapps}

List properties and relationships of the Detected Apps objects.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Intune connection to use.                                                          |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                        | false   |
| Pagination | Page and page-size controls.                                                                     |         |
| Top        | Maximum number of results to return per page.                                                    |         |
| Skip       | Number of results to skip. Use with $top for manual pagination.                                  |         |
| Skip Token | Token from a previous response's @odata.nextLink to retrieve the next page of results.           |         |
| Filters    | Optional query controls to sort and refine the results.                                          |         |
| Filter     | OData filter expression to filter results. Supports operators like eq, ne, startswith, contains. |         |
| Select     | Comma-separated list of properties to include in the response. Reduces payload size.             |         |
| Expand     | Comma-separated list of relationships to expand and include in the response.                     |         |
| Order By   | Property to sort results by. Add 'asc' or 'desc' suffix for sort direction.                      |         |
| Count      | When true, retrieves the total count of matching resources.                                      | false   |
| Search     | Returns results based on search criteria. Use format 'property:value' for specific searches.     |         |
| Format     | Response format. Typically 'json' for JSON output.                                               |         |

### List Device Compliance Policies {#listdevicecompliancepolicies}

List all device compliance policies.

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use. |         |

### List Device Compliance Policy Setting State Summaries {#listdevicecompliancepolicysettingstatesummaries}

Retrieve a list of device compliance policy setting state summaries.

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use. |         |

### List Device Configurations {#listdeviceconfigurations}

List all device configurations.

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use. |         |

### List Directory Audits {#listdirectoryaudits}

Retrieve a list of directory audits.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Intune connection to use.                                                          |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                        | false   |
| Pagination | Page and page-size controls.                                                                     |         |
| Top        | Maximum number of results to return per page.                                                    |         |
| Skip Token | Token from a previous response's @odata.nextLink to retrieve the next page of results.           |         |
| Filters    | Optional query controls to sort and refine the results.                                          |         |
| Filter     | OData filter expression to filter results. Supports operators like eq, ne, startswith, contains. |         |
| Order By   | Property to sort results by. Add 'asc' or 'desc' suffix for sort direction.                      |         |

### List Domains {#listdomains}

Retrieve a list of domain objects.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Intune connection to use.                                                          |         |
| Pagination | Page and page-size controls.                                                                     |         |
| Top        | Maximum number of results to return per page.                                                    |         |
| Skip       | Number of results to skip. Use with $top for manual pagination.                                  |         |
| Skip Token | Token from a previous response's @odata.nextLink to retrieve the next page of results.           |         |
| Filters    | Optional query controls to sort and refine the results.                                          |         |
| Filter     | OData filter expression to filter results. Supports operators like eq, ne, startswith, contains. |         |
| Select     | Comma-separated list of properties to include in the response. Reduces payload size.             |         |
| Expand     | Comma-separated list of relationships to expand and include in the response.                     |         |
| Order By   | Property to sort results by. Add 'asc' or 'desc' suffix for sort direction.                      |         |
| Count      | When true, retrieves the total count of matching resources.                                      | false   |
| Search     | Returns results based on search criteria. Use format 'property:value' for specific searches.     |         |
| Format     | Response format. Typically 'json' for JSON output.                                               |         |

### List Group Members {#listmembersfromgroup}

List all members of a security or Microsoft 365 group.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Intune connection to use.                                                          |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                        | false   |
| Group ID   | The unique identifier of a MS365 or Security group.                                              |         |
| Top        | Maximum number of results to return per page.                                                    |         |
| Filters    | Optional query controls to sort and refine the results.                                          |         |
| Filter     | OData filter expression to filter results. Supports operators like eq, ne, startswith, contains. |         |
| Count      | When true, retrieves the total count of matching resources.                                      | false   |
| Select     | Comma-separated list of properties to include in the response. Reduces payload size.             |         |
| Search     | Returns results based on search criteria. Use format 'property:value' for specific searches.     |         |
| Expand     | Comma-separated list of relationships to expand and include in the response.                     |         |

### List Groups {#listgroups}

List all groups.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Intune connection to use.                                                          |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                        | false   |
| Top        | Maximum number of results to return per page.                                                    |         |
| Filters    | Optional query controls to sort and refine the results.                                          |         |
| Count      | When true, retrieves the total count of matching resources.                                      | false   |
| Expand     | Comma-separated list of relationships to expand and include in the response.                     |         |
| Filter     | OData filter expression to filter results. Supports operators like eq, ne, startswith, contains. |         |
| Order By   | Property to sort results by. Add 'asc' or 'desc' suffix for sort direction.                      |         |
| Search     | Returns results based on search criteria. Use format 'property:value' for specific searches.     |         |
| Select     | Comma-separated list of properties to include in the response. Reduces payload size.             |         |

### List Managed Apps {#listmanagedapps}

List all managed apps in Intune.

| Input      | Comments                                                                                         | Default                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection | The Microsoft Intune connection to use.                                                          |                                                                                                                                              |
| Fetch All  | When true, fetches all pages of results using pagination.                                        | false                                                                                                                                        |
| Pagination | Page and page-size controls.                                                                     |                                                                                                                                              |
| Top        | Maximum number of results to return per page.                                                    |                                                                                                                                              |
| Skip       | Number of results to skip. Use with $top for manual pagination.                                  |                                                                                                                                              |
| Skip Token | Token from a previous response's @odata.nextLink to retrieve the next page of results.           |                                                                                                                                              |
| Filters    | Optional query controls to sort and refine the results.                                          |                                                                                                                                              |
| Filter     | OData filter expression to filter results. Supports operators like eq, ne, startswith, contains. | (microsoft.graph.managedApp/appAvailability eq null or microsoft.graph.managedApp/appAvailability eq 'lineOfBusiness' or isAssigned eq true) |
| Select     | Comma-separated list of properties to include in the response. Reduces payload size.             |                                                                                                                                              |
| Expand     | Comma-separated list of relationships to expand and include in the response.                     |                                                                                                                                              |
| Order By   | Property to sort results by. Add 'asc' or 'desc' suffix for sort direction.                      |                                                                                                                                              |
| Count      | When true, retrieves the total count of matching resources.                                      | false                                                                                                                                        |
| Search     | Returns results based on search criteria. Use format 'property:value' for specific searches.     |                                                                                                                                              |
| Format     | Response format. Typically 'json' for JSON output.                                               |                                                                                                                                              |

### List Managed Devices {#listmanageddevices}

List properties and relationships of the Managed Device objects.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Intune connection to use.                                                          |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                        | false   |
| Pagination | Page and page-size controls.                                                                     |         |
| Top        | Maximum number of results to return per page.                                                    |         |
| Skip       | Number of results to skip. Use with $top for manual pagination.                                  |         |
| Skip Token | Token from a previous response's @odata.nextLink to retrieve the next page of results.           |         |
| Filters    | Optional query controls to sort and refine the results.                                          |         |
| Filter     | OData filter expression to filter results. Supports operators like eq, ne, startswith, contains. |         |
| Select     | Comma-separated list of properties to include in the response. Reduces payload size.             |         |
| Expand     | Comma-separated list of relationships to expand and include in the response.                     |         |
| Order By   | Property to sort results by. Add 'asc' or 'desc' suffix for sort direction.                      |         |
| Count      | When true, retrieves the total count of matching resources.                                      | false   |
| Search     | Returns results based on search criteria. Use format 'property:value' for specific searches.     |         |
| Format     | Response format. Typically 'json' for JSON output.                                               |         |

### List Mobile App Assignments {#listmobileappassignments}

List all assignments for a mobile app.

| Input         | Comments                                                                                         | Default |
| ------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection    | The Microsoft Intune connection to use.                                                          |         |
| Mobile App ID | Unique identifier for the mobile app (UUID format).                                              |         |
| Fetch All     | When true, fetches all pages of results using pagination.                                        | false   |
| Filter        | OData filter expression to filter results. Supports operators like eq, ne, startswith, contains. |         |
| Select        | Comma-separated list of properties to include in the response. Reduces payload size.             |         |
| Expand        | Comma-separated list of relationships to expand and include in the response.                     |         |
| Order By      | Property to sort results by. Add 'asc' or 'desc' suffix for sort direction.                      |         |
| Top           | Maximum number of results to return per page.                                                    |         |
| Skip          | Number of results to skip. Use with $top for manual pagination.                                  |         |
| Count         | When true, retrieves the total count of matching resources.                                      | false   |
| Search        | Returns results based on search criteria. Use format 'property:value' for specific searches.     |         |
| Format        | Response format. Typically 'json' for JSON output.                                               |         |
| Skip Token    | Token from a previous response's @odata.nextLink to retrieve the next page of results.           |         |

### List Mobile Apps {#listmobileapps}

Retrieve a list of mobile apps.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Intune connection to use.                                                          |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                        | false   |
| Pagination | Page and page-size controls.                                                                     |         |
| Top        | Maximum number of results to return per page.                                                    |         |
| Skip       | Number of results to skip. Use with $top for manual pagination.                                  |         |
| Skip Token | Token from a previous response's @odata.nextLink to retrieve the next page of results.           |         |
| Filters    | Optional query controls to sort and refine the results.                                          |         |
| Filter     | OData filter expression to filter results. Supports operators like eq, ne, startswith, contains. |         |
| Select     | Comma-separated list of properties to include in the response. Reduces payload size.             |         |
| Expand     | Comma-separated list of relationships to expand and include in the response.                     |         |
| Order By   | Property to sort results by. Add 'asc' or 'desc' suffix for sort direction.                      |         |
| Count      | When true, retrieves the total count of matching resources.                                      | false   |
| Search     | Returns results based on search criteria. Use format 'property:value' for specific searches.     |         |
| Format     | Response format. Typically 'json' for JSON output.                                               |         |

### List Software Update Status Summary {#listsoftwareupdatestatussummary}

List the status summary of a software update.

| Input      | Comments                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use.                                                      |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                    | false   |
| Skip Token | Token from a previous response's @odata.nextLink to retrieve the next page of results.       |         |
| Filters    | Optional query controls to sort and refine the results.                                      |         |
| Select     | Comma-separated list of properties to include in the response. Reduces payload size.         |         |
| Expand     | Comma-separated list of relationships to expand and include in the response.                 |         |
| Search     | Returns results based on search criteria. Use format 'property:value' for specific searches. |         |
| Format     | Response format. Typically 'json' for JSON output.                                           |         |

### List Subscriptions {#listsubscriptions}

List all Subscriptions.

| Input      | Comments                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use.                                                |         |
| Fetch All  | When true, fetches all pages of results using pagination.                              | false   |
| Skip Token | Token from a previous response's @odata.nextLink to retrieve the next page of results. |         |

### List Users {#listusers}

Retrieve a list of user objects.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Microsoft Intune connection to use.                                                          |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                        | false   |
| Pagination | Page and page-size controls.                                                                     |         |
| Top        | Maximum number of results to return per page.                                                    |         |
| Skip       | Number of results to skip. Use with $top for manual pagination.                                  |         |
| Skip Token | Token from a previous response's @odata.nextLink to retrieve the next page of results.           |         |
| Filters    | Optional query controls to sort and refine the results.                                          |         |
| Filter     | OData filter expression to filter results. Supports operators like eq, ne, startswith, contains. |         |
| Select     | Comma-separated list of properties to include in the response. Reduces payload size.             |         |
| Expand     | Comma-separated list of relationships to expand and include in the response.                     |         |
| Order By   | Property to sort results by. Add 'asc' or 'desc' suffix for sort direction.                      |         |
| Count      | When true, retrieves the total count of matching resources.                                      | false   |
| Search     | Returns results based on search criteria. Use format 'property:value' for specific searches.     |         |
| Format     | Response format. Typically 'json' for JSON output.                                               |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Microsoft Intune API.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Microsoft Intune connection to use.                                                                                                                                                                                                                                                                                 |         |
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

### Reprocess User License Assignment {#reprocessuserlicenseassignment}

Reprocess all group-based license assignments for the user.

| Input      | Comments                                                                                                            | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Microsoft Intune connection to use.                                                                             |         |
| User ID    | Unique Identifier for the user to reprocess the license assignment. This can be the user's id or userPrincipalName. |         |

### Retire Managed Device {#retiredevice}

Retire a device from Intune management upon employee offboarding.

| Input             | Comments                                    | Default |
| ----------------- | ------------------------------------------- | ------- |
| Connection        | The Microsoft Intune connection to use.     |         |
| Managed Device ID | Unique Identifier for the device to retire. |         |

### Update Group {#updategroup}

Update a single group.

| Input             | Comments                                                                                                 | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Microsoft Intune connection to use.                                                                  |         |
| Group ID          | The unique identifier of the group to update.                                                            |         |
| Display Name      | The name to display in the address book for the group.                                                   |         |
| Mail Nickname     | The mail alias for the group, unique for Microsoft 365 groups in the organization.                       |         |
| Security Enabled  | Set to true for mail-enabled groups. If Not Set the input will not be included in the request.           |         |
| Additional Fields | Less common group properties.                                                                            |         |
| Description       | A text summary of the group's purpose, visible to members and administrators.                            |         |
| Assigned Labels   | The list of sensitivity label pairs (label ID, label name) associated with a group                       |         |
| Visibility        | Specifies the visibility of the group. Possible values are Private, Public, or Hiddenmembership.         |         |
| Body Fields       | Additional JSON properties to include in the request body. These will be merged with other input values. |         |

### Update Managed App {#updatemanagedapp}

Update an App object.

| Input                        | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Default |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   | The Microsoft Intune connection to use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |         |
| Mobile App ID                | The ID of the app to update.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |         |
| OData App Type               | The type of app to update. This depends on the platform of the app. Check the Microsoft Graph API documentation for the correct type. Documentation for an Office Suite app can be found [here](https://learn.microsoft.com/en-us/graph/api/intune-apps-officesuiteapp-update?view=graph-rest-beta).                                                                                                                                                                                                                                      |         |
| Is Featured                  | Update whether the app is featured. Featured apps are displayed prominently in the Company Portal.​                                                                                                                                                                                                                                                                                                                                                                                                                                       | false   |
| Display Name                 | Update the name for the app. This name will be visible in the Intune apps list and to users in the Company Portal.                                                                                                                                                                                                                                                                                                                                                                                                                        |         |
| Description                  | Update the description to help device users understand what the app is and what they can do in the app. This description will be visible to them in Company Portal.                                                                                                                                                                                                                                                                                                                                                                       |         |
| Additional Fields            | Less common app properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Publisher                    | Update the name of the developer or company that distributes the app. This information will be visible to users in Company Portal.                                                                                                                                                                                                                                                                                                                                                                                                        |         |
| Icon Image Type              | Update the type of the Icon image. This field is required if the Icon Image Data is provided.                                                                                                                                                                                                                                                                                                                                                                                                                                             |         |
| Icon Image Data              | Update the base64 encoded image data for the Icon image. This field is required if the Icon Image Type is provided.                                                                                                                                                                                                                                                                                                                                                                                                                       |         |
| Privacy Information URL      | Update the URL that links to the privacy information for the app. The privacy information URL will be visible to users in Company Portal.​                                                                                                                                                                                                                                                                                                                                                                                                |         |
| Information URL              | Update the URL that links to more information about the app. This URL will be visible to users in Company Portal.​                                                                                                                                                                                                                                                                                                                                                                                                                        |         |
| Owner                        | Update the name of the person or company that owns the app. This information will be visible to people signed into the admin center.​                                                                                                                                                                                                                                                                                                                                                                                                     |         |
| Developer                    | Update the developer of the app. This information will be visible to users in Company Portal.​                                                                                                                                                                                                                                                                                                                                                                                                                                            |         |
| Notes                        | Update any notes about the app. This information will be visible to people signed into the admin center.​                                                                                                                                                                                                                                                                                                                                                                                                                                 |         |
| Specific Platform Properties | The specific properties for the app to be updated, generic properties like '@odata.type', 'displayName', 'description', etc. are already covered by the other inputs. This input should be a JSON object with the specific properties for the app to be updated. Check the Microsoft Graph API documentation for the correct properties for the app type you are updating. Documentation for an Office Suite app can be found [here](https://learn.microsoft.com/en-us/graph/api/intune-apps-officesuiteapp-update?view=graph-rest-beta). |         |

### Update Managed Device {#updatemanageddevice}

Update the properties of a Managed Device object.

| Input               | Comments                                                                                                                                           | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Microsoft Intune connection to use.                                                                                                            |         |
| Managed Device ID   | Unique identifier for the managed device to update (UUID format).                                                                                  |         |
| Managed Device Name | Update the device name to make it easier to identify.                                                                                              |         |
| Notes               | Additional notes about the device for documentation purposes.                                                                                      |         |
| Extra Fields        | Additional fields to update on the device. This is an object that can contain any additional fields that might not be covered by the other inputs. |         |

### Update Mobile App Assignment {#updatemobileappassignment}

Update a mobile app assignment.

| Input                    | Comments                                                                                                                                                                                                                                                                                                                                                                                 | Default |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The Microsoft Intune connection to use.                                                                                                                                                                                                                                                                                                                                                  |         |
| Mobile App ID            | The ID of the mobile app to update the assignment from.                                                                                                                                                                                                                                                                                                                                  |         |
| Mobile App Assignment ID | The ID of the mobile app assignment to update.                                                                                                                                                                                                                                                                                                                                           |         |
| Intent                   | The intent of the assignment for the managed app. A 'Required' option will force the app to be installed on the device. An 'Available' option will make the app available for the user to install. An 'Uninstall' option will remove the app from the device. An 'Available Without Enrollment' option will make the app available for the user to install without enrolling the device. |         |
| Target                   | The mobile app assignment target type. Common values include allLicensedUsersAssignmentTarget, groupAssignmentTarget, allDevicesAssignmentTarget.                                                                                                                                                                                                                                        |         |
| Settings                 | The mobile app assignment settings type. The value depends on the app platform (e.g., windowsUniversalAppXAppAssignmentSettings, iosLobAppAssignmentSettings).                                                                                                                                                                                                                           |         |

### Update Software Update Status Summary {#updatesoftwareupdatestatussummary}

Update the status summary of a software update.

| Input                       | Comments                                                                    | Default |
| --------------------------- | --------------------------------------------------------------------------- | ------- |
| Connection                  | The Microsoft Intune connection to use.                                     |         |
| Display Name                | The display name of the software update status summary.                     |         |
| Device Counts               | Device-level compliance status counts.                                      |         |
| Compliant Device Count      | The number of devices that are compliant with the software update.          |         |
| Non-Compliant Device Count  | The number of devices that are not compliant with the software update.      |         |
| Remediated Device Count     | The number of devices that have been remediated.                            |         |
| Error Device Count          | The number of devices that have an error with the software update.          |         |
| Unknown Device Count        | The number of devices that have an unknown status with the software update. |         |
| Conflict Device Count       | The number of devices that have a conflict with the software update.        |         |
| Not Applicable Device Count | The number of devices that are not applicable for the software update.      |         |
| User Counts                 | User-level compliance status counts.                                        |         |
| Compliant User Count        | The number of users that are compliant with the software update.            |         |
| Non-Compliant User Count    | The number of users that are not compliant with the software update.        |         |
| Remediated User Count       | The number of users that have been remediated.                              |         |
| Error User Count            | The number of users that have an error with the software update.            |         |
| Unknown User Count          | The number of users that have an unknown status with the software update.   |         |
| Conflict User Count         | The number of users that have a conflict with the software update.          |         |
| Not Applicable User Count   | The number of users that are not applicable for the software update.        |         |

### Update Subscription {#updatesubscription}

Update a single subscription.

| Input                | Comments                                                                                                                                                                                                         | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Microsoft Intune connection to use.                                                                                                                                                                          |         |
| Subscription ID      | The ID of the subscription to update.                                                                                                                                                                            |         |
| Notification URL     | The URL endpoint that will receive webhook notifications when changes occur.                                                                                                                                     |         |
| Expiration Date Time | The date and time when the webhook subscription expires in UTC format (ISO 8601). The maximum duration varies by resource type. [Learn more](https://learn.microsoft.com/en-us/graph/api/resources/subscription) |         |

### Update User {#updateuser}

Update the properties of a User object.

| Input                 | Comments                                                                                                                                                                                                                                                                                                             | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Microsoft Intune connection to use.                                                                                                                                                                                                                                                                              |         |
| User ID               | Unique identifier for the user to update. This can be the user's ID (UUID format) or userPrincipalName (email format).                                                                                                                                                                                               |         |
| Account Enabled       | When true, enables the user account. When false, the account is disabled and the user cannot sign in.                                                                                                                                                                                                                | true    |
| Display Name          | The full name shown in the address book and user profile.                                                                                                                                                                                                                                                            |         |
| User Principal Name   | The updated user principal name (username) for the user. This will be combined with the domain to create the full user principal name. Required if 'Domain' input is provided.                                                                                                                                       |         |
| Domain                | The updated domain for the user. This must be an existing verified domain in the tenant. Use the 'List Domains' action to retrieve available domains. Required if 'User Principal Name' input is provided.                                                                                                           |         |
| Name                  | First and last name.                                                                                                                                                                                                                                                                                                 |         |
| First Name            | The updated first name of the user.                                                                                                                                                                                                                                                                                  |         |
| Last Name             | The updated last name of the user.                                                                                                                                                                                                                                                                                   |         |
| Job Title             | The updated job title of the user.                                                                                                                                                                                                                                                                                   |         |
| Additional Properties | Additional properties to update that are not covered by the other inputs. This should be a JSON object and will be merged with the other inputs. See [Microsoft Graph API user properties](https://learn.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#json-representation) for available fields. |         |

### Wipe Device {#wipedevice}

Remotely wipe a compromised or lost device.

| Input             | Comments                                  | Default |
| ----------------- | ----------------------------------------- | ------- |
| Connection        | The Microsoft Intune connection to use.   |         |
| Managed Device ID | Unique Identifier for the device to wipe. |         |
