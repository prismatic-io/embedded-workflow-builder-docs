---
title: AWS Lambda Connector
sidebar_label: AWS Lambda
description: List and invoke AWS Lambda functions
---

![AWS Lambda](./assets/aws-lambda.png#connector-icon)
List and invoke AWS Lambda functions

## Connections

### AWS Lambda Access Key and Secret {#apikeysecret}

Authenticates requests to AWS Lambda using an API Key and Secret.

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

### AWS Role ARN {#awsassumerole}

Connect to AWS using an assumed role

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

## Actions

### Invoke {#invoke}

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

### List Function {#listfunctions}

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
