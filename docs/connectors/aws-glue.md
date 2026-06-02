---
title: AWS Glue Connector
sidebar_label: AWS Glue
description: Manage AWS Glue crawlers, jobs and triggers
---

![AWS Glue](./assets/aws-glue.png#connector-icon)
Manage AWS Glue crawlers, jobs and triggers

## Connections

### AWS Glue Access Key and Secret {#apikeysecret}

Authenticates requests to AWS Glue using an API Key and API Secret.

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

### AWS Role ARN {#awsassumerole}

Connect to AWS using an assumed role

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

## Actions

### Get Job Run {#getjobrun}

Retrieves the metadata for a given job run.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Run Id     | Provide a string value for the run Id.                                  |         |
| Connection |                                                                         |         |

### List Crawlers {#listcrawlers}

List Crawlers available in AWS Glue

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Connection |                                                                                                               |         |

### List Jobs {#listjobs}

List job schemas available in AWS Glue

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Connection |                                                                                                               |         |

### List Triggers {#listtriggers}

List the names of all triggers in the account.

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Max Items  | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50. |         |
| Marker     | Specify the pagination token that's returned by a previous request to retrieve the next page of results       |         |
| Connection |                                                                                                               |         |

### Start Crawler {#startcrawler}

Starts an existing crawler in AWS Glue.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Start Job Run {#startjobrun}

Starts a job run using a AWS Glue job definition.

| Input                  | Comments                                                                                                                                                                            | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region             | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                             |         |
| Name                   | Provide a string value for the name (NOT the ARN).                                                                                                                                  |         |
| Allocated Capacity     | The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. If this is omitted, Glue will use the default number of DPUs configured for your job. |         |
| Security Configuration | The name of the SecurityConfiguration structure to be used with this job. This can be left blank if you do not have a security configuration.                                       |         |
| args                   | Optional key value parameters to pass into a job.                                                                                                                                   |         |
| Connection             |                                                                                                                                                                                     |         |

### Start Trigger {#starttrigger}

Starts an existing trigger in AWS Glue.

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Stop Crawler {#stopcrawler}

If the specified crawler is running, stops the crawl

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |

### Stop Job Run {#stopjobrun}

Stops one or more job runs for a specified job definition

| Input       | Comments                                                                | Default |
| ----------- | ----------------------------------------------------------------------- | ------- |
| AWS Region  | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name        | Provide a string value for the name (NOT the ARN).                      |         |
| Job Run Ids | Provide a list of job run Ids                                           |         |
| Connection  |                                                                         |         |

### Stop trigger {#stoptrigger}

Stops a specified trigger

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Name       | Provide a string value for the name (NOT the ARN).                      |         |
| Connection |                                                                         |         |
