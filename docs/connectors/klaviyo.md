---
title: Klaviyo Connector
sidebar_label: Klaviyo
description: Manage email and SMS marketing campaigns, profiles, lists, segments, and templates in Klaviyo.
---

![Klaviyo](./assets/klaviyo.png#connector-icon)
[Klaviyo](https://www.klaviyo.com/) is a cloud-based email marketing solution that enables e-commerce businesses to create, send, and analyze email and SMS campaigns.

This component provides the ability to manage templates, campaigns, events, profiles, lists, segments, and images.

## API Documentation

The component was built using the [Klaviyo API Reference](https://developers.klaviyo.com/en/reference/api_overview).

## Connections

### API Key {#klaviyoapikeyconnection}

Authenticate using an API key.

API key authentication is deprecated. Use OAuth 2.0 for new integrations. See the [Klaviyo migration guide](https://developers.klaviyo.com/en/docs/migrate_to_oauth_from_private_key_authentication) for details.

#### Prerequisites

- A Klaviyo account with an existing private API key.

#### Setup Steps

1. Log into Klaviyo and navigate to **Settings** > **API Keys**.
2. Copy the private API key.

#### Configure the Connection

Create a connection of type **API Key**.

| Field       | Description                       |
| ----------- | --------------------------------- |
| **API Key** | The private API key from Klaviyo. |

| Input   | Comments             | Default |
| ------- | -------------------- | ------- |
| API Key | API key for Klaviyo. |         |

### OAuth 2.0 {#klaviyooauth2connection}

Authenticate using OAuth 2.0.

OAuth configuration requires setting up an app in Klaviyo. See the [Set up OAuth](https://developers.klaviyo.com/en/docs/set_up_oauth) guide for more information.

#### Prerequisites

- A Klaviyo account with access to the **Manage apps** page.

#### Setup Steps

1. Log into [Klaviyo](https://www.klaviyo.com/dashboard) and navigate to the [Manage apps](https://www.klaviyo.com/manage-apps) page.
2. Select **Create App**.
3. Name the app and copy the **Client ID** and **Client Secret**.
4. Select **Save and continue** to proceed.
5. Enter the following into the **Redirect URL** field: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` and save.
6. Select **Review Submission** to submit the app for completion.

#### Configure the Connection

Create a connection of type **OAuth 2.0**.

| Field             | Description                                      |
| ----------------- | ------------------------------------------------ |
| **Scopes**        | Space-separated list of OAuth scopes, if needed. |
| **Client ID**     | The Client ID from the Klaviyo app.              |
| **Client secret** | The Client secret from the Klaviyo app.          |

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                              | Default |
| ------------- | ----------------------------------------------------- | ------- |
| Scopes        | Space separated list of scopes if needed              |         |
| Client ID     | The Client ID from the Klaviyo OAuth application.     |         |
| Client Secret | The Client Secret from the Klaviyo OAuth application. |         |

## Triggers

### New and Updated Campaigns {#pollcampaignchangestrigger}

Retrieves existing and ongoing campaigns for a specified Klaviyo message channel. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                 | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Klaviyo connection to use.                                                                                                                                                                                                           |         |
| Message Channel      | Klaviyo requires a channel filter to list campaigns. Select which channel's campaigns the trigger should return.                                                                                                                         |         |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record modified on or after this date once. |         |
| Show New Records     | When true, newly created records are included in the trigger output.                                                                                                                                                                     | true    |
| Show Updated Records | When true, records updated since the last poll are included in the trigger output.                                                                                                                                                       | true    |

### New and Updated Profiles and Lists {#pollprofileandlistchangestrigger}

Retrieves existing and ongoing profiles and lists in Klaviyo. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                 | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           | The Klaviyo connection to use.                                                                                                                                                                                                           |         |
| Resource Type        | The type of resource to poll for new and updated records.                                                                                                                                                                                |         |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record modified on or after this date once. |         |
| Show New Records     | When true, newly created records are included in the trigger output.                                                                                                                                                                     | true    |
| Show Updated Records | When true, records updated since the last poll are included in the trigger output.                                                                                                                                                       | true    |

## Actions

### Bulk Create Events {#bulkcreateevents}

Create a batch of events for one or more profiles.

| Input        | Comments                       | Default |
| ------------ | ------------------------------ | ------- |
| Connection   | The Klaviyo connection to use. |         |
| Events Array | An array of events to create.  |         |

### Create Campaign {#createcampaign}

Creates a campaign given a set of parameters, then returns it.

| Input                  | Comments                                                                                   | Default |
| ---------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Klaviyo connection to use.                                                             |         |
| Campaign Name          | A display name to identify the campaign.                                                   |         |
| Campaign Messages      | The message(s) to send in the campaign.                                                    |         |
| Included Audiences     | The IDs of lists or segments to receive the campaign.                                      |         |
| Excluded Audiences     | The IDs of lists or segments to exclude from the campaign.                                 |         |
| Campaign Configuration | Tracking options, send options, and send strategy.                                         |         |
| Tracking Options       | UTM parameters, click tracking, and open tracking configuration. Provide as a JSON object. |         |
| Send Options           | Smart-sending and related delivery preferences. Provide as a JSON object.                  |         |
| Send Strategy          | Scheduling method and timing for campaign delivery. Provide as a JSON object.              |         |

### Create Event {#createevent}

Create a new event to track a profiles activity.

| Input                | Comments                                                                              | Default |
| -------------------- | ------------------------------------------------------------------------------------- | ------- |
| Connection           | The Klaviyo connection to use.                                                        |         |
| Event Name           | The metric name that identifies this event type.                                      |         |
| Event Profile        | The profile associated with this event.                                               |         |
| Event Properties     | A JSON object of custom key-value pairs to attach to the event.                       |         |
| Event Details        | Timestamp, monetary value, currency, and unique ID for the event.                     |         |
| Event Time           | When this event occurred. By default, the time the request was received will be used. |         |
| Event Value          | A numeric, monetary value to associate with this event.                               |         |
| Event Value Currency | The ISO 4217 currency code of the value associated with the event.                    |         |
| Event Unique ID      | A unique identifier for this event.                                                   |         |

### Create List {#createlist}

Create a new list.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Klaviyo connection to use.    |         |
| List Name  | A helpful name to label the list. |         |

### Create Profile {#createprofile}

Create a new profile.

| Input               | Comments                                                                                                                                                                             | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          | The Klaviyo connection to use.                                                                                                                                                       |         |
| Contact Information | Email, phone, and other contact channel details.                                                                                                                                     |         |
| Email               | The primary email address used to reach this profile.                                                                                                                                |         |
| Phone Number        | Individual's phone number in E.164 format.                                                                                                                                           |         |
| First Name          | The given name of the profile contact.                                                                                                                                               |         |
| Last Name           | The family name of the profile contact.                                                                                                                                              |         |
| Additional Fields   | Additional optional fields: includes External ID, Organization, Title, Image, Location, and Properties.                                                                              |         |
| External ID         | A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system. |         |
| Organization        | Name of the company or organization within the company for whom the individual works                                                                                                 |         |
| Title               | The job title or role at the individual's organization.                                                                                                                              |         |
| Image               | URL pointing to the location of a profile image.                                                                                                                                     |         |
| Location            | Location information for the profile.                                                                                                                                                |         |
| Properties          | An object containing key/value pairs for any custom properties assigned to this profile.                                                                                             |         |

### Create Segment {#createsegment}

Create a segment.

| Input                    | Comments                                                                       | Default |
| ------------------------ | ------------------------------------------------------------------------------ | ------- |
| Connection               | The Klaviyo connection to use.                                                 |         |
| Segment Name             | A display name to identify the segment.                                        |         |
| Segment Condition Groups | The condition groups that define the segment.                                  |         |
| Is Starred Segment       | When true, pins the segment to the top of the segments list in the Klaviyo UI. | false   |

### Create Template {#createtemplate}

Create a new custom HTML template.

| Input         | Comments                                                                  | Default |
| ------------- | ------------------------------------------------------------------------- | ------- |
| Connection    | The Klaviyo connection to use.                                            |         |
| Template Name | A display name to identify the template.                                  |         |
| Editor Type   | The editor used to author the template. Currently only CODE is supported. |         |
| Template HTML | The HTML markup rendered to recipients.                                   |         |
| Template Text | The plain-text fallback shown when HTML cannot be rendered.               |         |

### Delete Campaign {#deletecampaign}

Delete a campaign with the given campaign ID.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Klaviyo connection to use.          |         |
| Campaign ID | The unique identifier for the campaign. |         |

### Delete List {#deletelist}

Delete a list with the given list ID.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The Klaviyo connection to use.     |         |
| List ID    | The unique identifier of the list. |         |

### Delete Segment {#deletesegment}

Delete a segment with the given segment ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Klaviyo connection to use.         |         |
| Segment ID | The unique identifier for the segment. |         |

### Delete Template {#deletetemplate}

Delete a template with the given template ID.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Klaviyo connection to use.          |         |
| Template ID | The unique identifier for the template. |         |

### Get Account {#getaccount}

Retrieve a single account object by its account ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Klaviyo connection to use.         |         |
| Account ID | The unique identifier for the account. |         |
| Fields     | The fields to include in the response. |         |

### Get Campaign {#getcampaign}

Returns a specific campaign based on a required id.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Klaviyo connection to use.          |         |
| Campaign ID | The unique identifier for the campaign. |         |
| Fields      | The fields to include in the response.  |         |

### Get Event {#getevent}

Get an event with the given event ID.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Klaviyo connection to use.             |         |
| Event ID       | The unique identifier for the event.       |         |
| Event Fields   | Event fields to include in the response.   |         |
| Metric Fields  | Metric fields to include in the response.  |         |
| Profile Fields | Profile fields to include in the response. |         |

### Get Image {#getimage}

Get the image with the given image ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Klaviyo connection to use.         |         |
| Image ID   | The unique identifier for the image.   |         |
| Fields     | The fields to include in the response. |         |

### Get List {#getlist}

Get a list with the given list ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Klaviyo connection to use.         |         |
| List ID    | The unique identifier of the list.     |         |
| Fields     | The fields to include in the response. |         |

### Get Profile {#getprofile}

Get the profile with the given profile ID.

| Input                     | Comments                                                           | Default |
| ------------------------- | ------------------------------------------------------------------ | ------- |
| Connection                | The Klaviyo connection to use.                                     |         |
| Profile ID                | Unique identifier for the profile.                                 |         |
| Fields                    | The fields to include in the response.                             |         |
| Additional Profile Fields | Request additional fields not included by default in the response. |         |

### Get Segment {#getsegment}

Get a segment with the given segment ID.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Klaviyo connection to use.         |         |
| Segment ID | The unique identifier for the segment. |         |
| Fields     | The fields to include in the response. |         |

### Get Template {#gettemplate}

Get a template with the given template ID.

| Input       | Comments                                | Default |
| ----------- | --------------------------------------- | ------- |
| Connection  | The Klaviyo connection to use.          |         |
| Template ID | The unique identifier for the template. |         |
| Fields      | The fields to include in the response.  |         |

### List Accounts {#listaccounts}

Retrieve the account(s) associated with a given private API key.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Klaviyo connection to use.         |         |
| Fields     | The fields to include in the response. |         |

### List Campaigns {#listcampaigns}

Returns some or all campaigns based on filters.

| Input            | Comments                                                          | Default |
| ---------------- | ----------------------------------------------------------------- | ------- |
| Connection       | The Klaviyo connection to use.                                    |         |
| Filter Campaigns | A Klaviyo JSON:API filter expression to narrow the campaign list. |         |
| Fields           | The fields to include in the response.                            |         |

### List Events {#listevents}

Get all events in an account.

| Input          | Comments                                   | Default |
| -------------- | ------------------------------------------ | ------- |
| Connection     | The Klaviyo connection to use.             |         |
| Event Fields   | Event fields to include in the response.   |         |
| Metric Fields  | Metric fields to include in the response.  |         |
| Profile Fields | Profile fields to include in the response. |         |

### List Images {#listimages}

Get all images in an account.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Klaviyo connection to use.         |         |
| Fields     | The fields to include in the response. |         |

### List List Profiles {#listlistprofiles}

Get all profiles within a list with the given list ID.

| Input                     | Comments                                                           | Default |
| ------------------------- | ------------------------------------------------------------------ | ------- |
| Connection                | The Klaviyo connection to use.                                     |         |
| List ID                   | The unique identifier of the list.                                 |         |
| Additional Profile Fields | Request additional fields not included by default in the response. |         |
| Fields                    | The fields to include in the response.                             |         |

### List Lists {#listlists}

Get all lists in an account.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Klaviyo connection to use.         |         |
| Fields     | The fields to include in the response. |         |

### List Profiles {#listprofile}

Get all profiles in an account.

| Input                     | Comments                                                           | Default |
| ------------------------- | ------------------------------------------------------------------ | ------- |
| Connection                | The Klaviyo connection to use.                                     |         |
| Fields                    | The fields to include in the response.                             |         |
| Additional Profile Fields | Request additional fields not included by default in the response. |         |

### List Segments {#listsegments}

Get all segments in an account.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Klaviyo connection to use.         |         |
| Fields     | The fields to include in the response. |         |

### List Templates {#listtemplates}

Get all templates in an account.

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The Klaviyo connection to use.         |         |
| Fields     | The fields to include in the response. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Klaviyo.

| Input                   | Comments                                                                                                                                                                                                   | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Klaviyo connection to use.                                                                                                                                                                             |         |
| Exclude Authorization   | Exclude the Authorization header from the request. Turn this on and include the company_id query param when calling public endpoints (/client).                                                            | false   |
| URL                     | Input the path only (/api/accounts), The base URL is already included (https://a.klaviyo.com). For example, to connect to https://a.klaviyo.com/api/accounts, only /api/accounts is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                    |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                  |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                       |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                           |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                     |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                        |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                   | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                        |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                        | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.           | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                        | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                              | false   |

### Subscribe Profiles {#subscribeprofiles}

Subscribe one or more profiles to email marketing, SMS marketing, or both.

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Klaviyo connection to use.  |         |
| Profiles   | Array of profiles to subscribe. |         |

### Unsubscribe Profiles {#unsubscribeprofiles}

Unsubscribe one or more profiles to email marketing, SMS marketing, or both.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Klaviyo connection to use.    |         |
| Profiles   | Array of profiles to unsubscribe. |         |

### Update Campaign {#updatecampaign}

Update a campaign with the given campaign ID.

| Input                  | Comments                                                                                   | Default |
| ---------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection             | The Klaviyo connection to use.                                                             |         |
| Campaign ID            | The unique identifier for the campaign.                                                    |         |
| Campaign Name          | A display name to identify the campaign.                                                   |         |
| Included Audiences     | The IDs of lists or segments to receive the campaign.                                      |         |
| Excluded Audiences     | The IDs of lists or segments to exclude from the campaign.                                 |         |
| Campaign Configuration | Tracking options, send options, and send strategy.                                         |         |
| Tracking Options       | UTM parameters, click tracking, and open tracking configuration. Provide as a JSON object. |         |
| Send Options           | Smart-sending and related delivery preferences. Provide as a JSON object.                  |         |
| Send Strategy          | Scheduling method and timing for campaign delivery. Provide as a JSON object.              |         |

### Update Image {#updateimage}

Update the image with the given image ID.

| Input        | Comments                                                                                                                       | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection   | The Klaviyo connection to use.                                                                                                 |         |
| Image ID     | The unique identifier for the image.                                                                                           |         |
| Image Name   | A name for the image. Defaults to the filename if not provided. If the name matches an existing image, a suffix will be added. |         |
| Image Hidden | Controls whether the image is hidden in the image library.                                                                     |         |

### Update List {#updatelist}

Update the name of a list with the given list ID.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The Klaviyo connection to use.     |         |
| List ID    | The unique identifier of the list. |         |
| List Name  | A helpful name to label the list.  |         |

### Update Profile {#updateprofile}

Update the profile with the given profile ID.

| Input               | Comments                                                                                                                                                                             | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          | The Klaviyo connection to use.                                                                                                                                                       |         |
| Profile ID          | Unique identifier for the profile.                                                                                                                                                   |         |
| Contact Information | Email, phone, and other contact channel details.                                                                                                                                     |         |
| Email               | The primary email address used to reach this profile.                                                                                                                                |         |
| Phone Number        | Individual's phone number in E.164 format.                                                                                                                                           |         |
| First Name          | The given name of the profile contact.                                                                                                                                               |         |
| Last Name           | The family name of the profile contact.                                                                                                                                              |         |
| Additional Fields   | Additional optional fields: includes External ID, Organization, Title, Image, Location, and Properties.                                                                              |         |
| External ID         | A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system. |         |
| Organization        | Name of the company or organization within the company for whom the individual works                                                                                                 |         |
| Title               | The job title or role at the individual's organization.                                                                                                                              |         |
| Image               | URL pointing to the location of a profile image.                                                                                                                                     |         |
| Location            | Location information for the profile.                                                                                                                                                |         |
| Properties          | An object containing key/value pairs for any custom properties assigned to this profile.                                                                                             |         |

### Update Segment {#updatesegment}

Update a segment with the given segment ID.

| Input                    | Comments                                                                       | Default |
| ------------------------ | ------------------------------------------------------------------------------ | ------- |
| Connection               | The Klaviyo connection to use.                                                 |         |
| Segment ID               | The unique identifier for the segment.                                         |         |
| Segment Name             | A display name to identify the segment.                                        |         |
| Segment Condition Groups | The condition groups that define the segment.                                  |         |
| Is Starred Segment       | When true, pins the segment to the top of the segments list in the Klaviyo UI. |         |

### Update Template {#updatetemplate}

Update a template with the given template ID.

| Input         | Comments                                                    | Default |
| ------------- | ----------------------------------------------------------- | ------- |
| Connection    | The Klaviyo connection to use.                              |         |
| Template ID   | The unique identifier for the template.                     |         |
| Template Name | A display name to identify the template.                    |         |
| Template HTML | The HTML markup rendered to recipients.                     |         |
| Template Text | The plain-text fallback shown when HTML cannot be rendered. |         |

### Upload Image {#uploadimage}

Import an image from a url or file.

| Input      | Comments                                                                                                                                                                                                                   | Default |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Klaviyo connection to use.                                                                                                                                                                                             |         |
| Image URL  | An existing image url to import the image from. Alternatively, you may specify a base-64 encoded data-uri (`data:image/...`). Supported image formats: jpeg,png,gif. Maximum image size: 5MB. Use this field or File Data. |         |
| Image Name | A name for the image. Defaults to the filename if not provided. If the name matches an existing image, a suffix will be added.                                                                                             |         |
| File Data  | The contents to write to a file. Binary data generated from a previous step.                                                                                                                                               |         |
