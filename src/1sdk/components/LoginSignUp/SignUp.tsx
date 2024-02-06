import styled from 'styled-components'
import { useState, useMemo } from 'react'
import { Typography as T } from '@mui/material'
import { captureException } from '@sentry/nextjs'
import { useAuth } from '1sdk/context/AuthContext'
import Link from 'atoms/Link'
import TextField from 'atoms/TextField'
import Checkbox from 'atoms/Checkbox'
import Button from 'atoms/Button'
import { validateEmail } from 'utils/email'
import Container from './Container'
import Footer from './Footer'

type Props = {
  className?: string
  onLogin: () => void
}

function Label() {
  return (
    <T variant="body2">
      {'I accept 1Kin\'s '}
      <Link href="https://1kin.io/tos" target="_blank">{'Terms and Conditions'}</Link>
    </T>
  )
}

const Names = styled.div`
  display: flex;
  gap: 16px;
`

const SignUp = styled(({ className, onLogin }: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean | null>(null)
  const [validate, setValidate] = useState<boolean>(false)

  const [tocAccepted, setTocAccepted] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const { registerByEmail, registerErrorMessage } = useAuth()

  const firstNameValid = firstName.length > 0
  const lastNameValid = lastName.length > 0
  const emailValid = useMemo(() => validateEmail(email), [email])

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValidate(true)
    if (!firstNameValid || !lastNameValid || !emailValid || !tocAccepted) {
      return
    }
    try {
      setLoading(true)
      const response = await registerByEmail({ email, firstName, lastName })
      console.log(response)
      setSuccess(true)
    } catch (error) {
      console.error(error)
      captureException(error)
      setSuccess(false)
    }
    setLoading(false)
  }

  const firstNameError = validate && !firstNameValid
  const lastNameError = validate && !lastNameValid
  const emailError = validate && !emailValid

  return (
    <form onSubmit={onSignUp}>
      <Container className={className}>
        {registerErrorMessage && (
          <T color="error" variant="body2">
            {registerErrorMessage}
          </T>
        )}
        <Names>
          <TextField
            fullWidth
            label="First Name"
            error={firstNameError}
            helperText={firstNameError ? 'First name is required' : ''}
            onChange={setFirstName}
          />
          <TextField
            fullWidth
            label="Last Name"
            onChange={setLastName}
            error={lastNameError}
            helperText={lastNameError ? 'Last name is required' : ''}
          />
        </Names>
        <TextField
          fullWidth
          label="Email"
          onChange={setEmail}
          error={emailError}
          helperText={emailError ? 'Invalid email' : ''}
        />
        <Button variant="outlined" color="primary" fullWidth type="submit">
          {'Sign Up'}
        </Button>
        <Button variant="text" color="primary" fullWidth onClick={onLogin}>
          {'Back to Login'}
        </Button>
        <Footer>
          <Checkbox
            label={<Label />}
            checked={tocAccepted}
            onChange={setTocAccepted}
            required
          />
        </Footer>
      </Container>
    </form>
  )
})`
`

export default SignUp
