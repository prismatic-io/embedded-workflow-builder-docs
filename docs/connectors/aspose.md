---
title: Aspose Connector
sidebar_label: Aspose
description: Convert and manipulate documents and PDFs in Aspose.
---

![Aspose](./assets/aspose.png#connector-icon)
[Aspose](https://www.aspose.cloud/) is a cloud-based file manipulation platform that provides APIs for document processing and format conversion. This component allows you to convert documents between formats (PDF, DOCX, HTML), merge and split documents, and extract text and metadata from files.

## API Documentation

This component was built using the [Aspose Words Cloud API](https://reference.aspose.cloud/words/#/) and [Aspose PDF Cloud API](https://reference.aspose.cloud/pdf/#/).

## Connections

### Aspose API Key {#apikey}

Authenticate with Aspose using Client ID and Client Secret.

To authenticate with Aspose, an application must be created in the Aspose Developer Dashboard to obtain a **Client ID** and **Client Secret**.

#### Prerequisites

- An Aspose account with access to the [Aspose Developer Dashboard](https://dashboard.aspose.cloud/)

#### Setup Steps

1. Log in to the [Aspose Developer Dashboard](https://dashboard.aspose.cloud/) using an Aspose account
2. Navigate to the **Applications** view
3. Click **Create New Application** or **Add Application**
4. Fill in the required application details and save
5. After creating the application, Aspose will generate a **Client ID** and **Client Secret**
6. Copy both the **Client ID** and **Client Secret** values

#### Configure the Connection

- Enter the **Client ID** into the **Application Client ID** field
- Enter the **Client Secret** into the **Application Client Secret** field

For more information about the Aspose REST API, refer to the [Aspose API documentation](https://docs.aspose.cloud/).

| Input                     | Comments                                  | Default |
| ------------------------- | ----------------------------------------- | ------- |
| Application Client ID     | Client ID of your Aspose Application.     |         |
| Application Client Secret | Client Secret of your Aspose Application. |         |

## Actions

### Convert Cloud Storage Document {#convertcloudstoragedocument}

Converts a document in cloud storage to the specified format.

| Input         | Comments                                                                                               | Default |
| ------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection    | The Aspose connection to use.                                                                          |         |
| File Name     | Name of the file inside the storage                                                                    |         |
| Format        | The destination format for the converted file.                                                         |         |
| Password      | Password of protected Word document.                                                                   |         |
| Folder Name   | The name of the folder in the storage.                                                                 |         |
| Out Path      | The path to the output document.                                                                       |         |
| Load Encoding | Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML. |         |
| Storage       | Original document storage.                                                                             |         |

### Convert Diagram {#convertdiagram}

Converts document from the request's content to the specified format.

| Input        | Comments                                            | Default |
| ------------ | --------------------------------------------------- | ------- |
| Connection   | The Aspose connection to use.                       |         |
| File Content | Reference of a file from a previous step to upload. |         |
| File Name    | Download Document Name                              |         |

### Convert HTML to PDF {#converthtmltopdf}

Converts HTML file in storage to PDF format.

| Input              | Comments                                                                                                                                           | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Aspose connection to use.                                                                                                                      |         |
| Upload to Storage  | When true, saves the post-conversion file to Aspose storage. When false, the resulting file is returned in the response body.                      | false   |
| Destination Path   | The destination document folder.                                                                                                                   |         |
| Storage Name       | The document storage which contains the file.                                                                                                      |         |
| Document Name      | The document name located in storage. (Note, this input is required in case you want to save the resulting file in an Aspose storage).             |         |
| Source Folder Path | Full source filename (ex. /folder1/folder2/template.zip). Note: this input is required in case you want to get the resulting file in the response. |         |
| HTML File Name     | Name of HTML file in ZIP archive.                                                                                                                  |         |
| Page Height        | Desired page height (in px).                                                                                                                       |         |
| Page Width         | Desired page width (in px).                                                                                                                        |         |
| Is Landscape       | When true, uses landscape page orientation.                                                                                                        | false   |
| Margin Left        | Page margin left (in px).                                                                                                                          |         |
| Margin Right       | Page margin right (in px).                                                                                                                         |         |
| Margin Bottom      | Page margin bottom (in px).                                                                                                                        |         |
| Margin Top         | Page margin top (in px).                                                                                                                           |         |

### Convert Local Document {#convertlocaldocument}

Converts a document on a local drive to the specified format.

| Input                 | Comments                                                                                                                                                               | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Aspose connection to use.                                                                                                                                          |         |
| Out Path              | The path to the output document on a local storage.                                                                                                                    |         |
| Password              | Password of protected Word document.                                                                                                                                   |         |
| Format                | The destination format for the converted file.                                                                                                                         |         |
| File Name Field Value | The filename of the output document. This will be used when the resulting document has a dynamic field (filename). If not set, the document name will be used instead. |         |
| Load Encoding         | Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.                                                                 |         |
| Storage               | Original document storage name.                                                                                                                                        |         |
| Document              | The document to convert.                                                                                                                                               |         |

### Convert PDF to DOC {#convertpdftodoc}

Converts PDF document to DOC format.

| Input                           | Comments                                                                                                                         | Default |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Upload to Storage               | When true, saves the post-conversion file to Aspose storage. When false, the resulting file is returned in the response body.    | false   |
| Out Path                        | Full resulting filename. Note: This field is required when the post-conversion file needs to be saved in an Aspose storage.      |         |
| Folder Path                     | The Document folder                                                                                                              |         |
| File Content                    | File to convert, if missing, action will assume that the file is located in an Aspose storage.                                   |         |
| Document Name                   | The name of the document inside Aspose. (Note: this input is required when the file to convert is located in an Aspose storage.) |         |
| Password                        | The file password.                                                                                                               |         |
| Format                          | Allows to specify .doc or .docx file format.                                                                                     |         |
| Add Return to Line End          | When true, adds a return character at the end of each line.                                                                      | false   |
| Image Resolution X              | Image resolution X (horizontal).                                                                                                 |         |
| Image Resolution Y              | Image resolution Y (vertical).                                                                                                   |         |
| Max Distance Between Text Lines | Max distance between text lines (in px).                                                                                         |         |
| Conversion Mode                 | Controls how a PDF document is converted into a word processing document.                                                        |         |
| Recognize Bullets               | When true, the converter recognizes and preserves bullet points.                                                                 | false   |
| Relative Horizontal Proximity   | Relative horizontal proximity (in px).                                                                                           |         |
| Storage Name                    | Aspose storage name where the folder gets read or created.                                                                       |         |
| Connection                      | The Aspose connection to use.                                                                                                    |         |

### Convert PDF to HTML {#convertpdftohtml}

Converts a PDF to HTML format.

| Input                                              | Comments                                                                                                                                                                                    | Default      |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection                                         | The Aspose connection to use.                                                                                                                                                               |              |
| Upload to Storage                                  | When true, saves the post-conversion file to Aspose storage. When false, the resulting file is returned in the response body.                                                               | false        |
| Storage Name                                       | Aspose storage name where the folder gets read or created.                                                                                                                                  |              |
| File Content                                       | File to convert, if missing, action will assume that the file is located in an Aspose storage.                                                                                              |              |
| Document Name                                      | The name of the document inside Aspose. (Note: this input is required when the file to convert in located in an Aspose storage.)                                                            |              |
| Format                                             | Result document type.                                                                                                                                                                       | Html5        |
| Out Path                                           | Full resulting filename. Note: This field is required when the post-conversion file needs to be saved in an Aspose storage.                                                                 |              |
| Folder Name                                        | The document folder                                                                                                                                                                         |              |
| Additional Margin Width In Points                  | Defines width of margin that will be left around output HTML areas.                                                                                                                         |              |
| Compress SVG Graphics If Any                       | When true, compresses SVG graphics into SVGZ format during saving.                                                                                                                          | false        |
| Convert Marked Content To Layers                   | When true, converts PDF marked content (layers) into HTML divs with 'data-pdflayer' attributes specifying layer names.                                                                      | false        |
| Default Font Name                                  | Specifies the name of an installed font used to substitute any document font that is not embedded or installed in the system. If not specified, the default substitution font is used.      |              |
| Fixed Layout                                       | When true, creates the HTML as a fixed layout.                                                                                                                                              | false        |
| Image Resolution                                   | Resolution for image rendering.                                                                                                                                                             |              |
| Prevent Glyphs Grouping                            | When true, prevents text glyphs from being grouped into words. Useful for documents with music notes or glyphs that should be positioned precisely. Only applies when Fixed Layout is true. | false        |
| Split CSS Into Pages                               | When true, creates separate CSS files for each HTML result page. Only applies when 'Split Into Pages' is enabled.                                                                           | false        |
| Split Into Pages                                   | When true, converts each page of the source document into a separate HTML file.                                                                                                             | false        |
| Use Z-Order                                        | When true, graphics and text are added to the HTML document according to the Z-order in the original PDF. When false, all graphics are rendered as a single layer.                          | false        |
| Antialiasing Processing                            | Defines antialiasing measures during conversion of compound background images from PDF to HTML.                                                                                             |              |
| CSS Class Names Prefix                             | Sets a prefix for CSS class names generated during PDF to HTML conversion.                                                                                                                  |              |
| Font Encoding Strategy                             | Defines encoding rule to tune PDF decoding for the current document.                                                                                                                        |              |
| Font Saving Mode                                   | Defines font saving mode used during PDF conversion.                                                                                                                                        |              |
| HTML Markup Generation Mode                        | Defines HTML markup generation mode during PDF to HTML conversion.                                                                                                                          | WriteAllHtml |
| Letters Positioning Method                         | The mode of positioning letters in words in the result HTML.                                                                                                                                |              |
| Pages Flow Type Depends On Viewers Screen Size     | When true, flow areas representing PDF pages in the result HTML adapt to the viewer's screen resolution. Only applies when 'Split Into Pages' is false.                                     | false        |
| Parts Embedding Mode                               | Defines whether referenced files (HTML, Fonts, Images, CSS) will be embedded into the main HTML file or generated as separate files.                                                        |              |
| Raster Images Saving Mode                          | Defines how raster images in the PDF should be handled during conversion to HTML.                                                                                                           |              |
| Remove Empty Areas On Top And Bottom               | When true, removes empty areas at the top and bottom of the created HTML that have no content.                                                                                              | false        |
| Save Shadowed Texts As Transparent Texts           | When true, saves text that is shadowed by other elements (e.g., images with OCR text) as transparent selectable text in the result HTML, mimicking Acrobat Reader behavior.                 | false        |
| Save Transparent Texts                             | When true, saves transparent text (typically OCR text from images) as transparent selectable text in the result HTML.                                                                       | false        |
| Special Folder For All Images                      | The path to directory where images will be saved during HTML conversion. If empty, images are saved with other HTML-linked files.                                                           |              |
| Special Folder For SVG Images                      | The path to directory where SVG images will be saved during HTML conversion. If empty, SVG images are saved with other HTML-linked files.                                                   |              |
| Try Save Text Underlining And Strikethrough In CSS | When true, attempts to detect text underlining and strikethrough (which PDF emulates with lines) and represent them using CSS instead of graphical elements.                                | false        |
| Minimal Line Width                                 | Minimal line width.                                                                                                                                                                         |              |

### Copy File {#copyfile}

Copies a file.

| Input                    | Comments                                                                   | Default |
| ------------------------ | -------------------------------------------------------------------------- | ------- |
| Connection               | The Aspose connection to use.                                              |         |
| Source Folder Path       | Source file's path. e.g: '/Folder1/fole.ext or '/Bucket/Folder1/file.ext'  |         |
| Destination Folder Path  | Destination file path.                                                     |         |
| Source Storage Name      | Source storage name.                                                       |         |
| Destination Storage Name | Destination storage name.                                                  |         |
| File Version ID          | File version ID to download. If not specified, the latest version is used. |         |

### Copy Folder {#copyfolder}

Copies a folder.

| Input                    | Comments                      | Default |
| ------------------------ | ----------------------------- | ------- |
| Connection               | The Aspose connection to use. |         |
| Source Folder Path       | Source folder path.           |         |
| Destination Folder Path  | Destination folder path.      |         |
| Source Storage Name      | Source storage name.          |         |
| Destination Storage Name | Destination storage name.     |         |

### Create Document {#createdocument}

Creates a new document in cloud storage in the format, determined by the file extension. All save format extensions are supported.

| Input      | Comments                      | Default |
| ---------- | ----------------------------- | ------- |
| Connection | The Aspose connection to use. |         |
| File Name  | Name of the file to upload.   |         |

### Create Folder {#createfolder}

Creates a folder.

| Input        | Comments                                                       | Default |
| ------------ | -------------------------------------------------------------- | ------- |
| Connection   | The Aspose connection to use.                                  |         |
| Folder Path  | Target folder's path. The folders will be created recursively. |         |
| Storage Name | Aspose storage name where the folder gets read or created.     |         |

### Delete File {#deletefile}

Deletes a file.

| Input           | Comments                                                                   | Default |
| --------------- | -------------------------------------------------------------------------- | ------- |
| Connection      | The Aspose connection to use.                                              |         |
| File Path       | Path of the file including the file name and extension.                    |         |
| File Version ID | File version ID to download. If not specified, the latest version is used. |         |
| Storage Name    | Storage name.                                                              |         |

### Delete Folder {#deletefolder}

Deletes a folder.

| Input        | Comments                                                       | Default |
| ------------ | -------------------------------------------------------------- | ------- |
| Connection   | The Aspose connection to use.                                  |         |
| Folder Path  | Target folder's path. The folders will be created recursively. |         |
| Storage Name | Aspose storage name where the folder gets read or created.     |         |
| Recursive    | When true, deletes folders, subfolders, and files recursively. | false   |

### Download File {#downloadfile}

Downloads a file.

| Input           | Comments                                                                   | Default |
| --------------- | -------------------------------------------------------------------------- | ------- |
| Connection      | The Aspose connection to use.                                              |         |
| File Path       | Path of the file including the file name and extension.                    |         |
| File Version ID | File version ID to download. If not specified, the latest version is used. |         |
| Storage Name    | Storage name.                                                              |         |

### Get Diagram {#getdiagram}

Exports the document into the specified format.

| Input        | Comments                                           | Default |
| ------------ | -------------------------------------------------- | ------- |
| Connection   | The Aspose connection to use.                      |         |
| Diagram Name | The name of the diagram.                           |         |
| Format       | The destination format for the converted file.     |         |
| Folder Path  | The folder path where original diagram is located. |         |

### Get Document {#getdocument}

Reads common information from the document.

| Input         | Comments                                              | Default |
| ------------- | ----------------------------------------------------- | ------- |
| Connection    | The Aspose connection to use.                         |         |
| Document Name | The filename of the input document.                   |         |
| Folder Path   | The path to the folder where the document is located. |         |
| Storage Name  | Storage name.                                         |         |

### Get Files List {#getfileslist}

Get all files and folders within a folder.

| Input        | Comments                                                       | Default |
| ------------ | -------------------------------------------------------------- | ------- |
| Connection   | The Aspose connection to use.                                  |         |
| Folder Path  | Target folder's path. The folders will be created recursively. |         |
| Storage Name | Aspose storage name where the folder gets read or created.     |         |

### Load Web Document {#loadwebdocument}

Downloads a document from the web using URL and saves it to cloud storage in the specified format.

| Input                | Comments                      | Default |
| -------------------- | ----------------------------- | ------- |
| Connection           | The Aspose connection to use. |         |
| Loading Document URL | The web document URL.         |         |

### Move File {#movefile}

Moves a file.

| Input                    | Comments                                                                   | Default |
| ------------------------ | -------------------------------------------------------------------------- | ------- |
| Connection               | The Aspose connection to use.                                              |         |
| Source Folder Path       | Source file's path. e.g: '/Folder1/fole.ext or '/Bucket/Folder1/file.ext'  |         |
| Destination Folder Path  | Destination file path.                                                     |         |
| Source Storage Name      | Source storage name.                                                       |         |
| Destination Storage Name | Destination storage name.                                                  |         |
| File Version ID          | File version ID to download. If not specified, the latest version is used. |         |

### Move Folder {#movefolder}

Moves a folder.

| Input                    | Comments                      | Default |
| ------------------------ | ----------------------------- | ------- |
| Connection               | The Aspose connection to use. |         |
| Source Folder Path       | Source folder path.           |         |
| Destination Folder Path  | Destination folder path.      |         |
| Source Storage Name      | Source storage name.          |         |
| Destination Storage Name | Destination storage name.     |         |

### Save Diagram As {#savediagramas}

Converts document to destination format with detailed settings and saves result to storage.

| Input                   | Comments                                                 | Default |
| ----------------------- | -------------------------------------------------------- | ------- |
| Connection              | The Aspose connection to use.                            |         |
| Original Document Name  | Name of the original document.                           |         |
| Destination Folder Path | Destination folder path.                                 |         |
| Destination File Name   | The name of the converted file.                          |         |
| Folder Name             | Original document folder.                                |         |
| Overwrite               | When true, overwrites existing files with the same name. | false   |
| Default Font            | The default font for the diagram.                        |         |

### Save Document As {#savedocumentas}

Converts a document in cloud storage to the specified format.

| Input                 | Comments                                                                                                                                                                                                                                                                                | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            | The Aspose connection to use.                                                                                                                                                                                                                                                           |         |
| File Name             | Name of the file to convert inside your Aspose Storage.                                                                                                                                                                                                                                 |         |
| Destination File Name | The name of the converted file.                                                                                                                                                                                                                                                         |         |
| Format                | The destination format for the converted file.                                                                                                                                                                                                                                          |         |
| Save Options Data     | Provide save options related to the SaveFormat provided. For all save options, please refer to this link: https://reference.aspose.cloud/words/#/op/SaveAs (Toggle 'Advanced Parameters' on and then select a SaveOptionsData object congruent to the one chosen in the 'Format' input) |         |
| Folder Name           | The name of the folder in the storage.                                                                                                                                                                                                                                                  |         |
| Password              | Password of protected Word document.                                                                                                                                                                                                                                                    |         |
| Load Encoding         | Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.                                                                                                                                                                                  |         |
| Storage               | Original document storage name.                                                                                                                                                                                                                                                         |         |

### Split Document {#splitdocument}

Splits a document into parts and saves them in the specified format.

| Input                 | Comments                                                                                                                                         | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Document Name         | The filename of the input document.                                                                                                              |         |
| Password              | Password of protected Word document.                                                                                                             |         |
| Storage Name          | Aspose storage name where the folder gets read or created.                                                                                       |         |
| Load Encoding         | Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.                                           |         |
| Connection            | The Aspose connection to use.                                                                                                                    |         |
| From Page             | The start page from where to start the splitting process.                                                                                        |         |
| To Page               | The end page where to end the splitting process.                                                                                                 |         |
| Zip Output            | When true, compresses the output into a ZIP file.                                                                                                | false   |
| Format                | The format to split.                                                                                                                             |         |
| Destination File Name | Result path of the document after the operation. If this parameter is ommited then result of the operation will be saved as the source document. |         |
| Folder                | Original document folder                                                                                                                         |         |

### Upload File {#uploadfile}

Uploads a file.

| Input        | Comments                                                | Default |
| ------------ | ------------------------------------------------------- | ------- |
| Connection   | The Aspose connection to use.                           |         |
| File Path    | Path of the file including the file name and extension. |         |
| File Content | Reference of a file from a previous step to upload.     |         |
| Storage Name | Storage name.                                           |         |
