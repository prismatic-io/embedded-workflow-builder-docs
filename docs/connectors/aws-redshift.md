---
title: Redshift Connector
sidebar_label: Redshift
description: Execute SQL statements and manage data in Amazon Redshift using the AWS Redshift Data API
---

![Redshift](./assets/aws-redshift.png#connector-icon)
[Amazon Redshift](https://aws.amazon.com/redshift/) is a data warehouse service in the cloud to analyze large datasets using standard SQL and existing business intelligence tools.
This component allows executing SQL statements and managing data in Amazon Redshift using the AWS Redshift Data API.

## API Documentation

This component was built using the [AWS SDK for JavaScript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)

## Connections

### Access Key and Secret {#awsaccesskeysecret}

Authenticate requests to AWS using an Access Key and Secret Key.

An AWS IAM [access key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) is required to interact with Redshift.
Ensure the key pair generated in AWS has proper permissions to the Redshift resources to access.
Read more about Redshift IAM actions in the [AWS docs](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html).

#### Setup Steps

1. Sign in to the [AWS Console](https://aws.amazon.com/) and navigate to **Identity and Access Management (IAM)**
2. Under the **Access Keys** section, select **Create access key**
3. Once created, copy the **Access Key** and **Secret access key**

#### Configure the Connection

Create a connection of type **AWS Access Key/Secret Key** and enter:

- **Access Key ID**: The AWS Access Key ID
- **Secret Access Key**: The AWS Secret Access Key

| Input             | Comments                                                                      | Default |
| ----------------- | ----------------------------------------------------------------------------- | ------- |
| Access Key ID     | The AWS Access Key ID used to authenticate requests to the Redshift Data API. |         |
| Secret Access Key | The AWS Secret Access Key paired with the Access Key ID for request signing.  |         |

### AWS Role ARN {#awsassumerole}

Connect to AWS using an assumed role

To enable IAM role authentication, log in to the [AWS Console](https://aws.amazon.com/) and navigate to **Identity and Access Management (IAM)**.

#### Setup Steps

**Create an ARN user and generate credentials:**

1. Navigate to **Users** and select **Create User**.

   - Provide a user name and check the box providing user access to the AWS Management Console if needed.
   - Once the user is created, copy the ARN provided in the summary for a later step.

2. To obtain the ARN for an existing user, click on the designated username from the **Users** page and the ARN will be provided in the summary section.
3. From the summary section, select **Create access key**

   - Select **Third-party service** as the access key type and select **Next**.
   - Set a description and select **Create access key**.
   - Copy the **Access Key** and **Secret access key** for use in the connection configuration.

**Create and assign a role:**

1. Navigate to **Roles** and select **Create Role**.

   - Select **Custom Trust Policy** for the Trusted entity types.
   - Copy the following statement into the statement console, replacing **ARN** with the user's actual ARN from the previous step:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "ARN"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

- When adding permissions, provide the **redshift:\*** permission to grant access to all Redshift operations.
- Complete the remaining steps and select **Create Role**.

#### Configure the Connection

Create a connection of type **AWS Role ARN** and enter:

- **Role ARN**: The ARN of the IAM role to assume (e.g., `arn:aws:iam::OtherAccount-ID:role/assumed-role-name`)
- **Access Key ID**: The AWS IAM Access Key ID
- **Secret Access Key**: The AWS IAM Secret Access Key
- **External ID** (optional): A shared secret for enhanced security; see the [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information

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
