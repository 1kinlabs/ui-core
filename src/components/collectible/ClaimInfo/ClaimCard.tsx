import styled from 'styled-components'
import {
  Card,
  CardContent,
  Button,
  Divider,
  Typography,
} from '@mui/material'
import { Collectible } from 'types/Collectible'
import { Game } from 'types/Game'

import { container } from 'css/media'
import Chip from 'atoms/Chip'
import ClaimProgress from '../ClaimProgress'

type Props = {
  className?: string
  collectible: Collectible
  game: Game
  onAddToCollection: (collectible: Collectible) => void
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

const ClaimCard = styled(({
  className,
  collectible,
  game,
  onAddToCollection,
}: Props) => (
  <Card className={className}>
    <CardContent>
      <Header>
        <Typography variant="h6" component="h1">{game.title || 'Unknown Game'}</Typography>
        <Chip outline type={collectible.claimStatus} />
      </Header>
      <Divider />

      <Typography variant="h4" component="h2">{collectible.title || 'Unknown Item'}</Typography>
      {collectible.short_description && (
        <Typography variant="body2">{collectible.short_description}</Typography>
      )}

      <ClaimProgress collectible={collectible} />
      <Button variant="contained" onClick={() => onAddToCollection(collectible)}>{'Add to My Collection'}</Button>
    </CardContent>
  </Card>
))`
  && {
    position: absolute;
    top: 50%;
    left: 48px;
    transform: translate(0, -50%);
    background-color: ${({ theme }) => theme.surface.paperAlpha};
    backdrop-filter: blur(10px);

    ${container.mobile} {
      position: static;
      transform: none;
      background-color: ${({ theme }) => theme.surface.paper};
    }

    h1 {
      color: ${({ theme }) => theme.text.secondary};
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
  }
`

export default ClaimCard
