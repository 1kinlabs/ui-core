import styled from 'styled-components'
import { Link } from '@mui/material'
import GridCell from './GridCell'

type Props = {
    website: string,
    className?: string
}

const OfficialWebsite = styled(({ website, className } : Props) => (
  <GridCell title="Official Website" className={className}>
    <Link href={website}>{website}</Link>
  </GridCell>
))`
  grid-area: official-website;
`

export default OfficialWebsite
