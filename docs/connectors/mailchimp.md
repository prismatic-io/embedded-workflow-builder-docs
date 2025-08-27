---
title: Mailchimp Connector
sidebar_label: Mailchimp
description: Interact with email campaign lists and e-commerce resources.
---

![Mailchimp](./assets/mailchimp.png#connector-icon)
Interact with email campaign lists and e-commerce resources.

## Connections

### Mailchimp API Key

Authenticate requests to Mailchimp using an API Key

This component can be configured to use an API Key to authenticate the request. An API key can be obtained by following Mailchimp's [quickstart guide](https://mailchimp.com/developer/marketing/guides/quick-start/)

| Input         | Comments                                                                      | Default |
| ------------- | ----------------------------------------------------------------------------- | ------- |
| API Key       | Provide a string value for the API Key.                                       |         |
| Debug Request | When enabled, the component will log the request and response to the console. | false   |

### Mailchimp OAuth 2.0 Connection

Authenticate requests to Mailchimp using OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                      | Default |
| ------------- | ----------------------------------------------------------------------------- | ------- |
| Client ID     |                                                                               |         |
| Client secret |                                                                               |         |
| Debug Request | When enabled, the component will log the request and response to the console. | false   |

## Actions

### Add Customer

Add a new customer to a store

| Input         | Comments                                                                                                                                                                                                                                                                                               | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Store Id      | Provide a string value that represents the store Id.                                                                                                                                                                                                                                                   |         |
| Customer Id   | Provide a string value that represents the customer Id.                                                                                                                                                                                                                                                |         |
| Email         | Provide a string value that represents the email address.                                                                                                                                                                                                                                              |         |
| Opt In Status | The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list will be added as Transactional members. | false   |
| Company       | Provide a string value that represents the company.                                                                                                                                                                                                                                                    |         |
| First Name    | Provide a string value that represents a first name.                                                                                                                                                                                                                                                   |         |
| Last Name     | Provide a string value that represents a last name.                                                                                                                                                                                                                                                    |         |
| Address 1     | Provide a string value that represents the 1st address field.                                                                                                                                                                                                                                          |         |
| Address 2     | Provide a string value that represents the 2nd address field.                                                                                                                                                                                                                                          |         |
| City          | Provide a string value that represents the city.                                                                                                                                                                                                                                                       |         |
| Country Code  | Provide a string value that represents the country code                                                                                                                                                                                                                                                |         |
| Province Code | Provide a string value that represents the province code.                                                                                                                                                                                                                                              |         |
| Postal Code   | Provide a string value that represents the postal code.                                                                                                                                                                                                                                                |         |
| Province      | Provide a string value that represents the province.                                                                                                                                                                                                                                                   |         |
| Country       | Provide a string value that represents the country                                                                                                                                                                                                                                                     |         |
| Connection    |                                                                                                                                                                                                                                                                                                        |         |

### Add List

Create a new list in your Mailchimp account

| Input                 | Comments                                                                                                                                                                                                                                               | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Company               | Provide a string value that represents the company.                                                                                                                                                                                                    |         |
| Address 1             | Provide a string value that represents the 1st address field.                                                                                                                                                                                          |         |
| Address 2             | Provide a string value that represents the 2nd address field.                                                                                                                                                                                          |         |
| City                  | Provide a string value that represents the city.                                                                                                                                                                                                       |         |
| State                 | Provide a string value that represents the state.                                                                                                                                                                                                      |         |
| Postal Code           | Provide a string value that represents the postal code.                                                                                                                                                                                                |         |
| Phone                 | Provide a string value that represents phone number                                                                                                                                                                                                    |         |
| Country               | Provide a string value that represents the country                                                                                                                                                                                                     |         |
| Name                  | Provide a string value that represents the name of the list.                                                                                                                                                                                           |         |
| From Email            | The 'from' name on the campaign (not an email address).                                                                                                                                                                                                |         |
| From Name             | The default 'from name' for campaigns sent to this list.                                                                                                                                                                                               |         |
| Subject               | Provide a string value that represents the subject of the email.                                                                                                                                                                                       |         |
| Language              | The default language for this lists's forms.                                                                                                                                                                                                           |         |
| Marketing Permissions | Whether or not the list has marketing permissions (eg. GDPR) enabled.                                                                                                                                                                                  | false   |
| Email Type Option     | Whether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup. | false   |
| Permission reminder   | Provide a string value that represents the permission reminder.                                                                                                                                                                                        |         |
| Connection            |                                                                                                                                                                                                                                                        |         |

### Add Member

Add a new member to a list

| Input       | Comments                                                                                                              | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id     | Provide a string value for the Id of the list.                                                                        |         |
| Email       | Provide a string value that represents the email address.                                                             |         |
| Language    | The default language for this lists's forms.                                                                          |         |
| Status      | Subscriber's current status. Possible values: "subscribed", "unsubscribed", "cleaned", "pending", or "transactional". |         |
| Email Type  | Type of email this member asked to get ('html' or 'text').                                                            |         |
| Merge Field | A merge field (audience fields) where the key is the merge tag. For example, {"FNAME":"Freddie"}                      |         |
| Tags        | The tags that are associated with a member.                                                                           |         |
| Interest    | The key of this object's properties is the Id of the interest in question.                                            |         |
| VIP         | Provide a boolean to determine VIP status.                                                                            | false   |
| Connection  |                                                                                                                       |         |

### Archive Member

Archive a list member

| Input          | Comments                                                                                                              | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id        | Provide a string value for the Id of the list.                                                                        |         |
| SubscriberHash | The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts email addresses. |         |
| Connection     |                                                                                                                       |         |

### Delete Cart

Delete a specific cart

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Store Id   | Provide a string value that represents the store Id. |         |
| Cart Id    | Provide a string value that represents the cart Id.  |         |
| Connection |                                                      |         |

### Delete Cart Line Items

Get information about a cart's line items.

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Store Id   | Provide a string value that represents the store Id. |         |
| Cart Id    | Provide a string value that represents the cart Id.  |         |
| Line Id    | Provide a string value that represents the line Id.  |         |
| Connection |                                                      |         |

### Delete Customer

Delete a customer from a store

| Input       | Comments                                                | Default |
| ----------- | ------------------------------------------------------- | ------- |
| Store Id    | Provide a string value that represents the store Id.    |         |
| Customer Id | Provide a string value that represents the customer Id. |         |
| Connection  |                                                         |         |

### Delete List

Delete a list from your Mailchimp account

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| List Id    | Provide a string value for the Id of the list. |         |
| Connection |                                                |         |

### Delete Member

Delete all personally identifiable information related to a list member, and remove them from a list. This will make it impossible to re-import the list member

| Input          | Comments                                                                                                              | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id        | Provide a string value for the Id of the list.                                                                        |         |
| SubscriberHash | The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts email addresses. |         |
| Connection     |                                                                                                                       |         |

### Delete Order

Delete an order

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Order Id   | Provide a string value that represents the order id. |         |
| Store Id   | Provide a string value that represents the store Id. |         |
| Connection |                                                      |         |

### Delete Order Line Item

Delete an order Line Item

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Order Id   | Provide a string value that represents the order id. |         |
| Store Id   | Provide a string value that represents the store Id. |         |
| Line Id    | Provide a string value that represents the line Id.  |         |
| Connection |                                                      |         |

### Delete Product

Delete a product from a store

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Store Id   | Provide a string value that represents the store Id.   |         |
| Product Id | Provide a string value that represents the product Id. |         |
| Connection |                                                        |         |

### Get Cart

Get information about a specific cart

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Store Id   | Provide a string value that represents the store Id. |         |
| Cart Id    | Provide a string value that represents the cart Id.  |         |
| Connection |                                                      |         |

### Get Cart Line Item

Get information about a cart's specific line item

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Store Id   | Provide a string value that represents the store Id. |         |
| Cart Id    | Provide a string value that represents the cart Id.  |         |
| Line Id    | Provide a string value that represents the line Id.  |         |
| Connection |                                                      |         |

### Get Customer

Get information about a store's specific customer

| Input       | Comments                                                | Default |
| ----------- | ------------------------------------------------------- | ------- |
| Store Id    | Provide a string value that represents the store Id.    |         |
| Customer Id | Provide a string value that represents the customer Id. |         |
| Connection  |                                                         |         |

### Get List

Get information about a specific list in your Mailchimp account. Results include list members who have signed up but haven't confirmed their subscription yet and unsubscribed or cleaned.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| List Id    | Provide a string value for the Id of the list. |         |
| Connection |                                                |         |

### Get Lists Info

Get information about all lists in the account

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Offset       | Provide an integer value for the page offset for the given object's results.                                      |         |
| Result Count | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Connection   |                                                                                                                   |         |

### Get Member

Get information about a specific list member, including a currently subscribed, unsubscribed, or bounced member

| Input          | Comments                                                                                                              | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| List Id        | Provide a string value for the Id of the list.                                                                        |         |
| SubscriberHash | The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts email addresses. |         |
| Connection     |                                                                                                                       |         |

### Get Order

Get information about a specific order

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Store Id   | Provide a string value that represents the store Id. |         |
| Order Id   | Provide a string value that represents the order id. |         |
| Connection |                                                      |         |

### Get Order Line Item

Get an order Line Item

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Order Id   | Provide a string value that represents the order id. |         |
| Store Id   | Provide a string value that represents the store Id. |         |
| Line Id    | Provide a string value that represents the line Id.  |         |
| Connection |                                                      |         |

### Get Product

Get information about a specific product

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Store Id   | Provide a string value that represents the store Id.   |         |
| Product Id | Provide a string value that represents the product Id. |         |
| Connection |                                                        |         |

### Get Store

Get information about a specific store

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Store Id   | Provide a string value that represents the store Id. |         |
| Connection |                                                      |         |

### List Account Orders

Get information about an account's orders

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                   |         |
| Result Count | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Offset       | Provide an integer value for the page offset for the given object's results.                                      |         |

### List Campaigns

Get all campaigns in an account

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Result Count | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Offset       | Provide an integer value for the page offset for the given object's results.                                      |         |
| Connection   |                                                                                                                   |         |

### List Cart Line Items

Get information about a cart's line items.

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | Provide a string value that represents the store Id.                                                              |         |
| Cart Id      | Provide a string value that represents the cart Id.                                                               |         |
| Result Count | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Offset       | Provide an integer value for the page offset for the given object's results.                                      |         |
| Connection   |                                                                                                                   |         |

### List Carts

Get information about a store's carts

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | Provide a string value that represents the store Id.                                                              |         |
| Offset       | Provide an integer value for the page offset for the given object's results.                                      |         |
| Result Count | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Connection   |                                                                                                                   |         |

### List Customers

Get information about a store's customers

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | Provide a string value that represents the store Id.                                                              |         |
| Result Count | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Offset       | Provide an integer value for the page offset for the given object's results.                                      |         |
| Connection   |                                                                                                                   |         |

### List Members

Get information about members in a specific Mailchimp list

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| List Id      | Provide a string value for the Id of the list.                                                                    |         |
| Result Count | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Offset       | Provide an integer value for the page offset for the given object's results.                                      |         |
| Connection   |                                                                                                                   |         |

### List Order Line Items

List Order Line items

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | Provide a string value that represents the store Id.                                                              |         |
| Order Id     | Provide a string value that represents the order id.                                                              |         |
| Result Count | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Offset       | Provide an integer value for the page offset for the given object's results.                                      |         |
| Connection   |                                                                                                                   |         |

### List Orders

List all the orders in a store

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | Provide a string value that represents the store Id.                                                              |         |
| Result Count | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Offset       | Provide an integer value for the page offset for the given object's results.                                      |         |
| Connection   |                                                                                                                   |         |

### List Products

List all products from a store

| Input        | Comments                                                                                                          | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Store Id     | Provide a string value that represents the store Id.                                                              |         |
| Result Count | Provide an integer value for the maximum amount of results that will be returned. Provide a value from 1 to 1000. |         |
| Offset       | Provide an integer value for the page offset for the given object's results.                                      |         |
| Connection   |                                                                                                                   |         |

### List Stores

Get information about all stores in the account

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Ping

Send a ping to determine the status of the Mailchimp servers

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send raw HTTP request to Mailchimp

| Input                   | Comments                                                                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                      |         |
| URL                     | Input the path only (/reporting/facebook-ads), The base URL is already included (https://${dc}.api.mailchimp.com/3.0). For example, to connect to https://${dc}.api.mailchimp.com/3.0/reporting/facebook-ads, only /reporting/facebook-ads is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                  |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                 | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                        | false   |

### Send Campaign

Send a Mailchimp campaign. For RSS Campaigns, the campaign will send according to its schedule. All other campaigns will send immediately.

| Input       | Comments                                                | Default |
| ----------- | ------------------------------------------------------- | ------- |
| Campaign Id | Provide a string value that represents the campaign Id. |         |
| Connection  |                                                         |         |

### Update Customer

Update a specific customer's information

| Input         | Comments                                                                                                                                                                                                                                                                                               | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Store Id      | Provide a string value that represents the store Id.                                                                                                                                                                                                                                                   |         |
| Customer Id   | Provide a string value that represents the customer Id.                                                                                                                                                                                                                                                |         |
| Opt In Status | The customer's opt-in status. This value will never overwrite the opt-in status of a pre-existing Mailchimp list member, but will apply to list members that are added through the e-commerce API endpoints. Customers who don't opt in to your Mailchimp list will be added as Transactional members. | false   |
| Company       | Provide a string value that represents the company.                                                                                                                                                                                                                                                    |         |
| First Name    | Provide a string value that represents a first name.                                                                                                                                                                                                                                                   |         |
| Last Name     | Provide a string value that represents a last name.                                                                                                                                                                                                                                                    |         |
| Address 1     | Provide a string value that represents the 1st address field.                                                                                                                                                                                                                                          |         |
| Address 2     | Provide a string value that represents the 2nd address field.                                                                                                                                                                                                                                          |         |
| City          | Provide a string value that represents the city.                                                                                                                                                                                                                                                       |         |
| Province      | Provide a string value that represents the province.                                                                                                                                                                                                                                                   |         |
| Province Code | Provide a string value that represents the province code.                                                                                                                                                                                                                                              |         |
| Postal Code   | Provide a string value that represents the postal code.                                                                                                                                                                                                                                                |         |
| Country       | Provide a string value that represents the country                                                                                                                                                                                                                                                     |         |
| Country Code  | Provide a string value that represents the country code                                                                                                                                                                                                                                                |         |
| Connection    |                                                                                                                                                                                                                                                                                                        |         |

### Update List

Update the information or metadata of a list

| Input                 | Comments                                                                                                                                                                                                                                               | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| List Id               | Provide a string value for the Id of the list.                                                                                                                                                                                                         |         |
| Company               | Provide a string value that represents the company.                                                                                                                                                                                                    |         |
| Address 1             | Provide a string value that represents the 1st address field.                                                                                                                                                                                          |         |
| Address 2             | Provide a string value that represents the 2nd address field.                                                                                                                                                                                          |         |
| City                  | Provide a string value that represents the city.                                                                                                                                                                                                       |         |
| State                 | Provide a string value that represents the state.                                                                                                                                                                                                      |         |
| Postal Code           | Provide a string value that represents the postal code.                                                                                                                                                                                                |         |
| Phone                 | Provide a string value that represents phone number                                                                                                                                                                                                    |         |
| Country               | Provide a string value that represents the country                                                                                                                                                                                                     |         |
| Name                  | Provide a string value that represents the name of the list.                                                                                                                                                                                           |         |
| From Email            | The 'from' name on the campaign (not an email address).                                                                                                                                                                                                |         |
| From Name             | The default 'from name' for campaigns sent to this list.                                                                                                                                                                                               |         |
| Subject               | Provide a string value that represents the subject of the email.                                                                                                                                                                                       |         |
| Language              | The default language for this lists's forms.                                                                                                                                                                                                           |         |
| Marketing Permissions | Whether or not the list has marketing permissions (eg. GDPR) enabled.                                                                                                                                                                                  | false   |
| Email Type Option     | Whether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup. | false   |
| Permission reminder   | Provide a string value that represents the permission reminder.                                                                                                                                                                                        |         |
| Connection            |                                                                                                                                                                                                                                                        |         |

### Update Member

Update a specific member in a given list

| Input                 | Comments                                                                                                                                                    | Default                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Skip Merge Fields     | If Skip Merge Fields is true, member data will be accepted without merge field values, even if the merge field is usually required. This defaults to false. | false                                                                                                     |
| List Id               | Provide a string value for the Id of the list.                                                                                                              |                                                                                                           |
| SubscriberHash        | The MD5 hash of the lowercase version of the list member's email address. This endpoint also accepts email addresses.                                       |                                                                                                           |
| Email                 | Provide a string value that represents the email address.                                                                                                   |                                                                                                           |
| Language              | The default language for this lists's forms.                                                                                                                |                                                                                                           |
| Status                | Subscriber's current status. Possible values: "subscribed", "unsubscribed", "cleaned", "pending", or "transactional".                                       |                                                                                                           |
| Email Type            | Type of email this member asked to get ('html' or 'text').                                                                                                  |                                                                                                           |
| Merge Field           | A merge field (audience fields) where the key is the merge tag. For example, {"FNAME":"Freddie"}                                                            |                                                                                                           |
| Interest              | The key of this object's properties is the Id of the interest in question.                                                                                  |                                                                                                           |
| VIP                   | Provide a boolean to determine VIP status.                                                                                                                  | false                                                                                                     |
| Marketing Permissions | The marketing permissions for the subscriber.                                                                                                               | <code>[<br /> {<br /> "marketing_permission_id": "exampleId",<br /> "enabled": true<br /> }<br />]</code> |
| Connection            |                                                                                                                                                             |                                                                                                           |
