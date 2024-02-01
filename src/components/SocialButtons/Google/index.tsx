import styled from 'styled-components'
import Button from '../BaseButton'
import GoogleIcon from './Icon'

type Props = {
  className?: string
}

const loginWithGoogle = () => {
  console.log('login with Google')
}

const Google = styled(({ className }: Props) => (
  <Button className={className} onClick={loginWithGoogle}>
    <GoogleIcon />
  </Button>
))`
&&& {
  background-color: ${({ theme }) => theme.brand.google};
  &:hover {
    background-color: ${({ theme }) => theme.brand.google};
  }
}
`

export default Google
