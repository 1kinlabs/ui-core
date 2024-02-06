import styled from 'styled-components'
import { Typography as T } from '@mui/material'
import Button from 'atoms/Button'
import Container from './Container'
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

const Reset = styled(({
  className, onLogin, onSignUp,
}: Props) => {
  const onReset = () => {
    console.log('reset')
  }

  return (
    <Container className={className}>
      <Button variant="outlined" color="primary" fullWidth onClick={onReset}>
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
    </Container>
  )
})`
  
`

export default Reset
