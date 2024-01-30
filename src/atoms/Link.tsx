import BaseLink from 'next/link'
import { styled } from 'theme'

const Link = styled(BaseLink)`
  color: ${({ theme }) => theme.text.link};
`

export default Link
