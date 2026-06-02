---
title: Amazon SNS Connector
sidebar_label: Amazon SNS
description: Manage topics, subscriptions, and messages in Amazon SNS.
---

![Amazon SNS](./assets/aws-sns.png#connector-icon)
Manage topics, subscriptions, and messages in Amazon SNS.

## Connections

### Access Key {#apikeysecret}

Access Key connection for AWS SNS

| Input             | Comments                                                                                                                                                        | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID for authenticating with Amazon SNS. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)     |         |
| Secret Access Key | An AWS IAM Secret Access Key corresponding to the Access Key ID. [Learn more](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) |         |

### AWS Role ARN {#awsassumerole}

Connect to AWS using an assumed role

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

## Triggers

### Manual Subscription {#subscriptiontrigger}

Receive and validate webhook requests from SNS for manually configured webhook subscriptions.

| Input         | Comments                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Parse Message | When enabled, the message from SNS will be parsed as JSON and returned. When disabled, it will be passed as received. | false   |

### Topic Webhook {#webhooklifecycletrigger}

Receive notifications from an SNS topic. Automatically creates and manages a topic subscription when the instance is deployed, and removes the subscription when the instance is deleted.

| Input         | Comments                                                                                                                       | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Parse Message | When enabled, the message from SNS will be parsed as JSON and returned. When disabled, it will be passed as received.          | false   |
| Connection    | The Amazon SNS connection to use.                                                                                              |         |
| AWS Region    | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                        |         |
| Topic ARN     | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html) |         |

## Actions

### Create Topic {#createtopic}

Create an Amazon SNS Topic

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | The name of the SNS topic to create.                                    |         |
| Connection | The Amazon SNS connection to use.                                       |         |

### Delete Topic {#deletetopic}

Delete an Amazon SNS Topic

| Input      | Comments                                                                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                        |         |
| Topic ARN  | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html) |         |
| Connection | The Amazon SNS connection to use.                                                                                              |         |

### Get Topic Attributes {#gettopicattributes}

Retrieves the attributes of an Amazon SNS Topic.

| Input      | Comments                                                                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                        |         |
| Topic ARN  | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html) |         |
| Connection | The Amazon SNS connection to use.                                                                                              |         |

### List Opt Out Numbers {#listoptoutnumbers}

List all opt out numbers

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                   |         |
| Next Token | The pagination token returned by a previous request to retrieve the next page of results. |         |
| Connection | The Amazon SNS connection to use.                                                         |         |

### List Subscriptions {#listsubscriptions}

Retrieve the subscriptions of an Amazon SNS Topic

| Input      | Comments                                                                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Amazon SNS connection to use.                                                                                              |         |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                        |         |
| Topic ARN  | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html) |         |
| Fetch All  | When set to true, fetches all paginated subscriptions. When false, only 100 subscriptions will be returned.                    | false   |
| Next Token | The pagination token returned by a previous request to retrieve the next page of results.                                      |         |

### List Topics {#listtopics}

List available Amazon SNS Topics

| Input      | Comments                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------- | ------- |
| Connection | The Amazon SNS connection to use.                                                             |         |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                       |         |
| Fetch All  | When set to true, fetches all paginated topics. When false, only 100 topics will be returned. | false   |
| Next Token | The pagination token returned by a previous request to retrieve the next page of results.     |         |

### Publish Batch Messages {#publishbatchmessages}

Publishes up to ten messages to the specified Amazon SNS Topic

| Input           | Comments                                                                                                                                                                                                                                                                    | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Region      | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Topic ARN       | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html)                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Message Entries | An array of message entries to publish in batch. Each entry must include an Id and Message. For binary messages, add a Template Field containing a Buffer to the BinaryValue attribute. [Learn more](https://docs.aws.amazon.com/sns/latest/dg/sns-message-attributes.html) | <code>[<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "Number",<br /> "StringValue": "123"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> },<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "String.Array",<br /> "StringValue": "[\"test\", true, 123]"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> },<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "String",<br /> "StringValue": "test"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> },<br /> {<br /> "Id": "AN_ID",<br /> "Message": "A_MESSAGE",<br /> "Subject": "A_SUBJECT",<br /> "MessageStructure": "A_MESSAGE_STRUCTURE",<br /> "MessageAttributes": {<br /> "<keys>": {<br /> "DataType": "Binary",<br /> "BinaryValue": "ADD A BUFFER HERE WITH A TEMPLATE FIELD"<br /> }<br /> },<br /> "MessageDeduplicationId": "A_MESSAGE_DEDUPLICATION_ID",<br /> "MessageGroupId": "A_MESSAGE_GROUP_ID"<br /> }<br />]</code> |
| Connection      | The Amazon SNS connection to use.                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Publish Message {#publishmessage}

Publish a message to an Amazon SNS Topic

| Input              | Comments                                                                                                                                                                                                                                                                                    | Default |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region         | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                     |         |
| Message            | The message content to send to the topic or endpoint. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)                                                                                                                                                             |         |
| Topic ARN          | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html)                                                                                                                                                              |         |
| Message Attributes | Optional message attributes as key-value pairs. The value will be automatically typed (String, Number, String.Array, or Binary for Buffer). For binary data, provide a Buffer from a previous step. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_MessageAttributeValue.html) |         |
| Connection         | The Amazon SNS connection to use.                                                                                                                                                                                                                                                           |         |

### Publish SMS {#publishsms}

Publish an SMS message to an Amazon SNS Topic

| Input        | Comments                                                                                                                                                         | Default |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region   | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                          |         |
| Message      | The message content to send to the topic or endpoint. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html)                                  |         |
| Phone Number | The phone number in E.164 format (e.g., +12065551234) to receive SMS messages. [Learn more](https://docs.aws.amazon.com/sns/latest/dg/sms_publish-to-phone.html) |         |
| Connection   | The Amazon SNS connection to use.                                                                                                                                |         |

### Subscribe to Topic {#subscribe}

Subscribe to an Amazon SNS Topic

| Input      | Comments                                                                                                                                                                                                                                                                                       | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                        |         |
| Topic ARN  | The Amazon Resource Name (ARN) of the SNS topic. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html)                                                                                                                                                                 |         |
| Protocol   | The protocol to use for delivering messages to the endpoint (application, email, email-json, firehose, http, https, lambda, sms, or sqs). [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)                                                                          | https   |
| Endpoint   | The endpoint to receive notifications. Format depends on protocol: email address (email@example.com), URL (https://example.com), phone number (+12065551234), or ARN (arn:aws:sqs:us-east-1:123456789012:MyQueue). [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html) |         |
| Connection | The Amazon SNS connection to use.                                                                                                                                                                                                                                                              |         |

### Unsubscribe from a Topic {#unsubscribe}

Unsubscribe from an Amazon SNS Topic

| Input            | Comments                                                                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                           |         |
| Subscription ARN | The Amazon Resource Name (ARN) of the subscription. [Learn more](https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html) |         |
| Connection       | The Amazon SNS connection to use.                                                                                                 |         |
