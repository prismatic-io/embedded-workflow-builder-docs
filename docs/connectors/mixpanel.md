---
title: Mixpanel Connector
sidebar_label: Mixpanel
description: Mixpanel is a SaaS event analytics platform that can track user interactions with web and mobile applications. Data collected can be used to build custom reports and measure user engagement and retention.
---

![Mixpanel](./assets/mixpanel.png#connector-icon)
Mixpanel is a SaaS event analytics platform that can track user interactions with web and mobile applications. Data collected can be used to build custom reports and measure user engagement and retention.

## Connections

### API Key

Setting up a Service Account:

1. In Mixpanel, navigate to the Service accounts tab in your [Organization Settings] (https://mixpanel.com/settings/org#serviceaccounts)
2. You will be asked to select the role and granted projects of the when creating a service account from the organization's settings page. Select “Add” when completed.
3. Once completed a Username and Secret are provided. Copy the values into their respective fields in the connection configuration.

Obtaining your Project Token:

1. A project's token can be found in the Access Keys section of a [project's settings overview page] (https://mixpanel.com/settings/project/)
   1. Copy the value into its respective fields in the connection configuration.

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Username      | Username of your Mixpanel Service Account |         |
| Password      | Password of your Mixpanel Service Account |         |
| Project Token | Project Token of your Mixpanel Account    |         |

## Actions

### Create Alias

Mixpanel supports adding an alias to a distinct id.

| Input         | Comments                                                                                                                                                                                                                                                                                                                                                      | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                                                                                               |         |
| Region        | The server location to be used: _`api` - The default (US) servers used for most projects_ `api-eu` - EU servers if you are enrolled in EU Data Residency                                                                                                                                                                                                      |         |
| Distinct ID   | The distinct ID post-identification (same as $identified_id - it will be inferred from $identified_id if not included)                                                                                                                                                                                                                                        |         |
| Project Token | The project token.                                                                                                                                                                                                                                                                                                                                            |         |
| Alias         | A new distinct_id to be merged with the original distinct_id. Each alias can only map to one distinct_id.                                                                                                                                                                                                                                                     |         |
| Strict        | If present and equal to 1, Mixpanel will validate the provided records and return a JSON object with per-record error messages for records that fail validation.                                                                                                                                                                                              |         |
| Verbose       | If present and equal to 1, Mixpanel will respond with a JSON Object describing the success or failure of the tracking call. The returned object will have two keys: status, with the value 1 on success and 0 on failure, and error, with a string-valued error message if the request wasn't successful. This is useful for debugging during implementation. |         |
| Redirect      | If present, Mixpanel will serve a redirect to the given url as a response to the request. This is useful to add link tracking in notifications.                                                                                                                                                                                                               |         |

### Create GCS Pipeline

This request creates an export pipeline.

| Input           | Comments                                                                                                                                                                                                                    | Default                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection      |                                                                                                                                                                                                                             |                         |
| Data and Domain | The server location to be used: _`data.mixpanel` - The default (US) servers used for most projects_ `data-eu.mixpanel` - EU servers if you are enrolled in EU Data Residency                                                |                         |
| GCS Bucket      | The GCS bucket to export the Mixpanel data to.                                                                                                                                                                              |                         |
| GCS Prefix      | The GCS path prefix of the bucket.                                                                                                                                                                                          |                         |
| GCS Region      | The GCS region for the bucket.                                                                                                                                                                                              | northamerica-northeast1 |
| Project ID      | Your project id (must be specified when using service account based authentication)                                                                                                                                         |                         |
| From Date       | The starting date of the export window. It is formatted as YYYY-MM-DD and cannot be more than six months in the past. If trial is set to true this will default to the previous day; otherwise, it is a required parameter. |                         |
| To Date         | The ending date of the export window. It is formatted as YYYY-MM-DD. The export will continue indefinitely if to_date is empty.                                                                                             |                         |
| Trial           | A trial pipeline will be created if value is true.                                                                                                                                                                          |                         |
| Frequency       | frequency can be either hourly or daily. hourly exports the data every hour. daily exports the data at midnight (based on the projects timezone). frequency should only be passed if your export window is indefinite.      | daily                   |
| Events          | A whitelist for the event you intend to export. It is okay to pass this multiple times to whitelist multiple events.                                                                                                        | <code>["000xxx"]</code> |
| Where           | A selector expression used to filter by events data, such as event properties. Learn more about how to construct event selector expressions here.                                                                           |                         |

### Create Generic Pipeline

This request creates an export pipeline.

| Input                   | Comments                                                                                                                                                                     | Default                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection              |                                                                                                                                                                              |                         |
| Data and Domain         | The server location to be used: _`data.mixpanel` - The default (US) servers used for most projects_ `data-eu.mixpanel` - EU servers if you are enrolled in EU Data Residency |                         |
| URL                     | The endpoint to send the request to. Defaults to /nessie/pipeline/create.                                                                                                    | /nessie/pipeline/create |
| Method                  | The HTTP method to use.                                                                                                                                                      |                         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                    |                         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                         |                         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                             |                         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                       |                         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                          |                         |
| Header                  | A list of headers to send with the request.                                                                                                                                  |                         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                     | json                    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                          |                         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                         | false                   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                   | 0                       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                              | false                   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                    | 0                       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                             | false                   |

### Create Identity

Creates a new Identity

| Input         | Comments                                                                                                                                                                                                                                                                                                                                                      | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                                                                                                                                                                                               |         |
| Region        | The server location to be used: _`api` - The default (US) servers used for most projects_ `api-eu` - EU servers if you are enrolled in EU Data Residency                                                                                                                                                                                                      |         |
| Identified ID | A distinct_id to merge with the $anon_id.                                                                                                                                                                                                                                                                                                                     |         |
| Anon ID       | A distinct_id to merge with the $identified_id. The $anon_id must be UUID v4 format and not already merged to an $identified_id.                                                                                                                                                                                                                              |         |
| Project Token | The project token.                                                                                                                                                                                                                                                                                                                                            |         |
| Strict        | If present and equal to 1, Mixpanel will validate the provided records and return a JSON object with per-record error messages for records that fail validation.                                                                                                                                                                                              |         |
| Verbose       | If present and equal to 1, Mixpanel will respond with a JSON Object describing the success or failure of the tracking call. The returned object will have two keys: status, with the value 1 on success and 0 on failure, and error, with a string-valued error message if the request wasn't successful. This is useful for debugging during implementation. |         |
| Redirect      | If present, Mixpanel will serve a redirect to the given url as a response to the request. This is useful to add link tracking in notifications.                                                                                                                                                                                                               |         |

### Create Profile

Takes a JSON object containing names and values of profile properties. This API will return a 200 OK even if there are data validation issues. To ensure the request actually succeeded, you need to check the response body.

| Input      | Comments                                                                                                                                                                                                                                                                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                                                                                                                                                                                                                               |         |
| Properties | Takes a JSON object containing names and values of profile properties. If the profile does not exist, it creates it with these properties. If it does exist, it sets the properties to these values, overwriting existing values.                                                                                                                             |         |
| Verbose    | If present and equal to 1, Mixpanel will respond with a JSON Object describing the success or failure of the tracking call. The returned object will have two keys: status, with the value 1 on success and 0 on failure, and error, with a string-valued error message if the request wasn't successful. This is useful for debugging during implementation. |         |
| Redirect   | If present, Mixpanel will serve a redirect to the given url as a response to the request. This is useful to add link tracking in notifications.                                                                                                                                                                                                               |         |
| Region     | The server location to be used: _`api` - The default (US) servers used for most projects_ `api-eu` - EU servers if you are enrolled in EU Data Residency                                                                                                                                                                                                      |         |

### Custom JQL Query

The HTTP API is the lowest-level way to use JQL.

| Input             | Comments                                                                                                                                                           | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                                                                                                    |         |
| Region and Domain | The server location to be used: _`mixpanel` - The default (US) servers used for most projects_ `eu.mixpanel` - EU servers if you are enrolled in EU Data Residency |         |
| Script            | The script to run.                                                                                                                                                 |         |
| Params            | A JSON-encoded object that will be made available to the script as the params global variable.                                                                     |         |
| Project ID        | Required if using service account (Username and Password) to authenticate request.                                                                                 |         |
| Workspace ID      | The id of the workspace if applicable.                                                                                                                             |         |

### Delete Pipeline

Deletes the pipeline and stops any future jobs to be scheduled for the pipeline.

| Input             | Comments                                                                                                                                                                     | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                              |         |
| Use Project Token | Use the Connection project token to authenticate the request.                                                                                                                | true    |
| Data and Domain   | The server location to be used: _`data.mixpanel` - The default (US) servers used for most projects_ `data-eu.mixpanel` - EU servers if you are enrolled in EU Data Residency |         |
| Name              | The name that uniquely identifies the pipeline.                                                                                                                              |         |
| Project ID        | Required if using service account (Username and Password) to authenticate request.                                                                                           |         |

### Delete Profile

Permanently delete the profile from Mixpanel, along with all of its properties.

| Input           | Comments                                                                                                                                                                                                                                                                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                                                                                                                                                                                                               |         |
| Delete Profiles | Permanently delete the profile from Mixpanel, along with all of its properties. The $delete object value is ignored - the profile is determined by the $distinct_id from the request itself.                                                                                                                                                                  |         |
| Verbose         | If present and equal to 1, Mixpanel will respond with a JSON Object describing the success or failure of the tracking call. The returned object will have two keys: status, with the value 1 on success and 0 on failure, and error, with a string-valued error message if the request wasn't successful. This is useful for debugging during implementation. |         |
| Redirect        | If present, Mixpanel will serve a redirect to the given url as a response to the request. This is useful to add link tracking in notifications.                                                                                                                                                                                                               |         |
| Region          | The server location to be used:_ `api` - The default (US) servers used for most projects _ `api-eu` - EU servers if you are enrolled in EU Data Residency                                                                                                                                                                                                     |         |

### Download Data

Download your event data as it is received and stored within Mixpanel.

| Input           | Comments                                                                                                                                                                     | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                              |         |
| Data and Domain | The server location to be used: _`data.mixpanel` - The default (US) servers used for most projects_ `data-eu.mixpanel` - EU servers if you are enrolled in EU Data Residency |         |
| From Date       | The date in yyyy-mm-dd format to begin querying from. This date is inclusive.                                                                                                |         |
| To Date         | The date in yyyy-mm-dd format to query to. This date is inclusive.                                                                                                           |         |
| Project ID      | Required if using service account (Username and Password) to authenticate request.                                                                                           |         |
| Limit           | Return the top property values. Defaults to 255 if not explicitly included. Maximum value 10,000. This parameter does nothing if 'on' is not specified.                      |         |
| Event Name      | The event or events that you wish to get data for, encoded as a JSON array.                                                                                                  |         |
| Where           | An expression to filter events by. More info on expression sequence structure can be found here: https://developer.mixpanel.com/reference/segmentation-expressions           |         |
| Gzip Encoding   | Whether the response should be compressed with gzip, and Content-Encoding will be set to gzip                                                                                | false   |

### Edit GCS Pipeline

This request edit the params for an export pipeline.

| Input           | Comments                                                                                                                                                                                                                                | Default                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection      |                                                                                                                                                                                                                                         |                         |
| Data and Domain | The server location to be used: _`data.mixpanel` - The default (US) servers used for most projects_ `data-eu.mixpanel` - EU servers if you are enrolled in EU Data Residency                                                            |                         |
| Name            | The name that uniquely identifies the pipeline.                                                                                                                                                                                         |                         |
| Project ID      | Your project id (must be specified when using service account based authentication)                                                                                                                                                     |                         |
| Events          | A whitelist for the event you intend to export. It is okay to pass this multiple times to whitelist multiple events.                                                                                                                    | <code>["000xxx"]</code> |
| Where           | A selector expression used to filter by events data, such as event properties. Please note that after this update, the sync of older dates to your data warehouse (if enabled) will only contain events matching your new where clause. |                         |

### Edit Generic Pipeline

This request edit the params for an export pipeline.

| Input                   | Comments                                                                                                                                                                     | Default               |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Connection              |                                                                                                                                                                              |                       |
| Data and Domain         | The server location to be used: _`data.mixpanel` - The default (US) servers used for most projects_ `data-eu.mixpanel` - EU servers if you are enrolled in EU Data Residency |                       |
| Name                    | The name that uniquely identifies the pipeline.                                                                                                                              |                       |
| URL                     | The endpoint to send the request to. Defaults to /nessie/pipeline/edit.                                                                                                      | /nessie/pipeline/edit |
| Method                  | The HTTP method to use.                                                                                                                                                      |                       |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                    |                       |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                         |                       |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                             |                       |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                       |                       |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                          |                       |
| Header                  | A list of headers to send with the request.                                                                                                                                  |                       |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                     | json                  |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                          |                       |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                         | false                 |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                   | 0                     |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                              | false                 |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                    | 0                     |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                             | false                 |

### Get Pipeline

Given the name of the pipeline this API returns the status of the pipeline.

| Input           | Comments                                                                                                                                                                     | Default                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection      |                                                                                                                                                                              |                         |
| Data and Domain | The server location to be used: _`data.mixpanel` - The default (US) servers used for most projects_ `data-eu.mixpanel` - EU servers if you are enrolled in EU Data Residency |                         |
| Project ID      | Required if using service account (Username and Password) to authenticate request.                                                                                           |                         |
| Name            | The name that uniquely identifies the pipeline.                                                                                                                              |                         |
| Summary         | Only lists task count by status and no details.                                                                                                                              | false                   |
| Status          | Filters the tasks by the given status. Valid options for status are pending, running, retried, failed, canceled, and timed_out.                                              | <code>["000xxx"]</code> |

### Import Events

Each request ingests a batch of events into Mixpanel.

| Input             | Comments                                                                                                                                                 | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                          |         |
| Use Project Token | Use the Connection project token to authenticate the request.                                                                                            | false   |
| Region            | The server location to be used: _`api` - The default (US) servers used for most projects_ `api-eu` - EU servers if you are enrolled in EU Data Residency |         |
| Events            | Each request ingests a batch of events into Mixpanel. We accept up to 2000 events and 2MB uncompressed per request. Events are part of the request body. |         |
| Project ID        | Required if using service account (Username and Password) to authenticate request.                                                                       |         |

### List Pipelines

Returns the list of all the pipelines scheduled for a project.

| Input           | Comments                                                                                                                                                                     | Default |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                                              |         |
| Data and Domain | The server location to be used: _`data.mixpanel` - The default (US) servers used for most projects_ `data-eu.mixpanel` - EU servers if you are enrolled in EU Data Residency |         |
| Project ID      | Required if using service account (Username and Password) to authenticate request.                                                                                           |         |

### List Saved Funnels

Get the names and funnel_ids of your funnels.

| Input             | Comments                                                                                                                                                           | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                                                                                                    |         |
| Use Project Token | Use the Connection project token to authenticate the request.                                                                                                      | false   |
| Region and Domain | The server location to be used: _`mixpanel` - The default (US) servers used for most projects_ `eu.mixpanel` - EU servers if you are enrolled in EU Data Residency |         |
| Project ID        | Required if using service account (Username and Password) to authenticate request.                                                                                 |         |
| Workspace ID      | The id of the workspace if applicable.                                                                                                                             |         |

### Query Funnel Saved Reports

Get data for a funnel.

| Input             | Comments                                                                                                                                                                                                                                                                                                                                                           | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                                                                                                                                                                                                                                                                                                    |         |
| Use Project Token | Use the Connection project token to authenticate the request.                                                                                                                                                                                                                                                                                                      | false   |
| Region and Domain | The server location to be used: _`mixpanel` - The default (US) servers used for most projects_ `eu.mixpanel` - EU servers if you are enrolled in EU Data Residency                                                                                                                                                                                                 |         |
| Funnel ID         | The funnel that you wish to get data for.                                                                                                                                                                                                                                                                                                                          |         |
| From Date         | The date in yyyy-mm-dd format to begin querying from. This date is inclusive.                                                                                                                                                                                                                                                                                      |         |
| To Date           | The date in yyyy-mm-dd format to query to. This date is inclusive.                                                                                                                                                                                                                                                                                                 |         |
| Project ID        | Required if using service account (Username and Password) to authenticate request.                                                                                                                                                                                                                                                                                 |         |
| Workspace ID      | The id of the workspace if applicable.                                                                                                                                                                                                                                                                                                                             |         |
| Length            | The number of units (defined by length_unit) each user has to complete the funnel, starting from the time they triggered the first step in the funnel. May not be greater than 90 days. Note that we will query for events past the end of to_date to look for funnel completions. This defaults to the value that was previously saved in the UI for this funnel. |         |
| Length Unit       | The unit applied to the length parameter can be 'second', 'minute', 'hour', or 'day'. Defaults to the value that was previously saved in the UI for this funnel.                                                                                                                                                                                                   |         |
| Interval          | The number of days you want each bucket to contain. The default value is 1.                                                                                                                                                                                                                                                                                        |         |
| Unit              | This is an alternate way of specifying interval and can be 'day', 'week', or 'month'.                                                                                                                                                                                                                                                                              |         |
| Interval          | The property expression to segment the event on. See the expression to segment below. https://developer.mixpanel.com/reference/segmentation-expressions                                                                                                                                                                                                            |         |
| Where             | An expression to filter events by. See the expression to segment below. https://developer.mixpanel.com/reference/segmentation-expressions                                                                                                                                                                                                                          |         |
| Limit             | Return the top property values. Defaults to 255 if not explicitly included. Maximum value 10,000. This parameter does nothing if 'on' is not specified.                                                                                                                                                                                                            |         |

### Query Insights Saved Reports

Get data from your Insights reports.

| Input             | Comments                                                                                                                                                           | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                                                                                                    |         |
| Region and Domain | The server location to be used: _`mixpanel` - The default (US) servers used for most projects_ `eu.mixpanel` - EU servers if you are enrolled in EU Data Residency |         |
| Bookmark ID       | The ID of your Insights report can be found from the url: https://mixpanel.com/report/1/insights#report/<YOUR_BOOKMARK_ID>/example-report                          |         |
| Project ID        | Required if using service account (Username and Password) to authenticate request.                                                                                 |         |
| Workspace ID      | The id of the workspace if applicable.                                                                                                                             |         |

### Query Profile

Query user profile data and return list of users that fit specified parameters.

| Input             | Comments                                                                                                                                                                                                                                                                                 | Default                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Connection        |                                                                                                                                                                                                                                                                                          |                         |
| Region and Domain | The server location to be used: _`mixpanel` - The default (US) servers used for most projects_ `eu.mixpanel` - EU servers if you are enrolled in EU Data Residency                                                                                                                       |                         |
| Project ID        | Required if using service account (Username and Password) to authenticate request.                                                                                                                                                                                                       |                         |
| Workspace ID      | The id of the workspace if applicable.                                                                                                                                                                                                                                                   |                         |
| Distinct IDs      | A unique identifier used to distinguish an individual profile. Could be an array of identifiers.                                                                                                                                                                                         | <code>["000xxx"]</code> |
| Where             | An expression to filter users by. See the expressions section above. https://developer.mixpanel.com/reference/segmentation-expressions                                                                                                                                                   |                         |
| Output Properties | A JSON array of names of properties you want returned. This parameter can drastically reduce the amount of data returned by the API when you're not interested in all properties and can speed up queries significantly.                                                                 | <code>["000xxx"]</code> |
| Session ID        | A string id provided in the results of a previous query. Using a session_id speeds up api response, and allows paging through results.                                                                                                                                                   |                         |
| Page              | Which page of the results to retrieve. Pages start at zero. If the 'page' parameter is provided, the session_id parameter must also be provided.                                                                                                                                         |                         |
| Behaviors         | If you are exporting user profiles using an event selector, you use a behaviors parameter in your request. behaviors and filter_by_cohort are mutually exclusive.                                                                                                                        |                         |
| As Of Timestamp   | This parameter is only useful when also using behaviors. If you try to export more than 1k profiles using a behaviors parameter and you don't included the parameter as_of_timestamp, you'll see the following error: request for page in uncached query for params                      |                         |
| Filter By Cohort  | Takes a JSON object with a single key called id whose value is the cohort ID. behaviors and filter_by_cohort are mutually exclusive.                                                                                                                                                     |                         |
| Include All Users | If set to true means that the Engage API will include distinct_ids that don't have a user profile. This is the default. If set to false, means that the Engage API will only include distinct_ids with user profiles. this parameter is only applied when combined with filter_by_cohort | true                    |

### Raw Request

Send raw HTTP request to Mixpanel

| Input                   | Comments                                                                                                                                                                                                                                                   | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                            |         |
| Base URL                | Input the base url you're going to hit. For example, https://api.mixpanel.com/ or https://api-eu.mixpanel.com/                                                                                                                                             |         |
| URL                     | Input the path only (/import), The base URL is going to defined in the previous input. For example, to connect to https://api.mixpanel.com/import, only /import is entered in this field and https://api.mixpanel.com/ is entered in the 'Base URL' field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                    |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                  |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                       |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                           |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                     |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                        |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                   | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                        |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                       | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                                                                                 | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                                                                                            | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                                                                                           | false   |

### Track Events

Track events to Mixpanel from client devices.

| Input             | Comments                                                                                                                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                                                                                                                                                                                               |         |
| Use Project Token | Use the Connection project token to authenticate the request.                                                                                                                                                                                                                                                                                                 | true    |
| Region            | The server location to be used: _`api` - The default (US) servers used for most projects_ `api-eu` - EU servers if you are enrolled in EU Data Residency                                                                                                                                                                                                      |         |
| IP                | If present and equal to 1, Mixpanel will use the ip address of the incoming request and compute a distinct_id using a hash function if no distinct_id is provided. This is different from providing a properties.ip value in the Event Object.                                                                                                                |         |
| Verbose           | If present and equal to 1, Mixpanel will respond with a JSON Object describing the success or failure of the tracking call. The returned object will have two keys: status, with the value 1 on success and 0 on failure, and error, with a string-valued error message if the request wasn't successful. This is useful for debugging during implementation. |         |
| Redirect          | If present, Mixpanel will serve a redirect to the given url as a response to the request. This is useful to add link tracking in notifications.                                                                                                                                                                                                               |         |
| Img               | If present and equal to 1, Mixpanel will serve a 1x1 transparent pixel image as a response to the request. This is useful for adding Pixel Tracking in places that javascript is not supported.                                                                                                                                                               |         |
| Events            | Each request ingests a batch of events into Mixpanel. We accept up to 2000 events and 2MB uncompressed per request. Events are part of the request body.                                                                                                                                                                                                      |         |

### Update Multiple Profiles

Send a batch of profile updates.

| Input                | Comments                                                                                                                                                                                                                                                                                                                                                      | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                                                                                                                                                                                               |         |
| Properties To Update | Send a batch of profile updates. Instead of sending a single JSON object as the data query parameter, send a JSON list of objects as the data parameter.                                                                                                                                                                                                      |         |
| Verbose              | If present and equal to 1, Mixpanel will respond with a JSON Object describing the success or failure of the tracking call. The returned object will have two keys: status, with the value 1 on success and 0 on failure, and error, with a string-valued error message if the request wasn't successful. This is useful for debugging during implementation. |         |
| Redirect             | If present, Mixpanel will serve a redirect to the given url as a response to the request. This is useful to add link tracking in notifications.                                                                                                                                                                                                               |         |
| Region               | The server location to be used: _`api` - The default (US) servers used for most projects_ `api-eu` - EU servers if you are enrolled in EU Data Residency                                                                                                                                                                                                      |         |
