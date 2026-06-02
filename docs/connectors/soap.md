---
title: SOAP Connector
sidebar_label: SOAP
description: Interact with a SOAP-based API
---

![SOAP](./assets/soap.png#connector-icon)
Interact with a SOAP-based API

## Connections

### Basic Authentication {#basicauth}

| Input               | Comments                                           | Default |
| ------------------- | -------------------------------------------------- | ------- |
| Username            | Username                                           |         |
| Password            | Password                                           |         |
| SOAP Login Method   | The method used to authenticate the SOAP API.      |         |
| WSDL Definition URL | An optional URL to retrieve a WSDL definition from |         |

## Actions

### Describe Client {#describeclient}

Description of services, ports and methods as a JavaScript object

| Input           | Comments                                       | Default |
| --------------- | ---------------------------------------------- | ------- |
| Connection      |                                                |         |
| WSDL Definition | The WSDL definition's raw XML in string format |         |

### Get Authentication {#getwsdlauth}

Retrieve authentication data from a SOAP endpoint by calling the specified authentication method

| Input           | Comments                                       | Default |
| --------------- | ---------------------------------------------- | ------- |
| Connection      |                                                |         |
| WSDL Definition | The WSDL definition's raw XML in string format |         |

### Get WSDL Definition {#getwsdlbyurl}

Retrieves a WSDL Definition from a given endpoint and returns the raw XML

| Input    | Comments            | Default |
| -------- | ------------------- | ------- |
| WSDL URL | The URL of the WSDL |         |

### Request {#sendrequest}

Makes a request to the SOAP webservice using the specified method

| Input             | Comments                                                            | Default |
| ----------------- | ------------------------------------------------------------------- | ------- |
| Connection        |                                                                     |         |
| WSDL Definition   | The WSDL definition's raw XML in string format                      |         |
| Method            | Execute the SOAP web service method                                 |         |
| SOAP URL Override | Optionally override the default web service URL defined in the WSDL |         |
| Request Headers   | Blocks of XML to include in the SOAP header of the request          |         |
| SOAP Parameters   | Any additional parameters to pass to the web service method         |         |
