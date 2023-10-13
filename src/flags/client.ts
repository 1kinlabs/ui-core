// eslint-ignore @typescript-eslint/no-unsafe-assignment
import { useMemo, useEffect } from 'react'
import {
  createUseFlags,
  type InitialFlagState as GenericInitialFlagState,
  UseFlagsOptions,
} from '@happykit/flags/client'
import { createUseFlagBag } from '@happykit/flags/context'
import { useStorage } from 'hooks/useStorage'
import { type AppFlags, config } from './config'

export type InitialFlagState = GenericInitialFlagState<AppFlags>;
export const useFlagBag = createUseFlagBag<AppFlags>()

const parseJSON = (stringToParse : string | null) : AppFlags => {
  try {
    return JSON.parse(stringToParse || '') as AppFlags
  } catch {
    return {}
  }
}

export const useFlags = (params : UseFlagsOptions) : AppFlags => {
  const useHappykit = useMemo(() => createUseFlags<AppFlags>(config), [])

  const [override, setOverride] = useStorage<string>('flags', '')

  const overrideJSON = parseJSON(override)

  const { flags } = useHappykit(params)

  useEffect(() => {
    window.setFeatureFlag = (featureFlags : AppFlags) => setOverride(JSON.stringify(featureFlags) || '')
  }, [])

  return { ...flags, ...overrideJSON } as AppFlags
}
