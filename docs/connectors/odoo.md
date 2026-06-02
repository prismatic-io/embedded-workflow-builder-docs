---
title: Odoo Connector
sidebar_label: Odoo
description: Manage records in an Odoo database
---

![Odoo](./assets/odoo.png#connector-icon)
Manage records in an Odoo database

## Connections

### Odoo Connection {#odoobasicauth}

Connect to your Odoo instance

| Input               | Comments                                                                        | Default |
| ------------------- | ------------------------------------------------------------------------------- | ------- |
| Odoo Base URL       | Enter the URL you visit when you log in to Odoo                                 |         |
| Server Port         | Leave blank to use default HTTP (80) or HTTPS (443)                             |         |
| Odoo Database Name  | Click the user icon on the top-right within Odoo and then select 'My Databases' |         |
| Username            |                                                                                 |         |
| Password or API Key |                                                                                 |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Polls an Odoo model for records whose `write_date` is at or after the last poll. Records whose `create_date` is also after the last poll go to the `created` bucket; older records modified since the last poll go to `updated`.

| Input                | Comments                                                                                                                             | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection           |                                                                                                                                      |         |
| Model                | The type of record you would like to query for. Use the 'List Models' action for a list of available models.                         |         |
| Show New Records     | When enabled, records whose `create_date` falls after the last poll will be emitted on the `created` branch.                         | true    |
| Show Updated Records | When enabled, records whose `write_date` falls after the last poll but were created earlier will be emitted on the `updated` branch. | true    |

## Actions

### Create Record {#createrecord}

Create a new record of a given type

| Input       | Comments                                                                                                     | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  |                                                                                                              |         |
| Model       | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |         |
| Parameters  | A JSON object of field names and values to set on the record.                                                |         |
| External ID | A unique identifier mapping this record to an ID in an external system.                                      |         |

### Delete Record By ID {#deleterecordbyid}

Delete a record by its numerical ID

| Input      | Comments                                                                                                     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                              |         |
| Model      | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |         |
| Record ID  | The ID of the record you want. Odoo uses numbers for record IDs.                                             |         |

### Get Record by External ID {#getrecordbyexternalid}

Get a record by its external ID

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| Connection  |                                                                         |         |
| External ID | A unique identifier mapping this record to an ID in an external system. |         |

### Get Record By ID {#getrecordbyid}

Fetch a Record by its numerical ID

| Input      | Comments                                                                                                     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                              |         |
| Model      | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |         |
| Record ID  | The ID of the record you want. Odoo uses numbers for record IDs.                                             |         |

### List Model Fields {#listmodelfields}

List all fields for a given model

| Input      | Comments                                                                                                     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                              |         |
| Model      | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |         |

### List Models {#listmodels}

Fetch a list of models installed in the customer's Odoo database

| Input             | Comments                                                                                                                                      | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All Records | Whether to fetch all records.                                                                                                                 | false   |
| Name Search       | Search for models whose names contain this search term.                                                                                       |         |
| Model Search      | Search for models whose contain this search term.                                                                                             |         |
| Pagination Limit  | Fetch only this many records at a time. See [Pagination](https://www.odoo.com/documentation/15.0/developer/api/external_api.html#pagination). |         |
| Pagination Offset | Fetch records offset by this value. See [Pagination](https://www.odoo.com/documentation/15.0/developer/api/external_api.html#pagination).     |         |
| Connection        |                                                                                                                                               |         |

### List Records {#listrecords}

Fetch a list of records of a given type

| Input             | Comments                                                                                                                                      | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All Records | Whether to fetch all records.                                                                                                                 | false   |
| Model             | The type of record you would like to query for. Use the 'List Models' action for a list of available models.                                  |         |
| Pagination Limit  | Fetch only this many records at a time. See [Pagination](https://www.odoo.com/documentation/15.0/developer/api/external_api.html#pagination). |         |
| Pagination Offset | Fetch records offset by this value. See [Pagination](https://www.odoo.com/documentation/15.0/developer/api/external_api.html#pagination).     |         |
| Connection        |                                                                                                                                               |         |

### Raw Request {#rawrequest}

Issue any execute_kw action

| Input      | Comments                                                                                                     | Default                 |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Connection |                                                                                                              |                         |
| Model      | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |                         |
| Method     | The action to execute in Odoo.                                                                               |                         |
| Parameters | A JSON object of field names and values to set on the record.                                                | <code>[["read"]]</code> |

### Set External ID {#setexternalid}

Add an external ID to a record that does not have one

| Input       | Comments                                                                                                     | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection  |                                                                                                              |         |
| Model       | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |         |
| Record ID   | The ID of the record you want. Odoo uses numbers for record IDs.                                             |         |
| External ID | A unique identifier mapping this record to an ID in an external system.                                      |         |

### Update Record {#updaterecord}

Update an existing record of a given type

| Input      | Comments                                                                                                     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| Connection |                                                                                                              |         |
| Model      | The type of record you would like to query for. Use the 'List Models' action for a list of available models. |         |
| Record ID  | The ID of the record you want. Odoo uses numbers for record IDs.                                             |         |
| Parameters | A JSON object of field names and values to set on the record.                                                |         |
