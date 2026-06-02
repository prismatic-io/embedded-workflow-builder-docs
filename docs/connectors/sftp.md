---
title: SFTP Connector
sidebar_label: SFTP
description: Read, write, move and delete files on an SFTP server
---

![SFTP](./assets/sftp.png#connector-icon)
Read, write, move and delete files on an SFTP server

## Connections

### Basic Authentication {#basic}

Authenticate using username and password

| Input                                      | Comments                                                                                                                                                  | Default |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Password                                   | The password for SFTP authentication.                                                                                                                     |         |
| Username                                   | The username for SFTP authentication.                                                                                                                     |         |
| Host                                       | The address of the SFTP server. This should be either an IP address or hostname.                                                                          |         |
| Port                                       | The port of the SFTP server.                                                                                                                              | 22      |
| Timeout                                    | How long the client will await a request.                                                                                                                 | 3000    |
| Enable Unsecure Server Host Key Algorithms | When true, unsecure server host key algorithms will be added to the connection.                                                                           | false   |
| Enable Unsecure Ciphers                    | When true, CBC ciphers will be added to the connection.                                                                                                   | false   |
| Custom Server Host Key Algorithms          | A comma-separated list of custom server host key algorithms. Overrides the default server host key algorithms. Algorithm order matters. Advanced setting. |         |
| Custom Ciphers                             | A comma-separated list of custom ciphers. Overrides the default ciphers. Cipher order matters. Advanced setting.                                          |         |

### Private Key {#privatekey}

Authenticate using SSH private key

| Input                                      | Comments                                                                                                                                                  | Default |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Private Key                                | The SSH private key for authentication.                                                                                                                   |         |
| Key Passphrase                             | The passphrase for the private key. Leave blank if none.                                                                                                  |         |
| Password                                   | Though uncommon, some SFTP servers that use private keys may also require a password. Leave blank if none.                                                |         |
| Username                                   | The username for SFTP authentication.                                                                                                                     |         |
| Host                                       | The address of the SFTP server. This should be either an IP address or hostname.                                                                          |         |
| Port                                       | The port of the SFTP server.                                                                                                                              | 22      |
| Timeout                                    | How long the client will await a request.                                                                                                                 | 3000    |
| Enable Unsecure Server Host Key Algorithms | When true, unsecure server host key algorithms will be added to the connection.                                                                           | false   |
| Enable Unsecure Ciphers                    | When true, CBC ciphers will be added to the connection.                                                                                                   | false   |
| Custom Server Host Key Algorithms          | A comma-separated list of custom server host key algorithms. Overrides the default server host key algorithms. Algorithm order matters. Advanced setting. |         |
| Custom Ciphers                             | A comma-separated list of custom ciphers. Overrides the default ciphers. Cipher order matters. Advanced setting.                                          |         |

## Triggers

### New or Modified Files {#newormodifiedfiles}

Checks for new and modified files in a directory on an SFTP server on a configured schedule.

| Input                  | Comments                                                                                                                 | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The SFTP connection to use.                                                                                              |         |
| Path                   | The path of the directory on the SFTP server to list files from.                                                         |         |
| Pattern                | The glob-style pattern for filtering files (e.g., \*.txt).                                                               | \*      |
| Include Subdirectories | When true, recursively monitors files in all subdirectories. When false, only monitors files in the specified directory. | false   |

## Actions

### Append File {#appendfile}

Append data to an existing file on a SFTP server.

| Input      | Comments                                                 | Default |
| ---------- | -------------------------------------------------------- | ------- |
| Connection | The SFTP connection to use.                              |         |
| Path       | The path on the SFTP server where data will be appended. |         |
| Data       | The text or data to append to the file.                  |         |

### Create Directory {#createdirectory}

Create a new directory. When Include Subfolders is enabled, recursively creates any missing directories in the path.

| Input              | Comments                                                            | Default |
| ------------------ | ------------------------------------------------------------------- | ------- |
| Connection         | The SFTP connection to use.                                         |         |
| Path               | The path of the directory on the SFTP server to list files from.    |         |
| Include Subfolders | When true, recursively creates any missing directories in the path. | true    |

### Delete File {#deletefile}

Delete a file from a SFTP server

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The SFTP connection to use. |         |
| Path       | Path of file to delete      |         |

### Fast Get {#fastget}

Read a file from SFTP

| Input         | Comments                                                                                                                                                                                                                     | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The SFTP connection to use.                                                                                                                                                                                                  |         |
| Path          | Path of file on SFTP server to read data from                                                                                                                                                                                |         |
| Return Buffer | When true, treats the file as a binary file with content type 'application/octet-stream', even if it is a text file. This is helpful if you are processing non-UTF-8 text files, as the runner assumes text files are UTF-8. | false   |

### List Directory {#listdirectory}

List files and directories in a directory on an SFTP server. Optionally list files in subdirectories.

| Input                  | Comments                                                                                                                 | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The SFTP connection to use.                                                                                              |         |
| Path                   | The path of the directory on the SFTP server to list files from.                                                         |         |
| Pattern                | The glob-style pattern for filtering files (e.g., \*.txt).                                                               | \*      |
| Include Subdirectories | When true, recursively monitors files in all subdirectories. When false, only monitors files in the specified directory. | false   |
| Include Directories    | When true, lists directories in addition to files. When false, only lists files.                                         | false   |

### Move File {#movefile}

Move a file on an SFTP server

| Input            | Comments                    | Default |
| ---------------- | --------------------------- | ------- |
| Connection       | The SFTP connection to use. |         |
| Source Path      | Path of file to move        |         |
| Destination Path | Path of file to move        |         |

### Read File {#readfile}

Read a file from SFTP

| Input         | Comments                                                                                                                                                                                                                     | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The SFTP connection to use.                                                                                                                                                                                                  |         |
| Path          | Path of file on SFTP server to read data from                                                                                                                                                                                |         |
| Return Buffer | When true, treats the file as a binary file with content type 'application/octet-stream', even if it is a text file. This is helpful if you are processing non-UTF-8 text files, as the runner assumes text files are UTF-8. | false   |

### Stat File {#statfile}

Pull statistics about a file

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection | The SFTP connection to use.                   |         |
| Path       | Path of file on SFTP server to read data from |         |

### Write File {#writefile}

Write a file to SFTP

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The SFTP connection to use.              |         |
| Path       | The path to the file on the SFTP server. |         |
| Data       | The text or data to write into the file. |         |
