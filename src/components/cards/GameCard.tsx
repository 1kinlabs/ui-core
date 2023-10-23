import LinearProgress from '@mui/material/LinearProgress'
import BaseCard from '@mui/material/Card'
import BaseCardMedia from '@mui/material/CardMedia'
import BaseCardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import BasePaper from '@mui/material/Paper'
import { styled } from 'theme'
import { Game } from 'types/Game'
import { CollectibleTotal as CollectibleTotalIcon } from 'svg/CollectibleTotal'
import { IconSize } from 'enums/IconSize'

const StyledCard = styled(BaseCard)`
  box-sizing: content-box;
  width: 300px;

  &:focus, &:active {
    border: 5px solid ${({ theme }) => theme.border.primary.active};
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
  game: Game
}

function GameCard({ game }: Props) {
  return (
    <StyledCard tabIndex={0} key={game.id}>
      <StyledCardMedia
        image={game.cover_art.defaultMedia.src1x}
        title={`game image for ${game.title}`}
      />
      <CardContentStyled>
        <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: 700 }}>
          {game.title}
        </Typography>
        <TotalContentContainer elevation={3}>
          <CollectibleTotalIcon size={IconSize.M} />
          <Typography variant="body1">
            { `Total Content Claimed: ${game.claims.totalContent}`}
          </Typography>
        </TotalContentContainer>
        <AvailableContentContainer elevation={3}>
          <AvailableNowContainer>
            <Typography variant="body1">
              Available Now:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              {game.liveContent - game.claims.liveContent}
            </Typography>
          </AvailableNowContainer>

          <LinearProgress variant="determinate" value={Math.round((game.claims.liveContent / game.liveContent) * 100)} />
        </AvailableContentContainer>
      </CardContentStyled>
    </StyledCard>
  )
}

export default GameCard
