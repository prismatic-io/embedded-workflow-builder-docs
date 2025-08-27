---
title: Google Cloud Storage Connector
sidebar_label: Google Cloud Storage
description: Manage files in a Google Cloud Platform (GCP) Cloud Storage bucket
---

![Google Cloud Storage](./assets/google-cloud-storage.png#connector-icon)
Manage files in a Google Cloud Platform (GCP) Cloud Storage bucket

## Connections

### Google Cloud Storage Private Key

The Google Cloud Storage component requires a username / private key pair for authentication.
To create a GCP service account, follow directions on https://cloud.google.com/docs/authentication/getting-started.

Be sure to assign the user you just created with the correct permissions.
To access Google Cloud Storage resources, you will need to assign either a resource specific permission, or the Cloud Storage Admin role.
After creating a service account, you will have an option to create a key for the account.
If you are not greeted with this option, click on the service account you just created, and navigate to the 'keys' section.
Here you can click 'Add Key'
This will generate a .json file with **type**, **project_id**, and a dozen other fields.
Use these fields along with your GCP Project Id to create a new connection.

| Input        | Comments                                                   | Default |
| ------------ | ---------------------------------------------------------- | ------- |
| Client Email | The email address of the client you would like to connect. |         |
| Private Key  | The private key of the client you would like to connect.   |         |
| Project Id   | The ID of the project that hosts the storage bucket        |         |

### Google OAuth 2.0

Authenticate requests to Google Cloud Storage using Google OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                            | Default                                               |
| ------------- | --------------------------------------------------- | ----------------------------------------------------- |
| Scopes        |                                                     | https://www.googleapis.com/auth/devstorage.read_write |
| Client ID     |                                                     |                                                       |
| Client Secret |                                                     |                                                       |
| Project Id    | The ID of the project that hosts the storage bucket |                                                       |

## Actions

### Complete Multipart Upload

Completes a multipart upload for a file in Google Cloud Storage

| Input              | Comments                                                                                                                                                                                                                                                                                                                           | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Part Uploads       | A JSON array of part uploads. Each part upload should have a partNumber and a etag property. IMPORTANT: If one of the parts specified in the request is less than 5 MiB and is not the final part in the upload, you get a 400 Bad Request status code and the body of the error response has InvalidArgument in the Code element. |         |
| File Name          | A file is saved in a 'bucket'. This represents the file's path without a leading /                                                                                                                                                                                                                                                 |         |
| Upload ID          | Indicates the multipart upload that this part is associated with. This is returned when the multipart upload is initiated.                                                                                                                                                                                                         |         |
| Destination Bucket | A Google Cloud Storage 'bucket' is a container where files are stored. The destination bucket indicates the bucket containing the file you want to copy. If you are copying files within a single bucket, list the same bucket as the source and destination bucket.                                                               |         |
| Connection         |                                                                                                                                                                                                                                                                                                                                    |         |

### Copy Files

Copy a file from one Google Cloud Storage bucket to another

| Input                 | Comments                                                                                                                                                                                                                                                             | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Source Bucket         | A Google Cloud Storage 'bucket' is a container where files are stored. The source bucket indicates the bucket containing the file you want to copy. If you are copying files within a single bucket, list the same bucket as the source and destination bucket.      |         |
| Destination Bucket    | A Google Cloud Storage 'bucket' is a container where files are stored. The destination bucket indicates the bucket containing the file you want to copy. If you are copying files within a single bucket, list the same bucket as the source and destination bucket. |         |
| Source File Name      | This represents the source file's path. Do not include a leading /.                                                                                                                                                                                                  |         |
| Destination File Name | This represents the destination file's path. Do not include a leading /.                                                                                                                                                                                             |         |
| Connection            |                                                                                                                                                                                                                                                                      |         |

### Create Bucket

Create a new Bucket inside Google Cloud Storage

| Input             | Comments                                                                                                                                                                                                                                           | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                                                                    |         |
| Bucket Name       | Buckets in Google Cloud Storage contain files, and can be configured in the GCP console. Bucket names contain only letters, numbers, and dashes.                                                                                                   |         |
| Multi-Regional    | This flag will determine if your bucket will be available from multiple regions.                                                                                                                                                                   | false   |
| User Project      | Specify the project that the user creating the bucket belongs to.                                                                                                                                                                                  |         |
| Location          | The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to 'US'. See Cloud Storage bucket locations for the authoritative list: https://cloud.google.com/storage/docs/locations |         |
| StorageClass Type | This flag will determine the StorageClass your bucket will use.                                                                                                                                                                                    |         |

### Create Multipart Upload

Create a multipart upload for a file in Google Cloud Storage

| Input              | Comments                                                                                                                                                                                                                                                             | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| File Name          | A file is saved in a 'bucket'. This represents the file's path without a leading /                                                                                                                                                                                   |         |
| Content Type       | The content type of the file. This is used to determine how the file should be handled by the browser.                                                                                                                                                               |         |
| Destination Bucket | A Google Cloud Storage 'bucket' is a container where files are stored. The destination bucket indicates the bucket containing the file you want to copy. If you are copying files within a single bucket, list the same bucket as the source and destination bucket. |         |
| Connection         |                                                                                                                                                                                                                                                                      |         |

### Delete Bucket

Delete an existing Bucket from the Google Cloud Storage

| Input       | Comments                                                                                                                                         | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Bucket Name | Buckets in Google Cloud Storage contain files, and can be configured in the GCP console. Bucket names contain only letters, numbers, and dashes. |         |
| Connection  |                                                                                                                                                  |         |

### Delete File

Delete a file from a Google Cloud Storage bucket

| Input       | Comments                                                                                                                                         | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| File Name   | A file is saved in a 'bucket'. This represents the file's path without a leading /                                                               |         |
| Bucket Name | Buckets in Google Cloud Storage contain files, and can be configured in the GCP console. Bucket names contain only letters, numbers, and dashes. |         |
| Connection  |                                                                                                                                                  |         |

### Download File

Download a file from Google Cloud Storage

| Input       | Comments                                                                                                                                         | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| File Name   | A file is saved in a 'bucket'. This represents the file's path without a leading /                                                               |         |
| Bucket Name | Buckets in Google Cloud Storage contain files, and can be configured in the GCP console. Bucket names contain only letters, numbers, and dashes. |         |
| Connection  |                                                                                                                                                  |         |

### Generate Presigned URL

Generate a presigned URL to upload a file in Google Cloud Storage

| Input           | Comments                                                                                                                                             | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                      |         |
| File Name       | The file name to generate a presigned URL for. This should be the full file name, including any directories. For example, `my-directory/my-file.txt` |         |
| Bucket Name     | Buckets in Google Cloud Storage contain files, and can be configured in the GCP console. Bucket names contain only letters, numbers, and dashes.     |         |
| Expiration Time | This flag will determine the expiration time of the bucket. The value is in seconds.                                                                 | 3600    |

### Get Bucket

Get the information and metadata of an existing Bucket from the Google Cloud Storage

| Input       | Comments                                                                                                                                         | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Bucket Name | Buckets in Google Cloud Storage contain files, and can be configured in the GCP console. Bucket names contain only letters, numbers, and dashes. |         |
| Connection  |                                                                                                                                                  |         |

### Get File

Get the information and metadata of a file from Google Cloud Storage

| Input       | Comments                                                                                                                                         | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| File Name   | A file is saved in a 'bucket'. This represents the file's path without a leading /                                                               |         |
| Bucket Name | Buckets in Google Cloud Storage contain files, and can be configured in the GCP console. Bucket names contain only letters, numbers, and dashes. |         |
| Connection  |                                                                                                                                                  |         |

### List Buckets

List buckets in a Google Cloud Storage bucket

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Files

List files in a Google Cloud Storage bucket

| Input       | Comments                                                                                                                                                                                                                  | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                                                                                                                           |         |
| Bucket Name | Buckets in Google Cloud Storage contain files, and can be configured in the GCP console. Bucket names contain only letters, numbers, and dashes.                                                                          |         |
| Prefix      | List only files prefixed with this string. For example, if you only want files in a directory called 'unprocessed', you can enter 'unprocessed/'. If this is left blank, all files in the selected bucket will be listed. |         |
| Page Token  | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                                                                                   |         |
| Max Results | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 50.                                                                                                           |         |

### Move File

Move a file from one Google Cloud Storage bucket to another

| Input                 | Comments                                                                                                                                                                                                                                                             | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Source Bucket         | A Google Cloud Storage 'bucket' is a container where files are stored. The source bucket indicates the bucket containing the file you want to copy. If you are copying files within a single bucket, list the same bucket as the source and destination bucket.      |         |
| Destination Bucket    | A Google Cloud Storage 'bucket' is a container where files are stored. The destination bucket indicates the bucket containing the file you want to copy. If you are copying files within a single bucket, list the same bucket as the source and destination bucket. |         |
| Source File Name      | This represents the source file's path. Do not include a leading /.                                                                                                                                                                                                  |         |
| Destination File Name | This represents the destination file's path. Do not include a leading /.                                                                                                                                                                                             |         |
| Connection            |                                                                                                                                                                                                                                                                      |         |

### Raw Request

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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Save File

Save a file to Google Cloud Storage

| Input         | Comments                                                                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| File Contents | The contents to write to a file. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step. |         |
| File Name     | A file is saved in a 'bucket'. This represents the file's path without a leading /                                                                 |         |
| Bucket Name   | Buckets in Google Cloud Storage contain files, and can be configured in the GCP console. Bucket names contain only letters, numbers, and dashes.   |         |
| File Metadata | If true, the metadata of the file will be returned after saving the file. Get Access to the bucket is required.                                    | true    |
| Connection    |                                                                                                                                                    |         |

### Upload Part of a Multipart Upload

Upload a part of a multipart upload to Google Cloud Storage

| Input              | Comments                                                                                                                                                                                                                                                             | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Upload ID          | Indicates the multipart upload that this part is associated with. This is returned when the multipart upload is initiated.                                                                                                                                           |         |
| File Name          | A file is saved in a 'bucket'. This represents the file's path without a leading /                                                                                                                                                                                   |         |
| File Contents      | The contents to write to a file. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step.                                                                                                                   |         |
| Part Number        | Uniquely identifies the position of the part within the larger multipart upload. partNumber is an integer with a mimimum value of 1 and a maximum value of 10,000.                                                                                                   |         |
| Destination Bucket | A Google Cloud Storage 'bucket' is a container where files are stored. The destination bucket indicates the bucket containing the file you want to copy. If you are copying files within a single bucket, list the same bucket as the source and destination bucket. |         |
| Connection         |                                                                                                                                                                                                                                                                      |         |
