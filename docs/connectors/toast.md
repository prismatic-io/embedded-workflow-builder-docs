---
title: Toast Connector
sidebar_label: Toast
description: Use the Toast component to manage Employees, Jobs, Cash Entries, and more.
---

![Toast](./assets/toast.png#connector-icon)
Use the Toast component to manage Employees, Jobs, Cash Entries, and more.

## Connections

### Toast Client Credentials

Connection for Toast Client Credentials

To authenticate via OAuth 2.0 You must provide a client identifier (clientId) and client secret (clientSecret) to the connection configuration of the integration. These may be obtained by requesting them from your Toast support team. Follow [these](https://doc.toasttab.com/doc/devguide/authentication.html#apiAuthTokenStorage) guidelines when storing your API credentials.

| Input         | Comments                 | Default |
| ------------- | ------------------------ | ------- |
| Client ID     | Client ID for Toast.     |         |
| Client Secret | Client Secret for Toast. |         |
| API URL       | Your API URL for Toast.  |         |

## Triggers

### Webhook

Receive and validate webhook requests from Toast for webhooks you configure.

| Input  | Comments                       | Default |
| ------ | ------------------------------ | ------- |
| Secret | The secret key for the webhook |         |

## Actions

### Create Employee

Creates a restaurant employee record.

| Input                  | Comments                                                                                                                                                                                                                                                         | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                                                                                  |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant.                                                                                                                |         |
| Email                  | Employee's email address.                                                                                                                                                                                                                                        |         |
| First Name             | First name of the employee.                                                                                                                                                                                                                                      |         |
| Last Name              | Last name of the employee.                                                                                                                                                                                                                                       |         |
| Chosen Name            | Optional, chosen name of the employee. To be used, when appropriate, in place of first name.                                                                                                                                                                     |         |
| External ID            | External identifier string that is prefixed by the naming authority.                                                                                                                                                                                             |         |
| External Employee ID   | Optional, employee's external ID in the Toast platform.                                                                                                                                                                                                          |         |
| Job References         | An array of external references to jobs assigned to this employee. See https://doc.toasttab.com/openapi/labor/tag/Data-definitions/schema/Employee/ for more information.                                                                                        |         |
| Wage Overrides         | An optional array of per job wage overrides, where each element defines a job reference and the wage override for this employee when performing that job. See https://doc.toasttab.com/openapi/labor/tag/Data-definitions/schema/Employee/ for more information. |         |
| Additional Fields      | Additional fields that might not be covered by the standard inputs. This is a JSON object. See https://doc.toasttab.com/openapi/labor/tag/Data-definitions/schema/Employee/ for more information.                                                                |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                                                                                                                             | false   |

### Create Shift

Creates a schedule shift for a restaurant employee.

| Input                  | Comments                                                                                                                                                                                        | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                 |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant.                                               |         |
| In Date                | Timestamp of the beginning of the shift. This is when the employee can clock in. Expressed in the UTC time zone.                                                                                |         |
| Out Date               | Timestamp of the end of the shift. This is when the employee can clock out. Expressed in the UTC time zone.                                                                                     |         |
| Employee Reference     | A wrapper object with fields that allow reference to a Toast platform entity by Toast GUID. See https://doc.toasttab.com/openapi/labor/tag/Data-definitions/schema/Shift/ for more information. |         |
| External ID            | External identifier string that is prefixed by the naming authority.                                                                                                                            |         |
| Job Reference          | A wrapper object with fields that allow reference to a Toast platform entity by Toast GUID. See https://doc.toasttab.com/openapi/labor/tag/Data-definitions/schema/Shift/ for more information. |         |
| Additional Fields      | Additional fields that might not be covered by the standard inputs. This is a JSON object. See https://doc.toasttab.com/openapi/labor/tag/Data-definitions/schema/Shift/ for more information.  |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                                                            | false   |

### Delete Employee

Deletes a restaurant employee record by marking the record as deleted.

| Input                  | Comments                                                                                                                                          | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant. |         |
| Employee ID            | The GUID of the employee to delete.                                                                                                               |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                              | false   |

### Delete Shift

Marks an existing schedule shift record for a restaurant employee as deleted.

| Input                  | Comments                                                                                                                                          | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant. |         |
| Shift ID               | The shift identifier, either the Toast platform GUID or an external identifier.                                                                   |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                              | false   |

### Get Employee

Returns an Employee object containing information about one restaurant employee.

| Input                  | Comments                                                                                                                                          | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant. |         |
| Employee ID            | The GUID of the employee to retrieve.                                                                                                             |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                              | false   |

### Get One Job

Returns a Job object containing information about one employee job at a restaurant.

| Input                  | Comments                                                                                                                                          | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant. |         |
| Job ID                 | The Toast platform GUID or an external identifier for the job.                                                                                    |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                              | false   |

### Get Shift

Performs Get Shift

| Input                  | Comments                                                                                                                                          | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant. |         |
| Shift ID               | The shift identifier, either the Toast platform GUID or an external identifier.                                                                   |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                              | false   |

### Get Time Entry

Returns a TimeEntry object containing information about one employee shift.

| Input                  | Comments                                                                                                                                          | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant. |         |
| Time Entry ID          | The Toast platform GUID or an external identifier for the time entry.                                                                             |         |
| Include Archived       | Controls whether the response includes an archived time entry.                                                                                    | false   |
| Include Missed Breaks  | Indicate whether missed breaks should be returned in the breaks array for the time entries.                                                       | false   |
| Debug Request          | Enabling this flag will log out the current request.                                                                                              | false   |

### List Accessible Restaurants

Returns an array of PartnerAccessExternalRep objects that contain information about the Toast restaurants that your partner API client can access.

| Input         | Comments                                                                                                                               | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                        |         |
| Last Modified | Limits the return data to restaurants that changed their access configuration for a partner API client after a specific date and time. |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                   | false   |

### List Cash Entries

Returns information about cash added to or removed from a cash drawer or other cash storage device.

| Input                  | Comments                                                                                                                                          | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant. |         |
| Business Date          | The business date the cash entries were created, in the format yyyymmdd.                                                                          |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                              | false   |

### List Connected Restaurants

Returns a PaginatedResponse object that contains a paginated array of the restaurants that have connected to your integrated partner service.

| Input         | Comments                                                                                                                                                                                                                                    | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                             |         |
| Last Modified | Limits the return data to restaurants that changed their access configuration for your partner service after a specific date and time. You can use this parameter to identify new or updated restaurants connected to your partner service. |         |
| Page Size     | Controls the number of PartnerAccessExternalRep objects that the endpoint will return in each page of response data. The maximum page size is 200.                                                                                          | 100     |
| Page Token    | Returns a specific set of restaurants in the response value. You get the token string for the next page of connected restaurants from the nextPageToken value of the PaginatedResponse object for a page of results.                        |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                                                                                        | false   |

### List Deposits

Returns an array of Deposit objects containing information about cash removed from a restaurant to be deposited in a bank or other financial institution during one business day.

| Input                  | Comments                                                                                                                                          | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant. |         |
| Business Date          | The business date the deposits were created, in the format yyyymmdd.                                                                              |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                              | false   |

### List Employees

Returns an array of Employee objects containing information about restaurant employees.

| Input                  | Comments                                                                                                                                          | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant. |         |
| Employee IDs           | An optional identifier that filters return values for a specific employee. The identifier can be a Toast platform GUID or an external identifier. |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                              | false   |

### List Jobs

Returns an array of Job objects containing information about the employee jobs configured at a restaurant.

| Input                  | Comments                                                                                                                                          | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant. |         |
| Job IDs                | An optional job identifier, either the Toast platform GUID or an external identifier assigned by the client.                                      |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                              | false   |

### List Shifts

Returns an array of Shift objects that contain information about schedule shifts for restaurant employees.

| Input                  | Comments                                                                                                                                                                                                                                                                                                                                              | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                                                                                                                                                                       |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant.                                                                                                                                                                                                     |         |
| Start Date             | Optional start date and time of time period to match shifts. A shift matches the time period if the shift inDate is after (inclusive) the specified Start Date and the shift Out Date is before the End Date (exclusive). These parameters are required if the Shift Ids input is not defined. The specified period cannot be longer than one month.  |         |
| End Date               | Optional end date and time of time period to match shifts. A shift matches the time period if the shift inDate is after (inclusive) the specified Start Date and the shift Out Date is before the End Date (exclusive). These parameters are required if the shiftIds parameter is not defined. The specified period cannot be longer than one month. |         |
| Shift IDs              | An optional identifier that filters return values for a specific shift. The identifier can be a Toast platform GUID or an external identifier. If present, the shifts resource will only return the shifts you specify.                                                                                                                               |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                  | false   |

### List Time Entries

Returns an array of Time Entry objects that contain information about employee shift events.

| Input                  | Comments                                                                                                                                                                                                                                                                                                                          | Default |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant.                                                                                                                                                                                 |         |
| Business Date          | Optional date to match time entries. A time entry matches the business date if its clock-in inDate is during the business date. The cutoff from one Business Date to the next is the Closeout Hour for the restaurant.                                                                                                            |         |
| Start Date             | The start date and time of the time period to match time entries. A time entry matches the time period if its clock-in inDate is after (inclusive) the specified Start Date and before (exclusive) the End Date. The specified period cannot be longer than one month.                                                            |         |
| End Date               | The end date and time of the time period to match time entries. A time entry matches the time period if its clock-in inDate is after (inclusive) the specified Start Date and before (exclusive) the End Date. The specified period cannot be longer than one month.                                                              |         |
| Include Archived       | Controls whether the response includes archived time entries, when using the Start Date and End Date parameters.                                                                                                                                                                                                                  | false   |
| Include Missed Breaks  | Indicate whether missed breaks should be returned in the breaks array for the time entries.                                                                                                                                                                                                                                       | false   |
| Modified End Date      | The end date and time of the time period to match modified time entries. A time entry matches the time period if that entry was modified before (exclusive) the Modified End Date. If you include this parameter, you must also include the Modified Start Date parameter. The specified period cannot be longer than one month.  |         |
| Modified Start Date    | The start date and time of the time period to match modified time entries. A time entry matches the time period if that entry was modified after (inclusive) the Modified Start Date. If you include this parameter, you must also include the Modified End Date parameter. The specified period cannot be longer than one month. |         |
| Time Entry IDs         | A time entry identifier, either the Toast platform GUID or an external identifier.                                                                                                                                                                                                                                                |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                              | false   |

### Raw Request

Send raw HTTP request to Toast.

| Input                   | Comments                                                                                                                                                                                                                                          | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                   |         |
| URL                     | Input the path only (/partners/v1/restaurants), The base URL is already included (https://toast-api-server). For example, to connect to https://toast-api-server/partners/v1/restaurants, only /partners/v1/restaurants is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                           |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                         |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                              |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                  |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                            |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                               |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                       |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                          | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                               |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                              | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                               | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                  | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                               | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                     | false   |

### Update Employee

Performs Update Employee

| Input                  | Comments                                                                                                                                                                                          | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                   |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant.                                                 |         |
| Employee ID            | The GUID of the employee to delete.                                                                                                                                                               |         |
| First Name             | First name of the employee.                                                                                                                                                                       |         |
| Chosen Name            | Optional, chosen name of the employee. To be used, when appropriate, in place of first name.                                                                                                      |         |
| Last Name              | Last name of the employee.                                                                                                                                                                        |         |
| External Employee ID   | Optional, employee's external ID in the Toast platform.                                                                                                                                           |         |
| Passcode               | The passcode for access to Toast POS devices. When updating the passcode, you must include the current passcode in the Current Passcode value.                                                    |         |
| Current Passcode       | The employee's current passcode. Required when updating the passcode.                                                                                                                             |         |
| Additional Fields      | Additional fields that might not be covered by the standard inputs. This is a JSON object. See https://doc.toasttab.com/openapi/labor/tag/Data-definitions/schema/Employee/ for more information. |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                                                              | false   |

### Update Shift

Updates an existing schedule shift record for a restaurant employee.

| Input                  | Comments                                                                                                                                                                                        | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                                                                 |         |
| Restaurant External ID | The GUID of the restaurant that is the context of the request. Use the List Accessible Restaurants action to get the external ID of a restaurant.                                               |         |
| Shift ID               | The shift identifier, either the Toast platform GUID or an external identifier.                                                                                                                 |         |
| Job Reference          | A wrapper object with fields that allow reference to a Toast platform entity by Toast GUID. See https://doc.toasttab.com/openapi/labor/tag/Data-definitions/schema/Shift/ for more information. |         |
| Employee Reference     | A wrapper object with fields that allow reference to a Toast platform entity by Toast GUID. See https://doc.toasttab.com/openapi/labor/tag/Data-definitions/schema/Shift/ for more information. |         |
| In Date                | Timestamp of the beginning of the shift. This is when the employee can clock in. Expressed in the UTC time zone.                                                                                |         |
| Out Date               | Timestamp of the end of the shift. This is when the employee can clock out. Expressed in the UTC time zone.                                                                                     |         |
| Additional Fields      | Additional fields that might not be covered by the standard inputs. This is a JSON object. See https://doc.toasttab.com/openapi/labor/tag/Data-definitions/schema/Shift/ for more information.  |         |
| Debug Request          | Enabling this flag will log out the current request.                                                                                                                                            | false   |
