---
title: Azure Files Connector
sidebar_label: Azure Files
description: Manage files and folders within Azure Files
---

![Azure Files](./assets/azure-files.png#connector-icon)
Manage files and folders within Azure Files

## Connections

### Connection String {#connectionstring}

Connection String

| Input             | Comments                                                         | Default |
| ----------------- | ---------------------------------------------------------------- | ------- |
| Connection String | Provide the connection string for your active directory account. |         |

### Storage Shared Key {#storagesharedkey}

Storage Shared Key

| Input        | Comments                                            | Default |
| ------------ | --------------------------------------------------- | ------- |
| Account Name | Provide the name for your active directory account. |         |
| Account Key  | Provide the key for your active directory account.  |         |

## Actions

### Copy File {#copyfile}

Copy a file

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| From Path  | An object in Azure Files is a file that is saved in a 'share'. This represents the source object's file path. Do not include a leading /                                   |         |
| To Path    | An object in Azure Files is a file that is saved in a 'share'. This represents the destination object's file path. Do not include a leading /                              |         |
| Connection |                                                                                                                                                                            |         |

### Create Folder {#createfolder}

Create a folder under an existing path

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| Connection |                                                                                                                                                                            |         |

### Create Share {#createshare}

Create a file share

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Connection |                                                                                                                                                                            |         |

### Delete File {#deletefile}

Delete a file

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| Connection |                                                                                                                                                                            |         |

### Delete Folder {#deletefolder}

Delete an empty folder under an existing path

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| Connection |                                                                                                                                                                            |         |

### Delete Share {#deleteshare}

Delete a file share

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Connection |                                                                                                                                                                            |         |

### Download File {#downloadfile}

Download a file

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| Connection |                                                                                                                                                                            |         |

### List Folder {#listfolder}

List files and folders in a folder

| Input      | Comments                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| Connection |                                                                                                                                                                            |         |

### List Shares {#listshares}

Get a list of file shares available in the account

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Save From URL {#savefromurl}

Save a file from a URL to Azure Files

| Input      | Comments                                                                                                                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                  |         |
| Share Name | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes.       |         |
| Path       | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                                |         |
| Source URL | The URL where the source file currently resides. This endpoint must be accessible via an unauthenticated HTTP GET request, and the response must return a content-length header. |         |

### Upload File {#uploadfile}

Upload a file under an existing path

| Input         | Comments                                                                                                                                                                   | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Share Name    | An Azure Files 'share' is a container where files are stored. You can create a share from within the Azure console. Share names contain only letters, numbers, and dashes. |         |
| Path          | An object in Azure Files is a file that is saved in a 'share'. This represents the object's file path. Do not include a leading /                                          |         |
| File Contents | The contents to write to a file. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step.                         |         |
| Connection    |                                                                                                                                                                            |         |
