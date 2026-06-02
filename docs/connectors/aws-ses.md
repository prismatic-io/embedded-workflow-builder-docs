---
title: Amazon SES Connector
sidebar_label: Amazon SES
description: Send Emails through Amazon (AWS) SES
---

![Amazon SES](./assets/aws-ses.png#connector-icon)
Send Emails through Amazon (AWS) SES

## Connections

### AWS Role ARN {#awsassumerole}

Connect to AWS using an assumed role

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

### AWS SES Access Key and Secret {#apikeysecret}

Authenticates requests to Amazon SES using an API Key and API Secret

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

## Actions

### List Identities {#listidentities}

List Identities available in Amazon SES

| Input         | Comments                                                                                                        | Default      |
| ------------- | --------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection    |                                                                                                                 |              |
| AWS Region    | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                         |              |
| Identity Type | Provide the type of identity you want to list.                                                                  | EmailAddress |
| Fetch All     | When enabled, automatically fetches all pages of results. The Next Token input is ignored when this is enabled. | false        |
| Next Token    | Specify the pagination token that's returned by a previous request to retrieve the next page of results         |              |

### Send Email {#sendemail}

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
