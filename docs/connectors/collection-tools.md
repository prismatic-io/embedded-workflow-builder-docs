---
title: Collection Tools Connector
sidebar_label: Collection Tools
description: Common collection operations
---

![Collection Tools](./assets/collection-tools.png#connector-icon)
The collection tools component contains actions that let you perform common tasks on collections of data (objects and arrays).
You can do things like concatenate objects, filter items of lists (arrays), map functions on items, and more.

## Actions

### Add Key/Value to Object {#addkey}

Add a value to an object with the given key

| Input       | Comments                                                                  | Default |
| ----------- | ------------------------------------------------------------------------- | ------- |
| Object      |                                                                           |         |
| Key         | My Comments                                                               |         |
| Value       |                                                                           |         |
| Insert Path | Optionally define a path using dot notation of where to add the key/value |         |

### Add Multiple Key/Value to Object {#addmultiplekeys}

Add multiple key/value pairs to an object

| Input              | Comments                                                                                                                           | Default                                             |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Object             |                                                                                                                                    |                                                     |
| Insert Path        | Optionally define a path using dot notation of where to add the key/value                                                          |                                                     |
| Dynamic Key/Values | Add an array of key/value pairs to the object. Please take note that the action will favor this input over the 'Key/Values' input. | <code>{<br /> "someProperty": "value"<br />}</code> |
| Key/Values         | Key and value of the properties to add to the object. If provided, 'Key' and 'Value' inputs are ignored.                           |                                                     |

### Aggregate {#aggregate}

Apply aggregate function to list

| Input              | Comments                                                                                  | Default                           |
| ------------------ | ----------------------------------------------------------------------------------------- | --------------------------------- |
| List               | Reference to a list of data to operate on                                                 |                                   |
| Aggregate Function | Aggregate function to apply (choose from AVERAGE, COUNT, MAX, MIN, SUM, PRODUCT, MEDIAN). |                                   |
| Filter Function    | Filter out any elements that do not return true                                           | (item, index) => { return true; } |

### Append {#append}

Append element to the end of the list

| Input   | Comments                                  | Default |
| ------- | ----------------------------------------- | ------- |
| List    | Reference to a list of data to operate on |         |
| Element | The item to append to the end of the list |         |

### Chunks {#chunks}

Chunk the list into lists of the specified number of elements

| Input              | Comments                                  | Default |
| ------------------ | ----------------------------------------- | ------- |
| List               | Reference to a list of data to operate on |         |
| Number of Elements | Number of elements to take                | 1       |

### Combine Collection (Deprecated) {#combinecollections}

This version of the action is being deprecated. Please replace action with Create Object.

| Input       | Comments                                                                           | Default |
| ----------- | ---------------------------------------------------------------------------------- | ------- |
| Collections | Returns an object with the specified key and corresponding collection as the value |         |

### Concatenate {#concatenate}

Concatenate two lists together into a single list

| Input | Comments                                  | Default |
| ----- | ----------------------------------------- | ------- |
| List  | Reference to a list of data to operate on |         |
| List  | Reference to a list of data to operate on |         |

### Count {#count}

Count the number of occurrences of element in list

| Input   | Comments                                  | Default |
| ------- | ----------------------------------------- | ------- |
| List    | Reference to a list of data to operate on |         |
| Element | Reference to an element to look for       |         |

### Create List {#create}

Create a new list with the given inputs

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| List Items |          |         |

### Create Object {#createobject}

Creates a new object from provided key/value pairs

| Input             | Comments            | Default |
| ----------------- | ------------------- | ------- |
| Key & Value Pairs | Key and value pairs |         |

### De-duplicate {#deduplicate}

De-duplicate the elements of the list

| Input | Comments                                  | Default |
| ----- | ----------------------------------------- | ------- |
| List  | Reference to a list of data to operate on |         |

### Field Value Mapping {#fieldvaluemapping}

Maps the values from two different collections and returns a key/value list where the 'key' is the value of the Key Mappings input and the 'value' is the value of the Value Mappings input

| Input          | Comments | Default |
| -------------- | -------- | ------- |
| Key Mappings   |          |         |
| Value Mappings |          |         |

### Filter {#filter}

Filter elements of a list

| Input           | Comments                                        | Default                           |
| --------------- | ----------------------------------------------- | --------------------------------- |
| List            | Reference to a list of data to operate on       |                                   |
| Filter Function | Filter out any elements that do not return true | (item, index) => { return true; } |

### First {#first}

Get first element from a list

| Input | Comments                                  | Default |
| ----- | ----------------------------------------- | ------- |
| List  | Reference to a list of data to operate on |         |

### Flatten {#flatten}

Flatten an array of arrays into a single array

| Input | Comments                                  | Default |
| ----- | ----------------------------------------- | ------- |
| List  | Reference to a list of data to operate on |         |

### Key Value Pair List to Object {#toobject}

Convert a Key Value list to an Object

| Input          | Comments | Default |
| -------------- | -------- | ------- |
| Key/Value List |          |         |

### Last {#last}

Get last element from a list

| Input | Comments                                  | Default |
| ----- | ----------------------------------------- | ------- |
| List  | Reference to a list of data to operate on |         |

### Length {#length}

Count the number of elements in list

| Input | Comments                                  | Default |
| ----- | ----------------------------------------- | ------- |
| List  | Reference to a list of data to operate on |         |

### Map {#map}

Transform a list and its elements

| Input                    | Comments                                                                   | Default                           |
| ------------------------ | -------------------------------------------------------------------------- | --------------------------------- |
| List                     | Reference to a list of data to operate on                                  |                                   |
| Transform (map) Function | Function to transform each element                                         | (item, index) => { return item; } |
| Filter Function          | Filter out any elements that do not return true                            | (item, index) => { return true; } |
| Context Data             | Additional contextual data to supply to the transform and filter functions |                                   |

### Object to Key Value Pair List {#fromobject}

Convert an Object to a Key Value List

| Input  | Comments | Default |
| ------ | -------- | ------- |
| Object |          |         |

### Process In Order {#processinorder}

Ensures that payloads are processed in order across executions according to an ordering specified by a payload attribute. Returns the largest possible set of ordered payloads on the Process branch, and otherwise follows the Skip branch and returns the current item.

| Input             | Comments                                                                                                                              | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Collection ID     | A value that uniquely identifies the collection that is being processed out of order.                                                 |         |
| Collection Length | The number of items in the collection. When processing is finished the interim data for the collection is removed.                    |         |
| Item              | The current item to consider for processing.                                                                                          |         |
| Item Index        | The integer value to consider as the index for the current item that specifies intended processing order. 0 is the first index value. |         |

### Remove {#remove}

Remove all occurrences of an element from a list

| Input   | Comments                                  | Default |
| ------- | ----------------------------------------- | ------- |
| List    | Reference to a list of data to operate on |         |
| Element | Reference to an element to look for       |         |

### Select Item From List by Index {#selectitemfromlist}

Select an item by index from a list of items, supports nested lists

| Input | Comments                                  | Default |
| ----- | ----------------------------------------- | ------- |
| List  | Reference to a list of data to operate on |         |
| Index |                                           |         |

### Sort {#sort}

Sort elements using a JavaScript comparison function

| Input                    | Comments                                                                                                                                                                            | Default                                                                                                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| List                     | Reference to a list of data to operate on                                                                                                                                           | <code>[<br /> {<br /> "name": "Widget",<br /> "prop": 25<br /> },<br /> {<br /> "name": "Thingy",<br /> "prop": 10<br /> },<br /> {<br /> "name": "Whatsit",<br /> "prop": 19<br /> }<br />]</code> |
| Sort Comparison Function | Sort elements by the given comparison function. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort for compare function documentation. | (a, b) => { return a.prop < b.prop ? -1 : 1; }                                                                                                                                                      |

### Take First {#takefirst}

Take first number of elements from a list

| Input              | Comments                                  | Default |
| ------------------ | ----------------------------------------- | ------- |
| List               | Reference to a list of data to operate on |         |
| Number of Elements | Number of elements to take                | 1       |

### Take Last {#takelast}

Take last number of elements from a list

| Input              | Comments                                  | Default |
| ------------------ | ----------------------------------------- | ------- |
| List               | Reference to a list of data to operate on |         |
| Number of Elements | Number of elements to take                | 1       |

### Validate JSON Schema {#validatejsonschema}

Validate a JSON input against a given schema, returning errors if not JSON input is not valid.

| Input       | Comments                                        | Default                                                                                                                                                                              |
| ----------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| JSON Object | The JSON object to validate against the schema. | <code>{"someProperty":"value"}</code>                                                                                                                                                |
| JSON Schema | The JSON schema to validate the input against.  | <code>{<br /> "type": "object",<br /> "properties": {<br /> "someProperty": {<br /> "type": "string"<br /> }<br /> },<br /> "required": [<br /> "someProperty"<br /> ]<br />}</code> |

### Validate XML Schema {#validatexmlschema}

Validate an XML input against a given XSD schema, returning errors if XML is not valid.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| XML        | The XML object to validate against the schema. |         |
| XML Schema | The XSD schema to use in validation.           |         |
