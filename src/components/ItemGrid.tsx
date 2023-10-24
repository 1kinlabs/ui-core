import { ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import CollectibleCard from './cards/CollectibleCard'
import GameCard from './cards/GameCard'

const ItemGridContainer = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
  @media (max-width: 525px) {
    justify-content: space-around;
  }
`

type AllowedCardElement = ReactElement<typeof CollectibleCard> | ReactElement<typeof GameCard>

type Props = {
    children: AllowedCardElement[]
}

function ItemGrid({ children } : Props) {
  return (
    <ItemGridContainer container spacing={6}>
      <ItemGridContainer item xs={12}>
        {children}
      </ItemGridContainer>
    </ItemGridContainer>
  )
}

export default ItemGrid
