---
title: IMAP Connector
sidebar_label: IMAP
description: Interact with your IMAP email account
---

![IMAP](./assets/imap.png#connector-icon)
Interact with your IMAP email account

## Connections

### IMAP Connection {#imap}

Provide the details of your IMAP server.

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

## Triggers

### New Emails {#newemailspollingtrigger}

Fetches new emails from a specified mailbox on a recurring schedule.

| Input         | Comments                                                                     | Default |
| ------------- | ---------------------------------------------------------------------------- | ------- |
| Connection    | The IMAP connection to use.                                                  |         |
| Mailbox       | Provide a string value for the name of the mailbox.                          |         |
| Fetch Content | When enabled, downloads and parses the full message body for each new email. | false   |
| Mark as Read  | When enabled, sets the Seen flag on new emails after polling.                | false   |

## Actions

### Add Flags {#addflags}

Add new flags to an existing message

| Input      | Comments                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection | The IMAP connection to use.                                                              |         |
| Mailbox    | Provide a string value for the name of the mailbox.                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message. |         |
| Flags      | For each item, provide a string value to be added to an existing message.                |         |

### Append Message {#appendmessage}

Appends a new message to an existing mailbox

| Input           | Comments                                             | Default |
| --------------- | ---------------------------------------------------- | ------- |
| Connection      | The IMAP connection to use.                          |         |
| Mailbox         | Provide a string value for the name of the mailbox.  |         |
| Path            | Mailbox path to upload the message to.               |         |
| Message Content | The raw RFC 822 formatted message content to append. |         |

### Copy Message {#copymessage}

Copies a message from one mailbox to another.

| Input      | Comments                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection | The IMAP connection to use.                                                              |         |
| Mailbox    | Provide a string value for the name of the mailbox.                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message. |         |
| New Path   | Mailbox path to upload the message to.                                                   |         |

### Create Mailbox {#createmailbox}

Creates a new mailbox folder and sets up subscription for the created mailbox

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The IMAP connection to use.            |         |
| Path       | Mailbox path to upload the message to. |         |

### Delete Message {#deletemessage}

Delete an existing message

| Input       | Comments                                            | Default |
| ----------- | --------------------------------------------------- | ------- |
| Connection  | The IMAP connection to use.                         |         |
| Mailbox     | Provide a string value for the name of the mailbox. |         |
| Message UID | The UID of the message.                             |         |

### Download Message {#downloadmessage}

Download either full RFC-822 formatted message or a specific body structure part

| Input               | Comments                                                                                                                            | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          | The IMAP connection to use.                                                                                                         |         |
| Mailbox             | Provide a string value for the name of the mailbox.                                                                                 |         |
| Message Index or ID | The index of the message you would like to download (1 for the oldest message, 2 for second oldest, etc), or the ID of the message. |         |

### Get Mailbox Status {#getstatus}

Returns the status of a mailbox's properties

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Connection | The IMAP connection to use.                         |         |
| Mailbox    | Provide a string value for the name of the mailbox. |         |

### List Mailboxes {#listmailboxes}

Returns a list of available mailboxes

| Input      | Comments                    | Default |
| ---------- | --------------------------- | ------- |
| Connection | The IMAP connection to use. |         |

### Remove Flags From Message {#removeflags}

Remove existing flags from an existing message

| Input      | Comments                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection | The IMAP connection to use.                                                              |         |
| Mailbox    | Provide a string value for the name of the mailbox.                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message. |         |
| Flags      | For each item, provide a string value to be added to an existing message.                |         |

### Rename Mailbox {#renamemailbox}

Change the name of an existing mailbox

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection | The IMAP connection to use.            |         |
| Path       | Mailbox path to upload the message to. |         |
| New Path   | Mailbox path to upload the message to. |         |

### Search / List Mailbox Messages {#searchmailbox}

Returns all messages in the given mailbox

| Input                | Comments                                            | Default |
| -------------------- | --------------------------------------------------- | ------- |
| Connection           | The IMAP connection to use.                         |         |
| Mailbox              | Provide a string value for the name of the mailbox. |         |
| From                 | Filter email messages by sender.                    |         |
| To                   | Filter email messages by recipient.                 |         |
| Read / Unread Filter | Filter messages by read or unread status.           | all     |
| Filter Options       | Extra parameters to filter the search results.      |         |

### Set Flags {#setflags}

Set a value for an existing message flag

| Input      | Comments                                                                                 | Default |
| ---------- | ---------------------------------------------------------------------------------------- | ------- |
| Connection | The IMAP connection to use.                                                              |         |
| Mailbox    | Provide a string value for the name of the mailbox.                                      |         |
| Range      | Provide a range of messages. Alternatively you can specify \* to get the latest message. |         |
| Flags      | For each item, provide a string value to be added to an existing message.                |         |
