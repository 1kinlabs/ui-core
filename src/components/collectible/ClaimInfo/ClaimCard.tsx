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
import ClaimProgress from '../ClaimProgress'

type Props = {
  className?: string
  collectible: Collectible
  game: Game
  addToCollection: (collectible: Collectible) => void
}

const ClaimCard = styled(({
  className,
  collectible,
  game,
  addToCollection,
}: Props) => (
  <Card className={className}>
    <CardContent>
      <Typography variant="h6" component="h1">{game.title || 'Unknown Game'}</Typography>
      <Divider />

      <Typography variant="h4" component="h2">{collectible.title || 'Unknown Item'}</Typography>
      {collectible.short_description && (
        <Typography variant="body2">{collectible.short_description}</Typography>
      )}

      <ClaimProgress collectible={collectible} />
      <Button variant="contained" onClick={() => addToCollection(collectible)}>{'Add to My Collection'}</Button>
    </CardContent>
  </Card>
))`
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
`

export default ClaimCard
