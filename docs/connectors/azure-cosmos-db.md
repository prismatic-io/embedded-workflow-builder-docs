---
title: Azure Cosmos DB Connector
sidebar_label: Azure Cosmos DB
description: Manage databases, collections, and documents within Azure Cosmos DB.
---

![Azure Cosmos DB](./assets/azure-cosmos-db.png#connector-icon)
Manage databases, collections, and documents within Azure Cosmos DB.

## Connections

### Master Key {#cosmosmasterkey}

Azure Cosmos DB Master Key

| Input      | Comments                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------- | ------- |
| Endpoint   | Your Azure Cosmos DB account endpoint URL.                                                          |         |
| Master Key | Your Azure Cosmos DB account master key. You can find this in the Azure Cosmos DB account settings. |         |

## Actions

### Create Collection {#createcollection}

Create a new collection in a database

| Input              | Comments                                                                                                                                                    | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | Azure Cosmos DB connection configured with endpoint URL and access key.                                                                                     |         |
| Database ID        | The ID of the database.                                                                                                                                     |         |
| Collection ID      | The ID of the collection.                                                                                                                                   |         |
| Partition Key Path | The path used as the partition key when creating the collection, e.g., `/category`.                                                                         |         |
| Throughput (RU/s)  | The provisioned throughput for the collection in Request Units per second. <strong>Note:</strong> Serverless collections do not support setting throughput. |         |

### Create Database {#createdatabase}

Create a new database in Cosmos DB

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| Connection  | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID | The ID of the database.                                                 |         |

### Create Document {#createdocument}

Create a new document in a collection

| Input               | Comments                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection          | Azure Cosmos DB connection configured with endpoint URL and access key.                 |         |
| Database ID         | The ID of the database.                                                                 |         |
| Collection ID       | The ID of the collection.                                                               |         |
| Document            | The document as JSON string.                                                            |         |
| Partition Key Value | The value of the partition key for the document (required for partitioned collections). |         |

### Delete Collection {#deletecollection}

Delete a collection from a database

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Connection    | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID   | The ID of the database.                                                 |         |
| Collection ID | The ID of the collection.                                               |         |

### Delete Database {#deletedatabase}

Delete a database from Cosmos DB

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| Connection  | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID | The ID of the database.                                                 |         |

### Delete Document {#deletedocument}

Delete a document from a collection

| Input               | Comments                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection          | Azure Cosmos DB connection configured with endpoint URL and access key.                 |         |
| Database ID         | The ID of the database.                                                                 |         |
| Collection ID       | The ID of the collection.                                                               |         |
| Document ID         | The ID of the document.                                                                 |         |
| Partition Key Value | The value of the partition key for the document (required for partitioned collections). |         |
| ETag                | The ETag value for optimistic concurrency control.                                      |         |

### Get Collection {#getcollection}

Get a specific collection by ID

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Connection    | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID   | The ID of the database.                                                 |         |
| Collection ID | The ID of the collection.                                               |         |

### Get Database {#getdatabase}

Get a specific database by ID

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| Connection  | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID | The ID of the database.                                                 |         |

### Get Document {#getdocument}

Get a specific document by ID

| Input               | Comments                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection          | Azure Cosmos DB connection configured with endpoint URL and access key.                 |         |
| Database ID         | The ID of the database.                                                                 |         |
| Collection ID       | The ID of the collection.                                                               |         |
| Document ID         | The ID of the document.                                                                 |         |
| Partition Key Value | The value of the partition key for the document (required for partitioned collections). |         |

### List Collections {#listcollections}

List all collections in a database

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| Connection  | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID | The ID of the database.                                                 |         |

### List Databases {#listdatabases}

List all databases in the Cosmos DB account

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | Azure Cosmos DB connection configured with endpoint URL and access key. |         |

### List Documents {#listdocuments}

List all documents in a collection

| Input              | Comments                                                                                                                                                   | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | Azure Cosmos DB connection configured with endpoint URL and access key.                                                                                    |         |
| Database ID        | The ID of the database.                                                                                                                                    |         |
| Collection ID      | The ID of the collection.                                                                                                                                  |         |
| Max Item Count     | Maximum number of items to return.                                                                                                                         |         |
| Continuation Token | Token for pagination to get the next set of results.                                                                                                       |         |
| Fetch All          | If enabled, retrieves all documents by automatically fetching every page of results. This overrides 'Max Item Count' and ignores any 'Continuation Token'. | false   |

### Update Document {#updatedocument}

Update an existing document in a collection

| Input               | Comments                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection          | Azure Cosmos DB connection configured with endpoint URL and access key.                 |         |
| Database ID         | The ID of the database.                                                                 |         |
| Collection ID       | The ID of the collection.                                                               |         |
| Document ID         | The ID of the document.                                                                 |         |
| Document            | The document as JSON string.                                                            |         |
| Partition Key Value | The value of the partition key for the document (required for partitioned collections). |         |
| ETag                | The ETag value for optimistic concurrency control.                                      |         |
