// eslint-ignore @typescript-eslint/no-unsafe-assignment
import {
  useMemo, useEffect, createContext, useContext, ReactNode,
} from 'react'
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

const FlagContext = createContext<AppFlags>({})
export const useFlags = (): AppFlags => useContext(FlagContext)

const parseJSON = (stringToParse : string | null) : AppFlags => {
  try {
    return JSON.parse(stringToParse || '') as AppFlags
  } catch {
    return {} as AppFlags
  }
}

export function FlagProvider({ happykitParams, children }
: { happykitParams: UseFlagsOptions, children: ReactNode}) {
  const useHappykit = createUseFlags<AppFlags>(config)

  const [override, setOverride] = useStorage<string>('flags', '')

  const overrideJSON = parseJSON(override)

  const { flags } = useHappykit(happykitParams)

  useEffect(() => {
    window.setFeatureFlag = (featureFlags : AppFlags) => setOverride(JSON.stringify(featureFlags) || '')
    window.clearFeatureFlags = () => setOverride('')
  }, [])

  const finalFlags = useMemo(() => ({ ...flags, ...overrideJSON }), [flags, overrideJSON])

  return (
    <FlagContext.Provider value={finalFlags}>
      {children}
    </FlagContext.Provider>
  )
}
