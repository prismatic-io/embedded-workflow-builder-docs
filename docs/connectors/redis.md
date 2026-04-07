---
title: Redis Connector
sidebar_label: Redis
description: Manage items in a Redis database
---

![Redis](./assets/redis.png#connector-icon)
[Redis](https://redis.io/) is an in-memory data structure store used as a key-value database, cache, and message broker.
The **Redis** component provides the ability to create, read, update, and delete data inside a Redis database.

## API Documentation

This component was built using the [Redis command reference](https://redis.io/docs/latest/commands/).

## Connections

### Redis Connection {#redis}

Authenticate requests to a Redis server.

A Redis connection requires host and port information, along with optional authentication and TLS configuration.

#### Prerequisites

- A Redis server instance accessible from the network
- Authentication credentials if the server requires them

#### Configure the Connection

- **Host**: Enter the hostname or IP address of the Redis server
- **Port**: Enter the Redis server port (default is typically `6379`)
- **Password**: Enter the Redis server password
- **Username**: Enter the Redis username (optional - required only if ACL-based authentication is enabled)
- **Database**: Enter the logical database number to connect to (optional, e.g., `0`)

#### TLS Configuration

For encrypted connections, enable TLS and provide the necessary certificates:

- **Use TLS**: Set to `true` to enable TLS for the connection
- **Client Key**: Provide the client private key for mutual TLS authentication (optional)
- **Client Certificate**: Provide the client certificate for mutual TLS authentication (optional)
- **CA Certificate**: Provide the CA certificate to verify the server's identity (optional - if not provided, the server certificate is not verified)

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
