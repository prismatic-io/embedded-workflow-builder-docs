---
title: Algolia Connector
sidebar_label: Algolia
description: Algolia is an advanced AI search platform.
---

![Algolia](./assets/algolia.png#connector-icon)
Algolia is an advanced AI search platform.

## Connections

### Algolia API Key

Algolia API Key

**API Keys** are necessary for interacting with the Algolia API. API keys are unique to each application you create in Algolia.

To generate an **API Key**, you should log into Algolia and navigate to your application page. Within the application settings, you can find your API keys.

Algolia provides three types of API keys:

**Admin API Key**: This key has read and write rights on all indexing and configuration operations.

**Search-Only API Key**: This key has read-only rights on indexing operations and is recommended for use on the frontend.

**Secured API Key**: This key is generated from a search key and has additional rights defined at the time of generation.

For your integration, you will need both the Admin API Key and the Search-Only API Key.

For more information about API keys, refer to the [Algolia Docs](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/#how-to-get-your-api-keys).

| Input          | Comments                    | Default |
| -------------- | --------------------------- | ------- |
| API Key        | Your Algolia API Key        |         |
| Application ID | Your Algolia Application ID |         |

## Actions

### Browse Index

Retrieve all objects from an index.

| Input             | Comments                                                              | Default |
| ----------------- | --------------------------------------------------------------------- | ------- |
| Connection        |                                                                       |         |
| Index Name        | Provide a string value for the index name.                            |         |
| Search Parameters | Provide a URL-encoded string for search parameters. This is optional. |         |
| Cursor            | Provide a string value for the cursor. This is optional.              |         |

### Copy Index

Copy an index, including its records, Synonyms, Rules, and settings (except for enableReRanking).

| Input      | Comments                | Default |
| ---------- | ----------------------- | ------- |
| Connection |                         |         |
| Index From | The index to copy from. |         |
| Index To   | The index to copy to.   |         |

### Copy Settings

Copy the settings of an index to another index on the same app.

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection |                                      |         |
| Index From | The index to copy the settings from. |         |
| Index To   | The index to copy the settings to.   |         |

### Delete Index

Delete an index.

| Input      | Comments                  | Default |
| ---------- | ------------------------- | ------- |
| Connection |                           |         |
| Index Name | The index name to delete. |         |

### Get Index

Get index information

| Input        | Comments                                                       | Default |
| ------------ | -------------------------------------------------------------- | ------- |
| Connection   |                                                                |         |
| Index Name   | Provide a string value for the index name.                     |         |
| Query String | Provide a string value for the query string. This is optional. |         |

### Get Settings

Get the settings of an index.

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| Connection |                                            |         |
| Index Name | Provide a string value for the index name. |         |

### List Indices

Get a list of indices with their associated metadata.

| Input      | Comments                                                                                                                                                 | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                          |         |
| Page       | Retrieve a specific page. Pages are zero-based. The page size is set to 100. This parameter isn’t set by default, and all indices are retrieved at once. |         |

### Move Index

Move or rename an index.

| Input      | Comments                | Default |
| ---------- | ----------------------- | ------- |
| Connection |                         |         |
| Index From | The index to move from. |         |
| Index To   | The index to move to.   |         |

### Raw Request

Send raw HTTP request to Algolia

| Input                   | Comments                                                                                                                                                                                                                                                                                              | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                       |         |
| URL                     | Input the path only (/1/indexes/{indexName}), The base URL is already included (https://<CONNECTION_INPUT_APPLICATION_ID>.algolia.net). For example, to connect to https://<CONNECTION_INPUT_APPLICATION_ID>.algolia.net/1/indexes/{indexName}, only /1/indexes/{indexName} is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                               |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                             |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                  |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                      |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                   |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                           |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                              | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                   |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                  | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                   | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                      | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                   | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                         | false   |

### Search Facet Values

Search for values of a given facet.

| Input          | Comments                                                                           | Default |
| -------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                    |         |
| Index Name     | Provide a string value for the index name.                                         |         |
| Facet Name     | Provide a string value for the facet name.                                         |         |
| Facet Query    | Provide a string value for the facet query. This is optional.                      |         |
| Max Facet Hits | Provide a number for the maximum number of facet hits to return. This is optional. |         |

### Search Multiple Indices

Send multiple search queries, potentially targeting multiple indices, in a single API call.

| Input      | Comments                                                                                        | Default                                                                                                                                                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection |                                                                                                 |                                                                                                                                                                                                                                                                             |
| Requests   | Provide a JSON object where each key-value pair represents an index-query pair for the search.  | <code>[<br /> {<br /> "indexName": "acme",<br /> "params": "filters=objectID:ff68be7beb72da7db241ffeca4b62f09739ef79f"<br /> },<br /> {<br /> "indexName": "acme-test-2",<br /> "params": "filters=objectID:b5c24740f0b7a94318193ab136fc3d70eea71f1c"<br /> }<br />]</code> |
| Strategy   | Provide a strategy. The possible values are 'none' and 'stopIfEnoughMatches'. This is optional. |                                                                                                                                                                                                                                                                             |

### Set Settings

Change an index's settings.

| Input               | Comments                                                  | Default |
| ------------------- | --------------------------------------------------------- | ------- |
| Connection          |                                                           |         |
| Index Name          | Provide a string value for the index name.                |         |
| Settings            | A mapping of settings parameters you can use on an index. |         |
| Forward to Replicas | The change is also propagated to replicas of this index.  | false   |

### Update Batch Indices

This method enables you to batch multiple different indexing operations in one API call, like add or delete objects, potentially targeting multiple indices.

| Input      | Comments                         | Default |
| ---------- | -------------------------------- | ------- |
| Connection |                                  |         |
| Requests   | An array of operations to batch. |         |
