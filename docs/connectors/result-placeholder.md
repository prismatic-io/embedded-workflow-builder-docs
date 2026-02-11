---
title: Result Placeholder Connector
sidebar_label: Result Placeholder
description: Generate a step output
---

![Result Placeholder](./assets/result-placeholder.png#connector-icon)
The **result placeholder** component generates a "mock" result that can be used by subsequent steps in an integration.
This is handy for situations where integration developers are waiting on development of a custom component or for third-party teams to create an environment for testing.
Integration designers can add a result placeholder step to fill in for another component until the other component is ready to be tested.

## Actions

### Mock Result {#actions}

Generate a step result of your choosing.

| Input | Comments                                                                                                                                | Default |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Code  | This input will be returned as a string, unless valid JSON is provided, in which case it will be deserialized into a JavaScript object. |         |
