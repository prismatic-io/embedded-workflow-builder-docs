---
title: JSONata Connector
sidebar_label: JSONata
description: Transform data using the JSONata query and transformation language
---

![JSONata](./assets/jsonata.png#connector-icon)
[JSONata](https://jsonata.org/) is a query and transformation language for JSON data.
This component allows you to transform data using the JSONata query and transformation language.
JSONata is helpful when you have a predictable data structure as an input, and you want to output a modified data structure.
JSONata includes common functions you might execute on a data set - things like `map`, `filter`, `sort`, `sum`, `string.split` (the list goes on).

## Actions

### Transform {#transform}

Transform data using JSONata

| Input      | Comments                                                               | Default |
| ---------- | ---------------------------------------------------------------------- | ------- |
| Expression | A JSONata expression used to generate a string.                        |         |
| Data       | This is an object with properties to feed into the JSONata expression. |         |
