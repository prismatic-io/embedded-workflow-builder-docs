---
title: Kafka Connector
sidebar_label: Kafka
description: Publish messages to an Apache Kafka event stream
---

![Kafka](./assets/kafka.png#connector-icon)
[Apache Kafka](https://kafka.apache.org/) is an event streaming platform to implement high-performance data pipelines, streaming analytics, data integration, and other applications.
This component allows you to publish messages to an Apache Kafka event stream.

## Connections

### Basic Username/Password {#basic}

Basic Username and Password connection

| Input                    | Comments                                                    | Default |
| ------------------------ | ----------------------------------------------------------- | ------- |
| Username                 | Username                                                    |         |
| Password                 | Password                                                    |         |
| Authentication Mechanism | Desired authorization method for passing username/password. |         |

## Actions

### Publish Messages {#publishmessages}

Publish a message to an Apache Kafka topic.

| Input      | Comments                                                                                                       | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                |         |
| Client ID  | A Client Id is an optional identifier of a Kafka consumer that is passed to a Kafka broker with every request. |         |
| Brokers    | A Kafka broker allows consumers to fetch messages by topic, partition and offset.                              |         |
| Topic      | A Topic is a category/feed name to which records are stored and published.                                     |         |
| Messages   | Provide a string for a message to be sent to the Kafka topic                                                   |         |
