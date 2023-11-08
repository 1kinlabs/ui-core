import Section from 'atoms/Section'
import { Typography, Button } from '@mui/material'
import { Game } from 'types/Game'
import { styled } from 'theme'
import NextImage from 'next/image'
import Platforms from './Platforms'

const NextImageStyled = styled(NextImage)`
    border-radius: 8px;
`

type Props = {
    game: Game
}

const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

function GameLauncher({ game } : Props) {
  return (
    <Section>
      <GameInfoContainer>
        <Typography variant="h6">{game.title}</Typography>
        <NextImageStyled width={280} height={120} src={game.cover_art?.defaultMedia?.src1x} alt={`Cover image for ${game.title}`} />
        <Platforms platforms={game.platforms} compact small />
        {
          game.account_link_config?.linkingUrl && (
            <Button
              variant="outlined"
              target="blank"
              href={game?.account_link_config?.linkingUrl}
            >
              PLAY GAME
            </Button>
          )
        }

      </GameInfoContainer>
    </Section>
  )
}

export default GameLauncher
