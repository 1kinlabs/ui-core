/* eslint-disable react/jsx-props-no-spreading */
import { Box, BoxProps, Typography } from '@mui/material'
import { styled } from 'theme'

export const PricingCardBadge = styled(({ className, children }: BoxProps) => (
  <Box className={className}>
    <Typography variant="overline" fontSize={12} lineHeight="15px">
      {children}
    </Typography>
  </Box>
))`
  background-color: ${({ theme }) => theme.surface.paperLight};
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 16px;
  line-height: 1;
`
