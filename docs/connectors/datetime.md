---
title: Date/Time Connector
sidebar_label: Date/Time
description: Get and adjust Date/Time values
---

![Date/Time](./assets/datetime.png#connector-icon)
Get and adjust Date/Time values

## Actions

### Adjust Date/Time {#adjustdatetime}

Add/Remove the specified seconds, minutes, hours, and days from the specified Date/Time

| Input     | Comments                                                                      | Default |
| --------- | ----------------------------------------------------------------------------- | ------- |
| Date/Time | A reference to a JavaScript Date object or an ISO timestamp string            |         |
| Seconds   | Specifies the number of seconds to use for adjusting the associated Date/Time |         |
| Minutes   | Specifies the number of minutes to use for adjusting the associated Date/Time |         |
| Hours     | Specifies the number of hours to use for adjusting the associated Date/Time   |         |
| Days      | Specifies the number of days to use for adjusting the associated Date/Time    |         |

### Convert Date/Time To ISO String {#converttoisostring}

Convert the given Date/Time to an ISO string

| Input     | Comments                                                                         | Default |
| --------- | -------------------------------------------------------------------------------- | ------- |
| Date/Time | A reference to a JavaScript Date object or an ISO timestamp string               |         |
| Time Zone | Specifies the timezone to use for converting to a localized ISO timestamp string |         |

### Convert Date/Time To Local ISO String {#converttolocalisostring}

Convert the given Date/Time to an ISO string in local time using specified timezone

| Input     | Comments                                                                         | Default |
| --------- | -------------------------------------------------------------------------------- | ------- |
| Date/Time | A reference to a JavaScript Date object or an ISO timestamp string               |         |
| Time Zone | Specifies the timezone to use for converting to a localized ISO timestamp string |         |

### Convert Date To Epoch {#converttoepoch}

Convert the given Date to a seconds/milliseconds Epoch.

| Input                    | Comments                                                                                     | Default |
| ------------------------ | -------------------------------------------------------------------------------------------- | ------- |
| Date/Time                | A reference to a JavaScript Date object or an ISO timestamp string                           |         |
| Display Epoch In Seconds | If true, action will format the given date to Epoch time in seconds instead of milliseconds. | false   |

### Convert Epoch Timestamp To Date {#convertfromepoch}

Convert the given Epoch timestamp to a ISO String Date.

| Input                      | Comments                                                                               | Default |
| -------------------------- | -------------------------------------------------------------------------------------- | ------- |
| Epoch Timestamp            | The epoch timestamp you would like to convert to a date.                               |         |
| Epoch Timestamp in Seconds | If true, action will assume the given timestamp is in seconds instead of milliseconds. | false   |

### Format Date/Time {#formatdatetime}

Change the format of a timestamp given a format string

| Input     | Comments                                                                                                                                                                                                 | Default                  |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Date/Time | A reference to a JavaScript Date object or an ISO timestamp string                                                                                                                                       |                          |
| Time Zone | Specifies the timezone to use for converting to a localized ISO timestamp string                                                                                                                         | etc/UTC                  |
| Format    | The format of timestamp you would like. Use YYYY for year, MM for month, DD for day, HH for 24 hour, hh for 12 hour clock, mm for minute, ss for second, SSS for milliseconds and Z for timezone offset. | YYYY-MM-DDTHH:mm:ss.SSSZ |

### Get Current Date/Time {#getcurrentdatetime}

Return the current Date/Time in UTC

| Input                    | Comments                                                     | Default |
| ------------------------ | ------------------------------------------------------------ | ------- |
| Display Epoch In Seconds | If true, the current Date/Time will be displayed in seconds. | false   |
