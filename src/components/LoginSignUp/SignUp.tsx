import styled from 'styled-components'
import { Checkbox, FormControlLabel } from '@mui/material'
import Button from 'atoms/Button'
import Container from './Container'

type Props = {
  className?: string
  onSignUp: () => void
  onBack: () => void
}

const SignUp = styled(({ className, onSignUp, onBack }: Props) => (
  <Container className={className}>
    <FormControlLabel
      label="Accept terms and conditions"
      control={<Checkbox />}
    />
    <Button variant="outlined" color="primary" fullWidth onClick={onSignUp}>
      {'Sign Up'}
    </Button>
    <Button variant="text" color="primary" fullWidth onClick={onBack}>
      {'Back to Login'}
    </Button>
  </Container>
))`
`

export default SignUp
