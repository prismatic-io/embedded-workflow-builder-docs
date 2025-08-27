---
title: Google Drive Connector
sidebar_label: Google Drive
description: Manage files in Google Drive
---

![Google Drive](./assets/google-drive.png#connector-icon)
Manage files in Google Drive

## Connections

### OAuth2

OAuth2 Connection

The Google Drive component authenticates requests through the Google Cloud Platform (GCP) OAuth 2.0 service.
You'll need to create a GCP OAuth 2.0 app so your integration can authenticate and perform Google Drive tasks on your customers' behalf.

To create a Google Drive OAuth 2.0 app, first make sure you have a Google Developer account - you can sign up at [https://console.cloud.google.com/](https://console.cloud.google.com/).
Then:

1. Open up the Google Drive API console - [https://console.cloud.google.com/apis/api/drive.googleapis.com](https://console.cloud.google.com/apis/api/drive.googleapis.com)
1. Click **CREATE PROJECT** if you would like to create a new GCP project, or select an existing project.
1. You will be prompted to enable **Google Drive API** for your project. Click **ENABLE**.
1. On the sidebar, select **Credentials**.
1. An OAuth 2.0 app includes a "Consent Screen" (the page that asks "Do you want to allow (Your Company) to access Google Drive on your behalf?"). Click **CONFIGURE CONSENT SCREEN**.
   1. Your app will be externally available to your customers, so choose a **User Type** of **External**.
   1. Fill out the OAuth consent screen with an app name (your company or product's name), support email, app logo, domain, etc.
   1. You can ignore domains for now.
   1. On the next page, add the scope `https://www.googleapis.com/auth/drive`.
   1. Enter some **test users** for your testing purposes.
      Your app will only work for those testing users until it is "verified" by Google.
      When you are ready for verification (they verify your privacy policy statement, etc), click **PUBLISH APP** on the **OAuth consent screen**.
      That'll allow your customers to authorize your integration to access their Google Drive.
1. Once your "Consent Screen" is configured open the **Credentials** page from the sidebar again.
1. Click **+CREATE CREDENTIALS** and select **OAuth client ID**.
   1. Under **Application type** select **Web application**.
   1. Under **Authorized redirect URIs** enter the OAuth 2.0 callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   1. Click **CREATE**.
1. Take note of the **Client ID** and **Client Secret** that are generated.

:::info
Make sure to **publish** your OAuth 2.0 app after you've tested it so users outside of your _test users_ can authorize your integration to interact with Google Drive on their behalf.
:::

Now that you have a **Client ID** and **Client Secret**, add Google Drive step to your flow.
Open the **Configuration Wizard Designer** by clicking **Configuration Wizard**, select your **Google Drive Connection** and enter your client ID and secret.
You will probably want to keep the default [Google Drive scope](https://developers.google.com/identity/protocols/oauth2/scopes#drive), `https://www.googleapis.com/auth/drive`.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                | Default                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Scopes        | Space delimited listing of scopes. https://developers.google.com/identity/protocols/oauth2/scopes#drive | https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.activity.readonly |
| Client ID     | The Google Drive app's Client Identifier.                                                               |                                                                                               |
| Client Secret | The Google Drive app's Client Secret.                                                                   |                                                                                               |

## Triggers

### Drive Activity

Checks for Google Drive activity. By default yields activity on personal 'My Drive'. For activity on a shared drive, specify a shared drive's folder's 'Folder ID'.

| Input                  | Comments                                                                                                                       | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Trigger Events         | The event types the trigger will poll.                                                                                         |         |
| File ID                | Return activities for this Drive item.                                                                                         |         |
| Folder or Drive ID     | Return activities for this Drive or folder, plus all children and descendants. You may supply an array of drive or folder IDs. |         |
| Consolidation Strategy | Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated. |         |
| Connection             | The Connection to use for authorization.                                                                                       |         |

### New and Updated Files

Checks for new and updated files in a specified drive (or all drives, if omitted) on a configured schedule.

| Input      | Comments                                                                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for authorization.                                                                                                                         |         |
| Drive ID   | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive". |         |

### Push Notification Webhook

Receive and validate webhook requests from Google Drive for webhooks you configure.

## Actions

### Copy File

Copy a file by file id

| Input      | Comments                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for authorization.                                                                              |         |
| File ID    | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes. |         |
| File Name  | Provide a string for the name of the new file.                                                                        |         |
| Folder ID  | A unique opaque ID for each folder.                                                                                   |         |

### Create File

Create a new file with content and metadata

| Input            | Comments                                                                                                                    | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Connection to use for authorization.                                                                                    |         |
| Parent Folder Id | A unique opaque ID for each folder.                                                                                         |         |
| File Content     | The binary or text body of the file. Some content examples you can store in Google Drive are images, videos, text, and PDF. |         |
| File Name        | Provide a string for the name of the new file.                                                                              |         |
| Fields           | Provide a comma separated list of values to be returned in the response.                                                    | \*      |

### Create Folder

Create a directory file

| Input            | Comments                                         | Default |
| ---------------- | ------------------------------------------------ | ------- |
| Connection       | The Connection to use for authorization.         |         |
| Folder Name      | Provide a string for the name of the new folder. |         |
| Parent Folder Id | A unique opaque ID for each folder.              |         |

### Create Webhook for Drive

Create a webhook to receive notifications of changes with a Google Drive

| Input           | Comments                                                                                                                                                         | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Connection to use for authorization.                                                                                                                         |         |
| Drive ID        | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive". |         |
| Endpoint        | The URL to send notifications to                                                                                                                                 |         |
| Expiration Time | The time at which the webhook will expire as a UNIX timestamp in milliseconds. Defaults to 1 hour from now, and can be set to a maximum of 1 day from now.       |         |

### Create Webhook for File or Folder

Create a webhook to receive notifications of changes for a file or folder

| Input             | Comments                                                                                                                                                   | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Connection to use for authorization.                                                                                                                   |         |
| File or Folder ID |                                                                                                                                                            |         |
| Endpoint          | The URL to send notifications to                                                                                                                           |         |
| Expiration Time   | The time at which the webhook will expire as a UNIX timestamp in milliseconds. Defaults to 1 hour from now, and can be set to a maximum of 1 day from now. |         |

### Delete File

Delete a file by file id

| Input      | Comments                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for authorization.                                                                              |         |
| File ID    | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes. |         |
| Fields     | Provide a comma separated list of values to be returned in the response.                                              | \*      |

### Delete Webhook

Stop a webhook channel from sending notifications

| Input       | Comments                                 | Default |
| ----------- | ---------------------------------------- | ------- |
| Connection  | The Connection to use for authorization. |         |
| Webhook ID  | Returned when you create a webhook       |         |
| Resource ID | Returned when you create a webhook       |         |

### Empty Trash

Empty the trash of deleted files

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Connection to use for authorization. |         |

### Get About

Gets information about the user's Drive, and system capabilities

| Input      | Comments                                                                 | Default |
| ---------- | ------------------------------------------------------------------------ | ------- |
| Connection | The Connection to use for authorization.                                 |         |
| Fields     | Provide a comma separated list of values to be returned in the response. | \*      |

### Get Current User

Get the information and metadata of the user that is currently logged in

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Connection to use for authorization. |         |

### Get File

Gets a file's metadata and content by ID.

| Input                 | Comments                                                                                                                                                                                                                           | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Connection to use for authorization.                                                                                                                                                                                           |         |
| File ID               | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes.                                                                                                              |         |
| Preferred Export Type | Provide the type of file you want to export as. If the value you provided is not compatible, we will attempt the first option available in the objects export types. This value is only required when exporting a non binary file. |         |

### Get File Metadata

Gets a file's metadata and content by ID.

| Input      | Comments                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for authorization.                                                                              |         |
| File ID    | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes. |         |
| Fields     | Provide a comma separated list of values to be returned in the response.                                              |         |

### List Changes

List changes made to files in your Google Drive since the last time this step ran (up to 1000)

| Input      | Comments                                                                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for authorization.                                                                                                                         |         |
| Drive ID   | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive". |         |

### List Drives

List all drives

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Connection | The Connection to use for authorization. |         |

### List Files

Lists all available files and directories

| Input      | Comments                                                                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for authorization.                                                                                                                         |         |
| Drive ID   | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive". |         |
| Page Size  | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 50.                                                  | 20      |
| Page Token | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                          |         |
| Fields     | Provide a comma separated list of values to be returned in the response.                                                                                         | \*      |
| Query      | Provide a query to be used in the request. Refer to the Google documentation for examples: https://developers.google.com/drive/api/v3/search-files               |         |

### List File's Export Types

List the available export types of a file by ID.

| Input      | Comments                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for authorization.                                                                              |         |
| File ID    | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes. |         |

### List Folders

Lists all available directories

| Input      | Comments                                                                                                                                                         | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for authorization.                                                                                                                         |         |
| Drive ID   | The ID of a shared drive to search for the file in. If not provided, the search will be performed across all drives. Enter 'my-drive' to search only "My Drive". |         |
| Page Size  | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 50.                                                  | 20      |
| Page Token | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                          |         |
| Fields     | Provide a comma separated list of values to be returned in the response.                                                                                         | \*      |
| Folder ID  | A unique opaque ID for each folder.                                                                                                                              |         |

### Move File

Move a file by file ID

| Input      | Comments                                                                                                              | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Connection to use for authorization.                                                                              |         |
| File ID    | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes. |         |
| Folder ID  | A unique opaque ID for each folder.                                                                                   |         |

### Query Drive Activity

Query past activity in Google Drive.

| Input                  | Comments                                                                                                                       | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Connection to use for authorization.                                                                                       |         |
| File ID                | Return activities for this Drive item.                                                                                         |         |
| Folder or Drive ID     | Return activities for this Drive or folder, plus all children and descendants.                                                 |         |
| Page Token             | Specify the pagination token that's returned by a previous request to retrieve the next page of results                        |         |
| Filter                 | The filtering for items returned from this query request.                                                                      |         |
| Consolidation Strategy | Details on how to consolidate related actions that make up the activity. If not set, then related actions aren't consolidated. |         |
| Fetch All              | Whether to fetch all results or just the first page. Defaults to false.                                                        | false   |

### Raw Request

Send raw HTTP request to Google Drive

| Input                   | Comments                                                                                                                                                                                                          | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Connection to use for authorization.                                                                                                                                                                          |         |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                              | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                               | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                  | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                               | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                     | false   |

### Search Files

Search for an existing file by Name

| Input                         | Comments                                                                                                                                           | Default |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                    | The Connection to use for authorization.                                                                                                           |         |
| Search                        | Provide a string of text to perform a search with.                                                                                                 |         |
| Files Containing Search Query | Wether or not to search for files that contains the provided 'searchQuery' in their name.                                                          | false   |
| Page Size                     | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 50.                                    | 20      |
| Page Token                    | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                            |         |
| Fields                        | Provide a comma separated list of values to be returned in the response.                                                                           | \*      |
| Query                         | Provide a query to be used in the request. Refer to the Google documentation for examples: https://developers.google.com/drive/api/v3/search-files |         |
| Parent Folder Id              | A unique opaque ID for each folder.                                                                                                                |         |

### Search Folders

Search for an existing directory by Name

| Input            | Comments                                                                                                        | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Connection to use for authorization.                                                                        |         |
| Search           | Provide a string of text to perform a search with.                                                              |         |
| Page Size        | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 50. | 20      |
| Page Token       | Specify the pagination token that's returned by a previous request to retrieve the next page of results         |         |
| Fields           | Provide a comma separated list of values to be returned in the response.                                        | \*      |
| Parent Folder Id | A unique opaque ID for each folder.                                                                             |         |

### Update File

Updates a file's content by file id

| Input        | Comments                                                                                                                    | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Connection to use for authorization.                                                                                    |         |
| File ID      | A unique opaque ID for each file. File IDs are stable throughout the life of the file, even if the file name changes.       |         |
| File Content | The binary or text body of the file. Some content examples you can store in Google Drive are images, videos, text, and PDF. |         |
| File Name    | Provide a string for the name of the new file.                                                                              |         |
| Fields       | Provide a comma separated list of values to be returned in the response.                                                    | \*      |
