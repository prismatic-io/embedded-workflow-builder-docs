---
title: Redis Connector
sidebar_label: Redis
description: Manage items in a Redis database
---

![Redis](./assets/redis.png#connector-icon)
Manage items in a Redis database

## Connections

### Redis Connection {#redis}

Authenticate requests to a Redis server.

| Input              | Comments                                                                                                 | Default     |
| ------------------ | -------------------------------------------------------------------------------------------------------- | ----------- |
| Host               | Provide the string value for the host of the server.                                                     | 192.168.0.1 |
| Port               | The port of the redis server.                                                                            |             |
| Password           |                                                                                                          |             |
| Username           |                                                                                                          |             |
| Database           | Select a logical database to connect to.                                                                 |             |
| Use TLS            | Set to true to enable TLS for the connection.                                                            | false       |
| Client Key         | Provide the client key for the TLS connection.                                                           |             |
| Client Certificate | Provide the client certificate for the TLS connection.                                                   |             |
| CA Certificate     | Provide the CA certificate for the TLS connection. If not provided, the connection will not be verified. |             |

## Actions

### Delete Key {#deletekey}

Delete the value of a key

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Key        | Provide a string value for key of the item. |         |
| Connection |                                             |         |

### Flush All {#flushall}

Delete all the keys of all the existing databases, not just the currently selected one

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get {#get}

Get the value of a key

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Connection |                                             |         |
| Key        | Provide a string value for key of the item. |         |

### Get Time {#gettime}

Get the local time of the redis server

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Keys {#keys}

Returns all keys matching a specified pattern

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Key        | Provide a string value for key of the item. |         |
| Connection |                                             |         |

### Ping {#ping}

Send a ping to the redis server

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Set {#set}

Set the value of a key

| Input      | Comments                                    | Default |
| ---------- | ------------------------------------------- | ------- |
| Key        | Provide a string value for key of the item. |         |
| Value      | Provide a string for the value to be set.   |         |
| Connection |                                             |         |
