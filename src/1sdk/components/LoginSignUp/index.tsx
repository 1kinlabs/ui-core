import { useState } from 'react'
import { styled } from 'theme'
import { Typography as T, Divider as BaseDivider } from '@mui/material'
import Logo from 'components/Logo'
import TextField from 'atoms/TextField'
import SocialButtons from '../SocialButtons'
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

const LoginSignUp = styled(({ className }: Props) => {
  const [view, setView] = useState<View>(View.login)

  const renderView = () => {
    switch (view) {
      case View.signUp:
        return (
          <SignUp onLogin={() => setView(View.login)} />
        )
      case View.reset:
        return (
          <Reset
            onLogin={() => setView(View.login)}
            onSignUp={() => setView(View.signUp)}
          />
        )
      case View.login:
      default:
        return (
          <Login
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

  ${TextField} {
    svg {
      cursor: pointer;
    }
  }
`

export default LoginSignUp
