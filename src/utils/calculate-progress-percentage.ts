import { zeroIfNull } from './zero-if-null'

export const calculateProgressPercentage = (numerator : number, denominator : number) => (
  Math.min(Math.round(
    (zeroIfNull(numerator) / zeroIfNull(denominator)) * 100,
  ), 100)
)
