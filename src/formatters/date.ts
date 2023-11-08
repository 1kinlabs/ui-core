import { DateTime } from 'luxon'

export const format = (date : string, formatString?: string) : string => DateTime.fromSQL(date).toFormat(formatString || 'MMM d, yyyy')
