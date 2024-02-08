import { useState } from 'react'
import styled from 'styled-components'
import { Typography as T } from '@mui/material'
import Button from 'atoms/Button'
import { useAuth } from '1sdk/context/AuthContext'
import TextField from 'atoms/TextField'
import PasswordField from 'atoms/PasswordField'
import Container from './Container'
import Footer from './Footer'

const ResetButton = styled(Button)`
  &&& {
    text-transform: none;
  }
`

type Props = {
  className?: string
  onSignUp: () => void
  onForgot: () => void
}

const Login = styled(({
  className, onSignUp, onForgot,
}: Props) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { loginByEmail } = useAuth()

  const onLogin = async () => {
    await loginByEmail(email, password)
  }

  return (
    <Container className={className}>
      <TextField fullWidth label="Email" onChange={setEmail} />
      <PasswordField onChange={setPassword} />
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
        <ResetButton variant="text" onClick={onForgot}>
          {'Reset Password'}
        </ResetButton>
      </Footer>
    </Container>
  )
})``

export default Login
