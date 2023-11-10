import styled from 'styled-components'
import { Collectible } from 'types/Collectible'
import { Game } from 'types/Game'
import ClaimCard from './ClaimCard'
import CollectibleImage from './CollectibleImage'

export type Props = {
  className?: string
  collectible: Collectible
  game: Game
  onAddToCollection: (collectible: Collectible) => void
}

const ClaimInfo = styled(({
  className,
  collectible,
  game,
  onAddToCollection,
}: Props) => (
  <div className={className}>
    <CollectibleImage collectible={collectible} />
    <ClaimCard collectible={collectible} game={game} onAddToCollection={onAddToCollection} />
  </div>
))`
  position: relative;
  container: claim-info / inline-size;
  width: 100%;
`

export default ClaimInfo
