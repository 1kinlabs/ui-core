import { useState } from 'react'
import styled from 'styled-components'
import { Typography as T } from '@mui/material'
import Button from 'atoms/Button'
import { useAuth } from '1sdk/context/AuthContext'
import TextField from 'atoms/TextField'
import PasswordField from 'atoms/PasswordField'
import Form from './Form'
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
  const { loginByEmail, loginError, authErrorMessage } = useAuth()

  const valid = email.length > 0 && password.length > 0

  const onLogin = async () => {
    if (valid) {
      const loginSuccess = await loginByEmail(email, password)
      if (loginSuccess && window.location.pathname.startsWith('/login')) {
        window.location.href = '/'
      }
    }
  }

  return (
    <Form className={className} onSubmit={onLogin}>
      <TextField fullWidth label="Email" onChange={setEmail} />
      <PasswordField onChange={setPassword} />
      <div>
        {loginError && (
          <T color="error" variant="body2">
            {authErrorMessage}
          </T>
        )}
      </div>
      <Button variant="outlined" color="primary" fullWidth type="submit">
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
    </Form>
  )
})``

export default Login
