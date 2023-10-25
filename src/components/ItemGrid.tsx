import { ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { mobileSmall } from 'css/media'
import CollectibleCard from './cards/CollectibleCard'
import GameCard from './cards/GameCard'

const ItemGridContainer = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
  ${mobileSmall} {
    justify-content: space-around;
  }
`

const ItemsContainer = styled(Grid)`
  && {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding: 0;
    ${mobileSmall} {
      justify-content: space-around;
    }
  }
`

type AllowedCardElement = ReactElement<typeof CollectibleCard> | ReactElement<typeof GameCard>

type Props = {
    children: AllowedCardElement[],
    title?: string
}

function ItemGrid({ children, title } : Props) {
  return (
    <ItemGridContainer container spacing={6}>
      {
        title && (
          <Typography variant="h5">
            {title}
          </Typography>
        )
      }
      <ItemsContainer item xs={12}>
        {children}
      </ItemsContainer>
    </ItemGridContainer>
  )
}

export default ItemGrid
