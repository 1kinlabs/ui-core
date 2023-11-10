import { ReactElement } from 'react'
import { styled } from 'theme'
import { Typography } from '@mui/material'
import { classNames } from 'utils/classNames'

const ItemsContainer = styled.div`
  && {
    width: 100%;
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
  <div className={classNames(className, { compact })}>
    {
      title && (
        <Typography variant="h6">
          {title}
        </Typography>
      )
    }
    <ItemsContainer className={classNames({ compact })}>
      {children}
    </ItemsContainer>
  </div>
))`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 24px;
  &.compact {
    gap: 4px;
  }
`

export default ItemGrid
