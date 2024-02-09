import { useState } from 'react'
import styled from 'styled-components'
import { Typography as T } from '@mui/material'
import { captureException } from '@sentry/nextjs'
import { forgotPassword } from '1sdk/data/auth'
import { useAuth } from '1sdk/context/AuthContext'
import Button from 'atoms/Button'
import TextField from 'atoms/TextField'
import Spinner from 'atoms/Spinner'
import Form from './Form'
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
}

const Forgot = styled(({
  className, onLogin, onSignUp,
}: Props) => {
  const { setLoading } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [success, setSuccess] = useState<boolean | null>(null)

  const sendResetEmail = async () => {
    if (email.length < 3) return
    setLoading(true)
    try {
      await forgotPassword(email)
      setSuccess(true)
    } catch (e) {
      console.error(e)
      captureException(e)
      setSuccess(false)
    }
    setLoading(false)
  }

  if (success) {
    return (
      <Form className={className}>
        <T variant="h5" align="center">
          {'Check your email for a reset link!'}
        </T>
        <Button variant="text" color="primary" fullWidth onClick={onLogin}>
          {'Back to Login'}
        </Button>
      </Form>
    )
  }

  return (
    <Form className={className} onSubmit={sendResetEmail}>
      <TextField fullWidth label="Email" onChange={setEmail} />
      <Button variant="outlined" color="primary" fullWidth type="submit">
        {'Send Email'}
      </Button>
      <Button variant="text" color="primary" fullWidth onClick={onLogin}>
        {'Back to Login'}
      </Button>
      <Footer>
        <T variant="body2">
          {'Need to create an account? '}
        </T>
        <ResetButton variant="text" onClick={onSignUp}>
          {'Sign Up'}
        </ResetButton>
      </Footer>
    </Form>
  )
})`
  ${Spinner} {
    margin-top: 24px;
    height: auto;
  }
`

export default Forgot
