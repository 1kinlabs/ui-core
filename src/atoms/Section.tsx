import { Card, CardContent } from '@mui/material'
import { ReactElement } from 'react'
import { styled } from 'styled-components'

type Props = {
  children: string | ReactElement | ReactElement[],
  className?: string
}

const Section = styled(({ children, className } : Props) => (
  <Card>
    <CardContent className={className}>
      {children}
    </CardContent>
  </Card>
))``

export default Section
