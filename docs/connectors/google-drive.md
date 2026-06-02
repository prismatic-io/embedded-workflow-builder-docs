---
title: Google Drive Connector
sidebar_label: Google Drive
description: Manage files in Google Drive
---

![Google Drive](./assets/google-drive.png#connector-icon)
Manage files in Google Drive

## Connections

### OAuth2 {#oauth2}

OAuth2 Connection

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                   | Default                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Scopes        | Space delimited listing of scopes. https://developers.google.com/identity/protocols/oauth2/scopes#drive    | https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.activity.readonly |
| Client ID     | The Client ID from the Google Cloud Console. Navigate to APIs & Services > Credentials to find this value. |                                                                                               |
| Client Secret | The Client Secret from the Google Cloud Console. This value is shown when creating OAuth 2.0 credentials.  |                                                                                               |

## Triggers

### Drive Activity {#driveactivitypollingtrigger}

Checks for Google Drive activity on a configured schedule. By default yields activity on personal 'My Drive'. For activity on a shared drive, specify a shared drive's folder's 'Folder ID'.

| Input                  | Comments                                                                                                                       | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Trigger Events         | The event types the trigger will poll.                                                                                         |         |
| File ID                | Return activities for this Drive item.                                                                                         |         |
| Folder or Drive ID     | Return activities for this Drive or folder, plus all children and descendants. You may supply an array of drive or folder IDs. |         |
| Consolidation Strategy | Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated. |         |
| Connection             | The Connection to use for Google Drive authorization.                                                                          |         |

### New and Updated Files {#pollchangestrigger}

Checks for new and updated files in a specified drive (or all drives, if omitted) on a configured schedule.

| Input      | Comments                                                                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization.                                                                                                            |         |
| Drive ID   | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive". |         |

### Push Notification Webhook {#pushnotificationwebhook}

Receive and validate webhook requests from Google Drive for webhooks you configure.

## Actions

### Copy File {#copyfile}

Copy a file by file id

| Input      | Comments                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization.                                                                 |         |
| File ID    | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes. |         |
| File Name  | The name of the file.                                                                                                 |         |
| Folder ID  | A unique opaque ID for each folder.                                                                                   |         |

### Create File {#createfile}

Create a new file with content and metadata

| Input            | Comments                                                                                                                                                                                                                                                               | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Connection to use for Google Drive authorization.                                                                                                                                                                                                                  |         |
| Parent Folder Id | A unique opaque ID for each folder.                                                                                                                                                                                                                                    |         |
| File Content     | The binary or text body of the file. Some content examples you can store in Google Drive are images, videos, text, and PDF.                                                                                                                                            |         |
| File Name        | The name of the file.                                                                                                                                                                                                                                                  |         |
| Fields           | Fields to return in the response. For list operations, wrap field names in files(), e.g., files(id,name,mimeType). If unspecified, returns all fields. See [Google's fields parameter documentation](https://developers.google.com/drive/api/guides/fields-parameter). | \*      |

### Create Folder {#createfolder}

Create a directory file

| Input            | Comments                                              | Default |
| ---------------- | ----------------------------------------------------- | ------- |
| Connection       | The Connection to use for Google Drive authorization. |         |
| Folder Name      | The name of the folder.                               |         |
| Parent Folder Id | A unique opaque ID for each folder.                   |         |

### Create Webhook for Drive {#createdrivewebhook}

Create a webhook to receive notifications of changes with a Google Drive

| Input           | Comments                                                                                                                                                         | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Connection to use for Google Drive authorization.                                                                                                            |         |
| Drive ID        | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive". |         |
| Endpoint        | The URL where webhook notifications will be sent.                                                                                                                |         |
| Expiration Time | The time at which the webhook will expire as a UNIX timestamp in milliseconds. Defaults to 1 hour from now, and can be set to a maximum of 1 day from now.       |         |

### Create Webhook for File or Folder {#createfilewebhook}

Create a webhook to receive notifications of changes for a file or folder

| Input             | Comments                                                                                                                                                   | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Connection to use for Google Drive authorization.                                                                                                      |         |
| File or Folder ID |                                                                                                                                                            |         |
| Endpoint          | The URL where webhook notifications will be sent.                                                                                                          |         |
| Expiration Time   | The time at which the webhook will expire as a UNIX timestamp in milliseconds. Defaults to 1 hour from now, and can be set to a maximum of 1 day from now. |         |

### Delete File {#deletefile}

Delete a file by file id

| Input      | Comments                                                                                                                                                                                                                                                               | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization.                                                                                                                                                                                                                  |         |
| File ID    | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes.                                                                                                                                                  |         |
| Fields     | Fields to return in the response. For list operations, wrap field names in files(), e.g., files(id,name,mimeType). If unspecified, returns all fields. See [Google's fields parameter documentation](https://developers.google.com/drive/api/guides/fields-parameter). | \*      |

### Delete Webhook {#deletewebhook}

Stop a webhook channel from sending notifications

| Input       | Comments                                              | Default |
| ----------- | ----------------------------------------------------- | ------- |
| Connection  | The Connection to use for Google Drive authorization. |         |
| Webhook ID  | Returned when you create a webhook                    |         |
| Resource ID | Returned when you create a webhook                    |         |

### Empty Trash {#emptytrash}

Empty the trash of deleted files

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization. |         |

### Get About {#getabout}

Gets information about the user's Drive, and system capabilities

| Input      | Comments                                                                                                                                                                                                                                                               | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization.                                                                                                                                                                                                                  |         |
| Fields     | Fields to return in the response. For list operations, wrap field names in files(), e.g., files(id,name,mimeType). If unspecified, returns all fields. See [Google's fields parameter documentation](https://developers.google.com/drive/api/guides/fields-parameter). | \*      |

### Get Current User {#getcurrentuser}

Get the information and metadata of the user that is currently logged in

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization. |         |

### Get File {#getfile}

Gets a file's metadata and content by ID.

| Input                 | Comments                                                                                                                                  | Default |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Connection to use for Google Drive authorization.                                                                                     |         |
| File ID               | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes.                     |         |
| Preferred Export Type | The MIME type to export the file as. If not compatible, the first available export type will be used. Only required for non-binary files. |         |

### Get File Metadata {#getfilemetadata}

Gets a file's metadata and content by ID.

| Input      | Comments                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization.                                                                 |         |
| File ID    | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes. |         |
| Fields     | A comma separated list of fields to return in the response.                                                           |         |

### List Changes {#listchanges}

List changes made to files in your Google Drive since the last time this step ran (up to 1000)

| Input      | Comments                                                                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization.                                                                                                            |         |
| Drive ID   | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive". |         |

### List Drives {#listdrives}

List all drives

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization. |         |

### List Files {#listfiles}

Lists all available files and directories

| Input      | Comments                                                                                                                                                                                                                                                               | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization.                                                                                                                                                                                                                  |         |
| Drive ID   | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive".                                                                                                       |         |
| Page Size  | The maximum number of results to return. Must be between 1 and 50.                                                                                                                                                                                                     | 20      |
| Page Token | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                                                                                                                                |         |
| Fields     | Fields to return in the response. For list operations, wrap field names in files(), e.g., files(id,name,mimeType). If unspecified, returns all fields. See [Google's fields parameter documentation](https://developers.google.com/drive/api/guides/fields-parameter). | \*      |
| Query      | A query string to filter results. See [Google's documentation](https://developers.google.com/drive/api/v3/search-files) for query syntax.                                                                                                                              |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |

### List File's Export Types {#listexporttypes}

List the available export types of a file by ID.

| Input      | Comments                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization.                                                                 |         |
| File ID    | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes. |         |

### List Folders {#listfolders}

Lists all available directories

| Input      | Comments                                                                                                                                                                                                                                                               | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization.                                                                                                                                                                                                                  |         |
| Drive ID   | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive".                                                                                                       |         |
| Page Size  | The maximum number of results to return. Must be between 1 and 50.                                                                                                                                                                                                     | 20      |
| Page Token | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                                                                                                                                |         |
| Fields     | Fields to return in the response. For list operations, wrap field names in files(), e.g., files(id,name,mimeType). If unspecified, returns all fields. See [Google's fields parameter documentation](https://developers.google.com/drive/api/guides/fields-parameter). | \*      |
| Folder ID  | A unique opaque ID for each folder.                                                                                                                                                                                                                                    |         |
| Fetch All  | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |

### Move File {#movefile}

Move a file by file ID

| Input      | Comments                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for Google Drive authorization.                                                                 |         |
| File ID    | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes. |         |
| Folder ID  | A unique opaque ID for each folder.                                                                                   |         |

### Query Drive Activity {#querydriveactivity}

Query past activity in Google Drive.

| Input                  | Comments                                                                                                                       | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Connection to use for Google Drive authorization.                                                                          |         |
| File ID                | Return activities for this Drive item.                                                                                         |         |
| Folder or Drive ID     | Return activities for this Drive or folder, plus all children and descendants.                                                 |         |
| Page Token             | Specify the pagination token that's returned by a previous request to retrieve the next page of results                        |         |
| Filter                 | The filtering for items returned from this query request.                                                                      |         |
| Consolidation Strategy | Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated. |         |
| Fetch All              | When true, fetches all pages of results using pagination.                                                                      | false   |

### Raw Request {#rawrequest}

Send raw HTTP request to Google Drive

| Input                   | Comments                                                                                                                                                                                                          | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Connection to use for Google Drive authorization.                                                                                                                                                             |         |
| URL                     | Input the path only (/files), The base URL is already included (https://www.googleapis.com/drive/v3). For example, to connect to https://www.googleapis.com/drive/v3/files, only /files is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                           |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                         |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                              |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                  |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                            |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                               |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                       |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                          | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                               |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                               | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                  | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                               | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                     | false   |

### Search Files {#searchfiles}

Search for an existing file by Name

| Input                         | Comments                                                                                                                                                                                                                                                               | Default |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                    | The Connection to use for Google Drive authorization.                                                                                                                                                                                                                  |         |
| Drive ID                      | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive".                                                                                                       |         |
| Search                        | Search terms to filter results.                                                                                                                                                                                                                                        |         |
| Files Containing Search Query | When true, searches for files that contain the provided search query in their name.                                                                                                                                                                                    | false   |
| Parent Folder Id              | A unique opaque ID for each folder.                                                                                                                                                                                                                                    |         |
| Query                         | A query string to filter results. See [Google's documentation](https://developers.google.com/drive/api/v3/search-files) for query syntax.                                                                                                                              |         |
| Fields                        | Fields to return in the response. For list operations, wrap field names in files(), e.g., files(id,name,mimeType). If unspecified, returns all fields. See [Google's fields parameter documentation](https://developers.google.com/drive/api/guides/fields-parameter). | \*      |
| Page Size                     | The maximum number of results to return. Must be between 1 and 50.                                                                                                                                                                                                     | 20      |
| Page Token                    | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                                                                                                                                |         |
| Fetch All                     | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |

### Search Folders {#searchfolders}

Search for an existing directory by Name

| Input            | Comments                                                                                                                                                                                                                                                               | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Connection to use for Google Drive authorization.                                                                                                                                                                                                                  |         |
| Drive ID         | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive".                                                                                                       |         |
| Search           | Search terms to filter results.                                                                                                                                                                                                                                        |         |
| Parent Folder Id | A unique opaque ID for each folder.                                                                                                                                                                                                                                    |         |
| Fields           | Fields to return in the response. For list operations, wrap field names in files(), e.g., files(id,name,mimeType). If unspecified, returns all fields. See [Google's fields parameter documentation](https://developers.google.com/drive/api/guides/fields-parameter). | \*      |
| Page Size        | The maximum number of results to return. Must be between 1 and 50.                                                                                                                                                                                                     | 20      |
| Page Token       | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                                                                                                                                |         |
| Fetch All        | When true, fetches all pages of results using pagination.                                                                                                                                                                                                              | false   |

### Update File {#updatefile}

Updates a file's content by file id

| Input        | Comments                                                                                                                                                                                                                                                               | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Connection to use for Google Drive authorization.                                                                                                                                                                                                                  |         |
| File ID      | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes.                                                                                                                                                  |         |
| File Content | The binary or text body of the file. Some content examples you can store in Google Drive are images, videos, text, and PDF.                                                                                                                                            |         |
| File Name    | The name of the file.                                                                                                                                                                                                                                                  |         |
| Fields       | Fields to return in the response. For list operations, wrap field names in files(), e.g., files(id,name,mimeType). If unspecified, returns all fields. See [Google's fields parameter documentation](https://developers.google.com/drive/api/guides/fields-parameter). | \*      |
