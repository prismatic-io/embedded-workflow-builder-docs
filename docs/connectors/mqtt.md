---
title: MQTT Connector
sidebar_label: MQTT
description: Interact with an MQTT Queue
---

![MQTT](./assets/mqtt.png#connector-icon)
[Message Queuing Telemetry Transport](https://mqtt.org/) (MQTT) is a light-weight, efficient _publish-subscribe_ network protocol for sending messages between devices.
This component allows you to publish messages to an MQTT queue topic.

## Connections

### MQTT Connection {#mqtt}

Authenticate requests to an MQTT server.

| Input    | Comments                                                  | Default |
| -------- | --------------------------------------------------------- | ------- |
| Host     | Provide the string value for the host of the MQTT server. |         |
| Protocol | The protocol used to connect to the MQTT server.          |         |
| Port     | The port of the MQTT server.                              |         |
| Username |                                                           |         |
| Password |                                                           |         |

## Actions

### Publish Message {#publish}

Publish a message to a MQTT topic.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Topic Name | Provide a string value for the name of the MQTT topic. |         |
| Message    | Provide a string value to be sent to the MQTT topic.   |         |
| Connection |                                                        |         |
