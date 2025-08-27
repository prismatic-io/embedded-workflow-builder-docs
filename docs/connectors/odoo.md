---
title: Odoo Connector
sidebar_label: Odoo
description: Manage records in an Odoo database
---

![Odoo](./assets/odoo.png#connector-icon)
Manage records in an Odoo database

## Connections

### Odoo Connection

Customers can use Odoo's cloud service to access an Odoo database, or they can run Odoo on their own servers.
Either way, Odoo uses basic auth to connect to an Odoo database.

- For **Base URL**, you can enter the URL you visit when you log in to Odoo (something like `https://example-company.odoo.com`).
- You can likely ignore **Server Port**, unless your customer uses a non-traditional port for accessing their Odoo installation.
- The **Database Name** can be found by clicking the user icon on the top-right within Odoo, and then selecting **My Databases**.
- **Username** is the email address the user uses to log in.
  We recommend they create a system account for integrations (i.e. not a specific user's account).
- **Password or API Key** can either be the password your customer uses to log in to Odoo, or they can generate an API key.
  To generate an API key, your customer will need to go into settings, enable developer mode, and then from their user preferences they can generate an API key.
  See [https://www.odoo.com/documentation/14.0/developer/api/external_api.html#api-keys](https://www.odoo.com/documentation/14.0/developer/api/external_api.html#api-keys).

| Input               | Comments                                                                        | Default |
| ------------------- | ------------------------------------------------------------------------------- | ------- |
| Odoo Base URL       | Enter the URL you visit when you log in to Odoo                                 |         |
| Server Port         | Leave blank to use default HTTP (80) or HTTPS (443)                             |         |
| Odoo Database Name  | Click the user icon on the top-right within Odoo and then select 'My Databases' |         |
| Username            |                                                                                 |         |
| Password or API Key |                                                                                 |         |

## Actions

### Create Record

Create a new record of a given type

| Input       | Comments                                                                                                     | Default                                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection  |                                                                                                              |                                                                                                                                                              |
| Model       | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |                                                                                                                                                              |
| Parameters  |                                                                                                              | <code>{<br /> "name": "John Doe",<br /> "email": "doe@example.com",<br /> "country_code": "US",<br /> "city": "New York",<br /> "zip": "10001"<br />}</code> |
| External ID | A unique identifier mapping this record to an ID in an external system                                       |                                                                                                                                                              |

### Delete Record By ID

Delete a record by its numerical ID

| Input      | Comments                                                                                                     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                              |         |
| Model      | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |         |
| Record ID  | The ID of the record you want. Odoo uses numbers for record IDs.                                             |         |

### Get Record by External ID

Get a record by its external ID

| Input       | Comments                                                               | Default |
| ----------- | ---------------------------------------------------------------------- | ------- |
| Connection  |                                                                        |         |
| External ID | A unique identifier mapping this record to an ID in an external system |         |

### Get Record By ID

Fetch a Record by its numerical ID

| Input      | Comments                                                                                                     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                              |         |
| Model      | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |         |
| Record ID  | The ID of the record you want. Odoo uses numbers for record IDs.                                             |         |

### List Model Fields

List all fields for a given model

| Input      | Comments                                                                                                     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                              |         |
| Model      | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |         |

### List Models

Fetch a list of models installed in the customer's Odoo database

| Input        | Comments                                               | Default |
| ------------ | ------------------------------------------------------ | ------- |
| Connection   |                                                        |         |
| Name Search  | Search for models whose names contain this search term |         |
| Model Search | Search for models whose contain this search term       |         |

### List Records

Fetch a list of records of a given type

| Input             | Comments                                                                                                                       | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                                                                |         |
| Model             | The type of record you would like to query for. Use the 'List Models' action for a list of available models.                   |         |
| Pagination Limit  | Fetch only this many records at a time. See https://www.odoo.com/documentation/15.0/developer/api/external_api.html#pagination |         |
| Pagination Offset | Fetch records offset by this value. See https://www.odoo.com/documentation/15.0/developer/api/external_api.html#pagination     |         |

### Raw Request

Issue any execute_kw action

| Input      | Comments                                                                                                     | Default                 |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Connection |                                                                                                              |                         |
| Model      | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |                         |
| Method     | The action to execute in Odoo                                                                                |                         |
| Parameters |                                                                                                              | <code>[["read"]]</code> |

### Set External ID

Add an external ID to a record that does not have one

| Input       | Comments                                                                                                     | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  |                                                                                                              |         |
| Model       | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |         |
| Record ID   | The ID of the record you want. Odoo uses numbers for record IDs.                                             |         |
| External ID | A unique identifier mapping this record to an ID in an external system                                       |         |

### Update Record

Update an existing record of a given type

| Input      | Comments                                                                                                     | Default                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection |                                                                                                              |                                                                                                                                                              |
| Model      | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |                                                                                                                                                              |
| Record ID  | The ID of the record you want. Odoo uses numbers for record IDs.                                             |                                                                                                                                                              |
| Parameters |                                                                                                              | <code>{<br /> "name": "John Doe",<br /> "email": "doe@example.com",<br /> "country_code": "US",<br /> "city": "New York",<br /> "zip": "10001"<br />}</code> |
