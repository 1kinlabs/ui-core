import styled from 'styled-components'
import { format } from 'formatters/date'
import GridCell from './GridCell'

type Props = {
    date: string,
    className?: string
}

const InitialReleaseDate = styled(({ date, className } : Props) => (
  <GridCell title="Initial Release Date" className={className}>
    {format(date)}
  </GridCell>
))`
  grid-area: release-date;
`

export default InitialReleaseDate
