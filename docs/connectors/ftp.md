---
title: FTP Connector
sidebar_label: FTP
description: Manage files and directories on an FTP server
---

![FTP](./assets/ftp.png#connector-icon)
The **FTP** (_File Transfer Protocol_) component allows uploading, downloading, moving and deleting files on an FTP server.

## Connections

### Basic Authentication {#basic}

Authenticate using username and password

This component supports basic authentication, meaning that a **username** and **password** can be entered for authentication, or if the FTP server allows anonymous access, those values can be left blank.

#### Prerequisites

- An FTP or FTPS server with accessible credentials
- Server hostname or IP address
- Port number (typically 21 for FTP or 990 for FTPS)
- SSL/TLS configuration details (if using FTPS)

#### Configure the Connection

Create a connection of type **Basic Authentication** and configure the following:

- **Username**: Enter the FTP username (leave blank for anonymous access)
- **Password**: Enter the FTP password (leave blank for anonymous access)
- **Host**: You can enter either an IP address (e.g. `1.2.3.4`) or FQDN (e.g. `ftp.example.com`) for the FTP's **host** name
- **Port**: Most FTP servers run on **port** 21 and most FTPS (secure) servers run on port 990, though ports are configurable and server administrators can choose to operate on different ports
- **Secure**: Some FTP servers are **secure** (indicating that they use FTPS rather than FTP). If you are using plain, unsecured FTP select **false** for **secure** (though, we recommend encrypting your connection if possible). If your FTP server is set up to use SSL/TLS, you can select **true** (meaning use "explicit" FTPS) or **implicit** to use "implicit" FTPS. For information on "implicit" and "explicit" FTPS, see [this documentation](https://www.ssh.com/academy/ssh/ftp/ftps)

If the connection fails, verify the hostname, port and security information with the server administrator.

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
