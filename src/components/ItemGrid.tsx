import { ReactElement } from 'react'
import { styled } from 'theme'
import { Typography } from '@mui/material'
import { classNames } from 'utils/classNames'

const ItemGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ItemsContainer = styled.div`
  && {
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    gap: 24px;
    &.compact {
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
  <ItemGridContainer className={classNames(className, { compact })}>
    {
        title && (
          <Typography variant="h5">
            {title}
          </Typography>
        )
      }
    <ItemsContainer className={classNames({ compact })}>
      {children}
    </ItemsContainer>
  </ItemGridContainer>
))`
  gap: 24px;
  &.compact {
    gap: 4px;
  }
`

export default ItemGrid
