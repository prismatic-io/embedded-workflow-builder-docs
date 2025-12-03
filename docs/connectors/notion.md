---
title: Notion Connector
sidebar_label: Notion
description: Manage Notion pages, databases, and users
---

![Notion](./assets/notion.png#connector-icon)
Manage Notion pages, databases, and users

## Connections

### Internal Integration Secret

Connect to Notion using an Internal Integration Secret

To create an internal integration for Notion, you'll set up a private integration that works within the own workspace.

1. Visit [notion.so/my-integrations](https://notion.so/my-integrations) and log into Notion
2. Click **Create new integration**
3. Fill in the integration details:
4. Under **Capabilities**, select the permissions needed:
   - **Read content**: To read pages, databases, and other content
   - **Update content**: To modify existing content
   - **Insert content**: To create new content
5. Under **Content Capabilities**, choose specific content types if needed
6. Save the integration settings

#### Get the Integration Token:

1. In the **Secrets** tab, copy the **Internal Integration Token**
2. Enter this token when configuring the Notion connection

#### Connect to Content:

After creating the integration, you'll need to connect it to specific pages or databases:

1. Go to the Notion page or database you want to access
2. Click the **...** menu in the top right corner
3. Select **Connect to** and choose the integration
4. The integration will now have access to that content based on the capabilities you selected

| Input                       | Comments                                | Default |
| --------------------------- | --------------------------------------- | ------- |
| Internal Integration Secret | Your Notion Internal Integration Secret |         |

### OAuth 2.0

Connect to Notion via OAuth 2.0

To create an OAuth 2.0 integration for Notion, you'll set up a public integration that allows users to authenticate with their Notion workspaces.

1. Visit [notion.so/my-integrations](https://notion.so/my-integrations) and log into Notion
2. Click **Create new integration**
3. Fill in the integration details:
4. Under **Capabilities**, select the permissions needed:
   - **Read content**: To read pages, databases, and other content
   - **Update content**: To modify existing content
   - **Insert content**: To create new content
5. Under **Content Capabilities**, choose specific content types if needed
6. Save the integration settings

#### Configure OAuth Settings:

1. Navigate to the **Distribution** page in the integration settings
2. Select **Public integration** to enable OAuth
3. Add the callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
4. Configure additional OAuth settings as needed

#### Get OAuth Credentials:

1. In the **Secrets** tab, find the OAuth credentials:
   - **OAuth client ID**: Copy this value
   - **OAuth client secret**: Copy this value
2. Enter these values when you add a Notion connection to the flow

#### User Authorization Flow:

When users connect their Notion workspace:

1. They'll be redirected to Notion's OAuth authorization page
2. Users select which pages/databases to share with the integration
3. After authorization, the integration will have access to the selected content based on the capabilities you configured

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                  | Default |
| ------------- | ----------------------------------------- | ------- |
| Client ID     | Client Identifier of your app for the API |         |
| Client Secret | Client Secret of your app for the API     |         |

## Actions

### Create Database

Creates a database as a subpage in the specified parent page, with the specified properties schema. Currently, the parent of a new database must be a Notion page or a wiki database.

| Input      | Comments                                                                                    | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection |                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Parent     | A page parent                                                                               | <code>{<br /> "database_id": "d9824bdc84454327be8b5b47500af6ce"<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Title      | Title of database as it appears in Notion.                                                  | <code>[<br /> {<br /> "type": "text",<br /> "text": {<br /> "content": "Some words ",<br /> "link": null<br /> },<br /> "annotations": {<br /> "bold": false,<br /> "italic": false,<br /> "strikethrough": false,<br /> "underline": false,<br /> "code": false,<br /> "color": "default"<br /> },<br /> "plain_text": "Some words ",<br /> "href": null<br /> }<br />]</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Properties | Property schema of database. The keys are the names of properties as they appear in Notion. | <code>{<br /> "Name": {<br /> "title": {}<br /> },<br /> "Description": {<br /> "rich_text": {}<br /> },<br /> "In stock": {<br /> "checkbox": {}<br /> },<br /> "Food group": {<br /> "select": {<br /> "options": [<br /> {<br /> "name": "🥦Vegetable",<br /> "color": "green"<br /> },<br /> {<br /> "name": "🍎Fruit",<br /> "color": "red"<br /> },<br /> {<br /> "name": "💪Protein",<br /> "color": "yellow"<br /> }<br /> ]<br /> }<br /> },<br /> "Price": {<br /> "number": {<br /> "format": "dollar"<br /> }<br /> },<br /> "Last ordered": {<br /> "date": {}<br /> },<br /> "Meals": {<br /> "relation": {<br /> "database_id": "668d797c-76fa-4934-9b05-ad288df2d136",<br /> "single_property": {}<br /> }<br /> },<br /> "Number of meals": {<br /> "rollup": {<br /> "rollup_property_name": "Name",<br /> "relation_property_name": "Meals",<br /> "function": "count"<br /> }<br /> },<br /> "Store availability": {<br /> "type": "multi_select",<br /> "multi_select": {<br /> "options": [<br /> {<br /> "name": "Duc Loi Market",<br /> "color": "blue"<br /> },<br /> {<br /> "name": "Rainbow Grocery",<br /> "color": "gray"<br /> },<br /> {<br /> "name": "Nijiya Market",<br /> "color": "purple"<br /> },<br /> {<br /> "name": "Gus'''s Community Market",<br /> "color": "yellow"<br /> }<br /> ]<br /> }<br /> },<br /> "+1": {<br /> "people": {}<br /> },<br /> "Photo": {<br /> "files": {}<br /> }<br />}</code> |

### Create Database Item

Creates an Item on a database.

| Input       | Comments                                                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection  |                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Parent      | The parent database where the new page is inserted, represented as a JSON object with a database_id key, and the corresponding ID.                                                               | <code>{<br /> "database_id": "d9824bdc84454327be8b5b47500af6ce"<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Properties  | The values of the page's properties. If the parent is a database, then the schema must match the parent database's properties. If the parent is a page, then the only valid object key is title. | <code>{<br /> "Name": {<br /> "title": [<br /> {<br /> "text": {<br /> "content": "Tuscan kale"<br /> }<br /> }<br /> ]<br /> },<br /> "Description": {<br /> "rich_text": [<br /> {<br /> "text": {<br /> "content": "A dark green leafy vegetable"<br /> }<br /> }<br /> ]<br /> },<br /> "Food group": {<br /> "select": {<br /> "name": "🥬 Vegetable"<br /> }<br /> }<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                       |
| Children    | The content to be rendered on the new page, represented as an array of block objects. https://developers.notion.com/reference/block                                                              | <code>[<br /> {<br /> "object": "block",<br /> "heading_2": {<br /> "rich_text": [<br /> {<br /> "text": {<br /> "content": "Lacinato kale"<br /> }<br /> }<br /> ]<br /> }<br /> },<br /> {<br /> "object": "block",<br /> "paragraph": {<br /> "rich_text": [<br /> {<br /> "text": {<br /> "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",<br /> "link": {<br /> "url": "https://en.wikipedia.org/wiki/Lacinato_kale"<br /> }<br /> },<br /> "href": "https://en.wikipedia.org/wiki/Lacinato_kale"<br /> }<br /> ],<br /> "color": "default"<br /> }<br /> }<br />]</code> |
| Icon        | The icon of the new page. Either an emoji object (https://developers.notion.com/reference/emoji-object) or an external file object (https://developers.notion.com/reference/file-object)         | <code>{<br /> "type": "external",<br /> "external": {<br /> "url": "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"<br /> }<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Cover Image | The cover image of the new page, represented as a file object.                                                                                                                                   | <code>{<br /> "type": "file",<br /> "file": {<br /> "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7b8b0713-dbd4-4962-b38b-955b6c49a573/My_test_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221024T205211Z&X-Amz-Expires=3600&X-Amz-Signature=208aa971577ff05e75e68354e8a9488697288ff3fb3879c2d599433a7625bf90&X-Amz-SignedHeaders=host&x-id=GetObject",<br /> "expiry_time": "2022-10-24T22:49:22.765Z"<br /> }<br />}</code>                                                                                                                                                                                         |

### Create Page

Creates a new page that is a child of an existing page or database.

| Input       | Comments                                                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection  |                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Parent      | The parent page where the new page is inserted, represented as a JSON object with a page_id and the corresponding ID.                                                                            | <code>{<br /> "page_id": "d9824bdc84454327be8b5b47500af6ce"<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Properties  | The values of the page's properties. If the parent is a database, then the schema must match the parent database's properties. If the parent is a page, then the only valid object key is title. | <code>{<br /> "Name": {<br /> "title": [<br /> {<br /> "text": {<br /> "content": "Tuscan kale"<br /> }<br /> }<br /> ]<br /> },<br /> "Description": {<br /> "rich_text": [<br /> {<br /> "text": {<br /> "content": "A dark green leafy vegetable"<br /> }<br /> }<br /> ]<br /> },<br /> "Food group": {<br /> "select": {<br /> "name": "🥬 Vegetable"<br /> }<br /> }<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                       |
| Children    | The content to be rendered on the new page, represented as an array of block objects. https://developers.notion.com/reference/block                                                              | <code>[<br /> {<br /> "object": "block",<br /> "heading_2": {<br /> "rich_text": [<br /> {<br /> "text": {<br /> "content": "Lacinato kale"<br /> }<br /> }<br /> ]<br /> }<br /> },<br /> {<br /> "object": "block",<br /> "paragraph": {<br /> "rich_text": [<br /> {<br /> "text": {<br /> "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",<br /> "link": {<br /> "url": "https://en.wikipedia.org/wiki/Lacinato_kale"<br /> }<br /> },<br /> "href": "https://en.wikipedia.org/wiki/Lacinato_kale"<br /> }<br /> ],<br /> "color": "default"<br /> }<br /> }<br />]</code> |
| Icon        | The icon of the new page. Either an emoji object (https://developers.notion.com/reference/emoji-object) or an external file object (https://developers.notion.com/reference/file-object)         | <code>{<br /> "type": "external",<br /> "external": {<br /> "url": "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"<br /> }<br />}</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Cover Image | The cover image of the new page, represented as a file object.                                                                                                                                   | <code>{<br /> "type": "file",<br /> "file": {<br /> "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7b8b0713-dbd4-4962-b38b-955b6c49a573/My_test_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221024T205211Z&X-Amz-Expires=3600&X-Amz-Signature=208aa971577ff05e75e68354e8a9488697288ff3fb3879c2d599433a7625bf90&X-Amz-SignedHeaders=host&x-id=GetObject",<br /> "expiry_time": "2022-10-24T22:49:22.765Z"<br /> }<br />}</code>                                                                                                                                                                                         |

### Get Current User

Get the currently logged in user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Database

Retrieve a database by ID

| Input       | Comments | Default |
| ----------- | -------- | ------- |
| Connection  |          |         |
| Database ID |          |         |

### Get Page

Retrieve a page by ID with optional property filters

| Input             | Comments                                                                                                           | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection        |                                                                                                                    |         |
| Page ID           |                                                                                                                    |         |
| Filter Properties | A list of page property value IDs separated by commas. Use this to limit the response to specific page properties. |         |

### Get User by ID

Get a user by their ID

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| User ID    |          |         |

### List Databases

List all databases

| Input        | Comments                                                                                                        | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                 |         |
| Start Cursor | The start cursor is returned from a previous 'list' action when at least one more page of records is available. |         |
| Fetch All    | Turn this on to fetch all pages. This will ignore the start cursor input.                                       | false   |

### List Pages

List all pages

| Input        | Comments                                                                                                        | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                 |         |
| Start Cursor | The start cursor is returned from a previous 'list' action when at least one more page of records is available. |         |
| Fetch All    | Turn this on to fetch all pages. This will ignore the start cursor input.                                       | false   |

### List Users

List all users in the workspace with optional page size

| Input        | Comments                                                                                                        | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                 |         |
| Start Cursor | The start cursor is returned from a previous 'list' action when at least one more page of records is available. |         |
| Page Size    | The number of items from the full list desired in the response. Maximum: 100.                                   | 50      |
| Fetch All    | Turn this on to fetch all pages. This will ignore the start cursor and page size inputs.                        | false   |

### Query Database

Query a Notion database

| Input         | Comments | Default |
| ------------- | -------- | ------- |
| Connection    |          |         |
| Database ID   |          |         |
| Filter Object |          |         |

### Raw Request

Send raw HTTP request to Notion

| Input                   | Comments                                                                                                                                                                                               | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                                                                                                                        |         |
| URL                     | Input the path only (/users/me), The base URL is already included (https://api.notion.com/v1). For example, to connect to https://api.notion.com/v1/users/me, only /users/me is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                              |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                   |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                       |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                 |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                    |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                            |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                               | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                    |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                    | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.       | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                    | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                          | false   |
