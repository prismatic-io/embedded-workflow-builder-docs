---
title: Azure Cosmos DB Connector
sidebar_label: Azure Cosmos DB
description: Manage databases, collections, and documents within Azure Cosmos DB.
---

![Azure Cosmos DB](./assets/azure-cosmos-db.png#connector-icon)
Manage databases, collections, and documents within Azure Cosmos DB.

## Connections

### Master Key

Azure Cosmos DB Master Key

To authenticate this component using your Cosmos DB **Core (SQL) API** master key:

1. Navigate to [Azure Portal](https://portal.azure.com/).
2. Find your **Cosmos DB account**.
3. In the left menu, under **Settings**, select **Keys**.
4. Copy the **Primary Key** or **Secondary Key**.

You will also need the **Cosmos DB account name** (subdomain). For example, if your endpoint is: https://your-cosmos-account.documents.azure.com:443/

Then your account name is: `your-cosmos-account`

Use these values to configure the component connection.

| Input      | Comments                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------- | ------- |
| Endpoint   | Your Azure Cosmos DB account endpoint URL.                                                          |         |
| Master Key | Your Azure Cosmos DB account master key. You can find this in the Azure Cosmos DB account settings. |         |

## Actions

### Create Collection

Create a new collection in a database

| Input              | Comments                                                                                                                                                    | Default |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | Azure Cosmos DB connection configured with endpoint URL and access key.                                                                                     |         |
| Database ID        | The ID of the database.                                                                                                                                     |         |
| Collection ID      | The ID of the collection.                                                                                                                                   |         |
| Partition Key Path | The path used as the partition key when creating the collection, e.g., `/category`.                                                                         |         |
| Throughput (RU/s)  | The provisioned throughput for the collection in Request Units per second. <strong>Note:</strong> Serverless collections do not support setting throughput. |         |

### Create Database

Create a new database in Cosmos DB

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| Connection  | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID | The ID of the database.                                                 |         |

### Create Document

Create a new document in a collection

| Input               | Comments                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection          | Azure Cosmos DB connection configured with endpoint URL and access key.                 |         |
| Database ID         | The ID of the database.                                                                 |         |
| Collection ID       | The ID of the collection.                                                               |         |
| Document            | The document as JSON string.                                                            |         |
| Partition Key Value | The value of the partition key for the document (required for partitioned collections). |         |

### Delete Collection

Delete a collection from a database

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Connection    | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID   | The ID of the database.                                                 |         |
| Collection ID | The ID of the collection.                                               |         |

### Delete Database

Delete a database from Cosmos DB

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| Connection  | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID | The ID of the database.                                                 |         |

### Delete Document

Delete a document from a collection

| Input               | Comments                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection          | Azure Cosmos DB connection configured with endpoint URL and access key.                 |         |
| Database ID         | The ID of the database.                                                                 |         |
| Collection ID       | The ID of the collection.                                                               |         |
| Document ID         | The ID of the document.                                                                 |         |
| Partition Key Value | The value of the partition key for the document (required for partitioned collections). |         |
| ETag                | The ETag value for optimistic concurrency control.                                      |         |

### Get Collection

Get a specific collection by ID

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Connection    | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID   | The ID of the database.                                                 |         |
| Collection ID | The ID of the collection.                                               |         |

### Get Database

Get a specific database by ID

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| Connection  | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID | The ID of the database.                                                 |         |

### Get Document

Get a specific document by ID

| Input               | Comments                                                                                | Default |
| ------------------- | --------------------------------------------------------------------------------------- | ------- |
| Connection          | Azure Cosmos DB connection configured with endpoint URL and access key.                 |         |
| Database ID         | The ID of the database.                                                                 |         |
| Collection ID       | The ID of the collection.                                                               |         |
| Document ID         | The ID of the document.                                                                 |         |
| Partition Key Value | The value of the partition key for the document (required for partitioned collections). |         |

### List Collections

List all collections in a database

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| Connection  | Azure Cosmos DB connection configured with endpoint URL and access key. |         |
| Database ID | The ID of the database.                                                 |         |

### List Databases

List all databases in the Cosmos DB account

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | Azure Cosmos DB connection configured with endpoint URL and access key. |         |

### List Documents

List all documents in a collection

| Input              | Comments                                                                                                                                                   | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | Azure Cosmos DB connection configured with endpoint URL and access key.                                                                                    |         |
| Database ID        | The ID of the database.                                                                                                                                    |         |
| Collection ID      | The ID of the collection.                                                                                                                                  |         |
| Max Item Count     | Maximum number of items to return.                                                                                                                         |         |
| Continuation Token | Token for pagination to get the next set of results.                                                                                                       |         |
| Fetch All          | If enabled, retrieves all documents by automatically fetching every page of results. This overrides 'Max Item Count' and ignores any 'Continuation Token'. | false   |

### Update Document

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
