import styled from 'styled-components'
import GridCell from './GridCell'

type Props = {
  age: number,
  className?: string
}

const AgeRating = styled(({ age, className } : Props) => (
  <GridCell title="Age Rating" className={className}>
    {`${age}+`}
  </GridCell>
))`
  grid-area: age;
`

export default AgeRating
