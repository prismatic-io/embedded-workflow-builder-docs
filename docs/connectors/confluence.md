---
title: Confluence Connector
sidebar_label: Confluence
description: Confluence is an open and shared workspace platform provided by Atlassian. Use the Confluence component to manage spaces, pages, and content properties.
---

![Confluence](./assets/confluence.png#connector-icon)
[Confluence](https://www.atlassian.com/es/software/confluence) is an open and shared workspace platform provided by Atlassian. Use the Confluence component to manage spaces, pages, and content properties.

## Connections

### Basic Authentication {#basic}

Basic Authentication connection for Confluence

Basic Authentication can be used to connect to both Confluence Cloud and self-hosted Confluence instances.

- For **Confluence Cloud**: Use the account email and an API token
- For **Self-hosted Confluence**: Use the account email and password

:::info[API Token vs Password]
For Confluence Cloud, API tokens are required. Passwords are only accepted for self-hosted instances.
:::

#### Prerequisites

- A Confluence account (Cloud or self-hosted)
- For Cloud: Access to [Atlassian account management](https://id.atlassian.com/manage-profile/security/api-tokens)
- The Confluence site URL

#### Setup Steps

To generate an API token for Confluence Cloud:

1. Log in to [Atlassian API Token Management](https://id.atlassian.com/manage-profile/security/api-tokens)
2. Select **Create API token**
3. Enter a descriptive **Label** for the token and select **Create**
4. Select **Copy to clipboard** to copy the generated token

For additional information on generating an API token, refer to the [Atlassian documentation](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).

#### Configure the Connection

Add a Confluence action to the integration to automatically create a connection configuration variable.

Configure the Basic Auth connection:

- **Email**: Enter the email address associated with the Confluence account (e.g., `example.user@confluence.com`)
- **API Token**: Enter the API token generated from the Atlassian account management page, or for self-hosted instances, enter the account password
- **Host**: Enter the Confluence site URL (e.g., `your-domain.atlassian.net` for Cloud or the server hostname for self-hosted instances)

:::warning[Self-Hosted Credentials]
For self-hosted Confluence instances, API tokens may not be available. Use the account password instead.
:::

| Input     | Comments                                                                                                                                                         | Default |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Email     | Your Confluence account email address used for authentication.                                                                                                   |         |
| API Token | Your Confluence API token for authentication. Generate this from your [Atlassian account settings](https://id.atlassian.com/manage-profile/security/api-tokens). |         |
| Host      | Your Confluence site URL. Only enter your domain without the protocol.                                                                                           |         |

### OAuth 2.0 {#oauth2}

OAuth 2.0 connection for Confluence

To connect to Confluence using OAuth 2.0, create an OAuth 2.0 integration in the Atlassian Developer Console and configure the appropriate scopes.

For more information on developing Confluence applications, refer to the [Confluence Security Overview](https://developer.atlassian.com/cloud/confluence/security-overview/#oauth-2-0--3lo-).

#### Prerequisites

- An Atlassian account with access to the [Developer Console](https://developer.atlassian.com/console/myapps/)
- Admin access to the Confluence site to be connected

#### Setup Steps

1. Navigate to the Atlassian [Developer Console](https://developer.atlassian.com/console/myapps/) and select **Create** to create a new **OAuth 2.0 (3LO)** integration
2. Provide a name for the integration
3. Under the **Settings** tab, locate the **Client ID** and **Client Secret** values - copy these for later use
4. Navigate to the **Authorization** section and select **Configure** under **OAuth 2.0 (3LO)**
5. Add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as the **Callback URL**
6. Navigate to the **Permissions** section and configure the required scopes:
   - Select the **Confluence API** tab
   - Choose either **Classic scopes** or **Granular scopes** based on requirements
   - Add the necessary scopes for the actions to be used (see scope recommendations below)
7. Save the integration configuration

#### Configure the Connection

Add a Confluence action to the integration to automatically create a connection configuration variable.

Configure the OAuth 2.0 connection:

- Enter the **Client ID** and **Client Secret** obtained from the Atlassian Developer Console
- For **Scopes**, enter the space-separated list of scopes. The default scopes (Granular) provide access to most Confluence actions:
  ```
  offline_access delete:attachment:confluence read:attachment:confluence write:attachment:confluence read:custom-content:confluence write:custom-content:confluence delete:custom-content:confluence read:page:confluence write:page:confluence delete:page:confluence read:space:confluence
  ```
- Refer to the [Confluence Scopes Documentation](https://developer.atlassian.com/cloud/confluence/scopes-for-oauth-2-3LO-and-forge-apps/) for additional scope information
- **(Optional)** If connecting to a specific Confluence site when multiple sites are available, enter the site name or full URL in **API Site Override** (e.g., `example` or `https://example.atlassian.net`)

:::note[Scope Consistency]
Ensure the scopes configured in the connection match the scopes granted in the Atlassian Developer Console. Mismatched scopes will result in authentication failures.
:::

Save the integration to connect and authenticate to Confluence.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                                                                                                                                                                                            | Default                                                                                                                                                                                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authorize URL     | The OAuth 2.0 Authorization URL for Confluence.                                                                                                                                                                     | https://auth.atlassian.com/authorize?audience=api.atlassian.com&prompt=consent                                                                                                                                                                                                             |
| Token URL         | The OAuth 2.0 Token URL for Confluence.                                                                                                                                                                             | https://auth.atlassian.com/oauth/token                                                                                                                                                                                                                                                     |
| Scopes            | A space-delimited set of one or more scopes to get the user's permission to access. See [Confluence OAuth 2.0 Scopes](https://developer.atlassian.com/cloud/confluence/oauth-2-3lo-apps/#scopes) for details.       | offline_access delete:attachment:confluence read:attachment:confluence write:attachment:confluence read:custom-content:confluence write:custom-content:confluence delete:custom-content:confluence read:page:confluence write:page:confluence delete:page:confluence read:space:confluence |
| Client ID         | The OAuth 2.0 Client ID. Obtain this from your Atlassian Developer Console.                                                                                                                                         |                                                                                                                                                                                                                                                                                            |
| Client Secret     | The OAuth 2.0 Client Secret. Obtain this from your Atlassian Developer Console.                                                                                                                                     |                                                                                                                                                                                                                                                                                            |
| API Site Override | By default this connector connects to the first Confluence site this user has access to. If you have multiple Confluence sites, specify which one you would like to connect to using the site name or the full URL. |                                                                                                                                                                                                                                                                                            |

## Triggers

### New and Updated Pages {#pagespollingtrigger}

Checks for new and updated pages on a configured schedule.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Confluence connection to use. |         |

### New Spaces {#newspacespollingtrigger}

Checks for new spaces on a configured schedule.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Confluence connection to use. |         |

## Actions

### Create Content Property for Attachment {#createcontentpropertyforattachment}

Creates a new content property for an attachment.

| Input         | Comments                                       | Default                                                                               |
| ------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| Connection    | The Confluence connection to use.              |                                                                                       |
| Attachment Id | The unique identifier of the attachment.       |                                                                                       |
| Body Data     | The content property data to create or update. | <code>{<br /> "key": "my-property-key",<br /> "value": "property-value"<br />}</code> |

### Create Content Property for Custom Content {#createcontentpropertyforcustomcontent}

Creates a new content property for a Custom Content.

| Input             | Comments                                       | Default                                                                               |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| Connection        | The Confluence connection to use.              |                                                                                       |
| Custom Content Id | The unique identifier of the custom content.   |                                                                                       |
| Body Data         | The content property data to create or update. | <code>{<br /> "key": "my-property-key",<br /> "value": "property-value"<br />}</code> |

### Create Content Property for Page {#createcontentpropertyforpage}

Creates a new content property for a page.

| Input      | Comments                                       | Default                                                                               |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| Connection | The Confluence connection to use.              |                                                                                       |
| Page Id    | The unique identifier of the page.             |                                                                                       |
| Body Data  | The content property data to create or update. | <code>{<br /> "key": "my-property-key",<br /> "value": "property-value"<br />}</code> |

### Create Page {#createpage}

Creates a page in the space.

| Input            | Comments                                                                                                             | Default                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Connection       | The Confluence connection to use.                                                                                    |                                                                                    |
| Space Id         | The unique identifier of the space.                                                                                  |                                                                                    |
| Status           | The status of the page.                                                                                              |                                                                                    |
| Title            | The title of the page.                                                                                               |                                                                                    |
| Parent Id        | The unique identifier of the parent page.                                                                            |                                                                                    |
| Body             | The body of the page.                                                                                                | <code>{<br /> "representation": "storage",<br /> "value": "<string>"<br />}</code> |
| Embedded         | When true, tags the content as embedded and creates content in NCS.                                                  | false                                                                              |
| Private          | When true, the page will be private and only the user who creates the page will have permission to view and edit it. | false                                                                              |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                   |                                                                                    |

### Delete Attachment {#deleteattachment}

Deletes a specific attachment.

| Input         | Comments                                                                     | Default |
| ------------- | ---------------------------------------------------------------------------- | ------- |
| Connection    | The Confluence connection to use.                                            |         |
| Attachment Id | The unique identifier of the attachment.                                     |         |
| Purge         | When true, permanently deletes the attachment instead of moving it to trash. | false   |

### Delete Content Property for a Custom Content {#deletecontentpropertyforcustomcontent}

Deletes a content property for a Custom Content by its id.

| Input             | Comments                                       | Default |
| ----------------- | ---------------------------------------------- | ------- |
| Connection        | The Confluence connection to use.              |         |
| Custom Content Id | The unique identifier of the custom content.   |         |
| Property Id       | The unique identifier of the content property. |         |

### Delete Content Property for an Attachment {#deletecontentpropertyforattachment}

Deletes a content property for an attachment by its id.

| Input         | Comments                                       | Default |
| ------------- | ---------------------------------------------- | ------- |
| Connection    | The Confluence connection to use.              |         |
| Attachment Id | The unique identifier of the attachment.       |         |
| Property Id   | The unique identifier of the content property. |         |

### Delete Content Property for Page {#deletecontentpropertyforpage}

Deletes a content property for a page by its id.

| Input       | Comments                                       | Default |
| ----------- | ---------------------------------------------- | ------- |
| Connection  | The Confluence connection to use.              |         |
| Page Id     | The unique identifier of the page.             |         |
| Property Id | The unique identifier of the content property. |         |

### Delete Page {#deletepage}

Delete a page by id.

| Input      | Comments                                                               | Default |
| ---------- | ---------------------------------------------------------------------- | ------- |
| Connection | The Confluence connection to use.                                      |         |
| Page Id    | The unique identifier of the page.                                     |         |
| Purge      | When true, permanently deletes the page instead of moving it to trash. | false   |
| Draft      | When true, deletes a page that is in draft status.                     | false   |

### Get Attachment {#getattachment}

Returns a specific attachment.

| Input            | Comments                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection       | The Confluence connection to use.                                                  |         |
| Attachment Id    | The unique identifier of the attachment.                                           |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true |         |

### Get Attachments for Page {#getpageattachment}

Returns the attachments of specific page.

| Input            | Comments                                                                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Confluence connection to use.                                                                                                                                                  |         |
| Page Id          | The unique identifier of the page.                                                                                                                                                 |         |
| Limit            | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor           | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |

### Get Content Properties for Custom Content {#getcontentpropertiesforcustomcontent}

Retrieves a specific Content Property by ID that is attached to a specified custom content.

| Input             | Comments                                       | Default |
| ----------------- | ---------------------------------------------- | ------- |
| Connection        | The Confluence connection to use.              |         |
| Custom Content Id | The unique identifier of the custom content.   |         |
| Property Id       | The unique identifier of the content property. |         |

### Get Content Property for Attachment {#getcontentpropertiesforattachments}

Retrieves a specific Content Property by ID that is attached to a specified attachment.

| Input         | Comments                                       | Default |
| ------------- | ---------------------------------------------- | ------- |
| Connection    | The Confluence connection to use.              |         |
| Attachment Id | The unique identifier of the attachment.       |         |
| Property Id   | The unique identifier of the content property. |         |

### Get Content Property for Page {#getcontentpropertiesforpage}

Retrieves a specific Content Property by ID that is attached to a specified page.

| Input       | Comments                                       | Default |
| ----------- | ---------------------------------------------- | ------- |
| Connection  | The Confluence connection to use.              |         |
| Page Id     | The unique identifier of the page.             |         |
| Property Id | The unique identifier of the content property. |         |

### Get Page {#getpage}

Returns a specific Page.

| Input                                    | Comments                                                                                                                                                            | Default |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                               | The Confluence connection to use.                                                                                                                                   |         |
| Page Id                                  | The unique identifier of the page.                                                                                                                                  |         |
| Body Format                              | The content format types to be returned in the body field of the response.                                                                                          |         |
| Get Draft                                | Retrieve the draft version of this page.                                                                                                                            |         |
| Version                                  | Allows you to retrieve a previously published version. Specify the previous version's number to retrieve its details.                                               |         |
| Include Labels                           | When true, includes labels associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.             | false   |
| Include Properties                       | When true, includes content properties associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order. | false   |
| Include Operations                       | When true, includes operations associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.         | false   |
| Include Likes                            | When true, includes likes associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.              | false   |
| Include Versions                         | When true, includes versions associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.           | false   |
| Include Version                          | When true, includes the current version associated with this page in the response.                                                                                  | true    |
| Include Favorited By Current User Status | When true, includes whether this page has been favorited by the current user.                                                                                       | false   |

### Get Space {#getspace}

Returns a specific space.

| Input            | Comments                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection       | The Confluence connection to use.                                                  |         |
| Space Id         | The unique identifier of the space.                                                |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true |         |

### List Attachments {#listattachments}

Returns all attachments.

| Input            | Comments                                                                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Confluence connection to use.                                                                                                                                                  |         |
| Fetch All        | When enabled, fetches all results by automatically paginating through all pages. When disabled, returns a single page of results.                                                  | false   |
| Limit            | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor           | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |

### List Content Properties for Attachments {#listcontentpropertiesforattachments}

Retrieves all Content Properties tied to a specified attachment.

| Input            | Comments                                                                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Confluence connection to use.                                                                                                                                                  |         |
| Attachment Id    | The unique identifier of the attachment.                                                                                                                                           |         |
| Fetch All        | When enabled, fetches all results by automatically paginating through all pages. When disabled, returns a single page of results.                                                  | false   |
| Limit            | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor           | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Sort             | Used to sort the result by a particular field.                                                                                                                                     |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |

### List Content Properties for Custom Content {#listcontentpropertiesforcustomcontent}

Retrieves Content Properties tied to a specified Custom Content.

| Input             | Comments                                                                                                                                                                           | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Confluence connection to use.                                                                                                                                                  |         |
| Custom Content Id | The unique identifier of the custom content.                                                                                                                                       |         |
| Fetch All         | When enabled, fetches all results by automatically paginating through all pages. When disabled, returns a single page of results.                                                  | false   |
| Limit             | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor            | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Sort              | Used to sort the result by a particular field.                                                                                                                                     |         |
| Query Parameters  | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |

### List Content Properties for Page {#listcontentpropertiesforpage}

Retrieves Content Properties tied to a specified page.

| Input            | Comments                                                                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Confluence connection to use.                                                                                                                                                  |         |
| Page Id          | The unique identifier of the page.                                                                                                                                                 |         |
| Fetch All        | When enabled, fetches all results by automatically paginating through all pages. When disabled, returns a single page of results.                                                  | false   |
| Limit            | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor           | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Sort             | Used to sort the result by a particular field.                                                                                                                                     |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |

### List Pages {#listpages}

Returns all pages.

| Input       | Comments                                                                                                                                                                           | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Confluence connection to use.                                                                                                                                                  |         |
| Fetch All   | When enabled, fetches all results by automatically paginating through all pages. When disabled, returns a single page of results.                                                  | false   |
| Limit       | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor      | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Id          | Filter the results based on page IDs. Multiple page IDs can be specified as a comma-separated list.                                                                                |         |
| Space Id    | Filter the results based on space IDs. Multiple space IDs can be specified as a comma-separated list.                                                                              |         |
| Sort        | Used to sort the result by a particular field.                                                                                                                                     |         |
| Status      | Filter the results to pages based on their status. By default, current and archived are used. Valid values: current, archived, deleted, trashed                                    |         |
| Title       | Filter the results to pages based on their title.                                                                                                                                  |         |
| Body Format | The content format types to be returned in the body field of the response.                                                                                                         |         |

### List Pages in Space {#listpagesinspace}

Returns all pages in a space.

| Input       | Comments                                                                                                                                                                           | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  | The Confluence connection to use.                                                                                                                                                  |         |
| Space Id    | The unique identifier of the space.                                                                                                                                                |         |
| Fetch All   | When enabled, fetches all results by automatically paginating through all pages. When disabled, returns a single page of results.                                                  | false   |
| Depth       | Filter the results to pages at the root level of the space or to all pages in the space.                                                                                           |         |
| Sort        | Used to sort the result by a particular field.                                                                                                                                     |         |
| Status      | The status of the page.                                                                                                                                                            |         |
| Title       | Filter the results to pages based on their title.                                                                                                                                  |         |
| Body Format | The content format types to be returned in the body field of the response.                                                                                                         |         |
| Limit       | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor      | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |

### List Spaces {#listspaces}

Returns all spaces.

| Input            | Comments                                                                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Confluence connection to use.                                                                                                                                                  |         |
| Fetch All        | When enabled, fetches all results by automatically paginating through all pages. When disabled, returns a single page of results.                                                  | false   |
| Limit            | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor           | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |

### Raw GraphQL Request {#graphqlrequest}

Send raw GraphQL request to Confluence

| Input             | Comments                                       | Default                                                                                                                                                                                                 |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        | The Confluence connection to use.              |                                                                                                                                                                                                         |
| Query or Mutation |                                                | query ($customerName: String!) {<br />    customers(name: $customerName) {<br /> nodes {<br /> id<br /> labels<br /> users {<br /> nodes {<br /> id<br /> email<br /> }<br /> }<br /> }<br /> }<br /> } |
| Variables         | Variables to pass in to your query or mutation |                                                                                                                                                                                                         |
| Headers           | Custom headers to send along with your request |                                                                                                                                                                                                         |

### Raw Request {#rawrequest}

Send raw HTTP request to Confluence

| Input                   | Comments                                                                                                                                                                                                                                                            | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Confluence connection to use.                                                                                                                                                                                                                                   |         |
| URL                     | Input the path only (/wiki/api/v2/attachments/attachments), The base URL is already included (https://{your-domain}). For example, to connect to https://{your-domain}/wiki/api/v2/attachments, only /wiki/api/v2/attachments/attachments is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                             |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                           |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                    |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                 |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                         |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                            | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                 |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                 | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                    | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                 | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                       | false   |

### Update Content Property for Attachment {#updatecontentpropertyforattachment}

Update a content property for attachment by its id.

| Input         | Comments                                       | Default                                                                                                                                              |
| ------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    | The Confluence connection to use.              |                                                                                                                                                      |
| Attachment Id | The unique identifier of the attachment.       |                                                                                                                                                      |
| Property Id   | The unique identifier of the content property. |                                                                                                                                                      |
| Body Data     | The content property data to create or update. | <code>{<br /> "key": "<string>",<br /> "value": "<string>",<br /> "version": {<br /> "number": 84,<br /> "message": "<string>"<br /> }<br />}</code> |

### Update Content Property for Custom Content {#updatecontentpropertyforcustomcontent}

Update a content property for a Custom Content by its id.

| Input             | Comments                                       | Default                                                                                                                                              |
| ----------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        | The Confluence connection to use.              |                                                                                                                                                      |
| Custom Content Id | The unique identifier of the custom content.   |                                                                                                                                                      |
| Property Id       | The unique identifier of the content property. |                                                                                                                                                      |
| Body Data         | The content property data to create or update. | <code>{<br /> "key": "<string>",<br /> "value": "<string>",<br /> "version": {<br /> "number": 84,<br /> "message": "<string>"<br /> }<br />}</code> |

### Update Content Property for Page {#updatecontentpropertyforpage}

Update a content property for a page by its id.

| Input       | Comments                                       | Default                                                                                                                                              |
| ----------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection  | The Confluence connection to use.              |                                                                                                                                                      |
| Page Id     | The unique identifier of the page.             |                                                                                                                                                      |
| Property Id | The unique identifier of the content property. |                                                                                                                                                      |
| Body Data   | The content property data to create or update. | <code>{<br /> "key": "<string>",<br /> "value": "<string>",<br /> "version": {<br /> "number": 84,<br /> "message": "<string>"<br /> }<br />}</code> |

### Update Page {#updatepage}

Update a page by id.

| Input      | Comments                                  | Default                                                                            |
| ---------- | ----------------------------------------- | ---------------------------------------------------------------------------------- |
| Connection | The Confluence connection to use.         |                                                                                    |
| Page Id    | The unique identifier of the page.        |                                                                                    |
| Status     | The status of the page.                   |                                                                                    |
| Title      | The title of the page.                    |                                                                                    |
| Body       | The body of the page.                     | <code>{<br /> "representation": "storage",<br /> "value": "<string>"<br />}</code> |
| Version    | The version of the page.                  | <code>{<br /> "number": 47,<br /> "message": "<string>"<br />}</code>              |
| Space Id   | The unique identifier of the space.       |                                                                                    |
| Parent Id  | The unique identifier of the parent page. |                                                                                    |
