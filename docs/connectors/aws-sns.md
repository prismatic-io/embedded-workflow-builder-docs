---
title: Amazon SNS Connector
sidebar_label: Amazon SNS
description: Manage topics, subscriptions, and messages in Amazon SNS.
---

![Amazon SNS](./assets/aws-sns.png#connector-icon)
Manage topics, subscriptions, and messages in Amazon SNS.

## Connections

### AWS Role ARN

Connect to AWS using an assumed role

AWS IAM role assumption enables secure, temporary access to Amazon SNS resources without embedding long-term credentials.
This authentication method uses an IAM user's access key pair to assume an IAM role with specific SNS permissions.

#### Prerequisites

- An active AWS account
- IAM permissions to create users, access keys, and roles

#### Create IAM User and Access Key

1. Sign in to the [AWS Console](https://aws.amazon.com/) and navigate to **Identity and Access Management (IAM)**
2. Select **Users** from the left sidebar
3. Select **Create User**
4. Provide a **User name** and optionally enable AWS Management Console access
5. Complete the user creation process
6. From the user list, select the newly created user
7. Copy the **ARN** (Amazon Resource Name) from the summary section - this will be needed for the role trust policy
8. Navigate to the **Security credentials** tab
9. Under **Access Keys**, select **Create access key**
10. Select **Third-party service** as the access key type
11. Select **Next**, add an optional description tag, then select **Create access key**
12. Copy both the **Access Key ID** and **Secret Access Key** for later use

:::warning Secure Storage Required
The **Secret Access Key** is only shown once during creation. Store it securely as it cannot be retrieved later.
:::

#### Create IAM Role with Trust Policy

1. In the IAM console, select **Roles** from the left sidebar
2. Select **Create Role**
3. For **Trusted entity type**, select **Custom trust policy**
4. Replace the default policy with the following trust policy statement, substituting the actual user ARN copied from the previous section:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:user/YourUserName"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

5. Select **Next** to proceed to permissions
6. Under **Permissions policies**, search for and attach **AmazonSNSFullAccess** or create a custom policy with specific SNS permissions
7. Select **Next** and provide a **Role name** and optional description
8. Review the configuration and select **Create Role**
9. From the roles list, select the newly created role
10. Copy the **Role ARN** from the summary section

#### Configure the Connection

- Enter the **Access Key ID** from the IAM user into the connection configuration
- Enter the **Secret Access Key** from the IAM user into the connection configuration
- Enter the **Role ARN** from the IAM role into the connection configuration

The connection will use the IAM user credentials to assume the specified role when accessing Amazon SNS resources.

#### Required Permissions

The IAM role must have appropriate Amazon SNS permissions attached via IAM policies.

Common required permissions include:

- `sns:Publish` - Send messages to topics
- `sns:Subscribe` - Subscribe endpoints to topics
- `sns:CreateTopic` - Create new SNS topics
- `sns:DeleteTopic` - Delete SNS topics
- `sns:ListTopics` - List available topics
- `sns:GetTopicAttributes` - Retrieve topic details
- `sns:SetTopicAttributes` - Modify topic settings

For production use, consider creating a custom IAM policy with least-privilege permissions instead of using **AmazonSNSFullAccess**.

Refer to the [Amazon SNS IAM policy documentation](https://docs.aws.amazon.com/sns/latest/dg/sns-using-identity-based-policies.html) for detailed permission information and policy examples.

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

### AWS SNS Access Key and Secret

Authenticates requests to Amazon SNS using an API Key and API Secret

An AWS IAM [access key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) is required to interact with Amazon SNS.
Ensure the key pair generated in AWS has proper permissions to the SNS resources to access.
Read about Amazon SNS IAM policies in the [AWS docs](https://docs.aws.amazon.com/sns/latest/dg/sns-using-identity-based-policies.html).

#### Prerequisites

- An active AWS account
- IAM permissions to create access keys

#### Setup Steps

To create an IAM access key pair:

1. Sign in to the [AWS Console](https://aws.amazon.com/) and navigate to **Identity and Access Management (IAM)**
2. Select **Users** from the left sidebar
3. Choose an existing user or create a new one by selecting **Create User**
4. If creating a new user, provide a username and configure console access if needed
5. Navigate to the **Security credentials** tab for the selected user
6. Under **Access Keys**, select **Create access key**
7. Choose the use case (select **Third-party service** or **Application running outside AWS** as appropriate)
8. Add an optional description tag for the key
9. Select **Create access key**
10. Copy both the **Access Key ID** and **Secret Access Key** values

:::warning Secure Storage Required
The **Secret Access Key** is only shown once during creation. Store it securely as it cannot be retrieved later. If lost, a new access key pair must be generated.
:::

#### Configure the Connection

- Enter the **Access Key ID** into the corresponding field in the connection configuration
- Enter the **Secret Access Key** into the corresponding field in the connection configuration

#### Required Permissions

The IAM user or role associated with the access key pair must have appropriate permissions for Amazon SNS operations.

Common required permissions include:

- `sns:Publish` - Send messages to topics
- `sns:Subscribe` - Subscribe endpoints to topics
- `sns:CreateTopic` - Create new SNS topics
- `sns:DeleteTopic` - Delete SNS topics
- `sns:ListTopics` - List available topics
- `sns:GetTopicAttributes` - Retrieve topic details
- `sns:SetTopicAttributes` - Modify topic settings

Refer to the [Amazon SNS IAM policy documentation](https://docs.aws.amazon.com/sns/latest/dg/sns-using-identity-based-policies.html) for detailed permission information and policy examples.

| Input             | Comments                                                                                                                                                        | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID for authenticating with Amazon SNS. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)     |         |
| Secret Access Key | An AWS IAM Secret Access Key corresponding to the Access Key ID. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) |         |

## Triggers

### Manual Subscription

Receive and validate webhook requests from SNS for manually configured webhook subscriptions.

| Input         | Comments                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Parse Message | When enabled, the message from SNS will be parsed as JSON and returned. When disabled, it will be passed as received. | false   |

### Topic Webhook

Receive notifications from an SNS topic. Automatically creates and manages a topic subscription when the instance is deployed, and removes the subscription when the instance is deleted.

| Input         | Comments                                                                                                                       | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Parse Message | When enabled, the message from SNS will be parsed as JSON and returned. When disabled, it will be passed as received.          | false   |
| Connection    | The Amazon SNS connection to use.                                                                                              |         |
| AWS Region    | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                        |         |
| Topic ARN     | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html) |         |

## Actions

### Create Topic

Create an Amazon SNS Topic

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | The name of the SNS topic to create.                                    |         |
| Connection | The Amazon SNS connection to use.                                       |         |

### Delete Topic

Delete an Amazon SNS Topic

| Input      | Comments                                                                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                        |         |
| Topic ARN  | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html) |         |
| Connection | The Amazon SNS connection to use.                                                                                              |         |

### Get Topic Attributes

Retrieves the attributes of an Amazon SNS Topic.

| Input      | Comments                                                                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                        |         |
| Topic ARN  | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html) |         |
| Connection | The Amazon SNS connection to use.                                                                                              |         |

### List Opt Out Numbers

List all opt out numbers

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                   |         |
| Next Token | The pagination token returned by a previous request to retrieve the next page of results. |         |
| Connection | The Amazon SNS connection to use.                                                         |         |

### List Subscriptions

Retrieve the subscriptions of an Amazon SNS Topic

| Input      | Comments                                                                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Amazon SNS connection to use.                                                                                              |         |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                        |         |
| Topic ARN  | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html) |         |
| Fetch All  | When set to true, fetches all paginated subscriptions. When false, only 100 subscriptions will be returned.                    | false   |
| Next Token | The pagination token returned by a previous request to retrieve the next page of results.                                      |         |

### List Topics

List available Amazon SNS Topics

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection | The Amazon SNS connection to use.                                                             |         |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                       |         |
| Fetch All  | When set to true, fetches all paginated topics. When false, only 100 topics will be returned. | false   |
| Next Token | The pagination token returned by a previous request to retrieve the next page of results.     |         |

### Publish Batch Messages

Publishes up to ten messages to the specified Amazon SNS Topic

| Input           | Comments                                                                                                                                                                                                                                                                    | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Region      | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Topic ARN       | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html)                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Message Entries | An array of message entries to publish in batch. Each entry must include an Id and Message. For binary messages, add a Template Field containing a Buffer to the BinaryValue attribute. [Learn more](https://docs.aws.amazon.com/sns/latest/dg/sns-message-attributes.html) | <code>[<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "Number",<br /> "StringValue": "123"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> },<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "String.Array",<br /> "StringValue": "[\"test\", true, 123]"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> },<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "String",<br /> "StringValue": "test"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> },<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "Binary",<br /> "BinaryValue": "ADD A BUFFER HERE WITH A TEMPLATE FIELD"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> }<br />]</code> |
| Connection      | The Amazon SNS connection to use.                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Publish Message

Publish a message to an Amazon SNS Topic

| Input              | Comments                                                                                                                                                                                                                                                                                    | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region         | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                     |         |
| Message            | The message content to send to the topic or endpoint. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)                                                                                                                                                             |         |
| Topic ARN          | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html)                                                                                                                                                              |         |
| Message Attributes | Optional message attributes as key-value pairs. The value will be automatically typed (String, Number, String.Array, or Binary for Buffer). For binary data, provide a Buffer from a previous step. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_MessageAttributeValue.html) |         |
| Connection         | The Amazon SNS connection to use.                                                                                                                                                                                                                                                           |         |

### Publish SMS

Publish an SMS message to an Amazon SNS Topic

| Input        | Comments                                                                                                                                                         | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region   | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                          |         |
| Message      | The message content to send to the topic or endpoint. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)                                  |         |
| Phone Number | The phone number in E.164 format (e.g., +12065551234) to receive SMS messages. [Learn more](https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html) |         |
| Connection   | The Amazon SNS connection to use.                                                                                                                                |         |

### Subscribe to Topic

Subscribe to an Amazon SNS Topic

| Input      | Comments                                                                                                                                                                                                                                                                                       | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                        |         |
| Topic ARN  | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html)                                                                                                                                                                 |         |
| Protocol   | The protocol to use for delivering messages to the endpoint (application, email, email-json, firehose, http, https, lambda, sms, or sqs). [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)                                                                          | https   |
| Endpoint   | The endpoint to receive notifications. Format depends on protocol: email address (email@example.com), URL (https://example.com), phone number (+12065551234), or ARN (arn:aws:sqs:us-east-1:123456789012:MyQueue). [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html) |         |
| Connection | The Amazon SNS connection to use.                                                                                                                                                                                                                                                              |         |

### Unsubscribe from a Topic

Unsubscribe from an Amazon SNS Topic

| Input            | Comments                                                                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                           |         |
| Subscription ARN | The Amazon Resource Name (ARN) of the subscription. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html) |         |
| Connection       | The Amazon SNS connection to use.                                                                                                 |         |
