import { useState } from 'react'
import { styled } from 'theme'
import { Typography as T, Divider as BaseDivider } from '@mui/material'
import Logo from 'components/Logo'
import TextField from 'atoms/TextField'
import SocialButtons from './SocialButtons'
import Login from './Login'
import SignUp from './SignUp'

type Props = {
  className?: string
}

const Divider = styled(BaseDivider)`
  width: 100%;
`

const LoginSignUp = styled(({ className }: Props) => {
  const [signingUp, setSigningUp] = useState(false)

  const onLogin = () => {
    console.log('logged in')
  }

  return (
    <div className={className}>
      <Logo />
      <T variant="body2">{'Sign in with Social'}</T>
      <SocialButtons />
      <Divider><T variant="body2">{'or'}</T></Divider>
      <TextField fullWidth label="Email" />
      <TextField fullWidth label="Password" />
      {signingUp ? (
        <SignUp
          onSignUp={() => console.log('signed up')}
          onBack={() => setSigningUp(false)}
        />
      ) : (
        <Login
          onLogin={onLogin}
          onSignUp={() => setSigningUp(true)}
        />
      )}
    </div>
  )
})`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  justify-content: center;
  padding: 16px;
`

export default LoginSignUp
