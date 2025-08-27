---
title: Frontify Connector
sidebar_label: Frontify
description: Frontify is a comprehensive brand management platform that enables organizations to create, manage, and distribute brand assets, guidelines, and digital content across teams and channels, streamlining brand consistency and collaboration.
---

![Frontify](./assets/frontify.png#connector-icon)
Frontify is a comprehensive brand management platform that enables organizations to create, manage, and distribute brand assets, guidelines, and digital content across teams and channels, streamlining brand consistency and collaboration.

## Connections

### OAuth 2.0

Connection to Frontify using OAuth 2.0

[Documentation](https://developer.frontify.com/document/1367#/access-control/authentication)

1. Go to Frontify and open the applications setting.
2. Add a new application with the following configuration options:
3. Redirect URIs: Enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                                                                                       | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Base URL      | The base URL of the Frontify API. This URL should be provided by the service provider.                                                                                                                                         |         |
| Authorize URL | The Authorization URL for Frontify.                                                                                                                                                                                            |         |
| Token URL     | The Token URL for Frontify.                                                                                                                                                                                                    |         |
| Scopes        | A list of scopes, combined by a space. At least `basic:read` must be specified within scopes. A full list of scopes can be found here: https://developer.frontify.com/d/XFPCrGNrXQQM/graphql-api#/access-control/scopes-p11876 |         |
| Client ID     |                                                                                                                                                                                                                                |         |
| Client Secret |                                                                                                                                                                                                                                |         |
| State         | The state is a parameter controlled by you and used to preserves some state objects set by the client in the Authorization request and makes it available to the client in the response.                                       |         |

### Personal Developer Token

Personal Developer Tokens are used for private applications or during development to skip the OAuth2 process.

[Documentation](https://developer.frontify.com/document/1367#/access-control/authentication)

1. To generate a Personal Developer token, navigate to https://company-domain/api/developer/token in your browser.
   1. Replace 'company-domain' in URL with the domain name of your company's site.
2. Once generated, a developer can use the token until it is manually revoked.
3. When creating a new token, give it a meaningful name. This is helpful if you later need to revoke a token and for you to keep track of where a given token is used.

| Input    | Comments                                                                                                                           | Default |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Base URL | The base URL of the Frontify API. This URL should be provided by the service provider.                                             |         |
| Token    | The personal developer token is used to authenticate with the Frontify API. This token should be provided by the service provider. |         |

## Actions

### Create Asset

Create an Asset.

| Input               | Comments                                                                                                                                                                                            | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                                                                                                                                     |         |
| File ID             | A file's Signed ID, returned by the Upload File action. For more information, see: https://developer.frontify.com/document/1367#/deep-dive/upload-file-create-asset                                 |         |
| Title               | Asset title or display name.                                                                                                                                                                        |         |
| Parent ID           | The parent Id, where the Asset should be located in. Should either be a Library, WorkspaceProject or Folder Id. Important: Cannot be used in conjunction with directory if the Id is from a Folder. |         |
| Description         | Asset description.                                                                                                                                                                                  |         |
| External ID         | Asset external ID.                                                                                                                                                                                  |         |
| Copyright Status    | Asset copyright status.                                                                                                                                                                             |         |
| Copyright Notice    | Asset copyright notice. Supports medium text length.                                                                                                                                                |         |
| Tags                | List of tags to create with the Asset.                                                                                                                                                              |         |
| Skip File Metadata  | Skip file's EXIF metadata. When true, it will ignore all file metadata contents.                                                                                                                    | false   |
| Directory           | An array of strings representing the directory, if a folder does not exist, it is created. Important: Cannot be used in conjunction with parentId that is from a Folder.                            |         |
| Expires At          | Asset will expire once the defined date is reached.                                                                                                                                                 |         |
| Author              | Represents the Author of the Asset.                                                                                                                                                                 |         |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                                                | false   |

### Create Attachment

Create a new Attachment.

| Input               | Comments                                                         | Default |
| ------------------- | ---------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                  |         |
| Parent ID           | The parent ID of the attachment. For parents of Asset type only. |         |
| File ID             | The signed ID returned by the Upload File action.                |         |
| Name                | Attachment name or display name.                                 |         |
| External ID         | Attachment external ID.                                          |         |
| Debug Request       | Enabling this flag will log out the current request.             | false   |

### Create Collection

Create a new Collection. Currently supported for Library type parent entities only.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Parent ID           | ID of the parent Library entity.                     |         |
| Name                | Collection name.                                     |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Create Folder

Create a new Folder.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Parent ID           | ID of the parent.                                    |         |
| Name                | Folder name.                                         |         |
| Description         | Folder description.                                  |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Delete Asset

Delete an Asset.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Asset ID            | ID of the Asset to delete.                           |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Delete Attachment

Delete an existing Attachment.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Attachment ID       | ID of the Attachment to delete.                      |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Delete Collection

Delete an existing Collection.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Collection ID       | ID of the Collection to delete.                      |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Delete Folders

Delete existing Folders.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Folder IDs          | ID of the Folder to delete.                          |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Get Account ID

Retrieve current Account ID.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Get Asset

Retrieve an Asset by ID.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Asset ID            | ID of the Asset to retrieve.                         |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Get Assets by IDs

Retrieve a list of Assets by IDs.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Asset IDs           | List of Asset IDs to retrieve.                       |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Get Brand

Retrieve a Brand by its ID.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Brand ID            | ID of the Brand to retrieve.                         |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Get Current User

Get the current User.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Get Library

Retrieve a Library by its ID.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Library ID          | ID of the Library entity.                            |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Get Workspace Project

Retrieve a Workspace Project by its ID.

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection  |                                                      |         |
| Workspace Project ID | ID of the Workspace Project entity.                  |         |
| Debug Request        | Enabling this flag will log out the current request. | false   |

### Install Webhook

Install a Webhook onto a Workspace Project or Library.

| Input                              | Comments                                                             | Default |
| ---------------------------------- | -------------------------------------------------------------------- | ------- |
| Frontify Connection                |                                                                      |         |
| Workspace Project ID or Library ID | The ID of the Workspace Project or Library to attach the Webhook to. |         |
| Webhook Name                       | The name of the Webhook.                                             |         |
| Notification URL                   | The URL that the Webhook will send notifications to when triggered.  |         |
| Debug Request                      | Enabling this flag will log out the current request.                 | false   |

### List Asset Comments

Retrieve a list of Comments relating to a given Asset.

| Input               | Comments                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                   |         |
| Fetch All           | If true, it will fetch all records and ignore parameters like page and page size. | false   |
| Page                | Page number                                                                       | 1       |
| Page Size           | How many items to show per page.                                                  | 25      |
| Asset ID            | ID of the Asset to retrieve comments for.                                         |         |
| Reply Limit         | The limit of how may replies to show per comment.                                 | 50      |
| Debug Request       | Enabling this flag will log out the current request.                              | false   |

### List Brand Libraries

Retrieve list of Libraries belonging to a Brand. For full Library details, please use the 'Get Library' action.

| Input               | Comments                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                   |         |
| Fetch All           | If true, it will fetch all records and ignore parameters like page and page size. | false   |
| Page                | Page number                                                                       | 1       |
| Page Size           | How many items to show per page.                                                  | 25      |
| Brand ID            | ID of the Brand to retrieve Libraries for.                                        |         |
| Debug Request       | Enabling this flag will log out the current request.                              | false   |

### List Brands

Retrieve Brand list for current Account.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### List Brand Workspace Projects

Retrieve list of Workspace Projects belonging to a Brand. For full details, please use the 'Get Workspace Project' action.

| Input               | Comments                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                   |         |
| Fetch All           | If true, it will fetch all records and ignore parameters like page and page size. | false   |
| Page                | Page number                                                                       | 1       |
| Page Size           | How many items to show per page.                                                  | 25      |
| Brand ID            | ID of the Brand to retrieve Workspace Projects for.                               |         |
| Debug Request       | Enabling this flag will log out the current request.                              | false   |

### List Library Assets

Retrieve a list of Assets belonging to a Library.

| Input               | Comments                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                   |         |
| Fetch All           | If true, it will fetch all records and ignore parameters like page and page size. | false   |
| Page                | Page number                                                                       | 1       |
| Page Size           | How many items to show per page.                                                  | 25      |
| Library ID          | ID of the Library entity.                                                         |         |
| Search Query        | Limit the result set by the search term.                                          |         |
| External ID         | Limit the result set by the external ID of an Asset.                              |         |
| Debug Request       | Enabling this flag will log out the current request.                              | false   |

### List Library Collaborators

Retrieve a list of Collaborators belonging to a Library.

| Input               | Comments                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                   |         |
| Fetch All           | If true, it will fetch all records and ignore parameters like page and page size. | false   |
| Page                | Page number                                                                       | 1       |
| Page Size           | How many items to show per page.                                                  | 25      |
| Library ID          | ID of the Library entity.                                                         |         |
| Debug Request       | Enabling this flag will log out the current request.                              | false   |

### List Library Collections

Retrieve a list of Collections belonging to a Library.

| Input               | Comments                                                                                                                                                                         | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                                                                                                                  |         |
| Fetch All           | If true, it will fetch all top-level Collections records and ignore parameters like page and page size. This toggle will not affect the Asset pagination within each Collection. | false   |
| Page                | Page number                                                                                                                                                                      | 1       |
| Page Size           | How many items to show per page.                                                                                                                                                 | 25      |
| Library ID          | ID of the Library entity.                                                                                                                                                        |         |
| Page (Assets)       | Assets are paginated within collections. Use this to control the nested Asset pagination.                                                                                        | 1       |
| Page Size (Assets)  | Assets are paginated within collections. Use this to control the nested Asset pagination.                                                                                        | 50      |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                                             | false   |

### List Library Folders

Retrieve a list of the top-level folders in a Library. To browse further, use the Raw Request action.

| Input               | Comments                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                   |         |
| Fetch All           | If true, it will fetch all records and ignore parameters like page and page size. | false   |
| Page                | Page number                                                                       | 1       |
| Page Size           | How many items to show per page.                                                  | 25      |
| Library ID          | ID of the Library entity.                                                         |         |
| Debug Request       | Enabling this flag will log out the current request.                              | false   |

### List Related Assets

Retrieve a list of assets that relate to a specific Asset.

| Input               | Comments                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                   |         |
| Fetch All           | If true, it will fetch all records and ignore parameters like page and page size. | false   |
| Page                | Page number                                                                       | 1       |
| Page Size           | How many items to show per page.                                                  | 25      |
| Asset ID            | ID of the Asset to retrieve related assets for.                                   |         |
| Debug Request       | Enabling this flag will log out the current request.                              | false   |

### List User Groups

Retrieve UserGroups list for the current Account.

| Input               | Comments                                                                                                                                                    | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                                                                                             |         |
| Fetch All           | If true, it will fetch all UserGroups and ignore parameters like page and page size. This toggle will not affect the User pagination within each UserGroup. | false   |
| Page                | Page number                                                                                                                                                 | 1       |
| Page Size           | How many items to show per page.                                                                                                                            | 25      |
| Page (users)        | For paging through users belonging to a userGroup.                                                                                                          | 1       |
| Limit (user pages)  | How many records to show per page of users.                                                                                                                 | 25      |
| Debug Request       | Enabling this flag will log out the current request.                                                                                                        | false   |

### List Users

Retrieve Users list for the current Account.

| Input               | Comments                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                   |         |
| Fetch All           | If true, it will fetch all records and ignore parameters like page and page size. | false   |
| Page                | Page number                                                                       | 1       |
| Page Size           | How many items to show per page.                                                  | 25      |
| Debug Request       | Enabling this flag will log out the current request.                              | false   |

### List Webhooks

Retrieve WebhookItems related to current Account.

| Input               | Comments                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                                   |         |
| Fetch All           | If true, it will fetch all records and ignore parameters like page and page size. | false   |
| Page                | Page number                                                                       | 1       |
| Page Size           | How many items to show per page.                                                  | 25      |
| Debug Request       | Enabling this flag will log out the current request.                              | false   |

### List Workspace Project Assets

Retrieve a list of Assets belonging to a Workspace Project.

| Input                | Comments                                                                          | Default |
| -------------------- | --------------------------------------------------------------------------------- | ------- |
| Frontify Connection  |                                                                                   |         |
| Fetch All            | If true, it will fetch all records and ignore parameters like page and page size. | false   |
| Page                 | Page number                                                                       | 1       |
| Page Size            | How many items to show per page.                                                  | 25      |
| Workspace Project ID | ID of the Workspace Project entity.                                               |         |
| Search Query         | Limit the result set by the search term.                                          |         |
| External ID          | Limit the result set by the external ID of an Asset.                              |         |
| Debug Request        | Enabling this flag will log out the current request.                              | false   |

### List Workspace Project Folders

Retrieve a list of the top-level folders in a Workspace Project. To browse further, use the Raw Request action.

| Input                | Comments                                                                          | Default |
| -------------------- | --------------------------------------------------------------------------------- | ------- |
| Frontify Connection  |                                                                                   |         |
| Fetch All            | If true, it will fetch all records and ignore parameters like page and page size. | false   |
| Page                 | Page number                                                                       | 1       |
| Page Size            | How many items to show per page.                                                  | 25      |
| Workspace Project ID | ID of the Workspace Project entity.                                               |         |
| Debug Request        | Enabling this flag will log out the current request.                              | false   |

### Move Assets

Move existing Asset item(s) to the given Library, Workspace or Folder destination. Only moves within the same Library/Workspace are supported by this operation.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Asset IDs           | IDs of the Assets to move.                           |         |
| Destination ID      | Only allows Library, Workspace, or Folder IDs.       |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Move Folders

Move existing Folder item(s) to the given Library, Workspace or Folder destination. Only moves within the same Library/Workspace are supported by this operation.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Folder IDs          | ID of the Folder items to move.                      |         |
| Destination ID      | Only allows Library, Workspace, or Folder IDs.       |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Raw GraphQL Request

Send a raw GraphQL request to Frontify.

| Input               | Comments                                                    | Default |
| ------------------- | ----------------------------------------------------------- | ------- |
| Frontify Connection |                                                             |         |
| Query or Mutation   | Provide a query or mutation for the GraphQL request.        |         |
| GraphQL Variables   | These should match the variables of your query or mutation. |         |
| Debug Request       | Enabling this flag will log out the current request.        | false   |

### Uninstall Webhook

Uninstall a Webhook.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Webhook ID          | The ID of the Webhook to uninstall.                  |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Update Asset

Update an existing Asset.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Asset ID            | ID of the Asset to update.                           |         |
| File Name           | Asset filename, including extension.                 |         |
| Title               | Asset title or display name.                         |         |
| Description         | Asset description.                                   |         |
| Copyright Status    | Asset copyright status.                              |         |
| Copyright Notice    | Asset copyright notice. Supports medium text length. |         |
| Expires At          | Asset will expire once the defined date is reached.  |         |
| Author              | Represents the Author of the Asset.                  |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Update Collection

Update an existing Collection.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Collection ID       | ID of the Collection to update.                      |         |
| Name                | Collection name.                                     |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Update Folder

Update an existing Folder.

| Input               | Comments                                             | Default |
| ------------------- | ---------------------------------------------------- | ------- |
| Frontify Connection |                                                      |         |
| Folder ID           | ID of the Folder to update.                          |         |
| Name                | Folder name.                                         |         |
| Description         | Folder description.                                  |         |
| Debug Request       | Enabling this flag will log out the current request. | false   |

### Upload File

Upload a new file.

| Input               | Comments                                                             | Default |
| ------------------- | -------------------------------------------------------------------- | ------- |
| Frontify Connection |                                                                      |         |
| File Name           | File name.                                                           |         |
| Size                | File size in bytes.                                                  |         |
| Chunk Size          | File chunk size in bytes. Value must be integer between 5MB and 1GB. |         |
| Debug Request       | Enabling this flag will log out the current request.                 | false   |
