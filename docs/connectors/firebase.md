---
title: Firebase Connector
sidebar_label: Firebase
description: Create, read, update, and delete documents in a Firebase Cloud Firestore database collection.
---

![Firebase](./assets/firebase.png#connector-icon)
[Firebase](https://firebase.google.com) is a platform developed by Google for creating mobile and web applications.
Firebase Cloud Firestore is a document-based, flexible, scalable, and NoSQL cloud database, used to store and sync data for client and server-side applications.
This component uses the Firebase Admin SDK to create, read, update, delete, and list documents within a Firebase Cloud Firestore collection.

## API Documentation

This component was built using the [Firebase Admin SDK Reference](https://firebase.google.com/docs/reference/admin).

## Connections

### Private Key {#firebaseconnection}

Authenticate requests to Firebase using values obtained from the Google Cloud Platform.

The Firebase Admin SDK is a set of server libraries that lets applications interact with Firebase from privileged environments.
This connection authenticates with a service account private key generated for the Firebase project.

#### Prerequisites

- A Firebase project with Cloud Firestore enabled
- Permission to manage service accounts for that project

#### Setup Steps

1. Follow the [Firebase Admin SDK setup guide](https://firebase.google.com/docs/admin/setup#set-up-project-and-service-account) to open the service account settings for the Firebase project
2. Generate a new private key for the service account
3. Download the JSON file that contains the generated credentials

#### Configure the Connection

- Enter the **Project Id** from the `project_id` value in the JSON file
- Enter the **Private Key** from the `private_key` value in the JSON file
- Enter the **Email** from the `client_email` value in the JSON file

| Input       | Comments                                                                                                                                                                                           | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Project Id  | Provide the unique identifier of the project from the Google Cloud Platform.                                                                                                                       |         |
| Private Key | Provide the `private_key` value from the service account JSON key file. See the [Firebase Admin SDK setup guide](https://firebase.google.com/docs/admin/setup#set-up-project-and-service-account). |         |
| Email       | Provide the `client_email` value from the service account JSON key file.                                                                                                                           |         |

## Actions

### Bulk Create Documents {#bulkcreatedocuments}

Create multiple documents in a Cloud Firestore collection in a single operation

| Input      | Comments                                               | Default                                                                                                                                                      |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection | The Firebase connection to use.                        |                                                                                                                                                              |
| Collection | Provide a string value for the collection name.        |                                                                                                                                                              |
| Documents  | An array of documents to be created in the collection. | <code>[<br /> {<br /> "field1": "value1",<br /> "field2": "value2"<br /> },<br /> {<br /> "field1": "value3",<br /> "field2": "value4"<br /> }<br />]</code> |

### Create Document {#createdocument}

Create a document in a Cloud Firestore collection

| Input      | Comments                                                                                                                              | Default         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Collection | Provide a string value for the collection name.                                                                                       |                 |
| Data       | The fields to write to the document, as key-value pairs. Each key is a field name and each value is the value to store in that field. | <code>[]</code> |
| Connection | The Firebase connection to use.                                                                                                       |                 |

### Delete Document {#deletedocument}

Remove a document from a Cloud Firestore collection

| Input      | Comments                                                          | Default |
| ---------- | ----------------------------------------------------------------- | ------- |
| Collection | Provide a string value for the collection name.                   |         |
| Document   | Provide a string value for the unique identifier of the document. |         |
| Connection | The Firebase connection to use.                                   |         |

### Get Document {#getdocument}

Get the contents of a document in a Cloud Firestore collection

| Input      | Comments                                                          | Default |
| ---------- | ----------------------------------------------------------------- | ------- |
| Collection | Provide a string value for the collection name.                   |         |
| Document   | Provide a string value for the unique identifier of the document. |         |
| Connection | The Firebase connection to use.                                   |         |

### List Collections {#listcollections}

List all collections in a Cloud Firestore database

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection | The Firebase connection to use. |         |

### List Documents {#listdocuments}

List all documents in a Cloud Firestore collection

| Input           | Comments                                                                                                                                                                                                                                                                                                                       | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Collection      | Provide a string value for the collection name.                                                                                                                                                                                                                                                                                |         |
| Connection      | The Firebase connection to use.                                                                                                                                                                                                                                                                                                |         |
| Order By        | Provide a string value for the field to order by.                                                                                                                                                                                                                                                                              |         |
| Query Operators | A JSON array of filter conditions to apply to the query. Each condition is an object with field, operator, and value keys, and all conditions must match. Supported operators are the Cloud Firestore where-clause operators, such as ==, !=, in, not-in, and array-contains. A null value can only be compared with == or !=. |         |

### Remove Field {#removefield}

Completely removes a field from a given document (may not work on a field with a null value)

| Input           | Comments                                                                                                             | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| Collection      | Provide a string value for the collection name.                                                                      |         |
| Document        | Provide a string value for the unique identifier of the document.                                                    |         |
| Field To Remove | The name of the field to delete from the document. Use dot notation, such as address.city, to remove a nested field. |         |
| Connection      | The Firebase connection to use.                                                                                      |         |

### Update Document {#updatedocument}

Update a document in a Cloud Firestore collection

| Input      | Comments                                                                                                                              | Default         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Collection | Provide a string value for the collection name.                                                                                       |                 |
| Document   | Provide a string value for the unique identifier of the document.                                                                     |                 |
| Data       | The fields to write to the document, as key-value pairs. Each key is a field name and each value is the value to store in that field. | <code>[]</code> |
| Connection | The Firebase connection to use.                                                                                                       |                 |
