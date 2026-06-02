---
title: Change Data Format Connector
sidebar_label: Change Data Format
description: Change data from one format to another
---

![Change Data Format](./assets/change-data-format.png#connector-icon)
Change data from one format to another

## Actions

### Convert To Boolean {#converttoboolean}

Convert a value to a boolean

| Input                                  | Comments | Default |
| -------------------------------------- | -------- | ------- |
| The value to be converted to a boolean |          |         |

### Convert To Integer {#converttoint}

Convert a value to an int

| Input                                  | Comments | Default |
| -------------------------------------- | -------- | ------- |
| The value to be converted to a integer |          |         |

### Convert To Number {#converttonumber}

Convert a value to a number

| Input                                 | Comments | Default |
| ------------------------------------- | -------- | ------- |
| The value to be converted to a number |          |         |

### Convert To String {#converttostring}

Convert a value to a string

| Input                                 | Comments | Default |
| ------------------------------------- | -------- | ------- |
| The value to be converted to a string |          |         |

### CSV to JSON {#csvtojson}

Convert CSV to JSON

| Input               | Comments                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Data                | CSV data to convert to JSON                                                                                                                                                                                    |         |
| CSV Header          | Specify if your CSV contains a header row.                                                                                                                                                                     | true    |
| Un-Flatten CSV Keys | When enabled, keys with double-underscores will be parsed as nested objects. For example, 'person**first,person**last' will become '{ person: { first, last } }' rather than '{ person**first, person**last }' | false   |

### CSV to XML {#csvtoxml}

Convert CSV to XML

| Input               | Comments                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Data                | CSV data to convert to XML                                                                                                                                                                                     |         |
| CSV Header          | Specify if your CSV contains a header row.                                                                                                                                                                     | true    |
| Un-Flatten CSV Keys | When enabled, keys with double-underscores will be parsed as nested objects. For example, 'person**first,person**last' will become '{ person: { first, last } }' rather than '{ person**first, person**last }' | false   |

### CSV to YAML {#csvtoyaml}

Convert CSV to YAML

| Input               | Comments                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Data                | CSV data to convert to YAML                                                                                                                                                                                    |         |
| CSV Header          | Specify if your CSV contains a header row.                                                                                                                                                                     | true    |
| Un-Flatten CSV Keys | When enabled, keys with double-underscores will be parsed as nested objects. For example, 'person**first,person**last' will become '{ person: { first, last } }' rather than '{ person**first, person**last }' | false   |

### Deserialize BINARY {#deserializefrombinary}

Deserialize BINARY data

| Input | Comments                                                                 | Default |
| ----- | ------------------------------------------------------------------------ | ------- |
| Data  | BINARY text to deserialize so it can be referenced in a subsequent step. |         |

### Deserialize CSV {#deserializefromcsv}

Deserialize CSV data

| Input               | Comments                                                                                                                                                                                                       | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Data                | CSV text to deserialize so it can be referenced in a subsequent step.                                                                                                                                          |         |
| CSV Header          | Specify if your CSV contains a header row.                                                                                                                                                                     | true    |
| Un-Flatten CSV Keys | When enabled, keys with double-underscores will be parsed as nested objects. For example, 'person**first,person**last' will become '{ person: { first, last } }' rather than '{ person**first, person**last }' | false   |

### Deserialize JSON {#deserializefromjson}

Deserialize JSON data

| Input | Comments                                                               | Default |
| ----- | ---------------------------------------------------------------------- | ------- |
| Data  | JSON text to deserialize so it can be referenced in a subsequent step. |         |

### Deserialize JSON Lines (.jsonl) {#deserializejsonl}

Transform .jsonl data to a JavaScript array

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| JSONL Data |          |         |

### Deserialize URL-encoded Form Data {#deserializeformdata}

Deserialize Form Data (x-www-form-urlencoded)

| Input | Comments                                                               | Default |
| ----- | ---------------------------------------------------------------------- | ------- |
| Data  | Form data to deserialize so it can be referenced in a subsequent step. |         |

### Deserialize XML {#deserializefromxml}

Deserialize XML data

| Input                     | Comments                                                              | Default |
| ------------------------- | --------------------------------------------------------------------- | ------- |
| Data                      | XML text to deserialize so it can be referenced in a subsequent step. |         |
| Parse numbers as strings? | Interpret numbers as strings?                                         | false   |

### Deserialize YAML {#deserializefromyaml}

Deserialize YAML data

| Input | Comments                                                               | Default |
| ----- | ---------------------------------------------------------------------- | ------- |
| Data  | YAML text to deserialize so it can be referenced in a subsequent step. |         |

### JavaScript Object to CSV {#binarytocsv}

Convert JavaScript Object to CSV

| Input | Comments                                 | Default |
| ----- | ---------------------------------------- | ------- |
| Data  | JavaScript Object data to convert to CSV |         |

### JavaScript Object to JSON {#binarytojson}

Convert JavaScript Object to JSON

| Input | Comments                                  | Default |
| ----- | ----------------------------------------- | ------- |
| Data  | JavaScript Object data to convert to JSON |         |

### JavaScript Object to XML {#binarytoxml}

Convert JavaScript Object to XML

| Input | Comments                                 | Default |
| ----- | ---------------------------------------- | ------- |
| Data  | JavaScript Object data to convert to XML |         |

### JavaScript Object to YAML {#binarytoyaml}

Convert JavaScript Object to YAML

| Input | Comments                                  | Default |
| ----- | ----------------------------------------- | ------- |
| Data  | JavaScript Object data to convert to YAML |         |

### JSON to CSV {#jsontocsv}

Convert JSON to CSV

| Input | Comments                    | Default |
| ----- | --------------------------- | ------- |
| Data  | JSON data to convert to CSV |         |

### JSON to XML {#jsontoxml}

Convert JSON to XML

| Input | Comments                    | Default |
| ----- | --------------------------- | ------- |
| Data  | JSON data to convert to XML |         |

### JSON to YAML {#jsontoyaml}

Convert JSON to YAML

| Input | Comments                     | Default |
| ----- | ---------------------------- | ------- |
| Data  | JSON data to convert to YAML |         |

### Pretty Print {#prettyprint}

Format data to be more human-readable

| Input | Comments             | Default |
| ----- | -------------------- | ------- |
| Data  | Data to pretty print |         |

### Serialize JSON Lines (.jsonl) {#serializejsonl}

Serialize an array of JavaScript objects into .jsonl

| Input                                    | Comments                                              | Default |
| ---------------------------------------- | ----------------------------------------------------- | ------- |
| Array of JavaScript Objects to serialize | Must be a reference to an array of JavaScript objects |         |

### Serialize URL-encoded Form Data {#serializeformdata}

Serialize Form Data (x-www-form-urlencoded)

| Input | Comments                                                               | Default |
| ----- | ---------------------------------------------------------------------- | ------- |
| Data  | Form data to deserialize so it can be referenced in a subsequent step. |         |

### XML to CSV {#xmltocsv}

Convert XML to CSV

| Input                     | Comments                      | Default |
| ------------------------- | ----------------------------- | ------- |
| Data                      | XML data to convert to CSV    |         |
| Parse numbers as strings? | Interpret numbers as strings? | false   |

### XML to JSON {#xmltojson}

Convert XML to JSON

| Input                     | Comments                      | Default |
| ------------------------- | ----------------------------- | ------- |
| Data                      | XML data to convert to JSON   |         |
| Parse numbers as strings? | Interpret numbers as strings? | false   |

### XML to YAML {#xmltoyaml}

Convert XML to YAML

| Input                     | Comments                      | Default |
| ------------------------- | ----------------------------- | ------- |
| Data                      | XML data to convert to YAML   |         |
| Parse numbers as strings? | Interpret numbers as strings? | false   |

### YAML to CSV {#yamltocsv}

Convert YAML to CSV

| Input | Comments                    | Default |
| ----- | --------------------------- | ------- |
| Data  | YAML data to convert to CSV |         |

### YAML to JSON {#yamltojson}

Convert YAML to JSON

| Input | Comments                     | Default |
| ----- | ---------------------------- | ------- |
| Data  | YAML data to convert to JSON |         |

### YAML to XML {#yamltoxml}

Convert YAML to XML

| Input | Comments                    | Default |
| ----- | --------------------------- | ------- |
| Data  | YAML data to convert to XML |         |
