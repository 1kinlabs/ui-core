import styled from 'styled-components'
import Button from 'atoms/Button'
import Container from './Container'

type Props = {
  className?: string
  onLogin: () => void
  onSignUp: () => void
}

const Login = styled(({ className, onLogin, onSignUp }: Props) => (
  <Container className={className}>
    <Button variant="outlined" color="primary" fullWidth onClick={onLogin}>
      {'Login'}
    </Button>
    <Button variant="text" color="primary" fullWidth onClick={onSignUp}>
      {'Create an Account'}
    </Button>
  </Container>
))`
`

export default Login
