---
title: Confluence Connector
sidebar_label: Confluence
description: Confluence is an open and shared workspace platform provided by Atlassian. Use the Confluence component to manage spaces, pages, and content properties.
---

![Confluence](./assets/confluence.png#connector-icon)
Confluence is an open and shared workspace platform provided by Atlassian. Use the Confluence component to manage spaces, pages, and content properties.

## Connections

### Confluence Basic

Confluence Basic

If you select Basic Auth and you are using Confluence cloud, you will need to supply your Confluence email and an API token to the connection. If you are on a locally hosted instance of Confluence, you will need to supply your Confluence email and password to the connection.

1. Log in to [Atlassian](https://id.atlassian.com/manage-profile/security/api-tokens).
2. Click Create API token.
3. From the dialog that appears, enter a memorable and concise Label for your token and click Create.
4. Click Copy to clipboard, then paste the token to the connection configuration of your integration.

For additional information on generating an API token from Confluence Cloud, refer to the [Atlassian docs](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).

| Input     | Comments                                                                                                          | Default |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Email     | Provide a valid email for the given Confluence account you want to connect.                                       |         |
| API Token | Provide an api token to authenticate all requests with. Cloud users need to generate an API token for this value. |         |
| Host      | Provide a string value for the URL of your Confluence account.                                                    |         |

### Confluence OAuth 2.0

Confluence OAuth 2.0

1. Navigate to the Atlassian [Developer Console](https://developer.atlassian.com/console/myapps/) and create a new **Oauth 2.0 integration** and give it a name. Under the app details section, take note of your client Id and client secret values that were generated.
1. After you have saved those values, find the Authorization section and click configure on Oauth 2.0 (3LO).
   There you will be prompted to enter your **Redirect URL** `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
1. Next navigate to the permissions.
   It is important that you remain consistent with the scopes you supply in both Confluence, and your connection.

The default scopes on a new connection will be as follows (Classic Scopes):
`read:confluence-user` `read:confluence-space.summary read:confluence-props` `read:confluence-content.all` `read:confluence-content.summary` `read:confluence-content.permission` `read:confluence-groups readonly:content.attachment:confluence` `write:confluence-content` `write:confluence-spacewrite:confluence-file` `write:confluence-props` `manage:confluence-configuration` `search:confluence write:confluence-groups`
These scopes will provide access to the most of the actions in the Component component, but you may have to modify the scopes in both locations (here and Atlassian Developer Console) to meet your needs.

For more information on developing Confluence applications, follow the guide [here.](https://developer.atlassian.com/cloud/confluence/security-overview/#oauth-2-0--3lo-) Next, you can configure an OAuth 2.0 connection.

Add a Confluence step to your integration. This will automatically create a Confluence connection config variable.

Ensure the connection is of type `Confluence OAuth 2.0 Connection` and enter the following details:

- For **Client ID** and **Client Secret** enter the values that you got from the Atlassian Developer Console
- As stated previously **Scopes** will default to the following:
  `read:confluence-user` `read:confluence-space.summary read:confluence-props` `read:confluence-content.all` `read:confluence-content.summary` `read:confluence-content.permission` `read:confluence-groups readonly:content.attachment:confluence` `write:confluence-content` `write:confluence-spacewrite:confluence-file` `write:confluence-props` `manage:confluence-configuration` `search:confluence write:confluence-groups`
- From here you can do any [additional configuration](https://developer.atlassian.com/cloud/confluence/scopes-for-oauth-2-3LO-and-forge-apps/) to match your use case using the Granular scopes tab.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input             | Comments                                                                                                                                                                                                                          | Default                                                                                                                                                                                                                                                                                    |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authorize URL     | The OAuth 2.0 Authorization URL for Confluence                                                                                                                                                                                    | https://auth.atlassian.com/authorize?audience=api.atlassian.com&prompt=consent                                                                                                                                                                                                             |
| Token URL         | The OAuth 2.0 Token URL for Confluence                                                                                                                                                                                            | https://auth.atlassian.com/oauth/token                                                                                                                                                                                                                                                     |
| Scopes            | A space-delimited set of one or more scopes to get the user's permission to access.                                                                                                                                               | offline_access delete:attachment:confluence read:attachment:confluence write:attachment:confluence read:custom-content:confluence write:custom-content:confluence delete:custom-content:confluence read:page:confluence write:page:confluence delete:page:confluence read:space:confluence |
| Client ID         |                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                            |
| Client Secret     |                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                            |
| API Site Override | By default this connector connects to the first Confluence site this user has access to. If you have multiple Confluence sites, please specify which one you would like to connect to, you can use the site name or the full url. |                                                                                                                                                                                                                                                                                            |

## Actions

### Create Content Property for Attachment

Creates a new content property for an attachment.

| Input         | Comments                                             | Default                                                                  |
| ------------- | ---------------------------------------------------- | ------------------------------------------------------------------------ |
| Connection    |                                                      |                                                                          |
| Attachment Id | The Attachment Id.                                   |                                                                          |
| Body Data     | The list of settings for this Function.              | <code>{<br /> "key": "<string>",<br /> "value": "<string>"<br />}</code> |
| Debug Request | Enabling this flag will log out the current request. | false                                                                    |

### Create Content Property for Custom Content

Creates a new content property for a Custom Content.

| Input             | Comments                                             | Default                                                                  |
| ----------------- | ---------------------------------------------------- | ------------------------------------------------------------------------ |
| Connection        |                                                      |                                                                          |
| Custom Content Id | The Custom Content Id.                               |                                                                          |
| Body Data         | The list of settings for this Function.              | <code>{<br /> "key": "<string>",<br /> "value": "<string>"<br />}</code> |
| Debug Request     | Enabling this flag will log out the current request. | false                                                                    |

### Create Content Property for Page

Creates a new content property for a page.

| Input         | Comments                                             | Default                                                                  |
| ------------- | ---------------------------------------------------- | ------------------------------------------------------------------------ |
| Connection    |                                                      |                                                                          |
| Page Id       | The Page Id.                                         |                                                                          |
| Body Data     | The list of settings for this Function.              | <code>{<br /> "key": "<string>",<br /> "value": "<string>"<br />}</code> |
| Debug Request | Enabling this flag will log out the current request. | false                                                                    |

### Create Page

Creates a page in the space.

| Input            | Comments                                                                                                 | Default                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Connection       |                                                                                                          |                                                                                    |
| Space Id         | The Space Id.                                                                                            |                                                                                    |
| Status           | The status of the page.                                                                                  |                                                                                    |
| Title            | Title of the page.                                                                                       |                                                                                    |
| Parent Id        | The parent id.                                                                                           |                                                                                    |
| Body             | The body of the page.                                                                                    | <code>{<br /> "representation": "storage",<br /> "value": "<string>"<br />}</code> |
| Embedded         | Tag the content as embedded and content will be created in NCS.                                          | false                                                                              |
| Private          | The page will be private. Only the user who creates this page will have permission to view and edit one. | false                                                                              |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                       |                                                                                    |
| Debug Request    | Enabling this flag will log out the current request.                                                     | false                                                                              |

### Delete Attachment

Deletes a specific attachment.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Attachment Id | The Attachment Id.                                   |         |
| Purge         | If attempting to purge the attachment.               | false   |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Content Property for a Custom Content

Deletes a content property for a Custom Content by its id.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        |                                                      |         |
| Custom Content Id | The Custom Content Id.                               |         |
| Property Id       | The ID of the content property to be returned.       |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Delete Content Property for an Attachment

Deletes a content property for an attachment by its id.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Attachment Id | The Attachment Id.                                   |         |
| Property Id   | The ID of the content property to be returned.       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Content Property for Page

Deletes a content property for a page by its id.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Page Id       | The Page Id.                                         |         |
| Property Id   | The ID of the content property to be returned.       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Page

Delete a page by id.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Page Id       | The Page Id.                                         |         |
| Purge         | If attempting to purge the page.                     | false   |
| Draft         | If attempting to delete a page that is a draft.      | false   |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Attachment

Returns a specific attachment.

| Input            | Comments                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                    |         |
| Attachment Id    | The Attachment Id.                                                                 |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true |         |
| Debug Request    | Enabling this flag will log out the current request.                               | false   |

### Get Attachments for Page

Returns the attachments of specific page.

| Input            | Comments                                                                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                    |         |
| Page Id          | The Page Id.                                                                                                                                                                       |         |
| Limit            | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor           | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                                                               | false   |

### Get Content Properties for Custom Content

Retrieves a specific Content Property by ID that is attached to a specified custom content.

| Input             | Comments                                             | Default |
| ----------------- | ---------------------------------------------------- | ------- |
| Connection        |                                                      |         |
| Custom Content Id | The Custom Content Id.                               |         |
| Property Id       | The ID of the content property to be returned.       |         |
| Debug Request     | Enabling this flag will log out the current request. | false   |

### Get Content Property for Attachment

Retrieves a specific Content Property by ID that is attached to a specified attachment.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Attachment Id | The Attachment Id.                                   |         |
| Property Id   | The ID of the content property to be returned.       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Content Property for Page

Retrieves a specific Content Property by ID that is attached to a specified page.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Page Id       | The Page Id.                                         |         |
| Property Id   | The ID of the content property to be returned.       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Page

Returns a specific Page.

| Input                                    | Comments                                                                                                                                                 | Default |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                               |                                                                                                                                                          |         |
| Page Id                                  | The Page Id.                                                                                                                                             |         |
| Body Format                              | The content format types to be returned in the body field of the response.                                                                               |         |
| Get Draft                                | Retrieve the draft version of this page.                                                                                                                 |         |
| Version                                  | Allows you to retrieve a previously published version. Specify the previous version's number to retrieve its details.                                    |         |
| Include Labels                           | Includes labels associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.             | false   |
| Include Properties                       | Includes content properties associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order. | false   |
| Include Operations                       | Includes operations associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.         | false   |
| Include Likes                            | Includes likes associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.              | false   |
| Include Versions                         | Includes versions associated with this page in the response. The number of results will be limited to 50 and sorted in the default sort order.           | false   |
| Include Version                          | Includes the current version associated with this page in the response.                                                                                  | true    |
| Include Favorited By Current User Status | Includes whether this page has been favorited by the current user.                                                                                       | false   |
| Debug Request                            | Enabling this flag will log out the current request.                                                                                                     | false   |

### Get Space

Returns a specific space.

| Input            | Comments                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                    |         |
| Space Id         | The Space Id.                                                                      |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true |         |
| Debug Request    | Enabling this flag will log out the current request.                               | false   |

### List Attachments

Returns all attachments.

| Input            | Comments                                                                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                    |         |
| Limit            | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor           | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                                                               | false   |

### List Content Properties for Attachments

Retrieves all Content Properties tied to a specified attachment.

| Input            | Comments                                                                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                    |         |
| Attachment Id    | The Attachment Id.                                                                                                                                                                 |         |
| Limit            | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor           | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Sort             | Used to sort the result by a particular field.                                                                                                                                     |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                                                               | false   |

### List Content Properties for Custom Content

Retrieves Content Properties tied to a specified Custom Content.

| Input             | Comments                                                                                                                                                                           | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        |                                                                                                                                                                                    |         |
| Custom Content Id | The Custom Content Id.                                                                                                                                                             |         |
| Limit             | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor            | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Sort              | Used to sort the result by a particular field.                                                                                                                                     |         |
| Query Parameters  | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |
| Debug Request     | Enabling this flag will log out the current request.                                                                                                                               | false   |

### List Content Properties for Page

Retrieves Content Properties tied to a specified page.

| Input            | Comments                                                                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                    |         |
| Page Id          | The Page Id.                                                                                                                                                                       |         |
| Limit            | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor           | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Sort             | Used to sort the result by a particular field.                                                                                                                                     |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                                                               | false   |

### List Pages

Returns all pages.

| Input         | Comments                                                                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                    |         |
| Limit         | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor        | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Id            | Filter the results based on page ids. Multiple page ids can be specified as a comma-separated list.                                                                                |         |
| Space Id      | Filter the results based on space ids. Multiple space ids can be specified as a comma-separated list.                                                                              |         |
| Sort          | Used to sort the result by a particular field.                                                                                                                                     |         |
| Status        | Filter the results to pages based on their status. By default, current and archived are used. Valid values: current, archived, deleted, trashed                                    |         |
| Title         | Filter the results to pages based on their title.                                                                                                                                  |         |
| Body Format   | The content format types to be returned in the body field of the response.                                                                                                         |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                               | false   |

### List Pages in Space

Returns all pages in a space.

| Input         | Comments                                                                                                                                                                           | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                                                                                                    |         |
| Space Id      | The Space Id.                                                                                                                                                                      |         |
| Depth         | Filter the results to pages at the root level of the space or to all pages in the space.                                                                                           |         |
| Sort          | Used to sort the result by a particular field.                                                                                                                                     |         |
| Status        | The status of the page.                                                                                                                                                            |         |
| Title         | Filter the results to pages based on their title.                                                                                                                                  |         |
| Body Format   | The content format types to be returned in the body field of the response.                                                                                                         |         |
| Limit         | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor        | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Debug Request | Enabling this flag will log out the current request.                                                                                                                               | false   |

### List Spaces

Returns all spaces.

| Input            | Comments                                                                                                                                                                           | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                    |         |
| Limit            | Maximum number of pages per result to return. If more results exist, use the Link header to retrieve a relative URL that will return the next set of results.                      | 25      |
| Cursor           | Used for pagination, this opaque cursor will be returned in the next URL in the Link response header. Use the relative URL in the Link header to retrieve the next set of results. |         |
| Query Parameters | Query parameters to pass in to your request. Ex. Key: include-versions Value: true                                                                                                 |         |
| Debug Request    | Enabling this flag will log out the current request.                                                                                                                               | false   |

### Raw GraphQL Request

Send raw GraphQL request to Confluence

| Input             | Comments                                                                                | Default                                                                                                                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        |                                                                                         |                                                                                                                                                                                                      |
| Query or Mutation |                                                                                         | query ($customerName: String!) {<br /> customers(name: $customerName) {<br /> nodes {<br /> id<br /> labels<br /> users {<br /> nodes {<br /> id<br /> email<br /> }<br /> }<br /> }<br /> }<br /> } |
| Variables         | Variables to pass in to your query or mutation                                          |                                                                                                                                                                                                      |
| Headers           | Custom headers to send along with your request                                          |                                                                                                                                                                                                      |
| Debug Request     | When true, the entire request and response (including auth headers) will be logged out. | false                                                                                                                                                                                                |

### Raw Request

Send raw HTTP request to Confluence

| Input                   | Comments                                                                                                                                                                                                                                                            | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                     |         |
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
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                 | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                    | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                 | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                       | false   |

### Update Content Property for Attachment

Update a content property for attachment by its id.

| Input         | Comments                                             | Default                                                                                                                                              |
| ------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                      |                                                                                                                                                      |
| Attachment Id | The Attachment Id.                                   |                                                                                                                                                      |
| Property Id   | The ID of the content property to be returned.       |                                                                                                                                                      |
| Body Data     | The list of settings for this Function.              | <code>{<br /> "key": "<string>",<br /> "value": "<string>",<br /> "version": {<br /> "number": 84,<br /> "message": "<string>"<br /> }<br />}</code> |
| Debug Request | Enabling this flag will log out the current request. | false                                                                                                                                                |

### Update Content Property for Custom Content

Update a content property for a Custom Content by its id.

| Input             | Comments                                             | Default                                                                                                                                              |
| ----------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        |                                                      |                                                                                                                                                      |
| Custom Content Id | The Custom Content Id.                               |                                                                                                                                                      |
| Property Id       | The ID of the content property to be returned.       |                                                                                                                                                      |
| Body Data         | The list of settings for this Function.              | <code>{<br /> "key": "<string>",<br /> "value": "<string>",<br /> "version": {<br /> "number": 84,<br /> "message": "<string>"<br /> }<br />}</code> |
| Debug Request     | Enabling this flag will log out the current request. | false                                                                                                                                                |

### Update Content Property for Page

Update a content property for a page by its id.

| Input         | Comments                                             | Default                                                                                                                                              |
| ------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                      |                                                                                                                                                      |
| Page Id       | The Page Id.                                         |                                                                                                                                                      |
| Property Id   | The ID of the content property to be returned.       |                                                                                                                                                      |
| Body Data     | The list of settings for this Function.              | <code>{<br /> "key": "<string>",<br /> "value": "<string>",<br /> "version": {<br /> "number": 84,<br /> "message": "<string>"<br /> }<br />}</code> |
| Debug Request | Enabling this flag will log out the current request. | false                                                                                                                                                |

### Update Page

Update a page by id.

| Input         | Comments                                             | Default                                                                            |
| ------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Connection    |                                                      |                                                                                    |
| Page Id       | The Page Id.                                         |                                                                                    |
| Status        | The status of the page.                              |                                                                                    |
| Title         | Title of the page.                                   |                                                                                    |
| Body          | The body of the page.                                | <code>{<br /> "representation": "storage",<br /> "value": "<string>"<br />}</code> |
| Version       | The version of the page.                             | <code>{<br /> "number": 47,<br /> "message": "<string>"<br />}</code>              |
| Space Id      | The Space Id.                                        |                                                                                    |
| Parent Id     | The parent id.                                       |                                                                                    |
| Debug Request | Enabling this flag will log out the current request. | false                                                                              |
