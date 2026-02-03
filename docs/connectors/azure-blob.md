---
title: Azure Blob Storage Connector
sidebar_label: Azure Blob Storage
description: Manage files and folders within Azure Blob Storage
---

![Azure Blob Storage](./assets/azure-blob.png#connector-icon)
Manage files and folders within Azure Blob Storage

## Connections

### Connection String {#connectionstring}

Authenticates requests to Azure Blob Storage with a connection string.

You can also grant limited access to your Azure Storage Resources using [Shared Access Signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview) authentication, which involves an access token.
You can obtain a connection string containing an SAS token from the [Azure Portal](https://portal.azure.com/).
Keep in mind this token will eventually expire. Make sure to configure an expiration date you will remember, so you can manually refresh the token at a later date.

| Input             | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection String | The Azure Storage connection string. Find this in Azure Portal under Storage accounts > Security + networking > Access keys > Connection string. Supports account key or SAS token authentication. [Learn more](https://learn.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string) |         |

### Storage Shared Key {#storagesharedkey}

Authenticates requests to Azure Blob Storage with a Storage Shared Key of an account name and key.

Azure Blob can use [storageSharedKeyCredential](https://docs.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key) authentication, which involves an account / key pair.
You can obtain an account name / account key pair through the [Azure Portal](https://portal.azure.com/).

| Input        | Comments                                                                                                                                                                                                                                          | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Account Name | The Azure Storage account name (3-24 characters, lowercase letters and numbers only). Find this in your Azure Portal under Storage accounts. [Learn more](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview)        |         |
| Account Key  | The 512-bit storage account access key (Base64-encoded). Find this in Azure Portal under Storage accounts > Security + networking > Access keys. [Learn more](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage) |         |

## Actions

### Append to Append Blob {#appendtoappendblob}

Append blocks to an existing append blob

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata) |         |
| Blob Name      | The blob name (file path) within the container. Do not include a leading slash. Use forward slashes for virtual directory structures.                                                                                                                                                           |         |
| File Contents  | The contents to write to a blob. Accepts text strings or binary data (images, PDFs, etc.) from previous steps.                                                                                                                                                                                  |         |
| Connection     | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                       |         |

### Create Append Blob {#createappendblob}

Create an empty append blob object (use "Append to Append Blob" to add blocks)

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata) |         |
| Blob Name      | The blob name (file path) within the container. Do not include a leading slash. Use forward slashes for virtual directory structures.                                                                                                                                                           |         |
| Connection     | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                       |         |

### Create Container {#createcontainer}

Create a container

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata) |         |
| Connection     | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                       |         |

### Create Page Blob {#createpageblob}

Create a page blob with a specific size (must be a multiple of 512 bytes)

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata) |         |
| Blob Name      | The blob name (file path) within the container. Do not include a leading slash. Use forward slashes for virtual directory structures.                                                                                                                                                           |         |
| Page Blob Size | The size to reserve for the page blob in bytes. Must be a multiple of 512 (e.g., 1024, 1536, 2048, 4096). Maximum size is 8 TiB (8,796,093,022,208 bytes).                                                                                                                                      |         |
| Connection     | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                       |         |

### Delete Blob {#deleteblob}

Delete a blob

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata) |         |
| Blob Name      | The blob name (file path) within the container. Do not include a leading slash. Use forward slashes for virtual directory structures.                                                                                                                                                           |         |
| Connection     | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                       |         |

### Delete Container {#deletecontainer}

Delete a container

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata) |         |
| Connection     | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                       |         |

### Download Blob {#downloadblob}

Download a blob

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata) |         |
| Blob Name      | The blob name (file path) within the container. Do not include a leading slash. Use forward slashes for virtual directory structures.                                                                                                                                                           |         |
| Connection     | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                       |         |

### Generate Shared Access Signature URL {#generatesasurl}

Generate a pre-signed URL (Shared Access Signature or SAS) for a blob

| Input           | Comments                                                                                                                                                                                                                                                                                                                          | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                                                         |         |
| Container Name  | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata)                                   |         |
| Blob Name       | A blob is a file that is saved in a 'container'. This represents the file's name.                                                                                                                                                                                                                                                 |         |
| SAS Starts On   | The start date and time when the Shared Access Signature becomes valid. Must be in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).                                                                                                                                                                                                        |         |
| SAS Permissions | The permission string for the SAS token. Combine permissions in this order: 'racwdxltmeop'. Common examples: 'r' (read), 'rw' (read/write), 'racwd' (read, add, create, write, delete). [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/create-service-sas#permissions-for-a-directory-container-or-blob) |         |
| SAS Expires On  | The expiration date and time when the Shared Access Signature becomes invalid. Must be in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).                                                                                                                                                                                                 |         |

### List Blobs {#listblobs}

Get a list of blobs in a container

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata) |         |
| Prefix         | Filter blobs by prefix string. Use this to list blobs within a specific virtual directory. Include a trailing slash for directory-style filtering (e.g., 'documents/'). Leave blank to list all blobs.                                                                                          |         |
| Connection     | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                       |         |

### List Containers {#listcontainers}

Get a list of containers available in the account

| Input      | Comments                                  | Default |
| ---------- | ----------------------------------------- | ------- |
| Connection | The Azure Blob Storage connection to use. |         |

### Resize Page Blob {#resizepageblob}

Resize an existing page blob (must be a multiple of 512 bytes)

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata) |         |
| Blob Name      | The blob name (file path) within the container. Do not include a leading slash. Use forward slashes for virtual directory structures.                                                                                                                                                           |         |
| Page Blob Size | The size to reserve for the page blob in bytes. Must be a multiple of 512 (e.g., 1024, 1536, 2048, 4096). Maximum size is 8 TiB (8,796,093,022,208 bytes).                                                                                                                                      |         |
| Connection     | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                       |         |

### Upload Block Blob {#uploadblockblob}

Upload file data to a block blob object

| Input          | Comments                                                                                                                                                                                                                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata) |         |
| Blob Name      | The blob name (file path) within the container. Do not include a leading slash. Use forward slashes for virtual directory structures.                                                                                                                                                           |         |
| File Contents  | The contents to write to a blob. Accepts text strings or binary data (images, PDFs, etc.) from previous steps.                                                                                                                                                                                  |         |
| Connection     | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                       |         |

### Upload to Page Blob {#uploadtopageblob}

Upload to an existing page blob (both data size and offset must be a multiple of 512)

| Input            | Comments                                                                                                                                                                                                                                                                                        | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Container Name   | The Azure Blob Storage container name (3-63 characters, lowercase letters, numbers, and hyphens only). Containers organize blob storage similar to directories. [Learn more](https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata) |         |
| Blob Name        | The blob name (file path) within the container. Do not include a leading slash. Use forward slashes for virtual directory structures.                                                                                                                                                           |         |
| Page Blob Offset | The starting byte position for writing to the page blob. Must be a multiple of 512 (e.g., 0, 512, 1024, 2048).                                                                                                                                                                                  |         |
| File Contents    | The contents to write to a blob. Accepts text strings or binary data (images, PDFs, etc.) from previous steps.                                                                                                                                                                                  |         |
| Connection       | The Azure Blob Storage connection to use.                                                                                                                                                                                                                                                       |         |
