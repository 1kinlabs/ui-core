import { ReactElement } from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'

type Props = {
  title: string,
  children: string | ReactElement | ReactElement[]
  className?: string
}

const GridCell = styled(({
  title, children, className,
} : Props) => (
  <div className={className}>
    <Typography variant="body2">
      {title}
    </Typography>
    <Typography variant="body2" fontWeight={600}>
      {children}
    </Typography>
  </div>
))`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export default GridCell
