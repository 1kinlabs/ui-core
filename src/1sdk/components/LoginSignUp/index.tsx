import { useState } from 'react'
import { styled } from 'theme'
import { Typography as T, Divider as BaseDivider } from '@mui/material'
import Logo from 'components/Logo'
import TextField from 'atoms/TextField'
import Spinner from 'atoms/Spinner'
import { useAuth } from '1sdk/context/AuthContext'
import SocialButtons from '../SocialButtons'
import Login from './Login'
import SignUp from './SignUp'
import Forgot from './Forgot'

type Props = {
  className?: string
}

enum View {
  login,
  signUp,
  forgot,
  reset
}

const Divider = styled(BaseDivider)`
  width: 100%;
`

const LoginSignUp = styled(({ className }: Props) => {
  const [view, setView] = useState<View>(View.login)
  const { loading, emailLoading } = useAuth()

  const renderView = () => {
    switch (view) {
      case View.signUp:
        return (
          <SignUp
            onLogin={() => setView(View.login)}
            onForgot={() => setView(View.forgot)}
          />
        )
      case View.forgot:
        return (
          <Forgot
            onLogin={() => setView(View.login)}
            onSignUp={() => setView(View.signUp)}
          />
        )
      case View.login:
      default:
        return (
          <Login
            onSignUp={() => setView(View.signUp)}
            onForgot={() => setView(View.forgot)}
          />
        )
    }
  }

  const socialText = view === View.signUp ? 'Sign up with Social' : 'Sign in with Social'

  const renderContent = () => (
    <>
      <Logo />
      <T variant="body2">{socialText}</T>
      <SocialButtons />
      <Divider><T variant="body2">{'or'}</T></Divider>
      {renderView()}
    </>
  )

  const isLoading = loading || emailLoading

  return (
    <div className={className}>
      {isLoading ? <Spinner /> : renderContent()}
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
  padding: 32px;

  ${TextField} {
    svg {
      cursor: pointer;
    }
  }
`

export default LoginSignUp
