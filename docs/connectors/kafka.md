---
title: Kafka Connector
sidebar_label: Kafka
description: Publish and consume messages from Apache Kafka event streams.
---

![Kafka](./assets/kafka.png#connector-icon)
Publish and consume messages from Apache Kafka event streams.

## Connections

### Basic Username/Password {#basic}

Basic Username and Password connection with optional SSL/TLS support.

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
