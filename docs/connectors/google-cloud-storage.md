---
title: Google Cloud Storage Connector
sidebar_label: Google Cloud Storage
description: Manage files in a Google Cloud Platform (GCP) Cloud Storage bucket
---

![Google Cloud Storage](./assets/google-cloud-storage.png#connector-icon)
[Google Cloud Storage](https://cloud.google.com/storage) is Google's cloud file/blob storage system.
The Google Cloud Storage component allows you to create, download, modify, list, and delete files stored in a Google Cloud Storage bucket.

## API Documentation

This component was built using the [Google Cloud Storage JSON API](https://cloud.google.com/storage/docs/json_api)

## Connections

### Google Cloud Storage Private Key {#privatekey}

Authenticate requests to Google Cloud Storage using a Private Key

To authenticate with Google Cloud Storage, a service account with a private key is required.

For more information on creating service accounts, refer to [Google Cloud's authentication documentation](https://cloud.google.com/docs/authentication/getting-started).

#### Prerequisites

- Access to a Google Cloud Platform (GCP) project
- Permissions to create service accounts and assign roles

#### Setup Steps

To create a service account and generate a private key:

1. Navigate to the [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) page in the Google Cloud Console
2. Select a project or create a new one
3. Click **Create Service Account**
4. Enter a service account name and description, then click **Create and Continue**
5. Assign the appropriate role:
   - For full access to Cloud Storage: Select **Cloud Storage Admin**
   - For specific permissions: Select a resource-specific role based on requirements
6. Click **Continue**, then **Done**
7. In the service accounts list, click on the newly created service account
8. Navigate to the **Keys** tab
9. Click **Add Key** and select **Create new key**
10. Select **JSON** as the key type and click **Create**
11. A JSON file will be downloaded containing the service account credentials

#### Configure the Connection

The downloaded JSON file contains several fields including **type**, **project_id**, **private_key**, **client_email**, and others.

Enter the following values from the JSON file into the connection configuration:

- Extract the required fields from the JSON file
- Enter the **Project ID** (GCP Project ID)
- Enter the service account credentials from the JSON file

:::info Service Account Permissions
Ensure the service account has the appropriate permissions to access the Cloud Storage resources needed for the integration. Resource-specific permissions can be used for more granular access control.
:::

| Input        | Comments                                                                                        | Default |
| ------------ | ----------------------------------------------------------------------------------------------- | ------- |
| Client Email | The service account email address from the JSON key file.                                       |         |
| Private Key  | The private key from the JSON key file. Include the entire key including BEGIN and END markers. |         |
| Project ID   | The ID of the Google Cloud Platform project that hosts the storage bucket.                      |         |

### Google OAuth 2.0 {#googleoauth}

Authenticate requests to Google Cloud Storage using Google OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                | Default                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Scopes        | OAuth scopes for Google Cloud Storage. See https://developers.google.com/identity/protocols/oauth2/scopes#storage for available scopes. | https://www.googleapis.com/auth/devstorage.read_write |
| Client ID     | The Client ID from the Google Cloud Console OAuth credentials.                                                                          |                                                       |
| Client Secret | The Client Secret from the Google Cloud Console OAuth credentials.                                                                      |                                                       |
| Project ID    | The ID of the Google Cloud Platform project that hosts the storage bucket.                                                              |                                                       |

## Actions

### Complete Multipart Upload {#completemultipartupload}

Completes a multipart upload for a file in Google Cloud Storage

| Input              | Comments                                                                                                                                                                                           | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Part Uploads       | A JSON array of part uploads. Each part must have a partNumber and etag property. <strong>Note:</strong> Parts less than 5 MiB that are not the final part will result in a 400 Bad Request error. |         |
| File Name          | The file path within the bucket. Do not include a leading slash.                                                                                                                                   |         |
| Upload ID          | The unique identifier for the multipart upload. This value is returned when the multipart upload is initiated.                                                                                     |         |
| Destination Bucket | The name of the bucket where the file will be copied. When copying files within a single bucket, use the same bucket name for both source and destination.                                         |         |
| Connection         |                                                                                                                                                                                                    |         |

### Copy Files {#copyfile}

Copy a file from one Google Cloud Storage bucket to another

| Input                 | Comments                                                                                                                                                   | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Source Bucket         | The name of the bucket containing the file to copy. When copying files within a single bucket, use the same bucket name for both source and destination.   |         |
| Destination Bucket    | The name of the bucket where the file will be copied. When copying files within a single bucket, use the same bucket name for both source and destination. |         |
| Source File Name      | The source file path within the bucket. Do not include a leading slash.                                                                                    |         |
| Destination File Name | The destination file path within the bucket. Do not include a leading slash.                                                                               |         |
| Connection            |                                                                                                                                                            |         |

### Create Bucket {#createbucket}

Create a new Bucket inside Google Cloud Storage

| Input          | Comments                                                                                                                                                 | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                          |         |
| Bucket Name    | The name of the Google Cloud Storage bucket. Bucket names contain only lowercase letters, numbers, hyphens, and underscores.                             |         |
| Multi-Regional | When true, the bucket will be available from multiple regions.                                                                                           | false   |
| User Project   | The project ID that the user creating the bucket belongs to.                                                                                             |         |
| Location       | The geographic location where the bucket will be created. Defaults to 'US'. See https://cloud.google.com/storage/docs/locations for available locations. |         |
| Storage Class  | The storage class for the bucket. See https://cloud.google.com/storage/docs/storage-classes for details.                                                 |         |

### Create Multipart Upload {#createmultipartupload}

Create a multipart upload for a file in Google Cloud Storage

| Input              | Comments                                                                                                                                                   | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| File Name          | The file path within the bucket. Do not include a leading slash.                                                                                           |         |
| Content Type       | The MIME type of the file (e.g., image/png, application/pdf, text/plain).                                                                                  |         |
| Destination Bucket | The name of the bucket where the file will be copied. When copying files within a single bucket, use the same bucket name for both source and destination. |         |
| Connection         |                                                                                                                                                            |         |

### Delete Bucket {#deletebucket}

Delete an existing Bucket from the Google Cloud Storage

| Input       | Comments                                                                                                                     | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- |
| Bucket Name | The name of the Google Cloud Storage bucket. Bucket names contain only lowercase letters, numbers, hyphens, and underscores. |         |
| Connection  |                                                                                                                              |         |

### Delete File {#deletefile}

Delete a file from a Google Cloud Storage bucket

| Input       | Comments                                                                                                                     | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- |
| File Name   | The file path within the bucket. Do not include a leading slash.                                                             |         |
| Bucket Name | The name of the Google Cloud Storage bucket. Bucket names contain only lowercase letters, numbers, hyphens, and underscores. |         |
| Connection  |                                                                                                                              |         |

### Download File {#downloadfile}

Download a file from Google Cloud Storage

| Input       | Comments                                                                                                                     | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- |
| File Name   | The file path within the bucket. Do not include a leading slash.                                                             |         |
| Bucket Name | The name of the Google Cloud Storage bucket. Bucket names contain only lowercase letters, numbers, hyphens, and underscores. |         |
| Connection  |                                                                                                                              |         |

### Generate Presigned URL {#generatepresignedurl}

Generate a presigned URL to upload a file in Google Cloud Storage

| Input           | Comments                                                                                                                                             | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                      |         |
| File Name       | The file name to generate a presigned URL for. This should be the full file name, including any directories. For example, `my-directory/my-file.txt` |         |
| Bucket Name     | The name of the Google Cloud Storage bucket. Bucket names contain only lowercase letters, numbers, hyphens, and underscores.                         |         |
| Expiration Time | The expiration time for the presigned URL in seconds. Defaults to 3600 (1 hour).                                                                     | 3600    |

### Get Bucket {#getbucket}

Get the information and metadata of an existing Bucket from the Google Cloud Storage

| Input       | Comments                                                                                                                     | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- |
| Bucket Name | The name of the Google Cloud Storage bucket. Bucket names contain only lowercase letters, numbers, hyphens, and underscores. |         |
| Connection  |                                                                                                                              |         |

### Get File {#getfile}

Get the information and metadata of a file from Google Cloud Storage

| Input       | Comments                                                                                                                     | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- |
| File Name   | The file path within the bucket. Do not include a leading slash.                                                             |         |
| Bucket Name | The name of the Google Cloud Storage bucket. Bucket names contain only lowercase letters, numbers, hyphens, and underscores. |         |
| Connection  |                                                                                                                              |         |

### List Buckets {#listbuckets}

List buckets in a Google Cloud Storage project

| Input             | Comments                                                                | Default |
| ----------------- | ----------------------------------------------------------------------- | ------- |
| Fetch All Results | When true, automatically fetches all pages of results using pagination. | false   |
| Connection        |                                                                         |         |

### List Files {#listfilesv2}

List files in a Google Cloud Storage bucket

| Input             | Comments                                                                                                                                                            | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                     |         |
| Bucket Name       | The name of the Google Cloud Storage bucket. Bucket names contain only lowercase letters, numbers, hyphens, and underscores.                                        |         |
| Prefix            | Filter results to only files with names starting with this prefix. For example, 'unprocessed/' returns only files in that directory. Leave blank to list all files. |         |
| Page Token        | The pagination token returned by a previous request. Use this to retrieve the next page of results.                                                                 |         |
| Max Results       | The maximum number of results to return per page. Must be between 1 and 50.                                                                                         |         |
| Fetch All Results | When true, automatically fetches all pages of results using pagination.                                                                                             | false   |

### Move File {#movefile}

Move a file from one Google Cloud Storage bucket to another

| Input                 | Comments                                                                                                                                                   | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Source Bucket         | The name of the bucket containing the file to copy. When copying files within a single bucket, use the same bucket name for both source and destination.   |         |
| Destination Bucket    | The name of the bucket where the file will be copied. When copying files within a single bucket, use the same bucket name for both source and destination. |         |
| Source File Name      | The source file path within the bucket. Do not include a leading slash.                                                                                    |         |
| Destination File Name | The destination file path within the bucket. Do not include a leading slash.                                                                               |         |
| Connection            |                                                                                                                                                            |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Google Cloud Storage

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/storage/v1/b/[BUCKET_NAME]/o/[OBJECT_NAME]), The base URL is already included (https://storage.googleapis.com).                                                            |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Save File {#savefile}

Save a file to Google Cloud Storage

| Input         | Comments                                                                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| File Contents | The contents to write to a file. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step. |         |
| File Name     | The file path within the bucket. Do not include a leading slash.                                                                                   |         |
| Bucket Name   | The name of the Google Cloud Storage bucket. Bucket names contain only lowercase letters, numbers, hyphens, and underscores.                       |         |
| File Metadata | When true, returns the file metadata after saving. Read access to the bucket is required.                                                          | true    |
| Connection    |                                                                                                                                                    |         |

### Upload Part of a Multipart Upload {#uploadpartofamultipartupload}

Upload a part of a multipart upload to Google Cloud Storage

| Input              | Comments                                                                                                                                                   | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Upload ID          | The unique identifier for the multipart upload. This value is returned when the multipart upload is initiated.                                             |         |
| File Name          | The file path within the bucket. Do not include a leading slash.                                                                                           |         |
| File Contents      | The contents to write to a file. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step.         |         |
| Part Number        | The position of this part within the multipart upload. Must be an integer between 1 and 10,000.                                                            |         |
| Destination Bucket | The name of the bucket where the file will be copied. When copying files within a single bucket, use the same bucket name for both source and destination. |         |
| Connection         |                                                                                                                                                            |         |
