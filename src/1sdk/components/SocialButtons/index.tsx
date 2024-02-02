import styled from 'styled-components'
import Amazon from './Amazon'
import Google from './Google'
import Twitter from './Twitter'
import Discord from './Discord'

type Props = {
  className?: string
}

const SocialButtons = styled(({ className }: Props) => (
  <div className={className}>
    <Amazon />
    <Google />
    <Twitter />
    <Discord />
  </div>
))`
  display: flex;
  gap: 8px;
`

export default SocialButtons
