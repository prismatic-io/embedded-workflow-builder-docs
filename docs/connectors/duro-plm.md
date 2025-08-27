---
title: Duro PLM Connector
sidebar_label: Duro PLM
description: Manage Products, Components, Change Orders, and more with Duro.
---

![Duro PLM](./assets/duro-plm.png#connector-icon)
Manage Products, Components, Change Orders, and more with Duro.

## Connections

### Duro API Key

### How to retrieve an API key

To retrieve an API key in your Duro app, follow these steps:

1. Log in to your Duro account.
2. Click on your avatar and select **Account settings**.
3. In the **Settings** menu, select the **Integrations** tab.
4. Click on the **Get API Key** button below the Integrations table.
5. Your API key will be displayed. Highlight and copy it to use as the "Duro API Key".

| Input            | Comments                           | Default |
| ---------------- | ---------------------------------- | ------- |
| Duro API Key     | The API key for your Duro account. |         |
| Duro Environment | The environment to connect to.     |         |

## Actions

### Create Change Order

Create a Draft Change Order

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Name          | The name of the change order to create               |         |
| Description   | A description of the change order                    |         |
| Type          | The type of change order to create                   | ECO     |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Component by ID

Get a specific component by a unique identifier

| Input         | Comments                                                     | Default |
| ------------- | ------------------------------------------------------------ | ------- |
| Connection    |                                                              |         |
| Component ID  | The unique identifier for the component you want to retrieve |         |
| Debug Request | Enabling this flag will log out the current request.         | false   |

### Get Current User

Get information about the currently authenticated user

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Change Orders

Get a list of change orders

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Order By      | The field to order the change orders by              |         |
| First N Items | The number of items to return                        | 5       |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Company Users

Get account information from each user in your company library

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Components

Get a list of components

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Library Type  | The type of library to query                         |         |
| First N Items | The number of items to return                        | 5       |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Raw Request

Make a generic request to the Duro API

| Input             | Comments                                             | Default                                                                                                                                                                                                                                                  |
| ----------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        |                                                      |                                                                                                                                                                                                                                                          |
| Query or Mutation | GraphQL query or mutation                            | <code>{<br /> components(libraryType: GENERAL) {<br /> connection(<br /> first: 10<br /> ) {<br /> totalCount<br /> edges {<br /> cursor<br /> node {<br /> id<br /> name<br /> created<br /> lastModified<br /> }<br /> }<br /> }<br /> }<br />}</code> |
| Variables         | Variables to pass to the query or mutation           |                                                                                                                                                                                                                                                          |
| Variables Object  | Variables to pass to the query or mutation           |                                                                                                                                                                                                                                                          |
| Debug Request     | Enabling this flag will log out the current request. | false                                                                                                                                                                                                                                                    |
