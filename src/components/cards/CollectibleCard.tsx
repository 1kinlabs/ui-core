import BaseCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia, { CardMediaProps } from '@mui/material/CardMedia'

import BaseChip, { TypeKey } from 'atoms/Chip'
import Typography from '@mui/material/Typography'
import { styled, Theme } from 'theme'
import { Collectible } from 'types/Collectible'
import { CollectibleStatus } from 'enums/CollectibleStatus'
import { ClaimStatus } from 'enums/ClaimStatus'
import { isSoldOut as isSoldOutUtil } from 'utils/collectible'
import { keyframes, css } from 'styled-components'

type CardProps = {
  inProgress: boolean,
  isAvailable: boolean
}

const pulseGlow = ({ theme } : { theme: Theme }) => keyframes`
  0% {
    box-shadow: 0 0 15px ${theme.surface.paper};
  }
  50% {
    box-shadow: 0 0 25px ${theme.action.selected};
  }
  100% {
    box-shadow: 0 0 15px ${theme.surface.paper};
  }
`

const Card = styled(BaseCard)<CardProps>`
  && {
    animation: ${({ isAvailable }) => (isAvailable ? css`${pulseGlow} ease-in-out 5s infinite` : 'none')};

    box-sizing: border-box;
    width: 200px;
    ${({ inProgress, theme }) => inProgress && `border: 2px solid ${theme.border.warning}`};

    &:focus, &:active {
      animation: none;
      box-shadow: 0 0 0 5px ${({ theme }) => theme.action.selected};
      transition: box-shadow 0.3s ease;
      transform: scale(1.04);
    }
  }
`

const TypographyOverline = styled(Typography)`
  && {
    line-height: 1.5;
  }
`

type CardContentStyledProps = {
  isExpired: boolean,
}

const CardContentStyled = styled(CardContent)<CardContentStyledProps>`
  && {
    height: 100%;
    background: ${({ theme, isExpired }) => (isExpired ? theme.surface.paper : theme.surface.paperLight)};
    position: relative;
    padding: 20px 16px 16px 16px;
  }
`

const Chip = styled(BaseChip)`
  position: absolute;
  top: -20px;
`

type ExtendedCardMediaProps = CardMediaProps & {
  isAvailable?: boolean
  isExpired?: boolean
  isSoldOut?: boolean
  isClaimCompleted?: boolean
}

const StyledCardMedia = styled(CardMedia)<ExtendedCardMediaProps>`
  filter: ${({
    isAvailable, isExpired, isSoldOut, isClaimCompleted,
  }) => {
    if (isClaimCompleted) {
      return 'none'
    }

    if (isAvailable || isSoldOut) {
      return 'grayscale(75%)'
    }
    if (isExpired) {
      return 'grayscale(100%) brightness(75%) contrast(130%)'
    }
    return 'none'
  }};
  height: 140px;
`

function ConditionalChip({ inProgress, isSoldOut, isClaimCompleted } :
  { inProgress: boolean, isSoldOut: boolean, isClaimCompleted: boolean }) {
  if (isClaimCompleted) return null

  if (inProgress) return <Chip type={TypeKey.IN_PROGRESS} />

  if (isSoldOut) return <Chip type={TypeKey.SOLD_OUT} />

  return null
}

function ConditionalTitle({ isAvailable, isExpired }
  : { isAvailable: boolean, isExpired: boolean}) {
  if (isAvailable) {
    return (
      <TypographyOverline variant="overline">
        Available
      </TypographyOverline>
    )
  }

  if (isExpired) {
    return (
      <TypographyOverline variant="overline">
        Expired
      </TypographyOverline>
    )
  }

  return null
}

export type Props = {
  collectible: Collectible,
  claimStatus?: ClaimStatus
  onClick?: (event: Collectible) => void,
}

function CollectibleCard({
  collectible, claimStatus, onClick = () => {},
} : Props) {
  const isClaimCompleted = claimStatus === ClaimStatus.COMPLETED
  const inProgress = claimStatus === ClaimStatus.IN_PROGRESS
  const isExpired = collectible.status !== CollectibleStatus.LIVE
  const isSoldOut = isSoldOutUtil(collectible)
  const isAvailable = !claimStatus && !isExpired && !isSoldOut

  return (
    <Card
      tabIndex={0}
      onClick={() => onClick(collectible)}
      inProgress={inProgress}
      isAvailable={isAvailable}
    >
      <StyledCardMedia
        isClaimCompleted={isClaimCompleted}
        isAvailable={isAvailable}
        isExpired={isExpired}
        isSoldOut={isSoldOut}
        image={collectible.assets.cardMedia.defaultMedia.src1x}
        title={`collectible image for ${collectible.title}`}
      />
      <CardContentStyled isExpired={isExpired}>
        <ConditionalChip
          isSoldOut={isSoldOut}
          inProgress={inProgress}
          isClaimCompleted={isClaimCompleted}
        />
        <ConditionalTitle isAvailable={isAvailable} isExpired={isExpired} />
        <Typography align="left" sx={{ fontSize: '12px', fontWeight: 700 }}>
          {collectible.title}
        </Typography>
      </CardContentStyled>
    </Card>
  )
}

export default CollectibleCard
