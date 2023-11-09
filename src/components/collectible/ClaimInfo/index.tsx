import styled from 'styled-components'
import { Collectible } from 'types/Collectible'
import { Game } from 'types/Game'
import ClaimCard from './ClaimCard'
import CollectibleImage from './CollectibleImage'

type Props = {
  className?: string
  collectible: Collectible
  game: Game
}

const ClaimInfo = styled(({ className, collectible, game }: Props) => (
  <div className={className}>
    <CollectibleImage collectible={collectible} />
    <ClaimCard collectible={collectible} game={game} />
  </div>
))`
`

export default ClaimInfo
