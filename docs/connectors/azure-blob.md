---
title: Azure Blob Storage Connector
sidebar_label: Azure Blob Storage
description: Manage files and folders within Azure Blob Storage
---

![Azure Blob Storage](./assets/azure-blob.png#connector-icon)
[Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs) is a cloud solution for storing unstructured data, like large binary or text files.
It's often used to store blob data for web applications that don't store nicely in a relational database.

This component allows you to list, create and delete Azure containers, and create and modify blobs (files) within those Azure containers.

## Connections

### Connection String {#connectionstring}

Authenticates requests to Azure Blob Storage with a connection string.

Azure Blob Storage supports authentication using a [Shared Access Signature (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview) connection string. This method grants limited access to Azure Storage resources with fine-grained control over permissions and expiration.

A connection string containing a SAS token provides temporary, restricted access and is useful when full account key access is not required.

#### Prerequisites

- An active [Azure account](https://portal.azure.com/)
- An existing Azure Storage Account
- Understanding of required permissions for the integration's operations

#### Setup Steps

To generate a SAS connection string:

1. Sign in to the [Azure Portal](https://portal.azure.com/)
2. Navigate to **Storage accounts** from the main menu
3. Select the storage account to connect to
4. In the left sidebar, under **Security + networking**, select **Shared access signature**
5. Configure the SAS token settings:
   - **Allowed services**: Select **Blob** (at minimum)
   - **Allowed resource types**: Select the appropriate types (Container, Object, etc.)
   - **Allowed permissions**: Select the minimum required permissions for the integration
   - **Start and expiry date/time**: Set an appropriate expiration date
6. Click **Generate SAS and connection string** at the bottom
7. Copy the **Connection string** value (not the SAS token alone)

:::warning Token Expiration
The SAS token has an expiration date. Note the expiration date and plan to refresh the connection string before it expires to avoid authentication failures.
:::

:::note Connection String Format
The connection string will have the format:

```
BlobEndpoint=https://account.blob.core.windows.net/;SharedAccessSignature=sv=...
```

:::

#### Configure the Connection

- Enter the complete **Connection string** value into the connection configuration

For more information about SAS tokens, permissions, and security considerations, refer to the [Azure SAS documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview).

| Input             | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection String | The Azure Storage connection string. Find this in Azure Portal under Storage accounts > Security + networking > Access keys > Connection string. Supports account key or SAS token authentication. [Learn more](https://learn.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string) |         |

### Storage Shared Key {#storagesharedkey}

Authenticates requests to Azure Blob Storage with a Storage Shared Key of an account name and key.

Azure Blob Storage can use [Shared Key authentication](https://docs.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key) to authenticate requests. This authentication method uses a storage account name and account key pair.

For more information about storage account authentication, refer to the [Azure Storage security guide](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage).

#### Prerequisites

- An active [Azure account](https://portal.azure.com/)
- An existing Azure Storage Account or permissions to create one
- Appropriate permissions to view and manage storage account access keys

#### Setup Steps

To obtain the storage account credentials:

1. Sign in to the [Azure Portal](https://portal.azure.com/)
2. Navigate to **Storage accounts** from the main menu
3. Select the storage account to connect to
4. In the left sidebar, under **Security + networking**, select **Access keys**
5. Two keys are displayed: **key1** and **key2**. Either key can be used for authentication
6. Copy the **Storage account name** (shown at the top of the page)
7. Click **Show** next to either key and copy the **Key** value

:::note Key Rotation
Azure provides two access keys to allow for key rotation without downtime. When rotating keys, update the connection configuration with the new key value.
:::

#### Configure the Connection

- Enter the **Storage account name** into the **Account Name** field
- Enter the copied **Key** value into the **Account Key** field

For additional information about managing storage account keys and security best practices, refer to the [Azure documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage).

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
