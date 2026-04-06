---
title: Text Manipulation Connector
sidebar_label: Text Manipulation
description: Perform common operations on strings and arrays of strings
---

![Text Manipulation](./assets/text-manipulation.png#connector-icon)
The **text manipulation** component allows you to perform common operations on some text.
For example, you can join two or more text strings together with the **join** action, find text with the **match** action, replace strings with other strings within a piece of text with the **replace** function, and more.

## Actions

### Decode Base64 {#decodebase64}

Convert the input string from base64 encoding

| Input       | Comments | Default |
| ----------- | -------- | ------- |
| Base64 Text |          |         |

### Encode Base64 {#encodebase64}

Convert the input string or file to base64 encoding

| Input        | Comments | Default |
| ------------ | -------- | ------- |
| Text or file |          |         |

### Extract Substring {#slice}

Extract a substring from a string

| Input       | Comments                                           | Default |
| ----------- | -------------------------------------------------- | ------- |
| Text        | This is the text to manipulate                     |         |
| Slice start | The index on which to start the slice of the text. |         |
| Slice stop  | The index on which to stop the slice of the text.  |         |

### Find & Replace {#replace}

Find and replace all instances of one substring with another

| Input                                             | Comments                                                                                  | Default |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Text                                              | This is the text to manipulate                                                            |         |
| Substring to find and be replaced                 | This is the substring that is to be replaced.                                             |         |
| The substring to replace instances of 'find' with | The substring to replace instances of 'find' with. Can be a string or regular expression. |         |

### Find & Replace Multiple Substrings {#replacemultiplesubstring}

Find and replace all instances of multiple substrings with another

| Input        | Comments                       | Default |
| ------------ | ------------------------------ | ------- |
| Text         | This is the text to manipulate |         |
| Replace With | Replace                        |         |

### HTML Decode {#htmldecode}

Decode HTML-encoded input string

| Input | Comments                       | Default |
| ----- | ------------------------------ | ------- |
| Text  | This is the text to manipulate |         |

### HTML Encode {#htmlencode}

Convert input string to HTML-encoded equivalent

| Input | Comments                       | Default |
| ----- | ------------------------------ | ------- |
| Text  | This is the text to manipulate |         |

### Join {#join}

Join strings together using an optional separator to form a single string.

| Input     | Comments                                                | Default |
| --------- | ------------------------------------------------------- | ------- |
| Strings   | A set of strings to join together into a single string. |         |
| Separator | The separator to use to split or concatenate text.      |         |

### Join Lines {#joinlines}

Join strings together with a newline character

| Input              | Comments                                                | Default |
| ------------------ | ------------------------------------------------------- | ------- |
| Strings            | A set of strings to join together into a single string. |         |
| Newline type       | The type of newline to use.                             | <br />  |
| Number of newlines | The number of newlines to insert.                       | 1       |

### Lower Case {#lowercase}

Convert the input string to lower case

| Input | Comments                       | Default |
| ----- | ------------------------------ | ------- |
| Text  | This is the text to manipulate |         |

### Match Regex {#match}

Match a string against a regular expression

| Input       | Comments                                                                                                                                                                                                                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Text        | This is the text to manipulate                                                                                                                                                                                                                                                   |         |
| Regex       | A regular expression to match against the text that is supplied.                                                                                                                                                                                                                 |         |
| Regex Flags | Flags to apply to the regular expression. For example, you can specify 'd' to ensure capture groups are returned. See [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) for more information. | g       |

### Remove Whitespace {#trim}

Remove leading and trailing whitespace from a string

| Input | Comments                       | Default |
| ----- | ------------------------------ | ------- |
| Text  | This is the text to manipulate |         |

### Split Lines {#splitlines}

Split a block of text on newline characters (\n)

| Input              | Comments                                    | Default |
| ------------------ | ------------------------------------------- | ------- |
| Text               | This is the text to manipulate              |         |
| Filter Blank Lines | Filter blank lines (like trailing newlines) | true    |

### Split String {#split}

Split a string into a list of strings on a separator character

| Input     | Comments                                           | Default |
| --------- | -------------------------------------------------- | ------- |
| Text      | This is the text to manipulate                     |         |
| Separator | The separator to use to split or concatenate text. |         |

### String Length {#stringlength}

Get the length of a string

| Input | Comments                       | Default |
| ----- | ------------------------------ | ------- |
| Text  | This is the text to manipulate |         |

### Upper Case {#uppercase}

Convert the input string to UPPER CASE

| Input | Comments                       | Default |
| ----- | ------------------------------ | ------- |
| Text  | This is the text to manipulate |         |
