/* eslint-disable no-console */

'use client'

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
  console.log('--- useFlags ---')
  console.log('localFlagOverrides', localFlagOverrides)
  console.log('flags', flags)
  return {
    ...flags,
    ...localFlagOverrides,
  }
}

export function FlagProvider({
  clientId, user = defaultUser, options, children,
} : Props) {
  const [ldProvider, setLdProvider] = useState<JSX.Element | null>(null)
  console.log('--- FlagProvider ---')

  usePromise(async () => {
    // make sure we fail on prod if we don't have a client id
    const devClientId = process.env.NODE_ENV === 'production' ? '' : '65d3ac07ed1489109567de8d'
    const clientSideID = clientId || process.env.NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_ID || devClientId

    console.log('clientId', clientSideID)
    const LDProvider = await asyncWithLDProvider({
      clientSideID,
      context: {
        kind: 'user',
        key: user.id.toString(),
        ...user,
      },
      options,
    })
    console.log('LDProvider', LDProvider)

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
