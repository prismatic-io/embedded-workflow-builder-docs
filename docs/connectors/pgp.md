---
title: Pretty Good Privacy Connector
sidebar_label: Pretty Good Privacy
description: Create and translate encrypted messages
---

![Pretty Good Privacy](./assets/pgp.png#connector-icon)
Create and translate encrypted messages

## Actions

### Decrypt File {#decryptfile}

Decrypt a file with a password or PGP private key and passphrase

| Input                  | Comments                                                                                                                                       | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| File to Decrypt        | This should be a reference to a previous step that returns binary data.                                                                        |         |
| Password               | Provide a string password to encrypt the message. You can elect to encrypt the message with a password or public PGP key, but not both.        |         |
| Private Key            | Provide a string PGP pviate key to decrypt the message. You can elect to decrypt the message with a password or private PGP key, but not both. |         |
| Private Key Passphrase | Provide a string passphrase for your private key if you are using a private key to decrypt the message.                                        |         |

### Decrypt Message {#decryptstring}

Decrypt a string message with a password or PGP private key and passphrase

| Input                  | Comments                                                                                                                                       | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Encrypted Message      | The message to be decrypted.                                                                                                                   |         |
| Password               | Provide a string password to encrypt the message. You can elect to encrypt the message with a password or public PGP key, but not both.        |         |
| Private Key            | Provide a string PGP pviate key to decrypt the message. You can elect to decrypt the message with a password or private PGP key, but not both. |         |
| Private Key Passphrase | Provide a string passphrase for your private key if you are using a private key to decrypt the message.                                        |         |

### Encrypt File {#encryptfile}

Encrypt a file with a password or PGP public key

| Input           | Comments                                                                                                                                      | Default |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| File to Encrypt | This should be a reference to a previous step that returns binary data.                                                                       |         |
| Filename        | The name of the file to encrypt                                                                                                               |         |
| Password        | Provide a string password to encrypt the message. You can elect to encrypt the message with a password or public PGP key, but not both.       |         |
| Public Key      | Provide a string PGP public key to encrypt the message. You can elect to encrypt the message with a password or public PGP key, but not both. |         |

### Encrypt Message {#encryptstring}

Encrypt a string message with a password or PGP public key

| Input              | Comments                                                                                                                                      | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Message to Encrypt | The message to be encrypted.                                                                                                                  |         |
| Password           | Provide a string password to encrypt the message. You can elect to encrypt the message with a password or public PGP key, but not both.       |         |
| Public Key         | Provide a string PGP public key to encrypt the message. You can elect to encrypt the message with a password or public PGP key, but not both. |         |
