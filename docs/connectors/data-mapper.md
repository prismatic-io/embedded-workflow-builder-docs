---
title: Data Mapper Connector
sidebar_label: Data Mapper
description: Map input values to output values using a specified mapping
---

![Data Mapper](./assets/data-mapper.png#connector-icon)
The **data mapper** component allows you to apply a _map_ to a value or list of values.
This is handy if you have a list of items, and would like to categorize each item.

## Actions

### Value List Mapper {#valuelistmapper}

Map list of inputs to list of outputs using a map object

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Input Value List | This is a list of keys that will be mapped to values using the Value Map.         |         |
| Value Map        | A key/value map that matches inputs by key and returns their associated value(s). |         |

### Value Mapper {#valuemapper}

Map an input to an output using a map object

| Input       | Comments                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------- | ------- |
| Input Value | This is the key that will be used to find a value from the Value Map              |         |
| Value Map   | A key/value map that matches inputs by key and returns their associated value(s). |         |
