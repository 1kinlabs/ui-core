import { useState } from 'react'
import NextImage from 'next/image'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useTheme } from 'theme'
import { Collectible } from 'types/Collectible'
import { ClaimStatus } from 'enums/ClaimStatus'

export type Props = {
  collectible: Collectible,
  isSelected: boolean,
  claimStatus?: ClaimStatus
}

const CollectibleCard = ({ collectible, claimStatus, isSelected = false } : Props) => {
    const theme = useTheme()

    return (
        <CardContainer
        onClick={() => {}}
        key={collectible.id}
        sx={{
          border: '5px solid',
          borderColor: isSelected ? theme.action.focus : 'transparent',
          width: '250px',
          mr: '20px',
          mb: '20px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ width: '100%', position: 'relative' }}>
          <Box sx={{ width: '100%', height: '180px', position: 'relative' }}>
            <NextImage
              layout="fill"
              objectFit="cover"
              src={collectible?.assets?.cardMedia?.defaultMedia?.src1x}
              alt={collectible?.assets?.cardMedia?.alt}
            />
          </Box>
          <Box sx={{ position: 'relative', padding: '15px', backgroundColor: theme.surface.paper }}>
            <Box sx={{
              width: 'fit-content',
              px: '10px',
              py: '3px',
              backgroundColor: theme.text.warning,
              borderRadius: '10px',
              textTransform: 'capitalize',
              fontSize: '13px',
              position: 'absolute',
              color: theme.surface.body,
              top: '-13px',
            }}
            >
              {claimStatus}
            </Box>
            <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>
              {collectible?.title}
            </Typography>
          </Box>
        </Box>
      </CardContainer>
    )
}

const CardContainer = styled(Box)`
  @media (max-width: 768px) {
    width: 47%;
    margin-right: 0;
  }
`

export default CollectibleCard
