---
title: Aspose Connector
sidebar_label: Aspose
description: Aspose is a robust file manipulation service that can manage various document and image file formats. Use the Aspose component to create, edit, process, and convert file formats from several languages, and several platforms.
---

![Aspose](./assets/aspose.png#connector-icon)
Aspose is a robust file manipulation service that can manage various document and image file formats. Use the Aspose component to create, edit, process, and convert file formats from several languages, and several platforms.

## Connections

### Aspose Connection

Aspose Api Key Flow

In order to use the apiKey connection of Aspose, you need to provide both
the client_id and client_secret from your Aspose's application.
To access the Aspose's REST API, you need to create an application.
To register new applications, login into the [Aspose Developer Dashboard](https://dashboard.aspose.cloud/) site using your Aspose Account,
and go to the Applications view. Once you create a new application, Aspose will issue a client_id and client_secret.

| Input                     | Comments                                  | Default |
| ------------------------- | ----------------------------------------- | ------- |
| Application Client ID     | Client ID of your Aspose Application.     |         |
| Application Client Secret | Client Secret of your Aspose Application. |         |

## Actions

### Convert Cloud Storage Document

Converts a document in cloud storage to the specified format.

| Input         | Comments                                                                                               | Default |
| ------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                                        |         |
| File Name     | Name of the file inside the storage                                                                    |         |
| Format        | The destination format.                                                                                |         |
| Password      | Password of protected Word document.                                                                   |         |
| Folder Name   | The name of the folder in the storage.                                                                 |         |
| Out Path      | The path to the output document.                                                                       |         |
| Load Encoding | Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML. |         |
| Storage       | Original document storage.                                                                             |         |
| Debug Request | Enabling this flag will log out the current request.                                                   | false   |

### Convert Diagram

Converts document from the request's content to the specified format.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| File Content  | Reference of a file on a previous step to upload.    |         |
| File Name     | Download Document Name                               |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Convert HTML to PDF

Converts HTML file in storage to PDF format.

| Input              | Comments                                                                                                                                                                                                                                | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         |                                                                                                                                                                                                                                         |         |
| Upload to Storage  | Controls whetever the post-conversion file needs to be saved into an Aspose storage or not. If 'false', the resulting file will be returned into the response body. If 'true', the resulting file will be saved into an Aspose storage. | false   |
| Destination Path   | The destination document folder.                                                                                                                                                                                                        |         |
| Storage Name       | The document storage which contains the file.                                                                                                                                                                                           |         |
| Document Name      | The document name located in storage. (Note, this input is required in case you want to save the resulting file in an Aspose storage).                                                                                                  |         |
| Source Folder Path | Full source filename (ex. /folder1/folder2/template.zip). Note: this input is required in case you want to get the resulting file in the response.                                                                                      |         |
| HTML File Name     | Name of HTML file in ZIP.                                                                                                                                                                                                               |         |
| Page height        | Desired page height (in px).                                                                                                                                                                                                            |         |
| Page width         | Desired page width (in px).                                                                                                                                                                                                             |         |
| Is Landscape       | Is page landscaped?                                                                                                                                                                                                                     | false   |
| Margin Left        | Page margin left (in px).                                                                                                                                                                                                               |         |
| Margin Right       | Page margin right (in px).                                                                                                                                                                                                              |         |
| Margin Bottom      | Page margin bottom (in px).                                                                                                                                                                                                             |         |
| Margin Top         | Page margin top (in px).                                                                                                                                                                                                                |         |
| Debug Request      | Enabling this flag will log out the current request.                                                                                                                                                                                    | false   |

### Convert Local Document

Converts a document on a local drive to the specified format.

| Input                 | Comments                                                                                                                                                                           | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                    |         |
| Out Path              | The path to the output document on a local storage.                                                                                                                                |         |
| Password              | Password of protected Word document.                                                                                                                                               |         |
| Format                | The destination format.                                                                                                                                                            |         |
| File Name Field Value | The filename of the output document, this will be used when the resulting document has a dynamic field (filename). If it's not set, the name of the document will be used instead. |         |
| Load Encoding         | Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.                                                                             |         |
| Storage               | Original document storage name.                                                                                                                                                    |         |
| Document              | The document to convert.                                                                                                                                                           |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                               | false   |

### Convert PDF to DOC

Converts PDF document to DOC format.

| Input                           | Comments                                                                                                                                                                                                                                | Default |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Upload to Storage               | Controls whetever the post-conversion file needs to be saved into an Aspose storage or not. If 'false', the resulting file will be returned into the response body. If 'true', the resulting file will be saved into an Aspose storage. | false   |
| Out Path                        | Full resulting filename. (Note: this field is required post-conversion file needs to be saved in an Aspose storage.).                                                                                                                   |         |
| Folder Path                     | The Document folder                                                                                                                                                                                                                     |         |
| File Content                    | File to convert, if missing, action will assume that the file is located in an Aspose storage.                                                                                                                                          |         |
| Document Name                   | The name of the document inside Aspose. (Note: this input is required when the file to convert is located in an Aspose storage.)                                                                                                        |         |
| Password                        | The file password.                                                                                                                                                                                                                      |         |
| Format                          | Allows to specify .doc or .docx file format.                                                                                                                                                                                            |         |
| Add Return to Line End          | Add return to line end.                                                                                                                                                                                                                 | false   |
| Image Resolution X              | Image resolution X.                                                                                                                                                                                                                     |         |
| Image Resolution Y              | Image resolution Y.                                                                                                                                                                                                                     |         |
| Max Distance Between Text Lines | Max distance between text lines (in px).                                                                                                                                                                                                |         |
| Convertion Mode                 | Allows to control how a PDF document is converted into a word processing document.                                                                                                                                                      |         |
| Recognize Bullets               | Controls if the converter should recognize bullets or not.                                                                                                                                                                              | false   |
| Relative Horizontal Proximity   | Relative horizontal proximity (in px).                                                                                                                                                                                                  |         |
| Storage Name                    | Aspose's storage name to where the folder gets read or created.                                                                                                                                                                         |         |
| Connection                      |                                                                                                                                                                                                                                         |         |
| Debug Request                   | Enabling this flag will log out the current request.                                                                                                                                                                                    | false   |

### Convert PDF to HTML

Converts a PDF to HTML format.

| Input                                             | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Default      |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |              |
| Upload to Storage                                 | Controls whetever the post-conversion file needs to be saved into an Aspose storage or not. If 'false', the resulting file will be returned into the response body. If 'true', the resulting file will be saved into an Aspose storage.                                                                                                                                                                                                                               | false        |
| Storage Name                                      | Aspose's storage name to where the folder gets read or created.                                                                                                                                                                                                                                                                                                                                                                                                       |              |
| File Content                                      | File to convert, if missing, action will assume that the file is located in an Aspose storage.                                                                                                                                                                                                                                                                                                                                                                        |              |
| Document Name                                     | The name of the document inside Aspose. (Note: this input is required when the file to convert in located in an Aspose storage.)                                                                                                                                                                                                                                                                                                                                      |              |
| Format                                            | Result document type.                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Html5        |
| Out Path                                          | Full resulting filename. (Note: this field is required post-conversion file needs to be saved in an Aspose storage.).                                                                                                                                                                                                                                                                                                                                                 |              |
| Folder Name                                       | The document folder                                                                                                                                                                                                                                                                                                                                                                                                                                                   |              |
| Additional Margin Width In Points                 | Defines width of margin that will be forcibly left around that output HTML-areas.                                                                                                                                                                                                                                                                                                                                                                                     |              |
| Compress SVG Graphics If Any                      | Flag that indicates whether found SVG Graphics (if any) will be compressed (zipped) into SVGZ format during saving.                                                                                                                                                                                                                                                                                                                                                   | false        |
| Convert Marked Content To Layers                  | If set to true, all elements inside a PDF marked content (layer) will be put into an HTML div with 'data-pdflayer' attribute specifying the layer name. This layer name will be extracted from optional properties of PDF marked content. If this attribute is false (by default) then no any layers will be created from PDF marked content.                                                                                                                         | false        |
| Default Font Name                                 | Specifies the name of an installed font which is used to substitute any document font that is not embedded and not installed in the system. If null then default substitution font is used.                                                                                                                                                                                                                                                                           |              |
| Fixed Layout                                      | Flag that indicates whether the HTML is created as fixed layout.                                                                                                                                                                                                                                                                                                                                                                                                      | false        |
| Image Resolution                                  | Resolution for image rendering.                                                                                                                                                                                                                                                                                                                                                                                                                                       |              |
| Prevent Glyphs Grouping                           | This attribute switch on the mode when text glyphs will not be grouped into words and string. This mode allows to keep maximum precision during positioning of glyphs on the page and it can be usted for conversion documents with music notes or glyphs that should be placed separately each other. This parameter will be applied to document only when the value of Fixed Layout is set to true.                                                                 | false        |
| Split CSS Into Pages                              | When multipage-mode selected (i.e: 'Split Into Pages' is 'true') then this attribute defines whether separate CSS-files should be created for each HTML result page.                                                                                                                                                                                                                                                                                                  | false        |
| Split Into Pages                                  | Flag that indicates whether each page of source document will be converted into it's own target HTML document (i.e whether result HTML will be splitted into several HTML-pages).                                                                                                                                                                                                                                                                                     | false        |
| Use Z-Order                                       | If set to true, graphics and text are added to resultant HTML document according Z-order in original PDF document. If false, all graphics are put as single-layer which may cause some unnecesary effects for overlapped objects.                                                                                                                                                                                                                                     | false        |
| Antialiasing Processing                           | Defines required antialiasing measures during conversion of compound background images from PDF to HTML.                                                                                                                                                                                                                                                                                                                                                              |              |
| CSS Class Names Prefix                            | When PDFtoHTML converter generates result CSS's, CSS class names are generated and used in result CSS. This attribute allows forcibly set class name prefix.                                                                                                                                                                                                                                                                                                          |              |
| Font Encoding Strategy                            | Defines encoding special rule to tune PDF decoding for current document.                                                                                                                                                                                                                                                                                                                                                                                              |              |
| Font Saving Mode                                  | Defines font saving mode that will be used during saving of PDF to desirable format.                                                                                                                                                                                                                                                                                                                                                                                  |              |
| HTML Markup Generation Mode                       | Sometimes specific requirements to generation of HTML markup are present. This parameter defines HTML preparing modes that can be used during conversion of PDF to HTML to match such specific requirements.                                                                                                                                                                                                                                                          | WriteAllHtml |
| Letters Positioning Method                        | The mode of positioning of letters in words in result HTML.                                                                                                                                                                                                                                                                                                                                                                                                           |              |
| Pages Flow Type Depends On Viewers Screen Size    | If attribute 'Split On Pages' is false, then whole HTML representing all input PDF pages will be put into one big result HTML file. This flag defines whether result HTML will be generated in such a way that result HTML will be generated in such way that flow areas that represent PDF pages in result HTML will depend on screen resolution of viewer.                                                                                                          | false        |
| Parts Embedding Mode                              | Defines whether referenced files (HTML, Fonts, Images, CSS) will be embedded into main HTML file or will be generated as apart binary entities.                                                                                                                                                                                                                                                                                                                       |              |
| Raster Images Saving Mode                         | Converted PDF can contain raster images. This parameter defines how they should be handled during conversion of PDF to HTML.                                                                                                                                                                                                                                                                                                                                          |              |
| Remove Empty Areas On Top And Bottom              | Defines whether in created HTML will be removed top and bottom empty area without any content (if any).                                                                                                                                                                                                                                                                                                                                                               | false        |
| Save Shadowed Texts As Transparent Texts          | Pdf can contain text that are shadowed by another elements (i.e by images) but can be selected to clipboard in Acrobat Reader (usually it happens when document contains images and OCRed texts extracted from it). This settins tells the converter whether we need to save such text as transparent selectable texts in result HTML to mimic behavior of Acorbat Reader (otherwise such texts are usually saved as hidden, not available for copying to clipboard). | false        |
| Save Transparent Texts                            | Pdf can contain transparent text that can be selected to clipboard (usually it happens when document contains images and OCRed text extracted from it). This setting tells the converterw whether we need to save such texts as transparent selectable texts in result HTML.                                                                                                                                                                                          | false        |
| Special Folder For All Images                     | The path to directory to which must be saved any images if they are encountered during saving od document as HTML. If parameter is empty or null then images will be saved together with other files linked toHTML. It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file.                                                                                                                           |              |
| Special Folder For SVG Images                     | The path to directory to which must be saved any SVG images if they are encountered during saving of document as HTML. If parameter is empty or null then SVG images will be saved together with other files linked to HTML. It does not affect anything if CustomImageSavingStrategy property was successfully used to process relevant image file.                                                                                                                  |              |
| Try Save Text Underlining And Strikeouting In CSS | PDF itself does not contain uinderlining markers for texts. It's emulated with line situated under text. This option allows the converter to try and guess that this or that line is a text's underlining and put this info into CSS instead of drawing of underlining graphically.                                                                                                                                                                                   | false        |
| Minimal Line Width                                | Minimal line width.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |              |
| Debug Request                                     | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                                                                                                                                                                  | false        |

### Copy File

Copies a file.

| Input                    | Comments                                                                  | Default |
| ------------------------ | ------------------------------------------------------------------------- | ------- |
| Connection               |                                                                           |         |
| Source Folder Path       | Source file's path. e.g: '/Folder1/fole.ext or '/Bucket/Folder1/file.ext' |         |
| Destination Folder Path  | Destination file path.                                                    |         |
| Source Storage Name      | Source storage name.                                                      |         |
| Destination Storage Name | Destination storage name.                                                 |         |
| File Version ID          | File version ID to download.                                              |         |
| Debug Request            | Enabling this flag will log out the current request.                      | false   |

### Copy Folder

Copies a folder.

| Input                    | Comments                                             | Default |
| ------------------------ | ---------------------------------------------------- | ------- |
| Connection               |                                                      |         |
| Source Folder Path       | Source folder path.                                  |         |
| Destination Folder Path  | Destination folder path.                             |         |
| Source Storage Name      | Source storage name.                                 |         |
| Destination Storage Name | Destination storage name.                            |         |
| Debug Request            | Enabling this flag will log out the current request. | false   |

### Create Document

Creates a new document in cloud storage in the format, determined by the file extension. All save format extensions are supported.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| File Name     | Name of the file to upload.                          |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Folder

Creates a folder.

| Input         | Comments                                                        | Default |
| ------------- | --------------------------------------------------------------- | ------- |
| Connection    |                                                                 |         |
| Folder Path   | Target folder's path.The folders will be created recursively.   |         |
| Storage Name  | Aspose's storage name to where the folder gets read or created. |         |
| Debug Request | Enabling this flag will log out the current request.            | false   |

### Delete File

Deletes a file.

| Input           | Comments                                                                       | Default |
| --------------- | ------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                |         |
| File Path       | Path of the file including the file name and extension. e.g: /folder1/file.ext |         |
| File Version ID | File version ID to download.                                                   |         |
| Storage Name    | Storage name.                                                                  |         |
| Debug Request   | Enabling this flag will log out the current request.                           | false   |

### Delete Folder

Deletes a folder.

| Input         | Comments                                                        | Default |
| ------------- | --------------------------------------------------------------- | ------- |
| Connection    |                                                                 |         |
| Folder Path   | Target folder's path.The folders will be created recursively.   |         |
| Storage Name  | Aspose's storage name to where the folder gets read or created. |         |
| Recursive     | Enable to delete folders, subfolders and files recursively.     | false   |
| Debug Request | Enabling this flag will log out the current request.            | false   |

### Download File

Downloads a file.

| Input           | Comments                                                                       | Default |
| --------------- | ------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                |         |
| File Path       | Path of the file including the file name and extension. e.g: /folder1/file.ext |         |
| File Version ID | File version ID to download.                                                   |         |
| Storage Name    | Storage name.                                                                  |         |
| Debug Request   | Enabling this flag will log out the current request.                           | false   |

### Get Diagram

Exports the document into the specified format.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Diagram Name  | The name of the diagram.                             |         |
| Format        | The destination format.                              |         |
| Folder Path   | The folder path where original diagram is located.   |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Document

Reads common information from the document.

| Input         | Comments                                              | Default |
| ------------- | ----------------------------------------------------- | ------- |
| Connection    |                                                       |         |
| Document Name | The filename of the input document.                   |         |
| Folder Path   | The path to the folder where the document is located. |         |
| Storage Name  | Storage name.                                         |         |
| Debug Request | Enabling this flag will log out the current request.  | false   |

### Get Files List

Get all files and folders within a folder.

| Input         | Comments                                                        | Default |
| ------------- | --------------------------------------------------------------- | ------- |
| Connection    |                                                                 |         |
| Folder Path   | Target folder's path.The folders will be created recursively.   |         |
| Storage Name  | Aspose's storage name to where the folder gets read or created. |         |
| Debug Request | Enabling this flag will log out the current request.            | false   |

### Load Web Document

Downloads a document from the web using URL and saves it to cloud storage in the specified format.

| Input                | Comments                                             | Default |
| -------------------- | ---------------------------------------------------- | ------- |
| Connection           |                                                      |         |
| Debug Request        | Enabling this flag will log out the current request. | false   |
| Loading Document URL | The web document URL.                                |         |

### Move File

Moves a file.

| Input                    | Comments                                                                  | Default |
| ------------------------ | ------------------------------------------------------------------------- | ------- |
| Connection               |                                                                           |         |
| Source Folder Path       | Source file's path. e.g: '/Folder1/fole.ext or '/Bucket/Folder1/file.ext' |         |
| Destination Folder Path  | Destination file path.                                                    |         |
| Source Storage Name      | Source storage name.                                                      |         |
| Destination Storage Name | Destination storage name.                                                 |         |
| File Version ID          | File version ID to download.                                              |         |
| Debug Request            | Enabling this flag will log out the current request.                      | false   |

### Move Folder

Moves a folder.

| Input                    | Comments                                             | Default |
| ------------------------ | ---------------------------------------------------- | ------- |
| Connection               |                                                      |         |
| Source Folder Path       | Source folder path.                                  |         |
| Destination Folder Path  | Destination folder path.                             |         |
| Source Storage Name      | Source storage name.                                 |         |
| Destination Storage Name | Destination storage name.                            |         |
| Debug Request            | Enabling this flag will log out the current request. | false   |

### Save Diagram As

Converts document to destination format with detailed settings and saves result to storage.

| Input                   | Comments                                                          | Default |
| ----------------------- | ----------------------------------------------------------------- | ------- |
| Connection              |                                                                   |         |
| Original Document Name  | Name of the original document.                                    |         |
| Destination Folder Path | Destination folder path.                                          |         |
| Destination File Name   | The name of the converted file.                                   |         |
| Folder Name             | Original document folder.                                         |         |
| Overwrite               | If true overwrite the same file name. The default value is false. | false   |
| Default Font            | The default font for the diagram.                                 |         |
| Debug Request           | Enabling this flag will log out the current request.              | false   |

### Save Document As

Converts a document in cloud storage to the specified format.

| Input                 | Comments                                                                                                                                                                                                                                                                                | Default |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection            |                                                                                                                                                                                                                                                                                         |         |
| File Name             | Name of the file to convert inside your Aspose Storage.                                                                                                                                                                                                                                 |         |
| Destination File Name | The name of the converted file.                                                                                                                                                                                                                                                         |         |
| Format                | The destination format.                                                                                                                                                                                                                                                                 |         |
| Save Options Data     | Provide save options related to the SaveFormat provided. For all save options, please refer to this link: https://reference.aspose.cloud/words/#/op/SaveAs (Toggle 'Advanced Parameters' on and then select a SaveOptionsData object congruent to the one chosen in the 'Format' input) |         |
| Folder Name           | The name of the folder in the storage.                                                                                                                                                                                                                                                  |         |
| Password              | Password of protected Word document.                                                                                                                                                                                                                                                    |         |
| Load Encoding         | Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.                                                                                                                                                                                  |         |
| Storage               | Original document storage name.                                                                                                                                                                                                                                                         |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                                                                                                                                                                    | false   |

### Split Document

Splits a document into parts and saves them in the specified format.

| Input                 | Comments                                                                                                                                         | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Document Name         | The filename of the input document.                                                                                                              |         |
| Password              | Password of protected Word document.                                                                                                             |         |
| Storage Name          | Aspose's storage name to where the folder gets read or created.                                                                                  |         |
| Load Encoding         | Encoding that will be used to load an HTML (or TXT) document if the encoding is not specified in HTML.                                           |         |
| Connection            |                                                                                                                                                  |         |
| From Page             | The start page from where to start the splitting process                                                                                         |         |
| To Page               | The end page where to end the splitting process                                                                                                  |         |
| Zip Output            | Flag that indicates whether to ZIP the output.                                                                                                   | false   |
| Format                | The format to split.                                                                                                                             |         |
| Destination File Name | Result path of the document after the operation. If this parameter is ommited then result of the operation will be saved as the source document. |         |
| Folder                | Original document folder                                                                                                                         |         |
| Debug Request         | Enabling this flag will log out the current request.                                                                                             | false   |

### Upload File

Uploads a file.

| Input         | Comments                                                                       | Default |
| ------------- | ------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                |         |
| File Path     | Path of the file including the file name and extension. e.g: /folder1/file.ext |         |
| File Content  | Reference of a file on a previous step to upload.                              |         |
| Storage Name  | Storage name.                                                                  |         |
| Debug Request | Enabling this flag will log out the current request.                           | false   |
