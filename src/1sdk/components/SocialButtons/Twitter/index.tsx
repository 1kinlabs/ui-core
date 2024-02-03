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
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
    >
      <TwitterLogin
        loginUrl={`${BACKEND_BASE_API_URL}/end-users/auth/twitter`}
        /* @ts-expect-error the types on this package are wrong >_> */
        onSuccess={loginWithTwitter}
        onFailure={() => {}}
        requestTokenUrl={`${BACKEND_BASE_API_URL}/end-users/auth/twitter/reverse`}
        style={{ display: 'contents', cursor: 'pointer' }}
      >
        <TwitterIcon />
      </TwitterLogin>
    </Button>
  )
})`
&&& {
  background-color: ${({ theme }) => theme.brand.twitter};
  &:hover {
    background-color: ${({ theme }) => theme.brand.twitter};
  }
}
`

export default Twitter
