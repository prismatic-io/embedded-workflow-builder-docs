---
title: IMAP Connector
sidebar_label: IMAP
description: Interact with your IMAP email account
---

![IMAP](./assets/imap.png#connector-icon)
Interact with your IMAP email account

## Connections

### IMAP Connection

Provide the details of your IMAP server.

To configure a connection to an IMAP server you will need a few properties:

- The host and port of your IMAP server
- A set of login credentials for a user that exists on the IMAP server
- The version of encryption the IMAP server is compatible with.

The setup can vary widely depending on the email service you are using.
We have provided a bit of context around some popular services to get you started.

#### Connecting to Gmail

To set up an IMAP connection to your Gmail account, you need to create a [Google App Password](https://support.google.com/accounts/answer/185833?hl=en).
Go to your [Google Account](https://myaccount.google.com/) and select 'Security'.
Under "Signing in to Google," select App Passwords. You may need to sign in.

If you don't have this option, it might be because:

- 2 Step Verification is not set up for your account.
- 2 Step Verification is only set up for security keys.
- Your account is through work, school, or other organization.
- You turned on Advanced Protection.

At the bottom, click **Select App** and choose **Mail**, and then click **Select device** and choose **Other (Custom name)**.
Then, click **GENERATE**.
You'll be given a 16-character code, which is your **app password**.
Copy that somewhere safe.

Finally, create a connection and provide these values:

- Enter `imap.gmail.com` for the host
- The default values for port and security are fine
- Enter the username or email of your Gmail account
- Enter the **app password** you created earlier

If you run into authentication problems, ensure that your account has [IMAP enabled](https://support.google.com/mail/answer/7126229).

#### Connecting to Microsoft Office 365

If your Office 365 domain does not use multi-factor authentication (this is rare), then you can use your username and password to authenticate.

If MFA is enabled, you will need to create an **app password** to authenticate.
To create an app password, log in to the [Microsoft Security Center](https://mysignins.microsoft.com/security-info) and open the **Security info** tab.
Click **+Add method** and choose **App password**.

If you don't have an **app password** option, you'll need to contact your Office 365 administrator and have them [enable it](https://support.microsoft.com/en-us/account-billing/manage-app-passwords-for-two-step-verification-d6dc8c6d-4bf7-4851-ad95-6d07799387e9).

Give your app password a name, and copy the password that is generated.

Now, create a connection and provide these values:

- Enter `outlook.office365.com` for the host
- The default values for port and security are fine
- Enter the username or email of your Outlook account
- Enter your password or the app password you generated

| Input               | Comments                                                                                   | Default |
| ------------------- | ------------------------------------------------------------------------------------------ | ------- |
| Host                | Provide the host address for the desired IMAP server.                                      |         |
| Port                | Provide the port for the desired IMAP server.                                              | 993     |
| Secure              | Determines if the connection is secure.                                                    | true    |
| Username            | Provide a valid username or email.                                                         |         |
| Password            | Provide the password for the given user. This value is required if secured is set to true. |         |
| Minimum TLS Version | Provide a valid TLS version to be used in the connection.                                  | TLSv1.1 |
| Maximum TLS Version | Provide a valid TLS version to be used in the connection.                                  | TLSv1.3 |
| Min DH Size         | Minimum size of bits to accept in a TLS connection                                         | 1024    |

## Actions

### Add Flags

Add new flags to an existing message

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                         |         |
| Mailbox    | Provide a string value for the name of the mailbox                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message |         |
| Flags      | For each item, provide a string value to be added to an existing message.               |         |

### Append Message

Appends a new message to an existing mailbox

| Input           | Comments                                           | Default |
| --------------- | -------------------------------------------------- | ------- |
| Connection      |                                                    |         |
| Mailbox         | Provide a string value for the name of the mailbox |         |
| Path            | Mailbox path to upload the message to              |         |
| Message Content | Mailbox path to upload the message to              |         |

### Copy Message

Copies a message from one mailbox to another.

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                         |         |
| Mailbox    | Provide a string value for the name of the mailbox                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message |         |
| New Path   | Mailbox path to upload the message to                                                   |         |

### Create Mailbox

Creates a new mailbox folder and sets up subscription for the created mailbox

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Path       | Mailbox path to upload the message to |         |

### Delete Message

Delete an existing message

| Input       | Comments                                           | Default |
| ----------- | -------------------------------------------------- | ------- |
| Connection  |                                                    |         |
| Mailbox     | Provide a string value for the name of the mailbox |         |
| Message UID | The UID of the message.                            |         |

### Download Message

Download either full RFC-822 formatted message or a specific body structure part

| Input               | Comments                                                                                                                            | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                     |         |
| Mailbox             | Provide a string value for the name of the mailbox                                                                                  |         |
| Message Index or ID | The index of the message you would like to download (1 for the oldest message, 2 for second oldest, etc), or the ID of the message. |         |

### Get Mailbox Status

Returns the status of a mailbox's properties

| Input      | Comments                                           | Default |
| ---------- | -------------------------------------------------- | ------- |
| Connection |                                                    |         |
| Mailbox    | Provide a string value for the name of the mailbox |         |

### List Mailboxes

Returns a list of available mailboxes

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Remove Flags From Message

Remove existing flags from an existing message

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                         |         |
| Mailbox    | Provide a string value for the name of the mailbox                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message |         |
| Flags      | For each item, provide a string value to be added to an existing message.               |         |

### Rename Mailbox

Change the name of an existing mailbox

| Input      | Comments                              | Default |
| ---------- | ------------------------------------- | ------- |
| Connection |                                       |         |
| Path       | Mailbox path to upload the message to |         |
| New Path   | Mailbox path to upload the message to |         |

### Search / List Mailbox Messages

Returns all messages in the given mailbox

| Input                | Comments                                           | Default |
| -------------------- | -------------------------------------------------- | ------- |
| Connection           |                                                    |         |
| Mailbox              | Provide a string value for the name of the mailbox |         |
| From                 | Filter email messages by sender                    |         |
| To                   | Filter email messages by recipient                 |         |
| Read / Unread Filter |                                                    | all     |
| Filter Options       | Extra parameters to filter the search results      |         |

### Set Flags

Set a value for an existing message flag

| Input      | Comments                                                                                | Default |
| ---------- | --------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                         |         |
| Mailbox    | Provide a string value for the name of the mailbox                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message |         |
| Flags      | For each item, provide a string value to be added to an existing message.               |         |
