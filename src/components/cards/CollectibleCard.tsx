import BaseCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia, { CardMediaProps } from '@mui/material/CardMedia'

import BaseChip, { TypeKey } from 'atoms/Chip'
import Typography from '@mui/material/Typography'
import { styled, Theme } from 'theme'
import { Collectible } from 'types/Collectible'
import { ClaimStatus } from 'enums/ClaimStatus'
import { keyframes, css } from 'styled-components'

type CardProps = {
  claimStatus: ClaimStatus
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
    animation: ${({ claimStatus }) => (claimStatus === ClaimStatus.AVAILABLE ? css`${pulseGlow} ease-in-out 5s infinite` : 'none')};

    box-sizing: border-box;
    width: 200px;
    ${({ claimStatus, theme }) => claimStatus === ClaimStatus.IN_PROGRESS && `border: 2px solid ${theme.border.warning}`};

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
  claimStatus: ClaimStatus,
}

const CardContentStyled = styled(CardContent)<CardContentStyledProps>`
  && {
    height: 100%;
    background: ${({ theme, claimStatus }) => (claimStatus === ClaimStatus.EXPIRED ? theme.surface.paper : theme.surface.paperLight)};
    position: relative;
    padding: 20px 16px 16px 16px;
  }
`

const Chip = styled(BaseChip)`
  position: absolute;
  top: -20px;
`

type ExtendedCardMediaProps = CardMediaProps & {
  claimStatus: ClaimStatus
}

const StyledCardMedia = styled(CardMedia)<ExtendedCardMediaProps>`
  filter: ${({
    claimStatus,
  }) => {
    if (claimStatus === ClaimStatus.COMPLETED) {
      return 'none'
    }

    if (claimStatus === ClaimStatus.AVAILABLE || claimStatus === ClaimStatus.SOLD_OUT) {
      return 'grayscale(75%)'
    }
    if (claimStatus === ClaimStatus.EXPIRED) {
      return 'grayscale(100%) brightness(75%) contrast(130%)'
    }
    return 'none'
  }};
  height: 140px;
`

function ConditionalChip({ claimStatus } :
  { claimStatus : ClaimStatus }) {
  if (claimStatus === ClaimStatus.COMPLETED) return null

  if (claimStatus === ClaimStatus.IN_PROGRESS) return <Chip type={TypeKey.IN_PROGRESS} />

  if (claimStatus === ClaimStatus.SOLD_OUT) return <Chip type={TypeKey.SOLD_OUT} />

  return null
}

function ConditionalTitle({ claimStatus }
  : { claimStatus: ClaimStatus }) {
  if (claimStatus === ClaimStatus.AVAILABLE) {
    return (
      <TypographyOverline variant="overline">
        Available
      </TypographyOverline>
    )
  }

  if (claimStatus === ClaimStatus.EXPIRED) {
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
  onClick?: (event: Collectible) => void,
}

function CollectibleCard({
  collectible, onClick = () => {},
} : Props) {
  return (
    <Card
      tabIndex={0}
      onClick={() => onClick(collectible)}
      claimStatus={collectible.claimStatus}
    >
      <StyledCardMedia
        claimStatus={collectible.claimStatus}
        image={collectible.assets.cardMedia.defaultMedia.src1x}
        title={`collectible image for ${collectible.title}`}
      />
      <CardContentStyled claimStatus={collectible.claimStatus}>
        <ConditionalChip
          claimStatus={collectible.claimStatus}
        />
        <ConditionalTitle claimStatus={collectible.claimStatus} />
        <Typography align="left" sx={{ fontSize: '12px', fontWeight: 700 }}>
          {collectible.title}
        </Typography>
      </CardContentStyled>
    </Card>
  )
}

export default CollectibleCard
