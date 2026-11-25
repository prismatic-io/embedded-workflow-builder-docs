---
title: Expensify Connector
sidebar_label: Expensify
description: Manage Expensify reports, expenses, policies, expense rules, and employees, and export report data.
---

![Expensify](./assets/expensify.png#connector-icon)
[Expensify](https://www.expensify.com) provides an industry leading expense management system.

Use the Expensify component to programmatically download expense report data for analysis or insertion into an accounting package, provision accounts for new hires, and much more.

## API Documentation

This component was built using the [Expensify API Reference](https://integrations.expensify.com/Integration-Server/doc/).

## Connections

### Basic Connection {#basic}

Basic connection for Expensify

Create a new authentication connection. Refer to the following [guide](https://integrations.expensify.com/Integration-Server/doc/#authentication) for more information.

#### Prerequisites

- Access to the Expensify integrations page at `https://www.expensify.com/tools/integrations/`

#### Setup Steps

1. Navigate to `https://www.expensify.com/tools/integrations/` and select the option that creates a new set of credentials.
2. A pair of credentials, `partnerUserID` and `partnerUserSecret`, is generated and shown on the page.
   1. Store the `partnerUserID` and `partnerUserSecret` pair in a secure location, as they are not shown again.

#### Configure the Connection

Create a connection of type **Basic Connection** and enter the following values:

- Enter the `partnerUserID` value into **Partner User ID**.
- Enter the `partnerUserSecret` value into **Partner User Secret**.

| Input               | Comments                                                                                                                                                                                       | Default |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Partner User ID     | The partnerUserID generated on the Expensify Integrations page. See the [Integration Server documentation](https://integrations.expensify.com/Integration-Server/doc/) for how to generate it. |         |
| Partner User Secret | The partnerUserSecret generated together with the Partner User ID. Expensify shows it only once, so store it securely when it is generated.                                                    |         |

## Triggers

### New Policies {#pollchangestrigger}

Checks for new policies in Expensify on a configured schedule.

| Input            | Comments                                                          | Default |
| ---------------- | ----------------------------------------------------------------- | ------- |
| Connection       |                                                                   |         |
| Show New Records | When true, newly created records are included in trigger results. | true    |

## Actions

### Create Expense {#createexpense}

Create expenses in a user’s account.

| Input            | Comments                                                                    | Default  |
| ---------------- | --------------------------------------------------------------------------- | -------- |
| Connection       |                                                                             |          |
| Type             | Specifies to the job that it has to create expenses.                        | expenses |
| Employee Email   | The email address of the Expensify user whose account the job runs against. |          |
| Transaction List | The transactions to add to the report.                                      |          |

### Create Expense Rule {#createexpenserule}

Create expense rules for a given employee on a given policy.

| Input          | Comments                                                                                                               | Default      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection     |                                                                                                                        |              |
| Type           | Specifies to the job that it has to create an expense rule.                                                            | expenseRules |
| Employee Email | The email address of the Expensify user whose account the job runs against.                                            |              |
| Policy ID      | The unique identifier for the policy (workspace) the job runs against. The policy must be owned or shared by the user. |              |
| Actions        | The actions to perform on the expense rule.                                                                            |              |

### Create Policy {#createpolicy}

Creates a policy.

| Input       | Comments                                                                                                | Default |
| ----------- | ------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                         |         |
| Type        | Specifies to the job that it has to create a policy.                                                    | policy  |
| Policy Name | The name of the policy to create.                                                                       |         |
| Plan        | Specifies the plan of the policy. If not specified, the new policy will be created under the team plan. |         |

### Create Report {#createreport}

Creates a report, with transactions, in a user’s account.

| Input          | Comments                                                                                                               | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                                        |         |
| Type           | Specifies to the job that it has to create a report.                                                                   | report  |
| Employee Email | The email address of the Expensify user whose account the job runs against.                                            |         |
| Report         | The report to create.                                                                                                  |         |
| Expenses       | The expenses to add to the report.                                                                                     |         |
| Policy ID      | The unique identifier for the policy (workspace) the job runs against. The policy must be owned or shared by the user. |         |

### Download Report {#downloadreport}

Download reports that were generated with the Report Exporter job.

| Input       | Comments                                                                                             | Default           |
| ----------- | ---------------------------------------------------------------------------------------------------- | ----------------- |
| Connection  |                                                                                                      |                   |
| File Name   | The name of a file generated from the exporter job.                                                  |                   |
| File System | The file system the exporter job stored the file on. Use the same value the file was generated with. | integrationServer |

### Export Report {#exportreport}

Export expense or report data in a configurable format for analysis or insertion into an accounting package.

| Input                          | Comments                                                                                                                                                                                 | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection                     |                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| File Extension                 | Specifies the format of the generated report. Note: if the 'pdf' option is chosen, one PDF file will be generated for each report exported.                                              | json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Start Date                     | Filters out all reports submitted or created before the given date, whichever occurred last (inclusive). yyyy-mm-dd formatted date.                                                      | 2016-01-01                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| End Date                       | Filters out all reports submitted or created after the given date, whichever occurred last (inclusive). yyyy-mm-dd formatted date.                                                       | 2016-01-01                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Approved After                 | Filters out all reports approved before, or on, the given date. Only applies to reports that have been approved. yyyy-mm-dd formatted date.                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Mark as Exported Label Filter  | Filters out reports that have already been exported with this label.                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Policy ID List                 | The IDs of the policies to get information for.                                                                                                                                          | <code>[]</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Report ID List                 | The IDs of the reports to get information for.                                                                                                                                           | <code>[]</code>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Additional Fields              | Additional optional fields: includes File Basename, Include Full Page Receipts PDF, Limit, and Test.                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| File Basename                  | The name of the generated file(s) will start with this value, and a random part will be added to make each filename globally unique. If not specified, the default value export is used. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Include Full Page Receipts PDF | When true, generated PDFs include full page receipts. This parameter is used only if fileExtension contains pdf.                                                                         | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Limit                          | Maximum number of reports to export.                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Test                           | When true, the actions defined in On Finish are not executed.                                                                                                                            | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Report State                   | The report state to filter on. Only reports in this state are exported.                                                                                                                  | REIMBURSED                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Employee Email                 | The email address of the Expensify user whose account the job runs against.                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| On Finish                      | The actions Expensify runs when the job finishes, such as emailing a summary of the changes to a list of recipients.                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Template                       | The template parameter is used to format the Expensify data as you wish. It is based on the Freemarker language's syntax.                                                                | <br /> <#if addHeader == true><br /> Merchant,Original Amount,Category,Report number,Expense number<#lt><br /> </#if><br /> <#assign reportNumber = 1><br /> <#assign expenseNumber = 1><br /> <#list reports as report><br /> <#list report.transactionList as expense><br /> ${expense.merchant},<#t><br />            <#-- note: expense.amount prints the original amount only --><br />            ${expense.amount},<#t><br /> ${expense.category},<#t><br />            ${reportNumber},<#t><br /> ${expenseNumber}<#lt><br /> <#assign expenseNumber = expenseNumber + 1><br /> </#list><br /> <#assign reportNumber = reportNumber + 1><br /> </#list> |

### Get Policy {#getpolicy}

Gets specific information about listed policies.

| Input          | Comments                                                                                                                            | Default         |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection     |                                                                                                                                     |                 |
| Type           | Specifies to the job that it has to get information specific to policies.                                                           | policy          |
| Policy ID List | The IDs of the policies to get information for.                                                                                     | <code>[]</code> |
| Fields         | Specifies the fields of the policy to gather information for.                                                                       | <code>[]</code> |
| User Email     | Specifies the user to gather the policy list for. Third-party access must have been granted by that user/company domain beforehand. |                 |

### List Cards {#listcards}

Gets the list of credit cards that are assigned at the domain level.

| Input      | Comments                                                        | Default        |
| ---------- | --------------------------------------------------------------- | -------------- |
| Connection |                                                                 |                |
| Type       | Specifies to the job that it has to list the cards of a domain. | domainCardList |
| Domain     | The name of the domain to get the cards for.                    |                |

### List Policies {#listpolicies}

Gets a list of policies with some relevant information about them.

| Input      | Comments                                                                                                                            | Default    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Connection |                                                                                                                                     |            |
| Type       | Specifies to the job that it has to get a policy summary list.                                                                      | policyList |
| Admin Only | When true, only returns the policies the user is an admin of.                                                                       | false      |
| User Email | Specifies the user to gather the policy list for. Third-party access must have been granted by that user/company domain beforehand. |            |

### Raw Request {#rawrequest}

Send a raw HTTP request to the Expensify API.

| Input                   | Comments                                                                                                                                                                                         | Default         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Connection              |                                                                                                                                                                                                  |                 |
| URL                     | This input is not required as the Expensify API is a single endpoint.                                                                                                                            |                 |
| Method                  | The HTTP method to use.                                                                                                                                                                          |                 |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |                 |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             | <code>[]</code> |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 | <code>[]</code> |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           | <code>[]</code> |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              | <code>[]</code> |
| Header                  | A list of headers to send with the request.                                                                                                                                                      | <code>[]</code> |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json            |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |                 |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0               |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false           |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0               |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false           |

### Update Employee {#updateemployee}

Add, update or remove policy members.

| Input                       | Comments                                                                                                                                                                  | Default   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Connection                  |                                                                                                                                                                           |           |
| Type                        | Specifies to the job that it has to update an employee                                                                                                                    | employees |
| Employees                   | Replace or update the existing employees of the policy with the ones provided. If the employee does not exist, it will be created.                                        |           |
| Provisioning Options        | Options that control how the employee update is applied: dry run, primary policy assignment, and approval chain fixes.                                                    |           |
| Dry Run                     | When true, employees are not actually provisioned or updated. Use this for development.                                                                                   | false     |
| Set Employee Primary Policy | Specifies the policy to set as the primary policy for the employee. If not specified, the employee will not have a primary policy.                                        | none      |
| Fix Approval Chains         | When true, Expensify automatically invites managers (submitsTo), managers’ managers, and so on to policies where they approve reports, if it is not their primary policy. | true      |
| On Finish                   | The actions Expensify runs when the job finishes, such as emailing a summary of the changes to a list of recipients.                                                      |           |

### Update Expense Rules {#updateexpenserule}

Update a preexisting expense rule for a given employee on a given policy.

| Input          | Comments                                                                                                               | Default      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection     |                                                                                                                        |              |
| Type           | Specifies to the job that it has to update an expense rule.                                                            | expenseRules |
| Employee Email | The email address of the Expensify user whose account the job runs against.                                            |              |
| Policy ID      | The unique identifier for the policy (workspace) the job runs against. The policy must be owned or shared by the user. |              |
| Rule ID        | The rule to update.                                                                                                    |              |
| Actions        | The actions to perform on the expense rule.                                                                            |              |

### Update Policy {#updatepolicy}

Manage categories, tags and report fields on a policy.

| Input          | Comments                                                                                                               | Default         |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- |
| Connection     |                                                                                                                        |                 |
| Type           | Specifies to the job that it has to update a policy.                                                                   | policy          |
| Policy ID      | The unique identifier for the policy (workspace) the job runs against. The policy must be owned or shared by the user. |                 |
| Policy ID List | The IDs of the policies to get information for.                                                                        | <code>[]</code> |
| Categories     | Replace or update the existing categories of the policy with the ones provided.                                        |                 |
| Tags           | Replace the existing tags of the policy with the ones provided.                                                        |                 |
| Report Fields  | Replace or update the existing report fields of the policy with the ones provided.                                     |                 |

### Update Report Status {#updatereportstatus}

Update the status of a report.

| Input      | Comments                                                                                                                                                                               | Default      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection |                                                                                                                                                                                        |              |
| Type       | Specifies to the job that it has to update the status of a list of reports.                                                                                                            | reportStatus |
| Status     | The status to change the reports to. At the moment, only Reimbursed is supported. Only reports in the Approved status can be updated to Reimbursed. All other reports will be ignored. | REIMBURSED   |
| Filters    | The filters to apply to the report list.                                                                                                                                               |              |
