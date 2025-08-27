---
title: Customer.io Connector
sidebar_label: Customer.io
description: Manage customers on the Customer.io platform
---

![Customer.io](./assets/customer-io.png#connector-icon)
Manage customers on the Customer.io platform

## Connections

### API Key

Authenticate requests to Customer.io using an API key & secret

An API key and SiteID are both required to interact with Customer.io.
The Customer.io **API Key** serves as the **API Key**, and the **Site ID** serves as the **API Secret**.
Read more about authentication in the [Customer.io docs](https://customer.io/docs/managing-credentials/).

| Input   | Comments                                                 | Default |
| ------- | -------------------------------------------------------- | ------- |
| API Key | Provide the API key from the developer console.          |         |
| Site Id | Provide the Site Id obtained from the developer console. |         |

## Actions

### Destroy

Delete a customer by unique ID

| Input      | Comments                                                                         | Default |
| ---------- | -------------------------------------------------------------------------------- | ------- |
| ID         | A customer Id is a unique identifier that lets you target a specific individual. |         |
| Region     | Provide the region in which your account is configured on.                       |         |
| Connection |                                                                                  |         |

### Identify

Create or update a customer

| Input         | Comments                                                                                                                                                 | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| ID            | A customer Id is a unique identifier that lets you target a specific individual.                                                                         |         |
| Region        | Provide the region in which your account is configured on.                                                                                               |         |
| Customer Data | Provide key and value pairs that make up a customer record. The key must be a string, and the value can either be a string, number, array, or an object. |         |
| Connection    |                                                                                                                                                          |         |

### Raw Request - Track API

Send raw HTTP request to Customer.io

| Input                   | Comments                                                                                                                                                                                                                                     | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                              |         |
| Region                  | Provide the region in which your account is configured on.                                                                                                                                                                                   |         |
| URL                     | Input the path only (/v1/accounts/region), The base URL is already included (https://track.customer.io/api). For example, to connect to https://track.customer.io/api/v1/accounts/region, only /v1/accounts/region is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                      |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                    |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                         |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                             |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                       |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                          |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                  |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                     | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                          |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                         | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                                                   | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                                              | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                                                    | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                                             | false   |

### Track

Track customer events

| Input      | Comments                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------- | ------- |
| ID         | A customer Id is a unique identifier that lets you target a specific individual.  |         |
| Region     | Provide the region in which your account is configured on.                        |         |
| Event Data | Provide key and value pairs that describe the event that your customer performed. |         |
| Event Name | Provide a string value for the name of the new event.                             |         |
| Connection |                                                                                   |         |

### Track Page View

Track customer history

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| ID         | A customer Id is a unique identifier that lets you target a specific individual.        |         |
| Region     | Provide the region in which your account is configured on.                              |         |
| URL        | To track a specific page, enter the full path. To track any page, use the asterisk '\*' |         |
| Connection |                                                                                         |         |
