---
title: Amazon DynamoDB Connector
sidebar_label: Amazon DynamoDB
description: Manage tables and items in Amazon DynamoDB.
---

![Amazon DynamoDB](./assets/aws-dynamodb.png#connector-icon)
[Amazon DynamoDB](https://aws.amazon.com/dynamodb) is a key-value and document database from Amazon Web Services (AWS).
This component allows you to create, read, update, and delete items within an Amazon DynamoDB database.

## API Documentation

This component was built using the [AWS DynamoDB API](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/).

## Connections

### Access Key and Secret {#apikeysecret}

Authenticates requests to Amazon DynamoDB using an API Key and API Secret.

An AWS IAM [access key pair](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) is required to interact with Amazon DynamoDB.
Ensure the key pair generated in AWS has proper permissions to the DynamoDB resources to access.
Read more about DynamoDB IAM actions in the [AWS documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/api-permissions-reference.html).

#### Prerequisites

- An [AWS account](https://aws.amazon.com/) with IAM access
- Appropriate permissions to create IAM access keys

#### Setup Steps

To create an IAM access key pair:

1. Sign in to the [AWS Console](https://aws.amazon.com/) and navigate to **Identity and Access Management (IAM)**
2. Select the IAM user that will be used for the integration
3. Navigate to the **Security credentials** tab
4. Under the **Access keys** section, select **Create access key**
5. Choose the appropriate use case (e.g., **Third-party service** or **Application running outside AWS**)
6. Copy both the **Access key ID** and **Secret access key** when displayed

:::warning[Secret Key Visibility]
The **Secret access key** is only shown once during creation. If it is not copied at this time, a new access key pair must be created.
:::

#### Configure the Connection

- Enter the **Access key ID** into the connection configuration
- Enter the **Secret access key** into the connection configuration

| Input             | Comments                                                                                                                                                                        | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID. Learn how to create access keys in the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).     |         |
| Secret Access Key | An AWS IAM Secret Access Key. Learn how to create access keys in the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |

### AWS Role ARN {#awsassumerole}

Connect to AWS using an assumed role

AWS IAM role authentication allows connections to DynamoDB using the AWS Security Token Service (STS) [AssumeRole](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) operation. This authentication method provides enhanced security by allowing temporary credentials and cross-account access.

#### Prerequisites

- An [AWS account](https://aws.amazon.com/) with IAM access
- Permissions to create IAM users, access keys, and roles
- Understanding of [AWS IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) and trust policies

#### Setup Steps

**Create IAM User and Access Keys**

1. Sign in to the [AWS Console](https://aws.amazon.com/) and navigate to **Identity and Access Management (IAM)**
2. Navigate to **Users** and select **Create User**
3. Provide a **User name**
   - Optionally, grant the user access to the AWS Management Console
4. Complete the user creation process
5. After creation, the user's ARN will be displayed in the summary section (format: `arn:aws:iam::123456789012:user/username`)
6. Copy the **ARN** for use in the trust policy in the next section

**To obtain the ARN for an existing user:**

- Navigate to **Users**, select the username
- The ARN is displayed in the summary section

**Create Access Keys for the User:**

7. From the user's summary page, select **Create access key**
8. Select **Third-party service** as the access key type and select **Next**
9. Optionally, set a description tag and select **Create access key**
10. Copy both the **Access key ID** and **Secret access key**

:::warning[Secret Key Visibility]
The **Secret access key** is only shown once during creation. If it is not copied at this time, a new access key pair must be created.
:::

**Create IAM Role with Trust Policy**

11. Navigate to **Roles** and select **Create Role**
12. Select **Custom trust policy** for the **Trusted entity type**
13. Enter the following trust policy, replacing `arn:aws:iam::123456789012:user/username` with the actual user ARN copied in step 6:

<details>
<summary>Trust Policy JSON</summary>

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:user/username"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

</details>

14. Select **Next** to configure permissions
15. Attach the **AmazonDynamoDBFullAccess** policy, or create a custom policy with only the required DynamoDB permissions following the [principle of least privilege](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege)
16. Complete the remaining steps and select **Create Role**
17. After creation, navigate to the newly created role and copy the **Role ARN** from the summary section (format: `arn:aws:iam::123456789012:role/rolename`)

#### Configure the Connection

Enter the following values into the connection configuration:

- **Access Key ID**: The access key ID from step 10
- **Secret Access Key**: The secret access key from step 10
- **IAM Role ARN**: The role ARN from step 17

For more information on IAM role authentication, refer to the [AWS STS documentation](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html).

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

## Actions

### Create Table {#createtable}

Create a new DynamoDB Table

| Input                | Comments                                                                                                                                                                                                                                                                     | Default     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| AWS Region           | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                      |             |
| Table Name           | The name of the DynamoDB table to interact with.                                                                                                                                                                                                                             |             |
| Key Schema           | Array of key schema elements. Each object must contain a KeyType (HASH or RANGE) and an AttributeName. Learn more about [key schemas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey). |             |
| Attribute Definition | Array of attribute definitions. Each object must contain an AttributeName and AttributeType. See [DynamoDB data types](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes).                          |             |
| Billing Mode         | The billing mode for the table. Learn more about [billing modes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html).                                                                                                    | PROVISIONED |
| Read Capacity Units  | The number of read capacity units. One unit = one strongly consistent read/sec or two eventually consistent reads/sec for items up to 4 KB. Learn more about [read capacity](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html).   |             |
| Write Capacity Units | The number of write capacity units. One unit = one write/sec for items up to 1 KB. Larger items consume additional units. Learn more about [write capacity](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html).                    |             |
| Connection           | The AWS DynamoDB connection to use.                                                                                                                                                                                                                                          |             |

### Delete Item {#deleteitem}

Delete an item from a DynamoDB database

| Input                            | Comments                                                                                                                                                                                                                                                                                                             | Default |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                                              |         |
| Table Name                       | The name of the DynamoDB table to interact with.                                                                                                                                                                                                                                                                     |         |
| Hash / Primary Key Value         | The value of the hash key (primary key) to match.                                                                                                                                                                                                                                                                    |         |
| Range / Sort Key Value           | The value of the optional range key (sort key) to match. <strong>Required</strong> if your table has a range key.                                                                                                                                                                                                    |         |
| Condition Expression             | A condition that must be satisfied for the operation to succeed. Learn more about [condition expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html).                                                                                                   |         |
| Expression Attribute Values      | Expression attribute values are substitutes for actual values in expressions. Each key must begin with a colon (:) followed by alphanumeric characters. Learn more about [expression attribute values](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ExpressionAttributeValues.html). |         |
| Expression Attribute Value Types | The DynamoDB data type for each expression attribute value. Must specify a type for each value provided in Expression Attribute Values.                                                                                                                                                                              |         |
| Connection                       | The AWS DynamoDB connection to use.                                                                                                                                                                                                                                                                                  |         |

### Delete Table {#deletetable}

Delete an existing DynamoDB Table

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Table Name | The name of the DynamoDB table to interact with.                        |         |
| Connection | The AWS DynamoDB connection to use.                                     |         |

### Describe Table {#describetable}

Fetch metadata about an existing DynamoDB Table

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Table Name | The name of the DynamoDB table to interact with.                        |         |
| Connection | The AWS DynamoDB connection to use.                                     |         |

### Get Item {#getitem}

Retrieve an item from a DynamoDB database

| Input                    | Comments                                                                                                          | Default |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region               | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                           |         |
| Table Name               | The name of the DynamoDB table to interact with.                                                                  |         |
| Hash / Primary Key Value | The value of the hash key (primary key) to match.                                                                 |         |
| Range / Sort Key Value   | The value of the optional range key (sort key) to match. <strong>Required</strong> if your table has a range key. |         |
| Connection               | The AWS DynamoDB connection to use.                                                                               |         |

### List Tables {#listtables}

List all DynamoDB Tables

| Input      | Comments                                                                                                      | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                       |         |
| Connection | The AWS DynamoDB connection to use.                                                                           |         |
| Fetch All  | When true, automatically fetch all pages of results using pagination. When false, return only the first page. | false   |

### Query Items {#queryitems}

Query a DynamoDB table

| Input                            | Comments                                                                                                                                                                                                                                                                                                             | Default |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                                              |         |
| Table Name                       | The name of the DynamoDB table to interact with.                                                                                                                                                                                                                                                                     |         |
| Expression Attribute Values      | Expression attribute values are substitutes for actual values in expressions. Each key must begin with a colon (:) followed by alphanumeric characters. Learn more about [expression attribute values](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ExpressionAttributeValues.html). |         |
| Expression Attribute Value Types | The DynamoDB data type for each expression attribute value. Must specify a type for each value provided in Expression Attribute Values.                                                                                                                                                                              |         |
| Key Condition Expression         | The condition specifying key values for the query. Must specify the partition key and optionally a sort key condition. Learn more about [key condition expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.KeyConditionExpressions).                                      |         |
| Filter Expression                | A condition to filter query results after they're retrieved. Cannot filter on partition or sort keys. Learn more about [filter expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.FilterExpression).                                                                     |         |
| Query Parameters                 | Additional parameters to pass to the query operation. These are merged with the command input.                                                                                                                                                                                                                       |         |
| Connection                       | The AWS DynamoDB connection to use.                                                                                                                                                                                                                                                                                  |         |

### Raw Request {#rawrequest}

Execute single PartiQL statements.

| Input            | Comments                                                                                                                                                                                                                                         | Default                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| AWS Region       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                          |                                    |
| Statement        | The PartiQL statement to execute. Use ? for parameters. Learn more about [PartiQL for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html).                                                             |                                    |
| Parameters       | Array of parameter values for the PartiQL statement. Parameters are referenced using ? placeholders in the statement. Learn more about [PartiQL parameters](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html). | <code>[<br /> "Rose"<br />]</code> |
| Query Parameters | Additional parameters to pass to the query operation. These are merged with the command input.                                                                                                                                                   |                                    |
| Connection       | The AWS DynamoDB connection to use.                                                                                                                                                                                                              |                                    |

### Update Item {#updateitem}

Update an existing item in a DynamoDB database

| Input                            | Comments                                                                                                                                                                                                                                                                                                             | Default |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                                              |         |
| Table Name                       | The name of the DynamoDB table to interact with.                                                                                                                                                                                                                                                                     |         |
| Hash / Primary Key Value         | The value of the hash key (primary key) to match.                                                                                                                                                                                                                                                                    |         |
| Range / Sort Key Value           | The value of the optional range key (sort key) to match. <strong>Required</strong> if your table has a range key.                                                                                                                                                                                                    |         |
| Update Expression                | An update expression specifying how to modify item attributes. Learn more about [update expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.UpdateExpressions.html).                                                                                                           |         |
| Condition Expression             | A condition that must be satisfied for the operation to succeed. Learn more about [condition expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html).                                                                                                   |         |
| Expression Attribute Values      | Expression attribute values are substitutes for actual values in expressions. Each key must begin with a colon (:) followed by alphanumeric characters. Learn more about [expression attribute values](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ExpressionAttributeValues.html). |         |
| Expression Attribute Value Types | The DynamoDB data type for each expression attribute value. Must specify a type for each value provided in Expression Attribute Values.                                                                                                                                                                              |         |
| Connection                       | The AWS DynamoDB connection to use.                                                                                                                                                                                                                                                                                  |         |

### Upsert Item {#createitem}

Creates a new item, or replaces an existing item with a new item

| Input                            | Comments                                                                                                                                                                                                                                                                                                             | Default |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                                              |         |
| Table Name                       | The name of the DynamoDB table to interact with.                                                                                                                                                                                                                                                                     |         |
| Value                            | Key-value pairs representing the item to insert into the table. Each key corresponds to an attribute name.                                                                                                                                                                                                           |         |
| Value Types                      | The DynamoDB data type for each item attribute. Must specify a type for each key in the Value field. See [DynamoDB data types](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes).                                                          |         |
| Condition Expression             | A condition that must be satisfied for the operation to succeed. Learn more about [condition expressions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html).                                                                                                   |         |
| Expression Attribute Values      | Expression attribute values are substitutes for actual values in expressions. Each key must begin with a colon (:) followed by alphanumeric characters. Learn more about [expression attribute values](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ExpressionAttributeValues.html). |         |
| Expression Attribute Value Types | The DynamoDB data type for each expression attribute value. Must specify a type for each value provided in Expression Attribute Values.                                                                                                                                                                              |         |
| Connection                       | The AWS DynamoDB connection to use.                                                                                                                                                                                                                                                                                  |         |
