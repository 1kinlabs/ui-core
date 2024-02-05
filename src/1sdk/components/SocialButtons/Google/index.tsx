import styled from 'styled-components'
import { useGoogleLogin } from '@react-oauth/google'
import { useAuth } from '1sdk/context/AuthContext'
import Button from '../BaseButton'
import GoogleIcon from './Icon'

type Props = {
  className?: string
}

const Google = styled(({ className }: Props) => {
  const { loginByGoogle } = useAuth()

  const onClick = useGoogleLogin({
    onSuccess: loginByGoogle as (response: unknown) => void,
  })

  return (
    <Button className={className} onClick={onClick}>
      <GoogleIcon />
    </Button>
  )
})`
&&& {
  background-color: ${({ theme }) => theme.brand.google};
  &:hover {
    background-color: ${({ theme }) => theme.brand.google};
  }
}
`

export default Google
