import Section from 'atoms/Section'
import { Typography, Button } from '@mui/material'
import { Game } from 'types/Game'
import { styled } from 'theme'
import Platforms from './Platforms'

const StyledImg = styled.img`
    border-radius: 8px;
    height: 120px;
    object-fit: cover;
`

type Props = {
    game: Game,
    className?: string
}

const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const GameLauncher = styled(({ game, className } : Props) => (
  <Section className={className}>
    <GameInfoContainer>
      <Typography variant="h6">{game.title}</Typography>
      <StyledImg src={game.cover_art?.defaultMedia?.src1x} alt={`Cover image for ${game.title}`} />
      <Platforms platforms={game.platforms} compact small />
      {
          game.account_link_config?.linkingUrl && (
            <Button
              variant="outlined"
              target="blank"
              href={game?.account_link_config?.linkingUrl}
            >
              {'PLAY GAME'}
            </Button>
          )
        }

    </GameInfoContainer>
  </Section>
))``

export default GameLauncher
