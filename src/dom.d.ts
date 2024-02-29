import { Params } from '1sdk/data/request'
import { Env } from 'enums/Env'
import { SupportedTheme, themeEvents } from './theme/types'

interface CustomEvents {
  [themeEvents.change]: CustomEvent<SupportedTheme>
}

type Devkin = {
  resetBackendBaseUrl: () => void;
  setBackendBaseUrl: (env: Env) => void;
  request: (url: string, params?: Params) => Promise;
  setFeatureFlagOverride: (flagToOverride: string, value: boolean) => void;
  deleteFeatureFlagOverride: (flagToRemove: string) => void;
  deleteAllFeatureFlagOverrides: () => void;
}

declare global {
  interface Window {
    addEventListener<K extends keyof CustomEvents>(
      type: K,
      listener: (this: Document, ev: CustomEvents[K]) => void
    ): void
    removeEventListener<K extends keyof CustomEvents>(
      type: K,
      listener: (this: Document, ev: CustomEvents[K]) => void
    ): void
    dispatchEvent<K extends keyof CustomEvents>(ev: CustomEvents[K]): void,
    devkin: Devkin
  }
}
