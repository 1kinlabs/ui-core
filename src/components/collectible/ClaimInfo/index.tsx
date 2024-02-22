import styled from 'styled-components'
import { Collectible } from 'types/Collectible'
import { Game } from 'types/Game'
import { EndUser } from 'types/EndUser'
import ClaimCard, { OnAddToCollection } from './ClaimCard'
import CollectibleImage from './CollectibleImage'

export type Props = {
  className?: string
  collectible: Collectible
  game: Game
  user: EndUser | null
  onAddToCollection: OnAddToCollection
}

const ClaimInfo = styled(({
  className,
  collectible,
  game,
  user,
  onAddToCollection,
}: Props) => (
  <div className={className}>
    <CollectibleImage collectible={collectible} />
    <ClaimCard
      user={user}
      collectible={collectible}
      game={game}
      onAddToCollection={onAddToCollection}
    />
  </div>
))`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  container: claim-info / inline-size;
  width: 100%;
`

export default ClaimInfo
