---
title: Process Data Connector
sidebar_label: Process Data
description: Process data sets
---

![Process Data](./assets/process-data.png#connector-icon)
The **process data** component allows your integrations to "remember" what data they have processed, so they don't process the same data over and over.
The deduplicate action tracks the data that is processed each execution, and returns only items that it didn't previously process.

## Actions

### Deduplicate {#deduplicate}

Takes a sorted descending list of objects and a list of field names to use as identifiers and returns the list of objects that have not been previously processed

| Input           | Comments                                                                             | Default |
| --------------- | ------------------------------------------------------------------------------------ | ------- |
| Key Field Names | The names of the fields in each item of the collection to use as a unique identifier |         |
| Data            | This is the dataset that will be operated on                                         |         |
