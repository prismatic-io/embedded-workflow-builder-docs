---
title: Liquid Template Connector
sidebar_label: Liquid Template
description: Transform data using a provided Liquid Template
---

![Liquid Template](./assets/liquid-template.png#connector-icon)
The [LiquidJS Templating Engine](https://liquidjs.com/) is a simple, expressive and safe templating system.
This component takes a template and data as inputs, and outputs a rendered document formatted by the template and populated with the data provided.

## Actions

### Render Template {#transform}

Receives provided json data and transforms it into a new format using a Liquid Template

| Input           | Comments                                                              | Default |
| --------------- | --------------------------------------------------------------------- | ------- |
| Data            | This JSON payload will be fed into the liquid template.               |         |
| Liquid Template | The Liquid Template that will be used to transform the provided data. |         |
