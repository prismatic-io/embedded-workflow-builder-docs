---
title: MessagePack Connector
sidebar_label: MessagePack
description: Efficiently serialize or deserialize data into a JSON-like format using msgpack
---

![MessagePack](./assets/messagepack.png#connector-icon)
[MessagePack](https://msgpack.org/) is an efficient binary serialization format.
It lets you exchange data among multiple languages like JSON.
But it's faster and smaller.
Small integers are encoded into a single byte, and typical short strings require only one extra byte in addition to the strings themselves.
See MessagePack's website for encoding information.

## Actions

### Decode {#decodemessage}

Decode a MessagePack message into an object

| Input   | Comments                      | Default |
| ------- | ----------------------------- | ------- |
| Message | Messagepack message to decode |         |

### Encode {#encodemessage}

Encode an object into MessagePack

| Input | Comments                | Default |
| ----- | ----------------------- | ------- |
| Data  | Data / object to encode |         |
