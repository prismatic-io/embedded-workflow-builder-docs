---
title: Runner Environment and Limits
description: A %WORKFLOW% runs in an isolated Node.js environment. This page details those environments along with execution limits.
---

%WORKFLOW_PLURAL% execute in isolated, containerized Node.js environments with specific resource allocations and execution constraints.
Understanding these limits helps you design %WORKFLOW_PLURAL% that perform reliably within the runner's boundaries.

## The runner environment

Executions of %WORKFLOW_PLURAL% (and test runs of %WORKFLOW_PLURAL%) execute in isolated Node.js containers with distinct filesystems and memory.
Two executions of the same %WORKFLOW% run in distinct isolated environments.
%WORKFLOW_PLURAL% currently run using Node.js version 22.

## Runner limitations

### Memory allocation

The %WORKFLOW% runner is allocated 1GB of RAM for execution by default.
If you find that your %WORKFLOW_PLURAL% are running out of memory, optimizing data processing and avoiding large in-memory datasets can usually mitigate memory issues.

### Execution time limitations

A %WORKFLOW% will run for up to 15 minutes.
If you have large datasets to process, you can break data into smaller chunks and process chunks in parallel by send them to another %WORKFLOW% or process chunks in several subsequent executions using [looping](./looping.md).

## Webhook limitations

### Webhook request size limitations

Webhook payload size is limited to 6MB.
6MB is generally large enough to handle most JSON, XML, or other webhook payloads.

If the payload you need to process exceeds 6MB (for example, you are processing large images, PDFs, etc.), we recommend saving the large file to a file storage system first (Dropbox, Amazon S3, Azure Files, etc.) and sending _metadata_ about the file in your webhook request.
Your %WORKFLOW% can then use the metadata to fetch the file for processing.

### Synchronous webhook response size limitations

When a webhook is invoked synchronously, the response contains the results of the last step of the %WORKFLOW% (so if the last step returned a PDF file, the webhook response would be a PDF file).
The runner writes the response to a file in cloud storage and responds with an HTTP 303 (Redirect) to the stored object.

Step results have a maximum size of 500MB.
If the results that you generate exceed 500MB, consider writing the file to a file storage system (Dropbox, your own Amazon S3 bucket, etc.) and returning metadata about the file instead.

### Synchronous invocation timeouts

A webhook request will time out after 30 seconds.
Webhook requests to [synchronous triggers](./triggering.md#synchronous-and-asynchronous-invocations) (triggers that wait until the execution finishes running before responding) must complete their work in under 30 seconds.

### Webhook rate limiting and concurrent executions

The number of concurrent executions you can run is determined %COMPANY%.
If you are already running that many executions and an additional request is received, the requester will receive a 429 "too many requests" response.

When an execution starts, the first log line includes the number of executions that are currently running.
