import styled from 'styled-components'
import { useState } from 'react'
import { Typography as T } from '@mui/material'
import Link from 'atoms/Link'
import Checkbox from 'atoms/Checkbox'
import Button from 'atoms/Button'
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

const SignUp = styled(({ className, onLogin }: Props) => {
  const [tocAccepted, setTocAccepted] = useState<boolean>(false)

  const onSignUp = () => {
    console.log('signed up')
  }

  return (
    <Container className={className}>
      <Button variant="outlined" color="primary" fullWidth onClick={onSignUp}>
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
        />
      </Footer>
    </Container>
  )
})`
`

export default SignUp
