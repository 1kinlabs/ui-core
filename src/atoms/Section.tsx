import { Card, CardContent } from '@mui/material'
import { ReactElement } from 'react'

type Props = {
    children: ReactElement
}

function Section({ children } : Props) {
  return (
    <Card>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

export default Section
