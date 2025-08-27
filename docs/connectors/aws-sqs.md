---
title: Amazon SQS Connector
sidebar_label: Amazon SQS
description: Send, receive and manage messages within an Amazon (AWS) SQS queue
---

![Amazon SQS](./assets/aws-sqs.png#connector-icon)
Send, receive and manage messages within an Amazon (AWS) SQS queue

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

- When adding permissions provide the **AmazonSQSFullAccess** permission
- Complete remaining steps and select **Create Role**

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

### AWS SQS Access Key and Secret

Authenticates requests to Amazon SQS using an API Key and API Secret

An AWS IAM [access key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) is required to interact with Amazon SQS.
Make sure that the key pair you generate in AWS has proper permissions to the SQS resources you want to access.
Read more about SQS IAM policies in the [AWS docs](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-authentication-and-access-control.html).

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

## Triggers

### New Messages

Checks for new messages in the queue on a configured schedule.

| Input                     | Comments                                                                                                                                                               | Default    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- | --- |
| Queue URL                 | You require the queue URL to send, receive, and delete queue messages. A queue URL is constructed in the following format: https://{REGION_ENDPOINT}/queue.            | api-domain | /{YOUR_ACCOUNT_NUMBER}/{YOUR_QUEUE_NAME} |     |
| Connection                |                                                                                                                                                                        |            |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                |            |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |            |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |            |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |            |

## Actions

### Create Dead Letter Queue

Create an Amazon SQS Dead Letter Queue

| Input                       | Comments                                                                                                                                                                                                                                                                                        | Default |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Main Queue Name             | The name of a new queue. Can only include alphanumeric characters, hyphens, or underscores and must be 1 to 80 characters in length. FIFO queues must end with the .fifo suffix.                                                                                                                |         |
| FIFO Queue                  | This flag enables the creation of a FIFO Queue. Once you create a FIFO queue you cannot change it to a standard queue. When active, the main and dead letter queues will be FIFO.                                                                                                               | false   |
| Content Based Deduplication | This flag enables Content Based Deduplication on a FIFO queue. Once you create a FIFO queue you cannot change the value of this input. When active, the main and dead letter queues will enable content-based deduplication.                                                                    | false   |
| Dead Letter Queue Name      | The name of the dead letter queue where messages will be sent after exceeding the maximum number of receive attempts in the main queue. Can only include alphanumeric characters, hyphens, or underscores and must be 1 to 80 characters in length. FIFO queues must end with the .fifo suffix. |         |
| Max Receive Count           | The maximum number of times a message is delivered to the source queue before being moved to the dead letter queue. Must be greater than or equal to 1.                                                                                                                                         | 5       |
| Tags                        | The list of tags you want to tag your AWS SQS queue with. Tags are included in both queues.                                                                                                                                                                                                     |         |
| Connection                  |                                                                                                                                                                                                                                                                                                 |         |
| AWS Region                  | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                         |         |
| Dynamic Access Key ID       | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                                                                                                     |         |
| Dynamic Secret Access Key   | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                                                                                          |         |
| Dynamic Session Token       | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                                                                                                        |         |

### Create Queue

Create an Amazon SQS Queue

| Input                       | Comments                                                                                                                                                                         | Default |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Name                        | The name of a new queue. Can only include alphanumeric characters, hyphens, or underscores and must be 1 to 80 characters in length. FIFO queues must end with the .fifo suffix. |         |
| FIFO Queue                  | This flag enables the creation of a FIFO Queue. Once you create a FIFO queue you cannot change it to a standard queue.                                                           | false   |
| Content Based Deduplication | This flag enables Content Based Deduplication on a FIFO queue. Once you create a FIFO queue you cannot change the value of this input.                                           | false   |
| Tags                        | The list of tags you want to tag your AWS SQS queue with.                                                                                                                        |         |
| Connection                  |                                                                                                                                                                                  |         |
| AWS Region                  | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                          |         |
| Dynamic Access Key ID       | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                      |         |
| Dynamic Secret Access Key   | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.           |         |
| Dynamic Session Token       | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                         |         |

### Delete Message

Delete a message from an Amazon SQS Queue

| Input                     | Comments                                                                                                                                                                                       | Default    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- | --- |
| Queue URL                 | You require the queue URL to send, receive, and delete queue messages. A queue URL is constructed in the following format: https://{REGION_ENDPOINT}/queue.                                    | api-domain | /{YOUR_ACCOUNT_NUMBER}/{YOUR_QUEUE_NAME} |     |
| Receipt Handle            | Every time you receive a message from a queue, you receive a receipt handle for that message. This handle is associated with the action of receiving the message, not with the message itself. |            |
| Connection                |                                                                                                                                                                                                |            |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                        |            |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                    |            |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                         |            |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                       |            |

### Delete Queue

Delete an Amazon SQS Queue

| Input                     | Comments                                                                                                                                                               | Default    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- | --- |
| Queue URL                 | You require the queue URL to send, receive, and delete queue messages. A queue URL is constructed in the following format: https://{REGION_ENDPOINT}/queue.            | api-domain | /{YOUR_ACCOUNT_NUMBER}/{YOUR_QUEUE_NAME} |     |
| Connection                |                                                                                                                                                                        |            |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                |            |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |            |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |            |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |            |

### Get a Queue's URL

Get the URL of an Amazon SQS Queue given its name

| Input                     | Comments                                                                                                                                                                         | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Name                      | The name of a new queue. Can only include alphanumeric characters, hyphens, or underscores and must be 1 to 80 characters in length. FIFO queues must end with the .fifo suffix. |         |
| Connection                |                                                                                                                                                                                  |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                          |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                      |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.           |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                         |         |

### List Queues

Fetch a list of Amazon SQS Queues

| Input                     | Comments                                                                                                                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Queue Prefix              | A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned. <strong>Case-sensitive</strong>.           |         |
| Max Results               | The maximum number of results to return. <strong>Must be between 1 and 1000</strong>.                                                                                  |         |
| Next Token                | The next token to return.                                                                                                                                              |         |
| Fetch All                 | Turn this On to fetch all results. It will ignore the Max Results and Next Token inputs.                                                                               | false   |
| Connection                |                                                                                                                                                                        |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |         |

### Receive Messages

Receive messages from an Amazon SQS Queue

| Input                     | Comments                                                                                                                                                                                                                                                                                                 | Default    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- | --- |
| Queue URL                 | You require the queue URL to send, receive, and delete queue messages. A queue URL is constructed in the following format: https://{REGION_ENDPOINT}/queue.                                                                                                                                              | api-domain | /{YOUR_ACCOUNT_NUMBER}/{YOUR_QUEUE_NAME} |     |
| Max Messages              | Provide a number for the max amount of values to be returned.                                                                                                                                                                                                                                            |            |
| Wait Time (seconds)       | The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. If a message is available, the call returns sooner than WaitTimeSeconds. If no messages are available and the wait time expires, the call returns successfully with an empty list of messages. |            |
| Connection                |                                                                                                                                                                                                                                                                                                          |            |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                                  |            |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                                                                                                              |            |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                                                                                                   |            |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                                                                                                                 |            |

### Send Message

Send a message to an Amazon SQS Queue

| Input                     | Comments                                                                                                                                                                                                                                                                                                                        | Default    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- | --- |
| Queue URL                 | You require the queue URL to send, receive, and delete queue messages. A queue URL is constructed in the following format: https://{REGION_ENDPOINT}/queue.                                                                                                                                                                     | api-domain | /{YOUR_ACCOUNT_NUMBER}/{YOUR_QUEUE_NAME} |     |
| Message                   | Provide a string containing the message you would like to send.                                                                                                                                                                                                                                                                 |            |
| Message Group Id          | The message group ID is the tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are always processed one by one, in a strict order relative to the message group (however, messages that belong to different message groups might be processed out of order). |            |
| Message deduplication ID  | The message deduplication ID is the token used for deduplication of sent messages. If a message with a particular message deduplication ID is sent successfully, any messages sent with the same message deduplication ID are accepted successfully but aren't delivered during the 5-minute deduplication interval.            |            |
| Attributes                | Amazon SQS lets you include structured metadata (such as timestamps, geospatial data, signatures, and identifiers) with messages using message attributes. Each message can have up to 10 attributes.                                                                                                                           |            |
| Delay Seconds             | Provide a number of optional seconds to delay sending a message.                                                                                                                                                                                                                                                                |            |
| Connection                |                                                                                                                                                                                                                                                                                                                                 |            |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                                                         |            |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                                                                                                                                     |            |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                                                                                                                          |            |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                                                                                                                                        |            |
