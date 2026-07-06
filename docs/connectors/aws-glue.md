---
title: AWS Glue Connector
sidebar_label: AWS Glue
description: Manage AWS Glue crawlers, jobs and triggers
---

![AWS Glue](./assets/aws-glue.png#connector-icon)
[AWS Glue](https://aws.amazon.com/glue) is a serverless data integration service from Amazon Web Services.
The AWS Glue component allows listing, starting, and stopping jobs, triggers, and crawlers in an AWS Glue account.

## API Documentation

This component was built using the [AWS Glue Developer Guide](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html).

## Connections

### AWS Glue Access Key and Secret {#apikeysecret}

Authenticates requests to AWS Glue using an API Key and API Secret.

An AWS IAM [access key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) is required to interact with AWS Glue.
Ensure the key pair generated in AWS has proper permissions to the AWS Glue resources to access.
Read more about Glue IAM actions in the [AWS documentation](https://docs.aws.amazon.com/glue/latest/dg/create-an-iam-role.html).

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
6. Copy both the **Access key ID** and **Secret access key** when displayed

:::warning[Secret Key Visibility]
The **Secret access key** is only shown once during creation. If it is not copied at this time, a new access key pair must be created.
:::

#### Configure the Connection

- Enter the **Access Key ID** into the connection configuration
- Enter the **Secret Access Key** into the connection configuration

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

### AWS Role ARN {#awsassumerole}

Connect to AWS using an assumed role

AWS Assume Role authentication allows assuming an IAM role using temporary security credentials.
This method is useful for cross account access or when implementing principle of least privilege.

Refer to the [AWS documentation on assuming roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html) for detailed information.

#### Prerequisites

- Completed [Access Key and Secret](#apikeysecret) connection setup (access key pair required)
- Appropriate permissions to create IAM roles

#### Setup Steps

An IAM user with access keys is required to assume a role. If access keys have not been created, follow the [Access Key and Secret](#apikeysecret) setup steps first, then return here to create the IAM role.

#### Create an IAM Role with Trust Policy

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

4. Click **Next** and attach the appropriate Glue permissions policy (e.g., **AWSGlueConsoleFullAccess**)
5. Complete the remaining steps and select **Create Role**
6. Copy the **Role ARN** from the role summary (format: `arn:aws:iam::123456789012:role/role-name`)

#### Configure the Connection

- **Role ARN**: The ARN of the IAM role to assume
- **Access Key ID**: From the IAM user (see [Access Key and Secret](#apikeysecret))
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

## Actions

### Get Job Run {#getjobrun}

Retrieves the metadata for a given job run.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Run Id     | Provide a string value for the run Id.                                  |         |
| Connection |                                                                         |         |

### List Crawlers {#listcrawlers}

List Crawlers available in AWS Glue

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Connection |                                                                                                               |         |

### List Jobs {#listjobs}

List job schemas available in AWS Glue

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Connection |                                                                                                               |         |

### List Triggers {#listtriggers}

List the names of all triggers in the account.

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Connection |                                                                                                               |         |

### Start Crawler {#startcrawler}

Starts an existing crawler in AWS Glue.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Start Job Run {#startjobrun}

Starts a job run using a AWS Glue job definition.

| Input                  | Comments                                                                                                                                                                            | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region             | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                             |         |
| Name                   | Provide a string value for the name (NOT the ARN).                                                                                                                                  |         |
| Allocated Capacity     | The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. If this is omitted, Glue will use the default number of DPUs configured for your job. |         |
| Security Configuration | The name of the SecurityConfiguration structure to be used with this job. This can be left blank if you do not have a security configuration.                                       |         |
| args                   | Optional key value parameters to pass into a job.                                                                                                                                   |         |
| Connection             |                                                                                                                                                                                     |         |

### Start Trigger {#starttrigger}

Starts an existing trigger in AWS Glue.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Stop Crawler {#stopcrawler}

If the specified crawler is running, stops the crawl

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Stop Job Run {#stopjobrun}

Stops one or more job runs for a specified job definition

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| AWS Region  | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name        | Provide a string value for the name (NOT the ARN).                      |         |
| Job Run Ids | Provide a list of job run Ids                                           |         |
| Connection  |                                                                         |         |

### Stop trigger {#stoptrigger}

Stops a specified trigger

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |
