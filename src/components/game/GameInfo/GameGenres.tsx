import { Genre } from 'enums/Game'
import styled from 'styled-components'
import GridCell from './GridCell'

type Props = {
    genres: Genre[],
    className?: string
}

const GameGenres = styled(({ genres, className } : Props) => (
  <GridCell title="Game Genres" className={className}>
    {genres.join(', ')}
  </GridCell>
))`
  grid-area: genres;
`

export default GameGenres
