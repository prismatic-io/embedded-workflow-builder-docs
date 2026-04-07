---
title: Mixpanel Connector
sidebar_label: Mixpanel
description: Manage events, profiles, and analytics data in Mixpanel.
---

![Mixpanel](./assets/mixpanel.png#connector-icon)
[Mixpanel](https://mixpanel.com/) is a product analytics platform that tracks user interactions with web and mobile applications. This component allows you to track events, manage user profiles, query analytics data, and create custom funnels.

## API Documentation

This component was built using the [Mixpanel HTTP API](https://developer.mixpanel.com/reference/overview).

## Connections

### API Key {#apitoken}

API Key for a Mixpanel Account

To authenticate with Mixpanel, a service account is required for API access, along with a project token for project-specific operations.

For more information, refer to [Mixpanel's Service Account documentation](https://developer.mixpanel.com/reference/service-accounts).

#### Prerequisites

- A Mixpanel account with access to organization settings
- Permissions to create service accounts in the organization
- Access to the project where the integration will be used

#### Setup Steps

**Setting up a Service Account:**

1. Navigate to [Organization Settings > Service Accounts](https://mixpanel.com/settings/org#serviceaccounts) in Mixpanel
2. Click **Add Service Account** to create a new service account
3. Select the appropriate role and grant access to the required projects
4. Click **Add** to complete the creation
5. Copy the **Username** and **Secret** values that are provided

**Obtaining the Project Token:**

1. Navigate to the [Project Settings](https://mixpanel.com/settings/project/) page in Mixpanel
2. Locate the **Access Keys** section
3. Copy the **Project Token** value

#### Configure the Connection

Enter the following values into the connection configuration:

- **Username**: The service account username from step 5 above
- **Password**: The service account secret from step 5 above
- **Project Token**: The project token from the Access Keys section

:::note[Service Account Roles]
The service account role determines what operations can be performed through the API. Ensure the selected role has sufficient permissions for the integration's intended use. Refer to [Mixpanel's documentation on roles and permissions](https://docs.mixpanel.com/docs/orgs-and-projects/roles-and-permissions) for more information.
:::

| Input         | Comments                                                                                                                               | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Username      | The Mixpanel Service Account username. Obtain this from Settings > Organization Settings > Service Accounts in the Mixpanel dashboard. |         |
| Password      | The Mixpanel Service Account secret. Obtain this from Settings > Organization Settings > Service Accounts in the Mixpanel dashboard.   |         |
| Project Token | The Mixpanel Project Token. Find this in Settings > Project Settings in the Mixpanel dashboard.                                        |         |

## Actions

### Create Alias {#createalias}

Mixpanel supports adding an alias to a distinct id.

| Input         | Comments                                                                                                                                                                 | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    | The Mixpanel connection to use.                                                                                                                                          |         |
| Region        | The server location to use. Select 'api' for the default US servers or 'api-eu' for EU servers if you are enrolled in EU Data Residency.                                 |         |
| Distinct ID   | The unique identifier for the user post-identification. Equivalent to $identified_id and will be inferred if not provided.                                               |         |
| Project Token | Your Mixpanel project token. Find this in Settings > Project Settings in your Mixpanel dashboard.                                                                        |         |
| Alias         | A new distinct_id to be merged with the original distinct_id. Each alias can only map to one distinct_id.                                                                |         |
| Strict        | When true, Mixpanel will validate the provided records and return per-record error messages for records that fail validation. Set to 1 to enable strict validation.      |         |
| Verbose       | When true, Mixpanel will respond with a detailed JSON object describing the success or failure of the tracking call. Set to 1 to enable verbose responses for debugging. |         |
| Redirect      | When provided, Mixpanel will serve a redirect to the given URL as a response. Useful for link tracking in notifications.                                                 |         |

### Create GCS Pipeline {#creategcspipeline}

This request creates an export pipeline.

| Input           | Comments                                                                                                                                                                                                                    | Default                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Connection      | The Mixpanel connection to use.                                                                                                                                                                                             |                            |
| Data and Domain | The server location to use. Select 'data' for the default US servers or 'data-eu' for EU servers if you are enrolled in EU Data Residency.                                                                                  |                            |
| GCS Bucket      | The Google Cloud Storage bucket name where Mixpanel data will be exported.                                                                                                                                                  |                            |
| GCS Prefix      | The path prefix within the GCS bucket for organizing exported files.                                                                                                                                                        |                            |
| GCS Region      | The Google Cloud Storage region where the bucket is located.                                                                                                                                                                | northamerica-northeast1    |
| Project ID      | Your project id (must be specified when using service account based authentication)                                                                                                                                         |                            |
| From Date       | The starting date of the export window. It is formatted as YYYY-MM-DD and cannot be more than six months in the past. If trial is set to true this will default to the previous day; otherwise, it is a required parameter. |                            |
| To Date         | The ending date of the export window. It is formatted as YYYY-MM-DD. The export will continue indefinitely if to_date is empty.                                                                                             |                            |
| Trial           | When true, creates a trial pipeline for testing purposes before production deployment.                                                                                                                                      |                            |
| Frequency       | The export frequency. 'hourly' exports data every hour, 'daily' exports at midnight in the project's timezone. Only applies to indefinite export windows.                                                                   | daily                      |
| Events          | An array of event names to whitelist for export. Only these events will be exported from Mixpanel.                                                                                                                          | <code>["Page View"]</code> |
| Where           | A selector expression used to filter by events data, such as event properties. Learn more about how to construct event selector expressions here.                                                                           |                            |

### Create Generic Pipeline {#creategenericpipeline}

This request creates an export pipeline.

| Input                   | Comments                                                                                                                                                                                         | Default                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| Connection              | The Mixpanel connection to use.                                                                                                                                                                  |                         |
| Data and Domain         | The server location to use. Select 'data' for the default US servers or 'data-eu' for EU servers if you are enrolled in EU Data Residency.                                                       |                         |
| URL                     | The endpoint to send the request to. Defaults to /nessie/pipeline/create.                                                                                                                        | /nessie/pipeline/create |
| Method                  | The HTTP method to use.                                                                                                                                                                          |                         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |                         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |                         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |                         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |                         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |                         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |                         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json                    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |                         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0                       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false                   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0                       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false                   |

### Create Identity {#createidentity}

Creates a new Identity

| Input         | Comments                                                                                                                                                                 | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    | The Mixpanel connection to use.                                                                                                                                          |         |
| Region        | The server location to use. Select 'api' for the default US servers or 'api-eu' for EU servers if you are enrolled in EU Data Residency.                                 |         |
| Identified ID | The identified user ID to merge with the anonymous ID.                                                                                                                   |         |
| Anon ID       | The anonymous user ID to merge with the identified ID. Must be in UUID v4 format and not previously merged.                                                              |         |
| Project Token | Your Mixpanel project token. Find this in Settings > Project Settings in your Mixpanel dashboard.                                                                        |         |
| Strict        | When true, Mixpanel will validate the provided records and return per-record error messages for records that fail validation. Set to 1 to enable strict validation.      |         |
| Verbose       | When true, Mixpanel will respond with a detailed JSON object describing the success or failure of the tracking call. Set to 1 to enable verbose responses for debugging. |         |
| Redirect      | When provided, Mixpanel will serve a redirect to the given URL as a response. Useful for link tracking in notifications.                                                 |         |

### Create Profile {#createprofile}

Takes a JSON object containing names and values of profile properties. This API will return a 200 OK even if there are data validation issues. To ensure the request actually succeeded, you need to check the response body.

| Input      | Comments                                                                                                                                                                                                                                                                                               | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection | The Mixpanel connection to use.                                                                                                                                                                                                                                                                        |         |
| Properties | An array of profile property objects. If the profile does not exist, it creates it with these properties. If it does exist, it sets the properties to these values, overwriting existing values. See the [Engage API](https://developer.mixpanel.com/reference/profile-set) documentation for details. |         |
| Verbose    | When true, Mixpanel will respond with a detailed JSON object describing the success or failure of the tracking call. Set to 1 to enable verbose responses for debugging.                                                                                                                               |         |
| Redirect   | When provided, Mixpanel will serve a redirect to the given URL as a response. Useful for link tracking in notifications.                                                                                                                                                                               |         |
| Region     | The server location to use. Select 'api' for the default US servers or 'api-eu' for EU servers if you are enrolled in EU Data Residency.                                                                                                                                                               |         |

### Custom JQL Query {#customjqlquery}

The HTTP API is the lowest-level way to use JQL.

| Input             | Comments                                                                                                                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Mixpanel connection to use.                                                                                                                                                            |         |
| Region and Domain | The server location to use. Select 'mixpanel' for the default US servers or 'eu.mixpanel' for EU servers if you are enrolled in EU Data Residency.                                         |         |
| Script            | The JQL script to execute. See the [JQL API](https://developer.mixpanel.com/reference/jql) documentation for query syntax.                                                                 |         |
| Params            | A JSON object containing parameters that will be made available to the JQL script as the params global variable.                                                                           |         |
| Project ID        | The Mixpanel project ID. <strong>Required</strong> when using service account authentication (Username and Password). Find this in Settings > Project Settings in your Mixpanel dashboard. |         |
| Workspace ID      | The ID of the workspace if applicable. Only required for workspace-specific queries.                                                                                                       |         |

### Delete Pipeline {#deletepipeline}

Deletes the pipeline and stops any future jobs to be scheduled for the pipeline.

| Input             | Comments                                                                                                                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Mixpanel connection to use.                                                                                                                                                            |         |
| Use Project Token | When true, uses the project token from the connection to authenticate the request instead of service account credentials.                                                                  | true    |
| Data and Domain   | The server location to use. Select 'data' for the default US servers or 'data-eu' for EU servers if you are enrolled in EU Data Residency.                                                 |         |
| Name              | The unique name that identifies the pipeline.                                                                                                                                              |         |
| Project ID        | The Mixpanel project ID. <strong>Required</strong> when using service account authentication (Username and Password). Find this in Settings > Project Settings in your Mixpanel dashboard. |         |

### Delete Profile {#deleteprofile}

Permanently delete the profile from Mixpanel, along with all of its properties.

| Input           | Comments                                                                                                                                                                                                                                                            | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Mixpanel connection to use.                                                                                                                                                                                                                                     |         |
| Delete Profiles | An array of profile deletion objects. Permanently deletes profiles from Mixpanel along with all properties. The profile is determined by the $distinct_id. See the [Engage API](https://developer.mixpanel.com/reference/delete-profile) documentation for details. |         |
| Verbose         | When true, Mixpanel will respond with a detailed JSON object describing the success or failure of the tracking call. Set to 1 to enable verbose responses for debugging.                                                                                            |         |
| Redirect        | When provided, Mixpanel will serve a redirect to the given URL as a response. Useful for link tracking in notifications.                                                                                                                                            |         |
| Region          | The server location to use. Select 'api' for the default US servers or 'api-eu' for EU servers if you are enrolled in EU Data Residency.                                                                                                                            |         |

### Download Data {#downloaddata}

Download your event data as it is received and stored within Mixpanel.

| Input           | Comments                                                                                                                                                                                   | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The Mixpanel connection to use.                                                                                                                                                            |         |
| Data and Domain | The server location to use. Select 'data' for the default US servers or 'data-eu' for EU servers if you are enrolled in EU Data Residency.                                                 |         |
| From Date       | The start date for querying in YYYY-MM-DD format. This date is inclusive.                                                                                                                  |         |
| To Date         | The end date for querying in YYYY-MM-DD format. This date is inclusive.                                                                                                                    |         |
| Project ID      | The Mixpanel project ID. <strong>Required</strong> when using service account authentication (Username and Password). Find this in Settings > Project Settings in your Mixpanel dashboard. |         |
| Limit           | The maximum number of top property values to return. Defaults to 255, maximum 10,000. Only applies when 'on' is specified.                                                                 |         |
| Event Name      | The name of the event to filter data by.                                                                                                                                                   |         |
| Where           | An expression to filter events by. More info on expression sequence structure can be found here: https://developer.mixpanel.com/reference/segmentation-expressions                         |         |
| Gzip Encoding   | When true, the response will be compressed with gzip and Content-Encoding will be set to gzip.                                                                                             | false   |

### Edit GCS Pipeline {#editgcspipeline}

This request edit the params for an export pipeline.

| Input           | Comments                                                                                                                                                                                                                                | Default                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Connection      | The Mixpanel connection to use.                                                                                                                                                                                                         |                            |
| Data and Domain | The server location to use. Select 'data' for the default US servers or 'data-eu' for EU servers if you are enrolled in EU Data Residency.                                                                                              |                            |
| Name            | The unique name that identifies the pipeline.                                                                                                                                                                                           |                            |
| Project ID      | Your project id (must be specified when using service account based authentication)                                                                                                                                                     |                            |
| Events          | An array of event names to whitelist for export. Only these events will be exported from Mixpanel.                                                                                                                                      | <code>["Page View"]</code> |
| Where           | A selector expression used to filter by events data, such as event properties. Please note that after this update, the sync of older dates to your data warehouse (if enabled) will only contain events matching your new where clause. |                            |

### Edit Generic Pipeline {#editgenericpipeline}

This request edit the params for an export pipeline.

| Input                   | Comments                                                                                                                                                                                         | Default               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| Connection              | The Mixpanel connection to use.                                                                                                                                                                  |                       |
| Data and Domain         | The server location to use. Select 'data' for the default US servers or 'data-eu' for EU servers if you are enrolled in EU Data Residency.                                                       |                       |
| Name                    | The unique name that identifies the pipeline.                                                                                                                                                    |                       |
| URL                     | The endpoint to send the request to. Defaults to /nessie/pipeline/edit.                                                                                                                          | /nessie/pipeline/edit |
| Method                  | The HTTP method to use.                                                                                                                                                                          |                       |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |                       |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |                       |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |                       |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |                       |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |                       |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |                       |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json                  |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |                       |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0                     |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false                 |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0                     |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false                 |

### Get Pipeline {#getpipeline}

Given the name of the pipeline this API returns the status of the pipeline.

| Input           | Comments                                                                                                                                                                                   | Default                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| Connection      | The Mixpanel connection to use.                                                                                                                                                            |                          |
| Data and Domain | The server location to use. Select 'data' for the default US servers or 'data-eu' for EU servers if you are enrolled in EU Data Residency.                                                 |                          |
| Project ID      | The Mixpanel project ID. <strong>Required</strong> when using service account authentication (Username and Password). Find this in Settings > Project Settings in your Mixpanel dashboard. |                          |
| Name            | The unique name that identifies the pipeline.                                                                                                                                              |                          |
| Summary         | When true, returns only task count by status without detailed information.                                                                                                                 | false                    |
| Status          | An array of status values to filter tasks. Valid options: pending, running, retried, failed, canceled, timed_out.                                                                          | <code>["pending"]</code> |

### Import Events {#importevents}

Each request ingests a batch of events into Mixpanel.

| Input             | Comments                                                                                                                                                                                                                         | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Mixpanel connection to use.                                                                                                                                                                                                  |         |
| Use Project Token | When true, uses the project token from the connection to authenticate the request instead of service account credentials.                                                                                                        | false   |
| Region            | The server location to use. Select 'api' for the default US servers or 'api-eu' for EU servers if you are enrolled in EU Data Residency.                                                                                         |         |
| Events            | An array of event objects to ingest into Mixpanel. Each request accepts up to 2000 events and 2MB uncompressed. See the [Event Ingestion API](https://developer.mixpanel.com/reference/import-events) documentation for details. |         |
| Project ID        | The Mixpanel project ID. <strong>Required</strong> when using service account authentication (Username and Password). Find this in Settings > Project Settings in your Mixpanel dashboard.                                       |         |

### List Pipelines {#listpipelines}

Returns the list of all the pipelines scheduled for a project.

| Input           | Comments                                                                                                                                                                                   | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      | The Mixpanel connection to use.                                                                                                                                                            |         |
| Data and Domain | The server location to use. Select 'data' for the default US servers or 'data-eu' for EU servers if you are enrolled in EU Data Residency.                                                 |         |
| Project ID      | The Mixpanel project ID. <strong>Required</strong> when using service account authentication (Username and Password). Find this in Settings > Project Settings in your Mixpanel dashboard. |         |

### List Saved Funnels {#listsavedfunnels}

Get the names and funnel_ids of your funnels.

| Input             | Comments                                                                                                                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Mixpanel connection to use.                                                                                                                                                            |         |
| Use Project Token | When true, uses the project token from the connection to authenticate the request instead of service account credentials.                                                                  | false   |
| Region and Domain | The server location to use. Select 'mixpanel' for the default US servers or 'eu.mixpanel' for EU servers if you are enrolled in EU Data Residency.                                         |         |
| Project ID        | The Mixpanel project ID. <strong>Required</strong> when using service account authentication (Username and Password). Find this in Settings > Project Settings in your Mixpanel dashboard. |         |
| Workspace ID      | The ID of the workspace if applicable. Only required for workspace-specific queries.                                                                                                       |         |

### Query Funnel Saved Reports {#queryfunnelsavedreports}

Get data for a funnel.

| Input             | Comments                                                                                                                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Mixpanel connection to use.                                                                                                                                                            |         |
| Use Project Token | When true, uses the project token from the connection to authenticate the request instead of service account credentials.                                                                  | false   |
| Region and Domain | The server location to use. Select 'mixpanel' for the default US servers or 'eu.mixpanel' for EU servers if you are enrolled in EU Data Residency.                                         |         |
| Funnel ID         | The unique identifier of the funnel to retrieve data for.                                                                                                                                  |         |
| From Date         | The start date for querying in YYYY-MM-DD format. This date is inclusive.                                                                                                                  |         |
| To Date           | The end date for querying in YYYY-MM-DD format. This date is inclusive.                                                                                                                    |         |
| Project ID        | The Mixpanel project ID. <strong>Required</strong> when using service account authentication (Username and Password). Find this in Settings > Project Settings in your Mixpanel dashboard. |         |
| Workspace ID      | The ID of the workspace if applicable. Only required for workspace-specific queries.                                                                                                       |         |
| Length            | The number of units (defined by length_unit) each user has to complete the funnel. Maximum 90 days. Defaults to the value saved in the UI for this funnel.                                 |         |
| Length Unit       | The time unit for the length parameter. Defaults to the value saved in the UI for this funnel.                                                                                             |         |
| Interval          | The number of days for each time bucket. Defaults to 1 day per bucket.                                                                                                                     |         |
| Unit              | An alternate way of specifying the interval. Choose day, week, or month.                                                                                                                   |         |
| On                | The property expression to segment the event on. See [segmentation expressions](https://developer.mixpanel.com/reference/segmentation-expressions) for syntax details.                     |         |
| Where             | An expression to filter events. See [segmentation expressions](https://developer.mixpanel.com/reference/segmentation-expressions) for syntax details.                                      |         |
| Limit             | The maximum number of top property values to return. Defaults to 255, maximum 10,000. Only applies when 'on' is specified.                                                                 |         |

### Query Insights Saved Reports {#queryinsightssavedreports}

Get data from your Insights reports.

| Input             | Comments                                                                                                                                                                                   | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        | The Mixpanel connection to use.                                                                                                                                                            |         |
| Region and Domain | The server location to use. Select 'mixpanel' for the default US servers or 'eu.mixpanel' for EU servers if you are enrolled in EU Data Residency.                                         |         |
| Bookmark ID       | The ID of your Insights report. Find this in the URL: https://mixpanel.com/report/1/insights#report/YOUR_BOOKMARK_ID/example-report                                                        |         |
| Project ID        | The Mixpanel project ID. <strong>Required</strong> when using service account authentication (Username and Password). Find this in Settings > Project Settings in your Mixpanel dashboard. |         |
| Workspace ID      | The ID of the workspace if applicable. Only required for workspace-specific queries.                                                                                                       |         |

### Query Profile {#queryprofiles}

Query user profile data and return list of users that fit specified parameters.

| Input             | Comments                                                                                                                                                                                   | Default                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| Connection        | The Mixpanel connection to use.                                                                                                                                                            |                                  |
| Region and Domain | The server location to use. Select 'mixpanel' for the default US servers or 'eu.mixpanel' for EU servers if you are enrolled in EU Data Residency.                                         |                                  |
| Project ID        | The Mixpanel project ID. <strong>Required</strong> when using service account authentication (Username and Password). Find this in Settings > Project Settings in your Mixpanel dashboard. |                                  |
| Workspace ID      | The ID of the workspace if applicable. Only required for workspace-specific queries.                                                                                                       |                                  |
| Distinct IDs      | An array of unique identifiers to distinguish individual profiles. Each ID represents a distinct user profile.                                                                             | <code>["user-12345"]</code>      |
| Where             | An expression to filter users by. See the expressions section above. https://developer.mixpanel.com/reference/segmentation-expressions                                                     |                                  |
| Output Properties | An array of property names to return in the response. Specifying properties can significantly reduce response size and improve query performance.                                          | <code>["$email", "$name"]</code> |
| Session ID        | A session ID from a previous query result. Using this speeds up API responses and enables pagination through results.                                                                      |                                  |
| Page              | The page number of results to retrieve (zero-indexed). <strong>Required:</strong> Must provide session_id when using pagination.                                                           |                                  |
| Behaviors         | Event selector for exporting user profiles based on behaviors. <strong>Note:</strong> Mutually exclusive with filter_by_cohort.                                                            |                                  |
| As Of Timestamp   | A Unix timestamp for querying profiles as of a specific time. <strong>Required</strong> when exporting more than 1k profiles with behaviors parameter.                                     |                                  |
| Filter By Cohort  | A JSON object containing the cohort ID to filter by. Format: {"id":12345}. <strong>Note:</strong> Mutually exclusive with behaviors.                                                       |                                  |
| Include All Users | When true, includes distinct_ids without user profiles. When false, only includes distinct_ids with user profiles. Only applies when using filter_by_cohort.                               | true                             |

### Raw Request {#rawrequest}

Send raw HTTP request to Mixpanel

| Input                   | Comments                                                                                                                                                                                                                                                   | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Mixpanel connection to use.                                                                                                                                                                                                                            |         |
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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                        | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                           | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                        | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                              | false   |

### Track Events {#trackevents}

Track events to Mixpanel from client devices.

| Input             | Comments                                                                                                                                                                                                                         | Default |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Mixpanel connection to use.                                                                                                                                                                                                  |         |
| Use Project Token | When true, uses the project token from the connection to authenticate the request instead of service account credentials.                                                                                                        | true    |
| Region            | The server location to use. Select 'api' for the default US servers or 'api-eu' for EU servers if you are enrolled in EU Data Residency.                                                                                         |         |
| IP                | When true, Mixpanel will use the IP address of the incoming request and compute a distinct_id using a hash function if no distinct_id is provided. Set to 1 to enable.                                                           |         |
| Verbose           | When true, Mixpanel will respond with a detailed JSON object describing the success or failure of the tracking call. Set to 1 to enable verbose responses for debugging.                                                         |         |
| Redirect          | When provided, Mixpanel will serve a redirect to the given URL as a response. Useful for link tracking in notifications.                                                                                                         |         |
| Img               | When true, Mixpanel will serve a 1x1 transparent pixel image as a response. Set to 1 to enable pixel tracking for environments without JavaScript support.                                                                       |         |
| Events            | An array of event objects to ingest into Mixpanel. Each request accepts up to 2000 events and 2MB uncompressed. See the [Event Ingestion API](https://developer.mixpanel.com/reference/import-events) documentation for details. |         |

### Update Multiple Profiles {#updatemultipleprofiles}

Send a batch of profile updates.

| Input                | Comments                                                                                                                                                                                                                    | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Mixpanel connection to use.                                                                                                                                                                                             |         |
| Properties To Update | An array of profile update objects for batch operations. Each object can use operations like $set, $add, $union, etc. See the [Engage API](https://developer.mixpanel.com/reference/profile-set) documentation for details. |         |
| Verbose              | When true, Mixpanel will respond with a detailed JSON object describing the success or failure of the tracking call. Set to 1 to enable verbose responses for debugging.                                                    |         |
| Redirect             | When provided, Mixpanel will serve a redirect to the given URL as a response. Useful for link tracking in notifications.                                                                                                    |         |
| Region               | The server location to use. Select 'api' for the default US servers or 'api-eu' for EU servers if you are enrolled in EU Data Residency.                                                                                    |         |
