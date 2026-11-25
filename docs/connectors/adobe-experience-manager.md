---
title: Adobe Experience Manager Connector
sidebar_label: Adobe Experience Manager
description: Read content fragments, assets, and published pages from Adobe Experience Manager as a Cloud Service, and detect content changes.
---

![Adobe Experience Manager](./assets/adobe-experience-manager.png#connector-icon)
[Adobe Experience Manager as a Cloud Service](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/overview/introduction) is Adobe's cloud-native content management system for websites, headless content, and digital assets.
This component allows reading content fragments, assets, folders, and published pages, managing assets and folders, and receiving content changes through polling triggers or Adobe I/O Events.

## API Documentation

This component was built using the following API References:

- [AEM Sites API](https://developer.adobe.com/experience-cloud/experience-manager-apis/api/stable/sites/)
- [AEM Assets Author API](https://developer.adobe.com/experience-cloud/experience-manager-apis/api/stable/assets/author/)
- [AEM Folders API](https://developer.adobe.com/experience-cloud/experience-manager-apis/api/stable/folders/)
- [Adobe I/O Events Registration API](https://developer.adobe.com/events/docs/guides/api/registration-api)

## Connections

### OAuth 2.0 {#aemoauthwebapp}

Authenticate to AEM as a Cloud Service as an Adobe user with an OAuth Web App credential from the Adobe Developer Console. Requests run with that user's AEM permissions.

The OAuth 2.0 connection authenticates to Adobe Experience Manager as a Cloud Service as an Adobe user, with an [OAuth Web App credential](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/aem-apis/openapis/invoke-api-using-oauth-web-app) from the Adobe Developer Console. Requests run with that user's AEM permissions, so a user without access to an asset, folder, or content fragment gets a 403 for it.

Use this connection for the asset, folder, and page actions and the **New and Updated Assets** trigger. The content fragment actions and the **New and Updated Fragments** trigger need the **OAuth 2.0 Client Credentials** connection: the Developer Console grants a Web App credential only the Assets Author API scopes, and AEM answers content fragment requests made with it with `403 The access token is missing required scopes`. The **AEM Sites Event Subscription** and **AEM Assets Event Subscription** triggers also require the **OAuth 2.0 Client Credentials** connection: Adobe documents Adobe I/O Events registrations for OAuth Server-to-Server credentials only, so the trigger refuses this connection at deploy.

#### Prerequisites

- An Adobe Experience Manager as a Cloud Service environment with [OpenAPI-based APIs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/open-api-based-apis) available
- Administrator access to the Adobe Developer Console for the organization
- Access to the environment's AEM code repository, to allow the credential's client ID in `config/api.yaml`
- An Adobe user with AEM access to the content the integration reads or changes

#### Setup Steps

1. In the **Adobe Developer Console**, open or create a project and click **Add API**
2. Filter by **Experience Cloud**, select the **AEM Assets Author API** card, and click **Next**
3. Select **User Authentication**, then **OAuth Web App**, and click **Next**
4. Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as both the **Default redirect URI** and the **Redirect URI pattern**. The pattern is a regular expression, so escape each `.` in it with a backslash
5. Review the scopes and click **Save configured API**. The Assets Author API grants both the `aem.assets.author` and `aem.folders` scopes, so one credential covers asset and folder requests
6. From the credential's page, copy the **Client ID** and **Client Secret**
7. Add the **Client ID** to `allowedClientIDs.author` in the environment's `config/api.yaml` and deploy it through the Cloud Manager Config Pipeline, as described in Adobe's [OpenAPI setup guide](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/aem-apis/openapis/setup). Until this is deployed, AEM rejects every request with a 403

#### Configure the Connection

- **AEM Author Host**: The author host from Cloud Manager, without `https://` (for example `author-p12345-e123456.adobeaemcloud.com`)
- **Client ID** and **Client Secret**: From the OAuth Web App credential. The client ID is also sent as the `X-Api-Key` header
- **Scopes**: Enter the scopes exactly as the credential's **Scopes** tab lists them. Adobe rejects the authorization with `invalid_scope` when a scope the credential does not list is requested. The default matches an Assets Author API credential:
  ```
  openid,AdobeID,aem.assets.author,aem.folders
  ```
- **Authorize URL** and **Token URL**: Keep the default Adobe IMS endpoints unless Adobe directs different ones

Save the configuration and authorize the connection by signing in with the Adobe user the integration acts as.

#### Verify Connection

Run **List Folder Contents** against the connection. A 403 response means either the client ID is not yet allowed in `config/api.yaml` (step 7) or the signed-in user lacks access to the content requested.

Adobe issues a refresh token only when `offline_access` is requested and the user consents to it ([Adobe IMS user authentication](https://developer.adobe.com/developer-console/docs/guides/authentication/UserAuthentication/ims)). The Developer Console does not list `offline_access` for an AEM Web App credential and IMS rejects a request that includes it, so no refresh token is issued and the connection must be re-authorized each time its access token expires, after 24 hours by default.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                                                                                                                                                                                         | Default                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| AEM Author Host | The host name of the AEM as a Cloud Service author environment, without https://. Shown in Cloud Manager as the author URL.                                                                                      |                                                 |
| Client ID       | The Client ID of the OAuth Web App credential in the [Adobe Developer Console](https://developer.adobe.com/console) project. Also sent as the X-Api-Key header.                                                  |                                                 |
| Client Secret   | The Client Secret of the OAuth Web App credential in the Adobe Developer Console project.                                                                                                                        |                                                 |
| Scopes          | The comma separated scopes to request, exactly as the credential's Scopes tab in the Adobe Developer Console lists them. Adobe rejects the authorization when a scope the credential does not list is requested. | openid,AdobeID,aem.assets.author,aem.folders    |
| Authorize URL   | The Adobe IMS authorization endpoint. Change only when Adobe directs a different region.                                                                                                                         | https://ims-na1.adobelogin.com/ims/authorize/v2 |
| Token URL       | The Adobe IMS token endpoint. Change only when Adobe directs a different region.                                                                                                                                 | https://ims-na1.adobelogin.com/ims/token/v3     |

### OAuth 2.0 Client Credentials {#aemoauthservertoserver}

Authenticate to AEM as a Cloud Service with an OAuth Server-to-Server credential from the Adobe Developer Console.

The OAuth 2.0 Client Credentials connection authenticates to Adobe Experience Manager as a Cloud Service with an [OAuth Server-to-Server credential](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/aem-apis/openapis/invoke-api-using-oauth-s2s) from the Adobe Developer Console. Every action and trigger in this component works with it, and it is the only credential type Adobe documents for the Adobe I/O Events registrations the **AEM Sites Event Subscription** and **AEM Assets Event Subscription** triggers create. Requests run as the credential's technical account, with the permissions of the product profiles assigned to it. To run requests as a specific Adobe user instead, use the **OAuth 2.0** connection.

#### Prerequisites

- An Adobe Experience Manager as a Cloud Service environment with [OpenAPI-based APIs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/open-api-based-apis) available
- Administrator access to Cloud Manager, the Adobe Admin Console, and the Adobe Developer Console for the organization
- Access to the environment's AEM code repository, to allow the credential's client ID in `config/api.yaml`

#### Setup Steps

Adobe's [OpenAPI setup guide](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/aem-apis/openapis/setup) covers each step in detail.

1. In **Cloud Manager**, modernize the environment so its AEM API services can be assigned to product profiles (**Add Product Profiles** on the environment)
2. In the **Adobe Admin Console**, add the AEM API services for Sites and Assets to a product profile. The profile's permissions decide what the connection can read and change ([credentials and product profiles](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/aem-apis/openapis/how-to/credentials-and-product-profile-management))
3. In the **Adobe Developer Console**, create a project and add the AEM Sites, Assets Author, and Folders APIs, choosing **OAuth Server-to-Server** and the product profile from step 2
4. For the **AEM Sites Event Subscription** and **AEM Assets Event Subscription** triggers only, also add **I/O Management API** to the same credential and [enable AEM Events](https://developer.adobe.com/experience-cloud/experience-manager-apis/guides/events/) for the environment. Note the project's **Consumer Organization ID**, **Project ID**, and **Workspace ID**, and the **Event Provider ID** each trigger asks for: Adobe creates one AEM Sites event provider and one AEM Assets event provider per environment
5. From the credential's page in the Developer Console, copy the **Client ID**, **Client Secret**, and **Scopes**
6. Add the **Client ID** to `allowedClientIDs.author` in the environment's `config/api.yaml` and deploy it through the Cloud Manager Config Pipeline. Until this is deployed, AEM rejects every request with a 403

#### Configure the Connection

- **AEM Author Host**: The author host from Cloud Manager, without `https://` (for example `author-p12345-e123456.adobeaemcloud.com`)
- **Client ID** and **Client Secret**: From the OAuth Server-to-Server credential. The client ID is also sent as the `X-Api-Key` header
- **Scopes**: Paste the scopes exactly as the credential lists them. Adobe issues them per credential, so they vary with the APIs added in step 3 ([Server-to-Server token reference](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/ims))
- **Token URL**: Keep the default Adobe IMS endpoint unless Adobe directs a different one

#### Verify Connection

Run **List Content Fragment Models** or **List Folder Contents** against the connection. A 403 response usually has one of two causes, and the error message names both: the client ID is not yet allowed in `config/api.yaml` (step 6), or the product profile from step 2 lacks access to the API or content requested. The `detail` field in Adobe's response tells them apart: `IMS Client ID not allowlisted` points to step 6, and `The user is not assigned to the right Product Profile in Adobe Admin Console.` points to step 2. A 403 whose body reads `Api Key is invalid` comes from Adobe's API gateway instead: the Developer Console project from step 3 does not include the AEM API that serves the request.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                                                                                                                                                 | Default                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| AEM Author Host | The host name of the AEM as a Cloud Service author environment, without https://. Shown in Cloud Manager as the author URL.                                              |                                             |
| Client ID       | The Client ID of the OAuth Server-to-Server credential in the [Adobe Developer Console](https://developer.adobe.com/console) project. Also sent as the X-Api-Key header. |                                             |
| Client Secret   | The Client Secret of the OAuth Server-to-Server credential in the Adobe Developer Console project.                                                                       |                                             |
| Scopes          | The space or comma separated scopes listed on the OAuth Server-to-Server credential in the Adobe Developer Console. Copy them exactly as shown.                          |                                             |
| Token URL       | The Adobe IMS token endpoint. Change only when Adobe directs a different region.                                                                                         | https://ims-na1.adobelogin.com/ims/token/v3 |

## Triggers

### AEM Assets Event Subscription {#aemassetseventwebhook}

Receive and validate asset events from Adobe Experience Manager, including metadata updates that the New and Updated Assets trigger cannot detect. Handles URL verification challenges automatically, and automatically creates and manages an Adobe I/O Events webhook registration with the environment's AEM Assets event provider when the instance is deployed, removing it when the instance is deleted.

| Input                    | Comments                                                                                                                                                                   | Default                                                                                                                                                                               |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection               | The AEM as a Cloud Service connection to use.                                                                                                                              |                                                                                                                                                                                       |
| Consumer Organization ID | The Adobe Developer Console consumer organization ID that owns the project.                                                                                                |                                                                                                                                                                                       |
| Project ID               | The ID of the Adobe Developer Console project with AEM Events enabled.                                                                                                     |                                                                                                                                                                                       |
| Workspace ID             | The ID of the Adobe Developer Console workspace within the project.                                                                                                        |                                                                                                                                                                                       |
| Event Provider ID        | The ID of the environment's AEM Assets event provider. Adobe creates one AEM Sites provider and one AEM Assets provider per environment once AEM Events is enabled for it. |                                                                                                                                                                                       |
| Event Types              | The AEM Assets events to subscribe to.                                                                                                                                     | <code>["aem.assets.asset.processing_completed", "aem.assets.asset.metadata_updated", "aem.assets.asset.published", "aem.assets.asset.unpublished", "aem.assets.asset.deleted"]</code> |
| Publish Base URL         | The public base URL of the published site, used to build each record's URL from its path. Leave empty to omit URLs.                                                        |                                                                                                                                                                                       |

### AEM Sites Event Subscription {#aemsiteseventwebhook}

Receive and validate content fragment and page events from Adobe Experience Manager. Handles URL verification challenges automatically, and automatically creates and manages an Adobe I/O Events webhook registration with the environment's AEM Sites event provider when the instance is deployed, removing it when the instance is deleted. With a Publish Base URL, page events carry the published page URL for Get Published Page HTML.

| Input                    | Comments                                                                                                                                                                  | Default                                                                                                                                                                                                                                                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection               | The AEM as a Cloud Service connection to use.                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                        |
| Consumer Organization ID | The Adobe Developer Console consumer organization ID that owns the project.                                                                                               |                                                                                                                                                                                                                                                                                                                                                        |
| Project ID               | The ID of the Adobe Developer Console project with AEM Events enabled.                                                                                                    |                                                                                                                                                                                                                                                                                                                                                        |
| Workspace ID             | The ID of the Adobe Developer Console workspace within the project.                                                                                                       |                                                                                                                                                                                                                                                                                                                                                        |
| Event Provider ID        | The ID of the environment's AEM Sites event provider. Adobe creates one AEM Sites provider and one AEM Assets provider per environment once AEM Events is enabled for it. |                                                                                                                                                                                                                                                                                                                                                        |
| Event Types              | The AEM Sites content fragment and page events to subscribe to.                                                                                                           | <code>["aem.sites.contentFragment.created", "aem.sites.contentFragment.modified", "aem.sites.contentFragment.published", "aem.sites.contentFragment.unpublished", "aem.sites.contentFragment.deleted", "aem.sites.page.created", "aem.sites.page.modified", "aem.sites.page.published", "aem.sites.page.unpublished", "aem.sites.page.deleted"]</code> |
| Publish Base URL         | The public base URL of the published site, used to build each record's URL from its path. Leave empty to omit URLs.                                                       |                                                                                                                                                                                                                                                                                                                                                        |

### New and Updated Assets {#assetchanges}

Retrieves existing and ongoing assets from Adobe Experience Manager. Load history once, check for changes on a schedule, or both.

| Input            | Comments                                                                                                                                                                                                                                | Default         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The AEM as a Cloud Service connection to use.                                                                                                                                                                                           |                 |
| Look-back Date   | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each asset modified on or after this date once. |                 |
| Folders          | Only include assets inside one of these folder IDs, at any depth.                                                                                                                                                                       | <code>[]</code> |
| MIME Types       | Only include assets with one of these exact MIME types.                                                                                                                                                                                 | <code>[]</code> |
| Publish Base URL | The public base URL of the published site, used to build each record's URL from its path. Leave empty to omit URLs.                                                                                                                     |                 |

### New and Updated Fragments {#contentfragmentchanges}

Retrieves existing and ongoing content fragments from Adobe Experience Manager. Load history once, check for changes on a schedule, or both.

| Input                   | Comments                                                                                                                                                                                                                                           | Default                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Connection              | The AEM as a Cloud Service connection to use.                                                                                                                                                                                                      |                                        |
| Look-back Date          | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each content fragment modified on or after this date once. |                                        |
| Path                    | Only return content fragments under this folder path below /content/dam, such as wknd/en/adventures. A full repository path starting with /content/dam is also accepted.                                                                           |                                        |
| Statuses                | Only emit content fragments in one of these statuses. The default covers live content: Published, and Modified (published, then edited).                                                                                                           | <code>["PUBLISHED", "MODIFIED"]</code> |
| Content Fragment Models | Only return content fragments based on one of these model IDs.                                                                                                                                                                                     | <code>[]</code>                        |
| Tags                    | Only return content fragments with at least one of these tag IDs.                                                                                                                                                                                  | <code>[]</code>                        |
| Locales                 | Only return content fragments in one of these locales.                                                                                                                                                                                             | <code>[]</code>                        |
| Publish Base URL        | The public base URL of the published site, used to build each record's URL from its path. Leave empty to omit URLs.                                                                                                                                |                                        |

## Actions

### Create Folders {#createfolders}

Create one or more asset folders. Fails when no folder could be created; when only some fail, they are listed in failedFolders. A request that runs as a job returns a job ID; check it with Get Folder Job Status.

| Input        | Comments                                                                                                                                    | Default         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection   | The AEM as a Cloud Service connection to use.                                                                                               |                 |
| Folder Paths | The folder paths below /content/dam, such as wknd-shared/en/new-folder. A full repository path starting with /content/dam is also accepted. | <code>[]</code> |

### Delete Asset {#deleteasset}

Delete an asset. Usually completes immediately; when AEM runs the delete as a job, returns a job ID to check with Get Asset Job Status.

| Input      | Comments                                                           | Default |
| ---------- | ------------------------------------------------------------------ | ------- |
| Connection | The AEM as a Cloud Service connection to use.                      |         |
| Asset ID   | The ID of the asset, in urn:aaid:aem:... form.                     |         |
| Force      | When true, deletes the asset even when it is referenced elsewhere. | false   |

### Delete Folders {#deletefolders}

Delete one or more asset folders by path. Fails when no folder could be deleted; when only some fail, they are listed in failedFolders. A request that runs as a job returns a job ID; check it with Get Folder Job Status.

| Input        | Comments                                                                                                                                    | Default         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection   | The AEM as a Cloud Service connection to use.                                                                                               |                 |
| Folder Paths | The folder paths below /content/dam, such as wknd-shared/en/new-folder. A full repository path starting with /content/dam is also accepted. | <code>[]</code> |
| Recursive    | When true, deletes each folder and everything inside it.                                                                                    | false           |
| Force        | When true, deletes even when assets in the folders are referenced elsewhere.                                                                | false           |

### Download Asset {#downloadasset}

Download the original binary of an asset.

| Input      | Comments                                                                 | Default |
| ---------- | ------------------------------------------------------------------------ | ------- |
| Connection | The AEM as a Cloud Service connection to use.                            |         |
| Asset ID   | The ID of the asset, in urn:aaid:aem:... form.                           |         |
| File Name  | The file name to request the binary under, usually the asset's own name. |         |

### Download Asset Rendition {#downloadassetrendition}

Download a rendition of an asset, such as a web-optimized image or text version.

| Input          | Comments                                                                 | Default |
| -------------- | ------------------------------------------------------------------------ | ------- |
| Connection     | The AEM as a Cloud Service connection to use.                            |         |
| Asset ID       | The ID of the asset, in urn:aaid:aem:... form.                           |         |
| Rendition Name | The name of the rendition, as returned by List Asset Renditions.         |         |
| File Name      | The file name to request the binary under, usually the asset's own name. |         |

### Get Asset Job Status {#getassetjobstatus}

Retrieve the state of a Delete Asset job.

| Input      | Comments                                                | Default |
| ---------- | ------------------------------------------------------- | ------- |
| Connection | The AEM as a Cloud Service connection to use.           |         |
| Job ID     | The job ID returned by the action that started the job. |         |

### Get Asset Metadata {#getassetmetadata}

Retrieve the repository and asset metadata of an asset.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The AEM as a Cloud Service connection to use.  |         |
| Asset ID   | The ID of the asset, in urn:aaid:aem:... form. |         |

### Get Content Fragment {#getcontentfragment}

Retrieve a content fragment by ID.

| Input               | Comments                                                                                                                  | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The AEM as a Cloud Service connection to use.                                                                             |         |
| Content Fragment ID | The unique identifier for the content fragment, a UUID as returned by List Content Fragments or Search Content Fragments. |         |
| Include Metadata    | When true, includes each content fragment's metadata in the response.                                                     | false   |
| References          | Which referenced content to include. Leave empty to omit references.                                                      |         |

### Get Folder Job Status {#getfolderjobstatus}

Retrieve the state of a Create Folders or Delete Folders job.

| Input      | Comments                                                | Default |
| ---------- | ------------------------------------------------------- | ------- |
| Connection | The AEM as a Cloud Service connection to use.           |         |
| Job ID     | The job ID returned by the action that started the job. |         |

### Get Import Job Status {#getimportjobstatus}

Retrieve the state and progress of an Import Asset from URL job.

| Input      | Comments                                                | Default |
| ---------- | ------------------------------------------------------- | ------- |
| Connection | The AEM as a Cloud Service connection to use.           |         |
| Job ID     | The job ID returned by the action that started the job. |         |

### Get Published Page HTML {#getpublishedpagehtml}

Retrieve the published HTML of a page by URL. Accepts URLs from List Sitemap URLs or AEM Sites Event Subscription page events.

| Input       | Comments                                                                                                                            | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The AEM as a Cloud Service connection to use.                                                                                       |         |
| Sitemap URL | The https:// URL of the site's sitemap or sitemap index. Used only to populate the Page URL dropdown; this action does not send it. |         |
| Page URL    | The https:// URL of the published page to fetch.                                                                                    |         |

### Import Asset from URL {#importassetfromurl}

Create an asset by having AEM download a file from a URL. Runs as a job; check it with Get Import Job Status.

| Input                   | Comments                                                                                                                                               | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The AEM as a Cloud Service connection to use.                                                                                                          |         |
| Destination Folder Path | The path of the folder to import into, below /content/dam, such as wknd-shared/en. A full repository path starting with /content/dam is also accepted. |         |
| File URL                | The https:// URL AEM downloads the file from. It must be reachable from AEM.                                                                           |         |
| File Name               | The name the asset is created with.                                                                                                                    |         |
| MIME Type               | The file's MIME type. Leave empty to let AEM detect it.                                                                                                |         |

### List Asset Renditions {#listassetrenditions}

List the renditions available for an asset.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The AEM as a Cloud Service connection to use.  |         |
| Asset ID   | The ID of the asset, in urn:aaid:aem:... form. |         |

### List Assets in Folder Tree {#listassetsinfoldertree}

List every asset in a folder and all of its subfolders.

| Input            | Comments                                                                                                                                                                                | Default      |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection       | The AEM as a Cloud Service connection to use.                                                                                                                                           |              |
| Root Folder Path | The path of the folder to walk, below /content/dam, such as wknd-shared/en. Assets in every subfolder are included. A full repository path starting with /content/dam is also accepted. | /content/dam |

### List Content Fragment Models {#listcontentfragmentmodels}

List the content fragment models available in the environment.

| Input      | Comments                                                                                                                                                                                                                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The AEM as a Cloud Service connection to use.                                                                                                                                                                                                 |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination, up to 500 pages of 50. Limit is ignored; when Cursor is set, fetching starts from that page. When more results remain, the output includes a cursor to continue from. | false   |
| Pagination | Cursor and page-size controls for paging through results.                                                                                                                                                                                     |         |
| Cursor     | The cursor returned by a previous page, used to fetch the next page.                                                                                                                                                                          |         |
| Limit      | The maximum number of results to return per page, from 1 to 50.                                                                                                                                                                               |         |
| Projection | How much of each content fragment to return. Leave empty for the API default.                                                                                                                                                                 |         |

### List Content Fragments {#listcontentfragments}

List content fragments, optionally under a path.

| Input            | Comments                                                                                                                                                                                                                                      | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The AEM as a Cloud Service connection to use.                                                                                                                                                                                                 |         |
| Fetch All        | When true, automatically fetches all pages of results using pagination, up to 500 pages of 50. Limit is ignored; when Cursor is set, fetching starts from that page. When more results remain, the output includes a cursor to continue from. | false   |
| Pagination       | Cursor and page-size controls for paging through results.                                                                                                                                                                                     |         |
| Cursor           | The cursor returned by a previous page, used to fetch the next page.                                                                                                                                                                          |         |
| Limit            | The maximum number of results to return per page, from 1 to 50.                                                                                                                                                                               |         |
| Path             | Only return content fragments under this folder path below /content/dam, such as wknd/en/adventures. A full repository path starting with /content/dam is also accepted.                                                                      |         |
| Projection       | How much of each content fragment to return. Leave empty for the API default.                                                                                                                                                                 |         |
| Include Metadata | When true, includes each content fragment's metadata in the response.                                                                                                                                                                         | false   |
| References       | Which referenced content to include. Leave empty to omit references.                                                                                                                                                                          |         |

### List Content Fragment Variations {#listcontentfragmentvariations}

List the variations of a content fragment.

| Input               | Comments                                                                                                                                                                                                                                      | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The AEM as a Cloud Service connection to use.                                                                                                                                                                                                 |         |
| Content Fragment ID | The unique identifier for the content fragment, a UUID as returned by List Content Fragments or Search Content Fragments.                                                                                                                     |         |
| Fetch All           | When true, automatically fetches all pages of results using pagination, up to 500 pages of 50. Limit is ignored; when Cursor is set, fetching starts from that page. When more results remain, the output includes a cursor to continue from. | false   |
| Pagination          | Cursor and page-size controls for paging through results.                                                                                                                                                                                     |         |
| Cursor              | The cursor returned by a previous page, used to fetch the next page.                                                                                                                                                                          |         |
| Limit               | The maximum number of results to return per page, from 1 to 50.                                                                                                                                                                               |         |

### List Folder Contents {#listfoldercontents}

List the folders and assets directly inside a folder.

| Input       | Comments                                                                                                                                                                                                                                      | Default      |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection  | The AEM as a Cloud Service connection to use.                                                                                                                                                                                                 |              |
| Folder Path | The folder path below /content/dam, such as wknd-shared/en. A full repository path starting with /content/dam is also accepted.                                                                                                               | /content/dam |
| Fetch All   | When true, automatically fetches all pages of results using pagination, up to 500 pages of 50. Limit is ignored; when Cursor is set, fetching starts from that page. When more results remain, the output includes a cursor to continue from. | false        |
| Pagination  | Cursor and page-size controls for paging through results.                                                                                                                                                                                     |              |
| Cursor      | The cursor returned by a previous page, used to fetch the next page.                                                                                                                                                                          |              |
| Limit       | The maximum number of results to return per page, from 1 to 50.                                                                                                                                                                               |              |
| Item Types  | Which kinds of items to list.                                                                                                                                                                                                                 | FOLDER,ASSET |
| Order By    | The field to order items by. Leave empty for the API default order.                                                                                                                                                                           |              |

### List Sitemap URLs {#listsitemapurls}

List page URLs and their last-modified dates from a site's sitemap, following a sitemap index. Pass the URLs to Get Published Page HTML.

| Input                 | Comments                                                                                                                 | Default         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection            | The AEM as a Cloud Service connection to use.                                                                            |                 |
| Sitemap URL           | The https:// URL of the site's sitemap or sitemap index. Child sitemaps on the same host are followed.                   |                 |
| Modified After        | Only return pages whose sitemap lastmod is after this ISO 8601 date-time. Pages without a lastmod are excluded when set. |                 |
| Include Path Prefixes | Only return pages whose URL path starts with one of these prefixes.                                                      | <code>[]</code> |
| Exclude Path Prefixes | Leave out pages whose URL path starts with one of these prefixes.                                                        | <code>[]</code> |

### Raw Request {#rawrequest}

Send raw HTTP request to Adobe Experience Manager.

| Input                   | Comments                                                                                                                                                                                         | Default         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection              | The AEM as a Cloud Service connection to use.                                                                                                                                                    |                 |
| URL                     | Input the path only (for example, /adobe/sites/cf/fragments). The AEM author host is already included.                                                                                           |                 |
| Method                  | The HTTP method to use.                                                                                                                                                                          |                 |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |                 |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             | <code>[]</code> |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 | <code>[]</code> |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           | <code>[]</code> |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              | <code>[]</code> |
| Header                  | A list of headers to send with the request.                                                                                                                                                      | <code>[]</code> |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json            |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |                 |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0               |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false           |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0               |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false           |

### Search Assets {#searchassets}

Search assets by folder, MIME type, modified date, and text.

| Input           | Comments                                                                                                                                                                                                                                      | Default         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection      | The AEM as a Cloud Service connection to use.                                                                                                                                                                                                 |                 |
| Fetch All       | When true, automatically fetches all pages of results using pagination, up to 500 pages of 50. Limit is ignored; when Cursor is set, fetching starts from that page. When more results remain, the output includes a cursor to continue from. | false           |
| Pagination      | Cursor and page-size controls for paging through results.                                                                                                                                                                                     |                 |
| Cursor          | The cursor returned by a previous page, used to fetch the next page.                                                                                                                                                                          |                 |
| Limit           | The maximum number of results to return per page, from 1 to 50.                                                                                                                                                                               |                 |
| Folders         | Only include assets inside one of these folder IDs, at any depth.                                                                                                                                                                             | <code>[]</code> |
| MIME Types      | Only include assets with one of these exact MIME types.                                                                                                                                                                                       | <code>[]</code> |
| Modified After  | Only return assets modified at or after this ISO 8601 date-time.                                                                                                                                                                              |                 |
| Modified Before | Only return assets modified before this ISO 8601 date-time.                                                                                                                                                                                   |                 |
| Filters         | Optional query controls to sort and refine the results.                                                                                                                                                                                       |                 |
| Search Text     | Full-text search across asset metadata. Leave empty to match every asset.                                                                                                                                                                     |                 |
| Sort By         | The field to sort results by. Leave empty to sort by relevance.                                                                                                                                                                               |                 |
| Sort Order      | The direction to sort results in. Used only when Sort By is set.                                                                                                                                                                              | ASC             |

### Search Content Fragments {#searchcontentfragments}

Search content fragments by path, status, model, tag, locale, modified or published date, and text.

| Input                   | Comments                                                                                                                                                                                                                                      | Default         |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection              | The AEM as a Cloud Service connection to use.                                                                                                                                                                                                 |                 |
| Fetch All               | When true, automatically fetches all pages of results using pagination, up to 500 pages of 50. Limit is ignored; when Cursor is set, fetching starts from that page. When more results remain, the output includes a cursor to continue from. | false           |
| Pagination              | Cursor and page-size controls for paging through results.                                                                                                                                                                                     |                 |
| Cursor                  | The cursor returned by a previous page, used to fetch the next page.                                                                                                                                                                          |                 |
| Limit                   | The maximum number of results to return per page, from 1 to 50.                                                                                                                                                                               |                 |
| Path                    | Only return content fragments under this folder path below /content/dam, such as wknd/en/adventures. A full repository path starting with /content/dam is also accepted.                                                                      |                 |
| Only Direct Children    | When true, only returns content fragments directly under Path, not in its subfolders.                                                                                                                                                         | false           |
| Statuses                | Only return content fragments in one of these statuses.                                                                                                                                                                                       | <code>[]</code> |
| Content Fragment Models | Only return content fragments based on one of these model IDs.                                                                                                                                                                                | <code>[]</code> |
| Tags                    | Only return content fragments with at least one of these tag IDs.                                                                                                                                                                             | <code>[]</code> |
| Locales                 | Only return content fragments in one of these locales.                                                                                                                                                                                        | <code>[]</code> |
| Date Range Filters      | Optional date-range filters. Narrow results by when content fragments were last modified or published.                                                                                                                                        |                 |
| Modified After          | Only return content fragments modified after this ISO 8601 date-time.                                                                                                                                                                         |                 |
| Modified Before         | Only return content fragments modified before this ISO 8601 date-time.                                                                                                                                                                        |                 |
| Published After         | Only return content fragments published after this ISO 8601 date-time.                                                                                                                                                                        |                 |
| Published Before        | Only return content fragments published before this ISO 8601 date-time.                                                                                                                                                                       |                 |
| Filters                 | Optional query controls to sort and refine the results.                                                                                                                                                                                       |                 |
| Full Text               | Only return content fragments whose content matches this text.                                                                                                                                                                                |                 |
| Sort By                 | The field to sort results by. Leave empty for the API default order.                                                                                                                                                                          |                 |
| Sort Order              | The direction to sort results in. Used only when Sort By is set.                                                                                                                                                                              | ASC             |
| Projection              | How much of each content fragment to return. Leave empty for the API default.                                                                                                                                                                 |                 |
| Include Metadata        | When true, includes each content fragment's metadata in the response.                                                                                                                                                                         | false           |

### Update Asset Metadata {#updateassetmetadata}

Set or remove asset metadata fields, such as dc:title, on an asset.

| Input            | Comments                                                                                                                         | Default         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection       | The AEM as a Cloud Service connection to use.                                                                                    |                 |
| Asset ID         | The ID of the asset, in urn:aaid:aem:... form.                                                                                   |                 |
| Metadata Values  | Metadata fields to set, keyed by field name such as dc:title. Only asset metadata is writable; repository metadata is read-only. | <code>[]</code> |
| Fields to Remove | Metadata field names to remove from the asset, such as dc:description.                                                           | <code>[]</code> |
