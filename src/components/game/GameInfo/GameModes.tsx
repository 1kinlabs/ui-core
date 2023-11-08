import { GameMode } from 'enums/Game'
import styled from 'styled-components'
import GridCell from './GridCell'

type Props = {
  modes: GameMode[],
  className?: string
}

const GameModes = styled(({ modes, className } : Props) => (
  <GridCell title="Game Modes" className={className}>
    {modes.join(', ')}
  </GridCell>
))`
  grid-area: modes;
`

export default GameModes
