---
title: Persist Data Connector
sidebar_label: Persist Data
description: Persist small amounts of data that will be available later in the execution or in subsequent executions of the Instance
---

![Persist Data](./assets/persist-data.png#connector-icon)
Persist small amounts of data that will be available later in the execution or in subsequent executions of the Instance

## Actions

### Cross Flow - Add Value To Set {#addcrossflowvaluetoset}

Add a value to the set with the specified key, creating the set as needed

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be stored                          |         |

### Cross Flow - Append Multiple Values To a List {#appendcrossflowvaluestolist}

Append multiple values to the list with the specified key, creating the list as needed

| Input          | Comments                                                                                                                  | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Key            | This is the key that will be used to refer to the stored value                                                            |         |
| Dynamic Values | Use this input if you need to provide multiple values in a JSON format. This input will be favored over the Values input. |         |
| Values         | Use this input if you need to provide multiple values to the same key.                                                    |         |
| Flatten Values | If this is enabled the values of the multiple values input or the dynamic values input will be flattened.                 | false   |

### Cross Flow - Append Value To List {#appendcrossflowvaluetolist}

Append a value to the list with the specified key, creating the list as needed

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be stored                          |         |

### Cross Flow - Clear All State {#removecrossflowstate}

Delete all cross-flow state stored for this instance

### Cross Flow - Decrement Value {#decrementcrossflowvalue}

Decrement the stored integer value with the specified key by the specified amount

| Input  | Comments                                                           | Default |
| ------ | ------------------------------------------------------------------ | ------- |
| Key    | This is the key that will be used to refer to the stored value     |         |
| Amount | This is the amount that will be used for incrementing/decrementing | 1       |

### Cross Flow - Get Value {#getcrossflowvalue}

Get the value with the specified key, returning the specified default value if key not present

| Input         | Comments                                                             | Default |
| ------------- | -------------------------------------------------------------------- | ------- |
| Key           | This is the key that will be used to refer to the stored value       |         |
| Default Value | This is the value that will be returned if there is no value present |         |

### Cross Flow - Increment Value {#incrementcrossflowvalue}

Increment the stored integer value with the specified key by the specified amount

| Input  | Comments                                                           | Default |
| ------ | ------------------------------------------------------------------ | ------- |
| Key    | This is the key that will be used to refer to the stored value     |         |
| Amount | This is the amount that will be used for incrementing/decrementing | 1       |

### Cross Flow - List Keys {#listcrossflowkeys}

List all keys persisted at the cross-flow level

### Cross Flow - Remove Value {#removecrossflowvalue}

Remove the value with the specified key

| Input         | Comments                                                                                                                                                     | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Key           | This is the key that will be used to refer to the stored value                                                                                               |         |
| Multiple Keys | Use this input if you need to provide multiple keys. Please take note that this action favors this input instead of the regular key input, which it ignores. |         |

### Cross Flow - Remove Value From List {#removecrossflowvaluefromlist}

Remove the value from the list with the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be removed                         |         |

### Cross Flow - Remove Value From Set {#removecrossflowvaluefromset}

Remove the value from the set with the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be removed                         |         |

### Cross Flow - Save Current Time {#savecrossflowcurrenttime}

Save the current time in UTC using the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |

### Cross Flow - Save Value {#savecrossflowvalue}

Save a value with the specified key for use at a later time

| Input      | Comments                                                                                                                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Key        | This is the key that will be used to refer to the stored value                                                                                                                 |         |
| Value      | This is the value that will be stored                                                                                                                                          |         |
| Key/Values | Use this input if you need to provide multiple keys and values. Please take note that this action favors this input instead of the regular key/value inputs, which it ignores. |         |

### Execution - Add Value To Set {#addexecutionvaluetoset}

Add a value to the set with the specified key, creating the set as needed

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be stored                          |         |

### Execution - Append Multiple Values To a List {#appendexecutionvaluestolist}

Append multiple values to the list with the specified key, creating the list as needed

| Input          | Comments                                                                                                                  | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Key            | This is the key that will be used to refer to the stored value                                                            |         |
| Dynamic Values | Use this input if you need to provide multiple values in a JSON format. This input will be favored over the Values input. |         |
| Values         | Use this input if you need to provide multiple values to the same key.                                                    |         |
| Flatten Values | If this is enabled the values of the multiple values input or the dynamic values input will be flattened.                 | false   |

### Execution - Append Value To List {#appendexecutionvaluetolist}

Append a value to the list with the specified key, creating the list as needed

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be stored                          |         |

### Execution - Clear All State {#removeexecutionstate}

Delete all execution state

### Execution - Decrement Value {#decrementexecutionvalue}

Decrement the stored integer value with the specified key by the specified amount

| Input  | Comments                                                           | Default |
| ------ | ------------------------------------------------------------------ | ------- |
| Key    | This is the key that will be used to refer to the stored value     |         |
| Amount | This is the amount that will be used for incrementing/decrementing | 1       |

### Execution - Get Value {#getexecutionvalue}

Get the value with the specified key, returning the specified default value if key not present

| Input         | Comments                                                             | Default |
| ------------- | -------------------------------------------------------------------- | ------- |
| Key           | This is the key that will be used to refer to the stored value       |         |
| Default Value | This is the value that will be returned if there is no value present |         |

### Execution - Increment Value {#incrementexecutionvalue}

Increment the stored integer value with the specified key by the specified amount

| Input  | Comments                                                           | Default |
| ------ | ------------------------------------------------------------------ | ------- |
| Key    | This is the key that will be used to refer to the stored value     |         |
| Amount | This is the amount that will be used for incrementing/decrementing | 1       |

### Execution - List Keys {#listexecutionkeys}

List all keys persisted at the execution level

### Execution - Remove Value {#removeexecutionvalue}

Remove the value with the specified key

| Input         | Comments                                                                                                                                                     | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Key           | This is the key that will be used to refer to the stored value                                                                                               |         |
| Multiple Keys | Use this input if you need to provide multiple keys. Please take note that this action favors this input instead of the regular key input, which it ignores. |         |

### Execution - Remove Value From List {#removeexecutionvaluefromlist}

Remove the value from the list with the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be removed                         |         |

### Execution - Remove Value From Set {#removeexecutionvaluefromset}

Remove the value from the set with the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be removed                         |         |

### Execution - Save Current Time {#saveexecutioncurrenttime}

Save the current time in UTC using the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |

### Execution - Save Value {#saveexecutionvalue}

Save a value with the specified key for use at a later time

| Input      | Comments                                                                                                                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Key        | This is the key that will be used to refer to the stored value                                                                                                                 |         |
| Value      | This is the value that will be stored                                                                                                                                          |         |
| Key/Values | Use this input if you need to provide multiple keys and values. Please take note that this action favors this input instead of the regular key/value inputs, which it ignores. |         |

### Flow - Add Value To Set {#addinstancevaluetoset}

Add a value to the set with the specified key, creating the set as needed

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be stored                          |         |

### Flow - Append Multiple Values To a List {#appendinstancevaluestolist}

Append multiple values to the list with the specified key, creating the list as needed

| Input          | Comments                                                                                                                  | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Key            | This is the key that will be used to refer to the stored value                                                            |         |
| Dynamic Values | Use this input if you need to provide multiple values in a JSON format. This input will be favored over the Values input. |         |
| Values         | Use this input if you need to provide multiple values to the same key.                                                    |         |
| Flatten Values | If this is enabled the values of the multiple values input or the dynamic values input will be flattened.                 | false   |

### Flow - Append Value To List {#appendinstancevaluetolist}

Append a value to the list with the specified key, creating the list as needed

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be stored                          |         |

### Flow - Clear All State {#removeinstancestate}

Delete all flow state stored for this instance

### Flow - Decrement Value {#decrementinstancevalue}

Decrement the stored integer value with the specified key by the specified amount

| Input  | Comments                                                           | Default |
| ------ | ------------------------------------------------------------------ | ------- |
| Key    | This is the key that will be used to refer to the stored value     |         |
| Amount | This is the amount that will be used for incrementing/decrementing | 1       |

### Flow - Get Value {#getinstancevalue}

Get the value with the specified key, returning the specified default value if key not present

| Input         | Comments                                                             | Default |
| ------------- | -------------------------------------------------------------------- | ------- |
| Key           | This is the key that will be used to refer to the stored value       |         |
| Default Value | This is the value that will be returned if there is no value present |         |

### Flow - Increment Value {#incrementinstancevalue}

Increment the stored integer value with the specified key by the specified amount

| Input  | Comments                                                           | Default |
| ------ | ------------------------------------------------------------------ | ------- |
| Key    | This is the key that will be used to refer to the stored value     |         |
| Amount | This is the amount that will be used for incrementing/decrementing | 1       |

### Flow - List Keys {#listinstancekeys}

List all keys persisted at the flow level

### Flow - Remove Value {#removeinstancevalue}

Remove the value with the specified key

| Input         | Comments                                                                                                                                                     | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Key           | This is the key that will be used to refer to the stored value                                                                                               |         |
| Multiple Keys | Use this input if you need to provide multiple keys. Please take note that this action favors this input instead of the regular key input, which it ignores. |         |

### Flow - Remove Value From List {#removeinstancevaluefromlist}

Remove the value from the list with the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be removed                         |         |

### Flow - Remove Value From Set {#removeinstancevaluefromset}

Remove the value from the set with the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be removed                         |         |

### Flow - Save Current Time {#saveinstancecurrenttime}

Save the current time in UTC using the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |

### Flow - Save Value {#saveinstancevalue}

Save a value with the specified key for use at a later time

| Input      | Comments                                                                                                                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Key        | This is the key that will be used to refer to the stored value                                                                                                                 |         |
| Value      | This is the value that will be stored                                                                                                                                          |         |
| Key/Values | Use this input if you need to provide multiple keys and values. Please take note that this action favors this input instead of the regular key/value inputs, which it ignores. |         |

### Get Persist Data Usage Metrics {#getusage}

Get usage metrics for persisted data. Persisted data can total 64 MB.

### Integration - Add Value To Set {#addintegrationvaluetoset}

Add a value to the set with the specified key, creating the set as needed

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be stored                          |         |

### Integration - Append Multiple Values To a List {#appendintegrationvaluestolist}

Append multiple values to the list with the specified key, creating the list as needed

| Input          | Comments                                                                                                                  | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Key            | This is the key that will be used to refer to the stored value                                                            |         |
| Dynamic Values | Use this input if you need to provide multiple values in a JSON format. This input will be favored over the Values input. |         |
| Values         | Use this input if you need to provide multiple values to the same key.                                                    |         |
| Flatten Values | If this is enabled the values of the multiple values input or the dynamic values input will be flattened.                 | false   |

### Integration - Append Value To List {#appendintegrationvaluetolist}

Append a value to the list with the specified key, creating the list as needed

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be stored                          |         |

### Integration - Clear All State {#removeintegrationstate}

Delete all integration state stored for all instances of this integration

### Integration - Decrement Value {#decrementintegrationvalue}

Decrement the stored integer value with the specified key by the specified amount

| Input  | Comments                                                           | Default |
| ------ | ------------------------------------------------------------------ | ------- |
| Key    | This is the key that will be used to refer to the stored value     |         |
| Amount | This is the amount that will be used for incrementing/decrementing | 1       |

### Integration - Get Value {#getintegrationvalue}

Get the value with the specified key, returning the specified default value if key not present

| Input         | Comments                                                             | Default |
| ------------- | -------------------------------------------------------------------- | ------- |
| Key           | This is the key that will be used to refer to the stored value       |         |
| Default Value | This is the value that will be returned if there is no value present |         |

### Integration - Increment Value {#incrementintegrationvalue}

Increment the stored integer value with the specified key by the specified amount

| Input  | Comments                                                           | Default |
| ------ | ------------------------------------------------------------------ | ------- |
| Key    | This is the key that will be used to refer to the stored value     |         |
| Amount | This is the amount that will be used for incrementing/decrementing | 1       |

### Integration - List Keys {#listintegrationkeys}

List all keys persisted at the integration level

### Integration - Remove Value {#removeintegrationvalue}

Remove the value with the specified key

| Input         | Comments                                                                                                                                                     | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Key           | This is the key that will be used to refer to the stored value                                                                                               |         |
| Multiple Keys | Use this input if you need to provide multiple keys. Please take note that this action favors this input instead of the regular key input, which it ignores. |         |

### Integration - Remove Value From List {#removeintegrationvaluefromlist}

Remove the value from the list with the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be removed                         |         |

### Integration - Remove Value From Set {#removeintegrationvaluefromset}

Remove the value from the set with the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |
| Value | This is the value that will be removed                         |         |

### Integration - Save Current Time {#saveintegrationcurrenttime}

Save the current time in UTC using the specified key

| Input | Comments                                                       | Default |
| ----- | -------------------------------------------------------------- | ------- |
| Key   | This is the key that will be used to refer to the stored value |         |

### Integration - Save Value {#saveintegrationvalue}

Save a value with the specified key for use at a later time

| Input      | Comments                                                                                                                                                                       | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Key        | This is the key that will be used to refer to the stored value                                                                                                                 |         |
| Value      | This is the value that will be stored                                                                                                                                          |         |
| Key/Values | Use this input if you need to provide multiple keys and values. Please take note that this action favors this input instead of the regular key/value inputs, which it ignores. |         |
