---
title: AWS Glue Connector
sidebar_label: AWS Glue
description: Manage AWS Glue crawlers, jobs and triggers
---

![AWS Glue](./assets/aws-glue.png#connector-icon)
Manage AWS Glue crawlers, jobs and triggers

## Connections

### AWS Glue Access Key and Secret

Authenticates requests to AWS Glue using an API Key and API Secret.

An AWS IAM [access key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) is required to interact with AWS Glue.
Make sure that the key pair you generate in AWS has proper permissions to the AWS Glue resources you want to access.
Read more about Glue IAM actions in the [AWS docs](https://docs.aws.amazon.com/glue/latest/dg/create-an-iam-role.html).

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

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

- When adding permissions provide the **AWSGlueConsoleFullAccess** permission
- Complete remaining steps and select **Create Role**

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

## Actions

### Get Job Run

Retrieves the metadata for a given job run.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Run Id     | Provide a string value for the run Id.                                  |         |
| Connection |                                                                         |         |

### List Crawlers

List Crawlers available in AWS Glue

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Connection |                                                                                                               |         |

### List Jobs

List job schemas available in AWS Glue

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Connection |                                                                                                               |         |

### List Triggers

List the names of all triggers in the account.

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Connection |                                                                                                               |         |

### Start Crawler

Starts an existing crawler in AWS Glue.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Start Job Run

Starts a job run using a AWS Glue job definition.

| Input                  | Comments                                                                                                                                                                            | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region             | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                             |         |
| Name                   | Provide a string value for the name (NOT the ARN).                                                                                                                                  |         |
| Allocated Capacity     | The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. If this is omitted, Glue will use the default number of DPUs configured for your job. |         |
| Security Configuration | The name of the SecurityConfiguration structure to be used with this job. This can be left blank if you do not have a security configuration.                                       |         |
| args                   | Optional key value parameters to pass into a job.                                                                                                                                   |         |
| Connection             |                                                                                                                                                                                     |         |

### Start Trigger

Starts an existing trigger in AWS Glue.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Stop Crawler

If the specified crawler is running, stops the crawl

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Stop Job Run

Stops one or more job runs for a specified job definition

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| AWS Region  | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name        | Provide a string value for the name (NOT the ARN).                      |         |
| Job Run Ids | Provide a list of job run Ids                                           |         |
| Connection  |                                                                         |         |

### Stop trigger

Stops a specified trigger

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |
