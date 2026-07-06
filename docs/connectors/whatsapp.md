---
title: WhatsApp Connector
sidebar_label: WhatsApp
description: Send messages, manage media, and register phone numbers with the WhatsApp Business API
---

![WhatsApp](./assets/whatsapp.png#connector-icon)
[WhatsApp](https://www.whatsapp.com/) is a messaging app that allows users to send texts, make voice and video calls, and share media.
This component allows sending messages and configuring webhook subscriptions through the WhatsApp Business Platform.

## API Documentation

This component was built using the [WhatsApp Business Platform Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/reference).

## Connections

### Access Token {#whatsapp-access-token}

Authenticate requests using an access token.

To get started with WhatsApp, [create a Meta developer account](https://developers.facebook.com/).

#### Prerequisites

- A Meta developer account
- A Meta app with the WhatsApp product added

#### Setup Steps

1. Select **Create app**.
2. In the "Add products to your app" section, select **Set up** for WhatsApp.
3. Once the account validation is complete, navigate back to the app's home page.
4. From the side menu, find the WhatsApp section and select **API Setup**.
5. Select **Generate access token** and copy the value.
6. This screen also provides the account's Test Number, Phone number ID, and Business Account ID.

#### Configure the Connection

- Enter the generated value into the **Access Token** field of the connection configuration.

| Input        | Comments                    | Default |
| ------------ | --------------------------- | ------- |
| Access Token | Your WhatsApp Access Token. |         |

## Triggers

### Webhook {#webhook}

Receive and validate webhook requests from WhatsApp Business for manually configured webhook subscriptions.

| Input        | Comments                                                        | Default |
| ------------ | --------------------------------------------------------------- | ------- |
| Verify Token | The token that WhatsApp will use to verify the webhook.         |         |
| App Secret   | The secret that WhatsApp will use to sign the webhook payloads. |         |

## Actions

### Delete Media {#deletemedia}

Delete a media file from a phone number.

| Input      | Comments                            | Default |
| ---------- | ----------------------------------- | ------- |
| Connection | The WhatsApp connection to use.     |         |
| Media ID   | The ID of the media file to delete. |         |

### Get Media {#getmedia}

Get media from WhatsApp.

| Input           | Comments                                                                                                 | Default |
| --------------- | -------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The WhatsApp connection to use.                                                                          |         |
| Media ID        | The ID of the media to retrieve.                                                                         |         |
| Phone Number ID | Business phone number ID. The operation will proceed only if it matches the ID used to upload the media. |         |

### Get Media from URL {#getmediafromurl}

Download media from a URL.

| Input      | Comments                                                         | Default |
| ---------- | ---------------------------------------------------------------- | ------- |
| Connection | The WhatsApp connection to use.                                  |         |
| URL        | The URL returned by the Get Media action to download media from. |         |

### Raw Request {#rawrequest}

Send raw HTTP request to WhatsApp Business API.

| Input                   | Comments                                                                                                                                                                                                                                                             | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The WhatsApp connection to use.                                                                                                                                                                                                                                      |         |
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

### Register Phone Number {#registerphonenumber}

Register a phone number for use with WhatsApp.

| Input                    | Comments                                                                                                                               | Default |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection               | The WhatsApp connection to use.                                                                                                        |         |
| Phone Number ID          | The ID of the phone number to register.                                                                                                |         |
| PIN                      | The 6-digit two-step verification PIN. If two-step verification is enabled, provide the existing PIN; otherwise set a new 6-digit PIN. |         |
| Data Localization Region | Enables local storage for the business phone number. Specify the country for data-at-rest storage.                                     |         |

### Request Verification Code {#requestverificationcode}

Send a verification code to verify a phone number.

| Input                     | Comments                                                      | Default |
| ------------------------- | ------------------------------------------------------------- | ------- |
| Connection                | The WhatsApp connection to use.                               |         |
| Phone Number ID to Verify | The ID of the phone number to verify.                         |         |
| Code Method               | The method to use to send the verification code.              |         |
| Language                  | The two-character language code for the verification message. | en      |

### Send Message {#sendmessage}

Send a message to a user.

| Input                    | Comments                                                                                                                       | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection               | The WhatsApp connection to use.                                                                                                |         |
| Phone Number ID          | The phone number ID of the WhatsApp Business Account used to send the message.                                                 |         |
| To                       | The WhatsApp ID or phone number of the customer to send a message to.                                                          |         |
| Type                     | The type of message to send. If omitted, defaults to text.                                                                     | text    |
| Audio                    | A media object containing audio. Required when type is audio.                                                                  |         |
| Contacts                 | A contacts object. Required when type is contacts.                                                                             |         |
| Document                 | A media object containing a document. Required when type is document.                                                          |         |
| Sticker                  | A media object containing a sticker. Required when type is sticker.                                                            |         |
| Template                 | A template object. Required when type is template.                                                                             |         |
| Text                     | A text object. Required when type is text.                                                                                     |         |
| Image                    | A media object containing an image. Required when type is image.                                                               |         |
| Reaction                 | A reaction object. Required when type is reaction.                                                                             |         |
| Interactive              | An interactive object. Required when type is interactive.                                                                      |         |
| Location                 | A location object. Required when type is location.                                                                             |         |
| Preview URL              | When true, enables URL previews in text messages. Required when type is text.                                                  | false   |
| Biz Opaque Callback Data | An arbitrary string, useful for tracking. Maximum 512 characters.                                                              |         |
| Context                  | An object containing the ID of a previous message being replied to. Required when replying to any message in the conversation. |         |
| Status                   | A message's status. Use this field to mark a message as read.                                                                  |         |

### Upload Media {#uploadmedia}

Upload media to WhatsApp.

| Input           | Comments                                                                               | Default |
| --------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection      | The WhatsApp connection to use.                                                        |         |
| Phone Number ID | The ID of the phone number to upload media to.                                         |         |
| File            | The file to upload. This should be a file returned from an action that returns a file. |         |
| Filename        | The filename to use for the uploaded file.                                             |         |
