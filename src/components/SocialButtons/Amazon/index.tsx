import styled from 'styled-components'
import { captureException } from '@sentry/nextjs'
import { usePromise } from 'hooks/usePromise'
import Button from '../BaseButton'
import AmazonIcon from './Icon'
import SDK from './sdk'

export enum Scopes {
  profile = 'profile',
  sandbox = 'collect:sandbox:all'
}

type Props = {
  className?: string
  scope?: Scopes[]
  onLogin?: (response: unknown) => void
}

const Amazon = styled(({ className, scope = [Scopes.profile], onLogin }: Props) => {
  usePromise(async () => {
    await SDK.load({
      appId: process.env.NEXT_PUBLIC_AMAZON_APP_ID,
      scope,
    })
  }, [])

  const loginWithAmazon = async () => {
    try {
      const response = await SDK.login(scope)
      onLogin?.(response)
    } catch (error) {
      captureException(error)
    }
  }

  return (
    <Button className={className} onClick={loginWithAmazon}>
      <AmazonIcon />
    </Button>
  )
})`
  &&& {
    background-color: ${({ theme }) => theme.brand.amazon};
    &:hover {
      background-color: ${({ theme }) => theme.brand.amazon};
    }
  }
`

export default Amazon
