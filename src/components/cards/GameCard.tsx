import LinearProgress from '@mui/material/LinearProgress'
import BaseCard from '@mui/material/Card'
import BaseCardMedia from '@mui/material/CardMedia'
import BaseCardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import BasePaper from '@mui/material/Paper'
import { styled } from 'theme'
import { Game } from 'types/Game'
import { StarCoin } from 'icons/StarCoin'
import { IconSize } from 'enums/IconSize'
import { calculateProgressPercentage } from 'utils/calculate-progress-percentage'

const StyledCard = styled(BaseCard)`
  box-sizing: border-box;
  width: 310px;

  &:focus, &:active {
    animation: none;
      box-shadow: 0 0 0 5px ${({ theme }) => theme.action.selected};
      transition: box-shadow 0.3s ease;
      transform: scale(1.04);
  }
`

const StyledCardMedia = styled(BaseCardMedia)`
  height: 140px;
`

const CardContentStyled = styled(BaseCardContent)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${({ theme }) => theme.surface.paper};
`

const TotalContentContainer = styled(BasePaper)`
  && {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.surface.body};
    padding: 12px;
    border-radius: 10px;
    gap: 8px;
  }
`

const AvailableContentContainer = styled(BasePaper)`
  && {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.surface.body};
    padding: 12px;
    border-radius: 10px;
    gap: 8px;
  }
`

const AvailableNowContainer = styled.div`
  display: flex;
  gap: 8px;
`

export type Props = {
  game: Game,
  onClick?: (event: Game) => void,
}

function GameCard({ game, onClick = () => {} }: Props) {
  return (
    <StyledCard tabIndex={0} key={game.id} onClick={() => onClick(game)}>
      <StyledCardMedia
        image={game.cover_art?.defaultMedia?.src1x}
        title={`game image for ${game.title}`}
      />
      <CardContentStyled>
        <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: 700 }}>
          {game.title}
        </Typography>
        <TotalContentContainer elevation={3}>
          <StarCoin size={IconSize.M} />
          <Typography variant="body1">
            { `Total Content Claimed: ${game.claims.totalContent}`}
          </Typography>
        </TotalContentContainer>
        <AvailableContentContainer elevation={3}>
          <AvailableNowContainer>
            <Typography variant="body1">
              {'Available Now:'}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              {Math.max(game.liveContent - game.claims.liveContent, 0)}
            </Typography>
          </AvailableNowContainer>
          <LinearProgress variant="determinate" value={calculateProgressPercentage(game.claims.liveContent, game.liveContent)} />
        </AvailableContentContainer>
      </CardContentStyled>
    </StyledCard>
  )
}

export default GameCard
