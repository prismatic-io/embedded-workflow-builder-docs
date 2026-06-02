---
title: FTP Connector
sidebar_label: FTP
description: Manage files and directories on an FTP server
---

![FTP](./assets/ftp.png#connector-icon)
Manage files and directories on an FTP server

## Connections

### Basic Authentication {#basic}

Authenticate using username and password

| Input             | Comments                                                                                                                      | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------- |
| Username          | The username for FTP authentication.                                                                                          |         |
| Password          | The password for FTP authentication.                                                                                          |         |
| Host              | The address of the FTP server. This should be an IP address or hostname.                                                      |         |
| Port              | The port of the FTP server. Default is 21 for FTP or 990 for implicit FTPS.                                                   | 21      |
| Secure            | Whether to use FTPS over TLS. Set to 'true' for explicit FTPS, 'false' for plain FTP, or 'implicit' for legacy implicit FTPS. | false   |
| Ignore SSL Errors | When true, ignores SSL certificate validation errors such as self-signed certificates.                                        | false   |

## Triggers

### New or Modified Files {#newormodifiedfiles}

Checks for new and modified files in a directory on an FTP server on a configured schedule.

| Input                  | Comments                                                                                                                 | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                                                          |         |
| Verbose Logging        | Enables verbose logging for debugging purposes.                                                                          | false   |
| Path                   | Path of directory on FTP server to monitor for new or modified files.                                                    |         |
| Pattern                | Glob-style string for filtering specific files.                                                                          | \*      |
| Include Subdirectories | When true, recursively monitors files in all subdirectories. When false, only monitors files in the specified directory. | false   |

## Actions

### Delete File {#deletefile}

Deletes a file from an FTP server.

| Input           | Comments                                               | Default |
| --------------- | ------------------------------------------------------ | ------- |
| Connection      |                                                        |         |
| Verbose Logging | Enables verbose logging for debugging purposes.        | false   |
| Path            | The full path of the file on the FTP server to delete. |         |

### List Directory {#listdirectory}

List the contents of a directory

| Input           | Comments                                                  | Default |
| --------------- | --------------------------------------------------------- | ------- |
| Connection      |                                                           |         |
| Verbose Logging | Enables verbose logging for debugging purposes.           | false   |
| Path            | The full path of the directory on the FTP server to list. |         |

### Move File {#movefile}

Moves a file on an FTP server.

| Input            | Comments                                                     | Default |
| ---------------- | ------------------------------------------------------------ | ------- |
| Connection       |                                                              |         |
| Verbose Logging  | Enables verbose logging for debugging purposes.              | false   |
| Source Path      | The current path of the file on the FTP server to move.      |         |
| Destination Path | The new path where the file will be moved on the FTP server. |         |

### Read File {#readfile}

Reads a file from an FTP server.

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      |                                                      |         |
| Verbose Logging | Enables verbose logging for debugging purposes.      | false   |
| Path            | The full path of the file on the FTP server to read. |         |

### Write File {#writefile}

Writes a file to an FTP server.

| Input           | Comments                                                        | Default |
| --------------- | --------------------------------------------------------------- | ------- |
| Connection      |                                                                 |         |
| Verbose Logging | Enables verbose logging for debugging purposes.                 | false   |
| Path            | The full path on the FTP server where the file will be written. |         |
| Data            | The text or binary data to write to the file on the FTP server. |         |
