---
title: Hash Connector
sidebar_label: Hash
description: Compute hashes of strings using common hash functions
---

![Hash](./assets/hash.png#connector-icon)
Compute hashes of strings using common hash functions

## Triggers

### HMAC Webhook Trigger {#hmacwebhooktrigger}

Validate a payload using an HMAC hash function

| Input                       | Comments                                                                                          | Default |
| --------------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Response Status Code        | The HTTP status code to use for the response                                                      |         |
| Response Content Type       | The Content-Type header to use for the response                                                   |         |
| Additional Response Headers | List of key/value pairs to use as additional headers for the response                             |         |
| Response Body               | The body to use for the response                                                                  |         |
| HMAC Header Name            | The name of the header that contains the HMAC hash of the payload's body                          |         |
| Secret Key                  | The cryptographic secret key used to hash the payload's body. This must be a string or byte array |         |
| HMAC Hash Function          |                                                                                                   | sha256  |

## Actions

### Compute BLAKE2b512 Hash {#computeblake2b512}

Compute the BLAKE2b512 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute BLAKE2s256 Hash {#computeblake2s256}

Compute the BLAKE2s256 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute Hash {#computehash}

Compute the hash of a string using a hash function

| Input         | Comments                          | Default |
| ------------- | --------------------------------- | ------- |
| Hash Function |                                   | sha256  |
| Message       | The message to generate a hash of |         |

### Compute HMAC Hash {#computehmac}

Compute an HMAC hash given a message, secret and hash function

| Input         | Comments                                                                                          | Default |
| ------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Hash Function |                                                                                                   | sha256  |
| Secret Key    | The cryptographic secret key used to hash the payload's body. This must be a string or byte array |         |
| Message       | The message to generate a hash of                                                                 |         |

### Compute MD4 Hash {#computemd4}

Compute the MD4 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute MD5 Hash {#computemd5}

Compute the MD5 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute MD5-SHA1 Hash {#computemd5-sha1}

Compute the MD5-SHA1 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute RIPEMD160 Hash {#computeripemd160}

Compute the RIPEMD160 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SHA1 Hash {#computesha1}

Compute the SHA1 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SHA224 Hash {#computesha224}

Compute the SHA224 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SHA256 Hash {#computesha256}

Compute the SHA256 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SHA3-224 Hash {#computesha3-224}

Compute the SHA3-224 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SHA3-256 Hash {#computesha3-256}

Compute the SHA3-256 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SHA3-384 Hash {#computesha3-384}

Compute the SHA3-384 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SHA3-512 Hash {#computesha3-512}

Compute the SHA3-512 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SHA384 Hash {#computesha384}

Compute the SHA384 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SHA512-224 Hash {#computesha512-224}

Compute the SHA512-224 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SHA512-256 Hash {#computesha512-256}

Compute the SHA512-256 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SHA512 Hash {#computesha512}

Compute the SHA512 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute SM3 Hash {#computesm3}

Compute the SM3 hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |

### Compute whirlpool Hash {#computewhirlpool}

Compute the whirlpool hash of a string

| Input   | Comments                          | Default |
| ------- | --------------------------------- | ------- |
| Message | The message to generate a hash of |         |
