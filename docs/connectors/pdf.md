---
title: PDF Connector
sidebar_label: PDF
description: Search and extract data from PDF documents
---

![PDF](./assets/pdf.png#connector-icon)
PDF (Portable Document Format) is a file format developed by Adobe for presenting documents independently of software, hardware, or operating systems.
The **pdf** component allows finding text in PDF documents, listing page numbers, and extracting specific pages from a document.

## Actions

### Extract All Text {#extractalltext}

Extracts all text from the specified PDF document and returns it as an array of text strings.

| Input    | Comments                                                                         | Default |
| -------- | -------------------------------------------------------------------------------- | ------- |
| PDF Data | The PDF file data to process. This can be a file reference from a previous step. |         |

### Extract Page {#extractpage}

Extracts the specified page from the PDF document and returns it as a new separate PDF document.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| PDF Data    | The PDF file data to process. This can be a file reference from a previous step. |         |
| Page Number | The page number to extract from the PDF.                                         |         |

### Extract Page Text {#extractpagetext}

Extracts text from the specified page range in the PDF document.

| Input      | Comments                                                                                  | Default |
| ---------- | ----------------------------------------------------------------------------------------- | ------- |
| PDF Data   | The PDF file data to process. This can be a file reference from a previous step.          |         |
| Page Start | The starting page number for extraction.                                                  |         |
| Page End   | The ending page number for extraction. If not provided, only the start page is extracted. |         |

### Extract Text by Pattern {#extracttextbypattern}

Extracts text from the specified PDF document that matches the search text.

| Input            | Comments                                                                                                    | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| PDF Data         | The PDF file data to process. This can be a file reference from a previous step.                            |         |
| Search Pattern   | This is the text to search for in the PDF document.                                                         |         |
| Characters After | The number of characters to extract after the search pattern. If not provided, the entire page is returned. |         |
| Case Sensitive   | When true, the search is case-sensitive.                                                                    | false   |

### Find Pattern {#findpattern}

Searches the PDF document and returns page numbers containing text that matches the search criteria.

| Input          | Comments                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------- | ------- |
| PDF Data       | The PDF file data to process. This can be a file reference from a previous step.                |         |
| Search Pattern | The text pattern to search for in the PDF document.                                             |         |
| Case Sensitive | When true, the search is case-sensitive.                                                        | false   |
| Use Regex      | When true, treats the search pattern as a regular expression.                                   | false   |
| Contains       | When true, returns pages containing the pattern; when false, returns pages without the pattern. | true    |

### Page Numbers {#pagenumbers}

Returns a sequence of page numbers for the PDF document, from 1 to the last page.

| Input    | Comments                                                                         | Default |
| -------- | -------------------------------------------------------------------------------- | ------- |
| PDF Data | The PDF file data to process. This can be a file reference from a previous step. |         |
