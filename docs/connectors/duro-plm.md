---
title: Duro PLM Connector
sidebar_label: Duro PLM
description: Manage products, components, and change orders in Duro PLM.
---

![Duro PLM](./assets/duro-plm.png#connector-icon)
Manage products, components, and change orders in Duro PLM.

## Connections

### API Key {#duroapikey}

Authenticate requests using an API key.

| Input                   | Comments                                                                                                                                                                        | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| API Key                 | The API key for the Duro account. Generate an API key in Duro account settings under the Integrations tab.                                                                      |         |
| Duro Environment        | The Duro GraphQL endpoint. Select based on data residency requirements: Main (MFG) for standard accounts, ITAR for US government compliance, or EU for European data residency. |         |
| Custom Duro Environment | If provided, this will override the selected Duro Environment. Use for private Duro instances or custom deployments.                                                            |         |

## Actions

### Create Change Order {#createchangeorder}

Creates a draft change order.

| Input       | Comments                                                                                                                              | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Duro PLM connection to use.                                                                                                       |         |
| Name        | The name of the change order to create.                                                                                               |         |
| Description | A detailed description of the change order, including the reason for the change and expected impact.                                  |         |
| Type        | The type of change order to create. ECO (Engineering Change Order), MCO (Manufacturing Change Order), or DCO (Document Change Order). | ECO     |

### Get Component by ID {#getcomponentbyid}

Get a specific component by a unique identifier

| Input        | Comments                                             | Default |
| ------------ | ---------------------------------------------------- | ------- |
| Connection   | The Duro PLM connection to use.                      |         |
| Component ID | The unique identifier for the component to retrieve. |         |

### Get Current User {#getcurrentuser}

Get information about the currently authenticated user

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Duro PLM connection to use. |         |

### List Change Orders {#listchangeorders}

Retrieves a list of change orders.

| Input         | Comments                                                                                               | Default |
| ------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection    | The Duro PLM connection to use.                                                                        |         |
| Order By      | The field and direction to sort the change orders by. Results will be returned in the specified order. |         |
| First N Items | The number of items to return.                                                                         |         |

### List Company Users {#listcompanyusers}

Retrieves account information for each user in the company library.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Duro PLM connection to use. |         |

### List Components {#listcomponents}

Retrieves a list of components.

| Input         | Comments                                                                                                                                              | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    | The Duro PLM connection to use.                                                                                                                       |         |
| Library Type  | The type of library to query. Company (GENERAL) contains shared production components, while Sandbox (PERSONAL) contains personal or test components. |         |
| First N Items | The number of items to return.                                                                                                                        |         |

### Raw Request {#rawrequest}

Make a generic request to the Duro API

| Input             | Comments                                                                                                                               | Default                                                                                                                                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        | The Duro PLM connection to use.                                                                                                        |                                                                                                                                                                                                                                                          |
| Query or Mutation | GraphQL query or mutation to execute against the Duro API. See the Duro GraphQL API documentation for available queries and mutations. | <code>{<br /> components(libraryType: GENERAL) {<br /> connection(<br /> first: 10<br /> ) {<br /> totalCount<br /> edges {<br /> cursor<br /> node {<br /> id<br /> name<br /> created<br /> lastModified<br /> }<br /> }<br /> }<br /> }<br />}</code> |
| Variables         | GraphQL variables to pass to the query or mutation. Each variable should be a key-value pair.                                          |                                                                                                                                                                                                                                                          |
| Variables Object  | Alternative way to provide GraphQL variables as a JSON object. Use this instead of the Variables field for complex nested variables.   |                                                                                                                                                                                                                                                          |
