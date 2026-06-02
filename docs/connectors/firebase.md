---
title: Firebase Connector
sidebar_label: Firebase
description: Create, read, update, and delete documents in a Firebase Cloud Firestore database collection.
---

![Firebase](./assets/firebase.png#connector-icon)
Create, read, update, and delete documents in a Firebase Cloud Firestore database collection.

## Connections

### Firebase Private Key Connection {#firebaseconnection}

Authenticate requests to firebase using values obtained from the Google Cloud Platform.

| Input       | Comments                                                                     | Default |
| ----------- | ---------------------------------------------------------------------------- | ------- |
| Project Id  | Provide the unique identifier of the project from the Google Cloud Platform. |         |
| Private Key | Provide the private key from the Google Cloud Platform.                      |         |
| Email       | Provide the client email for the GCP account.                                |         |

## Actions

### Bulk Create Documents {#bulkcreatedocuments}

Create multiple documents in a Cloud Firestore collection in a single operation

| Input      | Comments                                               | Default                                                                                                                                                      |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection |                                                        |                                                                                                                                                              |
| Collection | Provide a string value for the collection name.        |                                                                                                                                                              |
| Documents  | An array of documents to be created in the collection. | <code>[<br /> {<br /> "field1": "value1",<br /> "field2": "value2"<br /> },<br /> {<br /> "field1": "value3",<br /> "field2": "value4"<br /> }<br />]</code> |

### Create Document {#createdocument}

Create a document in a Cloud Firestore collection

| Input      | Comments                                            | Default |
| ---------- | --------------------------------------------------- | ------- |
| Collection | Provide a string value for the collection name.     |         |
| Data       | Provide a key value pair that represents your data. |         |
| Connection |                                                     |         |

### Delete Document {#deletedocument}

Remove a document from a Cloud Firestore collection

| Input      | Comments                                                          | Default |
| ---------- | ----------------------------------------------------------------- | ------- |
| Collection | Provide a string value for the collection name.                   |         |
| Document   | Provide a string value for the unique identifier of the document. |         |
| Connection |                                                                   |         |

### Get Document {#getdocument}

Get the contents of a document in a Cloud Firestore collection

| Input      | Comments                                                          | Default |
| ---------- | ----------------------------------------------------------------- | ------- |
| Collection | Provide a string value for the collection name.                   |         |
| Document   | Provide a string value for the unique identifier of the document. |         |
| Connection |                                                                   |         |

### List Collections {#listcollections}

List all collections in a Cloud Firestore database

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Documents {#listdocuments}

List all documents in a Cloud Firestore collection

| Input           | Comments                                          | Default |
| --------------- | ------------------------------------------------- | ------- |
| Collection      | Provide a string value for the collection name.   |         |
| Connection      |                                                   |         |
| Order By        | Provide a string value for the field to order by. |         |
| Query Operators |                                                   |         |

### Remove Field {#removefield}

Completely removes a field from a given document (may not work on a field with a null value)

| Input           | Comments                                                                                     | Default |
| --------------- | -------------------------------------------------------------------------------------------- | ------- |
| Collection      | Provide a string value for the collection name.                                              |         |
| Document        | Provide a string value for the unique identifier of the document.                            |         |
| Field To Remove | Provide a string value for the name of the field you would like to remove from the document. |         |
| Connection      |                                                                                              |         |

### Update Document {#updatedocument}

Updates a document in a Cloud Firestore collection

| Input      | Comments                                                          | Default |
| ---------- | ----------------------------------------------------------------- | ------- |
| Collection | Provide a string value for the collection name.                   |         |
| Document   | Provide a string value for the unique identifier of the document. |         |
| Data       | Provide a key value pair that represents your data.               |         |
| Connection |                                                                   |         |
