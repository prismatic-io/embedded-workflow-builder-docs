---
title: Azure Files Connector
sidebar_label: Azure Files
description: Manage files and folders within Azure Files
---

![Azure Files](./assets/azure-files.png#connector-icon)
Manage files and folders within Azure Files

## Connections

### Connection String

Connection String

You can also grant limited access to your Azure Storage Resources using [Shared Access Signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview) authentication, which involves an access token.
You can obtain a connection string containing an SAS token from the [Azure Portal](https://portal.azure.com/).
Keep in mind this token will eventually expire. Make sure to configure an expiration date you will remember, so you can manually refresh the token at a later date.

| Input             | Comments                                                         | Default |
| ----------------- | ---------------------------------------------------------------- | ------- |
| Connection String | Provide the connection string for your active directory account. |         |

### Storage Shared Key

Storage Shared Key

Azure Files can use [storageSharedKeyCredential](https://docs.microsoft.com/en-us/rest/api/storageservices/authorize-with-shared-key) authentication, which involves an account / key pair.
You can obtain an account name / account key pair through the [Azure Portal](https://portal.azure.com/).

| Input        | Comments                                            | Default |
| ------------ | --------------------------------------------------- | ------- |
| Account Name | Provide the name for your active directory account. |         |
| Account Key  | Provide the key for your active directory account.  |         |

## Actions

### Copy File

Copy a file

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| From Path  | An object in Azure Files is a file that is saved in a 'share'. This represents the source object's file path. Do not include a leading /                                   |         |
| To Path    | An object in Azure Files is a file that is saved in a 'share'. This represents the destination object's file path. Do not include a leading /                              |         |
| Connection |                                                                                                                                                                            |         |

### Create Folder

Create a folder under an existing path

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| Connection |                                                                                                                                                                            |         |

### Create Share

Create a file share

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Connection |                                                                                                                                                                            |         |

### Delete File

Delete a file

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| Connection |                                                                                                                                                                            |         |

### Delete Folder

Delete an empty folder under an existing path

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| Connection |                                                                                                                                                                            |         |

### Delete Share

Delete a file share

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Connection |                                                                                                                                                                            |         |

### Download File

Download a file

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| Connection |                                                                                                                                                                            |         |

### List Folder

List files and folders in a folder

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| Connection |                                                                                                                                                                            |         |

### List Shares

Get a list of file shares available in the account

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Save From URL

Save a file from a URL to Azure Files

| Input      | Comments                                                                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                  |         |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes.       |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                                |         |
| Source URL | The URL where the source file currently resides. This endpoint must be accessible via an unauthenticated HTTP GET request, and the response must return a content-length header. |         |

### Upload File

Upload a file under an existing path

| Input         | Comments                                                                                                                                                                   | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name    | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path          | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| File Contents | The contents to write to a file. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step.                         |         |
| Connection    |                                                                                                                                                                            |         |
