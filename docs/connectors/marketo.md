---
title: Adobe Marketo Engage Connector
sidebar_label: Adobe Marketo Engage
description: Manage leads, companies, and custom objects in Adobe Marketo Engage.
---

![Adobe Marketo Engage](./assets/marketo.png#connector-icon)
[Adobe Marketo](https://www.marketo.com/) allows you to leverage rich behavioral data, built-in intelligence, and sophisticated journey flows to identify, engage, and accelerate your best opportunities to orchestrate your buyer's journeys.

## Connections

### OAuth 2.0 {#oauth2}

OAuth 2.0 connection for Marketo

To make API requests of Marketo on behalf of your customers you need to create a Custom Service using the Marketo Admin Portal.
Follow the steps outlined in the [Marketo Documentation](https://developers.marketo.com/rest-api/authentication/).
Be sure to note the Client ID and Client Secret values, as these will be important when using the Marketo Connection as part of your Integration.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                | Default                                                |
| ------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Token URL     | The OAuth 2.0 Token URL for the Marketo API. Replace <ACCOUNT_ID> with your Account Id. | https://<ACCOUNT_ID>.mktorest.com/identity/oauth/token |
| Client ID     | Client Identifier of your app for the Marketo API                                       |                                                        |
| Client Secret | Client Secret of your app for the Marketo API                                           |                                                        |

## Actions

### Delete Companies {#deletecompanies}

Delete one or more Companies.

| Input      | Comments                                                                      | Default      |
| ---------- | ----------------------------------------------------------------------------- | ------------ |
| Connection |                                                                               |              |
| Delete By  | The type of deletion method                                                   | dedupeFields |
| Ids        | An array of objects that specify the id->value mapping for objects to delete. |              |

### Delete Custom Objects {#deletecustomobjects}

Delete one or more Custom Objects.

| Input              | Comments                                                                      | Default      |
| ------------------ | ----------------------------------------------------------------------------- | ------------ |
| Connection         |                                                                               |              |
| Custom Object Name | The name of the Custom Object                                                 |              |
| Delete By          | The type of deletion method                                                   | dedupeFields |
| Ids                | An array of objects that specify the id->value mapping for objects to delete. |              |

### Delete Leads {#deleteleads}

Delete one or more Leads by their Marketo id.

| Input      | Comments                                      | Default |
| ---------- | --------------------------------------------- | ------- |
| Connection |                                               |         |
| Ids        | The Marketo id(s) of the record(s) to delete. |         |

### Delete Named Accounts {#deletenamedaccounts}

Delete one or more Named Accounts.

| Input      | Comments                                                                      | Default      |
| ---------- | ----------------------------------------------------------------------------- | ------------ |
| Connection |                                                                               |              |
| Delete By  | The type of deletion method                                                   | dedupeFields |
| Ids        | An array of objects that specify the id->value mapping for objects to delete. |              |

### Delete Opportunities {#deleteopportunities}

Delete one or more Opportunities.

| Input      | Comments                                                                      | Default      |
| ---------- | ----------------------------------------------------------------------------- | ------------ |
| Connection |                                                                               |              |
| Delete By  | The type of deletion method                                                   | dedupeFields |
| Ids        | An array of objects that specify the id->value mapping for objects to delete. |              |

### Delete Sales Persons {#deletesalespersons}

Delete one or more Sales Persons.

| Input      | Comments                                                                      | Default      |
| ---------- | ----------------------------------------------------------------------------- | ------------ |
| Connection |                                                                               |              |
| Delete By  | The type of deletion method                                                   | dedupeFields |
| Ids        | An array of objects that specify the id->value mapping for objects to delete. |              |

### Describe Company {#describecompany}

Returns metadata about companies and the fields available for interaction via the API.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Describe Custom Object {#describecustomobject}

Returns metadata regarding a given custom object.

| Input              | Comments                      | Default |
| ------------------ | ----------------------------- | ------- |
| Connection         |                               |         |
| Custom Object Name | The name of the Custom Object |         |

### Describe Lead {#describelead}

Returns metadata about lead objects in the target instance, including a list of all fields available for interaction via the APIs.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Describe Named Account {#describenamedaccount}

Returns metadata about Named Accounts and the fields available for interaction via the API.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Describe Opportunities {#describeopportunities}

Returns metadata about Opportunities and the fields available for interaction via the API.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Describe Sales Person {#describesalesperson}

Returns metadata about Sales Persons and the fields available for interaction via the API.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Companies By Filter {#getcompaniesbyfilter}

Retrieves company records from the destination instance based on the submitted filter.

| Input           | Comments                                                                                                                                                 | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                          |         |
| Filter Type     | The field to filter on                                                                                                                                   |         |
| Filter Values   | A list of values to filter on for the specified field                                                                                                    |         |
| Fields          | List of field names to include                                                                                                                           |         |
| Batch Size      | The batch size to return                                                                                                                                 |         |
| Next Page Token | A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter |         |
| Fetch All       | Whether to fetch all records or just the first page.                                                                                                     | false   |

### Get Custom Objects By Filter {#getcustomobjectsbyfilter}

Retrieves a list of custom objects records based on filter and set of values.

| Input              | Comments                                                                                                                                                 | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                          |         |
| Custom Object Name | The name of the Custom Object                                                                                                                            |         |
| Filter Type        | The field to filter on                                                                                                                                   |         |
| Filter Values      | A list of values to filter on for the specified field                                                                                                    |         |
| Fields             | List of field names to include                                                                                                                           |         |
| Batch Size         | The batch size to return                                                                                                                                 |         |
| Next Page Token    | A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter |         |

### Get Lead By Id {#getleadbyid}

Retrieves a single lead record through its Marketo id.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection |                                |         |
| Lead Id    | The Marketo lead id.           |         |
| Fields     | List of field names to include |         |

### Get Leads By Filter {#getleadsbyfilter}

Returns a list of up to 300 leads based on a list of values in a particular field.

| Input           | Comments                                                                                                                                                 | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                          |         |
| Filter Type     | The field to filter on                                                                                                                                   |         |
| Filter Values   | A list of values to filter on for the specified field                                                                                                    |         |
| Fields          | List of field names to include                                                                                                                           |         |
| Batch Size      | The batch size to return                                                                                                                                 |         |
| Next Page Token | A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter |         |

### Get Named Accounts By Filter {#getnamedaccountsbyfilter}

Retrieves Named Account records from the destination instance based on the submitted filter.

| Input           | Comments                                                                                                                                                 | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                          |         |
| Filter Type     | The field to filter on                                                                                                                                   |         |
| Filter Values   | A list of values to filter on for the specified field                                                                                                    |         |
| Fields          | List of field names to include                                                                                                                           |         |
| Batch Size      | The batch size to return                                                                                                                                 |         |
| Next Page Token | A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter |         |

### Get Opportunities By Filter {#getopportunitiesbyfilter}

Retrieves Opportunity records from the destination instance based on the submitted filter.

| Input           | Comments                                                                                                                                                 | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                          |         |
| Filter Type     | The field to filter on                                                                                                                                   |         |
| Filter Values   | A list of values to filter on for the specified field                                                                                                    |         |
| Fields          | List of field names to include                                                                                                                           |         |
| Batch Size      | The batch size to return                                                                                                                                 |         |
| Next Page Token | A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter |         |

### Get Sales Persons By Filter {#getsalespersonsbyfilter}

Retrieves Sales Person records from the destination instance based on the submitted filter.

| Input           | Comments                                                                                                                                                 | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                                                                          |         |
| Filter Type     | The field to filter on                                                                                                                                   |         |
| Filter Values   | A list of values to filter on for the specified field                                                                                                    |         |
| Fields          | List of field names to include                                                                                                                           |         |
| Batch Size      | The batch size to return                                                                                                                                 |         |
| Next Page Token | A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter |         |

### Get Searchable Lead Fields {#getsearchableleadfields}

Returns list of searchable fields on lead objects in the target instance.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Custom Objects {#listcustomobjects}

Returns a list of Custom Object types available in the target instance, along with id and deduplication information for each type.

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Marketo

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

### Sync Companies (Create, Update, Upsert) {#synccompanies}

Allows inserting, updating, or upserting of company records into Marketo.

| Input        | Comments                                                                                                                                  | Default        |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection   |                                                                                                                                           |                |
| Action       | Type of sync operation to perform                                                                                                         | createOrUpdate |
| Companies    | An array of Company objects to use as input for synchronization.                                                                          |                |
| Dedupe Field | Field to deduplicate on. If the value in the field for a given record is not unique, an error will be returned for the individual record. | dedupeFields   |

### Sync Custom Objects (Create, Update, Upsert) {#synccustomobjects}

Inserts, updates, or upserts custom object records to the target instance.

| Input              | Comments                                                                                                                                  | Default        |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection         |                                                                                                                                           |                |
| Custom Object Name | The name of the Custom Object                                                                                                             |                |
| Action             | Type of sync operation to perform                                                                                                         | createOrUpdate |
| Custom Objects     | An array of Custom Objects to use as input for synchronization.                                                                           |                |
| Dedupe Field       | Field to deduplicate on. If the value in the field for a given record is not unique, an error will be returned for the individual record. | dedupeFields   |

### Sync Leads (Create, Update, Upsert) {#syncleads}

Syncs a list of leads to the target instance.

| Input            | Comments                                                                                                                                             | Default        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection       |                                                                                                                                                      |                |
| Action           | Type of sync operation to perform                                                                                                                    | createOrUpdate |
| Async Processing | If set to true, the call will return immediately                                                                                                     | false          |
| Leads            | An array of Lead objects to use as input for synchronization.                                                                                        |                |
| Lookup Field     | Field to deduplicate on. The field must be present in each lead record of the input. Defaults to email if unset.                                     | email          |
| Partition Name   | Name of the partition to operate on, if applicable. Should be set whenever possible, when interacting with an instance where partitions are enabled. |                |

### Sync Named Accounts (Create, Update, Upsert) {#syncnamedaccounts}

Allows inserts, updates, or upserts of Named Accounts to the target instance.

| Input          | Comments                                                                                                                                  | Default        |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection     |                                                                                                                                           |                |
| Action         | Type of sync operation to perform                                                                                                         | createOrUpdate |
| Named Accounts | An array of Named Account objects to use as input for synchronization.                                                                    |                |
| Dedupe Field   | Field to deduplicate on. If the value in the field for a given record is not unique, an error will be returned for the individual record. | dedupeFields   |

### Sync Opportunities (Create, Update, Upsert) {#syncopportunities}

Allows inserts, updates, or upserts of Opportunities to the target instance.

| Input         | Comments                                                                                                                                  | Default        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection    |                                                                                                                                           |                |
| Action        | Type of sync operation to perform                                                                                                         | createOrUpdate |
| Opportunities | An array of Opportunities objects to use as input for synchronization.                                                                    |                |
| Dedupe Field  | Field to deduplicate on. If the value in the field for a given record is not unique, an error will be returned for the individual record. | dedupeFields   |

### Sync Sales Persons (Create, Update, Upsert) {#syncsalespersons}

Allows inserts, updates, or upserts of Sales Persons to the target instance.

| Input         | Comments                                                                                                                                  | Default        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Connection    |                                                                                                                                           |                |
| Action        | Type of sync operation to perform                                                                                                         | createOrUpdate |
| Sales Persons | An array of Sales Person objects to use as input for synchronization.                                                                     |                |
| Dedupe Field  | Field to deduplicate on. If the value in the field for a given record is not unique, an error will be returned for the individual record. | dedupeFields   |
