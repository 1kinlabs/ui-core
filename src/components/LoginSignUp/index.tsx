import { useState } from 'react'
import { styled } from 'theme'
import { Typography as T, Divider as BaseDivider } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Logo from 'components/Logo'
import TextField from 'atoms/TextField'
import SocialButtons from 'components/SocialButtons'
import Login from './Login'
import SignUp from './SignUp'
import Reset from './Reset'

type Props = {
  className?: string
}

enum View {
  login,
  signUp,
  reset
}

const Divider = styled(BaseDivider)`
  width: 100%;
`

function PasswordField() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <TextField
      fullWidth
      type={showPassword ? 'text' : 'password'}
      label="Password"
      InputProps={{
        endAdornment: showPassword
          ? <VisibilityOff onClick={() => setShowPassword(false)} />
          : <Visibility onClick={() => setShowPassword(true)} />,
      }}
    />
  )
}

const LoginSignUp = styled(({ className }: Props) => {
  const [view, setView] = useState<View>(View.login)

  const onLogin = () => {
    console.log('logged in')
  }

  const renderView = () => {
    switch (view) {
      case View.signUp:
        return (
          <SignUp
            onSignUp={() => console.log('signed up')}
            onLogin={() => setView(View.login)}
          />
        )
      case View.reset:
        return (
          <Reset
            onReset={() => console.log('reset')}
            onLogin={() => setView(View.login)}
            onSignUp={() => setView(View.signUp)}
          />
        )
      case View.login:
      default:
        return (
          <Login
            onLogin={onLogin}
            onSignUp={() => setView(View.signUp)}
            onReset={() => setView(View.reset)}
          />
        )
    }
  }

  const socialText = view === View.signUp ? 'Sign up with Social' : 'Sign in with Social'

  return (
    <div className={className}>
      <Logo />
      <T variant="body2">{socialText}</T>
      <SocialButtons />
      <Divider><T variant="body2">{'or'}</T></Divider>
      <TextField fullWidth label="Email" />
      {view !== View.reset && <PasswordField />}
      {renderView()}
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
