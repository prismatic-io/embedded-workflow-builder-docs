---
title: Branch Connector
sidebar_label: Branch
description: Choose which step to execute next based on a condition or value
---

![Branch](./assets/branch.png#connector-icon)
The **branch** component allows you to add branching logic to your integration.
Think of **branches** like if/then or [switch/case](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) programming statements.
Your integration can follow one branch or another depending on the values of some config variables or results from previous steps.

## Actions

### If Condition is Met {#branchonexpression}

Branch on Expression. Choose which step to execute next based on a condition.

| Input     | Comments                                             | Default |
| --------- | ---------------------------------------------------- | ------- |
| Condition | The set of conditions to satisfy in order to branch. |         |

### If Value Equals {#branchonvalue}

Branch on value. Choose which step to execute next based on a value.

| Input                | Comments                                                                                                        | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Input Value          | The value used for routing to a branch. This should reference a config variable or output from a previous step. |         |
| Branch Value Mapping | The branches that are associated with an expected value.                                                        |         |

### Select Executed Step Result {#selectexecutedstepresult}

Given a collection of step results, returns the results of whichever step was executed and returned a result.

| Input       | Comments                                                                           | Default |
| ----------- | ---------------------------------------------------------------------------------- | ------- |
| Step Result | The set of step results to consider when selecting a result from an executed step. |         |
