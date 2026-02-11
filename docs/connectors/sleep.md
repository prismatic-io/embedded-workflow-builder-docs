---
title: Sleep Connector
sidebar_label: Sleep
description: Pause execution for a specific amount of time
---

![Sleep](./assets/sleep.png#connector-icon)
The **sleep** component temporarily stops the execution of an integration for a specified amount of time.
This is handy if your integration needs to wait for a known amount of time while a third party service performs some task.

## Actions

### Sleep {#sleep}

Sleep for a number of milliseconds before continuing the integration.

| Input        | Comments                            | Default |
| ------------ | ----------------------------------- | ------- |
| Milliseconds | The number of milliseconds to sleep | 1000    |
