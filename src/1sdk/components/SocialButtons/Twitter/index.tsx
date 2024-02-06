import styled from 'styled-components'
import TwitterLogin from 'react-twitter-auth'
import { captureException } from '@sentry/nextjs'
import { useAuth } from '1sdk/context/AuthContext'
import { BACKEND_BASE_API_URL } from '1sdk/data/request'
import Button from '../BaseButton'
import TwitterIcon from './Icon'

type Props = {
  className?: string
}

const Twitter = styled(({ className }: Props) => {
  const { loginByTwitter } = useAuth()

  const loginWithTwitter = (response: Response) => {
    response.json().then(loginByTwitter).catch((error) => {
      console.error(error)
      captureException(error)
    })
  }

  return (
    <Button
      className={className}
      component="div"
    >
      <TwitterLogin
        loginUrl={`${BACKEND_BASE_API_URL}/end-users/auth/twitter`}
        /* @ts-expect-error the types on this package are wrong >_> */
        onSuccess={loginWithTwitter}
        onFailure={() => {}}
        requestTokenUrl={`${BACKEND_BASE_API_URL}/end-users/auth/twitter/reverse`}
      >
        <TwitterIcon />
      </TwitterLogin>
    </Button>
  )
})`
&&& {
  padding: 0;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 0;
  }
  background-color: ${({ theme }) => theme.brand.twitter};
  &:hover {
    background-color: ${({ theme }) => theme.brand.twitter};
  }
}
`

export default Twitter
