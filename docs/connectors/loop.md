---
title: Loop Connector
sidebar_label: Loop
description: Repeat a set of steps by iterating over items in a dataset or a fixed number of iterations
---

![Loop](./assets/loop.png#connector-icon)
Repeat a set of steps by iterating over items in a dataset or a fixed number of iterations

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
