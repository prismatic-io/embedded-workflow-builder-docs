---
title: Canny Connector
sidebar_label: Canny
description: Interact with the Canny API to manage feedback boards, posts, votes, comments, and users.
---

![Canny](./assets/canny.png#connector-icon)
[Canny](https://canny.io/) is a customer feedback management platform that helps teams collect, organize, and prioritize product feedback.
This component allows you to manage feedback boards, posts, votes, comments, categories, tags, users, and companies.

## API Documentation

This component was built using the [Canny API Reference](https://developers.canny.io/api-reference).

## Connections

### API Key {#cannyapikey}

Authenticate using a Canny API key.

To authenticate with Canny, an API key is required.

#### Prerequisites

- A Canny account with admin access

#### Setup Steps

1. Log in to the [Canny admin panel](https://canny.io/)
2. Navigate to **Settings** > **API**
3. Copy the **API Key** displayed on the page

#### Configure the Connection

- Enter the **API Key** into the connection configuration

| Input   | Comments                                                                    | Default |
| ------- | --------------------------------------------------------------------------- | ------- |
| API Key | The Canny API key. Generate one at Settings > API in the Canny admin panel. |         |

## Triggers

### Webhook {#webhook}

Receives webhook events from Canny when configured events occur.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The Canny connection to use. |         |

## Actions

### Change Post Status {#changepoststatus}

Changes the status of a post.

| Input             | Comments                                                                                 | Default |
| ----------------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection        | The Canny connection to use.                                                             |         |
| Post ID           | The unique identifier of the post.                                                       |         |
| Status            | The new status value (e.g., open, under review, planned, in progress, complete, closed). |         |
| Changer ID        | The admin performing the status change.                                                  |         |
| Notify Voters     | When true, notifies voters of the status change.                                         | false   |
| Comment           | Optional comment to attach to the status change.                                         |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs.                      |         |

### Create Category {#createcategory}

Creates a new category in a board.

| Input              | Comments                                      | Default |
| ------------------ | --------------------------------------------- | ------- |
| Connection         | The Canny connection to use.                  |         |
| Board ID           | The unique identifier of the board.           |         |
| Name               | The name of the category.                     |         |
| Subscribe Admins   | When true, subscribes admins to the category. | false   |
| Parent Category ID | Parent category ID for subcategories.         |         |

### Create Changelog Entry {#createentry}

Creates a new changelog entry.

| Input             | Comments                                                            | Default |
| ----------------- | ------------------------------------------------------------------- | ------- |
| Connection        | The Canny connection to use.                                        |         |
| Title             | The changelog entry title.                                          |         |
| Details           | The entry content (markdown supported).                             |         |
| Type              | Entry type: new, improved, or fixed.                                |         |
| Notify            | When true, sends an email notification for the changelog entry.     | false   |
| Published         | When true, publishes the changelog entry immediately.               | false   |
| Additional Fields | Additional fields that might not be covered by the standard inputs. |         |

### Create Comment {#createcomment}

Creates a new comment on a post.

| Input             | Comments                                                              | Default |
| ----------------- | --------------------------------------------------------------------- | ------- |
| Connection        | The Canny connection to use.                                          |         |
| Post ID           | The unique identifier of the post.                                    |         |
| Author ID         | The unique identifier of the comment author.                          |         |
| Comment Text      | The text content of the comment.                                      |         |
| Internal          | When true, the comment is internal-only and not visible to end users. | false   |
| Parent Comment ID | Parent comment ID for threaded replies.                               |         |
| Image URLs        | JSON array of image URLs to attach.                                   |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs.   |         |

### Create or Update User {#createorupdateuser}

Creates a new user or updates an existing one by email.

| Input             | Comments                                                            | Default |
| ----------------- | ------------------------------------------------------------------- | ------- |
| Connection        | The Canny connection to use.                                        |         |
| Email             | The user's email address.                                           |         |
| Name              | The user's display name.                                            |         |
| User ID           | The unique identifier of the user.                                  |         |
| Companies         | JSON array of company objects to associate with the user.           |         |
| Custom Fields     | Custom field key-value pairs as JSON.                               |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. |         |

### Create Post {#createpost}

Creates a new feedback post.

| Input             | Comments                                                            | Default |
| ----------------- | ------------------------------------------------------------------- | ------- |
| Connection        | The Canny connection to use.                                        |         |
| Board ID          | The unique identifier of the board.                                 |         |
| Author ID         | The unique identifier of the post author.                           |         |
| Title             | The title of the post.                                              |         |
| Details           | The content or description of the post.                             |         |
| Category ID       | Category to assign to the post.                                     |         |
| Custom Fields     | Custom field key-value pairs as JSON.                               |         |
| ETA               | Estimated delivery date in MM/YYYY format.                          |         |
| ETA Public        | When true, the ETA is visible to all users.                         | false   |
| Image URLs        | JSON array of image URLs to attach.                                 |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. |         |

### Create Tag {#createtag}

Creates a new tag in a board.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Canny connection to use.        |         |
| Board ID   | The unique identifier of the board. |         |
| Name       | The name of the tag.                |         |

### Create Vote {#createvote}

Creates a vote on a post.

| Input             | Comments                                                            | Default |
| ----------------- | ------------------------------------------------------------------- | ------- |
| Connection        | The Canny connection to use.                                        |         |
| Post ID           | The unique identifier of the post.                                  |         |
| Voter ID          | The unique identifier of the user casting the vote.                 |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. |         |

### Delete Category {#deletecategory}

Deletes a category.

| Input       | Comments                               | Default |
| ----------- | -------------------------------------- | ------- |
| Connection  | The Canny connection to use.           |         |
| Category ID | The unique identifier of the category. |         |

### Delete Comment {#deletecomment}

Deletes a comment.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Canny connection to use.          |         |
| Comment ID | The unique identifier of the comment. |         |

### Delete Company {#deletecompany}

Deletes a company.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Canny connection to use.          |         |
| Company ID | The unique identifier of the company. |         |

### Delete Post {#deletepost}

Deletes a post.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The Canny connection to use.       |         |
| Post ID    | The unique identifier of the post. |         |

### Delete User {#deleteuser}

Deletes a user.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The Canny connection to use.       |         |
| User ID    | The unique identifier of the user. |         |

### Delete Vote {#deletevote}

Deletes a vote.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The Canny connection to use.       |         |
| Vote ID    | The unique identifier of the vote. |         |

### List Boards {#listboards}

Lists all boards.

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection | The Canny connection to use. |         |

### List Categories {#listcategories}

Lists categories with optional board filter and pagination.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Canny connection to use.                                            |         |
| Board ID   | Filter results by board.                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Limit      | Number of results to return per page.                                   |         |
| Skip       | The number of results to skip before returning data (0-based).          |         |

### List Changelog Entries {#listentries}

Lists changelog entries with optional filtering.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Canny connection to use.                                            |         |
| Type       | Entry type: new, improved, or fixed.                                    |         |
| Sort       | Sort order for changelog entries.                                       |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Limit      | Number of results to return per page.                                   |         |
| Skip       | The number of results to skip before returning data (0-based).          |         |

### List Comments {#listcomments}

Lists comments with optional filtering and cursor-based pagination.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Canny connection to use.                                            |         |
| Board ID   | Filter results by board.                                                |         |
| Post ID    | Filter results by post.                                                 |         |
| Author ID  | Filter by or specify the post author.                                   |         |
| Company ID | Filter results by company.                                              |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Cursor     | Pagination cursor from a previous response.                             |         |
| Limit      | Number of results to return per page.                                   |         |

### List Companies {#listcompanies}

Lists companies with cursor-based pagination.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Canny connection to use.                                            |         |
| Search     | Search term to filter companies.                                        |         |
| Segment    | Filter by segment.                                                      |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Cursor     | Pagination cursor from a previous response.                             |         |
| Limit      | Number of results to return per page.                                   |         |

### List Posts {#listposts}

Lists posts with optional filtering and pagination.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Canny connection to use.                                            |         |
| Board ID   | Filter results by board.                                                |         |
| Author ID  | Filter by or specify the post author.                                   |         |
| Company ID | Filter results by company.                                              |         |
| Tag IDs    | JSON array of tag IDs to filter by.                                     |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Limit      | Number of results to return per page.                                   |         |
| Skip       | The number of results to skip before returning data (0-based).          |         |
| Search     | Search term to filter posts.                                            |         |
| Sort       | Sort order for post results.                                            |         |
| Status     | Comma-separated list of statuses to filter by.                          |         |

### List Status Changes {#liststatuschanges}

Lists post status changes with optional filtering and cursor-based pagination.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Canny connection to use.                                            |         |
| Board ID   | Filter results by board.                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Cursor     | Pagination cursor from a previous response.                             |         |
| Limit      | Number of results to return per page.                                   |         |

### List Tags {#listtags}

Lists tags with optional board filter and pagination.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Canny connection to use.                                            |         |
| Board ID   | Filter results by board.                                                |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Limit      | Number of results to return per page.                                   |         |
| Skip       | The number of results to skip before returning data (0-based).          |         |

### List Users {#listusers}

Lists users with cursor-based pagination.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Canny connection to use.                                            |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Cursor     | Pagination cursor from a previous response.                             |         |
| Limit      | Number of results to return per page.                                   |         |

### List Votes {#listvotes}

Lists votes with optional filtering and cursor-based pagination (v2).

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| Connection | The Canny connection to use.                                            |         |
| Board ID   | Filter results by board.                                                |         |
| Post ID    | Filter results by post.                                                 |         |
| Company ID | Filter results by company.                                              |         |
| User ID    | Filter results by user.                                                 |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. | false   |
| Cursor     | Pagination cursor from a previous response.                             |         |
| Limit      | Number of results to return per page.                                   |         |

### Raw Request {#rawrequest}

Sends a raw HTTP request to the Canny API. The API key is injected automatically into the request body.

| Input                   | Comments                                                                                                                                                                                                          | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Canny connection to use.                                                                                                                                                                                      |         |
| URL                     | Input the path only (e.g., /v1/posts/list). The base URL is already included (https://canny.io/api). For example, to connect to https://canny.io/api/v1/posts/list, only /v1/posts/list is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                           |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                         |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                              |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                  |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                            |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                               |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                       |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                          | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                               |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                               | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                  | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                               | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                     | false   |

### Retrieve Board {#retrieveboard}

Retrieves a single board by ID.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The Canny connection to use.        |         |
| Board ID   | The unique identifier of the board. |         |

### Retrieve Category {#retrievecategory}

Retrieves a single category by ID.

| Input       | Comments                               | Default |
| ----------- | -------------------------------------- | ------- |
| Connection  | The Canny connection to use.           |         |
| Category ID | The unique identifier of the category. |         |

### Retrieve Comment {#retrievecomment}

Retrieves a single comment by ID.

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection | The Canny connection to use.          |         |
| Comment ID | The unique identifier of the comment. |         |

### Retrieve Post {#retrievepost}

Retrieves a single post by ID.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The Canny connection to use.       |         |
| Post ID    | The unique identifier of the post. |         |

### Retrieve Tag {#retrievetag}

Retrieves a single tag by ID.

| Input      | Comments                          | Default |
| ---------- | --------------------------------- | ------- |
| Connection | The Canny connection to use.      |         |
| Tag ID     | The unique identifier of the tag. |         |

### Retrieve User {#retrieveuser}

Retrieves a single user by ID.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The Canny connection to use.       |         |
| User ID    | The unique identifier of the user. |         |

### Retrieve Vote {#retrievevote}

Retrieves a single vote by ID.

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection | The Canny connection to use.       |         |
| Vote ID    | The unique identifier of the vote. |         |

### Update Company {#updatecompany}

Updates an existing company.

| Input             | Comments                                                            | Default |
| ----------------- | ------------------------------------------------------------------- | ------- |
| Connection        | The Canny connection to use.                                        |         |
| Company ID        | The unique identifier of the company.                               |         |
| Name              | The company name (0-100 characters).                                |         |
| Monthly Spend     | Monthly recurring revenue in dollars.                               |         |
| Custom Fields     | Custom field key-value pairs as JSON.                               |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. |         |

### Update Post {#updatepost}

Updates an existing post.

| Input             | Comments                                                            | Default |
| ----------------- | ------------------------------------------------------------------- | ------- |
| Connection        | The Canny connection to use.                                        |         |
| Post ID           | The unique identifier of the post.                                  |         |
| Title             | Updated post title.                                                 |         |
| Details           | Updated post content.                                               |         |
| Custom Fields     | Custom field key-value pairs as JSON.                               |         |
| ETA               | Estimated delivery date in MM/YYYY format.                          |         |
| Image URLs        | JSON array of image URLs to attach.                                 |         |
| Additional Fields | Additional fields that might not be covered by the standard inputs. |         |
