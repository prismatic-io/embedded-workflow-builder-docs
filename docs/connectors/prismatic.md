---
title: Prismatic Connector
sidebar_label: Prismatic
description: Interact with the Prismatic internal API
---

![Prismatic](./assets/prismatic.png#connector-icon)
Interact with the Prismatic internal API

## Connections

### Prismatic Refresh Token

Prismatic Refresh Token

To start using the Prismatic component you need to use your authenticated prism client to call the `prism me:token --type refresh` command.
Running this command will give you a refresh token, which you can use to make requests to the Prismatic API.

Now that you have your token, create a new Prismatic connection and enter the token you received from the Prism CLI.

| Input         | Comments                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Refresh Token | Provide the Refresh Token obtained from the prism command line by calling prism me:token --type refresh. |         |

## Actions

### Deploy Instance

Deploy an instance to production

| Input       | Comments                              | Default |
| ----------- | ------------------------------------- | ------- |
| Connection  |                                       |         |
| Instance Id | Provide the unique ID of an instance. |         |

### Disable Instance

Disable an existing instance

| Input       | Comments                              | Default |
| ----------- | ------------------------------------- | ------- |
| Connection  |                                       |         |
| Instance Id | Provide the unique ID of an instance. |         |

### Get Current User

Get information about the current logged in user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Customer

Get a customer's information and metadata

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection |                                                                         |         |
| Customer   | Provide the unique identifier of a customer. This value should be an Id |         |

### Get Execution

Get the information and metadata of an execution

| Input        | Comments                                              | Default |
| ------------ | ----------------------------------------------------- | ------- |
| Connection   |                                                       |         |
| Execution Id | Provide the unique identifier of an execution record. |         |

### Get Instance

Get the information and metadata of an existing instance

| Input       | Comments                              | Default |
| ----------- | ------------------------------------- | ------- |
| Connection  |                                       |         |
| Instance Id | Provide the unique ID of an instance. |         |

### Get Integration

Get the information and metadata of an integration

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                  |         |
| Integration Id | Provide the unique identifier of an integration. This value should be the Id of the integration. |         |

### Import Integration

Import Integration

| Input           | Comments                                                                                         | Default |
| --------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                  |         |
| Integration Id  | Provide the unique identifier of an integration. This value should be the Id of the integration. |         |
| YAML Definition | Provide a string value for the definition of the integration.                                    |         |

### List Components

Returns a list of all the components published to your account

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Customers

List all customers in an organization

| Input                | Comments                                                                                     | Default |
| -------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                              |         |
| Before               | Specifies a cursor for use in combination with last to implement backward pagination.        |         |
| After                | Specifies a cursor for use in combination with first to implement forward pagination.        |         |
| Name                 | Provide a name.                                                                              |         |
| Offset               | Filter results based on the offset.                                                          |         |
| External Id          | Provide the customer external Id.                                                            |         |
| Description Contains | Filter for objects where description contains the specified value (case insensitive).        |         |
| Label Contains       | Filter for objects where labels contains the specified value (case insensitive).             |         |
| Last                 | A non-negative integer that specifies to return at most last edges before the before cursor. |         |
| Name Contains        | A non-negative integer that specifies to return at most last edges before the before cursor. |         |
| Name Starts With     | Provide a value for the start of the customer name                                           |         |

### List Flows

List all flows on an integration

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                  |         |
| Integration Id | Provide the unique identifier of an integration. This value should be the Id of the integration. |         |

### List Instances

List all instances

| Input                | Comments                                                                                     | Default |
| -------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                              |         |
| Name                 | Provide a name.                                                                              |         |
| Before               | Specifies a cursor for use in combination with last to implement backward pagination.        |         |
| After                | Specifies a cursor for use in combination with first to implement forward pagination.        |         |
| Customer             | Provide the unique identifier of a customer. This value should be an Id                      |         |
| Offset               | Filter results based on the offset.                                                          |         |
| Compatibility        | Provide an integer value to filter by compatibility.                                         |         |
| Customer External Id | Provide the customer external Id.                                                            |         |
| Description          | Provide a string value for the description.                                                  |         |
| Description Contains | Filter for objects where description contains the specified value (case insensitive).        |         |
| Enabled              | Filter for objects where description contains the specified value (case insensitive).        | true    |
| First                | A non-negative integer that specifies to return at most first edges after the after cursor.  |         |
| Integration          | Provide an identifier for the integration. This value should be an id.                       |         |
| Label Contains       | Filter for objects where labels contains the specified value (case insensitive).             |         |
| Last                 | A non-negative integer that specifies to return at most last edges before the before cursor. |         |
| Name Contains        | A non-negative integer that specifies to return at most last edges before the before cursor. |         |
| Needs Deploy         | Filter for objects where needsDeploy matches the specified value.                            | false   |

### List Integrations

List all available integrations

| Input                   | Comments                                                                                     | Default |
| ----------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                              |         |
| After                   | Specifies a cursor for use in combination with first to implement forward pagination.        |         |
| Before                  | Specifies a cursor for use in combination with last to implement backward pagination.        |         |
| Name                    | Provide a name.                                                                              |         |
| Offset                  | Filter results based on the offset.                                                          |         |
| All Versions            | Return all versions instead of only the latest                                               | false   |
| Category                | Filter for objects where category matches the specified value.                               |         |
| Category Contains       | Filter for objects where category contains the specified value (case insensitive).           |         |
| Description             | Provide a string value for the description.                                                  |         |
| Description Contains    | Filter for objects where description contains the specified value (case insensitive).        |         |
| First                   | A non-negative integer that specifies to return at most first edges after the after cursor.  |         |
| Has Instances           | Return only Integrations that have Instances                                                 | false   |
| Has Unpublished Changes | Filter for objects where hasUnpublishedChanges matches the specified value.                  | true    |
| Label Contains          | Filter for objects where labels contains the specified value (case insensitive).             |         |
| Last                    | A non-negative integer that specifies to return at most last edges before the before cursor. |         |
| Marketplace             | Returns only the version of Integrations either deployed or available in the Marketplace     | false   |
| Marketplace Config      | Return only integrations sharing the provided marketplace config                             |         |
| Name Contains           | A non-negative integer that specifies to return at most last edges before the before cursor. |         |
| Version Is Available    | Filter for objects where versionIsAvailable matches the specified value.                     | true    |
| Version Number          | Provide an integer value to filter by version number.                                        |         |
| Version Sequence Id     | Return only integrations sharing the provided version sequence id.                           |         |

### Publish Integration Version

Publish a new version of an existing integration

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                  |         |
| Integration Id | Provide the unique identifier of an integration. This value should be the Id of the integration. |         |
| Comments       | Provide a string value for comments.                                                             |         |

### Raw GraphQL Request

Send raw GraphQL request to Prismatic

| Input             | Comments                                                    | Default                                                                                                              |
| ----------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Connection        |                                                             |                                                                                                                      |
| Query or Mutation | Provide a query or mutation for the GraphQL request         | query ($myCustomerId: ID!) {<br /> customer(id: $myCustomerId) {<br /> id<br /> name<br /> externalId<br /> }<br />} |
| GraphQL Variables | These should match the variables of your query or mutation. |                                                                                                                      |

### Test Flow

Test an existing integration flow

| Input        | Comments                                                              | Default |
| ------------ | --------------------------------------------------------------------- | ------- |
| Connection   |                                                                       |         |
| Flow Id      | Provide the unique identifier of a flow                               |         |
| Payload      | Provide a payload to be passed to the given flow upon execution.      |         |
| Content Type | Provide a content type to be passed to the given flow upon execution. |         |

### Update Instance

Update an existing instance

| Input       | Comments                                                   | Default |
| ----------- | ---------------------------------------------------------- | ------- |
| Connection  |                                                            |         |
| Instance Id | Provide the unique ID of an instance.                      |         |
| Name        | Provide a string value for the name of the instance        |         |
| Description | Provide a string value for the description of the instance |         |

### Update Integration

Update the information and metadata of an integration

| Input          | Comments                                                                                         | Default |
| -------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                  |         |
| Integration Id | Provide the unique identifier of an integration. This value should be the Id of the integration. |         |
| Name           | Provide a name.                                                                                  |         |
| Description    | Provide a string value for the description.                                                      |         |
