/* eslint-disable react/jsx-props-no-spreading */
import { Typography, TypographyProps } from '@mui/material'

export function PricingCardPrice({ children, ...props }: TypographyProps) {
  return (
    <Typography variant="h2" letterSpacing={1} {...props}>{children}</Typography>
  )
}
