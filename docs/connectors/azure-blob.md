---
title: Azure Blob Storage Connector
sidebar_label: Azure Blob Storage
description: Manage files and folders within Azure Blob Storage
---

![Azure Blob Storage](./assets/azure-blob.png#connector-icon)
Manage files and folders within Azure Blob Storage

## Connections

### Connection String

Authenticates requests to Azure Blob Sotrage with a connection string.

You can also grant limited access to your Azure Storage Resources using [Shared Access Signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview) authentication, which involves an access token.
You can obtain a connection string containing an SAS token from the [Azure Portal](https://portal.azure.com/).
Keep in mind this token will eventually expire. Make sure to configure an expiration date you will remember, so you can manually refresh the token at a later date.

| Input             | Comments                                                         | Default |
| ----------------- | ---------------------------------------------------------------- | ------- |
| Connection String | Provide the connection string for your active directory account. |         |

### Storage Shared Key

Authenticates requests to Azure Blob Sotrage with a Storage Shared Key of a account name and key.

Azure Blob can use [storageSharedKeyCredential](https://docs.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key) authentication, which involves an account / key pair.
You can obtain an account name / account key pair through the [Azure Portal](https://portal.azure.com/).

| Input        | Comments                                            | Default |
| ------------ | --------------------------------------------------- | ------- |
| Account Name | Provide the name for your active directory account. |         |
| Account Key  | Provide the key for your active directory account.  |         |

## Actions

### Append to Append Blob

Append blocks to an existing append blob

| Input          | Comments                                                                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes. |         |
| Blob Name      | A blob is a file that is saved in a 'container'. This represents the blob's key (file path). Include a leading /.                                    |         |
| File Contents  | The contents to write to a blob. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step.   |         |
| Connection     |                                                                                                                                                      |         |

### Create Append Blob

Create an empty append blob object (use "Append to Append Blob" to add blocks)

| Input          | Comments                                                                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes. |         |
| Blob Name      | A blob is a file that is saved in a 'container'. This represents the blob's key (file path). Include a leading /.                                    |         |
| Connection     |                                                                                                                                                      |         |

### Create Container

Create a container

| Input          | Comments                                                                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes. |         |
| Connection     |                                                                                                                                                      |         |

### Create Page Blob

Create a page blob with a specific size (must be a multiple of 512 bytes)

| Input          | Comments                                                                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes. |         |
| Blob Name      | A blob is a file that is saved in a 'container'. This represents the blob's key (file path). Include a leading /.                                    |         |
| Page Blob Size | Space can be reserved in Azure Blob Store in 512-byte chunks. This must be a multiple of 512 (e.g. 1024, 1536, 2048, etc.).                          |         |
| Connection     |                                                                                                                                                      |         |

### Delete Blob

Delete a blob

| Input          | Comments                                                                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes. |         |
| Blob Name      | A blob is a file that is saved in a 'container'. This represents the blob's key (file path). Include a leading /.                                    |         |
| Connection     |                                                                                                                                                      |         |

### Delete Container

Delete a container

| Input          | Comments                                                                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes. |         |
| Connection     |                                                                                                                                                      |         |

### Download Blob

Download a blob

| Input          | Comments                                                                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes. |         |
| Blob Name      | A blob is a file that is saved in a 'container'. This represents the blob's key (file path). Include a leading /.                                    |         |
| Connection     |                                                                                                                                                      |         |

### Generate Shared Access Signature URL

Generate a pre-signed URL (Shared Access Signature or SAS) for a blob

| Input           | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |         |
| Container Name  | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |         |
| Blob Name       | A blob is a file that is saved in a 'container'. This represents the file's name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |         |
| SAS Starts On   | The time at which the Shared Access Signature becomes valid. This must be in ISO 8601 format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |         |
| SAS Permissions | The permissions that are specified for the signedPermissions on the SAS token indicate which operations a client may perform on the resource. You can combine permissions to permit a client to perform multiple operations with the same SAS. Permissions must be provided in the following order: 'racwdxltmeop'. Examples of valid permissions settings for a container include: 'rw', 'rd', 'rl', 'wd', 'wl' and 'rl'. Full list of permissions and their meanings can be found at:https://learn.microsoft.com/en-us/rest/api/storageservices/create-service-sas#permissions-for-a-directory-container-or-blob |         |
| SAS Expires On  | The time at which the Shared Access Signature becomes invalid. This must be in ISO 8601 format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |         |

### List Blobs

Get a list of blobs in a container

| Input          | Comments                                                                                                                                                                                                                  | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes.                                                                      |         |
| Prefix         | List only blobs prefixed with this string. For example, if you only want blobs in a directory called 'unprocessed', you can enter 'unprocessed/'. If this is left blank, all files in the selected bucket will be listed. |         |
| Connection     |                                                                                                                                                                                                                           |         |

### List Containers

Get a list of containers available in the account

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Resize Page Blob

Resize an existing page blob (must be a multiple of 512 bytes)

| Input          | Comments                                                                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes. |         |
| Blob Name      | A blob is a file that is saved in a 'container'. This represents the blob's key (file path). Include a leading /.                                    |         |
| Page Blob Size | Space can be reserved in Azure Blob Store in 512-byte chunks. This must be a multiple of 512 (e.g. 1024, 1536, 2048, etc.).                          |         |
| Connection     |                                                                                                                                                      |         |

### Upload Block Blob

Upload file data to a block blob object

| Input          | Comments                                                                                                                                             | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes. |         |
| Blob Name      | A blob is a file that is saved in a 'container'. This represents the blob's key (file path). Include a leading /.                                    |         |
| File Contents  | The contents to write to a blob. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step.   |         |
| Connection     |                                                                                                                                                      |         |

### Upload to Page Blob

Upload to an existing page blob (both data size and offset must be a multiple of 512)

| Input            | Comments                                                                                                                                             | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name   | Azure blob 'container' stores files. You can create a container within the Azure console. Container names contain only letters, numbers, and dashes. |         |
| Blob Name        | A blob is a file that is saved in a 'container'. This represents the blob's key (file path). Include a leading /.                                    |         |
| Page Blob Offset | You can begin to write to an Azure blob starting at a particular block. This value must be a multiple of 512 (e.g. 1024, 1536, 2048, etc.).          |         |
| File Contents    | The contents to write to a blob. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step.   |         |
| Connection       |                                                                                                                                                      |         |
