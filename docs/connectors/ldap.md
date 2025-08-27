---
title: Active Directory Connector
sidebar_label: Active Directory
description: Connect to an Active Directory server.
---

![Active Directory](./assets/ldap.png#connector-icon)
Connect to an Active Directory server.

## Connections

### LDAP Connection

Connection to an LDAP server

To connect to an Active Directory server, you must provide the following details:

- **URL**: The Active Directory server URL (e.g., `ldap://ldap.example.com`).
- **DN**: The Distinguished Name (DN) used to bind to the server (e.g., `uid=example,dc=example,dc=com`).
- **Password**: The password associated with the DN.
- **Certificate** (optional): A certificate for secure connections if required by the server.

Ensure these details are correctly configured in the connection settings to establish a successful connection.

| Input             | Comments                                                               | Default |
| ----------------- | ---------------------------------------------------------------------- | ------- |
| URL               | LDAP server URL. Required when not using the on-prem connection.       |         |
| DN                | LDAP server Distinguished Name to bind to.                             |         |
| Password          | Password for the DN to bind to.                                        |         |
| Certificate       | Certificate to use for the connection if required by the LDAP server.  |         |
| Use on-prem LDAPS | Turn this On if your private LDAP server requires an LDAPS connection. | false   |

## Actions

### Add Entry

Add entry in Active Directory.

| Input             | Comments                                                   | Default |
| ----------------- | ---------------------------------------------------------- | ------- |
| Connection        |                                                            |         |
| DN to Add         | The DN of the entry to add.                                |         |
| Attributes to Add | The attributes to add to the entry. Must be a JSON object. |         |
| Debug Request     | Enabling this flag will log out the current request.       | false   |

### Add Group

Add group in Active Directory.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Group DN       | The DN of the group to add.                          |         |
| Group Name     | The name of the group to add.                        |         |
| Group Type     | The type of group to add.                            |         |
| sAMAccountName | The sAMAccountName of the group to add.              |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Add User

Add a user in Active Directory.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Connection          |                                                      |         |
| User DN             | The DN of the user to add.                           |         |
| User Name           | The name of the user to add.                         |         |
| sAMAccountName      | The sAMAccountName of the user to add.               |         |
| User Principal Name | The user principal name of the user to add.          |         |
| Password            | The password of the user to add.                     |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Add User to Group

Add a user to a group in Active Directory.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| Group DN       | The DN of the group to add the user to.              |         |
| User DN to Add | The DN of the user to add to the group.              |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Bind

Bind test in Active Directory.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Entry

Delete an entry in Active Directory.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| DN to Delete  | The DN of the entry to delete.                       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Disable User Account

Disable a user in Active Directory.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| User DN       | The DN of the user to disable.                       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Extended Operation

Perform an extended operation in Active Directory.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| OID           | The OID of the extended operation to perform.        |         |
| Value         | The value to send with the extended operation.       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Is Authenticated

Check if the connection is authenticated.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Move User to Organizational Unit

Move user to Organizational unit in Active Directory.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Connection     |                                                      |         |
| OU User DN     | The DN of the user to move.                          |         |
| New OU User DN | The new DN for the user.                             |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Remove User From Group

Remove a user from group in Active Directory.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        |                                                      |         |
| Group DN          | The DN of the group to remove the user from.         |         |
| User DN to Remove | The DN of the user to remove from the group.         |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Rename Entry

Rename an entry in Active Directory.

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      |                                                      |         |
| Entry to Rename | The DN of the entry to rename.                       |         |
| New Relative DN | The new relative DN for the entry.                   |         |
| Debug Request   | Enabling this flag will log out the current request. | false   |

### Search Entries

Search entries in Active Directory.

| Input              | Comments                                                                                      | Default          |
| ------------------ | --------------------------------------------------------------------------------------------- | ---------------- |
| Connection         |                                                                                               |                  |
| Search Base        | The base DN to start the search operation from.                                               |                  |
| Scope              | The scope of the search operation.                                                            | sub              |
| Filter             | The filter to apply to the search operation.                                                  | (objectClass=\*) |
| Attributes         | The attributes to retrieve from the search operation. Leave empty to retrieve all attributes. |                  |
| Include References | Include references in the search results.                                                     | false            |
| Debug Request      | Enabling this flag will log out the current request.                                          | false            |

### Search Groups

Search groups in Active Directory.

| Input                 | Comments                                                | Default |
| --------------------- | ------------------------------------------------------- | ------- |
| Connection            |                                                         |         |
| Additional Attributes | Additional attributes to include in the search results. |         |
| Debug Request         | Enabling this flag will log out the current request.    | false   |

### Search Users

Search users in Active Directory.

| Input                 | Comments                                                | Default |
| --------------------- | ------------------------------------------------------- | ------- |
| Connection            |                                                         |         |
| Additional Attributes | Additional attributes to include in the search results. |         |
| Debug Request         | Enabling this flag will log out the current request.    | false   |

### Set Password to User

Set user password in Active Directory.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| User DN       | The DN of the user to set the password for.          |         |
| New Password  | The new password for the user.                       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Entry

Update entry in Active Directory.

| Input           | Comments                                                           | Default |
| --------------- | ------------------------------------------------------------------ | ------- |
| Connection      |                                                                    |         |
| Entry to Update | The DN of the entry to update.                                     |         |
| Changes         | The changes to apply to the entry. Must be an array of operations. |         |
| Debug Request   | Enabling this flag will log out the current request.               | false   |

### Update User

Update user in Active Directory.

| Input          | Comments                                                          | Default |
| -------------- | ----------------------------------------------------------------- | ------- |
| Connection     |                                                                   |         |
| User to Update | The DN of the user to update.                                     |         |
| Changes        | The changes to apply to the user. Must be an array of operations. |         |
| Debug Request  | Enabling this flag will log out the current request.              | false   |
