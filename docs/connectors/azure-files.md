---
title: Azure Files Connector
sidebar_label: Azure Files
description: Manage files and folders within Azure Files.
---

![Azure Files](./assets/azure-files.png#connector-icon)
[Azure Files](https://azure.microsoft.com/en-us/products/storage/files) is Microsoft's cloud file sharing platform.
While similar to Azure Blob Storage, Azure Files is geared towards creating SMB file shares that groups of users (rather than applications) can use.
This component allows managing files and shares within Azure Files.

## Connections

### Connection String {#connectionstring}

Authenticate using a connection string.

Limited access to Azure Storage resources can also be granted using [Shared Access Signatures (SAS)](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview) authentication, which involves an access token. A connection string containing an SAS token can be obtained from the [Azure Portal](https://portal.azure.com/).

#### Prerequisites

- An Azure Storage account
- Access to the [Azure Portal](https://portal.azure.com/) to generate a connection string with an SAS token

#### Setup Steps

1. Sign in to the [Azure Portal](https://portal.azure.com/)
2. Navigate to the Storage account
3. Under **Security + networking**, select **Shared access signature**
4. Configure the allowed services, permissions, and an expiration date, then select **Generate SAS and connection string**
5. Copy the generated **Connection string**

#### Configure the Connection

- Enter the **Connection String**: the connection string for the active directory account

:::note[Token Expiration]
The SAS token within the connection string will eventually expire. Configure a memorable expiration date so the token can be manually refreshed at a later date.
:::

| Input             | Comments                                                | Default |
| ----------------- | ------------------------------------------------------- | ------- |
| Connection String | The connection string for the active directory account. |         |

### Storage Shared Key {#storagesharedkey}

Authenticate using a storage shared key.

Azure Files can use [storageSharedKeyCredential](https://learn.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key) authentication, which involves an account and key pair.

#### Prerequisites

- An Azure Storage account
- Access to the [Azure Portal](https://portal.azure.com/) to obtain the account name and account key

#### Setup Steps

1. Sign in to the [Azure Portal](https://portal.azure.com/)
2. Navigate to the Storage account
3. Under **Security + networking**, select **Access keys**
4. Copy the **Storage account name** and one of the **Key** values

#### Configure the Connection

- Enter the **Account Name**: the name of the active directory account
- Enter the **Account Key**: the access key for the active directory account

| Input        | Comments                                         | Default |
| ------------ | ------------------------------------------------ | ------- |
| Account Name | The name of the active directory account.        |         |
| Account Key  | The access key for the active directory account. |         |

## Actions

### Copy File {#copyfile}

Copy a file from one path to another.

| Input      | Comments                                                                                                                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                     |         |
| Share Name | The name of the Azure Files share, a container where files are stored. A share can be created from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| From Path  | The file path of the source object within the share. Do not include a leading slash.                                                                                                |         |
| To Path    | The file path of the destination object within the share. Do not include a leading slash.                                                                                           |         |

### Create Folder {#createfolder}

Create a folder under an existing path.

| Input      | Comments                                                                                                                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                     |         |
| Share Name | The name of the Azure Files share, a container where files are stored. A share can be created from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | The file path of the object within the share. Do not include a leading slash.                                                                                                       |         |

### Create Share {#createshare}

Create a file share.

| Input      | Comments                                                                                                                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                     |         |
| Share Name | The name of the Azure Files share, a container where files are stored. A share can be created from within the Azure console. Share names contain only letters, numbers, and dashes. |         |

### Delete File {#deletefile}

Delete a file.

| Input      | Comments                                                                                                                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                     |         |
| Share Name | The name of the Azure Files share, a container where files are stored. A share can be created from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | The file path of the object within the share. Do not include a leading slash.                                                                                                       |         |

### Delete Folder {#deletefolder}

Delete an empty folder under an existing path.

| Input      | Comments                                                                                                                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                     |         |
| Share Name | The name of the Azure Files share, a container where files are stored. A share can be created from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | The file path of the object within the share. Do not include a leading slash.                                                                                                       |         |

### Delete Share {#deleteshare}

Delete a file share.

| Input      | Comments                                                                                                                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                     |         |
| Share Name | The name of the Azure Files share, a container where files are stored. A share can be created from within the Azure console. Share names contain only letters, numbers, and dashes. |         |

### Download File {#downloadfile}

Download a file.

| Input      | Comments                                                                                                                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                     |         |
| Share Name | The name of the Azure Files share, a container where files are stored. A share can be created from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | The file path of the object within the share. Do not include a leading slash.                                                                                                       |         |

### List Folder {#listfolder}

List files and folders in a folder.

| Input      | Comments                                                                                                                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                     |         |
| Share Name | The name of the Azure Files share, a container where files are stored. A share can be created from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | The file path of the object within the share. Do not include a leading slash.                                                                                                       |         |

### List Shares {#listshares}

List the file shares available in the account.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Save From URL {#savefromurl}

Save a file from a URL to Azure Files.

| Input      | Comments                                                                                                                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                     |         |
| Share Name | The name of the Azure Files share, a container where files are stored. A share can be created from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | The file path of the object within the share. Do not include a leading slash.                                                                                                       |         |
| Source URL | The URL where the source file currently resides. This endpoint must be accessible via an unauthenticated HTTP GET request, and the response must return a content-length header.    |         |

### Upload File {#uploadfile}

Upload a file under an existing path.

| Input         | Comments                                                                                                                                                                            | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                     |         |
| Share Name    | The name of the Azure Files share, a container where files are stored. A share can be created from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path          | The file path of the object within the share. Do not include a leading slash.                                                                                                       |         |
| File Contents | The contents to write to the file. This can be a string of text or binary data (like an image or PDF) that was generated in a previous step.                                        |         |
