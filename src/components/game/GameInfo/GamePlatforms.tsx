import { Platform } from 'enums/Game'
import styled from 'styled-components'
import GridCell from './GridCell'
import Platforms from '../Platforms'

type Props = {
  platforms: Platform[],
  className?: string
}

const GamePlatforms = styled(({ platforms, className } : Props) => (
  <GridCell title="Game Platforms" className={className}>
    <Platforms platforms={platforms} compact />
  </GridCell>
))`
  grid-area: platforms;
`

export default GamePlatforms
