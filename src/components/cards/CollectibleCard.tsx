import BaseCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia, { CardMediaProps } from '@mui/material/CardMedia'

import BaseChip, { TypeKey } from 'atoms/Chip'
import Typography from '@mui/material/Typography'
import { useTheme, styled } from 'theme'
import { Collectible } from 'types/Collectible'
import { CollectibleStatus } from 'enums/CollectibleStatus'
import { ClaimStatus } from 'enums/ClaimStatus'
import { isSoldOut as isSoldOutUtil } from 'utils/collectible'

type CardProps = {
  inProgress: boolean
}

const Card = styled(BaseCard)<CardProps>`

  ${({ inProgress, theme }) => inProgress && `border: 2px solid ${theme.border.warning}`};

  &:focus, &:active {
    border: 5px solid ${({ theme }) => theme.border.primary.active};
  }
`

const TypographyOverline = styled(Typography)`
  line-height: 1.5;
`

const CardContentStyled = styled(CardContent)`
  background: ${({ theme }) => theme.surface.paperLight};
  position: relative;
`

const Chip = styled(BaseChip)`
  position: absolute;
  top: -13px;
`

type ExtendedCardMediaProps = CardMediaProps & {
  isAvailable?: boolean
  isExpired?: boolean
  isSoldOut?: boolean
}

const StyledCardMedia = styled(CardMedia)<ExtendedCardMediaProps>`
  filter: ${({ isAvailable, isExpired, isSoldOut }) => {
    if (isAvailable || isSoldOut) {
      return 'grayscale(75%) brightness(70%)'
    }
    if (isExpired) {
      return 'grayscale(100%) brightness(20%) contrast(130%)'
    }
    return 'none'
  }};
  height: 140px;
`

function ConditionalChip({ inProgress, isSoldOut } : { inProgress: boolean, isSoldOut: boolean}) {
  if (inProgress) return <Chip type={TypeKey.IN_PROGRESS} />

  if (isSoldOut) return <Chip type={TypeKey.SOLD_OUT} />

  return null
}

function ConditionalTitle({ isAvailable, isExpired }
  : { isAvailable: boolean, isExpired: boolean}) {
  const theme = useTheme()

  if (isAvailable) {
    return (
      <TypographyOverline variant="overline">
        Available
      </TypographyOverline>
    )
  }

  if (isExpired) {
    return (
      <TypographyOverline variant="overline" sx={{ color: theme.text.disabled }}>
        Expired
      </TypographyOverline>
    )
  }

  return (
    <TypographyOverline variant="overline">
      &nbsp;
    </TypographyOverline>
  )
}

export type Props = {
  collectible: Collectible,
  claimStatus?: ClaimStatus
  onClick?: (event: Collectible) => void,
}

function CollectibleCard({
  collectible, claimStatus, onClick = () => {},
} : Props) {
  const theme = useTheme()

  const inProgress = claimStatus === ClaimStatus.IN_PROGRESS
  const isExpired = collectible.status !== CollectibleStatus.LIVE
  const isSoldOut = isSoldOutUtil(collectible)
  const isAvailable = !claimStatus && !isExpired && !isSoldOut

  return (
    <Card
      tabIndex={0}
      onClick={() => onClick(collectible)}
      key={collectible.id}
      inProgress={inProgress}
    >
      <StyledCardMedia
        isAvailable={isAvailable}
        isExpired={isExpired}
        isSoldOut={isSoldOut}
        image={collectible.assets.cardMedia.defaultMedia.src1x}
        title={`collectible image for ${collectible.title}`}
      />
      <CardContentStyled>
        <ConditionalChip isSoldOut={isSoldOut} inProgress={inProgress} />
        <ConditionalTitle isAvailable={isAvailable} isExpired={isExpired} />
        <Typography align="left" sx={{ fontSize: '12px', fontWeight: 700, color: isExpired ? theme.text.disabled : 'inherit' }}>
          {collectible.title}
        </Typography>
      </CardContentStyled>
    </Card>
  )
}

export default CollectibleCard
