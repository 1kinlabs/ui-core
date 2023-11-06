import { ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import { styled } from 'theme'
import { Typography } from '@mui/material'
import { classNames } from 'utils/classNames'

const ItemGridContainer = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
`

const ItemsContainer = styled(Grid)`
  && {
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    gap: 24px;
    .compact {
      gap: 4px;
    }
  }
`

type Props = {
    children: ReactElement[],
    title?: string,
    compact?: boolean,
    className?: string
}

const ItemGrid = styled(({
  children, title, compact, className,
} : Props) => (
  <ItemGridContainer className={classNames(className, { compact })} container spacing={6}>
    {
        title && (
          <Typography variant="h5">
            {title}
          </Typography>
        )
      }
    <ItemsContainer className={classNames({ compact })} item xs={12}>
      {children}
    </ItemsContainer>
  </ItemGridContainer>
))`
  gap: 24px;
  padding: 24px;
  .compact {
    gap: 4px;
    padding: 8px
  }
`

export default ItemGrid
