---
title: AMQP Connector
sidebar_label: AMQP
description: Send and receive messages on an AMQP-based message broker
---

![AMQP](./assets/amqp.png#connector-icon)
Send and receive messages on an AMQP-based message broker

## Connections

### AMQP Connection

Authenticate requests to an amqp server

An AMQP connection is comprised of a host name (this can be an IP address or FQDN endpoint), port, protocol and vhost.
For example, if you are told that your AMQP server is hosted at `amqps://amqp.example.com:5672/example/vhost`, enter `amqp.example.com` for the **host**, and `5672` for the **port**, select `AMQPS` for the **protocol**, and enter `example/vhost` for the **vhost**.

AMQP often requires authentication (a username and password), but some AMQP servers are anonymous and do not require authentication.
If the server you're interacting with is allows anonymous authentication, you can omit the **username** and **password** fields.

You can verify that your settings are correct using the this component's [Check AMQP Connection](#check-amqp-connection) action.

| Input    | Comments                                                                   | Default     |
| -------- | -------------------------------------------------------------------------- | ----------- |
| Host     | The IP address or endpoint of the AMQP server                              | 192.168.0.1 |
| Port     | The port of the AMQP server                                                | 5672        |
| Protocol | Provide the desired protocol in which you want to interact with the queue. | amqp        |
| Vhost    | The "example/vhost" portion of amqps://amqp.example.com:5672/example/vhost |             |
| Username | This can be omitted if the AMQP server allows anonymous authentication     |             |
| Password | This can be omitted if the AMQP server allows anonymous authentication     |             |

## Actions

### Acknowledge Message

Acknowledge a previously fetched message

| Input      | Comments                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                   |         |
| Message    | An AMQP message. This must reference the results of a previous 'Get Message' step |         |

### Check AMQP Connection

Verify that an AMQP server is available, and return the server's connection information. This is helpful for debugging purposes.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Message

Receives a message from an AMQP-based queue

| Input               | Comments                                                       | Default |
| ------------------- | -------------------------------------------------------------- | ------- |
| Queue Name          | Provide the name of the queue you would like to interact with. |         |
| Connection          |                                                                |         |
| Acknowledge Message | Automatically mark the message received as "Acknowledged"      | true    |

### Publish Message

Add a message to an AMQP-based queue

| Input         | Comments                                                                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                   |         |
| Queue Name    | Provide the name of the queue you would like to interact with. (Note: this input is required when Route Messages is false.)       |         |
| Exchange      | Provide the name of the exchange you would like to interact with. (Note: this parameter is required when Route Messages is true.) |         |
| Routing Key   | Provide the routing key you would like to use. (Note: this parameter is required when Route Messages is true.)                    |         |
| Route Message | If you would like to route this message, check this box.                                                                          | false   |
| Message       | Provide a message to push on to the queue.                                                                                        |         |

### Reject Message

Rejects one message from an AMQP-based queue

| Input      | Comments                                                       | Default |
| ---------- | -------------------------------------------------------------- | ------- |
| Queue Name | Provide the name of the queue you would like to interact with. |         |
| Connection |                                                                |         |
