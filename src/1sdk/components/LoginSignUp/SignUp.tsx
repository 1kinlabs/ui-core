import styled from 'styled-components'
import { useState, useMemo } from 'react'
import { Typography as T } from '@mui/material'
import { captureException } from '@sentry/nextjs'
import { useAuth } from '1sdk/context/AuthContext'
import Link from 'atoms/Link'
import TextField from 'atoms/TextField'
import Checkbox from 'atoms/Checkbox'
import Button from 'atoms/Button'
import Spinner from 'atoms/Spinner'
import { validateEmail } from 'utils/email'
import Form from './Form'
import Footer from './Footer'

type Props = {
  className?: string
  onLogin: () => void
  onForgot: () => void
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

const ErrorBox = styled.div`
  span {
    display: flex;
  }
  ${Button} {
    text-transform: none;
  }
`

const SignUp = styled(({ className, onLogin, onForgot }: Props) => {
  const [success, setSuccess] = useState<boolean | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [validate, setValidate] = useState<boolean>(false)

  const [tocAccepted, setTocAccepted] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const { registerByEmail, setLoading } = useAuth()

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
      const response = await registerByEmail(
        { email, firstName, lastName },
      ) as unknown as { status: number, message: string }
      if (response.status > 299) {
        setErrorMessage(response.message)
        setSuccess(false)
      } else {
        setSuccess(true)
      }
    } catch (error) {
      console.error(error)
      captureException(error)
      setSuccess(false)
    }
    setLoading(false)
  }

  const getErrorMessage = () => {
    if (errorMessage.includes('already registered')) {
      return (
        <>
          {'This email is already registered. '}
          <Button onClick={onForgot}>{'Did you forget your password?'}</Button>
        </>
      )
    }
    if (errorMessage.includes('invalid email')) {
      return 'Invalid email'
    }
    if (errorMessage.length > 0) {
      return 'An error occurred. Please try again later.'
    }
    return null
  }

  const firstNameError = validate && !firstNameValid
  const lastNameError = validate && !lastNameValid
  const emailError = validate && !emailValid

  if (success) {
    return (
      <Form className={className}>
        <T variant="h4">
          {'You\'re almost there!'}
        </T>
        <T variant="h6">
          {'Check your email to complete your registration.'}
        </T>
        <Button variant="text" color="primary" fullWidth onClick={onLogin}>
          {'Back to Login'}
        </Button>
      </Form>
    )
  }

  return (
    <Form className={className} onSubmit={onSignUp}>
      {errorMessage.length > 0 && (
        <ErrorBox>
          {getErrorMessage()}
        </ErrorBox>
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
    </Form>
  )
})`
  align-items: center;
  ${Spinner} {
    height: 100%;
  }
`

export default SignUp
