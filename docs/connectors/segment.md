---
title: Segment Connector
sidebar_label: Segment
description: Segment is a customer data platform (CDP) service that simplifies collecting and using data from users of your digital properties (websites, apps, etc.) Use the Segment component to manage your Sources, Warehouses, and Destinations.
---

![Segment](./assets/segment.png#connector-icon)
Segment is a customer data platform (CDP) service that simplifies collecting and using data from users of your digital properties (websites, apps, etc.) Use the Segment component to manage your Sources, Warehouses, and Destinations.

## Connections

### API Key

1. Log in to the Segment App, and choose the Workspace you want to generate a token for. Each Segment Workspace requires a separate token.
2. Click **Settings** in the left menu to access Workspace Settings. Navigate to the **Access Management** tab, and click **Tokens**. This tab lists any existing tokens created for the Workspace.
3. Click **+Create Token** , and follow the prompts to generate a new token. Be sure to select a Public API token.
4. Enter the API key into the connection's configuration. the Subdomain will be the name of the Workspace.

| Input     | Comments                                   | Default |
| --------- | ------------------------------------------ | ------- |
| API Key   | API Key for your Segment account           |         |
| Subdomain | The subdomain name of your Segment account |         |

## Actions

### Add Connection From Source to Warehouse

Connects a Source to a Warehouse.

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Connection   |                                       |         |
| Region       | The region of the Segment API to use. | api     |
| Warehouse ID | The id of the warehouse to retrieve.  |         |
| Source ID    | The Source ID to use.                 |         |

### Create Destination

Creates a new Destination.

| Input       | Comments                                                                                                                                           | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                                                    |         |
| Region      | The region of the Segment API to use.                                                                                                              | api     |
| Source ID   | The Source ID to use.                                                                                                                              |         |
| Metadata ID | The Warehouse metadata to use.                                                                                                                     |         |
| Name        | Defines the display name of the Destination.                                                                                                       |         |
| Enabled     | Whether this Destination should receive data.                                                                                                      |         |
| Settings    | An optional object that contains settings for the Destination based on the 'required' and 'advanced' settings present in the Destination metadata. |         |

### Create Destination Subscription

Creates a new Destination subscription.

| Input          | Comments                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                                                                     |         |
| Region         | The region of the Segment API to use.                                                                                                                                                               | api     |
| Destination ID | The Destination ID to use.                                                                                                                                                                          |         |
| Name           | The user-defined name for the subscription.                                                                                                                                                         |         |
| Action ID      | The associated action id the subscription should trigger.                                                                                                                                           |         |
| Trigger        | The fql statement.                                                                                                                                                                                  |         |
| Enabled        | Is the subscription enabled.                                                                                                                                                                        |         |
| Settings       | A key-value object that contains instance-specific settings for a Warehouse. You can find the full list of Warehouse metadata and related settings information in the /catalog/warehouses endpoint. |         |
| Trigger        | When creating a Reverse ETL connection, indicates the Model being used to extract data.                                                                                                             |         |

### Create Function

Creates a Function.

| Input             | Comments                                | Default                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        |                                         |                                                                                                                                                                                                                                                                                                                                                                                          |
| Region            | The region of the Segment API to use.   | api                                                                                                                                                                                                                                                                                                                                                                                      |
| Code              | The Function code.                      |                                                                                                                                                                                                                                                                                                                                                                                          |
| Display Name      | A display name for this Function.       |                                                                                                                                                                                                                                                                                                                                                                                          |
| Resource Type     | The Function type.                      |                                                                                                                                                                                                                                                                                                                                                                                          |
| Function Settings | The list of settings for this Function. | <code>[<br /> {<br /> "name": "apiKey",<br /> "label": "api key",<br /> "type": "STRING",<br /> "description": "api key",<br /> "required": false,<br /> "sensitive": false<br /> },<br /> {<br /> "name": "mySecret",<br /> "label": "my secret key",<br /> "type": "STRING",<br /> "description": "secret key",<br /> "required": false,<br /> "sensitive": true<br /> }<br />]</code> |
| Logo URL          | A logo for this Function.               |                                                                                                                                                                                                                                                                                                                                                                                          |
| Description       | A description for this Function.        |                                                                                                                                                                                                                                                                                                                                                                                          |

### Create Source

Creates a new Source.

| Input       | Comments                                                                                                                                                                                            | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                                                                                                     |         |
| Region      | The region of the Segment API to use.                                                                                                                                                               | api     |
| Slug        | The slug by which to identify the Source in the Segment app.                                                                                                                                        |         |
| Enabled     | Enable to allow this Source to send data. Defaults to true.                                                                                                                                         | true    |
| Metadata ID | The Warehouse metadata to use.                                                                                                                                                                      |         |
| Settings    | A key-value object that contains instance-specific settings for a Warehouse. You can find the full list of Warehouse metadata and related settings information in the /catalog/warehouses endpoint. |         |

### Create Transformation

Creates a new Transformation.

| Input                          | Comments                                                                            | Default                                                                                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection                     |                                                                                     |                                                                                                                                                             |
| Region                         | The region of the Segment API to use.                                               | api                                                                                                                                                         |
| Name                           | The name of the Transformation.                                                     |                                                                                                                                                             |
| Source ID                      | The Source ID to use.                                                               |                                                                                                                                                             |
| Destination Metadata ID        | The Destination metadata ID to use.                                                 |                                                                                                                                                             |
| Enabled                        | If the Transformation should be enabled.                                            |                                                                                                                                                             |
| If                             | If statement (FQL) to match events.                                                 |                                                                                                                                                             |
| New Event Name                 | Optional new event name for renaming events. Works only for 'track' event type.     |                                                                                                                                                             |
| Property Renames               | Optional array for renaming properties collected by your events.                    | <code>[<br /> {<br /> "newName": "new-property",<br /> "oldName": "old-property"<br /> }<br />]</code>                                                      |
| Property Value Transformations | Optional array for renaming properties collected by your events.                    | <code>[<br /> {<br /> "propertyPaths": [<br /> "properties.another-property"<br /> ],<br /> "propertyValue": "another property value"<br /> }<br />]</code> |
| FQL Defined Properties         | Optional array for defining new properties in FQL. Currently limited to 1 property. |                                                                                                                                                             |

### Create User Invite

Invites a list of users to join a Workspace.

| Input      | Comments                              | Default                                                                                                                                                                                                                                                                            |
| ---------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection |                                       |                                                                                                                                                                                                                                                                                    |
| Region     | The region of the Segment API to use. | api                                                                                                                                                                                                                                                                                |
| Invites    | The list of invites.                  | <code>[<br /> {<br /> "email": "foo@example.com",<br /> "permissions": [<br /> {<br /> "roleId": "1WDUuRLxv84rrfCNUwvkrRtkxnS",<br /> "resources": [<br /> {<br /> "id": "9aQ1Lj62S4bomZKLF4DPqW",<br /> "type": "WORKSPACE"<br /> }<br /> ]<br /> }<br /> ]<br /> }<br />]</code> |

### Delete Destination

Deletes an existing Destination.

| Input          | Comments                              | Default |
| -------------- | ------------------------------------- | ------- |
| Connection     |                                       |         |
| Region         | The region of the Segment API to use. | api     |
| Destination ID | The Destination ID to use.            |         |

### Delete Destination Subscription

Deletes an existing Destination subscription.

| Input           | Comments                              | Default |
| --------------- | ------------------------------------- | ------- |
| Connection      |                                       |         |
| Region          | The region of the Segment API to use. | api     |
| Destination ID  | The Destination ID to use.            |         |
| Subscription ID | The Subscription ID to use.           |         |

### Delete Function

Deletes a Function.

| Input       | Comments                              | Default |
| ----------- | ------------------------------------- | ------- |
| Connection  |                                       |         |
| Region      | The region of the Segment API to use. | api     |
| Function ID | The function ID to use.               |         |

### Delete Source

Deletes an existing Source.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Region     | The region of the Segment API to use. | api     |
| Source ID  | The Source ID to use.                 |         |

### Delete Transformation

Deletes a Transformation.

| Input             | Comments                                  | Default |
| ----------------- | ----------------------------------------- | ------- |
| Connection        |                                           |         |
| Region            | The region of the Segment API to use.     | api     |
| Transformation ID | The id of the transformation to retrieve. |         |

### Delete Users

Removes one or multiple users.

| Input      | Comments                              | Default                 |
| ---------- | ------------------------------------- | ----------------------- |
| Connection |                                       |                         |
| Region     | The region of the Segment API to use. | api                     |
| User IDs   | The ids of the users to remove.       | <code>["000xxx"]</code> |

### Delete Warehouse

Deletes an existing Warehouse.

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Connection   |                                       |         |
| Region       | The region of the Segment API to use. | api     |
| Warehouse ID | The id of the warehouse to retrieve.  |         |

### Get Destination

Returns a Destination by its id.

| Input          | Comments                              | Default |
| -------------- | ------------------------------------- | ------- |
| Connection     |                                       |         |
| Region         | The region of the Segment API to use. | api     |
| Destination ID | The Destination ID to use.            |         |

### Get Destination Catalog

Returns a list of all available Destinations in the Segment catalog.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Region     | The region of the Segment API to use. | api     |
| Count      | The number of results to return.      | 50      |
| Cursor     | The page to request.                  |         |

### Get Destination Metadata

Returns a Destination catalog item by its id.

| Input                   | Comments                              | Default |
| ----------------------- | ------------------------------------- | ------- |
| Connection              |                                       |         |
| Region                  | The region of the Segment API to use. | api     |
| Destination Metadata ID | The Destination metadata ID to use.   |         |

### Get Destination Subscription

Gets a Destination subscription by id.

| Input           | Comments                              | Default |
| --------------- | ------------------------------------- | ------- |
| Connection      |                                       |         |
| Region          | The region of the Segment API to use. | api     |
| Destination ID  | The Destination ID to use.            |         |
| Subscription ID | The Subscription ID to use.           |         |

### Get Events Volume From Workspace

Enumerates the Workspace event volumes over time in minute increments.

| Input       | Comments                                                                                                                                                                                                                       | Default                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Connection  |                                                                                                                                                                                                                                |                         |
| Region      | The region of the Segment API to use.                                                                                                                                                                                          | api                     |
| Granularity | The size of each bucket in the requested window.                                                                                                                                                                               |                         |
| Start Time  | The ISO8601 formatted timestamp that corresponds to the beginning of the requested time frame, inclusive.                                                                                                                      |                         |
| End Time    | The ISO8601 formatted timestamp that corresponds to the end of the requested time frame, noninclusive. Segment recommends that you lag queries 1 minute behind clock time to reduce the risk for latency to impact the counts. |                         |
| Group By    | The ids of the users to remove.                                                                                                                                                                                                |                         |
| Source IDs  | A list of strings which filters the results to the given EventNames.                                                                                                                                                           | <code>["000xxx"]</code> |
| Event Name  | A list of strings which filters the results to the given EventNames.                                                                                                                                                           | <code>["000xxx"]</code> |
| Event Type  | A list of strings which filters the results to the given EventNames.                                                                                                                                                           | <code>["000xxx"]</code> |
| App Version | A list of strings which filters the results to the given AppVersions.                                                                                                                                                          | <code>["000xxx"]</code> |
| Count       | The number of results to return.                                                                                                                                                                                               | 50                      |
| Cursor      | The page to request.                                                                                                                                                                                                           |                         |

### Get Function

Gets a Function.

| Input       | Comments                              | Default |
| ----------- | ------------------------------------- | ------- |
| Connection  |                                       |         |
| Region      | The region of the Segment API to use. | api     |
| Function ID | The function ID to use.               |         |

### Get Source

Returns a Source by its id.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Region     | The region of the Segment API to use. | api     |
| Source ID  | The Source ID to use.                 |         |

### Get Source Metadata

Returns a Source catalog item by its id.

| Input              | Comments                              | Default |
| ------------------ | ------------------------------------- | ------- |
| Connection         |                                       |         |
| Region             | The region of the Segment API to use. | api     |
| Source Metadata ID | The Source metadata ID to use.        |         |

### Get Sources Catalog

Returns a list of all available Sources in the Segment catalog.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Region     | The region of the Segment API to use. | api     |
| Count      | The number of results to return.      | 50      |
| Cursor     | The page to request.                  |         |

### Get Transformation

Gets a Transformation.

| Input             | Comments                                  | Default |
| ----------------- | ----------------------------------------- | ------- |
| Connection        |                                           |         |
| Region            | The region of the Segment API to use.     | api     |
| Transformation ID | The id of the transformation to retrieve. |         |

### Get User

Returns a user given their id.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Region     | The region of the Segment API to use. | api     |
| User ID    | The id of the user to retrieve.       |         |

### Get Warehouse

Returns a Warehouse by its id.

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Connection   |                                       |         |
| Region       | The region of the Segment API to use. | api     |
| Warehouse ID | The id of the warehouse to retrieve.  |         |

### Get Warehouse Metadata

Returns a Warehouse catalog item by its id.

| Input                 | Comments                              | Default |
| --------------------- | ------------------------------------- | ------- |
| Connection            |                                       |         |
| Region                | The region of the Segment API to use. | api     |
| Warehouse Metadata ID | The Warehouse metadata ID to use.     |         |

### Get Warehouses Catalog

Returns a list of all available Warehouses in the Segment catalog.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Region     | The region of the Segment API to use. | api     |
| Count      | The number of results to return.      | 50      |
| Cursor     | The page to request.                  |         |

### List Connected Sources from Warehouse

Returns the list of Sources that are connected to a Warehouse.

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Connection   |                                       |         |
| Region       | The region of the Segment API to use. | api     |
| Warehouse ID | The id of the warehouse to retrieve.  |         |

### List Destinations

Returns a list of Destinations.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Region     | The region of the Segment API to use. | api     |
| Count      | The number of results to return.      | 50      |
| Cursor     | The page to request.                  |         |

### List Destination Subscriptions

Lists subscriptions for a Destination.

| Input          | Comments                              | Default |
| -------------- | ------------------------------------- | ------- |
| Connection     |                                       |         |
| Region         | The region of the Segment API to use. | api     |
| Destination ID | The Destination ID to use.            |         |
| Count          | The number of results to return.      | 50      |
| Cursor         | The page to request.                  |         |

### List Functions

Lists all Functions in a Workspace.

| Input         | Comments                              | Default |
| ------------- | ------------------------------------- | ------- |
| Connection    |                                       |         |
| Region        | The region of the Segment API to use. | api     |
| Resource Type | The Function type.                    |         |
| Count         | The number of results to return.      | 50      |
| Cursor        | The page to request.                  |         |

### List Sources

Returns a list of Sources.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Region     | The region of the Segment API to use. | api     |
| Count      | The number of results to return.      | 50      |
| Cursor     | The page to request.                  |         |

### List Transformations

Returns a list of Transformations.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Region     | The region of the Segment API to use. | api     |
| Count      | The number of results to return.      | 50      |
| Cursor     | The page to request.                  |         |

### List Users

Returns a list of users with access to the Workspace.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Region     | The region of the Segment API to use. | api     |
| Count      | The number of results to return.      | 50      |
| Cursor     | The page to request.                  |         |

### List Warehouses

Returns a list of Warehouses.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Region     | The region of the Segment API to use. | api     |
| Count      | The number of results to return.      | 50      |
| Cursor     | The page to request.                  |         |

### Raw Request

Send raw HTTP request to Segment

| Input                   | Comments                                                                                                                                                                                                       | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                |         |
| Region                  | The region of the Segment API to use.                                                                                                                                                                          | api     |
| URL                     | Input the path only (/employees), The base URL is already included (https://apí.segmentapis.com/). For example, to connect to https://apí.segmentapis.com/employees, only /employees is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                        |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                      |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                           |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                               |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                         |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                            |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                    |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                       | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                            |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                           | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                     | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                      | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                               | false   |

### Remove Source Connection from Warehouse

Disconnects a Source from a Warehouse.

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Connection   |                                       |         |
| Region       | The region of the Segment API to use. | api     |
| Warehouse ID | The id of the warehouse to retrieve.  |         |
| Source ID    | The Source ID to use.                 |         |

### Update Destination

Updates an existing Destination.

| Input          | Comments                                                                                                                                           | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                                                    |         |
| Region         | The region of the Segment API to use.                                                                                                              | api     |
| Destination ID | The Destination ID to use.                                                                                                                         |         |
| Name           | Defines the display name of the Destination.                                                                                                       |         |
| Enabled        | Whether this Destination should receive data.                                                                                                      |         |
| Settings       | An optional object that contains settings for the Destination based on the 'required' and 'advanced' settings present in the Destination metadata. |         |

### Update Destination Subscription

Updates an existing Destination subscription.

| Input           | Comments                                                                                                                                                                                            | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                                                     |         |
| Region          | The region of the Segment API to use.                                                                                                                                                               | api     |
| Destination ID  | The Destination ID to use.                                                                                                                                                                          |         |
| Subscription ID | The Subscription ID to use.                                                                                                                                                                         |         |
| Name            | The user-defined name for the subscription.                                                                                                                                                         |         |
| Trigger         | The fql statement.                                                                                                                                                                                  |         |
| Enabled         | Is the subscription enabled.                                                                                                                                                                        |         |
| Settings        | A key-value object that contains instance-specific settings for a Warehouse. You can find the full list of Warehouse metadata and related settings information in the /catalog/warehouses endpoint. |         |

### Update Function

Updates a Function.

| Input             | Comments                                | Default                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        |                                         |                                                                                                                                                                                                                                                                                                                                                                                          |
| Region            | The region of the Segment API to use.   | api                                                                                                                                                                                                                                                                                                                                                                                      |
| Function ID       | The function ID to use.                 |                                                                                                                                                                                                                                                                                                                                                                                          |
| Code              | The Function code.                      |                                                                                                                                                                                                                                                                                                                                                                                          |
| Function Settings | The list of settings for this Function. | <code>[<br /> {<br /> "name": "apiKey",<br /> "label": "api key",<br /> "type": "STRING",<br /> "description": "api key",<br /> "required": false,<br /> "sensitive": false<br /> },<br /> {<br /> "name": "mySecret",<br /> "label": "my secret key",<br /> "type": "STRING",<br /> "description": "secret key",<br /> "required": false,<br /> "sensitive": true<br /> }<br />]</code> |
| Display Name      | A display name for this Function.       |                                                                                                                                                                                                                                                                                                                                                                                          |
| Logo URL          | A logo for this Function.               |                                                                                                                                                                                                                                                                                                                                                                                          |
| Description       | A description for this Function.        |                                                                                                                                                                                                                                                                                                                                                                                          |

### Update Source

Updates an existing Source.

| Input      | Comments                                                                                                                                                                                            | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                     |         |
| Region     | The region of the Segment API to use.                                                                                                                                                               | api     |
| Source ID  | The Source ID to use.                                                                                                                                                                               |         |
| Slug       | The slug by which to identify the Source in the Segment app.                                                                                                                                        |         |
| Enabled    | Enable to allow this Source to send data. Defaults to true.                                                                                                                                         |         |
| Name       | An optional human-readable name to associate with this Source.                                                                                                                                      |         |
| Settings   | A key-value object that contains instance-specific settings for a Warehouse. You can find the full list of Warehouse metadata and related settings information in the /catalog/warehouses endpoint. |         |

### Update Transformation

Updates an existing Transformation.

| Input                          | Comments                                                                            | Default                                                                                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection                     |                                                                                     |                                                                                                                                                             |
| Region                         | The region of the Segment API to use.                                               | api                                                                                                                                                         |
| Transformation ID              | The id of the transformation to retrieve.                                           |                                                                                                                                                             |
| Name                           | The name of the Transformation.                                                     |                                                                                                                                                             |
| Source ID                      | The Source ID to use.                                                               |                                                                                                                                                             |
| Destination Metadata ID        | The Destination metadata ID to use.                                                 |                                                                                                                                                             |
| Enabled                        | Enable to allow this Warehouse to receive data.                                     |                                                                                                                                                             |
| If                             | If statement (FQL) to match events.                                                 |                                                                                                                                                             |
| New Event Name                 | Optional new event name for renaming events. Works only for 'track' event type.     |                                                                                                                                                             |
| Property Renames               | Optional array for renaming properties collected by your events.                    | <code>[<br /> {<br /> "newName": "new-property",<br /> "oldName": "old-property"<br /> }<br />]</code>                                                      |
| Property Value Transformations | Optional array for renaming properties collected by your events.                    | <code>[<br /> {<br /> "propertyPaths": [<br /> "properties.another-property"<br /> ],<br /> "propertyValue": "another property value"<br /> }<br />]</code> |
| FQL Defined Properties         | Optional array for defining new properties in FQL. Currently limited to 1 property. |                                                                                                                                                             |

### Update Warehouse

Updates an existing Warehouse.

| Input        | Comments                                                                                                                                                                                            | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                                                                                     |         |
| Region       | The region of the Segment API to use.                                                                                                                                                               | api     |
| Warehouse ID | The id of the warehouse to retrieve.                                                                                                                                                                |         |
| Settings     | A key-value object that contains instance-specific settings for a Warehouse. You can find the full list of Warehouse metadata and related settings information in the /catalog/warehouses endpoint. |         |
| Name         | An optional human-readable name to associate with this Warehouse.                                                                                                                                   |         |
| Enabled      | Enable to allow this Warehouse to receive data.                                                                                                                                                     |         |
