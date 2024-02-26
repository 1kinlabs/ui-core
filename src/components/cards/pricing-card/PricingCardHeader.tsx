import { PropsWithChildren } from 'react'
import { CardHeader } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from 'theme'
import { OnePassLogo } from 'svg/1Pass'

const PricingCardHeaderTitleContainer = styled(Box)``

type Props = PropsWithChildren<{
  className?: string
}>
export const PricingCardHeader = styled(({ className, children }: Props) => (
  <CardHeader
    className={className}
    title={(
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {children}
      </Box>
    )}
  />
))`
  background-color: ${({ theme }) => theme.surface.paper};

  ${PricingCardHeaderTitleContainer} {
    
  }
`
