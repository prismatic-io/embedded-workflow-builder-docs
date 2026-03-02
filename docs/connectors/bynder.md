---
title: Bynder Connector
sidebar_label: Bynder
description: Bynder is a leading digital asset management software that allows users to easily create, find, and use content, such as documents, graphics, and videos.
---

![Bynder](./assets/bynder.png#connector-icon)
[Bynder](https://www.bynder.com/en/) is a leading digital asset management software that allows users to easily create, find, and use content, such as documents, graphics, and videos.

Use the Bynder component to manage Assets, Collections, Campaigns, and more.

## API Documentation

The Bynder component is built using the [Bynder April 2024 REST API](https://bynder.docs.apiary.io/#introduction/welcome-to-the-bynder-api-documentation)

## Connections

### OAuth 2.0 {#bynder-oauth}

OAuth 2.0

To create a new [OAuth App](https://support.bynder.com/hc/en-us/articles/360013875180-Create-OAuth-Apps) for the OAuth 2.0 Authorization Code flow:

#### Prerequisites

- A Bynder account with administrator access to Portal Settings

#### Setup Steps

1. Sign into Bynder and navigate to **Settings > Advanced Settings > Portal Settings** and select **OAuth Apps**
2. Select **Register new application** to create an OAuth App
3. Set Grant Type to **Authorization Code** and configure the redirect URL:
   - Set the redirect URI to `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Add at least the following scopes: `asset:read asset:write collection:read collection:write`
5. Select **Register application** to retrieve a **Client ID** and **Client Secret**

#### Configure the Connection

Create a connection of type **OAuth 2.0** and enter:

- **Authorize URL**: The Bynder authorization URL (e.g., `https://{your-bynder-domain}/v6/authentication/oauth2/auth`)
- **Token URL**: The Bynder token URL (e.g., `https://{your-bynder-domain}/v6/authentication/oauth2/token`)
- **Scopes**: The required OAuth scopes (defaults are pre-populated)
- **Client ID**: The Client ID from the registered OAuth application
- **Client Secret**: The Client Secret from the registered OAuth application

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                             | Default                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL | The OAuth 2.0 authorization URL for the Bynder domain.                               |                                                                                                                                                                                                                                                                                                                                                           |
| Token URL     | The OAuth 2.0 token URL used to exchange the authorization code for an access token. |                                                                                                                                                                                                                                                                                                                                                           |
| Scopes        | Space-separated list of OAuth permission scopes granted to the access token.         | asset:read asset:write collection:read collection:write current.user:read current.profile:read workflow.campaign:read workflow.campaign:write workflow.job:read workflow.job:write brandstore.order:read brandstore.order:write meta.assetbank:read meta.assetbank:write admin.profile:read admin.user:read admin.user:write workflow.preset:read offline |
| Client ID     | The Client ID from the Bynder OAuth application credentials.                         |                                                                                                                                                                                                                                                                                                                                                           |
| Client Secret | The Client Secret from the Bynder OAuth application credentials.                     |                                                                                                                                                                                                                                                                                                                                                           |

### OAuth 2.0 Client Credentials {#bynder-client-credentials-oauth}

Client Credentials OAuth 2.0

To create a new [OAuth App](https://support.bynder.com/hc/en-us/articles/360013875180-Create-OAuth-Apps) for the Client Credentials flow:

#### Prerequisites

- A Bynder account with administrator access to Portal Settings

#### Setup Steps

1. Sign into Bynder and navigate to **Settings > Advanced Settings > Portal Settings** and select **OAuth Apps**
2. Select **Register new application** to create an OAuth App
3. Set Grant Type to **Client Credentials** and configure the assigned user:
   - Choose the user for which tokens will be issued. Enter the name of the user and click one of the returned search results. A dedicated user in the portal is recommended if one does not already exist.
4. Add at least the following scopes: `asset:read asset:write collection:read collection:write`
5. Select **Register application** to retrieve a **Client ID** and **Client Secret**

#### Configure the Connection

Create a connection of type **OAuth 2.0 Client Credentials** and enter:

- **Token URL**: The Bynder token URL (e.g., `https://{your-bynder-domain}/v6/authentication/oauth2/token`)
- **Scopes**: The required OAuth scopes (defaults are pre-populated)
- **Client ID**: The Client ID from the registered OAuth application
- **Client Secret**: The Client Secret from the registered OAuth application

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                             | Default                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Token URL     | The OAuth 2.0 token URL used to exchange the client credentials for an access token. |                                                                                                                                                                                                                                                                                                                                                           |
| Scopes        | Space-separated list of OAuth permission scopes granted to the access token.         | asset:read asset:write collection:read collection:write current.user:read current.profile:read workflow.campaign:read workflow.campaign:write workflow.job:read workflow.job:write brandstore.order:read brandstore.order:write meta.assetbank:read meta.assetbank:write admin.profile:read admin.user:read admin.user:write workflow.preset:read offline |
| Client ID     | The Client ID from the Bynder OAuth application credentials.                         |                                                                                                                                                                                                                                                                                                                                                           |
| Client Secret | The Client Secret from the Bynder OAuth application credentials.                     |                                                                                                                                                                                                                                                                                                                                                           |

## Actions

### Add Asset Metaproperty Options {#addassetmetapropertyoptions}

Add metaproperty options to an asset

| Input                    | Comments                                                             | Default |
| ------------------------ | -------------------------------------------------------------------- | ------- |
| Asset ID                 | Id of the asset.                                                     |         |
| Metaproperty ID          | The unique identifier of the metaproperty from which to add options. |         |
| Metaproperty Options IDs | The list of metaproperty option IDs to add to the asset.             |         |
| Connection               | The Bynder connection to use.                                        |         |

### Close Campaign {#closecampaign}

Delete an existing campaign

| Input       | Comments                         | Default |
| ----------- | -------------------------------- | ------- |
| Campaign ID | The ID of the campaign to delete |         |
| Connection  | The Bynder connection to use.    |         |

### Create Campaign {#createcampaign}

Create a new campaign

| Input          | Comments                                                        | Default |
| -------------- | --------------------------------------------------------------- | ------- |
| Name           | The name of the campaign                                        |         |
| Key            | A 4-character key representing the campaign.                    |         |
| Description    | The description of the campaign                                 |         |
| Responsible ID | The unique identifier of the user responsible for the campaign. |         |
| Data           | Additional data to update the campaign                          |         |
| Connection     | The Bynder connection to use.                                   |         |

### Create Collection {#createcollection}

Create a new collection

| Input                  | Comments                                    | Default |
| ---------------------- | ------------------------------------------- | ------- |
| Collection Name        | The name of the collection to create        |         |
| Collection Description | The description of the collection to create |         |
| Connection             | The Bynder connection to use.               |         |

### Create Job {#createjob}

Create a new job

| Input          | Comments                                        | Default |
| -------------- | ----------------------------------------------- | ------- |
| Name           | The name of the job                             |         |
| Campaign ID    | Id of the campaign the job is part of           |         |
| Accountable ID | Id of the user responsible for the job          |         |
| Preset ID      | Id of the preset the job should be created from |         |
| Description    | The description of the job                      |         |
| Data           | Additional data to create the job               |         |
| Connection     | The Bynder connection to use.                   |         |

### Create User {#createuser}

Create a new user

| Input      | Comments                                                                                                                                                     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Email      | The email address used to identify and authenticate the user.                                                                                                |         |
| Password   | The password used to authenticate the user.                                                                                                                  |         |
| Profile ID | The unique identifier of the security profile that determines the user's access rights. Retrieve available profiles using the List Security Profiles action. |         |
| First Name | The first name of the user.                                                                                                                                  |         |
| Last Name  | The last name of the user.                                                                                                                                   |         |
| Username   | The username for login. If not defined, the email address is used as the username.                                                                           |         |
| Data       | Additional fields to include in the request body as a JSON object.                                                                                           |         |
| Connection | The Bynder connection to use.                                                                                                                                |         |

### Delete Asset {#deleteasset}

Delete an existing asset

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| ID         | The unique identifier of the resource to retrieve. |         |
| Connection | The Bynder connection to use.                      |         |

### Delete Asset Metaproperty Options {#deleteassetmetapropertyoptions}

Remove metaproperty options from an asset

| Input                    | Comments                                                             | Default |
| ------------------------ | -------------------------------------------------------------------- | ------- |
| Asset ID                 | Id of the asset.                                                     |         |
| Metaproperty ID          | The unique identifier of the metaproperty from which to add options. |         |
| Metaproperty Options IDs | The list of metaproperty option IDs to add to the asset.             |         |
| Connection               | The Bynder connection to use.                                        |         |

### Delete Campaign {#deletecampaign}

Delete an existing campaign

| Input       | Comments                         | Default |
| ----------- | -------------------------------- | ------- |
| Campaign ID | The ID of the campaign to delete |         |
| Connection  | The Bynder connection to use.    |         |

### Delete Collection {#deletecollection}

Delete an existing collection

| Input         | Comments                           | Default |
| ------------- | ---------------------------------- | ------- |
| Collection ID | The ID of the collection to delete |         |
| Connection    | The Bynder connection to use.      |         |

### Delete Job {#deletejob}

Delete an existing job

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Job ID     | The ID of the job to delete   |         |
| Connection | The Bynder connection to use. |         |

### Delete User {#deleteuser}

Remove an existing user

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| ID         | The unique identifier of the resource to retrieve. |         |
| Connection | The Bynder connection to use.                      |         |

### Download Specific Asset Item {#downloadspecificassetitem}

Download an specific asset item

| Input      | Comments                                                  | Default |
| ---------- | --------------------------------------------------------- | ------- |
| Asset ID   | The id of the asset you’d like to download a item of.     |         |
| Item ID    | The id of the specific asset item you’d like to download. |         |
| Hash       | When true, treats the item ID as a hashed item ID.        | false   |
| Connection | The Bynder connection to use.                             |         |

### Finalize Complete Upload {#finalisecompleteupload}

Finalize a completely uploaded file.

| Input             | Comments                                                         | Default |
| ----------------- | ---------------------------------------------------------------- | ------- |
| ID                | ID of the upload.                                                |         |
| Target ID         | The target ID returned by the initialise upload call.            |         |
| S3 Filename       | Base location of the uploaded file.                              |         |
| Chunks            | Total number of chunks uploaded.                                 |         |
| Original Filename | Filename including special characters to be displayed in Bynder. |         |
| Connection        | The Bynder connection to use.                                    |         |

### Finalize Complete Upload And Save As New Asset Additional {#finalisecompleteuploadandsaveasnewasset}

Finalize a completely uploaded file and save as a new asset additional.

| Input       | Comments                                                                                 | Default |
| ----------- | ---------------------------------------------------------------------------------------- | ------- |
| Asset ID    | Asset id to which to save the new additional.                                            |         |
| ID          | ID of the upload.                                                                        |         |
| Target ID   | The target ID returned by the initialise upload call.                                    |         |
| S3 Filename | Base location of the uploaded file or filename result from the last upload chunk action. |         |
| Chunks      | Total number of chunks uploaded.                                                         |         |
| Connection  | The Bynder connection to use.                                                            |         |

### Generate Dynamic Asset Transformation {#generatedynamictransformation}

Generate a derivative on the fly with a transformation (such as cropping, scaling, filling) applied to it

| Input       | Comments                                                                                                                                               | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| ID          | The unique identifier of the resource to retrieve.                                                                                                     |         |
| Name        | The display name of the asset. The asset will have no name if this is left empty.                                                                      |         |
| IO          | The operation(s) performed on the image before it is served to the client. Multiple operations can be specified by using this parameter several times. |         |
| Focus Point | The focus point as an x,y coordinate with values between 0 and 1. This serves as the center point for image operations.                                |         |
| Format      | The format of the served image. Accepted values are jpg or png, which overrides the default webP format.                                               |         |
| Quality     | The image quality, ranging from 1 to 100. Has no effect when the format is set to png.                                                                 |         |
| Connection  | The Bynder connection to use.                                                                                                                          |         |

### Get Account Information {#getaccountinformation}

Retrieve information on current account

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Bynder connection to use. |         |

### Get Asset {#getasset}

Retrieve a specific asset

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| ID         | The unique identifier of the resource to retrieve.                                        |         |
| Versions   | When true, includes information about the different asset media items including versions. | false   |
| Stats      | When true, includes information about views and downloads.                                | false   |
| Connection | The Bynder connection to use.                                                             |         |

### Get Campaign {#getcampaign}

Retrieve a specific campaign

| Input       | Comments                           | Default |
| ----------- | ---------------------------------- | ------- |
| Campaign ID | The ID of the campaign to retrieve |         |
| Connection  | The Bynder connection to use.      |         |

### Get Closest S3 Upload Endpoint {#getclosests3endpoint}

Retrieve the closest S3 upload endpoint

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Bynder connection to use. |         |

### Get Collection {#getcollection}

Retrieve a specific collection

| Input         | Comments                             | Default |
| ------------- | ------------------------------------ | ------- |
| Collection ID | The ID of the collection to retrieve |         |
| Connection    | The Bynder connection to use.        |         |

### Get Current User {#getcurrentuser}

Retrieve the current user

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Bynder connection to use. |         |

### Get Job {#getjob}

Retrieve a job by ID

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Job ID     | The ID of the job to retrieve |         |
| Connection | The Bynder connection to use. |         |

### Get Job Preset {#getjobpreset}

Retrieve a job preset by ID

| Input         | Comments                             | Default |
| ------------- | ------------------------------------ | ------- |
| Job preset ID | The ID of the job preset to retrieve |         |
| Connection    | The Bynder connection to use.        |         |

### Get Media of Job {#getmediaofjob}

Retrieve media attached to an existing job

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Job ID     | The ID of the job to retrieve |         |
| Connection | The Bynder connection to use. |         |

### Get Order {#getorder}

Retrieve an existing order

| Input        | Comments                                                                        | Default |
| ------------ | ------------------------------------------------------------------------------- | ------- |
| Order ID     | The ID of the order to retrieve. Either id or orderNumber is required           |         |
| Order Number | The order number of the order to retrieve. Either id or orderNumber is required |         |
| Connection   | The Bynder connection to use.                                                   |         |

### Get Order Info {#getorderinfo}

Retrieve information on an order

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Order ID   | The ID of the order to retrieve |         |
| Connection | The Bynder connection to use.   |         |

### Get Security Profile {#getsecurityprofile}

Retrieve a specified security profile

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| ID         | The unique identifier of the resource to retrieve. |         |
| Connection | The Bynder connection to use.                      |         |

### Get User {#getuser}

Retrieve a specified user

| Input      | Comments                                   | Default |
| ---------- | ------------------------------------------ | ------- |
| ID         | The ID or username of the user to retrieve |         |
| Connection | The Bynder connection to use.              |         |

### Initialize Upload {#initialiseupload}

Initialize a new file upload.

| Input      | Comments                                     | Default |
| ---------- | -------------------------------------------- | ------- |
| Filename   | Filename of new upload (extension required). |         |
| Connection | The Bynder connection to use.                |         |

### List Assets {#listassets}

Retrieve all assets

| Input            | Comments                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Page             | The page number to retrieve (starts at 1).                                                                     |         |
| Limit            | Maximum number of results. Maximum: 1000. Default: 50                                                          |         |
| Count            | When true, the response includes count results. This parameter overrides the total parameter when set to true. | false   |
| Total            | When true, the response includes the total count of results.                                                   | false   |
| Fetch All        | When true, automatically fetches all pages of results using pagination.                                        | false   |
| Extra Parameters | Additional query parameters to include in the request.                                                         |         |
| Connection       | The Bynder connection to use.                                                                                  |         |

### List Brands {#listbrands}

Retrieve all brands

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Bynder connection to use. |         |

### List Campaigns {#listcampaigns}

Retrieve all campaigns

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Bynder connection to use. |         |

### List Collections {#listcollections}

Retrieve all collections

| Input            | Comments                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Page             | The page number to retrieve (starts at 1).                                                                     |         |
| Limit            | The maximum number of results to return per page.                                                              |         |
| Count            | When true, the response includes count results. This parameter overrides the total parameter when set to true. | false   |
| Fetch All        | When true, automatically fetches all pages of results using pagination.                                        | false   |
| Extra Parameters | Additional query parameters to include in the request.                                                         |         |
| Connection       | The Bynder connection to use.                                                                                  |         |

### List Jobs {#listjobs}

Retrieve all jobs

| Input            | Comments                                               | Default |
| ---------------- | ------------------------------------------------------ | ------- |
| Page             | The page number to retrieve (starts at 1).             |         |
| Limit            | The maximum number of results to return per page.      |         |
| Extra Parameters | Additional query parameters to include in the request. |         |
| Connection       | The Bynder connection to use.                          |         |

### List Jobs By Campaign {#listjobsbycampaign}

Retrieve jobs tied to a campaign

| Input            | Comments                                               | Default |
| ---------------- | ------------------------------------------------------ | ------- |
| Campaign ID      | The ID of the campaign to retrieve jobs for            |         |
| Page             | The page number to retrieve (starts at 1).             |         |
| Limit            | The maximum number of results to return per page.      |         |
| Extra Parameters | Additional query parameters to include in the request. |         |
| Connection       | The Bynder connection to use.                          |         |

### List Metaproperties {#listmetaproperties}

Retrieve all metaproperties.

| Input      | Comments                                                                                             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Count      | Indicates whether or not the response should include asset count results for metaproperty-options.   | false   |
| Type       | The asset types to filter count results by. Only applicable when the count parameter is set to true. |         |
| Options    | When true, the response includes the metaproperty options of each metaproperty.                      | false   |
| IDs        | The list of metaproperty IDs to retrieve. Returns a metaproperty for each matching ID.               |         |
| Connection | The Bynder connection to use.                                                                        |         |

### List Orders {#listorders}

Retrieve all orders.

| Input      | Comments                                                                                           | Default |
| ---------- | -------------------------------------------------------------------------------------------------- | ------- |
| Page       | Offset page for results: return the N-th set of limit-results. Limit is currently hardcoded to 10. |         |
| Connection | The Bynder connection to use.                                                                      |         |

### List Security Profiles {#listsecurityprofiles}

Retrieve all security profiles

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Bynder connection to use. |         |

### List Users {#listusers}

Retrieve all users

| Input            | Comments                                                   | Default |
| ---------------- | ---------------------------------------------------------- | ------- |
| Page             | The page number to retrieve (starts at 1).                 |         |
| Limit            | The maximum number of results to return per page.          |         |
| Include Inactive | When true, includes inactive users in the list of results. | false   |
| Connection       | The Bynder connection to use.                              |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Bynder

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Bynder connection to use.                                                                                                                                                                    |         |
| URL                     | This is the URL to call.                                                                                                                                                                         |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Register Uploaded Chunk {#registeruploadedchunk}

Register an uploaded chunk.

| Input        | Comments                                              | Default |
| ------------ | ----------------------------------------------------- | ------- |
| ID           | ID of the upload.                                     |         |
| Chunk Number | Number of the chunk that was uploaded.                |         |
| Target ID    | The target ID returned by the initialise upload call. |         |
| Filename     | Location of the uploaded chunk.                       |         |
| Connection   | The Bynder connection to use.                         |         |

### Retrieve Poll State {#retrievepollstate}

Poll processing state of finalized files

| Input      | Comments                                                                          | Default |
| ---------- | --------------------------------------------------------------------------------- | ------- |
| Items      | Comma-separated import IDs of a finalized file, as returned by the finalize call. |         |
| Connection | The Bynder connection to use.                                                     |         |

### Save a New Asset {#saveasnewasset}

Save a completed upload as a new asset.

| Input       | Comments                                                         | Default |
| ----------- | ---------------------------------------------------------------- | ------- |
| Import ID   | Import id of a finalized and processed upload to be saved.       |         |
| Brand ID    | Brand id to save the asset to.                                   |         |
| Asset Name  | Name of the new asset.                                           |         |
| Description | A text description providing additional context about the asset. |         |
| Copyright   | Copyright information associated with the asset.                 |         |
| Data        | Data of the new asset.                                           |         |
| Connection  | The Bynder connection to use.                                    |         |

### Save as a New Asset Version {#saveasnewassetversion}

Save a completed upload as a new asset version.

| Input      | Comments                                                   | Default |
| ---------- | ---------------------------------------------------------- | ------- |
| Asset ID   | Asset id for which to save the new version.                |         |
| Import ID  | Import id of a finalized and processed upload to be saved. |         |
| Connection | The Bynder connection to use.                              |         |

### Share Collection {#sharecollection}

Share a collection

| Input              | Comments                                                                                                              | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Collection ID      | The ID of the collection to retrieve                                                                                  |         |
| Collection Options | The access rights granted to recipients of the shared collection.                                                     |         |
| Recipients         | Comma-separated email addresses of recipients to share the collection with. Required if groups or profiles are empty. |         |
| Groups             | Comma-separated list of group IDs to share the collection with. Required if recipients or profiles are empty.         |         |
| Profiles           | Comma-separated list of profile IDs to share the collection with. Required if recipients or groups are empty.         |         |
| Data               | Additional fields to include in the request body as a JSON object.                                                    |         |
| Connection         | The Bynder connection to use.                                                                                         |         |

### Update Asset {#updateasset}

Edit an existing asset

| Input       | Comments                                                                          | Default |
| ----------- | --------------------------------------------------------------------------------- | ------- |
| ID          | The unique identifier of the resource to retrieve.                                |         |
| Name        | The display name of the asset. The asset will have no name if this is left empty. |         |
| Description | A text description providing additional context about the asset.                  |         |
| Copyright   | Copyright information associated with the asset.                                  |         |
| Data        | Additional fields to include in the request body as a JSON object.                |         |
| Connection  | The Bynder connection to use.                                                     |         |

### Update Campaign {#updatecampaign}

Edit an existing campaign

| Input          | Comments                                                        | Default |
| -------------- | --------------------------------------------------------------- | ------- |
| Campaign ID    | The ID of the campaign to update                                |         |
| Name           | The name of the campaign                                        |         |
| Key            | A 4-character key representing the campaign.                    |         |
| Responsible ID | The unique identifier of the user responsible for the campaign. |         |
| Description    | The description of the campaign                                 |         |
| Data           | Additional data to update the campaign                          |         |
| Connection     | The Bynder connection to use.                                   |         |

### Update Collection {#updatecollection}

Edit an existing collection

| Input                  | Comments                                          | Default |
| ---------------------- | ------------------------------------------------- | ------- |
| Collection ID          | The ID of the collection to update                |         |
| Collection Name        | The name of the collection to create              |         |
| Collection Description | The description of the collection to create       |         |
| Is Public              | When true, the collection is publicly accessible. | true    |
| Connection             | The Bynder connection to use.                     |         |

### Update Job {#updatejob}

Edit an existing job

| Input          | Comments                               | Default |
| -------------- | -------------------------------------- | ------- |
| Job ID         | The ID of the job to update            |         |
| Name           | The name of the job                    |         |
| Campaign ID    | Id of the campaign the job is part of  |         |
| Accountable ID | Id of the user responsible for the job |         |
| Description    | The description of the job             |         |
| Data           | Additional data to update the job      |         |
| Connection     | The Bynder connection to use.          |         |

### Update Order {#updateorder}

Update an existing order

| Input           | Comments                                           | Default |
| --------------- | -------------------------------------------------- | ------- |
| Order ID        | The ID of the order to update                      |         |
| Order Status    | The current status of the order.                   |         |
| Message         | A message to include with the order status update. |         |
| Tracking Number | The tracking number for the order shipment.        |         |
| Connection      | The Bynder connection to use.                      |         |

### Update User {#updateuser}

Edit an existing user

| Input      | Comments                                                                                                                                                     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| ID         | The ID of the user to update                                                                                                                                 |         |
| Email      | The email address used to identify and authenticate the user.                                                                                                |         |
| Password   | The password used to authenticate the user.                                                                                                                  |         |
| Profile ID | The unique identifier of the security profile that determines the user's access rights. Retrieve available profiles using the List Security Profiles action. |         |
| First Name | The first name of the user.                                                                                                                                  |         |
| Last Name  | The last name of the user.                                                                                                                                   |         |
| Username   | The username for login. If not defined, the email address is used as the username.                                                                           |         |
| Data       | Additional fields to include in the request body as a JSON object.                                                                                           |         |
| Connection | The Bynder connection to use.                                                                                                                                |         |

### Upload Chunk {#uploadchunk}

Upload a chunk of a file.

| Input                | Comments                                                                                                  | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------- | ------- |
| Upload URL           | The Amazon S3 upload endpoint URL received from calling the Get Closest Amazon S3 Upload Endpoint action. |         |
| File                 | The file or chunk of the file to be uploaded.                                                             |         |
| Chunk                | The chunk index number being uploaded (indexing starts from 1).                                           |         |
| Chunks               | The total number of chunks the file is split into for upload.                                             |         |
| Multipart Parameters | The parameters for the multipart upload. Use all fields from the response of the initialise upload call.  |         |
