import styled from 'styled-components'
import GridCell from './GridCell'

type Props = {
  developer: string,
  className?: string
}

const InitialReleaseDate = styled(({ developer, className } : Props) => (
  <GridCell title="Developer" className={className}>
    {developer}
  </GridCell>
))`
  grid-area: developer;
`

export default InitialReleaseDate
