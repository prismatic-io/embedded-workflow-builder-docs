---
title: Meta Ads Connector
sidebar_label: Meta Ads
description: Interact with ads and adsets in your Meta Ads account.
---

![Meta Ads](./assets/facebook-marketing.png#connector-icon)
Interact with ads and adsets in your Meta Ads account.

## Connections

### Conversions API Access Token

Use this connection to connect to a sandbox ad account.

| Input        | Comments                              | Default |
| ------------ | ------------------------------------- | ------- |
| Access Token | A valid access token for Meta Ads API |         |

### Meta Ads Client Credentials

Client Credentials connectivity for Meta Ads. This connection is required to get an APP Token, which is required to use some of the Meta APIs.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                         | Default                                                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Authorize URL | Provide a valid authURL for Meta Ads                                                                                                                             | https://www.facebook.com/v22.0/dialog/oauth                                                                                          |
| Token URL     | Provide a valid Meta Ads version to complete the Token URL                                                                                                       | https://graph.facebook.com/v22.0/oauth/access_token                                                                                  |
| App Id        | Provide the App Id that was generated from your Meta Ads App.                                                                                                    |                                                                                                                                      |
| App Secret    | Provide the App Secret that was generated from your Meta Ads App.                                                                                                |                                                                                                                                      |
| Scopes        | Provide a valid list of scopes. A list per use case is provided on the Meta Ads docs: https://developers.facebook.com/docs/marketing-api/overview/authorization/ | ads_read ads_management pages_show_list groups_access_member_info leads_retrieval page_events pages_read_user_content public_profile |

### Meta Ads Oauth 2.0

Oauth 2.0 connectivity for Meta Ads.

This component uses OAuth 2.0 to connect to the Meta Ads Marketing API.
To get started with [Meta Ads](https://developers.facebook.com/docs/marketing-apis/get-started), you first need to [create a developer account](https://developers.facebook.com/).

1. Select **Create app**, take note of the App Id and App Secret under the basic tab.
1. Navigate to the Facebook Login Section:
   1. Under the **Valid OAuth Redirect URIs** section add `https://oauth2.%WHITE_LABEL_BASE_URL%/callback` as a **Redirect URI**.
1. Now add a new Meta Ads action to your flow, and you will see a new connection.
1. Enter the values that you previously saved from your Facebook Developer App.
1. All the scopes you need should already exist in the connection. However if you need to enter additional scopes you can refer to [Meta Ads Docs](https://developers.facebook.com/docs/permissions/reference/) to find the correct ones.

Now you can make a new Meta Ads connection, and provide the values you obtained earlier.

For any additional setup information, refer to the [Meta Ads Docs](https://developers.facebook.com/docs/marketing-apis/overview)

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                                                                         | Default                                                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Authorize URL | Provide a valid authURL for Meta Ads                                                                                                                             | https://www.facebook.com/v22.0/dialog/oauth                                                                                          |
| Token URL     | Provide a valid Meta Ads version to complete the Token URL                                                                                                       | https://graph.facebook.com/v22.0/oauth/access_token                                                                                  |
| App Id        | Provide the App Id that was generated from your Meta Ads App.                                                                                                    |                                                                                                                                      |
| App Secret    | Provide the App Secret that was generated from your Meta Ads App.                                                                                                |                                                                                                                                      |
| Scopes        | Provide a valid list of scopes. A list per use case is provided on the Meta Ads docs: https://developers.facebook.com/docs/marketing-api/overview/authorization/ | ads_read ads_management pages_show_list groups_access_member_info leads_retrieval page_events pages_read_user_content public_profile |

### Sandbox Ad Account Token

Use this connection to connect to a sandbox ad account.

This component may also use the Sandbox Ad token to connect a Meta Ad's Sandbox Ad Account
To get started with [Meta Ads](https://developers.facebook.com/docs/marketing-apis/get-started), you first need to [create a developer account](https://developers.facebook.com/).

1. Select **Create app**, take note of the App Id and App Secret under the basic tab.
1. Navigate and expand the Marketing API Section and select the Tools section.
   1. In the **Sandbox Ad Account Management** section, create and name a new Sandbox Ad Account.
   1. Under Actions select the button with a key icon and in the Generate Access Token window Select **Generate**
   1. Add this Access Token to the Sandbox Ad Token Connection Type.
1. All the scopes you need should already exist in the connection. However if you need to enter additional scopes you can refer to [Meta Ads Docs](https://developers.facebook.com/docs/permissions/reference/) to find the correct ones.

For any additional setup information, refer to the [Meta Ads Docs](https://developers.facebook.com/docs/marketing-apis/overview)

| Input         | Comments                               | Default |
| ------------- | -------------------------------------- | ------- |
| Sandbox Token | A valid sandbox token for Meta Ads API |         |

## Triggers

### Ad Account Trigger

Receive data from the Ad Account in real time with webhook subscriptions.

| Input                     | Comments                                                                                          | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Graph Version             | Provide the version of the Graph API to use. Defaults to 22.                                      | 22      |
| Verify Token              | The verify token for the webhook.                                                                 |         |
| Ad Account Fields         | The fields to be subscribed to.                                                                   |         |
| Dynamic Ad Account Fields | The fields to be subscribed to.                                                                   |         |
| Connection                | This connection must be a Meta Ads Client Credentials connection to be able to use webhooks APIs. |         |

### Page Trigger

Receive data from the Page in real time with webhook subscriptions.

| Input               | Comments                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Graph Version       | Provide the version of the Graph API to use. Defaults to 22.                                      | 22      |
| Verify Token        | The verify token for the webhook.                                                                 |         |
| Page Fields         | The fields to be subscribed to.                                                                   |         |
| Dynamic Page Fields | The fields to be subscribed to.                                                                   |         |
| Connection          | This connection must be a Meta Ads Client Credentials connection to be able to use webhooks APIs. |         |

## Actions

### Add URL Tags To Ad Creative

Update an existing Ad Creative to include a new set of URL Tags.

| Input           | Comments                                                             | Default                                                      |
| --------------- | -------------------------------------------------------------------- | ------------------------------------------------------------ |
| Connection      |                                                                      |                                                              |
| Ad Account      | Provide the identifier of an Ad Account. This value should be an Id. |                                                              |
| URL Tags        | Provide an string for the URL tags on the given adCreative.          |                                                              |
| Object Story Id | Provide an Id for the object story of the adCreative.                |                                                              |
| Limit           | Provide a limit for the result set.                                  |                                                              |
| Before          | Provide the token for the item before the current one.               |                                                              |
| After           | Provide the token for the item after the current one.                |                                                              |
| Fields          | Provide a comma separated list of fields to be returned.             | name, object_story_spec, adlabels, body, object_id, url_tags |
| Optional Values | Provide optional values to mutate the given object.                  |                                                              |
| Graph Version   | Provide the version of the Graph API to use. Defaults to 22.         | 22                                                           |

### Create Ad

Creates a new ad.

| Input                   | Comments                                                                                                                                                                                                        | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                 |         |
| Ad Account              | Provide the identifier of an Ad Account. This value should be an Id.                                                                                                                                            |         |
| Name                    | Name of the ad.                                                                                                                                                                                                 |         |
| Creative                | This field is required for create. The ID or creative spec of the ad creative to be used by this ad. You may supply the ID within an object as shown in the example.                                            |         |
| Adset Id                | ID of the ad set that contains the ad.                                                                                                                                                                          |         |
| Ad Status               | Provide a status for the ad. During testing, it is recommended to set ads to a PAUSED status so as to not incur accidental spend.                                                                               |         |
| Adset Spec              | The ad set spec for this ad. When the spec is provided, Adset Id field is not required.                                                                                                                         |         |
| Ad Schedule End Time    | Indicates the end time for the ad. If no end time is defined, the ad will run on the campaign's schedule.                                                                                                       |         |
| Ad Schedule Start Time  | Indicates the start time for the ad. If no start time is defined, the ad will run on the campaign's schedule.                                                                                                   |         |
| Ad Labels               | Ad labels associated with this ad.                                                                                                                                                                              |         |
| Audience Id             | The ID of the audience.                                                                                                                                                                                         |         |
| Conversion Domain       | The domain where conversions happen. The field is no longer required for creation or update since June 2023. Note that this field should contain only the first and second level domains, and not the full URL. |         |
| Date Format             | The format of the date.                                                                                                                                                                                         |         |
| Display Sequence        | The sequence of the ad within the same campaign.                                                                                                                                                                |         |
| Engagement Audience     | Flag to create a new audience based on users who engage with this ad.                                                                                                                                           | false   |
| Include Demolink Hashes | Include the demolink hashes.                                                                                                                                                                                    | false   |
| Priority                | Priority of the ad.                                                                                                                                                                                             |         |
| Source Ad Id            | ID of the source Ad, if applicable.                                                                                                                                                                             |         |
| Graph Version           | Provide the version of the Graph API to use. Defaults to 22.                                                                                                                                                    | 22      |

### Create Ad Account Webhook

Create a new ad account webhook for the current application.

| Input                     | Comments                                                                                          | Default |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Graph Version             | Provide the version of the Graph API to use. Defaults to 22.                                      | 22      |
| Verify Token              | The verify token for the webhook.                                                                 |         |
| Callback Url              | The URL to send the webhook to.                                                                   |         |
| Ad Account Fields         | The fields to be subscribed to.                                                                   |         |
| Dynamic Ad Account Fields | The fields to be subscribed to.                                                                   |         |
| Connection                | This connection must be a Meta Ads Client Credentials connection to be able to use webhooks APIs. |         |

### Create Campaign

Creates a new campaign.

| Input                        | Comments                                                                                                                                                                                                                                                                                                                                | Default |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   |                                                                                                                                                                                                                                                                                                                                         |         |
| Ad Account                   | Provide the identifier of an Ad Account. This value should be an Id.                                                                                                                                                                                                                                                                    |         |
| Campaign Name                | Name for this campaign.                                                                                                                                                                                                                                                                                                                 |         |
| Objective                    | Campaign's objective. If it is specified the API will validate that any ads created under the campaign match that objective.                                                                                                                                                                                                            |         |
| Ad Status                    | Only ACTIVE and PAUSED are valid during creation. Other statuses can be used for update. If it is set to PAUSED, its active child objects will be paused and have an effective status CAMPAIGN_PAUSED.                                                                                                                                  |         |
| Special Ad Categories        | Special Ad Categories.                                                                                                                                                                                                                                                                                                                  |         |
| Special Ad Category Country  | Special Ad Category Country.                                                                                                                                                                                                                                                                                                            |         |
| Ad Labels                    | Ad Labels associated with this campaign.                                                                                                                                                                                                                                                                                                |         |
| Bid Strategy                 | Choose bid strategy for this campaign to suit your specific business goals.                                                                                                                                                                                                                                                             |         |
| Buying Type                  | This field will help Meta Ads make optimizations to delivery, pricing, and limits. All ad sets in this campaign must match the buying type.                                                                                                                                                                                             |         |
| Campaign Optimization Type   | Campaign Optimization Type.                                                                                                                                                                                                                                                                                                             |         |
| Daily Budget                 | Daily budget of this campaign. All adsets under this campaign will share this budget. You can either set budget at the campaign level or at the adset level, not both.                                                                                                                                                                  |         |
| Is Skadnetwork Attribution   | To create an iOS 14 campaign, enable SKAdNetwork attribution for this campaign.                                                                                                                                                                                                                                                         | false   |
| Is Using L3 Schedule         | Is Using L3 Schedule.                                                                                                                                                                                                                                                                                                                   | false   |
| Iterative Split Test Configs | Array of Iterative Split Test Configs created under this campaign.                                                                                                                                                                                                                                                                      |         |
| Lifetime Budget              | Lifetime budget of this campaign. All adsets under this campaign will share this budget. You can either set budget at the campaign level or at the adset level, not both.                                                                                                                                                               |         |
| Promoted Object              | The object this campaign is promoting across all its ads. It's required for SKAdNetwork or Aggregated Event Measurement campaign creation. Only product_catalog_id is used at the ad set level.                                                                                                                                         |         |
| Source Campaign Id           | Used if a campaign has been copied. The ID from the original campaign that was copied.                                                                                                                                                                                                                                                  |         |
| Spend Cap                    | A spend cap for the campaign, such that it will not spend more than this cap. Defined as integer value of subunit in your currency with a minimum value of $100 USD (or approximate local equivalent). Set the value to 922337203685478 to remove the spend cap. Not available for Reach and Frequency or Premium Self Serve campaigns. |         |
| Start Time                   | Start Time.                                                                                                                                                                                                                                                                                                                             |         |
| Stop Time                    | Stop Time.                                                                                                                                                                                                                                                                                                                              |         |
| Topline Id                   | Topline Id.                                                                                                                                                                                                                                                                                                                             |         |
| Graph Version                | Provide the version of the Graph API to use. Defaults to 22.                                                                                                                                                                                                                                                                            | 22      |

### Create Conversion

Create a single conversion event for a pixel. Requires the Conversions API Access Token connection.

| Input            | Comments                                                                                                                                                                                                                      | Default |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                                                                                                                               |         |
| Pixel Id         | Provide the Id of a pixel.                                                                                                                                                                                                    |         |
| Event Name       | A standard event or custom event name.                                                                                                                                                                                        |         |
| User Data        | A map that contains customer information data. See https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters.                                                             |         |
| Action Source    | This field allows you to specify where your conversions occurred.                                                                                                                                                             |         |
| Event Time       | A Unix timestamp in seconds indicating when the actual event occurred. The specified time may be earlier than the time you send the event to Meta Ads. You must send this date in GMT time zone. Default is the current time. |         |
| Event Source Url | The browser URL where the event happened.                                                                                                                                                                                     |         |
| Custom Data      | A map that includes additional business data about the event. See https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/custom-data.                                                                  |         |
| More Data        | Additional data to include with the event. See https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event.                                                                                    |         |
| Graph Version    | Provide the version of the Graph API to use. Defaults to 22.                                                                                                                                                                  | 22      |

### Create Multiple Conversions

Create multiple conversion events for a pixel. Requires the Conversions API Access Token connection.

| Input         | Comments                                                                                                                                               | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                                                                                        |         |
| Pixel Id      | Provide the Id of a pixel.                                                                                                                             |         |
| Events        | An array of server event objects. See https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event for more information. |         |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22.                                                                                           | 22      |

### Create Page Webhook

Create a new page webhook for the current application.

| Input               | Comments                                                                                          | Default |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Graph Version       | Provide the version of the Graph API to use. Defaults to 22.                                      | 22      |
| Verify Token        | The verify token for the webhook.                                                                 |         |
| Callback Url        | The URL to send the webhook to.                                                                   |         |
| Page Fields         | The fields to be subscribed to.                                                                   |         |
| Dynamic Page Fields | The fields to be subscribed to.                                                                   |         |
| Connection          | This connection must be a Meta Ads Client Credentials connection to be able to use webhooks APIs. |         |

### Delete Ad

Delete the information and metadata of a given ad.

| Input         | Comments                                                     | Default |
| ------------- | ------------------------------------------------------------ | ------- |
| Connection    |                                                              |         |
| Ad Id         | Ad ID to delete.                                             |         |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22. | 22      |

### Delete Webhook

Delete a webhook for the current application.

| Input         | Comments                                                                                          | Default |
| ------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22.                                      | 22      |
| Object        | The webhook associated with the object will be deleted.                                           |         |
| Connection    | This connection must be a Meta Ads Client Credentials connection to be able to use webhooks APIs. |         |

### Get Ad

Get the information and metadata of a given ad.

| Input         | Comments                                                     | Default                                                                                                                                                                                                                                                               |
| ------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                              |                                                                                                                                                                                                                                                                       |
| Ad Id         | Ad ID to get.                                                |                                                                                                                                                                                                                                                                       |
| Fields        | Provide a comma separated list of fields to be returned.     | name,adset,account_id,ad_review_feedback,adlabels,adset_id,bid_amount,campaign,campaign_id,configured_status,conversion_domain,created_time,creative,effective_status,issues_info,last_updated_by_app_id,preview_shareable_link,recommendations,status,tracking_specs |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22. | 22                                                                                                                                                                                                                                                                    |

### Get Ad Account

Get the information and metadata of the given ad account.

| Input         | Comments                                                             | Default                                                              |
| ------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Connection    |                                                                      |                                                                      |
| Ad Account    | Provide the identifier of an Ad Account. This value should be an Id. |                                                                      |
| Fields        | Provide a comma separated list of fields to be returned.             | name,age,balance,is_personal,account_status,line_numbers,adcreatives |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22.         | 22                                                                   |

### Get Ad Creative

Get the information and metadata of the given ad creative.

| Input         | Comments                                                                    | Default                                                      |
| ------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Connection    |                                                                             |                                                              |
| Ad Creative   | Provide a unique identifier of the Ad Creative. This value should be an ID. |                                                              |
| Fields        | Provide a comma separated list of fields to be returned.                    | name, object_story_spec, adlabels, body, object_id, url_tags |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22.                | 22                                                           |

### Get Ad Set

Get the information and metadata of a given Ad Set.

| Input         | Comments                                                     | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Ad Set Id     | The ID of the Ad Set to retrieve.                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Fields        | Provide a comma separated list of fields to be returned.     | name,account_id,adlabels,adset_schedule,asset_feed_id,attribution_spec,bid_adjustments,bid_amount,bid_constraints,bid_info,billing_event,budget_remaining,campaign,configured_status,created_time,creative_sequence,daily_budget,daily_min_spend_target,daily_spend_cap,destination_type,effective_status,end_time,optimization_goal,optimization_sub_event,pacing_type,promoted_object,recommendations,status,targeting,start_time,targeting_optimization_types,updated_time |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22. | 22                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Get Business By Name

Fetch an business with the provided name.

| Input         | Comments                                                     | Default |
| ------------- | ------------------------------------------------------------ | ------- |
| Connection    |                                                              |         |
| Business Name |                                                              |         |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22. | 22      |

### Get Current User

Get the information and metadata of the current user.

| Input         | Comments                                                     | Default |
| ------------- | ------------------------------------------------------------ | ------- |
| Connection    |                                                              |         |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22. | 22      |

### Get User By Id

Get the information and metadata of a given user.

| Input         | Comments                                                     | Default |
| ------------- | ------------------------------------------------------------ | ------- |
| Connection    |                                                              |         |
| User Id       | Provide the Id of a user.                                    |         |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22. | 22      |

### List Ad Accounts

Get the ad accounts for the current user.

| Input         | Comments                                                                                | Default                                                              |
| ------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Connection    |                                                                                         |                                                                      |
| Fetch All     | If true, it will fetch all records and ignore parameters like limit, after, and before. | false                                                                |
| Limit         | Provide a limit for the result set.                                                     |                                                                      |
| Before        | Provide the token for the item before the current one.                                  |                                                                      |
| After         | Provide the token for the item after the current one.                                   |                                                                      |
| Fields        | Provide a comma separated list of fields to be returned.                                | name,age,balance,is_personal,account_status,line_numbers,adcreatives |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22.                            | 22                                                                   |

### List Ad Creatives

List all ad creatives in a given ad account.

| Input         | Comments                                                                                | Default                                                      |
| ------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Connection    |                                                                                         |                                                              |
| Ad Account    | Provide the identifier of an Ad Account. This value should be an Id.                    |                                                              |
| Fetch All     | If true, it will fetch all records and ignore parameters like limit, after, and before. | false                                                        |
| Limit         | Provide a limit for the result set.                                                     |                                                              |
| Before        | Provide the token for the item before the current one.                                  |                                                              |
| After         | Provide the token for the item after the current one.                                   |                                                              |
| Fields        | Provide a comma separated list of fields to be returned.                                | name, object_story_spec, adlabels, body, object_id, url_tags |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22.                            | 22                                                           |

### List Ad Leads

List all ad leads for the given ad.

| Input         | Comments                                                     | Default |
| ------------- | ------------------------------------------------------------ | ------- |
| Connection    |                                                              |         |
| Ad Id         | The ID of the ad to list leads for.                          |         |
| Limit         | Provide a limit for the result set.                          |         |
| Before        | Provide the token for the item before the current one.       |         |
| After         | Provide the token for the item after the current one.        |         |
| Fields        | Provide a comma separated list of fields to be returned.     | name    |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22. | 22      |

### List Ad Previews

Get a list of all previews of the given ad.

| Input         | Comments                                                     | Default |
| ------------- | ------------------------------------------------------------ | ------- |
| Connection    |                                                              |         |
| Ad Id         | The ID of the ad to list previews for.                       |         |
| Ad Format     | Provide a type of ad format to preview.                      |         |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22. | 22      |

### List Ad Sets In Account

List all ad sets in an ad account.

| Input         | Comments                                                                                | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Ad Account    | Provide the identifier of an Ad Account. This value should be an Id.                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Fetch All     | If true, it will fetch all records and ignore parameters like limit, after, and before. | false                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Limit         | Provide a limit for the result set.                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Before        | Provide the token for the item before the current one.                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| After         | Provide the token for the item after the current one.                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Fields        | Provide a comma separated list of fields to be returned.                                | name,account_id,adlabels,adset_schedule,asset_feed_id,attribution_spec,bid_adjustments,bid_amount,bid_constraints,bid_info,billing_event,budget_remaining,campaign,configured_status,created_time,creative_sequence,daily_budget,daily_min_spend_target,daily_spend_cap,destination_type,effective_status,end_time,optimization_goal,optimization_sub_event,pacing_type,promoted_object,recommendations,status,targeting,start_time,targeting_optimization_types,updated_time |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22.                            | 22                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### List Ads In Account

List all ads in an ad account.

| Input         | Comments                                                                                | Default                                                                                                                                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                                                         |                                                                                                                                                                                                                                                                       |
| Ad Account    | Provide the identifier of an Ad Account. This value should be an Id.                    |                                                                                                                                                                                                                                                                       |
| Fetch All     | If true, it will fetch all records and ignore parameters like limit, after, and before. | false                                                                                                                                                                                                                                                                 |
| Before        | Provide the token for the item before the current one.                                  |                                                                                                                                                                                                                                                                       |
| After         | Provide the token for the item after the current one.                                   |                                                                                                                                                                                                                                                                       |
| Limit         | Provide a limit for the result set.                                                     |                                                                                                                                                                                                                                                                       |
| Fields        | Provide a comma separated list of fields to be returned.                                | name,adset,account_id,ad_review_feedback,adlabels,adset_id,bid_amount,campaign,campaign_id,configured_status,conversion_domain,created_time,creative,effective_status,issues_info,last_updated_by_app_id,preview_shareable_link,recommendations,status,tracking_specs |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22.                            | 22                                                                                                                                                                                                                                                                    |

### List Ads In Adset

List all ads in a given adset.

| Input         | Comments                                                     | Default                                                                                                                                                                                                                                                               |
| ------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                              |                                                                                                                                                                                                                                                                       |
| Ad Set Id     | The ID of the adset to list ads for.                         |                                                                                                                                                                                                                                                                       |
| Fields        | Provide a comma separated list of fields to be returned.     | name,adset,account_id,ad_review_feedback,adlabels,adset_id,bid_amount,campaign,campaign_id,configured_status,conversion_domain,created_time,creative,effective_status,issues_info,last_updated_by_app_id,preview_shareable_link,recommendations,status,tracking_specs |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22. | 22                                                                                                                                                                                                                                                                    |

### List Campaigns In Account

List all campaigns in an ad account.

| Input         | Comments                                                             | Default |
| ------------- | -------------------------------------------------------------------- | ------- |
| Connection    |                                                                      |         |
| Ad Account    | Provide the identifier of an Ad Account. This value should be an Id. |         |
| Limit         | Provide a limit for the result set.                                  |         |
| Before        | Provide the token for the item before the current one.               |         |
| After         | Provide the token for the item after the current one.                |         |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22.         | 22      |

### List Webhooks

List all webhooks for the current application.

| Input         | Comments                                                                                          | Default |
| ------------- | ------------------------------------------------------------------------------------------------- | ------- |
| Graph Version | Provide the version of the Graph API to use. Defaults to 22.                                      | 22      |
| Connection    | This connection must be a Meta Ads Client Credentials connection to be able to use webhooks APIs. |         |

### Raw Request

Send raw HTTP request to Meta Ads.

| Input                   | Comments                                                                                                                                                                                                                                                      | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                               |         |
| Graph Version           | Provide the version of the Graph API to use. Defaults to 22.                                                                                                                                                                                                  | 22      |
| URL                     | Input the path only (/me/adaccounts), The base URL is already included (https://graph.facebook.com/v<INPUT_VERSION>.0). For example, to connect to https://graph.facebook.com/v<INPUT_VERSION>.0/me/adaccounts, only /me/adaccounts is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                       |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                     |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                          |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                              |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                        |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                           |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                   |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                      | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                           |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                           | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                              | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                           | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                 | false   |

### Update Ad

Update the information and metadata of a given ad or adset.

| Input           | Comments                                                                                                                                                                                               | Default                                                                                                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection      |                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                       |
| Ad Id           | Provide the Id of an Ad or Ad Set.                                                                                                                                                                     |                                                                                                                                                                                                                                                                       |
| Ad Name         | Provide a name for the given ad.                                                                                                                                                                       |                                                                                                                                                                                                                                                                       |
| Ad Status       | Provide a status for the ad. During testing, it is recommended to set ads to a PAUSED status so as to not incur accidental spend.                                                                      |                                                                                                                                                                                                                                                                       |
| Creative Id     | Provide the Id of the desired creative.                                                                                                                                                                |                                                                                                                                                                                                                                                                       |
| Tracking        | Provide a JSON array containing valid tracking specs. The shape of this field can change depending on the type of ad: https://developers.facebook.com/docs/marketing-api/tracking-specs#default_by_ad. |                                                                                                                                                                                                                                                                       |
| Optional Values | Provide optional values to mutate the given object.                                                                                                                                                    |                                                                                                                                                                                                                                                                       |
| Fields          | Provide a comma separated list of fields to be returned.                                                                                                                                               | name,adset,account_id,ad_review_feedback,adlabels,adset_id,bid_amount,campaign,campaign_id,configured_status,conversion_domain,created_time,creative,effective_status,issues_info,last_updated_by_app_id,preview_shareable_link,recommendations,status,tracking_specs |
| Graph Version   | Provide the version of the Graph API to use. Defaults to 22.                                                                                                                                           | 22                                                                                                                                                                                                                                                                    |

### Update Ad Creative

Update the information and metadata of the given ad creative.

| Input           | Comments                                                     | Default                                                      |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Connection      |                                                              |                                                              |
| Ad Creative Id  | The ID of the ad creative to update.                         |                                                              |
| URL Tags        | Provide an string for the URL tags on the given adCreative.  |                                                              |
| Object Story Id | Provide an Id for the object story of the adCreative.        |                                                              |
| Name            | Provide a name for the adCreative.                           |                                                              |
| Body            | Provide a body for the adCreative.                           |                                                              |
| Limit           | Provide a limit for the result set.                          |                                                              |
| Before          | Provide the token for the item before the current one.       |                                                              |
| After           | Provide the token for the item after the current one.        |                                                              |
| Fields          | Provide a comma separated list of fields to be returned.     | name, object_story_spec, adlabels, body, object_id, url_tags |
| Optional Values | Provide optional values to mutate the given object.          |                                                              |
| Graph Version   | Provide the version of the Graph API to use. Defaults to 22. | 22                                                           |

### Update Ad Set

Update the information and metadata of a given Ad Set.

| Input           | Comments                                                                                                                                  | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection      |                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Ad Set Id       | The ID of the Ad Set to update.                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Ad Set Name     | Provide a name for the Ad Set.                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Ad Set Status   | Provide a status for the Ad Set. During testing, it is recommended to set ad sets to a PAUSED status so as to not incur accidental spend. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Targeting       | The targeting specs for the ad set.                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Optional Values | Provide optional values to mutate the given object.                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Fields          | Provide a comma separated list of fields to be returned.                                                                                  | name,account_id,adlabels,adset_schedule,asset_feed_id,attribution_spec,bid_adjustments,bid_amount,bid_constraints,bid_info,billing_event,budget_remaining,campaign,configured_status,created_time,creative_sequence,daily_budget,daily_min_spend_target,daily_spend_cap,destination_type,effective_status,end_time,optimization_goal,optimization_sub_event,pacing_type,promoted_object,recommendations,status,targeting,start_time,targeting_optimization_types,updated_time |
| Graph Version   | Provide the version of the Graph API to use. Defaults to 22.                                                                              | 22                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
