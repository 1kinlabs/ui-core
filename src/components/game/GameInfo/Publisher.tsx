import styled from 'styled-components'
import GridCell from './GridCell'

type Props = {
  publisher: string,
  className?: string
}

const Publisher = styled(({ publisher, className } : Props) => (
  <GridCell title="Publisher" className={className}>
    {publisher}
  </GridCell>
))`
  grid-area: publisher;
`

export default Publisher
