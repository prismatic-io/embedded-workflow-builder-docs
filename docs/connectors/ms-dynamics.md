---
title: Microsoft Dynamics 365 Connector
sidebar_label: Microsoft Dynamics 365
description: Query, create, update, or delete Microsoft Dynamics 365 entity records.
---

![Microsoft Dynamics 365](./assets/ms-dynamics.png#connector-icon)
[Microsoft Dynamics 365](https://www.microsoft.com/dynamics-365/) is a product line of enterprise resource planning (ERP) and customer relationship management (CRM) intelligent business applications.
This component provides the ability to query and modify records within the Microsoft Dynamics 365 platform.

## API Documentation

- [Microsoft Dataverse Web API guide](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/use-microsoft-dynamics-365-web-api)
- [Dynamics 365 Release Plans](https://learn.microsoft.com/en-us/dynamics365/release-plans/)

## Connections

### OAuth 2.0 Authorization Code {#oauth2}

Authenticate requests using OAuth 2.0 Authorization Code.

<Vimeo video="907604023" />

The OAuth 2.0 authorization code flow allows an end user to grant the integration permission to interact with Dynamics on their behalf.

#### Prerequisites

- An active [Azure Portal](https://portal.azure.com/) account with permission to register applications.
- Access to a Microsoft Dynamics 365 environment.

#### Setup Steps

1. Log in to [Azure Portal](https://portal.azure.com/).
1. Select **App Registrations**.
1. Click **+ New Registration**.
   - **Supported Account Types** should be **Multi-tenant** when end customers will authenticate with their own Dynamics instance, or **Single-tenant** when authenticating with a single Dynamics instance.
   - Under **Redirect URI** enter `https://oauth2.%WHITE_LABEL_BASE_URL%/callback`.
   - Click **Register**.
1. Under **API Permissions** click **+ Add A Permission**.
   - Select **Dynamics CRM**.
   - Check the `user_impersonation` permission.
   - Click **Add Permissions**.
   - Additionally, ensure the `offline_access` scope is included in the app registration. It is essential to maintain the OAuth connection and receive refresh tokens. Without it, end users will need to re-authenticate every hour.
1. Under **Certificates & Secrets** click **+ New Client Secret**.
   - Provide a description and expiration date for the certificate.
   - Take note of the **Value** (not the Secret ID) of the client secret.
1. Returning to the **Overview** page, take note of **Application (Client) ID**.

#### Configure The Connection

Create a connection of type **OAuth 2.0 Authorization Code**.

- Enter the **Client ID** and **Client Secret** noted above.
- Log in to Dynamics and take note of the Dynamics URL.
  - Enter that Dynamics URL as the **Web API URL**. It should look like `https://REPLACE-ME.crm.dynamics.com/`.
  - Under scopes, enter the following, replacing the URL with the Dynamics URL: `https://REPLACE-ME.crm.dynamics.com/user_impersonation offline_access`.

#### App Verification and Admin Consent

Microsoft requires Azure AD app registrations used in multi-tenant deployments to complete a publisher verification process. This review confirms the app developer's identity, giving end users confidence that they are authorizing a legitimate, verified application.

Azure AD app registrations have two distinct verification concepts that affect how users experience the authentication flow.

#### Publisher Verification

**Complete publisher verification before deploying to end users.** Without it, the Microsoft consent screen displays **"Unverified"** next to the app name. This reduces user trust and may prevent users in organizations with strict Azure AD policies from being able to authorize the app at all.

To verify the publisher:

1. Ensure the organization has a [Microsoft Partner Network (MPN) account](https://partner.microsoft.com/)
2. In the [Microsoft Entra Admin Center](https://entra.microsoft.com/), open the app registration
3. Under **Branding & properties**, click **Add a verified publisher**
4. Enter the MPN ID and confirm

Once verified, the consent screen displays the organization name with a verified badge instead of "Unverified."

#### Admin Consent

Apps requesting **application permissions** (permissions that act without a signed-in user) or high-privilege **delegated permissions** require admin consent before any user in a Microsoft 365 tenant can authenticate. Without admin consent, users see a **"Need admin approval"** error.

A tenant administrator can grant consent using either method:

**Method 1 — Admin Consent URL:**

Navigate to the following URL, replacing `{tenant}` with the Directory tenant ID and `{client_id}` with the Application client ID:

    https://login.microsoftonline.com/{tenant}/adminconsent?client_id={client_id}

**Method 2 — Microsoft Entra Admin Center:**

1. Navigate to [Microsoft Entra Admin Center](https://entra.microsoft.com/) → **Enterprise applications**
2. Select the app registration
3. Under **Permissions**, click **Grant admin consent for [organization name]**

:::note[Delegated vs. Application Permissions]
Delegated permissions (user-level) typically do not require admin consent unless they are classified as high privilege. Application permissions always require admin consent. Review the [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference) to identify which permissions require consent.
:::

<Vimeo video="907604023" />

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                            | Default |
| ------------- | ----------------------------------------------------------------------------------- | ------- |
| Web API URL   | The organization's Microsoft Dynamics 365 Web API URL.                              |         |
| Scopes        | A space-delimited set of one or more scopes to get the user's permission to access. |         |
| Client ID     | Generated when registering an application in the Azure portal.                      |         |
| Client Secret | Generated when registering an application in the Azure portal.                      |         |

### OAuth 2.0 Client Credentials {#clientcredentials}

Authenticate requests using OAuth 2.0 Client Credentials.

The OAuth 2.0 client credentials flow allows the creation of an **Application User** to send requests to Dynamics on behalf of an organization.
Setting up a client credentials connection is a two-step process:

1. Create an "App" in Azure.
1. Create an "Application User" in Dynamics.

#### Prerequisites

- An active Azure subscription with permission to register applications in [Azure Portal](https://portal.azure.com/).
- Microsoft Dynamics 365 administrator access to the [Power Platform admin center](https://admin.powerplatform.microsoft.com/), including the ability to manage Application Users and assign Security Roles.

#### Setup Steps

##### Create An App In Microsoft Azure

1. Log in to [Azure Portal](https://portal.azure.com/).
1. Select **App Registrations**.
1. Click **+ New Registration**.
   - **Supported Account Types** can be **Single Tenant**.
   - No **Redirect URI** is necessary.
   - Click **Register**.
1. Under **API Permissions** click **+ Add A Permission**.
   - Select **Dynamics CRM**.
   - Check the `user_impersonation` permission.
   - Click **Add Permissions**.
1. Under **API Permissions** click **Grant Admin Consent For (Tenant)** to consent to the requested permissions on behalf of the organization.
1. Under **Certificates & Secrets** click **+ New Client Secret**.
   - Provide a description and expiration date for the certificate.
   - Take note of the **Value** (not the Secret ID) of the client secret.
1. Returning to the **Overview** page, take note of **Application (Client) ID**.
1. From the **Overview** page, click **Endpoints** and take note of the **OAuth 2.0 Token Endpoint (V2)**.

The **Client Secret Value**, **Client ID**, and **Token Endpoint** will be used in the connection configuration.

##### Add The App As An App User To Dynamics

1. Log in to [Power Platform Admin Center](https://admin.powerplatform.microsoft.com/).
1. Select **Environments** and choose the appropriate Dynamics environment.
1. Select **S2S Apps**.
1. Click **+ New App User**.
   - Click **+ Add An App**.
   - Choose the app created in Azure portal (above). The app can be located by entering the client ID noted previously.
   - Select the Dynamics tenant as the **Business Unit**.
   - Under **Security Roles** select **System Administrator**.
   - Click **Create**.

#### Configure The Connection

Create a connection of type **OAuth 2.0 Client Credentials**.

- Enter the **Token Endpoint** noted above as the **Token URL**.
- Enter the **Client ID** and **Client Secret Value** noted above.
- Log in to Dynamics and take note of the Dynamics URL.
  - Enter that Dynamics URL as the **Web API URL**. It should look like `https://REPLACE-ME.crm.dynamics.com/`.
  - Under scopes, enter the Dynamics URL with `.default` appended to it — `https://REPLACE-ME.crm.dynamics.com/.default`.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                          | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Web API URL         | The organization's Microsoft Dynamics 365 Web API URL.                                                                            |         |
| Token URL           | The OAuth 2.0 token endpoint. This can be found in the Azure portal under the app's 'Endpoints' menu.                             |         |
| Scopes              | The OAuth 2.0 scope. Use the Dynamics Web API URL with '/.default' appended (e.g., https://my-org.api.crm.dynamics.com/.default). |         |
| Client ID           | Generated when registering an application in the Azure portal.                                                                    |         |
| Client secret value | Generated when registering an application in the Azure portal.                                                                    |         |

## Triggers

### New and Updated Records {#pollchangestrigger}

Checks for new and updated records of a Microsoft Dynamics 365 entity type on a configured schedule.

| Input                | Comments                                                                                  | Default |
| -------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                           |         |
| Entity Type          | The type of Entity to query, usually a pluralized name.                                   |         |
| Filter Expression    | The filter expression that used for querying entity collections.                          |         |
| Show New Records     | When enabled, newly created records will be included in the trigger output.               | true    |
| Show Updated Records | When enabled, records updated after the last poll will be included in the trigger output. | true    |

### Webhook {#dynamicswebhooktrigger}

Receive and validate webhook requests from Microsoft Dynamics 365 for manually configured webhook subscriptions.

| Input                      | Comments                                                                                                                                                                                                                                                  | Default |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Webhook Authentication Key | Optional authentication key for incoming webhook requests. When set, requests must include this value in the '?code' query parameter (Microsoft Dynamics 'Webhook Key' authentication mode). Strongly recommended to prevent unauthorized event spoofing. |         |

## Actions

### Create Attribute {#createattribute}

Creates a CRM attribute on an entity.

| Input          | Comments                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection     |                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Entity ID      | The unique identifier (GUID) of the entity record to operate on. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Attribute Body | The JSON payload describing the attribute to create or update.   | <code>{<br /> "AttributeType": "Money",<br /> "AttributeTypeName": {<br /> "Value": "MoneyType"<br /> },<br /> "Description": {<br /> "@odata.type": "Microsoft.Dynamics.CRM.Label",<br /> "LocalizedLabels": [<br /> {<br /> "@odata.type": "Microsoft.Dynamics.CRM.LocalizedLabel",<br /> "Label": "Enter the balance amount",<br /> "LanguageCode": 1033<br /> }<br /> ]<br /> },<br /> "DisplayName": {<br /> "@odata.type": "Microsoft.Dynamics.CRM.Label",<br /> "LocalizedLabels": [<br /> {<br /> "@odata.type": "Microsoft.Dynamics.CRM.LocalizedLabel",<br /> "Label": "Balance",<br /> "LanguageCode": 1033<br /> }<br /> ]<br /> },<br /> "RequiredLevel": {<br /> "Value": "None",<br /> "CanBeChanged": true,<br /> "ManagedPropertyLogicalName": "canmodifyrequirementlevelsettings"<br /> },<br /> "SchemaName": "new_Balance",<br /> "@odata.type": "Microsoft.Dynamics.CRM.MoneyAttributeMetadata",<br /> "PrecisionSource": 2<br />}</code> |

### Create Entity {#createentity}

Creates a new Microsoft Dynamics 365 CRM entity record.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Entity Type    | The type of Entity to query, usually a pluralized name.                          |         |
| Dynamic Values |                                                                                  |         |
| Field Value    | The names of the fields and their values to use when creating/updating a record. |         |
| Connection     |                                                                                  |         |

### Delete Entity {#deleteentity}

Deletes the specified Microsoft Dynamics 365 CRM entity record.

| Input       | Comments                                                         | Default |
| ----------- | ---------------------------------------------------------------- | ------- |
| Entity Type | The type of Entity to query, usually a pluralized name.          |         |
| Entity ID   | The unique identifier (GUID) of the entity record to operate on. |         |
| Connection  |                                                                  |         |

### Get Attribute {#getattribute}

Retrieves a single CRM attribute.

| Input                | Comments                                                                             | Default |
| -------------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection           |                                                                                      |         |
| Entity ID            | The unique identifier (GUID) of the entity record to operate on.                     |         |
| Attribute Key        | The Attribute Metadata id.                                                           |         |
| Field Name           | The OData $select fields to include in the result. Leave empty to return all fields. |         |
| Expand Property Name | The OData $expand properties to include linked records inline.                       |         |

### Get Current User {#getcurrentuser}

Retrieves information about the currently logged-in CRM user.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Entities Metadata {#getentitiesmetadata}

Retrieves a configurable subset of Dynamics 365 CRM entity types and their attributes.

| Input                               | Comments                                                                                                                        | Default |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                          |                                                                                                                                 |         |
| Default Selected Entity Types       | The names of the Entity Types to default in a selected state.                                                                   |         |
| Entity Type Filter                  | The names or labels of the Entity Types to include; if blank then all types are included. Uses case-insensitive matching.       |         |
| Include All Custom Entity Types     | When true, will include all Custom Entity Types, even those not included in Record Type Name Filter.                            | true    |
| Include Only Top Level Record Types | When true, will include only Entity Types that are top-level, meaning not subtypes of other Types, regardless of other filters. | false   |

### Get Entity {#getentity}

Retrieves a single Microsoft Dynamics 365 CRM entity record.

| Input                | Comments                                                                             | Default |
| -------------------- | ------------------------------------------------------------------------------------ | ------- |
| Entity Type          | The type of Entity to query, usually a pluralized name.                              |         |
| Entity ID            | The unique identifier (GUID) of the entity record to operate on.                     |         |
| Field Name           | The OData $select fields to include in the result. Leave empty to return all fields. |         |
| Expand Property Name | The OData $expand properties to include linked records inline.                       |         |
| Connection           |                                                                                      |         |

### Get Entity Metadata {#getentitymetadata}

Retrieves the definition of a Microsoft Dynamics 365 CRM entity.

| Input                       | Comments                                                                                                       | Default |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                |         |
| Entity Type                 | The type of Entity to query, usually a pluralized name.                                                        |         |
| Use Logical Name for Lookup | When true, looks up the entity by its logical name (e.g., 'account'). When false, looks up by entity set name. | true    |

### List Attributes {#listattributesaction}

Lists all attributes for a specific entity in the Dynamics 365 CRM instance.

| Input                  | Comments                                                                                         | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                                  |         |
| Entity ID              | The unique identifier (GUID) of the entity record to operate on.                                 |         |
| Attribute Type         | The CRM attribute type to filter by, e.g., 'Money', 'String', 'Picklist'.                        |         |
| Include Entity Details | When true, includes additional metadata such as description, ownership type, and validity flags. | false   |

### List Entities {#listentitiesaction}

Lists all available entities in the Dynamics 365 CRM instance with detailed metadata.

| Input                   | Comments                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection              |                                                                                                  |         |
| Include Custom Entities | When true, includes custom entities in the result.                                               | true    |
| Top Level Only          | When true, includes only top-level entities and excludes child entities.                         | false   |
| Include Entity Details  | When true, includes additional metadata such as description, ownership type, and validity flags. | false   |

### List Entity Types {#listentities}

Retrieves a paginated list of entity types available in the Microsoft Dynamics 365 environment.

| Input         | Comments                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                   |         |
| Max Page Size | Maximum number of entities to return per page (1-5000).                           | 5000    |
| Next Link     | The @odata.nextLink URL from a previous response to get the next page of results. |         |
| Fetch All     | When true, automatically fetches all pages of results using pagination.           | false   |

### Query Attributes {#queryattributes}

Queries CRM attributes that satisfy the filter expression.

| Input                | Comments                                                                             | Default |
| -------------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection           |                                                                                      |         |
| Entity ID            | The unique identifier (GUID) of the entity record to operate on.                     |         |
| Attribute Type       | The CRM attribute type to filter by, e.g., 'Money', 'String', 'Picklist'.            |         |
| Field Name           | The OData $select fields to include in the result. Leave empty to return all fields. |         |
| Filter Expression    | The filter expression that used for querying entity collections.                     |         |
| Expand Property Name | The OData $expand properties to include linked records inline.                       |         |

### Query Entities {#queryentities}

Queries Microsoft Dynamics 365 CRM entity records that satisfy the filter expression.

| Input                | Comments                                                                                                   | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                            |         |
| Entity Type          | The type of Entity to query, usually a pluralized name.                                                    |         |
| Field Name           | The OData $select fields to include in the result. Leave empty to return all fields.                       |         |
| Filter Expression    | The filter expression that used for querying entity collections.                                           |         |
| Order By Field Name  | The OData $orderby fields. Suffix with 'desc' for descending order, e.g., 'createdon desc'.                |         |
| Expand Property Name | The OData $expand properties to include linked records inline.                                             |         |
| Fetch All            | When true, automatically fetches all pages of results using pagination.                                    | false   |
| Records Per Page     | The number of record to retrieve per page.                                                                 | 100     |
| Next Page ID         | The pagination cookie returned in 'oDataNextLink' from a previous request. Leave empty for the first page. |         |

### Raw Request {#rawrequestv2}

Sends a raw HTTP request to Microsoft Dynamics 365.

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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                               | false   |

### Raw Request (Deprecated) {#rawrequest}

Sends a raw HTTP request to Microsoft Dynamics 365 CRM.

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
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                         | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                            | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                         | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                               | false   |

### Run Batch Operations {#batchentityactions}

Performs multiple create, update, or delete operations on Microsoft Dynamics 365 CRM entity records.

| Input         | Comments                                                                                                                                                                                                                                                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Batch Actions | A list of up to 1000 create, update or delete actions to perform. Each action must have a 'collection' and an 'action' (create, update or delete). Create or update actions must also have 'data' and can include a boolean 'returnRepresentation' which determines if the full record should be returned after being created or updated. Update or delete actions must also have an entity key. | <code>[<br /> {<br /> "collection": "msevtmgt_events",<br /> "action": "create",<br /> "returnRepresentation": true,<br /> "data": {<br /> "msevtmgt_name": "Test Event 1",<br /> "msevtmgt_eventtype": "100000002"<br /> }<br /> },<br /> {<br /> "collection": "msevtmgt_events",<br /> "action": "update",<br /> "key": "00000000-0000-0000-0000-000000000002",<br /> "returnRepresentation": true,<br /> "data": {<br /> "msevtmgt_name": "Test Event 2",<br /> "msevtmgt_eventtype": "100000002"<br /> }<br /> },<br /> {<br /> "collection": "msevtmgt_events",<br /> "action": "delete",<br /> "key": "00000000-0000-0000-0000-000000000002"<br /> }<br />]</code> |

### Run Fetch XML Query {#fetchxml}

Executes a Fetch XML query against the Microsoft Dynamics 365 CRM instance.

| Input               | Comments                                                                                                                                                             | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                      |         |
| Entity Type         | The type of Entity to query, usually a pluralized name.                                                                                                              |         |
| XML Query           | An XML query string to use as a Fetch query in Microsoft Dynamics 365.                                                                                               |         |
| Include Annotations | The 'Prefer: odata.include-annotations' header value, e.g., '*' to include all annotations or 'OData.Community.Display.V1.FormattedValue' for formatted values only. |         |
| Impersonate User ID | Specifies the GUID of a user to impersonate when executing the query.                                                                                                |         |
| Fetch All           | When true, automatically fetches all pages of results using pagination.                                                                                              | false   |
| Page Number         | The 1-based page number to retrieve when iterating through Fetch XML query results.                                                                                  |         |
| Next Page ID        | The pagination cookie returned in 'oDataNextLink' from a previous request. Leave empty for the first page.                                                           |         |

### Update Attribute {#updateattribute}

Updates an existing CRM attribute on an entity.

| Input          | Comments                                                         | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection     |                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Entity ID      | The unique identifier (GUID) of the entity record to operate on. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Attribute Body | The JSON payload describing the attribute to create or update.   | <code>{<br /> "AttributeType": "Money",<br /> "AttributeTypeName": {<br /> "Value": "MoneyType"<br /> },<br /> "Description": {<br /> "@odata.type": "Microsoft.Dynamics.CRM.Label",<br /> "LocalizedLabels": [<br /> {<br /> "@odata.type": "Microsoft.Dynamics.CRM.LocalizedLabel",<br /> "Label": "Enter the balance amount",<br /> "LanguageCode": 1033<br /> }<br /> ]<br /> },<br /> "DisplayName": {<br /> "@odata.type": "Microsoft.Dynamics.CRM.Label",<br /> "LocalizedLabels": [<br /> {<br /> "@odata.type": "Microsoft.Dynamics.CRM.LocalizedLabel",<br /> "Label": "Balance",<br /> "LanguageCode": 1033<br /> }<br /> ]<br /> },<br /> "RequiredLevel": {<br /> "Value": "None",<br /> "CanBeChanged": true,<br /> "ManagedPropertyLogicalName": "canmodifyrequirementlevelsettings"<br /> },<br /> "SchemaName": "new_Balance",<br /> "@odata.type": "Microsoft.Dynamics.CRM.MoneyAttributeMetadata",<br /> "PrecisionSource": 2<br />}</code> |

### Update Entity {#updateentity}

Updates a Microsoft Dynamics 365 CRM entity record.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Entity Type    | The type of Entity to query, usually a pluralized name.                          |         |
| Entity ID      | The unique identifier (GUID) of the entity record to operate on.                 |         |
| Field Value    | The names of the fields and their values to use when creating/updating a record. |         |
| Dynamic Values |                                                                                  |         |
| Connection     |                                                                                  |         |

### Upsert Entity {#upsertentity}

Upserts a Microsoft Dynamics 365 CRM entity record.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Entity Type    | The type of Entity to query, usually a pluralized name.                          |         |
| Entity ID      | The unique identifier (GUID) of the entity record to operate on.                 |         |
| Field Value    | The names of the fields and their values to use when creating/updating a record. |         |
| Dynamic Values |                                                                                  |         |
| Connection     |                                                                                  |         |
