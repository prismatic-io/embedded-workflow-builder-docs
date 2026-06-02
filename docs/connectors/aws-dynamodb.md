---
title: Amazon DynamoDB Connector
sidebar_label: Amazon DynamoDB
description: Manage tables and items in Amazon DynamoDB.
---

![Amazon DynamoDB](./assets/aws-dynamodb.png#connector-icon)
Manage tables and items in Amazon DynamoDB.

## Connections

### Access Key and Secret {#apikeysecret}

Authenticates requests to Amazon DynamoDB using an API Key and API Secret.

| Input             | Comments                                                                                                                                                                        | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID. Learn how to create access keys in the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).     |         |
| Secret Access Key | An AWS IAM Secret Access Key. Learn how to create access keys in the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html). |         |

### AWS Role ARN {#awsassumerole}

Connect to AWS using an assumed role

| Input             | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN                                                                                                                                                                                                                                           |         |
| Access Key ID     | An AWS IAM Access Key ID                                                                                                                                                                                                                                      |         |
| Secret Access Key | An AWS IAM Secret Access Key                                                                                                                                                                                                                                  |         |
| External ID       | Provides enhanced security measures to the connection. Optional, but recommended. Please check [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html#id_roles_third-party_external-id) for more information. |         |

## Actions

### Create Table {#createtable}

Create a new DynamoDB Table

| Input                | Comments                                                                                                                                                                                                                                                                     | Default                                                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Region           | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                      |                                                                                                                                                                                          |
| Table Name           | The name of the DynamoDB table to interact with.                                                                                                                                                                                                                             |                                                                                                                                                                                          |
| Attribute Definition | Array of attribute definitions. Each object must contain an AttributeName and AttributeType. See [DynamoDB data types](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes).                          | <code>[<br /> {<br /> "AttributeName": "customerId",<br /> "AttributeType": "N"<br /> },<br /> {<br /> "AttributeName": "customerName",<br /> "AttributeType": "S"<br /> }<br />]</code> |
| Key Schema           | Array of key schema elements. Each object must contain a KeyType (HASH or RANGE) and an AttributeName. Learn more about [key schemas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html#HowItWorks.CoreComponents.PrimaryKey). | <code>[<br /> {<br /> "KeyType": "HASH",<br /> "AttributeName": "customerId"<br /> },<br /> {<br /> "KeyType": "RANGE",<br /> "AttributeName": "customerName"<br /> }<br />]</code>      |
| Billing Mode         | The billing mode for the table. Learn more about [billing modes](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html).                                                                                                    | PROVISIONED                                                                                                                                                                              |
| Read Capacity Units  | The number of read capacity units. One unit = one strongly consistent read/sec or two eventually consistent reads/sec for items up to 4 KB. Learn more about [read capacity](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html).   | 5                                                                                                                                                                                        |
| Write Capacity Units | The number of write capacity units. One unit = one write/sec for items up to 1 KB. Larger items consume additional units. Learn more about [write capacity](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html).                    | 5                                                                                                                                                                                        |
| Connection           | The AWS DynamoDB connection to use.                                                                                                                                                                                                                                          |                                                                                                                                                                                          |

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
