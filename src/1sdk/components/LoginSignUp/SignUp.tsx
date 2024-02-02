import styled from 'styled-components'
import { Typography as T } from '@mui/material'
import Link from 'atoms/Link'
import Checkbox from 'atoms/Checkbox'
import Button from 'atoms/Button'
import Container from './Container'
import Footer from './Footer'

type Props = {
  className?: string
  onSignUp: () => void
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

const SignUp = styled(({ className, onSignUp, onLogin }: Props) => (
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
        checked={false}
        onChange={() => console.log('checked')}
      />
    </Footer>
  </Container>
))`
`

export default SignUp
