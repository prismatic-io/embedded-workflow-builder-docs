---
title: Loop Connector
sidebar_label: Loop
description: Repeat a set of steps by iterating over items in a dataset or a fixed number of iterations
---

![Loop](./assets/loop.png#connector-icon)
The **loop** component allows you to loop over a list of items or loop a specific number of times depending on which action is selected.
This is handy if you have a set of files or pieces of data to process.
The loop component can be set up execute a series of actions on each file or item in a list.

## Actions

### Break Loop {#breakloop}

Breaks out of the current Loop, causing execution to resume after the containing Loop.

### Repeat for Each {#loopoveritems}

Loop over items. Applies each step in sequence, and returns a new collection of the results. Items must be an Array or Object.

| Input | Comments                                                                                                                          | Default |
| ----- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Items | These are the items to loop over. This must be an Array (list) or Object, and should be a reference to a previous step's results. |         |

### Repeat X Times {#loopntimes}

Loops over the the steps in the loop N times, or until a loop break occurs.

| Input                | Comments                                              | Default |
| -------------------- | ----------------------------------------------------- | ------- |
| Number of Iterations | The number of times to execute the steps in the loop. | 1000    |
