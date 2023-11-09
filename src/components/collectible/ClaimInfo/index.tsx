import styled from 'styled-components'
import { Collectible } from 'types/Collectible'
import { Game } from 'types/Game'
import ClaimCard from './ClaimCard'
import CollectibleImage from './CollectibleImage'

type Props = {
  className?: string
  collectible: Collectible
  game: Game
  addToCollection: (collectible: Collectible) => void
}

const ClaimInfo = styled(({
  className,
  collectible,
  game,
  addToCollection,
}: Props) => (
  <div className={className}>
    <CollectibleImage collectible={collectible} />
    <ClaimCard collectible={collectible} game={game} addToCollection={addToCollection} />
  </div>
))`
`

export default ClaimInfo
