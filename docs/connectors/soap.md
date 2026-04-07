---
title: SOAP Connector
sidebar_label: SOAP
description: Interact with a SOAP-based API
---

![SOAP](./assets/soap.png#connector-icon)
[SOAP](https://en.wikipedia.org/wiki/SOAP) (Simple Object Access Protocol) is a messaging protocol specification for exchanging structured information with web services.
The **SOAP** component supports fetching WSDL definitions, describing the methods a SOAP API supports, and making requests of the API's methods.

## Protocol Specification

This component implements SOAP as defined in the [W3C SOAP specification](https://www.w3.org/TR/soap/).

## Connections

### Basic Authentication {#basicauth}

SOAP Basic Authentication uses a username and password along with a SOAP login method to authenticate API requests.

#### Prerequisites

- Access to a SOAP API that supports Basic Authentication
- A valid username and password for the SOAP service
- Knowledge of the SOAP login method name required by the API

#### Configure the Connection

- **Username**: Enter the username for the SOAP API
- **Password**: Enter the password for the SOAP API
- **SOAP Login Method**: Enter the method name used to authenticate with the SOAP API (e.g., `Login`)
- **WSDL Definition URL**: Enter the URL to retrieve the WSDL definition from (optional, e.g., `https://example.com/api.svc?WSDL`)

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
