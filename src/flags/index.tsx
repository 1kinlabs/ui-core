import { useState, ReactNode } from 'react'
import { usePromise } from 'hooks/usePromise'
import { EndUser } from 'types/EndUser'
import {
  asyncWithLDProvider, LDOptions, withLDConsumer, useFlags as useFlagsBase, useLDClient,
} from 'launchdarkly-react-client-sdk'
import { PublicUser } from 'types/PublicUser'
import { getFeatureFlagOverrides } from './utils'

type Props = {
  clientId?: string,
  user?: EndUser | PublicUser,
  options?: LDOptions,
  children: ReactNode
}

const defaultUser = {
  id: 'public',
}

const useFlags = () => {
  const flags = useFlagsBase()
  const localFlagOverrides = getFeatureFlagOverrides()
  return {
    ...flags,
    ...localFlagOverrides,
  }
}

export function FlagProvider({
  clientId, user = defaultUser, options, children,
} : Props) {
  const [ldProvider, setLdProvider] = useState<JSX.Element | null>(null)

  usePromise(async () => {
    const LDProvider = await asyncWithLDProvider({
      clientSideID: clientId || process.env.NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_ID!,
      context: {
        kind: 'user',
        key: user.id.toString(),
        ...user,
      },
      options,
    })

    setLdProvider(<LDProvider>{children}</LDProvider>)
  }, [clientId, user, options, children, process])

  if (!ldProvider) return null

  return ldProvider
}

export {
  withLDConsumer as FlagHOC,
  useFlags,
  useLDClient,
}
