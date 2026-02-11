---
title: Active Directory Connector
sidebar_label: Active Directory
description: Connect to an Active Directory server.
---

![Active Directory](./assets/ldap.png#connector-icon)
Active Directory for LDAP (Lightweight Directory Access Protocol) is a protocol for accessing and managing directory information. This component provides tools for operations such as authentication, querying, and managing directory entries.

## Library Reference

The component was built using the [`ldapts` library](https://www.npmjs.com/package/ldapts).

## Connections

### LDAP {#ldapconnection}

Authenticate using username and password

To connect to an Active Directory server, you must provide the following details:

- **URL**: The Active Directory server URL (e.g., `ldap://ldap.example.com`).
- **DN**: The Distinguished Name (DN) used to bind to the server (e.g., `uid=example,dc=example,dc=com`).
- **Password**: The password associated with the DN.
- **Certificate** (optional): A certificate for secure connections if required by the server.

Ensure these details are correctly configured in the connection settings to establish a successful connection.

| Input             | Comments                                                                  | Default |
| ----------------- | ------------------------------------------------------------------------- | ------- |
| URL               | The LDAP server URL. Required when not using the on-prem connection.      |         |
| DN                | The Distinguished Name used to bind to the LDAP server.                   |         |
| Password          | The password used to authenticate the DN.                                 |         |
| Certificate       | The certificate to use for the connection if required by the LDAP server. |         |
| Use on-prem LDAPS | When true, uses LDAPS for the connection to the private LDAP server.      | false   |

## Actions

### Add Entry {#addentry}

Adds an entry in Active Directory.

| Input             | Comments                                                   | Default |
| ----------------- | ---------------------------------------------------------- | ------- |
| Connection        | The LDAP connection to use.                                |         |
| DN to Add         | The DN of the entry to add.                                |         |
| Attributes to Add | The attributes to add to the entry. Must be a JSON object. |         |

### Add Group {#addgroup}

Adds a group in Active Directory.

| Input          | Comments                                | Default |
| -------------- | --------------------------------------- | ------- |
| Connection     | The LDAP connection to use.             |         |
| Group DN       | The DN of the group to add.             |         |
| Group Name     | The name of the group to add.           |         |
| Group Type     | The type of group to add.               |         |
| sAMAccountName | The sAMAccountName of the group to add. |         |

### Add User {#adduser}

Adds a user in Active Directory.

| Input               | Comments                                    | Default |
| ------------------- | ------------------------------------------- | ------- |
| Connection          | The LDAP connection to use.                 |         |
| User DN             | The DN of the user to add.                  |         |
| User Name           | The name of the user to add.                |         |
| sAMAccountName      | The sAMAccountName of the user to add.      |         |
| User Principal Name | The user principal name of the user to add. |         |
| Password            | The password of the user to add.            |         |

### Add User to Group {#addusertogroup}

Adds a user to a group in Active Directory.

| Input          | Comments                                | Default |
| -------------- | --------------------------------------- | ------- |
| Connection     | The LDAP connection to use.             |         |
| Group DN       | The DN of the group to add the user to. |         |
| User DN to Add | The DN of the user to add to the group. |         |

### Bind {#bind}

Tests binding to Active Directory.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The LDAP connection to use. |         |

### Delete Entry {#deleteentry}

Deletes an entry in Active Directory.

| Input        | Comments                       | Default |
| ------------ | ------------------------------ | ------- |
| Connection   | The LDAP connection to use.    |         |
| DN to Delete | The DN of the entry to delete. |         |

### Disable User Account {#disableuseraccount}

Disables a user account in Active Directory.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The LDAP connection to use.    |         |
| User DN    | The DN of the user to disable. |         |

### Extended Operation {#extendedoperation}

Performs an extended operation in Active Directory.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The LDAP connection to use.                    |         |
| OID        | The OID of the extended operation to perform.  |         |
| Value      | The value to send with the extended operation. |         |

### Is Authenticated {#isauthenticated}

Check if the connection is authenticated.

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The LDAP connection to use. |         |

### Move User to Organizational Unit {#moveusertoorganizationalunit}

Moves a user to an organizational unit in Active Directory.

| Input          | Comments                    | Default |
| -------------- | --------------------------- | ------- |
| Connection     | The LDAP connection to use. |         |
| OU User DN     | The DN of the user to move. |         |
| New OU User DN | The new DN for the user.    |         |

### Remove User From Group {#removeuserfromgroup}

Removes a user from a group in Active Directory.

| Input             | Comments                                     | Default |
| ----------------- | -------------------------------------------- | ------- |
| Connection        | The LDAP connection to use.                  |         |
| Group DN          | The DN of the group to remove the user from. |         |
| User DN to Remove | The DN of the user to remove from the group. |         |

### Rename Entry {#renameentry}

Renames an entry in Active Directory.

| Input           | Comments                           | Default |
| --------------- | ---------------------------------- | ------- |
| Connection      | The LDAP connection to use.        |         |
| Entry to Rename | The DN of the entry to rename.     |         |
| New Relative DN | The new relative DN for the entry. |         |

### Search Entries {#search}

Searches for entries in Active Directory.

| Input              | Comments                                                                                      | Default          |
| ------------------ | --------------------------------------------------------------------------------------------- | ---------------- |
| Connection         | The LDAP connection to use.                                                                   |                  |
| Search Base        | The base DN to start the search operation from.                                               |                  |
| Scope              | The scope of the search operation.                                                            | sub              |
| Filter             | The filter to apply to the search operation.                                                  | (objectClass=\*) |
| Attributes         | The attributes to retrieve from the search operation. Leave empty to retrieve all attributes. |                  |
| Include References | When true, includes references in the search results.                                         | false            |

### Search Groups {#searchgroups}

Searches for groups in Active Directory.

| Input                 | Comments                                                | Default |
| --------------------- | ------------------------------------------------------- | ------- |
| Connection            | The LDAP connection to use.                             |         |
| Additional Attributes | Additional attributes to include in the search results. |         |

### Search Users {#searchusers}

Searches for users in Active Directory.

| Input                 | Comments                                                | Default |
| --------------------- | ------------------------------------------------------- | ------- |
| Connection            | The LDAP connection to use.                             |         |
| Additional Attributes | Additional attributes to include in the search results. |         |

### Set Password to User {#setpasswordtouser}

Sets a user password in Active Directory.

| Input        | Comments                                    | Default |
| ------------ | ------------------------------------------- | ------- |
| Connection   | The LDAP connection to use.                 |         |
| User DN      | The DN of the user to set the password for. |         |
| New Password | The new password for the user.              |         |

### Update Entry {#updateentry}

Updates an entry in Active Directory.

| Input           | Comments                                                           | Default |
| --------------- | ------------------------------------------------------------------ | ------- |
| Connection      | The LDAP connection to use.                                        |         |
| Entry to Update | The DN of the entry to update.                                     |         |
| Changes         | The changes to apply to the entry. Must be an array of operations. |         |

### Update User {#updateuser}

Updates a user in Active Directory.

| Input          | Comments                                                          | Default |
| -------------- | ----------------------------------------------------------------- | ------- |
| Connection     | The LDAP connection to use.                                       |         |
| User to Update | The DN of the user to update.                                     |         |
| Changes        | The changes to apply to the user. Must be an array of operations. |         |
