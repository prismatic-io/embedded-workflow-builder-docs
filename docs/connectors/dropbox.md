---
title: Dropbox Connector
sidebar_label: Dropbox
description: Manage files stored in Dropbox
---

![Dropbox](./assets/dropbox.png#connector-icon)
Manage files stored in Dropbox

## Connections

### OAuth 2.0

OAuth 2.0 Connectivity for Dropbox

This component uses OAuth 2.0 to connect to Dropbox's API.
To create a Dropbox OAuth 2.0 app, log in to Dropbox and open [https://www.dropbox.com/developers/apps](https://www.dropbox.com/developers/apps):

1. Select **Create app**.
1. Select that you want **Scoped access**.
1. Choose the type of access you want:
   1. **App folder** access gives you access to a single folder in the user's `Apps/` directory. A folder will be created with the same name as your OAuth app.
   1. **Full Dropbox** access gives you access to all files and folders in a user's Dropbox account.
1. Give your app a name and click **Create app**.
   1. Take note of the **App key** and **App secret** - you'll enter these in a Dropbox connection config variable.
1. Under the **OAuth2** section add the **Redirect URI** as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.

Under the **Permissions** tab, choose the permissions your app will need.
The actions supported in this component relate to files, so you should grant the `files.metadata.read` and `files.content.read` permissions if you need read-only access, and also include the `files.metadata.write` and `files.content.write` permissions if you need to write files to a user's Dropbox account.
You can safely ignore permissions listed under **Collaboration** and **Account Info**.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| App Key    | Generate at https://www.dropbox.com/developers/apps |         |
| App Secret | Generate at https://www.dropbox.com/developers/apps |         |

## Triggers

### New and Updated Files

Checks for new and updated files on a configured schedule.

| Input            | Comments                                                                                             | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                      |         |
| Directory Path   | The path to a directory within a Dropbox share. Include a leading /.                                 |         |
| Recursive        | If true, the response will contain contents of all subfolders.                                       | false   |
| Include Deleted? | If true, the results will include entries for files and folders that used to exist but were deleted. | false   |
| Team User Type   | The type of user to connect with. Admin or User                                                      |         |
| Team Member ID   | The ID of the team member. Required if Team User Type is set                                         |         |
| Debug            | Whether to log the payload to the debug log. This is useful for troubleshooting.                     | false   |

### Webhook

Receive and validate webhook requests from Dropbox for webhooks you configure.

| Input          | Comments                             | Default |
| -------------- | ------------------------------------ | ------- |
| Signing Secret | The 'App Secret' of your Dropbox app |         |

## Actions

### Copy Object

Copy a Folder or File from one path to another

| Input      | Comments                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                  |         |
| From Path  | The location of a source file within a Dropbox share. Include a leading /.       |         |
| To Path    | The location of a destination file within a Dropbox share. Include a leading /.  |         |
| Debug      | Whether to log the payload to the debug log. This is useful for troubleshooting. | false   |

### Create Folder

Create a Folder at the specified path

| Input      | Comments                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                  |         |
| Path       | The location of a file within a Dropbox share. Include a leading /.              |         |
| Debug      | Whether to log the payload to the debug log. This is useful for troubleshooting. | false   |

### Create Shared Link

Create a shared link with custom settings. If no settings are given then the default visibility is RequestedVisibility.public (The resolved visibility, though, may depend on other aspects such as team and shared folder settings).

| Input            | Comments                                                                                                                                 | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                          |         |
| Path             | The location of a file within a Dropbox share. Include a leading /.                                                                      |         |
| Require Password | Boolean flag to enable or disable password protection.                                                                                   | false   |
| Link Password    | If the shared link has a password, this parameter can be used.                                                                           |         |
| Expires          | Expiration time of the shared link. By default the link won't expire.                                                                    |         |
| Audience         |                                                                                                                                          |         |
| Access           | Requested access level you want the audience to gain from this link. Note, modifying access level for an existing link is not supported. |         |
| Allow Download   | Boolean flag to allow or not download capabilities for shared links.                                                                     | false   |
| Team User Type   | The type of user to connect with. Admin or User                                                                                          |         |
| Team Member ID   | The ID of the team member. Required if Team User Type is set                                                                             |         |
| Debug            | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                         | false   |

### Delete Object

Delete a Folder or File at the specified path

| Input      | Comments                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                  |         |
| Path       | The location of a file within a Dropbox share. Include a leading /.              |         |
| Debug      | Whether to log the payload to the debug log. This is useful for troubleshooting. | false   |

### Download File

Download the file (< 150MB) at the specified path

| Input           | Comments                                                                                                                                                        | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                 |         |
| Path            | The location of a file within a Dropbox share. Include a leading /.                                                                                             |         |
| Download as Zip | Download a folder from the user's Dropbox, as a zip file. The folder must be less than 20 GB in size and any single file within must be less than 4 GB in size. | false   |
| Debug           | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                                                | false   |

### Export File

Export the file at the specified path

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                  |         |
| Directory Path | The path of the file to be exported.                                             |         |
| Team User Type | The type of user to connect with. Admin or User                                  |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                     |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting. | false   |

### Get Current Account

Get information about the currently authenticated user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Download Status

Get the status of a file download from a URL to Dropbox

| Input        | Comments                                                                                                               | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                        |         |
| Async Job ID | The ID of the asynchronous job. From the response of the Save From URL action would be a good place to get this value. |         |
| Debug        | Whether to log the payload to the debug log. This is useful for troubleshooting.                                       | false   |

### Get File Lock

Return the lock metadata for the given list of paths

| Input          | Comments                                                                                       | Default |
| -------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                |         |
| Team Member ID | Used to specify the user to act on behalf of.                                                  |         |
| File Path      | This represents the source files's path. Include a leading / (Use this, Dynamic Paths or both) |         |
| Dynamic Paths  | An optional list of paths (Use this, File Paths or both)                                       |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting.               | false   |

### Get Metadata for File or Folder

Returns the metadata for a file or folder.

| Input                               | Comments                                                                                                             | Default |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                          |                                                                                                                      |         |
| Path                                | The path of a file or folder on Dropbox to get metadata for                                                          |         |
| Include Media Info                  | If true, FileMetadata.media_info is set for photo and video.                                                         | false   |
| Include Deleted                     | DeletedMetadata will be returned for deleted file or folder, otherwise LookupError.not_found will be returned.       | false   |
| Include Has Explicit Shared Members | If true, the results will include a flag for each file indicating whether or not that file has any explicit members. | false   |
| Team User Type                      | The type of user to connect with. Admin or User                                                                      |         |
| Team Member ID                      | The ID of the team member. Required if Team User Type is set                                                         |         |
| Debug                               | Whether to log the payload to the debug log. This is useful for troubleshooting.                                     | false   |

### Get Shared Link File

Download the shared link's file from a user's Dropbox.

| Input           | Comments                                                                                                                                                                 | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                                                                                          |         |
| Shared Link URL | StringURL of the shared link.                                                                                                                                            |         |
| Directory Path  | If the shared link is to a folder, this parameter can be used to retrieve the metadata for a specific file or sub-folder in this folder. A relative path should be used. |         |
| Link Password   | If the shared link has a password, this parameter can be used.                                                                                                           |         |
| Team User Type  | The type of user to connect with. Admin or User                                                                                                                          |         |
| Team Member ID  | The ID of the team member. Required if Team User Type is set                                                                                                             |         |
| Debug           | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                                                         | false   |

### Get Shared Metadata for File

Returns shared file metadata.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                  |         |
| File Id        | The ID for the shared file.                                                      |         |
| Team User Type | The type of user to connect with. Admin or User                                  |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                     |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting. | false   |

### Get Shared Metadata for Folder

Returns shared folder metadata.

| Input            | Comments                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                  |         |
| Shared Folder ID | The ID of the shared folder to retrieve metadata for                             |         |
| Team User Type   | The type of user to connect with. Admin or User                                  |         |
| Team Member ID   | The ID of the team member. Required if Team User Type is set                     |         |
| Debug            | Whether to log the payload to the debug log. This is useful for troubleshooting. | false   |

### Get Team Members

Get Team Members by Member ID, External ID, or Email

| Input      | Comments                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                  |         |
| Lookup By  |                                                                                  |         |
| Value      |                                                                                  |         |
| Debug      | Whether to log the payload to the debug log. This is useful for troubleshooting. | false   |

### Get Temporary Link

Get a temporary link to stream content of a file.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                  |         |
| Path           | The path to the file you want a temporary link to                                |         |
| Team Member ID | Used to specify the user to act on behalf of.                                    |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting. | false   |

### Get Temporary Upload Link

Get a temporary presigned link to upload a file

| Input      | Comments                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                  |         |
| Path       | The location of a file within a Dropbox share. Include a leading /.              |         |
| Duration   | How long the link will be valid, in seconds. Defaults to 1 hour.                 | 3600    |
| Debug      | Whether to log the payload to the debug log. This is useful for troubleshooting. | false   |

### List Changes

List changes that have been made to files in this folder since the last time this action was run.

| Input            | Comments                                                                                             | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                      |         |
| Directory Path   | The path to a directory within a Dropbox share. Include a leading /.                                 |         |
| Recursive        | If true, the response will contain contents of all subfolders.                                       | false   |
| Include Deleted? | If true, the results will include entries for files and folders that used to exist but were deleted. | false   |
| Team User Type   | The type of user to connect with. Admin or User                                                      |         |
| Team Member ID   | The ID of the team member. Required if Team User Type is set                                         |         |
| Debug            | Whether to log the payload to the debug log. This is useful for troubleshooting.                     | false   |

### List Folder

List Folder contents at the specified path

| Input          | Comments                                                                                                                                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                         |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                                                                                    |         |
| Cursor         | Specify the cursor returned by your last call to list_folder or list_folder/continue.                                                                   |         |
| Limit          | The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases. |         |
| Recursive      | If true, the response will contain contents of all subfolders.                                                                                          | false   |
| Team User Type | The type of user to connect with. Admin or User                                                                                                         |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                                                                            |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                                        | false   |

### List Shared Folders

List Shared Folders contents

| Input          | Comments                                                                                                                                                                                                                                    | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                                                                                                             |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                                                                                                                                                                        |         |
| Cursor         | Specify the cursor returned by your last call to list_folder or list_folder/continue.                                                                                                                                                       |         |
| Limit          | The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases.                                                                                     |         |
| Folder Actions | A list of `FolderAction`s corresponding to `FolderPermission`s that should appear in the response's SharedFolderMetadata.permissions field describing the actions the authenticated user can perform on the folder. This field is optional. |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                                                                                                                            | false   |

### List Shared Links

List Folder contents at the specified path

| Input          | Comments                                                                              | Default |
| -------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                       |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                  |         |
| Direct Only    | Links to parent folders can be suppressed by setting direct_only to true.             | false   |
| Cursor         | Specify the cursor returned by your last call to list_folder or list_folder/continue. |         |
| Team User Type | The type of user to connect with. Admin or User                                       |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                          |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting.      | false   |

### List Team's Folders

List Team's Folder contents

| Input          | Comments                                                                                                                                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                         |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                                                                                    |         |
| Cursor         | Specify the cursor returned by your last call to list_folder or list_folder/continue.                                                                   |         |
| Limit          | The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases. |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                                        | false   |

### Lock File

Lock the files at the given paths

| Input          | Comments                                                                                       | Default |
| -------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                |         |
| Team Member ID | Used to specify the user to act on behalf of.                                                  |         |
| File Path      | This represents the source files's path. Include a leading / (Use this, Dynamic Paths or both) |         |
| Dynamic Paths  | An optional list of paths (Use this, File Paths or both)                                       |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting.               | false   |

### Move Object

Move a Folder or File from one path to another

| Input      | Comments                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                  |         |
| From Path  | The location of a source file within a Dropbox share. Include a leading /.       |         |
| To Path    | The location of a destination file within a Dropbox share. Include a leading /.  |         |
| Debug      | Whether to log the payload to the debug log. This is useful for troubleshooting. | false   |

### Raw Request

Send raw HTTP request to Dropbox

| Input                   | Comments                                                                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                                                                  |         |
| Team User Type          | The type of user to connect with. Admin or User                                                                                                                                                                                                  |         |
| Team Member ID          | The ID of the team member. Required if Team User Type is set                                                                                                                                                                                     |         |
| URL                     | Input the path only (/file_requests/create), The base URL is already included (https://api.dropboxapi.com/2). For example, to connect to https://api.dropboxapi.com/2/file_requests/create, only /file_requests/create is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                              |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                 | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                    | false   |
| Debug                   | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                                                                                                                                 | false   |

### Save From URL

Save a file from a URL to Dropbox

| Input               | Comments                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                   |         |
| To Path             | The path with file name with extension where the URL will be saved to in Dropbox. |         |
| URL to Save         | The URL to save to Dropbox                                                        |         |
| Wait Until Complete | Whether to wait for the operation to complete.                                    | false   |
| Debug               | Whether to log the payload to the debug log. This is useful for troubleshooting.  | false   |

### Search Files

Search for files at the specified path

| Input          | Comments                                                                                                                                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                         |         |
| File Name      | The name of a file within a Dropbox share.                                                                                                              |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                                                                                    |         |
| Cursor         | Specify the cursor returned by your last call to list_folder or list_folder/continue.                                                                   |         |
| Limit          | The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases. |         |
| Team User Type | The type of user to connect with. Admin or User                                                                                                         |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                                                                            |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                                        | false   |

### Search Folders

Search for folders at the specified path

| Input          | Comments                                                                                                                                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                         |         |
| Folder Name    | The name of the folder to search for                                                                                                                    |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                                                                                    |         |
| Cursor         | Specify the cursor returned by your last call to list_folder or list_folder/continue.                                                                   |         |
| Limit          | The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases. |         |
| Team User Type | The type of user to connect with. Admin or User                                                                                                         |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                                                                            |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                                        | false   |

### Share Folder

Share a folder with collaborators. Most sharing will be completed synchronously. Large folders will be completed asynchronously.

| Input              | Comments                                                                                                                                                                                                            | Default         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection         |                                                                                                                                                                                                                     |                 |
| Directory Path     | The path or the file id to the folder to share. If it does not exist, then a new one is created.                                                                                                                    |                 |
| ACL Update Policy  | Who can add and remove members of this shared folder.                                                                                                                                                               |                 |
| Force Async        | Whether to force the share to happen asynchronously.                                                                                                                                                                | false           |
| Member Policy      | Who can be a member of this shared folder. Only applicable if the current user is on a team.                                                                                                                        |                 |
| Shared Link Policy | The policy to apply to shared links created for content inside this shared folder. The current user must be on a team to set this policy to SharedLinkPolicy.members.                                               |                 |
| Viewer Info Policy | Who can enable/disable viewer info for this shared folder.                                                                                                                                                          |                 |
| Access Inheritance | The access inheritance settings for the folder.                                                                                                                                                                     |                 |
| Actions            | A list of `FolderAction`s corresponding to `FolderPermission`s that should appear in the response's SharedFolderMetadata.permissions field describing the actions the authenticated user can perform on the folder. | <code>[]</code> |
| Team User Type     | The type of user to connect with. Admin or User                                                                                                                                                                     |                 |
| Team Member ID     | The ID of the team member. Required if Team User Type is set                                                                                                                                                        |                 |
| Debug              | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                                                                                                    | false           |

### Unlock File

Unlock the files at the given paths

| Input          | Comments                                                                                       | Default |
| -------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                |         |
| Team User Type | The type of user to connect with. Admin or User                                                |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                   |         |
| File Path      | This represents the source files's path. Include a leading / (Use this, Dynamic Paths or both) |         |
| Dynamic Paths  | An optional list of paths (Use this, File Paths or both)                                       |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting.               | false   |

### Unshare File

Remove all members from this file. Does not remove inherited members.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                  |         |
| File Id        | The ID for the shared file.                                                      |         |
| Team User Type | The type of user to connect with. Admin or User                                  |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                     |         |
| Debug          | Whether to log the payload to the debug log. This is useful for troubleshooting. | false   |

### Unshare Folder

Allows a shared folder owner to unshare the folder. Unshare will not work in following cases: The shared folder contains shared folders OR the shared folder is inside another shared folder.

| Input            | Comments                                                                                                                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                                                |         |
| Shared Folder ID | The ID for the shared folder.                                                                                                                                                                                  |         |
| Leave a Copy     | If true, members of this shared folder will get a copy of this folder after it's unshared. Otherwise, it will be removed from their Dropbox. The current user, who is an owner, will always retain their copy. | false   |
| Team User Type   | The type of user to connect with. Admin or User                                                                                                                                                                |         |
| Team Member ID   | The ID of the team member. Required if Team User Type is set                                                                                                                                                   |         |
| Debug            | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                                                                                               | false   |

### Upload File

Upload a file to the specified path

| Input         | Comments                                                                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                    |         |
| Path          | The location of a file within a Dropbox share. Include a leading /.                                                                                |         |
| File Contents | The contents to write to a file. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step. |         |
| Debug         | Whether to log the payload to the debug log. This is useful for troubleshooting.                                                                   | false   |
