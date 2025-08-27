---
title: Bynder Connector
sidebar_label: Bynder
description: Bynder is a leading digital asset management software that allows users to easily create, find, and use content, such as documents, graphics, and videos.
---

![Bynder](./assets/bynder.png#connector-icon)
Bynder is a leading digital asset management software that allows users to easily create, find, and use content, such as documents, graphics, and videos.

## Connections

### Client Credentials OAuth 2.0

Client Credentials OAuth 2.0

To create a new [OAuth App](https://support.bynder.com/hc/en-us/articles/360013875180-Create-OAuth-Apps):

1. Sign into Bynder and navigate to **Settings > Advanced Settings > Portal Settings** and select **OAuth Apps**
2. Select **Register new application** to create an OAuth App.
3. Set Grant Type:
   1. **Client Credentials - Assigned user**
      1. Choose the user for which tokens will be issued. Enter the name of the user and click one of the returned search results. We advise creating a dedicated user in the portal if one doesn't exist.
4. Add at least the following scopes: asset:read, asset:write, collection:read, collection:write,
5. Select **Register application** to retrieve a **Client ID** and **Client Secret.**
6. Enter the **Client ID** and **Client Secret** into the connection configuration of the integration.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                       | Default                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Token URL     | The URL to exchange the authorization code for an access token |                                                                                                                                                                                                                                                                                                                                                           |
| Scopes        | The scopes for the access token                                | asset:read asset:write collection:read collection:write current.user:read current.profile:read workflow.campaign:read workflow.campaign:write workflow.job:read workflow.job:write brandstore.order:read brandstore.order:write meta.assetbank:read meta.assetbank:write admin.profile:read admin.user:read admin.user:write workflow.preset:read offline |
| Client ID     | The client ID for the OAuth connection                         |                                                                                                                                                                                                                                                                                                                                                           |
| Client Secret | The client secret for the OAuth connection                     |                                                                                                                                                                                                                                                                                                                                                           |

### OAuth 2.0

OAuth 2.0

To create a new [OAuth App](https://support.bynder.com/hc/en-us/articles/360013875180-Create-OAuth-Apps):

1. Sign into Bynder and navigate to **Settings > Advanced Settings > Portal Settings** and select **OAuth Apps**
2. Select **Register new application** to create an OAuth App.
3. Set Grant Type:
   1. **Authorization Code - Authorization redirect URLs**
      1. Set the redirect URI to `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   2. **Client Credentials - Assigned user**
      1. Choose the user for which tokens will be issued. Enter the name of the user and click one of the returned search results. We advise creating a dedicated user in the portal if one doesn't exist.
4. Add at least the following scopes: asset:read, asset:write, collection:read, collection:write,
5. Select **Register application** to retrieve a **Client ID** and **Client Secret.**
6. Enter the **Client ID** and **Client Secret** into the connection configuration of the integration.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                       | Default                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL | The URL to redirect the user to for authorization              |                                                                                                                                                                                                                                                                                                                                                           |
| Token URL     | The URL to exchange the authorization code for an access token |                                                                                                                                                                                                                                                                                                                                                           |
| Scopes        | The scopes for the access token                                | asset:read asset:write collection:read collection:write current.user:read current.profile:read workflow.campaign:read workflow.campaign:write workflow.job:read workflow.job:write brandstore.order:read brandstore.order:write meta.assetbank:read meta.assetbank:write admin.profile:read admin.user:read admin.user:write workflow.preset:read offline |
| Client ID     | The client ID for the OAuth connection                         |                                                                                                                                                                                                                                                                                                                                                           |
| Client Secret | The client secret for the OAuth connection                     |                                                                                                                                                                                                                                                                                                                                                           |

## Actions

### Add Asset Metaproperty Options

Add metaproperty options to an asset

| Input                    | Comments                                                      | Default |
| ------------------------ | ------------------------------------------------------------- | ------- |
| Asset ID                 | Id of the asset.                                              |         |
| Metaproperty ID          | Id of the metaproperty from which you want to add options.    |         |
| Metaproperty Options IDs | List of metaproperty option ids you want to add to the asset. |         |
| Debug Request            | Enabling this flag will log out the current request.          | false   |
| Connection               |                                                               |         |

### Close Campaign

Delete an existing campaign

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Campaign ID   | The ID of the campaign to delete                     |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Create Campaign

Create a new campaign

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Name           | The name of the campaign                             |         |
| Key            | 4 character key representing the campaign            |         |
| Description    | The description of the campaign                      |         |
| Responsible ID | Id of the user responsible for the campaign          |         |
| Data           | Additional data to update the campaign               |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |
| Connection     |                                                      |         |

### Create Collection

Create a new collection

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| Collection Name        | The name of the collection to create                 |         |
| Collection Description | The description of the collection to create          |         |
| Debug Request          | Enabling this flag will log out the current request. | false   |
| Connection             |                                                      |         |

### Create Job

Create a new job

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Name           | The name of the job                                  |         |
| Campaign ID    | Id of the campaign the job is part of                |         |
| Accountable ID | Id of the user responsible for the job               |         |
| Preset ID      | Id of the preset the job should be created from      |         |
| Description    | The description of the job                           |         |
| Data           | Additional data to create the job                    |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |
| Connection     |                                                      |         |

### Create User

Create a new user

| Input         | Comments                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Email         | Email address for login.                                                                                              |         |
| Password      | Password for login.                                                                                                   |         |
| Profile ID    | Security profile id for determining the user's rights. Can be retrieved by using the Retrieve security profiles call. |         |
| First Name    | First name of the user.                                                                                               |         |
| Last Name     | Last name of the user.                                                                                                |         |
| Username      | Username for login. If not defined it will take your email as username.                                               |         |
| Data          | Extra fields to be included in the request. Must be valid JSON.                                                       |         |
| Debug Request | Enabling this flag will log out the current request.                                                                  | false   |
| Connection    |                                                                                                                       |         |

### Delete Asset

Delete an existing asset

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| ID            | The ID of the resource to retrieve                   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Delete Asset Metaproperty Options

Remove metaproperty options from an asset

| Input                    | Comments                                                      | Default |
| ------------------------ | ------------------------------------------------------------- | ------- |
| Asset ID                 | Id of the asset.                                              |         |
| Metaproperty ID          | Id of the metaproperty from which you want to add options.    |         |
| Metaproperty Options IDs | List of metaproperty option ids you want to add to the asset. |         |
| Debug Request            | Enabling this flag will log out the current request.          | false   |
| Connection               |                                                               |         |

### Delete Campaign

Delete an existing campaign

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Campaign ID   | The ID of the campaign to delete                     |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Delete Collection

Delete an existing collection

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Collection ID | The ID of the collection to delete                   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Delete Job

Delete an existing job

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Job ID        | The ID of the job to delete                          |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Delete User

Remove an existing user

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| ID            | The ID of the resource to retrieve                   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Download Specific Asset Item

Download an specific asset item

| Input         | Comments                                                         | Default |
| ------------- | ---------------------------------------------------------------- | ------- |
| Asset ID      | The id of the asset you’d like to download a item of.            |         |
| Item ID       | The id of the specific asset item you’d like to download.        |         |
| Hash          | Indicates whether or not to treat the itemId as a hashed item id | false   |
| Debug Request | Enabling this flag will log out the current request.             | false   |
| Connection    |                                                                  |         |

### Finalize Complete Upload

Finalize a completely uploaded file.

| Input             | Comments                                                         | Default |
| ----------------- | ---------------------------------------------------------------- | ------- |
| ID                | ID of the upload.                                                |         |
| Target ID         | The targetid that was returned by the initialize call.           |         |
| S3 Filename       | Base location of the uploaded file.                              |         |
| Chunks            | Total number of chunks uploaded.                                 |         |
| Original Filename | Filename including special characters to be displayed in Bynder. |         |
| Debug Request     | Enabling this flag will log out the current request.             | false   |
| Connection        |                                                                  |         |

### Finalize Complete Upload And Save As New Asset Additional

Finalize a completely uploaded file and save as a new asset additional.

| Input         | Comments                                                                                 | Default |
| ------------- | ---------------------------------------------------------------------------------------- | ------- |
| Asset ID      | Asset id to which to save the new additional.                                            |         |
| ID            | ID of the upload.                                                                        |         |
| Target ID     | The targetid that was returned by the initialize call.                                   |         |
| S3 Filename   | Base location of the uploaded file or filename result from the last upload chunk action. |         |
| Chunks        | Total number of chunks uploaded.                                                         |         |
| Debug Request | Enabling this flag will log out the current request.                                     | false   |
| Connection    |                                                                                          |         |

### Generate Dynamic Asset Transformation

Generate a derivative on the fly with a transformation (such as cropping, scaling, filling) applied to it

| Input         | Comments                                                                                                                                                            | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| ID            | The ID of the resource to retrieve                                                                                                                                  |         |
| Name          | Name of the asset, beware the asset will have no name when this is empty.                                                                                           |         |
| IO            | The operation(s) performed on the image before it's served to the client. It's possible to specify this parameter several times to have several operations applied. |         |
| Focus Point   | Focus point as a x,y coordinate (with values between 0 - 1). This will serve as the center point for the image operations.                                          |         |
| Format        | Format of the served image. This can either be jpg or png and it will overwrite the default webP.                                                                   |         |
| Format        | Image quality, ranging from 1 - 100 (has no effect when format is set to 'png').                                                                                    |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                | false   |
| Connection    |                                                                                                                                                                     |         |

### Get Account Information

Retrieve information on current account

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Asset

Retrieve a specific asset

| Input         | Comments                                                                      | Default |
| ------------- | ----------------------------------------------------------------------------- | ------- |
| ID            | The ID of the resource to retrieve                                            |         |
| Versions      | Include information about the different asset media items including versions. | false   |
| Stats         | Include information about views and downloads.                                | false   |
| Debug Request | Enabling this flag will log out the current request.                          | false   |
| Connection    |                                                                               |         |

### Get Campaign

Retrieve a specific campaign

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Campaign ID   | The ID of the campaign to retrieve                   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Closest S3 Upload Endpoint

Retrieve the closest S3 upload endpoint

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Collection

Retrieve a specific collection

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Collection ID | The ID of the collection to retrieve                 |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Current User

Retrieve the current user

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Job

Retrieve a job by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Job ID        | The ID of the job to retrieve                        |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Job Preset

Retrieve a job preset by ID

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Job preset ID | The ID of the job preset to retrieve                 |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Media of Job

Retrieve media attached to an existing job

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Job ID        | The ID of the job to retrieve                        |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Order

Retrieve an existing order

| Input         | Comments                                                                        | Default |
| ------------- | ------------------------------------------------------------------------------- | ------- |
| Order ID      | The ID of the order to retrieve. Either id or orderNumber is required           |         |
| Order Number  | The order number of the order to retrieve. Either id or orderNumber is required |         |
| Debug Request | Enabling this flag will log out the current request.                            | false   |
| Connection    |                                                                                 |         |

### Get Order Info

Retrieve information on an order

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Order ID      | The ID of the order to retrieve                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get Security Profile

Retrieve a specified security profile

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| ID            | The ID of the resource to retrieve                   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Get User

Retrieve a specified user

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| ID            | The ID or username of the user to retrieve           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### Initialize Upload

Initialize a new file upload.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Filename      | Filename of new upload (extension required).         |         |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### List Assets

Retrieve all assets

| Input            | Comments                                                                                                                               | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Page             | The page number to retrieve                                                                                                            |         |
| Limit            | Maximum number of results. Maximum: 1000. Default: 50                                                                                  |         |
| Count            | Indicating whether or not the response should include count results. This parameter when passed as true overrides the total parameter. | false   |
| Total            | Indicating whether or not the response should include the total count of results.                                                      | false   |
| Fetch All        | Whether to fetch all results. If true, limit and page parameters are ignored.                                                          | true    |
| Extra Parameters | Extra parameters to be included in the request.                                                                                        |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                   | false   |
| Connection       |                                                                                                                                        |         |

### List Brands

Retrieve all brands

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### List Campaigns

Retrieve all campaigns

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### List Collections

Retrieve all collections

| Input            | Comments                                                                                                                               | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Page             | The page number to retrieve                                                                                                            |         |
| Limit            | Maximum results to return. If limit is not provided, all results are returned.                                                         |         |
| Count            | Indicating whether or not the response should include count results. This parameter when passed as true overrides the total parameter. | false   |
| Fetch All        | Whether to fetch all results. If true, limit and page parameters are ignored.                                                          | true    |
| Extra Parameters | Extra parameters to be included in the request.                                                                                        |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                   | false   |
| Connection       |                                                                                                                                        |         |

### List Jobs

Retrieve all jobs

| Input            | Comments                                                                       | Default |
| ---------------- | ------------------------------------------------------------------------------ | ------- |
| Page             | The page number to retrieve                                                    |         |
| Limit            | Maximum results to return. If limit is not provided, all results are returned. |         |
| Extra Parameters | Extra parameters to be included in the request.                                |         |
| Debug Request    | Enabling this flag will log out the current request.                           | false   |
| Connection       |                                                                                |         |

### List Jobs By Campaign

Retrieve jobs tied to a campaign

| Input            | Comments                                                                       | Default |
| ---------------- | ------------------------------------------------------------------------------ | ------- |
| Campaign ID      | The ID of the campaign to retrieve jobs for                                    |         |
| Page             | The page number to retrieve                                                    |         |
| Limit            | Maximum results to return. If limit is not provided, all results are returned. |         |
| Extra Parameters | Extra parameters to be included in the request.                                |         |
| Debug Request    | Enabling this flag will log out the current request.                           | false   |
| Connection       |                                                                                |         |

### List Metaproperties

Retrieve all metaproperties.

| Input         | Comments                                                                                                                                | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Count         | Indicates whether or not the response should include asset count results for metaproperty-options.                                      | false   |
| Type          | List of asset types. Filters the count results by asset type. It only makes sense to be defined if the count parameter was set to true. |         |
| Format        | Indicates whether or not the response should include the metaproperty options of each metaproperty.                                     | false   |
| IDs           | List of metaproperty ids. Will return a metaproperty for each existing id.                                                              |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                    | false   |
| Connection    |                                                                                                                                         |         |

### List Orders

Retrieve all orders.

| Input         | Comments                                                                                           | Default |
| ------------- | -------------------------------------------------------------------------------------------------- | ------- |
| Page          | Offset page for results: return the N-th set of limit-results. Limit is currently hardcoded to 10. |         |
| Debug Request | Enabling this flag will log out the current request.                                               | false   |
| Connection    |                                                                                                    |         |

### List Security Profiles

Retrieve all security profiles

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Debug Request | Enabling this flag will log out the current request. | false   |
| Connection    |                                                      |         |

### List Users

Retrieve all users

| Input            | Comments                                                                       | Default |
| ---------------- | ------------------------------------------------------------------------------ | ------- |
| Page             | The page number to retrieve                                                    |         |
| Limit            | Maximum results to return. If limit is not provided, all results are returned. |         |
| Include Inactive | Whether to include inactive users in the list of results.                      | false   |
| Debug Request    | Enabling this flag will log out the current request.                           | false   |
| Connection       |                                                                                |         |

### Raw Request

Send raw HTTP request to Bynder

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                  |         |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                             | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Register Uploaded Chunk

Register an uploaded chunk.

| Input         | Comments                                               | Default |
| ------------- | ------------------------------------------------------ | ------- |
| ID            | ID of the upload.                                      |         |
| Chunk Number  | Number of the chunk that was uploaded.                 |         |
| Target ID     | The targetid that was returned by the initialize call. |         |
| Filename      | Location of the uploaded chunk.                        |         |
| Debug Request | Enabling this flag will log out the current request.   | false   |
| Connection    |                                                        |         |

### Retrieve Poll State

Poll processing state of finalized files

| Input         | Comments                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------- | ------- |
| Items         | Comma-separated import id's of a finalized file, as returned by the finalize call. |         |
| Debug Request | Enabling this flag will log out the current request.                               | false   |
| Connection    |                                                                                    |         |

### Save a New Asset

Save a completed upload as a new asset.

| Input         | Comments                                                   | Default |
| ------------- | ---------------------------------------------------------- | ------- |
| Import ID     | Import id of a finalized and processed upload to be saved. |         |
| Brand ID      | Brand id to save the asset to.                             |         |
| Asset Name    | Name of the new asset.                                     |         |
| Description   | Asset description.                                         |         |
| Copyright     | Copyright information of the asset.                        |         |
| Data          | Data of the new asset.                                     |         |
| Debug Request | Enabling this flag will log out the current request.       | false   |
| Connection    |                                                            |         |

### Save as a New Asset Version

Save a completed upload as a new asset version.

| Input         | Comments                                                   | Default |
| ------------- | ---------------------------------------------------------- | ------- |
| Asset ID      | Asset id for which to save the new version.                |         |
| Import ID     | Import id of a finalized and processed upload to be saved. |         |
| Debug Request | Enabling this flag will log out the current request.       | false   |
| Connection    |                                                            |         |

### Share Collection

Share a collection

| Input              | Comments                                                                                  | Default |
| ------------------ | ----------------------------------------------------------------------------------------- | ------- |
| Collection ID      | The ID of the collection to retrieve                                                      |         |
| Collection Options | Recipient rights.                                                                         |         |
| Recipients         | Comma-separated email addresses of recipients. Mandatory if groups or profiles are empty. |         |
| Groups             | Comma-separated list of group ids. Mandatory if recipients or profiles are empty.         |         |
| Profiles           | Comma-separated list of profile ids. Mandatory if recipients or groups are empty.         |         |
| Data               | Extra fields to be included in the request. Must be valid JSON.                           |         |
| Debug Request      | Enabling this flag will log out the current request.                                      | false   |
| Connection         |                                                                                           |         |

### Update Asset

Edit an existing asset

| Input         | Comments                                                                  | Default |
| ------------- | ------------------------------------------------------------------------- | ------- |
| ID            | The ID of the resource to retrieve                                        |         |
| Name          | Name of the asset, beware the asset will have no name when this is empty. |         |
| Description   | Asset description.                                                        |         |
| Copyright     | Copyright information of the asset.                                       |         |
| Data          | Extra fields to be included in the request. Must be valid JSON.           |         |
| Debug Request | Enabling this flag will log out the current request.                      | false   |
| Connection    |                                                                           |         |

### Update Campaign

Edit an existing campaign

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Campaign ID    | The ID of the campaign to update                     |         |
| Name           | The name of the campaign                             |         |
| Key            | 4 character key representing the campaign            |         |
| Responsible ID | Id of the user responsible for the campaign          |         |
| Description    | The description of the campaign                      |         |
| Data           | Additional data to update the campaign               |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |
| Connection     |                                                      |         |

### Update Collection

Edit an existing collection

| Input                  | Comments                                                         | Default |
| ---------------------- | ---------------------------------------------------------------- | ------- |
| Collection ID          | The ID of the collection to update                               |         |
| Collection Name        | The name of the collection to create                             |         |
| Collection Description | The description of the collection to create                      |         |
| Is Public              | Indicates whether or not to treat the itemId as a hashed item id | true    |
| Debug Request          | Enabling this flag will log out the current request.             | false   |
| Connection             |                                                                  |         |

### Update Job

Edit an existing job

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Job ID         | The ID of the job to update                          |         |
| Name           | The name of the job                                  |         |
| Campaign ID    | Id of the campaign the job is part of                |         |
| Accountable ID | Id of the user responsible for the job               |         |
| Description    | The description of the job                           |         |
| Data           | Additional data to update the job                    |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |
| Connection     |                                                      |         |

### Update Order

Update an existing order

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Order ID        | The ID of the order to update                        |         |
| Order Status    | Status of the order                                  |         |
| Message         | A message                                            |         |
| Tracking Number | Link to trackingnumber                               |         |
| Debug Request   | Enabling this flag will log out the current request. | false   |
| Connection      |                                                      |         |

### Update User

Edit an existing user

| Input         | Comments                                                                                                              | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| ID            | The ID of the user to update                                                                                          |         |
| Email         | Email address for login.                                                                                              |         |
| Password      | Password for login.                                                                                                   |         |
| Profile ID    | Security profile id for determining the user's rights. Can be retrieved by using the Retrieve security profiles call. |         |
| First Name    | First name of the user.                                                                                               |         |
| Last Name     | Last name of the user.                                                                                                |         |
| Username      | Username for login. If not defined it will take your email as username.                                               |         |
| Data          | Extra fields to be included in the request. Must be valid JSON.                                                       |         |
| Debug Request | Enabling this flag will log out the current request.                                                                  | false   |
| Connection    |                                                                                                                       |         |

### Upload Chunk

Upload a chunk of a file.

| Input                | Comments                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Upload URL           | Amazon upload endpoint received from calling Get closest AmazonS3 upload endpoint.                       |         |
| File                 | File or chunk of the file to be uploaded.                                                                |         |
| Chunk                | Chunk index number (indexing starts from 1).                                                             |         |
| Chunks               | Total number of chunks.                                                                                  |         |
| Multipart Parameters | Parameters for the multipart upload. Use all the fields from the response of the initialise upload call. |         |
| Debug Request        | Enabling this flag will log out the current request.                                                     | false   |
