---
title: Amazon SES Connector
sidebar_label: Amazon SES
description: Send Emails through Amazon (AWS) SES
---

![Amazon SES](./assets/aws-ses.png#connector-icon)
Send Emails through Amazon (AWS) SES

## Connections

### AWS Role ARN

Connect to AWS using an assumed role

To enable the IAM role authentication begin by logging into the [AWS Console](https://aws.amazon.com/) and navigate to Identity and Access Management (IAM).

To create a user and generate credentials:

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

- When adding permissions provide the **AmazonSESFullAccess** permission
- Complete remaining steps and select **Create Role**

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

### AWS SES Access Key and Secret

Authenticates requests to Amazon SES using an API Key and API Secret

An AWS IAM [access key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) is required to interact with Amazon SES.
Make sure that the key pair you generate in AWS has proper permissions to the SES resources you want to access.
Read about Amazon SES IAM policies in the [AWS docs](https://docs.aws.amazon.com/ses/latest/dg/control-user-access.html).

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

## Actions

### List Identities

List Identities available in Amazon SES

| Input         | Comments                                                                                                | Default      |
| ------------- | ------------------------------------------------------------------------------------------------------- | ------------ |
| AWS Region    | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                 |              |
| Identity Type | Provide the type of identity you want to list.                                                          | EmailAddress |
| Next Token    | Specify the pagination token that's returned by a previous request to retrieve the next page of results |              |
| Connection    |                                                                                                         |              |

### Send Email

Send an email through Amazon SES

| Input        | Comments                                                                                                                                                                                                                                                                 | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| AWS Region   | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                  |         |
| To Address   | The destination for this email. The recipients to place on the To: line of the message.                                                                                                                                                                                  |         |
| Cc Address   | The destination for this email. The recipients to place on the CC: line of the message.                                                                                                                                                                                  |         |
| Bcc Address  | The destination for this email. The recipients to place on the BCC: line of the message.                                                                                                                                                                                 |         |
| Sender Email | The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES.                                                                                           |         |
| Reply To     | The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. |         |
| Subject      | The subject of the message: A short summary of the content, which will appear in the recipient's inbox.                                                                                                                                                                  |         |
| Text         | The content of the message, in text format. Use this for text-based email clients, or clients on high-latency networks (such as mobile devices).                                                                                                                         |         |
| Html         | The content of the message, in HTML format. Use this for email clients that can process HTML. You can include clickable links, formatted text, and much more in an HTML message.                                                                                         |         |
| Attachments  | Specify a file name as the key (i.e. 'my-file.pdf'), and the file as the value                                                                                                                                                                                           |         |
| Connection   |                                                                                                                                                                                                                                                                          |         |
