---
title: PDF Connector
sidebar_label: PDF
description: Search and extract data from PDF documents
---

![PDF](./assets/pdf.png#connector-icon)
The **pdf** component provides some actions for interacting with PDF documents, like finding text in a PDF document, listing page numbers, or extracting a specific page of a document.

## Actions

### Extract All Text {#extractalltext}

Extracts all the text from the specified PDF document and returns it as an array of texts.

| Input    | Comments                                                       | Default |
| -------- | -------------------------------------------------------------- | ------- |
| PDF data | This must refer to a buffer containing the raw bytes of a PDF. |         |

### Extract Page {#extractpage}

Returns the specified page in the given PDF document as a new separate PDF document.

| Input       | Comments                                                       | Default |
| ----------- | -------------------------------------------------------------- | ------- |
| PDF data    | This must refer to a buffer containing the raw bytes of a PDF. |         |
| Page Number | This specifies a page in a PDF document by number.             |         |

### Extract Page Text {#extractpagetext}

Locates and extracts pages text from the specified PDF document that matches the specified page range.

| Input      | Comments                                                                                                                            | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| PDF data   | This must refer to a buffer containing the raw bytes of a PDF.                                                                      |         |
| Page Start | This specifies the starting page to extract from the PDF document.                                                                  |         |
| Page End   | This specifies the ending page to extract from the PDF document. If not defined, will only extract the page on the pageStart input. |         |

### Extract Text by Pattern {#extracttextbypattern}

Extracts text from the specified PDF document that matches the search text.

| Input            | Comments                                                                                                                                                | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| PDF data         | This must refer to a buffer containing the raw bytes of a PDF.                                                                                          |         |
| Search Pattern   | This is the text to search for in the PDF document.                                                                                                     |         |
| Characters After | This specifies the number of characters to extract from the PDF document after the search pattern found. If not specified, the entire page is returned. |         |
| Case Sensitive   | This specifies whether searching should be case-sensitive. You can choose true or false.                                                                | false   |

### Find Pattern {#findpattern}

Searches the PDF document and returns a list of page numbers containing text that satisfies the search criteria.

| Input          | Comments                                                                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| PDF data       | This must refer to a buffer containing the raw bytes of a PDF.                                                                   |         |
| Search Pattern | This is the pattern to search for in the PDF document.                                                                           |         |
| Case Sensitive | This specifies whether searching should be case-sensitive. You can choose true or false.                                         | false   |
| Use Regex      | This specifies whether the search pattern is a regular expression.                                                               | false   |
| Contains?      | This specifies whether to return page numbers that either contain or don't contain the search pattern. Options are true or false | true    |

### Page Numbers {#pagenumbers}

Returns a sequence of page numbers for the specified PDF document, from 1 to the last page number.

| Input    | Comments                                                       | Default |
| -------- | -------------------------------------------------------------- | ------- |
| PDF data | This must refer to a buffer containing the raw bytes of a PDF. |         |
