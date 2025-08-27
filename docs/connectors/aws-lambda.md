---
title: AWS Lambda Connector
sidebar_label: AWS Lambda
description: List and invoke AWS Lambda functions
---

![AWS Lambda](./assets/aws-lambda.png#connector-icon)
List and invoke AWS Lambda functions

## Connections

### AWS Lambda Access Key and Secret

Authenticates requests to AWS Lambda using an API Key and Secret.

An AWS IAM [access key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) is required to interact with AWS Lambda.
Make sure that the key pair you generate in AWS has proper permissions to the Lambda functions you want to access.
Read more about AWS Lambda permissions in the [AWS docs](https://docs.aws.amazon.com/lambda/latest/dg/lambda-permissions.html).

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

- When adding permissions provide the **AWSLambda_FullAccess** permission
- Complete remaining steps and select **Create Role**

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

## Actions

### Invoke

Invoke an AWS Lambda function

| Input                     | Comments                                                                                                                                                                                                              | Default         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection                |                                                                                                                                                                                                                       |                 |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                           |                 |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                |                 |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                              |                 |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                               |                 |
| Function Name or ARN      | This can be a function name (my-function), name with alias (my-function:v1), or function ARN (arn:aws:lambda:us-west-2:123456789012:function:my-function).                                                            |                 |
| Invoke Type               | RequestResponse (default) - Invoke the function synchronously. Event - Invoke the function asynchronously. DryRun - Validate parameter values and verify that the user or role has permission to invoke the function. | RequestResponse |
| Payload                   | The payload to send the lambda function. This can be a JSON string or object that can be serialized into JSON.                                                                                                        |                 |

### List Function

List Information and metadata about all AWS Lambda functions

| Input                     | Comments                                                                                                                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                                                                                        |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                |         |
| Marker                    | Specify the pagination token that's returned by a previous request to retrieve the next page of results                                                                |         |
| Max Items                 | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50.                                                          |         |
