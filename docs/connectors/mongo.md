---
title: MongoDB Connector
sidebar_label: MongoDB
description: Interact with documents in a MongoDB database
---

![MongoDB](./assets/mongo.png#connector-icon)
Interact with documents in a MongoDB database

## Connections

### Mongo Connection

Authenticate requests to a MongoDB server.

Create a new MongoDB connection and enter [the connection string for your MongoDB server](https://www.mongodb.com/docs/manual/reference/connection-string/).

| Input                     | Comments                                                                                                                                                                                                                                                                                            | Default |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Cluster Connection String | The connection string to use for connecting to a Mongo cluster. From the "Database Deployments" screen, click "Connect" next to a cluster to view the connection string. Refer to https://www.mongodb.com/docs/manual/reference/connection-string/ for details on format and configuration options. |         |
| Database                  | The name of your database.                                                                                                                                                                                                                                                                          |         |
| Collection                | The name of your collection.                                                                                                                                                                                                                                                                        |         |
| Use Mongo v4              | Use the older NodeJS v4 driver which is compatible with older MongoDB installations. This component defaults to using the v6 NodeJS driver.                                                                                                                                                         | false   |

## Actions

### Aggregate

Performs an aggregation operation using the provided aggregation pipeline.

| Input                | Comments                                                                          | Default |
| -------------------- | --------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                   |         |
| Aggregation Pipeline | An array of aggregation pipeline stages that process documents in the collection. |         |
| Aggregation Options  | Provide key and value pairs to configure the aggregation operation.               |         |

### Convert Object ID

The Object ID is a unique identifier for a document in a MongoDB collection. This action takes either a string ID or Object ID object, and returns both the ObjectID '\_id' and stringified ID versions of the ID which can be used in subsequent actions.

| Input     | Comments                           | Default |
| --------- | ---------------------------------- | ------- |
| Object ID | The ID to convert to an Object ID. |         |

### Delete Many

Remove documents from a collection that match a query.

| Input        | Comments                                                                                                                                                                                                                                                                                                                      | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Query Fields | Filters are used to narrow down the results of a query, or to determine which documents to update or delete. For example, you can search for documents whose key "firstName" is "John". To search by ID, provide a key of "\_id". Use the "Comparison Operator" input to specify the type of comparison to perform if needed. |         |
| Connection   |                                                                                                                                                                                                                                                                                                                               |         |

### Find All

Retrieve all documents in a collection that match a query.

| Input                     | Comments                                                                                                                                                                                                                                                                                                                      | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Query Fields              | Filters are used to narrow down the results of a query, or to determine which documents to update or delete. For example, you can search for documents whose key "firstName" is "John". To search by ID, provide a key of "\_id". Use the "Comparison Operator" input to specify the type of comparison to perform if needed. |         |
| Comparison Operator       | The comparison operator to use when filtering documents. Use this field in conjunction with the "Query Fields" input.                                                                                                                                                                                                         |         |
| Convert Values to Numbers | If true, number values detected in the "Query Fields" input will be converted to numeric types.                                                                                                                                                                                                                               | false   |
| Connection                |                                                                                                                                                                                                                                                                                                                               |         |
| Limit                     | The maximum number of documents to return.                                                                                                                                                                                                                                                                                    |         |
| Skip                      | The number of documents to skip when paginating.                                                                                                                                                                                                                                                                              |         |

### Find One

Retrieve one document in a collection that match a query. If no document is found, an error is thrown.

| Input                     | Comments                                                                                                                                                                                                                                                                                                                      | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Query Fields              | Filters are used to narrow down the results of a query, or to determine which documents to update or delete. For example, you can search for documents whose key "firstName" is "John". To search by ID, provide a key of "\_id". Use the "Comparison Operator" input to specify the type of comparison to perform if needed. |         |
| Comparison Operator       | The comparison operator to use when filtering documents. Use this field in conjunction with the "Query Fields" input.                                                                                                                                                                                                         |         |
| Convert Values to Numbers | If true, number values detected in the "Query Fields" input will be converted to numeric types.                                                                                                                                                                                                                               | false   |
| Connection                |                                                                                                                                                                                                                                                                                                                               |         |

### Insert Many

Insert new documents into a collection

| Input      | Comments                                                                                    | Default |
| ---------- | ------------------------------------------------------------------------------------------- | ------- |
| Documents  | For each item, provide a document ( Javascript Object ) to be inserted into the collection. |         |
| Connection |                                                                                             |         |

### Insert One

Insert a new document into a collection

| Input           | Comments                                                                  | Default |
| --------------- | ------------------------------------------------------------------------- | ------- |
| Document Fields | Provide key and value pairs that make up the properties of your document. |         |
| Connection      |                                                                           |         |

### Raw Request

Execute database commands directly. Does not use collection from connection.

| Input             | Comments                                                                                                       | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                |         |
| Execute Command   | Provide the command to execute. See https://www.mongodb.com/docs/v6.0/reference/command/ for more information. |         |
| Run Admin Command | If true, the command will be executed against the admin database.                                              | false   |

### Update Many

Update multiple documents in a collection

| Input                     | Comments                                                                                                                                                                                                                                                                                                                      | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                                                                                                                                                                                                                                               |         |
| Query Fields              | Filters are used to narrow down the results of a query, or to determine which documents to update or delete. For example, you can search for documents whose key "firstName" is "John". To search by ID, provide a key of "\_id". Use the "Comparison Operator" input to specify the type of comparison to perform if needed. |         |
| Comparison Operator       | The comparison operator to use when filtering documents. Use this field in conjunction with the "Query Fields" input.                                                                                                                                                                                                         |         |
| Update Fields             | Provide key and value pairs to be inserted/updated in your document.                                                                                                                                                                                                                                                          |         |
| Convert Values to Numbers | If true, number values detected in the "Query Fields" input will be converted to numeric types.                                                                                                                                                                                                                               | false   |
| Upsert                    | If true, creates a new document when no document matches the query criteria.                                                                                                                                                                                                                                                  | false   |

### Update One

Update a single document in a collection

| Input         | Comments                                                                                                                                                                                                                                                                                                                      | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Query Fields  | Filters are used to narrow down the results of a query, or to determine which documents to update or delete. For example, you can search for documents whose key "firstName" is "John". To search by ID, provide a key of "\_id". Use the "Comparison Operator" input to specify the type of comparison to perform if needed. |         |
| Update Fields | Provide key and value pairs to be inserted/updated in your document.                                                                                                                                                                                                                                                          |         |
| Connection    |                                                                                                                                                                                                                                                                                                                               |         |
| Upsert        | If true, creates a new document when no document matches the query criteria.                                                                                                                                                                                                                                                  | false   |
