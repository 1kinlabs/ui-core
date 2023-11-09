import { Card, CardContent as BaseCardContent, Typography } from '@mui/material'
import { ReactElement } from 'react'
import { styled } from 'styled-components'

type Props = {
  children: string | ReactElement | ReactElement[],
  title?: string,
  className?: string
}

const CardContent = styled(BaseCardContent)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Section = styled(({ children, className, title } : Props) => (
  <Card>
    <CardContent>
      {
        title && (
          <Typography variant="h6" fontWeight={500}>
            {title}
          </Typography>
        )
      }
      <div className={className}>
        {children}
      </div>
    </CardContent>
  </Card>
))``

export default Section
