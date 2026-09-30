---
title: Dropbox Connector
sidebar_label: Dropbox
description: Manage files stored in Dropbox
---

![Dropbox](./assets/dropbox.png#connector-icon)
[Dropbox](https://www.dropbox.com/) is a file sharing platform that allows teams to collaborate and share files with one another.
The Dropbox component enables interaction with the Dropbox API.
Files can be uploaded, downloaded, listed, and moved within a Dropbox account.

## API Documentation

This component was built using the [Dropbox API Documentation](https://www.dropbox.com/developers/documentation/http/overview)

## Connections

### OAuth 2.0 {#oauth}

OAuth 2.0 Connectivity for Dropbox

This component uses OAuth 2.0 to connect to Dropbox's API.

#### Prerequisites

- A Dropbox account
- Access to the Dropbox App Console at [https://www.dropbox.com/developers/apps](https://www.dropbox.com/developers/apps)

#### Setup Steps

To create a Dropbox OAuth 2.0 app, log in to Dropbox and open [https://www.dropbox.com/developers/apps](https://www.dropbox.com/developers/apps):

1. Select **Create app**.
1. Select **Scoped access**.
1. Choose the type of access required:
   1. **App folder** access grants access to a single folder in the user's `Apps/` directory. A folder will be created with the same name as the OAuth app.
   1. **Full Dropbox** access grants access to all files and folders in a user's Dropbox account.
1. Give the app a name and click **Create app**.
   1. Take note of the **App key** and **App secret**. These are entered in a Dropbox connection config variable.
1. Under the **OAuth2** section add the **Redirect URI** as `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.

Under the **Permissions** tab, choose the permissions the app will need.
The actions supported in this component relate to files, so grant the `files.metadata.read` and `files.content.read` permissions for read-only access, and also include the `files.metadata.write` and `files.content.write` permissions to write files to a user's Dropbox account.
Permissions listed under **Collaboration** and **Account Info** can be safely ignored.

#### Configure the Connection

- Enter the **App key** from the Dropbox app's settings page as the **App Key**.
- Enter the **App secret** from the Dropbox app's settings page as the **App Secret**.

#### Production Approval

Dropbox requires third-party OAuth apps to pass a production approval review. Dropbox OAuth apps start in **development mode**, which are fully functional but limited to 50 total linked users. These apps may be used to build, test, and deploy integrations in this state.

Dropbox apps pass through two states before they are ready for broad deployment.

**Development mode (default):** New apps start in development mode, limited to 50 total linked users. The OAuth authorization flow works normally for users within this limit. No warning is shown during authentication. Once the app reaches 50 linked users, it is frozen: new users cannot authenticate and the authorization flow returns an error to anyone attempting to connect.

**Production approved:** Any Dropbox user can authorize the integration without restriction. No warning is shown.

**Submit for production approval before broadly deploying the integration to end users.** Once an app reaches 50 linked users, Dropbox opens a two-week window to apply for approval. If approval is not granted within this window, the app is **frozen**: new users cannot authenticate, and the app cannot be unfrozen by unlinking existing users. Production approval is the only path forward once frozen.

The recommended approach: deploy to a small initial group to reach the 50 linked users required for review eligibility, then apply for approval immediately and refrain from waiting to scale broadly.

Apps used solely for internal purposes can remain in development mode and do not require production approval.

#### Applying for Production Approval

1. Open the [Dropbox App Console](https://www.dropbox.com/developers/apps) and select the app
2. On the app's info page, click **Apply for Production**
3. Provide the following details (more detail leads to faster review):
   - A description of how the app uses the Dropbox API
   - An app icon
   - A functional description of the integration

Applications are not reviewed until the app has at least 50 linked users. Early review is possible by providing a compelling justification when applying.

:::note[App Name Is Locked After Approval]
The app name cannot be changed after production approval is granted. Finalize the app name before submitting.
:::

Refer to the [Dropbox developer guide](https://www.dropbox.com/developers/reference/developer-guide#production-approval) for full production approval requirements.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input      | Comments                                                                             | Default |
| ---------- | ------------------------------------------------------------------------------------ | ------- |
| App Key    | Generate in the [Dropbox Developer Portal](https://www.dropbox.com/developers/apps). |         |
| App Secret | Generate in the [Dropbox Developer Portal](https://www.dropbox.com/developers/apps). |         |

## Triggers

### New and Updated Files {#pollchangestrigger}

Checks for new and updated files on a configured schedule. Set a Look-back Date to sync the folder's existing files once when the instance is deployed.

| Input                  | Comments                                                                                                                                                                                                                                                                                                                                                                | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Dropbox connection to use.                                                                                                                                                                                                                                                                                                                                          |         |
| Directory Path         | The path to a directory within a Dropbox share. Include a leading /.                                                                                                                                                                                                                                                                                                    |         |
| Recursive              | If true, the response will contain contents of all subfolders.                                                                                                                                                                                                                                                                                                          | false   |
| Include Deleted?       | If true, the results will include entries for files and folders that used to exist but were deleted.                                                                                                                                                                                                                                                                    | false   |
| Look-back Date         | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync reports each file modified on or after this date once; Dropbox has no date filter on folder listing, so the folder is still read in full and the date bounds only what is dispatched. |         |
| Team User Type         | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set.                                                                                                                                                                                         |         |
| Team Member ID         | The ID of the team member. Required if Team User Type is set                                                                                                                                                                                                                                                                                                            |         |
| Initial Sync Page Size | How many existing entries to read per request while backfilling on deploy. Defaults to 2000, the largest value Dropbox accepts. Lower it when a downstream step is slow enough that a full page of work per round is too much to hand over at once.                                                                                                                     |         |

### Webhook {#dropboxwebhook}

Receive and validate webhook requests from Dropbox for webhooks you configure.

| Input          | Comments                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Signing Secret | The 'App Secret' of the Dropbox app, used to verify that an incoming request was signed by Dropbox. |         |

## Actions

### Copy Object {#copyobject}

Copy a Folder or File from one path to another

| Input      | Comments                                                                        | Default |
| ---------- | ------------------------------------------------------------------------------- | ------- |
| Connection | The Dropbox connection to use.                                                  |         |
| From Path  | The location of a source file within a Dropbox share. Include a leading /.      |         |
| To Path    | The location of a destination file within a Dropbox share. Include a leading /. |         |

### Create Folder {#createfolder}

Create a Folder at the specified path

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The Dropbox connection to use.                                      |         |
| Path       | The location of a file within a Dropbox share. Include a leading /. |         |

### Create Shared Link {#createsharedlink}

Create a shared link with custom settings. If no settings are given then the default visibility is RequestedVisibility.public (The resolved visibility, though, may depend on other aspects such as team and shared folder settings).

| Input            | Comments                                                                                                                                                                                                                                                         | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Dropbox connection to use.                                                                                                                                                                                                                                   |         |
| Path             | The location of a file within a Dropbox share. Include a leading /.                                                                                                                                                                                              |         |
| Link Settings    | Password, expiration, access level, and download controls to apply to the link.                                                                                                                                                                                  |         |
| Require Password | When true, the shared link can only be opened by entering the value set in Link Password. When false, Dropbox applies its default setting for the file.                                                                                                          | false   |
| Link Password    | If the shared link has a password, this parameter can be used.                                                                                                                                                                                                   |         |
| Expires          | The date and time at which the shared link stops working, as an ISO 8601 timestamp in UTC. Leave empty for a link that never expires.                                                                                                                            |         |
| Access           | The access level the audience gains from this link. Modifying the access level of an existing link is not supported.                                                                                                                                             |         |
| Allow Download   | When true, anyone with the shared link can download the file rather than only preview it. When false, Dropbox applies its default setting for the file.                                                                                                          | false   |
| Audience         | Who is allowed to open the shared link: Public grants access to anyone with the link, Team to members of the Dropbox team, and No One to no one beyond the link's owner. Leave empty to let Dropbox resolve visibility from the team and shared folder settings. |         |
| Team User Type   | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set.                                                                                  |         |
| Team Member ID   | The ID of the team member. Required if Team User Type is set                                                                                                                                                                                                     |         |

### Delete Object {#deleteobject}

Delete a Folder or File at the specified path

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The Dropbox connection to use.                                      |         |
| Path       | The location of a file within a Dropbox share. Include a leading /. |         |

### Download File {#downloadfile}

Download the file (< 150MB) at the specified path

| Input           | Comments                                                                                                                                                        | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Dropbox connection to use.                                                                                                                                  |         |
| Path            | The location of a file within a Dropbox share. Include a leading /.                                                                                             |         |
| Download as Zip | Download a folder from the user's Dropbox, as a zip file. The folder must be less than 20 GB in size and any single file within must be less than 4 GB in size. | false   |

### Export File {#exportfile}

Export the file at the specified path

| Input          | Comments                                                                                                                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Dropbox connection to use.                                                                                                                                                  |         |
| Directory Path | The path of the file to be exported.                                                                                                                                            |         |
| Team User Type | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |

### Get Current Account {#getcurrentaccount}

Get information about the currently authenticated user

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection | The Dropbox connection to use. |         |

### Get Download Status {#getdownloadstatus}

Get the status of a file download from a URL to Dropbox

| Input        | Comments                                                                                                      | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Dropbox connection to use.                                                                                |         |
| Async Job ID | The identifier of the asynchronous job to check. The Save From URL action returns this value in its response. |         |

### Get File Lock {#getfilelock}

Return the lock metadata for the given list of paths

| Input          | Comments                                                                                                             | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Dropbox connection to use.                                                                                       |         |
| Team Member ID | Used to specify the user to act on behalf of.                                                                        |         |
| File Path      | The paths of the files to act on. Each path must include a leading /. Supply this input, Dynamic Paths, or both.     |         |
| Dynamic Paths  | A list of file paths referenced from a previous step, each with a leading /. Supply this input, File Paths, or both. |         |

### Get Metadata for File or Folder {#getmetadata}

Returns the metadata for a file or folder.

| Input                               | Comments                                                                                                                                                                        | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                          | The Dropbox connection to use.                                                                                                                                                  |         |
| Path                                | The file or folder to get metadata for. Accepts either a path with a leading / or a Dropbox ID.                                                                                 |         |
| Result Options                      | Options that control which records are returned and how the response is shaped.                                                                                                 |         |
| Include Media Info                  | If true, FileMetadata.media_info is set for photo and video.                                                                                                                    | false   |
| Include Deleted                     | When true, metadata is returned for a file or folder that has been deleted, instead of the request failing with a not-found error.                                              | false   |
| Include Has Explicit Shared Members | If true, the results will include a flag for each file indicating whether or not that file has any explicit members.                                                            | false   |
| Team User Type                      | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID                      | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |

### Get Shared Link File {#getsharedlinkfile}

Download the shared link's file from a user's Dropbox.

| Input           | Comments                                                                                                                                                                        | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Dropbox connection to use.                                                                                                                                                  |         |
| Shared Link URL | The Dropbox shared link to read the file from, including the full https:// URL.                                                                                                 |         |
| Directory Path  | If the shared link is to a folder, this parameter can be used to retrieve the metadata for a specific file or sub-folder in this folder. A relative path should be used.        |         |
| Link Password   | If the shared link has a password, this parameter can be used.                                                                                                                  |         |
| Team User Type  | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID  | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |

### Get Shared Metadata for File {#getsharedmetadataforfile}

Returns shared file metadata.

| Input          | Comments                                                                                                                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Dropbox connection to use.                                                                                                                                                  |         |
| File ID        | The ID for the shared file.                                                                                                                                                     |         |
| Team User Type | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |

### Get Shared Metadata for Folder {#getsharedmetadataforfolder}

Returns shared folder metadata.

| Input            | Comments                                                                                                                                                                        | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Dropbox connection to use.                                                                                                                                                  |         |
| Shared Folder ID | The ID of the shared folder to retrieve metadata for                                                                                                                            |         |
| Team User Type   | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID   | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |

### Get Team Members {#getteammembers}

Get Team Members by Member ID, External ID, or Email

| Input        | Comments                                                                                        | Default |
| ------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Dropbox connection to use.                                                                  |         |
| Lookup By    | The kind of identifier supplied in Lookup Value, which determines how team members are matched. |         |
| Lookup Value | The identifier to look the team member up by. Must match the kind selected in Lookup By.        |         |

### Get Temporary Link {#gettemporarylink}

Get a temporary link to stream content of a file.

| Input          | Comments                                               | Default |
| -------------- | ------------------------------------------------------ | ------- |
| Connection     | The Dropbox connection to use.                         |         |
| Path           | The path of the file to generate a temporary link for. |         |
| Team Member ID | Used to specify the user to act on behalf of.          |         |

### Get Temporary Upload Link {#gettemporaryuploadlink}

Get a temporary presigned link to upload a file

| Input      | Comments                                                            | Default |
| ---------- | ------------------------------------------------------------------- | ------- |
| Connection | The Dropbox connection to use.                                      |         |
| Path       | The location of a file within a Dropbox share. Include a leading /. |         |
| Duration   | How long the link will be valid, in seconds. Defaults to 1 hour.    | 3600    |

### List Changes {#listchanges}

List changes that have been made to files in this folder since the last time this action was run.

| Input            | Comments                                                                                                                                                                        | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Dropbox connection to use.                                                                                                                                                  |         |
| Directory Path   | The path to a directory within a Dropbox share. Include a leading /.                                                                                                            |         |
| Recursive        | If true, the response will contain contents of all subfolders.                                                                                                                  | false   |
| Include Deleted? | If true, the results will include entries for files and folders that used to exist but were deleted.                                                                            | false   |
| Team User Type   | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID   | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |

### List Folder {#listfolder}

List Folder contents at the specified path

| Input          | Comments                                                                                                                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Dropbox connection to use.                                                                                                                                                  |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                                                                                                            |         |
| Recursive      | If true, the response will contain contents of all subfolders.                                                                                                                  | false   |
| Fetch All      | When true, automatically fetches all pages of results using pagination. Cursor and Limit inputs are ignored when this is enabled.                                               | false   |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                       |         |
| Cursor         | The pagination cursor returned by a previous request, from Dropbox's `list_folder` and `list_folder/continue` endpoints. Leave empty to start from the first page.              |         |
| Limit          | The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases.                         |         |
| Team User Type | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |

### List Shared Folders {#listsharingfolder}

List shared folders in the account.

| Input          | Comments                                                                                                                                                                                                                                    | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Dropbox connection to use.                                                                                                                                                                                                              |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                                                                                                                                                                        |         |
| Folder Actions | A list of `FolderAction`s corresponding to `FolderPermission`s that should appear in the response's SharedFolderMetadata.permissions field describing the actions the authenticated user can perform on the folder. This field is optional. |         |
| Fetch All      | When true, automatically fetches all pages of results using pagination. Cursor and Limit inputs are ignored when this is enabled.                                                                                                           | false   |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                                                                                   |         |
| Cursor         | The pagination cursor returned by a previous request, from Dropbox's `list_folder` and `list_folder/continue` endpoints. Leave empty to start from the first page.                                                                          |         |
| Limit          | The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases.                                                                                     |         |

### List Shared Links {#listsharedlinks}

List shared links at the specified path.

| Input          | Comments                                                                                                                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Dropbox connection to use.                                                                                                                                                  |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                                                                                                            |         |
| Direct Only    | When true, returns only links that point at the given path itself and omits links inherited from its parent folders.                                                            | false   |
| Fetch All      | When true, automatically fetches all pages of results using pagination. Cursor and Limit inputs are ignored when this is enabled.                                               | false   |
| Cursor         | The pagination cursor returned by a previous request, from Dropbox's `list_folder` and `list_folder/continue` endpoints. Leave empty to start from the first page.              |         |
| Team User Type | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |

### List Team's Folders {#listteamfolder}

List team folders.

| Input          | Comments                                                                                                                                                           | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection     | The Dropbox connection to use.                                                                                                                                     |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                                                                                               |         |
| Fetch All      | When true, automatically fetches all pages of results using pagination. Cursor and Limit inputs are ignored when this is enabled.                                  | false   |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                          |         |
| Cursor         | The pagination cursor returned by a previous request, from Dropbox's `list_folder` and `list_folder/continue` endpoints. Leave empty to start from the first page. |         |
| Limit          | The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases.            |         |

### Lock File {#lockfile}

Lock the files at the given paths

| Input          | Comments                                                                                                             | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Dropbox connection to use.                                                                                       |         |
| Team Member ID | Used to specify the user to act on behalf of.                                                                        |         |
| File Path      | The paths of the files to act on. Each path must include a leading /. Supply this input, Dynamic Paths, or both.     |         |
| Dynamic Paths  | A list of file paths referenced from a previous step, each with a leading /. Supply this input, File Paths, or both. |         |

### Move Object {#moveobject}

Move a Folder or File from one path to another

| Input      | Comments                                                                        | Default |
| ---------- | ------------------------------------------------------------------------------- | ------- |
| Connection | The Dropbox connection to use.                                                  |         |
| From Path  | The location of a source file within a Dropbox share. Include a leading /.      |         |
| To Path    | The location of a destination file within a Dropbox share. Include a leading /. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Dropbox

| Input                   | Comments                                                                                                                                                                                                                | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Dropbox connection to use.                                                                                                                                                                                          |         |
| Team User Type          | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set.                                         |         |
| Team Member ID          | The ID of the team member. Required if Team User Type is set                                                                                                                                                            |         |
| URL                     | The API path only, such as `/file_requests/create`. The base URL `https://api.dropboxapi.com/2` is applied automatically, so to call `https://api.dropboxapi.com/2/file_requests/create` enter `/file_requests/create`. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                 |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                               |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                    |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                        |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                  |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                     |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                             |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                     |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                     | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                        | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                     | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                           | false   |

### Save From URL {#savefromurl}

Save a file from a URL to Dropbox

| Input               | Comments                                                                                                        | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The Dropbox connection to use.                                                                                  |         |
| To Path             | The path with file name with extension where the URL will be saved to in Dropbox.                               |         |
| URL to Save         | The URL to save to Dropbox                                                                                      |         |
| Wait Until Complete | When true, polls the save job until it finishes and returns the final job status instead of the initial job ID. | false   |

### Search Files {#searchfiles}

Search for files at the specified path

| Input          | Comments                                                                                                                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Dropbox connection to use.                                                                                                                                                  |         |
| File Name      | The term to search for. Matches against file names only, not file contents, so a query of report returns quarterly-report.pdf.                                                  |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                                                                                                            |         |
| Fetch All      | When true, automatically fetches all pages of results using pagination. Cursor and Limit inputs are ignored when this is enabled.                                               | false   |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                       |         |
| Cursor         | The pagination cursor returned by a previous request, from Dropbox's `list_folder` and `list_folder/continue` endpoints. Leave empty to start from the first page.              |         |
| Limit          | The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases.                         |         |
| Team User Type | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |

### Search Folders {#searchfolders}

Search for folders at the specified path

| Input          | Comments                                                                                                                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Dropbox connection to use.                                                                                                                                                  |         |
| Folder Name    | The name of the folder to search for                                                                                                                                            |         |
| Directory Path | The path to a directory within a Dropbox share. Include a leading /.                                                                                                            |         |
| Fetch All      | When true, automatically fetches all pages of results using pagination. Cursor and Limit inputs are ignored when this is enabled.                                               | false   |
| Pagination     | Cursor and page-size controls for paging through results.                                                                                                                       |         |
| Cursor         | The pagination cursor returned by a previous request, from Dropbox's `list_folder` and `list_folder/continue` endpoints. Leave empty to start from the first page.              |         |
| Limit          | The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases.                         |         |
| Team User Type | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |

### Share Folder {#sharefolder}

Share a folder with collaborators. Most sharing will be completed synchronously. Large folders will be completed asynchronously.

| Input              | Comments                                                                                                                                                                                                            | Default         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection         | The Dropbox connection to use.                                                                                                                                                                                      |                 |
| Directory Path     | The path or the file id to the folder to share. If it does not exist, then a new one is created.                                                                                                                    |                 |
| Sharing Policies   | Access control, membership, shared link, viewer info, and access inheritance policies to apply.                                                                                                                     |                 |
| ACL Update Policy  | Who can add and remove members of this shared folder.                                                                                                                                                               |                 |
| Member Policy      | Who can be a member of this shared folder. Only applicable if the current user is on a team.                                                                                                                        |                 |
| Shared Link Policy | The policy to apply to shared links created for content inside this shared folder. The current user must be on a team to set this policy to SharedLinkPolicy.members.                                               |                 |
| Viewer Info Policy | Who can enable/disable viewer info for this shared folder.                                                                                                                                                          |                 |
| Access Inheritance | Whether the folder inherits sharing permissions from its parent folder, or manages its own membership independently.                                                                                                |                 |
| Force Async        | When true, the share is performed asynchronously and the response returns an async job ID instead of the completed shared folder metadata.                                                                          | false           |
| Actions            | A list of `FolderAction`s corresponding to `FolderPermission`s that should appear in the response's SharedFolderMetadata.permissions field describing the actions the authenticated user can perform on the folder. | <code>[]</code> |
| Team User Type     | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set.                                     |                 |
| Team Member ID     | The ID of the team member. Required if Team User Type is set                                                                                                                                                        |                 |

### Unlock File {#unlockfile}

Unlock the files at the given paths

| Input          | Comments                                                                                                                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Dropbox connection to use.                                                                                                                                                  |         |
| Team User Type | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |
| File Path      | The paths of the files to act on. Each path must include a leading /. Supply this input, Dynamic Paths, or both.                                                                |         |
| Dynamic Paths  | A list of file paths referenced from a previous step, each with a leading /. Supply this input, File Paths, or both.                                                            |         |

### Unshare File {#unsharefile}

Remove all members from this file. Does not remove inherited members.

| Input          | Comments                                                                                                                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     | The Dropbox connection to use.                                                                                                                                                  |         |
| File ID        | The ID for the shared file.                                                                                                                                                     |         |
| Team User Type | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set. |         |
| Team Member ID | The ID of the team member. Required if Team User Type is set                                                                                                                    |         |

### Unshare Folder {#unsharefolder}

Allows a shared folder owner to unshare the folder. Unshare will not work in the following cases: The shared folder contains shared folders OR the shared folder is inside another shared folder.

| Input            | Comments                                                                                                                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Dropbox connection to use.                                                                                                                                                                                 |         |
| Shared Folder ID | The ID for the shared folder.                                                                                                                                                                                  |         |
| Leave a Copy     | If true, members of this shared folder will get a copy of this folder after it's unshared. Otherwise, it will be removed from their Dropbox. The current user, who is an owner, will always retain their copy. | false   |
| Team User Type   | The team member context the request runs as: Admin acts with team admin privileges, User acts as the member themselves. This takes effect only when Team Member ID is also set.                                |         |
| Team Member ID   | The ID of the team member. Required if Team User Type is set                                                                                                                                                   |         |

### Upload File {#uploadfile}

Upload a file to the specified path

| Input         | Comments                                                                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Dropbox connection to use.                                                                                                                     |         |
| Path          | The location of a file within a Dropbox share. Include a leading /.                                                                                |         |
| File Contents | The contents to write to a file. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step. |         |
