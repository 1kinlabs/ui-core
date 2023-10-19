import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia, { CardMediaProps } from '@mui/material/CardMedia'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useTheme } from 'theme'
import { Collectible } from 'types/Collectible'
import { CollectibleStatus } from 'enums/CollectibleStatus'
import { ClaimStatus } from 'enums/ClaimStatus'
import { isSoldOut as isSoldOutUtil } from 'utils/isSoldOut'

const TypographyOverline = styled(Typography)`
  line-height: 1.5;
`

const CardContentStyled = styled(CardContent)`
  position: relative;
`

interface ExtendedCardMediaProps extends CardMediaProps {
  isAvailable?: boolean;
  isExpired?: boolean;
  isSoldOut?: boolean
}

const StyledCardMedia = styled(CardMedia)<ExtendedCardMediaProps>`
  filter: ${({ isAvailable, isExpired, isSoldOut }) => {
    if (isAvailable || isSoldOut) {
      return 'grayscale(100%) brightness(20%) contrast(100%)'
    }
    if (isExpired) {
      return 'grayscale(100%) brightness(20%) contrast(130%)'
    }
    return 'none'
  }};
  height: 140px;
`

export type Props = {
  collectible: Collectible,
  claimStatus?: ClaimStatus
  onClick?: (event: Collectible) => void,
}

function InProgressChip() {
  const theme = useTheme()

  return (
    <Box sx={{
      width: 'fit-content',
      px: '10px',
      py: '3px',
      backgroundColor: theme.text.warning,
      borderRadius: '5px',
      textTransform: 'capitalize',
      fontSize: '13px',
      position: 'absolute',
      color: theme.surface.body,
      top: '-13px',
    }}
    >
      In Progress
    </Box>
  )
}

function IsSoldOutChip() {
  const theme = useTheme()

  return (
    <Box sx={{
      width: 'fit-content',
      px: '10px',
      py: '3px',
      backgroundColor: theme.text.error,
      borderRadius: '5px',
      textTransform: 'capitalize',
      fontSize: '13px',
      position: 'absolute',
      color: theme.text.primary,
      top: '-13px',
    }}
    >
      Sold Out
    </Box>
  )
}

function CollectibleCard({
  collectible, claimStatus, onClick = () => {},
} : Props) {
  const theme = useTheme()

  const isInProgress = claimStatus === ClaimStatus.IN_PROGRESS
  const isExpired = collectible.status !== CollectibleStatus.LIVE
  const isSoldOut = isSoldOutUtil(collectible)
  const isAvailable = !claimStatus && !isExpired && !isSoldOut

  return (
    <Card
      onClick={() => onClick(collectible)}
      key={collectible.id}
    >
      <StyledCardMedia
        isAvailable={isAvailable}
        isExpired={isExpired}
        isSoldOut={isSoldOut}
        image={collectible.assets.cardMedia.defaultMedia.src1x}
        title={`collectible image for ${collectible.title}`}
      />
      <CardContentStyled sx={{ background: theme.surface.paperLight }}>
        {
          isInProgress
            && <InProgressChip />
        }
        {
          isSoldOut
            && <IsSoldOutChip />
        }
        {
          isAvailable && (
            <TypographyOverline variant="overline">
              Available
            </TypographyOverline>
          )
        }
        {
          isExpired && (
            <TypographyOverline variant="overline" sx={{ color: theme.text.disabled }}>
              Expired
            </TypographyOverline>
          )
        }
        <Typography align="left" sx={{ fontSize: '12px', fontWeight: 700, color: isExpired ? theme.text.disabled : 'inherit' }}>
          {collectible.title}
        </Typography>
      </CardContentStyled>
    </Card>
  )
}

export default CollectibleCard
