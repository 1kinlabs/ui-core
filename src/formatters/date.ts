import { DateTime, DateTimeFormatOptions } from 'luxon'

export const format = (date : string, formatOption?: DateTimeFormatOptions) : string => DateTime.fromISO(date).toLocaleString(formatOption || DateTime.DATE_MED)
