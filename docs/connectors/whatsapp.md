---
title: WhatsApp Connector
sidebar_label: WhatsApp
description: WhatsApp is a messaging app that allows users to send texts, make voice and video calls, and share media.
---

![WhatsApp](./assets/whatsapp.png#connector-icon)
WhatsApp is a messaging app that allows users to send texts, make voice and video calls, and share media.

## Connections

### WhatsApp Access Token

Your WhatsApp Access Token

To get started with WhatsApp, you first need to [create a Meta developer account](https://developers.facebook.com/).

1. Select **Create app.**
2. In the ‘Add products to your app’ section, select Setup for WhatsApp.
3. Once the validation has been made to your account, navigate back to the home page of the App
4. From the side menu find the WhatsApp section and select **API Setup.**
5. Select **Generate access token** and enter the value into the connection configuration of your integration.
6. Additionally, this screen will also provide your accounts Test Number, Phone number ID, and Business Account ID.

| Input        | Comments                    | Default |
| ------------ | --------------------------- | ------- |
| Access Token | Your WhatsApp Access Token. |         |

## Triggers

### Webhook

Receive and validate webhook requests from WhatsApp Business for webhooks you configure.

| Input        | Comments                                                         | Default |
| ------------ | ---------------------------------------------------------------- | ------- |
| Verify Token | The token that WhatsApp will use to verify your webhook.         |         |
| App Secret   | The secret that WhatsApp will use to sign your webhook payloads. |         |

## Actions

### Delete Media

Delete a media file from a phone number.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection |                                     |         |
| Media ID   | The ID of the media file to delete. |         |

### Get Media

Get media from WhatsApp.

| Input           | Comments                                                                                                 | Default |
| --------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                                          |         |
| Media ID        | The ID of the media to retrieve.                                                                         |         |
| Phone Number ID | Business phone number ID. The operation will proceed only if it matches the ID used to upload the media. |         |

### Get Media from URL

Download media from a URL.

| Input      | Comments                                                       | Default |
| ---------- | -------------------------------------------------------------- | ------- |
| Connection |                                                                |         |
| URL        | A URL returned by the Get Media action to download media from. |         |

### Raw Request

Send raw HTTP request to WhatsApp Business API.

| Input                   | Comments                                                                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                      |         |
| URL                     | Input the path only (/106540352242922/messages), The base URL is already included (https://graph.facebook.com/v21.0). For example, to connect to https://graph.facebook.com/v21.0/106540352242922/messages, only /106540352242922/messages is entered in this field. |         |
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

### Register Phone Number

Register a phone number for use with WhatsApp.

| Input                    | Comments                                                                                           | Default |
| ------------------------ | -------------------------------------------------------------------------------------------------- | ------- |
| Connection               |                                                                                                    |         |
| Phone Number ID          | The ID of the phone number to register.                                                            |         |
| PIN                      | Set this to your 6-digit two-step verification PIN if enabled. If not, set a new 6-digit PIN.      |         |
| Data Localization Region | Enables local storage for the business phone number. Specify the country for data-at-rest storage. |         |

### Request Verification Code

Send a verification code to verify a phone number.

| Input                     | Comments                                         | Default |
| ------------------------- | ------------------------------------------------ | ------- |
| Connection                |                                                  |         |
| Phone Number ID to Verify | The ID of the phone number to verify.            |         |
| Code Method               | The method to use to send the verification code. |         |
| Language                  | The language's two-character language code code. | en      |

### Send Message

Send a message to a user.

| Input                    | Comments                                                                                                                        | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               |                                                                                                                                 |         |
| Phone Number ID          | Phone number ID of the WhatsApp Business Account you want to use to send the message.                                           |         |
| To                       | WhatsApp ID or phone number of the customer you want to send a message to.                                                      |         |
| Type                     | The type of message you want to send. If omitted, defaults to text.                                                             | text    |
| Audio                    | A media object containing audio. Required when type is audio.                                                                   |         |
| Contacts                 | A contacts object. Required when type is contacts.                                                                              |         |
| Document                 | A media object containing a document. Required when type is document.                                                           |         |
| Sticker                  | A media object containing a sticker. Required when type is sticker.                                                             |         |
| Template                 | A template object. Required when type is template.                                                                              |         |
| Text                     | A text object. Required when type is text.                                                                                      |         |
| Image                    | A media object containing an image. Required when type is image.                                                                |         |
| Reaction                 | A reaction object. Required when type is reaction.                                                                              |         |
| Interactive              | An interactive object. Required when type is interactive.                                                                       |         |
| Location                 | A location object. Required when type is location.                                                                              |         |
| Preview URL              | Allows for URL previews in text messages. Required when type is text.                                                           | false   |
| Biz Opaque Callback Data | An arbitrary string, useful for tracking. Maximum 512 characters.                                                               |         |
| Context                  | An object containing the ID of a previous message you are replying to. Required if replying to any message in the conversation. |         |
| Status                   | A message's status. You can use this field to mark a message as read.                                                           |         |

### Upload Media

Upload media to WhatsApp.

| Input           | Comments                                                                               | Default |
| --------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection      |                                                                                        |         |
| Phone Number ID | The ID of the phone number to upload media to.                                         |         |
| File            | The file to upload. This should be a file returned from an action that returns a file. |         |
| Filename        | The filename to use for the uploaded file.                                             |         |
