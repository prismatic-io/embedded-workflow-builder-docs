---
title: Amazon S3 Connector
sidebar_label: Amazon S3
description: Manage files within an Amazon (AWS) S3 bucket
---

![Amazon S3](./assets/aws-s3.png#connector-icon)
Manage files within an Amazon (AWS) S3 bucket

## Connections

### AWS Role ARN

Connect to AWS using an assumed role

To enable the IAM role authentication begin by logging into the [AWS Console](https://aws.amazon.com/) and navigate to Identity and Access Management (IAM).

To create an ARN user and generate credentials:

1. Navigate to Users and select **Create User**.

- Provide a User name and check the box providing them user access to the AWS Management Console if needed.
- Once completed with the User creation, copy the ARN provided in the summary for a later step.

2. To obtain the ARN for an existing User, click on the designated username from the Users page and the ARN will be provided in the summary section.
3. From the summary section, select **Create access key**

- Select **Third-party service** as the access key type and select next.
- Set a description and select **create access key**.
- Copy the **Access Key** and **Secret access key** and enter those into the connection configuration of your integration along with the ARN.

To create and assign a user a role:

1. Navigate to Roles and select **Create Role**.

- Select **Custom Trust Policy** for the Trusted entity types
- Copy the following statement into the statement console. Making sure to replace the **ARN** with the user's actual ARN from the previous section

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "ARN"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

- When adding permissions provide the **AmazonS3FullAccess** permission
- Complete remaining steps and select **Create Role**

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

### AWS S3 Access Key and Secret

Authenticates requests to AWS S3 using an API Key and Secret.

An AWS IAM [access key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) is required to interact with Amazon S3.
Make sure that the key pair you generate in AWS has proper permissions to the S3 resources you want to access.
Read more about S3 IAM actions in the [AWS docs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html).

To create an IAM access key pair:

1. Sign in to the [AWS Console](https://aws.amazon.com/) and navigate to **Identity and Access Management (IAM)**
2. Under the **Access Keys** section select **Create access key**
3. Once created copy the **Access Key** and **Secret access key** and enter them into the connection configuration of your integration.

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

## Triggers

### Webhook

Trigger to handle SNS subscription for S3 event notifications

## Actions

### Abort Multipart Upload

Abort a multipart upload

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |         |
| Upload ID                 | Multipart upload ID                                                                                                                                                       |         |

### Bucket SNS Event Trigger Configuration

Add events to send notifications to SNS Topic

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| SNS Topic ARN             | The Amazon Resource Name (ARN) of the topic.                                                                                                                              |         |
| Event                     | S3 Bucket change event type to trigger the webhook                                                                                                                        |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Event Notification Name   | Provide a string for the name of the event notification.                                                                                                                  |         |
| Bucket Owner Account ID   | Provide the AWS Account ID of the bucket owner. It can be found in the account settings of the AWS console, or can be retrieved using the 'Get Current Account' action.   |         |

### Complete Multipart Upload

Complete a multipart upload

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |         |
| Upload ID                 | Multipart upload ID                                                                                                                                                       |         |
| Parts                     | Use the List Parts action to get the list of parts. Reference the 'Parts' field from the List Parts action output at the input for this field.                            |         |

### Copy Object

Copy an object in S3 from one location to another

| Input                     | Comments                                                                                                                                                                                                                                                 | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                  |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                                                                                                |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                                                              |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                                                   |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                                                                 |         |
| Source Bucket Name        | An Amazon S3 'bucket' is a container where files are stored. The source bucket indicates the bucket containing the file you want to copy. If you are copying files within a single bucket, list the same bucket as the source and destination bucket.    |         |
| Destination Bucket Name   | An Amazon S3 'bucket' is a container where files are stored. The destination bucket indicates the bucket where you want a file to be stored. If you are copying files within a single bucket, list the same bucket as the source and destination bucket. |         |
| Source Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the source object's key (file path). Do not include a leading /.                                                                                                                  |         |
| Destination Key           | An object in S3 is a file that is saved in a 'bucket'. This represents the destination object's key (file path). Do not include a leading /.                                                                                                             |         |
| ACL Permissions           | A set of canned ACL permissions to apply to the object. See https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl                                                                                                           |         |

### Create Multipart Upload

Create a multipart upload

| Input                     | Comments                                                                                                                                                                                             | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                              |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                                            |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                          |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                               |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                             |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes.                            |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                     |         |
| Object Tags               | Objects in an S3 bucket can be optionally tagged so you can filter for files more easily. For example, you may want to tag customers with a key of 'Customer Name' and value of 'Mars Missions Corp' |         |
| ACL Permissions           | A set of canned ACL permissions to apply to the object. See https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl                                                       |         |

### Create SNS Topic For S3 Event Notification

Create an Amazon SNS Topic to be used with S3 Event Notifications

| Input                     | Comments                                                                                                                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                |         |
| Name                      | Provide a string for the name of the topic.                                                                                                                            |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.              |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |         |

### Delete Bucket

Deletes the S3 bucket. All objects in the bucket must be deleted before the bucket itself can be deleted

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |

### Delete Object

Delete an Object within an S3 Bucket

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |         |

### Delete Objects

Delete multiple objects from a bucket

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Keys               | A list of object keys to delete. These are the file paths of the objects you want to delete. Do not include a leading /.                                                  |         |

### Generate Presigned URL

Generate a presigned URL that can be used to upload or download an object in S3

| Input                       | Comments                                                                                                                                                                  | Default  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| AWS Region                  | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |          |
| Connection                  | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |          |
| Dynamic Access Key ID       | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |          |
| Dynamic Secret Access Key   | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |          |
| Dynamic Session Token       | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |          |
| Bucket Name                 | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |          |
| Object Key                  | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |          |
| Action (Download or Upload) | Should this URL allow a user to upload or download an object?                                                                                                             | download |
| Expiration Seconds          | This presigned URL will expire in this many seconds                                                                                                                       | 3600     |

### Generate Presigned URL for Multipart Uploads

Generate presigned URL's that can be used to upload or download an object in S3

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |         |
| Urls to Generate          | The amount of urls to generate                                                                                                                                            | 5       |
| Upload ID                 | Multipart upload ID                                                                                                                                                       |         |
| Expiration Seconds        | This presigned URL will expire in this many seconds                                                                                                                       | 3600    |

### Get Bucket Location

Get the location (AWS region) of a bucket by name

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |

### Get Bucket Notification Configuration

Returns the notification configuration of a bucket

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |

### Get Current Account

Get the current AWS account

| Input                     | Comments                                                                                                                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.              |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |         |

### Get Object

Get the contents of an object

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |         |

### Get Object Attributes

Retrieves all the metadata from an object without returning the object itself

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |         |
| Object Attributes         | Specifies the fields at the root level that you want returned in the response. Fields that you do not specify are not returned.                                           |         |
| Version ID                | The version ID for the object whose metadata you want to retrieve.                                                                                                        |         |

### Get Object Lock Configuration

Gets the Object Lock configuration for a bucket

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |

### Get Object Retention

Retrieves an object's retention settings

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |         |
| Version ID                | The version ID for the object whose retention settings you want to retrieve.                                                                                              |         |

### Head Bucket

Determine if a bucket exists and if you have permission to access it

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |

### Head Object

Retrieve metadata from an object without returning the object itself

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |         |

### List Buckets

List all buckets in an AWS account

| Input                     | Comments                                                                                                                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.              |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |         |

### List Multipart Uploads

Lists in-progress multipart uploads in a bucket

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |

### List Objects

List Objects in a Bucket

| Input                     | Comments                                                                                                                                                                                                                    | Default |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                     |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                                                                   |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                                 |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                      |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                                    |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                                   |         |
| Prefix                    | List only objects prefixed with this string. For example, if you only want files in a directory called 'unprocessed', you can enter 'unprocessed/'. If this is left blank, all files in the selected bucket will be listed. |         |
| Max Keys                  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 1000.                                                                                                             |         |
| Continuation Token        | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                                                                                     |         |
| Include Metadata          | By default, this action returns a list of object keys. When this is set to true, additional metadata about each object is returned, along with pagination information.                                                      | false   |

### List Parts

List parts of a multipart upload

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |         |
| Upload ID                 | Multipart upload ID                                                                                                                                                       |         |

### Put Bucket Notification Configuration

Replace an existing bucket notification configuration with a new one

| Input                          | Comments                                                                                                                                                                  | Default                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Region                     | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |                                                                                                                                                                                                                                                                                                                                                               |
| Connection                     | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |                                                                                                                                                                                                                                                                                                                                                               |
| Dynamic Access Key ID          | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |                                                                                                                                                                                                                                                                                                                                                               |
| Dynamic Secret Access Key      | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |                                                                                                                                                                                                                                                                                                                                                               |
| Dynamic Session Token          | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |                                                                                                                                                                                                                                                                                                                                                               |
| Bucket Name                    | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |                                                                                                                                                                                                                                                                                                                                                               |
| Topic Configurations           | List of Topic configurations to be added to the bucket notification configuration.                                                                                        | <code>[<br /> {<br /> "Id": "topic-1",<br /> "TopicArn": "arn:aws:sns:us-west-2:123456789012:mytopic",<br /> "Events": [<br /> "s3:ObjectCreated:*"<br /> ],<br /> "Filter": {<br /> "Key": {<br /> "FilterRules": [<br /> {<br /> "Name": "prefix",<br /> "Value": "images/"<br /> }<br /> ]<br /> }<br /> }<br /> }<br />]</code>                           |
| Queue Configurations           | List of Queue configurations to be added to the bucket notification configuration.                                                                                        | <code>[<br /> {<br /> "Id": "queue-1",<br /> "QueueArn": "arn:aws:sqs:us-west-2:123456789012:myqueue",<br /> "Events": [<br /> "s3:ObjectCreated:*"<br /> ],<br /> "Filter": {<br /> "Key": {<br /> "FilterRules": [<br /> {<br /> "Name": "prefix",<br /> "Value": "images/"<br /> }<br /> ]<br /> }<br /> }<br /> }<br />]</code>                           |
| Lambda Function Configurations | List of Lambda Function configurations to be added to the bucket notification configuration.                                                                              | <code>[<br /> {<br /> "Id": "lambda-1",<br /> "LambdaFunctionArn": "arn:aws:lambda:us-west-2:123456789012:function:my-function",<br /> "Events": [<br /> "s3:ObjectCreated:*"<br /> ],<br /> "Filter": {<br /> "Key": {<br /> "FilterRules": [<br /> {<br /> "Name": "prefix",<br /> "Value": "images/"<br /> }<br /> ]<br /> }<br /> }<br /> }<br />]</code> |
| EventBridge Configuration      | EventBridge configuration to be added to the bucket notification configuration.                                                                                           | <code>{<br /> "Id": "event-bridge-1",<br /> "EventBridgeArn": "arn:aws:eventbridge:us-west-2:123456789012:myeventbridge",<br /> "Events": [<br /> "s3:ObjectCreated:*"<br /> ],<br /> "Filter": {<br /> "Key": {<br /> "FilterRules": [<br /> {<br /> "Name": "prefix",<br /> "Value": "images/"<br /> }<br /> ]<br /> }<br /> }<br />}</code>                |

### Put Object

Write an object to S3

| Input                     | Comments                                                                                                                                                                                             | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                              |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                                            |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                          |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                               |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                             |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes.                            |         |
| File Contents             | The contents to write to a file. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step.                                                   |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                     |         |
| Object Tags               | Objects in an S3 bucket can be optionally tagged so you can filter for files more easily. For example, you may want to tag customers with a key of 'Customer Name' and value of 'Mars Missions Corp' |         |
| ACL Permissions           | A set of canned ACL permissions to apply to the object. See https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl                                                       |         |

### Put Object Lock Configuration

Places an Object Lock configuration on the specified bucket

| Input                     | Comments                                                                                                                                                                            | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                             |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                           |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                         |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.              |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                            |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes.           |         |
| Default Retention Mode    | The default Object Lock retention mode you want to apply to new objects placed in the specified bucket. Must be used with either Default Retention Days or Default Retention Years. |         |
| Default Retention Days    | The number of days that you want to specify for the default retention period. You can specify either Default Retention Days or Default Retention Years, but not both.               |         |
| Default Retention Years   | The number of years that you want to specify for the default retention period. You can specify either Default Retention Days or Default Retention Years, but not both.              |         |

### Put Object Retention

Places an Object Retention configuration on an object

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |         |
| Retention Mode            | Retention mode for the specified object. Required when Retain Until Date is set.                                                                                          |         |
| Retain Until Date         | The date and time when you want the specified Object Retention configuration to expire. Required when using Retention Mode.                                               |         |
| Version ID                | The version ID for the object that you want to apply this Object Retention configuration to.                                                                              |         |

### Subscribe to SNS Topic

Subscribe to an Amazon SNS Topic for S3 Event Notifications

| Input                     | Comments                                                                                                                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                |         |
| SNS Topic ARN             | The Amazon Resource Name (ARN) of the topic.                                                                                                                           |         |
| Webhook Endpoint          | The endpoint that you want to trigger when an S3 event occurs.                                                                                                         |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.              |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |         |

### Unsubscribe from a SNS Topic

Unsubscribe from an Amazon SNS Topic for S3 Event Notifications

| Input                     | Comments                                                                                                                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                |         |
| Subscription Arn          | The unique identifier for a topic subscription                                                                                                                         |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.              |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |         |

### Update SNS Topic Policy For S3 Event Notification

Update an Amazon SNS Topic Policy to grant S3 permission to publish

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| SNS Topic ARN             | The Amazon Resource Name (ARN) of the topic.                                                                                                                              |         |
| Bucket Owner Account ID   | Provide the AWS Account ID of the bucket owner. It can be found in the account settings of the AWS console, or can be retrieved using the 'Get Current Account' action.   |         |

### Upload Part

Upload a chunk of a multipart file upload

| Input                     | Comments                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                 |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                  |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes. |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                          |         |
| Upload ID                 | Multipart upload ID                                                                                                                                                       |         |
| Part Number               | Part number of part being uploaded. This is a positive integer between 1 and 10,000.                                                                                      |         |
| File Chunk                | The file data chunk to upload. This can be binary data referenced from a previous step.                                                                                   |         |

### Upload Stream - Close Stream

Close an upload stream

| Input            | Comments                                                                                | Default |
| ---------------- | --------------------------------------------------------------------------------------- | ------- |
| Upload Stream ID | The ID of the upload stream to write to. Generate this with the 'Create Stream' action. |         |

### Upload Stream - Create Stream

Create an upload stream to S3

| Input                     | Comments                                                                                                                                                                                             | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                              |         |
| Connection                | Access keys provide programmatic access to access resources in AWS. See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html.                                            |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                          |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                               |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                             |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                     |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. You can create a bucket from within the AWS console. Bucket names contain only letters, numbers, and dashes.                            |         |
| Object Tags               | Objects in an S3 bucket can be optionally tagged so you can filter for files more easily. For example, you may want to tag customers with a key of 'Customer Name' and value of 'Mars Missions Corp' |         |
| ACL Permissions           | A set of canned ACL permissions to apply to the object. See https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl                                                       |         |

### Upload Stream - Write Data

Write to an upload stream

| Input            | Comments                                                                                                                                           | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Upload Stream ID | The ID of the upload stream to write to. Generate this with the 'Create Stream' action.                                                            |         |
| File Contents    | The contents to write to a file. This can be a string of text, it can be binary data (like an image or PDF) that was generated in a previous step. |         |
