import Section from 'atoms/Section'
import styled from 'styled-components'
import { Game } from 'types/Game'
import { mobileSmall } from 'css/media'
import AboutTheGame from './AboutTheGame'
import GameGenres from './GameGenres'
import GameModes from './GameModes'
import GamePlatforms from './GamePlatforms'
import InitialReleaseDate from './InitialReleaseDate'
import AgeRating from './AgeRating'
import Developer from './Developer'
import Publisher from './Publisher'
import OfficialWebsite from './OfficialWebsite'

type Props = {
  game: Game,
  className?: string
}

const GameInfo = styled(({ game, className } : Props) => (
  <Section className={className}>
    <AboutTheGame description={game.description} />
    <GameGenres genres={game.genres} />
    <GameModes modes={game.game_modes} />
    <GamePlatforms platforms={game.platforms} />
    <InitialReleaseDate date={game.release_date} />
    <AgeRating age={game.min_age} />
    <Developer developer={game.primary_developer} />
    <Publisher publisher={game.publisher} />
    <OfficialWebsite website={game.official_website} />
  </Section>
))`
    display: grid;
    gap: 16px 16px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "about about about"
      "genres modes platforms"
      "release-date age developer"
      "publisher official-website .";
    
    ${mobileSmall} {
      grid-template-columns: 1fr;
      grid-template-areas:
      "about"
      "genres"
      "modes"
      "platforms"
      "release-date"
      "age"
      "developer"
      "publisher"
      "official-website"
    }
`

export default GameInfo
