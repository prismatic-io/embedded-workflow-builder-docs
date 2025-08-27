---
title: GitHub Connector
sidebar_label: GitHub
description: Manage users, repositories, licenses, and more on GitHub
---

![GitHub](./assets/github.png#connector-icon)
Manage users, repositories, licenses, and more on GitHub

## Connections

### OAuth 2.0

To connect to GitHub you will need to [create a new OAuth 2.0 application](https://github.com/settings/applications/new).
Fill in the required fields and supply the callback URL as the **Authorization callback URL**: `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`

Next click "Generate a new client secret" and copy the values of both the **Client ID** and **Client Secret**.

You are now ready to create the OAuth 2.0 connection to GitHub:

- Enter the **Client ID** and **Client Secret** values into the same named fields.
- Determine [what scopes your use case requires](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps) and add those to **Scopes** separating each with a space.

Save your integration and you should now be able to connect and authenticate to GitHub.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                    | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Scopes        | Space-delimited scopes; refer to [GitHub's documentation for details](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps) |         |
| Client ID     | Client identifier                                                                                                                                           |         |
| Client Secret | Client secret                                                                                                                                               |         |

## Triggers

### Webhook

Receive and validate webhook requests from Github for webhooks you configure.

| Input          | Comments                                                                                                                                                | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Webhook Secret | An optional secret to use to verify webhook authenticity. See https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks |         |

## Actions

### Actions Create Workflow Dispatch

Create a workflow dispatch event

| Input           | Comments                                                                                                                                            | Default                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Connection      |                                                                                                                                                     |                                                              |
| Owner           | The account OWNER of the repository (https://github.com/OWNER/REPO)                                                                                 |                                                              |
| Repository Name | The name of the REPO (https://github.com/OWNER/REPO)                                                                                                |                                                              |
| Workflow Id     | The ID of the workflow                                                                                                                              |                                                              |
| Ref             | The git reference for the workflow                                                                                                                  |                                                              |
| Inputs          | Input keys and values configured in the workflow file. This can be a JSON input mapping, or a reference to a previous step that returned an object. | <code>{"input1":"My Value","input2":"My Other Value"}</code> |

### Git Create Blob

Create a blob

| Input           | Comments                                                            | Default |
| --------------- | ------------------------------------------------------------------- | ------- |
| Connection      |                                                                     |         |
| Owner           | The account OWNER of the repository (https://github.com/OWNER/REPO) |         |
| Repository Name | The name of the REPO (https://github.com/OWNER/REPO)                |         |
| Content         | The new blob"s content                                              |         |
| Encoding        | The encoding used for "content"                                     | utf-8   |

### Git Create Ref

Create a reference

| Input           | Comments                                                            | Default |
| --------------- | ------------------------------------------------------------------- | ------- |
| Connection      |                                                                     |         |
| Owner           | The account OWNER of the repository (https://github.com/OWNER/REPO) |         |
| Repository Name | The name of the REPO (https://github.com/OWNER/REPO)                |         |
| Ref             | The name of the fully qualified reference (ie: "refs/heads/master") |         |
| Sha             | The SHA1 value for this reference                                   |         |
| Key             |                                                                     |         |

### Git Create Tree

Create a tree

| Input           | Comments                                                                                                                                             | Default                                                                                                                   |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Connection      |                                                                                                                                                      |                                                                                                                           |
| Owner           | The account OWNER of the repository (https://github.com/OWNER/REPO)                                                                                  |                                                                                                                           |
| Repository Name | The name of the REPO (https://github.com/OWNER/REPO)                                                                                                 |                                                                                                                           |
| Tree            | Objects (of "path", "mode", "type", and "content" or "sha") specifying a tree structure. See https://docs.github.com/en/rest/git/trees#create-a-tree | <code>[<br /> {<br /> "path": "test.txt",<br /> "mode": "100644",<br /> "content": "This is a test"<br /> }<br />]</code> |
| Base Tree       | The SHA1 of an existing Git tree object which will be used as the base for the new tree                                                              |                                                                                                                           |

### Git Get Ref

Get a reference

| Input           | Comments                                                            | Default |
| --------------- | ------------------------------------------------------------------- | ------- |
| Connection      |                                                                     |         |
| Owner           | The account OWNER of the repository (https://github.com/OWNER/REPO) |         |
| Repository Name | The name of the REPO (https://github.com/OWNER/REPO)                |         |
| Ref             | ref parameter                                                       |         |

### Issues Create Comment

Create an issue comment

| Input           | Comments                                                            | Default |
| --------------- | ------------------------------------------------------------------- | ------- |
| Connection      |                                                                     |         |
| Owner           | The account OWNER of the repository (https://github.com/OWNER/REPO) |         |
| Repository Name | The name of the REPO (https://github.com/OWNER/REPO)                |         |
| Issue Number    | The number that identifies the issue                                |         |
| Body            | The contents of the comment                                         |         |

### Issues List Comments

List issue comments

| Input           | Comments                                                            | Default |
| --------------- | ------------------------------------------------------------------- | ------- |
| Connection      |                                                                     |         |
| Owner           | The account OWNER of the repository (https://github.com/OWNER/REPO) |         |
| Repository Name | The name of the REPO (https://github.com/OWNER/REPO)                |         |
| Issue Number    | The number that identifies the issue                                |         |
| Since           | Only show notifications updated after the given time                |         |
| Per Page        | The number of results per page (max 100)                            | 30      |
| Page            | Page number of the results to fetch                                 | 1       |

### Pulls Create

Create a pull request

| Input                 | Comments                                                            | Default |
| --------------------- | ------------------------------------------------------------------- | ------- |
| Connection            |                                                                     |         |
| Owner                 | The account OWNER of the repository (https://github.com/OWNER/REPO) |         |
| Repository Name       | The name of the REPO (https://github.com/OWNER/REPO)                |         |
| Title                 | The title of the new pull request                                   |         |
| Head                  | The name of the branch where your changes are implemented           |         |
| Base                  | The name of the branch you want the changes pulled into             |         |
| Body                  | The contents of the pull request                                    |         |
| Maintainer Can Modify | Indicates whether [maintainers can modify](https://docs             | false   |
| Draft                 | Indicates whether the pull request is a draft                       | false   |
| Issue                 |                                                                     |         |

### Raw Request

Send raw HTTP request to Github

| Input                   | Comments                                                                                                                                                                                      | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                               |         |
| URL                     | Input the path only (/octocat), The base URL is already included (https://api.github.com). For example, to connect to https://api.github.com/octocat, only /octocat is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                       |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                     |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                          |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                              |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                           |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                   |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                      | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                           |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                          | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries.                                                                                                                                                    | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type.                                                                                                                               | false   |
| Max Retry Count         | The maximum number of retries to attempt.                                                                                                                                                     | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries.                                                                                                              | false   |

### Repos Create Webhook

Create a repository webhook

| Input           | Comments                                                                                                                                                | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                         |         |
| Owner           | The account OWNER of the repository (https://github.com/OWNER/REPO)                                                                                     |         |
| Repository Name | The name of the REPO (https://github.com/OWNER/REPO)                                                                                                    |         |
| Callback URL    | The URL to send data to                                                                                                                                 |         |
| Events          | Determines what events trigger a webhook to fire                                                                                                        |         |
| Webhook Secret  | An optional secret to use to verify webhook authenticity. See https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks |         |

### Repos Delete Instance Webhooks

Delete all webhooks pointed at this instance

| Input           | Comments                                                            | Default |
| --------------- | ------------------------------------------------------------------- | ------- |
| Connection      |                                                                     |         |
| Owner           | The account OWNER of the repository (https://github.com/OWNER/REPO) |         |
| Repository Name | The name of the REPO (https://github.com/OWNER/REPO)                |         |

### Repos Delete Webhook

Delete a repository webhook by ID

| Input           | Comments                                                            | Default |
| --------------- | ------------------------------------------------------------------- | ------- |
| Connection      |                                                                     |         |
| Owner           | The account OWNER of the repository (https://github.com/OWNER/REPO) |         |
| Repository Name | The name of the REPO (https://github.com/OWNER/REPO)                |         |
| Hook ID         | The unique identifier of the hook                                   |         |

### Repos List For Org

List organization repositories

| Input      | Comments                                              | Default |
| ---------- | ----------------------------------------------------- | ------- |
| Connection |                                                       |         |
| Org        | The organization name                                 |         |
| Type       | Specifies the types of repositories you want returned |         |
| Sort       | The property to sort the results by                   | created |
| Direction  | The order to sort by                                  |         |
| Per Page   | The number of results per page (max 100)              | 30      |
| Page       | Page number of the results to fetch                   | 1       |

### Repos List Webhooks

List webhooks of a repository

| Input                       | Comments                                                            | Default |
| --------------------------- | ------------------------------------------------------------------- | ------- |
| Connection                  |                                                                     |         |
| Owner                       | The account OWNER of the repository (https://github.com/OWNER/REPO) |         |
| Repository Name             | The name of the REPO (https://github.com/OWNER/REPO)                |         |
| Show only instance webhooks | Show only webhooks that point to this instance                      | true    |

### Users Get By Username

Get a user

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection |                                        |         |
| Username   | The handle for the GitHub user account |         |
