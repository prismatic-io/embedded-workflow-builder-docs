---
title: SMTP Connector
sidebar_label: SMTP
description: Send emails through an SMTP server
---

![SMTP](./assets/smtp.png#connector-icon)
Send emails through an SMTP server

## Connections

### SMTP Connection {#smtpconnection}

SMTP server information

| Input                           | Comments                                                                                                              | Default |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Host                            |                                                                                                                       |         |
| Port                            | Port 587 is often used for SMTP with TLS. Port 25 is disallowed for this connection, as unencrypted SMTP is insecure. | 587     |
| Use TLS                         | Use TLS to secure the connection to the SMTP server.                                                                  | true    |
| Ignore Self-Signed Certificates | Ignores self-signed certificate errors.                                                                               | false   |
| Username                        |                                                                                                                       |         |
| Password                        |                                                                                                                       |         |

## Actions

### Send Email {#sendemail}

Send an email

| Input                | Comments                                                                                                                                                                         | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                                  |         |
| To Address           | The destination for this email. The recipients to place on the To: line of the message.                                                                                          |         |
| Dynamic To Address   | The destination for this email. The recipients to place on the To: line of the message. An array of emails is expected.                                                          |         |
| From                 | The email address of the sender. This is the address that will appear in the recipient's inbox as the sender of the message.                                                     |         |
| Cc Address           | The destination for this email. The recipients to place on the CC: line of the message.                                                                                          |         |
| CC Address (JSON)    | The destination for this email. The recipients to place on the CC: line of the message. An array of emails is expected.                                                          |         |
| Bcc Address          | The destination for this email. The recipients to place on the BCC: line of the message.                                                                                         |         |
| BCC Address (JSON)   | The destination for this email. The recipients to place on the BCC: line of the message. An array of emails is expected.                                                         |         |
| Reply To             | The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.                                           |         |
| Subject              | The subject of the message: A short summary of the content, which will appear in the recipient's inbox.                                                                          |         |
| Text                 | The content of the message, in text format. Use this for text-based email clients, or clients on high-latency networks (such as mobile devices).                                 |         |
| Html                 | The content of the message, in HTML format. Use this for email clients that can process HTML. You can include clickable links, formatted text, and much more in an HTML message. |         |
| Attachments          | Specify a file name as the key (i.e. 'my-file.pdf'), and the file as the value                                                                                                   |         |
| Multiple Attachments | Provide an array of attachments to send with the email.                                                                                                                          |         |
