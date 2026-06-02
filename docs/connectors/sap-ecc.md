---
title: SAP ECC Connector
sidebar_label: SAP ECC
description: Send SOAP requests, call BAPIs, and manage IDocs in SAP ECC.
---

![SAP ECC](./assets/sap-ecc.png#connector-icon)
Send SOAP requests, call BAPIs, and manage IDocs in SAP ECC.

## Connections

### On-Premise Connection {#sapecc}

Authenticate requests to an SAP ECC server.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| Host       | The hostname or IP address of the SAP ECC server (e.g., sap-ecc.internal).                       |         |
| Port       | The HTTPS port of the SAP ECC server.                                                            | 44300   |
| SAP Client | The SAP client number to connect to (e.g., 100). This is sent as the sap-client query parameter. |         |
| Username   | The SAP username for authentication.                                                             |         |
| Password   | The SAP password for authentication.                                                             |         |

## Triggers

### New IDocs {#pollidoctrigger}

Checks for new IDocs in the SAP EDIDC table on a configured schedule, using the DOCNUM field as a cursor.

| Input           | Comments                                                                                                                                                                                                                      | Default          |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Connection      | The SAP ECC connection to use.                                                                                                                                                                                                |                  |
| Endpoint        | The SAP SOAP endpoint path.                                                                                                                                                                                                   | /sap/bc/soap/rfc |
| Row Count       | Maximum number of IDocs to return per poll cycle.                                                                                                                                                                             | 50               |
| Message Type    | Optional IDoc message type filter (MESTYP). Only IDocs matching this type will be returned.                                                                                                                                   |                  |
| Direction       | Optional IDoc direction filter (DIRECT).                                                                                                                                                                                      |                  |
| Starting DOCNUM | Used only on the very first poll when no cursor state exists yet. Once polling begins and state is saved, this value is ignored. Set this to the last known DOCNUM in your SAP system to avoid processing historical records. |                  |

## Actions

### Call BAPI {#callbapi}

Call any SAP BAPI or RFC function module by name with XML parameters.

| Input              | Comments                                                                                                             | Default          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Connection         | The SAP ECC connection to use.                                                                                       |                  |
| Endpoint           | The SAP SOAP endpoint path.                                                                                          | /sap/bc/soap/rfc |
| BAPI Name          | The BAPI or RFC function module name to call.                                                                        |                  |
| BAPI Parameters    | XML parameters to pass to the BAPI. These are placed inside the SOAP envelope body for the function call.            |                  |
| Commit Transaction | When true, automatically calls BAPI_TRANSACTION_COMMIT after the BAPI call succeeds, using the same HTTP session.    | false            |
| Wait on Commit     | When true, passes WAIT='X' to BAPI_TRANSACTION_COMMIT, which waits for the update task to complete before returning. | false            |

### Get IDoc Status {#getidocstatus}

Retrieve the processing status of an IDoc by reading the EDIDS status table via RFC_READ_TABLE.

| Input       | Comments                                | Default          |
| ----------- | --------------------------------------- | ---------------- |
| Connection  | The SAP ECC connection to use.          |                  |
| IDoc Number | The IDoc number to retrieve status for. |                  |
| Endpoint    | The SAP SOAP endpoint path.             | /sap/bc/soap/rfc |

### Read Table {#readtable}

Read data from any SAP table using RFC_READ_TABLE. Supports field selection, row limits, and WHERE clause filtering.

| Input        | Comments                                                                          | Default          |
| ------------ | --------------------------------------------------------------------------------- | ---------------- |
| Connection   | The SAP ECC connection to use.                                                    |                  |
| Endpoint     | The SAP SOAP endpoint path.                                                       | /sap/bc/soap/rfc |
| Table Name   | The SAP table name to read from.                                                  |                  |
| Fields       | Comma-separated list of field names to return. If empty, all fields are returned. |                  |
| Row Count    | Maximum number of rows to return. Leave empty for all rows.                       |                  |
| Row Skips    | Number of rows to skip before returning results.                                  | 0                |
| Where Clause | ABAP WHERE clause to filter rows. Each condition must fit within 72 characters.   |                  |

### Send IDoc {#sendidoc}

Send an IDoc XML payload to SAP ECC for inbound processing via IDOC_INBOUND_ASYNCHRONOUS.

| Input         | Comments                                  | Default                  |
| ------------- | ----------------------------------------- | ------------------------ |
| Connection    | The SAP ECC connection to use.            |                          |
| IDoc XML Data | The full IDoc XML payload to send to SAP. |                          |
| Endpoint      | The SAP IDoc inbound endpoint path.       | /sap/bc/idoc_xml/inbound |

### Send SOAP Request {#sendsoaprequest}

Send a SOAP XML request to an SAP ECC RFC endpoint and return the raw XML response.

| Input              | Comments                                                                                                             | Default          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Connection         | The SAP ECC connection to use.                                                                                       |                  |
| Endpoint           | The SAP SOAP endpoint path.                                                                                          | /sap/bc/soap/rfc |
| SOAP Action        | The SOAP Action header value, typically the RFC function module name.                                                |                  |
| SOAP Body          | The full SOAP XML envelope to send in the request body. Must be a valid SOAP 1.1 or 1.2 envelope.                    |                  |
| Response as JSON   | When true, the XML response will be parsed and returned as JSON.                                                     | false            |
| Commit Transaction | When true, automatically calls BAPI_TRANSACTION_COMMIT after the SOAP request succeeds, using the same HTTP session. | false            |
| Wait on Commit     | When true, passes WAIT='X' to BAPI_TRANSACTION_COMMIT, which waits for the update task to complete before returning. | false            |
