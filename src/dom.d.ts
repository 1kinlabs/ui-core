import { SupportedTheme, themeEvents } from './theme/types'
interface CustomEvents {
  [themeEvents.change]: CustomEvent<SupportedTheme>
}

declare global {
  interface Window {
    addEventListener<K extends keyof CustomEvents>(
      type: K,
      listener: (this: Document, ev: CustomEvents[K]) => void
    ): void
    dispatchEvent<K extends keyof CustomEvents>(ev: CustomEvents[K]): void
  }
}
