---
title: OpenAI Connector
sidebar_label: OpenAI
description: Interact with OpenAI's models and build AI Agents
---

![OpenAI](./assets/openai.png#connector-icon)
Interact with OpenAI&#x27;s models and build AI Agents

## Connections

### OpenAI API Key

Connect to OpenAI using an API key

Integrations can authenticate with OpenAI using API keys.
Generate an API key at [platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).

If your user is associate with one organization, you can leave the connection's organization field blank.
Otherwise, specify your organization's ID.

| Input        | Comments                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------- | ------- |
| API Key      | Generate an API key at https://platform.openai.com/account/api-keys              |         |
| Organization | Your organization ID. If you have just one organization, this value is optional. |         |

## Triggers

### Tool Flow Trigger

Marks this flow as a tool that can be called by AI agents

## Actions

### Agent: Add Local MCP Server

Configure a local MCP server that runs via command line

| Input        | Comments                                                                | Default |
| ------------ | ----------------------------------------------------------------------- | ------- |
| Server Label | Unique identifier for the MCP server                                    |         |
| Command      | Command to execute the MCP server (currently only npx is supported)     | npx     |
| Arguments    | Arguments to pass to the command                                        |         |
| Tool Filter  | List of specific tool names to expose. If empty, all tools are exposed. |         |

### Agent: Add Remote MCP Server

Configure a remote MCP server accessed via HTTP

| Input        | Comments                                                                                | Default |
| ------------ | --------------------------------------------------------------------------------------- | ------- |
| Server Label | Unique identifier for the MCP server                                                    |         |
| Server URL   | URL endpoint for the MCP server                                                         |         |
| Headers      | HTTP headers for authentication or other needs. Key = header name, Value = header value |         |
| Tool Filter  | List of specific tool names to expose. If empty, all tools are exposed.                 |         |

### Agent: Classify and Branch

Use AI to analyze input and route to the appropriate branch

| Input                       | Comments                                                                                                              | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| OpenAI Connection           | Connection to OpenAI API with your API key                                                                            |         |
| Model                       | Select an OpenAI model to use for the request. The list of available models will be fetched from your OpenAI account. |         |
| Classification Instructions | Additional instructions for how to classify the input                                                                 |         |
| Branch Definitions          | Define branches and their classification criteria. Key = branch name, Value = description of when to use this branch  |         |
| Input Text                  | The text to analyze and classify (e.g., email content)                                                                |         |
| Tools                       | List of tools available to the agent. Each tool should be the output from a Create Tool action.                       |         |
| MCP Servers                 | List of MCP server configurations. Each should be the output from an Add MCP Server action.                           |         |
| File IDs                    | File IDs from previously uploaded files to OpenAI. Use the Upload File action to get these IDs.                       |         |

### Agent: Create

Create an AI agent with customizable instructions.

| Input                | Comments                                                                                                              | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Model                | Select an OpenAI model to use for the request. The list of available models will be fetched from your OpenAI account. |         |
| Name                 | The name of the agent                                                                                                 |         |
| Instructions         | System instructions that define the agent's behavior and capabilities                                                 |         |
| Handoff Description  | Description for handoff routing. Used by other agents to understand when to hand off to this agent.                   |         |
| Tools                | List of tools available to the agent. Each tool should be the output from a Create Tool action.                       |         |
| MCP Servers          | List of MCP server configurations. Each should be the output from an Add MCP Server action.                           |         |
| Output Schema        | JSON Schema for structured output. Forces the agent to respond with data matching this schema.                        |         |
| Output Schema Name   | Name for the output schema                                                                                            | output  |
| Output Schema Strict | If true, enforces strict schema validation                                                                            | false   |

### Agent: Create Code Interpreter Tool

Create a code interpreter tool that allows agents to execute Python code

| Input          | Comments                                                         | Default          |
| -------------- | ---------------------------------------------------------------- | ---------------- |
| Tool Name      | Custom name for the code interpreter tool                        | Code Interpreter |
| Container Type | Container type for code execution                                | auto             |
| Container ID   | Specific container ID (only used if containerType is 'specific') |                  |
| File IDs       | Comma-separated list of file IDs to include in the container     |                  |

### Agent: Create File Search Tool

Create a file search tool that searches through vector stores

| Input                  | Comments                                           | Default     |
| ---------------------- | -------------------------------------------------- | ----------- |
| Tool Name              | Custom name for the file search tool               | File Search |
| Vector Store IDs       | Comma-separated list of vector store IDs to search |             |
| Max Results            | Maximum number of results to return                |             |
| Include Search Results | Include search results in the LLM output           | true        |
| Ranking Algorithm      | Algorithm for ranking search results               |             |
| Score Threshold        | Minimum score threshold for results (0-1)          |             |

### Agent: Create Flow Tool

Create a tool configuration that allows an agent to invoke another flow

| Input             | Comments                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------- | ------- |
| Flow Name         | The flow that this tool will invoke when called by an agent                               |         |
| Tool Description  | Description that helps the agent understand when to use this tool                         |         |
| Strict Mode       | If true, requires exact parameter matching. If false, allows flexibility in agent inputs. | false   |
| Requires Approval | If true, the tool will require human approval before the agent can execute the flow       | false   |

### Agent: Create Human Approval Tool

Create a tool that requires human approval before the agent can proceed

| Input             | Comments                                                                                                                                                | Default                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Tool Name         | Name for the approval tool                                                                                                                              | Human Approval                                            |
| Tool Description  | Description that helps the agent understand when to use this tool                                                                                       | Request human approval before proceeding with this action |
| Parameters Schema | Optional JSON schema for parameters the agent should provide when calling this tool. If not provided, the tool will accept a 'reason' string parameter. |                                                           |

### Agent: Create Image Generation Tool

Create an image generation tool that allows agents to generate images

| Input              | Comments                                            | Default          |
| ------------------ | --------------------------------------------------- | ---------------- |
| Tool Name          | Custom name for the image generation tool           | Image Generation |
| Background         | Background type for generated images                | auto             |
| Input Fidelity     | Input fidelity level                                |                  |
| Model              | Model to use for generation                         | gpt-image-1      |
| Moderation         | Moderation level for content filtering              | auto             |
| Output Compression | Compression level 0-100 (higher = more compression) |                  |
| Output Format      | Image output format                                 | png              |
| Partial Images     | Number of partial images to generate                |                  |
| Quality            | Quality level for generated images                  | auto             |
| Size               | Image dimensions                                    | auto             |

### Agent: Create Web Search Tool

Create a web search tool that allows agents to search the web

| Input               | Comments                                                        | Default    |
| ------------------- | --------------------------------------------------------------- | ---------- |
| Tool Name           | Custom name for the web search tool                             | Web Search |
| Search Context Size | Amount of context to return from searches                       | medium     |
| User City           | City for location-aware searches                                |            |
| User Country        | Country for location-aware searches                             |            |
| User Region         | Region/state for location-aware searches                        |            |
| User Timezone       | Timezone for time-sensitive searches (e.g., 'America/New_York') |            |

### Agent: Resume Run

Resume an interrupted agent run with approval decisions

| Input               | Comments                                                                                                        | Default |
| ------------------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| OpenAI Connection   | Connection to OpenAI API with your API key                                                                      |         |
| Agent Configuration | Agent configuration object from Create Agent action. Should be the same configuration used in the original run. |         |
| Run State           | State from the interrupted run, containing the execution context and interruptions.                             |         |
| Approval Responses  | Array of approval responses with updated approvalRequest objects containing functionId and approved status.     |         |
| Max Turns           | Maximum number of conversation turns the agent can take from this point. Prevents infinite loops.               | 10      |
| Handoff Agents      | Same handoff agents configuration used in the original run, if any.                                             |         |

### Agent: Run

Run an agent

| Input                | Comments                                                                                                                                              | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| OpenAI Connection    | Connection to OpenAI API with your API key                                                                                                            |         |
| Agent Configuration  | Agent configuration object from Create Agent action                                                                                                   |         |
| User Input           | The message or question to send to the agent                                                                                                          |         |
| History              | Previous conversation history. Use this to continue a conversation from a previous run. Should be the history array from a previous agent run result. |         |
| File IDs             | File IDs from previously uploaded files to OpenAI. Use the Upload File action to get these IDs.                                                       |         |
| Previous Response ID | ID of the previous response to continue the conversation. Alternative to passing full history array.                                                  |         |
| Max Turns            | Maximum number of conversation turns the agent can take. Prevents infinite loops.                                                                     | 10      |
| Handoff Agents       | List of agent configurations that can be handed off to. Each should be the output from a Create Agent action.                                         |         |

### Create Chat Completion

Create a completion for the chat message

| Input             | Comments                                                                                                                                                                                                                                    | Default                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection        |                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                               |
| Model             | Select an OpenAI model to use for the request. The list of available models will be fetched from your OpenAI account.                                                                                                                       | gpt-3.5-turbo                                                                                                                                                                                                                                                                                                                                                                                                 |
| Messages          |                                                                                                                                                                                                                                             | <code>[<br /> {<br /> "role": "system",<br /> "content": "You are a helpful assistant."<br /> },<br /> {<br /> "role": "user",<br /> "content": "Who won the world series in 2020?"<br /> },<br /> {<br /> "role": "assistant",<br /> "content": "The Los Angeles Dodgers won the World Series in 2020."<br /> },<br /> {<br /> "role": "user",<br /> "content": "Where was it played?"<br /> }<br />]</code> |
| Temperature       | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.                                                        | 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| top_p             | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. | 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| Number of choices | How many chat completion choices to generate for each input message.                                                                                                                                                                        | 1                                                                                                                                                                                                                                                                                                                                                                                                             |
| Timeout (ms)      | The maximum amount of time (in MS) to wait for a response.                                                                                                                                                                                  | 10000                                                                                                                                                                                                                                                                                                                                                                                                         |

### Create Image

Create image(s) given a prompt

| Input            | Comments                                                                           | Default   |
| ---------------- | ---------------------------------------------------------------------------------- | --------- |
| Connection       |                                                                                    |           |
| Prompt           | A text description of the desired image(s). The maximum length is 1000 characters. |           |
| Number of Images | The number of images to generate. Must be between 1 and 10.                        | 1         |
| Image Size       | The size of the generated images. Must be one of 256x256, 512x512, or 1024x1024.   | 1024x1024 |
| Timeout (ms)     | The maximum amount of time (in MS) to wait for a response.                         | 10000     |

### Create Response

Create a response using the responses endpoint

| Input        | Comments                                                                                                              | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                       |         |
| Model        | Select an OpenAI model to use for the request. The list of available models will be fetched from your OpenAI account. | gpt-4.1 |
| Input        | The input text to process                                                                                             |         |
| Timeout (ms) | The maximum amount of time (in MS) to wait for a response.                                                            | 10000   |

### Delete File

Delete a previously uploaded file

| Input        | Comments                                                   | Default |
| ------------ | ---------------------------------------------------------- | ------- |
| Connection   |                                                            |         |
| File ID      | The ID of the file to delete                               |         |
| Timeout (ms) | The maximum amount of time (in MS) to wait for a response. | 10000   |

### Get Model by ID

Get model by ID

| Input        | Comments                                                                                                              | Default |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                       |         |
| Model        | Select an OpenAI model to use for the request. The list of available models will be fetched from your OpenAI account. |         |
| Timeout (ms) | The maximum amount of time (in MS) to wait for a response.                                                            | 10000   |

### List Files

List previously uploaded files

| Input        | Comments                                                   | Default |
| ------------ | ---------------------------------------------------------- | ------- |
| Connection   |                                                            |         |
| Purpose      | Filter files by purpose                                    |         |
| Timeout (ms) | The maximum amount of time (in MS) to wait for a response. | 10000   |

### List Models

List all available models

| Input        | Comments                                                   | Default |
| ------------ | ---------------------------------------------------------- | ------- |
| Connection   |                                                            |         |
| Timeout (ms) | The maximum amount of time (in MS) to wait for a response. | 10000   |

### Raw Request

Send raw HTTP request to OpenAI

| Input                   | Comments                                                                                                                                                                                                                                | Default    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Connection              |                                                                                                                                                                                                                                         |            |
| URL                     | Input the path only (/v1/images/generations), The base URL is already included (https://api.openai.com). For example, to connect to https://api.openai.com/v1/images/generations, only /v1/images/generations is entered in this field. | /v1/models |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                 |            |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                               |            |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                    |            |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                        |            |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                  |            |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                     |            |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                             |            |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                | json       |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                     |            |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                    | false      |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                     | 0          |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                        | false      |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                     | 0          |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                           | false      |

### Retrieve File

Retrieve information about a specific file

| Input        | Comments                                                   | Default |
| ------------ | ---------------------------------------------------------- | ------- |
| Connection   |                                                            |         |
| File ID      | The ID of the file to retrieve                             |         |
| Timeout (ms) | The maximum amount of time (in MS) to wait for a response. | 10000   |

### Upload File

Upload a file to OpenAI that can be used with various features

| Input        | Comments                                                   | Default |
| ------------ | ---------------------------------------------------------- | ------- |
| Connection   |                                                            |         |
| File         | The file to upload (binary data or base64 encoded)         |         |
| Filename     | Name of the file including extension                       |         |
| Purpose      | The intended purpose of the uploaded file                  |         |
| Timeout (ms) | The maximum amount of time (in MS) to wait for a response. | 10000   |
