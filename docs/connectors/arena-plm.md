---
title: Arena PLM Connector
sidebar_label: Arena PLM
description: Interact with items and resources in Arena PLM
---

![Arena PLM](./assets/arena-plm.png#connector-icon)
Interact with items and resources in Arena PLM

## Connections

### Arena PLM Basic Auth

Arena PLM Basic Auth

Arena's API relies on basic authentication.
They recommend that you create a user dedicated to integrations with an email address and password.
In addition to email address and password, your customer will also need to know their **workspace ID**, which is a 9-digit number that they can find within Arena PLM.

| Input                  | Comments | Default                        |
| ---------------------- | -------- | ------------------------------ |
| Email Address          |          |                                |
| Password               |          |                                |
| Arena PLM Workspace ID |          |                                |
| Region                 |          | https://api.arenasolutions.com |

## Actions

### Raw Request

Send raw HTTP request to Arena PLM

| Input                   | Comments                                                                                                                                                                                                         | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/v1/items), The base URL is already included (https://api.arenasolutions.com). For example, to connect to https://api.arenasolutions.com/v1/items, only /v1/items is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                              |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                 | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                    | false   |
