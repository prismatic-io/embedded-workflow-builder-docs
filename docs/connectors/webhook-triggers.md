---
title: Universal Webhook Connector
sidebar_label: Universal Webhook
description: The Universal Webhook trigger allows you to invoke a flow by making an HTTP request to the trigger's URL.
---

![Universal Webhook](./assets/webhook-triggers.png#connector-icon)
The **Universal Webhook Trigger** component provides a standard webhook trigger that allows integrations to be executed via an HTTP POST request.

## Triggers

### Universal Webhook {#webhook}

Invoke a flow by making an HTTP request to the trigger's URL.

| Input                       | Comments                                                              | Default |
| --------------------------- | --------------------------------------------------------------------- | ------- |
| Response Status Code        | The HTTP status code to use for the response                          |         |
| Response Content Type       | The Content-Type header to use for the response                       |         |
| Additional Response Headers | List of key/value pairs to use as additional headers for the response |         |
| Response Body               | The body to use for the response                                      |         |
