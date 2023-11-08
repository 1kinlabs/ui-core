import { Typography } from '@mui/material'
import styled from 'styled-components'

type Props = {
  description: string,
  className?: string
}

const AboutTheGame = styled(({ description, className } : Props) => (
  <div className={className}>
    <Typography variant="h6">
      {'About the Game'}
    </Typography>
    <Typography variant="body2">
      {description}
    </Typography>
  </div>
))`
    grid-area: about;
`

export default AboutTheGame
