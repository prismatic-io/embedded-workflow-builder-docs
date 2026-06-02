---
title: Redshift Connector
sidebar_label: Redshift
description: Execute SQL statements and manage data in Amazon Redshift using the AWS Redshift Data API
---

![Redshift](./assets/aws-redshift.png#connector-icon)
Execute SQL statements and manage data in Amazon Redshift using the AWS Redshift Data API

## Connections

### Access Key and Secret {#awsaccesskeysecret}

Authenticate requests to AWS using an Access Key and Secret Key.

| Input             | Comments                                                                      | Default |
| ----------------- | ----------------------------------------------------------------------------- | ------- |
| Access Key ID     | The AWS Access Key ID used to authenticate requests to the Redshift Data API. |         |
| Secret Access Key | The AWS Secret Access Key paired with the Access Key ID for request signing.  |         |

### AWS Role ARN {#awsassumerole}

Connect to AWS using an assumed role

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

## Actions

### Describe Statement {#describestatement}

Get detailed information about a specific SQL statement in Redshift.

| Input          | Comments                                                                               | Default |
| -------------- | -------------------------------------------------------------------------------------- | ------- |
| AWS Connection | Select the AWS connection to use for Redshift Data API access.                         |         |
| Statement ID   | The unique identifier of the executed SQL statement returned by the Redshift Data API. |         |
| AWS Region     | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                |         |

### Execute SQL Statement {#executestatement}

Execute a SQL statement in Redshift.

| Input                        | Comments                                                                                                                                                                                           | Default |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Connection               | Select the AWS connection to use for Redshift Data API access.                                                                                                                                     |         |
| SQL Statement                | The SQL statement to run against the Redshift database. Supports DML (INSERT, UPDATE, DELETE), DDL (CREATE, DROP, ALTER), and query (SELECT) statements.                                           |         |
| Database Name                | The name of the database to connect to. This parameter is required when authenticating using either Secrets Manager or temporary credentials.                                                      |         |
| AWS Region                   | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                            |         |
| Workgroup Name               | The name of the Redshift serverless workgroup. This parameter is required when connecting to a serverless workgroup and authenticating using either Secrets Manager or temporary credentials.      |         |
| Cluster Identifier           | The identifier of the Redshift cluster. Required for cluster connections using either Secrets Manager or temporary credentials.                                                                    |         |
| Get Statement Result         | When true, waits for the statement to finish executing and returns its result set. Only SELECT statements produce result rows. <strong>Note:</strong> long-running statements may cause a timeout. | true    |
| Statement Name               | A descriptive label assigned to the SQL statement to help identify it when listing or filtering statements later.                                                                                  |         |
| Database User                | The database user name. This parameter is required when connecting to a cluster as a database user and authenticating using temporary credentials.                                                 |         |
| Secret ARN                   | The ARN of the AWS Secrets Manager secret containing database credentials. Required when authenticating using Secrets Manager.                                                                     |         |
| SQL Parameters               | Named parameters that are substituted into the SQL statement at runtime using the colon-prefixed placeholder syntax (e.g., :status).                                                               |         |
| Result Format                | The format for query results (JSON or CSV).                                                                                                                                                        | JSON    |
| Session ID                   | The ID of an existing session to reuse for statement execution, enabling multiple statements to share temporary tables and transaction state.                                                      |         |
| Session Keep Alive (seconds) | Number of seconds to keep the session alive after query completion (max 24 hours).                                                                                                                 |         |
| Client Token                 | Unique identifier to ensure idempotency of the request.                                                                                                                                            |         |

### Get Statement Result {#getstatementresult}

Retrieve the results of an executed SQL statement from Redshift.

| Input          | Comments                                                                                                                                                         | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Connection | Select the AWS connection to use for Redshift Data API access.                                                                                                   |         |
| Statement ID   | The unique identifier of the executed SQL statement returned by the Redshift Data API. <strong>Note:</strong> Only statements that return results are supported. |         |
| AWS Region     | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                          |         |
| Next Token     | The pagination token returned from a previous list request, used to retrieve the next page of results.                                                           |         |

### List Statements {#liststatements}

List executed SQL statements in Redshift.

| Input              | Comments                                                                                                                                                                                                                                                  | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Connection     | Select the AWS connection to use for Redshift Data API access.                                                                                                                                                                                            |         |
| AWS Region         | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                   |         |
| Status             | Filters the returned statements to only those matching this execution status. Use ALL to retrieve statements in any state.                                                                                                                                | ALL     |
| Database Name      | The name of the database when listing statements run against a <code>ClusterIdentifier</code> or <code>WorkgroupName</code>.                                                                                                                              |         |
| Workgroup Name     | The serverless workgroup name or Amazon Resource Name (ARN). Only statements that ran on this workgroup are returned. When providing <code>WorkgroupName</code>, then <code>ClusterIdentifier</code> can't be specified.                                  |         |
| Cluster Identifier | The cluster identifier. Only statements that ran on this cluster are returned. When providing <code>ClusterIdentifier</code>, then <code>WorkgroupName</code> can't be specified.                                                                         |         |
| Statement Name     | The name of the SQL statement specified as input to <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> to identify the query. Multiple statements can be matched by providing a prefix that matches the beginning of the statement name. |         |
| Fetch All          | When enabled, automatically fetches all pages of results. Next Token and Max Results inputs are ignored when this is enabled.                                                                                                                             | false   |
| Next Token         | The pagination token returned from a previous list request, used to retrieve the next page of results.                                                                                                                                                    |         |
| Max Results        | The maximum number of SQL statements to return per page. Valid range: 0-100.                                                                                                                                                                              |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Redshift Data API.

| Input          | Comments                                                                                                                                                                                               | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| AWS Connection | Select the AWS connection to use for Redshift Data API access.                                                                                                                                         |         |
| AWS Region     | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                |         |
| Body           | The JSON payload sent to the selected Redshift Data API operation. The required fields vary by action — refer to the AWS Redshift Data API documentation for the expected structure of each operation. |         |
| Action         | The Redshift Data API operation to invoke. Determines which API method is called with the provided body.                                                                                               |         |
