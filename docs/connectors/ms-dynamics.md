---
title: Microsoft Dynamics 365 Connector
sidebar_label: Microsoft Dynamics 365
description: Query, create, update or delete Microsoft Dynamics 365 API records
---

![Microsoft Dynamics 365](./assets/ms-dynamics.png#connector-icon)
Query, create, update or delete Microsoft Dynamics 365 API records

## Connections

### MS Dynamics OAuth 2.0 Auth Code

Microsoft Dynamics 365 OAuth Connection

The OAuth 2.0 auth code flow allows your user grant permission to your integration to interact with Dynamics on their behalf.

1. Log in to [Azure Portal](https://portal.azure.com/)
1. Select **App registrations**
1. Click **+ New registration**
   - **Supported account types** should be **Multi-tenant** if you intend for customers to authenticate with their own Dynamics instance, or **Single-tenant** if you intend to authenticate with your own Dynamics instance.
   - Under **Redirect URI** enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`
   - Click **Register**
1. Under **API permissions** click **+Add a permission**
   - Select **Dynamics CRM**
   - Check the `user_impersonation` permission
   - Click **Add permissions**
   - Additionally, ensure the `offline_access` scope is included in your app registration. It is essential to maintain your OAuth connection and receive refresh tokens. Without it, users will need to re-authenticate every hour.
1. Under **Certificates & secrets** click **+ New client secret**
   - Give your certificate a description and expiration date
   - Take note of the **value** (not the Secret ID) of the client secret.
1. Returning to the **Overview** page, take note of **Application (client) ID**

Create a connection of type **MS Dynamics OAuth 2.0 Auth Code**.

- Enter the **Client ID** and **Secret Value** you noted above.
- Log in to Dynamics and take note of the Dynamics URL.
  - Enter that Dynamics URL as the **Web API URL**. It should look like `https://REPLACE-ME.crm.dynamics.com/`
  - Under scopes, enter the following, replacing the URL with your Dynamics URL: `https://REPLACE-ME.crm.dynamics.com/user_impersonation offline_access`

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default |
| ------------- | ----------------------------------------------------------------------------------- | ------- |
| Web API URL   | Your organization's Microsoft Dynamics 365 Web API URL.                             |         |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. |         |
| Client ID     |                                                                                     |         |
| Client Secret |                                                                                     |         |

### MS Dynamics OAuth 2.0 Client Credentials

OAuth 2.0 Client Credentials Connectivity for Microsoft Dynamics

The OAuth 2.0 client credentials flow allows your user to create an **Application User** to send requests to Dynamics on their behalf.
Setting up a client credentials connection is a two-step process:

1. Create an "App" in Azure
1. Create an "Application User" in Dynamics

#### Create an app in Microsoft Azure

1. Log in to [Azure Portal](https://portal.azure.com/)
1. Select **App registrations**
1. Click **+ New registration**
   - **Supported account types** can be **Single tenant**
   - No **Redirect URI** is necessary
   - Click **Register**
1. Under **API permissions** click **+Add a permission**
   - Select **Dynamics CRM**
   - Check the `user_impersonation` permission
   - Click **Add permissions**
1. Under **API permissions** click **Grant admin concent for (your org)**
1. Under **Certificates & secrets** click **+ New client secret**
   - Give your certificate a description and expiration date
   - Take note of the **value** (not the Secret ID) of the client secret.
1. Returning to the **Overview** page, take note of **Application (client) ID**
1. From the **Overview** page, click **Endpoints** and take note of the **OAuth 2.0 token endpoint (v2)**

You will use the **Secret Value**, **Client ID** and **Token Endpoint** in a moment.

#### Add the app as an App User to Dynamics

1. Log in to [Power Platform admin center](https://admin.powerplatform.microsoft.com/)
1. Select **Environments** and choose your Dynamics Environments
1. Select **S2S Apps**
1. Click **+New app user**
   - Click **+Add an app**
   - Choose the app you created in Azure portal (above). You can search for your app by entering the client ID you noted.
   - Select your Dynamics tenant as your **Business unit**
   - Under **Security Roles** select **System Administrator**
   - Click **Create**

#### Configure the connection

Create a connection of type **MS Dynamics OAuth 2.0 Client Credentials**.

- Enter the **Token Endpoint** you noted as your **Token URL**.
- Enter the **Client ID** and **Secret Value** you noted above.
- Log in to Dynamics and take note of the Dynamics URL.
  - Enter that Dynamics URL as the **Web API URL**. It should look like `https://REPLACE-ME.crm.dynamics.com/`
  - Under scopes, enter the Dynamics URL with `.default` appended to it - `https://REPLACE-ME.crm.dynamics.com/.default`

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                         | Default |
| ------------------- | -------------------------------------------------------------------------------- | ------- |
| Web API URL         | Your organization's Microsoft Dynamics 365 Web API URL.                          |         |
| Token URL           | This can be found by visiting your app in Azure portal and selecting 'Endpoints' |         |
| Scopes              | This should be your Dynamics URL with '/.default' appened to it                  |         |
| Client ID           | Generated when you register an app in Azure portal                               |         |
| Client secret value | Generated when you register an app in Azure portal                               |         |

## Triggers

### Webhook

Receive and validate webhook requests from Microsoft Dynamics for webhooks you configure.

## Actions

### [CRM] Batch Entity Actions

Perform multiple create/update/delete actions on Microsoft Dynamics 365 CRM entity records.

| Input         | Comments                                                                                                                                                                                                                                                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Batch Actions | A list of up to 1000 create, update or delete actions to perform. Each action must have a 'collection' and an 'action' (create, update or delete). Create or update actions must also have 'data' and can include a boolean 'returnRepresentation' which determines if the full record should be returned after being created or updated. Update or delete actions must also have an entity key. | <code>[<br /> {<br /> "collection": "msevtmgt_events",<br /> "action": "create",<br /> "returnRepresentation": true,<br /> "data": {<br /> "msevtmgt_name": "Test Event 1",<br /> "msevtmgt_eventtype": "100000002"<br /> }<br /> },<br /> {<br /> "collection": "msevtmgt_events",<br /> "action": "update",<br /> "key": "00000000-0000-0000-0000-000000000002",<br /> "returnRepresentation": true,<br /> "data": {<br /> "msevtmgt_name": "Test Event 2",<br /> "msevtmgt_eventtype": "100000002"<br /> }<br /> },<br /> {<br /> "collection": "msevtmgt_events",<br /> "action": "delete",<br /> "key": "00000000-0000-0000-0000-000000000002"<br /> }<br />]</code> |

### [CRM] Create Attribute

Create a CRM Attribute on an Entity

| Input          | Comments                           | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection     |                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Entity ID      | The ID of a specific Entity record |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Attribute Body | Attribute body payload to send     | <code>{<br /> "AttributeType": "Money",<br /> "AttributeTypeName": {<br /> "Value": "MoneyType"<br /> },<br /> "Description": {<br /> "@odata.type": "Microsoft.Dynamics.CRM.Label",<br /> "LocalizedLabels": [<br /> {<br /> "@odata.type": "Microsoft.Dynamics.CRM.LocalizedLabel",<br /> "Label": "Enter the balance amount",<br /> "LanguageCode": 1033<br /> }<br /> ]<br /> },<br /> "DisplayName": {<br /> "@odata.type": "Microsoft.Dynamics.CRM.Label",<br /> "LocalizedLabels": [<br /> {<br /> "@odata.type": "Microsoft.Dynamics.CRM.LocalizedLabel",<br /> "Label": "Balance",<br /> "LanguageCode": 1033<br /> }<br /> ]<br /> },<br /> "RequiredLevel": {<br /> "Value": "None",<br /> "CanBeChanged": true,<br /> "ManagedPropertyLogicalName": "canmodifyrequirementlevelsettings"<br /> },<br /> "SchemaName": "new_Balance",<br /> "@odata.type": "Microsoft.Dynamics.CRM.MoneyAttributeMetadata",<br /> "PrecisionSource": 2<br />}</code> |

### [CRM] Create Entity

Create a new Microsoft Dynamics 365 CRM entity record.

| Input          | Comments                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------- | ------- |
| Entity Type    | The type of Entity to query, usually a pluralized name                          |         |
| Dynamic Values |                                                                                 |         |
| Field Value    | The names of the fields and their values to use when creating/updating a record |         |
| Connection     |                                                                                 |         |

### [CRM] Delete Entity

Delete the specified Microsoft Dynamics 365 CRM entity record.

| Input       | Comments                                               | Default |
| ----------- | ------------------------------------------------------ | ------- |
| Entity Type | The type of Entity to query, usually a pluralized name |         |
| Entity ID   | The ID of a specific Entity record                     |         |
| Connection  |                                                        |         |

### [CRM] Get Attribute

Retrieve a single CRM Attribute

| Input                | Comments                                                                  | Default |
| -------------------- | ------------------------------------------------------------------------- | ------- |
| Connection           |                                                                           |         |
| Entity ID            | The ID of a specific Entity record                                        |         |
| Attribute Key        | The Attribute Metadata id                                                 |         |
| Field Name           | The names of the fields to retrieve                                       |         |
| Expand Property Name | The names of entity properties to linked entities that should be included |         |

### [CRM] Get Current User

Get information about the currently logged in CRM user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### [CRM] Get Entities Metadata

A subset of Dynamics CRM Entity Types.

| Input                               | Comments                                                                                                                        | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                          |                                                                                                                                 |         |
| Default Selected Entity Types       | The names of the Entity Types to default in a selected state.                                                                   |         |
| Entity Type Filter                  | The names or labels of the Entity Types to include; if blank then all types are included. Uses case-insensitive matching.       |         |
| Include All Custom Entity Types     | When true, will include all Custom Entity Types, even those not included in Record Type Name Filter.                            | true    |
| Include Only Top Level Record Types | When true, will include only Entity Types that are top-level, meaning not subtypes of other Types, regardless of other filters. | false   |

### [CRM] Get Entity

Retrieve a single Microsoft Dynamics 365 CRM entity record.

| Input                | Comments                                                                  | Default |
| -------------------- | ------------------------------------------------------------------------- | ------- |
| Entity Type          | The type of Entity to query, usually a pluralized name                    |         |
| Entity ID            | The ID of a specific Entity record                                        |         |
| Field Name           | The names of the fields to retrieve                                       |         |
| Expand Property Name | The names of entity properties to linked entities that should be included |         |
| Connection           |                                                                           |         |

### [CRM] Get Entity Metadata

Get definition of Microsoft Dynamics 365 CRM entity.

| Input                       | Comments                                               | Default |
| --------------------------- | ------------------------------------------------------ | ------- |
| Connection                  |                                                        |         |
| Entity Type                 | The type of Entity to query, usually a pluralized name |         |
| Use Logical Name for Lookup |                                                        | true    |

### [CRM] List Attributes

Get a list of all attributes for a specific entity in your Dynamics 365 CRM instance

| Input                     | Comments                                                                               | Default |
| ------------------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                        |         |
| Entity ID                 | The ID of a specific Entity record                                                     |         |
| Attribute Type Filter     | Filter by attribute type (e.g., 'String', 'Integer', 'Boolean', 'DateTime', 'Decimal') |         |
| Include Attribute Details | Include additional attribute metadata like schema name, security settings, etc.        | false   |

### [CRM] List Entities

Get a list of all available entities in your Dynamics 365 CRM instance with detailed metadata

| Input                   | Comments                                                                  | Default |
| ----------------------- | ------------------------------------------------------------------------- | ------- |
| Connection              |                                                                           |         |
| Include Custom Entities | Include custom entities in the list.                                      | true    |
| Top Level Only          | Include only top-level entities (exclude child entities).                 | false   |
| Include Entity Details  | Include additional entity metadata like description, ownership type, etc. | false   |

### [CRM] Query Attributes

Query for CRM Attributes that satisfy the filter expression

| Input                | Comments                                                                  | Default |
| -------------------- | ------------------------------------------------------------------------- | ------- |
| Connection           |                                                                           |         |
| Entity ID            | The ID of a specific Entity record                                        |         |
| Attribute Type       | The type of Attribute to query                                            |         |
| Field Name           | The names of the fields to retrieve                                       |         |
| Filter Expression    | The filter expression that used for querying entity collections           |         |
| Expand Property Name | The names of entity properties to linked entities that should be included |         |

### [CRM] Query Entities

Query for Microsoft Dynamics 365 CRM entity records that satisfy the filter expression.

| Input                | Comments                                                                                                   | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Entity Type          | The type of Entity to query, usually a pluralized name                                                     |         |
| Field Name           | The names of the fields to retrieve                                                                        |         |
| Filter Expression    | The filter expression that used for querying entity collections                                            |         |
| Order By Field Name  | The names of the fields to order by                                                                        |         |
| Expand Property Name | The names of entity properties to linked entities that should be included                                  |         |
| Records Per Page     | The number of record to retrieve per page                                                                  | 100     |
| Next Page Id         | The id or cookie to use for retrieving the next page of results when paginating through a large result set |         |
| Connection           |                                                                                                            |         |

### [CRM] Raw Request

Send raw HTTP request to Microsoft Dynamics 365 CRM

| Input                   | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                             |         |
| URL                     | Input the path only (/api/data/v9.2/accounts?$select=name), The base URL is already included (https://my-org.api.crm.dynamics.com). For example, to connect to https://my-org.api.crm.dynamics.com/api/data/v9.2/accounts?$select=name, only /api/data/v9.2/accounts?$select=name is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                     |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                   |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                        |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                            |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                      |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                         |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                 |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                    | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                         |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                        | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                               | false   |

### [CRM] Run Fetch XML Query

Execute a fetch XML query against your Microsoft Dynamics 365 CRM instance.

| Input               | Comments                                                                                                   | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Entity Type         | The type of Entity to query, usually a pluralized name                                                     |         |
| XML Query           | An XML query string to use as a Fetch query in Microsoft Dynamics 365                                      |         |
| Include Annotations | Specifies annotations to include with the result                                                           |         |
| Page Number         | The page number to request                                                                                 |         |
| Next Page Id        | The id or cookie to use for retrieving the next page of results when paginating through a large result set |         |
| Impersonate User Id | Specifies the GUID of a user to impersonate when executing the query                                       |         |
| Connection          |                                                                                                            |         |

### [CRM] Update Attribute

Update an existing CRM Attribute on an Entity

| Input          | Comments                           | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection     |                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Entity ID      | The ID of a specific Entity record |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Attribute Body | Attribute body payload to send     | <code>{<br /> "AttributeType": "Money",<br /> "AttributeTypeName": {<br /> "Value": "MoneyType"<br /> },<br /> "Description": {<br /> "@odata.type": "Microsoft.Dynamics.CRM.Label",<br /> "LocalizedLabels": [<br /> {<br /> "@odata.type": "Microsoft.Dynamics.CRM.LocalizedLabel",<br /> "Label": "Enter the balance amount",<br /> "LanguageCode": 1033<br /> }<br /> ]<br /> },<br /> "DisplayName": {<br /> "@odata.type": "Microsoft.Dynamics.CRM.Label",<br /> "LocalizedLabels": [<br /> {<br /> "@odata.type": "Microsoft.Dynamics.CRM.LocalizedLabel",<br /> "Label": "Balance",<br /> "LanguageCode": 1033<br /> }<br /> ]<br /> },<br /> "RequiredLevel": {<br /> "Value": "None",<br /> "CanBeChanged": true,<br /> "ManagedPropertyLogicalName": "canmodifyrequirementlevelsettings"<br /> },<br /> "SchemaName": "new_Balance",<br /> "@odata.type": "Microsoft.Dynamics.CRM.MoneyAttributeMetadata",<br /> "PrecisionSource": 2<br />}</code> |

### [CRM] Update Entity

Update a Microsoft Dynamics 365 CRM entity record.

| Input          | Comments                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------- | ------- |
| Entity Type    | The type of Entity to query, usually a pluralized name                          |         |
| Entity ID      | The ID of a specific Entity record                                              |         |
| Field Value    | The names of the fields and their values to use when creating/updating a record |         |
| Dynamic Values |                                                                                 |         |
| Connection     |                                                                                 |         |

### [CRM] Upsert Entity

Upsert a Microsoft Dynamics 365 CRM entity record.

| Input          | Comments                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------- | ------- |
| Entity Type    | The type of Entity to query, usually a pluralized name                          |         |
| Entity ID      | The ID of a specific Entity record                                              |         |
| Field Value    | The names of the fields and their values to use when creating/updating a record |         |
| Dynamic Values |                                                                                 |         |
| Connection     |                                                                                 |         |

### List Entity Types

Retrieve a list of entity types available in your Microsoft Dynamics 365 environment with pagination support

| Input         | Comments                                                                                   | Default |
| ------------- | ------------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                            |         |
| Max Page Size | Maximum number of entities to return per page (1-5000). Defaults to 5000 if not specified. | 5000    |
| Next Link     | The @odata.nextLink URL from a previous response to get the next page of results           |         |

### Raw Request

Send raw HTTP request to Microsoft Dynamics 365

| Input                   | Comments                                                                                                                                                                                                                                                                                                    | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                             |         |
| URL                     | Input the path only (/api/data/v9.2/accounts?$select=name), The base URL is already included (https://my-org.api.crm.dynamics.com). For example, to connect to https://my-org.api.crm.dynamics.com/api/data/v9.2/accounts?$select=name, only /api/data/v9.2/accounts?$select=name is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                     |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                   |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                        |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                            |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                      |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                         |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                 |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                    | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                         |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                        | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                               | false   |
