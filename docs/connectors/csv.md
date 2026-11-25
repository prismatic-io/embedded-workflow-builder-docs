---
title: CSV Connector
sidebar_label: CSV
description: Build and parse CSV files to and from JavaScript arrays
---

![CSV](./assets/csv.png#connector-icon)
Build and parse CSV files to and from JavaScript arrays

## Actions

### Generate CSV From Array {#generatefromobject}

Generates CSV data from an array of objects

| Input           | Comments                                                                  | Default                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Input Array     | This should be an array of un-nested objects                              | <code>[<br /> {<br /> "Column 1": "foo",<br /> "Column 2": "bar"<br /> },<br /> {<br /> "Column 1": "abc",<br /> "Column 2": "def"<br /> }<br />]</code> |
| Delimiter       | Provide a string value containing the character the file is delimited on. | ,                                                                                                                                                        |
| Include Header? |                                                                           | true                                                                                                                                                     |

### Generate (Deprecated) {#generate}

Generates a CSV file from an array of objects

| Input     | Comments                                                                        | Default |
| --------- | ------------------------------------------------------------------------------- | ------- |
| Data      | For each list item, provide a list of strings that represent a row in the file. |         |
| Delimiter | Provide a string value containing the character the file is delimited on.       | ,       |

### Parse {#parse}

Parse CSV data into an array of rows

| Input          | Comments                                                                     | Default |
| -------------- | ---------------------------------------------------------------------------- | ------- |
| CSV Data       | Provide a string containing one or more rows of comma-seperated data         |         |
| Delimiter      | Provide a string value containing the character the file is delimited on.    | ,       |
| Ignore Headers | When true, the first row of the CSV file will be skipped in the output data. | false   |
