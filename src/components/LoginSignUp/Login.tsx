import styled from 'styled-components'
import { Typography as T } from '@mui/material'
import Button from 'atoms/Button'
import Container from './Container'
import Footer from './Footer'

const ResetButton = styled(Button)`
  &&& {
    text-transform: none;
  }
`

type Props = {
  className?: string
  onLogin: () => void
  onSignUp: () => void
  onReset: () => void
}

const Login = styled(({
  className, onLogin, onSignUp, onReset,
}: Props) => (
  <Container className={className}>
    <Button variant="outlined" color="primary" fullWidth onClick={onLogin}>
      {'Login'}
    </Button>
    <Button variant="text" color="primary" fullWidth onClick={onSignUp}>
      {'Create an Account'}
    </Button>
    <Footer>
      <T variant="body2">
        {'Having trouble logging in? '}
      </T>
      <ResetButton variant="text" onClick={onReset}>
        {'Reset Password'}
      </ResetButton>
    </Footer>
  </Container>
))`
`

export default Login
