---
title: MQTT Connector
sidebar_label: MQTT
description: Interact with an MQTT Queue
---

![MQTT](./assets/mqtt.png#connector-icon)
[Message Queuing Telemetry Transport](https://mqtt.org/) (MQTT) is a light-weight, efficient _publish-subscribe_ network protocol for sending messages between devices.
This component enables publishing messages to an MQTT queue topic.

## Protocol Specification

This component was built using the [MQTT protocol specification](https://mqtt.org/mqtt-specification/).

## Connections

### MQTT Connection {#mqtt}

Authenticate requests to an MQTT server.

An MQTT broker connection requires a host, protocol, and optionally authentication credentials.

#### Prerequisites

- An MQTT broker instance accessible from the network (e.g., Mosquitto, HiveMQ, AWS IoT Core)
- Broker credentials if authentication is enabled

#### Configure the Connection

- **Host**: Enter the hostname or IP address of the MQTT broker
- **Protocol**: Select the connection protocol:
  - **TCP** — standard unencrypted connection
  - **MQTT** — MQTT protocol (typically port 1883)
  - **MQTTS** — MQTT over TLS/SSL (typically port 8883)
- **Port**: Enter the broker port (optional - defaults depend on the selected protocol)
- **Username**: Enter the broker username (optional, required if authentication is enabled)
- **Password**: Enter the broker password (optional, required if authentication is enabled)

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
