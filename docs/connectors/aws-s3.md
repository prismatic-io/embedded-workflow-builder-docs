---
title: Amazon S3 Connector
sidebar_label: Amazon S3
description: Manage objects and buckets in Amazon S3.
---

![Amazon S3](./assets/aws-s3.png#connector-icon)
[Amazon S3](https://aws.amazon.com/s3/) is an object storage service from Amazon Web Services (AWS).
This component allows creating, reading, updating, moving, listing, and deleting objects (files) within an Amazon S3 bucket.

## API Documentation

This component was built using the [Amazon S3 API Reference](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html).

## Connections

### AWS Role ARN {#awsassumerole}

Connect to AWS using an assumed role

AWS Assume Role authentication allows assuming an IAM role using temporary security credentials.
This method is useful for cross account access or when implementing principle of least privilege.

Refer to the [AWS documentation on assuming roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html) for detailed information.

#### Prerequisites

- Completed [API Key Secret](#apikeysecret) connection setup (access key pair required)
- Appropriate permissions to create IAM roles

#### Setup Steps

An IAM user with access keys is required to assume a role. If access keys have not been created, follow the [API Key Secret](#apikeysecret) setup steps first, then return here to create the IAM role.

##### Create an IAM Role with Trust Policy

1. From the [IAM Console](https://console.aws.amazon.com/iam/), navigate to **Roles** and select **Create Role**
2. Select **Custom trust policy** as the trusted entity type
3. Enter the trust policy below, replacing `USER_ARN` with the IAM user ARN:

<details>
<summary>View trust policy template</summary>

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "USER_ARN"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

</details>

4. Click **Next** and attach the appropriate S3 permissions policy (e.g., **AmazonS3FullAccess** or **AmazonS3ReadOnlyAccess**)
5. Complete the remaining steps and select **Create Role**
6. Copy the **Role ARN** from the role summary (format: `arn:aws:iam::123456789012:role/role-name`)

#### Configure the Connection

- **Role ARN**: The ARN of the IAM role to assume
- **Access Key ID**: From the IAM user (see [API Key Secret](#apikeysecret))
- **Secret Access Key**: From the IAM user
- **External ID** (optional): Shared secret for enhanced security

:::note[External ID]
The **External ID** provides additional security for cross-account access. Refer to the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information.
:::

#### Verify Connection

The IAM user credentials assume the role, which provides temporary credentials with the role's attached permissions. Ensure the trust policy correctly references the IAM user ARN.

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

### AWS S3 Access Key and Secret {#apikeysecret}

Authenticates requests to AWS S3 using an API Key and Secret.

An AWS IAM [access key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) is required to interact with Amazon S3.
Ensure the key pair generated in AWS has proper permissions to the S3 resources to access.
Read more about S3 IAM actions in the [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html).

#### Prerequisites

- An [AWS account](https://aws.amazon.com/) with IAM access
- Appropriate permissions to create IAM access keys

#### Setup Steps

To create an IAM access key pair:

1. Sign in to the [AWS Console](https://aws.amazon.com/) and navigate to **Identity and Access Management (IAM)**
2. Select the IAM user that will be used for the integration
3. Navigate to the **Security credentials** tab
4. Under the **Access keys** section, select **Create access key**
5. Choose the appropriate use case (e.g., **Third-party service** or **Application running outside AWS**)
6. Copy both the **Access Key ID** and **Secret Access Key** when displayed

:::warning[Secret Key Visibility]
The **Secret Access Key** is only shown once during creation. If it is not copied at this time, a new access key pair must be created.
:::

#### Configure the Connection

- Enter the **Access Key ID** into the connection configuration
- Enter the **Secret Access Key** into the connection configuration

| Input             | Comments                                                                                                                                                                                                                                    | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Access Key ID     | AWS IAM Access Key ID used for programmatic access. Create access keys in the [AWS IAM Console](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) under Security Credentials.                               |         |
| Secret Access Key | AWS IAM Secret Access Key paired with the Access Key ID. <strong>Important:</strong> This value is only shown once when created in the [AWS IAM Console](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |

## Triggers

### New and Updated Files {#pollchangesfilestrigger}

Checks for new and updated files in a specified S3 bucket on a configured schedule.

| Input                     | Comments                                                                                                                                                                                                                               | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).                             |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                                            |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                                 |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                                               |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                                               |         |
| Look-back Date            | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each file modified on or after this date once. |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                |         |

### New Buckets {#pollnewbucketstrigger}

Checks for new buckets in Amazon S3 on a configured schedule.

| Input                     | Comments                                                                                                                                                                                                                                | Default |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).                              |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                                             |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                                  |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                                                |         |
| Look-back Date            | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each bucket created on or after this date once. |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                 |         |

### Webhook {#snss3notificationwebhook}

Receive Amazon SNS notifications for Amazon S3 events. Confirms SNS subscription requests automatically.

| Input     | Comments                                                                                                                                                                                                                                                                                    | Default |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Topic ARN | The Amazon SNS Topic ARN this webhook should accept messages from. When set, a validly signed message from any other topic is rejected, including a subscription confirmation, so a foreign subscription is never confirmed. Leave empty to accept a validly signed message from any topic. |         |

## Actions

### Abort Multipart Upload {#abortmultipartupload}

Abort a multipart upload

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |         |
| Upload ID                 | The unique identifier for the multipart upload, returned by 'Create Multipart Upload' action.                                                                                                              |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Add Bucket SNS Event Notification {#bucketeventtriggerconfiguration}

Add events to send notifications to SNS Topic

| Input                     | Comments                                                                                                                                                                                                              | Default         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).            |                 |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                           |                 |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                |                 |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                              |                 |
| SNS Topic ARN             | The Amazon Resource Name (ARN) of the SNS topic. For more information, see [Getting started with Amazon SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-getting-started.html).                                     |                 |
| Event Types               | S3 event types that will trigger notifications. For more information, see [S3 Event Notification Types](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html). | <code>[]</code> |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                              |                 |
| Event Notification Name   | A unique name for the event notification configuration.                                                                                                                                                               |                 |
| Bucket Owner Account ID   | The 12-digit AWS Account ID of the bucket owner. Find this in the AWS Console account settings or use the 'Get Current Account' action.                                                                               |                 |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                               |                 |

### Close Upload Stream {#closeuploadstream}

Close an upload stream

| Input            | Comments                                                                                | Default |
| ---------------- | --------------------------------------------------------------------------------------- | ------- |
| Upload Stream ID | The ID of the upload stream to write to. Generate this with the 'Create Stream' action. |         |

### Complete Multipart Upload {#completemultipartupload}

Complete a multipart upload

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |         |
| Upload ID                 | The unique identifier for the multipart upload, returned by 'Create Multipart Upload' action.                                                                                                              |         |
| Parts                     | The list of uploaded parts to complete the multipart upload. Reference the 'Parts' field from the 'List Parts' action output.                                                                              |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Copy Object {#copyobject}

Copy an object in S3 from one location to another

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Source Bucket Name        | The source bucket containing the object to copy. For same-bucket copies, use the same name for both source and destination buckets.                                                                        |         |
| Destination Bucket Name   | The destination bucket where the object will be copied. For same-bucket copies, use the same name for both source and destination buckets.                                                                 |         |
| Source Key                | The source object's key (file path) to copy from. Do not include a leading /.                                                                                                                              |         |
| Destination Key           | The destination object's key (file path) to copy to. Do not include a leading /.                                                                                                                           |         |
| ACL Permissions           | Canned ACL permissions to apply to the object. For more information, see [S3 Canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).                             |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Create Multipart Upload {#createmultipartupload}

Create a multipart upload

| Input                     | Comments                                                                                                                                                                                                   | Default         |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |                 |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |                 |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |                 |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |                 |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |                 |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |                 |
| Object Tags               | Key-value pairs to tag the object for filtering and organization. For more information, see [S3 Object Tagging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html).                | <code>[]</code> |
| ACL Permissions           | Canned ACL permissions to apply to the object. For more information, see [S3 Canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).                             |                 |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |                 |

### Create SNS Topic for S3 Event Notification {#createtopic}

Create an Amazon SNS Topic to be used with S3 Event Notifications

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Name                      | The name of the SNS topic to create.                                                                                                                                                                       |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Create Upload Stream {#createuploadstream}

Create an upload stream to S3

| Input                     | Comments                                                                                                                                                                                                   | Default         |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |                 |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |                 |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |                 |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |                 |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |                 |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |                 |
| Object Tags               | Key-value pairs to tag the object for filtering and organization. For more information, see [S3 Object Tagging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html).                | <code>[]</code> |
| ACL Permissions           | Canned ACL permissions to apply to the object. For more information, see [S3 Canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).                             |                 |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |                 |

### Delete Bucket {#deletebucket}

Deletes the S3 bucket. All objects in the bucket must be deleted before the bucket itself can be deleted

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Delete Object {#deleteobject}

Delete an Object within an S3 Bucket

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Delete Objects {#deleteobjects}

Delete multiple objects from a bucket

| Input                     | Comments                                                                                                                                                                                                   | Default         |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |                 |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |                 |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |                 |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |                 |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |                 |
| Object Keys               | A list of object keys to delete. These are the file paths of the objects to delete. Do not include a leading /.                                                                                            | <code>[]</code> |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |                 |

### Generate Presigned URL {#generatepresignedurl}

Generate a presigned URL that can be used to upload or download an object in S3

| Input                     | Comments                                                                                                                                                                                                   | Default  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |          |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |          |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |          |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |          |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |          |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |          |
| Action Type               | Specifies whether the presigned URL will allow download or upload operations.                                                                                                                              | download |
| Expiration Seconds        | Number of seconds until the presigned URL expires. Default is 3600 (1 hour).                                                                                                                               | 3600     |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |          |

### Generate Presigned URL for Multipart Uploads {#generatepresignedformultiparuploads}

Generate presigned URLs for uploading the parts of a multipart upload to S3.

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |         |
| URLs to Generate          | The number of presigned URLs to generate for multipart uploads.                                                                                                                                            | 5       |
| Upload ID                 | The unique identifier for the multipart upload, returned by 'Create Multipart Upload' action.                                                                                                              |         |
| Expiration Seconds        | Number of seconds until the presigned URL expires. Default is 3600 (1 hour).                                                                                                                               | 3600    |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Get Bucket Location {#getbucketlocation}

Get the location (AWS region) of a bucket by name

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |

### Get Bucket Notification Configuration {#getbucketnotificationconfiguration}

Returns the notification configuration of a bucket

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Get Current Account {#getcurrentaccount}

Get the current AWS account

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |

### Get Object {#getobject}

Get the contents of an object

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |         |
| Version ID                | The version ID of the object to retrieve. When omitted, the current version is returned.                                                                                                                   |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Get Object Attributes {#getobjectattributes}

Retrieves all the metadata from an object without returning the object itself

| Input                     | Comments                                                                                                                                                                                                   | Default         |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |                 |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |                 |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |                 |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |                 |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |                 |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |                 |
| Object Attributes         | The object attributes to return in the response. Unspecified attributes are not returned.                                                                                                                  | <code>[]</code> |
| Version ID                | The version ID for the object whose metadata to retrieve.                                                                                                                                                  |                 |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |                 |

### Get Object Lock Configuration {#getobjectlockconfiguration}

Gets the Object Lock configuration for a bucket

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Get Object Retention {#getobjectretention}

Retrieves an object's retention settings

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |         |
| Version ID                | The version ID for the object whose retention settings to retrieve.                                                                                                                                        |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Head Bucket {#headbucket}

Determine if a bucket exists and whether the connection has permission to access it.

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Head Object {#headobject}

Retrieve metadata from an object without returning the object itself

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |         |
| Version ID                | The version ID of the object whose metadata to retrieve.                                                                                                                                                   |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### List Buckets {#listbuckets}

List all buckets in an AWS account

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### List Multipart Uploads {#listmultipartuploads}

Lists in-progress multipart uploads in a bucket

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### List Objects {#listobjects}

List Objects in a Bucket

| Input                     | Comments                                                                                                                                                                                                        | Default |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).      |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                     |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                          |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                        |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                        |         |
| Include Metadata          | When true, returns full object metadata and pagination information instead of just object keys.                                                                                                                 | false   |
| Pagination                | Cursor and page-size controls for paging through results.                                                                                                                                                       |         |
| Max Keys                  | Maximum number of objects to return (1-1000). Defaults to 1000 if not specified.                                                                                                                                |         |
| Continuation Token        | Pagination token returned by a previous request to retrieve the next page of results.                                                                                                                           |         |
| Prefix                    | List only objects prefixed with this string. For example, to list only files in a directory called 'unprocessed', enter 'unprocessed/'. If this is left blank, all files in the selected bucket will be listed. |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                         |         |

### List Parts {#listparts}

List parts of a multipart upload

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |         |
| Upload ID                 | The unique identifier for the multipart upload, returned by 'Create Multipart Upload' action.                                                                                                              |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Put Bucket Notification Configuration {#putbucketnotificationconfiguration}

Replace an existing bucket notification configuration with a new one

| Input                          | Comments                                                                                                                                                                                                   | Default                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection                     | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |                                                                                                                                                                                                                                                                                                                                                               |
| Dynamic Access Key ID          | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |                                                                                                                                                                                                                                                                                                                                                               |
| Dynamic Secret Access Key      | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |                                                                                                                                                                                                                                                                                                                                                               |
| Dynamic Session Token          | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |                                                                                                                                                                                                                                                                                                                                                               |
| Bucket Name                    | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |                                                                                                                                                                                                                                                                                                                                                               |
| Topic Configurations           | List of SNS topic configurations for bucket event notifications. For more information, see [S3 Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html).        | <code>[<br /> {<br /> "Id": "topic-1",<br /> "TopicArn": "arn:aws:sns:us-west-2:123456789012:mytopic",<br /> "Events": [<br /> "s3:ObjectCreated:*"<br /> ],<br /> "Filter": {<br /> "Key": {<br /> "FilterRules": [<br /> {<br /> "Name": "prefix",<br /> "Value": "images/"<br /> }<br /> ]<br /> }<br /> }<br /> }<br />]</code>                           |
| Queue Configurations           | List of SQS queue configurations for bucket event notifications. For more information, see [S3 Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html).        | <code>[<br /> {<br /> "Id": "queue-1",<br /> "QueueArn": "arn:aws:sqs:us-west-2:123456789012:myqueue",<br /> "Events": [<br /> "s3:ObjectCreated:*"<br /> ],<br /> "Filter": {<br /> "Key": {<br /> "FilterRules": [<br /> {<br /> "Name": "prefix",<br /> "Value": "images/"<br /> }<br /> ]<br /> }<br /> }<br /> }<br />]</code>                           |
| Lambda Function Configurations | List of Lambda function configurations for bucket event notifications. For more information, see [S3 Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html).  | <code>[<br /> {<br /> "Id": "lambda-1",<br /> "LambdaFunctionArn": "arn:aws:lambda:us-west-2:123456789012:function:my-function",<br /> "Events": [<br /> "s3:ObjectCreated:*"<br /> ],<br /> "Filter": {<br /> "Key": {<br /> "FilterRules": [<br /> {<br /> "Name": "prefix",<br /> "Value": "images/"<br /> }<br /> ]<br /> }<br /> }<br /> }<br />]</code> |
| EventBridge Configuration      | EventBridge configuration for bucket event notifications. For more information, see [Using EventBridge with S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventBridge.html).                   | <code>{<br /> "Id": "event-bridge-1",<br /> "EventBridgeArn": "arn:aws:eventbridge:us-west-2:123456789012:myeventbridge",<br /> "Events": [<br /> "s3:ObjectCreated:*"<br /> ],<br /> "Filter": {<br /> "Key": {<br /> "FilterRules": [<br /> {<br /> "Name": "prefix",<br /> "Value": "images/"<br /> }<br /> ]<br /> }<br /> }<br />}</code>                |
| AWS Region                     | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                               |

### Put Object {#putobject}

Write an object to S3

| Input                     | Comments                                                                                                                                                                                                   | Default         |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |                 |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |                 |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |                 |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |                 |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |                 |
| File Contents             | The contents to write to the object. Accepts text strings or binary data (images, PDFs, etc.) from previous steps.                                                                                         |                 |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |                 |
| Object Tags               | Key-value pairs to tag the object for filtering and organization. For more information, see [S3 Object Tagging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html).                | <code>[]</code> |
| ACL Permissions           | Canned ACL permissions to apply to the object. For more information, see [S3 Canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html#canned-acl).                             |                 |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |                 |

### Put Object Lock Configuration {#putobjectlockconfiguration}

Places an Object Lock configuration on the specified bucket

| Input                     | Comments                                                                                                                                                                                                                  | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).                |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                               |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                    |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                                  |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                                  |         |
| Default Retention Mode    | Object Lock retention mode for new objects. Must be used with either Default Retention Days or Years. For more information, see [S3 Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html). |         |
| Default Retention Days    | Number of days for the default retention period. Mutually exclusive with Default Retention Years.                                                                                                                         |         |
| Default Retention Years   | Number of years for the default retention period. Mutually exclusive with Default Retention Days.                                                                                                                         |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                   |         |

### Put Object Retention {#putobjectretention}

Places an Object Retention configuration on an object

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |         |
| Retention Mode            | Retention mode for the specified object. Required when Retain Until Date is set.                                                                                                                           |         |
| Retain Until Date         | The date and time when Object Retention expires. Required when using Retention Mode. Must be in ISO 8601 format.                                                                                           |         |
| Version ID                | The version ID of the object to apply the retention configuration to.                                                                                                                                      |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Subscribe to SNS Topic {#subscribetotopic}

Subscribe to an Amazon SNS Topic for S3 Event Notifications

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| SNS Topic ARN             | The Amazon Resource Name (ARN) of the SNS topic. For more information, see [Getting started with Amazon SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-getting-started.html).                          |         |
| Webhook Endpoint          | The HTTPS endpoint URL that will receive S3 event notifications.                                                                                                                                           |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Unsubscribe from SNS Topic {#unsubscribefromtopic}

Unsubscribe from an Amazon SNS Topic for S3 Event Notifications

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Subscription ARN          | The Amazon Resource Name (ARN) of the SNS topic subscription.                                                                                                                                              |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Update SNS Topic Policy for S3 Event Notification {#updatetopicpolicy}

Update an Amazon SNS Topic Policy to grant S3 permission to publish

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| SNS Topic ARN             | The Amazon Resource Name (ARN) of the SNS topic. For more information, see [Getting started with Amazon SNS](https://docs.aws.amazon.com/sns/latest/dg/sns-getting-started.html).                          |         |
| Bucket Owner Account ID   | The 12-digit AWS Account ID of the bucket owner. Find this in the AWS Console account settings or use the 'Get Current Account' action.                                                                    |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Upload Part {#uploadpart}

Upload a chunk of a multipart file upload

| Input                     | Comments                                                                                                                                                                                                   | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                | The AWS S3 connection to use for authentication. Access keys provide programmatic access to AWS resources. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                     |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                   |         |
| Bucket Name               | An Amazon S3 'bucket' is a container where files are stored. Buckets can be created from within the AWS console. Bucket names contain only letters, numbers, and dashes.                                   |         |
| Object Key                | An object in S3 is a file that is saved in a 'bucket'. This represents the object's key (file path). Do not include a leading /.                                                                           |         |
| Upload ID                 | The unique identifier for the multipart upload, returned by 'Create Multipart Upload' action.                                                                                                              |         |
| Part Number               | The part number for this chunk in the multipart upload sequence (1-10,000).                                                                                                                                |         |
| File Chunk                | The binary data chunk to upload as part of a multipart upload. Reference output from a previous step.                                                                                                      |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |         |

### Write Upload Stream {#writeuploadstream}

Write to an upload stream

| Input            | Comments                                                                                                           | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Upload Stream ID | The ID of the upload stream to write to. Generate this with the 'Create Stream' action.                            |         |
| File Contents    | The contents to write to the object. Accepts text strings or binary data (images, PDFs, etc.) from previous steps. |         |
