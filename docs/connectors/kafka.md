---
title: Kafka Connector
sidebar_label: Kafka
description: Publish and consume messages from Apache Kafka event streams.
---

![Kafka](./assets/kafka.png#connector-icon)
[Apache Kafka](https://kafka.apache.org/) is an event streaming platform to implement high-performance data pipelines, streaming analytics, data integration, and other applications.
This component allows publishing and consuming messages to/from Apache Kafka event streams.

## Connections

### Basic Username/Password {#basic}

Basic Username and Password connection with optional SSL/TLS support.

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

Create a connection of type **Basic Username/Password** and enter:

- **Username**: Enter the username provided by the Kafka administrator or service provider
- **Password**: Enter the password or API key
- **Authentication Mechanism**: Select the SASL mechanism configured on the cluster:
  - `plain` - PLAIN SASL mechanism (transmits credentials in plaintext, use with SSL/TLS)
  - `scram-sha-256` - SCRAM-SHA-256 mechanism (recommended for production)
  - `scram-sha-512` - SCRAM-SHA-512 mechanism (higher security)
- **Enable SSL/TLS**: Check this option if the Kafka cluster requires secure connections
- **CA Certificate** (if SSL is enabled): Paste the Certificate Authority (CA) certificate in PEM format. This is required for SSL connections.
- **Client Certificate** (if required): Paste the client certificate in PEM format (only if the cluster requires mutual TLS authentication)
- **Client Key** (if required): Paste the client private key in PEM format (only if the cluster requires mutual TLS authentication)

:::warning[Security Recommendation]
For production environments, use SCRAM-SHA-256 or SCRAM-SHA-512 with SSL/TLS enabled. The PLAIN mechanism transmits credentials without hashing and should only be used over encrypted connections.
:::

:::info[SSL/TLS Certificates]
Certificates must be in PEM format. If the certificates are in other formats (JKS, PKCS12), convert them to PEM before pasting into the connection configuration.
:::

| Input                    | Comments                                                                            | Default |
| ------------------------ | ----------------------------------------------------------------------------------- | ------- |
| Username                 | Username.                                                                           |         |
| Password                 | Password.                                                                           |         |
| Authentication Mechanism | Desired authorization method for passing username/password.                         |         |
| Enable SSL/TLS           | Enable SSL/TLS for secure connections.                                              | false   |
| CA Certificate           | Certificate Authority (CA) certificate in PEM format. Required for SSL connections. |         |
| Client Certificate       | Client certificate in PEM format (if required by the Kafka cluster).                |         |
| Client Key               | Client private key in PEM format (if required by the Kafka cluster).                |         |

## Triggers

### Kafka Consumer {#kafkaconsumer}

Consume messages from Kafka topics on a schedule.

| Input                   | Comments                                                                                                       | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                |         |
| Client ID               | A Client Id is an optional identifier of a Kafka consumer that is passed to a Kafka broker with every request. |         |
| Brokers                 | A Kafka broker allows consumers to fetch messages by topic, partition and offset.                              |         |
| Consumer Group ID       | The consumer group ID to use for this consumer.                                                                |         |
| Topics                  | List of topics to subscribe to.                                                                                |         |
| Max Messages            | Maximum number of messages to consume per trigger execution.                                                   | 100     |
| Session Timeout (ms)    | The timeout for consumer session in milliseconds.                                                              | 30000   |
| Heartbeat Interval (ms) | The interval for sending heartbeats to the broker in milliseconds.                                             | 3000    |
| From Beginning          | Whether to start consuming from the beginning of the topic.                                                    | false   |
| Auto Commit             | Whether to automatically commit offsets after processing messages.                                             | true    |

## Actions

### Get Consumer Group Status {#getconsumergroupstatus}

Get the status and lag information for a consumer group. Specify topics for better performance, or leave empty to check all topics.

| Input             | Comments                                                                                                       | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                |         |
| Client ID         | A Client Id is an optional identifier of a Kafka consumer that is passed to a Kafka broker with every request. |         |
| Brokers           | A Kafka broker allows consumers to fetch messages by topic, partition and offset.                              |         |
| Consumer Group ID | The consumer group ID to check status for.                                                                     |         |
| Topics to Check   | Specific topics to check for this consumer group. Leave empty to check all topics (slower).                    |         |

### List Topics {#listtopics}

List all topics in the Kafka cluster.

| Input      | Comments                                                                                                       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                |         |
| Client ID  | A Client Id is an optional identifier of a Kafka consumer that is passed to a Kafka broker with every request. |         |
| Brokers    | A Kafka broker allows consumers to fetch messages by topic, partition and offset.                              |         |

### Publish Messages {#publishmessages}

Publish a message to an Apache Kafka topic.

| Input      | Comments                                                                                                       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                |         |
| Client ID  | A Client Id is an optional identifier of a Kafka consumer that is passed to a Kafka broker with every request. |         |
| Brokers    | A Kafka broker allows consumers to fetch messages by topic, partition and offset.                              |         |
| Topic      | A Topic is a category/feed name to which records are stored and published.                                     |         |
| Messages   | Provide a string for a message to be sent to the Kafka topic.                                                  |         |
