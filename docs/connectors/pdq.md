---
title: PDQ Connector
sidebar_label: PDQ
description: Manage deployments, devices, groups, and packages in PDQ.
---

![PDQ](./assets/pdq.png#connector-icon)
[PDQ](https://www.pdq.com/) provides a suite of management tools to automate software deployment, manage patches, and track inventory across a company’s networks.

Use the PDQ component to manage deployments, devices, groups, and packages.

## API Documentation:

The component was built using the [PDQ V1 API](https://app.pdq.com/v1/docs)

## Connections

### API Key {#pdq-api-key}

Authenticate requests using an API key

Follow these steps to [generate a new API key](https://connect.pdq.com/hc/en-us/articles/22929727991451-PDQ-Connect-API) in PDQ:

1. Log in to the PDQ Connect account and select the settings icon represented by a cog located in the lower left corner.
2. Navigate to the **API keys** section and select **Create API Key.**
3. Provide a unique name for the API key and select **Create.**
4. Copy and save the generated API key as it will not be shown again.
5. Enter the generated API key into the connection configuration of the integration.

| Input   | Comments                                                                                                                                                   | Default |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| API Key | The API key generated from the PDQ Connect settings page. See [PDQ Connect API](https://connect.pdq.com/hc/en-us/articles/22929727991451-PDQ-Connect-API). |         |

## Triggers

### New Records {#pollchangestrigger}

Checks for new Devices or Groups added to PDQ on a configured schedule.

| Input         | Comments                                                                                     | Default |
| ------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection    | The PDQ connection to use.                                                                   |         |
| Resource Type | Select the PDQ resource to poll for newly added records. Choose Devices or Groups. Required. | Devices |

## Actions

### Create Deployment {#createdeployment}

Deploy a package version to target devices or groups.

| Input      | Comments                                 | Default |
| ---------- | ---------------------------------------- | ------- |
| Package ID | The package id to deploy.                |         |
| Targets    | Comma-delimited Device IDs or Group IDs. |         |
| Connection | The PDQ connection to use.               |         |

### Get Device {#getdevice}

Retrieve a device by ID.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Device ID  | The ID of the device to retrieve. |         |
| Connection | The PDQ connection to use.        |         |

### Get Package {#getpackage}

Retrieve a package by ID.

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Package ID | The unique identifier for the package to retrieve. |         |
| Connection | The PDQ connection to use.                         |         |

### List Devices {#listdevices}

Retrieve a list of devices.

| Input               | Comments                                                                                                                                  | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All           | When true, automatically fetches all pages of results using pagination.                                                                   | false   |
| Pagination          | Page number and page size to control result paging.                                                                                       |         |
| Page                | The page number to return. Page numbering starts at 1.                                                                                    |         |
| Page Size           | The number of records to return per page. Maximum is 100.                                                                                 |         |
| Filters             | Optional query controls to sort and refine the results.                                                                                   |         |
| Sort                | Sort by a field in camel case. By default a field name sorts with 'Asc'. Add the suffix 'Desc' to sort by that field in descending order. |         |
| Filter              | String filter values will filter on exact values unless a supported operator is provided.                                                 |         |
| Custom Query Params | Additional query parameters to include in the request.                                                                                    |         |
| Includes            | Include related resources.                                                                                                                |         |
| Group ID            | The id of the group to filter by.                                                                                                         |         |
| Connection          | The PDQ connection to use.                                                                                                                |         |

### List Groups {#listgroups}

Retrieve a list of groups.

| Input               | Comments                                                                                                                                  | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All           | When true, automatically fetches all pages of results using pagination.                                                                   | false   |
| Pagination          | Page number and page size to control result paging.                                                                                       |         |
| Page                | The page number to return. Page numbering starts at 1.                                                                                    |         |
| Page Size           | The number of records to return per page. Maximum is 100.                                                                                 |         |
| Filters             | Optional query controls to sort and refine the results.                                                                                   |         |
| Sort                | Sort by a field in camel case. By default a field name sorts with 'Asc'. Add the suffix 'Desc' to sort by that field in descending order. |         |
| Filter              | String filter values will filter on exact values unless a supported operator is provided.                                                 |         |
| Custom Query Params | Additional query parameters to include in the request.                                                                                    |         |
| Connection          | The PDQ connection to use.                                                                                                                |         |

### List Packages {#listpackages}

Retrieve a list of packages.

| Input               | Comments                                                                                                                                  | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All           | When true, automatically fetches all pages of results using pagination.                                                                   | false   |
| Pagination          | Page number and page size to control result paging.                                                                                       |         |
| Page                | The page number to return. Page numbering starts at 1.                                                                                    |         |
| Page Size           | The number of records to return per page. Maximum is 100.                                                                                 |         |
| Filters             | Optional query controls to sort and refine the results.                                                                                   |         |
| Sort                | Sort by a field in camel case. By default a field name sorts with 'Asc'. Add the suffix 'Desc' to sort by that field in descending order. |         |
| Filter              | String filter values will filter on exact values unless a supported operator is provided.                                                 |         |
| Custom Query Params | Additional query parameters to include in the request.                                                                                    |         |
| Connection          | The PDQ connection to use.                                                                                                                |         |

### Raw Request {#rawrequest}

Send raw HTTP request to the PDQ API.

| Input                   | Comments                                                                                                                                                                                                                            | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The PDQ connection to use.                                                                                                                                                                                                          |         |
| URL                     | Input the path only (/deployments), The base URL is already included (https://app.pdq.com/v1/api). For example, to connect to https://app.pdq.com/v1/api/deployments, only /deployments is entered in this field. e.g. /deployments |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                             |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                           |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                    |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                 |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                         |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                            | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                 |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                 | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                    | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                 | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                       | false   |
