import { useState } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardContent,
  Divider,
  Typography,
  TypographyProps,
} from '@mui/material'
import { Collectible } from 'types/Collectible'
import { Game } from 'types/Game'

import { container } from 'css/media'
import Button from 'atoms/Button'
import Chip from 'atoms/Chip'
import { ClaimStatus } from 'enums/ClaimStatus'
import { EndUser } from 'types/EndUser'
import { SubscriptionType } from 'types/Subscription'
import ClaimProgress from '../ClaimProgress'

export type OnAddToCollection = (collectible: Collectible,
  setIsLoading: (isLoading: boolean) => void) => Promise<void>

type Props = {
  className?: string,
  collectible: Collectible,
  game: Game,
  user: EndUser | null,
  onAddToCollection: OnAddToCollection
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  gap: 16px;
`

const GameTitle = styled(Typography)<TypographyProps>`
  max-width: 215px;
  color: ${({ theme }) => theme.text.secondary};

  ${container.tablet} {
    max-width: none;
  }
`

const CreditsAvailable = styled.div``

const ClaimCard = styled(({
  className,
  collectible,
  game,
  user,
  onAddToCollection,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const isAvailableOrSoldOut = collectible.claimStatus === ClaimStatus.AVAILABLE
    || collectible.claimStatus === ClaimStatus.SOLD_OUT
  const isUserUnlimited = user?.subscription?.type === SubscriptionType.UNLIMITED
  const availableCredits = isUserUnlimited ? '∞' : user?.availableCredits ?? 0

  return (
    <Card className={className}>
      <CardContent>
        <Header>
          <GameTitle variant="h6" component="h1">{game.title || 'Unknown Game'}</GameTitle>
          <Chip outline type={collectible.claimStatus} />
        </Header>
        <Divider />

        <Typography variant="h4" component="h2">{collectible.title || 'Unknown Item'}</Typography>
        {collectible.short_description && (
          <Typography variant="body2">{collectible.short_description}</Typography>
        )}
        {
          isAvailableOrSoldOut && <ClaimProgress collectible={collectible} />
        }
        {
          isAvailableOrSoldOut
          && (
            <Button
              variant="contained"
              onClick={() => onAddToCollection(collectible, setIsLoading)}
              disabled={isLoading || collectible.claimStatus === ClaimStatus.SOLD_OUT}
            >
              {user ? 'Claim for 1 credit' : 'Add to My Collection'}
            </Button>
          )
        }
        {
          user && isAvailableOrSoldOut && (
            <CreditsAvailable>
              <Typography variant="overline" fontWeight={600}>
                {'Credits available: '}
              </Typography>
              <Typography variant="overline" fontWeight={600} fontSize={isUserUnlimited ? '20px' : undefined}>
                {availableCredits}
              </Typography>
            </CreditsAvailable>
          )
        }
      </CardContent>
    </Card>
  )
})`
  && {
    position: absolute;
    top: 50%;
    left: 48px;
    transform: translate(0, -50%);
    background-color: ${({ theme }) => theme.surface.paperAlpha};
    backdrop-filter: blur(10px);

    ${container.tablet} {
      position: static;
      transform: none;
      background-color: ${({ theme }) => theme.surface.paper};
    }

    h2 {
      margin-top: 8px;
    }

    button {
      width: 100%;
    }

    ${ClaimProgress} {
      margin: 24px 0;
    }

    ${CreditsAvailable} {
      margin-top: 8px;
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      gap: 4px;
    }
  }
`

export default ClaimCard
