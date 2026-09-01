---
title: Salesforce Connector
sidebar_label: Salesforce
description: Query, create, update, or delete Salesforce records.
---

![Salesforce](./assets/salesforce.png#connector-icon)
[Salesforce](https://www.salesforce.com/) is a customer relationship management (CRM) platform.
This component provides the ability to manage sales leads and records within the Salesforce platform.

## API Documentation

This component was built using the following API References currently utilizing v63.0 by default.

- [Salesforce REST API Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_what_is_rest_api.htm)
- [Salesforce Bulk API Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm)

## Connections

### Basic Authentication {#basic}

Authenticate requests using Basic Authentication.

#### Prerequisites

- A Salesforce account with API access enabled
- The account's security token (if security tokens are enabled)

#### Setup Steps

When using Basic Auth, supply a Salesforce username and password.
Depending on the Salesforce setup, the password may have a security token attached to it.
If security tokens in the Salesforce account are _disabled_, the password to supply is simply the Salesforce password.
If security tokens are _enabled_ in the Salesforce account, then the password to enter is the concatenation of the password and the security token.

For example, if the Salesforce password is `p@$sw0rD` and the security token that Salesforce provides is `ExAmPlE0000000000ExAmPlE`, then enter `p@$sw0rDExAmPlE0000000000ExAmPlE` as the password.
Manage security tokens by clicking the profile picture on the top-right of _Salesforce_, selecting **My Settings**, and then opening **Personal** -> **Reset My Security Token**.

#### Configure the Connection

Create a connection of type **Basic Authentication** and enter:

- **Username**: Enter the Salesforce account username
- **Password**: Enter the Salesforce password, or the password concatenated with the security token if security tokens are enabled
- **Login URL**: Enter the Salesforce My Domain URL (e.g., `https://my-company.my.salesforce.com/`)

| Input     | Comments                                                                                                          | Default |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Username  | The username of the Salesforce account                                                                            |         |
| Password  | The password of the Salesforce account                                                                            |         |
| Login URL | The Salesforce Login URL for Basic Authentication (e.g., https://login.salesforce.com or a custom My Domain URL). |         |

### OAuth 2.0 {#oauth2}

Authenticate requests using OAuth 2.0.

OAuth 2.0 provides a simple way for users to authorize applications.
To use OAuth 2.0, create and configure an External Client App (recommended) or a [Connected App](https://help.salesforce.com/s/articleView?id=xcloud.connected_app_create.htm&type=5) within Salesforce.

#### Prerequisites

- A Salesforce account with Administrator access
- Permission to create External Client Apps or Connected Apps in the Salesforce org

:::warning[Connected App Creation Restricted as of Spring '26]
Salesforce restricted the creation of new Connected Apps in the Spring '26 release. To create a new Connected App, contact Salesforce Support. Salesforce recommends using External Client Apps for new integrations.

Existing Connected Apps continue to work and do not require changes.
:::

#### Choose the Setup

Before creating an External Client App, decide which Salesforce orgs need to authorize the connection. This determines the app's **Distribution State** and whether additional packaging is required.

- **Connecting a single Salesforce org**, where the same org that creates the app also authorizes the connection: create the app with the **Local** distribution state. No packaging is required. Skip the [Distribute to Other Orgs](#distribute-to-other-orgs-with-a-managed-package) section.
- **Connecting multiple Salesforce orgs**, such as separate customer orgs: create the app with the **Packaged** distribution state, then package and distribute it. A **Local** app cannot be authorized from any org other than the one that created it.

:::warning[A Local app only works in its own org]
An External Client App with the **Local** distribution state can be used only in the context of its own org. If users in a different Salesforce org attempt to authorize a Local app, the connection fails. To support other orgs, the app must use the **Packaged** distribution state and be installed in each target org as a managed package.
:::

### External Client App Setup (Recommended for New Integrations)

1. Log in to the Salesforce account
1. Navigate to **Setup** by clicking the gear icon in the upper right corner
1. In the **Quick Find** box, search for **External Client App Manager** and select it
1. Click **New External Client App**
1. Complete the **Basic Information** fields:
   - **Name**: Enter a descriptive name for the integration. This label is shown to users on the authorization screen, so choose something they will recognize
   - **API Name**: Accept the generated value or enter one. This becomes part of the app's permanent identity and cannot be changed later
   - **Contact Email**: Enter a valid contact email address
   - **Distribution State**: Select **Local** for a single-org connection, or **Packaged** to distribute the app to other orgs
1. Expand **API (Enable OAuth Settings)** and check **Enable OAuth**
1. Enter the OAuth callback URL `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as the **Callback URL**
1. Under **Selected OAuth Scopes**, add:
   - **Full access (full)**: grants the integration the same permissions as the authenticating user
   - **Perform requests at any time (refresh_token, offline_access)**
1. Under security settings, select:
   - **Require Secret for the Web Server Flow**
   - **Require Secret for Refresh Token Flow**
   - **Require Proof Key for Code Exchange (PKCE) Extension**
1. Leave **Enable Client Credentials Flow** unselected. That is a separate connection type
1. Click **Save**

:::note[Enable the PKCE requirement]
This connection sends a PKCE challenge using the SHA-256 method on every authorization, so requiring PKCE adds protection against authorization code interception at no cost. Requiring it is recommended rather than optional.
:::

:::note[Where the settings live after saving]
The create form presents these settings together, but after saving they are split across two tabs on the app detail page. OAuth and security settings such as the callback URL, scopes, and the PKCE and secret requirements are under **Settings**, while access policies such as **Permitted Users** and **IP Relaxation** are under **Policies**. Expect to visit both when editing an existing app.
:::

:::note[Local vs. Packaged]
The **Distribution State** controls which orgs can use the app:

- **Local**: usable only in the org that creates it. Choose this for connecting a single org.
- **Packaged**: can be added to a second-generation (2GP) managed package and installed in other orgs. Choose this when other Salesforce orgs need to authorize the connection.
  :::

To retrieve the app credentials after saving:

1. From **External Client App Manager**, click the app name
1. Select **Settings**
1. Click **Consumer Key and Secret** to view the credentials

Take note of the **Consumer Key** and **Consumer Secret**. Both are required when configuring the connection.

:::note[A packaged app has one set of credentials for every org]
For an app with the **Packaged** distribution state, retrieve the Consumer Key and Consumer Secret **once**, from the org that created and packaged the app. Salesforce resolves these credentials globally, so the same pair authorizes users in every org that installs the package. Administrators of the orgs that install the package do not retrieve their own credentials, and the connection does not need to be configured differently per org.
:::

#### Distribute to Other Orgs with a Managed Package

This section applies only when other Salesforce orgs need to authorize the connection. If connecting a single org with a **Local** app, skip ahead to [Configure the Connection](#configure-the-connection).

A **Packaged** External Client App is distributed by adding it to a second-generation (2GP) managed package and installing that package in each target org. This is done with the [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli).

:::note[No security review for direct distribution]
Installing a managed package directly in each target org, with an install URL or `sf package install`, does not require a Salesforce review. The package can be installed as soon as it is built. A mandatory AppExchange security review applies only when publicly listing an app on the Salesforce AppExchange, which is a separate distribution path and is not required for the direct distribution described here.
:::

#### Packaging Prerequisites

- The [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli) (`sf`) installed
- Dev Hub enabled in a Developer Edition org or production org
- A registered namespace linked to the Dev Hub
- **A local Salesforce DX project.** The packaging commands read the app from local source files and write the package ID back into `sfdx-project.json`, so a project must exist before packaging can begin

Refer to the [Second-Generation Managed Packaging Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp.htm) for details on each prerequisite.

#### Create a Project and Retrieve the App

A 2GP package is built from local source files, not from the org. The app created in Setup must therefore be retrieved to disk before it can be packaged.

1. Create a Salesforce DX project. Use the same namespace that is linked to the Dev Hub:

   ```bash
   sf project generate --name my-eca-package \
     --namespace my_namespace \
     --api-version 67.0
   ```

1. In `sfdx-project.json`, add the package name and version fields to the `force-app` entry:

   ```json
   {
     "packageDirectories": [
       {
         "path": "force-app",
         "default": true,
         "package": "My Salesforce Integration",
         "versionName": "ver 0.1",
         "versionNumber": "0.1.0.NEXT"
       }
     ]
   }
   ```

1. List the app's metadata records to get their exact names. Salesforce generates the names of the child records from the app's API name:

   ```bash
   sf org list metadata --metadata-type ExternalClientApplication --target-org MyOrg
   sf org list metadata --metadata-type ExtlClntAppOauthSettings --target-org MyOrg
   ```

1. Retrieve the app into the project:

   ```bash
   sf project retrieve start \
     --metadata ExternalClientApplication:My_App \
     --metadata ExtlClntAppOauthSettings:My_App_oauth \
     --target-org MyOrg
   ```

#### Exclude the Metadata That Cannot Be Packaged

Only the app definition and its OAuth scopes can be included in a 2GP package. If the other External Client App metadata types are present in the package directory, the build fails.

| Metadata type                                                 | Included in the package                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `ExternalClientApplication`                                   | Yes                                                                       |
| `ExtlClntAppOauthSettings` (OAuth scopes)                     | Yes                                                                       |
| `ExtlClntAppGlobalOauthSettings` (callback URL, consumer key) | No. Salesforce distributes these globally rather than through the package |
| `ExtlClntAppOauthSecuritySettings`                            | No. Not supported by 2GP packaging                                        |
| `ExtlClntAppOauthConfigurablePolicies` (access policies)      | No. Not supported by 2GP packaging                                        |

Add the following to `.forceignore` so these files are excluded from the package and are not re-added by later retrieves:

```text
**/*.ecaGlblOauth-meta.xml
**/*.ecaOauthSecurity-meta.xml
**/*.ecaOauthPlcy-meta.xml
```

:::note[What this means for access policies]
Because access policies are not packaged, the settings configured on the source app do not carry over to the orgs that install the package. Each installing org receives its own default policy record and manages it locally. See [After Installing in a Target Org](#after-installing-in-a-target-org) for the settings an administrator should review.

The callback URL and consumer key are also not packaged, but they are resolved globally from the source app, so they do apply in every org that installs the package.
:::

#### Create and Version the Package

1. Create the package in the Dev Hub. This returns a package ID that begins with `0Ho` and writes it into `sfdx-project.json`:

   ```bash
   sf package create \
     --name "My Salesforce Integration" \
     --package-type Managed \
     --path force-app \
     --target-dev-hub MyDevHub
   ```

   :::note[Check the default package directory]
   This command rewrites `sfdx-project.json` and may set `"default": false` on the package directory. If later commands report that no default package directory is configured, set the value back to `true`.
   :::

1. Create a package version. This command is asynchronous and returns a request ID that begins with `08c`:

   ```bash
   sf package version create \
     --package "My Salesforce Integration" \
     --installation-key-bypass \
     --code-coverage \
     --wait 40 \
     --target-dev-hub MyDevHub
   ```

   :::warning[Include --code-coverage or the version cannot be released]
   Code coverage is calculated during version creation and cannot be added afterward. A version built
   without `--code-coverage` can never be promoted, and promotion is required before the package can be
   installed in production orgs. Omitting the flag means rebuilding the version from scratch.

   An External Client App package contains no Apex, so the coverage check passes with nothing to
   measure. The flag is still required.
   :::

1. Retrieve the **subscriber package version ID**, which begins with `04t`, once the version finishes building. Use either the request ID from the previous step or list all versions:

   ```bash
   sf package version create report \
     --package-create-request-id 08c... \
     --target-dev-hub MyDevHub
   # or
   sf package version list --target-dev-hub MyDevHub
   ```

Take note of the `04t` subscriber package version ID. It identifies the package version to install in each target org.

:::note[Version builds are rate limited]
Orgs allow a limited number of package version builds per day, and failed attempts count against that limit. Confirm the package directory contains only the two supported metadata types before building.
:::

:::note[Installation keys]
`--installation-key-bypass` creates a version that anyone with the ID can install. To restrict installation, replace it with `--installation-key <key>` and share the key only with the orgs that should install the package.
:::

#### Promote the Package Version for Production Installs

Every new package version is created as a **beta**. A beta version can be installed only in a scratch org, so it cannot be given to customers. Promote the version to release it:

```bash
sf package version promote \
  --package "My Salesforce Integration@1.0.0-1" \
  --target-dev-hub MyDevHub
```

Confirm the version is released before distributing it:

```bash
sf package version list --target-dev-hub MyDevHub
# IsReleased should read true for the version being distributed
```

:::warning[Promotion is effectively permanent]
Reverting a released version back to beta requires a Salesforce Support case. Confirm the package name, the app label shown to users, and the callback URL are all correct before promoting, because they are what customers will see.
:::

:::note[Beta versions cannot be upgraded]
Because a beta version cannot be upgraded in place, avoid installing one into any sandbox that forms part of a release pipeline. Use a scratch org for testing, then promote and install the released version.
:::

#### Install the Managed Package in a Target Org

Install the released package version in each Salesforce org that needs to authorize the connection. An administrator of the target org performs the install. Distributing an install URL is the usual approach, because it requires nothing to be installed on the administrator's machine.

#### Install from a browser

The Salesforce CLI generates the installation URL for each package version. Read it from the `InstallUrl` field:

```bash
sf package version list --target-dev-hub MyDevHub --verbose
```

```text
InstallUrl: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t...
```

Share this URL with every org that needs the package. Nothing in it is specific to the installing org, so there is no per-org value to substitute.

Steps for the installing administrator:

1. Log in to the target Salesforce org as an administrator
1. Open the installation URL in the same browser session
1. Enter the installation key, if the package version was created with one
1. Choose the access level for the package. **Install for Admins Only** restricts access to administrators, and **Install for All Users** grants access to all users in the org. This is the same choice the CLI exposes as `--security-type`
1. Click **Install** and wait for the confirmation. Salesforce sends an email when an install takes long enough to be processed in the background

:::note[Installing into a sandbox]
Change `login.salesforce.com` to `test.salesforce.com` in the installation URL when installing into a sandbox. This is the same substitution used for the connection's Authorize, Token, and Revoke URLs.
:::

:::note[Reaching the same screen from the org's own domain]
An administrator already logged in to the target org can instead open
`https://MyDomainName.lightning.force.com/packagingSetupUI/ipLanding.app?apvId=04t...`, replacing `MyDomainName` with their org's My Domain. Both routes open the same installation screen. The `InstallUrl` above is usually easier to distribute because it is identical for every org.
:::

Refer to Salesforce's [Use a URL to Install a Second-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_install_pkg_ui.htm) documentation for details.

#### Install with the Salesforce CLI

For orgs where an administrator already uses the CLI, install directly:

```bash
sf package install \
  --package 04t... \
  --target-org TargetOrg \
  --security-type AdminsOnly \
  --wait 10
```

- `--security-type AdminsOnly` grants access to administrators only. Use `AllUsers` to grant access to all users in the target org
- Add `--installation-key <key>` if the version was created with an installation key

:::warning[Packaging orgs cannot install the package]
A managed 2GP package cannot be installed into an org that is itself a managed first-generation (1GP) packaging org. The install fails with an error stating that a managed 2GP package cannot be installed into a managed 1GP packaging org. Overriding this behavior requires contacting Salesforce Partner Support. Choose a different target org for testing.

An org that owns the package's namespace also cannot install the package.
:::

#### After Installing in a Target Org

Access policies are not carried in the package, so an administrator of the installing org should review them after installation. Navigate to **Setup** > **External Client App Manager**, click the installed app name, and select **Policies**.

- **IP Relaxation**: set to **Relax IP restrictions**. New installations default to enforcing IP restrictions, which applies the authorizing user's profile login IP ranges to API calls made by the integration. Because those calls originate from the integration's servers rather than the user's browser, they can fall outside the permitted ranges in orgs that define login IP ranges
- **Permitted Users**: confirm this is set to **All users may self-authorize**, or grant access explicitly to the required users or profiles

Once the package is installed and these settings are reviewed, users in that org can authorize the connection.

#### Guiding End Users Through the Install

The person configuring the integration is often not a Salesforce administrator, and the package has to be installed before their **Connect** step will succeed. Adding the install link directly to the configuration wizard removes a support round trip: the user can forward the instructions to their administrator without needing to be told what to ask for.

Add a **Raw HTML** element to the configuration page, above the connection, and adapt the following. Replace the company name with your own and `04t...` with the subscriber package version ID:

```html
<h2>Salesforce Connection</h2>
<p>
  Salesforce requires that all external apps be added by a Salesforce
  administrator. Have your administrator open the following link and, when
  prompted, select <strong>Install for All Users</strong>:
</p>
<p>
  <a
    href="https://login.salesforce.com/packaging/installPackage.apexp?p0=04t..."
    >https://login.salesforce.com/packaging/installPackage.apexp?p0=04t...</a
  >
</p>
<p>
  Once Acme's Salesforce app has been installed in your Salesforce tenant, click
  <strong>Connect</strong> below.
</p>
```

Notes on adapting it:

- **Use the same link for every customer.** Read it from the `InstallUrl` field described above. Nothing in it is specific to the installing org.
- **Install for All Users** is suggested because any user who needs to authorize the connection must have access to the package. Say **Install for Admins Only** instead if only administrators will ever authorize.
- If a customer is installing into a sandbox, they need `test.salesforce.com` in place of `login.salesforce.com`. Mention this only if sandbox installs are expected, since it is a common source of confusion when it is not relevant.

### Connected App Setup (Existing Apps)

:::note[For existing Connected Apps only]
Connected App creation is restricted as of Spring '26. These steps apply only if a Connected App was created before Spring '26 or if Salesforce Support has granted permission to create new ones.
:::

1. Log in to the Salesforce account
1. Navigate to **Setup** by clicking the gear icon in the upper right corner
1. Open **Apps** > **App Manager**
1. Select **New Connected App**
1. Check **Enable OAuth Settings**
1. Enter the OAuth callback URL `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as the **Callback URL**
1. Under **Selected OAuth Scopes**, add:
   - **Full access (full)**: grants the integration the same permissions as the authenticating user
   - **Perform requests at any time (refresh_token, offline_access)**
1. Select **Require Secret for the Web Server Flow** and **Require Secret for Refresh Token Flow**

1. Select **Save** and **Continue**
1. Click **Manage Consumer Details** to retrieve the **Consumer Key** and **Consumer Secret**

Take note of these keys:

To update callback URLs later, select **Apps** > **App Manager**, click the dropdown next to the app, and select **Edit**.

#### OAuth Policies and Troubleshooting

Authorization can fail for two distinct reasons. Identify which applies before troubleshooting.

Access is controlled along two independent axes:

- **Which orgs can connect** is set by the app's **Distribution State**. A **Local** app serves only the org that created it. A **Packaged** app serves other orgs once the package is installed there.
- **Which users within an org can authorize** is governed by the **Permitted Users** policy and permission-set assignment described below.

#### Users in another Salesforce org cannot connect

If users in a different org than the one that created the app cannot authorize, often with an unknown-client or invalid-app error, the app is **Local** or its package is not installed in that org.

To resolve, set the app's distribution state to **Packaged**, then package and install it in the target org. See [Distribute to Other Orgs](#distribute-to-other-orgs-with-a-managed-package). When installing, the security type, `AdminsOnly` or `AllUsers`, controls which users in the target org receive access to the package.

If the app's distribution state was set to **Local** when it was created, the value can be changed. Refer to Salesforce's [Packageable External Client Apps](https://help.salesforce.com/s/articleView?id=sf.configure_packageable_external_client_apps.htm&language=en_US&type=5) documentation.

#### Users in the app's own org cannot connect

Salesforce administrators control which users can authorize through **OAuth Policies**. The navigation path depends on the app type:

- **External Client App**: Navigate to **Setup** > **External Client App Manager**, click the app name, then select **Policies**
- **Connected App**: Navigate to **Setup** > **Apps** > **App Manager**, click the dropdown next to the app, select **Manage**, then **Edit Policies**

The **Permitted Users** setting determines access:

- **All users may self-authorize**: Any user in the Salesforce org can authenticate with the integration. This is the default setting.
- **Admin approved users are pre-authorized**: Only users or profiles that an administrator has explicitly granted access can authenticate. All other users see an authorization error when attempting to connect.

If users encounter authorization errors after the connection is configured correctly, verify the **Permitted Users** policy is set to **All users may self-authorize**, or that the required users or profiles have been granted access under **Manage** > **Profiles** or **Permission Sets**.

#### Authorization succeeds but API requests fail

If a user can authorize successfully but subsequent requests fail with insufficient access or restricted IP errors, check the **IP Relaxation** policy on the app. Set it to **Relax IP restrictions**. This is a common cause in orgs that were set up by installing a managed package, because that setting defaults to enforcing IP restrictions and is not carried over from the packaged app.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                               | Default                                                |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| Authorize URL   | The OAuth 2.0 Authorization URL for Salesforce         | https://login.salesforce.com/services/oauth2/authorize |
| Token URL       | The OAuth 2.0 Token URL for Salesforce                 | https://login.salesforce.com/services/oauth2/token     |
| Revoke URL      | The OAuth 2.0 Revocation URL for Salesforce            | https://login.salesforce.com/services/oauth2/revoke    |
| Consumer Key    | The Consumer Key from the Salesforce Connected App.    |                                                        |
| Consumer Secret | The Consumer Secret from the Salesforce Connected App. |                                                        |

### OAuth 2.0 Client Credentials {#salesforceclientcredentials}

Authenticate using OAuth 2.0 Client Credentials for server-to-server integration.

OAuth 2.0 Client Credentials provides server-to-server authentication without user interaction. Use this connection type for integrations that run in the background without a user context.

#### Prerequisites

- A Salesforce account with Administrator access
- A Connected App configured for OAuth 2.0 (see [OAuth 2.0 connection documentation](#oauth2)), or permission to create a new one

#### Setup Steps

This connection requires a Connected App configured for Client Credentials. If a Connected App already exists for OAuth 2.0, enable Client Credentials on that app. Otherwise, create a new Connected App following the OAuth 2.0 setup steps first.

1. **Enable Client Credentials Flow**:
   1. Navigate to **Setup** > **Apps** > **App Manager**
   2. Find the Connected App and select **Edit** from the dropdown menu
   3. Under **API (Enable OAuth Settings)**, check **Enable Client Credentials Flow**
   4. Click **Save**

2. **Configure Run As User** — the Client Credentials flow requires specifying which user the integration will authenticate as:

   1. From the Connected App, select **Manage** from the dropdown menu
   2. Click **Edit Policies**
   3. Under **Client Credentials Flow**, select a user from the **Run As** dropdown
   4. Click **Save**

The selected user's permissions determine what the integration can access.

#### Configure the Connection

- **Instance URL**: Enter the Salesforce My Domain URL (e.g., `https://acme-corp.my.salesforce.com`)
- **Consumer Key**: Enter the Consumer Key from the Connected App
- **Consumer Secret**: Enter the Consumer Secret from the Connected App
- **Scopes**: Scopes are configured in the Salesforce Connected App settings

:::note[Connecting to a Salesforce Sandbox]
For sandbox environments, use the sandbox My Domain URL format: `https://your-company--sandbox.sandbox.my.salesforce.com`
:::

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                                                                                                                               | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Instance URL    | The Salesforce My Domain URL (e.g., https://your-company.my.salesforce.com). For sandbox, use https://your-company--sandbox.sandbox.my.salesforce.com. |         |
| Consumer Key    | The Consumer Key from the Salesforce Connected App.                                                                                                    |         |
| Consumer Secret | The Consumer Secret from the Salesforce Connected App.                                                                                                 |         |
| Scopes          | Scopes are configured in the Salesforce Connected App settings.                                                                                        |         |

## Triggers

### Flow Outbound Message Webhook {#flowoutboundmessagetrigger}

Receive Flow-based outbound messages from Salesforce.

| Input               | Comments                                                                                                                                                         | Default         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Version             | The Salesforce API version number to use for requests.                                                                                                           | 63.0            |
| Prefix              | Sets a prefix to the Flow Name and Outbound Messages created. Must start with a letter, can contain letters, numbers, underscores, and be at most 15 characters. |                 |
| Trigger Record Type | The Salesforce object API name (e.g., Account, Contact) whose record changes will trigger this flow.                                                             |                 |
| Trigger On          | When to trigger the flow (record creation, update, or both).                                                                                                     | CreateAndUpdate |
| Fields              | Fields to include in the Outbound Message.                                                                                                                       |                 |
| Flow Metadata       | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                                  |                 |
| Filter Formula      | Optional formula to filter which records trigger the flow.                                                                                                       |                 |
| Connection          | The Salesforce connection to use.                                                                                                                                |                 |

### New and Updated Records {#pollchangestrigger}

Retrieves existing and ongoing records for a specified Salesforce object type. Load history once, check for changes on a schedule, or both.

| Input                | Comments                                                                                                                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Look-back Date       | The date the initial sync starts from, in YYYY-MM-DD format. Cannot be a future date. Leave empty to start from the first recurrence with no backfill. When set, the initial sync seeds each record created on or after this date once, ignoring the field and visibility filters.                                                              |         |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                                                                                                                               |         |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                                                                                                                          | 63.0    |
| Record Type          | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                                                                                                                                                                                                                                 |         |
| Show New Records     | When true, newly created records are included in the results.                                                                                                                                                                                                                                                                                   | true    |
| Show Updated Records | When true, recently modified records are included in the results.                                                                                                                                                                                                                                                                               | true    |
| Show Deleted Records | When true, recently deleted records are included in the results.                                                                                                                                                                                                                                                                                | false   |
| Selected Fields      | Specific field API names to include in results. Leave empty to return all fields. Id, CreatedDate, and LastModifiedDate are always included automatically.                                                                                                                                                                                      |         |
| Return IDs Only      | When true, only record IDs and date fields are returned (Id, CreatedDate, LastModifiedDate). Overrides Selected Fields. Use this to minimize data returned by the trigger.                                                                                                                                                                      | false   |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                                                                                                                         |         |
| Max Records To Fetch | The maximum number of records the trigger will fetch per recurrence. When more records have changed than this, the trigger records its position and continues on the next recurrence. Applies during an initial sync and when batching is enabled: it caps each page rather than the total a recurrence can report. Defaults to 20,000 records. | 20000   |

### Webhook {#webhook}

Receive and validate webhook requests from Salesforce for manually configured webhook subscriptions.

### Workflow Outbound Message Webhook (Deprecated) {#workflowtrigger}

Receive workflow rule outbound messages from Salesforce.

| Input                 | Comments                                                                                                                                                                                                                                                                                | Default      |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection            | The Salesforce connection to use.                                                                                                                                                                                                                                                       |              |
| Version               | The Salesforce API version number to use for requests.                                                                                                                                                                                                                                  | 63.0         |
| Record Type           | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                                                                                                                                                                         |              |
| Trigger Type          | Conditions in which the trigger fires. On All Changes: The workflow rule is considered on all changes. On Create Only: Considered on creation. On Create or Meets Rule Criteria: Considered on create and when it is updated to meet any Rule Criteria configured to the workflow rule. | onAllChanges |
| Outbound Message Name | The name of the outbound message to be used.                                                                                                                                                                                                                                            |              |
| Workflow Rule Name    | The name of the workflow rule to be used.                                                                                                                                                                                                                                               |              |
| Description           | A text description of the object.                                                                                                                                                                                                                                                       |              |
| Fields                | Fields to include in the Outbound Message.                                                                                                                                                                                                                                              |              |

## Actions

### Abort Bulk Job {#abortbulkjob}

Abort a bulk ingest job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Abort Bulk Query Job {#abortbulkqueryjob}

Abort a bulk query job.

| Input        | Comments                                               | Default |
| ------------ | ------------------------------------------------------ | ------- |
| Connection   | The Salesforce connection to use.                      |         |
| Version      | The Salesforce API version number to use for requests. | 63.0    |
| Query Job ID | The ID of the query job to abort                       |         |

### Activate Flow {#activateflow}

Activate a Flow in Salesforce by name.

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | The Salesforce API version number to use for requests.                                                                                                    | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Add Attachment {#addattachment}

Attach a file to a parent record object (Account, Opportunity, etc.).

| Input         | Comments                                                         | Default |
| ------------- | ---------------------------------------------------------------- | ------- |
| Connection    | The Salesforce connection to use.                                |         |
| Version       | The Salesforce API version number to use for requests.           | 63.0    |
| Record ID     | The unique identifier for a Salesforce record.                   |         |
| File Name     | The name of the file to upload, including the file extension.    |         |
| File Contents | Reference a file from a previous step, or enter plain text here. |         |

### Add User Permission Set {#adduserpermissionset}

Add a permission set to the specified user.

| Input          | Comments                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                          | 63.0    |
| User Name      | The username of the Salesforce user to reference.                               |         |
| Permission Set | The name of the Salesforce Permission Set to assign to or remove from the user. |         |
| Connection     | The Salesforce connection to use.                                               |         |

### Bulk Insert Records {#bulkinsertrecords}

Create new Salesforce records in bulk.

| Input                  | Comments                                                                        | Default |
| ---------------------- | ------------------------------------------------------------------------------- | ------- |
| Version                | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type            | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| External ID Field Name | The name of the column that refers to the External ID Field                     |         |
| File                   | The binary file data to upload as a Salesforce Content Version.                 |         |
| Connection             | The Salesforce connection to use.                                               |         |

### Bulk Upsert Records {#bulkupsertrecords}

Update Salesforce records if they exist, otherwise create new Salesforce records.

| Input                  | Comments                                                                        | Default |
| ---------------------- | ------------------------------------------------------------------------------- | ------- |
| Version                | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type            | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| External ID Field Name | The name of the column that refers to the External ID Field                     |         |
| File                   | The binary file data to upload as a Salesforce Content Version.                 |         |
| Connection             | The Salesforce connection to use.                                               |         |

### Complete Upload Bulk Job {#completeuploadbulkjob}

Notify Salesforce that the upload of job data is complete and ready for processing. No additional job data can be added after this call.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Create Account {#createaccount}

Create a Salesforce account record.

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version                | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Name                   | The name assigned to the Salesforce record.                                                                   |         |
| Account Type           | The type of account record.                                                                                   |         |
| Industry               | The industry of the account record.                                                                           |         |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Shipping Address       | Street, city, state, postal code, and country for the shipping address.                                       |         |
| Street Address         | The street address of the object.                                                                             |         |
| State                  | The state of the object's address.                                                                            |         |
| City                   | The city of the object's address.                                                                             |         |
| Postal Code            | The zip code of the object's address.                                                                         |         |
| Country                | The country of the object's address.                                                                          |         |
| Billing Address        | Street, city, state, postal code, and country for the billing address.                                        |         |
| Billing Street Address | The street address of the billing object.                                                                     |         |
| Billing State          | The state of the object's billing address.                                                                    |         |
| Billing City           | The city of the object's billing address.                                                                     |         |
| Billing Postal Code    | The zip code of the object's billing address.                                                                 |         |
| Billing Country        | The country of the object's billing address.                                                                  |         |
| Additional Fields      | Additional optional fields: includes Phone, Website, Description, Number of Employees, and Annual Revenue.    |         |
| Phone                  | The primary phone number for the object.                                                                      |         |
| Website                | The website URL associated with the record.                                                                   |         |
| Description            | A text description of the object.                                                                             |         |
| Number of Employees    | The number of employees associated with the object.                                                           |         |
| Annual Revenue         | The estimated annual revenue of the account, in the organization's default currency.                          |         |
| Connection             | The Salesforce connection to use.                                                                             |         |

### Create Bulk Job {#createbulkjob}

Create a bulk ingest job representing an operation and its associated data for asynchronous processing in Salesforce.

| Input                  | Comments                                                                                                                            | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Salesforce connection to use.                                                                                                   |         |
| Version                | The Salesforce API version number to use for requests.                                                                              | 63.0    |
| Operation              | The data manipulation operation for the bulk job (e.g., insert, update, upsert, delete, or hardDelete).                             | insert  |
| Line Ending            | The line ending character sequence used in the bulk query results file.                                                             | LF      |
| Object                 | The object type for the data being processed. Use only a single object type per job.                                                |         |
| External ID Field Name | The external ID field in the object being updated. Only needed for upsert operations. Field values must also exist in CSV job data. |         |
| Assignment Rule ID     | The ID of an assignment rule to run for a Case or a Lead. The assignment rule can be active or inactive.                            |         |
| Column Delimiter       | The character delimiter used to separate column values in the bulk query results file.                                              | COMMA   |

### Create Bulk Query Job {#createbulkqueryjob}

Create a bulk query job.

| Input            | Comments                                                                                                                        | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       | The Salesforce connection to use.                                                                                               |         |
| Version          | The Salesforce API version number to use for requests.                                                                          | 63.0    |
| Operation        | The Salesforce Bulk API operation type. Use 'query' for standard queries and 'queryAll' to include deleted or archived records. | query   |
| Query            | The SOQL query to execute against the Salesforce Bulk API.                                                                      |         |
| Line Ending      | The line ending character sequence used in the bulk query results file.                                                         | LF      |
| Column Delimiter | The character delimiter used to separate column values in the bulk query results file.                                          | COMMA   |

### Create Contact {#createcontact}

Create a Salesforce contact.

| Input                      | Comments                                                                                                      | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version                    | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Email Address              | The email address for the object.                                                                             |         |
| Dynamic Fields             | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values               | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Name & Contact Information | First and last name, phone, fax, and mobile contact channels, and birthdate.                                  |         |
| First Name                 | The first name of the contact at the company                                                                  |         |
| Last Name                  | The last name of the contact at the company                                                                   |         |
| Phone                      | The primary phone number for the object.                                                                      |         |
| Fax                        | The fax number associated with the record.                                                                    |         |
| Mobile Phone               | The mobile phone number for the object.                                                                       |         |
| Birthdate                  | The birthdate of the contact. Format: YYYY-MM-DD.                                                             |         |
| Mailing Address            | Street, city, state, postal code, and country for the mailing address.                                        |         |
| Street Address             | The street address of the object.                                                                             |         |
| State                      | The state of the object's address.                                                                            |         |
| City                       | The city of the object's address.                                                                             |         |
| Postal Code                | The zip code of the object's address.                                                                         |         |
| Country                    | The country of the object's address.                                                                          |         |
| Other Address              | Street, city, state, postal code, and country for the secondary address.                                      |         |
| Billing Street Address     | The street address of the billing object.                                                                     |         |
| Billing State              | The state of the object's billing address.                                                                    |         |
| Billing City               | The city of the object's billing address.                                                                     |         |
| Billing Postal Code        | The zip code of the object's billing address.                                                                 |         |
| Billing Country            | The country of the object's billing address.                                                                  |         |
| Additional Fields          | Additional optional fields: includes Department, Title, Assistant, Assistant's Phone, and Description.        |         |
| Department                 | The department name associated with the contact.                                                              |         |
| Title                      | The job title or professional title associated with the contact or lead.                                      |         |
| Assistant                  | The name of the contact's assistant.                                                                          |         |
| Assistant's Phone          | The phone number of the contact's assistant.                                                                  |         |
| Description                | A text description of the object.                                                                             |         |
| Connection                 | The Salesforce connection to use.                                                                             |         |

### Create Customer {#createcustomer}

Create a Salesforce customer.

| Input                | Comments                                                                                                                                                                   | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                     | 63.0    |
| Name                 | Name of this customer.                                                                                                                                                     |         |
| Party ID             | The unique identifier of the individual object related to this customer record.                                                                                            |         |
| Customer Status Type | The status of the customer account.                                                                                                                                        | Active  |
| Last Reference Date  | The timestamp for when the current user last viewed a record related to this record.                                                                                       |         |
| Last Viewed Date     | The timestamp for when the current user last viewed this record. If this value is null, it's possible that this record was referenced (LastReferencedDate) and not viewed. |         |
| Owner ID             | The ID of the user who owns the record.                                                                                                                                    |         |
| Total Lifetime Value | The total revenue amount gained from this customer.                                                                                                                        |         |
| Connection           | The Salesforce connection to use.                                                                                                                                          |         |

### Create Flow {#createflow}

Create a draft Flow in Salesforce.

| Input         | Comments                                                                                                                                                                              | Default     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Version       | The Salesforce API version number to use for requests.                                                                                                                                | 63.0        |
| Flow Name     | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is.                             |             |
| Description   | A text description of the object.                                                                                                                                                     |             |
| Run In Mode   | The context user mode the Flow runs as. DefaultMode respects user permissions and sharing rules. SystemModeWithoutSharing grants broad data access but may lead to security warnings. | DefaultMode |
| Flow Metadata | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                                                       |             |
| Connection    | The Salesforce connection to use.                                                                                                                                                     |             |

### Create Lead {#createlead}

Create a Salesforce lead record.

| Input                      | Comments                                                                                                               | Default |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Version                    | The Salesforce API version number to use for requests.                                                                 | 63.0    |
| Company                    | The name of the company associated with the record.                                                                    |         |
| Lead Status                | The status of the lead. Examples of valid values include: Open, Working, Closed - Converted, Closed - Not Converted.   |         |
| Email Address              | The email address for the object.                                                                                      |         |
| Dynamic Fields             | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.          |         |
| Field Values               | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                 |         |
| Name & Contact Information | First and last name, phone, and website.                                                                               |         |
| First Name                 | The first name of the contact at the company                                                                           |         |
| Last Name                  | The last name of the contact at the company                                                                            |         |
| Phone                      | The primary phone number for the object.                                                                               |         |
| Website                    | The website URL associated with the record.                                                                            |         |
| Address                    | Street, city, state, postal code, and country for the address.                                                         |         |
| Street Address             | The street address of the object.                                                                                      |         |
| State                      | The state of the object's address.                                                                                     |         |
| City                       | The city of the object's address.                                                                                      |         |
| Postal Code                | The zip code of the object's address.                                                                                  |         |
| Country                    | The country of the object's address.                                                                                   |         |
| Additional Fields          | Additional optional fields: includes Title, Lead Source, Rating, Number of Employees, Description, and Annual Revenue. |         |
| Title                      | The job title or professional title associated with the contact or lead.                                               |         |
| Lead Source                | The origin or channel from which the lead was generated (e.g., Web, Phone, Email).                                     |         |
| Rating                     | The rating for the lead.                                                                                               |         |
| Number of Employees        | The number of employees associated with the object.                                                                    |         |
| Description                | A text description of the object.                                                                                      |         |
| Annual Revenue             | The estimated annual revenue of the account, in the organization's default currency.                                   |         |
| Connection                 | The Salesforce connection to use.                                                                                      |         |

### Create Metadata {#createobjectsfrommetadata}

Create new metadata components.

| Input         | Comments                                                                                                                 | Default                                                                                                                                                                                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    | The Salesforce connection to use.                                                                                        |                                                                                                                                                                                                                                                                                                               |
| Version       | The Salesforce API version number to use for requests.                                                                   | 63.0                                                                                                                                                                                                                                                                                                          |
| Metadata      | See [JSforce Metadata API documentation](https://jsforce.github.io/document/#create-metadata) for related documentation. | <code>[<br /> {<br /> "fullName": "TestObject1__c",<br /> "label": "Test Object 1",<br /> "pluralLabel": "Test Object 1",<br /> "nameField": {<br /> "type": "Text",<br /> "label": "Test Object Name"<br /> },<br /> "deploymentStatus": "Deployed",<br /> "sharingModel": "ReadWrite"<br /> }<br />]</code> |
| Metadata Type | The type of metadata to act upon.                                                                                        | CustomObject                                                                                                                                                                                                                                                                                                  |

### Create Metadata Fields {#createfieldsfrommetadata}

Create custom fields from metadata.

| Input         | Comments                                                                                                                 | Default                                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    | The Salesforce connection to use.                                                                                        |                                                                                                                                                                                                                                 |
| Version       | The Salesforce API version number to use for requests.                                                                   | 63.0                                                                                                                                                                                                                            |
| Metadata      | See [JSforce Metadata API documentation](https://jsforce.github.io/document/#create-metadata) for related documentation. | <code>[<br /> {<br /> "fullName": "Contact.FieldName1__c",<br /> "label": "Field Name 1",<br /> "type": "Text",<br /> "length": 80,<br /> "inlineHelpText": "Text that appears in the ? next to a field."<br /> }<br />]</code> |
| Metadata Type | The type of metadata to act upon.                                                                                        | CustomField                                                                                                                                                                                                                     |

### Create Opportunity {#createopportunity}

Create a Salesforce opportunity record representing a sale or pending deal.

| Input            | Comments                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version          | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Stage            | The stage the sale is currently in.                                                                           |         |
| Opportunity Type | The category of the opportunity, indicating whether it is for a new or existing customer.                     |         |
| Close Date       | The date the sale is expected to close. Format: YYYY-MM-DD.                                                   |         |
| Name             | The name assigned to the Salesforce record.                                                                   |         |
| Next Step        | A description of the next action or milestone for the opportunity.                                            |         |
| Dynamic Fields   | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values     | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Amount           | The monetary amount associated with the opportunity.                                                          |         |
| Account ID       | The ID of the account to reference.                                                                           |         |
| Lead Source      | The origin or channel from which the lead was generated (e.g., Web, Phone, Email).                            |         |
| Probability      | The probability of the success of the sale.                                                                   |         |
| Description      | A text description of the object.                                                                             |         |
| Connection       | The Salesforce connection to use.                                                                             |         |

### Create Outbound Message {#createworkflowoutboundmessage}

Create an Outbound Message in Salesforce.

| Input                  | Comments                                                                                              | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Version                | The Salesforce API version number to use for requests.                                                | 63.0    |
| Record Type            | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                       |         |
| Outbound Message Name  | The name of the Salesforce Outbound Message to create or reference.                                   |         |
| Endpoint URL           | The endpoint URL to send the outbound message / webhook to                                            |         |
| Description            | A text description of the object.                                                                     |         |
| Integration User Email | The email of the user under which the payload is sent. If not provided, the current user will be used |         |
| Fields                 | Fields to include in the Outbound Message.                                                            |         |
| Dynamic Fields         | Dynamic Fields, provided by value collection config variable, to include in the Outbound Message      |         |
| Connection             | The Salesforce connection to use.                                                                     |         |

### Create Profile {#createprofile}

Create a Salesforce profile.

| Input        | Comments                                                                                                                                                                            | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version      | The Salesforce API version number to use for requests.                                                                                                                              | 63.0    |
| Name         | The name of the profile.                                                                                                                                                            |         |
| Description  | Description of the profile.                                                                                                                                                         |         |
| User License | Identifier for associated UserLicense.                                                                                                                                              |         |
| Permissions  | Key/value object with permission name keys and boolean value indicating if a permission is granted or not. Use 'Describe Permissions' to retrieve the permissions of a Record Type. |         |
| Connection   | The Salesforce connection to use.                                                                                                                                                   |         |

### Create Record {#createrecord}

Create a Salesforce record.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Record Type    | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                               |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Create User {#createuser}

Create a Salesforce user.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Profile        | The name of the Salesforce User Profile that defines the user's permissions and settings.                     |         |
| User Name      | The username of the Salesforce user to reference.                                                             |         |
| Time Zone      | The time zone for the user. Uses IANA format (e.g., America/New_York).                                        |         |
| Alias          | A short identifier for the Salesforce user, typically used in reports and list views.                         |         |
| Email Address  | The email address for the object.                                                                             |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| First Name     | The first name of the contact at the company                                                                  |         |
| Last Name      | The last name of the contact at the company                                                                   |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Create Workflow Rule {#createworkflowrule}

Create a Workflow Rule. Workflow Rules are deprecated by Salesforce; migrate to Flow-based actions.

| Input                    | Comments                                                                                                                                                                                                                                                                                | Default      |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Version                  | The Salesforce API version number to use for requests.                                                                                                                                                                                                                                  | 63.0         |
| Record Type              | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                                                                                                                                                                         |              |
| Rule Name                | The name of the Salesforce Workflow Rule to create or reference.                                                                                                                                                                                                                        |              |
| Trigger Type             | Conditions in which the trigger fires. On All Changes: The workflow rule is considered on all changes. On Create Only: Considered on creation. On Create or Meets Rule Criteria: Considered on create and when it is updated to meet any Rule Criteria configured to the workflow rule. | onAllChanges |
| Active                   | When true, the workflow rule is active and will fire when its criteria are met.                                                                                                                                                                                                         | true         |
| Description              | A text description of the object.                                                                                                                                                                                                                                                       |              |
| Rule Criteria Filter     | Filter criteria data structure to use with the rule, use this or Formula. See [Salesforce Metadata API - FilterItem](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customfield.htm#filteritem) for the expected structure.                                   |              |
| Formula                  | Formula to evaluate. Use this input or Filter Criteria                                                                                                                                                                                                                                  |              |
| Outbound Message Actions | Full Names of the Outbound Message Actions for this Rule to fire.                                                                                                                                                                                                                       |              |
| Connection               | The Salesforce connection to use.                                                                                                                                                                                                                                                       |              |

### Deactivate Flow {#deactivateflow}

Deactivate a Flow in Salesforce by name.

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | The Salesforce API version number to use for requests.                                                                                                    | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Delete Account {#deleteaccount}

Delete an existing account record.

| Input        | Comments                                                                               | Default |
| ------------ | -------------------------------------------------------------------------------------- | ------- |
| Version      | The Salesforce API version number to use for requests.                                 | 63.0    |
| Record ID    | The unique identifier for a Salesforce record.                                         |         |
| Field Values | Key-value pairs mapping Salesforce field API names to the values to set on the record. |         |
| Connection   | The Salesforce connection to use.                                                      |         |

### Delete Bulk Job {#deletebulkjob}

Delete a bulk ingest job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Delete Bulk Query Job {#deletebulkqueryjob}

Delete a bulk query job.

| Input        | Comments                                               | Default |
| ------------ | ------------------------------------------------------ | ------- |
| Connection   | The Salesforce connection to use.                      |         |
| Version      | The Salesforce API version number to use for requests. | 63.0    |
| Query Job ID | The ID of the query job to delete                      |         |

### Delete Contact {#deletecontact}

Delete an existing contact record.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Delete Customer {#deletecustomer}

Delete an existing customer record.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Delete Flow {#deleteflow}

Delete a Flow from Salesforce by name.

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | The Salesforce API version number to use for requests.                                                                                                    | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Delete Instanced Flows and Outbound Messages {#deleteinstancedflowsandoutboundmessages}

Delete all instanced flows and outbound messages for a given endpoint URL.

| Input        | Comments                                                                  | Default |
| ------------ | ------------------------------------------------------------------------- | ------- |
| Version      | The Salesforce API version number to use for requests.                    | 63.0    |
| Endpoint URL | The endpoint URL to delete the instanced flows and outbound messages for. |         |
| Connection   | The Salesforce connection to use.                                         |         |

### Delete Lead {#deletelead}

Delete a Salesforce lead record.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Delete Metadata {#deletemetadata}

Delete one or more metadata components.

| Input             | Comments                                                                                | Default      |
| ----------------- | --------------------------------------------------------------------------------------- | ------------ |
| Connection        | The Salesforce connection to use.                                                       |              |
| Version           | The Salesforce API version number to use for requests.                                  | 63.0         |
| Object Full Names | The full API names of the Salesforce metadata objects to act on (e.g., TestObject1__c). |              |
| Metadata Type     | The type of metadata to act upon.                                                       | CustomObject |

### Delete Opportunity {#deleteopportunity}

Delete an existing opportunity record.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Delete Profile {#deleteprofile}

Delete a Salesforce profile.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Delete Record {#deleterecord}

Delete an existing Salesforce record.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| Record ID   | The unique identifier for a Salesforce record.                                  |         |
| Connection  | The Salesforce connection to use.                                               |         |

### Delete Workflow Outbound Message {#deleteworkflowoutboundmessage}

Delete a Workflow Outbound Message.

| Input                | Comments                                                                                       | Default |
| -------------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                         | 63.0    |
| Full Name Identifier | The unique full name identifier for Salesforce Metadata objects (e.g., CustomObject API name). |         |
| Connection           | The Salesforce connection to use.                                                              |         |

### Delete Workflow Rule {#deleteworkflowrule}

Delete a Workflow Rule. Workflow Rules are deprecated by Salesforce; migrate to Flow-based actions.

| Input                | Comments                                                                                       | Default |
| -------------------- | ---------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                         | 63.0    |
| Full Name Identifier | The unique full name identifier for Salesforce Metadata objects (e.g., CustomObject API name). |         |
| Connection           | The Salesforce connection to use.                                                              |         |

### Describe Customer SObject {#describecustomersobject}

Describe metadata attributes of a Salesforce Customer object.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |

### Describe Object {#describeobject}

Describe attributes of a Salesforce record type.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| Connection  | The Salesforce connection to use.                                               |         |

### Describe Permissions {#describepermissions}

Describe permissions of a Salesforce record type.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| Connection  | The Salesforce connection to use.                                               |         |

### Find Record {#findrecord}

Find a single Salesforce record.

| Input             | Comments                                                                                                                                | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version           | The Salesforce API version number to use for requests.                                                                                  | 63.0    |
| Record Type       | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                         |         |
| Dynamic Fields    | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                           |         |
| Field Values      | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                  |         |
| Field Value Types | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String. |         |
| Connection        | The Salesforce connection to use.                                                                                                       |         |

### Find Records {#findrecords}

Find and fetch Salesforce records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Record Type          | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                                                                                                                                 |         |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Pagination           | Page and page-size controls.                                                                                                                                                                                                                    |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### Get Attachment {#getattachment}

Get a file attachment from an account, opportunity, or contact.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection | The Salesforce connection to use.                      |         |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| File ID    | The unique identifier of the file to retrieve.         |         |

### Get Bulk Job Failed Record Results {#getjobfailedrecordresults}

Retrieve a list of failed records for a completed insert, delete, update, or upsert bulk job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Get Bulk Job Information {#getbulkjob}

Retrieve information about a bulk ingest job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Get Bulk Job Successful Record Results {#getjobsuccessfulrecordresults}

Retrieve the successful record results for a bulk ingest job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |

### Get Bulk Query Job Information {#getqueryjobinformation}

Get information about a single bulk query job.

| Input        | Comments                                                                                    | Default |
| ------------ | ------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Salesforce connection to use.                                                           |         |
| Version      | The Salesforce API version number to use for requests.                                      | 63.0    |
| Query Job ID | The unique identifier of the bulk query job returned from the Create Bulk Query Job action. |         |

### Get Bulk Query Job Results {#getqueryjobresults}

Retrieve the results for a completed bulk query job.

| Input        | Comments                                                                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   | The Salesforce connection to use.                                                                                                |         |
| Version      | The Salesforce API version number to use for requests.                                                                           | 63.0    |
| Query Job ID | The unique identifier of the bulk query job returned from the Create Bulk Query Job action.                                      |         |
| Locator      | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results. |         |
| Max Records  | The maximum number of records to retrieve per set of results for the query. The request is still subject to the size limits.     |         |

### Get Current User {#getcurrentuser}

Retrieve information about the currently authenticated user.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |

### Get Customer {#getcustomer}

Retrieve a customer record by ID.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Record ID  | The unique identifier for a Salesforce record.         |         |
| Connection | The Salesforce connection to use.                      |         |

### Get File {#getfile}

Retrieve a file from Salesforce ContentVersion.

| Input              | Comments                                                                     | Default |
| ------------------ | ---------------------------------------------------------------------------- | ------- |
| Version            | The Salesforce API version number to use for requests.                       | 63.0    |
| Content Version ID | The unique identifier of the ContentVersion record for the file to retrieve. |         |
| Connection         | The Salesforce connection to use.                                            |         |

### Get Flow {#getflow}

Get details of a specific Flow by name.

| Input      | Comments                                                                                                                                                  | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version    | The Salesforce API version number to use for requests.                                                                                                    | 63.0    |
| Flow Name  | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Connection | The Salesforce connection to use.                                                                                                                         |         |

### Get Object Metadata {#getobjectmetadatabyname}

Get the metadata of an object by full name.

| Input            | Comments                                                             | Default      |
| ---------------- | -------------------------------------------------------------------- | ------------ |
| Connection       | The Salesforce connection to use.                                    |              |
| Version          | The Salesforce API version number to use for requests.               | 63.0         |
| Object Full Name | The full API name of the Salesforce custom object (e.g., Widget__c). |              |
| Metadata Type    | The type of metadata to act upon.                                    | CustomObject |

### Get Record {#getrecord}

Get a single Salesforce record by ID.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Record Type | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity). |         |
| Record ID   | The unique identifier for a Salesforce record.                                  |         |
| Connection  | The Salesforce connection to use.                                               |         |

### List All Bulk Query Job Information {#getallqueryjobinformation}

Retrieve information about all bulk query jobs in the org.

| Input                  | Comments                                                                                                                                        | Default  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection             | The Salesforce connection to use.                                                                                                               |          |
| Version                | The Salesforce API version number to use for requests.                                                                                          | 63.0     |
| Is PK Chunking Enabled | When true, the request only returns information about jobs where PK Chunking is enabled. This only applies to Bulk API (not Bulk API 2.0) jobs. | false    |
| Job Type               | Gets information only about jobs matching the specified job type.                                                                               |          |
| Concurrency Mode       | For future use. Gets information only about jobs matching the specified concurrency mode.                                                       | parallel |
| Query Locator          | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results.                |          |

### List Bulk Jobs {#listbulkjobs}

List all bulk ingest jobs in the org.

| Input                  | Comments                                                                                                                                        | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             | The Salesforce connection to use.                                                                                                               |         |
| Version                | The Salesforce API version number to use for requests.                                                                                          | 63.0    |
| Is PK Chunking Enabled | When true, the request only returns information about jobs where PK Chunking is enabled. This only applies to Bulk API (not Bulk API 2.0) jobs. | false   |
| Job Type               | Gets information only about jobs matching the specified job type.                                                                               |         |
| Locator                | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results.                |         |

### List Composite Resources {#listcompositeresources}

Retrieve a list of URIs for available composite resources.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Connection | The Salesforce connection to use.                      |         |
| Version    | The Salesforce API version number to use for requests. | 63.0    |

### List Contacts {#listcontacts}

List all contact records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Pagination           | Page and page-size controls.                                                                                                                                                                                                                    |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Customers {#listcustomers}

List all customer records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Pagination           | Page and page-size controls.                                                                                                                                                                                                                    |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Flows {#listflows}

List all Flows in the Salesforce org.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |

### List Leads {#listleads}

List all lead records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Pagination           | Page and page-size controls.                                                                                                                                                                                                                    |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Metadata {#listobjectmetadata}

List all metadata components in Salesforce.

| Input         | Comments                                               | Default      |
| ------------- | ------------------------------------------------------ | ------------ |
| Connection    | The Salesforce connection to use.                      |              |
| Version       | The Salesforce API version number to use for requests. | 63.0         |
| Metadata Type | The type of metadata to act upon.                      | CustomObject |

### List Opportunities {#listopportunities}

List all opportunity records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Pagination           | Page and page-size controls.                                                                                                                                                                                                                    |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Outbound Messages {#listworkflowoutboundmessages}

Retrieve all Outbound Messages in the Salesforce org.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |

### List Profiles {#listprofiles}

List all profile records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Pagination           | Page and page-size controls.                                                                                                                                                                                                                    |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Users {#listusers}

List all user records.

| Input                | Comments                                                                                                                                                                                                                                        | Default |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                                                                                          | 63.0    |
| Fetch All            | When true, automatically fetches all pages of results instead of a single page.                                                                                                                                                                 | false   |
| Pagination           | Page and page-size controls.                                                                                                                                                                                                                    |         |
| Page Size            | The maximum number of results to return per page when paginating results.                                                                                                                                                                       |         |
| Page Number          | The page number to retrieve when paginating results. Uses 1-based indexing.                                                                                                                                                                     |         |
| Max Records To Fetch | The maximum number of records to fetch when Fetch All is enabled. Defaults to 20,000 records.                                                                                                                                                   | 20000   |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                   |         |
| Field Values         | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                                                                                                                                          |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field value entered above. Valid types are Boolean, Number, or String.                                                                                                         |         |
| Sort Criteria        | The criteria by which to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Connection           | The Salesforce connection to use.                                                                                                                                                                                                               |         |

### List Workflow Rules {#listworkflowrules}

List all Workflow Rules. Workflow Rules are deprecated by Salesforce; migrate to Flow-based actions.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |

### Query {#query}

Run an SOQL query against Salesforce.

| Input      | Comments                                                                               | Default |
| ---------- | -------------------------------------------------------------------------------------- | ------- |
| Version    | The Salesforce API version number to use for requests.                                 | 63.0    |
| SOQL Query | A Salesforce Object Query Language (SOQL) query to execute against the Salesforce API. |         |
| Connection | The Salesforce connection to use.                                                      |         |

### Raw Request {#rawrequest}

Send raw HTTP request to Salesforce.

| Input                   | Comments                                                                                                                                                                                                                                                                                                                   | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              | The Salesforce connection to use.                                                                                                                                                                                                                                                                                          |         |
| Version                 | The Salesforce API version number to use for requests.                                                                                                                                                                                                                                                                     | 63.0    |
| URL                     | Input the path only (/chatter/feeds/record/), The base URL is already included (https://<YOUR_INSTANCE_URL_COMING_FROM_CONNECTION>/services/data/v<YOUR_INPUT_VERSION>). For example, to connect to https://instance_name/services/data/v58.0/chatter/feeds/record/, only /chatter/feeds/record/ is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                    |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                  |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                       |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                           |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                     |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                        |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                   | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                        |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                        | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                           | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                        | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                              | false   |

### Remove User Permission Set {#removeuserpermissionset}

Remove a permission set from the specified user.

| Input          | Comments                                                                        | Default |
| -------------- | ------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                          | 63.0    |
| User Name      | The username of the Salesforce user to reference.                               |         |
| Permission Set | The name of the Salesforce Permission Set to assign to or remove from the user. |         |
| Connection     | The Salesforce connection to use.                                               |         |

### Send Composite Request {#compositerequests}

Send multiple requests in a single HTTP call.

| Input               | Comments                                                                                                                                                                       | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          | The Salesforce connection to use.                                                                                                                                              |         |
| Version             | The Salesforce API version number to use for requests.                                                                                                                         | 63.0    |
| Composite Request   | The JSON array of subrequests to execute in a single Composite API call. Each entry must include method, url, referenceId, and optionally body.                                |         |
| All Or None         | When true, any error in a subrequest causes the entire composite request to be rolled back. The top-level request returns HTTP 200 and includes responses for each subrequest. | true    |
| Collate Subrequests | When true, the API collates unrelated subrequests to bulkify them for improved performance.                                                                                    | false   |

### Send Transactional Email {#sendtransactionalemail}

Send a transactional email message to a single recipient via Salesforce.

| Input                 | Comments                                                                           | Default |
| --------------------- | ---------------------------------------------------------------------------------- | ------- |
| Version               | The Salesforce API version number to use for requests.                             | 63.0    |
| Message Key           | The unique key identifying the transactional message template to send.             |         |
| Definition Key        | The unique key of the message template definition used for the transactional send. |         |
| Recipient Contact Key | The unique key identifying the recipient contact in Salesforce Marketing Cloud.    |         |
| Recipient Email       | The email address of the recipient for the transactional send.                     |         |
| Connection            | The Salesforce connection to use.                                                  |         |
| Recipient Attributes  | Key-value pairs to personalize the message.                                        |         |

### Subscribe to Record Change {#subscribetorecordchange}

Create a Workflow Rule to subscribe to record changes in Salesforce. Workflow Rules are deprecated by Salesforce; migrate to Flow-based actions.

| Input                  | Comments                                                                                                                                                                                                                                              | Default      |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Version                | The Salesforce API version number to use for requests.                                                                                                                                                                                                | 63.0         |
| Outbound Message Name  | The name of the Salesforce Outbound Message to create or reference.                                                                                                                                                                                   |              |
| Record Type            | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                                                                                                                                                                       |              |
| Trigger Event          | The event condition that causes this workflow rule to fire.                                                                                                                                                                                           | onAllChanges |
| Endpoint URL           | The endpoint URL to send the outbound message / webhook to                                                                                                                                                                                            |              |
| Rule Criteria Filter   | Filter criteria data structure to use with the rule, use this or Formula. See [Salesforce Metadata API - FilterItem](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customfield.htm#filteritem) for the expected structure. |              |
| Formula                | Formula to evaluate. Use this input or Filter Criteria                                                                                                                                                                                                |              |
| Integration User Email | The email of the user under which the payload is sent. If not provided, the current user will be used                                                                                                                                                 |              |
| Description            | A text description of the object.                                                                                                                                                                                                                     |              |
| Fields                 | Fields to include in the Outbound Message.                                                                                                                                                                                                            |              |
| Dynamic Fields         | Dynamic Fields, provided by value collection config variable, to include in the Outbound Message                                                                                                                                                      |              |
| Connection             | The Salesforce connection to use.                                                                                                                                                                                                                     |              |

### Subscribe to Record Changes {#subscribetorecordchanges}

Subscribe to Record Changes in Salesforce using an outbound message action.

| Input               | Comments                                                                                                                                                         | Default         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Version             | The Salesforce API version number to use for requests.                                                                                                           | 63.0            |
| Prefix              | Sets a prefix to the Flow Name and Outbound Messages created. Must start with a letter, can contain letters, numbers, underscores, and be at most 15 characters. |                 |
| Endpoint URL        | The endpoint URL to send the outbound message / webhook to                                                                                                       |                 |
| Trigger Record Type | The Salesforce object API name (e.g., Account, Contact) whose record changes will trigger this flow.                                                             |                 |
| Trigger On          | When to trigger the flow (record creation, update, or both).                                                                                                     | CreateAndUpdate |
| Fields              | Fields to include in the Outbound Message.                                                                                                                       |                 |
| Dynamic Fields      | Dynamic Fields, provided by value collection config variable, to include in the Outbound Message                                                                 |                 |
| Flow Metadata       | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                                  |                 |
| Filter Formula      | Optional formula to filter which records trigger the flow.                                                                                                       |                 |
| Connection          | The Salesforce connection to use.                                                                                                                                |                 |

### Update Account {#updateaccount}

Update an existing account record.

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version                | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Record ID              | The unique identifier for a Salesforce record.                                                                |         |
| Name                   | The name assigned to the Salesforce record.                                                                   |         |
| Account Type           | The type of account record.                                                                                   |         |
| Industry               | The industry of the account record.                                                                           |         |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Shipping Address       | Street, city, state, postal code, and country for the shipping address.                                       |         |
| Street Address         | The street address of the object.                                                                             |         |
| State                  | The state of the object's address.                                                                            |         |
| City                   | The city of the object's address.                                                                             |         |
| Postal Code            | The zip code of the object's address.                                                                         |         |
| Country                | The country of the object's address.                                                                          |         |
| Billing Address        | Street, city, state, postal code, and country for the billing address.                                        |         |
| Billing Street Address | The street address of the billing object.                                                                     |         |
| Billing State          | The state of the object's billing address.                                                                    |         |
| Billing City           | The city of the object's billing address.                                                                     |         |
| Billing Postal Code    | The zip code of the object's billing address.                                                                 |         |
| Billing Country        | The country of the object's billing address.                                                                  |         |
| Additional Fields      | Additional optional fields: includes Phone, Website, Description, Number of Employees, and Annual Revenue.    |         |
| Phone                  | The primary phone number for the object.                                                                      |         |
| Website                | The website URL associated with the record.                                                                   |         |
| Description            | A text description of the object.                                                                             |         |
| Number of Employees    | The number of employees associated with the object.                                                           |         |
| Annual Revenue         | The estimated annual revenue of the account, in the organization's default currency.                          |         |
| Connection             | The Salesforce connection to use.                                                                             |         |

### Update Contact {#updatecontact}

Update an existing contact record.

| Input                      | Comments                                                                                                      | Default |
| -------------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version                    | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Record ID                  | The unique identifier for a Salesforce record.                                                                |         |
| Email Address              | The email address for the object.                                                                             |         |
| Dynamic Fields             | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values               | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Name & Contact Information | First and last name, phone, fax, and mobile contact channels, and birthdate.                                  |         |
| First Name                 | The first name of the contact at the company                                                                  |         |
| Last Name                  | The last name of the contact at the company                                                                   |         |
| Phone                      | The primary phone number for the object.                                                                      |         |
| Fax                        | The fax number associated with the record.                                                                    |         |
| Mobile Phone               | The mobile phone number for the object.                                                                       |         |
| Birthdate                  | The birthdate of the contact. Format: YYYY-MM-DD.                                                             |         |
| Mailing Address            | Street, city, state, postal code, and country for the mailing address.                                        |         |
| Street Address             | The street address of the object.                                                                             |         |
| State                      | The state of the object's address.                                                                            |         |
| City                       | The city of the object's address.                                                                             |         |
| Postal Code                | The zip code of the object's address.                                                                         |         |
| Country                    | The country of the object's address.                                                                          |         |
| Other Address              | Street, city, state, postal code, and country for the secondary address.                                      |         |
| Billing Street Address     | The street address of the billing object.                                                                     |         |
| Billing State              | The state of the object's billing address.                                                                    |         |
| Billing City               | The city of the object's billing address.                                                                     |         |
| Billing Postal Code        | The zip code of the object's billing address.                                                                 |         |
| Billing Country            | The country of the object's billing address.                                                                  |         |
| Additional Fields          | Additional optional fields: includes Department, Title, Assistant, Assistant's Phone, and Description.        |         |
| Department                 | The department name associated with the contact.                                                              |         |
| Title                      | The job title or professional title associated with the contact or lead.                                      |         |
| Assistant                  | The name of the contact's assistant.                                                                          |         |
| Assistant's Phone          | The phone number of the contact's assistant.                                                                  |         |
| Description                | A text description of the object.                                                                             |         |
| Connection                 | The Salesforce connection to use.                                                                             |         |

### Update Customer {#updatecustomer}

Update an existing customer record.

| Input                | Comments                                                                                                                                                                   | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | The Salesforce API version number to use for requests.                                                                                                                     | 63.0    |
| Record ID            | The unique identifier for a Salesforce record.                                                                                                                             |         |
| Name                 | Name of this customer.                                                                                                                                                     |         |
| Party ID             | The unique identifier of the individual object related to this customer record.                                                                                            |         |
| Customer Status Type | The status of the customer account.                                                                                                                                        | Active  |
| Last Reference Date  | The timestamp for when the current user last viewed a record related to this record.                                                                                       |         |
| Last Viewed Date     | The timestamp for when the current user last viewed this record. If this value is null, it's possible that this record was referenced (LastReferencedDate) and not viewed. |         |
| Owner ID             | The ID of the user who owns the record.                                                                                                                                    |         |
| Total Lifetime Value | The total revenue amount gained from this customer.                                                                                                                        |         |
| Connection           | The Salesforce connection to use.                                                                                                                                          |         |

### Update Flow {#updateflow}

Update an existing Flow in Salesforce by name.

| Input         | Comments                                                                                                                                                  | Default |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version       | The Salesforce API version number to use for requests.                                                                                                    | 63.0    |
| Flow Name     | The name for the Flow. Accepts both display names and API names. Display names are automatically converted to API format, while API names are used as is. |         |
| Description   | Updated description for the Flow.                                                                                                                         |         |
| Flow Status   | The publication status of the Flow. Active flows execute when triggered; Draft and Obsolete flows do not.                                                 |         |
| Flow Metadata | Additional Flow metadata in JSON format. This will be merged with other inputs.                                                                           |         |
| Connection    | The Salesforce connection to use.                                                                                                                         |         |

### Update Lead {#updatelead}

Update a Salesforce lead record.

| Input                      | Comments                                                                                                               | Default |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| Version                    | The Salesforce API version number to use for requests.                                                                 | 63.0    |
| Record ID                  | The unique identifier for a Salesforce record.                                                                         |         |
| Company                    | The name of the company associated with the record.                                                                    |         |
| Lead Status                | The status of the lead. Examples of valid values include: Open, Working, Closed - Converted, Closed - Not Converted.   |         |
| Email Address              | The email address for the object.                                                                                      |         |
| Dynamic Fields             | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.          |         |
| Field Values               | Key-value pairs mapping Salesforce field API names to the values to set on the record.                                 |         |
| Name & Contact Information | First and last name, phone, and website.                                                                               |         |
| First Name                 | The first name of the contact at the company                                                                           |         |
| Last Name                  | The last name of the contact at the company                                                                            |         |
| Phone                      | The primary phone number for the object.                                                                               |         |
| Website                    | The website URL associated with the record.                                                                            |         |
| Address                    | Street, city, state, postal code, and country for the address.                                                         |         |
| Street Address             | The street address of the object.                                                                                      |         |
| State                      | The state of the object's address.                                                                                     |         |
| City                       | The city of the object's address.                                                                                      |         |
| Postal Code                | The zip code of the object's address.                                                                                  |         |
| Country                    | The country of the object's address.                                                                                   |         |
| Additional Fields          | Additional optional fields: includes Title, Lead Source, Rating, Number of Employees, Description, and Annual Revenue. |         |
| Title                      | The job title or professional title associated with the contact or lead.                                               |         |
| Lead Source                | The origin or channel from which the lead was generated (e.g., Web, Phone, Email).                                     |         |
| Rating                     | The rating for the lead.                                                                                               |         |
| Number of Employees        | The number of employees associated with the object.                                                                    |         |
| Description                | A text description of the object.                                                                                      |         |
| Annual Revenue             | The estimated annual revenue of the account, in the organization's default currency.                                   |         |
| Connection                 | The Salesforce connection to use.                                                                                      |         |

### Update Metadata {#updatemetadata}

Update one or more metadata components.

| Input         | Comments                                                                            | Default     |
| ------------- | ----------------------------------------------------------------------------------- | ----------- |
| Connection    | The Salesforce connection to use.                                                   |             |
| Version       | The Salesforce API version number to use for requests.                              | 63.0        |
| Metadata      | Check https://jsforce.github.io/document/#update-metadata for related documentation |             |
| Metadata Type | The type of metadata to act upon.                                                   | CustomField |

### Update Opportunity {#updateopportunity}

Update an existing opportunity record.

| Input            | Comments                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version          | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Record ID        | The unique identifier for a Salesforce record.                                                                |         |
| Stage            | The stage the sale is currently in.                                                                           |         |
| Opportunity Type | The category of the opportunity, indicating whether it is for a new or existing customer.                     |         |
| Close Date       | The date the sale is expected to close. Format: YYYY-MM-DD.                                                   |         |
| Name             | The name assigned to the Salesforce record.                                                                   |         |
| Next Step        | A description of the next action or milestone for the opportunity.                                            |         |
| Dynamic Fields   | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values     | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Amount           | The monetary amount associated with the opportunity.                                                          |         |
| Account ID       | The ID of the account to reference.                                                                           |         |
| Lead Source      | The origin or channel from which the lead was generated (e.g., Web, Phone, Email).                            |         |
| Probability      | The probability of the success of the sale.                                                                   |         |
| Description      | A text description of the object.                                                                             |         |
| Connection       | The Salesforce connection to use.                                                                             |         |

### Update Profile {#updateprofile}

Update a Salesforce profile.

| Input       | Comments                                                                                                                                                                            | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version     | The Salesforce API version number to use for requests.                                                                                                                              | 63.0    |
| Record ID   | The unique identifier for a Salesforce record.                                                                                                                                      |         |
| Name        | The name of the profile.                                                                                                                                                            |         |
| Description | Description of the profile.                                                                                                                                                         |         |
| Permissions | Key/value object with permission name keys and boolean value indicating if a permission is granted or not. Use 'Describe Permissions' to retrieve the permissions of a Record Type. |         |
| Connection  | The Salesforce connection to use.                                                                                                                                                   |         |

### Update Record {#updaterecord}

Update an existing Salesforce record.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                                                        | 63.0    |
| Record Type    | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).                               |         |
| Record ID      | The unique identifier for a Salesforce record.                                                                |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Update User {#updateuser}

Update a Salesforce user.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                                                        | 63.0    |
| User Name      | The username of the Salesforce user to reference.                                                             |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Key-value pairs mapping Salesforce field API names to the values to set on the record.                        |         |
| Connection     | The Salesforce connection to use.                                                                             |         |

### Upload Bulk Job Data {#uploadjobdata}

Upload CSV data for a bulk ingest job.

| Input       | Comments                                                                        | Default |
| ----------- | ------------------------------------------------------------------------------- | ------- |
| Connection  | The Salesforce connection to use.                                               |         |
| Version     | The Salesforce API version number to use for requests.                          | 63.0    |
| Bulk Job ID | The unique identifier of the bulk job returned from the Create Bulk Job action. |         |
| File        | The binary file data to upload as a Salesforce Content Version.                 |         |

### Upload File {#uploadfile}

Upload a file to Salesforce ContentVersion.

| Input          | Comments                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | The Salesforce API version number to use for requests.                                                                                                                                              | 63.0    |
| Connection     | The Salesforce connection to use.                                                                                                                                                                   |         |
| File           | The binary file data to upload as a Salesforce Content Version.                                                                                                                                     |         |
| Path On Client | The complete path of the document. One of the fields that determines the FileType. Specify a complete path including the path extension in order for the document to be visible in the Preview tab. |         |

### Upsert Record {#upsertrecord}

Update a Salesforce record if it exists, otherwise create a new Salesforce record.

| Input                  | Comments                                                                                  | Default |
| ---------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Version                | The Salesforce API version number to use for requests.                                    | 63.0    |
| Record Type            | The Salesforce object API name to act on (e.g., Account, Contact, Opportunity).           |         |
| External ID Field Name | The name of the column that refers to the External ID Field                               |         |
| Records                | The JSON array of records to be upserted. Each record must include the external ID field. |         |
| Connection             | The Salesforce connection to use.                                                         |         |

### Validate Connection {#validateconnection}

Validate the provided connection and return whether it is valid.

| Input      | Comments                                               | Default |
| ---------- | ------------------------------------------------------ | ------- |
| Version    | The Salesforce API version number to use for requests. | 63.0    |
| Connection | The Salesforce connection to use.                      |         |
