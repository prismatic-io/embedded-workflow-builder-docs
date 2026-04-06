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

### Extract Structured Text {#extractstructuredtext}

Extracts all text items from the PDF with their position coordinates, dimensions, font metadata, and layout flags for custom parsing.

| Input      | Comments                                                                                         | Default |
| ---------- | ------------------------------------------------------------------------------------------------ | ------- |
| PDF Data   | The PDF file data to process. This can be a file reference from a previous step.                 |         |
| Page Start | The starting page number for extraction. If not provided, extraction starts from the first page. |         |
| Page End   | The ending page number for extraction. If not provided, extraction continues to the last page.   |         |

### Extract Table Data {#extracttabledata}

Detects and extracts tabular structures from the PDF using coordinate-based row and column clustering, returning two-dimensional string arrays.

| Input            | Comments                                                                                                                                                             | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| PDF Data         | The PDF file data to process. This can be a file reference from a previous step.                                                                                     |         |
| Row Tolerance    | Y-coordinate tolerance in PDF points for grouping text items into table rows. Default is 3 points.                                                                   | 3       |
| Column Tolerance | X-coordinate tolerance in PDF points for detecting table column boundaries. Default is 10 points. Decrease for dense tables, increase for tables with wider spacing. | 10      |
| Page Start       | The starting page number for extraction. If not provided, extraction starts from the first page.                                                                     |         |
| Page End         | The ending page number for extraction. If not provided, extraction continues to the last page.                                                                       |         |

### Extract Text by Pattern {#extracttextbypattern}

Extracts text from the specified PDF document that matches the search text.

| Input            | Comments                                                                                                    | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------- | ------- |
| PDF Data         | The PDF file data to process. This can be a file reference from a previous step.                            |         |
| Search Pattern   | This is the text to search for in the PDF document.                                                         |         |
| Characters After | The number of characters to extract after the search pattern. If not provided, the entire page is returned. |         |
| Case Sensitive   | When true, the search is case-sensitive.                                                                    | false   |

### Extract Text with Layout {#extracttextwithlayout}

Extracts text from the PDF with line breaks and paragraph spacing preserved from the original document layout.

| Input          | Comments                                                                                                                                                                                                          | Default |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| PDF Data       | The PDF file data to process. This can be a file reference from a previous step.                                                                                                                                  |         |
| Line Tolerance | Y-coordinate tolerance in PDF points for grouping text items into lines. Items within this vertical distance are considered same-line. Default is 2 points. Increase for PDFs with inconsistent text positioning. | 2       |
| Page Start     | The starting page number for extraction. If not provided, extraction starts from the first page.                                                                                                                  |         |
| Page End       | The ending page number for extraction. If not provided, extraction continues to the last page.                                                                                                                    |         |

### Find Pattern {#findpattern}

Searches the PDF document and returns page numbers containing text that matches the search criteria.

| Input          | Comments                                                                                        | Default |
| -------------- | ----------------------------------------------------------------------------------------------- | ------- |
| PDF Data       | The PDF file data to process. This can be a file reference from a previous step.                |         |
| Search Pattern | The text pattern to search for in the PDF document.                                             |         |
| Case Sensitive | When true, the search is case-sensitive.                                                        | false   |
| Use Regex      | When true, treats the search pattern as a regular expression.                                   | false   |
| Contains       | When true, returns pages containing the pattern; when false, returns pages without the pattern. | true    |

### Find Text Position {#findtextposition}

Searches the PDF document and returns the position coordinates of all occurrences of the specified text.

| Input          | Comments                                                                             | Default |
| -------------- | ------------------------------------------------------------------------------------ | ------- |
| PDF Data       | The PDF file data to process. This can be a file reference from a previous step.     |         |
| Search Text    | The text to search for in the PDF document.                                          |         |
| Case Sensitive | When true, the search is case-sensitive.                                             | false   |
| Page Number    | Limit the search to a specific page number. If not provided, all pages are searched. |         |

### Page Numbers {#pagenumbers}

Returns a sequence of page numbers for the PDF document, from 1 to the last page.

| Input    | Comments                                                                         | Default |
| -------- | -------------------------------------------------------------------------------- | ------- |
| PDF Data | The PDF file data to process. This can be a file reference from a previous step. |         |
