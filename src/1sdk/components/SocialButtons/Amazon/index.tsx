import styled from 'styled-components'
import { captureException } from '@sentry/nextjs'
import { usePromise } from 'hooks/usePromise'
import { useAuth } from '1sdk/context/AuthContext'
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
  onLogin?: (response: unknown) => void | Promise<void>
  full?: boolean
  children?: React.ReactNode
}

const Amazon = styled(({
  className,
  scope = [Scopes.profile],
  onLogin,
  full,
  children,
}: Props) => {
  const { amazonLoginSuccess } = useAuth()

  usePromise(async () => {
    await SDK.load({
      appId: process.env.NEXT_PUBLIC_AMAZON_APP_ID,
      scope,
    })
  }, [])

  const onClick = async () => {
    try {
      const response: Record<string, unknown> = await SDK.login(scope) as Record<string, unknown>
      const { profile, token } = SDK.generateUser(response)
      const user = {
        ...profile,
        token,
      }
      await amazonLoginSuccess(user)

      await onLogin?.(response)
    } catch (error) {
      console.error(error)
      captureException(error)
    }
  }

  return (
    <Button className={className} onClick={onClick}>
      <AmazonIcon />
      {children || (full && 'Log in with Amazon')}
    </Button>
  )
})`
  &&& {
    ${({ full }) => full && `
      width: 100%;
    `}
    background-color: ${({ theme }) => theme.brand.amazon};
    &:hover {
      background-color: ${({ theme }) => theme.brand.amazon};
    }
  }
`

export default Amazon
