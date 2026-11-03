---
title: Kafka Connector
sidebar_label: Kafka
description: Publish and consume messages from Apache Kafka event streams.
---

![Kafka](./assets/kafka.png#connector-icon)
[Apache Kafka](https://kafka.apache.org/) is an event streaming platform to implement high-performance data pipelines, streaming analytics, data integration, and other applications.
This component allows publishing and consuming messages to/from Apache Kafka event streams.

## Connections

### Basic Authentication {#basic}

Authenticate using a username and password, with optional SSL/TLS support.

Apache Kafka supports authentication using username and password with various SASL mechanisms. This connection requires credentials from the Kafka cluster administrator or from the managed Kafka service provider.

#### Prerequisites

- A Kafka cluster with SASL authentication enabled
- Username and password credentials with appropriate permissions
- Knowledge of the SASL mechanism configured on the cluster (PLAIN, SCRAM-SHA-256, or SCRAM-SHA-512)
- SSL/TLS certificates (if required by the Kafka cluster)

#### Setup Steps

**For managed Kafka services (e.g., Confluent Cloud, Amazon MSK, Azure Event Hubs):**

1. Navigate to the service provider's console
2. Locate the Kafka cluster and access the security settings
3. Generate or obtain API credentials (username and API key/password)
4. Note the SASL mechanism configured for the cluster
5. Download SSL certificates if required

**For self-hosted Kafka clusters:**

1. Contact the Kafka cluster administrator
2. Request credentials with the appropriate permissions for the use case
3. Obtain the SASL mechanism type configured on the cluster
4. Obtain SSL/TLS certificates if the cluster requires secure connections

Refer to the [Kafka SASL authentication documentation](https://kafka.apache.org/41/security/authentication-using-sasl/) for more information on authentication mechanisms.

#### Configure the Connection

Create a connection of type **Basic Authentication** and enter:

- **Username**: Enter the username provided by the Kafka administrator or service provider
- **Password**: Enter the password or API key
- **Authentication Mechanism**: Select the SASL mechanism configured on the cluster:
  - `plain` - PLAIN SASL mechanism (transmits credentials in plaintext, use with SSL/TLS)
  - `scram-sha-256` - SCRAM-SHA-256 mechanism (recommended for production)
  - `scram-sha-512` - SCRAM-SHA-512 mechanism (higher security)
- **Enable SSL/TLS**: Check this option if the Kafka cluster requires secure connections
- **CA Certificate** (if SSL is enabled): Paste the Certificate Authority (CA) certificate in PEM format. This is required for SSL connections. Convert certificates in other formats (JKS, PKCS12) to PEM before pasting.
- **Client Certificate** (if required): Paste the client certificate in PEM format (only if the cluster requires mutual TLS authentication)
- **Client Key** (if required): Paste the client private key in PEM format (only if the cluster requires mutual TLS authentication)
- **Enable Avro Deserialization** and the **Schema Registry** fields (optional): Only needed when the **Kafka Consumer** trigger should decode Avro messages through a Confluent Schema Registry

| Input                       | Comments                                                                                                                                                                     | Default |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Username                    | The SASL username used to authenticate with the Kafka brokers, issued by the cluster administrator or the managed Kafka provider's console.                                  |         |
| Password                    | The SASL password paired with the username, issued alongside it by the cluster administrator or the managed Kafka provider's console.                                        |         |
| Authentication Mechanism    | Desired authorization method for passing username/password.                                                                                                                  |         |
| Enable SSL/TLS              | Enable SSL/TLS for secure connections.                                                                                                                                       | false   |
| CA Certificate              | Certificate Authority (CA) certificate in PEM format. Leave blank to use the default trust store when the brokers present a publicly trusted certificate.                    |         |
| Client Certificate          | Client certificate in PEM format (if required by the Kafka cluster).                                                                                                         |         |
| Client Key                  | Client private key in PEM format (if required by the Kafka cluster).                                                                                                         |         |
| Enable Avro Deserialization | Enable Confluent Schema Registry Avro decoding for consumed messages.                                                                                                        | false   |
| Schema Registry URL         | The Confluent Schema Registry endpoint, such as `https://psrc-xxxxx.region.confluent.cloud`, shown in the Confluent Cloud console on the environment's Schema Registry page. |         |
| Schema Registry API Key     | API key for authenticating with the Schema Registry. Create one in the Confluent Cloud console under the environment's Schema Registry API keys.                             |         |
| Schema Registry API Secret  | API secret paired with the Schema Registry API key. It is shown once, when the key is created in the Confluent Cloud console.                                                |         |

### IAM Access Key and Secret {#awsaccesskeysecret}

Authenticates to an Amazon MSK cluster that uses IAM access control with an AWS IAM access key and secret.

An AWS IAM [access key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) is required to connect to an Amazon MSK cluster that uses [IAM access control](https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html).
The component signs a SASL/OAUTHBEARER token with the key pair for every broker connection, so no Kafka username or password is involved.

#### Prerequisites

- An Amazon MSK cluster with IAM access control enabled on its brokers
- An IAM user or policy that grants the [`kafka-cluster` actions](https://docs.aws.amazon.com/msk/latest/developerguide/kafka-actions.html) the integration needs (for example `kafka-cluster:Connect`, `kafka-cluster:DescribeTopic`, `kafka-cluster:ReadData`, `kafka-cluster:WriteData`, `kafka-cluster:DescribeGroup`, and `kafka-cluster:AlterGroup`)
- Network access from the integration runtime to the cluster's IAM bootstrap brokers

Refer to the [MSK client configuration guide](https://docs.aws.amazon.com/msk/latest/developerguide/configure-clients-for-iam-access-control.html) for the IAM bootstrap broker endpoints and the permissions each Kafka operation requires.

#### Setup Steps

To create an IAM access key pair:

1. Sign in to the [AWS Console](https://aws.amazon.com/) and navigate to **Identity and Access Management (IAM)**
2. Select the IAM user that holds the `kafka-cluster` permissions, open **Security credentials**, and select **Create access key**
3. Once created, copy the **Access key** and **Secret access key** and enter them into the connection configuration of the integration

#### Configure the Connection

Create a connection of type **IAM Access Key and Secret** and enter:

- **Access Key ID**: The IAM access key ID
- **Secret Access Key**: The IAM secret access key
- **AWS Region**: The Region of the MSK cluster (e.g., `us-east-1`), used to sign the authentication token
- **CA Certificate** (optional): A CA certificate in PEM format. This connection always uses TLS. Leave blank to trust the Amazon-issued broker certificates
- **Enable Avro Deserialization** and the **Schema Registry** fields (optional): Only needed when the **Kafka Consumer** trigger should decode Avro messages through a Confluent Schema Registry

On every action, trigger, and topic dropdown that uses this connection, also fill in:

- **Brokers**: The cluster's IAM bootstrap broker addresses

| Input                       | Comments                                                                                                                                                                                                        | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Access Key ID               | AWS IAM Access Key ID used for programmatic access. Create access keys in the [AWS IAM Console](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) under Security Credentials.   |         |
| Secret Access Key           | AWS IAM Secret Access Key paired with the Access Key ID. This value is only shown once when created in the [AWS IAM Console](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |
| AWS Region                  | The AWS Region of the Amazon MSK cluster, used to sign the authentication token.                                                                                                                                |         |
| CA Certificate              | Certificate Authority (CA) certificate in PEM format. Leave blank to trust the Amazon-issued broker certificates through the default trust store.                                                               |         |
| Enable Avro Deserialization | Enable Confluent Schema Registry Avro decoding for consumed messages.                                                                                                                                           | false   |
| Schema Registry URL         | The Confluent Schema Registry endpoint, such as `https://psrc-xxxxx.region.confluent.cloud`, shown in the Confluent Cloud console on the environment's Schema Registry page.                                    |         |
| Schema Registry API Key     | API key for authenticating with the Schema Registry. Create one in the Confluent Cloud console under the environment's Schema Registry API keys.                                                                |         |
| Schema Registry API Secret  | API secret paired with the Schema Registry API key. It is shown once, when the key is created in the Confluent Cloud console.                                                                                   |         |

### IAM Role ARN {#awsassumerole}

Authenticates to an Amazon MSK cluster that uses IAM access control by assuming an AWS IAM role.

AWS Assume Role authentication connects to an Amazon MSK cluster that uses [IAM access control](https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html) by assuming an IAM role with temporary security credentials.
This method is useful for cross account access or when implementing principle of least privilege.

Refer to the [AWS documentation on assuming roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage-assume.html) for detailed information.

#### Prerequisites

- Completed [IAM Access Key and Secret](#awsaccesskeysecret) connection setup (access key pair required)
- Appropriate permissions to create IAM roles
- Network access from the integration runtime to the cluster's IAM bootstrap brokers

#### Setup Steps

An IAM user with access keys is required to assume a role. If access keys have not been created, follow the [IAM Access Key and Secret](#awsaccesskeysecret) setup steps first, then return here to create the IAM role.

##### Create an IAM Role with Trust Policy

1. Sign in to the [AWS Console](https://aws.amazon.com/), open **Identity and Access Management (IAM)**, navigate to **Roles** and select **Create Role**
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

4. Click **Next** and attach a policy that grants the [`kafka-cluster` actions](https://docs.aws.amazon.com/msk/latest/developerguide/kafka-actions.html) the integration needs (for example `kafka-cluster:Connect`, `kafka-cluster:DescribeTopic`, `kafka-cluster:ReadData`, `kafka-cluster:WriteData`, `kafka-cluster:DescribeGroup`, and `kafka-cluster:AlterGroup`)
5. Complete the remaining steps and select **Create Role**
6. Copy the **Role ARN** from the role summary (format: `arn:aws:iam::123456789012:role/role-name`)

#### Configure the Connection

Create a connection of type **IAM Role ARN** and enter:

- **Role ARN**: The ARN of the IAM role to assume
- **Access Key ID**: From the IAM user (see [IAM Access Key and Secret](#awsaccesskeysecret))
- **Secret Access Key**: From the IAM user
- **External ID** (optional): The external ID that the role's trust policy checks with an `sts:ExternalId` condition, used for cross-account access. Refer to the [AWS documentation on external IDs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id)
- **AWS Region**: The Region of the MSK cluster (e.g., `us-east-1`), used both for the STS call that assumes the role and to sign the authentication token
- **CA Certificate** (optional): A CA certificate in PEM format. Leave blank to trust the Amazon-issued broker certificates
- **Enable Avro Deserialization** and the **Schema Registry** fields (optional): Only needed when the **Kafka Consumer** trigger should decode Avro messages through a Confluent Schema Registry

On every action, trigger, and topic dropdown that uses this connection, also fill in:

- **Brokers**: The cluster's IAM bootstrap broker addresses

#### Verify Connection

The IAM user credentials assume the role, which provides temporary credentials with the role's attached permissions. Ensure the trust policy correctly references the IAM user ARN. The role is assumed once per client and the signed token is reused for every broker connection made by that client.

| Input                       | Comments                                                                                                                                                                                                                                                                                                                                                         | Default |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN                    | The ARN of the IAM role to assume, copied from the role's summary page in the IAM console. The role's trust policy must allow the IAM user behind the access key to [assume it](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage-assume.html).                                                                                                   |         |
| Access Key ID               | AWS IAM Access Key ID used for programmatic access. Create access keys in the [AWS IAM Console](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) under Security Credentials.                                                                                                                                                    |         |
| Secret Access Key           | AWS IAM Secret Access Key paired with the Access Key ID. This value is only shown once when created in the [AWS IAM Console](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).                                                                                                                                                  |         |
| External ID                 | A shared value that must match the `sts:ExternalId` condition in the role's trust policy, shown on the role's Trust relationships tab in the IAM console. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |
| AWS Region                  | The AWS Region of the Amazon MSK cluster, used to sign the authentication token and to call AWS STS when assuming the role.                                                                                                                                                                                                                                      |         |
| CA Certificate              | Certificate Authority (CA) certificate in PEM format. Leave blank to trust the Amazon-issued broker certificates through the default trust store.                                                                                                                                                                                                                |         |
| Enable Avro Deserialization | Enable Confluent Schema Registry Avro decoding for consumed messages.                                                                                                                                                                                                                                                                                            | false   |
| Schema Registry URL         | The Confluent Schema Registry endpoint, such as `https://psrc-xxxxx.region.confluent.cloud`, shown in the Confluent Cloud console on the environment's Schema Registry page.                                                                                                                                                                                     |         |
| Schema Registry API Key     | API key for authenticating with the Schema Registry. Create one in the Confluent Cloud console under the environment's Schema Registry API keys.                                                                                                                                                                                                                 |         |
| Schema Registry API Secret  | API secret paired with the Schema Registry API key. It is shown once, when the key is created in the Confluent Cloud console.                                                                                                                                                                                                                                    |         |

## Triggers

### Kafka Consumer {#kafkaconsumer}

Consume messages from Kafka topics on a schedule.

| Input                    | Comments                                                                                                                                                                                  | Default         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection               | The Kafka connection to use.                                                                                                                                                              |                 |
| Client ID                | The identifier of this Kafka client, sent to the brokers with every request and used in broker logs, metrics, and quotas.                                                                 |                 |
| Brokers                  | A Kafka broker allows consumers to fetch messages by topic, partition and offset.                                                                                                         | <code>[]</code> |
| Consumer Group ID        | The unique identifier for the consumer group. Consumers that share this ID split the topic partitions between them and share committed offsets.                                           |                 |
| Topics                   | List of topics to subscribe to.                                                                                                                                                           | <code>[]</code> |
| Max Messages             | Maximum number of messages to consume per trigger execution. Must be at least 1. Defaults to 100.                                                                                         | 100             |
| Session Timeout (ms)     | How long the broker waits without a heartbeat before it removes this consumer from the group and rebalances, in milliseconds.                                                             | 30000           |
| Heartbeat Interval (ms)  | How often this consumer sends heartbeats to the group coordinator to keep its session alive, in milliseconds. Must be lower than Session Timeout, typically no more than one third of it. | 3000            |
| Consumer Options         | Options that control where consumption starts, whether offsets are auto-committed, and whether message keys are deserialized from Avro.                                                   |                 |
| From Beginning           | When true, starts consuming from the beginning of the topic instead of the last committed offset.                                                                                         | false           |
| Auto Commit              | When true, automatically commits offsets after processing messages.                                                                                                                       | true            |
| Deserialize Keys as Avro | When true, also deserializes message keys from Avro format. Requires Avro deserialization to be enabled on the connection.                                                                | false           |

## Actions

### Get Consumer Group Status {#getconsumergroupstatus}

Get the status and lag information for a consumer group. Specify topics for better performance, or leave empty to check all topics.

| Input             | Comments                                                                                                                  | Default         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection        | The Kafka connection to use.                                                                                              |                 |
| Client ID         | The identifier of this Kafka client, sent to the brokers with every request and used in broker logs, metrics, and quotas. |                 |
| Brokers           | A Kafka broker allows consumers to fetch messages by topic, partition and offset.                                         | <code>[]</code> |
| Consumer Group ID | The consumer group ID to check status for.                                                                                |                 |
| Topics to Check   | Specific topics to check for this consumer group. Leave empty to check all topics (slower).                               | <code>[]</code> |

### List Topics {#listtopics}

List all topics in the Kafka cluster.

| Input      | Comments                                                                                                                  | Default         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection | The Kafka connection to use.                                                                                              |                 |
| Client ID  | The identifier of this Kafka client, sent to the brokers with every request and used in broker logs, metrics, and quotas. |                 |
| Brokers    | A Kafka broker allows consumers to fetch messages by topic, partition and offset.                                         | <code>[]</code> |

### Publish Messages {#publishmessages}

Publish one or more messages to an Apache Kafka topic.

| Input      | Comments                                                                                                                  | Default         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection | The Kafka connection to use.                                                                                              |                 |
| Client ID  | The identifier of this Kafka client, sent to the brokers with every request and used in broker logs, metrics, and quotas. |                 |
| Brokers    | A Kafka broker allows consumers to fetch messages by topic, partition and offset.                                         | <code>[]</code> |
| Topic      | A Topic is a category/feed name to which records are stored and published.                                                |                 |
| Messages   | The messages to publish. Each entry's value is sent as the message body; keys are not used.                               | <code>[]</code> |
