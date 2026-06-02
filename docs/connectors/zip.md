---
title: Zip Connector
sidebar_label: Zip
description: Provides utility methods for working with zip files
---

![Zip](./assets/zip.png#connector-icon)
Provides utility methods for working with zip files

## Actions

### Compress Gzip {#compressgzip}

Compress Gzip file

| Input     | Comments              | Default |
| --------- | --------------------- | ------- |
| File Data | File to Gzip compress |         |

### Decompress Gzip {#decompressgzip}

Decompress Gzip file

| Input          | Comments                | Default |
| -------------- | ----------------------- | ------- |
| Gzip File Data | Gzip data to decompress |         |

### Unzip {#unzip}

Decompress a Zip file

| Input         | Comments               | Default |
| ------------- | ---------------------- | ------- |
| Zip File Data | Zip data to decompress |         |

### Zip {#zip}

Compress a Zip file

| Input | Comments                                                                                                | Default |
| ----- | ------------------------------------------------------------------------------------------------------- | ------- |
| Files | Files to include in the Zip; should be an object with filename keys and values containing file contents |         |
