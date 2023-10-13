import { SupportedTheme, themeEvents } from './theme/types'
import { AppFlags } from './flags/config'

interface CustomEvents {
  [themeEvents.change]: CustomEvent<SupportedTheme>
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
    dispatchEvent<K extends keyof CustomEvents>(ev: CustomEvents[K]): void
    setFeatureFlag(featureFlags : AppFlags) : void
  }
}
