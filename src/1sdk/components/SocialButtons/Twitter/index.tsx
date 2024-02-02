import styled from 'styled-components'
import Button from '../BaseButton'
import TwitterIcon from './Icon'

type Props = {
  className?: string
}

const loginWithTwitter = () => {
  console.log('login with Twitter')
}

const Twitter = styled(({ className }: Props) => (
  <Button className={className} onClick={loginWithTwitter}>
    <TwitterIcon />
  </Button>
))`
&&& {
  background-color: ${({ theme }) => theme.brand.twitter};
  &:hover {
    background-color: ${({ theme }) => theme.brand.twitter};
  }
}
`

export default Twitter
