---
title: Intercom Connector
sidebar_label: Intercom
description: Manage companies, contacts and tags on the Intercom platform
---

![Intercom](./assets/intercom.png#connector-icon)
Manage companies, contacts and tags on the Intercom platform

## Connections

### Intercom

Connection to Intercom

To connect to Intercom you will need to create a new app in their [Developer Hub](https://developers.intercom.com/).

Click "New App" and select "Public app" (you can use "Internal integration" if you do not need to connect to customer Intercom workspaces).

To enable OAuth you need to navigate to "Authentication", click the "Edit" button, and check "Use OAuth". Click "Add redirect URL" and enter the callback URL: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`

You can also use this opportunity to reduce the selected Permissions (scopes) if desired. Once complete, click "Save".

Next, collect the **Client ID** and **Client secret** from the "Basic information" page.

You are now ready to create the OAuth 2.0 connection to Intercom:

- Enter the **Client ID** and **Client secret** values into the same named fields.

Save your integration and you should now be able to authenticate to Intercom.

Note that you will need to submit your Intercom app for review when it is ready for production.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                           | Default |
| ------------- | ---------------------------------- | ------- |
| Client ID     | Client ID of your Intercom app     |         |
| Client Secret | Client Secret of your Intercom app |         |

### Intercom Access Token

Connection to Intercom using an Access Token

You should use the given access Access Token if:

- You want to use the API to interact with your own Intercom app
- You have scripts to push or extract data from your Intercom app
- You want to use the API to programmatically automate certain actions in your own Intercom app
- The data you interact with programmatically is your own customer data

## How to get your Access Token

Intercom provide you with an Access Token as soon as you [create an app](https://app.intercom.com/a/developer-signup) on your workspace. You can find your Access Token in the Configure > Authentication section in your app within the [Developer Hub](https://app.intercom.io/a/apps/_/developer-hub/app-packages).

You will also see it in your Test & Publish > Your Workspaces page of your app in the [Developer Hub](https://app.intercom.io/a/apps/_/developer-hub/app-packages). This lists out all of your workspaces that have the app installed. More about how this works can be found in their [Installing & Uninstalling Apps guide](https://developers.intercom.com/docs/build-an-integration/learn-more/authentication/installing-uninstalling-apps/).

### Never give your Access Token to a third party

Your Access Token can give access to your private Intercom data and should be treated like a password. If an app provider asks you for your Access Token, please do not provide it. Instead, let us know - apps are required to use OAuth rather than asking users for Access Tokens.

| Input        | Comments                  | Default |
| ------------ | ------------------------- | ------- |
| Access Token | Access Token for Intercom |         |

## Actions

### Archive Contact

Archive an existing Contact

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Contact ID | Unique identifier for the entity given by Intercom |         |

### Attach Company to Contact

Attach Company to Contact

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Contact ID | Unique identifier for the entity given by Intercom |         |
| Company ID | Identifier of Company                              |         |

### Attach Tag to Contact

Attach a Tag to a Contact

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Contact ID | Unique identifier for the entity given by Intercom |         |
| Tag ID     | Identifier of Tag                                  |         |

### Create Company

Create a new Company

| Input             | Comments                                                 | Default |
| ----------------- | -------------------------------------------------------- | ------- |
| Connection        |                                                          |         |
| Company ID        | Identifier of Company                                    |         |
| Remote Created At | Time the company was created by you                      |         |
| Name              | Name of the company                                      |         |
| Monthly Spend     | How much revenue the company generates for your business |         |
| Plan              | Name of the plan associated with the company             |         |
| Size              | Number of employees in this company                      |         |
| Website           | The URL for this company's website                       |         |
| Industry          | The industry this company operates in                    |         |

### Create Contact

Create a new Contact

| Input                    | Comments                                               | Default |
| ------------------------ | ------------------------------------------------------ | ------- |
| Connection               |                                                        |         |
| Role                     | The role of the contact                                |         |
| External ID              | Unique identifier for the entity from external systems |         |
| Email                    | Email of the contact                                   |         |
| Phone                    | Phone of the contact                                   |         |
| Name                     | Name of the contact                                    |         |
| Avatar URL               | An image URL containing the avatar of a contact        |         |
| Signed Up At             | The time specified for when a contact signed up        |         |
| Last Seen At             | The time when the contact was last seen                |         |
| Unsubscribed From Emails | Whether the contact is unsubscribed from emails        | false   |

### Create Tag

Create a new Tag

| Input      | Comments        | Default |
| ---------- | --------------- | ------- |
| Connection |                 |         |
| Name       | Name of the tag |         |

### Create Ticket

Create a new Ticket

| Input             | Comments                                                                                                                                                                          | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Ticket Type ID    | The ID of the type of ticket you want to create                                                                                                                                   |         |
| Contact ID        | The ID / email / external Id of the user affected by this ticket.                                                                                                                 |         |
| Company ID        | The ID of the company that the ticket is associated with. The ID that you set upon company creation.                                                                              |         |
| Ticket Attributes | The attributes set on the ticket. When setting the default title and description attributes, the attribute keys that should be used are _default_title_ and _default_description_ |         |
| Connection        |                                                                                                                                                                                   |         |

### Delete Company

Delete an existing Company

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection |                       |         |
| Company ID | Identifier of Company |         |

### Delete Contact

Delete an existing Contact

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Contact ID | Unique identifier for the entity given by Intercom |         |

### Delete Tag

Delete an existing Tag

| Input      | Comments      | Default |
| ---------- | ------------- | ------- |
| Connection |               |         |
| Tag ID     | ID of the tag |         |

### Detach Company from Contact

Detach Company from Contact

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Contact ID | Unique identifier for the entity given by Intercom |         |
| Company ID | Identifier of Company                              |         |

### Detach Tag from Contact

Detach a Tag from a Contact

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Contact ID | Unique identifier for the entity given by Intercom |         |
| Tag ID     | Identifier of Tag                                  |         |

### Get Company

Retrieves an existing Company

| Input      | Comments              | Default |
| ---------- | --------------------- | ------- |
| Connection |                       |         |
| Company ID | Identifier of Company |         |

### Get Contact

Retrieves an existing Contact

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Contact ID | Unique identifier for the entity given by Intercom |         |

### List Companies

Page through all Companies

| Input                 | Comments                                                                                                                                                                                                            | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All             | If true, all pages of results will be fetched.                                                                                                                                                                      | false   |
| Page                  | The page of results to fetch.                                                                                                                                                                                       |         |
| Per Page              | How many results to return per page. Default is 15. Max is 50.                                                                                                                                                      |         |
| Order                 | The order to sort the results in. Default is 'desc'.                                                                                                                                                                | desc    |
| Name                  | Name of the company to be used as filter.                                                                                                                                                                           |         |
| Company ID            | Id of the company to be used as filter.                                                                                                                                                                             |         |
| Tag ID                | Id of the tag to be used as filter.                                                                                                                                                                                 |         |
| Segment ID            | Id of the segment to be used as filter.                                                                                                                                                                             |         |
| Starting After Cursor | If you want to get the next page of data in the batch, you must make a new request with the starting_after parameter equal to the cursor pointer string. Use the starting_after parameter of the previous response. |         |
| Connection            |                                                                                                                                                                                                                     |         |

### List Contacts

Page through all Contacts

| Input                 | Comments                                                                                                                                                                                                            | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Fetch All             | If true, all pages of results will be fetched.                                                                                                                                                                      | false   |
| Page                  | The page of results to fetch.                                                                                                                                                                                       |         |
| Per Page              | How many results to return per page. Default is 15. Max is 50.                                                                                                                                                      |         |
| Order                 | The order to sort the results in. Default is 'desc'.                                                                                                                                                                | desc    |
| Starting After Cursor | If you want to get the next page of data in the batch, you must make a new request with the starting_after parameter equal to the cursor pointer string. Use the starting_after parameter of the previous response. |         |
| Connection            |                                                                                                                                                                                                                     |         |

### List Tags

List all Tags

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Ticket Types

Get a list of all ticket types for a workspace.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send a raw request to Intercom

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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Retrieve a ticket

Retrieve a ticket by ID

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Ticket ID  | ID of the ticket to retrieve. |         |
| Connection |                               |         |

### Search Contacts

Search through all Contacts

| Input                 | Comments                                                                                                                                                                                                            | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                                     |         |
| Role                  | The role of the contact                                                                                                                                                                                             |         |
| Name                  | Name of the contact                                                                                                                                                                                                 |         |
| Email                 | Email of the contact                                                                                                                                                                                                |         |
| JSON Query            | If you wanted to provide a custom query instead of the one constructed by the action, you can use this input to bypass it.                                                                                          |         |
| Starting After Cursor | If you want to get the next page of data in the batch, you must make a new request with the starting_after parameter equal to the cursor pointer string. Use the starting_after parameter of the previous response. |         |

### Unarchive Contact

Unarchive an archived Contact

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Contact ID | Unique identifier for the entity given by Intercom |         |

### Update Company

Update an existing Company

| Input             | Comments                                                 | Default |
| ----------------- | -------------------------------------------------------- | ------- |
| Connection        |                                                          |         |
| Company ID        | Identifier of Company                                    |         |
| Remote Created At | Time the company was created by you                      |         |
| Name              | Name of the contact                                      |         |
| Monthly Spend     | How much revenue the company generates for your business |         |
| Plan              | Name of the plan associated with the company             |         |
| Size              | Number of employees in this company                      |         |
| Website           | The URL for this company's website                       |         |
| Industry          | The industry this company operates in                    |         |

### Update Contact

Update an existing Contact

| Input                    | Comments                                               | Default |
| ------------------------ | ------------------------------------------------------ | ------- |
| Connection               |                                                        |         |
| Contact ID               | Unique identifier for the entity given by Intercom     |         |
| Role                     | The role of the contact                                |         |
| External ID              | Unique identifier for the entity from external systems |         |
| Email                    | Email of the contact                                   |         |
| Phone                    | Phone of the contact                                   |         |
| Name                     | Name of the contact                                    |         |
| Avatar URL               | An image URL containing the avatar of a contact        |         |
| Signed Up At             | The time specified for when a contact signed up        |         |
| Last Seen At             | The time when the contact was last seen                |         |
| Unsubscribed From Emails | Whether the contact is unsubscribed from emails        | false   |

### Update Tag

Update an existing Tag

| Input      | Comments        | Default |
| ---------- | --------------- | ------- |
| Connection |                 |         |
| Tag ID     | ID of the tag   |         |
| Name       | Name of the tag |         |
